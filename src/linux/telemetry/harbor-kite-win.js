// linux/telemetry/harbor-kite-win.js — Claude Code 2.1.310（linux）模块 chunk-cqrqqt4t.js
import { kn, k } from "../settings/global-config-and-gates.js";
import { Ne } from "../fs/async-hooks.93b1.js";
import { i } from "../shared/environment.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { vf } from "../shell/async-hooks.js";
function ha(e = "send") {
  if (e === "send" && vf().messagingBeyondOwnAgentsDisabled) return false;
  let r = i.CLAUDE_CODE_HARBOR_KITE;
  if (r !== void 0) return Ne(r);
  if (O() === "windows" && !k("tengu_harbor_kite_win", true)) return false;
  return k("tengu_harbor_kite", true);
}
function xre(e) {
  if (e?.flagsSettled === false && kn("tengu_cuddly_willow", true).source === "fallback") return false;
  return k("tengu_cuddly_willow", true);
}
var tpn = "Cross-session messaging is not available in this session.";
export {
  ha,
  tpn,
  xre
};
