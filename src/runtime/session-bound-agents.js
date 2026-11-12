// 后台会话随交互进程结束。这是本项目对原版有意做的改动，见 docs/dev.md#后台会话随退出结束。
//
// 原版中，按 ← 进入 agents 视图时当前会话被转给后台守护进程名下的 worker 进程，agents 视图里新建的会话同样由守护进程运行；
// 前台程序退出后，守护进程与这些 worker 继续存活，下次启动时仍然列出并可接入。worker 的凭据取自守护进程的环境：
// 前台程序退出后修改环境变量（如 ANTHROPIC_AUTH_TOKEN）再启动，这些会话仍使用原来的值。
//
// 这里把后台会话的归属写入它的任务目录（owner.json）：派发它的交互进程的 pid 与启动时间。交互进程退出时结束归属于它的会话，
// 并删除其任务状态；会话记录（transcript）不属于任务状态，仍然保留，之后可用 --continue 作为普通会话接续。
// 归属写在磁盘上而不是进程内存中，因此：
//   - 后台会话自己派发的会话（在其中执行 /fork）沿用该会话的归属，随同一个交互进程结束；
//   - 交互进程以替换进程映像的方式重新启动自身时，pid 与启动时间不变，归属仍然成立；
//   - 交互进程未执行退出流程就结束（被强制终止、崩溃）时，遗留的会话在下一次启动时回收。
// 用户明确要求转入后台后离开的操作（命令行的 --bg、/background、退出对话框中的 "Move to background and exit"）
// 派发的会话没有归属，进程退出后继续运行；重新启动已有会话的 worker 不改变它的归属。
//
// 任务目录的位置、删除任务、列出任务与守护进程的 RPC 都在生成源码中，名字在各系统中不同，由调用处以 host 传入。
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

/** 归属文件名，位于任务目录中。原版只读写其中的 state.json 等已知文件，删除任务时整个目录一并删除 */
const OWNER_FILE = "owner.json";

/** worker 退出时写入任务目录的交接清单：其中的 shells 是会话遗留的后台命令（workflows/adopt-exit-handoff.js「exit handoff」） */
const HANDOFF_FILE = "adopt.json";

/** 结束后台会话的时限（毫秒）。超过时不再等待，程序继续退出；未完成的部分由下一次启动时的回收处理 */
const END_TIMEOUT_MS = 8000;

/**
 * 等待 worker 写出交接清单的时限（毫秒）。worker 只在有遗留的后台命令时写出清单，没有时无从得知，只能等到时限为止，
 * 因此取较短的值：实测 worker 在结束后约 130 毫秒写出。每次退出因此多用这段时间。
 */
const HANDOFF_WAIT_MS = 400;

/**
 * 后台会话里的退出操作（两次 Ctrl+C、/exit）发给接入方的分离消息。原版中接入方收到分离请求后回到 agents 视图；
 * 接入方是本项目的 agents 视图时，见到这条消息即退出整个程序；是本项目的 `attach` 命令时，显示这条消息后结束，不转入 agents 视图。
 * 只用 ASCII 字符：消息经带内转义序列按字节传给接入方的终端。
 */
export const EXIT_DETACH_MESSAGE = "Detached: exit was requested in the session. A session started with --bg or /background keeps running.";

/** 分离消息是否表示退出整个程序 */
export function isExitDetach(msg) {
  return msg === EXIT_DETACH_MESSAGE;
}

/**
 * 进程的启动时间，取不到（进程不存在）时为 undefined。与 pid 一起标识一个进程：pid 会被系统重复使用。
 * 取 ps 的 lstart 并固定按 UTC、C 语言环境输出，同一个进程在任何调用方得到的文本都相同
 */
export function processStart(pid) {
  try {
    const r = spawnSync("ps", ["-o", "lstart=", "-p", String(pid)], { env: { ...process.env, TZ: "UTC", LC_ALL: "C" }, encoding: "utf8" });
    const text = r.status === 0 ? r.stdout.trim() : "";
    return text === "" ? undefined : text;
  } catch {
    return undefined;
  }
}

function parseOwner(text) {
  try {
    const o = JSON.parse(text);
    const valid = Number.isInteger(o?.pid) && o.pid > 0 && typeof o.start === "string" && o.start !== "" && typeof o.host === "string";
    return valid ? { pid: o.pid, start: o.start, host: o.host } : null;
  } catch {
    return null;
  }
}

