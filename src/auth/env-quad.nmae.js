// auth/env-quad.nmae.js — Claude Code 2.1.310 模块 chunk-nmaeg6kv.js
import { He } from "../fs/async-hooks.9s1z.js";
import { oz, sir, qY, adi, ldi, ddi, wKt, cdi, uK, C5r, yCt, ZKe, T5r, YNe } from "../shell/invalid-type.qnva.js";
import { Vt } from "../shared/chunk-9sbknd2z.js";
import { F, L, U, AW, uos, J, Il } from "../context/not-admin-owned.ersa.js";
import { d, v, G, Tie } from "../telemetry/anthropic-workspace-id.36ys.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { Le, Sr } from "../models/claude-3-5-sonnet.21mz.js";
import { fk } from "./oauth-2025-04-20.ke15.js";
import { i } from "../shared/environment.9a41.js";
import { _, vA, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { re } from "../shared/chunk-j79dwkaq.js";
import { St } from "../artifacts/cowritten-artifact-html.thm2.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { Te, Ai, op } from "../models/total-tokens-reminder.psq3.js";
import { jx, Hsi } from "../mcp/allowed-warning.j2d4.js";
import { Fs } from "../shared/chunk-abagh0tt.js";
import { Hn } from "../fs/utf-8.7pve.js";
import { ot } from "../fs/chunk-gzs70jxe.js";
import { oCt, zwn } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { nr } from "../remote/moved-directory.z3m0.js";
import { t1, fd, a6t, kc, nl, B_, Lw, Ef, oT, Ng, Ln, pR, Lh, f3o, vt, cp } from "../settings/global-config-and-gates.27xj.js";
import { D4r, Gai, HL, CZ, L4r, Kai } from "../shared/chunk-cg45s1mf.js";
import { AE, _qt, g5, r8r, dxe, Avn, DH } from "./profile-explicit.b7t3.js";
import { $Vt, vNe, _Se, Ikt, rsr, kai, Cai, D9o } from "../artifacts/cobalt-plinth-lovage.hxm5.js";
import { Joe } from "../workflows/chunk-exaq0a52.js";
import { zii } from "../git/ssh-placeholder.1144.js";
import { Ltt } from "./claude-desktop-3p.8h4z.js";
import { NQ } from "../shared/chunk-wwfwgwca.js";
import { GDe } from "../shared/chunk-jyhkt2nk.js";
import { Etr } from "../permissions/fewer-permission-prompts.w6e3.js";
import { use } from "../shared/chunk-zmrs49f3.js";
import { o, E, M, oe, C, u, me, B, T } from "../vendor/zod/string-format.k395.js";
import { et } from "../shared/chunk-tftf1nn4.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
import { sd } from "../remote/chunk-t0kv6pst.js";
import { readFileSync as Oe } from "fs";
import { join as xe, resolve as De } from "path";
function BDe() {
  if (sd()) return "tool_container_daemon";
  if (Il()) return "ccs_tenant";
  return nr() && Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) ? "hosted_worker" : "none";
}
import { createHash as ve } from "crypto";
import { constants as be } from "fs";
import { unlink as Ae, open as ke } from "fs/promises";
function _Zn(e) {
  return e !== null && e.admitsOnly !== true;
}
var P = 8, X = 4096, Re = ".stamp.json", Z = f(() => u({ v: T(1), identity: o().regex(/^[0-9a-f]{64}$/), kind: B(["org", "key", "wif", "token"]), sha: o().min(1).max(128), confirmed_at: E().int().nonnegative(), hipaa_seen: C(o().regex(/^[0-9a-f]{64}$/)).max(P).default([]), hipaa_seen_incomplete: M().optional(), hipaa_ruled_out: C(o().regex(/^[0-9a-f]{64}$/)).max(P).optional() }));
function Att(e) {
  return `${e}${Re}`;
}
function b_e(e) {
  return ve("sha256").update(e.descriptor).digest("hex");
}
function zce(e) {
  return et(e).slice(0, 32);
}
var Q = { seen: [], incomplete: false, ruledOut: [] };
function Uhn(e) {
  return { seen: e.hipaa_seen, incomplete: e.hipaa_seen_incomplete === true, ruledOut: e.hipaa_ruled_out ?? [] };
}
function zGr(e, n) {
  switch (e.kind) {
    case "ok":
      return Uhn(e.stamp);
    case "absent":
      return n;
    case "unusable":
      return { seen: n.seen, incomplete: true, ruledOut: [] };
  }
}
function ee(e) {
  return e.incomplete ? { hipaa_seen_incomplete: true, hipaa_ruled_out: e.ruledOut.slice(-P) } : {};
}
function ne(e, n, r) {
  if (e === null || e.sha !== r) return { kind: "unstamped", hipaaSeen: e?.hipaa_seen ?? [] };
  if (e.identity !== n) return { kind: "foreign", hipaaSeen: e.hipaa_seen };
  return { kind: "match", stamp: e };
}
var Ee = /* @__PURE__ */ new Set(["EMFILE", "ENFILE", "EAGAIN", "EBUSY", "EINTR"]);
function te(e) {
  let n = v(e);
  return n !== void 0 && Ee.has(n) ? { kind: "unusable", cause: "io", code: n } : { kind: "unusable", cause: "content" };
}
function SZn(e) {
  return e.kind === "unusable" && e.cause === "io";
}
function I(e) {
  let n = C5r(Att(e), X, { refuseLinkOnWindows: oz() });
  switch (n.kind) {
    case "absent":
      return { kind: "absent" };
    case "refused":
      return { kind: "unusable", cause: "content" };
    case "error":
      return t(`Policy limits: stamp unreadable (${d(n.error)}); cache reads as unvouched`), te(n.error);
    case "ok":
      try {
        let r = Z().safeParse(ot(n.text, false));
        return r.success ? { kind: "ok", stamp: r.data } : { kind: "unusable", cause: "content" };
      } catch {
        return { kind: "unusable", cause: "content" };
      }
  }
}
async function Rtt(e) {
  let n;
  try {
    n = await ke(Att(e), be.O_RDONLY | Fs);
    let r = await n.stat();
    if (!r.isFile() || r.size > X) return { kind: "unusable", cause: "content" };
    let s = Z().safeParse(ot(await n.readFile({ encoding: "utf-8" }), false));
    return s.success ? { kind: "ok", stamp: s.data } : { kind: "unusable", cause: "content" };
  } catch (r) {
    return G(r) ? { kind: "absent" } : te(r);
  } finally {
    await n?.close().catch(() => {
    });
  }
}
function qzo({ principal: e, bodySha: n, confirmedAt: r, bodyTaints: s, previous: l, authority: p }) {
  let c = b_e(e), y = s.includes("hipaa"), h, m;
  if (p === "prior_evidence" && !y) h = l.seen.slice(), m = l.ruledOut.slice();
  else if (h = l.seen.filter((g) => g !== c), m = l.ruledOut.filter((g) => g !== c), y) h.push(c);
  else if (l.incomplete) m.push(c);
  let R = h.length > P;
  return { v: 1, identity: c, kind: e.kind, sha: n, confirmed_at: r, hipaa_seen: h.slice(-P), ...ee({ ...l, incomplete: l.incomplete || R, ruledOut: m }) };
}
var Ie = "0".repeat(64);
function rZs(e) {
  return { v: 1, identity: Ie, kind: "token", sha: "none", confirmed_at: 0, hipaa_seen: e.seen.slice(-P), ...ee(e) };
}
async function VGr(e, n) {
  await Hn(Att(e), _(n), 384);
}
async function KGr(e, n) {
  try {
    return await VGr(e, n), true;
  } catch (r) {
    return t(`Policy limits: failed to write the cache stamp - ${d(r)}`), false;
  }
}
async function oZs(e) {
  try {
    await Ae(Att(e));
  } catch (n) {
    if (!G(n)) t(`Policy limits: failed to remove the cache stamp - ${d(n)}`);
  }
}
class ie {
  notice = null;
  changed = He();
  replaceNotice(e) {
    if (this.notice === e) return;
    if (this.notice && e && this.notice.text === e.text && this.notice.url === e.url) return;
    this.notice = e, this.changed.emit(this.notice);
  }
}
var we = new W(() => new ie());
function w() {
  return we.of(U().host);
}
function se(e) {
  w().replaceNotice(e);
}
function Gwt() {
  return w().notice;
}
function sZs(e) {
  return w().changed.subscribe(e);
}
var Yzo = { subscribe: (e) => w().changed.subscribe(e), getSnapshot: Gwt };
function Ttt(e) {
  return /[\u0000-\u001f\u007f-\u009f]/.test(e) || NQ(e);
}
function D(e) {
  let n = re(vA(e, "").toLowerCase(), 64).trim();
  return /^[a-z0-9_-]+$/.test(n) ? n : "";
}
var Wwt = 16;
function GGr(e) {
  let n = typeof e === "object" && e !== null && "compliance_taints" in e ? e.compliance_taints : void 0;
  if (!Array.isArray(n)) return 0;
  let r = F(n, (l) => typeof l !== "string" || D(l) === ""), s = L(n.filter((l) => typeof l === "string").map(D).filter((l) => l.length > 0));
  return r + Math.max(0, s.length - Wwt);
}
var ae = f(() => u({ restrictions: me(o(), u({ allowed: M() })), compliance_taints: C(oe()).default([]).transform((e, n) => {
  let r = L(e.filter((s) => typeof s === "string").map(D).filter((s) => s.length > 0)).slice(0, Wwt);
  if (e.length > 0 && r.length === 0) n.addIssue({ code: "custom", message: "compliance_taints had entries but none were well-formed regime names" });
  return r;
}), monitoring_notice: u({ text: o().max(500).transform((e) => vA(e, "", { keepEmojiJoiners: true })), url: o().max(2048).url().startsWith("https://").refine((e) => !Ttt(e)).nullish().catch(null) }).nullable().default(null).catch(null), defaults: me(o(), oe()).default({}).catch({}), core_skills: C(o().max(128)).max(256).optional().catch([]), artifact_create_notice: u({ text: o().transform((e) => vA(re(e, 500), " ", { keepEmojiJoiners: true }).replace(/\s+/g, " ").trim()).pipe(o().min(1)) }).nullish().catch({ text: "Your organization requires a person to approve each new artifact." }) })), O6e = { restrictions: {}, compliance_taints: [], monitoring_notice: null, defaults: {} }, eZs = ["ENOTFOUND", "EAI_AGAIN", "ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "EHOSTUNREACH", "ENETUNREACH", "EPIPE", "CERT_ERROR", "ABORTED", "OTHER"], tZs = ["invalid_request_error", "authentication_error", "permission_error", "not_found_error", "rate_limit_error"], yZn = ["ip_not_in_allowed_range", "claude_code_key_creator_not_member", "organization_disabled", "organization_on_hold", "restricted_regime_endpoint", "oauth_not_allowed_for_organization", "oauth_scope_insufficient", "token_expired", "oauth_application_deactivated"], nZs = ["token_expired", "token_revoked", "token_invalid", "credential_invalid", "org_access_revoked", "workspace_revoked", "application_deactivated"];
var qGr = "policy-limits.json", Me = 5e3, le = 256, ue = { kind: "absent" }, YGr = 3e4;
function XGr() {
  return sir() ? ue : I(Ox());
}
function JGr(e) {
  return e.kind === "absent" && !sir() ? I(Ox()) : e;
}
class iZs {
  sessionCache = null;
  lastFetchOutcome = null;
  settledWithoutVerdictFor = null;
  failOpenVerdict = false;
  sessionFromServerFetch = false;
  lastServedCoreSkills = null;
  verdictEnvBearerDigest = null;
  diskAdoptionSuppressed = false;
  diskAdoptionEpoch = 0;
  storageV5 = void 0;
  lastStampVerdict = "none";
  storedCopyTrust = "not_asked";
  lastStampMatchedIdentity = null;
  hipaaEvidence = Q;
  hipaaSeenUnreadable = false;
  diskBodyChecksum = null;
  diskConfirmedAtMs = null;
  sessionBodyReceivedAtMs = null;
  diskRefusedAtMs = null;
  hipaaEvidenceLoaded = false;
  hintedTaints = [];
  hintedDeniedKeys = [];
  hintedEnforcedKeys = [];
  sessionAttributed = false;
  attributedBearerDigest = null;
  sessionVerdictDisowned = false;
  principalRung = "none";
  evidenceRereadForBearer = void 0;
  wifRecordedOrg = void 0;
  wifAccountDiverged = false;
  wifSourceLocation = void 0;
  wifRecordProfile = void 0;
  oauthPrincipalMemo = null;
  storedLoginAccountAtWire = null;
  storedLoginNotedTokenDigest = null;
  tunnelSocket = void 0;
  machinePinsSignIn = void 0;
  cacheRevision = 0;
  verdictChanged = He();
  heldStartSignal = He();
  replaceSessionCache(e, n = false, r = false) {
    if (this.failOpenVerdict = e !== null && (n || this.failOpenVerdict && (r || e === this.sessionCache)), this.sessionCache = e, e?.core_skills !== void 0) this.lastServedCoreSkills = this.sessionFromServerFetch ? e.core_skills : this.narrowedServedList(e.core_skills);
    if (!r) this.verdictEnvBearerDigest = null;
    if (e === null) this.sessionAttributed = false, this.attributedBearerDigest = null, this.sessionVerdictDisowned = false, this.evidenceRereadForBearer = void 0;
    this.cacheRevision++;
    let s = D4r(this.effectiveTaints());
    if (se(e?.monitoring_notice ?? null), s) t1();
    this.emitVerdictChanged();
  }
  effectiveTaints(e = this.sessionCache?.compliance_taints ?? []) {
    return this.hintedTaints.length === 0 ? e : L([...this.hintedTaints, ...e]).slice(0, Wwt);
  }
  dropHintedTaints() {
    if (this.hintedTaints.length === 0 && this.hintedDeniedKeys.length === 0 && this.hintedEnforcedKeys.length === 0) return;
    if (this.hintedTaints = [], this.hintedDeniedKeys = [], this.hintedEnforcedKeys = [], this.cacheRevision++, D4r(this.effectiveTaints())) t1();
    this.emitVerdictChanged();
  }
  hintFromRefusedBody(e) {
    if (this.sessionCache !== null && this.sessionAttributed) return;
    let n = e.compliance_taints.filter((h) => f6o.some(([m]) => m === h)), r = L([...this.hintedTaints, ...n]), s = Object.entries(e.restrictions).filter(([h, m]) => m?.allowed === false && !N(h)).map(([h]) => h), l = L([...this.hintedDeniedKeys, ...s]).slice(0, le), p = Object.entries(e.restrictions).filter(([h, m]) => m?.allowed === true && N(h)).map(([h]) => h), c = L([...this.hintedEnforcedKeys, ...p]).slice(0, le), y = false;
    if (e.core_skills !== void 0) {
      let h = this.narrowedServedList(e.core_skills);
      if (this.lastServedCoreSkills === null || h.join(`
`) !== this.lastServedCoreSkills.join(`
`)) this.lastServedCoreSkills = h, y = true;
    }
    if (!y && r.length === this.hintedTaints.length && l.length === this.hintedDeniedKeys.length && c.length === this.hintedEnforcedKeys.length) return;
    if (this.hintedTaints = r, this.hintedDeniedKeys = l, this.hintedEnforcedKeys = c, this.cacheRevision++, D4r(this.effectiveTaints())) t1();
    this.emitVerdictChanged();
  }
  narrowedServedList(e) {
    let n = new Set(this.lastServedCoreSkills ?? Etr);
    return e.filter((r) => n.has(r));
  }
  emitVerdictChanged() {
    try {
      this.heldStartSignal.emit();
    } catch (e) {
      t(`Policy limits: a held-start listener threw: ${d(e)}`, { level: "error" });
    }
    if (qY()) return;
    try {
      this.verdictChanged.emit();
    } catch (e) {
      t(`Policy limits: a verdict-change listener threw: ${d(e)}`, { level: "error" });
    }
  }
}
var cbi = new W(() => new iZs());
function a() {
  return cbi.of(U().host);
}
function Bhn(e) {
  let n = a();
  if (n.sessionFromServerFetch = e !== null, e === null) n.sessionBodyReceivedAtMs = null;
  n.replaceSessionCache(e);
}
function Xzo(e) {
  a().sessionBodyReceivedAtMs = e;
}
function Jzo() {
  return a().sessionBodyReceivedAtMs;
}
function bZn(e) {
  let n = a();
  n.sessionFromServerFetch = false, n.replaceSessionCache(e);
}
function QGr(e) {
  a().verdictEnvBearerDigest = e;
}
function sGt() {
  let e = a().verdictEnvBearerDigest;
  if (e === null) return null;
  let n = B_();
  if (wKt() || !n || Ltt({ anthropicAuthEnabled: nl(), oauthScopes: Ln()?.scopes }) || Lw() != null) return "gone";
  return zce(n) === e ? "same" : "replaced";
}
function Qzo() {
  let e = a();
  e.sessionFromServerFetch = false, e.sessionBodyReceivedAtMs = null, e.replaceSessionCache(O6e, true);
}
function iGt(e) {
  let n = a(), r = n.sessionCache !== null;
  if (!r) n.sessionFromServerFetch = false, n.sessionAttributed = n.lastStampVerdict === "match", n.attributedBearerDigest = n.sessionAttributed ? he() : null, n.sessionVerdictDisowned = n.lastStampVerdict === "disabled", n.evidenceRereadForBearer = void 0, n.sessionBodyReceivedAtMs = null;
  n.replaceSessionCache(e, false, r);
}
function Zzo(e) {
  if (Gai(e)) t1();
}
function ZGr(e, n, r = true) {
  let s = a();
  if (s.lastFetchOutcome = e, e === null || e.success) s.settledWithoutVerdictFor = null;
  else if (!e.retrying && (r || !ezr(e))) {
    let l = e.errorCode === "network_error" || e.errorCode === "timeout" || e.errorCode === "request_failed" && e.httpStatus !== null && (e.httpStatus === 404 || e.httpStatus >= 500);
    s.settledWithoutVerdictFor = l ? n ?? aZs() ?? "" : null;
  }
  s.cacheRevision++, s.emitVerdictChanged();
}
function ezr(e) {
  return e.errorCode === "network_error" || e.errorCode === "timeout" || e.errorCode === "request_failed" && (e.httpStatus === null || e.httpStatus >= 500 || e.httpStatus >= 400 && !Tie(e.httpStatus));
}
function Vce() {
  return a().lastFetchOutcome;
}
function e6o() {
  a().storageV5 = void 0;
}
function vAe() {
  return gL() !== void 0 || J();
}
function wZn() {
  return BDe() !== "none";
}
function EZn() {
  return vAe() || a().diskAdoptionSuppressed;
}
function mL() {
  return a().sessionCache;
}
function jhn() {
  let e = a();
  e.diskAdoptionSuppressed = true, e.diskAdoptionEpoch++;
}
function xtt() {
  return a().diskAdoptionEpoch;
}
function vZn() {
  a().diskAdoptionSuppressed = false;
}
function kZn() {
  return a().diskAdoptionSuppressed;
}
function aGt() {
  return a().cacheRevision;
}
function t6o() {
  return qY() ? -1 : aGt();
}
function ZO(e) {
  return a().verdictChanged.subscribe(e);
}
function Ptt(e) {
  return a().heldStartSignal.subscribe(e);
}
function Ox() {
  return xe(Le(), qGr);
}
function gL() {
  let e = a();
  if (e.tunnelSocket === void 0) {
    let n = i.ANTHROPIC_UNIX_SOCKET;
    e.tunnelSocket = n && zii({ ANTHROPIC_UNIX_SOCKET: n, CLAUDE_CODE_OAUTH_TOKEN: i.CLAUDE_CODE_OAUTH_TOKEN, ANTHROPIC_API_KEY: i.ANTHROPIC_API_KEY, ANTHROPIC_AUTH_TOKEN: i.ANTHROPIC_AUTH_TOKEN }) ? n : null;
  }
  return e.tunnelSocket ?? void 0;
}
function n6o() {
  a().tunnelSocket = void 0;
}
function pe() {
  let e = a();
  if (e.machinePinsSignIn !== void 0) return e.machinePinsSignIn;
  let n = zwn();
  if (oCt()) e.machinePinsSignIn = n;
  return n;
}
function r6o() {
  a().machinePinsSignIn = void 0;
}
var Whn = /* @__PURE__ */ new Set(["prosumer_oauth", "third_party_provider", "custom_base_url"]);
function tzr(e = {}) {
  if (Te() !== "firstParty") return "third_party_provider";
  if (!e.skipBaseUrlCheck && !gL() && !Ai()) return "custom_base_url";
  return;
}
function Mh() {
  return OV() === void 0;
}
function OV(e = {}) {
  let n = tzr(e);
  if (n !== void 0) return n;
  if (gL()) return;
  try {
    let { key: s } = oT({ skipRetrievingKeyFromApiKeyHelper: true });
    if (s) return;
  } catch {
  }
  if (kc()) return;
  if (a6t() && !wKt()) return;
  let r = Ln();
  if (!r?.accessToken) return "no_auth";
  if (!r.scopes?.includes(fk)) return "oauth_no_inference_scope";
  if (r.subscriptionType == null) return;
  if (r.subscriptionType !== "enterprise" && r.subscriptionType !== "team") return pe() ? void 0 : "prosumer_oauth";
  return;
}
function lGt() {
  let e = a();
  if (z() && e.storageV5 !== void 0 && e.sessionCache) return e.sessionCache;
  if (EZn()) return a().sessionCache;
  if (e.diskRefusedAtMs !== null && Date.now() - e.diskRefusedAtMs < Me) return null;
  let n = XGr();
  if (!e.hipaaEvidenceLoaded && !sir()) A(n);
  e.storedCopyTrust = "not_asked";
  let r;
  try {
    r = RZn(Oe(Ox(), "utf-8"));
  } catch {
    return null;
  }
  if (r === null) return null;
  try {
    return nzr(r, JGr(n));
  } catch (s) {
    return t(`Policy limits: cache admission failed (${d(s)}); cold start`, { level: "error" }), null;
  }
}
function nzr(e, n) {
  let r = a();
  if (sir()) return r.lastStampVerdict = "disabled", r.lastStampMatchedIdentity = null, r.diskConfirmedAtMs = null, r.diskRefusedAtMs = null, H(e, void 0);
  let s = uK(Ott(e));
  if (A(n), n.kind === "absent") return r.lastStampVerdict = "legacy", r.lastStampMatchedIdentity = null, r.diskBodyChecksum = s, r.diskConfirmedAtMs = null, r.diskRefusedAtMs = null, H(e, s);
  let l = n.kind === "ok" ? n.stamp : null, p = hY(), c = p === null ? "" : b_e(p), y = ne(l, c, s);
  switch (r.lastStampMatchedIdentity = null, y.kind) {
    case "match":
      r.lastStampVerdict = "match", r.lastStampMatchedIdentity = c, r.diskBodyChecksum = s, r.diskConfirmedAtMs = y.stamp.confirmed_at, r.diskRefusedAtMs = null;
      let h = H(e, s);
      if (h !== null) r.dropHintedTaints();
      return h;
    case "unstamped":
      return r.lastStampVerdict = "torn", r.diskBodyChecksum = null, r.diskConfirmedAtMs = null, r.diskRefusedAtMs = Date.now(), r.hintFromRefusedBody(e), t("Policy limits: the cache stamp does not vouch for the cached body; cold start (its compliance taints and explicit denials still deny)"), null;
    case "foreign":
      return r.lastStampVerdict = "foreign", r.diskBodyChecksum = null, r.diskConfirmedAtMs = null, r.diskRefusedAtMs = Date.now(), r.hintFromRefusedBody(e), t("Policy limits: the cache was written under another credential's identity; cold start (its compliance taints and explicit denials still deny until this credential's verdict lands)"), null;
  }
}
function H(e, n) {
  let r = a();
  if (!oz()) return r.storedCopyTrust = "not_asked", e;
  let s, l;
  try {
    l = { orgs: GDe() };
  } catch (p) {
    t(`Policy limits: the admin organization pin is not known: ${d(p)}`), l = void 0;
  }
  if (l === void 0) s = "org_pin_unknown";
  else try {
    let p = T5r({ kind: "policy-limits", cachePath: Ox(), body: Ott(e), bodySha: n ?? uK(Ott(e)), account: cp(), pinnedOrgs: l.orgs, nowMs: Date.now(), roots: YNe() });
    if (p.trusted) return r.storedCopyTrust = p, e;
    s = p.reason;
  } catch (p) {
    t(`Policy limits: the gate on a stored copy failed: ${d(p)}`, { level: "error" }), s = "error";
  }
  return r.storedCopyTrust = { trusted: false, reason: s }, r.diskBodyChecksum = null, r.diskConfirmedAtMs = null, r.diskRefusedAtMs = Date.now(), r.hintFromRefusedBody(e), t(`Policy limits: the stored copy is not trusted at rest (${s}); cold start (its compliance taints and explicit denials still deny)`), null;
}
function hY() {
  let e = a();
  if (e.principalRung = "none", gL() !== void 0) return e.principalRung = "tunnel", null;
  let n = null, r = "none";
  try {
    ({ key: n, source: r } = oT());
  } catch {
  }
  if (!n && kc()) {
    if (e.principalRung = "wif", e.wifAccountDiverged) return null;
    let s = AE(), l = i.ANTHROPIC_PROFILE, p;
    try {
      if (p = (s === "env-quad" ? i.ANTHROPIC_ORGANIZATION_ID?.trim() : g5()?.organizationUuid?.trim()) || "", p && e.wifSourceLocation === void 0) {
        if (s === "profile-implicit") {
          let m = DH();
          e.wifRecordProfile = m === null ? void 0 : dxe(m);
        } else if (s === "profile-explicit") e.wifRecordProfile = l;
        e.wifSourceLocation = K(s);
      }
    } catch (m) {
      return t(`Policy limits: WIF profile unreadable (${d(m)}); its policy verdicts are session-only until restart`), e.wifAccountDiverged = true, null;
    }
    if (e.wifRecordedOrg === void 0) e.wifRecordedOrg = p.toLowerCase() || null;
    else if (e.wifRecordedOrg !== (p.toLowerCase() || null)) return t("Policy limits: the WIF source now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart"), e.wifAccountDiverged = true, null;
    if (!p) return null;
    let c = s === "env-quad" ? null : DH(), y = s === "env-quad" ? K("env-quad") : l ? q(c, l) : void 0;
    if (s === "profile-implicit" && l !== void 0 && l !== e.wifRecordProfile || s === "profile-explicit" && (l === void 0 || l !== e.wifRecordProfile) || y !== void 0 && y !== e.wifSourceLocation || y === void 0 && s !== "env-quad" && e.wifSourceLocation !== void 0 && (c === null ? e.wifSourceLocation !== "" : !e.wifSourceLocation.startsWith(q(c, "")))) return t("Policy limits: the environment now selects a different WIF source than the one this process derived its principal from; its policy verdicts are session-only until restart"), e.wifAccountDiverged = true, null;
    let h = Vt(p);
    if (h) return O(h);
    return { kind: "wif", descriptor: `wif:${zce([e.wifSourceLocation, p.toLowerCase()].join("\0"))}` };
  }
  if (vt()) {
    let s = Ln()?.accessToken;
    if (s) return e.principalRung = "oauth", Fe(s);
  }
  if (r === "apiKeyHelper") return e.principalRung = "helper", null;
  if (n) return e.principalRung = "key", { kind: "key", descriptor: `key:${zce(n)}` };
  return null;
}
function o6o() {
  let e = a();
  if (e.wifAccountDiverged || Lw() || !kc()) return;
  let n;
  try {
    n = e.wifSourceLocation !== void 0 && K(AE()) !== e.wifSourceLocation;
  } catch (s) {
    t(`Policy limits: WIF profile selection unreadable (${d(s)}); its policy verdicts are session-only until restart`), e.wifAccountDiverged = true;
    return;
  }
  if (n) {
    e.wifAccountDiverged = true, t("Policy limits: the active WIF source moved since this process derived its principal; its policy verdicts are session-only until restart");
    return;
  }
  let r;
  try {
    if (AE() === "env-quad") r = i.ANTHROPIC_ORGANIZATION_ID?.trim().toLowerCase() || null;
    else _qt(), r = g5()?.organizationUuid?.trim().toLowerCase() ?? null;
  } catch (s) {
    t(`Policy limits: WIF account record unreadable (${d(s)}); its policy verdicts are session-only until restart`), e.wifAccountDiverged = true;
    return;
  }
  if (e.wifRecordedOrg === void 0) e.wifRecordedOrg = r;
  else if (e.wifRecordedOrg !== r) e.wifAccountDiverged = true, t("Policy limits: the WIF profile now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart");
}
function Rxi() {
  let e = a();
  try {
    if (Lw() || !kc() || AE() === "env-quad") return "not_in_use";
    let n = DH(), r = n === null ? void 0 : r8r(n, e.wifRecordProfile ?? Avn(n));
    if (r === void 0) return "unreadable";
    let s = ce(g5()), l = e.wifRecordedOrg === void 0 ? s : e.wifRecordedOrg;
    if (ce(r) !== l) return "moved";
    return s === l ? "same" : "memory_differs";
  } catch {
    return "unreadable";
  }
}
function ce(e) {
  let n = e?.organizationUuid;
  return typeof n === "string" ? n.trim().toLowerCase() || null : null;
}
async function rzr(e, n) {
  let r = Ln()?.accessToken;
  if (!r) return;
  let s = a(), l = await Lh(n);
  if (l !== "store") {
    if (l !== "none") s.storedLoginNotedTokenDigest = zce(r);
    return;
  }
  let p = await f3o(e), c = Ln()?.accessToken;
  if (!c) return;
  s.storedLoginNotedTokenDigest = zce(c), s.storedLoginAccountAtWire = { tokenDigest: zce(c), organizationUuid: c === r ? p : null };
}
function s6o() {
  let e = Ln()?.accessToken;
  if (!e) return false;
  let n = a(), r = zce(e);
  if (n.storedLoginNotedTokenDigest !== r) return true;
  let s = n.storedLoginAccountAtWire;
  return s !== null && s.tokenDigest === r && s.organizationUuid !== (Vt(cp()?.organizationUuid) ?? null);
}
function Fe(e) {
  let n = a(), r = cp(), s = Vt(i.CLAUDE_CODE_ORGANIZATION_UUID), l = zce(e), p = n.storedLoginAccountAtWire, c = p !== null && p.tokenDigest === l ? p.organizationUuid : void 0, y = [l, s ?? "", r?.organizationUuid ?? "", c === void 0 ? "" : `fresh:${c ?? "-"}`, i.CLAUDE_CODE_OAUTH_TOKEN ? "env" : ""].join("|"), h = n.oauthPrincipalMemo;
  if (h?.key === y && (h.expiresAtMs === null || Date.now() < h.expiresAtMs)) return h.principal;
  let m = { kind: "token", descriptor: `token:${l}` }, R = false, g = pR();
  switch (g) {
    case "store": {
      let S = Vt(r?.organizationUuid) ?? null;
      if (c !== void 0 && c !== S) m = { kind: "token", descriptor: `token:${l}`, unclassified: true };
      else if (S) m = O(S);
      else m = { kind: "token", descriptor: `token:${l}`, storedLoginOrgless: true };
      break;
    }
    case "env":
    case "fd":
      if (g === "fd" && AW() && !fd()) {
        let S = Vt(uos()), Pe = Vt(r?.organizationUuid);
        m = S !== null && S.toLowerCase() === Pe?.toLowerCase() ? { ...O(S), admitsOnly: true } : null, R = true;
      } else if (s) m = { ...O(s), bearerDigest: l };
      break;
    case "none":
      m = { kind: "token", descriptor: `token:${l}`, unclassified: true };
      break;
  }
  return n.oauthPrincipalMemo = { key: y, principal: m, daemonSnapshotWorker: R, expiresAtMs: g === "none" || m === null ? Date.now() + YGr : null }, m;
}
function O(e) {
  return { kind: "org", descriptor: `org:${e.toLowerCase()}` };
}
function ozr() {
  let e = a();
  e.sessionAttributed = true, e.attributedBearerDigest = he(), e.sessionVerdictDisowned = false, e.evidenceRereadForBearer = void 0, e.dropHintedTaints();
}
function fe() {
  let e = Ln()?.accessToken;
  return e ? zce(e) : null;
}
function he() {
  let e = a();
  try {
    hY();
  } catch {
    return null;
  }
  return e.principalRung === "oauth" ? fe() : null;
}
function dGt() {
  let e = a(), n = !e.sessionVerdictDisowned;
  if (e.sessionAttributed = false, e.attributedBearerDigest = null, e.sessionVerdictDisowned = true, e.evidenceRereadForBearer = void 0, n) e.cacheRevision++, e.emitVerdictChanged();
}
function aZs() {
  let e = hY();
  return e === null ? null : b_e(e);
}
function CZn() {
  let e = a().storedCopyTrust;
  return e === "not_asked" ? e : yCt(e);
}
function i6o() {
  return ZKe(a().storedCopyTrust);
}
function TZn() {
  return a().lastStampVerdict;
}
function a6o() {
  return a().lastStampMatchedIdentity;
}
function szr() {
  let e = a();
  if (!e.hipaaEvidenceLoaded) A(ye());
  return e.hipaaEvidence;
}
function A(e) {
  let n = a();
  if (n.hipaaEvidenceLoaded = !SZn(e), e.kind === "ok") n.hipaaEvidence = Uhn(e.stamp);
  else if (e.kind === "unusable" && !SZn(e)) n.hipaaSeenUnreadable = true;
}
function ye() {
  return vAe() ? ue : I(Ox());
}
function AZn() {
  return a().hipaaEvidence;
}
function l6o() {
  let e;
  try {
    e = hY();
  } catch (s) {
    t(`Policy limits: principal unreadable for the evidence tier (${d(s)}); judged on the machine's evidence`, { level: "error" }), e = { kind: "token", descriptor: "token:unreadable", unclassified: true };
  }
  if (e === null || e.admitsOnly === true) {
    let s = a().oauthPrincipalMemo;
    if (e === null && (!s?.daemonSnapshotWorker || s.principal !== null)) return false;
    let l = szr();
    return l.seen.length > 0 || l.incomplete;
  }
  let n = szr();
  if (j(e)) {
    let s = e.storedLoginOrgless === true && e.unclassified !== true && n.ruledOut.includes(b_e(e));
    return n.seen.length > 0 || n.incomplete && !s;
  }
  let r = b_e(e);
  return n.seen.includes(r) || n.incomplete && !n.ruledOut.includes(r);
}
function j(e) {
  return e.unclassified === true || e.storedLoginOrgless === true;
}
function izr(e, n, r) {
  let s = a();
  s.diskBodyChecksum = e, s.diskConfirmedAtMs = r, s.hipaaEvidence = n, s.hipaaEvidenceLoaded = true, s.diskRefusedAtMs = null;
}
function Itt(e) {
  let n = a(), { hipaaEvidence: r, hipaaSeenUnreadable: s } = n;
  if (A(e), s !== n.hipaaSeenUnreadable || !Ne(r, n.hipaaEvidence)) n.cacheRevision++, n.emitVerdictChanged();
}
function Ne(e, n) {
  return e.incomplete === n.incomplete && e.seen.length === n.seen.length && e.seen.every((r, s) => r === n.seen[s]) && e.ruledOut.length === n.ruledOut.length && e.ruledOut.every((r, s) => r === n.ruledOut[s]);
}
function d6o() {
  return a().diskBodyChecksum;
}
function c6o() {
  return a().diskConfirmedAtMs;
}
function cGt() {
  let e = a();
  e.diskBodyChecksum = null, e.diskConfirmedAtMs = null, e.diskRefusedAtMs = null, e.hipaaEvidenceLoaded = false, e.lastStampVerdict = "none", e.lastStampMatchedIdentity = null, e.storedCopyTrust = "not_asked", e.dropHintedTaints();
}
function RZn(e) {
  let n = Ghn(ot(e, false));
  return n.success ? n.data : null;
}
var ge = /* @__PURE__ */ new WeakMap();
function Ghn(e) {
  let n = ae().safeParse(e);
  if (n.success) ge.set(n.data, e);
  return n;
}
function Ott(e) {
  return ge.get(e) ?? e;
}
function azr(e, n) {
  let r = a();
  if (r.storageV5 = e, n !== null && r.sessionCache === null && !r.diskAdoptionSuppressed) iGt(n);
}
var u6o = { allow_product_feedback: { deniedUnder: ["hipaa", "zdr"], serverPopulated: true, onCacheMiss: "deny", label: "Feedback", verb: "is", requirementId: "HIPAA-R1" }, allow_web_fetch: { deniedUnder: ["hipaa"], serverPopulated: true, onCacheMiss: "allow", label: "Web fetch", verb: "is", requirementId: "HIPAA-R3" }, allow_memory_sync: { deniedUnder: ["hipaa", "zdr"], onCacheMiss: "allow", label: "Memory sync", verb: "is", requirementId: "HIPAA-R5", hardBlockUnder: ["hipaa"] }, allow_design_sync: { deniedUnder: ["hipaa"], onCacheMiss: "allow", label: "Design sync", verb: "is", requirementId: "HIPAA-R9" }, allow_channels: { deniedUnder: ["hipaa"], onCacheMiss: "deny", onFailOpenVerdict: "deny", label: "Channels", verb: "are", requirementId: "HIPAA-R71" }, ...{}, allow_projects_tool: { deniedUnder: ["hipaa"], onCacheMiss: "hold", label: "Projects", verb: "are", requirementId: "HIPAA-R17", hardBlockUnder: ["hipaa"] }, allow_claude_browser_extension: { deniedUnder: ["hipaa"], serverPopulated: true, onCacheMiss: "allow", label: "Claude in Chrome", verb: "is", requirementId: "HIPAA-R34" }, allow_remote_sessions: { deniedUnder: ["hipaa"], serverPopulated: true, onCacheMiss: "deny", label: "Cloud sessions", verb: "are", requirementId: "HIPAA-R6" }, allow_remote_control: { deniedUnder: ["hipaa"], serverPopulated: true, onCacheMiss: "deny", label: "Remote Control", verb: "is", requirementId: "HIPAA-R6" }, allow_cobalt_plinth: { deniedUnder: ["hipaa", "zdr"], serverPopulated: true, onCacheMiss: "deny", label: "Artifacts", verb: "are", requirementId: "HIPAA-R16" }, allow_team_onboarding: { deniedUnder: ["hipaa"], onCacheMiss: "hold", label: "Team onboarding", verb: "is", requirementId: "HIPAA-R13", hardBlockUnder: ["hipaa"] }, allow_error_reporting: { deniedUnder: ["hipaa", "zdr"], onCacheMiss: "deny", label: "Error reporting", verb: "is", requirementId: "HIPAA-R19" }, allow_auto_mode_sibling_docs: { deniedUnder: ["hipaa"], onCacheMiss: "deny", label: "Repository lookups", verb: "are", requirementId: "HIPAA-R36" }, allow_repo_visibility_probe: { deniedUnder: ["hipaa"], onCacheMiss: "hold", label: "Repository visibility checks", verb: "are", requirementId: "HIPAA-R36" }, allow_send_file: { deniedUnder: ["hipaa", "zdr"], onCacheMiss: "deny", label: "File upload", verb: "is", requirementId: "HIPAA-R37" }, allow_drive_file_references: { deniedUnder: ["hipaa"], onCacheMiss: "deny", onFailOpenVerdict: "deny", label: "File references for connectors", verb: "are", requirementId: "HIPAA-R87" }, allow_heap_dump: { deniedUnder: ["hipaa", "zdr"], onCacheMiss: "deny", label: "Heap dumps", verb: "are", requirementId: "HIPAA-R38" }, allow_local_checkpoint_commit: { deniedUnder: ["hipaa", "zdr"], onCacheMiss: "deny", label: "Usage-limit checkpoints", verb: "are", requirementId: "HIPAA-R39" }, allow_plugin_skill_search: { deniedUnder: ["hipaa"], onCacheMiss: "deny", label: "Plugin and skill search", verb: "is", requirementId: "HIPAA-R26" }, allow_plugin_directory_search: { deniedUnder: ["hipaa"], onCacheMiss: "deny", onFailOpenVerdict: "deny", label: "The plugin directory", verb: "is", requirementId: "HIPAA-R35" }, allow_connector_suggest: { deniedUnder: ["hipaa"], onCacheMiss: "deny", onFailOpenVerdict: "deny", label: "Connector suggestions", verb: "are", requirementId: "HIPAA-R43" }, ...{ allow_mcp_task_worker_wake: { deniedUnder: ["hipaa"], onCacheMiss: "deny", label: "Restarting a worker for a background task", verb: "is", requirementId: "HIPAA-R57" } }, allow_plugin_publish: { deniedUnder: ["hipaa"], onCacheMiss: "deny", onFailOpenVerdict: "deny", label: "Publishing a plugin from Claude Code", verb: "is", requirementId: "HIPAA-R72" }, ...{}, allow_account_skills_sync: { deniedUnder: ["hipaa"], serverPopulated: true, onCacheMiss: "deny", label: "Account skills sync", verb: "is", requirementId: "HIPAA-R29" }, allow_account_plugins_sync: { deniedUnder: ["hipaa"], serverPopulated: true, onCacheMiss: "deny", label: "Account plugins sync", verb: "is", requirementId: "HIPAA-R30" }, allow_bundled_skills: { deniedUnder: ["hipaa"], onCacheMiss: "allow", label: "Bundled skills", verb: "are", requirementId: "HIPAA-R56" }, allow_mycelium: { deniedUnder: ["hipaa", "zdr"], onCacheMiss: "deny", label: "Peer messaging", verb: "is", requirementId: "HIPAA-R25", hardBlockUnder: ["hipaa"] }, ...{}, allow_usage_transcript_scan: { deniedUnder: ["hipaa"], transcriptScan: true, onCacheMiss: "deny", label: "Usage patterns", verb: "are", requirementId: "HIPAA-R31" }, allow_skill_doctor_transcript_scan: { deniedUnder: ["hipaa"], transcriptScan: true, onCacheMiss: "deny", label: "Skill token counts", verb: "are", requirementId: "HIPAA-R32" }, allow_insights: { deniedUnder: ["hipaa"], transcriptScan: true, onCacheMiss: "deny", label: "Insights", verb: "are", requirementId: "HIPAA-R40" }, allow_stats_transcript_scan: { deniedUnder: ["hipaa"], transcriptScan: true, onCacheMiss: "deny", label: "Usage stats", verb: "are", requirementId: "HIPAA-R42" }, ...{}, allow_model_catalog: { deniedUnder: ["hipaa"], onCacheMiss: "allow", label: "The model catalog", verb: "is", requirementId: "HIPAA-R33" }, allow_container_result_files: { deniedUnder: ["hipaa", "zdr"], onCacheMiss: "deny", label: "Saving large tool results in the tool container", verb: "is", requirementId: "HIPAA-R53" }, allow_promo_offers: { deniedUnder: ["hipaa"], onCacheMiss: "deny", label: "Promotional offers", verb: "are", requirementId: "HIPAA-R54" }, allow_previous_conversation_pointer: { deniedUnder: ["hipaa"], onCacheMiss: "deny", label: "Linking a new conversation to the one it replaces", verb: "is", requirementId: "HIPAA-R58" }, allow_api_auth_warm: { deniedUnder: ["hipaa"], onCacheMiss: "deny", label: "Warming the API credential cache", verb: "is", requirementId: "HIPAA-R59" }, allow_cache_keepalive: { deniedUnder: ["hipaa"], onCacheMiss: "deny", label: "Renewing the prompt cache lifetime", verb: "is", requirementId: "HIPAA-R65" } };
function p6o(e) {
  return Object.hasOwn(u6o, e);
}
function zwt(e) {
  return p6o(e) ? u6o[e] : void 0;
}
var de = /* @__PURE__ */ new Set(["hipaa"]);
function ubi(e) {
  return zwt(e)?.serverPopulated === true && !adi();
}
function lZs(e) {
  return zwt(e)?.transcriptScan === true && !cdi();
}
function k() {
  return Object.keys(u6o).filter(p6o);
}
function DQ(e) {
  let n = zwt(e);
  return { featureLabel: n?.label ?? e, verb: n?.verb ?? "is" };
}
var f6o = k().flatMap((e) => (zwt(e)?.deniedUnder ?? []).map((n) => [n, e])), pbi = k().flatMap((e) => (zwt(e)?.hardBlockUnder ?? []).map((n) => [n, e])), fbi = new Set(k().filter((e) => zwt(e)?.onCacheMiss !== "allow")), m6o = new Set(k().filter((e) => zwt(e)?.onCacheMiss === "hold")), dZs = new Set(k().filter((e) => zwt(e)?.onFailOpenVerdict === "deny")), Ue = /* @__PURE__ */ new Set(["allow_product_feedback"]), _e = /* @__PURE__ */ new Set(["allow_web_fetch", "allow_design_sync", "allow_channels", ...[]]);
function zhn(e) {
  let n = Be(e);
  return mbi(e) || n;
}
function mbi(e) {
  if (!_e.has(e) || ddi() || !Mh()) return false;
  let n = a();
  if (n.sessionCache !== null && !n.failOpenVerdict && !n.sessionVerdictDisowned) return false;
  let r;
  try {
    hY(), r = n.principalRung;
  } catch {
    return true;
  }
  if (r === "wif" && vt()) return true;
  if (r === "none" && B_() !== void 0 && wKt()) return false;
  return r === "oauth" || r === "tunnel" || r === "none";
}
function Be(e) {
  if (!_e.has(e) || !Mh() || ldi()) return false;
  let n = a();
  if (n.sessionCache !== null && n.sessionAttributed) {
    let r = fe();
    if (r !== null && r === n.attributedBearerDigest) return false;
    if (n.evidenceRereadForBearer !== r) n.evidenceRereadForBearer = r, n.hipaaEvidenceLoaded = false;
    let s = szr();
    if (s.seen.length === 0 && !s.incomplete || !Ve()) return false;
  }
  return l6o();
}
function Ve() {
  try {
    let e = hY();
    return e !== null && j(e);
  } catch {
    return true;
  }
}
function on(e) {
  let n = Iw();
  if (lZs(e)) {
    let r = n?.restrictions[e];
    if (r) return r.allowed;
    return !(Mh() && a().hintedDeniedKeys.includes(e));
  }
  if (!n) {
    if (fbi.has(e)) {
      if (Mh() && !(m6o.has(e) && jDe() && !M6e())) return false;
      if (Ue.has(e) && St() && !(e === "allow_product_feedback" && Joe())) return false;
    }
    if (x(e, L4r())) return false;
    if (zhn(e)) return false;
    let r = a();
    if (r.hintedDeniedKeys.length === 0 && r.hintedTaints.length === 0) return true;
    if (!Mh()) return true;
    if (r.hintedDeniedKeys.includes(e)) return false;
    return Mtt({ restrictions: {}, compliance_taints: [] }, e, r.hintedTaints);
  }
  if (m6o.has(e) && MV() && !(jDe() && !M6e())) return false;
  if (dZs.has(e) && MV()) return false;
  if (zhn(e)) return false;
  return !Se(e, n);
}
function Se(e, n) {
  let r = a();
  if (n.restrictions[e] === void 0 && r.hintedDeniedKeys.includes(e)) return true;
  let s = r.sessionFromServerFetch;
  return !Mtt({ restrictions: n.restrictions, compliance_taints: s ? n.compliance_taints : [] }, e, [...L4r(), ...r.hintedTaints, ...s ? [] : n.compliance_taints]);
}
function Mtt(e, n, r = []) {
  let s = e.compliance_taints;
  if (pbi.some(([c, y]) => y === n && (s.includes(c) || r.includes(c)))) return false;
  let l = e.restrictions[n];
  if (l) return l.allowed;
  if (lZs(n)) return true;
  let p = ubi(n) ? [...r.filter((c) => !(de.has(c) && s.includes(c))), ...s.filter((c) => !de.has(c))] : [...r, ...s];
  return !x(n, p);
}
function g6o(e) {
  if (e.compliance_taints.some((n) => f6o.some(([r]) => r === n))) return false;
  if (Object.keys(e.defaults ?? {}).length > 0 || e.monitoring_notice !== null && e.monitoring_notice !== void 0 || e.artifact_create_notice !== null && e.artifact_create_notice !== void 0) return false;
  return Object.entries(e.restrictions).every(([n, r]) => N(n) ? r?.allowed !== true : r?.allowed !== false);
}
function N(e) {
  return e.startsWith("enforce_") || e.startsWith("require_");
}
function x(e, n) {
  if (n.length === 0) return false;
  for (let [r, s] of f6o) if (s === e && n.includes(r)) return true;
  return false;
}
Kai({ isPolicyAllowed: (e) => on(e), commandPolicyGateAllows: (e) => hbi(e), policyDenyKind: (e) => Jc(e), policyDeniedReason: (e, n, r) => Sf(e, n, r), complianceTaintsSettled: () => lzr(), policyLimitsCacheLoaded: () => LQ(), autoDefaultVerdictState: () => gbi(), policyVerdictAbsent: () => MV(), principalSeenUnderHipaa: () => l6o(), coreSkills: () => ybi(), rememberedCoreSkills: () => _bi() });
function gbi() {
  if (!MV()) return "loaded";
  if (jDe()) return Ke() ? "unobtainable_seen_hipaa" : "unobtainable";
  return "pending";
}
function Ke() {
  let e;
  try {
    e = hY();
  } catch {
    return false;
  }
  if (e === null || j(e)) return false;
  return szr().seen.includes(b_e(e));
}
function hbi(e) {
  if (!p6o(e)) return t(`[policy] policyGate names unknown policy key "${e}"; denying`, { level: "warn" }), false;
  return on(e);
}
function MV() {
  if (!Mh()) return false;
  return Iw() === null || a().failOpenVerdict;
}
function yY() {
  return Iw() !== null && a().sessionFromServerFetch;
}
function h6o() {
  return a().sessionVerdictDisowned;
}
function jDe() {
  if (!MV()) return false;
  let e = a();
  if (e.settledWithoutVerdictFor === null) return false;
  let n;
  try {
    n = aZs();
  } catch {
    return false;
  }
  return e.settledWithoutVerdictFor === (n ?? "");
}
function M6e() {
  let e;
  try {
    e = hY();
  } catch {
    return true;
  }
  if (e === null || e.unclassified || e.admitsOnly) return true;
  let n = a();
  if (!n.hipaaSeenUnreadable) A(ye());
  let r = l6o();
  return n.hipaaSeenUnreadable || !n.hipaaEvidenceLoaded || r;
}
function w_e() {
  if (!Mh() || Iw() !== null || wZn()) return false;
  return V();
}
function V() {
  let e = a().lastFetchOutcome;
  return e !== null && !e.success && e.httpStatus === 404;
}
function Sf(e, n, r, s) {
  if (on(e)) return null;
  if (w_e()) return Ikt(n);
  switch (Jc(e)) {
    case "route_missing":
      return Ikt(n);
    case "cache_miss":
      return _Se(n);
    case "latched":
      return vNe(n, r);
    case "org_denied":
    case null:
      return $Vt(n, r, CZ(), s);
  }
}
function y6o() {
  return use(HL()).length > 0;
}
function Jc(e) {
  if (on(e)) return null;
  if (xZn(e)) return "latched";
  let n = Iw();
  if (n !== null) {
    if ((m6o.has(e) || dZs.has(e) && !Se(e, n)) && MV()) return V() ? "route_missing" : "cache_miss";
    if (!zhn(e)) return "org_denied";
    return V() && !wZn() ? "route_missing" : "cache_miss";
  }
  return w_e() ? "route_missing" : "cache_miss";
}
function xZn(e) {
  if (!x(e, L4r()) || x(e, CZ())) return false;
  if (Iw() === null) return true;
  return Y()?.[e]?.allowed !== false;
}
function _6o(e) {
  let n = Jc(e);
  if (n === null) return null;
  if (w_e()) return D9o();
  switch (n) {
    case "route_missing":
      return D9o();
    case "cache_miss":
      return Cai();
    case "latched":
      return kai();
    case "org_denied":
      return rsr(CZ());
  }
}
function lzr() {
  let e = sGt();
  if (e !== null && e !== "same") return false;
  if (jx() || Hsi() || !op() || Te() !== "firstParty" || i.ANTHROPIC_UNIX_SOCKET !== void 0 || Ng() !== void 0 || B_() !== void 0 && !Ltt({ anthropicAuthEnabled: nl(), oauthScopes: Ln()?.scopes }) && !(e === "same" && Iw() !== null)) return false;
  if (Iw() !== null) return true;
  let n = Ln();
  return (n?.subscriptionType === "pro" || n?.subscriptionType === "max") && n.scopes?.includes(fk) === true && pR() === "store" && !pe() && !Sr() && !Ef({ skipRetrievingKeyFromApiKeyHelper: true }).key && !kc();
}
function H6e(e) {
  if (!Mh()) return false;
  let n = a();
  return n.hintedDeniedKeys.includes(e) || !Mtt({ restrictions: {}, compliance_taints: [] }, e, n.hintedTaints);
}
function xxi(e) {
  return Y()?.[e]?.allowed === true;
}
function uGt(e) {
  let n = Y();
  if (n?.[e]?.allowed === true) return true;
  let r = a();
  return r.hintedEnforcedKeys.includes(e) && n?.[e] === void 0 && (n === null || !r.sessionAttributed) && Mh();
}
function S6o(e) {
  let n = Iw()?.defaults[e];
  return typeof n === "boolean" ? n : void 0;
}
function ybi() {
  return Iw()?.core_skills ?? [];
}
function Vwt() {
  return (Iw() ?? a().sessionCache)?.artifact_create_notice?.text ?? null;
}
function _bi() {
  if (!Mh()) return [];
  return Iw()?.core_skills ?? a().lastServedCoreSkills;
}
function b6o() {
  a().lastServedCoreSkills = null;
}
function Iw() {
  if (!Mh()) return null;
  let e = a();
  if (e.sessionCache) return e.sessionCache;
  if (e.diskAdoptionSuppressed) return null;
  let n = lGt();
  if (n) return iGt(n), n;
  return null;
}
function LQ() {
  if (!Mh()) return true;
  return Iw() !== null;
}
function Y() {
  return Iw()?.restrictions ?? null;
}
function K(e) {
  if (e === "env-quad") return i.ANTHROPIC_FEDERATION_RULE_ID?.trim() ?? "";
  let n = DH();
  return n === null || e === null ? "" : q(n, Avn(n));
}
function q(e, n) {
  return e === null ? "" : `${De(e)}\0${n}`;
}
export {
  AZn,
  Att,
  BDe,
  Bhn,
  CZn,
  DQ,
  EZn,
  GGr,
  Ghn,
  Gwt,
  H6e,
  Itt,
  Iw,
  JGr,
  Jc,
  Jzo,
  KGr,
  LQ,
  M6e,
  MV,
  Mh,
  Mtt,
  O6e,
  OV,
  Ott,
  Ox,
  Ptt,
  QGr,
  Qzo,
  RZn,
  Rtt,
  Rxi,
  S6o,
  SZn,
  Sf,
  TZn,
  Ttt,
  Uhn,
  VGr,
  Vce,
  Vwt,
  Whn,
  Wwt,
  XGr,
  Xzo,
  YGr,
  Yzo,
  ZGr,
  ZO,
  Zzo,
  _6o,
  _Zn,
  _bi,
  a6o,
  aGt,
  aZs,
  azr,
  b6o,
  bZn,
  b_e,
  c6o,
  cGt,
  cbi,
  d6o,
  dGt,
  dZs,
  e6o,
  eZs,
  ezr,
  f6o,
  fbi,
  g6o,
  gL,
  gbi,
  h6o,
  hY,
  hbi,
  i6o,
  iGt,
  iZs,
  izr,
  jDe,
  jhn,
  kZn,
  l6o,
  lGt,
  lZs,
  lzr,
  m6o,
  mL,
  mbi,
  n6o,
  nZs,
  nzr,
  o6o,
  oZs,
  on,
  ozr,
  p6o,
  pbi,
  qGr,
  qzo,
  r6o,
  rZs,
  rzr,
  s6o,
  sGt,
  sZs,
  szr,
  t6o,
  tZs,
  tzr,
  u6o,
  uGt,
  ubi,
  vAe,
  vZn,
  wZn,
  w_e,
  xZn,
  xtt,
  xxi,
  y6o,
  yY,
  yZn,
  ybi,
  zGr,
  zce,
  zhn,
  zwt
};
