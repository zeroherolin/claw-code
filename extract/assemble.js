// 组装阶段：把各系统的原版 JS 模块整理成 src/<系统>/ 下按功能分目录、语义化命名的可读源码。
// 两个系统中对应的模块（见 align.js；按内容未配上、但语义名在各系统中唯一相同的也算）使用相同的路径。
//
// 只改“位置与排版”（架构还原见 unfold.js）:
//   1. 去掉 Bun 字节码标记与法律声明头；esbuild 等价重新打印；第三方许可注释抽出由 LICENSE 汇总
//   2. "/$bunfs/root/<chunk>.js"           → 相对路径
//   3. text 资源  $e("/$bunfs/root/X")     → __asset_text("<rel>")
//      file 资源  "/$bunfs/root/X"         → __asset_path("<rel>")
//      napi 资源  $e("/$bunfs/root/X")     → $e(__asset_native("<名字>"))（按当前平台取 native/<平台>/<名字>）
//   4. 构建宏 HOOKS_WORKER_URL             → __asset_src("<系统>/<rel>")
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { classify } from "./areas.js";
import { semanticName } from "./naming.js";

const HANDWRITTEN = ["main.js", "runtime"]; // src/ 下手写、重新生成时保留的条目
const HOOKS_WORKER_ID = "src/plugins/functionHooks/hooks-worker/hooks-worker.js";
const NATIVE_WRAPPER = /^(?!chunk-)[\w-]+\.js$/; // 原生模块的 JS 包装（audio-capture.js 等），模块名本身就是文件名

/**
 * 按特征字符串定位人工命名的模块：每条的 match 须全部出现在且只出现在一个模块的源码中。
 * chunk id 每个版本、每个系统都不同，特征字符串（提示词片段、事件名、选项名等）通常不变。
 * @param curated { 路径: { match: string[] } }
 * @returns { chunkId: 路径 }
 */
export function locateCurated(mods, curated, system) {
  const byId = {}, problems = [];
  for (const [rel, { match }] of Object.entries(curated)) {
    const hits = mods.filter((m) => match.every((s) => m.raw.includes(s)));
    if (hits.length !== 1) problems.push(`${rel}：${JSON.stringify(match)} 命中 ${hits.length} 个模块${hits.length ? `（${hits.slice(0, 5).map((m) => m.id).join("、")}）` : ""}`);
    else if (byId[hits[0].id]) problems.push(`${rel} 与 ${byId[hits[0].id]} 命中同一个模块 ${hits[0].id}`);
    else byId[hits[0].id] = rel;
  }
  if (problems.length) throw new Error(`layout 中的人工命名在 ${system} 中无法唯一定位，请调整 match 或删除该条（见 extract/README.md#升级到新版本）:\n  ${problems.join("\n  ")}`);
  return byId;
}

const smaller = (a, b) => (a < b ? a : b);
const hashOf = (group) => createHash("sha1").update(Object.entries(group).sort().map(([s, id]) => `${s}:${id}`).join("\n")).digest("hex");

/**
 * 为每个模块确定 src/<系统>/ 下的相对路径。
 * @param groups   逻辑模块 { [系统]: chunk id }[]：对应的模块为一组，系统独有的模块单独成组
 * @param mods     { [系统]: { id, raw }[] }：原版模块源码（未格式化，命名与分区规则按它计算）
 * @param owners   { [系统]: { tool, command, skill } }：chunk id → 该 chunk 定义的名字集合（来自分析阶段）
 * @param curated  人工命名 { 路径: { match } }，优先于自动命名
 * @returns { [系统]: { chunkId: 路径 } }
 */
export function planLayout(groups, mods, owners, curated) {
  const systems = Object.keys(mods);
  const raw = Object.fromEntries(systems.map((s) => [s, new Map(mods[s].map((m) => [m.id, m.raw]))]));
  const named = Object.fromEntries(systems.map((s) => [s, locateCurated(mods[s], curated, s)]));
  const sets = Object.fromEntries(systems.map((s) => [s, Object.fromEntries(["tool", "command", "skill"].map((k) => [k, new Set(owners[s][k].keys())]))]));
  const only = (m, id) => (m.get(id)?.size === 1 ? [...m.get(id)][0] : undefined);

  // 每组先确定“目录/名字”（不含扩展名），各成员的结果不同时取字典序较小者
  const planned = groups.map((group) => {
    const fixed = new Set(), dirs = new Set(), names = new Set();
    for (const [s, id] of Object.entries(group)) {
      if (id === "cli") fixed.add("cli"); // 入口模块
      else if (id === HOOKS_WORKER_ID) fixed.add("hooks/hooks-worker");
      else if (NATIVE_WRAPPER.test(id)) fixed.add(`native/${id.slice(0, -3)}`);
      else if (named[s][id]) fixed.add(named[s][id]);
      else {
        dirs.add(classify(id, raw[s].get(id), sets[s]));
        const o = owners[s];
        const n = semanticName(raw[s].get(id), { tool: only(o.tool, id), command: only(o.command, id), skill: only(o.skill, id) });
        if (n) names.add(n);
      }
    }
    if (fixed.size > 1) throw new Error(`同一组模块在各系统中的固定路径不同：${[...fixed].join("、")}（${JSON.stringify(group)}）`);
    if (fixed.size) return { group, base: [...fixed][0], fixed: true };
    const dir = [...dirs].reduce(smaller);
    return { group, base: names.size ? `${dir}/${[...names].reduce(smaller)}` : null, dir };
  });
  for (const s of systems) {
    const lost = Object.entries(named[s]).filter(([id]) => !planned.some((p) => p.fixed && p.group[s] === id));
    if (lost.length) throw new Error(`人工命名的模块在各系统中没有互相对应：${lost.map(([, rel]) => rel).join("、")}`);
  }
  // 按内容没能配对、但语义名相同且在每个系统的未配对模块中都恰好出现一次的，视为对应模块，合为一组
  const lonely = new Map();
  for (const p of planned) if (p.base && !p.fixed && Object.keys(p.group).length === 1) (lonely.get(p.base) ?? lonely.set(p.base, []).get(p.base)).push(p);
  for (const list of lonely.values()) {
    const by = Object.groupBy(list, (p) => Object.keys(p.group)[0]);
    if (list.length !== systems.length || systems.some((s) => by[s]?.length !== 1)) continue;
    const [first, ...rest] = list;
    for (const p of rest) Object.assign(first.group, p.group), planned.splice(planned.indexOf(p), 1);
  }

  // 名字唯一的直接用 <名字>.js；重名的都加上组的短哈希；无名的用 chunk-<哈希>
  const count = new Map();
  for (const p of planned) if (p.base) count.set(p.base, (count.get(p.base) ?? 0) + 1);
  const plan = Object.fromEntries(systems.map((s) => [s, {}])), used = new Set();
  for (const p of planned) {
    const h = hashOf(p.group);
    let rel = !p.base ? `${p.dir}/chunk-${h.slice(0, 8)}.js` : count.get(p.base) > 1 && !p.fixed ? `${p.base}.${h.slice(0, 4)}.js` : `${p.base}.js`;
    for (let n = 5; used.has(rel); n++) rel = !p.base ? `${p.dir}/chunk-${h.slice(0, n + 4)}.js` : `${p.base}.${h.slice(0, n)}.js`;
    used.add(rel);
    for (const [s, id] of Object.entries(p.group)) plan[s][id] = rel;
  }
  return plan;
}

