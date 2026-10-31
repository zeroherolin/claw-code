// linux/telemetry/quota-auto-resume-cancelled.js — Claude Code 2.1.310（linux）模块 chunk-dx5awfq0.js
import { De } from "../fs/async-hooks.93b1.js";
import { U, tt, Eu } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { a } from "./chunk-9097a12b.js";
import { g, m, f } from "./chunk-9d6962d2.js";
import { $9, Uqe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { gue, e4o, i_, st, Roe, Xe, Vk, $t, Et, gn, Hc } from "../settings/global-config-and-gates.js";
import { Bue } from "../shared/async-hooks.b037.js";
import { eTe, li, WVn, JFs, ean } from "../core/system-prompt-blocks.js";
import { Gi } from "../context/org-memory-writes-setting-changed.js";
import { c0t, LC, TGn, Qke, Pne, LP, Ok, D_, EHr } from "../core/conversation-engine.js";
import { Ogo } from "../agents/lantern-wick-release-by-model.js";
import { J7t, u$n, zEr, NBe, Q7t, ITs, f$n } from "./chunk-2515359b.js";
import { randomUUID as L } from "crypto";
var H = "later", G = "Your claude.ai usage limit has reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.", z = "tengu_lantern_wick_resume_by_model", V = "Your claude.ai usage is available again before the usage-limit reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.", Y = 2, O = [6e4, 3e5], X = 3e4, J = 9e4, Z = 18e5, ee = 216e5;
function te() {
  return { state: { phase: "idle" }, consecutiveRearms: 0, armedAtMs: 0, lastArmedResetsAtSeconds: 0, lastObservedMs: null, takeoverUuids: /* @__PURE__ */ new Set(), queuedBeforeArmUuids: /* @__PURE__ */ new Set(), handoffInProgress: false, dispatchingTakeoverUuids: /* @__PURE__ */ new Set(), pendingContinuationUuid: null, activeTurnClaim: null, episodeArmOrigin: "dialog", sleptThroughReset: false, confirmingMainModel: false, recheckRequestedWhileConfirming: false, armedResetKeys: /* @__PURE__ */ new Set(), autoArmDedupeResetKeys: /* @__PURE__ */ new Set(), changed: De(), events: De(), autoContinueKeyPresence: "unscanned", storageV5: void 0, unsubscribeSettingsChanges: null, unknowableRescanDelayMs: 2e3, unknowableRescanTimer: void 0, revocationRescan: "idle", revocationRescanGeneration: 0, limitsSubscriptionStarted: false, unsubscribeQuotaRejected: null, unsubscribeSessionSwitch: null };
}
var oe = new W(te);
function i() {
  let e = U().host, t = oe.of(e), o = TGn.of(e);
  if (!o.provided) o.provide(() => r(t));
  return t;
}
function M(e, t, o = 0) {
  if (typeof e !== "number" && typeof e !== "string") return t;
  let n = Number(e);
  if (!Number.isFinite(n) || n < 0) return t;
  return Math.min(Math.max(Math.round(n), o), ee);
}
var ne = 6e4;
function s$n() {
  return T(i());
}
function T(e) {
  return u$n(e.autoContinueKeyPresence);
}
function kTs(e) {
  let t = i();
  if (e === "auto_restore_cancel") return;
  if (!r(t)) return;
  Q(t, "conversation_reset");
}
var ae = 2;
async function A(e, t = ae) {
  try {
    e.autoContinueKeyPresence = await Uqe("autoContinueAtUsageLimit", e.storageV5);
  } catch (o) {
    e.autoContinueKeyPresence = "unknowable", l(o);
  }
  if (e.autoContinueKeyPresence !== "unknowable") e.revocationRescan = "idle", e.revocationRescanGeneration++;
  if (clearTimeout(e.unknowableRescanTimer), e.autoContinueKeyPresence === "unknowable" && t > 0) e.unknowableRescanTimer = setTimeout((o, n) => {
    A(o, n);
  }, e.unknowableRescanDelayMs, e, t - 1), e.unknowableRescanTimer.unref?.();
}
function i$n() {
  let e = $9("autoContinueAtUsageLimit")[0]?.source;
  return e === void 0 || e === "userSettings";
}
function wut(e) {
  return Et() && gn()?.billingType !== "usage_based" && LC(e) && ITs();
}
function Bve() {
  return i().state;
}
function TTs() {
  let e = i();
  return e.state.phase === "armed" && e.episodeArmOrigin === "auto";
}
function E(e) {
  let t = li();
  if (t.status === "rejected" && t.resetsAt !== void 0) e.armedResetKeys.add(t.resetsAt);
}
function g8e(e) {
  return i().armedResetKeys.has(e);
}
function o1() {
  return i().state.phase === "armed";
}
function r(e) {
  return e.state.phase === "armed" || e.state.phase === "stale" || e.activeTurnClaim !== null || e.dispatchingTakeoverUuids.size > 0 || LP().some((t) => b(e, t)) || EHr((t) => b(e, t));
}
function se(e) {
  return Qke(e) && Pne(e);
}
function b(e, t) {
  return t.uuid !== void 0 && (t.uuid === e.pendingContinuationUuid || e.takeoverUuids.has(t.uuid));
}
function kgo() {
  return r(i());
}
function h8e(e) {
  return k(i(), e);
}
function k(e, t) {
  return t === "armed" || t === "stale" || x(e);
}
function DMt() {
  return x(i());
}
function x(e) {
  let t = e.pendingContinuationUuid;
  return t !== null && LP().some((o) => o.uuid === t);
}
function GEr(e) {
  return e !== void 0 && e === i().pendingContinuationUuid;
}
function HMt(e) {
  return i().events.subscribe(e);
}
function Tgo(e) {
  return i().changed.subscribe(e);
}
function h(e, t) {
  e.state = t, e.changed.emit();
}
function ue() {
  let e = zEr(), t = M(e.jitterMinMs, X), o = Math.max(t, M(e.jitterMaxMs, J));
  return Math.round(t + Math.random() * (o - t));
}
function ie(e, t, o) {
  let n = e * 1e3 + ue();
  if (t === null) return n;
  let s = O[t] ?? O.at(-1) ?? 0;
  return Math.max(n, o + s);
}
function Ago(e, t = Date.now(), o = "dialog", n) {
  return P(i(), e, t, o, n);
}
function P(e, t, o, n, s) {
  if (!wut(t)) return false;
  j(e, s), e.consecutiveRearms = 0, e.takeoverUuids.clear(), e.dispatchingTakeoverUuids.clear(), e.queuedBeforeArmUuids.clear();
  for (let u of LP()) if (se(u) || u.mode === "bash" && Pne(u)) u.uuid ??= L(), e.queuedBeforeArmUuids.add(u.uuid);
  return e.armedAtMs = o, g("quota_auto_resume"), a("tengu_quota_auto_resume_offer_armed", { origin: c(n) }), q(e, t.resetsAt ?? 0, null, o, n), e.events.emit("armed"), true;
}
function Cgo(e, t = Date.now(), o) {
  let n = i();
  if (!wut(e)) return false;
  if (n.handoffInProgress) return false;
  if (!T(n) || !f$n()) return false;
  if (Hc()) return false;
  let s = e.resetsAt ?? 0;
  if (s * 1e3 - t > c0t) return false;
  if (he(e.rateLimitType, st())) return false;
  if (r(n) || n.autoArmDedupeResetKeys.has(s)) return false;
  if (!P(n, e, t, "auto", o)) return false;
  return n.events.emit("auto-armed"), true;
}
function ATs(e, t, o = Date.now(), n) {
  try {
    let s = e && t === "completed" ? ean(o) : null;
    if (s === null) return false;
    let u = i();
    if (r(u)) return F(u, s, "main_thread"), u.state.phase === "armed" && u.state.resetsAtSeconds === s.resetsAt;
    return Cgo(s, o, n);
  } catch (s) {
    return l(s), false;
  }
}
function q(e, t, o, n, s = "dialog") {
  w(e), e.episodeArmOrigin = s, e.lastArmedResetsAtSeconds = t, e.autoArmDedupeResetKeys.add(t), e.armedResetKeys.add(t), E(e), e.activeTurnClaim = null, e.sleptThroughReset = false, e.lastObservedMs = n;
  let u = ie(t, o, n);
  a("tengu_quota_auto_resume_armed", { resets_in_sec: Math.max(0, Math.round(t - n / 1e3)), rearm: o === null ? 0 : o + 1 }), h(e, { phase: "armed", resetsAtSeconds: t, fireAtMs: u, consecutiveRearms: e.consecutiveRearms });
}
function y8e() {
  re(i());
}
function xae(e) {
  return (...t) => {
    let o = e(...t);
    if (o !== false) y8e();
    return o;
  };
}
async function re(e) {
  if (e.state.phase !== "armed") return;
  if (e.confirmingMainModel) {
    e.recheckRequestedWhileConfirming = true;
    return;
  }
  e.confirmingMainModel = true;
  try {
    for (; ; ) {
      if (e.recheckRequestedWhileConfirming = false, Roe(i_()) !== null) return;
      let t = st(), o = e.state, n = await JFs(t, void 0, e.storageV5);
      if (e.state.phase !== "armed" || _(e)) return;
      if (e.recheckRequestedWhileConfirming || st() !== t || e.state !== o) continue;
      if (n === null || !Re(n)) return;
      de(e);
      return;
    }
  } catch (t) {
    l(t);
  } finally {
    e.confirmingMainModel = false;
  }
}
function de(e) {
  B(e, V), a("tengu_quota_auto_resume_fired", { rearm: e.consecutiveRearms, waited_ms: Math.max(0, Math.round(Date.now() - e.armedAtMs)), early: 1 }), e.lastObservedMs = null, h(e, { phase: "idle" }), e.events.emit("fired-now");
}
function ce(e) {
  switch (e) {
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
      return true;
    case "dialog":
    case "low_priority":
    case "juniper_tide":
    case "cedar_ember":
    case "account_switch":
    case "conversation_reset":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return false;
  }
}
function le(e) {
  switch (e) {
    case "low_priority":
    case "juniper_tide":
    case "cedar_ember":
    case "account_switch":
    case "conversation_reset":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return true;
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
    case "dialog":
      return false;
  }
}
function s1(e) {
  Q(i(), e);
}
function Q(e, t) {
  if (r(e)) E(e);
  if (le(t)) e.autoArmDedupeResetKeys.clear();
  let o = k(e, e.state.phase);
  if (y(e) && e.state.phase === "idle") a("tengu_quota_auto_resume_cancelled", { reason: c(t) });
  if (v(e, t), o && ce(t)) e.events.emit("cancelled");
}
var a$n = { background_handoff: "Automatic continue cancelled · this session moved to the background, so the task will not resume on its own when the usage limit resets", relaunch: "Automatic continue cancelled · Claude Code relaunched during the wait, so the task will not resume on its own when the usage limit resets (send a prompt then to continue)", desktop_handoff: "Automatic continue cancelled · this session moved to Claude Desktop, so the task will not resume on its own when the usage limit resets (continue it there)", cloud_handoff: "Automatic continue cancelled · sending this session to the cloud, so the task will not resume here on its own when the usage limit resets (continue it in the cloud session)", process_exit: "Automatic continue cancelled · Claude Code exited during the wait, so the task will not resume on its own when the usage limit resets (send a prompt after the reset to continue)" };
function l$n(e) {
  let t = i();
  if (t.handoffInProgress = true, !r(t)) return false;
  let o = k(t, t.state.phase);
  return Q(t, e), o;
}
function LBe() {
  i().handoffInProgress = false;
}
function d$n(e, { dispatching: t = false } = {}) {
  let o = i();
  if (!r(o)) return;
  if (K(o), o.takeoverUuids.add(e), t) o.dispatchingTakeoverUuids.add(e);
  o.changed.emit();
}
function w(e, { keepIfDrained: t = false } = {}) {
  if (e.pendingContinuationUuid === null) return false;
  let o = e.pendingContinuationUuid, n = D_((s) => s.uuid === o).length > 0;
  if (n || !t) e.pendingContinuationUuid = null, e.changed.emit();
  return n;
}
function me(e) {
  switch (e) {
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
    case "dialog":
    case "low_priority":
    case "juniper_tide":
    case "cedar_ember":
    case "account_switch":
    case "setting_off":
    case "manual_submit":
    case "conversation_reset":
    case "killswitch":
    case "rearm_cap":
    case "horizon_exceeded":
    case "continuation_dropped":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return true;
    case "fired":
    case "stale":
      return false;
  }
}
function v(e, t) {
  if (e.state.phase === "idle") return;
  if (me(t)) a("tengu_quota_auto_resume_cancelled", { reason: c(t) });
  h(e, { phase: "idle" });
}
function Rgo(e, t) {
  let o = i();
  if (o.state.phase !== "armed" || _(o)) return "idle";
  let n = o.lastObservedMs ?? o.state.fireAtMs;
  o.lastObservedMs = e;
  let s = e - n, u = M(zEr().graceMs, Z, ne);
  if (s > u && e >= o.state.fireAtMs) o.sleptThroughReset = true;
  if (t || e < o.state.fireAtMs) return "pending";
  if (o.sleptThroughReset) return o.sleptThroughReset = false, f("quota_auto_resume", "stale"), a("tengu_quota_auto_resume_stale", { late_by_ms: Math.round(e - o.state.fireAtMs) }), h(o, { phase: "stale" }), o.events.emit("stale"), "stale";
  return B(o), a("tengu_quota_auto_resume_fired", { rearm: o.state.consecutiveRearms, waited_ms: Math.max(0, Math.round(e - o.armedAtMs)) }), v(o, "fired"), "fired";
}
function N() {
  let e = Ogo(z, st());
  return e !== void 0 && e.trim() !== "" ? e : G;
}
function B(e, t = N()) {
  w(e);
  let o = L();
  e.pendingContinuationUuid = o, e.activeTurnClaim = null, e.changed.emit(), Ok({ agentId: tt(), mode: "prompt", priority: H, value: t, uuid: o, origin: { kind: "auto-continuation" }, isMeta: true, skipSlashCommands: true, workload: Bue });
}
function xgo() {
  return Pgo() ? N() : null;
}
function Pgo() {
  let e = i();
  return e.state.phase === "stale" && !_(e);
}
function CTs(e) {
  let t = i(), o = t.pendingContinuationUuid;
  if (o === null || !e.some((n) => n.uuid === o)) return e;
  if (!_(t)) return e;
  return e.filter((n) => n.uuid !== o);
}
function fe(e) {
  if (e.episodeArmOrigin !== "auto" || T(e)) return e.revocationRescan = "idle", false;
  if (J7t() === void 0 && e.autoContinueKeyPresence === "unknowable") {
    if (e.revocationRescan === "idle") {
      e.revocationRescan = "pending";
      let t = ++e.revocationRescanGeneration;
      return A(e).finally(() => {
        if (e.revocationRescan === "pending" && t === e.revocationRescanGeneration) e.revocationRescan = "done";
      }), false;
    }
    if (e.revocationRescan === "pending") return false;
  }
  return e.revocationRescan = "idle", true;
}
function _(e) {
  if (!NBe()) return C(e, "killswitch"), true;
  if (fe(e)) return C(e, "setting_off"), true;
  return false;
}
function K(e) {
  if (w(e, { keepIfDrained: true }), e.state.phase === "stale") a("tengu_quota_auto_resume_stale_resumed", {}), e.lastObservedMs = null, v(e, "stale");
  else if (e.state.phase === "armed") e.lastObservedMs = null, v(e, "manual_submit");
}
function C(e, t) {
  a("tengu_quota_auto_resume_cancelled", { reason: c(t) }), y(e), h(e, { phase: "idle" }), e.events.emit(t === "horizon_exceeded" ? "horizon-exceeded" : t === "rearm_cap" ? "cap-exhausted" : "disabled");
}
function pe(e, t) {
  return e.episodeArmOrigin === "auto" && t * 1e3 - Date.now() > c0t;
}
function RTs(e) {
  let t = i();
  for (let p of e.turnUuids) t.dispatchingTakeoverUuids.delete(p);
  let o = t.pendingContinuationUuid !== null && e.turnUuids.includes(t.pendingContinuationUuid), n = e.turnUuids.some((p) => t.takeoverUuids.has(p)), s = k(t, t.state.phase) || o, u = e.isHumanTakeover && !n && e.humanCommandUuids.length > 0 && e.humanCommandUuids.every((p) => p !== void 0 && t.queuedBeforeArmUuids.has(p)), d = null;
  if (u && !o) return null;
  if (u) d = "continuation";
  else if (e.isHumanTakeover && (n || s)) d = "takeover", K(t);
  else if (o) d = "continuation";
  if (d === null) return null;
  if (t.activeTurnClaim !== null) l(Error("quota auto-resume: a turn claimed the episode while another claim was outstanding"));
  let I = { kind: d, queried: e.willQuery };
  return t.activeTurnClaim = I, t.changed.emit(), I;
}
function xTs(e, t) {
  let o = i();
  for (let u of t) o.dispatchingTakeoverUuids.delete(u);
  if (e !== null) {
    if (e !== o.activeTurnClaim) return;
    if (o.activeTurnClaim = null, o.changed.emit(), o.state.phase !== "idle") return;
    if (LP().some((u) => b(o, u))) return;
    if (y(o), e.kind === "continuation" && !e.queried) D(o);
    return;
  }
  let n = o.pendingContinuationUuid !== null && t.includes(o.pendingContinuationUuid);
  if ((n || t.some((u) => o.takeoverUuids.has(u))) && o.state.phase === "idle" && o.activeTurnClaim === null && !LP().some((u) => b(o, u))) {
    if (y(o), n) D(o);
  }
}
function D(e) {
  m("quota_auto_resume", "continuation_dropped"), a("tengu_quota_auto_resume_cancelled", { reason: c("continuation_dropped") }), e.events.emit("continuation-dropped");
}
function y(e) {
  e.consecutiveRearms = 0, e.lastArmedResetsAtSeconds = 0, e.episodeArmOrigin = "dialog", e.revocationRescan = "idle", e.revocationRescanGeneration++, e.takeoverUuids.clear(), e.dispatchingTakeoverUuids.clear(), e.queuedBeforeArmUuids.clear(), e.lastObservedMs = null, e.activeTurnClaim = null;
  let t = w(e);
  return e.changed.emit(), t;
}
function Re(e) {
  return e.status !== "rejected" || e.isUsingOverage === true || e.overageInUse === true;
}
function F(e, t, o) {
  if (!LC(t) || !Q7t()) return;
  let n = t.resetsAt ?? 0;
  if (r(e) && R(t.rateLimitType, st())) e.autoArmDedupeResetKeys.add(n);
  if (e.state.phase === "armed") {
    if (n * 1e3 > e.state.fireAtMs && R(t.rateLimitType, st())) S(e, n, null);
    return;
  }
  if (x(e)) return;
  if (e.state.phase === "stale") return;
  let s = e.activeTurnClaim;
  if (s === null) return;
  if (o !== "main_thread") return;
  if (s.kind === "takeover") {
    if (e.consecutiveRearms = 0, S(e, R(t.rateLimitType, st()) ? n : e.lastArmedResetsAtSeconds, null) && e.episodeArmOrigin === "auto") e.events.emit("taken-over");
    return;
  }
  if (e.consecutiveRearms >= Y) {
    m("quota_auto_resume", "rearm_cap"), e.autoArmDedupeResetKeys.add(n), C(e, "rearm_cap");
    return;
  }
  let u = e.consecutiveRearms;
  e.consecutiveRearms++, S(e, n, u);
}
function S(e, t, o) {
  if (_(e)) return false;
  if (pe(e, t)) return C(e, "horizon_exceeded"), false;
  return q(e, t, o, Date.now(), e.episodeArmOrigin), e.events.emit("rearmed"), true;
}
function he(e, t) {
  if (e !== "seven_day_opus" && e !== "seven_day_sonnet") return false;
  if (R(e, t)) return false;
  let o = Roe(i_());
  if (e === "seven_day_opus" && o === "opus") return false;
  if (e === "seven_day_sonnet" && o === "sonnet") return false;
  return true;
}
function R(e, t) {
  switch (e) {
    case "five_hour":
    case "seven_day":
    case "overage":
      return true;
    case "seven_day_opus":
      return gue(Xe(t));
    case "seven_day_sonnet":
      return e4o(Xe(t));
    case "seven_day_overage_included": {
      let o = Vk($t(t));
      if (o === null) return false;
      let n = o.toLowerCase();
      return eTe().some((s) => s.toLowerCase() === n);
    }
    case void 0:
      return false;
  }
  return false;
}
function c$n(e, t) {
  return R(e.rateLimitType, t) || Xe(e.model, { identity: true }) === Xe(t, { identity: true });
}
function Igo(e) {
  j(i(), e);
}
function j(e, t) {
  if (e.limitsSubscriptionStarted) return;
  e.limitsSubscriptionStarted = true, e.storageV5 = t, e.unsubscribeQuotaRejected = WVn((o, n) => F(e, o, n)), A(e), e.unsubscribeSettingsChanges = Gi.subscribe(() => {
    A(e);
  }), e.unsubscribeSessionSwitch = Eu((o, n) => {
    if (VIe(n)) Q(e, "conversation_reset"), e.handoffInProgress = false;
  });
}
function VIe(e) {
  switch (e) {
    case "clear":
    case "resume":
    case "remote_attach":
      return true;
    case "fork":
    case "cd":
    case "spare_claim":
    case "hydrate":
    case "startup_custom_id":
      return false;
  }
}
export {
  ATs,
  Ago,
  Bve,
  CTs,
  Cgo,
  DMt,
  GEr,
  HMt,
  Igo,
  LBe,
  Pgo,
  RTs,
  Rgo,
  TTs,
  Tgo,
  VIe,
  a$n,
  c$n,
  d$n,
  g8e,
  h8e,
  i$n,
  kTs,
  kgo,
  l$n,
  o1,
  s$n,
  s1,
  wut,
  xTs,
  xae,
  xgo,
  y8e
};
