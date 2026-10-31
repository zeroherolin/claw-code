// linux/telemetry/fleet-past-sessions.js — Claude Code 2.1.310（linux）模块 chunk-b9vagsrs.js
import { Ai, k } from "../settings/global-config-and-gates.js";
import { Ne } from "../fs/async-hooks.93b1.js";
import { i, Zn } from "../shared/environment.js";
import { va } from "../shared/chunk-d2c47492.js";
import { j$ } from "../settings/workflow-launch-exec.js";
function EFt() {
  return r() !== null;
}
function r() {
  if (i.CLAUDE_CODE_DISABLE_AGENT_VIEW) return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
  if (j$()?.settings.disableAgentView === true) return "is disabled by the 'disableAgentView' setting";
  return null;
}
function CE() {
  return !EFt();
}
var s = "tengu_fleetview_simple";
function aOo() {
  return i.CLAUDE_CODE_FLEETVIEW_SIMPLE || k(s, false);
}
async function kFt(e = {}) {
  if (j$() === null) {
    let { getSettingsWithErrors: t } = await import("../onboarding/admin-policy-load-failure-refuses-launch.js");
    t();
  }
  if (e.kickGrowthBook !== false) Ai().catch(() => {
  });
}
function Pan() {
  return Zn.CLAUDE_CODE_FLEET_PAST_SESSIONS === true || k("tengu_fleet_past_sessions", false);
}
function XJe() {
  return CE();
}
function cQ() {
  return false;
}
function JJe() {
  return k("tengu_amber_anchor", false);
}
function lOo() {
  return k("tengu_copper_lantern", false);
}
function a() {
  return k("tengu_quiet_harbor", false) ? "ask" : "transient";
}
function TLr() {
  let e = process.env.CLAUDE_CODE_DAEMON_COLD_START;
  if (e === "transient" || e === "ask") return e;
  let t = j$()?.settings.daemonColdStart;
  if (t !== void 0) return t;
  return a();
}
function Qp() {
  return JJe() ? "daemon" : "background service";
}
function dhe() {
  return va(Qp());
}
function dTe(e) {
  return XJe() ? ` — run 'claude daemon ${e}'` : "";
}
function QJe(e, t) {
  let o = t ?? r() ?? "is not available in this environment";
  process.stderr.write(`'${e}' ${o}.
`), process.exit(1);
}
var Mqn = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";
function ALr() {
  return false;
}
function dOo() {
  return !!i.CLAUDE_AGENTS_SELECT;
}
function cOo() {
  let e = Ne(process.env[Mqn]);
  return delete process.env[Mqn], e;
}
export {
  ALr,
  CE,
  EFt,
  JJe,
  Mqn,
  Pan,
  QJe,
  Qp,
  TLr,
  XJe,
  aOo,
  cOo,
  cQ,
  dOo,
  dTe,
  dhe,
  kFt,
  lOo
};
