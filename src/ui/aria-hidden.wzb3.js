// ui/aria-hidden.wzb3.js — Claude Code 2.1.310 模块 chunk-wzb3s7cm.js
import { Sir, bir } from "../shell/invalid-type.qnva.js";
import { w } from "./chunk-zqxc4qtb.js";
import { s, n } from "../telemetry/render-glyph-cardinality.7car.js";
import { ePt } from "../shared/chunk-7xx4c906.js";
import { Ilt } from "../shared/chunk-bbmrsakd.js";
import { qz } from "../shared/chunk-qwh43rvc.js";
import { dw } from "../shared/chunk-tpt8sqdk.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { Gt, Se, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
j();
var HPe = Gt(false), I8t = Gt(false);
function Dwe(i) {
  let p = w(26), { tone: o, text: a, detail: m, subLines: b, linkify: G } = i, t = G ? qz : n, E = Se(I8t) ? " " : i.state === "live" && !i.reducedMotion ? bir[i.frame % bir.length] : Sir, T = o === "gold" ? "warning" : o === "red" ? "error" : void 0, P = o === "red";
  const L = o === "dim", R = o === "red" ? "error:" : o === "gold" ? "warning:" : void 0, h = o === "dim";
  let c;
  if (p[0] !== E || p[1] !== T || p[2] !== L || p[3] !== R || p[4] !== h) c = r(n, { "aria-hidden": L, "aria-label": R, italic: true, color: T, dimColor: h, children: [E, " "] }), p[0] = E, p[1] = T, p[2] = L, p[3] = R, p[4] = h, p[5] = c;
  else c = p[5];
  const I = P ? "error" : void 0, k = !P;
  let u;
  if (p[6] !== t || p[7] !== a) u = e(t, { children: a }), p[6] = t, p[7] = a, p[8] = u;
  else u = p[8];
  let f;
  if (p[9] !== t || p[10] !== m) f = m !== void 0 && r(n, { dimColor: true, children: [" · ", e(t, { children: m })] }), p[9] = t, p[10] = m, p[11] = f;
  else f = p[11];
  let g;
  if (p[12] !== I || p[13] !== k || p[14] !== u || p[15] !== f) g = r(n, { italic: true, color: I, dimColor: k, children: [u, f] }), p[12] = I, p[13] = k, p[14] = u, p[15] = f, p[16] = g;
  else g = p[16];
  let C;
  if (p[17] !== t || p[18] !== b) C = b?.map((U, B) => e(n, { dimColor: true, children: e(t, { children: U }) }, B)), p[17] = t, p[18] = b, p[19] = C;
  else C = p[19];
  let y;
  if (p[20] !== g || p[21] !== C) y = r(s, { flexDirection: "column", flexGrow: 1, children: [g, C] }), p[20] = g, p[21] = C, p[22] = y;
  else y = p[22];
  let S;
  if (p[23] !== y || p[24] !== c) S = r(s, { flexDirection: "row", children: [c, y] }), p[23] = y, p[24] = c, p[25] = S;
  else S = p[25];
  return S;
}
function DE(i) {
  let o = ePt(), a = Ilt()?.isQueued === true;
  return !i && !o && !a && dw();
}
function Zno(i) {
  let o = DE(i), a = Ilt();
  return a?.isQueued === true ? a.noticeSystemLines : o;
}
export {
  DE,
  Dwe,
  HPe,
  I8t,
  Zno
};
