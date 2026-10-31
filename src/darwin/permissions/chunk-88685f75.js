// darwin/permissions/chunk-88685f75.js — Claude Code 2.1.310（darwin）模块 chunk-7dqvs9pd.js
import { ph } from "./classifier-transcript-too-long.js";
import { Ne, as } from "../fs/async-hooks.93b1.js";
import { i } from "../shared/environment.js";
import { Mes, Jlr } from "../remote/local-agent.js";
import { vhe } from "../context/team-memory-sync.js";
import { wV } from "../context/tool-result-clearing-after-idle-server-report.js";
var qQt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE", YQt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL", HMt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED", XQt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON";
function UCs(e) {
  return e.toolPermissionContext.proactivityBaseline === void 0 ? void 0 : e;
}
function uFn({ toolPermissionContext: e }) {
  let t = e.proactivityBaseline;
  return t === void 0 ? {} : { [qQt]: t.mode };
}
function pFn({ proactivityLevel: e, toolPermissionContext: t }) {
  let n = { [YQt]: e };
  if (t.startupModeDecidedByProactivityLevel !== void 0) n[HMt] = "1";
  if (wV()) n[XQt] = "1";
  return n;
}
function BCs({ toolPermissionContext: e }) {
  return e.startupModeDecidedByProactivityLevel === void 0 ? { [HMt]: "0" } : {};
}
function jCs(e) {
  return Jlr(e) !== "fresh" || Mes(e).some((t) => t === "--permission-mode" || t.startsWith("--permission-mode="));
}
function WCs(e) {
  let t = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE;
  i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE");
  let n = ph(t);
  if (n === "bypassPermissions" && !e) return;
  return n;
}
function GCs() {
  let e = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL;
  if (i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL"), vhe(e)) return e;
  i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"), i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON");
  return;
}
function zCs() {
  let e = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON;
  return i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON"), Ne(e);
}
function VCs() {
  return vhe(i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL) && Ne(i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON);
}
function fFn() {
  let e = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED;
  if (i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"), Ne(e)) return true;
  if (as(e)) return false;
  return;
}
export {
  BCs,
  GCs,
  HMt,
  UCs,
  VCs,
  WCs,
  XQt,
  YQt,
  fFn,
  jCs,
  pFn,
  qQt,
  uFn,
  zCs
};
