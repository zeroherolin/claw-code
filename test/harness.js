// 测试共用：隔离的运行环境、本地假 Anthropic API、在伪终端里驱动 CLI 并回放屏幕。
// 所有测试都使用假 API key，模型请求只发往 127.0.0.1 上的假 API；隔离环境关闭了其余的外部访问（见 cleanEnv），
// 例外是首次引导时原版的连通性检查（对比测试的 onboarding 场景，见 README 的「测试」一节）。
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { Terminal } from "@xterm/headless";

export const ROOT = path.resolve(import.meta.dir, "..");
export const DIST = path.join(ROOT, "dist/claude");
export const VERSION = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8")).version;
const FAKE_KEY = "sk-ant-fake-test-key-tail";
const CLEAN_PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin";

// ---------- 隔离的 HOME ----------

/**
 * 创建一个隔离的 HOME：已完成引导、已批准假 API key、已信任工作目录 <home>/work。
 * fresh 为 true 时不写全局配置，保留全新状态（用于测试首次引导）。
 * settings 写入 <home>/.claude/settings.json。默认关闭 claude-cli:// 处理程序的自动注册：交互使用时 CLI 会把处理程序
 * 注册为当前可执行文件，在 macOS 的 Launch Services 里留下指向临时目录的登记，目录删除后登记仍然保留。
 * 返回真实路径（macOS 上 /var → /private/var），CLI 报告的路径都是解析过符号链接的。
 */
export function makeHome({ fresh = false, settings = { disableDeepLinkRegistration: "disable" } } = {}) {
  const home = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "claw-test-")));
  const work = path.join(home, "work");
  fs.mkdirSync(path.join(home, ".claude"), { recursive: true });
  fs.mkdirSync(work);
  fs.writeFileSync(path.join(work, "fixture.txt"), "fixture-content-123\n");
  fs.writeFileSync(path.join(work, "x.txt"), "alpha\nneedle here\n");
  fs.writeFileSync(path.join(home, ".claude/settings.json"), JSON.stringify(settings));
  if (!fresh) {
    fs.writeFileSync(path.join(home, ".claude/.claude.json"), JSON.stringify({
      numStartups: 5, theme: "dark", hasCompletedOnboarding: true, lastOnboardingVersion: VERSION, tipsHistory: {},
      customApiKeyResponses: { approved: [FAKE_KEY.slice(-20)], rejected: [] }, // 按 key 的后 20 个字符匹配
      projects: { [work]: { hasTrustDialogAccepted: true, allowedTools: [] } },
    }));
  }
  return { home, work, remove: () => fs.rmSync(home, { recursive: true, force: true }) };
}

/**
 * 干净的进程环境：不继承当前 shell 的任何变量。
 * 关闭官方插件市场的自动安装：交互界面启动时，CLI 从 downloads.claude.ai 下载官方插件市场，失败时用 ssh 探测
 * github.com 并从 GitHub 克隆到 <配置目录>/plugins/marketplaces；CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC 不关闭这一步。
 * 克隆的目标位于隔离的 HOME 中：测试结束 CLI 时克隆可能仍在进行，它的写入、清理与删除 HOME 同时发生时，
 * rmSync 不报错而目录保留。
 */
export function cleanEnv(home, apiUrl, extra = {}) {
  return {
    PATH: CLEAN_PATH, HOME: home, CLAUDE_CONFIG_DIR: path.join(home, ".claude"),
    TERM: "xterm-256color", COLORTERM: "truecolor",
    DISABLE_AUTOUPDATER: "1", DISABLE_TELEMETRY: "1", CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
    CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL: "1",
    ANTHROPIC_BASE_URL: apiUrl, ANTHROPIC_API_KEY: FAKE_KEY,
    ...extra,
  };
}

// ---------- 外部访问 ----------

/**
 * 拦截并记录 CLI 对外部服务的访问：PATH 最前面放 ssh 与 git 的替身，另启动一个只做记录的 HTTP 代理。
 * 替身与代理都使访问失败，没有请求离开本机。git 的替身只拦截网络子命令（clone、fetch、pull、push、ls-remote），
 * 其余转交真实的 git：CLI 用本地的 git 命令判断 git 是否可用。
 * @param env 进程环境（cleanEnv 的结果）
 * @param dir 放置替身的目录，不存在时创建
 * @returns {{ env: object, attempts: () => string[], stop: () => void }} env 为加入替身与代理之后的环境
 */
