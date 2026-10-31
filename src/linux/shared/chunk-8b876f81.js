// linux/shared/chunk-8b876f81.js — Claude Code 2.1.310（linux）模块 chunk-1792w5z9.js
import { i } from "./environment.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { ALr } from "../telemetry/fleet-past-sessions.js";
import { n7e } from "../permissions/light-daltonized.js";
import { vIn } from "./chunk-be0ce119.js";
import { w } from "../ui/chunk-0ed4c357.js";
import { lPt } from "./chunk-4ef913a6.js";
import { uwe } from "../ui/chunk-0dd3d634.js";
import { oGe, _G } from "../telemetry/focus-events.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { n$n, xMt, z7t } from "./chunk-c76f3544.js";
import { P, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
j();
var s = { light: { background: "#f9f9f7", foreground: "#000000" }, dark: { background: "#1f1f1e", foreground: "#ffffff" } };
function vds(n, t, o) {
  if (!o) return;
  let r;
  if (n === "auto") {
    if (t === void 0) return;
    r = t;
  } else r = z7t(n);
  return n7e(r) ? s.light : s.dark;
}
function l() {
  let o = w(4), [n, t] = y(n$n), r, m;
  if (o[0] === S) r = () => xMt(() => t(n$n())), m = [], o[0] = r, o[1] = m;
  else r = o[0], m = o[1];
  P(r, m);
  let f;
  if (o[2] !== n) f = vds(vIn(), n, ALr()), o[2] = n, o[3] = f;
  else f = o[3];
  return f;
}
function Ofr(n) {
  let f = w(9), { children: t, mouseTracking: o, killRing: r } = n, m = l(), c;
  if (f[0] !== t || f[1] !== r) c = e(lPt, { handle: r, children: t }), f[0] = t, f[1] = r, f[2] = c;
  else c = f[2];
  let a = c;
  if (oGe()) {
    let d;
    if (f[3] !== o) d = o ?? _G(), f[3] = o, f[4] = d;
    else d = f[4];
    let p;
    if (f[5] !== m || f[6] !== d || f[7] !== a) p = e(uwe, { mouseTracking: d, surface: m, children: a }), f[5] = m, f[6] = d, f[7] = a, f[8] = p;
    else p = f[8];
    return p;
  }
  return a;
}
function pEi() {
  if (O() === "windows" || i.WT_SESSION) process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ??= "1";
}
export {
  Ofr,
  pEi,
  vds
};
