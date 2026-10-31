#!/usr/bin/env bun
// 从官方 Claude Code 原生可执行程序重新生成本项目的 src/<系统>/、assets/、reference/、docs/reference/、LICENSE。
//
//   bun extract/index.js [--upstream <目录>]
//
// <目录>（默认 extract/upstream/）中是官方 npm 包解压后的内容，获取方式见 extract/README.md:
//   claude-code/                  主包：sdk-tools.d.ts、LICENSE.md
//   claude-code-<系统>-<架构>/     各平台的原生可执行程序，平台见 src/runtime/platforms.js
//
// 流水线：读取模块图 → 资源 → 格式化与架构还原 → 分析 → 跨系统对齐与命名 → 写出源码与资源 → 参考资料 → LICENSE。
// 读取与分析全部完成后才开始写入项目目录，中途出错不会留下新旧混杂的结果。
// src/main.js 与 src/runtime/ 为手写代码，不会被覆盖。
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";
import { readBunModules, readVersion, formatModule, HEADER_RE, readJson, writeJson } from "./lib.js";
import { scanAssetRefs, writeAssets } from "./assets.js";
import { unfoldArch } from "./unfold.js";
import { analyzeStrings, analyzeTools, analyzeGates, analyzeCli } from "./analyze.js";
import { alignModules } from "./align.js";
import { planLayout, clearGenerated, writeSources, lineOffset } from "./assemble.js";
import { writeReference } from "./reference.js";
import { writeLicense } from "./license.js";
import { SYSTEMS } from "../src/runtime/platforms.js";

const HERE = import.meta.dir;
const ROOT = path.dirname(HERE);
const { values: args } = parseArgs({ options: { upstream: { type: "string", default: path.join(HERE, "upstream") } } });
const upstream = path.resolve(args.upstream);

const t0 = performance.now();
const step = (msg) => console.log(`[${((performance.now() - t0) / 1000).toFixed(1).padStart(5)}s] ${msg}`);

const platforms = Object.entries(SYSTEMS).flatMap(([system, arches]) => arches.map((arch) => ({
  system, arch, name: `${system}-${arch}`, pkg: `@anthropic-ai/claude-code-${system}-${arch}`,
  binary: path.join(upstream, `claude-code-${system}-${arch}`, "claude"),
})));
const mainPkg = path.join(upstream, "claude-code");
const inputs = [...platforms.map((p) => p.binary), path.join(mainPkg, "sdk-tools.d.ts"), path.join(mainPkg, "LICENSE.md")];
const missing = inputs.filter((f) => !fs.existsSync(f));
if (missing.length) {
  console.error(`找不到以下官方发布内容（获取方式见 extract/README.md），或用 --upstream 指定目录:\n  ${missing.join("\n  ")}`);
  process.exit(2);
}
const versions = new Set(platforms.map((p) => readVersion(p.binary)));
if (versions.size !== 1) throw new Error(`各平台的版本不一致：${[...versions].join("、")}`);
const [version] = versions;
const layoutFile = path.join(HERE, "layout", `${version}.json`);
if (!fs.existsSync(layoutFile)) throw new Error(`缺少 ${path.relative(ROOT, layoutFile)}：新版本需要先编写归档与命名规则（见 extract/README.md）`);
const layout = readJson(layoutFile);
step(`Claude Code ${version}：${platforms.map((p) => p.name).join("、")}`);

// 1. 模块图
for (const p of platforms) p.modules = readBunModules(p.binary).modules;
step(`模块图：${platforms.map((p) => `${p.name} ${p.modules.length}`).join("，")} 个模块`);
const base = Object.fromEntries(Object.keys(SYSTEMS).map((s) => [s, platforms.find((p) => p.system === s)]));

