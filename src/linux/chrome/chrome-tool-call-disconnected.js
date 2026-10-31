// linux/chrome/chrome-tool-call-disconnected.js — Claude Code 2.1.310（linux）模块 chunk-e0nmwvd2.js
import { J, xCt, Tos } from "../context/not-admin-owned.js";
import { c, ce } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { i } from "../shared/environment.js";
import { y1 } from "../core/conversation-engine.js";
import { V4t } from "../mcp/init-function-end.js";
function t() {
  let e = Tos(), o = e === void 0 ? V4t() : void 0, [r, s] = e !== void 0 ? [Math.max(0, Date.now() - e), "session_switch"] : o !== void 0 ? [Math.max(0, Date.now() - o), "spawn_stamp"] : [J() ? void 0 : Math.round(process.uptime() * 1e3), "process_start"];
  return { msSinceSessionStart: r, startAnchor: c(s), isRemoteSession: Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) };
}
function n(e) {
  let o = xCt();
  if (o.has(e)) return false;
  return o.add(e), true;
}
function l1n(e, o) {
  if (e === 0 || !n("tools_added")) return;
  a("tengu_chrome_tools_added", { ...t(), toolCount: e, discoverySource: c(o) });
}
function d1n(e) {
  if (!n("tool_attempted")) return;
  a("tengu_chrome_tool_attempted", { ...t(), ...e && { messageClientPlatform: y1(e) } });
}
function URs(e) {
  if (!n("bridge_connected")) return;
  a("tengu_chrome_bridge_connected", { ...t(), bridgeStatus: ce(e) });
}
function BRs() {
  if (!n("extension_connected")) return;
  a("tengu_chrome_extension_connected", t());
}
function jRs(e) {
  a("tengu_chrome_tool_call_disconnected", { ...t(), tokenAccountMismatch: e });
}
export {
  BRs,
  URs,
  d1n,
  jRs,
  l1n
};
