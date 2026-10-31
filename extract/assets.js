// 资源阶段：识别每个非 JS 模块被谁、以什么逻辑路径引用，解压、转码后按归档规则写入 assets/。
//
// 原版资源在模块图中的名字是 "<原名>-<hash>.<ext>"，有时追加 .zst（zstd 压缩）或 .txt（text loader）。
// 源码引用它们的三种形式:
//   var X = $e("/$bunfs/root/F")                     text loader（import.meta.require 得到字符串）
//   var a = "/$bunfs/root/F"; var X = dt(a, …)       file loader（运行期读取，自动识别 zstd）
//   { "references/foo.md": X, … }                     逻辑路径表：skill 按相对路径查找附带文件
// 归档规则（layout/<版本>.json）通过锚点资源确定引用方 chunk 所属的分组目录，逻辑路径即组内相对路径；
// 规则只引用资源名，不引用 chunk id，因此对各系统同样适用。
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
 * 为全部平台的资源确定 assets/ 下的位置，并写入 outDir。
 *   原生模块（napi）各平台不同：native/<平台>/<名字>，源码经 __asset_native(<名字>) 按当前平台取用；
 *   其余资源各系统共用：同一个资源在各平台必须落到同一位置、内容相同，否则报错。
 * @param platforms { name, system, modules }[]：各平台的模块图
 * @param refs      { [系统]: scanAssetRefs 的结果 }（按系统基准平台的模块计算）
 * @param layout    归档规则 { groups, named, replRoute, designSyncScripts }；
 *                  groups 为 { 分组目录: [锚点资源名…] }：引用锚点资源的 chunk 所引用的资源都归入该分组
 * @returns {{ assets, bySystem }}
 *   assets：{ bunfs, path, bytes, platforms?, logical_keys, chunks: { [系统]: chunk id[] } }[]，按 path 排序
 *   bySystem：{ [系统]: Map<bunfs 名, { path } | { native: 名字 }> }，供组装阶段改写源码中的资源引用
 */
export function writeAssets(platforms, refs, layout, outDir) {
  const designSync = new Set(layout.designSyncScripts);
  const groupOf = {};
  for (const [system, r] of Object.entries(refs)) {
    const map = (groupOf[system] = new Map());
    for (const [group, anchors] of Object.entries(layout.groups)) {
      for (const a of anchors) for (const c of r[a]?.chunks ?? []) {
        if (map.has(c) && map.get(c) !== group) throw new Error(`${system} 的 ${c} 同时引用了分组 ${map.get(c)} 与 ${group} 的锚点资源`);
        map.set(c, group);
      }
    }
  }
  const place = (system, name, { chunks, keys }) => {
    if (layout.named[name]) return layout.named[name];
    if (layout.replRoute[name]) return "prompts/repl-route/" + layout.replRoute[name];
    if (designSync.has(cleanName(name))) return "skills/design-sync/converter/" + cleanName(name);
    const group = chunks.map((c) => groupOf[system].get(c)).find(Boolean);
    if (!group) return null;
    const key = keys.find((k) => k.includes("/") || k.includes(".")) ?? (keys[0] ? `${keys[0]}/${cleanName(name)}` : cleanName(name));
    return `${group}/${key}`;
  };

  const byName = new Map(), byPath = new Map(), bySystem = {}, unplaced = [], conflicts = [];
  for (const { name: platform, system, modules } of platforms) {
    const seen = (bySystem[system] ??= new Map());
    for (const mod of modules) {
      if (mod.loader === "js") continue; // JS 模块（含原生模块的 JS 包装）由组装阶段处理
      const r = refs[system][mod.name] ?? { chunks: [], keys: [] };
      const data = decode(mod);
      if (mod.loader === "napi") {
        const name = cleanName(mod.name), rel = `native/${platform}/${name}`;
        seen.set(mod.name, { native: name });
        byPath.set(rel, { bunfs: mod.name, path: rel, data, platforms: [platform], logical_keys: r.keys, chunks: { [system]: r.chunks } });
        continue;
      }
      let entry = byName.get(mod.name);
      if (!entry) {
        const base = place(system, mod.name, r);
        if (!base) { unplaced.push(`${mod.name}（${system} 中被 ${r.chunks.join(", ") || "无"} 引用）`); continue; }
        let rel = base;
        for (let i = 2; byPath.has(rel); i++) rel = base.replace(/(\.[^./]+)?$/, `.${i}$1`);
        entry = { bunfs: mod.name, path: rel, data, logical_keys: r.keys, chunks: {}, base };
        byName.set(mod.name, entry), byPath.set(rel, entry);
      } else {
        if (!entry.data.equals(data)) conflicts.push(`${mod.name}：${platform} 中的内容与其他平台不同`);
        const base = place(system, mod.name, r);
        if (base && base !== entry.base) conflicts.push(`${mod.name}：${system} 中归入 ${base}，其他系统归入 ${entry.base}`);
      }
      entry.chunks[system] = r.chunks;
      seen.set(mod.name, { path: entry.path });
    }
  }
  if (unplaced.length) throw new Error(`${unplaced.length} 个资源没有归档规则，请补进 layout 文件（见 extract/README.md#升级到新版本）:\n  ${unplaced.join("\n  ")}`);
  if (conflicts.length) throw new Error(`资源在各平台之间不一致:\n  ${conflicts.join("\n  ")}`);

  for (const e of byPath.values()) {
    const dst = path.join(outDir, e.path);
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.writeFileSync(dst, e.data);
    if (e.path.endsWith(".node")) fs.chmodSync(dst, 0o755);
  }
  const assets = [...byPath.values()]
    .map(({ bunfs, path: p, data, platforms: pf, logical_keys, chunks }) => ({ bunfs, path: p, bytes: data.length, ...(pf && { platforms: pf }), logical_keys, chunks }))
    .sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));
  return { assets, bySystem };
}
