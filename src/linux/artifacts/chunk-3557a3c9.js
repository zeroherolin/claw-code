// linux/artifacts/chunk-3557a3c9.js — Claude Code 2.1.310（linux）模块 chunk-tyq990zt.js
import { xEe, KSo, VSo, qSo } from "./cobalt-plinth-samphire.js";
import { xco } from "./chunk-1727cd82.js";
import { Vgo } from "../shared/chunk-5a9b74de.js";
import { UTs } from "../agents/chunk-a6cc40b3.js";
function uSr(t) {
  t((e) => e.ultrareviewOverageConfirmed ? e : { ...e, ultrareviewOverageConfirmed: true });
}
function s(t) {
  return (e) => t((o) => ({ ...o, pendingMemoryUpdates: [...o.pendingMemoryUpdates, e] }));
}
function n(t) {
  t((e) => e.prResolvedThisSession ? e : { ...e, prResolvedThisSession: true });
}
function qHn(t) {
  let e = (o) => t((r) => {
    let i = typeof o === "function" ? o(r.toolPermissionContext) : o;
    return r.toolPermissionContext === i ? r : { ...r, toolPermissionContext: i };
  });
  return { setToolPermissionContext: e, setSessionToolPermissionContext: e };
}
function bct(t, e) {
  return { markPrResolvedThisSession: () => n(e), isUltrareviewOverageConfirmed: () => t().ultrareviewOverageConfirmed, markUltrareviewOverageConfirmed: () => uSr(e), getAdvisorSetting: () => t().advisorModel, getMcp: () => t().mcp, getProactivityLevel: () => t().proactivityLevel, getWebBrowser: () => t().webBrowser, ...qHn(e), setWebBrowserSlice: Vgo(e), setArtifactReadVersion: KSo(e), getArtifactReadObservation: xEe(t), artifactRegistries: xco(t, e), setArtifactContractTarget: VSo(e), getArtifactContractTarget: qSo(t), enqueuePendingMemoryUpdate: s(e), agentLifecycle: UTs(t, e) };
}
export {
  bct,
  qHn,
  uSr
};
