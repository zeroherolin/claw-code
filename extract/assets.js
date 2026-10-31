// 资源阶段：识别每个非 JS 模块被谁、以什么逻辑路径引用，解压、转码后按归档规则写入 assets/。
//
// 原版资源在模块图中的名字是 "<原名>-<hash>.<ext>"，有时追加 .zst（zstd 压缩）或 .txt（text loader）。
// 源码引用它们的三种形式:
//   var X = $e("/$bunfs/root/F")                     text loader（import.meta.require 得到字符串）
//   var a = "/$bunfs/root/F"; var X = dt(a, …)       file loader（运行期读取，自动识别 zstd）
//   { "references/foo.md": X, … }                     逻辑路径表：skill 按相对路径查找附带文件
// 归档规则（layout/<版本>.json）把引用方 chunk 映射到分组目录，逻辑路径即组内相对路径。
import fs from "node:fs";
import path from "node:path";
import { BUNFS } from "./lib.js";

/**
 * @param {{name:string, contents:Buffer, loader:string}[]} modules
 * @returns {Record<string, {chunks:string[], keys:string[]}>} 资源名 → 引用它的 chunk 与逻辑路径
 */
export function scanAssetRefs(modules) {
  const assetNames = new Set(modules.filter((m) => m.loader !== "js").map((m) => m.name));
  const js = modules.filter((m) => m.loader === "js").map((m) => ({ id: m.name, text: m.contents.toString("latin1") }));
  const varAsset = {}, exportsOf = {}, importsOf = {};

  for (const { id, text } of js) {
    const va = {}, pathConst = {};
    for (const m of text.matchAll(/(?:var|let|const)\s+([\w$]+)=([\w$]+)\("\/\$bunfs\/root\/([^"]+)"\)/g)) if (assetNames.has(m[3])) va[m[1]] = m[3];
    for (const m of text.matchAll(/([\w$]+)="\/\$bunfs\/root\/([^"]+)"/g)) {
      if (assetNames.has(m[2])) { pathConst[m[1]] = m[2]; va[m[1]] ||= m[2]; }
    }
    for (const m of text.matchAll(/(?:var|let|const)\s+([\w$]+)=([\w$]+)\(([\w$]+),import\.meta\.dirname\)/g)) if (pathConst[m[3]]) va[m[1]] = pathConst[m[3]];
    varAsset[id] = va;
    exportsOf[id] = {};
    for (const m of text.matchAll(/export\{([^}]*)\}/g)) for (const part of m[1].split(",")) {
      const [a, b] = part.split(/\s+as\s+/);
      exportsOf[id][(b || a).trim()] = a.trim();
    }
    importsOf[id] = [];
    for (const m of text.matchAll(/import\{([^}]*)\}from"\/\$bunfs\/root\/([^"]+)"/g)) for (const part of m[1].split(",")) {
      const [a, b] = part.split(/\s+as\s+/);
      importsOf[id].push({ from: m[2], imported: a.trim(), local: (b || a).trim() });
    }
  }
  // 跨 chunk：从别的模块导入的资源变量
  for (const { id } of js) for (const { from, imported, local } of importsOf[id]) {
    const asset = varAsset[from]?.[exportsOf[from]?.[imported]];
    if (asset && !varAsset[id][local]) varAsset[id][local] = asset;
  }

  const refs = {};
  const add = (asset, chunk, keys) => {
    const r = (refs[asset] ??= { chunks: new Set(), keys: new Set() });
    r.chunks.add(chunk);
    for (const k of keys) r.keys.add(k);
  };
  for (const { id, text } of js) {
    const keyed = new Map();
    for (const m of text.matchAll(/"([^"\n]{1,200})":([\w$]+)(?=[,}])/g)) {
      const a = varAsset[id][m[2]];
      if (a) keyed.set(a, [...(keyed.get(a) ?? []), m[1]]);
    }
    for (const a of Object.values(varAsset[id])) add(a, id, keyed.get(a) ?? []);
  }
  // 未通过变量识别到的资源：按出现位置记录引用方
  for (const a of assetNames) {
    if (refs[a]) continue;
    for (const { id, text } of js) if (text.includes(BUNFS + a)) add(a, id, []);
  }
  return Object.fromEntries([...assetNames].sort().map((a) => [a, {
    chunks: [...(refs[a]?.chunks ?? [])].sort(), keys: [...(refs[a]?.keys ?? [])].sort(),
  }]));
}

// "foo.mjs-abcd1234.txt" → "foo.mjs"；"foo-abcd1234.md" → "foo.md"；去掉 .zst / .asset
function cleanName(name) {
  let n = name.replace(/\.(zst|asset)$/, "");
  let m = n.match(/^(.*\.[A-Za-z0-9]+)-[0-9a-z]{8}\.txt$/);
  if (m) return m[1];
  m = n.match(/^(.*)-[0-9a-z]{8}(\.[A-Za-z0-9]+)$/);
  return m ? m[1] + m[2] : n;
}

function decode(mod) {
  let data = mod.contents;
  if (data.readUInt32LE(0) === 0xfd2fb528) data = Buffer.from(Bun.zstdDecompressSync(data));
  if (mod.encoding === "utf16le") data = Buffer.from(data.toString("utf16le"), "utf8");
  return data;
}

/**
 * 解压、转码并归档全部资源。
 * @param layout 归档规则 { chunkGroup, named, replRoute, designSyncScripts }
 * @returns INDEX 条目 { bunfs, path, bytes, logical_keys, referenced_by }[]，按 path 排序
 */
export function writeAssets(modules, refs, layout, outDir) {
  const designSync = new Set(layout.designSyncScripts);
  const place = (name, { chunks, keys }) => {
    if (layout.named[name]) return layout.named[name];
    if (layout.replRoute[name]) return "prompts/repl-route/" + layout.replRoute[name];
    if (designSync.has(cleanName(name))) return "skills/design-sync/converter/" + cleanName(name);
    const group = chunks.map((c) => layout.chunkGroup[c]).find(Boolean);
    if (!group) return null;
    const key = keys.find((k) => k.includes("/") || k.includes(".")) ?? (keys[0] ? `${keys[0]}/${cleanName(name)}` : cleanName(name));
    return `${group}/${key}`;
  };

  const index = [], used = new Set(), unplaced = [];
  for (const mod of modules) {
    if (mod.loader === "js") continue; // JS 模块（含原生模块的 JS 包装）由组装阶段处理
    const r = refs[mod.name];
    const base = place(mod.name, r);
    if (!base) { unplaced.push(`${mod.name}（被 ${r.chunks.join(", ") || "无"} 引用）`); continue; }
    let rel = base;
    for (let i = 2; used.has(rel); i++) rel = base.replace(/(\.[^./]+)?$/, `.${i}$1`);
    used.add(rel);
    const data = decode(mod);
    const dst = path.join(outDir, rel);
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.writeFileSync(dst, data);
    if (rel.endsWith(".node")) fs.chmodSync(dst, 0o755);
    index.push({ bunfs: mod.name, path: rel, bytes: data.length, logical_keys: r.keys, referenced_by: r.chunks });
  }
  if (unplaced.length) {
    throw new Error(`${unplaced.length} 个资源没有归档规则，请补进 layout 文件（见 extract/README.md#升级到新版本）:\n  ${unplaced.join("\n  ")}`);
  }
  return index.sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));
}
