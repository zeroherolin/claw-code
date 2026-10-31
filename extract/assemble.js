// 组装阶段：把原版 JS 模块整理成 src/ 下按功能分目录、语义化命名的可读源码。
//
// 只改"位置与排版"，不改语义:
//   1. 去掉 Bun 字节码标记与法律声明头；esbuild 等价重新打印；第三方许可注释抽出由 LICENSE 汇总
//   2. "/$bunfs/root/<chunk>.js"           → 相对路径
//   3. text 资源  $e("/$bunfs/root/X")     → __asset_text("<rel>")
//      file 资源  "/$bunfs/root/X"         → __asset_path("<rel>")
//      napi 资源  $e("/$bunfs/root/X")     → $e(__asset_path("<rel>"))
//   4. 构建宏 HOOKS_WORKER_URL             → __asset_src("<rel>")
import fs from "node:fs";
import path from "node:path";
import { classify } from "./areas.js";
import { semanticName } from "./naming.js";

const HANDWRITTEN = ["main.js", "runtime"]; // src/ 下手写、重新生成时保留的条目
const HOOKS_WORKER_ID = "src/plugins/functionHooks/hooks-worker/hooks-worker.js";
const NATIVE_WRAPPER = /^(audio-capture|computer-use-input|computer-use-swift)\.js$/;

/**
 * 按特征字符串定位人工命名的模块：每条的 match 须全部出现在且只出现在一个模块的源码中。
 * chunk id 每个版本都会变，特征字符串（提示词片段、事件名、选项名等）通常不变。
 * @param curated { 路径: { match: string[] } }
 * @returns { chunkId: 路径 }
 */
export function locateCurated(mods, curated) {
  const byId = {}, problems = [];
  for (const [rel, { match }] of Object.entries(curated)) {
    const hits = mods.filter((m) => match.every((s) => m.raw.includes(s)));
    if (hits.length !== 1) problems.push(`${rel}：${JSON.stringify(match)} 命中 ${hits.length} 个模块${hits.length ? `（${hits.slice(0, 5).map((m) => m.id).join("、")}）` : ""}`);
    else if (byId[hits[0].id]) problems.push(`${rel} 与 ${byId[hits[0].id]} 命中同一个模块 ${hits[0].id}`);
    else byId[hits[0].id] = rel;
  }
  if (problems.length) throw new Error(`layout 中的人工命名无法唯一定位，请调整 match 或删除该条（见 extract/README.md#升级到新版本）:\n  ${problems.join("\n  ")}`);
  return byId;
}

/**
 * 为每个模块确定 src/ 下的相对路径。
 * @param mods     { id, raw }[]：原版模块源码（未格式化，命名与分区规则按它计算）
 * @param owners   { tool, command, skill }：chunk id → 该 chunk 定义的名字集合（来自分析阶段）
 * @param curated  人工命名 { 路径: { match } }，优先于自动命名
 */
export function planLayout(mods, owners, curated) {
  const only = (m, id) => (m.get(id)?.size === 1 ? [...m.get(id)][0] : undefined);
  const sets = { tool: new Set(owners.tool.keys()), command: new Set(owners.command.keys()), skill: new Set(owners.skill.keys()) };
  const named = locateCurated(mods, curated);
  const plan = {}, used = new Set();
  for (const { id, raw } of mods) {
    let rel;
    if (id === "cli") rel = "cli.js"; // 入口模块
    else if (id === HOOKS_WORKER_ID) rel = "hooks/hooks-worker.js";
    else if (NATIVE_WRAPPER.test(id)) rel = `native/${id}`;
    else if (named[id]) rel = `${named[id]}.${id.slice(6, 10)}.js`;
    else {
      const dir = classify(id, raw, sets);
      const base = semanticName(raw, { tool: only(owners.tool, id), command: only(owners.command, id), skill: only(owners.skill, id) });
      const name = base ? `${base}.${id.slice(6, 10)}` : `chunk-${id.slice(6, 14)}`;
      rel = `${dir}/${name}.js`;
      for (let i = 2; used.has(rel); i++) rel = `${dir}/${name}-${i}.js`;
    }
    used.add(rel);
    plan[id] = rel;
  }
  return plan;
}

/**
 * 改写引用并写出全部模块。src/ 中除 HANDWRITTEN 外的内容先清空。
 * @param mods      { id, code, legal }[]：格式化后的源码与抽出的许可注释
 * @param loaderOf  bunfs 名 → loader（js / text / file / napi）
 * @param assetPath bunfs 名 → assets/ 下的相对路径
 * @returns {{ legal: Map<string, Set<string>>, stat: object }} 第三方许可注释 → 出现的文件
 */
export function writeSources(mods, plan, loaderOf, assetPath, srcDir, version) {
  for (const f of HANDWRITTEN) {
    if (!fs.existsSync(path.join(srcDir, f))) throw new Error(`缺少手写文件 src/${f}（它属于项目源码，不由提取生成）`);
  }
  for (const f of fs.readdirSync(srcDir)) if (!HANDWRITTEN.includes(f)) fs.rmSync(path.join(srcDir, f), { recursive: true, force: true });

  const legal = new Map();
  const stat = { text: 0, file: 0, napi: 0, module: 0 };
  for (const { id, code: formatted, legal: notices } of mods) {
    const dst = path.join(srcDir, plan[id]);
    const fromDir = path.dirname(dst);
    const relTo = (abs) => {
      const r = path.relative(fromDir, abs).split(path.sep).join("/");
      return r.startsWith(".") ? r : "./" + r;
    };
    for (const c of notices) (legal.get(c) ?? legal.set(c, new Set()).get(c)).add(plan[id]);

    const helpers = new Set();
    let code = formatted.replace(/([\w$]+)\("\/\$bunfs\/root\/([^"]+)"\)/g, (all, fn, p) => {
      if (loaderOf[p] === "text") { helpers.add("__asset_text"); stat.text++; return `__asset_text(${JSON.stringify(assetPath[p])})`; }
      if (loaderOf[p] === "napi") { helpers.add("__asset_path"); stat.napi++; return `${fn}(__asset_path(${JSON.stringify(assetPath[p])}))`; }
      return all;
    });
    code = code.replace(/HOOKS_WORKER_URL: "[^"]+"/g, () => {
      helpers.add("__asset_src");
      return `HOOKS_WORKER_URL: __asset_src(${JSON.stringify(plan[HOOKS_WORKER_ID])})`;
    });
    code = code.replace(/"\/\$bunfs\/root\/([^"]+)"/g, (all, p) => {
      if (loaderOf[p] === "file") { helpers.add("__asset_path"); stat.file++; return `__asset_path(${JSON.stringify(assetPath[p])})`; }
      if (plan[p]) { stat.module++; return JSON.stringify(relTo(path.join(srcDir, plan[p]))); }
      return all;
    });

    const header = `// ${plan[id]} — Claude Code ${version} 模块 ${id}\n`;
    const imp = helpers.size ? `import { ${[...helpers].sort().join(", ")} } from ${JSON.stringify(relTo(path.join(srcDir, "runtime/assets.js")))};\n` : "";
    fs.mkdirSync(fromDir, { recursive: true });
    fs.writeFileSync(dst, header + imp + code);
  }
  return { legal, stat };
}

/** 新文件相对格式化源码的行偏移：说明头 1 行 + 可选的 runtime/assets.js import 1 行 */
export function lineOffset(srcDir, rel) {
  const second = fs.readFileSync(path.join(srcDir, rel), "utf8").split("\n", 2)[1] ?? "";
  return 1 + (second.startsWith("import { __asset") ? 1 : 0);
}
