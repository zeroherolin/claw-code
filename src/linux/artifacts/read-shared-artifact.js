// linux/artifacts/read-shared-artifact.js — Claude Code 2.1.310（linux）模块 chunk-ggnzxsv7.js
import { Z, aj } from "./same-account.js";
import { Xo } from "../mcp/always-allow.js";
import { Id } from "../mcp/claude-browser.js";
import { qV } from "./cobalt-plinth-lovage.js";
var mLe = "read_artifact", YWr = "get_artifact", Sbi = "read_file", XWr = "read_shared_artifact", QAe = "read_comments", ogn = "reply_comment", xQn = "resolve_comment";
function kce(e) {
  return Xo(Id, e);
}
function PQn(e) {
  return { name: kce(e), mcpInfo: { serverName: Id, toolName: e } };
}
function cl() {
  return aj() && Z().builtInArtifactHiddenForMcp;
}
function YWo(e) {
  let o = qV;
  return cl() && [e.name, e.underlyingV1ToolName, e.familyParentToolName].some((t) => t !== void 0 && o.includes(t));
}
function ERi(e) {
  return cl() && e.some((o) => o.mcpInfo?.serverName === Id);
}
function kRi(e) {
  return cl() && e.mcpInfo?.serverName === Id;
}
function TRi(e) {
  if (!cl()) return [];
  return [mLe, YWr, ...e ? [Sbi] : []].map(PQn);
}
class n {
  tool = null;
  register(e) {
    this.tool = e;
  }
}
var JWr = new n();
function sgn() {
  return cl() ? JWr.tool ?? void 0 : void 0;
}
export {
  ERi,
  JWr,
  PQn,
  QAe,
  Sbi,
  TRi,
  XWr,
  YWo,
  YWr,
  cl,
  kRi,
  kce,
  mLe,
  ogn,
  sgn,
  xQn
};
