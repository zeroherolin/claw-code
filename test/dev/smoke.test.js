// dev 分支的冒烟测试：用构建产物 dist/claude 和假 API 端到端验证有意改动的行为（见 docs/dev.md）。构建后才运行。
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { ROOT, DIST, makeHome, cleanEnv, startFakeApi, runCli, runInPty, renderScreen, trapExternalAccess } from "../harness.js";
import { startScriptedApi } from "./scripted-api.js";

let home, api;
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
  // 请求的 metadata 由补丁改动过的函数组装（拒答重试时替换为临时身份）；补丁不应改变原版对该变量的处理：
  // 不是 JSON 对象时只记录一条错误日志，请求仍然发出
  test("CLAUDE_CODE_EXTRA_METADATA 不是 JSON 对象时请求仍然完成", async () => {
    const env = cleanEnv(home.home, api.url, { CLAUDE_CODE_EXTRA_METADATA: "not json" });
    const r = await runCli(DEV, ["-p", "say hi"], { cwd: home.work, env });
    expect(r.output.trim()).toBe("PONG");
    expect(r.code).toBe(0);
  });
});

describe.skipIf(!fs.existsSync(DIST))("构建产物 dist/claude", () => {
  // 服务端以 frontier_llm 拒答：重试和下一条消息的历史里，保留被拦截那一轮的提问、已输出的文字和工具调用，
  // 但不再追加 "stopped by a safety classifier" 等提示
  test("拒答后保留已完成的部分，历史中没有拒答提示", async () => {
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
  const retryRun = async (script, extraEnv = {}) => {
    const h = makeHome();
    const fake = startScriptedApi(script);
    try {
      const r = await runCli([DIST], ["-p", "BLOCKME run something", "--allowedTools", "Bash(echo:*)", "--output-format", "stream-json", "--verbose"], { cwd: h.work, env: cleanEnv(h.home, fake.url, extraEnv) });
      const events = r.output.split("\n").flatMap((l) => { try { return [JSON.parse(l)]; } catch { return []; } });
      const notices = events.filter((e) => e.type === "system" && e.subtype === "informational").map((e) => e.content);
      return { r, fake: { requests: fake.requests, nonStreaming: fake.nonStreaming }, notices, result: events.find((e) => e.type === "result") };
    } finally {
      fake.stop();
      h.remove();
    }
  };

  test("拒答后最多重试 10 轮，显示轮数，始终使用原模型", async () => {
    const { r, fake, notices, result } = await retryRun(3);
    expect(r.code).toBe(0);
    expect(fake.requests.length).toBe(4);
    expect(notices.map((n) => n.match(/\((\d+\/10)\)/)?.[1])).toEqual(["1/10", "2/10", "3/10"]);
    expect(new Set(fake.requests.map((q) => q.body.model)).size).toBe(1);
    expect(result.result).toBe("FINAL_ANSWER");
  });

  // 每次拒答重试使用一份临时上传身份。假 API 须按一方端点配置：否则请求中没有 prompt id 等头，也不启用消息线程，
  // 后续断言没有检查对象
  const FIRST_PARTY = { _CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL: "1", CLAUDE_CODE_GATEWAY_HINT_HEADERS: "1", CLAUDE_CODE_TETHER_LIVE: "1" };
  const UUID_V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
  const wire = (q) => {
    const meta = JSON.parse(q.body.metadata.user_id);
    return {
      session: meta.session_id, device: meta.device_id, account: meta.account_uuid,
      sessionHeader: q.headers["x-claude-code-session-id"],
      promptHeader: q.headers["x-claude-code-prompt-id"],
      billingPrompt: JSON.stringify(q.body.system).match(/cc_prompt_id=([0-9a-f-]{36})/)?.[1], // 系统提示词首段的账单头
      clientRequest: q.headers["x-client-request-id"],
      prevRequest: JSON.stringify(q.body.system).match(/cc_prev_req=(req_[\w-]+)/)?.[1], // 账单头里的上一个请求 ID，不存在时为 undefined
      prevMessage: q.body.diagnostics?.previous_message_id, // 缓存诊断里的上一条消息 ID，null 表示不指向任何消息
      position: JSON.stringify(q.body.system).match(/cc_prompt_index=\d+; cc_turn_index=\d+/)?.[0], // 账单头里按本地会话计数的问数与轮数
      thread: q.body.thread?.type,
    };
  };

  test("拒答重试使用临时身份：会话、设备、提示 ID 每轮都更换，新建线程，不指向被拦截的请求，本地标识不外泄", async () => {
    const { r, fake, result } = await retryRun(3, FIRST_PARTY);
    expect(r.code).toBe(0);
    expect(fake.requests[0].headers["anthropic-beta"]).toContain("message-threads");
    const w = fake.requests.map(wire);
    expect(w.length).toBe(4);
    const [first, ...retries] = w;
    expect(first.session).toBe(result.session_id); // 第一次请求使用本地会话 ID
    for (const key of ["session", "device", "promptHeader"]) {
      const values = retries.map((x) => x[key]);
      expect(new Set(values).size).toBe(3);
      expect(values).not.toContain(first[key]);
    }
    for (const x of w) {
      expect(x.session).toMatch(UUID_V4);
      expect(x.sessionHeader).toBe(x.session); // 请求头与 metadata 一致
      expect(x.device).toMatch(/^[0-9a-f]{64}$/);
      expect(x.promptHeader).toMatch(UUID_V4);
      expect(x.billingPrompt).toBe(x.promptHeader); // 账单头里的 cc_prompt_id 同步更换
      expect(x.thread).toBe("create"); // 不续接旧线程
    }
    expect(new Set(w.map((x) => x.clientRequest)).size).toBe(4); // x-client-request-id 在原版中即为每个请求各自生成
    // 重试不带上一个（被拦截的）请求和消息的 ID，服务端无法据此把重试关联到上一轮
    for (const x of w) {
      expect(x.prevRequest).toBeUndefined();
      expect(x.prevMessage).toBeNull();
    }
    for (const q of fake.requests) expect(JSON.stringify(q.body.diagnostics ?? {})).not.toMatch(/"m_\d/);
    // 问数与轮数按本地会话计数：本地会话 ID 下带，更换会话 ID 后的重试不带
    expect(first.position).toBe("cc_prompt_index=0; cc_turn_index=1");
    for (const x of retries) expect(x.position).toBeUndefined();
    expect(new Set(w.map((x) => x.account)).size).toBe(1); // 账号不变
    for (const q of fake.requests.slice(1)) {
      const raw = JSON.stringify(q);
      expect(raw).not.toContain(first.session);
      expect(raw).not.toContain(first.device);
    }
  });

  test("拒答重试成功后，后续的工具轮沿用该次重试的标识，不回到本地标识", async () => {
    const { r, fake, result } = await retryRun(["refuse", "tool"], FIRST_PARTY);
    expect(r.code).toBe(0);
    expect(fake.requests.length).toBe(3);
    const [first, retry, afterTool] = fake.requests.map(wire);
    expect(first.session).toBe(result.session_id); // 本地标识只在第一次请求里出现
    for (const key of ["session", "sessionHeader", "device", "promptHeader", "billingPrompt"]) {
      expect(retry[key]).not.toBe(first[key]);
      expect(afterTool[key]).toBe(retry[key]);
    }
    // 重试本身不指向被拦截的请求；成功后的工具轮指向该次重试，续接的也是该次重试新建的线程（属于同一身份下的请求）
    expect(retry.prevRequest).toBeUndefined();
    expect(retry.prevMessage).toBeNull();
    expect(afterTool.prevRequest).toBe("req_2");
    expect(afterTool.prevMessage).toBe("m_2");
    expect(afterTool.thread).toBe("continue");
    expect(first.position).toBeDefined();
    expect(retry.position).toBeUndefined();
    expect(afterTool.position).toBeUndefined(); // 采用的会话 ID 下同样不带
  });

  // 采用的标识只保存在进程内存中：不写盘，不改变本地会话。重启进程（--continue）从本地标识开始
  test("拒答重试采用的标识只在本进程内有效：--continue 新进程从本地标识开始", async () => {
    const h = makeHome();
    const fake = startScriptedApi(["refuse"]);
    try {
      const env = cleanEnv(h.home, fake.url);
      const flags = ["--allowedTools", "Bash(echo:*)"];
      expect((await runCli([DIST], ["-p", "first message", ...flags], { cwd: h.work, env })).code).toBe(0);
      const n = fake.requests.length;
      expect((await runCli([DIST], ["-p", "--continue", "second message", ...flags], { cwd: h.work, env })).code).toBe(0);
      const w = fake.requests.map(wire);
      expect(w[1].session).not.toBe(w[0].session); // 进程 1：重试更换了会话 ID
      expect(w[n].session).toBe(w[0].session); // 进程 2：回到本地标识
      expect(w[n].device).toBe(w[0].device);
    } finally {
      fake.stop();
      h.remove();
    }
  });

  test("拒答重试时流式请求 404、改用非流式重发：沿用同一份临时身份", async () => {
    const { r, fake } = await retryRun(["refuse", "notfound"], FIRST_PARTY);
    expect(r.code).toBe(0);
    expect(fake.nonStreaming.length).toBe(1);
    const [first, retry] = fake.requests.map(wire);
    const fallback = wire(fake.nonStreaming[0]);
    expect(retry.session).not.toBe(first.session);
    for (const key of ["session", "sessionHeader", "device", "promptHeader", "billingPrompt"]) expect(fallback[key]).toBe(retry[key]);
  });

  // 默认配置（假 API 在 127.0.0.1，不是一方端点）与经中转站使用的形态相同：
  // 一方端点才有的头和字段在原版中即不发送，重试仍须更换 metadata 与默认会话请求头里的标识
  test("中转站形态（默认）下拒答重试同样更换会话与设备 ID，且不发送一方端点才有的字段", async () => {
    const { r, fake, result } = await retryRun(2);
    expect(r.code).toBe(0);
    const w = fake.requests.map(wire);
    expect(w.length).toBe(3);
    expect(w[0].session).toBe(result.session_id);
    for (const key of ["session", "device"]) expect(new Set(w.map((x) => x[key])).size).toBe(3);
    for (const x of w) {
      expect(x.sessionHeader).toBe(x.session);
      for (const key of ["promptHeader", "clientRequest", "prevRequest", "position", "thread"]) expect(x[key]).toBeUndefined();
    }
    for (const q of fake.requests) expect(q.body.diagnostics).toBeUndefined();
  });

  test("第 10 次重试成功时，本轮正常完成", async () => {
    const { r, fake, notices } = await retryRun(10);
    expect(r.code).toBe(0);
    expect(fake.requests.length).toBe(11);
    expect(notices.at(-1)).toContain("(10/10)");
  });

  test("重试 10 轮后仍被拦截：本轮以拒答错误结束，不换模型，不再发请求", async () => {
    const { fake, notices, result } = await retryRun(99);
    expect(fake.requests.length).toBe(11); // 1 次原请求 + 10 次重试
    expect(new Set(fake.requests.map((q) => q.body.model)).size).toBe(1); // 始终是原模型
    expect(notices.length).toBe(10);
    expect(result.is_error).toBe(true);
    expect(result.terminal_reason).toBe("api_error");
    expect(result.stop_reason).toBe("refusal");
  });

  // 重试预算按“连续被拦截的次数”计算：期间出现成功的响应（如正常停在 tool_use 并执行了工具）时清零
  test("重试预算只计连续的拒答：出现成功的步骤后清零", async () => {
    const script = [];
    for (let i = 0; i < 12; i++) script.push("refuse", "tool"); // 12 次拒答，每次之后都有一步成功的工具调用
    const { r, fake, notices, result } = await retryRun(script);
    expect(r.code).toBe(0);
    expect(notices.length).toBe(12);
    expect(notices.every((n) => n.includes("(1/10)"))).toBe(true); // 每次都是新的一轮重试，从 1 开始
    expect(result.terminal_reason).toBe("completed");
    expect(fake.requests.length).toBe(25); // 12 × (拒答 + 工具步) + 最后一次正常回复
  });

  test("两段各 10 次的连续拒答之间有成功步骤：每段各自从 1 计数，都在第 10 次重试成功", async () => {
    const script = [...Array(10).fill("refuse"), "tool", ...Array(10).fill("refuse")];
    const { r, notices, result } = await retryRun(script);
    expect(r.code).toBe(0);
    expect(notices.length).toBe(20);
    expect(notices.slice(0, 10).map((n) => n.match(/\((\d+)\/10\)/)[1])).toEqual(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
    expect(notices.slice(10).map((n) => n.match(/\((\d+)\/10\)/)[1])).toEqual(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
    expect(result.terminal_reason).toBe("completed");
  });

  // 终端界面：重试用尽后不显示“换模型/改提示词”的底部选择框，输入框可用
  test("交互界面：重试用尽后不显示换模型的底部选择框", async () => {
    const h = makeHome();
    const fake = startScriptedApi(99);
    try {
      const cols = 110, rows = 40;
      const env = cleanEnv(h.home, fake.url, { CLAUDE_CODE_SKIP_ONBOARDING: "1" });
      const { bytes } = await runInPty([DIST], { cwd: h.work, env, cols, rows, keys: [[0.5, "BLOCKME run something"], [1.0, "\r"]], idle: 5000, timeout: 90_000 });
      const text = (await renderScreen(bytes, cols, rows)).map((l) => l.text).join("\n");
      const main = fake.requests.filter((q) => q.body.tools?.length > 0); // 交互界面还会另发一个不带工具的辅助请求（标题）
      expect(main.length).toBe(11);
      expect(new Set(fake.requests.map((q) => q.body.model)).size).toBe(1);
      expect(text).toContain("(10/10)");
      expect(text).not.toMatch(/Model switch|Switch to|Stay on|keep going whenever this happens/);
      expect(text).toContain("❯"); // 输入框仍然显示
    } finally {
      fake.stop();
      h.remove();
    }
  }, 120_000);

  // 交互界面下标识的采用与沿用。按请求顺序取出每个请求的会话 ID 与设备 ID，相邻且相同的合并为一段（run）。
  // 一方端点形态下才有提示 ID 头，因此按一方端点配置；标题等辅助请求不带工具，以 main 区分
  const PTY_ENV = { CLAUDE_CODE_SKIP_ONBOARDING: "1", _CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL: "1", CLAUDE_CODE_GATEWAY_HINT_HEADERS: "1" };
  const ptyIdentityRuns = async (plan, keys) => {
    const h = makeHome();
    let mainSeen = 0;
    const fake = startScriptedApi((body) => (body.tools?.length > 0 ? plan(++mainSeen) : "ok"));
    try {
      await runInPty([DIST], { cwd: h.work, env: cleanEnv(h.home, fake.url, PTY_ENV), cols: 110, rows: 40, keys, idle: 5000, timeout: 170_000 });
      const projects = path.join(h.home, ".claude/projects");
      const sessions = fs.readdirSync(projects).flatMap((d) => fs.readdirSync(path.join(projects, d)).filter((f) => f.endsWith(".jsonl")));
      expect(sessions.length).toBe(1);
      const requests = fake.requests.map((q) => ({ ...wire(q), main: q.body.tools?.length > 0, asks: ["first", "second", "third"].filter((w) => JSON.stringify(q.body.messages).includes(`${w} message`)) }));
      const runs = [];
      for (const x of requests) {
        if (runs.at(-1)?.session === x.session) runs.at(-1).items.push(x);
        else runs.push({ session: x.session, device: x.device, items: [x] });
      }
      return { local: sessions[0].replace(".jsonl", ""), requests, runs }; // 会话文件名即本地会话 ID
    } finally {
      fake.stop();
      h.remove();
    }
  };
  const SECOND_THIRD = [[0.5, "first message"], [1.0, "\r"], [9, "second message"], [10, "\r"], [18, "third message"], [19, "\r"]];
  // 账单头的问数与轮数按本地会话计数，只在本地会话 ID 下出现：更换会话 ID 后的请求都不带，否则新 ID 会延续原会话的序号
  const expectPositionOnlyUnderLocal = (local, requests) => {
    for (const x of requests) {
      if (x.session !== local) expect(x.position).toBeUndefined();
      else if (x.main) expect(x.position).toBeDefined();
    }
  };

  test("交互界面：拒答重试成功后，后续所有请求（含标题等辅助请求）沿用该次重试的会话与设备 ID，不回到本地 ID", async () => {
    const { local, requests, runs } = await ptyIdentityRuns((n) => (n === 1 ? "refuse" : "ok"), SECOND_THIRD);
    expect(runs.length).toBe(2); // 本地标识 → 重试成功的身份，此后不再变化
    expect(runs[0].session).toBe(local);
    expect(runs[1].session).not.toBe(local);
    expect(runs[1].device).not.toBe(runs[0].device);
    expect(runs[1].items[0].main && runs[1].items[0].asks.join()).toBe("first"); // 第一个更换标识的请求是第一问的重试
    expect(runs[1].items.some((x) => !x.main)).toBe(true); // 之后的标题等辅助请求
    expect(runs[1].items.some((x) => x.main && x.asks.includes("third"))).toBe(true); // 第三问的主请求
    for (const x of requests) expect(x.sessionHeader).toBe(x.session); // 请求头与 metadata 一致
    expect(new Set(requests.map((x) => x.session + x.device)).size).toBe(2);
    expectPositionOnlyUnderLocal(local, requests);
  }, 180_000);

  test("交互界面：第二问被拒时，重试与之后的请求不带延续原会话的问数与轮数", async () => {
    const { local, requests, runs } = await ptyIdentityRuns((n) => (n === 2 ? "refuse" : "ok"), SECOND_THIRD);
    expect(runs.length).toBe(2);
    const main = (asks) => requests.filter((x) => x.main && x.asks.at(-1) === asks);
    expect(main("first").map((x) => x.position)).toEqual(["cc_prompt_index=1; cc_turn_index=1"]);
    const [refused, retry] = main("second");
    expect(refused.session).toBe(local);
    expect(refused.position).toBe("cc_prompt_index=2; cc_turn_index=2");
    expect(retry.session).not.toBe(local);
    expect(retry.position).toBeUndefined(); // 原版为 2、2：新会话 ID 延续原会话的序号
    expect(main("third").length).toBeGreaterThan(0);
    expectPositionOnlyUnderLocal(local, requests);
  }, 180_000);

  test("交互界面：被拒的候选标识不采用，之后的重试成功时换成新的标识，不回到出现过的标识", async () => {
    // 第一问：本地标识被拒 → 候选 1 被拒 → 候选 2 成功；第二问：以候选 2 发出后被拒 → 候选 3 成功；第三问使用候选 3
    const { local, requests, runs } = await ptyIdentityRuns((n) => (n === 1 || n === 2 || n === 4 ? "refuse" : "ok"), [[0.5, "first message"], [1.0, "\r"], [12, "second message"], [13, "\r"], [24, "third message"], [25, "\r"]]);
    expect(runs.length).toBe(4);
    expect(new Set(runs.map((r) => r.session)).size).toBe(4); // 没有任何一段回到之前出现过的标识
    expect(runs[0].session).toBe(local);
    expect(runs[1].items.length).toBe(1); // 候选 1 被拒，只使用一次，未被采用
    expect(runs[2].items.some((x) => x.main && x.asks.includes("second"))).toBe(true); // 第二问以候选 2 发出（被拒）
    expect(runs[3].items.some((x) => x.main && x.asks.includes("third"))).toBe(true); // 第三问使用候选 3
    for (const x of requests) expect(x.sessionHeader).toBe(x.session);
    expect(new Set(requests.map((x) => x.session + x.device)).size).toBe(4);
    expectPositionOnlyUnderLocal(local, requests);
  }, 200_000);

  test("交互界面：重试 10 轮用尽仍被拒时，不采用任何候选标识，下一问从本地标识开始", async () => {
    const { local, requests, runs } = await ptyIdentityRuns((n) => (n <= 11 ? "refuse" : "ok"), [[0.5, "first message"], [1.0, "\r"], [14, "second message"], [15, "\r"]]);
    expect(runs.length).toBe(12); // 本地 + 10 个被拒的候选 + 回到本地
    expect(runs[0].session).toBe(local);
    expect(runs.at(-1).session).toBe(local);
    expect(runs.slice(1, -1).some((r) => r.session === local)).toBe(false);
    expect(runs.at(-1).items.some((x) => x.main && x.asks.includes("second"))).toBe(true);
    expectPositionOnlyUnderLocal(local, requests); // 回到本地会话 ID 后重新带序号，与本地会话一致
  }, 200_000);

  // 读取记忆目录里的文件一律先询问用户，不论权限模式、allow 规则还是 hook。-p 模式下无人回答，询问记为 permission_denial，内容不进入请求
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
      test(`${name}：Read / Bash 读取记忆文件时改为询问，内容不进入请求`, async () => {
        for (const toolOf of [memRead, bashCat]) {
          const r = await run(variant, toolOf);
          expect(r.leaked).toBe(false);
          expect(r.denials.length).toBe(1);
        }
      }, 60_000);
    }

    test("递归搜索记忆目录的上级目录：allow 规则和 bypass 模式下都先询问，内容不进入请求", async () => {
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

    test("写在引号内或选项里的记忆路径：allow 规则和 bypass 模式下都先询问，内容不进入请求", async () => {
      for (const variant of [VARIANTS["allow 规则"], VARIANTS.bypassPermissions]) {
        for (const toolOf of [
          ({ mem }) => ["Bash", { command: `bash -c "cat ${path.join(mem, "deploy.md")}"` }],
          ({ mem }) => ["Bash", { command: `grep --file=${path.join(mem, "deploy.md")} x.txt` }],
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

    test("写记忆文件（保存记忆）不被拦截", async () => {
      const r = await run(VARIANTS.bypassPermissions, ({ mem }) => ["Write", { file_path: path.join(mem, "new.md"), content: "hello\n" }]);
      expect(r.denials.length).toBe(0);
    }, 60_000);

    // 交互界面：出现 "Do you want to proceed?"，选 No 时内容不进入请求，选 Yes 时进入
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
      expect(sg?.type).toBe("dangerous_tool_use"); // 字段仍然发送
      const cc = sg.classifier_context, json = JSON.stringify(sg);
      for (const secret of ["alice_dev", "acme-corp", "private-repo", "secret-person", "secret-branch-name", "build.corp.example", "may push to", "Bash(rm:*)", "claw-addir-marker"]) expect(json).not.toContain(secret);
      // 路径只剩工作目录（主请求的 Environment 中已包含）；单独的 home 目录和各配置目录都不出现
      const paths = [...json.matchAll(/"(\/[^"]*)"/g)].map((m) => m[1]);
      expect(paths.length).toBeGreaterThan(0);
      for (const p of paths) expect(p === h.work || p === fs.realpathSync(h.work)).toBe(true);
      expect(cc.home_dir).toBeUndefined();
      expect(cc).toMatchObject({ v: 1, permission_mode: "auto", platform: process.platform === "darwin" ? "macos" : "linux", user_identity: null, rules: { allow: [], deny: [], ask: [] }, rule_roots: {} });
      expect(cc.live_cwd).toBe(h.work); // 分类器据此判断命令是否在工作目录内
      expect(cc.git_state.status.clean).toBe(false);
    } finally {
      fake.stop();
      h.remove();
    }
  });

  // 端点没有实现服务端分类器时（假 API 与中转站均如此），auto 模式退回本地分类器：另发不带工具的请求，让模型判断这次调用。
  // classify 让模型执行 command，假 API 以 verdict 作为分类器的回答；仓库、用户名和各项规则都设为可识别的值。
  // 返回退出码、被拒绝的调用、各分类器请求的提示词与消息文本，以及命令执行后 origin 的地址
  const classify = async (command, verdict) => {
    const h = makeHome();
    const fake = startScriptedApi(() => ({ tool: "Bash", input: { command, description: "repoint" } }), { nonStreamingText: verdict });
    try {
      const git = (...a) => spawnSync("git", a, { cwd: h.work, encoding: "utf8", env: { ...process.env, GIT_CONFIG_GLOBAL: "/dev/null", GIT_CONFIG_SYSTEM: "/dev/null" } });
      git("init", "-q", "-b", "feature/secret-branch-name");
      git("remote", "add", "origin", "https://github.com/acme-corp/hidden-repo-x1.git");
      fs.writeFileSync(path.join(h.work, "secret-notes.txt"), "x");
      const settings = { permissions: { deny: ["Bash(rm:*)"] }, autoMode: { environment: ["internal host build.corp.example"], allow: ["may push to acme-corp/hidden-repo-x1"], soft_deny: ["never touch prod-db-7"] } };
      fs.writeFileSync(path.join(h.home, ".claude/settings.json"), JSON.stringify(settings));
      const r = await runCli([DIST], ["-p", "repoint the remote", "--permission-mode", "auto", "--output-format", "stream-json", "--verbose"], { cwd: h.work, env: cleanEnv(h.home, fake.url, { USER: "alice_dev" }) });
      const result = r.output.split("\n").flatMap((l) => { try { return [JSON.parse(l)]; } catch { return []; } }).find((e) => e.type === "result");
      const texts = (content) => (Array.isArray(content) ? content.map((b) => b.text ?? "") : [String(content ?? "")]);
      const classifier = fake.nonStreaming
        .map((q) => ({ system: texts(q.body.system).join("\n"), transcript: q.body.messages.flatMap((m) => texts(m.content)).join("") }))
        .filter((q) => q.system.includes("security monitor for autonomous AI coding agents"));
      return { code: r.code, denials: (result?.permission_denials ?? []).map((d) => d.tool_name), classifier, origin: git("remote", "get-url", "origin").stdout.trim() };
    } finally {
      fake.stop();
      h.remove();
    }
  };
  const OTHER_REPO = "https://github.com/other-org/other-repo.git";
  // 分类器的每个请求（拦截时有两个阶段）里，用户名、规则原文、当前仓库的名字、分支和文件名都不出现
  const expectClassifierRedacted = (classifier) => {
    expect(classifier.length).toBeGreaterThan(0); // 本地分类器的请求已发出，后续断言有检查对象
    for (const { system, transcript } of classifier) {
      for (const secret of ["alice_dev", "acme-corp", "hidden-repo-x1", "build.corp.example", "may push to", "prod-db-7", "Bash(rm:*)"]) {
        expect(system).not.toContain(secret);
        expect(transcript).not.toContain(secret);
      }
      expect(system).not.toContain("## Session Context");
      expect(transcript).not.toMatch(/secret-notes|secret-branch-name/);
    }
  };

  test("本地分类器脱敏：提示词不带用户名与规则，元信息行不带当前仓库的名字和文件清单，命令中写明的仓库保留", async () => {
    const command = `git reset --hard && git remote set-url origin ${OTHER_REPO}`;
    const { code, denials, classifier, origin } = await classify(command, "<severity>0</severity><block>no</block>");
    expect(code).toBe(0);
    expectClassifierRedacted(classifier);
    for (const { transcript } of classifier) {
      expect(transcript).toContain(JSON.stringify({ Bash: command })); // 待判断的命令原样保留
      const meta = [...transcript.matchAll(/^\{"meta":(.*)\}$/gm)].map((m) => JSON.parse(m[1]));
      expect(meta).toContainEqual({ repoVisibility: { remote: "redacted", visibility: "unknown" } }); // 当前仓库：名字替换为占位符，可见性保留
      expect(meta).toContainEqual({ repoVisibility: { remote: "other-org/other-repo", visibility: "unknown" } }); // 命令中写明的目的地保留
      const status = meta.find((m) => m.gitStatus !== undefined)?.gitStatus;
      expect(status).toEqual({ staged: 0, modified: 0, untracked: expect.any(Number) }); // 工作区有改动：只有计数，没有文件清单
      expect(status.untracked).toBeGreaterThan(0);
    }
    expect(denials).toEqual([]); // 分类器放行，命令已执行
    expect(origin).toBe(OTHER_REPO);
  });

  test("本地分类器判定拦截时：调用不执行并记为被拒绝，两个阶段的请求都已脱敏", async () => {
    const { code, denials, classifier, origin } = await classify(`git remote set-url origin ${OTHER_REPO}`, "<severity>90</severity><block>yes</block><reason>blocked by test</reason>");
    expect(code).toBe(0);
    expectClassifierRedacted(classifier);
    expect(denials).toEqual(["Bash"]);
    expect(origin).toBe("https://github.com/acme-corp/hidden-repo-x1.git"); // 命令没有执行
  });

  // CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC 固定为开启：环境变量与 settings.json 的 env 都无法关闭，登录引导等请求不发出
  test("非必要网络流量始终关闭：不论环境变量和 settings 如何设置，-p 下不向外部发送任何请求", async () => {
    const h = makeHome();
    const fake = startFakeApi(h.work);
    // 只做记录的假 HTTP 代理：经 HTTPS_PROXY 的 CONNECT 都被记录（本机的假 API 在 NO_PROXY 中，不经过它）
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

  // 原版在交互界面启动时自动安装官方插件市场，在首次引导开始时检查连通性；二者都不受 CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC 控制。
  // 这里去掉测试环境中关闭自动安装的变量，用替身与代理记录外部访问（见 harness.js 的 trapExternalAccess）
  test("非必要网络流量始终关闭：交互界面启动与首次引导不访问外部服务", async () => {
    for (const fresh of [false, true]) {
      const h = makeHome({ fresh }), fake = startFakeApi(h.work);
      const env = cleanEnv(h.home, fake.url);
      delete env.CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL;
      delete env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC;
      const trap = trapExternalAccess(env, path.join(h.home, "trap"));
      try {
        // 输出静止 4 秒后结束：原版的自动安装在启动约 3 秒后开始克隆
        const { timedOut } = await runInPty([DIST], { cwd: h.work, env: trap.env, cols: 100, rows: 30, keys: [], idle: 4000 });
        expect(timedOut).toBe(false);
        expect([fresh, trap.attempts()]).toEqual([fresh, []]);
      } finally {
        trap.stop();
        fake.stop();
        h.remove();
      }
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
      expect(sent).toContain(path.join(mem, "MEMORY.md")); // 路径仍然发送
      expect(sent).toContain("Memory access policy");
    } finally {
      fake.stop();
      h.remove();
    }
  });

  // 与已安装的 claude 共存：update / install 不联网、不改共享配置，交互使用时不改注册 claude-cli:// 处理程序
  describe("与已安装的 claude 共存", () => {
    for (const cmd of ["update", "upgrade", "install"]) {
      test(`${cmd} 直接退出：不联网、不写 installMethod、不创建 ~/.local`, async () => {
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
      const NO_SETTINGS = Object.freeze(Object.create(null)); // 不带隔离 HOME 默认的 disableDeepLinkRegistration：验证对象是补丁本身
      const h = makeHome({ settings: NO_SETTINGS });
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
          spawnSync(lsregister, ["-u", path.join(h.home, "Applications/Claude Code URL Handler.app")]); // 若已注册则撤销，不在系统中留下指向临时目录的条目
        }
        fake.stop();
        h.remove();
      }
    }, 60_000);
  });
});
