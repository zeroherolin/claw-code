// linux/settings/auto-default-nudge-resolved.js — Claude Code 2.1.310（linux）模块 chunk-ffq9306v.js
import { k, Re, ue } from "./global-config-and-gates.js";
import { b, ce } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { fh } from "../permissions/classifier-transcript-too-long.js";
import { pe, Un } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { J2 } from "../permissions/chunk-e0068e3d.js";
function mZr(u, { requireOnboarding: n = true } = {}) {
  let o = ue();
  if (n && !o.hasCompletedOnboarding || o.hasSeenAutoDefaultNudge || !k("tengu_maple_pier", true)) return null;
  let e = pe("userSettings")?.permissions?.defaultMode, t = ["projectSettings", "localSettings", "flagSettings", "policySettings"].some((r) => pe(r)?.permissions?.defaultMode);
  if (e && e !== "auto" && !t && J2(u)) return e;
  return null;
}
function gZr(u, n, o) {
  if (ue().hasSeenAutoDefaultNudge) return;
  let e = fh(n.current_mode);
  if (u === "shown") {
    a("tengu_auto_default_nudge_shown", { current_mode: ce(e), surface: b("ide") });
    return;
  }
  let t = n.choice === "accept" ? "accept" : "decline";
  if (t === "accept") Un("userSettings", { permissions: { defaultMode: "auto" } }, void 0, o);
  Re((r) => r.hasSeenAutoDefaultNudge ? r : { ...r, hasSeenAutoDefaultNudge: true }, o), a("tengu_auto_default_nudge_resolved", { choice: b(t), outcome: t === "accept" ? b("switched") : b("declined"), current_mode: ce(e), surface: b("ide") });
}
export {
  gZr,
  mZr
};
