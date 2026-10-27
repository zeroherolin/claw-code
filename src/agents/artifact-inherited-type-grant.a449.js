// agents/artifact-inherited-type-grant.a449.js — Claude Code 2.1.310 模块 chunk-a449rk7g.js
import { TA } from "../context/not-admin-owned.ersa.js";
import { Z } from "../artifacts/same-account.bxg8.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { iZ, Ts, k } from "../settings/global-config-and-gates.27xj.js";
import { i, Zn } from "../shared/environment.9a41.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { Ls } from "../mcp/allowed-warning.j2d4.js";
import { Em, lr, Jt, zp, tC, ipe, m_ } from "../artifacts/cobalt-plinth-lovage.hxm5.js";
import { nA, bG, ny } from "../mcp/cobalt-plinth-sedge.awk2.js";
import { xJs, dtt, tv, p_e } from "../settings/gable-onyx-sluice.5y5b.js";
import { At, m_e, yG, SG, aH, tc, g_e, BGo } from "../artifacts/artifact-share-status.jp2v.js";
import { $me } from "../artifacts/cobalt-plinth-samphire.3k3d.js";
import { hw } from "../artifacts/template-instance.kxgt.js";
import { ele } from "../artifacts/cobalt-plinth-linden.561n.js";
import { LFn } from "../artifacts/chunk-qdjaz4y7.js";
import { Ih, sh, ae } from "../permissions/max-thinking-tokens.hx3h.js";
import { m9, Eks } from "../shared/bg-session.dsjm.js";
import { pNn } from "../artifacts/artifact-comment-consent-read.n4w6.js";
import { o, M, u, Fe, B, T } from "../vendor/zod/string-format.k395.js";
function b(e, t) {
  return typeof e === "string" || typeof t === "string" ? e === t : TA(e, t);
}
var E = 64;
function I(e) {
  let t = e.url;
  return typeof t === "string" ? Jt(t) ?? void 0 : void 0;
}
async function _Er(e, t) {
  let n = Z().typeCapabilityReads, r = n.get(e);
  if (r !== void 0 && (!t.toolUseId || r.toolUseId === t.toolUseId)) return r.capabilities;
  let s = Date.now(), d = await ele(e, { signal: t.abortController.signal, credentials: t.credentials }), c = d.err === null ? d.detail : null, l = c === null || c.declaration === "malformed" ? null : c.capabilities, _ = l !== null && (c?.declaration === void 0 || Object.keys(c.declaration).length === l.length);
  if (aH(s)) return null;
  if (!n.has(e) && n.size >= E) {
    let m = n.keys().next().value;
    if (m !== void 0) n.delete(m);
  }
  return n.set(e, { toolUseId: t.toolUseId, capabilities: l, whole: _ }), l;
}
function omo(e) {
  return Z().typeCapabilityReads.get(e)?.whole === true;
}
function ZOt(e) {
  return Z().typeCapabilityReads.get(e)?.capabilities?.includes("room") === true;
}
function SEr(e, t) {
  if (Ts(t.agentContext)) return;
  if (f9(e, t)) t.setAppState((n) => p(n, t, (r) => r.artifactWatchApproved ? r : { ...r, artifactWatchApproved: true }));
}
var smo = { get: { pages: false, cursor: "", none: "" }, list: { pages: true, cursor: "page with a smaller `query.limit`", none: "a smaller read is the only way to see them" }, query: { pages: true, cursor: "page with a smaller `query.limit`", none: "narrow with a `query.where`" }, replayed: { pages: false, cursor: "", none: "" } };
function imo(e, t) {
  if (Ts(e.agentContext)) return;
  e.setAppState((n) => p(n, e, (r) => r.artifactReadPageDataApproved && (!t || r.artifactReadPageDataHumanApproved) ? r : { ...r, artifactReadPageDataApproved: true, ...t && { artifactReadPageDataHumanApproved: true } }));
}
function f9(e, t) {
  return Reflect.get(e, If) === true && Ih(t) && !aNn(t);
}
function amo(e) {
  if (e.toolUseId === void 0) return;
  let t = Z(), { consentCheckScopes: n } = t;
  if (n.delete(e.toolUseId), n.size >= x) {
    let r = n.keys().next().value;
    if (r !== void 0) n.delete(r), t.consentCheckScopesEvicted = true;
  }
  n.set(e.toolUseId, dtt());
}
var x = 256;
function aNn(e) {
  if (e.toolUseId === void 0) return false;
  let t = Z(), n = t.consentCheckScopes.get(e.toolUseId);
  return n === void 0 ? t.consentCheckScopesEvicted : n !== dtt();
}
function nQt(e) {
  return Ih(e) && !Ls(ae(e).mode);
}
function b1e(e, t) {
  return (e[by] ?? false) && ae(t).mode === "plan" || bEr(e);
}
function bEr(e) {
  return Reflect.get(e, EP) === true;
}
function p(e, t, n) {
  if (aNn(t)) return e;
  let { accountEpoch: r } = Z();
  if ((e.artifactConsentEpoch ?? 0) === r) return n(e);
  return n({ ...e, ...Object.fromEntries(xJs.map((s) => [s, LFn[s]])), artifactConsentEpoch: r });
}
function lmo(e, t, n, r) {
  return p(e, t, (s) => ({ ...s, artifactPlanPublishConsentPaths: { ...s.artifactPlanPublishConsentPaths, [n]: { slug: r } } }));
}
function C(e, t, n, r, s = () => true) {
  return p(e, t, (d) => {
    if (n.every((l) => D(d[l]?.[r], s(d[l]?.[r])))) return d;
    let c = { ...d };
    for (let l of n) c[l] = { ...c[l], [r]: s(d[l]?.[r]) };
    return { ...d, ...c };
  });
}
function D(e, t) {
  return e === void 0 || e === true || e === "script" || t === true || t === "script" ? e === t : b(e, t);
}
function S(e, t) {
  return t ? [`${e}ConsentSlugs`, `${e}HumanConsentSlugs`] : [`${e}ConsentSlugs`];
}
function dmo(e, t, n) {
  if (Ts(t.agentContext)) return;
  if (!f9(e, t) || tc(At(n))) return;
  t.setAppState((r) => C(r, t, S("artifactDbRead", b1e(e, t)), n));
}
function wEr(e, t) {
  if (Ts(t.agentContext) || Z().routineSourceWriteRefused) return;
  if (!f9(e, t)) return;
  let n = b1e(e, t);
  t.setAppState((r) => p(r, t, (s) => s.artifactDbWriteApproved && (!n || s.artifactDbWriteHumanApproved) ? s : { ...s, artifactDbWriteApproved: true, ...n && { artifactDbWriteHumanApproved: true } }));
}
function ZW(e) {
  return e?.cowritten === true || e?.artifactKind === nA;
}
function c7(e) {
  return e?.typeLocked === true || e?.typeLock != null;
}
function aB(e, t = tc(e)) {
  return t && c7(e) && e?.artifactKind !== nA;
}
function eMt(e, t = tc(e)) {
  let n = yG(e);
  return aB(e, t) && n !== void 0 && hw(n) === "first_party_type";
}
function cmo(e) {
  return e !== void 0 && e.typeLock != null && eMt(e) && !g_e(e) && e.capabilitiesUnknown !== true && e.capsReadNotFound !== true && m_e(e) && bG(e.capabilities);
}
function e8e() {
  let e = Z();
  if (e.inheritedTypeGrantLatch === null) e.inheritedTypeGrantLatch = Zn.CLAUDE_CODE_ARTIFACT_INHERITED_TYPE_GRANT ?? k("tengu_swirling_squid", false) === true, a("tengu_artifact_inherited_type_grant", { on: e.inheritedTypeGrantLatch });
  return e.inheritedTypeGrantLatch;
}
function t8e(e, t, n, r = false) {
  if (Ts(t.agentContext)) return;
  let s = At(n), d = Reflect.get(e, _D), c = (A) => typeof d === "object" && d !== null && Reflect.get(d, A) === true, l = c("classifier") || ae(t).mode === "auto" && !c("userOnly");
  if (!P(e, t) || c("once") || l || tc(s) && !ZW(s) && !c7(s)) return;
  let _ = L(e, t) || r && jIe(t), m = r && !gme(t);
  t.setAppState((A) => C(A, t, [...S("artifactAssetRead", _), ...m ? ["artifactOutsideOrgConsentSlugs"] : []], n));
}
function umo(e, t) {
  if (t.length === 0 || Ts(e.agentContext)) return;
  e.setAppState((n) => t.reduce((r, s) => C(r, e, ["artifactOutsideOrgConsentSlugs"], s), n));
}
function pmo(e, t, n) {
  if (Ts(t.agentContext)) return;
  if (!P(e, t) || gme(t) || ae(t).mode === "auto" && !tv(I(e)) && !p_e(n) || tc(At(n))) return;
  t.setAppState((r) => C(r, t, ["artifactReadConsentSlugs"], n));
}
function tMt(e, t, n, r) {
  if (Ts(t.agentContext)) return;
  if (!f9(e, t) || ae(t).mode === "auto") return;
  BGo(n, r), t.setAppState((s) => C(s, t, S("artifactAssetUpload", b1e(e, t)), n));
}
function lNn(e, t) {
  return Reflect.get(e, gte) === "auto" && !jIe(t);
}
function n8e(e, t) {
  return e === "auto" && !Z().roomStoppedByUser.has(t);
}
function R(e) {
  let t = e.queryTracking;
  return t === void 0 ? void 0 : `${t.chainId}:${t.depth}`;
}
function fmo(e, t, n) {
  let { roomArmAsked: r } = Z();
  if (n === void 0) r.delete(t);
  else r.set(t, { ...n, at: R(e) });
}
function mmo(e, t) {
  for (let [n, r] of Z().roomArmAsked) {
    if (n === t) continue;
    if (e.keys.includes(r.key) || e.slug !== void 0 && r.slug === e.slug) return true;
  }
  return false;
}
function gmo(e) {
  if (e !== void 0) Z().roomArmAsked.delete(e);
}
var dNn = "path:*";
function EEr(e) {
  let t = Z(), n = R(e);
  for (let [r, s] of t.roomArmAsked) {
    if (r === e.toolUseId) continue;
    let d = N(e.messages, r);
    if (d === void 0 && s.at !== void 0 && s.at === n) continue;
    t.roomArmAsked.delete(r);
    let c = d?.toolDenialKind;
    if (d === void 0 || c === "user-rejected" || c === "permission-rule") {
      if (t.roomArmRefusedByUser.add(s.key), t.roomArmRefusedByUser.add(dNn), s.slug !== void 0) t.roomStoppedByUser.add(s.slug);
    }
  }
}
function N(e, t) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r?.type === "user" && Array.isArray(r.message.content) && r.message.content.some((s) => s.type === "tool_result" && s.tool_use_id === t)) return r;
  }
  return;
}
function vEr(e, t, n) {
  if (Ts(t.agentContext)) return;
  let r = Reflect.get(e, gte);
  if (r !== true && r !== "auto" || sh(t)) return;
  let s = lNn(e, t) ? "classifier" : true;
  if (s === "classifier" && !n8e(ae(t).mode, n)) return;
  t.setAppState((d) => p(d, t, (c) => c.artifactRoomJoinConsentSlugs?.[n] === s || c.artifactRoomJoinConsentSlugs?.[n] === true ? c : { ...c, artifactRoomJoinConsentSlugs: { ...c.artifactRoomJoinConsentSlugs, [n]: s } }));
}
function u6(e) {
  let t = "thread_id" in e && typeof e.thread_id === "string" ? e.thread_id : void 0, n = "text" in e && typeof e.text === "string" ? e.text : void 0, r = "cursor" in e && typeof e.cursor === "string" ? e.cursor : void 0;
  return { threadId: t, replyText: n, cursor: r };
}
function hmo(e, t) {
  let n = t !== void 0 && lr.test(t) ? t : "(invalid)", r = "viewers of this artifact (share status could not be confirmed)";
  if (e !== null) {
    let s = At(e.slug);
    if (s !== void 0 && s.probeFailed !== true) r = s.mode === "owner" ? "viewers of this artifact (not currently shared)" : `${SG(s)} (the artifact is shared)`;
  }
  return { tid: n, audience: r };
}
function Hae(e) {
  let t = (n) => {
    let r = e[n];
    return typeof r === "string" ? r : void 0;
  };
  return { assetId: t("asset_id"), outDir: t("out_dir"), after: t("after") };
}
function rQt(e, t = 1024) {
  return tC(zp(ny(e, { max: t })) ?? "").replace(m_, " ").replace(ipe, " ");
}
function OEe(e, t = 1024) {
  return `"${rQt(e, t).replace(/\\$/, "\\ ")}"`;
}
function ymo(e, t) {
  let n = e.trimEnd().replace(/\.$/, "");
  if (n === "") {
    let r = t.replace(/^[\s;,\u2014-]+/, "");
    return r.charAt(0).toUpperCase() + r.slice(1);
  }
  return `${n}${t}`;
}
function MEe(e) {
  if (e.behavior !== "ask") return -1;
  let t = e.decisionReason;
  switch (t?.type) {
    case "rule":
      return 4;
    case "safetyCheck":
      return t.classifierApprovable ? 1 : 3;
    case "mode":
      return 2;
    default:
      return 0;
  }
}
var If = "__artifactConsentAskCanReachUser", nMt = "__artifactWatchWouldArmReplies", by = "__artifactPlanConsentAsk", EP = "__artifactUserOnlyConsentAsk", cNn = "__artifactVerifyTargetPinned";
function iut(e) {
  return typeof e.url === "string" ? Jt(e.url) : Z().verify.lastPublish ?? null;
}
var u7 = "__artifactPublishTarget", r8e = "__artifactRoutineUnaskedFirstPublish", oQt = "__artifactPublishSourcePin", h = f(() => u({ path: o(), kind: B(["file", "absent", "network"]), redirected: M(), sha256: o().optional(), root: u({ spelling: o(), base: o(), redirected: M().optional() }).optional(), copies: o().optional(), minted: o().optional(), type: Fe([o(), T(false)]), shim: M().optional() }));
function kEr(e) {
  let t = Reflect.get(e, oQt);
  if (t === void 0) return;
  let n = h().safeParse(t);
  return n.success ? n.data : null;
}
var U = f(() => h().omit({ type: true }));
function CEr(e) {
  let t = Reflect.get(e, oQt);
  if (t === void 0) return "source_pin_missing";
  return typeof t === "object" && t !== null && Reflect.get(t, "type") === void 0 && U().safeParse(t).success ? "source_pin_stale_build" : "source_pin_unreadable";
}
var gte = "__artifactRoomJoinDisclosed", w1e = "__artifactTypeCreatePin", E1e = "__artifactAssetUploadPin", o8e = "__artifactRoomSendTarget", _D = "__artifactAssetTargetPin", sQt = "__artifactReadTargetPin", rMt = "__artifactDeletePin", oMt = "__artifactDeleteTarget", RC = "__artifactDisplayTarget", w = "__artifactEndpointBodyFile", g = "__artifactConsentPin", TEr = "__artifactSyncTargetPin";
function FE(e, t) {
  return { [g]: t === null ? null : { action: e, slug: t.slug } };
}
var y = [u7, E1e, o8e, _D, sQt, rMt, g, TEr];
function p7(e, t) {
  return y.some((n) => n !== t && Reflect.get(e, n) !== void 0);
}
function aut(e) {
  return y.some((t) => Reflect.get(e, t) !== void 0);
}
function hte(e, t, n) {
  let r = Reflect.get(e, g);
  return typeof r === "object" && r !== null && Reflect.get(r, "action") === t && Reflect.get(r, "slug") === n;
}
function yq(e, t, n) {
  return p7(e, g) || Reflect.get(e, g) !== void 0 && !hte(e, t, n);
}
var iQt = "__artifactDbReadTargetPin", aQt = "__artifactDbWriteSourcePin", v = "__artifactHandlersPin", O = "__artifactLiveDocStandIn", sMt = "__artifactAsk", G = [If, O, by, EP, nMt, ...y, gte, w1e, cNn, oQt, iQt, aQt, v, oMt, RC, w, pNn, sMt, r8e];
function _mo(e) {
  return typeof e === "object" && e !== null && G.some((t) => Reflect.get(e, t) !== void 0);
}
function yte(e, t, n, r, s = false) {
  if (t.toolUseId !== void 0) Z().shareStatus.noticeReadSights[e].note(t.toolUseId, n, r && (s || Ih(t)));
}
function AEr(e, t, n) {
  return Z().shareStatus.noticeReadSights[e].take(t, n);
}
function BIe(e, t, n, r) {
  return t.toolUseId === void 0 ? r : AEr(e, t.toolUseId, n) === true;
}
function Smo(e, t) {
  if (Ts(t.agentContext)) return false;
  return (e[by] ?? false) && ae(t).mode === "plan" && Ih(t);
}
function M$(e) {
  return $me({ agentId: e.agentId, agentType: e.agentContext?.agentType, isNonInteractiveSession: e.options.isNonInteractiveSession });
}
function lut(e) {
  return Boolean(i.CLAUDE_CODE_REMOTE) || m9(M$(e).publishContext);
}
function jIe(e) {
  if (e.toolUseId === void 0) return false;
  let t = e.toolDecisions?.get(e.toolUseId)?.source;
  return t === "user_temporary" || t === "user_permanent";
}
function gme(e) {
  if (e.toolUseId === void 0) return false;
  let t = e.toolDecisions?.get(e.toolUseId);
  return t !== void 0 && t.decision !== "reject" && t.source !== "user_temporary" && t.source !== "user_permanent";
}
function P(e, t) {
  return f9(e, t) && !sh(t);
}
function L(e, t) {
  return b1e(e, t) && !gme(t);
}
function uNn(e) {
  return lut(e) && !Ts(e.agentContext) ? Eks : void 0;
}
function REr(e) {
  return iZ(e) && !Em(e);
}
export {
  AEr,
  BIe,
  CEr,
  E1e,
  EEr,
  EP,
  FE,
  Hae,
  If,
  M$,
  MEe,
  OEe,
  RC,
  REr,
  SEr,
  Smo,
  TEr,
  ZOt,
  ZW,
  _D,
  _Er,
  _mo,
  aB,
  aNn,
  aQt,
  amo,
  aut,
  b1e,
  bEr,
  by,
  c7,
  cNn,
  cmo,
  dNn,
  dmo,
  e8e,
  eMt,
  f9,
  fmo,
  gme,
  gmo,
  gte,
  hmo,
  hte,
  iQt,
  imo,
  iut,
  jIe,
  kEr,
  lNn,
  lmo,
  lut,
  mmo,
  n8e,
  nMt,
  nQt,
  o8e,
  oMt,
  oQt,
  omo,
  p7,
  pmo,
  r8e,
  rMt,
  rQt,
  sMt,
  sQt,
  smo,
  t8e,
  tMt,
  u6,
  u7,
  uNn,
  umo,
  vEr,
  w1e,
  wEr,
  ymo,
  yq,
  yte
};
