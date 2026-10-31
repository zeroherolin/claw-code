// linux/shared/chunk-725c984c.js — Claude Code 2.1.310（linux）模块 chunk-ywy052ac.js
import { uie } from "./chunk-3b9c376b.js";
var n = 1;
function r() {
  return uie();
}
var s = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function ebt(t) {
  return typeof t === "string" && s.test(t);
}
function x8() {
  return { msgV: n, msg_id: r() };
}
export {
  ebt,
  x8
};
