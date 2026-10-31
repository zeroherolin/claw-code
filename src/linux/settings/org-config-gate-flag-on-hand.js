// linux/settings/org-config-gate-flag-on-hand.js — Claude Code 2.1.310（linux）模块 chunk-gg1ytf58.js
import { pRe } from "../telemetry/org-config-required.js";
function a(n, r) {
  let e = n.cachedGrowthBookFeatures;
  if (typeof e !== "object" || e === null || Array.isArray(e) || Object.keys(e).length === 0) return true;
  let o = n.growthBookOverrides;
  return pRe in e || typeof o === "object" && o !== null && pRe in o || r !== void 0 && r.includes(pRe);
}
export {
  a as orgConfigGateFlagOnHand
};
