// linux/shared/chunk-0d491d4d.js — Claude Code 2.1.310（linux）模块 chunk-e6d2r8tt.js
import { Bt, j$s } from "../core/conversation-engine.js";
var Lpr = { create: "Cloud session active", attach: "Attached to cloud session" }, Npr = " · code here or at ";
function a(e, t) {
  return `${Lpr[e]}${Npr}${t}`;
}
function rPn(e, t, o) {
  let s = a(e, t);
  return o ? j$s(e, t, s) : Bt(s, "info");
}
export {
  Lpr,
  Npr,
  rPn
};
