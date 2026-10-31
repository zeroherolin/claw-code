// linux/ui/chunk-e9dcbeff.js — Claude Code 2.1.310（linux）模块 chunk-hp01dsmt.js
import { Te } from "../shared/chunk-bdaaea45.js";
import { F } from "../context/not-admin-owned.js";
import { Zo } from "../fs/utf-8.aa9a.js";
import { w } from "./chunk-0ed4c357.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { Pf, tb } from "./chunk-4425ad7b.js";
import { my } from "../git/remote-workspace-diff-fetch.js";
import { Hv } from "./chunk-eb304a9e.js";
import { Ge } from "./aria-hidden.8741.js";
import { H6 } from "./aria-hidden.3bf7.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
var D = 10;
function jie(Z) {
  let t = w(39), { file_path: o, operation: p, patch: h, firstLine: R, fileContent: k, content: v, style: C, verbose: m } = Z, { columns: q } = Te(), d;
  if (t[0] !== p) d = r(n, { color: "subtle", children: ["User rejected ", p, " to "] }), t[0] = p, t[1] = d;
  else d = t[1];
  let c;
  if (t[2] !== o || t[3] !== m) c = m ? o : Zo(o), t[2] = o, t[3] = m, t[4] = c;
  else c = t[4];
  let P;
  if (t[5] !== o || t[6] !== c) P = e(n, { bold: true, color: "subtle", children: e(my, { filePath: o, children: c }) }), t[5] = o, t[6] = c, t[7] = P;
  else P = t[7];
  let H;
  if (t[8] !== d || t[9] !== P) H = r(s, { flexDirection: "row", children: [d, P] }), t[8] = d, t[9] = P, t[10] = H;
  else H = t[10];
  let i = H;
  if (C === "condensed" && !m) {
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
      a = u.length - D;
      l2 = m ? v : u.slice(0, D).join(`
`);
      t[13] = v, t[14] = m, t[15] = a, t[16] = l2;
    } else a = t[15], l2 = t[16];
    let x = l2;
    const f2 = x || "(No content)";
    const b2 = q - 12;
    let _;
    if (t[17] !== o || t[18] !== f2 || t[19] !== b2) _ = e(Hv, { code: f2, filePath: o, width: b2, dim: true }), t[17] = o, t[18] = f2, t[19] = b2, t[20] = _;
    else _ = t[20];
    let A;
    if (t[21] !== a || t[22] !== m) A = !m && e(tb, { count: a }), t[21] = a, t[22] = m, t[23] = A;
    else A = t[23];
    let z;
    if (t[24] !== _ || t[25] !== A || t[26] !== i) z = e(Ge, { children: r(s, { flexDirection: "column", children: [i, _, A] }) }), t[24] = _, t[25] = A, t[26] = i, t[27] = z;
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
  if (t[30] !== k || t[31] !== o || t[32] !== R || t[33] !== h || t[34] !== l) f = e(H6, { hunks: h, dim: true, width: l, filePath: o, firstLine: R, fileContent: k }), t[30] = k, t[31] = o, t[32] = R, t[33] = h, t[34] = l, t[35] = f;
  else f = t[35];
  let b;
  if (t[36] !== f || t[37] !== i) b = e(Ge, { children: r(s, { flexDirection: "column", children: [i, f] }) }), t[36] = f, t[37] = i, t[38] = b;
  else b = t[38];
  return b;
}
function pt(_) {
  return _.startsWith("+");
}
function dt(A, z) {
  return A + F(z.lines, pt);
}
function ht(vt) {
  return vt.startsWith("-");
}
function at(Pt, bt) {
  return Pt + F(bt.lines, ht);
}
function B3t(Z) {
  let c = w(25), { filePath: o, structuredPatch: p, firstLine: h, fileContent: R, style: k, verbose: v, previewHint: C, collapsed: m } = Z, { columns: q } = Te(), t = p.reduce(dt, 0), d = p.reduce(at, 0), P;
  if (c[0] !== t) P = t > 0 ? r(Q, { children: ["Added ", e(n, { bold: true, children: t }), " ", t > 1 ? "lines" : "line"] }) : null, c[0] = t, c[1] = P;
  else P = c[1];
  const H = t > 0 && d > 0 ? ", " : null;
  let i;
  if (c[2] !== t || c[3] !== d) i = d > 0 ? r(Q, { children: [t === 0 ? "R" : "r", "emoved ", e(n, { bold: true, children: d }), " ", d > 1 ? "lines" : "line"] }) : null, c[2] = t, c[3] = d, c[4] = i;
  else i = c[4];
  let l;
  if (c[5] !== P || c[6] !== H || c[7] !== i) l = r(n, { children: [P, H, i] }), c[5] = P, c[6] = H, c[7] = i, c[8] = l;
  else l = c[8];
  let a = l;
  if (C) {
    if (k !== "condensed" && !v) {
      let u2;
      if (c[9] !== C) u2 = e(Ge, { children: e(n, { dimColor: true, children: C }) }), c[9] = C, c[10] = u2;
      else u2 = c[10];
      return u2;
    }
  } else if (k === "condensed" && !v) {
    return a;
  } else if (m && !v && t + d > 0) {
    let u2;
    if (c[11] === S) u2 = e(Pf, {}), c[11] = u2;
    else u2 = c[11];
    let x2;
    if (c[12] !== a) x2 = e(Ge, { children: r(n, { children: [a, " ", u2] }) }), c[12] = a, c[13] = x2;
    else x2 = c[13];
    return x2;
  }
  let u;
  if (c[14] !== a) u = e(n, { children: a }), c[14] = a, c[15] = u;
  else u = c[15];
  const x = q - 12;
  let f;
  if (c[16] !== R || c[17] !== o || c[18] !== h || c[19] !== p || c[20] !== x) f = e(H6, { hunks: p, dim: false, width: x, filePath: o, firstLine: h, fileContent: R }), c[16] = R, c[17] = o, c[18] = h, c[19] = p, c[20] = x, c[21] = f;
  else f = c[21];
  let b;
  if (c[22] !== u || c[23] !== f) b = e(Ge, { children: r(s, { flexDirection: "column", children: [u, f] }) }), c[22] = u, c[23] = f, c[24] = b;
  else b = c[24];
  return b;
}
export {
  B3t,
  jie
};
