// darwin/shared/chunk-3c6e6b31.js — Claude Code 2.1.310（darwin）模块 chunk-npfaxhr1.js
var Ope = "claude.ai ", uz = "claude_ai_";
function vn(t) {
  let r = t.replace(/[^a-zA-Z0-9_-]/g, "_");
  if (t.startsWith("claude.ai ")) r = r.replace(/_+/g, "_").replace(/^_|_$/g, "");
  return r;
}
var e = "claudeai_";
function wK(t) {
  return vn(t).toLowerCase().replace(/[-_]+/g, "_").replace(/^_|_$/g, "");
}
var Wci = "org-connector-", iQo = 128;
function uTt(t) {
  if (t.length > iQo) return false;
  let r = `${wK(t)}_`;
  return r.startsWith("org_connector_") || r.startsWith("orgconnector_");
}
function aQo(t) {
  let r = `${wK(t)}_`;
  return r.startsWith("claude_ai_") || r.startsWith(e);
}
export {
  Ope,
  Wci,
  aQo,
  iQo,
  uTt,
  uz,
  vn,
  wK
};
