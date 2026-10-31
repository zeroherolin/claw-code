// darwin/ui/chunk-e9dcbeff.js — Claude Code 2.1.310（darwin）模块 chunk-rpb7t5zx.js
import { Ce } from "../shared/chunk-bdaaea45.js";
import { F } from "../context/not-admin-owned.js";
import { Zo } from "../fs/utf-8.aa9a.js";
import { w } from "./chunk-0ed4c357.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { xp, nS } from "./chunk-4425ad7b.js";
import { hy } from "../git/remote-workspace-diff-fetch.js";
import { LE } from "./chunk-eb304a9e.js";
import { Ge } from "./aria-hidden.8741.js";
import { V5 } from "./aria-hidden.3bf7.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { b } from "../vendor/react/chunk-0b0bf45d.js";
var S = 10;
function Xie(Z) {
  let t = w(39), { file_path: o, operation: p, patch: h, firstLine: g, fileContent: C, content: v, style: H, verbose: m } = Z, { columns: q } = Ce(), d;
  if (t[0] !== p) d = r(n, { color: "subtle", children: ["User rejected ", p, " to "] }), t[0] = p, t[1] = d;
  else d = t[1];
  let c;
  if (t[2] !== o || t[3] !== m) c = m ? o : Zo(o), t[2] = o, t[3] = m, t[4] = c;
  else c = t[4];
  let P;
  if (t[5] !== o || t[6] !== c) P = e(n, { bold: true, color: "subtle", children: e(hy, { filePath: o, children: c }) }), t[5] = o, t[6] = c, t[7] = P;
  else P = t[7];
  let _;
  if (t[8] !== d || t[9] !== P) _ = r(s, { flexDirection: "row", children: [d, P] }), t[8] = d, t[9] = P, t[10] = _;
  else _ = t[10];
  let i = _;
  if (H === "condensed" && !m) {
    let l2;
    if (t[11] !== i) l2 = e(Ge, { children: i }), t[11] = i, t[12] = l2;
    else l2 = t[12];
    return l2;
  }
  if (p === "write" && v !== void 0) {
    let a, l2;
    if (t[13] !== v || t[14] !== m) {
      let u = v.split(`
`);
      a = u.length - S;
      l2 = m ? v : u.slice(0, S).join(`
`);
      t[13] = v, t[14] = m, t[15] = a, t[16] = l2;
    } else a = t[15], l2 = t[16];
    let y = l2;
    const f2 = y || "(No content)";
    const x2 = q - 12;
    let A;
    if (t[17] !== o || t[18] !== f2 || t[19] !== x2) A = e(LE, { code: f2, filePath: o, width: x2, dim: true }), t[17] = o, t[18] = f2, t[19] = x2, t[20] = A;
    else A = t[20];
    let D;
    if (t[21] !== a || t[22] !== m) D = !m && e(nS, { count: a }), t[21] = a, t[22] = m, t[23] = D;
    else D = t[23];
    let z;
    if (t[24] !== A || t[25] !== D || t[26] !== i) z = e(Ge, { children: r(s, { flexDirection: "column", children: [i, A, D] }) }), t[24] = A, t[25] = D, t[26] = i, t[27] = z;
    else z = t[27];
    return z;
  }
  if (!h || h.length === 0) {
    let l2;
    if (t[28] !== i) l2 = e(Ge, { children: i }), t[28] = i, t[29] = l2;
    else l2 = t[29];
    return l2;
  }
  const l = q - 12;
  let f;
  if (t[30] !== C || t[31] !== o || t[32] !== g || t[33] !== h || t[34] !== l) f = e(V5, { hunks: h, dim: true, width: l, filePath: o, firstLine: g, fileContent: C }), t[30] = C, t[31] = o, t[32] = g, t[33] = h, t[34] = l, t[35] = f;
  else f = t[35];
  let x;
  if (t[36] !== f || t[37] !== i) x = e(Ge, { children: r(s, { flexDirection: "column", children: [i, f] }) }), t[36] = f, t[37] = i, t[38] = x;
  else x = t[38];
  return x;
}
function pt(A) {
  return A.startsWith("+");
}
function dt(D, z) {
  return D + F(z.lines, pt);
}
function ht(vt) {
  return vt.startsWith("-");
}
function at(Pt, bt) {
  return Pt + F(bt.lines, ht);
}
function e8t(Z) {
  let c = w(25), { filePath: o, structuredPatch: p, firstLine: h, fileContent: g, style: C, verbose: v, previewHint: H, collapsed: m } = Z, { columns: q } = Ce(), t = p.reduce(dt, 0), d = p.reduce(at, 0), P;
  if (c[0] !== t) P = t > 0 ? r(Q, { children: ["Added ", e(n, { bold: true, children: t }), " ", t > 1 ? "lines" : "line"] }) : null, c[0] = t, c[1] = P;
  else P = c[1];
  const _ = t > 0 && d > 0 ? ", " : null;
  let i;
  if (c[2] !== t || c[3] !== d) i = d > 0 ? r(Q, { children: [t === 0 ? "R" : "r", "emoved ", e(n, { bold: true, children: d }), " ", d > 1 ? "lines" : "line"] }) : null, c[2] = t, c[3] = d, c[4] = i;
  else i = c[4];
  let l;
  if (c[5] !== P || c[6] !== _ || c[7] !== i) l = r(n, { children: [P, _, i] }), c[5] = P, c[6] = _, c[7] = i, c[8] = l;
  else l = c[8];
  let a = l;
  if (H) {
    if (C !== "condensed" && !v) {
      let u2;
      if (c[9] !== H) u2 = e(Ge, { children: e(n, { dimColor: true, children: H }) }), c[9] = H, c[10] = u2;
      else u2 = c[10];
      return u2;
    }
  } else if (C === "condensed" && !v) {
    return a;
  } else if (m && !v && t + d > 0) {
    let u2;
    if (c[11] === b) u2 = e(xp, {}), c[11] = u2;
    else u2 = c[11];
    let y2;
    if (c[12] !== a) y2 = e(Ge, { children: r(n, { children: [a, " ", u2] }) }), c[12] = a, c[13] = y2;
    else y2 = c[13];
    return y2;
  }
  let u;
  if (c[14] !== a) u = e(n, { children: a }), c[14] = a, c[15] = u;
  else u = c[15];
  const y = q - 12;
  let f;
  if (c[16] !== g || c[17] !== o || c[18] !== h || c[19] !== p || c[20] !== y) f = e(V5, { hunks: p, dim: false, width: y, filePath: o, firstLine: h, fileContent: g }), c[16] = g, c[17] = o, c[18] = h, c[19] = p, c[20] = y, c[21] = f;
  else f = c[21];
  let x;
  if (c[22] !== u || c[23] !== f) x = e(Ge, { children: r(s, { flexDirection: "column", children: [u, f] }) }), c[22] = u, c[23] = f, c[24] = x;
  else x = c[24];
  return x;
}
export {
  Xie,
  e8t
};
