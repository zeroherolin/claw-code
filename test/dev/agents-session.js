// dev 分支的测试共用：按屏幕内容驱动交互界面直到程序自行退出，并检查、清理由守护进程启动的后台进程。
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { Terminal } from "@xterm/headless";

/**
 * 在伪终端中运行交互式 CLI，按步骤驱动：每步先等屏幕上出现 wait（正则），再停顿 pause 毫秒，然后发送 send。
 * 以屏幕内容为准而不是固定时刻：守护进程与后台会话的启动时间随机器负载变化。
 * 步骤走完后等待程序自行退出，最多 exitWait 毫秒；仍未退出时强制结束。
 * @param steps [{ wait?: RegExp, pause?: number, send?: string }, ...]
 * @returns {{ exitCode: number | null, screens: string[], output: string, stuck?: RegExp }}
 *   exitCode 为 null 表示程序没有自行退出；screens 为各步发送按键之前的屏幕文本，最后一项为结束时的屏幕；
 *   output 为写到终端的全部字节（latin1 字符串），用于检查转义序列；stuck 为等待超时的那一步的 wait（之后的步骤不再执行）
 */
export async function driveSession(cmd, { cwd, env, steps, cols = 110, rows = 32, waitMs = 30_000, exitWait = 20_000 }) {
  const chunks = [];
  // 输出逐块写入同一个终端：每次轮询只读当前屏幕，不重放此前的全部输出
  const term = new Terminal({ cols, rows, allowProposedApi: true, scrollback: 0 });
  let fed = Promise.resolve();
  const onData = (_t, d) => {
    const chunk = Buffer.from(d);
    chunks.push(chunk);
    fed = fed.then(() => new Promise((resolve) => term.write(chunk, resolve)));
  };
  const proc = Bun.spawn(cmd, { cwd, env, terminal: { cols, rows, data: onData } });
  const state = { exitCode: null, exited: false };
  proc.exited.then((code) => Object.assign(state, { exitCode: code, exited: true }));
  const screen = async () => {
    await fed;
    const buffer = term.buffer.active;
    return Array.from({ length: rows }, (_, y) => buffer.getLine(y)?.translateToString(true) ?? "").join("\n");
  };
  const appears = async (pattern) => {
    for (const end = performance.now() + waitMs; performance.now() < end && !state.exited; await Bun.sleep(200)) {
      if (pattern.test(await screen())) return true;
    }
    return false;
  };
  const screens = [];
  // 依次执行各步；返回等待超时的那一步的 wait
  const run = async () => {
    for (const step of steps) {
      if (state.exited) return;
      if (step.wait && !(await appears(step.wait))) return step.wait;
      if (step.pause) await Bun.sleep(step.pause);
      screens.push(await screen());
      if (step.send && !state.exited) proc.terminal.write(step.send);
    }
  };
  let stuck;
  try {
    stuck = await run();
    for (const end = performance.now() + exitWait; !state.exited && performance.now() < end; ) await Bun.sleep(100);
    screens.push(await screen());
  } finally {
    // 中途抛错时同样结束子进程：它的命令行不带 HOME 路径，killBackgroundProcesses 找不到它
    if (!state.exited) proc.kill("SIGKILL");
    await proc.exited;
    term.dispose();
  }
  // 被强制结束的不算自行退出
  const exitCode = proc.signalCode === null ? state.exitCode : null;
  return { exitCode, screens, output: Buffer.concat(chunks).toString("latin1"), ...(stuck && { stuck }) };
}

/** 该隔离 HOME 的守护进程套接字目录：/tmp/cc-daemon-<uid>/<配置目录路径的 sha256 前 8 位>（fs/attach-journal.js「cc-daemon-」） */
function socketDir(home) {
  const hash = createHash("sha256").update(path.join(home, ".claude")).digest("hex").slice(0, 8);
  return path.join("/tmp", `cc-daemon-${process.getuid()}`, hash);
}

/** 当前的进程列表 [{ pid, command }]，不含测试进程自身 */
function psRows() {
  const lines = Bun.spawnSync(["ps", "-axo", "pid=,command="]).stdout.toString().split("\n");
  const rows = lines.map((line) => line.trim().match(/^(\d+)\s+(.*)$/)).filter(Boolean).map((m) => ({ pid: Number(m[1]), command: m[2] }));
  return rows.filter((p) => p.pid !== process.pid);
}

/**
 * 属于该隔离 HOME 的后台进程：守护进程、后台会话的 worker 与伪终端宿主、备用进程。
 * 守护进程与 worker 的命令行带有 HOME 下的路径，其余进程带有套接字目录。返回 [{ pid, command }]
 */
export function backgroundProcesses(home) {
  const sock = socketDir(home) + path.sep;
  return psRows().filter((p) => p.command.includes(sock) || p.command.includes(home));
}

/** 等待后台进程全部结束，最多 timeoutMs 毫秒；返回届时仍然存在的进程 */
export async function remainingBackgroundProcesses(home, timeoutMs = 15_000) {
  for (const end = performance.now() + timeoutMs; performance.now() < end; await Bun.sleep(300)) {
    if (backgroundProcesses(home).length === 0) return [];
  }
  return backgroundProcesses(home);
}

function kill(pid, signal) {
  try {
    process.kill(pid, signal);
  } catch {
    // 进程已经结束
  }
}

/** 结束该隔离 HOME 的全部后台进程与长时间命令，并删除它的套接字目录。在删除 HOME 之前调用：后台进程仍在向其中写入 */
export async function killBackgroundProcesses(home) {
  for (const signal of ["SIGTERM", "SIGKILL", "SIGKILL"]) {
    const rest = backgroundProcesses(home);
    if (rest.length === 0) break;
    for (const { pid } of rest) kill(pid, signal);
    await Bun.sleep(500);
  }
  for (const pid of longCommandPids(home)) kill(pid, "SIGKILL");
  fs.rmSync(socketDir(home), { recursive: true, force: true });
}

/** 任务目录中的后台会话 id */
export function jobIds(home) {
  const dir = path.join(home, ".claude/jobs");
  return fs.existsSync(dir) ? fs.readdirSync(dir).filter((name) => /^[0-9a-f]{8}$/.test(name)).sort() : [];
}

/** 该隔离 HOME 专用的 sleep 时长（秒）：由 HOME 路径算出，约一天。同一台机器上同时运行的其他测试得到不同的值 */
function longSeconds(home) {
  return 80_000 + (createHash("sha256").update(home).digest().readUInt32BE(0) % 6_000_000) / 1000;
}

/**
 * 测试让模型在后台运行的长时间命令。只读的简单命令，自动模式下直接执行，不经分类器。
 * 时长由 HOME 决定，查找与清理因此只涉及本次测试启动的进程。
 */
export function longCommand(home) {
  return `sleep ${longSeconds(home)}`;
}

/** 该隔离 HOME 的长时间命令的进程号 */
export function longCommandPids(home) {
  const command = longCommand(home);
  return psRows().filter((p) => p.command === command).map((p) => p.pid).sort();
}