/** 清空 src/ 中除手写条目以外的内容（各系统的生成代码） */
export function clearGenerated(srcDir) {
  for (const f of HANDWRITTEN) {
    if (!fs.existsSync(path.join(srcDir, f))) throw new Error(`缺少手写文件 src/${f}（它属于项目源码，不由提取生成）`);
  }
  for (const f of fs.readdirSync(srcDir)) if (!HANDWRITTEN.includes(f)) fs.rmSync(path.join(srcDir, f), { recursive: true, force: true });
}

/**
 * 改写引用并把一个系统的全部模块写到 src/<系统>/。
 * @param mods    { id, code, legal }[]：格式化（并完成架构还原）的源码与抽出的许可注释
 * @param plan    chunk id → src/<系统>/ 下的相对路径
 * @param ctx     { system, version, srcDir, loaderOf: bunfs 名 → loader, assets: bunfs 名 → { path } | { native } }
 * @returns {{ legal: Map<string, Set<string>>, stat: object }} 第三方许可注释 → 出现的文件（相对 src/）
 */
export function writeSources(mods, plan, { system, version, srcDir, loaderOf, assets }) {
  const outDir = path.join(srcDir, system);
  const legal = new Map();
  const stat = { text: 0, file: 0, napi: 0, module: 0 };
  for (const { id, code: formatted, legal: notices } of mods) {
    const dst = path.join(outDir, plan[id]);
    const fromDir = path.dirname(dst);
    const relTo = (abs) => {
      const r = path.relative(fromDir, abs).split(path.sep).join("/");
      return r.startsWith(".") ? r : "./" + r;
    };
    for (const c of notices) (legal.get(c) ?? legal.set(c, new Set()).get(c)).add(`${system}/${plan[id]}`);

    const helpers = new Set();
    let code = formatted.replace(/([\w$]+)\("\/\$bunfs\/root\/([^"]+)"\)/g, (all, fn, p) => {
      if (loaderOf[p] === "text") { helpers.add("__asset_text"); stat.text++; return `__asset_text(${JSON.stringify(assets.get(p).path)})`; }
      if (loaderOf[p] === "napi") { helpers.add("__asset_native"); stat.napi++; return `${fn}(__asset_native(${JSON.stringify(assets.get(p).native)}))`; }
      return all;
    });
    code = code.replace(/HOOKS_WORKER_URL: "[^"]+"/g, () => {
      helpers.add("__asset_src");
      return `HOOKS_WORKER_URL: __asset_src(${JSON.stringify(`${system}/${plan[HOOKS_WORKER_ID]}`)})`;
    });
    code = code.replace(/"\/\$bunfs\/root\/([^"]+)"/g, (all, p) => {
      if (loaderOf[p] === "file") { helpers.add("__asset_path"); stat.file++; return `__asset_path(${JSON.stringify(assets.get(p).path)})`; }
      if (plan[p]) { stat.module++; return JSON.stringify(relTo(path.join(outDir, plan[p]))); }
      return all;
    });

    const header = `// ${system}/${plan[id]} — Claude Code ${version}（${system}）模块 ${id}\n`;
    const imp = helpers.size ? `import { ${[...helpers].sort().join(", ")} } from ${JSON.stringify(relTo(path.join(srcDir, "runtime/assets.js")))};\n` : "";
    fs.mkdirSync(fromDir, { recursive: true });
    fs.writeFileSync(dst, header + imp + code);
  }
  return { legal, stat };
}

/** 新文件相对格式化源码的行偏移：说明头 1 行 + 可选的 runtime/assets.js import 1 行 */
export function lineOffset(file) {
  const second = fs.readFileSync(file, "utf8").split("\n", 2)[1] ?? "";
  return 1 + (second.startsWith("import { __asset") ? 1 : 0);
}
