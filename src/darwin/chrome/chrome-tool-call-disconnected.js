// darwin/chrome/chrome-tool-call-disconnected.js — Claude Code 2.1.310（darwin）模块 chunk-zaaeax4v.js
import { J, $At, iss } from "../context/not-admin-owned.js";
import { c, ce } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { i } from "../shared/environment.js";
import { vB } from "../core/conversation-engine.js";
import { a3t } from "../mcp/init-function-end.js";
function t() {
  let e = iss(), o = e === void 0 ? a3t() : void 0, [r, s] = e !== void 0 ? [Math.max(0, Date.now() - e), "session_switch"] : o !== void 0 ? [Math.max(0, Date.now() - o), "spawn_stamp"] : [J() ? void 0 : Math.round(process.uptime() * 1e3), "process_start"];
  return { msSinceSessionStart: r, startAnchor: c(s), isRemoteSession: Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) };
}
function n(e) {
  let o = $At();
  if (o.has(e)) return false;
  return o.add(e), true;
}
function ABn(e, o) {
  if (e === 0 || !n("tools_added")) return;
  a("tengu_chrome_tools_added", { ...t(), toolCount: e, discoverySource: c(o) });
}
function RBn(e) {
  if (!n("tool_attempted")) return;
  a("tengu_chrome_tool_attempted", { ...t(), ...e && { messageClientPlatform: vB(e) } });
}
function kxs(e) {
  if (!n("bridge_connected")) return;
  a("tengu_chrome_bridge_connected", { ...t(), bridgeStatus: ce(e) });
}
function Cxs() {
  if (!n("extension_connected")) return;
  a("tengu_chrome_extension_connected", t());
}
function Txs(e) {
  a("tengu_chrome_tool_call_disconnected", { ...t(), tokenAccountMismatch: e });
}
export {
  ABn,
  Cxs,
  RBn,
  Txs,
  kxs
};
