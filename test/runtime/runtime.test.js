// 运行时层：内嵌工具分发、Bun.ant 补丁、资源定位。
import { describe, expect, test } from "bun:test";
import { spawnSync } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";
import { adoptUploadIdentity, isDeliveredResponse, mcpClientSessionId, newUploadIdentity, promptIdFor, turnPositionFor, uploadIdentityFor } from "../../src/runtime/upload-identity.js";
import { SYSTEMS } from "../../src/runtime/platforms.js";

const ROOT = path.resolve(import.meta.dir, "../..");
const RUNTIME = path.join(ROOT, "src/runtime");

// 写一个只调用 dispatchEmbeddedTool() 的小入口，以指定 argv0 启动
function dispatch(argv0, args, env = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "claw-dispatch-"));
  const entry = path.join(dir, "entry.js");
  fs.writeFileSync(entry, `import { dispatchEmbeddedTool } from ${JSON.stringify(path.join(RUNTIME, "embedded-tools.js"))};
dispatchEmbeddedTool();
console.log("NOT_DISPATCHED");\n`);
  try {
    return spawnSync(process.execPath, [entry, ...args], { argv0, encoding: "utf8", env: { ...process.env, ...env }, cwd: dir });
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

// 造一个只含指定工具的 PATH 目录（用 shell 脚本冒充，打印收到的参数）；scripts 可替换某个工具的脚本体
function fakePath(tools, scripts = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "claw-path-"));
  for (const t of tools) {
    const p = path.join(dir, t);
    fs.writeFileSync(p, `#!/bin/sh\n${scripts[t] ?? ""}\necho "${t}:$*"\n`);
    fs.chmodSync(p, 0o755);
  }
  return dir;
}

// Bash 快照中的 find 函数固定传入的选项，以及一段典型的用户参数
const FIND_ARGS = ["-S", "dfs", "-regextype", "findutils-default", ".", "-name", "*.txt"];
// 旧版 bfs（3.3 之前）：不认识 -regextype findutils-default
const OLD_BFS = 'case "$*" in *findutils-default*) echo "bfs: error: unknown regex type" >&2; exit 1;; esac';

describe("embedded-tools", () => {
  test("argv0 不是内嵌工具名时不做任何事", () => {
    const r = dispatch("claude", ["--x"]);
    expect(r.stdout.trim()).toBe("NOT_DISPATCHED");
  });

  test("rg → 系统 rg，参数原样透传", () => {
    const bin = fakePath(["rg"]);
    const r = dispatch("rg", ["-n", "needle", "."], { PATH: bin });
    expect(r.stdout.trim()).toBe("rg:-n needle .");
    expect(r.status).toBe(0);
  });

  test("系统 bfs 接受固定选项时使用它，参数原样透传", () => {
    const r = dispatch("bfs", FIND_ARGS, { PATH: fakePath(["bfs", "find"]) });
    expect(r.stdout.trim()).toBe(`bfs:${FIND_ARGS.join(" ")}`);
  });

  test("bfs 不存在时回退 find，并去掉 -S 与 -regextype findutils-default（GNU find 的默认值）", () => {
    const r = dispatch("bfs", FIND_ARGS, { PATH: fakePath(["find"]) });
    expect(r.stdout.trim()).toBe("find:. -name *.txt");
  });

  test("系统 bfs 版本过旧时同样回退 find", () => {
    const r = dispatch("bfs", FIND_ARGS, { PATH: fakePath(["bfs", "find"], { bfs: OLD_BFS }) });
    expect(r.stdout.trim()).toBe("find:. -name *.txt");
  });

  test("系统 bfs 版本过旧且没有 find 时，提示需要的版本并以 127 退出", () => {
    const r = dispatch("bfs", FIND_ARGS, { PATH: fakePath(["bfs"], { bfs: OLD_BFS }) });
    expect(r.status).toBe(127);
    expect(r.stderr).toContain("is too old (bfs 3.3 or later is required)");
  });

  test("ugrep 不存在时回退 grep，并去掉 ugrep 专有参数", () => {
    const bin = fakePath(["grep"]);
    const r = dispatch("ugrep", ["-G", "--hidden", "-rn", "needle", "."], { PATH: bin });
    expect(r.stdout.trim()).toBe("grep:-rn needle .");
  });

  test("系统里找不到任何候选时以 127 退出", () => {
    const r = dispatch("rg", ["x"], { PATH: fakePath([]) });
    expect(r.status).toBe(127);
    expect(r.stderr).toContain("rg: not found");
  });
});

