// darwin/shell/unattended-serving-off.js — Claude Code 2.1.310（darwin）模块 chunk-fan2gyh2.js
import { OMt } from "../permissions/auto-mode-config.js";
import { bO } from "../core/conversation-engine.js";
import { LJe, vi } from "../context/team-memory-sync.js";
import { f7, wq, _go, Sgo, AMt } from "./gave-up.js";
function LPt() {
  return OMt() || LJe("auto_mode_off") || AMt() || LJe("unattended_serving_off");
}
function NPt(n) {
  try {
    if (OMt()) return bO() === "settings" ? "settings" : "breaker";
    if (LJe("auto_mode_off")) return "settings";
    let e = LJe("unattended_serving_off");
    if (!AMt(n) && !e) return "none";
    if (wq() || e) return "consent_forced_off";
    let t = f7();
    if (t === "declined") return "consent_declined";
    if (t === "accepted" || _go()) return "consent_unknown";
    return Sgo() ? "sandbox_off" : "consent_unset";
  } catch {
    return "consent_unknown";
  }
}
function koo(n) {
  let e = NPt();
  if (e === "none") return;
  return { key: `served-auto-off-${e === "consent_unset" || e === "consent_declined" ? "consent" : e}`, text: vi.auto_off_notice(n, vi[`auto_off.reason.${e}`]) };
}
export {
  LPt,
  NPt,
  koo
};
