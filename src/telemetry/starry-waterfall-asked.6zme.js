// telemetry/starry-waterfall-asked.6zme.js — Claude Code 2.1.310 模块 chunk-6zmeqc4n.js
import { He } from "../fs/async-hooks.9s1z.js";
import { U } from "../context/not-admin-owned.ersa.js";
import { c, ce } from "../agents/third-party.ydpb.js";
import { N, Pf } from "./anthropic-workspace-id.36ys.js";
import { Pe } from "../shared/chunk-3kevgx4j.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { a } from "./chunk-wq923bwc.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { Qs } from "../models/total-tokens-reminder.psq3.js";
import { Uu, Qm } from "../remote/local-agent.we9a.js";
import { Yd } from "../fs/content-encoding.v6wj.js";
import { ua, vt, vp, gn, wE, Wt, Re, ue } from "../settings/global-config-and-gates.27xj.js";
import { n$t, Qgt, eDr, r$t, o$t, n2e, vO, Lm } from "../core/system-prompt-blocks.dpjp.js";
import { $A } from "../core/conversation-engine.31gx.js";
import { Cae, hEe } from "../agents/five-hour.d25r.js";
import { Tae } from "../shared/allow-promo-offers.rze5.js";
import { o, E, M, oe, C, u, me, B } from "../vendor/zod/string-format.k395.js";
import { _e } from "../shared/chunk-19a02m7w.js";
var G = "starry_waterfall", L = ["org_not_eligible", "no_program_running", "holdout", "mobile", "surface", "cli_version", "app_version", "auto_reload", "auto_reload_unknown", "segment_unknown", "not_assigned", "arm_unknown", "unavailable", "unknown"], q = ["cli_menu", "cli_credits_required", "ide_banner", "alert_band", "overage_band", "code_usage_band", "credits_required", "code_credits_required", "unknown"], R = f(() => o().regex(/^[A-Za-z0-9_-]{1,64}$/).nullable().optional().catch(null)), V = f(() => u({ offer_eligible: M().nullable().optional().catch(null), offer_reason: B(L).catch("unknown").nullable().optional(), offer_arm: R(), offer_kind: B(["none", "pct_off", "extra_credit", "unknown"]).catch("unknown").nullable().optional(), offer_menu: B(["base", "plus40", "unknown"]).catch("unknown").nullable().optional(), offer_segment: B(["never", "lapsed", "recent", "unknown"]).catch("unknown").nullable().optional(), offer_days_left: E().int().nullable().optional().catch(null), offer_surface: B(q).catch("unknown").nullable().optional() })), Q = f(() => u({ eligible: M(), ineligible_reason: B(L).catch("unknown").nullable().optional(), active: M().optional().catch(false), arm_id: R(), kind: B(["none", "pct_off", "extra_credit"]).nullable().optional().catch(null), headline_pct: E().int().min(0).max(300).optional().catch(0), menu: B(["base", "plus40", "unknown"]).catch("unknown").nullable().optional(), default_bundle_id: R(), segment: B(["never", "lapsed", "recent", "unknown"]).catch("unknown").nullable().optional(), first_offered_at: o().nullable().optional().catch(null), expires_at: o().nullable().optional().catch(null), days_left: E().int().min(0).nullable().optional().catch(null), redeemed: M().optional().catch(false), event_props: V().nullable().optional().catch(null) }));
function Y(e) {
  if (e === void 0 || e === null) return null;
  let n = Q().safeParse(e);
  if (!n.success) return t(`[usage-credit-offer] ignoring a malformed status block: ${n.error.message}`), null;
  let r = n.data, i = r.kind ?? null, s = r.event_props;
  return { eligible: r.eligible, ineligibleReason: r.ineligible_reason ?? null, active: (r.active ?? false) && i !== null, armId: r.arm_id ?? null, kind: i, headlinePct: r.headline_pct ?? 0, menu: r.menu ?? null, defaultBundleId: r.default_bundle_id ?? null, segment: r.segment ?? null, firstOfferedAt: r.first_offered_at ?? null, expiresAt: r.expires_at ?? null, daysLeft: r.days_left ?? null, redeemed: r.redeemed ?? false, eventProps: s ? { offerEligible: s.offer_eligible ?? null, offerReason: s.offer_reason ?? null, offerArm: s.offer_arm ?? null, offerKind: s.offer_kind ?? null, offerMenu: s.offer_menu ?? null, offerSegment: s.offer_segment ?? null, offerDaysLeft: s.offer_days_left ?? null, offerSurface: s.offer_surface ?? null } : null };
}
function P(e) {
  return e !== void 0 && e !== null && e.active && !e.redeemed && (e.kind === "pct_off" || e.kind === "extra_credit") && e.headlinePct > 0 && e.daysLeft !== null && e.daysLeft > 0;
}
async function I(e, n) {
  try {
    if (!vp()) return { kind: "no_profile_scope" };
    let r = await vO(e, { read: "starry_waterfall", surface: n });
    if (!n2e(r)) return t("[usage-credit-offer] status fetch returned a fieldless or non-object body (in-band error)", { level: "warn" }), { kind: "failed" };
    return { kind: "answered", status: Y(r?.[G]) };
  } catch (r) {
    if (t(`[usage-credit-offer] status fetch failed: ${N(r).message}`, { level: "warn" }), n$t(r)) return { kind: "answered", status: null, notAuthorized: true };
    return { kind: "failed" };
  }
}
function Z() {
  return { state: { phase: "idle" }, shown: /* @__PURE__ */ new Set(), pendingAsk: null, changed: He() };
}
var X = new W(Z);
function h() {
  return X.of(U().host);
}
function iUe() {
  return h().state;
}
function g(e) {
  let n = h();
  n.state = e, n.changed.emit();
}
function Kee(e) {
  return h().changed.subscribe(e);
}
var D = 3, J = 12e3, ee = 6e5, ne = "credits_required";
function O(e) {
  return $A(e) && e.rateLimitType !== void 0 ? `${e.rateLimitType}:${e.resetsAt}` : null;
}
function j(e) {
  return { key: e, accountEpoch: Lm() };
}
function v(e, n) {
  return e.key === n.key && e.accountEpoch === n.accountEpoch;
}
function te() {
  return vt() && gn()?.billingType !== "usage_based" && Qs();
}
function x() {
  let e = iUe();
  if (e.phase === "idle" || e.wall.accountEpoch !== Lm()) return;
  switch (e.phase) {
    case "answered":
      return e.status;
    case "asking":
      return e.standing;
    case "failed":
      return;
  }
}
function k() {
  let e = x();
  return P(e) && Qgt() ? e : void 0;
}
function Z4e() {
  let e = k();
  if (e === void 0) return;
  let n = r$t();
  return o$t(e.kind === "pct_off" ? n.menuSuffixPctOff : n.menuSuffixExtraCredit, { pct: e.headlinePct, daysLeft: e.daysLeft });
}
function Wto() {
  let e = k();
  if (e === void 0) return;
  let n = r$t();
  return o$t(e.kind === "pct_off" ? n.hintPctOff : n.hintExtraCredit, { pct: e.headlinePct, daysLeft: e.daysLeft });
}
function re() {
  let e = k();
  if (e === void 0) return;
  let n = r$t();
  return o$t(e.kind === "pct_off" ? n.bannerPillPctOff : n.bannerPillExtraCredit, { pct: e.headlinePct, daysLeft: e.daysLeft });
}
function Gto() {
  let e = k(), n = re();
  if (e === void 0 || n === void 0) return;
  return { kind: e.kind, headlinePct: e.headlinePct, daysLeft: e.daysLeft, label: n };
}
function e5e() {
  let e = x();
  if (e === void 0 || e === null) return {};
  let n = e.eventProps;
  return { offer_eligible: n?.offerEligible ?? e.eligible, offer_reason: ce(n?.offerReason ?? e.ineligibleReason) ?? void 0, offer_arm: _e(n?.offerArm ?? e.armId), offer_kind: ce(n?.offerKind ?? e.kind) ?? void 0, offer_menu: ce(n?.offerMenu ?? e.menu) ?? void 0, offer_segment: ce(n?.offerSegment ?? e.segment) ?? void 0, offer_days_left: n?.offerDaysLeft ?? e.daysLeft ?? void 0, offer_active: e.active, offer_redeemed: e.redeemed, offer_surface: ce(n?.offerSurface) ?? void 0 };
}
function Ous(e, n) {
  let r = O(e);
  if (!Qgt() || !Cae() || r === null) return;
  S(r, "cli_menu", n);
}
function Mus(e) {
  if (!Qgt() || !Cae()) return;
  S(ne, "cli_credits_required", e);
}
function Hus(e) {
  let n = O(e);
  if (!Qgt() || !Qm() || !te() || n === null) return;
  S(n, "ide_banner", void 0);
}
function zto(e, n) {
  let r = O(e);
  if (!Qgt() || !Cae() || r === null) return false;
  let i = iUe();
  if (i.phase === "failed" && v(i.wall, j(r)) && i.failures < D) return S(r, "cli_menu", n), true;
  return false;
}
function S(e, n, r, i = Date.now()) {
  let s = j(e), d = h(), m = d.state, p = 0;
  if (m.phase !== "idle" && v(m.wall, s)) switch (m.phase) {
    case "answered":
      if (i - m.answeredAt < ee) return Promise.resolve();
      break;
    case "asking":
      return d.pendingAsk ?? Promise.resolve();
    case "failed":
      if (m.failures >= D) return Promise.resolve();
      p = m.failures;
  }
  else if (m.phase === "asking") {
    if (m.wall.accountEpoch === s.accountEpoch) return d.pendingAsk ?? Promise.resolve();
  }
  g({ phase: "asking", wall: s, standing: x() });
  let b = Pe(I(r, n), J).then((y) => {
    T({ wall: s, surface: n, failures: p, result: y ?? { kind: "failed" } });
  }).catch((y) => {
    l(N(y));
    try {
      T({ wall: s, surface: n, failures: p, result: { kind: "failed" } });
    } catch (F) {
      l(N(F));
    }
  }).finally(() => {
    if (d.pendingAsk === b) d.pendingAsk = null;
  });
  return d.pendingAsk = b, b;
}
function T({ wall: e, surface: n, failures: r, result: i }) {
  let s = iUe();
  if (s.phase !== "asking" || !v(s.wall, e)) return;
  let d = i.kind === "answered" ? i.status : null;
  if (i.kind === "failed") {
    let m = s.standing;
    if (m !== void 0) g({ phase: "answered", wall: e, status: m, answeredAt: Date.now() });
    else g({ phase: "failed", wall: e, failures: r + 1 });
  } else g({ phase: "answered", wall: e, status: d, answeredAt: Date.now() });
  if (a("tengu_starry_waterfall_asked", { outcome: c(i.kind === "answered" ? d === null ? i.notAuthorized ? "not_authorized" : "absent" : "block" : i.kind), attempt: r + 1, surface: c(n), eligible: d?.eligible ?? false, ineligible_reason: ce(d?.ineligibleReason) ?? void 0, config_version: eDr() }), d === null || !d.eligible) return;
  a("tengu_starry_waterfall_wall", { ...e5e(), surface: c(n), tier: c(hEe()), config_version: eDr() });
}
function Kie(e, n = {}) {
  let r = h(), i = r.state, d = `${i.phase === "idle" ? "none" : i.wall.key}:${e}`;
  if (r.shown.has(d)) return;
  r.shown.add(d), a("tengu_starry_waterfall_shown", { ...e5e(), ...n, surface: c(e), config_version: eDr() });
}
function Vto({ usedOffer: e }) {
  let n = iUe(), r = (i) => e && i.active ? { ...i, active: false, redeemed: true } : i;
  if (n.phase === "answered" && n.status !== null) g({ ...n, answeredAt: 0, status: r(n.status) });
  else if (n.phase === "asking" && n.standing) g({ ...n, standing: r(n.standing) });
}
var ae = "cedar_ember", ie = 25e3, A = /^[a-z0-9_-]{1,40}$/, le = /^[A-Za-z0-9_-]{1,64}$/, umr = ["five_hour", "seven_day", "seven_day_overage_included", "seven_day_opus", "seven_day_sonnet", "seven_day_cowork", "seven_day_omelette", "seven_day_oauth_apps"], K = ["config_off", "tier", "seat", "mobile", "surface", "cli_version", "no_grant", "tenure", "other_experiment", "unavailable", "unknown"], se = ["cooldown", "blocked_five_hour", "blocked_seven_day", "blocked_opus", "blocked_sonnet", "blocked_other", "cannot_clear", "needs_limit", "unavailable"], de = [...K, "paused", "expired", "unknown_grant", "not_next_grant", "grant_id_required", "not_limited", "already_used", "cooldown", "stamp_indeterminate", "reset_unconfirmed"], fe = f(() => u({ surface: B(["claude_ai", "claude_code_cli", "unknown"]).catch("unknown"), tier: B(["claude_pro", "claude_max_5x", "claude_max_20x", "claude_team", "unknown"]).catch("unknown"), tenure_bucket: B(["under_14", "14-29", "30-89", "90-364", "365+", "unknown"]).catch("unknown"), billing_path: B(["stripe", "apple", "google_play", "other", "unknown"]).catch("unknown"), billing_period: B(["monthly", "annual", "unknown"]).catch("unknown"), extra_usage_state: B(["not_configured", "disabled", "enabled", "unknown"]).catch("unknown") })), w = f(() => C(oe()).catch([]).transform((e) => e.filter((n) => umr.some((r) => r === n)))), pe = f(() => u({ id: o().regex(A), label: o().catch(""), resets_total: E().int().min(0).catch(0), resets_left: E().int().min(0), starts_at: o().nullable().optional().catch(null), ends_at: o().nullable().optional().catch(null), clears: w(), paused: M().catch(false), usable_now: M().catch(false), use_requires_limit: M().catch(true), percent_used: me(o(), oe()).catch({}), blocking: w(), type: B(["session", "weekly", "full"]).optional().catch(void 0), gives_back_weekly: M().catch(false), unavailable_reason: B(se).nullable().optional().catch(null) }));
function ge(e) {
  let n = {};
  for (let r of umr) {
    let i = e[r];
    if (typeof i === "number" && Number.isInteger(i) && i >= 0 && i <= 100) n[r] = i;
  }
  return n;
}
var be = f(() => u({ eligible: M(), ineligible_reason: B(K).catch("unknown").nullable().optional(), at_limit: M().optional().catch(void 0), exhausted: w().optional(), grants: C(oe()).optional().catch(void 0), next_grant_id: o().regex(A).nullable().optional().catch(null), weekly_resets_at: o().nullable().optional().catch(null), cooldown_until: o().nullable().optional().catch(null), event_props: fe().nullable().optional().catch(null) })), he = f(() => u({ result: B(["reset", "already_used", "not_limited", "cooldown", "ineligible", "unavailable"]).catch("unavailable"), reason: B(de).catch("unknown").nullable().optional(), resets_left: E().int().min(0).nullable().optional().catch(null), cleared: w().optional(), weekly_resets_at: o().nullable().optional().catch(null), cooldown_until: o().nullable().optional().catch(null) }));
function Ce(e) {
  let n = pe().safeParse(e);
  if (!n.success) return t(`[cedar-ember] ignoring a malformed grant: ${n.error.message}`), null;
  let r = n.data;
  return { id: r.id, label: r.label, resetsTotal: r.resets_total, resetsLeft: r.resets_left, startsAt: r.starts_at ?? null, endsAt: r.ends_at ?? null, clears: r.clears, paused: r.paused, usableNow: r.usable_now, useRequiresLimit: r.use_requires_limit, percentUsed: ge(r.percent_used), blocking: r.blocking, type: r.type ?? null, givesBackWeekly: r.gives_back_weekly, unavailableReason: r.unavailable_reason ?? null };
}
function ye(e) {
  if (e === void 0 || e === null) return null;
  let n = be().safeParse(e);
  if (!n.success) return t(`[cedar-ember] ignoring a malformed status block: ${n.error.message}`), null;
  let r = n.data, i = (r.grants ?? []).map(Ce).filter((m) => m !== null), s = r.next_grant_id !== void 0 && r.next_grant_id !== null && i.some((m) => m.id === r.next_grant_id) ? r.next_grant_id : null, d = r.event_props;
  return { eligible: r.eligible, ineligibleReason: r.ineligible_reason ?? null, atLimit: r.at_limit ?? false, exhausted: r.exhausted ?? [], grants: i, nextGrantId: s, weeklyResetsAt: r.weekly_resets_at ?? null, cooldownUntil: r.cooldown_until ?? null, eventProps: d ? { surface: d.surface, tier: d.tier, tenureBucket: d.tenure_bucket, billingPath: d.billing_path, billingPeriod: d.billing_period, extraUsageState: d.extra_usage_state } : null };
}
function pmr(e, n) {
  if (e === void 0 || e === null || !e.eligible) return;
  let r = e.grants.filter((i) => i.resetsLeft > 0 && !i.paused).map((i) => Axt(i.endsAt) ?? 1 / 0).filter((i) => i > n);
  return r.length === 0 ? void 0 : Math.max(...r);
}
async function APn(e, { read: n = "at_wall", surface: r } = {}) {
  try {
    if (!vp()) return { kind: "no_profile_scope" };
    let i = await vO(e, n === "at_wall" ? { read: n, surface: r } : { read: n });
    if (!n2e(i)) return t("[cedar-ember] status fetch returned a fieldless or non-object body (in-band error)", { level: "warn" }), { kind: "failed" };
    return { kind: "answered", status: ye(i?.cedar_ember) };
  } catch (i) {
    if (t(`[cedar-ember] status fetch failed: ${N(i).message}`, { level: "warn" }), n$t(i)) return { kind: "not_authorized" };
    return { kind: "failed" };
  }
}
var _ = { reason: null, resetsLeft: null, cleared: [], weeklyResetsAt: null };
async function Uto(e, n, r) {
  let i = gn()?.organizationUuid;
  if (!i) return t("[cedar-ember] no OAuth organization; cannot claim"), { result: "auth_error", ..._ };
  if (!A.test(n) || !le.test(r)) return l(Error("[cedar-ember] refusing to claim with a malformed grant or request id")), { result: "error", ..._ };
  try {
    let s = await wE(() => Wt.post(`/api/organizations/${i}/reset_rate_limits`, { program: ae, grant_id: n, request_id: r }, { auth: "async", headers: { "Content-Type": "application/json" }, timeout: ie, refreshOAuth: true, credentials: e }), { credentials: e });
    if (!s.ok) return t(`[cedar-ember] claim not sent: ${s.reason === "no-auth" ? s.detail : s.reason}`, { level: "warn" }), { result: s.reason === "no-auth" ? "auth_error" : "error", ..._ };
    let d = he().safeParse(s.data);
    if (!d.success) return t(`[cedar-ember] unreadable claim response: ${d.error.message}`, { level: "error" }), l(Error("[cedar-ember] unreadable claim response")), { result: "error", ..._ };
    return { result: d.data.result, reason: d.data.reason ?? null, resetsLeft: d.data.resets_left ?? null, cleared: d.data.cleared ?? [], weeklyResetsAt: d.data.weekly_resets_at ?? null };
  } catch (s) {
    if (Pf(s)) t(`[cedar-ember] claim failed: ${N(s).message}`, { level: "warn" });
    else l(N(s));
    if (Yd(s)) switch (s.response?.status) {
      case 429:
        return { result: "rate_limited", ..._ };
      case 401:
      case 403:
        return { result: "auth_error", ..._ };
      default:
        break;
    }
    return { result: "error", ..._ };
  }
}
function Axt(e) {
  if (e === null) return;
  let n = Date.parse(e);
  return Number.isFinite(n) ? n : void 0;
}
function ke() {
  return { state: { phase: "idle" }, shownOfferKey: null, wallRecordKey: null, pendingAsk: null, pendingUnusedResetRead: null, unusedResetAnsweredFor: null, unusedResetDrops: 0, claiming: false, continuableWallResetsAt: null, unsettledClaimGrantId: null, unsettledClaimEpoch: null, unsettledClaimRequestId: null, unsettledClaimAtMs: null, wallSurface: null, sessionSwitchSubscribed: false, changed: He(), events: He() };
}
var Se = new W(ke);
function DW() {
  return Se.of(U().host);
}
function B5() {
  return DW().state;
}
function Rxt(e) {
  let n = DW();
  n.state = e, n.changed.emit();
}
function j5(e) {
  return DW().changed.subscribe(e);
}
function Bto(e) {
  return DW().events.subscribe(e);
}
var H = 2592e5, we = 12e3, Ee = f(() => u({ accountUuid: o().min(1), holdsUnusedReset: M(), checkedAt: E(), validUntil: E() }));
function Pus(e = Date.now()) {
  try {
    let n = gn()?.accountUuid, r = Ee().safeParse(ue().unusedLimitResetStatusCache).data;
    return Uu() === "cli" && !!n && r?.accountUuid === n && r.holdsUnusedReset && r.checkedAt <= e && e - r.checkedAt < H && e < r.validUntil && ua().source === "claude.ai" && Tae();
  } catch (n) {
    return l(N(n)), false;
  }
}
function Ius(e, n) {
  let r = DW();
  return r.pendingUnusedResetRead ??= Oe(e, n).catch((i) => l(N(i))).finally(() => {
    r.pendingUnusedResetRead = null;
  }), r.pendingUnusedResetRead;
}
function jto() {
  let e = DW();
  e.unusedResetAnsweredFor = null, e.unusedResetDrops++, Re((n) => n.unusedLimitResetStatusCache === void 0 ? n : { ...n, unusedLimitResetStatusCache: void 0 });
}
async function Oe(e, n) {
  let r = DW(), i = gn()?.accountUuid;
  if (!i) return;
  let s = `${Lm()}:${i}`;
  if (r.unusedResetAnsweredFor === s || Uu() !== "cli" || ua().source !== "claude.ai" || !Cae() || !Tae()) return;
  let d = r.unusedResetDrops, m = await Pe(APn(e, { read: "cedar_ember" }), we);
  if (gn()?.accountUuid !== i || r.unusedResetDrops !== d || ua().source !== "claude.ai" || !Tae()) return;
  switch (m?.kind) {
    case "not_authorized":
    case "no_profile_scope":
      r.unusedResetAnsweredFor = s;
      return;
    case "answered":
      break;
    case "failed":
    case void 0:
      return;
  }
  if (m.status?.ineligibleReason === "unavailable") return;
  r.unusedResetAnsweredFor = s;
  let p = Date.now(), b = pmr(m.status, p);
  await Re((y) => ({ ...y, unusedLimitResetStatusCache: { accountUuid: i, holdsUnusedReset: b !== void 0, checkedAt: p, validUntil: Math.min(p + H, b ?? 1 / 0) } }), n);
}
var t5e = "tengu_wise_bear_copy";
function Dus(e) {
  switch (e) {
    case "five_hour":
      return "session";
    case "seven_day":
      return "weekly";
    case "seven_day_opus":
    case "seven_day_sonnet":
    case "seven_day_overage_included":
      return "model";
    default:
      return;
  }
}
function Kto(e) {
  return typeof e === "object" && e !== null && Reflect.get(e, "only_if_unused_reset") === true;
}
function Lus(e, n, r, i) {
  if (typeof e !== "object" || e === null) return;
  if (Kto(e) && i !== true) return;
  let s = Reflect.get(e, `note_${n}`);
  if (typeof s !== "string") return;
  let d = r(s);
  return d && !(d.endsWith("…") && !s.trimEnd().endsWith("…")) ? d : void 0;
}
export {
  APn,
  Axt,
  B5,
  Bto,
  DW,
  Dus,
  Gto,
  Hus,
  Ius,
  Kee,
  Kie,
  Kto,
  Lus,
  Mus,
  Ous,
  Pus,
  Rxt,
  Uto,
  Vto,
  Wto,
  Z4e,
  e5e,
  iUe,
  j5,
  jto,
  pmr,
  t5e,
  umr,
  zto
};