describe.skipIf(process.platform !== "linux")("set-dumpable（Linux）", () => {
  test("setDumpable(false) 使进程不可转储，setDumpable(true) 恢复；用 PR_GET_DUMPABLE 读回确认", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "claw-dumpable-"));
    const entry = path.join(dir, "entry.js");
    fs.writeFileSync(entry, `import { setDumpable } from ${JSON.stringify(path.join(RUNTIME, "set-dumpable.js"))};
import { dlopen, FFIType } from "bun:ffi";
const { prctl } = dlopen("libc.so.6", { prctl: { args: [FFIType.i32, FFIType.u64, FFIType.u64, FFIType.u64, FFIType.u64], returns: FFIType.i32 } }).symbols;
const get = () => prctl(3, 0, 0, 0, 0); // PR_GET_DUMPABLE
console.log(JSON.stringify([setDumpable(false), get(), setDumpable(true), get()]));\n`);
    try {
      const r = spawnSync(process.execPath, [entry], { encoding: "utf8", cwd: dir });
      expect(JSON.parse(r.stdout)).toEqual([true, 0, true, 1]);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe("bun-ant", () => {
  test("安装 Bun.ant.CellSegmenter，且不覆盖已有的 Bun.ant 成员", async () => {
    const { installBunAnt } = await import("../../src/runtime/bun-ant.js");
    const { CellSegmenter } = await import("../../src/runtime/cell-segmenter.js");
    const had = Object.getOwnPropertyDescriptor(Bun, "ant");
    try {
      const marker = () => "kept";
      Object.defineProperty(Bun, "ant", { value: { ttyName: marker }, configurable: true, writable: true });
      installBunAnt();
      expect(Bun.ant.CellSegmenter).toBe(CellSegmenter);
      expect(Bun.ant.ttyName).toBe(marker);
      expect(typeof Bun.ant.setDumpable).toBe(process.platform === "linux" ? "function" : "undefined");
    } finally {
      if (had) Object.defineProperty(Bun, "ant", had);
      else delete Bun.ant;
    }
  });
});

describe("assets", () => {
  test("开发模式下资源根为 <项目>/assets，源码根为 <项目>/src", async () => {
    const { __asset_path, __asset_src, __asset_text } = await import("../../src/runtime/assets.js");
    expect(__asset_path("INDEX.json")).toBe(path.join(ROOT, "assets/INDEX.json"));
    expect(__asset_src("linux/cli.js")).toBe(path.join(ROOT, "src/linux/cli.js"));
    expect(Array.isArray(JSON.parse(__asset_text("INDEX.json")))).toBe(true);
  });

  test("原生模块取当前平台的 assets/native/<系统>-<架构>/", async () => {
    const { __asset_native } = await import("../../src/runtime/assets.js");
    expect(__asset_native("audio-capture.node")).toBe(path.join(ROOT, `assets/native/${process.platform}-${process.arch}/audio-capture.node`));
    expect(fs.existsSync(__asset_native("audio-capture.node"))).toBe(true);
  });
});

describe("pinned-env", () => {
  // 在子进程里调用 pinEnvironment()，以上海时区和试图打开遥测的环境启动，检查固定值与锁定
  function pinned(script, env = {}) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "claw-pinned-"));
    const entry = path.join(dir, "entry.js");
    fs.writeFileSync(entry, `import { pinEnvironment } from ${JSON.stringify(path.join(RUNTIME, "pinned-env.js"))};
pinEnvironment();
${script}\n`);
    try {
      const r = spawnSync(process.execPath, [entry], { encoding: "utf8", cwd: dir, env: { PATH: process.env.PATH, TZ: "Asia/Shanghai", ...env } });
      return JSON.parse(r.stdout);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  }
  const TELEMETRY_ON = { CLAUDE_CODE_ENABLE_TELEMETRY: "1", ENABLE_BETA_TRACING_DETAILED: "1", DISABLE_TELEMETRY: "", CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "" };

  test("时区为美国太平洋时间；遥测开关为固定值", () => {
    const r = pinned(`console.log(JSON.stringify({ intl: Intl.DateTimeFormat().resolvedOptions().timeZone, env: { ...process.env } }));`, TELEMETRY_ON);
    expect(r.intl).toBe("America/Los_Angeles");
    expect(r.env).toMatchObject({ TZ: "America/Los_Angeles", DISABLE_TELEMETRY: "1", DO_NOT_TRACK: "1", DISABLE_ERROR_REPORTING: "1", CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1" });
    expect(r.env.CLAUDE_CODE_ENABLE_TELEMETRY).toBeUndefined();
    expect(r.env.ENABLE_BETA_TRACING_DETAILED).toBeUndefined();
  });

  test("运行期赋值、Object.assign、delete 都改不动固定的键，其他键照常可写", () => {
    const r = pinned(`process.env.TZ = "Asia/Shanghai";
Object.assign(process.env, { DISABLE_TELEMETRY: "", CLAUDE_CODE_ENABLE_TELEMETRY: "1", OTHER: "x" });
delete process.env.DO_NOT_TRACK;
console.log(JSON.stringify({ intl: Intl.DateTimeFormat().resolvedOptions().timeZone, env: { ...process.env } }));`);
    expect(r.intl).toBe("America/Los_Angeles");
    expect(r.env).toMatchObject({ TZ: "America/Los_Angeles", DISABLE_TELEMETRY: "1", DO_NOT_TRACK: "1", OTHER: "x" });
    expect(r.env.CLAUDE_CODE_ENABLE_TELEMETRY).toBeUndefined();
  });

  test("子进程带上固定的 TZ：Bun.spawnSync、node:child_process，以及调用方显式给出的 env；ps 的 TZ=UTC 保留", () => {
    const r = pinned(`import cp from "node:child_process";
const sh = ["sh", "-c", "echo $TZ"];
console.log(JSON.stringify({
  bun: Bun.spawnSync(sh).stdout.toString().trim(),
  node: cp.execFileSync("sh", ["-c", "echo $TZ"]).toString().trim(),
  explicit: Bun.spawnSync(sh, { env: { PATH: process.env.PATH, TZ: "Asia/Shanghai" } }).stdout.toString().trim(),
  ps: Bun.spawnSync(["ps", "-o", "comm=", "-p", String(process.pid)], { env: { PATH: process.env.PATH, TZ: "UTC" } }).exitCode,
  psEnv: Bun.spawnSync({ cmd: ["sh", "-c", "echo $TZ"], env: { PATH: process.env.PATH, TZ: "UTC" } }).stdout.toString().trim(),
}));`);
    expect(r).toEqual({ bun: "America/Los_Angeles", node: "America/Los_Angeles", explicit: "America/Los_Angeles", ps: 0, psEnv: "America/Los_Angeles" });
  });

  // 子进程继承语义与原版一致：Bun.spawn 不传 env 时只拿到启动时的环境，node:child_process 拿到当前的 process.env
  test("子进程环境的继承语义不变：只多了固定的 TZ", () => {
    const script = `import cp from "node:child_process";
process.env.RUNTIME_WRITTEN = "yes";
const sh = ["sh", "-c", "echo [$RUNTIME_WRITTEN][$STARTUP_VAR][$TZ]"];
console.log(JSON.stringify({
  bunNoEnv: Bun.spawnSync(sh).stdout.toString().trim(),
  nodeNoEnv: cp.execFileSync("sh", sh.slice(1)).toString().trim(),
  explicit: Bun.spawnSync(sh, { env: { ...process.env, RUNTIME_WRITTEN: "explicit" } }).stdout.toString().trim(),
}));`;
    const plain = JSON.parse(spawnSync(process.execPath, ["-e", script.replace(/^/, "")], { encoding: "utf8", env: { PATH: process.env.PATH, STARTUP_VAR: "s", TZ: "Asia/Shanghai" } }).stdout);
    const r = pinned(script, { STARTUP_VAR: "s" });
    expect(plain).toEqual({ bunNoEnv: "[][s][Asia/Shanghai]", nodeNoEnv: "[yes][s][Asia/Shanghai]", explicit: "[explicit][s][Asia/Shanghai]" });
    expect(r).toEqual({ bunNoEnv: "[][s][America/Los_Angeles]", nodeNoEnv: "[yes][s][America/Los_Angeles]", explicit: "[explicit][s][America/Los_Angeles]" });
  });

  // Worker 有自己的 process.env：不固定的话，用户设的时区和遥测开关在 Worker 里仍然生效
  test("Worker 里同样固定：process.env、Intl、子进程，Worker 里的赋值也被忽略", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "claw-pinned-w-"));
    fs.writeFileSync(path.join(dir, "child.mjs"), `import wt from "node:worker_threads";
postMessage({
  env: { TZ: process.env.TZ, DISABLE_TELEMETRY: process.env.DISABLE_TELEMETRY, OTEL: process.env.CLAUDE_CODE_ENABLE_TELEMETRY ?? null, STARTUP_VAR: process.env.STARTUP_VAR },
  intl: Intl.DateTimeFormat().resolvedOptions().timeZone,
  child: Bun.spawnSync(["sh", "-c", "echo $TZ"]).stdout.toString().trim(),
  setIgnored: (process.env.TZ = "Asia/Tokyo", process.env.TZ),
  workerData: wt.workerData ?? null,
});\n`);
    try {
      const url = JSON.stringify("file://" + path.join(dir, "child.mjs"));
      const ask = (opts) => pinned(`import wt from "node:worker_threads";
const run = (W, opts) => new Promise((res) => { const w = new W(new URL(${url}), opts); typeof w.on === "function" ? w.on("message", (m) => (res(m), w.terminate())) : (w.onmessage = (e) => (res(e.data), w.terminate())); });
console.log(JSON.stringify(await run(${opts.ctor}, ${opts.options})));
process.exit(0);`, { ...TELEMETRY_ON, STARTUP_VAR: "s" });
      for (const ctor of ["Worker", "(await import('node:module')).createRequire('/')('worker_threads').Worker"]) {
        const r = ask({ ctor, options: "{ workerData: { k: 1 } }" });
        expect(r.env).toEqual({ TZ: "America/Los_Angeles", DISABLE_TELEMETRY: "1", OTEL: null, STARTUP_VAR: "s" });
        expect(r.intl).toBe("America/Los_Angeles");
        expect(r.child).toBe("America/Los_Angeles");
        expect(r.setIgnored).toBe("America/Los_Angeles");
        expect(r.workerData).toEqual({ k: 1 }); // 调用方的选项原样保留
      }
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

});

describe("memory-guard", () => {
  // 在一次性目录里搭一个记忆目录；host 模拟生成代码里 ba() / ke() 的返回
  async function setup() {
    const { memoryReadGuard, isMemoryPath, containsMemoryPath, commandMentionsMemory } = await import("../../src/runtime/memory-guard.js");
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "claw-memguard-"));
    const home = path.join(root, "home"), work = path.join(root, "work");
    const mem = path.join(home, ".claude/projects/-proj/memory");
    fs.mkdirSync(mem, { recursive: true }); fs.mkdirSync(work, { recursive: true });
    fs.mkdirSync(path.join(home, ".claude/agent-memory/foo"), { recursive: true });
    fs.writeFileSync(path.join(mem, "MEMORY.md"), "x"); fs.writeFileSync(path.join(work, "a.txt"), "x");
    fs.symlinkSync(mem, path.join(work, "link"));
    const saved = { HOME: process.env.HOME, CLAUDE_CONFIG_DIR: process.env.CLAUDE_CONFIG_DIR };
    process.env.HOME = home; process.env.CLAUDE_CONFIG_DIR = path.join(home, ".claude");
    const host = { autoMemDir: mem, cwd: () => work };
    const hostFns = { autoMemDir: () => mem, cwd: () => work };
    const cleanup = () => { Object.assign(process.env, saved); fs.rmSync(root, { recursive: true, force: true }); };
    return { memoryReadGuard, isMemoryPath, containsMemoryPath, commandMentionsMemory, host, hostFns, mem, work, home, cleanup };
  }
  const readTool = { name: "Read", getPath: (i) => i.file_path, isReadOnly: () => true };
  const writeTool = { name: "Write", getPath: (i) => i.file_path, isReadOnly: () => false };
  const bashTool = { name: "Bash" };

  test("记忆目录里的路径：直接路径、相对路径、符号链接、~ 写法、agent-memory 都识别", async () => {
    const c = await setup();
    try {
      expect(c.isMemoryPath(path.join(c.mem, "MEMORY.md"), c.host)).toBe(true);
      expect(c.isMemoryPath(path.join(c.work, "link/MEMORY.md"), c.host)).toBe(true); // 经符号链接
      expect(c.isMemoryPath(path.relative(c.work, path.join(c.mem, "MEMORY.md")), c.host)).toBe(true); // 相对路径带 ..
      expect(c.isMemoryPath("~/.claude/agent-memory/foo/MEMORY.md", c.host)).toBe(true);
      expect(c.isMemoryPath(path.join(c.mem, "not-yet-created.md"), c.host)).toBe(true); // 目标还不存在
      expect(c.isMemoryPath(path.join(c.work, "a.txt"), c.host)).toBe(false);
      expect(c.isMemoryPath(path.join(c.home, ".claude/settings.json"), c.host)).toBe(false);
      expect(c.isMemoryPath("", c.host)).toBe(false);
    } finally { c.cleanup(); }
  });

  test("读记忆目录的调用一律改成必须由人回答的询问，且不受 allow 结果影响", async () => {
    const c = await setup();
    try {
      const allow = { behavior: "allow", updatedInput: {} };
      const r = c.memoryReadGuard(readTool, { file_path: path.join(c.mem, "MEMORY.md") }, allow, {}, c.hostFns);
      expect(r).toMatchObject({ behavior: "ask", personOnly: true, hooksMayAllow: false, suppressAlwaysAllowRule: true });
      expect(r.decisionReason).toMatchObject({ type: "safetyCheck", circuitBreaker: "memoryRead", classifierApprovable: false });
      expect(r.message).toContain("memory directory");
      // passthrough、ask 同样被接管
      expect(c.memoryReadGuard(readTool, { file_path: path.join(c.mem, "MEMORY.md") }, { behavior: "passthrough" }, {}, c.hostFns)?.behavior).toBe("ask");
      expect(c.memoryReadGuard(readTool, { file_path: path.join(c.mem, "MEMORY.md") }, { behavior: "ask" }, {}, c.hostFns)?.behavior).toBe("ask");
    } finally { c.cleanup(); }
  });

  test("不干预的情形：已被拒绝、普通文件、写工具、没有路径的工具、记忆目录不存在", async () => {
    const c = await setup();
    try {
      const memFile = { file_path: path.join(c.mem, "MEMORY.md") };
      expect(c.memoryReadGuard(readTool, memFile, { behavior: "deny" }, {}, c.hostFns)).toBeUndefined(); // 已经是 deny，保留
      expect(c.memoryReadGuard(readTool, { file_path: path.join(c.work, "a.txt") }, { behavior: "allow" }, {}, c.hostFns)).toBeUndefined();
      expect(c.memoryReadGuard(writeTool, memFile, { behavior: "allow" }, {}, c.hostFns)).toBeUndefined();
      expect(c.memoryReadGuard({ name: "TodoWrite" }, {}, { behavior: "allow" }, {}, c.hostFns)).toBeUndefined();
      const noMem = { cwd: () => c.work, autoMemDir: () => { throw new Error("no memory dir"); } };
      expect(c.memoryReadGuard(readTool, { file_path: path.join(c.work, "a.txt") }, { behavior: "allow" }, {}, noMem)).toBeUndefined();
      expect(c.memoryReadGuard(readTool, { file_path: 123 }, { behavior: "allow" }, {}, c.hostFns)).toBeUndefined(); // 坏输入不抛错
    } finally { c.cleanup(); }
  });

  test("Bash：命令里有指进记忆目录的路径就询问（绝对、~、$HOME、相对、引号、cd 之后、符号链接、VAR=路径）", async () => {
    const c = await setup();
    try {
      const ask = (command) => c.memoryReadGuard(bashTool, { command }, { behavior: "allow" }, {}, c.hostFns)?.behavior;
      const file = path.join(c.mem, "MEMORY.md");
      expect(ask(`cat ${file}`)).toBe("ask");
      expect(ask(`cat "${file}"`)).toBe("ask");
      expect(ask(`grep -r x '${c.mem}'`)).toBe("ask");
      expect(ask(`head -5 ${file} | wc -l`)).toBe("ask"); // 管道
      expect(ask(`cat ${path.relative(c.work, file)}`)).toBe("ask"); // 相对路径指进去
      expect(ask(`cd ${c.mem} && cat ./MEMORY.md`)).toBe("ask"); // cd 之后
      expect(ask("head ~/.claude/agent-memory/foo/MEMORY.md")).toBe("ask");
      expect(ask("cat $HOME/.claude/agent-memory/foo/MEMORY.md")).toBe("ask");
      expect(ask("cat ${HOME}/.claude/agent-memory/foo/MEMORY.md")).toBe("ask");
      expect(ask("cat link/MEMORY.md")).toBe("ask"); // 经符号链接
      expect(ask(`F=${file} cat x`)).toBe("ask"); // VAR=路径
    } finally { c.cleanup(); }
  });

  test("Bash：只是提到名字的命令不拦（项目自己的 MEMORY.md、文件名含 agent-memory、搜索字样）", async () => {
    const c = await setup();
    try {
      const ask = (command) => c.memoryReadGuard(bashTool, { command }, { behavior: "allow" }, {}, c.hostFns)?.behavior;
      for (const command of ["cat MEMORY.md", "git add MEMORY.md", "git commit -m 'update MEMORY.md'", "ls docs/agent-memory-design.md", "grep -rn agent-memory src/", "rg 'projects/foo/memory' .", "echo memory usage is fine", "ls -la", `ls ${path.dirname(c.mem)}`, `cat ${c.home}/.claude/settings.json`, ""]) {
        expect([command, ask(command)]).toEqual([command, undefined]);
      }
    } finally { c.cleanup(); }
  });

  test("递归搜索上级目录、默认当前目录、cd 和管道都需要确认；普通搜索范围不受影响", async () => {
    const c = await setup();
    try {
      const parent = path.dirname(c.mem);
      const projects = path.dirname(parent);
      fs.symlinkSync(projects, path.join(c.work, "all-projects"));
      const ask = (command, cwd = c.work) => c.memoryReadGuard(bashTool, { command }, { behavior: "allow" }, {}, { ...c.hostFns, cwd: () => cwd })?.behavior;
      for (const command of [
        `grep -R SENTINEL ${projects}`, `grep --recursive -e SENTINEL ${parent}`,
        `rg SENTINEL ${projects}`, `rg -e SENTINEL ${parent}`,
        `find ${projects} -type f -exec cat {} +`, `find -L ${projects} -type f -exec cat {} +`, "grep -R SENTINEL all-projects",
        `cd ${parent} && grep -R SENTINEL .`, `echo ready; rg SENTINEL ${parent}`,
        `Get-ChildItem -Recurse ${parent} | Select-String SENTINEL`,
      ]) expect([command, ask(command)]).toEqual([command, "ask"]);
      for (const command of ["rg SENTINEL", "grep -R SENTINEL", "rg --glob '*.md' SENTINEL", "find . -type f -exec cat {} +"]) {
        expect([command, ask(command, parent)]).toEqual([command, "ask"]);
      }
      fs.mkdirSync(path.join(c.work, ".claude/agent-memory/test"), { recursive: true });
      fs.mkdirSync(path.join(c.work, "src"));
      expect(ask("rg SENTINEL .")).toBe("ask");
      for (const command of ["rg SENTINEL src", "grep -rn SENTINEL src", "ls -la", `ls ${parent}`, "echo rg SENTINEL ."]) {
        expect([command, ask(command)]).toEqual([command, undefined]);
      }
    } finally { c.cleanup(); }
  });

  test("Grep / Glob 的上级搜索范围需要确认；Read 普通文件和不存在的记忆目录不误拦", async () => {
    const c = await setup();
    try {
      const parent = path.dirname(c.mem);
      for (const name of ["Grep", "Glob"]) {
        const tool = { name, isReadOnly: () => true, getPath: (input) => input.path };
        expect(c.memoryReadGuard(tool, { path: parent }, { behavior: "allow" }, {}, c.hostFns)?.behavior).toBe("ask");
        expect(c.memoryReadGuard(tool, { path: c.work }, { behavior: "allow" }, {}, c.hostFns)).toBeUndefined();
        expect(c.memoryReadGuard(tool, { path: "" }, { behavior: "allow" }, {}, { ...c.hostFns, cwd: () => parent })?.behavior).toBe("ask");
      }
      expect(c.containsMemoryPath(c.home, c.host)).toBe(true);
      expect(c.containsMemoryPath(c.work, c.host)).toBe(false);
      expect(c.memoryReadGuard(readTool, { file_path: path.join(c.work, "a.txt") }, { behavior: "allow" }, {}, c.hostFns)).toBeUndefined();
    } finally { c.cleanup(); }
  });

  test("已知的盲区（文档里写明）：路径靠变量和通配符拼出来，Bash 这条识别不到", async () => {
    const c = await setup();
    try {
      const ask = (command) => c.memoryReadGuard(bashTool, { command }, { behavior: "allow" }, {}, c.hostFns)?.behavior;
      expect(ask(`d=${path.dirname(c.mem)}; cat $d/mem*/*.md`)).toBeUndefined();
      expect(ask(`cd ${path.dirname(c.mem)} && cat memory/*.md`)).toBeUndefined(); // 通配符
    } finally { c.cleanup(); }
  });
});

