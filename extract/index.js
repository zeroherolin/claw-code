#!/usr/bin/env bun
// 从官方 Claude Code 原生可执行程序重新生成本项目的 src/ assets/ reference/ docs/reference/ LICENSE。
//
//   bun extract/index.js [--binary <claude>] [--sdk-types <sdk-tools.d.ts>]
//
// 默认读取 extract/upstream/ 下的官方发布内容（获取方式见 extract/README.md）。
// 流水线：读取模块图 → 资源 → 格式化与分析 → 组装源码 → 参考资料 → LICENSE。
// src/main.js 与 src/runtime/ 为手写代码，不会被覆盖。
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";
import { readBunModules, readVersion, formatModule, readJson, writeJson } from "./lib.js";
import { scanAssetRefs, writeAssets } from "./assets.js";
import { analyzeStrings, analyzeTools, analyzeGates, analyzeCli } from "./analyze.js";
import { planLayout, writeSources, lineOffset } from "./assemble.js";
import { writeReference } from "./reference.js";
import { writeLicense } from "./license.js";

const HERE = import.meta.dir;
const ROOT = path.dirname(HERE);
const { values: args } = parseArgs({
  options: {
    binary: { type: "string", default: path.join(HERE, "upstream/claude-code-darwin-arm64/claude") },
    "sdk-types": { type: "string", default: path.join(HERE, "upstream/claude-code/sdk-tools.d.ts") },
  },
});

const t0 = performance.now();
const step = (msg) => console.log(`[${((performance.now() - t0) / 1000).toFixed(1).padStart(5)}s] ${msg}`);

for (const file of [args.binary, args["sdk-types"]]) {
  if (!fs.existsSync(file)) {
    console.error(`找不到 ${file}。请先获取官方发布内容（见 extract/README.md），或用 --binary / --sdk-types 指定位置。`);
    process.exit(2);
  }
}
const version = readVersion(args.binary);
const layoutFile = path.join(HERE, "layout", `${version}.json`);
if (!fs.existsSync(layoutFile)) throw new Error(`缺少 ${path.relative(ROOT, layoutFile)}：新版本需要先编写归档与命名规则（见 extract/README.md）`);
const layout = readJson(layoutFile);
step(`Claude Code ${version}`);

// 1. 模块图
const { modules } = readBunModules(args.binary);
step(`模块图：${modules.length} 个模块`);

// 2. 资源（先写到临时目录，成功后再替换 assets/）
const refs = scanAssetRefs(modules);
const tmpAssets = fs.mkdtempSync(path.join(ROOT, ".assets-"));
let assetIndex;
try {
  assetIndex = writeAssets(modules, refs, layout.assets, tmpAssets);
  fs.mkdirSync(path.join(tmpAssets, "sdk"), { recursive: true });
  fs.copyFileSync(args["sdk-types"], path.join(tmpAssets, "sdk/sdk-tools.d.ts"));
  writeJson(path.join(tmpAssets, "INDEX.json"), assetIndex);
  fs.chmodSync(tmpAssets, 0o755); // mkdtemp 建出的目录是 0700
  fs.rmSync(path.join(ROOT, "assets"), { recursive: true, force: true });
  fs.renameSync(tmpAssets, path.join(ROOT, "assets"));
} finally {
  fs.rmSync(tmpAssets, { recursive: true, force: true });
}
step(`资源：${assetIndex.length} 个`);

// 3. 格式化与静态分析
// raw：原版源码（命名与分区规则按它计算）；code：格式化后的源码；legal：抽出的第三方许可注释
const js = modules.filter((m) => m.loader === "js").map((m) => {
  const raw = m.contents.toString(m.encoding === "utf16le" ? "utf16le" : "latin1");
  return { id: m.name, raw, ...formatModule(raw) };
});
const analysis = { strings: analyzeStrings(js), tools: analyzeTools(js), gates: analyzeGates(js), cli: analyzeCli(js) };
step(`分析：${analysis.tools.length} 个工具、${analysis.strings.commands.length} 个命令定义、${Object.keys(analysis.gates.gates).length} 个特性开关、${analysis.cli.options.length} 个 CLI 选项`);

// 4. 组装源码
const owners = { tool: new Map(), command: new Map(), skill: new Map() };
const own = (m, id, name) => (m.get(id) ?? m.set(id, new Set()).get(id)).add(name);
for (const t of analysis.tools) if (!t.name.startsWith("(")) own(owners.tool, t.chunk, t.name);
for (const c of analysis.strings.commands) if (c.name && !c.name.startsWith("<")) own(owners.command, c.chunk, c.name);
for (const a of assetIndex) {
  const m = a.path.match(/^(skills|plugins)\/([^/]+)/);
  if (m) for (const c of a.referenced_by) own(owners.skill, c, m[2]);
}
const plan = planLayout(js, owners, layout.modules);
const loaderOf = Object.fromEntries(modules.map((m) => [m.name, m.loader]));
const assetPath = Object.fromEntries(assetIndex.map((a) => [a.bunfs, a.path]));
const srcDir = path.join(ROOT, "src");
const { legal, stat } = writeSources(js, plan, loaderOf, assetPath, srcDir, version);
const named = Object.values(plan).filter((p) => !/\/chunk-[a-z0-9]{8}\.js$/.test(p)).length;
step(`源码：${js.length} 个模块（${named} 个语义命名）；改写 ${stat.module} 处模块引用、${stat.text + stat.file + stat.napi} 处资源引用`);

// 5. 参考资料
const offsets = new Map();
const where = (chunk, line) => {
  const p = plan[chunk] ?? chunk;
  if (!line) return { path: p };
  if (!offsets.has(p)) offsets.set(p, lineOffset(srcDir, p));
  return { path: p, line: line + offsets.get(p) };
};
writeReference(analysis, where, {
  refDir: path.join(ROOT, "reference"), docDir: path.join(ROOT, "docs/reference"),
  sdkTypes: fs.readFileSync(args["sdk-types"], "utf8"), assetIndex,
});
writeJson(path.join(ROOT, "reference/module-map.json"), Object.fromEntries(Object.entries(plan).sort()));
step("参考资料：reference/、docs/reference/");

// 6. LICENSE
writeLicense(path.join(ROOT, "LICENSE"), {
  version,
  upstreamLicense: fs.readFileSync(path.join(path.dirname(args.binary), "LICENSE.md"), "utf8").trim(),
  upstreamHeader: js.find((m) => m.id === "cli").raw.match(/^\/\/ @bun @bytecode\n((?:\/\/.*\n|\n)*?)\/\/ Version:/)?.[1] ?? "",
  legal,
});
step(`LICENSE：${legal.size} 段第三方许可声明`);