/** 本进程是否为后台会话的 worker：守护进程在它的环境中给出任务目录 */
const workerJobDir = () => process.env.CLAUDE_JOB_DIR || undefined;

let self;
/**
 * 本进程派发的会话应记的归属 { pid, start, host }，为 null 时不记归属。
 *   - 本进程是后台会话的 worker：沿用它自己那个任务的归属，该任务没有归属时为 null。
 *     worker 的环境来自守护进程而不是派发它的交互进程，归属因此从任务目录读取；
 *   - 否则为本进程自身。取不到启动时间时为 null。
 * host 为主机名：配置目录由多台机器或容器共用时，其他机器上的进程无法在本机判断是否存活，回收时不处理它们的会话。
 */
export function sessionOwner() {
  const jobDir = workerJobDir();
  if (jobDir !== undefined) return readOwner(jobDir);
  if (self !== undefined) return self;
  const start = processStart(process.pid);
  return (self = start === undefined ? null : { pid: process.pid, start, host: os.hostname() });
}

/** 归属所指的进程是否仍在运行。其他主机上的进程无法判断，视为仍在运行 */
export function ownerAlive(owner) {
  return owner.host !== os.hostname() || processStart(owner.pid) === owner.start;
}

const same = (a, b) => a.pid === b.pid && a.start === b.start && a.host === b.host;
const ownerFile = (jobDir) => path.join(jobDir, OWNER_FILE);

/** 任务目录中记录的归属，没有或无法解析时为 null */
export function readOwner(jobDir) {
  try {
    return parseOwner(fs.readFileSync(ownerFile(jobDir), "utf8"));
  } catch {
    return null;
  }
}

/**
 * 在派发之前写入归属。只对新派发调用：重新启动已有任务的 worker 时不调用，该任务原有的归属（或没有归属）保持不变。
 * 写在派发之前：派发尚未完成时交互进程退出，退出流程仍能按归属找到它。
 */
export function markOwned(jobDir) {
  const owner = sessionOwner();
  if (owner === null) return;
  try {
    fs.mkdirSync(jobDir, { recursive: true });
    fs.writeFileSync(ownerFile(jobDir), JSON.stringify(owner), { mode: 0o600 });
  } catch {
    // 写不进去时该会话没有归属，按原版的方式保留
  }
}

/** 取消归属：该会话由用户明确转入后台，进程退出后继续运行 */
export function disown(jobDir) {
  try {
    fs.rmSync(ownerFile(jobDir), { force: true });
  } catch {
    // 无法删除时保持原状
  }
}

/** 任务目录根下，归属满足 match 的任务 id */
function ownedJobs(jobsRoot, match) {
  let names;
  try {
    names = fs.readdirSync(jobsRoot);
  } catch {
    return [];
  }
  const owned = (name) => {
    const owner = readOwner(path.join(jobsRoot, name));
    return owner !== null && match(owner);
  };
  return names.filter((name) => /^[0-9a-f]{8}$/.test(name) && owned(name));
}

