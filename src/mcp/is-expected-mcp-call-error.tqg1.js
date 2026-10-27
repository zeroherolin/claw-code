// mcp/is-expected-mcp-call-error.tqg1.js — Claude Code 2.1.310 模块 chunk-tqg1dg9x.js
import "../vendor/mcp-sdk/input-required.rtb7.js";
import "../fs/chunk-qvvxpbe1.js";
import "../auth/client-secret-basic.b61b.js";
import "../agents/third-party.ydpb.js";
import { R } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Gae } from "../auth/mcp-session-id.met7.js";
var o = /* @__PURE__ */ new Set(["ClaudeAiProxyBearerRejectedError", "McpAuthError", "McpError", "McpResponseSchemaError", "McpToolCallError", "ProtocolError", "SdkError", "SdkHttpError", "StreamableHTTPError", "TelemetrySafeError"]);
function a(r) {
  if (r instanceof DOMException) return r.name === "TimeoutError";
  if (!(r instanceof Error)) return false;
  if (r instanceof R) return true;
  if (r instanceof Gae) return true;
  if (("errorCode" in r && typeof r.errorCode === "string" || "code" in r && typeof r.code === "string") && /^HTTP 40[13]\b/.test(r.message)) return true;
  let e = r.name !== "Error" ? r.name : r.constructor?.name ?? "";
  return o.has(e);
}
export {
  a as isExpectedMcpCallError
};
