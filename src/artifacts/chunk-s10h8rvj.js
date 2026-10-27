// artifacts/chunk-s10h8rvj.js — Claude Code 2.1.310 模块 chunk-s10h8rvj.js
import { Hve, Swo, bwo, wwo } from "./cobalt-plinth-samphire.3k3d.js";
import { Zco } from "./chunk-hwwrq0h1.js";
import { yho } from "../shared/chunk-nrdx784s.js";
import { gTs } from "../agents/chunk-9e0559c6.js";
function Tbr(t) {
  t((e) => e.ultrareviewOverageConfirmed ? e : { ...e, ultrareviewOverageConfirmed: true });
}
function s(t) {
  return (e) => t((o) => ({ ...o, pendingMemoryUpdates: [...o.pendingMemoryUpdates, e] }));
}
function n(t) {
  t((e) => e.prResolvedThisSession ? e : { ...e, prResolvedThisSession: true });
}
function aDn(t) {
  let e = (o) => t((r) => {
    let i = typeof o === "function" ? o(r.toolPermissionContext) : o;
    return r.toolPermissionContext === i ? r : { ...r, toolPermissionContext: i };
  });
  return { setToolPermissionContext: e, setSessionToolPermissionContext: e };
}
function Ect(t, e) {
  return { markPrResolvedThisSession: () => n(e), isUltrareviewOverageConfirmed: () => t().ultrareviewOverageConfirmed, markUltrareviewOverageConfirmed: () => Tbr(e), getAdvisorSetting: () => t().advisorModel, getMcp: () => t().mcp, getProactivityLevel: () => t().proactivityLevel, getWebBrowser: () => t().webBrowser, ...aDn(e), setWebBrowserSlice: yho(e), setArtifactReadVersion: Swo(e), getArtifactReadObservation: Hve(t), artifactRegistries: Zco(t, e), setArtifactContractTarget: bwo(e), getArtifactContractTarget: wwo(t), enqueuePendingMemoryUpdate: s(e), agentLifecycle: gTs(t, e) };
}
export {
  Ect,
  Tbr,
  aDn
};
