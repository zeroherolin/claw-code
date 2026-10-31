// linux/telemetry/chunk-cb9c99f9.js — Claude Code 2.1.310（linux）模块 chunk-hk4fpv24.js
import { k } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
function t() {
  return process.argv.includes("--agent-teams");
}
function _s() {
  if (!i.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS && !t()) return false;
  if (!k("tengu_amber_flint", true)) return false;
  return true;
}
async function ZPo() {
  if (!_s()) return;
  let { captureTeammateModeSnapshot: e } = await import("../agents/capture-teammate-mode-snapshot.js");
  e();
}
export {
  ZPo,
  _s
};
