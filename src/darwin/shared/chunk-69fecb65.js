// darwin/shared/chunk-69fecb65.js — Claude Code 2.1.310（darwin）模块 chunk-92n351f7.js
import { Be } from "../mcp/allowed-warning.js";
import { Q6, m8, b2s, w2s, E2s } from "../context/team-memory-sync.js";
function V0n(o, r = o) {
  let m = Q6() && r.some((e) => e.mcpInfo?.serverName === m8 && e.mcpInfo.toolName === Be);
  return E2s(w2s(o)).filter((e) => !m || e.mcpInfo?.serverName !== m8 || e.mcpInfo.toolName !== b2s);
}
export {
  V0n
};
