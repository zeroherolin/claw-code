// darwin/shared/chunk-86ecf3aa.js — Claude Code 2.1.310（darwin）模块 chunk-19a02m7w.js
import { S, Dn } from "../agents/third-party.js";
function _e(n) {
  if (n == null) return;
  return /^[A-Za-z0-9_-]{1,128}$/.test(n) ? Dn(n) : S("nonconforming");
}
function d3t(n) {
  return Dn(n.map((r) => _e(r)).join(","));
}
export {
  _e,
  d3t
};
