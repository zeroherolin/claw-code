// dev 分支的运行时模块：固定的环境变量、记忆读取确认、safeguards 脱敏、拒答重试的临时上传身份（见 docs/dev.md）。
import { describe, expect, test } from "bun:test";
import { spawnSync } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";
import { adoptUploadIdentity, isDeliveredResponse, mcpClientSessionId, newUploadIdentity, promptIdFor, turnPositionFor, uploadIdentityFor } from "../../src/runtime/upload-identity.js";
import { SYSTEMS } from "../../src/runtime/platforms.js";

const ROOT = path.resolve(import.meta.dir, "../..");
const RUNTIME = path.join(ROOT, "src/runtime");

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

  test("运行期赋值、Object.assign、delete 都不能改变固定的键，其他键仍可写", () => {
    const r = pinned(`process.env.TZ = "Asia/Shanghai";
Object.assign(process.env, { DISABLE_TELEMETRY: "", CLAUDE_CODE_ENABLE_TELEMETRY: "1", OTHER: "x" });
delete process.env.DO_NOT_TRACK;
console.log(JSON.stringify({ intl: Intl.DateTimeFormat().resolvedOptions().timeZone, env: { ...process.env } }));`);
    expect(r.intl).toBe("America/Los_Angeles");
    expect(r.env).toMatchObject({ TZ: "America/Los_Angeles", DISABLE_TELEMETRY: "1", DO_NOT_TRACK: "1", OTHER: "x" });
    expect(r.env.CLAUDE_CODE_ENABLE_TELEMETRY).toBeUndefined();
  });

  test("子进程使用固定的 TZ：Bun.spawnSync、node:child_process，以及调用方显式给出的 env；ps 的 TZ=UTC 保留", () => {
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

  // 子进程继承语义与原版一致：Bun.spawn 不传 env 时只继承启动时的环境，node:child_process 继承当前的 process.env
  test("子进程环境的继承语义不变：只增加固定的 TZ", () => {
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

  // Worker 有独立的 process.env：不固定时，用户设置的时区和遥测开关在 Worker 中仍然生效
  test("Worker 中同样固定：process.env、Intl、子进程；Worker 中的赋值同样被忽略", () => {
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
  // 在一次性目录中建立记忆目录；host 模拟生成代码传给守卫的宿主函数（自动记忆目录、当前目录）
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

  test("记忆目录里的路径：直接路径、相对路径、符号链接、~ 写法、agent-memory 都能识别", async () => {
    const c = await setup();
    try {
      expect(c.isMemoryPath(path.join(c.mem, "MEMORY.md"), c.host)).toBe(true);
      expect(c.isMemoryPath(path.join(c.work, "link/MEMORY.md"), c.host)).toBe(true); // 经符号链接
      expect(c.isMemoryPath(path.relative(c.work, path.join(c.mem, "MEMORY.md")), c.host)).toBe(true); // 相对路径带 ..
      expect(c.isMemoryPath("~/.claude/agent-memory/foo/MEMORY.md", c.host)).toBe(true);
      expect(c.isMemoryPath(path.join(c.mem, "not-yet-created.md"), c.host)).toBe(true); // 目标尚不存在
      expect(c.isMemoryPath(path.join(c.work, "a.txt"), c.host)).toBe(false);
      expect(c.isMemoryPath(path.join(c.home, ".claude/settings.json"), c.host)).toBe(false);
      expect(c.isMemoryPath("", c.host)).toBe(false);
    } finally { c.cleanup(); }
  });

  test("读取记忆目录的调用一律改为必须由用户回答的询问，不受 allow 结果影响", async () => {
    const c = await setup();
    try {
      const allow = { behavior: "allow", updatedInput: {} };
      const r = c.memoryReadGuard(readTool, { file_path: path.join(c.mem, "MEMORY.md") }, allow, {}, c.hostFns);
      expect(r).toMatchObject({ behavior: "ask", personOnly: true, hooksMayAllow: false, suppressAlwaysAllowRule: true });
      expect(r.decisionReason).toMatchObject({ type: "safetyCheck", circuitBreaker: "memoryRead", classifierApprovable: false });
      expect(r.message).toContain("memory directory");
      // passthrough、ask 同样改为该询问
      expect(c.memoryReadGuard(readTool, { file_path: path.join(c.mem, "MEMORY.md") }, { behavior: "passthrough" }, {}, c.hostFns)?.behavior).toBe("ask");
      expect(c.memoryReadGuard(readTool, { file_path: path.join(c.mem, "MEMORY.md") }, { behavior: "ask" }, {}, c.hostFns)?.behavior).toBe("ask");
    } finally { c.cleanup(); }
  });

  test("不干预的情形：已被拒绝、普通文件、写工具、没有路径的工具、记忆目录不存在", async () => {
    const c = await setup();
    try {
      const memFile = { file_path: path.join(c.mem, "MEMORY.md") };
      expect(c.memoryReadGuard(readTool, memFile, { behavior: "deny" }, {}, c.hostFns)).toBeUndefined(); // 已是 deny，保持不变
      expect(c.memoryReadGuard(readTool, { file_path: path.join(c.work, "a.txt") }, { behavior: "allow" }, {}, c.hostFns)).toBeUndefined();
      expect(c.memoryReadGuard(writeTool, memFile, { behavior: "allow" }, {}, c.hostFns)).toBeUndefined();
      expect(c.memoryReadGuard({ name: "TodoWrite" }, {}, { behavior: "allow" }, {}, c.hostFns)).toBeUndefined();
      const noMem = { cwd: () => c.work, autoMemDir: () => { throw new Error("no memory dir"); } };
      expect(c.memoryReadGuard(readTool, { file_path: path.join(c.work, "a.txt") }, { behavior: "allow" }, {}, noMem)).toBeUndefined();
      expect(c.memoryReadGuard(readTool, { file_path: 123 }, { behavior: "allow" }, {}, c.hostFns)).toBeUndefined(); // 无效输入不抛错
    } finally { c.cleanup(); }
  });

  test("Bash：命令中含有指向记忆目录的路径时询问（绝对、~、$HOME、相对、引号、cd 之后、符号链接、VAR=路径）", async () => {
    const c = await setup();
    try {
      const ask = (command) => c.memoryReadGuard(bashTool, { command }, { behavior: "allow" }, {}, c.hostFns)?.behavior;
      const file = path.join(c.mem, "MEMORY.md");
      expect(ask(`cat ${file}`)).toBe("ask");
      expect(ask(`cat "${file}"`)).toBe("ask");
      expect(ask(`grep -r x '${c.mem}'`)).toBe("ask");
      expect(ask(`head -5 ${file} | wc -l`)).toBe("ask"); // 管道
      expect(ask(`cat ${path.relative(c.work, file)}`)).toBe("ask"); // 相对路径指向记忆目录
      expect(ask(`cd ${c.mem} && cat ./MEMORY.md`)).toBe("ask"); // cd 之后
      expect(ask("head ~/.claude/agent-memory/foo/MEMORY.md")).toBe("ask");
      expect(ask("cat $HOME/.claude/agent-memory/foo/MEMORY.md")).toBe("ask");
      expect(ask("cat ${HOME}/.claude/agent-memory/foo/MEMORY.md")).toBe("ask");
      expect(ask("cat link/MEMORY.md")).toBe("ask"); // 经符号链接
      expect(ask(`F=${file} cat x`)).toBe("ask"); // VAR=路径
    } finally { c.cleanup(); }
  });

  test("Bash：只提到名字的命令不拦截（项目自身的 MEMORY.md、文件名含 agent-memory、搜索字样）", async () => {
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

  test("Grep / Glob 的上级搜索范围需要确认；Read 普通文件和不存在的记忆目录不误判", async () => {
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

  test("已知的盲区（见 docs/dev.md）：由变量和通配符拼接的路径，Bash 命令检查无法识别", async () => {
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

  test("可识别用户、机器、项目的内容全部清除", async () => {
    const out = JSON.stringify((await load())(REAL()));
    for (const secret of ["alice_dev", "acme-corp", "private-repo", "other-repo", "secret-person", "feature/secret-branch", "main", "internal.example", "build.corp.example", "bank.example", "Inbox", "secret artifact", "secret.txt", "/h/.claude", "may push to", "Bash(rm:*)", "Bash(git push", "/private/tmp"]) {
      expect(out).not.toContain(secret === "main" ? '"main"' : secret);
    }
    expect(out).not.toContain('"/h"'); // home_dir
  });

  test("分类器所需的内容保留：权限模式、平台、当前目录、主目录、标志位、工作区是否干净", async () => {
    const out = (await load())(REAL());
    expect(out).toMatchObject({ v: 1, permission_mode: "auto", platform: "macos", live_cwd: "/h/work", classify_all_shell: true, restricted: false, artifact_consent_holdback: false });
    expect(out.trusted_directories.primary).toEqual({ path: "/h/work", resolved: ["/h/work"] });
    expect(out.trusted_directories.block_reads_outside_working_directories).toBe(true);
    expect(out.git_state.status.clean).toBe(false);
    expect(out.git_state.visibility.origin.visibility).toBe("private");
  });

  test("字段形状不变：必需的键仍在，类型不变", async () => {
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

  // 本地分类器：插在待判断命令之前的两种元信息行
  test("repoVisibility：仓库名与分支只在命令中原样出现时保留，可见性保留", async () => {
    const { redactRepoVisibility } = await import("../../src/runtime/safeguards-redact.js");
    const entry = { remote: "acme-corp/private-repo", branch: "feature/secret", visibility: "private" };
    expect(redactRepoVisibility(entry, "git push origin HEAD")).toEqual({ remote: "redacted", visibility: "private" });
    expect(redactRepoVisibility(entry, "git push https://github.com/acme-corp/private-repo.git feature/secret")).toEqual(entry); // 命令中已包含仓库名与分支名
    expect(redactRepoVisibility(entry, "git push origin feature/secret")).toEqual({ remote: "redacted", branch: "feature/secret", visibility: "private" });
    expect(redactRepoVisibility({ remote: "", visibility: "unknown" }, "git push")).toEqual({ remote: "", visibility: "unknown" }); // 未解析出仓库的条目原样保留
    expect(redactRepoVisibility(entry, undefined)).toEqual({ remote: "redacted", visibility: "private" });
    expect(entry.branch).toBe("feature/secret"); // 不改动输入
    expect(redactRepoVisibility(null, "x")).toBeNull();
  });

  test("gitStatus：带文件名的清单换成计数，clean 标志与计数原样保留，有改动的工作区不报告为干净", async () => {
    const { redactGitStatus } = await import("../../src/runtime/safeguards-redact.js");
    expect(redactGitStatus({ clean: true })).toEqual({ clean: true });
    expect(redactGitStatus({ staged: 1, modified: 2, untracked: 0 })).toEqual({ staged: 1, modified: 2, untracked: 0 });
    const listing = "?? secret-notes.txt\nM  staged.js\n M modified.js\nMM both.js\nR  old.js -> new.js";
    const out = redactGitStatus({ porcelain: listing });
    expect(out).toEqual({ staged: 3, modified: 2, untracked: 1 });
    expect(JSON.stringify(out)).not.toMatch(/secret-notes|staged\.js|new\.js/);
    expect(redactGitStatus({ porcelain: "… 12 more lines" })).toEqual({ clean: false }); // 无法统计时不报告为干净
    expect(redactGitStatus(null)).toBeNull();
  });

  test("各系统的生成源码：本地分类器的提示词不取用户名与规则，元信息行经过脱敏", () => {
    for (const system of Object.keys(SYSTEMS)) {
      const code = fs.readFileSync(path.join(ROOT, "src", system, "core/conversation-engine.js"), "utf8");
      const build = code.slice(code.indexOf("// 本地分类器脱敏"), code.indexOf("\n## Session Context\n"));
      // 依次是 autoMode 规则、deny 规则块、Session Context 的条目：恒为 void 0、空串、空数组，不再调用取值的函数
      expect(build).toMatch(/\}\), [\w$]+ = void 0, [\w$]+ = [\w$]+\(\), [\w$]+ = \([^\n]*, [\w$]+ = "", [\w$]+ = \[\], [\w$]+ = [\w$]+\.length > 0 \? `\n$/);
      expect(code).toMatch(/\(\{ repoVisibility: redactRepoVisibility\([\w$]+, [\w$]+\.input\.command\) \}\)/);
      expect(code).toContain("({ gitStatus: redactGitStatus(");
      expect(code).not.toMatch(/\(\{ (repoVisibility|gitStatus): [\w$]+ \}\)/); // 不存在未脱敏的写法
    }
  });
});

describe("upload-identity", () => {
  const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
  // 模块状态是进程级的，每个用例使用各自的本地会话 ID，互不干扰
  let n = 0;
  const local = () => `local-session-${++n}`;

  test("会话 ID、提示 ID 是 UUID，设备 ID 是 64 位十六进制", () => {
    const id = newUploadIdentity();
    expect(id.sessionId).toMatch(UUID);
    expect(id.promptId).toMatch(UUID);
    expect(id.deviceId).toMatch(/^[0-9a-f]{64}$/);
    expect(Object.keys(id).sort()).toEqual(["deviceId", "promptId", "sessionId"]);
  });

  test("每次调用都不同；设备 ID 不是两个 UUID 拼接（若为拼接，第 13 位恒为 4）", () => {
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

  test("采用之前：没有候选身份时不返回身份，提示 ID 不变", () => {
    const s = local();
    expect(uploadIdentityFor(undefined, s)?.sessionId).toBeUndefined();
    expect(promptIdFor(undefined, "p1", s)).toBe("p1");
    expect(promptIdFor(undefined, undefined, s)).toBeUndefined();
  });

  test("候选身份优先；重试请求记录它替换的提示 ID", () => {
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

  test("会话 ID 记在本地会话名下，对其他本地会话不可见；设备 ID 是安装级的，在进程内通用", () => {
    const s1 = local(), s2 = local(), a = newUploadIdentity();
    adoptUploadIdentity(a, s1);
    const other = uploadIdentityFor(undefined, s2);
    expect(other?.sessionId).toBeUndefined(); // 切换本地会话（/clear、/resume）后使用该会话自身的 ID
    expect(other?.deviceId).toBe(a.deviceId); // 设备 ID 不回到真实值
  });

  test("提示 ID：被替换的那一问沿用替换后的，下一问和未被替换的保持自然值", () => {
    const s = local(), a = newUploadIdentity(), b = newUploadIdentity();
    promptIdFor(a, "ask-1", s);
    adoptUploadIdentity(a, s);
    expect(promptIdFor(undefined, "ask-1", s)).toBe(a.promptId); // 同一问后续的工具轮
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

  test("问数与轮数：会话 ID 是本地 ID 时原样返回，重试的候选身份和采用后的会话 ID 下都不带", () => {
    const s = local(), pos = { promptIndex: 2, turnIndex: 2 };
    expect(turnPositionFor(undefined, pos, s)).toBe(pos);
    expect(turnPositionFor(newUploadIdentity(), pos, s)).toBeUndefined();
    adoptUploadIdentity(newUploadIdentity(), s);
    expect(turnPositionFor(undefined, pos, s)).toBeUndefined();
    // 切换本地会话后：设备 ID 仍是已采用的，会话 ID 是该会话自身的，序号与之一致，因此带序号
    expect(turnPositionFor(undefined, pos, local())).toBe(pos);
    expect(turnPositionFor(undefined, undefined, local())).toBeUndefined();
  });

  test("claude.ai 连接器代理的客户端会话头：进程内固定的 UUID，与会话 ID 无关", () => {
    expect(mcpClientSessionId).toMatch(UUID);
    const s = local(), a = newUploadIdentity();
    adoptUploadIdentity(a, s);
    expect([s, a.sessionId, uploadIdentityFor(undefined, s)?.sessionId]).not.toContain(mcpClientSessionId);
  });

  // 该路径需要 claude.ai 登录、连接器和官方代理地址（不能指向本机），冒烟测试无法覆盖；此处检查各系统的生成源码都已接入
  test("各系统的生成源码：claude.ai 连接器代理的客户端会话头都使用 mcpClientSessionId", () => {
    const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : e.name.endsWith(".js") ? [path.join(dir, e.name)] : []));
    for (const system of Object.keys(SYSTEMS)) {
      const values = walk(path.join(ROOT, "src", system)).flatMap((f) => [...fs.readFileSync(f, "utf8").matchAll(/"X-Mcp-Client-Session-Id": ([^ ,}]+)/g)].map((m) => m[1]));
      expect(values.length).toBeGreaterThan(0);
      expect(new Set(values)).toEqual(new Set(["mcpClientSessionId"]));
    }
  });

  test("完整送达的判定：有停止原因的助手消息视为送达，拒答、API 错误、未结束的消息不视为送达", () => {
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
