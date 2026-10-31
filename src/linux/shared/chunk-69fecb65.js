// linux/shared/chunk-69fecb65.js — Claude Code 2.1.310（linux）模块 chunk-g7nfbdtr.js
import { Be } from "../mcp/allowed-warning.js";
import { BK, a8, YWs, XWs, JWs } from "../context/team-memory-sync.js";
function dDn(o, r = o) {
  let m = BK() && r.some((e) => e.mcpInfo?.serverName === a8 && e.mcpInfo.toolName === Be);
  return JWs(XWs(o)).filter((e) => !m || e.mcpInfo?.serverName !== a8 || e.mcpInfo.toolName !== YWs);
}
export {
  dDn
};
