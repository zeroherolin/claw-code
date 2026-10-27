// 参考资料阶段：把分析结果写成 reference/*.json（机器可读）与 docs/reference/*.md（人读）。
// 所有位置都已换算到 src/ 下的新路径与行号。
import fs from "node:fs";
import path from "node:path";
import { writeJson } from "./lib.js";

const esc = (s) => String(s ?? "").replace(/\|/g, "\\|").replace(/\n+/g, " ").trim();
const cut = (s, n) => { s = esc(s); return s.length > n ? s.slice(0, n - 1) + "…" : s; };
const md = (file, lines) => fs.writeFileSync(file, lines.join("\n") + "\n");

/**
 * @param analysis { strings, tools, gates, cli }：analyze.js 的输出
 * @param where    (chunk, line?) → { path, line }：换算到 src/ 新位置
 */
export function writeReference(analysis, where, { refDir, docDir, sdkTypes, assetIndex }) {
  fs.rmSync(refDir, { recursive: true, force: true });
  fs.rmSync(docDir, { recursive: true, force: true });
  fs.mkdirSync(path.join(refDir, "prompts"), { recursive: true });
  fs.mkdirSync(docDir, { recursive: true });
  const link = (chunk, line) => {
    const w = where(chunk, line);
    return w.line ? `[${w.path}:${w.line}](../../src/${w.path}#L${w.line})` : `[${w.path}](../../src/${w.path})`;
  };
  const at = (chunk, line) => where(chunk, line);
  const { strings, tools, gates, cli } = analysis;

  // ---- 工具 ----
  const schemas = new Set([...sdkTypes.matchAll(/export interface (\w+)Input\b/g)].map((m) => m[1]));
  writeJson(path.join(refDir, "tools.json"), tools.map(({ chunk, line, ...t }) => ({ ...t, ...at(chunk, line) })));
  const keyFreq = {};
  for (const t of tools) for (const k of t.keys) keyFreq[k] = (keyFreq[k] || 0) + 1;
  md(path.join(docDir, "TOOLS.md"), [
    "# 内置工具", "",
    "工具由工厂函数或对象字面量定义。属性值取自方法体的字面返回值，`<expr>` 表示运行时计算。",
    "输入输出的 JSON Schema 见 [`assets/sdk/sdk-tools.d.ts`](../../assets/sdk/sdk-tools.d.ts)（✦ 表示其中有同名的 `<Name>Input`）。", "",
    "| 工具 | 只读 | 可并发 | 延迟加载 | searchHint | 定义位置 |", "|---|---|---|---|---|---|",
    ...tools.map((t) => `| \`${esc(t.name)}\`${schemas.has(t.name) ? " ✦" : ""} | ${t.flags.isReadOnly ?? ""} | ${t.flags.isConcurrencySafe ?? ""} | ${t.shouldDefer ?? ""} | ${cut(t.searchHint, 60)} | ${link(t.chunk, t.line)} |`),
    "", "## 工具对象的属性（出现次数）", "",
    Object.entries(keyFreq).sort((a, b) => b[1] - a[1]).map(([k, n]) => `\`${k}\`(${n})`).join(" · "),
  ]);

  // ---- 斜杠命令 ----
  const commands = strings.commands.filter((c) => c.name && !c.name.startsWith("<"));
  writeJson(path.join(refDir, "commands.json"), commands.map(({ chunk, ...c }) => ({ ...c, path: at(chunk).path })));
  md(path.join(docDir, "COMMANDS.md"), [
    "# 斜杠命令", "",
    "`local`：本地执行并返回文本；`local-jsx`：渲染 Ink 组件；`prompt`：展开为发给模型的提示词。同名的多条通常对应交互与非交互两种实现。", "",
    "| 命令 | 类型 | 说明 | 定义位置 |", "|---|---|---|---|",
    ...commands.map((c) => `| \`/${esc(c.name)}\` | ${c.type} | ${cut(c.description === "[fn]" ? "（动态生成）" : c.description, 110)} | ${link(c.chunk)} |`),
  ]);

  // ---- Skill ----
  writeJson(path.join(refDir, "skills.json"), strings.skills.map(({ chunk, ...s }) => ({ ...s, path: at(chunk).path })));
  const skillDirs = [...new Set(assetIndex.map((x) => x.path).filter((p) => /^(skills|plugins)\//.test(p)).map((p) => p.split("/").slice(0, 2).join("/")))].sort();
  md(path.join(docDir, "SKILLS.md"), [
    "# 内置 Skill", "",
    "名称显示为 `<变量>` 时表示常量未能静态解析，可结合说明辨认。", "",
    "| 名称 | 用户可调用 | 说明 | 注册位置 |", "|---|---|---|---|",
    ...strings.skills.map((s) => `| \`${esc(s.name)}\` | ${s.userInvocable ?? ""} | ${cut(s.description, 120)} | ${link(s.chunk)} |`),
    "", "## Skill 正文与附带文件", "",
    ...skillDirs.map((d) => `- [\`assets/${d}/\`](../../assets/${d})：${assetIndex.filter((x) => x.path.startsWith(d + "/")).length} 个文件`),
  ]);

  // ---- CLI ----
  const loc = (o) => ({ ...o, ...at(o.chunk, o.line), chunk: undefined });
  writeJson(path.join(refDir, "cli.json"), { commands: cli.commands.map(loc), options: cli.options.map(loc) });
  const byCmd = {};
  for (const o of cli.options) if (!o.command.startsWith("<")) (byCmd[o.command] ??= []).push(o);
  md(path.join(docDir, "CLI.md"), [
    "# CLI 子命令与选项", "",
    "来源：commander 链式调用 `.command()` / `.option()` / `.addOption(new Option())`。“隐藏”表示不在 `--help` 中显示。", "",
    "## 子命令", "", "| 命令 | 说明 | 位置 |", "|---|---|---|",
    ...cli.commands.map((c) => `| \`${c.command}\` | ${cut(c.description, 110)} | ${link(c.chunk, c.line)} |`),
    ...Object.entries(byCmd).flatMap(([cmd, os]) => ["", `## 选项：${cmd}`, "", "| 选项 | 隐藏 | 说明 |", "|---|---|---|",
      ...os.map((o) => `| \`${o.flags}\` | ${o.hidden ? "✓" : ""} | ${cut(o.description, 140)}${o.choices ? `（可选值：${o.choices.join(", ")}）` : ""} |`)]),
  ]);

  // ---- 提示词 ----
  const prompts = strings.prompts.map((p) => {
    const w = at(p.chunk);
    const file = `prompts/${path.basename(w.path, ".js")}@${p.offset}.md`;
    fs.writeFileSync(path.join(refDir, file), p.text);
    return { file, module: w.path, chars: p.text.length, firstLine: p.firstLine };
  });
  writeJson(path.join(refDir, "prompts.json"), prompts);
  md(path.join(docDir, "PROMPTS.md"), [
    "# 提示词与长文本", "",
    `共 ${prompts.length} 段不少于 600 字符的字符串或模板字符串（已去重，已过滤代码高亮关键字表等非散文内容）。模板插值显示为 \`\${变量}\`。`, "",
    "| 字符数 | 首行 | 所在模块 | 全文 |", "|---:|---|---|---|",
    ...prompts.map((x) => `| ${x.chars} | ${cut(x.firstLine, 90)} | ${x.module} | [md](../../reference/${x.file}) |`),
  ]);

  // ---- 环境变量 ----
  const env = Object.entries(strings.env);
  writeJson(path.join(refDir, "env-vars.json"), Object.fromEntries(env.map(([k, v]) => [k, v.map((c) => at(c).path)])));
  const GROUPS = [["CLAUDE_CODE_*", (k) => k.startsWith("CLAUDE_CODE_")], ["CLAUDE_*", (k) => k.startsWith("CLAUDE_")], ["ANTHROPIC_*", (k) => k.startsWith("ANTHROPIC_")],
    ["云厂商 / OTEL", (k) => /^(OTEL_|AWS_|AZURE_|GOOGLE_|GCLOUD|CLOUD_ML|VERTEX|BEDROCK)/.test(k)], ["其他", () => true]];
  const grouped = new Map(GROUPS.map(([g]) => [g, []]));
  for (const e of env) grouped.get(GROUPS.find(([, test]) => test(e[0]))[0]).push(e);
  md(path.join(docDir, "ENV.md"), [
    "# 环境变量", "", `代码中以 \`process.env.X\` 读取的环境变量共 ${env.length} 个，下表列出读取位置。`, "",
    ...[...grouped].filter(([, es]) => es.length).flatMap(([g, es]) => [`## ${g}（${es.length}）`, "", "| 变量 | 读取位置 |", "|---|---|",
      ...es.map(([k, v]) => `| \`${k}\` | ${v.slice(0, 3).map((c) => link(c)).join(", ")}${v.length > 3 ? ` 等 ${v.length} 处` : ""} |`), ""]),
  ]);

  // ---- 特性开关 ----
  const gateList = Object.entries(gates.gates);
  writeJson(path.join(refDir, "feature-gates.json"), Object.fromEntries(gateList.map(([k, v]) => [k, { defaults: v.defaults, modules: v.chunks.map((c) => at(c).path) }])));
  md(path.join(docDir, "GATES.md"), [
    "# 特性开关（GrowthBook）", "",
    `共 ${gateList.length} 个，取值函数位于 ${link(gates.module)}。默认值即离线或禁用非必要流量时使用的值。`, "",
    "| 开关 | 默认值 | 使用位置 |", "|---|---|---|",
    ...gateList.map(([k, v]) => `| \`${k}\` | ${esc(v.defaults.map((x) => JSON.stringify(x)).join(" / "))} | ${v.chunks.slice(0, 2).map((c) => link(c)).join(", ")}${v.chunks.length > 2 ? " …" : ""} |`),
  ]);

  // ---- 遥测事件 ----
  writeJson(path.join(refDir, "telemetry-events.json"), Object.fromEntries(Object.entries(strings.telemetry).map(([k, v]) => [k, v.map((c) => at(c).path)])));
}
