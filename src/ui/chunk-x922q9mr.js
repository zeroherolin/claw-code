// ui/chunk-x922q9mr.js — Claude Code 2.1.310 模块 chunk-x922q9mr.js
import { R4 } from "../settings/global-config-and-gates.27xj.js";
import { w } from "./chunk-zqxc4qtb.js";
import { s, n, Yt } from "../telemetry/render-glyph-cardinality.7car.js";
import { ji } from "./spinner-stall-cleared.psn4.js";
import { uf } from "./chunk-5w9rmqs6.js";
import { vs } from "../shared/chunk-0pfps1v6.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { P, y, j } from "../vendor/react/chunk-s8vmszp2.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
j();
function Y(l, c) {
  let p = l.match(A);
  if (!p) {
    return e(n, { dimColor: true, children: l }, c);
  }
  let R = p[0];
  let B = p.index ?? 0;
  let E = l.slice(0, B);
  let F = l.slice(B + R.length);
  return r(n, { dimColor: true, children: [E, e(Yt, { url: R, children: R }), F] }, c);
}
var A = /https?:\/\/\S+/;
function xlt() {
  let a = w(10), f;
  if (a[0] === b) f = R4.getInstance().getStatus(), a[0] = f;
  else f = a[0];
  let [t, S] = y(f), m, d;
  if (a[1] === b) m = () => R4.getInstance().subscribe(S), d = [], a[1] = m, a[2] = d;
  else m = a[1], d = a[2];
  if (P(m, d), !t.isAuthenticating && !t.error && t.output.length === 0) {
    return null;
  }
  if (!t.isAuthenticating && !t.error) {
    return null;
  }
  let u;
  if (a[3] !== t.output) u = t.output.length > 0 && e(s, { flexDirection: "column", children: t.output.slice(-5).map(Y) }), a[3] = t.output, a[4] = u;
  else u = a[4];
  let i;
  if (a[5] !== t.error) i = t.error && e(vs, { error: t.error }), a[5] = t.error, a[6] = i;
  else i = a[6];
  let x;
  if (a[7] !== u || a[8] !== i) x = e(s, { marginY: 1, children: r(uf, { color: "permission", title: "Authentication", children: [u, i] }) }), a[7] = u, a[8] = i, a[9] = x;
  else x = a[9];
  return x;
}
function qr(a) {
  let i = w(10), { message: f, bold: t, dimColor: S, subtitle: m } = a, d = t === void 0 ? false : t, u = S === void 0 ? false : S, x;
  if (i[0] === b) x = e(ji, {}), i[0] = x;
  else x = i[0];
  let l;
  if (i[1] !== d || i[2] !== u || i[3] !== f) l = r(s, { flexDirection: "row", children: [x, r(n, { bold: d, dimColor: u, children: [" ", f] })] }), i[1] = d, i[2] = u, i[3] = f, i[4] = l;
  else l = i[4];
  let c;
  if (i[5] !== m) c = m && e(n, { dimColor: true, children: m }), i[5] = m, i[6] = c;
  else c = i[6];
  let p;
  if (i[7] !== l || i[8] !== c) p = r(s, { flexDirection: "column", children: [l, c] }), i[7] = l, i[8] = c, i[9] = p;
  else p = i[9];
  return p;
}
export {
  qr,
  xlt
};