// 2. 资源：先写到临时目录，第 6 步开始写入时再替换 assets/
const refs = Object.fromEntries(Object.entries(base).map(([s, p]) => [s, scanAssetRefs(p.modules)]));
const tmpAssets = fs.mkdtempSync(path.join(ROOT, ".assets-"));
process.on("exit", () => fs.rmSync(tmpAssets, { recursive: true, force: true }));
const { assets, bySystem } = writeAssets(platforms, refs, layout.assets, tmpAssets);
fs.mkdirSync(path.join(tmpAssets, "sdk"), { recursive: true });
fs.copyFileSync(path.join(mainPkg, "sdk-tools.d.ts"), path.join(tmpAssets, "sdk/sdk-tools.d.ts"));
fs.chmodSync(tmpAssets, 0o755); // mkdtemp 建出的目录是 0700
step(`资源：${assets.length} 个（其中原生模块 ${assets.filter((a) => a.platforms).length} 个）`);

// 3. 格式化与架构还原
// raw：原版源码（命名、分区与对齐按它计算）；code：格式化后的源码；legal：抽出的第三方许可注释
const format = (p) => p.modules.filter((m) => m.loader === "js").map((m) => {
  const raw = m.contents.toString(m.encoding === "utf16le" ? "utf16le" : "latin1");
  return { id: m.name, raw, ...formatModule(raw) };
});
const js = {};
for (const [system, arches] of Object.entries(SYSTEMS)) {
  js[system] = format(base[system]);
  if (arches.length < 2) continue;
  const others = platforms.filter((p) => p.system === system && p !== base[system]).map((p) => ({ arch: p.arch, mods: format(p) }));
  const { code, stat } = unfoldArch(base[system].arch, js[system], others);
  for (const m of js[system]) if (code.has(m.id)) m.code = code.get(m.id);
  step(`架构还原（${system}，${arches.join("、")}）：${stat.modules} 个模块，架构名 ${stat.arch} 处、DD_SOURCEMAP_GROUP ${stat.dd} 处`);
}

// 4. 静态分析
const analysis = {};
for (const [system, mods] of Object.entries(js)) {
  analysis[system] = { strings: analyzeStrings(mods), tools: analyzeTools(mods), gates: analyzeGates(mods), cli: analyzeCli(mods) };
  const a = analysis[system];
  step(`分析（${system}）：${a.tools.length} 个工具、${a.strings.commands.length} 个命令定义、${Object.keys(a.gates.gates).length} 个特性开关、${a.cli.options.length} 个 CLI 选项`);
}

// 5. 跨系统对齐与命名
const [sa, sb] = Object.keys(SYSTEMS);
const strip = (mods) => mods.map((m) => ({ id: m.id, code: m.raw.replace(HEADER_RE, "") }));
const pairs = alignModules(strip(js[sa]), strip(js[sb]));
const paired = new Set(pairs.values());
const groups = [
  ...[...pairs].map(([a, b]) => ({ [sa]: a, [sb]: b })),
  ...js[sa].filter((m) => !pairs.has(m.id)).map((m) => ({ [sa]: m.id })),
  ...js[sb].filter((m) => !paired.has(m.id)).map((m) => ({ [sb]: m.id })),
];
step(`对齐：${pairs.size} 组对应模块，${sa} 独有 ${js[sa].length - pairs.size} 个，${sb} 独有 ${js[sb].length - pairs.size} 个`);
const owners = {};
for (const [system, a] of Object.entries(analysis)) {
  const o = (owners[system] = { tool: new Map(), command: new Map(), skill: new Map() });
  const own = (m, id, name) => (m.get(id) ?? m.set(id, new Set()).get(id)).add(name);
  for (const t of a.tools) if (!t.name.startsWith("(")) own(o.tool, t.chunk, t.name);
  for (const c of a.strings.commands) if (c.name && !c.name.startsWith("<")) own(o.command, c.chunk, c.name);
  for (const x of assets) {
    const m = x.path.match(/^(skills|plugins)\/([^/]+)/);
    if (m) for (const c of x.chunks[system] ?? []) own(o.skill, c, m[2]);
  }
}
const plan = planLayout(groups, js, owners, layout.modules);

