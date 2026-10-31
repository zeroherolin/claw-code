// darwin/telemetry/fleet-past-sessions.js — Claude Code 2.1.310（darwin）模块 chunk-vsk9mzbd.js
import { Ti, k } from "../settings/global-config-and-gates.js";
import { Ne } from "../fs/async-hooks.93b1.js";
import { i, Zn } from "../shared/environment.js";
import { va } from "../shared/chunk-d2c47492.js";
import { VF } from "../settings/workflow-launch-exec.js";
function O$t() {
  return r() !== null;
}
function r() {
  if (i.CLAUDE_CODE_DISABLE_AGENT_VIEW) return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
  if (VF()?.settings.disableAgentView === true) return "is disabled by the 'disableAgentView' setting";
  return null;
}
function Rv() {
  return !O$t();
}
var s = "tengu_fleetview_simple";
function IOo() {
  return i.CLAUDE_CODE_FLEETVIEW_SIMPLE || k(s, false);
}
async function M$t(e = {}) {
  if (VF() === null) {
    let { getSettingsWithErrors: t } = await import("../onboarding/admin-policy-load-failure-refuses-launch.js");
    t();
  }
  if (e.kickGrowthBook !== false) Ti().catch(() => {
  });
}
function jan() {
  return Zn.CLAUDE_CODE_FLEET_PAST_SESSIONS === true || k("tengu_fleet_past_sessions", false);
}
function rJe() {
  return Rv();
}
function yJ() {
  return false;
}
function oJe() {
  return k("tengu_amber_anchor", false);
}
function OOo() {
  return k("tengu_copper_lantern", false);
}
function a() {
  return k("tengu_quiet_harbor", false) ? "ask" : "transient";
}
function GDr() {
  let e = process.env.CLAUDE_CODE_DAEMON_COLD_START;
  if (e === "transient" || e === "ask") return e;
  let t = VF()?.settings.daemonColdStart;
  if (t !== void 0) return t;
  return a();
}
function Qf() {
  return oJe() ? "daemon" : "background service";
}
function mhe() {
  return va(Qf());
}
function gCe(e) {
  return rJe() ? ` — run 'claude daemon ${e}'` : "";
}
function sJe(e, t) {
  let o = t ?? r() ?? "is not available in this environment";
  process.stderr.write(`'${e}' ${o}.
`), process.exit(1);
}
var JKn = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";
function zDr() {
  return false;
}
function MOo() {
  return !!i.CLAUDE_AGENTS_SELECT;
}
function HOo() {
  let e = Ne(process.env[JKn]);
  return delete process.env[JKn], e;
}
export {
  GDr,
  HOo,
  IOo,
  JKn,
  M$t,
  MOo,
  O$t,
  OOo,
  Qf,
  Rv,
  gCe,
  jan,
  mhe,
  oJe,
  rJe,
  sJe,
  yJ,
  zDr
};
