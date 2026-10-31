// 跨系统对齐：找出两个系统中一一对应的模块，对应的模块在 src/<系统>/ 下使用相同的路径。
//
// 有固定名字的模块（入口 cli、hooks worker、原生模块的 JS 包装）按名字配对，不参与下面按内容的配对。
// 其余模块各系统分别打包，混淆名不同、平台相关的分支被裁掉，chunk id 也不同，只能按内容配对:
//   1. 形状相同（标识符统一为 $，模块引用换成占位符）且一对一 → 配对；
//   2. 把“引用了哪些已配对模块”、“被哪些已配对模块引用”（均按集合，不计顺序）加入形状，
//      继续找一对一，直到不再增加；
//   3. 其余按得分配对：token 3-gram 相似度、字符串字面量的重合度、“已配对的引用与被引用模块”的
//      重合度三者的平均（字符串能区分一族结构相近的模块，如各语言的语法定义）；
//      要求互为最佳，得分 ≥ 0.6 且明显高于次佳（高出 0.05 以上，或离满分的差距不到次佳的三分之一，
//      后者用于一族几乎相同的模块），3-gram 相似度本身不低于 0.3；
//   2、3 交替进行直到不再增加；
//   4. 仍无法区分的同形模块（形状与引用关系都相同）按 chunk id 顺序配对。
// 配不上的模块是某个系统独有的，或被平台分支改得面目全非，各自单独命名。
import { tokens } from "./lib.js";

