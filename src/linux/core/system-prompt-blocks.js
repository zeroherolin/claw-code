// linux/core/system-prompt-blocks.js — Claude Code 2.1.310（linux）模块 chunk-f7aya6cs.js
import { Ne, De } from "../fs/async-hooks.93b1.js";
import { wn, U, q, ATn, ye } from "../context/not-admin-owned.js";
import { b, c, ce } from "../agents/third-party.js";
import { Dt, Qe, N } from "../telemetry/anthropic-workspace-id.js";
import { Nt } from "../shared/chunk-57ff8cc1.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { L7, xV, Vei, wqo, qei, jvt, Jei, Qei, l_n, E0e, Vk, w5, VCe, bb, $t, tA, T9, xoe, fH, fa, Et, kf, G_n, gn, rA, cR, iRe, cr, oA, Sv, zl, W0e, K0e, drr, V0e, jt, jp, Ai, kn, k, Re, ue, _H } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { re } from "../shared/chunk-d2c47492.js";
import { _t, l } from "../artifacts/cowritten-artifact-html.js";
import { g, fo } from "../telemetry/chunk-9d6962d2.js";
import { _st, dSe } from "../fs/async-hooks.7959.js";
import { ot } from "../fs/chunk-86be9585.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { so } from "../shell/invalid-type.js";
import { U0, n3r, WJo, GJo, zJo, KJo } from "../plugins/skills-dir.js";
import { Ae, Fn } from "../models/total-tokens-reminder.js";
import { nNe } from "../mcp/allowed-warning.js";
import { tst, Yd, N3r } from "../fs/content-encoding.js";
import { yai } from "../auth/permission-error.js";
import { L_, FO, Qde, GBr, NG, njt, DZe, NYs, KBr, VBr, n9n, rjt, e2e, $Ys, Wfn, UO, WYs, m$ } from "../api/anthropic-client.js";
import { jx } from "../agents/in-process-teammate.32be.js";
import { Y2o } from "../auth/claude-desktop-3p.js";
import { ZLo } from "../settings/attribution-project.js";
import { on } from "../auth/env-quad.js";
import { Tw, hV } from "../models/ccr-unsupported-default-mode-ignored.js";
import { Oh } from "../telemetry/service-error-detail-not-plain.js";
import { wG } from "../permissions/light-daltonized.js";
import { uu } from "../shared/chunk-6adae81c.js";
import { LE } from "../shared/chunk-810598ee.js";
import { Xmn, jet } from "../context/tool-use-id.js";
import { ge, bn, Go, lr, Tt } from "../vendor/zod/invalid-return-type.js";
import { o, T, u, $u } from "../vendor/zod/string-format.js";
import { _e } from "../shared/chunk-86ecf3aa.js";
import { ve } from "../shared/chunk-fee3c428.js";
import { createHash as lt } from "crypto";
var ee = "__SYSTEM_PROMPT_STATIC_BREAKPOINT__";
function LVn(e, n = U0) {
  let r = e.split(`
`), s = r.findIndex((m) => m.trim() === n);
  if (s === -1) return [e];
  let d = r.slice(0, s).join(`
`) + `
`, f = `
` + r.slice(s + 1).join(`
`);
  return [...d.trim() ? [d] : [], n, ...f.trim() ? [f] : []];
}
function oIo(e) {
  if (!e.includes(ee)) return [e];
  return LVn(e, ee).filter((n) => n !== ee);
}
function NJe(e, n) {
  return typeof e === "string" ? LVn(e) : Array.isArray(e) ? e : n;
}
function Xin(e, n, r) {
  let s = r ? e.indexOf(U0) : -1;
  if (s === -1) return [...e, ...te(n)];
  return [...e.slice(0, s), ...te(n.filter(([d]) => d === "shared")), ...e.slice(s), ...te(n.filter(([d]) => d === "session"))];
}
function te(e) {
  return e.flatMap(([, n]) => n ? [n] : []);
}
function Li(e) {
  return e;
}
var dt = /* @__PURE__ */ new Set(["ti", "os", "sb", "he", "uf", "ap", "tk"]), ie = 512;
function Ce(e) {
  let n = {};
  for (let [r, s] of Object.entries(e)) if (!dt.has(r) && (typeof s === "string" || typeof s === "number" || typeof s === "boolean")) n[r] = s;
  return n;
}
var ne = "You are Claude Code, Anthropic's official CLI for Claude.", Ue = "You are Claude Code, Anthropic's official CLI for Claude, running within the Claude Agent SDK.", Pe = "You are a Claude agent, built on Anthropic's Claude Agent SDK.", ct = [ne, Ue, Pe], Z = new Set(ct);
function NVn(e) {
  return Z.has(e);
}
function $Vn(e) {
  if (Ae() === "vertex") return ne;
  if (e?.recorded !== void 0) return e.recorded;
  if (e?.isNonInteractive) {
    if (e.hasAppendSystemPrompt) return Ue;
    return Pe;
  }
  return ne;
}
function EFs(e, n, r) {
  let s = Y2o(r.fingerprint, r.agentContext, r.previousRequestId, r.promptId, r.turnOrigin, r.turnPosition, { attributionProject: ZLo() }), d = Li([s, n, ...e].filter(Boolean));
  return ft(d), d;
}
function kFs(e, n) {
  let r = Y2o(n.fingerprint, n.agentContext, void 0, void 0, void 0, void 0, { ignoreEnvOptOut: n.forceAttributionHeader === true && !fH(), attributionProject: ZLo() });
  if (!r) return e;
  return [{ type: "text", text: r }, ...e];
}
function ft(e) {
  try {
    let [n] = sIo(e, { skipTelemetry: true }), r = n?.text;
    a("tengu_sysprompt_block", { length: r?.length ?? 0, hash: r ? _e(lt("sha256").update(r).digest("hex")) : b("") });
  } catch (n) {
    l(Qe(N(n), "system prompt block telemetry failed"));
  }
}
function sIo(e, n) {
  let r = T9(), s = e.findIndex((R) => R === U0);
  if (r && n?.skipGlobalCacheForSystemPrompt && s === -1) {
    if (!n?.skipTelemetry) a("tengu_sysprompt_using_tool_based_cache", { promptBlockCount: e.length });
    let R, A, L, v = [];
    for (let x of e) {
      if (!x) continue;
      if (x === U0) continue;
      if (x.startsWith(jet)) R = x;
      else if (Z.has(x)) A = x;
      else if (x === Xmn) L = x;
      else v.push(x);
    }
    let w = [];
    if (R) w.push({ text: R, cacheScope: null });
    if (A) w.push({ text: A, cacheScope: "org" });
    if (L && R && A) w.push({ text: L, cacheScope: null });
    let E = v.join(`

`);
    if (E) w.push({ text: E, cacheScope: "org" });
    return w;
  }
  if (r) {
    if (s !== -1) {
      let R, A, L, v = [], w = [];
      for (let z = 0; z < e.length; z++) {
        let O = e[z];
        if (!O || O === U0) continue;
        if (O.startsWith(jet)) R = O;
        else if (Z.has(O)) A = O;
        else if (O === Xmn) L = O;
        else if (z < s) v.push(O);
        else w.push(O);
      }
      let E = [];
      if (R) E.push({ text: R, cacheScope: null });
      if (A) E.push({ text: A, cacheScope: null });
      if (L && R && A) E.push({ text: L, cacheScope: null });
      let x = v.join(`

`), I = x ? oIo(x) : [];
      for (let z of I) E.push({ text: z, cacheScope: "global" });
      let P = w.join(`

`);
      if (P) E.push({ text: P, cacheScope: I.length > 1 ? null : "org" });
      if (!n?.skipTelemetry) a("tengu_sysprompt_boundary_found", { blockCount: E.length, staticBlockLength: x.length, dynamicBlockLength: P.length });
      return E;
    } else if (!n?.skipTelemetry) a("tengu_sysprompt_missing_boundary_marker", { promptBlockCount: e.length });
  }
  let d, f, m, h = [];
  for (let [R, A] of e.entries()) {
    if (!A || A === U0) continue;
    if (A.startsWith(jet)) d = A;
    else if (Z.has(A)) f = A;
    else if (A === Xmn) m = A;
    else h.push(R < s ? oIo(A).join("") : A);
  }
  let y = [];
  if (d) y.push({ text: d, cacheScope: null });
  if (f) y.push({ text: f, cacheScope: "org" });
  if (m && d && f) y.push({ text: m, cacheScope: null });
  let S = h.join(`

`);
  if (S) y.push({ text: S, cacheScope: "org" });
  return y;
}
function zWe({ agentContext: e, servedSessionMode: n } = {}) {
  let r = {}, s = process.env.CLAUDE_CODE_EXTRA_METADATA;
  if (s) {
    let A = ot(s, false);
    if (A && typeof A === "object" && !Array.isArray(A)) r = Ce(A);
    else t(`CLAUDE_CODE_EXTRA_METADATA env var must be a JSON object, but was given ${s}`, { level: "error" });
  }
  let d = {}, f, m = jx(), h = Ne(i.CLAUDE_CODE_REMOTE) && Fn() ? W0e(e) : void 0, y = { ...f && { ti: f }, device_id: _H(), account_uuid: Ne(i.CLAUDE_CODE_REMOTE) && i.CLAUDE_CODE_ACCOUNT_UUID || rA()?.accountUuid || gn()?.accountUuid || "", session_id: q(), ...m && { parent_session_id: m }, ...h && { tk: h } }, S = { ...d, ...r, ...y };
  if ((Object.keys(r).length > 0 || Object.keys(d).length > 0) && _(S).length > ie) {
    if (S = { ...d, ...y }, _(S).length > ie) S = y;
  }
  return { user_id: _(S) };
}
function Te(e, n) {
  let r = Number(e.get(n) ?? 0);
  return Number.isFinite(r) ? Math.max(0, Math.min(1, r)) : 0;
}
function Ie(e, n, r) {
  let s = Number(e.get(n) ?? NaN);
  return Number.isFinite(s) && s * 1e3 > r ? Math.round(s) : void 0;
}
function mt(e, n) {
  if (e.get("anthropic-ratelimit-unified-status") === null) return { limiterRan: false };
  let r = Te(e, "anthropic-ratelimit-unified-grace-5h-utilization"), s = Te(e, "anthropic-ratelimit-unified-grace-7d-utilization");
  if (r === 0 && s === 0) return { limiterRan: true, zone: null };
  let d = Ie(e, "anthropic-ratelimit-unified-5h-reset", n), f = Ie(e, "anthropic-ratelimit-unified-7d-reset", n), m = r > 0 && d !== void 0 && (f === void 0 || d > f), h = s > 0 && !m ? "seven_day" : "five_hour", y = e.get(rjt), S = y === "allowed" || y === "allowed_warning" ? y : void 0;
  return { limiterRan: true, zone: { rateLimitType: h, resetsAt: h === "seven_day" ? f : d, extraUsageStatus: S }, covered: S !== void 0 || e.get(Wfn) === "true" };
}
class oe {
  zone = null;
  covered = false;
  turnNote = "none";
  fenceMs = 0;
  getZone(e = Date.now()) {
    let n = this.zone;
    return n !== null && n.resetsAt !== void 0 && e / 1e3 >= n.resetsAt ? null : n;
  }
  applyResponse(e, n) {
    let r = mt(e, n);
    if (!r.limiterRan || n < this.fenceMs) return;
    if (this.fenceMs = n, r.zone === null || r.zone.resetsAt !== void 0) this.dropEndedZone(n);
    if (this.zone = r.zone, this.covered = r.zone !== null && r.covered, r.zone === null || r.covered) this.turnNote = "none";
    else if (this.turnNote === "none") this.turnNote = "owed";
  }
  dropEndedZone(e) {
    if (this.zone !== null && this.getZone(e) === null) this.zone = null, this.covered = false, this.turnNote = "none";
  }
  onRefused() {
    if (this.zone !== null && this.zone.extraUsageStatus !== void 0) this.zone = { ...this.zone, extraUsageStatus: void 0 };
    this.covered = false;
  }
  leave(e = Date.now()) {
    this.zone = null, this.covered = false, this.turnNote = "none", this.fenceMs = Math.max(this.fenceMs, e);
  }
  onMainTurnStart() {
    this.turnNote = "none";
  }
  takeTurnNote(e = Date.now()) {
    if (this.dropEndedZone(e), this.turnNote !== "owed") return false;
    return this.turnNote = "taken", true;
  }
  markStartNotePlaced() {
    if (this.turnNote === "taken") this.turnNote = "placed";
  }
  continueAfterWrapUpAt(e = Date.now()) {
    let n = this.getZone(e);
    return this.turnNote === "placed" && n !== null && !this.covered && n.resetsAt !== void 0 ? { resetsAt: n.resetsAt, rateLimitType: n.rateLimitType } : null;
  }
  subagentNoteDue(e = Date.now()) {
    return this.getZone(e) !== null && !this.covered;
  }
}
function W$t(e) {
  if (jvt()) return qei(e);
  return e;
}
function Jin(e) {
  return e || Ae() === "gateway" || jvt();
}
function TFs(e, n) {
  if (!jvt()) return null;
  let r = Vei();
  if (r) return new Dt(429, { error: { type: "rate_limit_error", message: r } }, r, new globalThis.Headers());
  let s = wqo();
  if (!s) return null;
  let d = s["anthropic-ratelimit-unified-status"], f = s["anthropic-ratelimit-unified-overage-status"], h = s["anthropic-ratelimit-unified-representative-claim"] === "seven_day_opus", y = e.includes("opus");
  if (h && !y) return null;
  if (Jei()) {
    let R = Qei(n);
    if (R === null) return null;
    return new Dt(429, { error: { type: "rate_limit_error", message: "Rate limit exceeded" } }, "Rate limit exceeded", new globalThis.Headers(Object.entries(R).filter(([L, v]) => v !== void 0)));
  }
  if (d === "rejected" && (!f || f === "rejected")) return new Dt(429, { error: { type: "rate_limit_error", message: "Rate limit exceeded" } }, "Rate limit exceeded", new globalThis.Headers(Object.entries(s).filter(([A, L]) => L !== void 0)));
  return null;
}
function AFs(e) {
  return jvt() && e.status === 429;
}
var Oe = 0.7, FVn = "individual spend limit", MHr = "individual usage limit", CFs = "https://clau.de/wrap-up";
var pt = 64, gt = 200;
class se {
  maxHoldMs;
  #e = /* @__PURE__ */ new Map();
  constructor(e) {
    this.maxHoldMs = e;
  }
  remember(e, n) {
    let r = n.recordedAtMs;
    for (let [s, d] of this.#e) if (this.#t(d, r) === void 0) this.#e.delete(s);
    this.#e.set(e, { ...n, untilMs: Math.min(n.untilMs, n.recordedAtMs + this.maxHoldMs) });
  }
  recall(e, n = Date.now()) {
    let r = this.#e.get(e);
    if (r === void 0) return;
    let s = this.#t(r, n);
    if (s === void 0) this.#e.delete(e);
    return s;
  }
  clear() {
    this.#e.clear();
  }
  #t(e, n) {
    return n < e.recordedAtMs || n >= e.untilMs ? void 0 : e;
  }
}
class K extends tst {
  replayed = true;
  kind;
  recordedAtMs;
  untilMs;
  constructor(e, n = Date.now()) {
    let r = { headers: new N3r() }, s = Math.max(0, Math.round((n - e.recordedAtMs) / 1e3)), d = Math.max(0, Math.ceil((e.untilMs - n) / 1e3));
    super(`the endpoint answered ${e.status} ${s}s ago; not asked again for ${d}s`, "ERR_REMEMBERED_RESPONSE", r, void 0, { status: e.status, statusText: "", headers: {}, config: r, data: e.body });
    this.name = "RememberedResponseError", this.kind = e.kind, this.recordedAtMs = e.recordedAtMs, this.untilMs = e.untilMs;
  }
}
function ke(e) {
  return e instanceof K;
}
function G$t(e) {
  if (ke(e)) return e.kind === "auth_rejected";
  let n = j(e);
  return n !== void 0 && ae(n);
}
function ae(e) {
  return e.status === 401 || e.status === 403 && e.anthropicError !== void 0;
}
async function G({ credentials: e, settle: n }) {
  if (n && V0e()) try {
    await fa({ credentials: e });
  } catch (r) {
    t(`claudeAiAuthKey: token settle failed (${r instanceof Error ? r.message : String(r)}); keying the token in memory`);
  }
  return drr();
}
function j(e) {
  if (!Yd(e) || ke(e)) return;
  let n = N3r.from(e.config?.headers ?? {}).get("Authorization"), r = e.response?.headers?.["retry-after"];
  return { status: e.response?.status, sentAuthKey: typeof n === "string" && n !== "" ? K0e(n) : null, retryAfterMs: Oh(typeof r === "string" ? r : typeof r === "number" ? String(r) : void 0), anthropicError: ht(e.response?.data) };
}
function ht(e) {
  if (typeof e !== "object" || e === null || !("error" in e)) return;
  let n = e.error;
  if (typeof n !== "object" || n === null || !("type" in n) || typeof n.type !== "string") return;
  let r = "message" in n && typeof n.message === "string" ? re(n.message, gt) : void 0;
  return { error: { type: re(n.type, pt), ...r !== void 0 && { message: r } } };
}
var yt = "tengu_starry_waterfall", F = { menuSuffixPctOff: "at least {pct}% off · {days} left", menuSuffixExtraCredit: "get at least {pct}% extra credit · {days} left", hintPctOff: "Usage credits are at least {pct}% off · {days} left · /usage-credits", hintExtraCredit: "Buy usage credits and get at least {pct}% extra · {days} left · /usage-credits", dialogHeaderPctOff: "Limited-time offer: at least {pct}% off · {days} left", dialogHeaderExtraCredit: "Limited-time offer: at least {pct}% extra credit · {days} left", bannerPillPctOff: "At least {pct}% off usage credits · {days} left", bannerPillExtraCredit: "At least {pct}% extra usage credits · {days} left" };
function de() {
  let e = k(yt, {});
  return typeof e === "object" && e !== null && !Array.isArray(e) ? e : {};
}
function zgt() {
  return de().enabled === true && !_t() && on("allow_promo_offers");
}
function DHr() {
  let e = de().version;
  return typeof e === "number" && Number.isFinite(e) ? e : 0;
}
function H(e, n) {
  return typeof e === "string" && e.trim() !== "" ? e : n;
}
function z$t() {
  let e = de();
  return { menuSuffixPctOff: H(e.menuSuffixPctOff, F.menuSuffixPctOff), menuSuffixExtraCredit: H(e.menuSuffixExtraCredit, F.menuSuffixExtraCredit), hintPctOff: H(e.hintPctOff, F.hintPctOff), hintExtraCredit: H(e.hintExtraCredit, F.hintExtraCredit), dialogHeaderPctOff: H(e.dialogHeaderPctOff, F.dialogHeaderPctOff), dialogHeaderExtraCredit: H(e.dialogHeaderExtraCredit, F.dialogHeaderExtraCredit), bannerPillPctOff: H(e.bannerPillPctOff, F.bannerPillPctOff), bannerPillExtraCredit: H(e.bannerPillExtraCredit, F.bannerPillExtraCredit) };
}
var We = " · ";
function K$t(e, n) {
  let r = e;
  if (n.daysLeft === null || n.daysLeft <= 0) {
    let s = r.split(We).filter((d) => !d.includes("{days}"));
    r = s.length > 0 ? s.join(We) : r, r = r.replaceAll("{days}", "").trim();
  } else {
    let s = n.daysLeft === 1 ? "1 day" : `${n.daysLeft} days`;
    r = r.replaceAll("{days}", s);
  }
  return uu(r.replaceAll("{pct}", String(n.pct)));
}
var bt = Object.freeze(["Fable", "Fable 5", "Fable 5.1"]), vt = Object.freeze([]);
function Me() {
  return jp() ? vt : bt;
}
function Kgt(e) {
  if (e?.is_enabled === true) return true;
  return l_n(e?.disabled_reason ?? null);
}
var At = ["five_hour", "seven_day", "seven_day_oauth_apps", "seven_day_opus", "seven_day_sonnet", "cinder_cove", "wattle_ember", "extra_usage", "limits"];
function RFs(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function KWe(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && At.some((n) => n in e);
}
var He = "tengu_usage_overage_included_models";
function eTe() {
  let e = k(He, null);
  if (e === null || e === void 0) return Me();
  return Array.isArray(e) ? e.filter((n) => typeof n === "string") : [];
}
var wt = 1500, ze = "usage: overage-included models allowlist";
async function iIo() {
  let e = () => kn(He, []).source, n = Date.now();
  try {
    let r = e();
    if (r !== "fallback" && r !== "disk") return;
    await Nt(Ai(), wt, ze), t(`usage: GrowthBook init settled after ${Date.now() - n}ms; overage-included models allowlist now read from ${e()} (was ${r})`);
  } catch (r) {
    t(`usage: overage-included models allowlist not refreshed after ${Date.now() - n}ms (${r instanceof Error && r.message === ze ? "timeout" : "error"}); per-model rows use the cached list`, { level: "warn" });
  }
}
var St = "tengu_rate_limit_promo_notices", Rt = p(() => T(u({ bar: o(), text: o(), variant: $u((e) => typeof e === "string" && Object.hasOwn(wG("dark"), e)).optional().catch(void 0) })));
function aIo() {
  let e = k(St, []), n = Rt().safeParse(e);
  return n.success ? n.data : [];
}
function Ge(e) {
  return e !== null && typeof e === "object" && e.kind === "weekly_scoped" && typeof e.scope?.model?.display_name === "string";
}
function Qin(e) {
  return Array.isArray(e) && e.some((n) => typeof n === "object" && n !== null && Ge(n));
}
function xFs(e) {
  return Array.isArray(e) && e.some((n) => typeof n !== "object" || n === null || n.scope?.model != null);
}
function V$t(e, n) {
  let r = n.map((s) => s.toLowerCase());
  if (r.length === 0 || !Array.isArray(e)) return [];
  return e.filter(Ge).filter((s) => r.includes(s.scope.model.display_name.toLowerCase())).map((s) => ({ title: `Current week (${s.scope.model.display_name})`, displayName: s.scope.model.display_name, limit: { utilization: s.percent, resets_at: s.resets_at } }));
}
var Lt = 3e5, je = 36e5, xt = 36e5, pe = ve(new se(je), (e) => e.clear()), Fe = ve({ attempted: false }, (e) => {
  e.attempted = false;
}), B = ve(/* @__PURE__ */ new Set(), (e) => {
  e.clear();
}), Ct = "tengu_federated_robin";
function $e() {
  return k(Ct, true);
}
function Ut(e) {
  return e >= 200 && e < 300;
}
var Pt = new W(() => ({ pending: null, requester: null, credentials: void 0, offerSurface: null }));
function It() {
  let e = gn();
  return `${e?.organizationUuid ?? ""}:${e?.accountUuid ?? ""}`;
}
async function _O(e, n = {}) {
  if (n.read !== "at_wall" && n.read !== "starry_waterfall") return fe(e, n.read ?? "plain", le(n));
  let r = Pt.of(U().host), s = It(), d = r.pending !== null && r.requester === s && r.credentials === e;
  if (n.read === "starry_waterfall") {
    if (d && r.offerSurface === n.surface) return r.pending;
    return fe(e, "starry_waterfall", le(n));
  }
  if (d) return r.pending;
  let f = le(n), m = fe(e, "at_wall", f).finally(() => {
    if (r.pending === m) r.pending = null, r.requester = null, r.credentials = void 0, r.offerSurface = null;
  });
  return r.pending = m, r.requester = s, r.credentials = e, r.offerSurface = f.includes(`${me}=`) ? Be(n) : null, m;
}
var me = "starry_waterfall";
function Be(e) {
  return e.surface ?? "cli_menu";
}
function le(e) {
  switch (e.read) {
    case void 0:
    case "plain":
      return "/api/oauth/usage";
    case "cedar_ember":
      return "/api/oauth/usage?cedar_ember=1&skip_spend=1";
    case "at_wall":
      return zgt() ? `/api/oauth/usage?at_wall=1&${me}=${Be(e)}&skip_spend=1` : "/api/oauth/usage?at_wall=1&skip_spend=1";
    case "starry_waterfall":
      return `/api/oauth/usage?${me}=${e.surface}&skip_spend=1`;
  }
}
async function fe(e, n, r) {
  let s = $e();
  if (!s) pe.clear();
  let d = s && Et() && kf() ? Q(await G({ credentials: e, settle: false })) : void 0;
  if (d !== void 0) d = Q(await G({ credentials: e, settle: true }));
  if (d?.kind === "auth_rejected" && B.size > 0) await Promise.allSettled([...B]), d = Q(await G({ credentials: e, settle: true }));
  if (d !== void 0) {
    let m = new K(d);
    throw t(`fetchUtilization: ${r} replayed — ${m.message}`), m;
  }
  let f = async () => {
    if (!Et() || !kf()) return {};
    let m = 0, h, y = G_n(), S = null, R, A = () => {
      let v, w = new Promise((E) => {
        v = E;
      });
      return R = w, Sv(async () => {
        m++;
        let E = await G({ credentials: e, settle: false });
        if (h !== void 0 && E === h.key) throw h.error;
        t(`fetchUtilization: GET ${r} (attempt ${m})`);
        try {
          let x = await jt.get(r, { timeout: 5e3, headers: { "Content-Type": "application/json" }, refreshOAuth: true, credentials: e, validateStatus: Ut });
          if (!x.ok) throw Error(`Auth error: ${x.reason === "no-auth" ? x.detail : x.reason}`);
          return x;
        } catch (x) {
          let I = s ? Ot(x, E) : null;
          if (I !== null) h = { key: I, error: x };
          let P = j(x);
          if (S = P?.sentAuthKey ?? E, P?.status === 401) B.add(w);
          throw x;
        }
      }, y ? { credentials: e, gateToSessionOAuthCredential: true, oauthRefreshLatch: Fe } : { credentials: e }).then((E) => (v(true), B.delete(w), E), (E) => {
        throw v(false), B.delete(w), E;
      });
    }, L;
    try {
      L = await A();
    } catch (v) {
      let w = [...B].filter((P) => P !== R);
      if (j(v)?.status !== 401 || w.length === 0) throw v;
      let E = await Promise.allSettled(w), x = await G({ credentials: e, settle: true });
      if (x === null || x === S) throw v;
      let I = s ? Q(x) : void 0;
      if (I !== void 0) throw new K(I);
      if (!s && !E.some((P) => P.status === "fulfilled" && P.value)) throw v;
      t(`fetchUtilization: ${r} 401 during another read's token refresh; re-sending with the refreshed bearer`), L = await A();
    }
    return Fe.attempted = false, t(`fetchUtilization: 200 after ${m} attempt(s)${m > 1 ? " (401→refresh→retry succeeded)" : ""}`), L.data;
  };
  switch (n) {
    case "at_wall":
      return fo("api_usage_fetch_at_wall", f, J);
    case "cedar_ember":
      return fo("api_usage_fetch_cedar_ember", f, J);
    case "starry_waterfall":
      return fo("api_usage_fetch_starry_waterfall", f, J);
    case "plain":
      return fo("api_usage_fetch", f, J);
  }
}
function Q(e) {
  return e === null ? void 0 : pe.recall(e);
}
async function PFs(e) {
  if (!$e()) return;
  let n = Q(await G({ credentials: e, settle: false }));
  return n?.kind === "rate_limited" ? n.untilMs : void 0;
}
function Ot(e, n) {
  try {
    let r = j(e);
    if (r === void 0 || r.status === void 0) return null;
    let s = r.sentAuthKey ?? n;
    if (s === null) return null;
    let { status: d, anthropicError: f } = r, m, h;
    if (ae(r)) m = "auth_rejected", h = xt;
    else if (d === 429 || d === 403) {
      m = "rate_limited";
      let S = r.retryAfterMs ?? 0;
      h = Math.min(S > 0 ? S : Lt, je);
    } else return null;
    let y = Date.now();
    return pe.remember(s, { kind: m, status: d, body: f, recordedAtMs: y, untilMs: y + h }), t(`fetchUtilization: ${d} remembered for this bearer; not asking again for ${Math.round(h / 1e3)}s`), s;
  } catch (r) {
    return t(`fetchUtilization: could not record the endpoint's answer: ${r instanceof Error ? r.message : String(r)}`, { level: "error" }), null;
  }
}
function J(e) {
  let n = j(e);
  if (n === void 0) return "error";
  switch (n.status) {
    case void 0:
      return "network";
    case 401:
      return "http_401";
    case 403:
      return "http_403";
    case 429:
      return "http_429";
    default:
      return "http_other";
  }
}
var UVn = /* @__PURE__ */ new Set(["org_level_disabled_until", "org_spend_cap_reached"]), kt = "channel's monthly spend limit", Wt = "channel's monthly usage limit", Ve = " · an org owner or channel manager can raise it in the channel's Claude settings";
function X() {
  return k("tengu_vellum_anchor", false);
}
var Mt = [...n3r, ...zJo, ...KJo, ...GJo];
function lIo(e) {
  return Mt.some((n) => e.startsWith(n)) || WJo.some((n) => n.test(e));
}
var Qle = { five_hour: "session limit", seven_day: "weekly limit", seven_day_opus: "Opus limit", seven_day_sonnet: "Sonnet limit", seven_day_overage_included: "Fable limit", overage: "usage credit limit" };
function HHr(e) {
  let n = e.resetsAt ? LE(e.resetsAt, true) : void 0;
  if (!n) return null;
  switch (e.rateLimitType) {
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
      return { limitName: Qle[e.rateLimitType], resetTime: n };
    case "seven_day_sonnet":
      return { limitName: q$t(), resetTime: n };
    case "seven_day_overage_included":
    case "overage":
    case void 0:
      return null;
    default:
      return null;
  }
}
function Ye(e, n) {
  if (e.isUsingOverage) {
    if (e.overageStatus === "allowed_warning") return { message: `You're close to your ${FO() ? "usage limit" : "usage credit limit"}`, severity: "warning" };
    return null;
  }
  if (e.status === "rejected") return { message: zt(e, n), severity: "error" };
  if (e.status === "allowed_warning") {
    if (e.utilization !== void 0 && e.utilization < Oe) return null;
    let r = cr(), s = r === "team" || r === "enterprise", d = gn()?.hasExtraUsageEnabled === true;
    if (s && d && !L_()) return null;
    let f = Ht(e);
    if (f) return { message: f, severity: "warning" };
  }
  return null;
}
function dIo(e, n) {
  let r = Ye(e, n);
  if (r && r.severity === "error") return r.message;
  return null;
}
function cIo(e, n) {
  let r = Ye(e, n);
  if (r && r.severity === "warning") return r.message;
  return null;
}
function zt(e, n) {
  let r = FO(), s = L_(), d = s ? "" : " · contact your admin to increase it", f = e.resetsAt, m = f ? LE(f, true) : void 0, h = e.overageResetsAt ? LE(e.overageResetsAt, true) : void 0, y = m ? ` · resets ${m}` : "", S, R = () => {
    if (S === void 0) S = Ft(e, y, n);
    return S;
  }, A = e.rateLimitType === "five_hour" || e.rateLimitType === "seven_day" || e.rateLimitType === "seven_day_opus" || e.rateLimitType === "seven_day_sonnet" || e.rateLimitType === "seven_day_overage_included", L = () => e.rateLimitType === "seven_day_overage_included" || !(VCe(n) && GBr(n) && !NG());
  if (!r && e.overageDisabledReason && A && !UVn.has(e.overageDisabledReason) && L()) {
    let v = R();
    if (v !== null) return v;
  }
  if (!r && e.overageScope === "group_pool") {
    let v = HHr(e), w = v && L() ? ` · your ${v.limitName} resets ${v.resetTime}` : "", E = s ? ` · raise it at ${xV}` : ` · ask your admin to raise it at ${xV}`;
    return M("team's shared budget", `${E}${w}`, n);
  }
  if (!r && e.overageDisabledReason && UVn.has(e.overageDisabledReason)) {
    let v = e.overageDisabledReason === "org_spend_cap_reached", w = cr(), E = w === "team" || w === "enterprise", x = HHr(e), I = x && L() ? x : null, P = I ? ` · your ${I.limitName} resets ${I.resetTime}` : "";
    if (e.overageScope === "channel") return M(kt, `${Ve}${P}`, n);
    if (E) {
      let Y = iRe(), Ee = s ? Y ? ` · run ${Y} to raise it, or visit ${xV}` : ` · visit ${xV} to raise it` : he();
      return M(v ? FVn : "org's monthly spend limit", `${Ee}${P}`, n);
    }
    let z = s ? "monthly spend limit" : v ? FVn : "org's monthly spend limit", O = s ? ` · raise it at ${L7}` : ` · ask your admin to raise it at ${xV}`;
    return M(z, `${O}${P}`, n);
  }
  if (e.overageStatus === "rejected") {
    let v = "";
    if (f && e.overageResetsAt) if (f < e.overageResetsAt) v = ` · resets ${m}`;
    else v = ` · resets ${h}`;
    else if (m) v = ` · resets ${m}`;
    else if (h) v = ` · resets ${h}`;
    if (e.overageDisabledReason === "out_of_credits") {
      if (r) return s ? "Your org is out of usage · add funds to continue" : "Your org is out of usage · contact your admin";
      let w = v !== "" && X() ? " · progress saved" : "";
      return `You're out of usage credits${v}${w}`;
    }
    if (e.overageDisabledReason && UVn.has(e.overageDisabledReason)) {
      let w = h ? ` · resets ${h}` : "";
      if (e.overageScope === "channel") return M(Wt, `${Ve}${w}`, n);
      return M(e.overageDisabledReason === "org_spend_cap_reached" ? MHr : "org's monthly usage limit", w, n);
    }
    if (e.overageDisabledReason === "seat_tier_level_disabled" || e.overageDisabledReason === "seat_tier_zero_credit_limit") return `Your seat type doesn't include ${r ? "usage" : "usage credits"}`;
    if (e.overageDisabledReason === "org_service_level_disabled") return "This service is disabled for your org";
    if (e.overageDisabledReason === "member_level_disabled" || e.overageDisabledReason === "member_zero_credit_limit") return `Your usage allocation has been disabled by your admin${he()}`;
    if (e.overageDisabledReason === "group_zero_credit_limit") return `Your group's usage limit is set to $0${he()}`;
    if (r) return M("usage limit", d, n);
    return M("limit", v, n, { progressSavedSuffix: v !== "" && X() });
  }
  if (A) {
    let v = R();
    if (v !== null) return v;
  }
  if (r) return M("usage limit", d, n);
  return M("usage limit", y, n, { progressSavedSuffix: y !== "" && X() });
}
function Ft(e, n, r) {
  switch (e.rateLimitType) {
    case "seven_day_sonnet":
      return M(q$t(), n, r, { progressSavedSuffix: X() });
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
      return M(Qle[e.rateLimitType], n, r, { progressSavedSuffix: X() });
    case "seven_day_overage_included":
      return M(Qle[e.rateLimitType], n, r);
    default:
      return null;
  }
}
function Ht(e) {
  let n = e.utilization ? Math.floor(e.rateLimitType === "overage" ? _st(e.utilization) : dSe(e.utilization)) : void 0, r = null;
  switch (e.rateLimitType) {
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
    case "seven_day_sonnet":
    case "seven_day_overage_included":
      r = Qle[e.rateLimitType];
      break;
    case "overage":
      if (FO()) r = n ? "usage" : "usage limit";
      else r = n ? "usage credits" : "usage credit limit";
      break;
    case void 0:
      return null;
  }
  let s = e.rateLimitType === "overage" && FO(), d = e.resetsAt && !s ? LE(e.resetsAt, true) : void 0, f = uIo(e.rateLimitType);
  return [n ? `You've used ${n}% of your ${r}` : `Approaching ${r}`, d && `resets ${d}`, f].filter(Boolean).join(" · ");
}
function uIo(e) {
  let n = cr(), r = gn()?.hasExtraUsageEnabled === true, s = L_();
  if (n === "team" || n === "enterprise") {
    if (!r && cR()) return s ? "Run /usage-credits to turn on extra usage for your org" : "Run /usage-credits to ask your admin for more";
    if (r && e === "overage") {
      if (cR()) return s ? "Run /usage-credits to raise the cap" : "Run /usage-credits to ask your admin for more";
      return s ? `Raise the cap at ${xV}` : "Ask your admin for more";
    }
    return null;
  }
  if (n === "max" && oA() === "default_claude_max_20x") return !r && cR() ? "/usage-credits to keep using Claude Code" : null;
  if (e === "five_hour" && (n === "pro" || n === "max") && !r && Qde()) return "/upgrade to keep using Claude Code";
  return null;
}
function IFs(e) {
  if (e === null || !Gt(e)) return null;
  if (!cR()) return "Switch models to keep working.";
  if (!L_()) return "Switch models to keep working.";
  return `Buy more to keep using ${bb($t(e))}, or switch models to keep working.`;
}
function Gt(e) {
  if (e === null) return false;
  let n = $t(e);
  return VCe(n) && GBr(n) && !NG();
}
function OFs(e, n, r) {
  if (cr() !== "pro") return null;
  if (e.rateLimitType !== "seven_day") return null;
  if (n.includes("fable")) return { lever: "model", text: "try /model opus · more runway" };
  if (n.includes("opus")) return { lever: "model", text: "try /model sonnet · ~2× runway" };
  if (!Tw(n)) return null;
  let s = hV(n, r);
  if (s === "high" || s === "xhigh" || s === "max") return { lever: "effort", text: "try /effort medium" };
  return null;
}
function fIo(e, n) {
  let r = e.resetsAt ? LE(e.resetsAt, true) : "", s = "";
  switch (e.rateLimitType) {
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
      s = Qle[e.rateLimitType];
      break;
    case "seven_day_sonnet":
      s = q$t();
      break;
    case "seven_day_overage_included":
    case "overage":
    case void 0:
      break;
  }
  let d = FO();
  if (!s && !d && n) {
    let h = Vk($t(n));
    if (h && eTe().some((y) => y.toLowerCase() === h.toLowerCase())) {
      let y = r ? ` · Your ${h} limit resets ${r}` : "";
      return `Now using usage credits for ${h}${y}`;
    }
  }
  let f = d ? "your usage allocation" : "usage credits";
  if (!s) return `Now using ${f}`;
  let m = r && !d ? ` · Your ${s} resets ${r}` : "";
  return `You're now using ${f}${m}`;
}
function q$t() {
  let e = cr();
  return e === "pro" || e === "enterprise" ? Qle.seven_day : Qle.seven_day_sonnet;
}
function he() {
  let e = iRe();
  return e ? ` · run ${e} to ask your admin for a higher limit` : " · ask your admin for a higher limit";
}
function M(e, n, r, s) {
  let d = s?.progressSavedSuffix ? " · progress saved" : "";
  return `You've hit your ${e}${n}${d}`;
}
var Bt = [{ rateLimitType: "five_hour", windowSeconds: 18e3, thresholds: [{ utilization: 0.9, timePct: 0.72 }] }, { rateLimitType: "seven_day", windowSeconds: 604800, thresholds: [{ utilization: 0.75, timePct: 0.6 }, { utilization: 0.5, timePct: 0.35 }, { utilization: 0.25, timePct: 0.15 }] }];
function VWe(e) {
  return so(Qle, e) || e;
}
function Vt(e, n) {
  let r = Date.now() / 1e3, s = e - n, d = r - s;
  return Math.max(0, Math.min(1, d / n));
}
function MFs(e) {
  let n = e.headers?.get?.(n9n), r = e.headers?.get?.(rjt);
  if (!n && !r) return null;
  let s = { status: "rejected", unifiedRateLimitFallbackAvailable: false, isUsingOverage: false }, d = e.headers?.get?.("anthropic-ratelimit-unified-reset");
  if (d) s.resetsAt = Math.round(Number(d));
  if (n) s.rateLimitType = n;
  if (r) s.overageStatus = r;
  let f = e.headers?.get?.("anthropic-ratelimit-unified-overage-reset");
  if (f) s.overageResetsAt = Math.round(Number(f));
  let m = e.headers?.get?.(e2e);
  if (m) s.overageDisabledReason = m;
  let h = at(e.headers);
  if (h) s.overageScope = h;
  return Object.assign(s, Ze(e.headers)), s;
}
function Ze(e) {
  let n = NYs(e);
  if (!n) return {};
  let r = KBr(e), s = VBr(e);
  return { lowPriorityOffer: n, ...r !== void 0 && { lowPriorityRetryAfterSeconds: r }, ...s !== void 0 && { lowPriorityMaxWaitSeconds: s } };
}
var D = [["five_hour", "5h"], ["seven_day", "7d"], ["seven_day_overage_included", "7d_oi"], ["overage", "overage"]], Yt = 18e5;
function Ke() {
  return k("tengu_sharded_moonbeam", true);
}
function Kt() {
  return k("tengu_valiant_finch", false);
}
function be(e) {
  if (e === null || e === "") return;
  let n = Number(e);
  return Number.isFinite(n) ? n : void 0;
}
function Qt(e) {
  let n = {};
  for (let [r, s] of D) {
    let d = be(e.get(`anthropic-ratelimit-unified-${s}-utilization`)), f = be(e.get(`anthropic-ratelimit-unified-${s}-reset`)), m = be(e.get(`anthropic-ratelimit-unified-${s}-surpassed-threshold`)), h = e.get(`anthropic-ratelimit-unified-${s}-status`), y = r === "overage" ? void 0 : qt.find((S) => S === h);
    if (d === void 0 && f === void 0 && m === void 0 && y === void 0) continue;
    n[r] = { ...d !== void 0 && { utilization: d }, ...f !== void 0 && { resets_at: Math.round(f) }, ...m !== void 0 && { surpassedThreshold: m }, ...y !== void 0 && { status: y } };
  }
  return n;
}
var qt = ["allowed", "allowed_warning", "rejected"];
function qe(e) {
  let n = {};
  for (let [r] of D) {
    let s = e[r];
    if (s?.utilization !== void 0 && s.resets_at !== void 0) n[r] = { utilization: s.utilization, resets_at: s.resets_at };
  }
  return n;
}
function V(e, n) {
  return `${Math.round(e.utilization * 100)}@${e.resets_at}:${n?.status}:${n?.surpassedThreshold}`;
}
function tTe(e) {
  return e !== void 0 && Number.isFinite(e.utilization) && Number.isFinite(e.resets_at);
}
function Xt(e) {
  return e.surpassedThreshold !== void 0 || e.utilization !== void 0 && e.resets_at !== void 0;
}
async function Je(e, n, r) {
  let s = await m$({ maxRetries: 0, model: e, source: "quota_check", agentContext: zl(), credentials: n }), d = [{ role: "user", content: "quota" }], f = xoe(e);
  return s.beta.messages.create({ model: tA(e), max_tokens: 1, messages: d, metadata: zWe(), ...nNe(f) }, { signal: r }).asResponse();
}
async function DFs(e, n, r) {
  await Je(e, n, r);
}
function Zt(e, n, r) {
  for (let [s] of D) {
    if (r && s === "five_hour") continue;
    let d = e[s];
    if (d?.surpassedThreshold !== void 0) return { status: "allowed_warning", resetsAt: d.resets_at, rateLimitType: s, utilization: d.utilization, unifiedRateLimitFallbackAvailable: n, isUsingOverage: false, surpassedThreshold: d.surpassedThreshold };
  }
  return null;
}
function Jt(e, n, r) {
  let { rateLimitType: s, windowSeconds: d, thresholds: f } = n, m = e[s];
  if (m?.utilization === void 0 || m.resets_at === void 0) return null;
  let { utilization: h, resets_at: y } = m, S = Vt(y, d);
  if (!f.some((A) => h >= A.utilization && S <= A.timePct)) return null;
  return { status: "allowed_warning", resetsAt: y, rateLimitType: s, utilization: h, unifiedRateLimitFallbackAvailable: r, isUsingOverage: false };
}
function et(e, n) {
  let r = UO(), s = Zt(e, n, r);
  if (s) return s;
  for (let d of Bt) {
    if (r && d.rateLimitType === "five_hour") continue;
    let f = Jt(e, d, n);
    if (f) return f;
  }
  return null;
}
function we(e, n) {
  let r = e.get("anthropic-ratelimit-unified-status") || "allowed", s = e.get("anthropic-ratelimit-unified-reset"), d = s ? Math.round(Number(s)) : void 0, f = e.get("anthropic-ratelimit-unified-fallback") === "available", m = e.get("anthropic-ratelimit-unified-representative-claim"), h = e.get("anthropic-ratelimit-unified-overage-status"), y = e.get("anthropic-ratelimit-unified-overage-reset"), S = y ? Math.round(Number(y)) : void 0, R = e.get("anthropic-ratelimit-unified-overage-disabled-reason"), A = at(e), L = e.get(Wfn) === "true", v = Ze(e), w = e.get("anthropic-ratelimit-unified-upgrade-paths"), E = w ? w.split(",").map((ut) => ut.trim()) : void 0, x = e.get("anthropic-ratelimit-unified-overage-period-monthly-utilization"), I = x ? Number(x) : NaN, P = Number.isFinite(I) ? { utilization: I } : void 0, z = e.get("anthropic-ratelimit-unified-overage-period-channel-utilization"), O = z ? Number(z) : NaN, Y = Number.isFinite(O) ? { utilization: O } : void 0, Le = { status: r === "allowed_warning" ? "allowed" : r, resetsAt: d, unifiedRateLimitFallbackAvailable: f, ...m && { rateLimitType: m }, ...h && { overageStatus: h }, ...S && { overageResetsAt: S }, ...R && { overageDisabledReason: R }, ...A && { overageScope: A }, ...E && { upgradePaths: E }, isUsingOverage: r === "rejected" && (h === "allowed" || h === "allowed_warning"), ...L && { overageInUse: L }, ...P && { overagePeriodMonthly: P }, ...Y && { overagePeriodChannel: Y }, ...n && { rateLimitGraceActive: true }, ...v }, xe = Qt(e);
  return { base: Le, own: ei(Le, xe), readings: xe };
}
function ei(e, n) {
  if (e.status !== "allowed") return e;
  let r = et(n, e.unifiedRateLimitFallbackAvailable);
  return r ? Se(r, e.upgradePaths, e) : e;
}
function tt(e, n) {
  return we(e, n).own;
}
function Se(e, n, r) {
  return { ...e, ...n && { upgradePaths: n }, ...!r.rateLimitGraceActive && { ...r.overageStatus && { overageStatus: r.overageStatus }, ...r.overageResetsAt && { overageResetsAt: r.overageResetsAt }, ...r.overageDisabledReason && { overageDisabledReason: r.overageDisabledReason } }, ...r.overageInUse && { overageInUse: true }, ...r.overagePeriodMonthly && { overagePeriodMonthly: r.overagePeriodMonthly }, ...r.overagePeriodChannel && { overagePeriodChannel: r.overagePeriodChannel }, ...r.rateLimitGraceActive && { rateLimitGraceActive: true } };
}
function ti(e) {
  let { overageStatus: n, overageResetsAt: r, overageDisabledReason: s, ...d } = e;
  return d;
}
function ii(e) {
  let { resetsAt: n, rateLimitType: r, utilization: s, surpassedThreshold: d, upgradePaths: f, ...m } = e;
  return { ...m, status: "allowed" };
}
function pIo(e) {
  let n = e.error?.error?.details;
  if (n?.error_code !== "credits_required") return {};
  return { errorCode: "credits_required", ...typeof n.disabled_reason === "string" && { overageDisabledReason: n.disabled_reason }, ...typeof n.can_user_purchase_credits === "boolean" && { canUserPurchaseCredits: n.can_user_purchase_credits }, ...typeof n.has_chargeable_saved_payment_method === "boolean" && { hasChargeableSavedPaymentMethod: n.has_chargeable_saved_payment_method } };
}
function Y$t(e, n) {
  if (ue().cachedExtraUsageDisabledReason !== e) Re((r) => ({ ...r, cachedExtraUsageDisabledReason: e }), n);
}
function Xe(e, n) {
  if (Ae() === "gateway") return;
  Y$t(e.get("anthropic-ratelimit-unified-overage-disabled-reason") ?? null, n);
}
var ni = 36e5, it = 6e4, ri = p(() => {
  let e = Tt({ utilization: bn().nullable(), resets_at: ge().nullable() }).passthrough(), n = Tt({ five_hour: e.nullish(), seven_day: e.nullish(), seven_day_oauth_apps: e.nullish(), seven_day_opus: e.nullish(), seven_day_sonnet: e.nullish(), cinder_cove: e.nullish(), wattle_ember: e.extend({ label: ge().nullish(), limit_dollars: bn().nullish(), used_dollars: bn().nullish(), remaining_dollars: bn().nullish(), periods: lr(Tt({ starts_at: ge(), ends_at: ge() }).passthrough()).nullish() }).nullish(), extra_usage: Tt({ is_enabled: Go(), monthly_limit: bn().nullable(), used_credits: bn().nullable(), utilization: bn().nullable(), currency: ge().nullish(), disabled_reason: ge().nullish() }).passthrough().nullish(), limits: lr(Tt({ kind: ge(), group: ge(), percent: bn(), resets_at: ge().nullable(), severity: ge(), is_active: Go(), scope: Tt({ model: Tt({ display_name: ge() }).passthrough().nullish(), surface: Tt({ display_name: ge() }).passthrough().nullish() }).passthrough().nullish() }).passthrough()).nullish() }).passthrough();
  return Tt({ fetchedAtMs: bn(), accountUuid: ge().optional(), utilization: n });
});
function HFs(e, n, r) {
  let s = gn()?.accountUuid;
  if (s !== n) return;
  let d = ue().cachedUsageUtilization, f = d && d.accountUuid === s ? Date.now() - d.fetchedAtMs : Number.POSITIVE_INFINITY;
  if (f >= 0 && f < it) return;
  Re((m) => ({ ...m, cachedUsageUtilization: { fetchedAtMs: Date.now(), ...s !== void 0 && { accountUuid: s }, utilization: e } }), r);
}
function LHr(e) {
  let n = ue().cachedUsageUtilization;
  if (!n) return null;
  let r = ri().safeParse(n);
  if (!r.success) return null;
  if (r.data.accountUuid !== gn()?.accountUuid) return Re((d) => ({ ...d, cachedUsageUtilization: void 0 }), e), null;
  let s = Date.now() - r.data.fetchedAtMs;
  if (s < 0 || s > ni) return null;
  return { utilization: r.data.utilization, fetchedAtMs: r.data.fetchedAtMs };
}
function LFs(e) {
  let n = LHr(e);
  if (!n) return null;
  let r = Date.now() - n.fetchedAtMs;
  if (r >= it || C.lastAppliedObservationAtMs > n.fetchedAtMs) return null;
  return { utilization: n.utilization, ageMs: r };
}
var NFs = "[Usage limit reached — grace window active. Wrap up: finish or checkpoint; don't start subagents or long work.]", $Fs = "tengu_lantern_wick_mode";
function FFs(e) {
  let n = typeof e === "string" ? e.trim().toLowerCase() : e;
  return n === "wrap-up" || n === "next-steps" ? n : "off";
}
var UFs = "tengu_lantern_wick_text";
function mIo(e) {
  let n = typeof e === "string" ? e.trim() : "";
  return n === "" ? null : `[${n}]`;
}
var BFs = "[Usage limit reached — grace window active. Checkpoint now: finish the current step, then list up to 3 short bullets of the most impactful remaining work. Don't start subagents or long-running work.]", BVn = "tengu_vellum_anchor", jFs = "[Usage limit approaching. Checkpoint now: finish the current step, then list up to 3 short bullets of the most impactful remaining work. Don't start subagents or long-running work.]", oi = 0.95, WFs = "Approaching your 5-hour usage limit — Claude will wrap up the current step.", GFs = "notice";
function si(e) {
  switch (e) {
    case "default_claude_max_5x":
      return 0.99;
    case "default_claude_max_20x":
      return 0.9975;
    default:
      return oi;
  }
}
class nt {
  currentLimits = { status: "allowed", unifiedRateLimitFallbackAvailable: false, isUsingOverage: false };
  rawUtilization = {};
  rawWindowLevels = {};
  lastSeenWindows = {};
  lastEmittedWindowParts = {};
  lastEmittedGraceExtraUsageStatus = void 0;
  lastAppliedObservationAtMs = 0;
  accountEpoch = 0;
  limitsObserved = false;
  retiredAtMs = {};
  longContext1mOkLogged = false;
  statusChanged = De();
  overageInUse = De();
  quotaRejected = De();
  usageLimitWaits = /* @__PURE__ */ new Set();
  usageLimitWaitsChanged = De();
  wrapUp = new oe();
  pendingNearLimitWrapUpHint = false;
  nearLimitWrapUpWindowKey = null;
  isFromPreviousAccount(e) {
    return e !== void 0 && e !== this.accountEpoch;
  }
  isStaleObservation(e) {
    if (e < this.lastAppliedObservationAtMs) return true;
    return this.lastAppliedObservationAtMs = e, this.limitsObserved = true, false;
  }
  applyWindowReadings(e, n, r, s) {
    let { overageDisabledReason: d } = n;
    if (d !== void 0 && d !== "fetch_error" && d !== "unknown") this.retireWindows(["overage"], r);
    if (!s) {
      this.rawUtilization = qe(e), this.rawWindowLevels = {};
      for (let [f] of D) {
        let { status: m, surpassedThreshold: h } = e[f] ?? {};
        if (m !== void 0 || h !== void 0) this.rawWindowLevels[f] = { ...m !== void 0 && { status: m }, ...h !== void 0 && { surpassedThreshold: h } };
      }
    }
    this.recordSeenWindows(e, n, r);
  }
  recordSeenWindows(e, { upgradePaths: n, unifiedRateLimitFallbackAvailable: r }, s) {
    let d = qe(e);
    for (let [f] of D) {
      if (this.isRetiredReading(f, s)) continue;
      let m = d[f], h = this.lastSeenWindows[f];
      if (tTe(m) && (h === void 0 || s >= h.observedAtMs)) {
        let y = e[f]?.surpassedThreshold;
        this.lastSeenWindows[f] = { ...m, observedAtMs: s, ...y !== void 0 && { surpassedThreshold: y }, ...n && { upgradePaths: n }, unifiedRateLimitFallbackAvailable: r };
      }
    }
  }
  currentWindows(e) {
    let n = this.lastAppliedObservationAtMs - Yt, r = {};
    for (let [s] of D) {
      let d = this.lastSeenWindows[s];
      if (d !== void 0 && d.observedAtMs >= n && rt(d, e)) r[s] = d;
    }
    return r;
  }
  deriveTrackedLimits(e, n, r, s) {
    if (e.status !== "allowed") return e;
    let d = Ke(), f = d ? this.currentWindows(s) : {}, m = {}, h = {};
    for (let [S] of D) {
      let R = f[S];
      if (R !== void 0 && R.utilization < 1 && (R.surpassedThreshold === void 0 || R.surpassedThreshold < 1)) h[S] = R;
      let A = n[S];
      if (A !== void 0 && Xt(A) && !(d && this.isRetiredReading(S, r))) m[S] = A, h[S] = A;
    }
    let y = et(h, e.unifiedRateLimitFallbackAvailable);
    if (!y) return e;
    for (let [S] of D) {
      let R = f[S];
      if (S === y.rateLimitType && m[S] === void 0 && R !== void 0) return Se({ ...y, unifiedRateLimitFallbackAvailable: R.unifiedRateLimitFallbackAvailable }, R.upgradePaths, e);
    }
    return Se(y, e.upgradePaths, e);
  }
  resetCurrentLimits() {
    this.currentLimits = { status: "allowed", unifiedRateLimitFallbackAvailable: false, isUsingOverage: false }, this.rawUtilization = {}, this.rawWindowLevels = {}, this.lastSeenWindows = {}, this.lastEmittedWindowParts = {}, this.lastEmittedGraceExtraUsageStatus = void 0, this.accountEpoch++, this.lastAppliedObservationAtMs = Date.now(), this.retireWindows(void 0, this.lastAppliedObservationAtMs), this.limitsObserved = false;
  }
  forgetHeldWindows(e) {
    let n = Date.now();
    this.retireWindows(e, n);
    for (let [d] of D) if (e === void 0 || e.includes(d)) delete this.rawWindowLevels[d];
    let { status: r, rateLimitType: s } = this.currentLimits;
    if (Ke() && r === "allowed_warning" && s !== void 0 && (e === void 0 || e.includes(s))) {
      let d = this.deriveTrackedLimits(ii(this.currentLimits), {}, n, n);
      if (!wn(this.currentLimits, d)) try {
        this.emitStatusChange(d);
      } catch (f) {
        l(f);
      }
    }
  }
  isRetiredReading(e, n) {
    let r = this.retiredAtMs[e];
    return r !== void 0 && n <= r;
  }
  retireWindows(e, n) {
    for (let [r] of D) {
      if (e !== void 0 && !e.includes(r)) continue;
      let s = this.retiredAtMs[r];
      if (s === void 0 || n > s) this.retiredAtMs[r] = n;
      let d = this.lastSeenWindows[r];
      if (d !== void 0 && d.observedAtMs <= n) delete this.lastSeenWindows[r];
    }
  }
  emitStatusChange(e) {
    let n = this.currentLimits;
    if (this.currentLimits = e, this.limitsObserved = true, tTe(this.rawUtilization.five_hour)) this.lastEmittedWindowParts.five_hour = V(this.rawUtilization.five_hour, this.rawWindowLevels.five_hour);
    if (tTe(this.rawUtilization.seven_day)) this.lastEmittedWindowParts.seven_day = V(this.rawUtilization.seven_day, this.rawWindowLevels.seven_day);
    if (tTe(this.rawUtilization.seven_day_overage_included)) this.lastEmittedWindowParts.seven_day_overage_included = V(this.rawUtilization.seven_day_overage_included, this.rawWindowLevels.seven_day_overage_included);
    if (this.lastEmittedGraceExtraUsageStatus = this.wrapUp.getZone()?.extraUsageStatus, this.statusChanged.emit(e), n.status === e.status && n.isUsingOverage === e.isUsingOverage) return;
    let r = Math.round((e.resetsAt ? e.resetsAt - Date.now() / 1e3 : 0) / 3600 * 10) / 10;
    a("tengu_claudeai_limits_status_changed", { status: c(e.status), previousStatus: c(n.status), rateLimitType: ce(e.rateLimitType), isUsingOverage: e.isUsingOverage, unifiedRateLimitFallbackAvailable: e.unifiedRateLimitFallbackAvailable, hoursTillReset: r });
  }
  restoreLimits(e, n) {
    this.currentLimits = e, this.limitsObserved = n, this.statusChanged.emit(e);
  }
  async probeQuotaStatus(e, n, r) {
    if (_t()) return null;
    if (!Jin(Et())) return null;
    if (ye()) return null;
    let s = this.accountEpoch;
    try {
      let d = await Je(e, n), f = this.extractQuotaStatusFromHeaders(d.headers, e, false, Date.now(), s, r);
      if (this.isFromPreviousAccount(s)) return null;
      return f ?? tt(W$t(d.headers), this.wrapUp.getZone() !== null);
    } catch (d) {
      if (d instanceof Dt) this.extractQuotaStatusFromError(d, "other", Date.now(), s, r);
      return null;
    }
  }
  extractQuotaStatusFromHeaders(e, n, r = false, s = Date.now(), d, f) {
    if (this.isFromPreviousAccount(d)) return null;
    let m = Et();
    if (!Jin(m)) {
      if (this.rawUtilization = {}, this.rawWindowLevels = {}, this.lastSeenWindows = {}, this.currentLimits.status !== "allowed" || this.currentLimits.resetsAt || this.currentLimits.rateLimitGraceActive) {
        let v = { status: "allowed", unifiedRateLimitFallbackAvailable: false, isUsingOverage: false };
        this.emitStatusChange(v);
      }
      return null;
    }
    let h = W$t(e), y = this.wrapUp.getZone(), { base: S, own: R, readings: A } = we(h, y !== null);
    if (Xe(h, f), WYs(h, s), r && !this.longContext1mOkLogged) this.longContext1mOkLogged = true, g("context_1m_entitlement");
    let L = this.isStaleObservation(s);
    if (this.applyWindowReadings(A, S, s, L), !L) {
      if (this.nearLimitWrapUpWindowKey !== null && Date.now() / 1e3 > this.nearLimitWrapUpWindowKey) this.pendingNearLimitWrapUpHint = false, this.nearLimitWrapUpWindowKey = null;
      let v = this.rawUtilization.five_hour;
      if (v !== void 0 && Number.isFinite(v.resets_at) && Number.isFinite(v.utilization) && v.resets_at * 1e3 > Date.now()) {
        let E = si(oA());
        if (v.utilization >= E && !UO()) {
          if (S.overageStatus === "allowed" || S.overageStatus === "allowed_warning") this.pendingNearLimitWrapUpHint = false;
          else if (this.nearLimitWrapUpWindowKey !== v.resets_at) this.pendingNearLimitWrapUpHint = true, this.nearLimitWrapUpWindowKey = v.resets_at;
        }
      }
      let w = this.deriveTrackedLimits(S, A, s, Date.now());
      if (!wn(this.currentLimits, w)) this.emitStatusChange(w);
      else {
        let E = tTe(this.rawUtilization.five_hour) ? this.rawUtilization.five_hour : void 0, x = tTe(this.rawUtilization.seven_day) ? this.rawUtilization.seven_day : void 0, I = tTe(this.rawUtilization.seven_day_overage_included) ? this.rawUtilization.seven_day_overage_included : void 0, P = this.rawWindowLevels;
        if (E !== void 0 && V(E, P.five_hour) !== this.lastEmittedWindowParts.five_hour || x !== void 0 && V(x, P.seven_day) !== this.lastEmittedWindowParts.seven_day || I !== void 0 && V(I, P.seven_day_overage_included) !== this.lastEmittedWindowParts.seven_day_overage_included || y?.extraUsageStatus !== this.lastEmittedGraceExtraUsageStatus) this.emitStatusChange(w);
      }
    } else {
      let { rateLimitGraceActive: v, ...w } = this.currentLimits, E = { ...y !== null && w.status === "allowed_warning" ? ti(w) : w, ...y !== null && { rateLimitGraceActive: true } };
      if (!wn(this.currentLimits, E) || y?.extraUsageStatus !== this.lastEmittedGraceExtraUsageStatus) this.emitStatusChange(E);
    }
    if (R.overageInUse === true) {
      let v = R.isUsingOverage === true && R.rateLimitType !== "seven_day_overage_included", w = w5(n);
      if (!v && !r && !FO() && w !== void 0 && !NG() && !njt() && !DZe(w)) ATn(true);
      this.overageInUse.emit(n, R.isUsingOverage === true, r);
    }
    return R;
  }
  resetGraceState() {
    this.wrapUp.leave();
  }
  resetNearLimitWrapUpState() {
    this.pendingNearLimitWrapUpHint = false, this.nearLimitWrapUpWindowKey = null;
  }
  extractGraceStatusFromHeaders(e, n, r = Date.now(), s) {
    if (n && !this.isFromPreviousAccount(s)) this.wrapUp.applyResponse(e, r);
  }
  consumePendingNearLimitWrapUpHint() {
    if (!this.pendingNearLimitWrapUpHint) return false;
    return this.pendingNearLimitWrapUpHint = false, !UO();
  }
  beginUsageLimitWait(e) {
    return this.usageLimitWaits.add(e), this.emitUsageLimitWaitsChanged(), () => {
      if (this.usageLimitWaits.delete(e)) this.emitUsageLimitWaitsChanged();
    };
  }
  emitUsageLimitWaitsChanged() {
    try {
      this.usageLimitWaitsChanged.emit();
    } catch (e) {
      l(e);
    }
  }
  extractQuotaStatusFromError(e, n, r = Date.now(), s, d) {
    let f = e.status === void 0 && yai(e) && Kt();
    if (this.isFromPreviousAccount(s) || !Jin(Et()) || e.status !== 429 && !f) return;
    if (Ae() === "gateway" && !e.headers?.get?.("anthropic-ratelimit-unified-status")) return;
    try {
      let m = this.isStaleObservation(r), h = this.currentLimits.status, y = this.currentLimits.isUsingOverage, S = this.rawUtilization.five_hour?.utilization, R = this.rawUtilization.seven_day?.utilization, A = this.rawUtilization.overage?.utilization, L = { ...this.currentLimits };
      if (e.headers) {
        let w = W$t(e.headers), E = we(w, this.wrapUp.getZone() !== null);
        if (L = E.own, this.applyWindowReadings(E.readings, E.base, r, m), !f) Xe(w, d);
        else if (Ae() !== "gateway") Y$t("out_of_credits", d);
        if (w.get("anthropic-ratelimit-unified-status") !== null) this.wrapUp.onRefused();
      }
      if (L = st(L, e), f) {
        let { overageInUse: w, ...E } = L;
        L = { ...E, overageStatus: "rejected", overageDisabledReason: "out_of_credits", isUsingOverage: false };
      }
      if ((h !== "rejected" || y) && !(h === "allowed" && !y && S === void 0 && R === void 0 && A === void 0) && !f) {
        let w = L.rateLimitType === "five_hour" ? S : L.rateLimitType?.startsWith("seven_day") ? R : L.rateLimitType === "overage" ? A : Math.max(S ?? 0, R ?? 0, A ?? 0);
        if (w === void 0 || w < 0.8) a("tengu_quota_mismatch", { priorStatus: c(h), priorIsUsingOverage: y, priorFiveHourUtilization: S, priorSevenDayUtilization: R, priorOverageUtilization: A, rateLimitType: ce(L.rateLimitType) ?? void 0, subscriptionType: ce(cr()) ?? void 0, hadPriorUtilizationData: S !== void 0 || R !== void 0 || A !== void 0 });
      }
      if (!m) try {
        this.quotaRejected.emit(L, n);
      } catch (w) {
        l(w);
      }
      if (!m && !wn(this.currentLimits, L)) this.emitStatusChange(L);
    } catch (m) {
      l(m);
    }
  }
}
var C = new nt();
function li() {
  return C.currentLimits;
}
function Y3() {
  return ai(C.rawUtilization);
}
function zFs() {
  return C.rawWindowLevels;
}
function gIo() {
  let e = C.currentWindows(Date.now()), n = {};
  for (let [r] of D) {
    let s = e[r];
    if (s) n[r] = { utilization: s.utilization, resets_at: s.resets_at };
  }
  return n;
}
function ai(e) {
  let n = Date.now(), r = {};
  for (let [s] of D) {
    let d = e[s];
    if (d !== void 0 && rt(d, n)) r[s] = d;
  }
  return r;
}
function rt(e, n) {
  let r = n / 1e3, s = r + 31536e3;
  return tTe(e) && e.resets_at > r && e.resets_at < s;
}
function Lm() {
  return C.accountEpoch;
}
function she() {
  return C.limitsObserved;
}
function jVn() {
  return C.lastAppliedObservationAtMs;
}
function Zle(e) {
  return C.statusChanged.subscribe(e);
}
function KFs(e) {
  return C.overageInUse.subscribe(e);
}
function WVn(e) {
  return C.quotaRejected.subscribe(e);
}
function VFs(e) {
  return C.beginUsageLimitWait(e);
}
function qFs() {
  return [...C.usageLimitWaits];
}
function YFs(e) {
  return C.usageLimitWaitsChanged.subscribe(e);
}
function GVn() {
  C.resetCurrentLimits();
}
function nDe(e) {
  C.forgetHeldWindows(e);
}
function qWe(e) {
  C.emitStatusChange(e);
}
function XFs(e, n) {
  C.restoreLimits(e, n);
}
async function Vgt(e, n) {
  await C.probeQuotaStatus(E0e(), e, n);
}
function JFs(e, n, r) {
  return C.probeQuotaStatus(e, n, r);
}
function hIo(e, n, r = false, s = Date.now(), d, f) {
  return C.extractQuotaStatusFromHeaders(e, n, r, s, d, f);
}
function zVn(e, n, r = Date.now(), s, d) {
  C.extractQuotaStatusFromError(e, n, r, s, d);
}
function Zin(e) {
  let n = W$t(e.headers ?? new globalThis.Headers());
  return st(tt(n, false), e);
}
function st(e, n) {
  return { ...e, status: "rejected", ...pIo(n) };
}
function QFs() {
  C.resetGraceState();
}
function ZFs() {
  C.resetNearLimitWrapUpState();
}
function eUs(e, n, r = Date.now(), s) {
  C.extractGraceStatusFromHeaders(e, n, r, s);
}
function yIo() {
  C.wrapUp.onMainTurnStart();
}
function tUs() {
  return C.wrapUp.takeTurnNote();
}
function nUs() {
  C.wrapUp.markStartNotePlaced();
}
function ui(e = Date.now()) {
  return C.wrapUp.continueAfterWrapUpAt(e);
}
function ean(e = Date.now()) {
  let n = ui(e);
  return n === null ? null : { status: "rejected", resetsAt: n.resetsAt, rateLimitType: n.rateLimitType, unifiedRateLimitFallbackAvailable: false };
}
function _Io() {
  return C.wrapUp.subagentNoteDue();
}
function YWe() {
  return C.wrapUp.getZone();
}
function rUs() {
  return C.consumePendingNearLimitWrapUpHint();
}
function at(e) {
  let n = e?.get?.($Ys);
  if (n === "service" || n === "channel" || n === "group_pool" || n === "organization") return n;
  return;
}
export {
  $Fs,
  $Vn,
  AFs,
  BFs,
  BVn,
  CFs,
  DFs,
  DHr,
  EFs,
  FFs,
  FVn,
  G$t,
  GFs,
  GVn,
  HFs,
  HHr,
  IFs,
  JFs,
  Jin,
  K$t,
  KFs,
  KWe,
  Kgt,
  LFs,
  LHr,
  LVn,
  Li,
  Lm,
  MFs,
  MHr,
  NFs,
  NJe,
  NVn,
  OFs,
  PFs,
  QFs,
  Qin,
  Qle,
  RFs,
  TFs,
  UFs,
  UVn,
  V$t,
  VFs,
  VWe,
  Vgt,
  W$t,
  WFs,
  WVn,
  XFs,
  Xin,
  Y$t,
  Y3,
  YFs,
  YWe,
  ZFs,
  Zin,
  Zle,
  _Io,
  _O,
  aIo,
  cIo,
  dIo,
  eTe,
  eUs,
  ean,
  fIo,
  gIo,
  hIo,
  iIo,
  jFs,
  jVn,
  kFs,
  lIo,
  li,
  mIo,
  nDe,
  nUs,
  oIo,
  pIo,
  q$t,
  qFs,
  qWe,
  rUs,
  sIo,
  she,
  tTe,
  tUs,
  uIo,
  xFs,
  yIo,
  z$t,
  zFs,
  zVn,
  zWe,
  zgt
};
