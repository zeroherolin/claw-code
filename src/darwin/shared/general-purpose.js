// darwin/shared/general-purpose.js — Claude Code 2.1.310（darwin）模块 chunk-t0jzx3ak.js
import { $Xr } from "../context/not-admin-owned.js";
var VD = { red: "red_FOR_SUBAGENTS_ONLY", blue: "blue_FOR_SUBAGENTS_ONLY", green: "green_FOR_SUBAGENTS_ONLY", yellow: "yellow_FOR_SUBAGENTS_ONLY", purple: "purple_FOR_SUBAGENTS_ONLY", orange: "orange_FOR_SUBAGENTS_ONLY", pink: "pink_FOR_SUBAGENTS_ONLY", cyan: "cyan_FOR_SUBAGENTS_ONLY" }, XS = Object.keys(VD);
function aV(e) {
  return e !== void 0 && XS.includes(e);
}
function vGe(e) {
  return e.userOverride ?? e.agentDefinitionColor;
}
function kGe(e) {
  if (e === "general-purpose") return;
  let n = $Xr().get(e);
  if (n && XS.includes(n)) return VD[n];
  return;
}
function l_t(e, o) {
  let n = $Xr();
  if (!o) {
    n.delete(e);
    return;
  }
  if (XS.includes(o)) n.set(e, o);
}
export {
  VD,
  XS,
  aV,
  kGe,
  l_t,
  vGe
};
