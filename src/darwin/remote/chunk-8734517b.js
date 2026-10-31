// darwin/remote/chunk-8734517b.js — Claude Code 2.1.310（darwin）模块 chunk-c1rfegja.js
import { Vc } from "../context/not-admin-owned.js";
import { mo, pp, rr, C5 } from "../artifacts/chunk-a6c9d164.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { ql } from "../shell/invalid-type.js";
import { W_, yNe } from "../fs/reply-across-default-dirs.js";
import { F6t, Drr } from "../settings/global-config-and-gates.js";
import { BZn, jZn } from "./bridge-message-received.js";
function u(e, r) {
  let n = mo().dropSenderWriterByHandle;
  if (e !== null && e !== r) {
    let o = n.get(e);
    if (o) jZn(o);
  }
  if (r !== null && r !== e && !r.outboundOnly) {
    let o = n.get(r);
    if (!o) o = (s) => {
      r.writeSdkMessages([s]);
    }, n.set(r, o);
    BZn(o);
  }
}
function tfn(e, r) {
  let n = mo(), o = p(e), s = n.sdkHostedHandle;
  n.sdkHostedHandle = o, Drr(o ? pp(o.bridgeSessionId) : null, r).catch(() => {
  }), n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, u(s, o);
}
function XE() {
  return mo().sdkHostedHandle;
}
function EYn(e, r) {
  let n = mo(), o = p(e), s = n.replHandle;
  n.replHandle = o, n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, u(s, o);
  let i = o ? pp(o.bridgeSessionId) : void 0;
  if (i !== void 0) process.env.CLAUDE_CODE_BRIDGE_SESSION_ID = i;
  else delete process.env.CLAUDE_CODE_BRIDGE_SESSION_ID;
  Drr(i ?? null, r).catch(() => {
  });
}
function zd() {
  return mo().replHandle;
}
function pBr(e, r) {
  let n = mo();
  if (n.retiredHandles.add(e), n.replHandle === e) EYn(null, r);
  if (n.sdkHostedHandle === e) tfn(null, r);
}
function uze(e, r) {
  let n = mo(), o = n.replHandle ?? n.sdkHostedHandle;
  if (!o || o.outboundOnly) return;
  if (n.lastKnownPermissionMode = e, e === "bypassPermissions") return;
  let s = ql(e);
  if (n.lastReportedPermissionMode === s) return;
  n.lastReportedPermissionMode = s, o.reportMetadata({ permission_mode: s, ...r !== void 0 && { is_ultraplan_mode: r } });
}
function c1o() {
  let e = mo();
  if (e.lastReportedPermissionMode = void 0, e.lastKnownPermissionMode !== void 0) uze(e.lastKnownPermissionMode);
}
function u1o() {
  return mo().lastKnownPermissionMode;
}
function p1o(e, r, n) {
  let o = C5(e);
  if (!o) t("[bridge] supervised session id refused (not a safe bridge id) — this child has no Remote Control identity for the peer surface", { level: "warn" });
  mo().supervisedBridgeSession = o ? { bridgeSessionId: e, owner: n, storageV5: r, selfTitle: void 0 } : null, Drr(o ? pp(e) : null, r).catch(() => {
  });
}
function nfn() {
  return mo().supervisedBridgeSession?.bridgeSessionId;
}
function f1o(e) {
  let r = mo().supervisedBridgeSession;
  if (r === null || zd() !== null || XE() !== null) return;
  if (r.selfTitle = a(e), r.selfTitle !== void 0) F6t(r.selfTitle, r.storageV5).catch(l);
}
function a(e) {
  return typeof e === "string" && W_(e) !== "" ? e : void 0;
}
function d(e) {
  let r = tbi(), n = mo(), o = n.peerIdentityKey;
  if (o !== null && o.host === e && o.credential === r) return o;
  let s = { host: e, credential: r };
  return n.peerIdentityKey = s, s;
}
function tbi() {
  let { sameOwnerAccount: e } = import.meta.require("../auth/acquire-o-auth-refresh-lock.js"), r = m(), n = mo(), o = n.walkCredentialKey;
  if (o !== null && e(o.owner, r)) return o;
  let s = { owner: r };
  return n.walkCredentialKey = s, s;
}
function m() {
  let { sessionsApiBearerFingerprint: e, isConsoleProfileSessionsCredential: r } = import.meta.require("./archive-remote-session.d709.js"), { getStoredOauthAccountInfo: n } = import.meta.require("../auth/acquire-o-auth-refresh-lock.js"), { getWIFAccountInfo: o } = import.meta.require("../auth/clear-wif-account-info-cache.js"), { env: s } = import.meta.require("../ide/ant-env.js"), i = e();
  return { accountUuid: i ? `bearer:${i}` : void 0, organizationUuid: r() ? o()?.organizationUuid?.trim() || void 0 : s.CLAUDE_CODE_ORGANIZATION_UUID || n()?.organizationUuid };
}
async function m1o({ refresh: e, credentials: r }) {
  let { isCrossSessionMessagingEnabled: n } = import.meta.require("../shared/is-cross-session-messaging-enabled.js");
  if (!n()) return;
  if (!(zd() !== null || XE() !== null || mo().supervisedBridgeSession !== null)) {
    let { hasCloudPeerAccess: g } = import.meta.require("./has-cloud-peer-access.js");
    if (!g()) return;
  }
  let { primeSessionsApiBearer: s } = import.meta.require("./archive-remote-session.d709.js"), i = s({ refresh: e, credentials: r }).catch(() => {
  });
  if (e) {
    await i;
    return;
  }
  let { withDeadline: c } = import.meta.require("../shared/full-jitter-backoff-ms.js");
  await c(i, S);
}
var S = 750;
function gSt() {
  let e = zd() ?? XE();
  if (e) return { key: d(e), bridgeSessionId: e.bridgeSessionId, selfTitle: e.selfTitle, live: Vc() };
  let r = mo().supervisedBridgeSession;
  return r ? { key: d(r), bridgeSessionId: r.bridgeSessionId, selfTitle: r.selfTitle, live: true } : null;
}
function mjt(e) {
  let r = mo(), n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  r.lastKnownCrossSessionInbound = e;
  let o = e ? "available" : "unavailable";
  if (r.lastReportedCrossSessionInbound === o) return;
  r.lastReportedCrossSessionInbound = o, n.reportMetadata({ cross_session_inbound: o });
}
function g1o() {
  let e = mo();
  if (e.lastReportedCrossSessionInbound = void 0, e.lastKnownCrossSessionInbound !== void 0) mjt(e.lastKnownCrossSessionInbound);
}
function f(e) {
  let r = mo(), n = r.replHandle ?? r.sdkHostedHandle, o = r.remoteEgressSuppressed;
  if (!n || n.outboundOnly || n.noHistoryBackfill || o === null || o()) return;
  r.lastKnownPostTurnSummary = e, n.reportMetadata({ post_turn_summary: e });
}
function pze(e, r, n) {
  let o = { post_turn_summary: r };
  if (n) e?.notifyMetadataChanged(o, n);
  else e?.notifyMetadataChanged(o);
  if (e?.onMetadataChanged) return;
  try {
    f(r);
  } catch (s) {
    l(s);
  }
}
function h1o() {
  mo().lastKnownPostTurnSummary = null;
}
function y1o() {
  let e = mo().lastKnownPostTurnSummary;
  if (e) f(e);
}
function Iye(e) {
  let r = mo(), n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  if (r.lastKnownModel = e, r.lastReportedModel === e) return;
  r.lastReportedModel = e, n.reportMetadata({ model: e });
}
function _1o() {
  let e = mo();
  if (e.lastReportedModel = void 0, e.lastKnownModel !== void 0) Iye(e.lastKnownModel);
}
function S1o() {
  mo().contextUsageMirror?.resend();
}
function fBr(e, r) {
  let n = mo(), o = n.replHandle ?? n.sdkHostedHandle, s = _(e);
  if (!o || o.outboundOnly || o.noHistoryBackfill || r() || n.lastReportedArtifacts === s || e.length === 0 && n.lastKnownArtifacts === void 0) return;
  n.lastKnownArtifacts = e, n.lastReportedArtifacts = s, n.artifactsEgressSuppressed = r, o.reportMetadata({ artifacts: e.length === 0 ? null : e });
}
function b1o() {
  let e = mo();
  if (e.lastReportedArtifacts = void 0, e.lastKnownArtifacts && e.artifactsEgressSuppressed) fBr(e.lastKnownArtifacts, e.artifactsEgressSuppressed);
}
function vYn() {
  let e = gSt();
  return e ? pp(e.bridgeSessionId) : void 0;
}
function rfn() {
  let e = vYn();
  return e ? yNe(e) : void 0;
}
function ofn() {
  let e = zd();
  return e && !e.outboundOnly ? pp(e.bridgeSessionId) : void 0;
}
function w1o() {
  return gSt()?.selfTitle;
}
function fze(e, r) {
  let n = zd() ?? XE();
  if (n && rr(n.bridgeSessionId) === rr(e)) n.selfTitle = a(r);
}
function p(e) {
  return e !== null && mo().retiredHandles.has(e) ? null : e;
}
export {
  EYn,
  Iye,
  S1o,
  XE,
  _1o,
  b1o,
  c1o,
  f1o,
  fBr,
  fze,
  g1o,
  gSt,
  h1o,
  m1o,
  mjt,
  nfn,
  ofn,
  p1o,
  pBr,
  pze,
  rfn,
  tbi,
  tfn,
  u1o,
  uze,
  vYn,
  w1o,
  y1o,
  zd
};
