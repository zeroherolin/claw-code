// shared/chunk-m5qncq3p.js — Claude Code 2.1.310 模块 chunk-m5qncq3p.js
import { Bt, A$s } from "../core/conversation-engine.31gx.js";
var Qfr = { create: "Cloud session active", attach: "Attached to cloud session" }, Zfr = " · code here or at ";
function a(e, t) {
  return `${Qfr[e]}${Zfr}${t}`;
}
function bPn(e, t, o) {
  let s = a(e, t);
  return o ? A$s(e, t, s) : Bt(s, "info");
}
export {
  Qfr,
  Zfr,
  bPn
};
