// telemetry/lowpri-offer-withheld.15ds.js — Claude Code 2.1.310 模块 chunk-15dszc3z.js
import { U, Cu } from "../context/not-admin-owned.ersa.js";
import { c, ce } from "../agents/third-party.ydpb.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { a } from "./chunk-wq923bwc.js";
import { xTe, bSt, lfn, sQ, VO, vBr, hze, wSt, N4s, F4s, $4s, vU } from "../api/anthropic-client.7pf8.js";
import { li } from "../core/system-prompt-blocks.dpjp.js";
import { VEe, cB, uB, ZIe } from "./quota-auto-resume-cancelled.v6a4.js";
import { Cae, O9e, hEe, xct } from "../agents/five-hour.d25r.js";
import { Nv } from "../shared/chunk-xv1h3z6v.js";
var l = new W(() => ({ notedWallResetsAt: null, shownWallResetsAt: null, withheldWallResetsAt: null, sessionSwitchSubscribed: false }));
function i() {
  return l.of(U().host);
}
function I9e(t, e = Date.now()) {
  return O9e(t) && t.lowPriorityOffer === "treatment" && t.resetsAt !== void 0 && t.resetsAt * 1e3 > e && !vBr(e) && hze(e) === void 0 && !VO() && bSt();
}
function s(t, e = Date.now()) {
  let o = F4s(e);
  return Cae() && t.status !== "rejected" && o !== void 0 && !u(o) && !vBr(e) && hze(e) === void 0 && bSt();
}
function u(t) {
  let e = VEe();
  switch (e.phase) {
    case "idle":
      return false;
    case "armed":
      return e.resetsAtSeconds !== t;
    case "stale":
      return true;
  }
}
function iws(t) {
  if (t.lowPriorityOffer === void 0 || !O9e(t)) return;
  let e = t.resetsAt ?? null;
  if (e === null) return;
  let o = i();
  if (o.notedWallResetsAt !== e) o.notedWallResetsAt = e, a("tengu_lowpri_offer_capable", { arm: c(t.lowPriorityOffer), tier: c(hEe()), limit_type: ce(t.rateLimitType) ?? void 0, auto_armed: cB(), client_enabled: bSt(), config_version: lfn() });
  if (t.lowPriorityOffer === "treatment" && hze() !== void 0 && o.withheldWallResetsAt !== e) o.withheldWallResetsAt = e, a("tengu_lowpri_offer_withheld", { arm: c(t.lowPriorityOffer), reason: c("cooloff"), client_enabled: bSt(), config_version: lfn() });
}
function eJt(t, e) {
  let o = t.resetsAt ?? null, r = i();
  if (o === null || r.shownWallResetsAt === o) return;
  r.shownWallResetsAt = o, a("tengu_lowpri_offer_shown", { arm: ce(t.lowPriorityOffer) ?? void 0, surface: c(e), config_version: lfn() });
}
function tJt(t) {
  let e = li();
  if (I9e(e) && e.resetsAt !== void 0) {
    if (uB("low_priority"), n(), !N4s({ resetsAtSeconds: e.resetsAt, arm: e.lowPriorityOffer, entry: t, retryAfterSeconds: e.lowPriorityRetryAfterSeconds, maxWaitSeconds: e.lowPriorityMaxWaitSeconds })) return "unavailable";
    return xct(), "accepted";
  }
  if (s(e)) {
    let o = cB();
    if (o) uB("low_priority");
    if (n(), !$4s(t)) return "unavailable";
    if (o) xct();
    return "resumed";
  }
  return "unavailable";
}
function nJt(t) {
  let e = wSt(), o = e.phase === "active" ? Nv(e.resetsAtSeconds) : void 0, r = o ? `until your limit resets at ${o}` : "until your limit resets";
  return `${t === "resumed" ? `Lower-priority mode is back on ${r}` : `Continuing now at lower priority ${r}`}. Your weekly limit still applies, and responses may pause while waiting for spare capacity. Run /${xTe} to stop.`;
}
function rJt(t = Date.now()) {
  if (vBr(t)) return `${sQ().budgetExhaustedCopy}. Lower-priority mode is offered again after your weekly limit resets.`;
  let e = hze(t);
  if (e !== void 0) return `Lower-priority mode is taking a break until ${Nv(Math.ceil(e / 1e3)) ?? "later"}, after waiting too long for spare capacity. Try /${xTe} again then.`;
  return "Lower-priority mode isn't available right now.";
}
function aws() {
  let t = li();
  return `Lower-priority mode is off. New messages wait for your usage limit as usual${I9e(t) || s(t) ? `; run /${xTe} again to turn it back on` : ""}.`;
}
function n() {
  let t = i();
  if (t.sessionSwitchSubscribed) return;
  t.sessionSwitchSubscribed = true, Cu((e, o) => {
    if (ZIe(o)) vU("conversation_reset");
  });
}
export {
  I9e,
  aws,
  eJt,
  iws,
  nJt,
  rJt,
  tJt
};
