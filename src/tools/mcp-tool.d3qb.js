// tools/mcp-tool.d3qb.js — Claude Code 2.1.310 模块 chunk-d3qbs4t2.js
import { f } from "../shared/chunk-nyvhtfb3.js";
import { tn } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { Kft } from "../core/conversation-engine.31gx.js";
import { zme, kPs } from "../mcp/chunk-15bj870x.js";
import { o, RM, C, u, Fe } from "../vendor/zod/string-format.k395.js";
var r = "", s = "", nTr = "mcp", S1n = "mcp-display-only";
var p = f(() => u({}).passthrough()), VSo = f(() => Fe([o(), C(u({ type: o() }).passthrough()), RM()]).describe("MCP tool execution result"));
function c(e) {
  if (!Array.isArray(e) || !e.some(a)) return e;
  return e.map((t) => a(t) ? { ...t, source: { ...t.source, data: "" } } : t);
}
function i(e) {
  return Array.isArray(e) && e.some(n) ? e.filter((t) => !n(t)) : e;
}
function n(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data === "";
}
function a(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data !== "";
}
var fBe = tn({ isMcp: true, isOpenWorld() {
  return false;
}, name: "mcp", uiTableKey: nTr, backgrounding: "self", maxResultSizeChars: 1e5, async description() {
  return s;
}, async prompt() {
  return r;
}, get inputSchema() {
  return p();
}, get outputSchema() {
  return VSo();
}, create() {
  return { async call() {
    return { data: "" };
  }, async checkPermissions() {
    return { behavior: "passthrough", message: "MCPTool requires permission." };
  } };
}, renderToolUseMessage(e, { verbose: t }) {
  return Kft(e, { verbose: t });
}, userFacingName: () => "mcp", stripForCreation: (e) => kPs(c(e)), mapToolResultToToolResultBlockParam(e, t) {
  return { tool_use_id: t, type: "tool_result", content: zme(i(e)) };
} });
export {
  S1n,
  VSo,
  fBe,
  nTr
};
