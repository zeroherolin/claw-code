// telemetry/loop-dynamic-wakeup-scheduled.vk6f.js — Claude Code 2.1.310 模块 chunk-vk6f065h.js
import { H1, xW, Om, zxe, jos, XXr, fTn, Jbe, NAt, JXr, mTn, gTn, t4t, ocr, MX, n4t } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { a } from "./chunk-wq923bwc.js";
import { g, p } from "./chunk-wn8xtaqg.js";
import { k } from "../settings/global-config-and-gates.27xj.js";
import { i } from "../shared/environment.9a41.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { akt } from "../shared/async-hooks.t1gs.js";
import { R5n } from "../fs/utf-8.gftm.js";
import { i9 } from "./kairos-cron-config.2p1m.js";
import { eA } from "../context/tool-use-id.erdq.js";
var C = import.meta.require("./get-autonomous-loop-preamble.c3j6.js"), L = 60, b9e = 3600, P = 6e5, O = 1200, x = 1;
function v(e, o) {
  a("tengu_loop_ended", { reason: c(e), ...o }), ocr(true), t4t();
}
function FSs() {
  let e = i.CLAUDE_CODE_LOOP_KEEPALIVE;
  if (e !== void 0) return e;
  return k("tengu_kairos_loop_keepalive", true);
}
function $Ss(e, o, n, l, r) {
  return w(e, o, { viaKeepalive: false, reason: n, toolUseId: l, owner: { caller: r } });
}
function USs(e, o) {
  if (JXr() >= x) return t("[loop] keepalive budget exhausted (model declined to reschedule twice) — ending loop"), v("model_stopped", { via_keepalive: true }), null;
  return w(O, e, { viaKeepalive: true, owner: { rearmedFor: o } });
}
function jdo() {
  ocr(false), t4t();
}
function BSs() {
  let e = gTn(), o = Om().filter((l) => l.kind === "loop"), n = Jbe();
  if (NAt(null), mTn(0), MX(o.map((l) => l.id)), o.length === 0) F();
  for (let l of o) fTn(l.prompt);
  if (n !== null) fTn(n);
  if (e) return t("[loop] ScheduleWakeup({stop:true}) after loop already ended — cleanup only, terminal event suppressed"), o.length;
  return t(`[loop] model called ScheduleWakeup({stop:true}) — ending loop (${o.length} pending wakeup(s) cancelled${n !== null ? ", tick in flight" : ""})`), v("model_stopped", { via_keepalive: false }), g("loop_schedule_wakeup"), o.length;
}
function w(e, o, n) {
  let { viaKeepalive: l, reason: r, toolUseId: u, owner: d } = n;
  if (!l) mTn(0);
  let m = K(), f = Date.now(), s = jos(o), A = s !== void 0 && f > s.lastScheduledFor + b9e * 1e3, _ = s === void 0 || A ? f : s.startedAt, S = i9().recurringMaxAgeMs;
  if (S > 0 && f - _ >= S) {
    if (!s?.agedOut) XXr(o, { startedAt: _, lastScheduledFor: f - (b9e - L) * 1e3, agedOut: true }), a("tengu_loop_dynamic_wakeup_aged_out", { loop_age_ms: f - _, max_age_ms: S }), v("aged_out", { via_keepalive: l }), p("loop_schedule_wakeup", "loop_wakeup_aged_out");
    return null;
  }
  let { clamped: h, wasClamped: b, targetMs: E, createdAt: D } = T(e);
  if (M({ targetMs: E, createdAt: D, prompt: o, reason: r, chainStartedAt: _, viaKeepalive: l, toolUseId: u, owner: d }), l) return mTn(JXr() + 1), t(`[loop] keepalive armed (model did not reschedule): ${h}s fallback`), a("tengu_loop_keepalive_fired", { clamped_delay_seconds: h, prompt_is_sentinel: C.isLoopDefaultSentinel(o) }), p("loop_schedule_wakeup", "model_no_reschedule"), { scheduledFor: E, clampedDelaySeconds: h, wasClamped: b };
  return t(`[loop] dynamic wakeup scheduled: ${h}s${b ? ` (clamped from ${e}s)` : ""}${r !== void 0 ? ` — ${r}` : ""}`), a("tengu_loop_dynamic_wakeup_scheduled", { chosen_delay_seconds: Number.isFinite(e) ? e : 0, clamped_delay_seconds: h, was_clamped: b, reason_length: r?.length ?? 0, superseded_count: m }), g("loop_schedule_wakeup"), { scheduledFor: E, clampedDelaySeconds: h, wasClamped: b };
}
function jSs({ scheduledFor: e, prompt: o, reason: n, chainStartedAt: l, plugin: r }) {
  let u = Date.now();
  if (e <= u || fq()) return;
  M({ targetMs: e, createdAt: Math.max(u, e - 6e4), prompt: o, reason: n, chainStartedAt: Math.min(l, u), viaKeepalive: false, toolUseId: void 0, owner: { rearmedFor: r } }), t(`[loop] re-armed pending wakeup for ${new Date(e).toISOString()} after resume`);
}
function M({ targetMs: e, createdAt: o, prompt: n, reason: l, chainStartedAt: r, viaKeepalive: u, toolUseId: d, owner: m }) {
  let f = "rearmedFor" in m ? m.rearmedFor : akt(m.caller), s = new Date(e);
  if (zxe({ id: I(), cron: `${s.getMinutes()} ${s.getHours()} * * *`, prompt: n, createdAt: o, kind: "loop", scheduledFor: e, reason: l, ...u && { keepalive: true }, ...f !== void 0 && { plugin: f } }), XXr(n, { startedAt: r, lastScheduledFor: e }), xW(true), ocr(false), d !== void 0) n4t({ toolUseId: d, scheduledFor: e, chainStartedAt: r });
}
function T(e) {
  let o;
  if (Number.isNaN(e)) o = L;
  else if (e === 1 / 0) o = b9e;
  else if (e === -1 / 0) o = L;
  else o = Math.round(e);
  let n = Math.max(L, Math.min(b9e, o)), l = !Number.isFinite(e) || o !== n, r = Date.now(), u = r + n * 1e3, d = y(u), m = i9().cacheLeadMs;
  if (m > 0 && n * 1e3 <= R5n) {
    let s = R5n - m;
    while (d - r > s && d - 6e4 >= r + L * 1e3) d -= 6e4;
  }
  if (m > 0) {
    let s = H1() ?? r, _ = (r - s <= P ? Math.min(r, s) : r) + eA - m;
    while (d > _ && d - 6e4 >= r + L * 1e3) d -= 6e4;
  }
  let f = u < d ? u : d - 1;
  return { clamped: n, wasClamped: l, targetMs: d, createdAt: f };
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
  return MX(e);
}
function F() {
  n4t(void 0);
}
function fq() {
  return Om().some((e) => e.kind === "loop");
}
function USr() {
  let e = Om().filter((n) => n.kind === "loop"), o = Jbe();
  if (NAt(null), mTn(0), e.length === 0) F();
  if (e.length === 0 && o === null) return 0;
  MX(e.map((n) => n.id));
  for (let n of e) fTn(n.prompt);
  if (o !== null) fTn(o);
  return t(`[loop/dynamic] cancelled ${e.length} pending loop wakeup(s) on user abort${o !== null ? " (tick in flight)" : ""}`), v("user_abort", { loops_cancelled: e.length }), g("loop_cancel_all"), e.length;
}
export {
  $Ss,
  BSs,
  FSs,
  USr,
  USs,
  b9e,
  fq,
  jSs,
  jdo
};
