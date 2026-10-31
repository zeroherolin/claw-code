// linux/telemetry/loop-dynamic-wakeup-scheduled.js — Claude Code 2.1.310（linux）模块 chunk-0m847w4m.js
import { xB, SW, Om, Fxe, aos, TXr, XTn, GSe, CCt, AXr, JTn, QTn, BYt, jdr, TX, jYt } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { a } from "./chunk-9097a12b.js";
import { g, f } from "./chunk-9d6962d2.js";
import { k } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { ekt } from "../shared/async-hooks.b037.js";
import { l6n } from "../fs/utf-8.0ed0.js";
import { X6 } from "./kairos-cron-config.js";
import { JA } from "../context/tool-use-id.js";
var C = import.meta.require("./get-autonomous-loop-preamble.js"), L = 60, p3e = 3600, P = 6e5, O = 1200, x = 1;
function v(e, o) {
  a("tengu_loop_ended", { reason: c(e), ...o }), jdr(true), BYt();
}
function dbs() {
  let e = i.CLAUDE_CODE_LOOP_KEEPALIVE;
  if (e !== void 0) return e;
  return k("tengu_kairos_loop_keepalive", true);
}
function cbs(e, o, n, l, r) {
  return w(e, o, { viaKeepalive: false, reason: n, toolUseId: l, owner: { caller: r } });
}
function ubs(e, o) {
  if (AXr() >= x) return t("[loop] keepalive budget exhausted (model declined to reschedule twice) — ending loop"), v("model_stopped", { via_keepalive: true }), null;
  return w(O, e, { viaKeepalive: true, owner: { rearmedFor: o } });
}
function Tdo() {
  jdr(false), BYt();
}
function fbs() {
  let e = QTn(), o = Om().filter((l) => l.kind === "loop"), n = GSe();
  if (CCt(null), JTn(0), TX(o.map((l) => l.id)), o.length === 0) F();
  for (let l of o) XTn(l.prompt);
  if (n !== null) XTn(n);
  if (e) return t("[loop] ScheduleWakeup({stop:true}) after loop already ended — cleanup only, terminal event suppressed"), o.length;
  return t(`[loop] model called ScheduleWakeup({stop:true}) — ending loop (${o.length} pending wakeup(s) cancelled${n !== null ? ", tick in flight" : ""})`), v("model_stopped", { via_keepalive: false }), g("loop_schedule_wakeup"), o.length;
}
function w(e, o, n) {
  let { viaKeepalive: l, reason: r, toolUseId: u, owner: d } = n;
  if (!l) JTn(0);
  let p = K(), m = Date.now(), s = aos(o), A = s !== void 0 && m > s.lastScheduledFor + p3e * 1e3, _ = s === void 0 || A ? m : s.startedAt, S = X6().recurringMaxAgeMs;
  if (S > 0 && m - _ >= S) {
    if (!s?.agedOut) TXr(o, { startedAt: _, lastScheduledFor: m - (p3e - L) * 1e3, agedOut: true }), a("tengu_loop_dynamic_wakeup_aged_out", { loop_age_ms: m - _, max_age_ms: S }), v("aged_out", { via_keepalive: l }), f("loop_schedule_wakeup", "loop_wakeup_aged_out");
    return null;
  }
  let { clamped: h, wasClamped: b, targetMs: E, createdAt: D } = T(e);
  if (M({ targetMs: E, createdAt: D, prompt: o, reason: r, chainStartedAt: _, viaKeepalive: l, toolUseId: u, owner: d }), l) return JTn(AXr() + 1), t(`[loop] keepalive armed (model did not reschedule): ${h}s fallback`), a("tengu_loop_keepalive_fired", { clamped_delay_seconds: h, prompt_is_sentinel: C.isLoopDefaultSentinel(o) }), f("loop_schedule_wakeup", "model_no_reschedule"), { scheduledFor: E, clampedDelaySeconds: h, wasClamped: b };
  return t(`[loop] dynamic wakeup scheduled: ${h}s${b ? ` (clamped from ${e}s)` : ""}${r !== void 0 ? ` — ${r}` : ""}`), a("tengu_loop_dynamic_wakeup_scheduled", { chosen_delay_seconds: Number.isFinite(e) ? e : 0, clamped_delay_seconds: h, was_clamped: b, reason_length: r?.length ?? 0, superseded_count: p }), g("loop_schedule_wakeup"), { scheduledFor: E, clampedDelaySeconds: h, wasClamped: b };
}
function pbs({ scheduledFor: e, prompt: o, reason: n, chainStartedAt: l, plugin: r }) {
  let u = Date.now();
  if (e <= u || r4()) return;
  M({ targetMs: e, createdAt: Math.max(u, e - 6e4), prompt: o, reason: n, chainStartedAt: Math.min(l, u), viaKeepalive: false, toolUseId: void 0, owner: { rearmedFor: r } }), t(`[loop] re-armed pending wakeup for ${new Date(e).toISOString()} after resume`);
}
function M({ targetMs: e, createdAt: o, prompt: n, reason: l, chainStartedAt: r, viaKeepalive: u, toolUseId: d, owner: p }) {
  let m = "rearmedFor" in p ? p.rearmedFor : ekt(p.caller), s = new Date(e);
  if (Fxe({ id: I(), cron: `${s.getMinutes()} ${s.getHours()} * * *`, prompt: n, createdAt: o, kind: "loop", scheduledFor: e, reason: l, ...u && { keepalive: true }, ...m !== void 0 && { plugin: m } }), TXr(n, { startedAt: r, lastScheduledFor: e }), SW(true), jdr(false), d !== void 0) jYt({ toolUseId: d, scheduledFor: e, chainStartedAt: r });
}
function T(e) {
  let o;
  if (Number.isNaN(e)) o = L;
  else if (e === 1 / 0) o = p3e;
  else if (e === -1 / 0) o = L;
  else o = Math.round(e);
  let n = Math.max(L, Math.min(p3e, o)), l = !Number.isFinite(e) || o !== n, r = Date.now(), u = r + n * 1e3, d = y(u), p = X6().cacheLeadMs;
  if (p > 0 && n * 1e3 <= l6n) {
    let s = l6n - p;
    while (d - r > s && d - 6e4 >= r + L * 1e3) d -= 6e4;
  }
  if (p > 0) {
    let s = xB() ?? r, _ = (r - s <= P ? Math.min(r, s) : r) + JA - p;
    while (d > _ && d - 6e4 >= r + L * 1e3) d -= 6e4;
  }
  let m = u < d ? u : d - 1;
  return { clamped: n, wasClamped: l, targetMs: d, createdAt: m };
}
function y(e) {
  return Math.ceil(e / 6e4) * 6e4;
}
function I() {
  return Math.floor(Math.random() * 4294967295).toString(16).padStart(8, "0");
}
function K() {
  let e = Om().filter((o) => o.kind === "loop").map((o) => o.id);
  if (e.length === 0) return 0;
  return TX(e);
}
function F() {
  jYt(void 0);
}
function r4() {
  return Om().some((e) => e.kind === "loop");
}
function Tbr() {
  let e = Om().filter((n) => n.kind === "loop"), o = GSe();
  if (CCt(null), JTn(0), e.length === 0) F();
  if (e.length === 0 && o === null) return 0;
  TX(e.map((n) => n.id));
  for (let n of e) XTn(n.prompt);
  if (o !== null) XTn(o);
  return t(`[loop/dynamic] cancelled ${e.length} pending loop wakeup(s) on user abort${o !== null ? " (tick in flight)" : ""}`), v("user_abort", { loops_cancelled: e.length }), g("loop_cancel_all"), e.length;
}
export {
  Tbr,
  Tdo,
  cbs,
  dbs,
  fbs,
  p3e,
  pbs,
  r4,
  ubs
};
