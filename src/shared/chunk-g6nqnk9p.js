// shared/chunk-g6nqnk9p.js — Claude Code 2.1.310 模块 chunk-g6nqnk9p.js
import { Be, Tt } from "../mcp/allowed-warning.j2d4.js";
var r = /* @__PURE__ */ new Set([Be, Tt]);
function qwe(e) {
  return r.has(e);
}
function nms(e, n) {
  return qwe(e) ? e : n;
}
function N5e(e) {
  return e === Tt ? "Select-Object -First, Select-Object -Last or Select-String" : "head, tail or grep";
}
function a0(e) {
  return e.isMcp !== true && qwe(e.name);
}
export {
  N5e,
  a0,
  nms,
  qwe
};
