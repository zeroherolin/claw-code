// linux/settings/harbor-kite-mode-emit.js — Claude Code 2.1.310（linux）模块 chunk-9rqkgbsc.js
import { tt } from "../context/not-admin-owned.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { W_e, N0e, ul, k } from "./global-config-and-gates.js";
import { bt, t } from "../fs/gitlab-runner-authentication-token.js";
import { g, f } from "../telemetry/chunk-9d6962d2.js";
import { CH, C6r } from "../shell/invalid-type.js";
import { Qt } from "./workflow-launch-exec.js";
import { oT } from "../permissions/classifier-transcript-too-long.js";
import { pe, Xm } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { ha } from "../telemetry/harbor-kite-win.js";
import { WPo } from "../core/conversation-engine.js";
import { Ma } from "../shell/chunk-e0b62862.js";
import { ey } from "../telemetry/harbor-kite-pacing-off.js";
function xIt() {
  return k("tengu_harbor_kite_mode_emit", true);
}
function O() {
  switch (I().decidedBy) {
    case "policySettings":
      return "managed-setting";
    case "repoSettings":
      return "repo-setting";
    case "invalidSetting":
      return "invalid-setting";
    case "flagSettings":
    case "userSettings":
    case void 0:
      return "explicit-setting";
  }
}
var p = { accept: 0, hold: 1, refuse: 2 }, Q = 100, P = new Set(oT);
function PXt(e) {
  if (e !== null) Ma().inbound.shuttingDown = false, x(), Ma().inbound.modeAtUnwire = void 0;
  else {
    let n = Ma().inbound.getCurrentMode;
    if (n !== null) try {
      Ma().inbound.modeAtUnwire = n();
    } catch {
      Ma().inbound.modeAtUnwire = void 0;
    }
  }
  if (Ma().inbound.getCurrentMode = e, e !== null) dIe("mode-changed");
}
function IXt(e) {
  Ma().inbound.onPeerHeld = e;
}
function Mlo(e) {
  Ma().inbound.sendPeerReceipt = e;
}
function c_s(e, n) {
  Ma().inbound.sendPeerReceipt?.({ mode: "prompt", agentId: tt(), value: "", origin: e }, n);
}
function Vdt(e) {
  let n = Ma().inbound;
  if (n.publishAvailability = e, n.unsubscribeAvailabilityRefresh?.(), n.unsubscribeAvailabilityRefresh = null, e) PIt(), n.unsubscribeAvailabilityRefresh = ul(PIt);
}
function PIt() {
  Ma().inbound.publishAvailability?.(MIt() === void 0);
}
function Dlo(e) {
  Ma().inbound.recordCorrespondent = e;
}
var F = 750;
function x() {
  if (Ma().inbound.shutdownSettleHandle === null) Ma().inbound.shutdownSettleHandle = bt(OXt);
}
async function OXt() {
  let e = Ma().inbound;
  if (e.shutdownSettleHandle?.(), e.shutdownSettleHandle = null, e.shuttingDown = true, e.held.length === 0) return;
  let n = e.held.splice(0, e.held.length);
  t(`[cross-session-inbound] shutdown: settling ${n.length} still-held peer message(s) as expired`);
  let o = [];
  for (let s of n) o.push(e.sendPeerReceipt?.(s, "expired")), e.onPeerHoldDropped?.(s, "expired");
  await Promise.race([Promise.allSettled(o), X(F, void 0, { unref: true })]);
}
function Hlo(e) {
  let { inbound: n } = Ma();
  return n.held.includes(e) ? n.announced.get(e) : void 0;
}
function MXt(e) {
  Ma().inbound.onPeerHoldDropped = e;
}
function DXt(e) {
  Ma().inbound.onPeerHoldReleased = e;
}
function qdt() {
  return I().value;
}
function I() {
  let e, n;
  for (let o of ["policySettings", "flagSettings", "userSettings"]) {
    if (!Qt(o)) continue;
    let s = pe(o)?.crossSessionInbound;
    if (s !== void 0) {
      e = s, n = o;
      break;
    }
  }
  for (let o of ["localSettings", "projectSettings"]) {
    if (!Qt(o)) continue;
    let s = pe(o)?.crossSessionInbound;
    if (s === void 0) continue;
    if (p[s] > p[e ?? "accept"]) e = s, n = "repoSettings";
    else if (s !== "accept" && e !== void 0 && p[s] === p[e] && n !== "policySettings") n = "repoSettings";
  }
  if (p[e ?? "accept"] < p.hold && N()) e = "hold", n = "invalidSetting";
  return { value: e, decidedBy: n };
}
function N() {
  return Xm().errors.some((e) => e.path === C6r && e.severity === "warning" && !e.statusOnly);
}
function h(e) {
  switch (e) {
    case "accept":
      return { policy: "accept" };
    case "hold":
      return { policy: "hold", holdCause: O() };
    case "refuse":
      return { policy: "refuse", refuseCause: "opt-out" };
  }
}
function w() {
  return ha("receive") ? void 0 : { policy: "refuse", refuseCause: "kill-switch" };
}
function H() {
  let e = w();
  if (e) return e;
  let n = qdt();
  if (n !== void 0) return h(n);
  let o = v();
  if (o === null) return { policy: "hold", holdCause: "mode-unknown" };
  if (!P.has(o.mode)) return t(`[cross-session-inbound] unrecognized permission mode '${o.mode}' (fail-closed → hold)`), { policy: "hold", holdCause: "mode-unknown" };
  return C(o) ? { policy: "hold", holdCause: "bypass-default" } : { policy: "accept" };
}
function S(e) {
  let n = w();
  if (n) return n;
  return E(e, false);
}
function _(e) {
  return E(e, true);
}
function E(e, n) {
  let o = qdt();
  if (o !== void 0) return h(o);
  if (e?.selfSent) return { policy: "accept" };
  let s = v();
  if (s === null || !P.has(s.mode)) {
    if (s !== null) t(`[cross-session-inbound] unrecognized permission mode '${s.mode}' (fail-closed → hold)`);
    return { policy: "hold", holdCause: "mode-unknown" };
  }
  let i = IIt(s), a = n || xIt() ? e?.fromMode : void 0;
  if (a !== void 0) return a === i ? { policy: "accept" } : { policy: "hold", holdCause: "mode-mismatch" };
  return i === "bypass" ? { policy: "hold", holdCause: "no-mode-asserted" } : { policy: "accept" };
}
function C(e) {
  return e.mode === "bypassPermissions" || CH(e.mode, e.isBypassPermissionsModeAvailable);
}
function IIt(e) {
  return C(e) ? "bypass" : "prompting";
}
function NUe() {
  return H().policy;
}
function Llo(e) {
  return S(e).policy;
}
function v() {
  let e = Ma().inbound.getCurrentMode;
  if (e === null) return t("[cross-session-inbound] permission-mode getter not wired (fail-closed → hold)"), null;
  try {
    return e();
  } catch (n) {
    return t(`[cross-session-inbound] mode getter threw (${d(n)}; fail-closed → hold)`), null;
  }
}
function Nlo() {
  if (qdt() !== void 0) return false;
  let e = v();
  if (e === null || !P.has(e.mode)) return false;
  return C(e);
}
function HXt(e) {
  return R(e, S(b(e)));
}
function b(e) {
  let n = e.origin;
  if (!n || n.kind !== "peer") return;
  return { fromMode: n.fromMode, selfSent: n.selfSent };
}
function D(e) {
  let n;
  if (e.priority === "later") {
    let { priority: o, ...s } = e;
    n = WPo(s, { receipt: "caller" });
  } else n = WPo(e, { receipt: "caller" });
  if (!n.admitted) return Ma().inbound.sendPeerReceipt?.(e, "dropped", { dropReason: n.reason, droppedMsgIds: [] }), false;
  return Ma().inbound.recordCorrespondent?.(e), true;
}
function R(e, n) {
  let o = Ma().inbound;
  switch (PIt(), n.policy) {
    case "accept":
      return A("policy-accepts"), g("peer_inbound_gate"), "accept";
    case "refuse":
      return lIe(n.refuseCause === "kill-switch" ? m(e) : `crossSessionInbound=refuse: ${m(e)}`, n.refuseCause), o.sendPeerReceipt?.(e, "refused"), "refused";
    case "hold": {
      let { holdCause: s } = n;
      if (o.shuttingDown) return t(`[cross-session-inbound] shutdown: not parking a late peer message — settled as expired: ${m(e)}`), o.sendPeerReceipt?.(e, "expired"), f("peer_inbound_gate", "shutdown_expired"), "refused";
      if (o.held.length >= Q) {
        let i = o.held.shift();
        if (i) t(`[cross-session-inbound] hold buffer full — evicted oldest as expired: ${m(i)}`), o.sendPeerReceipt?.(i, "expired"), o.onPeerHoldDropped?.(i, "expired");
      }
      if (o.held.push(e), x(), t(`[cross-session-inbound] held inbound peer message (${o.held.length} held, cause=${s}): ${m(e)}`), f("peer_inbound_gate", "held"), o.onPeerHeld) o.onPeerHeld(e, o.held.length, s), o.announced.set(e, s);
      return o.sendPeerReceipt?.(e, "held"), "held";
    }
  }
}
function LXt(e) {
  if (!e) return "ungated";
  if (e.kind === "peer") return "hostInjected" in e && e.hostInjected === true ? "host-injected" : "peer";
  if (e.kind === "task-notification" && "subkind" in e && e.subkind === "peer-send-message") return "coordinator";
  return "ungated";
}
function Ydt({ ingressOrigin: e, inboundOrigin: n, envelopePeer: o = false }) {
  return o || LXt(e) !== "ungated" && !B(e) || n === W_e;
}
function B(e) {
  return !!e && e.kind === "peer" && !("hostInjected" in e && e.hostInjected === true) && "inbound_origin" in e && e.inbound_origin === N0e;
}
function OIt(e, n) {
  switch (LXt(e)) {
    case "peer":
      return HXt(n);
    case "host-injected":
      return $lo(n);
    case "coordinator":
      return G(n);
    case "ungated":
      return "accept";
  }
}
function Xdt(e) {
  switch (LXt(e)) {
    case "peer":
      return MIt();
    case "coordinator":
    case "host-injected":
      return qdt() === "refuse" ? "opt-out" : void 0;
    case "ungated":
      return;
  }
}
function MIt() {
  let e = H();
  if (e.policy !== "refuse") return;
  return e.refuseCause;
}
function j() {
  let e = qdt();
  return e !== void 0 ? h(e) : { policy: "accept" };
}
function G(e) {
  let n = qdt();
  if (n === void 0) return "accept";
  return R(e, h(n));
}
function $lo(e) {
  return R(e, _(b(e)));
}
function lIe(e, n) {
  if (PIt(), n === "kill-switch") {
    t(`[cross-session-inbound] refused inbound peer message — cross-session messaging disabled (kill switch) (${e})`), f("peer_inbound_gate", "kill_switch");
    return;
  }
  t(`[cross-session-inbound] refused inbound peer message (${e})`), f("peer_inbound_gate", "refused");
}
function dIe(e) {
  return PIt(), A(e);
}
function M(e) {
  switch (LXt(e.origin)) {
    case "coordinator":
      return j();
    case "host-injected":
      return _(b(e));
    case "peer":
    case "ungated":
      return S(b(e));
  }
}
function A(e) {
  let n = Ma().inbound, o = n.held;
  if (o.length === 0) return 0;
  let s = [], i = [], a = [], u = 0, y = 0;
  for (let r of o) {
    let l = M(r);
    if (l.policy === "accept") i.push(r);
    else if (l.policy === "refuse") {
      if (u += 1, l.refuseCause === "kill-switch") y += 1;
      n.sendPeerReceipt?.(r, "refused"), n.onPeerHoldDropped?.(r, "refused");
    } else if (s.push(r), n.announced.get(r) !== l.holdCause) a.push([r, l.holdCause]);
  }
  o.length = 0, o.push(...s);
  for (let [r, l] of a) n.announced.set(r, l), n.onPeerHeld?.(r, o.length, l);
  if (u > 0) t(y === u ? `[cross-session-inbound] gate off — dropped ${u} parked peer message(s) (cross-session messaging disabled)` : `[cross-session-inbound] dropped ${u} held peer message(s) — policy is now refuse`);
  if (i.length === 0) return 0;
  let c = [];
  for (let r of i) if (D(r)) c.push(r), g("peer_inbound_gate");
  else n.onPeerHoldDropped?.(r, "dropped");
  if (t(`[cross-session-inbound] released ${i.length} held peer message(s) (${e}) — ${c.length} admitted by the ingress guard; ${o.length} still held`), c.length > 0) n.onPeerHoldReleased?.(c, e);
  for (let r of c) n.sendPeerReceipt?.(r, "delivered");
  return i.length;
}
function DIt(e, n) {
  let o = Ma().inbound, s = o.held.indexOf(e);
  if (s === -1) return "gone";
  let [i] = o.held.splice(s, 1);
  if (!i) return "gone";
  if (n === "approve") {
    let u = M(i);
    if (u.policy === "refuse") {
      let c = u.refuseCause === "kill-switch";
      return t(`[cross-session-inbound] held peer message approved but policy is now refuse (${c ? "kill switch" : "opt-out"}) — dropped`), o.sendPeerReceipt?.(i, "refused"), o.onPeerHoldDropped?.(i, "refused"), "dropped";
    }
    if (!D(i)) return t("[cross-session-inbound] held peer message approved but DROPPED by the ingress guard on release"), o.onPeerHoldDropped?.(i, "dropped"), "dropped-by-guard";
    return t("[cross-session-inbound] held peer message APPROVED — released to queue"), g("peer_inbound_gate"), o.onPeerHoldReleased?.([i], "approved"), o.sendPeerReceipt?.(i, "delivered"), "delivered";
  }
  t(`[cross-session-inbound] held peer message ${n === "deny" ? "DENIED" : "EXPIRED/CANCELLED"} — dropped with denial receipt`);
  let a = n === "deny" ? "denied" : "expired";
  return o.sendPeerReceipt?.(i, a), "dropped";
}
function u_s() {
  return Ma().inbound.held;
}
function HIt() {
  return Ma().inbound.held.length;
}
function Flo() {
  return Ma().inbound.shuttingDown;
}
function m(e) {
  let n = e.origin?.kind === "peer" && typeof e.origin.from === "string" ? e.origin.from : "unknown", o = typeof e.value === "string" ? e.value : "[blocks]";
  return `from=${ey(n)} "${ey(o, 60)}"`;
}
export {
  $lo,
  DIt,
  DXt,
  Dlo,
  Flo,
  HIt,
  HXt,
  Hlo,
  IIt,
  IXt,
  LXt,
  Llo,
  MIt,
  MXt,
  Mlo,
  NUe,
  Nlo,
  OIt,
  OXt,
  PIt,
  PXt,
  Vdt,
  Xdt,
  Ydt,
  c_s,
  dIe,
  lIe,
  qdt,
  u_s,
  xIt
};
