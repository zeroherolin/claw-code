// shell/unattended-serving-off.fan2.js — Claude Code 2.1.310 模块 chunk-fan2gyh2.js
import { OMt } from "../permissions/auto-mode-config.nbjc.js";
import { bO } from "../core/conversation-engine.31gx.js";
import { LJe, vi } from "../context/team-memory-sync.0s3j.js";
import { f7, wq, _go, Sgo, AMt } from "./gave-up.tnt0.js";
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
