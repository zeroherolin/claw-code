// permissions/chunk-rjzvrqhh.js — Claude Code 2.1.310 模块 chunk-rjzvrqhh.js
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { wD } from "./auto-mode-config.nbjc.js";
import { sS, bO } from "../core/conversation-engine.31gx.js";
import { QC } from "./chunk-vacbe373.js";
function i6(e) {
  let o = sS(), s = !!e.isAutoModeAvailable && o;
  if (!s) t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${bO()}`);
  return s;
}
function W7t(e) {
  return !!e.isBypassPermissionsModeAvailable && !QC();
}
function G7t(e, o) {
  switch (e.mode) {
    case "default":
      return "acceptEdits";
    case "acceptEdits":
      return "plan";
    case "plan":
      if (W7t(e)) return "bypassPermissions";
      if (i6(e)) return "auto";
      return "default";
    case "bypassPermissions":
      if (i6(e)) return "auto";
      return "default";
    case "dontAsk":
      return "default";
    default:
      return "default";
  }
}
function Wco(e, o, s) {
  let n = G7t(e, o);
  return { nextMode: n, context: wD(e.mode, n, e, s) };
}
export {
  G7t,
  W7t,
  Wco,
  i6
};
