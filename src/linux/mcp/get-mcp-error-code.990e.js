// linux/mcp/get-mcp-error-code.990e.js — Claude Code 2.1.310（linux）模块 chunk-7aw9bk05.js
import { ta, Cd } from "../vendor/mcp-sdk/not-in-era.js";
import "../fs/chunk-1ddab6d4.js";
var n = /* @__PURE__ */ new Set([-32002, ta.InvalidParams]);
function e(o) {
  return o instanceof Cd ? o.code : void 0;
}
function t(o) {
  return o instanceof Cd && o.code === ta.MethodNotFound;
}
function c(o) {
  return o instanceof Cd && (o.code === ta.MethodNotFound || o.code === ta.InvalidParams);
}
function i(o) {
  return o instanceof Cd && n.has(o.code);
}
function u(o) {
  return o instanceof Cd && o.code === ta.InvalidParams;
}
function d(o) {
  return o instanceof Cd && o.code === ta.UrlElicitationRequired;
}
export {
  e as getMcpErrorCode,
  t as isMcpMethodNotFoundError,
  u as isMcpNotADirectoryError,
  i as isMcpResourceNotFoundError,
  c as isMcpUnknownMethodError,
  d as isUrlElicitationRequiredMcpError
};