export function trapExternalAccess(env, dir) {
  const log = path.join(dir, "attempts.log");
  const git = Bun.which("git", { PATH: env.PATH });
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(log, "");
  fs.writeFileSync(path.join(dir, "ssh"), `#!/bin/sh\necho "ssh $*" >> '${log}'\nexit 255\n`, { mode: 0o755 });
  if (git) fs.writeFileSync(path.join(dir, "git"), `#!/bin/sh\nfor a in "$@"; do case $a in clone|fetch|pull|push|ls-remote) echo "git $a" >> '${log}'; exit 128;; esac; done\nexec '${git}' "$@"\n`, { mode: 0o755 });
  const connects = [];
  const proxy = Bun.listen({
    hostname: "127.0.0.1", port: 0,
    socket: { data(socket, chunk) { connects.push(String(chunk).split("\r\n")[0]); socket.end("HTTP/1.1 502 Bad Gateway\r\n\r\n"); } },
  });
  const url = `http://127.0.0.1:${proxy.port}`;
  return {
    env: { ...env, PATH: `${dir}:${env.PATH}`, HTTPS_PROXY: url, HTTP_PROXY: url, NO_PROXY: "127.0.0.1,localhost" },
    attempts: () => [...fs.readFileSync(log, "utf8").split("\n").filter(Boolean), ...connects],
    stop: () => proxy.stop(true),
  };
}

// ---------- 假 Anthropic Messages API ----------

// 首条用户消息中的关键词 → 预设回复（文本或工具调用）
const SCENARIOS = [
  ["CALL_FINDGREP", { tool: "Bash", input: { command: "type find grep rg | head -3; find . -name '*.txt' | sort; grep -rn needle . ; rg --version | head -1", description: "Probe search tools" } }],
  ["CALL_BASH", { tool: "Bash", input: { command: "echo hello-from-tool", description: "Print greeting" } }],
  ["CALL_READ", { tool: "Read", input: (work) => ({ file_path: path.join(work, "fixture.txt") }) }],
  ["CALL_WRITE", { tool: "Write", input: (work) => ({ file_path: path.join(work, "new.txt"), content: "hello\n世界\n" }) }],
  ["CALL_MD", { text: "# Heading\n\nSome **bold** and *italic* and `code` text with a [link](https://example.com).\n\n- item one\n- item 两个 🎉\n\n```js\nconst x = 1; // comment\nfunction f(a) { return a * 2; }\n```\n\n| col | 列 |\n|---|---|\n| a | 中文 |\n\n> quote שלום עולם مرحبا\n" }],
  ["CALL_LONG", { text: "The quick brown fox jumps over the lazy dog. 敏捷的棕色狐狸跳过了懒狗。 ".repeat(12) }],
];

function replyFor(body, work) {
  const msgs = body.messages ?? [];
  const users = msgs.filter((m) => m.role === "user");
  const last = users.at(-1);
  const parts = Array.isArray(last?.content) ? last.content : [{ type: "text", text: String(last?.content ?? "") }];
  const toolResult = parts.find((p) => p.type === "tool_result");
  if (toolResult) {
    const c = Array.isArray(toolResult.content) ? toolResult.content.map((x) => x.text ?? "").join("") : String(toolResult.content ?? "");
    return { text: "DONE: " + c.trim().slice(0, 60) };
  }
  if (msgs.some((m) => m.role === "assistant")) return { text: "END" }; // 后续轮次直接结束，避免循环
  const first = JSON.stringify(users[0]?.content ?? "");
  const hit = SCENARIOS.find(([kw]) => first.includes(kw))?.[1];
  if (!hit) return { text: "PONG" };
  return hit.tool ? { tool: hit.tool, input: typeof hit.input === "function" ? hit.input(work) : hit.input } : { text: hit.text };
}

