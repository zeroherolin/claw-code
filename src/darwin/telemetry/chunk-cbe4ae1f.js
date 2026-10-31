// darwin/telemetry/chunk-cbe4ae1f.js — Claude Code 2.1.310（darwin）模块 chunk-9wrwp5rn.js
import { eg } from "../context/not-admin-owned.js";
import { Z, mj } from "../artifacts/same-account.js";
import { Id } from "../mcp/claude-browser.js";
var n = "Error POSTing to endpoint: MCP server not allowed";
function JKs(t) {
  if (!(t instanceof Error)) return false;
  let e = t.message.trimEnd();
  if (e === `Streamable HTTP error: ${n}`) return "code" in t && t.code === 403;
  if (e !== n) return false;
  return "status" in t ? t.status === 403 : "telemetryMessage" in t && typeof t.telemetryMessage === "string" && t.telemetryMessage.startsWith("SdkHttpError ");
}
function Wun() {
  return (eg() ?? []).find((t) => t.name === Id);
}
function TFo() {
  return mj() ? Z().mcpEntryRowNotServed : null;
}
function HGe(t) {
  return TFo() === t;
}
export {
  HGe,
  JKs,
  TFo,
  Wun
};
