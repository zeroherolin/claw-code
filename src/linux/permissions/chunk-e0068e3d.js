// linux/permissions/chunk-e0068e3d.js — Claude Code 2.1.310（linux）模块 chunk-20f936eh.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { _L } from "./auto-mode-config.js";
import { ob, gO } from "../core/conversation-engine.js";
import { XT } from "./chunk-a168e9f4.js";
function J2(e) {
  let o = ob(), s = !!e.isAutoModeAvailable && o;
  if (!s) t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${gO()}`);
  return s;
}
function PJt(e) {
  return !!e.isBypassPermissionsModeAvailable && !XT();
}
function IJt(e, o) {
  switch (e.mode) {
    case "default":
      return "acceptEdits";
    case "acceptEdits":
      return "plan";
    case "plan":
      if (PJt(e)) return "bypassPermissions";
      if (J2(e)) return "auto";
      return "default";
    case "bypassPermissions":
      if (J2(e)) return "auto";
      return "default";
    case "dontAsk":
      return "default";
    default:
      return "default";
  }
}
function bco(e, o, s) {
  let n = IJt(e, o);
  return { nextMode: n, context: _L(e.mode, n, e, s) };
}
export {
  IJt,
  J2,
  PJt,
  bco
};