// 6. 写出源码与资源（从这里开始写入项目目录）
const srcDir = path.join(ROOT, "src");
clearGenerated(srcDir);
const legal = new Map(), stat = { module: 0, asset: 0 };
for (const [system, mods] of Object.entries(js)) {
  const loaderOf = Object.fromEntries(base[system].modules.map((m) => [m.name, m.loader]));
  const r = writeSources(mods, plan[system], { system, version, srcDir, loaderOf, assets: bySystem[system] });
  for (const [text, files] of r.legal) for (const f of files) (legal.get(text) ?? legal.set(text, new Set()).get(text)).add(f);
  stat.module += r.stat.module, stat.asset += r.stat.text + r.stat.file + r.stat.napi;
}
const pathOf = (system, chunk) => plan[system][chunk];
writeJson(path.join(tmpAssets, "INDEX.json"), assets.map(({ chunks, ...a }) => ({
  ...a, referenced_by: Object.fromEntries(Object.entries(chunks).map(([s, cs]) => [s, cs.map((c) => pathOf(s, c)).sort()])),
})));
fs.rmSync(path.join(ROOT, "assets"), { recursive: true, force: true });
fs.renameSync(tmpAssets, path.join(ROOT, "assets"));
const unnamed = new Set(Object.values(plan).flatMap((p) => Object.values(p)).filter((p) => /\/chunk-[0-9a-f]{8,}\.js$/.test(p))).size;
step(`源码：${Object.entries(js).map(([s, m]) => `${s} ${m.length}`).join("，")} 个模块（${unnamed} 个路径未能语义命名）；改写 ${stat.module} 处模块引用、${stat.asset} 处资源引用`);

// 7. 参考资料
const refRoot = path.join(ROOT, "reference"), docRoot = path.join(ROOT, "docs/reference");
fs.rmSync(refRoot, { recursive: true, force: true });
fs.rmSync(docRoot, { recursive: true, force: true });
for (const [system, a] of Object.entries(analysis)) {
  const sysSrc = path.join(srcDir, system), offsets = new Map();
  const where = (chunk, line) => {
    const p = plan[system][chunk] ?? chunk;
    if (!line) return { path: p };
    if (!offsets.has(p)) offsets.set(p, lineOffset(path.join(sysSrc, p)));
    return { path: p, line: line + offsets.get(p) };
  };
  writeReference(a, where, {
    system, refDir: path.join(refRoot, system), docDir: path.join(docRoot, system), srcDir: sysSrc, assetsDir: path.join(ROOT, "assets"),
    sdkTypes: fs.readFileSync(path.join(mainPkg, "sdk-tools.d.ts"), "utf8"), assetIndex: assets,
  });
}
// 模块对照：src/<系统>/ 下的路径 → 各系统的原 chunk id
const moduleMap = {};
for (const [system, p] of Object.entries(plan)) for (const [chunk, rel] of Object.entries(p)) (moduleMap[rel] ??= {})[system] = chunk;
writeJson(path.join(refRoot, "module-map.json"), Object.fromEntries(Object.entries(moduleMap).sort(([a], [b]) => (a < b ? -1 : 1))));
step("参考资料：reference/、docs/reference/");

// 8. LICENSE
writeLicense(path.join(ROOT, "LICENSE"), {
  version,
  packages: ["@anthropic-ai/claude-code", ...platforms.map((p) => p.pkg)],
  upstreamLicense: fs.readFileSync(path.join(mainPkg, "LICENSE.md"), "utf8").trim(),
  upstreamHeader: js[sa].find((m) => m.id === "cli").raw.match(/^\/\/ @bun @bytecode\n((?:\/\/.*\n|\n)*?)\/\/ Version:/)?.[1] ?? "",
  legal,
});
step(`LICENSE：${legal.size} 段第三方许可声明`);
