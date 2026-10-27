// settings/auto-default-nudge-resolved.6cwm.js — Claude Code 2.1.310 模块 chunk-6cwmz7gh.js
import { k, Re, ue } from "./global-config-and-gates.27xj.js";
import { S, ce } from "../agents/third-party.ydpb.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { ph } from "../permissions/classifier-transcript-too-long.8zvz.js";
import { fe, Un } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { i6 } from "../permissions/chunk-rjzvrqhh.js";
function VZr(u, { requireOnboarding: n = true } = {}) {
  let o = ue();
  if (n && !o.hasCompletedOnboarding || o.hasSeenAutoDefaultNudge || !k("tengu_maple_pier", true)) return null;
  let e = fe("userSettings")?.permissions?.defaultMode, t = ["projectSettings", "localSettings", "flagSettings", "policySettings"].some((r) => fe(r)?.permissions?.defaultMode);
  if (e && e !== "auto" && !t && i6(u)) return e;
  return null;
}
function KZr(u, n, o) {
  if (ue().hasSeenAutoDefaultNudge) return;
  let e = ph(n.current_mode);
  if (u === "shown") {
    a("tengu_auto_default_nudge_shown", { current_mode: ce(e), surface: S("ide") });
    return;
  }
  let t = n.choice === "accept" ? "accept" : "decline";
  if (t === "accept") Un("userSettings", { permissions: { defaultMode: "auto" } }, void 0, o);
  Re((r) => r.hasSeenAutoDefaultNudge ? r : { ...r, hasSeenAutoDefaultNudge: true }, o), a("tengu_auto_default_nudge_resolved", { choice: S(t), outcome: t === "accept" ? S("switched") : S("declined"), current_mode: ce(e), surface: S("ide") });
}
export {
  KZr,
  VZr
};