function shapeOf(code, names) {
  const toks = [], refs = [], strs = new Set();
  let prev = null;
  for (const t of tokens(code)) {
    const ty = t.type.label;
    if (ty === "string" || ty === "template") {
      const s = String(t.value).replace(/\/\$bunfs\/root\/([^"'`\s)]+)/g, (_, n) => (names.has(n) && refs.push(n), "<R>"));
      toks.push(JSON.stringify(s));
      strs.add(s);
    } else toks.push(ty === "name" ? (prev === "." || prev === "?." ? "." + t.value : "$") : String(t.value ?? ty));
    prev = ty;
  }
  return { toks, shape: toks.join(" "), refs, strs };
}

const jaccard = (x, y) => {
  if (!x.size && !y.size) return null;
  let c = 0;
  for (const v of x) if (y.has(v)) c++;
  return c / (x.size + y.size - c);
};

const grams = (toks) => {
  const m = new Map();
  for (let i = 0; i + 2 < toks.length; i++) {
    const k = toks[i] + " " + toks[i + 1] + " " + toks[i + 2];
    m.set(k, (m.get(k) ?? 0) + 1);
  }
  return m;
};
const dice = (x, y) => {
  let c = 0, n = 0;
  for (const [k, v] of x) c += Math.min(v, y.get(k) ?? 0), n += v;
  for (const v of y.values()) n += v;
  return (2 * c) / (n || 1);
};

/**
 * @param a { id, code }[]：系统甲的模块（code 为原版源码）
 * @param b { id, code }[]：系统乙的模块
 * @returns {Map<string, string>} 甲的 chunk id → 乙的 chunk id
 */
export function alignModules(a, b) {
  const side = (mods) => {
    const names = new Set(mods.map((m) => m.id));
    const list = mods.map((m) => ({ id: m.id, ...shapeOf(m.code, names), importers: [] }));
    const byId = new Map(list.map((m) => [m.id, m]));
    for (const m of list) for (const r of m.refs) byId.get(r).importers.push(m.id);
    return { list, byId };
  };
  const A = side(a), B = side(b);
  const ab = new Map(), ba = new Map();
  const link = (x, y) => (ab.set(x.id, y.id), ba.set(y.id, x.id));
  // 有固定名字的模块按名字配对；此后只有 chunk 参与按内容配对
  for (const m of A.list) if (!m.id.startsWith("chunk-") && B.byId.has(m.id)) link(m, B.byId.get(m.id));
  A.list = A.list.filter((m) => m.id.startsWith("chunk-") || ab.has(m.id));
  B.list = B.list.filter((m) => m.id.startsWith("chunk-") || ba.has(m.id));
  // 以甲的 id 作为配对标识；未配对记为 ?
  const tagA = (id) => (ab.has(id) ? id : "?"), tagB = (id) => ba.get(id) ?? "?";
  // 引用按集合比较：两次打包的 import 先后顺序可能不同
  const keyOf = (m, tag, level) => (level === 0 ? m.shape
    : m.shape + "\0" + m.refs.map(tag).sort().join(",") + (level === 2 ? "\0" + m.importers.map(tag).sort().join(",") : ""));

  const exact = () => {
    let added = 0;
    for (let changed = true; changed;) {
      changed = false;
      for (const level of [0, 1, 2]) {
        const groups = new Map();
        for (const m of A.list) if (!ab.has(m.id)) {
          const k = keyOf(m, tagA, level);
          (groups.get(k) ?? groups.set(k, { a: [], b: [] }).get(k)).a.push(m);
        }
        for (const m of B.list) if (!ba.has(m.id)) groups.get(keyOf(m, tagB, level))?.b.push(m);
        for (const g of groups.values()) if (g.a.length === 1 && g.b.length === 1) link(g.a[0], g.b[0]), added++, changed = true;
      }
    }
    return added;
  };

  const fuzzy = () => {
    const ra = A.list.filter((m) => !ab.has(m.id)), rb = B.list.filter((m) => !ba.has(m.id));
    for (const m of [...ra, ...rb]) m.grams ??= grams(m.toks);
    // 已配对的邻居，统一用甲的 id 表示
    const hood = (m, tag) => new Set([...m.refs.map(tag), ...m.importers.map((r) => "<" + tag(r))].filter((x) => !x.endsWith("?")));
    for (const m of ra) m.hood = hood(m, tagA);
    for (const m of rb) m.hood = hood(m, tagB);
    const near = (x, y) => y.toks.length <= x.toks.length * 1.5 + 30 && x.toks.length <= y.toks.length * 1.5 + 30;
    const score = (x, y) => {
      const s = dice(x.grams, y.grams);
      if (s < 0.3) return 0;
      const parts = [s, jaccard(x.strs, y.strs), jaccard(x.hood, y.hood)].filter((v) => v !== null);
      return parts.reduce((p, q) => p + q, 0) / parts.length;
    };
    const ranked = (m, pool) => {
      let best = null, s1 = -1, s2 = -1;
      for (const o of pool) {
        if (!near(m, o)) continue;
        const s = score(m, o);
        if (s > s1) s2 = s1, s1 = s, best = o;
        else if (s > s2) s2 = s;
      }
      return { best, s1, s2 };
    };
    const clear = (r) => r.best && r.s1 >= 0.6 && r.s1 > r.s2 && (r.s1 - r.s2 >= 0.05 || 1 - r.s2 >= 3 * (1 - r.s1));
    const fromB = new Map(rb.map((m) => [m, ranked(m, ra)]));
    let added = 0;
    for (const m of ra) {
      const r = ranked(m, rb);
      if (!clear(r)) continue;
      const back = fromB.get(r.best);
      if (back.best !== m || !clear(back)) continue;
      link(m, r.best), added++;
    }
    return added;
  };

  while (exact() + fuzzy() > 0);

  // 形状与引用关系都相同、无法区分的模块：按 id 顺序配对
  const groups = new Map();
  for (const m of A.list) if (!ab.has(m.id)) {
    const k = keyOf(m, tagA, 2);
    (groups.get(k) ?? groups.set(k, { a: [], b: [] }).get(k)).a.push(m);
  }
  for (const m of B.list) if (!ba.has(m.id)) groups.get(keyOf(m, tagB, 2))?.b.push(m);
  for (const g of groups.values()) {
    const n = Math.min(g.a.length, g.b.length);
    g.a.sort((x, y) => (x.id < y.id ? -1 : 1)), g.b.sort((x, y) => (x.id < y.id ? -1 : 1));
    for (let i = 0; i < n; i++) link(g.a[i], g.b[i]);
  }
  return ab;
}
