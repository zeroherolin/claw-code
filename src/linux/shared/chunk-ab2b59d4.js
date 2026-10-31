// linux/shared/chunk-ab2b59d4.js — Claude Code 2.1.310（linux）模块 chunk-00h33g5z.js
import { Be, At } from "../mcp/allowed-warning.js";
var r = /* @__PURE__ */ new Set([Be, At]);
function zwe(e) {
  return r.has(e);
}
function $ps(e, n) {
  return zwe(e) ? e : n;
}
function M6e(e) {
  return e === At ? "Select-Object -First, Select-Object -Last or Select-String" : "head, tail or grep";
}
function rD(e) {
  return e.isMcp !== true && zwe(e.name);
}
export {
  $ps,
  M6e,
  rD,
  zwe
};
