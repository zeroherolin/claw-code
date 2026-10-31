// linux/ui/chunk-d30767b5.js — Claude Code 2.1.310（linux）模块 chunk-nnjtz66e.js
import { vC, Ft } from "../shared/chunk-d2c47492.js";
import { lP } from "../fs/gitlab-runner-authentication-token.js";
import { w } from "./chunk-0ed4c357.js";
import { vu } from "../fs/async-hooks.7959.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { Ge } from "./aria-hidden.8741.js";
import { NR, vpe } from "./chunk-8231a0ec.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { en } from "../shared/chunk-4ac8e96b.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
var L = 5, G = 5;
function eUe(b) {
  let t = w(27), { output: m, fullOutput: p, elapsedTimeSeconds: i, totalLines: l, totalBytes: u, timeoutMs: o, verbose: a } = b, { columns: d } = Te(), z;
  if (t[0] !== d || t[1] !== m || t[2] !== a) z = a ? null : C(m, d), t[0] = d, t[1] = m, t[2] = a, t[3] = z;
  else z = t[3];
  let g = z, A;
  if (t[4] !== p || t[5] !== g) A = g ? g.text : lP(p.trim()), t[4] = p, t[5] = g, t[6] = A;
  else A = t[6];
  let M = A;
  if (!M) {
    let c2;
    if (t[7] === S) c2 = e(n, { dimColor: true, children: "Running… " }), t[7] = c2;
    else c2 = t[7];
    let f2;
    if (t[8] !== i || t[9] !== o) f2 = e(Ge, { children: r(NR, { children: [c2, e(vpe, { elapsedTimeSeconds: i, timeoutMs: o })] }) }), t[8] = i, t[9] = o, t[10] = f2;
    else f2 = t[10];
    return f2;
  }
  let _ = g ? L : Ft(p, `
`) + 1, E = (l ? Math.max(0, l - _) : 0) + (g?.dropped ?? 0), x = "";
  if (u && l) x = `~${l} lines`;
  else if (E > 0) x = `+${E} lines`;
  let c;
  if (t[11] !== M) c = e(n, { dimColor: true, children: M }), t[11] = M, t[12] = c;
  else c = t[12];
  let f;
  if (t[13] !== x) f = x ? e(n, { dimColor: true, children: x }) : null, t[13] = x, t[14] = f;
  else f = t[14];
  let B;
  if (t[15] !== i || t[16] !== o) B = e(vpe, { elapsedTimeSeconds: i, timeoutMs: o }), t[15] = i, t[16] = o, t[17] = B;
  else B = t[17];
  let O;
  if (t[18] !== u) O = u ? e(n, { dimColor: true, children: en(u) }) : null, t[18] = u, t[19] = O;
  else O = t[19];
  let R;
  if (t[20] !== f || t[21] !== B || t[22] !== O) R = r(s, { flexDirection: "row", gap: 1, children: [f, B, O] }), t[20] = f, t[21] = B, t[22] = O, t[23] = R;
  else R = t[23];
  let F;
  if (t[24] !== c || t[25] !== R) F = e(Ge, { children: e(NR, { children: r(s, { flexDirection: "column", children: [c, R] }) }) }), t[24] = c, t[25] = R, t[26] = F;
  else F = t[26];
  return F;
}
function kto({ output: b, fullOutput: m, totalLines: p }, i) {
  if (!m.trim()) return false;
  return (p ?? 0) > L || C(b, i).clipped;
}
function C(b, m) {
  let p = Math.max(1, m - G), i = lP(b.trim()).replace(/\r\n?/g, `
`).split(`
`).filter((a) => a), l = [], u = 0, o = i.length;
  while (o > 0 && u < L) {
    let a = i[--o], d = vu(a, p, { hard: true, trim: false }).split(`
`), t = L - u;
    if (d.length > t) return l.unshift(vC(d.slice(-t).join(""), " ")), { text: l.join(`
`), clipped: true, dropped: o };
    l.unshift(a), u += d.length;
  }
  return { text: l.join(`
`), clipped: o > 0, dropped: o };
}
export {
  eUe,
  kto
};
