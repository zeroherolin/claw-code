// artifacts/chunk-qdjaz4y7.js — Claude Code 2.1.310 模块 chunk-qdjaz4y7.js
import { RTs } from "./workshop-build-started.66d5.js";
import { hho } from "../shared/chunk-nrdx784s.js";
import { UFn, BFn, jFn, fZt, mZt, gZt, hZt, WFn, GFn, zFn, VFn, KFn, qFn, xut } from "../shared/chunk-qzc27j97.js";
var o = Object.freeze({}), i = Object.freeze({}), LFn = { bagelActive: void 0, bagelUrl: void 0, bagelPanelVisible: void 0, computerUseMcpState: void 0, denialTracking: void 0, activeGoal: void 0, remoteAutocompactState: void 0, queuedGoalOrigin: void 0, frameOpenFailedPath: null, frameOpenFailedSeen: false, artifactWatchApproved: false, artifactDbWriteApproved: false, artifactDbWriteHumanApproved: false, artifactDbReadConsentSlugs: BFn, artifactDbReadHumanConsentSlugs: jFn, artifactReadConsentSlugs: fZt, artifactConsentEpoch: 0, artifactAssetUploadConsentSlugs: WFn, artifactAssetUploadHumanConsentSlugs: GFn, artifactAssetReadConsentSlugs: mZt, artifactAssetReadHumanConsentSlugs: gZt, artifactOutsideOrgConsentSlugs: hZt, artifactHandlersReadConsentSlugs: zFn, artifactHandlersReadHumanConsentSlugs: VFn, artifactHandlersWriteConsentSlugs: KFn, artifactHandlersWriteHumanConsentSlugs: qFn, artifactRoomJoinConsentSlugs: xut, artifactReadPageDataApproved: false, artifactReadPageDataHumanApproved: false, artifactPlanPublishConsentPaths: UFn, prResolvedThisSession: false, ultrareviewOverageConfirmed: false, artifactReadVersions: o, artifactReadObservers: i }, s = { artifactReadConsentSlugs: fZt, artifactAssetReadConsentSlugs: mZt, artifactAssetReadHumanConsentSlugs: gZt, artifactOutsideOrgConsentSlugs: hZt }, _ = Object.keys(s);
function NFn(e) {
  return _.every((t) => e[t] === s[t]) ? e : { ...e, ...s };
}
var T = Object.keys(LFn);
function FFn(e) {
  let t = e.webBrowser, r = t.view === void 0 && t.logs.length === 0 && t.unreadErrors === 0 && t.unreadWarnings === 0, n = RTs(e.workshopTelemetry), S = Object.keys(e.artifactReadVersions ?? {}).length === 0 && Object.keys(e.artifactReadObservers ?? {}).length === 0;
  if (r && n === e.workshopTelemetry && S && T.every((a) => a === "artifactReadVersions" || a === "artifactReadObservers" || e[a] === LFn[a])) return e;
  return { ...e, ...LFn, ...n !== e.workshopTelemetry && { workshopTelemetry: n }, webBrowser: r ? t : { ...hho(), cleanupRegistered: t.cleanupRegistered } };
}
function $Fn(e) {
  if (e().webBrowser.view && typeof Bun < "u" && "WebView" in Bun) return Bun.WebView.closeAll(), true;
  return false;
}
export {
  $Fn,
  FFn,
  LFn,
  NFn
};
