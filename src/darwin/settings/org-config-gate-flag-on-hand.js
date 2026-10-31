// darwin/settings/org-config-gate-flag-on-hand.js — Claude Code 2.1.310（darwin）模块 chunk-1g7a8gsb.js
import { SRe } from "../telemetry/org-config-required.js";
function a(n, r) {
  let e = n.cachedGrowthBookFeatures;
  if (typeof e !== "object" || e === null || Array.isArray(e) || Object.keys(e).length === 0) return true;
  let o = n.growthBookOverrides;
  return SRe in e || typeof o === "object" && o !== null && SRe in o || r !== void 0 && r.includes(SRe);
}
export {
  a as orgConfigGateFlagOnHand
};
