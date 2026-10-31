// linux/shared/chunk-3c6e6b31.js — Claude Code 2.1.310（linux）模块 chunk-errevp3y.js
var Tfe = "claude.ai ", n2 = "claude_ai_";
function En(t) {
  let r = t.replace(/[^a-zA-Z0-9_-]/g, "_");
  if (t.startsWith("claude.ai ")) r = r.replace(/_+/g, "_").replace(/^_|_$/g, "");
  return r;
}
var e = "claudeai_";
function uq(t) {
  return En(t).toLowerCase().replace(/[-_]+/g, "_").replace(/^_|_$/g, "");
}
var ici = "org-connector-", xQo = 128;
function rAt(t) {
  if (t.length > xQo) return false;
  let r = `${uq(t)}_`;
  return r.startsWith("org_connector_") || r.startsWith("orgconnector_");
}
function PQo(t) {
  let r = `${uq(t)}_`;
  return r.startsWith("claude_ai_") || r.startsWith(e);
}
export {
  En,
  PQo,
  Tfe,
  ici,
  n2,
  rAt,
  uq,
  xQo
};
