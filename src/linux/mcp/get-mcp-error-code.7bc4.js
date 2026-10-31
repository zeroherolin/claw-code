// linux/mcp/get-mcp-error-code.7bc4.js — Claude Code 2.1.310（linux）模块 chunk-evc20fm1.js
import { ea, Mi } from "../vendor/mcp-sdk/input-required.88fd.js";
var o = /* @__PURE__ */ new Set([-32002, ea.InvalidParams]);
function e(n) {
  return n instanceof Mi ? n.code : void 0;
}
function t(n) {
  return n instanceof Mi && n.code === ea.MethodNotFound;
}
function i(n) {
  return n instanceof Mi && (n.code === ea.MethodNotFound || n.code === ea.InvalidParams);
}
function c(n) {
  return n instanceof Mi && o.has(n.code);
}
function u(n) {
  return n instanceof Mi && n.code === ea.InvalidParams;
}
function d(n) {
  return n instanceof Mi && n.code === ea.UrlElicitationRequired;
}
export {
  e as getMcpErrorCode,
  t as isMcpMethodNotFoundError,
  u as isMcpNotADirectoryError,
  c as isMcpResourceNotFoundError,
  i as isMcpUnknownMethodError,
  d as isUrlElicitationRequiredMcpError
};
