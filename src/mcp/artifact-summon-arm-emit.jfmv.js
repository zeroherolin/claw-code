// mcp/artifact-summon-arm-emit.jfmv.js — Claude Code 2.1.310 模块 chunk-jfmv5j7d.js
import { Z } from "../artifacts/same-account.bxg8.js";
import { g } from "../telemetry/chunk-wn8xtaqg.js";
function PEe(e) {
  let { wakes: t } = Z().wakes, n = t.get(e);
  if (!n) n = { coalesceTimer: null, rescanWanted: false, lastScanScheduledAt: 0, rescanArgs: null, newestKickAt: 0, kickSettled: true, kickCount: 0, pendingConfirm: null, pendingSeed: null, lastWakeArgs: null, inFlightScan: null, idleRescanCancel: null, idleRescanUnmuted: false, idlePassOwed: null, cancelGeneration: 0, readRetryTimer: null, readRetryAttempts: 0 }, t.set(e, n);
  return n;
}
function Iae(e) {
  for (let [t, n] of Z().wakes.wakes) {
    if (e !== void 0 && t !== e) continue;
    if (n.coalesceTimer) clearTimeout(n.coalesceTimer), n.coalesceTimer = null;
    if (n.rescanWanted = false, n.pendingConfirm = null, n.pendingSeed = null, n.newestKickAt = 0, n.kickSettled = true, n.lastScanScheduledAt = 0, n.rescanArgs = null, n.idleRescanCancel?.(), n.idleRescanCancel = null, n.idleRescanUnmuted = false, n.idlePassOwed = null, n.readRetryTimer) clearTimeout(n.readRetryTimer), n.readRetryTimer = null;
    n.readRetryAttempts = 0, n.cancelGeneration++;
  }
}
function GOt() {
  Z().wakes.scanGeneration++;
}
function qJt(e) {
  let { slugEpochs: t } = Z().wakes;
  t.set(e, (t.get(e) ?? 0) + 1);
}
function c(e) {
  return Z().wakes.slugEpochs.get(e) ?? 0;
}
function JW(e) {
  return Z().wakes.scanGeneration + c(e);
}
function p9(e) {
  return Z().wakes.stopGenerations.get(e) ?? 0;
}
function i(e) {
  let { stopGenerations: t } = Z().wakes;
  t.set(e, (t.get(e) ?? 0) + 1);
}
function jLn(e, t) {
  let { latchChangedAt: n } = Z().wakes;
  if (t === void 0) n.set(e, Date.now());
  else if (Number.isFinite(t)) n.set(e, Math.min(t, Date.now()));
  else n.delete(e);
}
var a = jLn;
function Ofo(e) {
  return Z().wakes.latchChangedAt.get(e);
}
function YJt(e) {
  let { wakes: t } = Z();
  a(e), t.stoppedSlugs.add(e), t.sweptSlugs.delete(e), t.orphanedSweptSlugs.delete(e), i(e), t.pendingResumeDisclosure.delete(e);
}
function WLn(e) {
  let { wakes: t } = Z();
  if (t.stoppedSlugs.has(e)) a(e);
  t.stoppedSlugs.delete(e), t.sweptSlugs.delete(e), t.orphanedSweptSlugs.delete(e);
}
function _y(e) {
  return Z().wakes.stoppedSlugs.has(e);
}
function Sy(e) {
  let t = Z();
  return t.wakes.stoppedSlugs.has(e) || t.durable.stopLatches.isStopped(e);
}
function eut(e) {
  let { wakes: t } = Z();
  if (!t.stoppedSlugs.has(e)) a(e), t.stoppedSlugs.add(e), t.sweptSlugs.add(e), i(e);
  else {
    let n = t.yieldedSlugs.get(e);
    if (n !== void 0) n.wasPaused = true, i(e);
  }
  t.humanTurnAtScanGeneration = null, t.liftedAtScanGeneration.delete(e), t.orphanedSweptSlugs.delete(e), t.pendingResumeDisclosure.delete(e);
}
function I_(e) {
  return Z().wakes.sweptSlugs.has(e);
}
function Kvs() {
  return Z().wakes.sweptSlugs;
}
function qvs() {
  let { wakes: e } = Z();
  for (let t of e.sweptSlugs) e.orphanedSweptSlugs.add(t);
}
function Mfo(e, t) {
  let { wakes: n } = Z(), o = n.yieldedSlugs.get(e);
  if (o !== void 0) {
    o.msgIds.add(t);
    return;
  }
  let r = n.sweptSlugs.has(e) && !n.orphanedSweptSlugs.has(e), s = { msgIds: /* @__PURE__ */ new Set([t]), wasPaused: r, stopGeneration: -1, scanGeneration: n.scanGeneration, announced: false, stoppedElsewhere: false, latchClockBefore: n.latchChangedAt.get(e) };
  n.yieldedSlugs.set(e, s);
  let d = n.humanTurnAtScanGeneration;
  eut(e), n.humanTurnAtScanGeneration = d, a(e, s.latchClockBefore ?? Number.NaN), s.stopGeneration = p9(e);
}
function Yvs(e) {
  let t = Z().wakes.yieldedSlugs.get(e);
  if (t !== void 0) t.announced = true;
}
function Xvs(e) {
  return Z().wakes.yieldedSlugs.get(e)?.announced === true;
}
function Jvs(e, t) {
  let { wakes: n } = Z(), o = n.yieldedSlugs.get(e);
  if (o === void 0 || !o.msgIds.delete(t) || o.msgIds.size > 0) return false;
  if (n.yieldedSlugs.delete(e), !o.wasPaused && p9(e) === o.stopGeneration && n.scanGeneration === o.scanGeneration) WLn(e), a(e, o.latchClockBefore ?? Number.NaN);
  else a(e);
  return true;
}
function Qvs(e) {
  Z().wakes.yieldedSlugs.delete(e);
}
function Zvs(e, t) {
  let n = Z().wakes.yieldedSlugs.get(e);
  if (n === void 0 || !n.msgIds.has(t)) return false;
  return n.stoppedElsewhere = true, YJt(e), true;
}
function eks(e) {
  return Z().wakes.yieldedSlugs.get(e)?.stoppedElsewhere === true;
}
function iB(e) {
  return Z().wakes.yieldedSlugs.has(e);
}
function Hfo(e) {
  let { wakes: t } = Z(), n = t.yieldedSlugs.get(e);
  return n !== void 0 && !n.wasPaused && p9(e) === n.stopGeneration && t.scanGeneration === n.scanGeneration;
}
function NIe(e) {
  let { wakes: t } = Z();
  return t.orphanedSweptSlugs.has(e) || t.yieldedSlugs.has(e);
}
function Dfo(e) {
  let { autoReact: t, live: n, builtInArtifactHiddenForMcp: o } = Z(), r = n.supervisors.get(e);
  return t.userDisarmed || Sy(e) || t.wakeEnabledMemo === false || (o ? r !== void 0 && !r.stopped && r.autoReactWiring === void 0 || t.artifacts.get(e)?.ruleWithheldNoted === true : (t.artifacts.get(e)?.lastProbeDeniedBy ?? null) !== null) || r !== void 0 && !r.stopped && r.armedVia === "mcp_write";
}
function u(e, t, n) {
  if (t(n), !e.summonArmOkReported) e.summonArmOkReported = true, g("artifact_summon_arm_emit");
}
function l(e, t, n) {
  let o = e.activitySenders.get(t);
  if (o === void 0) return;
  let r = e.summonDeclared.get(t);
  if (n && r !== true) e.summonDeclared.set(t, true), u(e, o, "arm:0");
  else if (!n && r === true) e.summonDeclared.set(t, false), u(e, o, "arm");
}
function yD(e, t) {
  l(e, t, Dfo(t));
}
function tut(e) {
  for (let t of e.activitySenders.keys()) yD(e, t);
}
function tks(e, t) {
  e.summonDeclared.delete(t), yD(e, t);
}
function nks(e, t) {
  e.summonDeclared.delete(t);
}
export {
  Dfo,
  GOt,
  Hfo,
  I_,
  Iae,
  JW,
  Jvs,
  Kvs,
  Mfo,
  NIe,
  Ofo,
  PEe,
  Qvs,
  Sy,
  WLn,
  Xvs,
  YJt,
  Yvs,
  Zvs,
  _y,
  eks,
  eut,
  iB,
  jLn,
  nks,
  p9,
  qJt,
  qvs,
  tks,
  tut,
  yD
};
