// ui/chunk-jz19cqtw.js — Claude Code 2.1.310 模块 chunk-jz19cqtw.js
import { w } from "./chunk-zqxc4qtb.js";
import { rt, n, Vr } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { Pc } from "../shared/chunk-h1g05r4t.js";
import { Tgr, xs, Je } from "./aria-hidden.r9bm.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
import { y, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
var wgr = 500;
function w5e(L = wgr) {
  let r = Pc();
  return Vr(L, r);
}
function cr(L) {
  let s = w(33), { onConfirm: r, onCancel: o, confirmLabel: K, cancelLabel: _, cancelFirst: D, focus: V, hideIndexes: X, disablePrintableKeybindings: Y, refuseInput: M, openedAt: F, windowMs: ee, armAfterMs: I } = L, i = K === void 0 ? "Yes" : K, c = _ === void 0 ? "No" : _, g = D === void 0 ? false : D, ne = V === void 0 ? "confirm" : V, v = X === void 0 ? false : X, x = Y === void 0 ? false : Y, [N] = y(ne), l = w5e(I ?? null) || I === void 0;
  if (rt()) {
    const a2 = ee ?? I;
    let t2;
    if (s[0] !== c || s[1] !== i || s[2] !== o || s[3] !== r || s[4] !== F || s[5] !== M || s[6] !== a2) t2 = e(Tgr, { confirmLabel: i, cancelLabel: c, onConfirm: r, onCancel: o, refuseInput: M, openedAt: F, windowMs: a2 }), s[0] = c, s[1] = i, s[2] = o, s[3] = r, s[4] = F, s[5] = M, s[6] = a2, s[7] = t2;
    else t2 = s[7];
    return t2;
  }
  let a;
  if (s[8] !== i || s[9] !== l) a = l ? i : e(n, { dimColor: true, children: i }), s[8] = i, s[9] = l, s[10] = a;
  else a = s[10];
  let t;
  if (s[11] !== a) t = { label: a, value: "confirm" }, s[11] = a, s[12] = t;
  else t = s[12];
  let m = t, d;
  if (s[13] !== c || s[14] !== l) d = l ? c : e(n, { dimColor: true, children: c }), s[13] = c, s[14] = l, s[15] = d;
  else d = s[15];
  let k;
  if (s[16] !== d) k = { label: d, value: "cancel" }, s[16] = d, s[17] = k;
  else k = s[17];
  let f = k, u;
  if (s[18] !== f || s[19] !== g || s[20] !== m) u = g ? [f, m] : [m, f], s[18] = f, s[19] = g, s[20] = m, s[21] = u;
  else u = s[21];
  const P = !l;
  let b;
  if (s[22] !== o || s[23] !== r) b = (oe) => oe === "confirm" ? r() : o(), s[22] = o, s[23] = r, s[24] = b;
  else b = s[24];
  let q;
  if (s[25] !== x || s[26] !== v || s[27] !== o || s[28] !== N || s[29] !== u || s[30] !== P || s[31] !== b) q = e(Je, { options: u, selectedValue: xs, hideIndexes: v, disablePrintableKeybindings: x, isDisabled: P, defaultFocusValue: N, onChange: b, onCancel: o }), s[25] = x, s[26] = v, s[27] = o, s[28] = N, s[29] = u, s[30] = P, s[31] = b, s[32] = q;
  else q = s[32];
  return q;
}
export {
  cr,
  w5e,
  wgr
};
