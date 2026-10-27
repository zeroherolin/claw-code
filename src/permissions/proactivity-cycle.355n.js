// permissions/proactivity-cycle.355n.js — Claude Code 2.1.310 模块 chunk-355n6fmp.js
import { c } from "../agents/third-party.ydpb.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g } from "../telemetry/chunk-wn8xtaqg.js";
import { i_e, RDe, D2r } from "../models/ccr-unsupported-default-mode-ignored.fdkh.js";
import { CN, wD } from "./auto-mode-config.nbjc.js";
import { qHs, T0 } from "../core/conversation-engine.31gx.js";
import { fbs } from "../shared/chunk-npdjjgp0.js";
import { i6, W7t } from "./chunk-rjzvrqhh.js";
function Ydo(o, e, { trigger: n, offerBypass: s = true } = {}) {
  let t = Xdo(o, e, { offerBypass: s });
  return { level: o, currentMode: e.mode, nextMode: t, context: wD(e.mode, t, e, n) };
}
function Xdo(o, e, { offerBypass: n = true } = {}) {
  let s = D2r() !== void 0, t = e.mode === "plan" ? e.prePlanMode ?? "plan" : e.mode, i = i_e(o, { isAutoModeAvailable: i6(e), isBypassPermissionsModeAvailable: n && W7t(e) && (!s || t === "bypassPermissions") }, e.proactivityBaseline?.mode), r = e.proactivityBaseline?.mode, d = i === "acceptEdits" && r === "acceptEdits" ? r : T0(e) ? void 0 : t;
  return RDe(o, i, d) === void 0 ? i : "default";
}
function dbs(o, e, n, { offerBypass: s = true } = {}) {
  let t;
  if (e((i) => {
    if (i.proactivityLevel === o) return i;
    let r = Ydo(o, i.toolPermissionContext, { offerBypass: s });
    return t = { from: i.proactivityLevel, toMode: r.nextMode, modeChanged: r.nextMode !== r.currentMode }, { ...i, proactivityLevel: o, toolPermissionContext: { ...r.context, mode: r.nextMode, startupModeDecidedByProactivityLevel: void 0 } };
  }), t === void 0) return;
  if (m(o, n, { source: "sdk_host", from: t.from, toMode: t.toMode }), t.modeChanged || qHs(t.from, o)) setImmediate(() => {
    CN.emit();
  });
}
function m(o, e, { source: n, from: s, toMode: t }) {
  fbs(o, e), a("tengu_proactivity_cycle", { level: c(o), from: c(s), to_mode: c(t), source: c(n) }), g("proactivity_cycle");
}
export {
  Xdo,
  Ydo,
  dbs
};