describe("safeguards-redact", () => {
  // 形状取自原版发出的真实 classifier_context
  const REAL = () => ({
    v: 1, permission_mode: "auto", platform: "macos", live_cwd: "/h/work", home_dir: "/h",
    rule_roots: { userSettings: "/h/.claude", projectSettings: "/h/work" },
    trusted_directories: { primary: { path: "/h/work", resolved: ["/h/work"] }, additional: [{ path: "/tmp", resolved: ["/tmp", "/private/tmp"], source: "cliArg" }], network: ["internal.example"], block_reads_outside_working_directories: true },
    rules: { allow: [{ rule: "Read(//Users/secret-person/**)", source: "userSettings", root: "/", pattern: "/Users/secret-person" }], deny: [{ rule: "Bash(rm:*)", source: "userSettings" }], ask: [{ rule: "Bash(git push:*)", source: "projectSettings" }] },
    auto_mode: { allow: ["may push to acme-corp/private-repo"], soft_deny: ["x"], hard_deny: ["y"], environment: ["internal host build.corp.example"] },
    artifact_consent_holdback: false, case_insensitive_paths: false, restricted: false, is_remote_mode: false, classify_all_shell: true, user_identity: "alice_dev",
    git_state: {
      cwd: "/h/work", root: "/h/work", branch: "feature/secret-branch", default_branch: "main",
      status: { clean: false, counts: { staged: 1, modified: 2, untracked: null, untracked_normal: 3 }, porcelain: "M secret.txt", truncated: false },
      visibility: {
        origin: { host: "github.com", remote: "acme-corp/private-repo", visibility: "private" }, push_remote: "origin",
        remotes: [{ name: "origin", host: "github.com", remote: "acme-corp/private-repo", visibility: "private" }, { name: "up", host: "gitlab.example.com", remote: "team/other-repo", visibility: "unknown" }],
        visibility_cache: [{ host: "github.com", remote: "acme-corp/private-repo", visibility: "private" }],
      },
    },
    prior_turn_context: [{ tool_use_ids: ["t1"], context: { git_state: { cwd: "/h/work", root: "/h/work", branch: "feature/secret-branch", default_branch: "main", status: null, visibility: { origin: { host: "github.com", remote: "acme-corp/private-repo", visibility: "private" }, push_remote: "origin", remotes: [], visibility_cache: [] } }, live_cwd: "/h/work", platform: "macos" } }],
    chrome_navigation: { enabled: true, baselines: { "https://bank.example/account": "x" }, tabs: { 1: { title: "Inbox" } } },
    artifacts: { name: "secret artifact" },
  });
  const load = async () => (await import("../../src/runtime/safeguards-redact.js")).redactClassifierContext;

  test("能识别用户、机器、项目的内容全部抹掉", async () => {
    const out = JSON.stringify((await load())(REAL()));
    for (const secret of ["alice_dev", "acme-corp", "private-repo", "other-repo", "secret-person", "feature/secret-branch", "main", "internal.example", "build.corp.example", "bank.example", "Inbox", "secret artifact", "secret.txt", "/h/.claude", "may push to", "Bash(rm:*)", "Bash(git push", "/private/tmp"]) {
      expect(out).not.toContain(secret === "main" ? '"main"' : secret);
    }
    expect(out).not.toContain('"/h"'); // home_dir
  });

  test("分类器要用的内容保留：权限模式、平台、当前目录、主目录、标志位、工作区是否干净", async () => {
    const out = (await load())(REAL());
    expect(out).toMatchObject({ v: 1, permission_mode: "auto", platform: "macos", live_cwd: "/h/work", classify_all_shell: true, restricted: false, artifact_consent_holdback: false });
    expect(out.trusted_directories.primary).toEqual({ path: "/h/work", resolved: ["/h/work"] });
    expect(out.trusted_directories.block_reads_outside_working_directories).toBe(true);
    expect(out.git_state.status.clean).toBe(false);
    expect(out.git_state.visibility.origin.visibility).toBe("private");
  });

  test("字段形状不变（必需的键仍在，类型不变），服务端校验照常通过", async () => {
    const out = (await load())(REAL());
    expect(out.user_identity).toBeNull();
    expect(out.home_dir).toBeUndefined(); // 可选键
    expect(out.rule_roots).toEqual({});
    expect(out.rules).toEqual({ allow: [], deny: [], ask: [] });
    expect(out.auto_mode).toEqual({ allow: [], soft_deny: [], hard_deny: [], environment: [] });
    expect(out.trusted_directories).toMatchObject({ additional: [], network: [] });
    expect(out.git_state).toMatchObject({ branch: null, default_branch: null, root: null });
    expect(out.git_state.status.counts).toEqual({ staged: 0, modified: 0, untracked: null, untracked_normal: null });
    expect(out.git_state.visibility).toMatchObject({ push_remote: null, remotes: [], visibility_cache: [] });
    expect(out.prior_turn_context[0].context.git_state.branch).toBeNull();
    expect(out.prior_turn_context[0].tool_use_ids).toEqual(["t1"]);
    expect(out.chrome_navigation).toEqual({ enabled: true, baselines: {} });
  });

  test("不改动输入；对缺字段、null、非对象的输入不抛错", async () => {
    const redact = await load();
    const input = REAL();
    const before = JSON.stringify(input);
    redact(input);
    expect(JSON.stringify(input)).toBe(before);
    expect(redact(null)).toBeNull();
    expect(redact(undefined)).toBeUndefined();
    expect(redact("x")).toBe("x");
    expect(() => redact({})).not.toThrow();
    expect(() => redact({ git_state: null, rules: null, auto_mode: null, trusted_directories: null, prior_turn_context: [null, {}] })).not.toThrow();
  });
});

