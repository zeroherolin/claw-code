// ui/aria-label.99qs.js — Claude Code 2.1.310 模块 chunk-99qsp0mr.js
import { Ji, Kg } from "../shared/chunk-j79dwkaq.js";
import { ko, vCt } from "../shell/invalid-type.qnva.js";
import { w } from "./chunk-zqxc4qtb.js";
import { le } from "../shared/chunk-abagh0tt.js";
import { he } from "../vendor/chalk/xterm-ghostty.qrwz.js";
import { rt, n, kUe, Wa } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { eE } from "../shared/chunk-y6x1q9pp.js";
import { EUe, P_, Yg, cw } from "../shared/xterm-ghostty.n6f6.js";
import { Pp } from "../telemetry/chunk-eewnxw2v.js";
import { Q, e, r } from "../vendor/react/chunk-f790ajz4.js";
import { bh } from "../shared/chunk-bvy21rxm.js";
import { ne } from "../workflows/workflow-size-guideline-change.1rc0.js";
var $we = { success: { icon: ne.tick, color: "success", ariaLabel: "done:" }, error: { icon: ne.cross, color: "error", ariaLabel: "failed:" }, warning: { icon: ne.warning, color: "warning", ariaLabel: "warning:" }, info: { icon: ne.info, color: "suggestion", ariaLabel: "note:" }, pending: { icon: ne.circle, color: void 0, ariaLabel: "pending:" }, loading: { icon: "…", color: void 0, ariaLabel: "loading:" }, running: { icon: ko, color: void 0, ariaLabel: "running:" }, on: { icon: ne.tick, color: "success", ariaLabel: "on:" }, off: { icon: ne.circle, color: void 0, ariaLabel: "off:" }, working: { icon: vCt, color: void 0, ariaLabel: "working:" }, needsYou: { icon: vCt, color: "warning", ariaLabel: "needs you:" }, idle: { icon: vCt, color: void 0, ariaLabel: "idle:" }, failed: { icon: vCt, color: "error", ariaLabel: "error:" } }, I = { working: vCt, needsYou: "!", idle: "◦", failed: "×" }, L = 8, Y = 200;
function Glt() {
  return Math.max(...Object.values($we).map((l) => le(l.icon)));
}
function HIn() {
  return Glt() + 1;
}
function gt(l) {
  let a = w(20), { status: i, "aria-label": s, withSpace: u, slot: o } = l, c = u === void 0 ? false : u;
  if (i === void 0) {
    let p2;
    if (a[0] !== o) p2 = o && e(n, { children: " ".repeat(HIn()) }), a[0] = o, a[1] = p2;
    else p2 = a[1];
    return p2;
  }
  let t = $we[i], p;
  if (a[2] !== s || a[3] !== t || a[4] !== o) p = s ?? (o === "trailing" ? Kg(t.ariaLabel, ":") : t.ariaLabel), a[2] = s, a[3] = t, a[4] = o, a[5] = p;
  else p = a[5];
  let d = p;
  if (B(i)) {
    let f2;
    if (a[6] !== o || a[7] !== d || a[8] !== i || a[9] !== c) f2 = e(M, { status: i, spoken: d, slot: o, withSpace: c }), a[6] = o, a[7] = d, a[8] = i, a[9] = c, a[10] = f2;
    else f2 = a[10];
    return f2;
  }
  const f = t.color, m = !t.color;
  let g;
  if (a[11] !== t.icon || a[12] !== o || a[13] !== d || a[14] !== c) g = x(t.icon, d, o, c), a[11] = t.icon, a[12] = o, a[13] = d, a[14] = c, a[15] = g;
  else g = a[15];
  let k;
  if (a[16] !== t.color || a[17] !== m || a[18] !== g) k = e(n, { color: f, dimColor: m, children: g }), a[16] = t.color, a[17] = m, a[18] = g, a[19] = k;
  else k = a[19];
  return k;
}
function x(l, i, s, u) {
  let o = s === void 0 ? u && " " : Ji(" ", HIn() - le(l));
  return r(Q, { children: [s === "trailing" && o, e(n, { "aria-label": i, children: l }), s !== "trailing" && o] });
}
function B(l) {
  return l in I;
}
function M(l) {
  let a = w(17), { status: i, spoken: s, slot: u, withSpace: o } = l, c = eE(), p;
  if (a[0] !== c.subtle) p = cw(c.subtle), a[0] = c.subtle, a[1] = p;
  else p = a[1];
  let t = p, d;
  if (a[2] !== c.inactive) d = cw(c.inactive), a[2] = c.inactive, a[3] = d;
  else d = a[3];
  let f = d, { color: m } = $we[i], g = he.level >= 2 && t !== null && f !== null;
  const k = g ? vCt : I[i];
  let K;
  if (a[4] !== u || a[5] !== s || a[6] !== k || a[7] !== o) K = x(k, s, u, o), a[4] = u, a[5] = s, a[6] = k, a[7] = o, a[8] = K;
  else K = a[8];
  let b = K;
  if (g && i === "working") {
    let S2;
    if (a[9] !== f || a[10] !== t || a[11] !== b) S2 = e(N, { dimmer: t, dim: f, children: b }), a[9] = f, a[10] = t, a[11] = b, a[12] = S2;
    else S2 = a[12];
    return S2;
  }
  const S = !m;
  let X;
  if (a[13] !== m || a[14] !== b || a[15] !== S) X = e(n, { color: m, dimColor: S, children: b }), a[13] = m, a[14] = b, a[15] = S, a[16] = X;
  else X = a[16];
  return X;
}
function N(l) {
  let d = w(8), { dimmer: i, dim: s, children: u } = l, o = Pp(), c = rt(), a = o || c, p = Math.ceil(kUe(Y) / bh) * bh, [, t] = Wa(a ? null : p), f;
  if (d[0] !== s || d[1] !== i || d[2] !== a || d[3] !== t) f = a ? "subtle" : Yg(P_(i, s, EUe(Math.floor(t / p) % L, L))), d[0] = s, d[1] = i, d[2] = a, d[3] = t, d[4] = f;
  else f = d[4];
  let m = f, g;
  if (d[5] !== u || d[6] !== m) g = e(n, { color: m, children: u }), d[5] = u, d[6] = m, d[7] = g;
  else g = d[7];
  return g;
}
export {
  $we,
  Glt,
  HIn,
  gt
};
