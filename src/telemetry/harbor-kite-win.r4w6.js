// telemetry/harbor-kite-win.r4w6.js — Claude Code 2.1.310 模块 chunk-r4w65jdc.js
import { kn, k } from "../settings/global-config-and-gates.27xj.js";
import { Ne } from "../fs/async-hooks.9s1z.js";
import { i } from "../shared/environment.9a41.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { wp } from "../shell/async-hooks.4y48.js";
function ya(e = "send") {
  if (e === "send" && wp().messagingBeyondOwnAgentsDisabled) return false;
  let r = i.CLAUDE_CODE_HARBOR_KITE;
  if (r !== void 0) return Ne(r);
  if (O() === "windows" && !k("tengu_harbor_kite_win", true)) return false;
  return k("tengu_harbor_kite", true);
}
function roe(e) {
  if (e?.flagsSettled === false && kn("tengu_cuddly_willow", true).source === "fallback") return false;
  return k("tengu_cuddly_willow", true);
}
var jgn = "Cross-session messaging is not available in this session.";
export {
  jgn,
  roe,
  ya
};
