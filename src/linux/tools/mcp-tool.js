// linux/tools/mcp-tool.js — Claude Code 2.1.310（linux）模块 chunk-8v07t0z7.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { tn } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Upt } from "../core/conversation-engine.js";
import { Ume, $xs } from "../mcp/chunk-30ba4d59.js";
import { o, kM, T, u, $e } from "../vendor/zod/string-format.js";
var r = "", s = "", KTr = "mcp", dBn = "mcp-display-only";
var c = p(() => u({}).passthrough()), kbo = p(() => $e([o(), T(u({ type: o() }).passthrough()), kM()]).describe("MCP tool execution result"));
function i(e) {
  if (!Array.isArray(e) || !e.some(a)) return e;
  return e.map((t) => a(t) ? { ...t, source: { ...t.source, data: "" } } : t);
}
function m(e) {
  return Array.isArray(e) && e.some(n) ? e.filter((t) => !n(t)) : e;
}
function n(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data === "";
}
function a(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data !== "";
}
var s1e = tn({ isMcp: true, isOpenWorld() {
  return false;
}, name: "mcp", uiTableKey: KTr, backgrounding: "self", maxResultSizeChars: 1e5, async description() {
  return s;
}, async prompt() {
  return r;
}, get inputSchema() {
  return c();
}, get outputSchema() {
  return kbo();
}, create() {
  return { async call() {
    return { data: "" };
  }, async checkPermissions() {
    return { behavior: "passthrough", message: "MCPTool requires permission." };
  } };
}, renderToolUseMessage(e, { verbose: t }) {
  return Upt(e, { verbose: t });
}, userFacingName: () => "mcp", stripForCreation: (e) => $xs(i(e)), mapToolResultToToolResultBlockParam(e, t) {
  return { tool_use_id: t, type: "tool_result", content: Ume(m(e)) };
} });
export {
  KTr,
  dBn,
  kbo,
  s1e
};
