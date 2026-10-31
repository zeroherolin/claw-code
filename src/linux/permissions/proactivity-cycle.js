// linux/permissions/proactivity-cycle.js — Claude Code 2.1.310（linux）模块 chunk-4t83b6a5.js
import { c } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g } from "../telemetry/chunk-9d6962d2.js";
import { e_e, vLe, mGr } from "../models/ccr-unsupported-default-mode-ignored.js";
import { wN, _L } from "./auto-mode-config.js";
import { dHs, vD } from "../core/conversation-engine.js";
import { Ubs } from "../shared/chunk-93872d80.js";
import { J2, PJt } from "./chunk-e0068e3d.js";
function $do(o, e, { trigger: n, offerBypass: s = true } = {}) {
  let t = Fdo(o, e, { offerBypass: s });
  return { level: o, currentMode: e.mode, nextMode: t, context: _L(e.mode, t, e, n) };
}
function Fdo(o, e, { offerBypass: n = true } = {}) {
  let s = mGr() !== void 0, t = e.mode === "plan" ? e.prePlanMode ?? "plan" : e.mode, i = e_e(o, { isAutoModeAvailable: J2(e), isBypassPermissionsModeAvailable: n && PJt(e) && (!s || t === "bypassPermissions") }, e.proactivityBaseline?.mode), r = e.proactivityBaseline?.mode, d = i === "acceptEdits" && r === "acceptEdits" ? r : vD(e) ? void 0 : t;
  return vLe(o, i, d) === void 0 ? i : "default";
}
function Lbs(o, e, n, { offerBypass: s = true } = {}) {
  let t;
  if (e((i) => {
    if (i.proactivityLevel === o) return i;
    let r = $do(o, i.toolPermissionContext, { offerBypass: s });
    return t = { from: i.proactivityLevel, toMode: r.nextMode, modeChanged: r.nextMode !== r.currentMode }, { ...i, proactivityLevel: o, toolPermissionContext: { ...r.context, mode: r.nextMode, startupModeDecidedByProactivityLevel: void 0 } };
  }), t === void 0) return;
  if (m(o, n, { source: "sdk_host", from: t.from, toMode: t.toMode }), t.modeChanged || dHs(t.from, o)) setImmediate(() => {
    wN.emit();
  });
}
function m(o, e, { source: n, from: s, toMode: t }) {
  Ubs(o, e), a("tengu_proactivity_cycle", { level: c(o), from: c(s), to_mode: c(t), source: c(n) }), g("proactivity_cycle");
}
export {
  $do,
  Fdo,
  Lbs
};
