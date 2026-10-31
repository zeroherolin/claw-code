// darwin/settings/auto-default-nudge-resolved.js — Claude Code 2.1.310（darwin）模块 chunk-6cwmz7gh.js
import { k, Re, ue } from "./global-config-and-gates.js";
import { S, ce } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { ph } from "../permissions/classifier-transcript-too-long.js";
import { fe, Un } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { i6 } from "../permissions/chunk-e0068e3d.js";
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
