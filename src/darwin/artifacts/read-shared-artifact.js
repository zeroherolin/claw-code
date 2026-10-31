// darwin/artifacts/read-shared-artifact.js — Claude Code 2.1.310（darwin）模块 chunk-9fgdaq79.js
import { Z, mj } from "./same-account.js";
import { jo } from "../mcp/always-allow.js";
import { Id } from "../mcp/claude-browser.js";
import { sK } from "./cobalt-plinth-lovage.js";
var wDe = "read_artifact", _2r = "get_artifact", rbi = "read_file", S2r = "read_shared_artifact", sAe = "read_comments", vgn = "reply_comment", XJn = "resolve_comment";
function Oce(e) {
  return jo(Id, e);
}
function JJn(e) {
  return { name: Oce(e), mcpInfo: { serverName: Id, toolName: e } };
}
function ul() {
  return mj() && Z().builtInArtifactHiddenForMcp;
}
function R2o(e) {
  let o = sK;
  return ul() && [e.name, e.underlyingV1ToolName, e.familyParentToolName].some((t) => t !== void 0 && o.includes(t));
}
function axi(e) {
  return ul() && e.some((o) => o.mcpInfo?.serverName === Id);
}
function lxi(e) {
  return ul() && e.mcpInfo?.serverName === Id;
}
function dxi(e) {
  if (!ul()) return [];
  return [wDe, _2r, ...e ? [rbi] : []].map(JJn);
}
class n {
  tool = null;
  register(e) {
    this.tool = e;
  }
}
var b2r = new n();
function kgn() {
  return ul() ? b2r.tool ?? void 0 : void 0;
}
export {
  JJn,
  Oce,
  R2o,
  S2r,
  XJn,
  _2r,
  axi,
  b2r,
  dxi,
  kgn,
  lxi,
  rbi,
  sAe,
  ul,
  vgn,
  wDe
};
