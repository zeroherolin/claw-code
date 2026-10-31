// linux/shared/chunk-86ecf3aa.js — Claude Code 2.1.310（linux）模块 chunk-n8wdmnah.js
import { b, Hn } from "../agents/third-party.js";
function _e(n) {
  if (n == null) return;
  return /^[A-Za-z0-9_-]{1,128}$/.test(n) ? Hn(n) : b("nonconforming");
}
function Y4t(n) {
  return Hn(n.map((r) => _e(r)).join(","));
}
export {
  Y4t,
  _e
};
