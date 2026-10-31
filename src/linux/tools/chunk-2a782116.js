// linux/tools/chunk-2a782116.js — Claude Code 2.1.310（linux）模块 chunk-2vbdj34c.js
import { ht } from "../agents/chunk-5531d42a.js";
import { ra } from "../settings/global-config-and-gates.js";
import { at, qt, Be, At } from "../mcp/allowed-warning.js";
import { qe } from "../shared/allow-large.js";
var r = null, s = null, n = null, e = { name: import.meta.require("../artifacts/artifact-card-title.js").ARTIFACT_TOOL_NAME, names: import.meta.require("../artifacts/artifact-card-title.js"), ui: import.meta.require("../ui/render-check-tool-use-message.js") }, M = [ht, Be, at, qt, qe, ra, At, ...r ? [r.name] : [], ...s ? [s.name] : [], ...n ? [n.name] : [], ...e ? [e.name, e.names.ARTIFACT_COMMENTS_TOOL_NAME, e.names.ARTIFACT_DATA_TOOL_NAME, e.names.ARTIFACT_CHECK_TOOL_NAME] : []], T = { get [ht]() {
  return import.meta.require("../agents/extract-last-tool-info.js").renderToolUseMessage;
}, get [Be]() {
  return import.meta.require("../tasks/is-result-truncated.js").renderToolUseMessage;
}, get [at]() {
  return import.meta.require("../ui/render-tool-result-message.f87d.js").renderToolUseMessage;
}, get [qt]() {
  return import.meta.require("../ui/is-result-truncated.10a2.js").renderToolUseMessage;
}, get [qe]() {
  return import.meta.require("../ui/render-tool-result-message.45fa.js").renderToolUseMessage;
}, get [ra]() {
  return import.meta.require("../ui/render-tool-result-message.288a.js").renderToolUseMessage;
}, get [At]() {
  return import.meta.require("../ui/is-result-truncated.e9ba.js").renderToolUseMessage;
}, ...r && { [r.name]: r.ui.renderToolUseMessage }, ...s && { [s.name]: s.ui.renderToolUseMessage }, ...n && { [n.name]: n.ui.renderToolUseMessage }, ...e && { [e.name]: e.ui.renderToolUseLine, [e.names.ARTIFACT_COMMENTS_TOOL_NAME]: e.ui.renderCommentsToolUseMessage, [e.names.ARTIFACT_DATA_TOOL_NAME]: e.ui.renderDataToolUseMessage, [e.names.ARTIFACT_CHECK_TOOL_NAME]: e.ui.renderCheckToolUseMessage } };
function tlt(o, t, l) {
  if (o.renderToolUseMessage) return o.renderToolUseMessage(t, l);
  return gxt(o.name, t, l);
}
function gxt(o, t, l) {
  if (Object.hasOwn(T, o)) return T[o]?.(t, l);
  return null;
}
export {
  gxt,
  tlt
};
