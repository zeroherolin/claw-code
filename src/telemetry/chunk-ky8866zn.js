// telemetry/chunk-ky8866zn.js — Claude Code 2.1.310 模块 chunk-ky8866zn.js
import { k } from "../settings/global-config-and-gates.27xj.js";
import { i } from "../shared/environment.9a41.js";
function t() {
  return process.argv.includes("--agent-teams");
}
function Ss() {
  if (!i.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS && !t()) return false;
  if (!k("tengu_amber_flint", true)) return false;
  return true;
}
async function RIo() {
  if (!Ss()) return;
  let { captureTeammateModeSnapshot: e } = await import("../agents/capture-teammate-mode-snapshot.wt5a.js");
  e();
}
export {
  RIo,
  Ss
};
