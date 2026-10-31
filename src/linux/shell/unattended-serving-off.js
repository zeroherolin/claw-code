// linux/shell/unattended-serving-off.js — Claude Code 2.1.310（linux）模块 chunk-ead88svk.js
import { TMt } from "../permissions/auto-mode-config.js";
import { gO } from "../core/conversation-engine.js";
import { BQe, Ei } from "../context/team-memory-sync.js";
import { iJ, u4, qmo, Ymo, SMt } from "./gave-up.js";
function PPt() {
  return TMt() || BQe("auto_mode_off") || SMt() || BQe("unattended_serving_off");
}
function IPt(n) {
  try {
    if (TMt()) return gO() === "settings" ? "settings" : "breaker";
    if (BQe("auto_mode_off")) return "settings";
    let e = BQe("unattended_serving_off");
    if (!SMt(n) && !e) return "none";
    if (u4() || e) return "consent_forced_off";
    let t = iJ();
    if (t === "declined") return "consent_declined";
    if (t === "accepted" || qmo()) return "consent_unknown";
    return Ymo() ? "sandbox_off" : "consent_unset";
  } catch {
    return "consent_unknown";
  }
}
function uoo(n) {
  let e = IPt();
  if (e === "none") return;
  return { key: `served-auto-off-${e === "consent_unset" || e === "consent_declined" ? "consent" : e}`, text: Ei.auto_off_notice(n, Ei[`auto_off.reason.${e}`]) };
}
export {
  IPt,
  PPt,
  uoo
};
