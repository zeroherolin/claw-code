// darwin/mcp/mcp-task-worker-wake.js — Claude Code 2.1.310（darwin）模块 chunk-a5krawz7.js
import { k } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
var b_t = 5e3;
function zC() {
  return k("tengu_glowing_lark", false);
}
function Uun() {
  return zC() && k("tengu_mcp_task_worker_wake", false);
}
function wFo() {
  return i.CLAUDE_CODE_DISABLE_MCP_TASK_BACKGROUND;
}
export {
  Uun,
  b_t,
  wFo,
  zC
};