function sse(id, model, r) {
  const usage = { input_tokens: 10, output_tokens: 5, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
  const [start, delta] = r.tool
    ? [{ type: "tool_use", id: `toolu_fake_${id}`, name: r.tool, input: {} }, { type: "input_json_delta", partial_json: JSON.stringify(r.input) }]
    : [{ type: "text", text: "" }, { type: "text_delta", text: r.text }];
  return [
    { type: "message_start", message: { id: `msg_fake_${id}`, type: "message", role: "assistant", model, content: [], stop_reason: null, stop_sequence: null, usage } },
    { type: "content_block_start", index: 0, content_block: start },
    { type: "content_block_delta", index: 0, delta },
    { type: "content_block_stop", index: 0 },
    { type: "message_delta", delta: { stop_reason: r.tool ? "tool_use" : "end_turn", stop_sequence: null }, usage: { output_tokens: 5 } },
    { type: "message_stop" },
  ].map((e) => `event: ${e.type}\ndata: ${JSON.stringify(e)}\n\n`).join("");
}

/**
 * 启动假 API（随机端口）。requests 依次记录每个 /v1/messages 请求的 { url, headers, body }。
 * @param work Read / Write 场景使用的工作目录
 */
export function startFakeApi(work) {
  const requests = [];
  let n = 0;
  const server = Bun.serve({
    hostname: "127.0.0.1", port: 0,
    async fetch(req) {
      const url = new URL(req.url).pathname;
      if (!url.includes("/v1/messages")) return Response.json({ type: "error", error: { type: "not_found_error", message: "fake" } }, { status: 404 });
      const body = await req.json().catch(() => ({}));
      if (url.includes("count_tokens")) return Response.json({ input_tokens: 100 });
      const id = ++n;
      const headers = Object.fromEntries([...req.headers].filter(([k]) => k.startsWith("anthropic") || k === "x-app"));
      requests.push({ url, headers, body });
      const r = replyFor(body, work), model = body.model ?? "claude-test";
      if (!body.stream) {
        const content = r.tool ? [{ type: "tool_use", id: `toolu_fake_${id}`, name: r.tool, input: r.input }] : [{ type: "text", text: r.text }];
        return Response.json({ id: `msg_fake_${id}`, type: "message", role: "assistant", model, content, stop_reason: r.tool ? "tool_use" : "end_turn", stop_sequence: null, usage: { input_tokens: 10, output_tokens: 5 } }, { headers: { "request-id": "req_fake" } });
      }
      return new Response(sse(id, model, r), { headers: { "content-type": "text/event-stream", "request-id": "req_fake", "anthropic-ratelimit-unified-status": "allowed" } });
    },
  });
  return { url: `http://127.0.0.1:${server.port}`, port: server.port, requests, stop: () => server.stop(true) };
}

// ---------- 运行 CLI ----------

/** 非交互运行一次（stdin 为空），返回合并后的 stdout+stderr 与退出码 */
export async function runCli(cmd, args, { cwd, env, timeout = 60_000 }) {
  const proc = Bun.spawn([...cmd, ...args], { cwd, env, stdin: "ignore", stdout: "pipe", stderr: "pipe" });
  const timer = setTimeout(() => proc.kill("SIGKILL"), timeout);
  const [out, err] = await Promise.all([new Response(proc.stdout).text(), new Response(proc.stderr).text()]);
  const code = await proc.exited;
  clearTimeout(timer);
  return { output: out + err, code };
}

/**
 * 在固定尺寸的伪终端里运行交互式 CLI，返回原始输出字节与是否超时。
 *   1. 等启动输出静止 idle 毫秒；
 *   2. 按 keys 发送按键，时刻相对第 1 步结束时（秒），保持按键之间的间隔（如双击 Esc）；
 *   3. 从最后一次按键或输出起，静止 idle 毫秒后结束。
 * 以输出静止为准而不是固定时刻：机器繁忙时启动或回合变慢，不会截到中间状态。
 * 按键也计为一次活动：否则按键前已静止一段时间时，程序尚未响应就会被判定为静止。
 * 启动后约 10 秒 CLI 会自行移除启动提示，截屏须在此之前完成，因此 idle 不宜过大。
 * @param keys [[秒, 按键文本], ...]
 * @returns {{ bytes: Buffer, timedOut: boolean }} timedOut：timeout 毫秒内输出始终没有静止
 */
export async function runInPty(cmd, { cwd, env, cols, rows, keys, idle = 1500, timeout = 30_000 }) {
  const chunks = [];
  let last = 0;
  const proc = Bun.spawn(cmd, { cwd, env, terminal: { cols, rows, data: (_t, d) => (chunks.push(Buffer.from(d)), (last = performance.now())) } });
  const deadline = performance.now() + timeout;
  let timedOut = false;
  const settle = async () => {
    while (!last || performance.now() - last < idle) {
      if (performance.now() > deadline) return (timedOut = true);
      await Bun.sleep(50);
    }
  };
  await settle();
  const t0 = performance.now();
  for (const [at, text] of keys) {
    await Bun.sleep(Math.max(0, at * 1000 - (performance.now() - t0)));
    proc.terminal.write(text);
    last = performance.now();
  }
  if (keys.length) await settle();
  proc.kill("SIGKILL");
  await proc.exited;
  return { bytes: Buffer.concat(chunks), timedOut };
}

/**
 * 把终端输出回放到 xterm，返回最终屏幕：每行 { text, cells }，cells 为 列号 → [字符, 属性摘要]。
 * 宽字符只记在它的首列。属性：前景/背景颜色模式与值、粗体 b、暗淡 d、斜体 i、下划线 u、反显 r、宽字符 W。
 */
export async function renderScreen(bytes, cols, rows) {
  const term = new Terminal({ cols, rows, allowProposedApi: true, scrollback: 0 });
  await new Promise((resolve) => term.write(bytes, resolve));
  const buf = term.buffer.active, screen = [];
  for (let y = 0; y < rows; y++) {
    const line = buf.getLine(y), cells = {};
    if (!line) { screen.push({ text: "", cells }); continue; }
    for (let x = 0; x < cols; x++) {
      const c = line.getCell(x);
      if (!c?.getChars()) continue;
      cells[x] = [c.getChars(), `${c.getFgColorMode()}.${c.getFgColor()}/${c.getBgColorMode()}.${c.getBgColor()}` +
        (c.isBold() ? "b" : "") + (c.isDim() ? "d" : "") + (c.isItalic() ? "i" : "") + (c.isUnderline() ? "u" : "") + (c.isInverse() ? "r" : "") + (c.getWidth() === 2 ? "W" : "")];
    }
    screen.push({ text: line.translateToString(true), cells });
  }
  return screen;
}
