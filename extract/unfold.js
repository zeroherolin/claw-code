// 架构还原：同一系统的各架构构建，打包时把 process.arch 写死成了字面量，
// 构建常量对象中的 DD_SOURCEMAP_GROUP 也只出现在部分架构里。以基准架构格式化后的源码为准，
// 逐 token 对照其他架构的同一模块，把这些位置改回运行时判断，使一份源码适用于该系统的全部架构。
//
// 只接受三类差异，其余一律报错：
//   1. 字符串、模板字符串或属性名中的架构名      "x64-linux" → `${process.arch}-linux`，o.x64 → o[process.arch]
//   2. 只在部分架构中出现的 DD_SOURCEMAP_GROUP   值改为 process.arch === "<架构>" ? <值> : void 0
//   3. 对象属性简写与否（{ a } 与 { a: b }）     混淆名碰巧相同造成，不是真实差异，忽略
import { tokens } from "./lib.js";

const DD = "DD_SOURCEMAP_GROUP";
const ARCH = "process.arch";

/** 用于对照的 token：标识符统一为 $（属性名保留），模块引用换成占位符 */
function normalize(code) {
  const out = [];
  let prev = null;
  for (const t of tokens(code)) {
    const ty = t.type.label, prop = prev === "." || prev === "?.";
    let k;
    if (ty === "name") k = prop ? "." + t.value : t.value === DD ? DD : "$";
    else if (ty === "string" || ty === "template") k = JSON.stringify(String(t.value).replace(/\/\$bunfs\/root\/[^"'`\s)]+/g, "<X>"));
    else k = String(t.value ?? ty);
    out.push({ k, ty, value: t.value, start: t.start, end: t.end, prop });
    prev = ty;
  }
  return out;
}

/** 配对用的键：去掉 DD_SOURCEMAP_GROUP 属性；archRe 不为空时再屏蔽架构名 */
function maskedKey(toks, archRe) {
  const out = [];
  for (let i = 0; i < toks.length; i++) {
    if (toks[i].k === "," && toks[i + 1]?.k === DD && toks[i + 2]?.k === ":") { i += 3; continue; }
    out.push(archRe ? toks[i].k.replace(archRe, "<A>") : toks[i].k);
  }
  return out.join(" ");
}

/** 逐 token 对齐，返回差异块 [i0, i1, j0, j1]：x[i0, i1) 对应 y[j0, j1)；窗口内无法重新对齐时返回 null */
function diff(x, y) {
  const W = 16, K = 6, hunks = [];
  const same = (a, b) => {
    for (let k = 0; k < K; k++) {
      const p = x[a + k], q = y[b + k];
      if (!p && !q) return true;
      if (!p || !q || p.k !== q.k) return false;
    }
    return true;
  };
  let i = 0, j = 0;
  while (i < x.length || j < y.length) {
    if (i < x.length && j < y.length && x[i].k === y[j].k) { i++, j++; continue; }
    let found = null;
    for (let d = 1; d <= 2 * W && !found; d++) {
      for (let p = Math.max(0, d - W); p <= Math.min(d, W) && !found; p++) if (same(i + p, j + d - p)) found = [p, d - p];
    }
    if (!found) return null;
    hunks.push([i, i + found[0], j, j + found[1]]);
    i += found[0], j += found[1];
  }
  return hunks;
}

/** 按架构名切分两个字符串；除基准架构名换成另一架构名之外必须相同。返回各段 { text } 或 { arch: true } */
function archParts(a, b, baseArch, otherArch, split) {
  const pa = a.split(split), pb = b.split(split);
  if (pa.length !== pb.length) return null;
  const parts = [];
  for (let i = 0; i < pa.length; i++) {
    if (i % 2 === 0 || pa[i] === pb[i]) {
      if (pa[i] !== pb[i]) return null;
      parts.push({ text: pa[i] });
    } else if (pa[i] === baseArch && pb[i] === otherArch) parts.push({ arch: true });
    else return null;
  }
  return parts.some((p) => p.arch) ? parts : null;
}

// 模板字符串中的字面文本：沿用 JSON 的转义，再转义反引号与 ${
const templateText = (s) => JSON.stringify(s).slice(1, -1).replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

/**
 * @param baseArch 基准架构，它的源码被改写
 * @param base     { id, code }[]：基准架构的格式化源码
 * @param others   { arch, mods: { id, code }[] }[]：同一系统的其他架构
 * @returns {{ code: Map<id, string>, stat: { modules, arch, dd } }} 改写后的源码，只含有改动的模块
 */
export function unfoldArch(baseArch, base, others) {
  const arches = [baseArch, ...others.map((o) => o.arch)];
  const archRe = new RegExp(`\\b(?:${arches.join("|")})\\b`, "g");
  const split = new RegExp(`\\b(${arches.join("|")})\\b`);
  const baseToks = new Map(base.map((m) => [m.id, normalize(m.code)]));
  const edits = new Map(); // 模块 → Map<token 下标, 改写>
  const problems = [];

  // x 与 y 的差异全部可归类时返回 true，并把改写记入 out（out 为 null 时只做判断）
  const classify = (x, y, otherArch, out, label) => {
    const hunks = diff(x, y);
    if (!hunks) return out && problems.push(`${label}：无法逐 token 对齐`), false;
    // 两边等长的差异块（相邻几处架构名之间只隔着相同的 token）拆成逐 token 的差异
    const single = hunks.flatMap(([i0, i1, j0, j1]) => (i1 - i0 === j1 - j0 && i1 - i0 > 1
      ? Array.from({ length: i1 - i0 }, (_, n) => [i0 + n, i0 + n + 1, j0 + n, j0 + n + 1]).filter(([i, , j]) => x[i].k !== y[j].k)
      : [[i0, i1, j0, j1]]));
    for (const [i0, i1, j0, j1] of single) {
      const a = x.slice(i0, i1), b = y.slice(j0, j1);
      const one = a.length === 1 && b.length === 1 && a[0].ty === b[0].ty;
      if (one && (a[0].ty === "string" || a[0].ty === "template" || (a[0].ty === "name" && a[0].prop))) {
        const parts = archParts(String(a[0].value), String(b[0].value), baseArch, otherArch, split);
        if (parts) { out?.set(i0, { kind: a[0].ty === "name" ? "prop" : a[0].ty, parts }); continue; }
      }
      const isDD = (t) => t.length === 4 && t[0].k === "," && t[1].k === DD && t[2].k === ":" && t[3].ty === "string";
      if (isDD(a) && !b.length) { out?.set(i0 + 3, { kind: "dd", value: a[3].value, lacking: [otherArch] }); continue; }
      if (!a.length && isDD(b)) { out?.set(i0, { kind: "dd-insert", value: b[3].value, having: [otherArch] }); continue; }
      const shorthand = (p, q) => !p.length && q.length === 2 && q[0].k === ":" && q[1].k === "$";
      if (shorthand(a, b) || shorthand(b, a)) continue;
      if (out) problems.push(`${label}：${a.map((t) => t.k).join(" ").slice(0, 80) || "∅"} ⇒ ${b.map((t) => t.k).join(" ").slice(0, 80) || "∅"}`);
      return false;
    }
    return true;
  };

  for (const { arch, mods } of others) {
    const otherToks = new Map(mods.map((m) => [m.id, normalize(m.code)]));
    // 按屏蔽架构名后的键配对；同键有多个候选时，优先选连架构名也相同的（即该模块本身不含写死的架构名）
    const pool = new Map(), exactKey = new Map();
    for (const m of mods) {
      const key = maskedKey(otherToks.get(m.id), archRe);
      (pool.get(key) ?? pool.set(key, []).get(key)).push(m.id);
      exactKey.set(m.id, maskedKey(otherToks.get(m.id), null));
    }
    const pairs = [], unpaired = [];
    for (const m of base) {
      const hit = pool.get(maskedKey(baseToks.get(m.id), archRe));
      if (!hit?.length) { unpaired.push(m.id); continue; }
      const exact = hit.length > 1 ? hit.findIndex((o) => exactKey.get(o) === maskedKey(baseToks.get(m.id), null)) : -1;
      pairs.push([m.id, exact >= 0 ? hit.splice(exact, 1)[0] : hit.pop()]);
    }
    // 只差对象简写的模块屏蔽后键仍不同：在剩余模块中按长度就近找能完整归类的那个
    const rest = [...pool.values()].flat();
    for (const id of unpaired) {
      const n = baseToks.get(id).length, len = (o) => Math.abs(otherToks.get(o).length - n);
      const hit = rest.filter((o) => len(o) <= Math.max(64, n / 1000)).sort((p, q) => len(p) - len(q)).find((o) => classify(baseToks.get(id), otherToks.get(o), arch, null));
      if (!hit) { problems.push(`${id}：在 ${arch} 构建中找不到对应模块`); continue; }
      rest.splice(rest.indexOf(hit), 1);
      pairs.push([id, hit]);
    }
    for (const [id, oid] of pairs) {
      const found = new Map();
      if (!classify(baseToks.get(id), otherToks.get(oid), arch, found, `${id}（${arch}: ${oid}）`)) continue;
      const mine = edits.get(id) ?? edits.set(id, new Map()).get(id);
      for (const [i, e] of found) {
        const prev = mine.get(i);
        if (!prev) mine.set(i, e);
        else if (e.lacking) prev.lacking.push(...e.lacking);
        else if (e.having) prev.having.push(...e.having);
      }
    }
  }
  if (problems.length) throw new Error(`架构还原失败：以下差异不属于已知的三类（见 extract/unfold.js）:\n  ${problems.slice(0, 20).join("\n  ")}`);

  // 按 token 位置从后往前改写基准源码
  const cond = (has, value) => `${has.map((a) => `${ARCH} === ${JSON.stringify(a)}`).join(" || ")} ? ${JSON.stringify(value)} : void 0`;
  const code = new Map(), stat = { modules: 0, arch: 0, dd: 0 };
  for (const [id, mine] of edits) {
    if (!mine.size) continue;
    const toks = baseToks.get(id);
    let src = base.find((m) => m.id === id).code;
    for (const i of [...mine.keys()].sort((p, q) => q - p)) {
      const e = mine.get(i), t = toks[i];
      let at = t.start, to = t.end, text;
      if (e.kind === "dd") text = cond(arches.filter((a) => !e.lacking.includes(a)), e.value), stat.dd++;
      else if (e.kind === "dd-insert") at = to = toks[i - 1].end, text = `, ${DD}: ${cond(e.having, e.value)}`, stat.dd++;
      else {
        stat.arch++;
        if (e.kind === "prop") at = toks[i - 1].start, text = toks[i - 1].ty === "?." ? `?.[${ARCH}]` : `[${ARCH}]`;
        else if (e.kind === "template") text = src.slice(t.start, t.end).split(split).map((p, n) => (n % 2 && e.parts[n].arch ? `\${${ARCH}}` : p)).join("");
        else if (e.parts.length === 3 && !e.parts[0].text && !e.parts[2].text) text = ARCH;
        else text = "`" + e.parts.map((p) => (p.arch ? `\${${ARCH}}` : templateText(p.text))).join("") + "`";
      }
      src = src.slice(0, at) + text + src.slice(to);
    }
    code.set(id, src);
    stat.modules++;
  }
  return { code, stat };
}
