// shared/chunk-yzmdsjnh.js — Claude Code 2.1.310 模块 chunk-yzmdsjnh.js
import { i } from "./environment.9a41.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { zDr } from "../telemetry/fleet-past-sessions.vsk9.js";
import { cQe } from "../permissions/light-daltonized.tkrm.js";
import { FIn } from "./chunk-y6x1q9pp.js";
import { w } from "../ui/chunk-zqxc4qtb.js";
import { yPt } from "./chunk-ea8pzfxk.js";
import { hwe } from "../ui/chunk-2fzp6mzy.js";
import { m2e, R2 } from "../telemetry/focus-events.e5dw.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
import { gFn, LMt, tZt } from "./chunk-tnnwxyz2.js";
import { P, y, j } from "../vendor/react/chunk-s8vmszp2.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
j();
var s = { light: { background: "#f9f9f7", foreground: "#000000" }, dark: { background: "#1f1f1e", foreground: "#ffffff" } };
function vds(n, t, o) {
  if (!o) return;
  let r;
  if (n === "auto") {
    if (t === void 0) return;
    r = t;
  } else r = tZt(n);
  return cQe(r) ? s.light : s.dark;
}
function l() {
  let o = w(4), [n, t] = y(gFn), r, m;
  if (o[0] === b) r = () => LMt(() => t(gFn())), m = [], o[0] = r, o[1] = m;
  else r = o[0], m = o[1];
  P(r, m);
  let f;
  if (o[2] !== n) f = vds(FIn(), n, zDr()), o[2] = n, o[3] = f;
  else f = o[3];
  return f;
}
function Dpr(n) {
  let f = w(9), { children: t, mouseTracking: o, killRing: r } = n, m = l(), c;
  if (f[0] !== t || f[1] !== r) c = e(yPt, { handle: r, children: t }), f[0] = t, f[1] = r, f[2] = c;
  else c = f[2];
  let a = c;
  if (m2e()) {
    let d;
    if (f[3] !== o) d = o ?? R2(), f[3] = o, f[4] = d;
    else d = f[4];
    let p;
    if (f[5] !== m || f[6] !== d || f[7] !== a) p = e(hwe, { mouseTracking: d, surface: m, children: a }), f[5] = m, f[6] = d, f[7] = a, f[8] = p;
    else p = f[8];
    return p;
  }
  return a;
}
function Yvi() {
  if (O() === "windows" || i.WT_SESSION) process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ??= "1";
}
export {
  Dpr,
  Yvi,
  vds
};
