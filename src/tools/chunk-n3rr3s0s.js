// tools/chunk-n3rr3s0s.js — Claude Code 2.1.310 模块 chunk-n3rr3s0s.js
import { ht } from "../agents/chunk-zwvcbrvr.js";
import { ra } from "../settings/global-config-and-gates.27xj.js";
import { at, qt, Be, Tt } from "../mcp/allowed-warning.j2d4.js";
import { qe } from "../shared/allow-large.djgw.js";
var r = null, s = null, n = null, e = { name: import.meta.require("../artifacts/artifact-card-title.3rkc.js").ARTIFACT_TOOL_NAME, names: import.meta.require("../artifacts/artifact-card-title.3rkc.js"), ui: import.meta.require("../ui/render-check-tool-use-message.fhmb.js") }, M = [ht, Be, at, qt, qe, ra, Tt, ...r ? [r.name] : [], ...s ? [s.name] : [], ...n ? [n.name] : [], ...e ? [e.name, e.names.ARTIFACT_COMMENTS_TOOL_NAME, e.names.ARTIFACT_DATA_TOOL_NAME, e.names.ARTIFACT_CHECK_TOOL_NAME] : []], T = { get [ht]() {
  return import.meta.require("../agents/extract-last-tool-info.njfq.js").renderToolUseMessage;
}, get [Be]() {
  return import.meta.require("../tasks/is-result-truncated.d5jv.js").renderToolUseMessage;
}, get [at]() {
  return import.meta.require("../ui/render-tool-result-message.t3w4.js").renderToolUseMessage;
}, get [qt]() {
  return import.meta.require("../ui/is-result-truncated.gg4f.js").renderToolUseMessage;
}, get [qe]() {
  return import.meta.require("../ui/render-tool-result-message.5ryh.js").renderToolUseMessage;
}, get [ra]() {
  return import.meta.require("../ui/render-tool-result-message.4k20.js").renderToolUseMessage;
}, get [Tt]() {
  return import.meta.require("../ui/is-result-truncated.cg20.js").renderToolUseMessage;
}, ...r && { [r.name]: r.ui.renderToolUseMessage }, ...s && { [s.name]: s.ui.renderToolUseMessage }, ...n && { [n.name]: n.ui.renderToolUseMessage }, ...e && { [e.name]: e.ui.renderToolUseLine, [e.names.ARTIFACT_COMMENTS_TOOL_NAME]: e.ui.renderCommentsToolUseMessage, [e.names.ARTIFACT_DATA_TOOL_NAME]: e.ui.renderDataToolUseMessage, [e.names.ARTIFACT_CHECK_TOOL_NAME]: e.ui.renderCheckToolUseMessage } };
function ilt(o, t, l) {
  if (o.renderToolUseMessage) return o.renderToolUseMessage(t, l);
  return kxt(o.name, t, l);
}
function kxt(o, t, l) {
  if (Object.hasOwn(T, o)) return T[o]?.(t, l);
  return null;
}
export {
  ilt,
  kxt
};
