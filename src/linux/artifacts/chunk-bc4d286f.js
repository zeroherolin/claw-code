// linux/artifacts/chunk-bc4d286f.js — Claude Code 2.1.310（linux）模块 chunk-3bmk6ayz.js
import { ZTs } from "./workshop-build-started.js";
import { Kgo } from "../shared/chunk-5a9b74de.js";
import { C$n, R$n, x$n, rZt, oZt, sZt, iZt, P$n, I$n, O$n, M$n, D$n, H$n, Aut } from "../shared/chunk-c663f07c.js";
var o = Object.freeze({}), i = Object.freeze({}), E$n = { bagelActive: void 0, bagelUrl: void 0, bagelPanelVisible: void 0, computerUseMcpState: void 0, denialTracking: void 0, activeGoal: void 0, remoteAutocompactState: void 0, queuedGoalOrigin: void 0, frameOpenFailedPath: null, frameOpenFailedSeen: false, artifactWatchApproved: false, artifactDbWriteApproved: false, artifactDbWriteHumanApproved: false, artifactDbReadConsentSlugs: R$n, artifactDbReadHumanConsentSlugs: x$n, artifactReadConsentSlugs: rZt, artifactConsentEpoch: 0, artifactAssetUploadConsentSlugs: P$n, artifactAssetUploadHumanConsentSlugs: I$n, artifactAssetReadConsentSlugs: oZt, artifactAssetReadHumanConsentSlugs: sZt, artifactOutsideOrgConsentSlugs: iZt, artifactHandlersReadConsentSlugs: O$n, artifactHandlersReadHumanConsentSlugs: M$n, artifactHandlersWriteConsentSlugs: D$n, artifactHandlersWriteHumanConsentSlugs: H$n, artifactRoomJoinConsentSlugs: Aut, artifactReadPageDataApproved: false, artifactReadPageDataHumanApproved: false, artifactPlanPublishConsentPaths: C$n, prResolvedThisSession: false, ultrareviewOverageConfirmed: false, artifactReadVersions: o, artifactReadObservers: i }, s = { artifactReadConsentSlugs: rZt, artifactAssetReadConsentSlugs: oZt, artifactAssetReadHumanConsentSlugs: sZt, artifactOutsideOrgConsentSlugs: iZt }, _ = Object.keys(s);
function k$n(e) {
  return _.every((t) => e[t] === s[t]) ? e : { ...e, ...s };
}
var T = Object.keys(E$n);
function T$n(e) {
  let t = e.webBrowser, r = t.view === void 0 && t.logs.length === 0 && t.unreadErrors === 0 && t.unreadWarnings === 0, n = ZTs(e.workshopTelemetry), S = Object.keys(e.artifactReadVersions ?? {}).length === 0 && Object.keys(e.artifactReadObservers ?? {}).length === 0;
  if (r && n === e.workshopTelemetry && S && T.every((a) => a === "artifactReadVersions" || a === "artifactReadObservers" || e[a] === E$n[a])) return e;
  return { ...e, ...E$n, ...n !== e.workshopTelemetry && { workshopTelemetry: n }, webBrowser: r ? t : { ...Kgo(), cleanupRegistered: t.cleanupRegistered } };
}
function A$n(e) {
  if (e().webBrowser.view && typeof Bun < "u" && "WebView" in Bun) return Bun.WebView.closeAll(), true;
  return false;
}
export {
  A$n,
  E$n,
  T$n,
  k$n
};
