// telemetry/rc-permission-nudge.ycah.js — Claude Code 2.1.310 模块 chunk-ycahj6a4.js
import { Ut, k, Re, ue } from "../settings/global-config-and-gates.27xj.js";
import { Zn } from "../shared/environment.9a41.js";
import { ee } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { g } from "./chunk-wn8xtaqg.js";
import { _I } from "../agents/in-process-teammate.5te1.js";
import { KP, oce } from "./bridge-resume-respects-local-owner.8dk3.js";
import { js } from "../settings/chunk-rq620hy6.js";
import { rye } from "./kairos-push-notifications.z1hk.js";
var c = 3, f = 3, qSs = 20, YSs = "Your Claude Code session is ready — continue from your phone anytime.";
function XSs() {
  if (Zn.CLAUDE_CODE_FORCE_RC_LONG_TURN_NUDGE) return { thresholdSec: 5, probability: 1, maxImpressions: -1, impressionKey: "force", dayStartHour: 0, dayEndHour: 24 };
  let e = k("tengu_rc_long_turn_nudge", null);
  if (e === null || typeof e !== "object") return null;
  let o = typeof e.thresholdSec === "number" && Number.isFinite(e.thresholdSec) ? Math.min(3600, Math.max(5, e.thresholdSec)) : 90, n = typeof e.probability === "number" && Number.isFinite(e.probability) ? Math.min(1, Math.max(0, e.probability)) : 1, r = typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions) ? Math.trunc(e.maxImpressions) : 3, t = typeof e.impressionKey === "string" ? e.impressionKey : "", a = (i, d) => typeof i === "number" && Number.isFinite(i) ? Math.min(24, Math.max(0, Math.trunc(i))) : d, l = a(e.dayStartHour, 7), p = a(e.dayEndHour, 21);
  return { thresholdSec: o, probability: n, maxImpressions: r, impressionKey: t, dayStartHour: l, dayEndHour: p };
}
function JSs(e, o = /* @__PURE__ */ new Date()) {
  if (e.dayStartHour >= e.dayEndHour) return true;
  let n = o.getHours();
  return n >= e.dayStartHour && n < e.dayEndHour;
}
function m(e, o) {
  let n = (ue()[e] ?? 0) + 1;
  Re((r) => (r[e] ?? 0) >= n ? r : { ...r, [e]: n }, o);
}
var s = { afterPromptCount: 5, probability: 0, maxImpressions: 3 };
function QSs() {
  let e, o = Zn.CLAUDE_CODE_RC_PERMISSION_NUDGE;
  if (o) try {
    e = ee(o);
  } catch {
    e = void 0;
  }
  e ??= k("tengu_rc_permission_nudge", s);
  let n = (r, t) => typeof r === "number" && Number.isFinite(r) ? r : t;
  return { afterPromptCount: Math.max(1, n(e?.afterPromptCount, s.afterPromptCount)), probability: n(e?.probability, s.probability), maxImpressions: n(e?.maxImpressions, s.maxImpressions) };
}
function zdo() {
  if (!KP()) return false;
  let e = ue();
  return !e.hasUsedRemoteControl && !oce() && (e.remoteControlUpsellSeenCount ?? 0) < c;
}
function ZSs(e) {
  m("remoteControlUpsellSeenCount", e), g("tips_rc_upsell_show");
}
function b() {
  return ue().hasUsedRemoteControl === true || oce();
}
function Vdo() {
  return Kdo() && (ue().pushNotifUpsellSeenCount ?? 0) < f;
}
function Kdo() {
  return KP() && rye() && b() && js("agentPushNotifEnabled", false).value !== true;
}
function ebs(e) {
  m("pushNotifUpsellSeenCount", e), g("tips_push_upsell_show");
}
function tbs(e) {
  if (!KP()) return false;
  if (e.maxImpressions === 0) return false;
  if (e.maxImpressions < 0) return true;
  let o = ue();
  return ((o.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey ? o.rcLongTurnNudgeSeenCount ?? 0 : 0) < e.maxImpressions;
}
function nbs(e, o) {
  if (e.maxImpressions >= 0) Re((n) => {
    let r = (n.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey;
    return { ...n, rcLongTurnNudgeSeenCount: r ? (n.rcLongTurnNudgeSeenCount ?? 0) + 1 : 1, rcLongTurnNudgeSeenKey: e.impressionKey };
  }, o);
  g("tips_rc_long_turn_show");
}
function rbs(e) {
  if (!KP()) return false;
  return (ue().rcPermissionNudgeSeenCount ?? 0) < e;
}
function obs(e) {
  Re((o) => ({ ...o, rcPermissionNudgeSeenCount: (o.rcPermissionNudgeSeenCount ?? 0) + 1 }), e), g("tips_rc_permission_nudge_show");
}
function sbs() {
  if (!rye()) return null;
  let e = k("tengu_kairos_ready_nudge", null);
  if (e === null || typeof e !== "object") return null;
  let o = typeof e.probability === "number" && Number.isFinite(e.probability) ? Math.min(1, Math.max(0, e.probability)) : 1, n = typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions) ? Math.trunc(e.maxImpressions) : 5, r = typeof e.impressionKey === "string" ? e.impressionKey : "";
  return { probability: o, maxImpressions: n, impressionKey: r };
}
function ibs(e, o, n) {
  if (!o || n) return false;
  if (Ut() || _I() != null) return false;
  if (e.maxImpressions === 0) return false;
  if (e.maxImpressions < 0) return true;
  let r = ue();
  return ((r.remoteControlReadyPushKey ?? "") === e.impressionKey ? r.remoteControlReadyPushCount ?? 0 : 0) < e.maxImpressions;
}
function abs(e, o) {
  if (e.maxImpressions >= 0) Re((n) => {
    let r = (n.remoteControlReadyPushKey ?? "") === e.impressionKey;
    return { ...n, remoteControlReadyPushCount: r ? (n.remoteControlReadyPushCount ?? 0) + 1 : 1, remoteControlReadyPushKey: e.impressionKey };
  }, o);
  g("tips_rc_ready_push_send");
}
function C7t(e) {
  if (ue().hasUsedRemoteControl) return;
  Re((o) => o.hasUsedRemoteControl ? o : { ...o, hasUsedRemoteControl: true }, e);
}
var C = ["mobile", "web", "desktop"];
function y(e) {
  switch (e) {
    case "ios":
    case "android":
      return "mobile";
    case "web_claude_ai":
      return "web";
    case "desktop_app":
      return "desktop";
    default:
      return;
  }
}
function RHn(e, o) {
  let n = y(e);
  if (!n) return;
  if (u(ue()).includes(n)) return;
  Re((r) => {
    let t = u(r);
    if (t.includes(n)) return r;
    return { ...r, remoteControlSurfacesSeen: [...t, n] };
  }, o);
}
function qdo() {
  let e = u(ue()), o = e.includes("mobile"), n = e.includes("web");
  if (o === n) return;
  return o ? "web" : "mobile";
}
function u(e) {
  let o = e.remoteControlSurfacesSeen;
  return Array.isArray(o) ? o.filter((n) => C.some((r) => r === n)) : [];
}
export {
  C7t,
  JSs,
  Kdo,
  QSs,
  RHn,
  Vdo,
  XSs,
  YSs,
  ZSs,
  abs,
  ebs,
  ibs,
  nbs,
  obs,
  qSs,
  qdo,
  rbs,
  sbs,
  tbs,
  zdo
};
