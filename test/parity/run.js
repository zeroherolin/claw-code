#!/usr/bin/env bun
// 与官方可执行程序做行为对比：两边在相同的隔离环境中运行同一组用例，逐项比较输出、API 请求与终端屏幕。
//
//   bun test/parity/run.js [官方可执行程序] [--filter <正则>]
//
// 官方可执行程序默认为 extract/upstream/claude-code-darwin-arm64/claude，也可由 CLAUDE_ORIG_BIN 指定。
// 被测的是 dist/claude（先执行 npm run build）。
//
// 用例:
//   cli       CLI 自身输出（--version、--help、子命令帮助）
//   print     -p 非交互：输出（text / json / stream-json）以及发往 API 的每一个请求
//   tui       交互界面：scenarios/*.json 的按键脚本在固定尺寸伪终端中运行，比较最终屏幕的每个格子
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";
import { ROOT, DIST, makeHome, cleanEnv, startFakeApi, runCli, runInPty, renderScreen } from "../harness.js";
import { normalizeText, normalizeRequest, jsonDiff, screenDiff } from "./normalize.js";

const { values, positionals } = parseArgs({ allowPositionals: true, options: { filter: { type: "string" } } });
const ORIG = path.resolve(positionals[0] ?? process.env.CLAUDE_ORIG_BIN ?? path.join(ROOT, "extract/upstream/claude-code-darwin-arm64/claude"));
const filter = values.filter ? new RegExp(values.filter) : null;
for (const [what, file] of [["官方可执行程序（获取方式见 extract/README.md）", ORIG], ["dist/claude（先执行 npm run build）", DIST]]) {
  if (!fs.existsSync(file)) { console.error(`找不到${what}: ${file}`); process.exit(2); }
}

const CLI_CASES = [["--version"], ["--help"], ["mcp", "--help"], ["plugin", "--help"], ["config", "--help"], ["doctor", "--help"]];
const PRINT_CASES = {
  text: ["-p", "say hi"],
  json: ["-p", "say hi", "--output-format", "json"],
  stream: ["-p", "say hi", "--output-format", "stream-json", "--verbose"],
  bash: ["-p", "CALL_BASH please", "--allowedTools", "Bash(echo:*)"],
  read: ["-p", "CALL_READ please"],
  model: ["-p", "say hi", "--model", "sonnet"],
  sysprompt: ["-p", "say hi", "--append-system-prompt", "EXTRA RULE"],
  findgrep: ["-p", "CALL_FINDGREP please", "--allowedTools", "Bash"], // Bash 中 find/grep/rg 走内嵌工具
};
const SCENARIO_DIR = path.join(import.meta.dir, "scenarios");

let passed = 0, failed = 0;
const report = (name, diffs) => {
  if (!diffs.length) return passed++, console.log(`  ✓ ${name}`);
  failed++;
  console.log(`  ✗ ${name}`);
  for (const d of diffs) console.log(`      ${d.slice(0, 300)}`);
};

/** 用同一份配置分别运行原版与本项目，fn(bin, ctx) 的结果交给 compare */
async function both(opts, fn) {
  const out = [];
  for (const bin of [ORIG, DIST]) {
    const h = makeHome(opts), api = startFakeApi(h.work);
    try {
      out.push({ home: h.home, requests: api.requests, ...(await fn(bin, { ...h, api, env: cleanEnv(h.home, api.url) })) });
    } finally {
      api.stop();
      h.remove();
    }
  }
  return out;
}

console.log(`原版:   ${ORIG}\n本项目: ${DIST}\n`);

console.log("CLI 输出");
for (const args of CLI_CASES) {
  const name = `claude ${args.join(" ")}`;
  if (filter && !filter.test(name)) continue;
  const [o, n] = await both({}, (bin, c) => runCli([bin], args, { cwd: c.work, env: c.env }));
  const [a, b] = [normalizeText(o.output, o.home), normalizeText(n.output, n.home)];
  report(name, a === b && o.code === n.code ? [] : [`退出码 ${o.code} / ${n.code}`, ...jsonDiff(a.split("\n"), b.split("\n"), 3)]);
}

console.log("\n非交互模式（-p）");
for (const [name, args] of Object.entries(PRINT_CASES)) {
  if (filter && !filter.test(name)) continue;
  const [o, n] = await both({}, (bin, c) => runCli([bin], args, { cwd: c.work, env: c.env }));
  const [a, b] = [normalizeText(o.output, o.home), normalizeText(n.output, n.home)];
  const diffs = a === b && o.code === n.code ? [] : [`退出码 ${o.code} / ${n.code}`, ...jsonDiff(a.split("\n"), b.split("\n"), 3)];
  if (o.requests.length !== n.requests.length) diffs.push(`API 请求数 ${o.requests.length} ≠ ${n.requests.length}`);
  o.requests.forEach((r, i) => {
    for (const d of jsonDiff(normalizeRequest(r, o.home), normalizeRequest(n.requests[i] ?? {}, n.home), 4)) diffs.push(`请求 ${i + 1} ${d}`);
  });
  report(`${name}（输出 + ${o.requests.length} 个请求）`, diffs);
}

console.log("\n交互界面");
for (const file of fs.readdirSync(SCENARIO_DIR).filter((f) => f.endsWith(".json")).sort()) {
  const name = path.basename(file, ".json");
  if (filter && !filter.test(name)) continue;
  const sc = JSON.parse(fs.readFileSync(path.join(SCENARIO_DIR, file), "utf8"));
  const cols = sc.cols ?? 100, rows = sc.rows ?? 30;
  const [o, n] = await both({ fresh: sc.fresh }, async (bin, c) => {
    const raw = await runInPty([bin], { cwd: c.work, env: c.env, cols, rows, keys: sc.keys, end: sc.end });
    // 先在字节流上替换 HOME 与端口：长路径在窄屏上会折行，回放后就无法再匹配
    const text = raw.toString("latin1").split(c.home).join("<HOME>").replace(/127\.0\.0\.1:\d+/g, "127.0.0.1:<PORT>");
    return { screen: await renderScreen(Buffer.from(text, "latin1"), cols, rows) };
  });
  report(`${name}（${cols}×${rows}）`, screenDiff(o.screen, n.screen, o.home, n.home));
}

console.log(`\n通过 ${passed}，失败 ${failed}`);
process.exit(failed ? 1 : 0);
