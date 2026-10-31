// linux/mcp/is-expected-mcp-call-error.js — Claude Code 2.1.310（linux）模块 chunk-cx565psm.js
import "../vendor/mcp-sdk/input-required.88fd.js";
import "../fs/chunk-1ddab6d4.js";
import "../auth/client-secret-basic.js";
import "../agents/third-party.js";
import { R } from "../telemetry/anthropic-workspace-id.js";
import { Lae } from "../auth/mcp-session-id.js";
var o = /* @__PURE__ */ new Set(["ClaudeAiProxyBearerRejectedError", "McpAuthError", "McpError", "McpResponseSchemaError", "McpToolCallError", "ProtocolError", "SdkError", "SdkHttpError", "StreamableHTTPError", "TelemetrySafeError"]);
function a(r) {
  if (r instanceof DOMException) return r.name === "TimeoutError";
  if (!(r instanceof Error)) return false;
  if (r instanceof R) return true;
  if (r instanceof Lae) return true;
  if (("errorCode" in r && typeof r.errorCode === "string" || "code" in r && typeof r.code === "string") && /^HTTP 40[13]\b/.test(r.message)) return true;
  let e = r.name !== "Error" ? r.name : r.constructor?.name ?? "";
  return o.has(e);
}
export {
  a as isExpectedMcpCallError
};
