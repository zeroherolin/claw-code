// linux/telemetry/chunk-cbe4ae1f.js — Claude Code 2.1.310（linux）模块 chunk-7qstrcyg.js
import { eg } from "../context/not-admin-owned.js";
import { Z, aj } from "../artifacts/same-account.js";
import { Id } from "../mcp/claude-browser.js";
var n = "Error POSTing to endpoint: MCP server not allowed";
function fqs(t) {
  if (!(t instanceof Error)) return false;
  let e = t.message.trimEnd();
  if (e === `Streamable HTTP error: ${n}`) return "code" in t && t.code === 403;
  if (e !== n) return false;
  return "status" in t ? t.status === 403 : "telemetryMessage" in t && typeof t.telemetryMessage === "string" && t.telemetryMessage.startsWith("SdkHttpError ");
}
function Tun() {
  return (eg() ?? []).find((t) => t.name === Id);
}
function YNo() {
  return aj() ? Z().mcpEntryRowNotServed : null;
}
function kze(t) {
  return YNo() === t;
}
export {
  Tun,
  YNo,
  fqs,
  kze
};