/** 归属与本进程相同的任务 id */
export function ownedBackgroundSessions(jobsRoot) {
  const owner = sessionOwner();
  return owner === null ? [] : ownedJobs(jobsRoot, (o) => same(o, owner));
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** 结束一条后台命令。命令在自己的进程组中运行，连同其子进程一并结束；不是进程组组长时只结束该进程 */
function killShell(pid) {
  for (const target of [-pid, pid]) {
    try {
      process.kill(target, "SIGTERM");
      return;
    } catch {
      // 换下一个目标
    }
  }
}

/** 交接清单中登记的后台命令；清单尚未写出时为 null */
function handoffShells(jobDir) {
  try {
    const shells = JSON.parse(fs.readFileSync(path.join(jobDir, HANDOFF_FILE), "utf8")).shells;
    return Array.isArray(shells) ? shells : [];
  } catch {
    return null;
  }
}

/**
 * 结束会话遗留的后台命令。worker 被结束时把仍在运行的后台命令写入交接清单，留给该会话下一次启动的 worker 接管；
 * 会话随即被删除，不会再有 worker 接管，这些命令须在此结束。原版的删除在 worker 写出清单之前检查它，命令因此遗留。
 * 只结束仍然存在的进程；pid 由 worker 在退出时刚写出，被系统重复使用的可能性可以忽略。
 */
export async function killLeftoverShells(jobDir, waitMs = HANDOFF_WAIT_MS) {
  let shells = handoffShells(jobDir);
  for (const end = Date.now() + waitMs; shells === null && Date.now() < end && fs.existsSync(jobDir); shells = handoffShells(jobDir)) await sleep(50);
  for (const shell of shells ?? []) {
    if (Number.isInteger(shell?.pid) && shell.pid > 1 && processStart(shell.pid) !== undefined) killShell(shell.pid);
  }
}

/**
 * 结束一批任务。每个任务：先请守护进程结束 worker，等它写出交接清单并结束其中的后台命令，再调用原版删除任务的函数。
 * 之后守护进程名下没有其他仍在运行的会话、也没有其他前台程序连着它时，请它让出（yield）：临时启动的守护进程立即结束，
 * 下次需要时以当时的环境重新启动；注册为系统服务的守护进程不响应这一请求。
 * host 的函数抛错或迟迟不返回都不向调用方抛错。
 */
async function end(ids, host, timeoutMs) {
  if (ids.length === 0) return;
  const ignore = () => undefined;
  const call = (fn, fallback) => Promise.resolve().then(fn).catch(() => fallback);
  const endOne = async (id) => {
    const jobDir = path.join(host.jobsRoot(), id);
    await call(() => host.stop(id));
    await killLeftoverShells(jobDir, host.handoffWaitMs).catch(ignore);
    await call(() => host.remove(id));
  };
  const work = (async () => {
    await Promise.all(ids.map((id) => endOne(id).catch(ignore)));
    const [rest, others] = await Promise.all([call(() => host.list(), null), call(() => host.otherClients(), null)]);
    if (rest !== null && others === 0 && rest.every((job) => host.settled(job.state))) await call(() => host.yieldDaemon());
  })().catch(ignore);
  let timer;
  await Promise.race([work, new Promise((resolve) => (timer = setTimeout(resolve, timeoutMs)))]);
  clearTimeout(timer);
}

/**
 * 交互进程退出时调用：结束归属于它的全部后台会话。本进程是 worker 时不做任何事：归属是派发它的交互进程，由后者处理。
 * @param host 缺省为已登记的 host。{ jobsRoot: () => string, stop: (id) => Promise, remove: (id) => Promise, list: () => Promise<{ state }[]>,
 *   settled: (state) => boolean, otherClients: () => Promise<number | null>, yieldDaemon: () => Promise }
 *   stop 结束 worker 进程并等待确认；otherClients 为除本进程外仍连着守护进程的前台程序数，取不到时为 null；
 *   可选的 handoffWaitMs 为等待 worker 写出交接清单的时限
 */
export async function endOwnedBackgroundSessions(host = registered, timeoutMs = END_TIMEOUT_MS) {
  if (host === undefined || workerJobDir() !== undefined) return;
  const owner = sessionOwner();
  if (owner === null) return;
  let ids;
  try {
    ids = ownedJobs(host.jobsRoot(), (o) => same(o, owner));
  } catch {
    return;
  }
  await end(ids, host, timeoutMs);
}

/**
 * 交互进程启动时调用：回收归属进程已不存在的后台会话。交互进程未执行退出流程就结束（被强制终止、崩溃、
 * 重新启动为子进程后由父进程直接退出），或退出流程未在时限内完成时，会留下这样的会话。
 * 不向调用方抛错；调用方不等待它完成。
 */
export async function reapOrphanedBackgroundSessions(host = registered, timeoutMs = END_TIMEOUT_MS) {
  if (host === undefined || workerJobDir() !== undefined) return;
  let ids;
  try {
    ids = ownedJobs(host.jobsRoot(), (o) => !ownerAlive(o));
  } catch {
    return;
  }
  await end(ids, host, timeoutMs);
}

let registered;
/**
 * 登记 host：由生成源码中定义派发与删除任务的模块在加载时调用。退出流程所在的模块被它依赖，不能反过来引用它，
 * 因此经这里取得。
 */
export function registerSessionHost(host) {
  registered = host;
}

/** 已登记的 host；派发模块尚未加载时为 undefined（此时本进程没有派发过后台会话） */
export function sessionHost() {
  return registered;
}
