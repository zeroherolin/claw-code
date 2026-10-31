// linux/remote/chunk-8734517b.js — Claude Code 2.1.310（linux）模块 chunk-07aq7e5p.js
import { zc } from "../context/not-admin-owned.js";
import { mo, pf, rr, m6 } from "../artifacts/chunk-a6c9d164.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { ql } from "../shell/invalid-type.js";
import { j_, uNe } from "../fs/reply-across-default-dirs.js";
import { AKt, yrr } from "../settings/global-config-and-gates.js";
import { EZn, kZn } from "./bridge-message-received.js";
function u(e, r) {
  let n = mo().dropSenderWriterByHandle;
  if (e !== null && e !== r) {
    let o = n.get(e);
    if (o) kZn(o);
  }
  if (r !== null && r !== e && !r.outboundOnly) {
    let o = n.get(r);
    if (!o) o = (s) => {
      r.writeSdkMessages([s]);
    }, n.set(r, o);
    EZn(o);
  }
}
function Nfn(e, r) {
  let n = mo(), o = p(e), s = n.sdkHostedHandle;
  n.sdkHostedHandle = o, yrr(o ? pf(o.bridgeSessionId) : null, r).catch(() => {
  }), n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, u(s, o);
}
function Yv() {
  return mo().sdkHostedHandle;
}
function Q8n(e, r) {
  let n = mo(), o = p(e), s = n.replHandle;
  n.replHandle = o, n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, u(s, o);
  let i = o ? pf(o.bridgeSessionId) : void 0;
  if (i !== void 0) process.env.CLAUDE_CODE_BRIDGE_SESSION_ID = i;
  else delete process.env.CLAUDE_CODE_BRIDGE_SESSION_ID;
  yrr(i ?? null, r).catch(() => {
  });
}
function zd() {
  return mo().replHandle;
}
function UBr(e, r) {
  let n = mo();
  if (n.retiredHandles.add(e), n.replHandle === e) Q8n(null, r);
  if (n.sdkHostedHandle === e) Nfn(null, r);
}
function Xze(e, r) {
  let n = mo(), o = n.replHandle ?? n.sdkHostedHandle;
  if (!o || o.outboundOnly) return;
  if (n.lastKnownPermissionMode = e, e === "bypassPermissions") return;
  let s = ql(e);
  if (n.lastReportedPermissionMode === s) return;
  n.lastReportedPermissionMode = s, o.reportMetadata({ permission_mode: s, ...r !== void 0 && { is_ultraplan_mode: r } });
}
function TUo() {
  let e = mo();
  if (e.lastReportedPermissionMode = void 0, e.lastKnownPermissionMode !== void 0) Xze(e.lastKnownPermissionMode);
}
function AUo() {
  return mo().lastKnownPermissionMode;
}
function CUo(e, r, n) {
  let o = m6(e);
  if (!o) t("[bridge] supervised session id refused (not a safe bridge id) — this child has no Remote Control identity for the peer surface", { level: "warn" });
  mo().supervisedBridgeSession = o ? { bridgeSessionId: e, owner: n, storageV5: r, selfTitle: void 0 } : null, yrr(o ? pf(e) : null, r).catch(() => {
  });
}
function $fn() {
  return mo().supervisedBridgeSession?.bridgeSessionId;
}
function RUo(e) {
  let r = mo().supervisedBridgeSession;
  if (r === null || zd() !== null || Yv() !== null) return;
  if (r.selfTitle = a(e), r.selfTitle !== void 0) AKt(r.selfTitle, r.storageV5).catch(l);
}
function a(e) {
  return typeof e === "string" && j_(e) !== "" ? e : void 0;
}
function d(e) {
  let r = _bi(), n = mo(), o = n.peerIdentityKey;
  if (o !== null && o.host === e && o.credential === r) return o;
  let s = { host: e, credential: r };
  return n.peerIdentityKey = s, s;
}
function _bi() {
  let { sameOwnerAccount: e } = import.meta.require("../auth/acquire-o-auth-refresh-lock.js"), r = m(), n = mo(), o = n.walkCredentialKey;
  if (o !== null && e(o.owner, r)) return o;
  let s = { owner: r };
  return n.walkCredentialKey = s, s;
}
function m() {
  let { sessionsApiBearerFingerprint: e, isConsoleProfileSessionsCredential: r } = import.meta.require("./archive-remote-session.d709.js"), { getStoredOauthAccountInfo: n } = import.meta.require("../auth/acquire-o-auth-refresh-lock.js"), { getWIFAccountInfo: o } = import.meta.require("../auth/clear-wif-account-info-cache.js"), { env: s } = import.meta.require("../ide/ant-env.js"), i = e();
  return { accountUuid: i ? `bearer:${i}` : void 0, organizationUuid: r() ? o()?.organizationUuid?.trim() || void 0 : s.CLAUDE_CODE_ORGANIZATION_UUID || n()?.organizationUuid };
}
async function xUo({ refresh: e, credentials: r }) {
  let { isCrossSessionMessagingEnabled: n } = import.meta.require("../shared/is-cross-session-messaging-enabled.js");
  if (!n()) return;
  if (!(zd() !== null || Yv() !== null || mo().supervisedBridgeSession !== null)) {
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
function sbt() {
  let e = zd() ?? Yv();
  if (e) return { key: d(e), bridgeSessionId: e.bridgeSessionId, selfTitle: e.selfTitle, live: zc() };
  let r = mo().supervisedBridgeSession;
  return r ? { key: d(r), bridgeSessionId: r.bridgeSessionId, selfTitle: r.selfTitle, live: true } : null;
}
function Z1t(e) {
  let r = mo(), n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  r.lastKnownCrossSessionInbound = e;
  let o = e ? "available" : "unavailable";
  if (r.lastReportedCrossSessionInbound === o) return;
  r.lastReportedCrossSessionInbound = o, n.reportMetadata({ cross_session_inbound: o });
}
function PUo() {
  let e = mo();
  if (e.lastReportedCrossSessionInbound = void 0, e.lastKnownCrossSessionInbound !== void 0) Z1t(e.lastKnownCrossSessionInbound);
}
function f(e) {
  let r = mo(), n = r.replHandle ?? r.sdkHostedHandle, o = r.remoteEgressSuppressed;
  if (!n || n.outboundOnly || n.noHistoryBackfill || o === null || o()) return;
  r.lastKnownPostTurnSummary = e, n.reportMetadata({ post_turn_summary: e });
}
function Jze(e, r, n) {
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
function IUo() {
  mo().lastKnownPostTurnSummary = null;
}
function OUo() {
  let e = mo().lastKnownPostTurnSummary;
  if (e) f(e);
}
function kye(e) {
  let r = mo(), n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  if (r.lastKnownModel = e, r.lastReportedModel === e) return;
  r.lastReportedModel = e, n.reportMetadata({ model: e });
}
function MUo() {
  let e = mo();
  if (e.lastReportedModel = void 0, e.lastKnownModel !== void 0) kye(e.lastKnownModel);
}
function DUo() {
  mo().contextUsageMirror?.resend();
}
function BBr(e, r) {
  let n = mo(), o = n.replHandle ?? n.sdkHostedHandle, s = _(e);
  if (!o || o.outboundOnly || o.noHistoryBackfill || r() || n.lastReportedArtifacts === s || e.length === 0 && n.lastKnownArtifacts === void 0) return;
  n.lastKnownArtifacts = e, n.lastReportedArtifacts = s, n.artifactsEgressSuppressed = r, o.reportMetadata({ artifacts: e.length === 0 ? null : e });
}
function HUo() {
  let e = mo();
  if (e.lastReportedArtifacts = void 0, e.lastKnownArtifacts && e.artifactsEgressSuppressed) BBr(e.lastKnownArtifacts, e.artifactsEgressSuppressed);
}
function Z8n() {
  let e = sbt();
  return e ? pf(e.bridgeSessionId) : void 0;
}
function Ffn() {
  let e = Z8n();
  return e ? uNe(e) : void 0;
}
function Ufn() {
  let e = zd();
  return e && !e.outboundOnly ? pf(e.bridgeSessionId) : void 0;
}
function LUo() {
  return sbt()?.selfTitle;
}
function Qze(e, r) {
  let n = zd() ?? Yv();
  if (n && rr(n.bridgeSessionId) === rr(e)) n.selfTitle = a(r);
}
function p(e) {
  return e !== null && mo().retiredHandles.has(e) ? null : e;
}
export {
  $fn,
  AUo,
  BBr,
  CUo,
  DUo,
  Ffn,
  HUo,
  IUo,
  Jze,
  LUo,
  MUo,
  Nfn,
  OUo,
  PUo,
  Q8n,
  Qze,
  RUo,
  TUo,
  UBr,
  Ufn,
  Xze,
  Yv,
  Z1t,
  Z8n,
  _bi,
  kye,
  sbt,
  xUo,
  zd
};