describe("upload-identity", () => {
  const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
  // 模块状态是进程级的，每个用例用自己的本地会话 ID，互不干扰
  let n = 0;
  const local = () => `local-session-${++n}`;

  test("会话 ID、提示 ID 是 UUID，设备 ID 是 64 位十六进制", () => {
    const id = newUploadIdentity();
    expect(id.sessionId).toMatch(UUID);
    expect(id.promptId).toMatch(UUID);
    expect(id.deviceId).toMatch(/^[0-9a-f]{64}$/);
    expect(Object.keys(id).sort()).toEqual(["deviceId", "promptId", "sessionId"]);
  });

  test("每次调用都不同；设备 ID 不是两个 UUID 拼接（拼接的话第 13 位恒为 4）", () => {
    const ids = Array.from({ length: 200 }, () => newUploadIdentity());
    for (const key of ["sessionId", "deviceId", "promptId"]) expect(new Set(ids.map((i) => i[key])).size).toBe(200);
    expect(new Set(ids.map((i) => i.deviceId[12])).size).toBeGreaterThan(1);
  });

  test("UUID 取自传入的函数，会话 ID 在前、提示 ID 在后", () => {
    let k = 0;
    const id = newUploadIdentity(() => `u${k++}`);
    expect(id.sessionId).toBe("u0");
    expect(id.promptId).toBe("u1");
    expect(k).toBe(2);
  });

  test("采用之前：没有候选就没有身份，提示 ID 原样", () => {
    const s = local();
    expect(uploadIdentityFor(undefined, s)?.sessionId).toBeUndefined();
    expect(promptIdFor(undefined, "p1", s)).toBe("p1");
    expect(promptIdFor(undefined, undefined, s)).toBeUndefined();
  });

  test("候选身份优先；重试请求的提示 ID 记下它顶替了谁", () => {
    const s = local(), c = newUploadIdentity();
    expect(uploadIdentityFor(c, s)).toBe(c);
    expect(promptIdFor(c, "p1", s)).toBe(c.promptId);
    expect(c.replaces).toBe("p1");
  });

  test("采用后：同一本地会话的后续请求沿用，直到被下一次采用取代", () => {
    const s = local(), a = newUploadIdentity(), b = newUploadIdentity();
    adoptUploadIdentity(a, s);
    expect(uploadIdentityFor(undefined, s)).toEqual({ sessionId: a.sessionId, deviceId: a.deviceId });
    adoptUploadIdentity(b, s);
    expect(uploadIdentityFor(undefined, s)).toEqual({ sessionId: b.sessionId, deviceId: b.deviceId });
  });

  test("会话 ID 记在本地会话名下：别的本地会话看不到；设备 ID 是装机级的，进程里通用", () => {
    const s1 = local(), s2 = local(), a = newUploadIdentity();
    adoptUploadIdentity(a, s1);
    const other = uploadIdentityFor(undefined, s2);
    expect(other?.sessionId).toBeUndefined(); // 换了本地会话（/clear、/resume）：用那个会话自己的 ID
    expect(other?.deviceId).toBe(a.deviceId); // 设备 ID 不回到真实值
  });

  test("提示 ID：被顶替的那一问沿用顶替后的，下一问和未被顶替的保持自然值", () => {
    const s = local(), a = newUploadIdentity(), b = newUploadIdentity();
    promptIdFor(a, "ask-1", s);
    adoptUploadIdentity(a, s);
    expect(promptIdFor(undefined, "ask-1", s)).toBe(a.promptId); // 同一问后面的工具轮
    expect(promptIdFor(undefined, "ask-2", s)).toBe("ask-2"); // 下一问
    promptIdFor(b, "ask-2", s);
    adoptUploadIdentity(b, s);
    expect(promptIdFor(undefined, "ask-2", s)).toBe(b.promptId);
    expect(promptIdFor(undefined, "ask-1", s)).toBe(a.promptId); // 之前的映射保留
  });

  test("缺少本地会话 ID 时不采用", () => {
    const a = newUploadIdentity();
    adoptUploadIdentity(a, undefined);
    adoptUploadIdentity(undefined, "x");
    expect(uploadIdentityFor(undefined, local())?.sessionId).toBeUndefined();
  });

  test("问数与轮数：会话 ID 是本地 ID 时原样，重试的候选身份和采用后的会话 ID 下都不带", () => {
    const s = local(), pos = { promptIndex: 2, turnIndex: 2 };
    expect(turnPositionFor(undefined, pos, s)).toBe(pos);
    expect(turnPositionFor(newUploadIdentity(), pos, s)).toBeUndefined();
    adoptUploadIdentity(newUploadIdentity(), s);
    expect(turnPositionFor(undefined, pos, s)).toBeUndefined();
    // 换了本地会话：设备 ID 仍是采用的，会话 ID 是那个会话自己的，序号与它一致，照常带
    expect(turnPositionFor(undefined, pos, local())).toBe(pos);
    expect(turnPositionFor(undefined, undefined, local())).toBeUndefined();
  });

  test("claude.ai 连接器代理的客户端会话头：进程内固定的 UUID，与会话 ID 无关", () => {
    expect(mcpClientSessionId).toMatch(UUID);
    const s = local(), a = newUploadIdentity();
    adoptUploadIdentity(a, s);
    expect([s, a.sessionId, uploadIdentityFor(undefined, s)?.sessionId]).not.toContain(mcpClientSessionId);
  });

  // 这条路要 claude.ai 登录、连接器和官方代理地址（不能改指本机），冒烟测试走不到；这里检查两个系统的生成源码都接上了
  test("两个系统的生成源码里，claude.ai 连接器代理的客户端会话头都用 mcpClientSessionId", () => {
    const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : e.name.endsWith(".js") ? [path.join(dir, e.name)] : []));
    for (const system of Object.keys(SYSTEMS)) {
      const values = walk(path.join(ROOT, "src", system)).flatMap((f) => [...fs.readFileSync(f, "utf8").matchAll(/"X-Mcp-Client-Session-Id": ([^ ,}]+)/g)].map((m) => m[1]));
      expect(values.length).toBeGreaterThan(0);
      expect(new Set(values)).toEqual(new Set(["mcpClientSessionId"]));
    }
  });

  test("完整送达的判定：有停止原因的助手消息才算，拒答、API 错误、没结束的都不算", () => {
    const msg = (extra, stop) => ({ type: "assistant", ...extra, message: { stop_reason: stop } });
    expect(isDeliveredResponse(msg({}, "end_turn"))).toBe(true);
    expect(isDeliveredResponse(msg({}, "tool_use"))).toBe(true);
    expect(isDeliveredResponse(msg({}, "refusal"))).toBe(false);
    expect(isDeliveredResponse(msg({ isApiErrorMessage: true }, "end_turn"))).toBe(false);
    expect(isDeliveredResponse(msg({}, null))).toBe(false);
    expect(isDeliveredResponse({ type: "user" })).toBe(false);
    expect(isDeliveredResponse(undefined)).toBe(false);
  });
});

describe("platforms", () => {
  test("每个支持的系统都有生成代码，平台名为 <系统>-<架构>", async () => {
    const { SYSTEMS, PLATFORMS } = await import("../../src/runtime/platforms.js");
    for (const system of Object.keys(SYSTEMS)) expect(fs.existsSync(path.join(ROOT, "src", system, "cli.js"))).toBe(true);
    expect(PLATFORMS).toEqual(Object.entries(SYSTEMS).flatMap(([s, arches]) => arches.map((a) => `${s}-${a}`)));
  });

  test("不支持的平台给出明确提示并退出", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "claw-platform-"));
    const entry = path.join(dir, "entry.js");
    // 把 process.arch 改成不支持的值后运行真实入口
    fs.writeFileSync(entry, `Object.defineProperty(process, "arch", { value: "mips" });\nawait import(${JSON.stringify(path.join(ROOT, "src/main.js"))});\n`);
    try {
      const r = spawnSync(process.execPath, [entry, "--version"], { encoding: "utf8", cwd: dir });
      expect(r.status).toBe(1);
      expect(r.stderr).toContain(`unsupported platform ${process.platform}-mips`);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});
