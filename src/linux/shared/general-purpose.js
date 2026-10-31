// linux/shared/general-purpose.js — Claude Code 2.1.310（linux）模块 chunk-xq3dwnzp.js
import { mXr } from "../context/not-admin-owned.js";
var WL = { red: "red_FOR_SUBAGENTS_ONLY", blue: "blue_FOR_SUBAGENTS_ONLY", green: "green_FOR_SUBAGENTS_ONLY", yellow: "yellow_FOR_SUBAGENTS_ONLY", purple: "purple_FOR_SUBAGENTS_ONLY", orange: "orange_FOR_SUBAGENTS_ONLY", pink: "pink_FOR_SUBAGENTS_ONLY", cyan: "cyan_FOR_SUBAGENTS_ONLY" }, Yb = Object.keys(WL);
function XK(e) {
  return e !== void 0 && Yb.includes(e);
}
function pze(e) {
  return e.userOverride ?? e.agentDefinitionColor;
}
function mze(e) {
  if (e === "general-purpose") return;
  let n = mXr().get(e);
  if (n && Yb.includes(n)) return WL[n];
  return;
}
function t_t(e, o) {
  let n = mXr();
  if (!o) {
    n.delete(e);
    return;
  }
  if (Yb.includes(o)) n.set(e, o);
}
export {
  WL,
  XK,
  Yb,
  mze,
  pze,
  t_t
};
