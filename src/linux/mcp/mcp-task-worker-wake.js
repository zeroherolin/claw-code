// linux/mcp/mcp-task-worker-wake.js — Claude Code 2.1.310（linux）模块 chunk-sdz0xp27.js
import { k } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
var P_t = 5e3;
function zT() {
  return k("tengu_glowing_lark", false);
}
function Kun() {
  return zT() && k("tengu_mcp_task_worker_wake", false);
}
function j$o() {
  return i.CLAUDE_CODE_DISABLE_MCP_TASK_BACKGROUND;
}
export {
  Kun,
  P_t,
  j$o,
  zT
};
