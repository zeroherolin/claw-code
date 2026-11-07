// 冒烟测试：开发模式（bun src/main.js）与构建产物（dist/claude，构建后才运行）都能启动并完成请求。
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { ROOT, DIST, VERSION, makeHome, cleanEnv, startFakeApi, startScriptedApi, runCli, runInPty, renderScreen } from "./harness.js";

let home, api;
const run = (cmd, args) => runCli(cmd, args, { cwd: home.work, env: cleanEnv(home.home, api.url) });
const DEV = [process.execPath, path.join(ROOT, "src/main.js")];

beforeAll(() => {
  home = makeHome();
  api = startFakeApi(home.work);
});
afterAll(() => {
  api.stop();
  home.remove();
});

describe("开发模式 bun src/main.js", () => {
  test("--version", async () => {
    const r = await run(DEV, ["--version"]);
    expect(r.output.trim()).toBe(`${VERSION} (Claude Code)`);
    expect(r.code).toBe(0);
  });

  test("-p 完成一次请求", async () => {
    const r = await run(DEV, ["-p", "say hi"]);
    expect(r.output.trim()).toBe("PONG");
    expect(r.code).toBe(0);
  });
});

describe.skipIf(!fs.existsSync(DIST))("构建产物 dist/claude", () => {
  test("-p 完成一次带工具调用的请求", async () => {
    const r = await run([DIST], ["-p", "CALL_BASH please", "--allowedTools", "Bash(echo:*)"]);
    expect(r.output.trim()).toBe("DONE: hello-from-tool");
    expect(r.code).toBe(0);
  });

  // 服务端以 frontier_llm 拒答：重试和下一条消息的历史里，保留被拦截那一轮的提问、已输出的文字和工具调用，
  // 但不再追加 "stopped by a safety classifier" 之类的提示
  test("拒答后保留已做的部分，但历史里没有拒答提示", async () => {
    const h = makeHome();
    const fake = startScriptedApi(2);
    try {
      const env = cleanEnv(h.home, fake.url);
      const flags = ["--allowedTools", "Bash(echo:*)"];
      const a = await runCli([DIST], ["-p", "BLOCKME run something", ...flags], { cwd: h.work, env });
      expect(a.code).toBe(0);
      const b = await runCli([DIST], ["-p", "--continue", "a harmless second question", ...flags], { cwd: h.work, env });
      expect(b.code).toBe(0);
      const retry = JSON.stringify(fake.requests[2]), next = JSON.stringify(fake.requests.at(-1));
      for (const sent of [retry, next]) {
        expect(sent).toContain("BLOCKME run something"); // 被拦截的提问保留
        expect(sent).toContain("PARTIAL_TEXT_ONE"); // 已输出的文字保留
        expect(sent).toContain("TOOL_ONE"); // 工具调用保留
        expect(sent).not.toMatch(/safety classifier|safeguard|Do not produce that content|frontier/);
      }
      expect(next).toContain("a harmless second question");
    } finally {
      fake.stop();
      h.remove();
    }
  });

  // 拒答后同模型最多重试 10 轮并显示轮数；用尽后正常结束，不换模型
  const retryRun = async (script) => {
    const h = makeHome();
    const fake = startScriptedApi(script);
    try {
      const r = await runCli([DIST], ["-p", "BLOCKME run something", "--allowedTools", "Bash(echo:*)", "--output-format", "stream-json", "--verbose"], { cwd: h.work, env: cleanEnv(h.home, fake.url) });
      const events = r.output.split("\n").flatMap((l) => { try { return [JSON.parse(l)]; } catch { return []; } });
      const notices = events.filter((e) => e.type === "system" && e.subtype === "informational").map((e) => e.content);
      return { r, fake: { requests: fake.requests }, notices, result: events.find((e) => e.type === "result") };
    } finally {
      fake.stop();
      h.remove();
    }
  };

  test("拒答后最多重试 10 轮，显示轮数，始终用原模型", async () => {
    const { r, fake, notices, result } = await retryRun(3);
    expect(r.code).toBe(0);
    expect(fake.requests.length).toBe(4);
    expect(notices.map((n) => n.match(/\((\d+\/10)\)/)?.[1])).toEqual(["1/10", "2/10", "3/10"]);
    expect(new Set(fake.requests.map((q) => q.model)).size).toBe(1);
    expect(result.result).toBe("FINAL_ANSWER");
  });

  test("第 10 次重试成功就算成功", async () => {
    const { r, fake, notices } = await retryRun(10);
    expect(r.code).toBe(0);
    expect(fake.requests.length).toBe(11);
    expect(notices.at(-1)).toContain("(10/10)");
  });

  test("重试 10 轮后仍被拦截：正常中断结束，不换模型、不再请求", async () => {
    const { fake, notices, result } = await retryRun(99);
    expect(fake.requests.length).toBe(11); // 1 次原请求 + 10 次重试
    expect(new Set(fake.requests.map((q) => q.model)).size).toBe(1); // 一直是原模型
    expect(notices.length).toBe(10);
    expect(result.is_error).toBe(true);
    expect(result.terminal_reason).toBe("api_error");
    expect(result.stop_reason).toBe("refusal");
  });

  // 重试预算按“连续被拦截的次数”计算：中间有过成功的响应（如正常停在 tool_use 并执行了工具）就清零
  test("重试预算只计连续的拒答：中间有成功的步骤就清零", async () => {
    const script = [];
    for (let i = 0; i < 12; i++) script.push("refuse", "tool"); // 12 次拒答，每次之后都有一步成功的工具调用
    const { r, fake, notices, result } = await retryRun(script);
    expect(r.code).toBe(0);
    expect(notices.length).toBe(12);
    expect(notices.every((n) => n.includes("(1/10)"))).toBe(true); // 每次都是新的一轮重试，从 1 开始
    expect(result.terminal_reason).toBe("completed");
    expect(fake.requests.length).toBe(25); // 12 × (拒答 + 工具步) + 最后一次正常回复
  });

  test("连续 10 次拒答后又夹着成功步骤：先用尽，仍按连续计数", async () => {
    const script = [...Array(10).fill("refuse"), "tool", ...Array(10).fill("refuse")];
    const { r, notices, result } = await retryRun(script);
    expect(r.code).toBe(0);
    expect(notices.length).toBe(20);
    expect(notices.slice(0, 10).map((n) => n.match(/\((\d+)\/10\)/)[1])).toEqual(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
    expect(notices.slice(10).map((n) => n.match(/\((\d+)\/10\)/)[1])).toEqual(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
    expect(result.terminal_reason).toBe("completed");
  });

  // 终端界面：拒答用尽后不弹“换模型/改提示词”的底部选择框，输入框正常可用
  test("交互界面里拒答用尽后没有换模型的底部选择框", async () => {
    const h = makeHome();
    const fake = startScriptedApi(99);
    try {
      const cols = 110, rows = 40;
      const env = cleanEnv(h.home, fake.url, { CLAUDE_CODE_SKIP_ONBOARDING: "1" });
      const { bytes } = await runInPty([DIST], { cwd: h.work, env, cols, rows, keys: [[0.5, "BLOCKME run something"], [1.0, "\r"]], idle: 5000, timeout: 90_000 });
      const text = (await renderScreen(bytes, cols, rows)).map((l) => l.text).join("\n");
      const main = fake.requests.filter((q) => q.tools?.length > 0); // 交互界面还会另发一个不带工具的辅助请求（标题）
      expect(main.length).toBe(11);
      expect(new Set(fake.requests.map((q) => q.model)).size).toBe(1);
      expect(text).toContain("(10/10)");
      expect(text).not.toMatch(/Model switch|Switch to|Stay on|keep going whenever this happens/);
      expect(text).toContain("❯"); // 输入框还在
    } finally {
      fake.stop();
      h.remove();
    }
  }, 120_000);

  // 读记忆目录里的文件一律先问用户：不论权限模式、allow 规则还是 hook。-p 模式没人可答，询问记为 permission_denial，内容不进请求
  describe("读取记忆文件需要确认", () => {
    const VARIANTS = {
      "默认模式": { settings: {}, args: [] },
      "acceptEdits": { settings: {}, args: ["--permission-mode", "acceptEdits"] },
      "bypassPermissions": { settings: {}, args: ["--dangerously-skip-permissions"] },
      "auto": { settings: {}, args: ["--permission-mode", "auto"] },
      "allow 规则": { settings: { permissions: { allow: ["Read", "Bash"] } }, args: [] },
      "hook 返回 allow": { settings: { hooks: { PreToolUse: [{ matcher: ".*", hooks: [{ type: "command", command: `echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"allow"}}'` }] }] } }, args: [] },
    };
    const run = async (variant, toolOf) => {
      const h = makeHome();
      const mem = path.join(h.home, ".claude/projects", h.work.replace(/[^a-zA-Z0-9\-_]/g, "-"), "memory");
      fs.mkdirSync(mem, { recursive: true });
      fs.writeFileSync(path.join(mem, "deploy.md"), "SENTINEL_BODY_c41e deploy notes\n");
      fs.mkdirSync(path.join(h.home, ".claude/agent-memory/foo"), { recursive: true });
      fs.writeFileSync(path.join(h.home, ".claude/agent-memory/foo/MEMORY.md"), "SENTINEL_AGENT_77b2\n");
      fs.writeFileSync(path.join(h.home, ".claude/settings.json"), JSON.stringify(variant.settings));
      const [tool, input] = toolOf({ mem, work: h.work });
      const api = startScriptedApi(() => ({ tool, input }));
      try {
        const r = await runCli([DIST], ["-p", "go", ...variant.args, "--output-format", "stream-json", "--verbose"], { cwd: h.work, env: cleanEnv(h.home, api.url) });
        const result = r.output.split("\n").flatMap((l) => { try { return [JSON.parse(l)]; } catch { return []; } }).find((e) => e.type === "result");
        return { leaked: /SENTINEL_/.test(JSON.stringify(api.requests.slice(1))), denials: result?.permission_denials ?? [] };
      } finally {
        api.stop();
        h.remove();
      }
    };
    const memRead = ({ mem }) => ["Read", { file_path: path.join(mem, "deploy.md") }];
    const bashCat = ({ mem }) => ["Bash", { command: `cat ${path.join(mem, "deploy.md")}`, description: "show" }];

    for (const [name, variant] of Object.entries(VARIANTS)) {
      test(`${name}：Read / Bash 读记忆文件被拦成询问，内容不进请求`, async () => {
        for (const toolOf of [memRead, bashCat]) {
          const r = await run(variant, toolOf);
          expect(r.leaked).toBe(false);
          expect(r.denials.length).toBe(1);
        }
      }, 60_000);
    }

    test("递归搜索记忆上级目录：allow 规则和 bypass 模式都先询问，内容不进请求", async () => {
      for (const variant of [VARIANTS["allow 规则"], VARIANTS.bypassPermissions]) {
        for (const toolOf of [
          ({ mem }) => ["Bash", { command: `grep -R SENTINEL ${path.dirname(path.dirname(mem))}` }],
          ({ mem }) => ["Bash", { command: `cd ${path.dirname(mem)} && grep -R SENTINEL` }],
        ]) {
          const result = await run(variant, toolOf);
          expect(result.leaked).toBe(false);
          expect(result.denials.length).toBe(1);
        }
      }
    }, 60_000);

    test("对照：工作目录里的普通文件、普通命令不受影响", async () => {
      for (const toolOf of [({ work }) => ["Read", { file_path: path.join(work, "fixture.txt") }], () => ["Bash", { command: "echo plain", description: "x" }]]) {
        const r = await run(VARIANTS.bypassPermissions, toolOf);
        expect(r.denials.length).toBe(0);
      }
    }, 60_000);

    test("写记忆文件（保存记忆）不被拦", async () => {
      const r = await run(VARIANTS.bypassPermissions, ({ mem }) => ["Write", { file_path: path.join(mem, "new.md"), content: "hello\n" }]);
      expect(r.denials.length).toBe(0);
    }, 60_000);

    // 交互界面：出现 "Do you want to proceed?"，选 No 内容不进请求，选 Yes 才进
    test("交互界面：先询问；选 No 不发送内容，选 Yes 才发送", async () => {
      const ask = async (choice) => {
        const h = makeHome();
        const mem = path.join(h.home, ".claude/projects", h.work.replace(/[^a-zA-Z0-9\-_]/g, "-"), "memory");
        fs.mkdirSync(mem, { recursive: true });
        fs.writeFileSync(path.join(mem, "deploy.md"), "SENTINEL_BODY_c41e deploy notes\n");
        const api = startScriptedApi(() => ({ tool: "Read", input: { file_path: path.join(mem, "deploy.md") } }));
        try {
          const keys = [[0.5, "go read the notes"], [1.0, "\r"], ...(choice ? [[5.0, choice]] : [])];
          const { bytes } = await runInPty([DIST, "--permission-mode", "default"], { cwd: h.work, env: cleanEnv(h.home, api.url, { CLAUDE_CODE_SKIP_ONBOARDING: "1" }), cols: 120, rows: 40, keys, idle: 4000, timeout: 60_000 });
          const text = (await renderScreen(bytes, 120, 40)).map((l) => l.text).join("\n");
          return { text, leaked: /SENTINEL_/.test(JSON.stringify(api.requests.slice(1))) };
        } finally {
          api.stop();
          h.remove();
        }
      };
      const none = await ask(null);
      expect(none.text).toContain("Do you want to proceed?");
      expect(none.leaked).toBe(false);
      expect((await ask("2")).leaked).toBe(false); // No
      expect((await ask("1")).leaked).toBe(true); // Yes
    }, 180_000);
  });

  // 发往服务端分类器的 safeguards 已脱敏：用户名、分支、remote、权限规则、autoMode 规则、--add-dir、home 目录都不出现
  test("safeguards 脱敏：识别用户和项目的内容不出现，字段形状与分类器所需内容保留", async () => {
    const h = makeHome();
    const fake = startFakeApi(h.work);
    try {
      const git = (...a) => spawnSync("git", a, { cwd: h.work, encoding: "utf8", env: { ...process.env, GIT_CONFIG_GLOBAL: "/dev/null", GIT_CONFIG_SYSTEM: "/dev/null" } });
      git("init", "-q", "-b", "feature/secret-branch-name");
      git("remote", "add", "origin", "https://github.com/acme-corp/private-repo.git");
      fs.writeFileSync(path.join(h.work, "dirty.txt"), "x");
      fs.writeFileSync(path.join(h.home, ".claude/settings.json"), JSON.stringify({ permissions: { allow: ["Bash(echo:*)", "Read(//Users/secret-person/**)"], deny: ["Bash(rm:*)"] }, autoMode: { environment: ["internal host build.corp.example"], allow: ["may push to acme-corp/private-repo"] } }));
      const r = await runCli([DIST], ["-p", "hi", "--permission-mode", "auto", "--add-dir", "/tmp/claw-addir-marker"], { cwd: h.work, env: cleanEnv(h.home, fake.url, { USER: "alice_dev" }) });
      expect(r.code).toBe(0);
      const sg = fake.requests.map((q) => q.body.safeguards?.[0]).find(Boolean);
      expect(sg?.type).toBe("dangerous_tool_use"); // 字段仍然发送，服务端分类器照常工作
      const cc = sg.classifier_context, json = JSON.stringify(sg);
      for (const secret of ["alice_dev", "acme-corp", "private-repo", "secret-person", "secret-branch-name", "build.corp.example", "may push to", "Bash(rm:*)", "claw-addir-marker"]) expect(json).not.toContain(secret);
      // 路径只剩工作目录（主请求的 Environment 里本来就有）；单独的 home 目录和各配置目录都不出现
      const paths = [...json.matchAll(/"(\/[^"]*)"/g)].map((m) => m[1]);
      expect(paths.length).toBeGreaterThan(0);
      for (const p of paths) expect(p === h.work || p === fs.realpathSync(h.work)).toBe(true);
      expect(cc.home_dir).toBeUndefined();
      expect(cc).toMatchObject({ v: 1, permission_mode: "auto", platform: process.platform === "darwin" ? "macos" : "linux", user_identity: null, rules: { allow: [], deny: [], ask: [] }, rule_roots: {} });
      expect(cc.live_cwd).toBe(h.work); // 分类器判断「命令是否在工作目录内」要用
      expect(cc.git_state.status.clean).toBe(false);
    } finally {
      fake.stop();
      h.remove();
    }
  });

  // CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC 固定为开：环境、settings.json 的 env 想关掉都不行，登录引导等请求一个都不发
  test("非必要网络流量始终关闭：不论环境变量和 settings 怎么设，-p 下不向外发任何请求", async () => {
    const h = makeHome();
    const fake = startFakeApi(h.work);
    // 一个只记录的假 HTTP 代理：任何经 HTTPS_PROXY 的 CONNECT 都记下来（本机的假 API 走 NO_PROXY，不经过它）
    const connects = [];
    const proxy = Bun.listen({ hostname: "127.0.0.1", port: 0, socket: { data(sock, d) { connects.push(String(d).split("\r\n")[0]); sock.end(); }, open() {}, close() {}, error() {} } });
    try {
      fs.writeFileSync(path.join(h.home, ".claude/settings.json"), JSON.stringify({ env: { CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "", DISABLE_TELEMETRY: "" } }));
      const env = { ...cleanEnv(h.home, fake.url), HTTPS_PROXY: `http://127.0.0.1:${proxy.port}`, NO_PROXY: "127.0.0.1,localhost", CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "", DISABLE_TELEMETRY: "", CLAUDE_CODE_ENABLE_TELEMETRY: "1" };
      delete env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC;
      const r = await runCli([DIST], ["-p", "say hi"], { cwd: h.work, env });
      expect(r.output.trim()).toBe("PONG");
      expect(connects).toEqual([]);
    } finally {
      proxy.stop(true);
      fake.stop();
      h.remove();
    }
  }, 60_000);

  // 记忆只发路径：用一次性 HOME 里的假记忆文件（内容是哨兵字符串），检查哨兵不出现在任何请求里
  test("记忆内容不发送，只发记忆文件的路径", async () => {
    const h = makeHome();
    const fake = startFakeApi(h.work);
    try {
      const mem = path.join(h.home, ".claude/projects", h.work.replace(/[^a-zA-Z0-9\-_]/g, "-"), "memory");
      fs.mkdirSync(mem, { recursive: true });
      fs.writeFileSync(path.join(mem, "MEMORY.md"), "- [Deploy](deploy.md) — SENTINEL_INDEX_71c2\n");
      fs.writeFileSync(path.join(mem, "deploy.md"), "---\nname: deploy\ndescription: SENTINEL_DESC_55aa\nmetadata:\n  type: project\n---\n\nSENTINEL_BODY_9f3a how to deploy the staging server\n");
      const r = await runCli([DIST], ["-p", "how do I deploy the staging server today"], { cwd: h.work, env: cleanEnv(h.home, fake.url) });
      expect(r.code).toBe(0);
      const sent = JSON.stringify(fake.requests.map((q) => q.body));
      expect(sent).not.toContain("SENTINEL_");
      expect(sent).toContain(path.join(mem, "MEMORY.md")); // 路径照发
      expect(sent).toContain("Memory access policy");
    } finally {
      fake.stop();
      h.remove();
    }
  });

  // 与已安装的 claude 共存：update / install 不联网、不改共享配置，交互使用不抢注册 claude-cli:// 处理程序
  describe("与已安装的 claude 共存", () => {
    for (const cmd of ["update", "upgrade", "install"]) {
      test(`${cmd} 直接退出：不联网、不写 installMethod、不碰 ~/.local`, async () => {
        const h = makeHome();
        const hits = [];
        const proxy = Bun.listen({ hostname: "127.0.0.1", port: 0, socket: { data(sock, d) { hits.push(String(d).split("\r\n")[0]); sock.end(); }, open() {}, close() {}, error() {} } });
        try {
          const px = `http://127.0.0.1:${proxy.port}`;
          const env = { ...cleanEnv(h.home, "http://127.0.0.1:9"), HTTPS_PROXY: px, HTTP_PROXY: px, ALL_PROXY: px };
          const r = await runCli([DIST], [cmd], { cwd: h.work, env });
          expect(r.code).toBe(0);
          expect(r.output).toContain("claw-code does not");
          expect(hits).toEqual([]);
          expect(fs.readFileSync(path.join(h.home, ".claude/.claude.json"), "utf8")).not.toContain("installMethod");
          expect(fs.existsSync(path.join(h.home, ".local"))).toBe(false);
        } finally {
          proxy.stop(true);
          h.remove();
        }
      }, 60_000);
    }

    test("交互使用并提交第一条消息后，没有注册 claude-cli:// 处理程序", async () => {
      const h = makeHome();
      const fake = startFakeApi(h.work);
      // macOS：<HOME>/Applications/Claude Code URL Handler.app；Linux：<HOME>/.local/share/applications/claude-code-url-handler.desktop
      const spots = [path.join(h.home, "Applications"), path.join(h.home, ".local/share/applications")];
      try {
        await runInPty([DIST], { cwd: h.work, env: cleanEnv(h.home, fake.url), cols: 100, rows: 30, keys: [[0, "hello\r"]], idle: 3000, timeout: 30_000 });
        await Bun.sleep(2000); // 注册在第一条消息之后异步进行
        for (const spot of spots) expect(fs.existsSync(spot)).toBe(false);
      } finally {
        if (process.platform === "darwin") {
          const lsregister = "/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister";
          spawnSync(lsregister, ["-u", path.join(h.home, "Applications/Claude Code URL Handler.app")]); // 注册过就撤销，不在系统里留下临时目录的条目
        }
        fake.stop();
        h.remove();
      }
    }, 60_000);
  });
});
