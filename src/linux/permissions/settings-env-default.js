// linux/permissions/settings-env-default.js — Claude Code 2.1.310（linux）模块 chunk-kmt6qr99.js
import { gB } from "./classifier-transcript-too-long.js";
import { j7, $t } from "../settings/global-config-and-gates.js";
import { fTt } from "../shell/invalid-type.js";
import { Ro } from "../settings/workflow-launch-exec.js";
import { mg, pe, Kx } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { s5 } from "../settings/non-string-value.js";
import { Ot } from "../models/claude-mythos-preview.js";
function D5t(e) {
  return false;
}
function cCn({ model: e, modelCli: o, agent: t, agentSelectedByCli: i, agents: n, effectiveModel: r, initialMainLoopModel: p, restrictedModel: m }) {
  let l = o === "default" || r === void 0 && p === null;
  if (O() && (m !== void 0 && !D5t(m) || l && (j7().attribution === "enforced" || R()))) return "allowlist";
  if (l && j7().attribution === "env" && C("ANTHROPIC_DEFAULT_MODEL", e)) return "settings_env_default";
  let d = N(e) ? "remap" : void 0;
  if (o) return d;
  if (r !== void 0 && t?.model && t.model !== "inherit") {
    let s = Kx("agent"), u = !i && (s === null || a(s));
    return h(t) || u ? "agent" : d;
  }
  if (r !== void 0) return d;
  let b = !i && a(Kx("agent")) && Ro().some((s) => !a(s) && pe(s)?.agent !== void 0), D = t !== void 0 && h(t) && n.some((s) => s.agentType === t.agentType && !h(s) && Boolean(s.model) && s.model !== "inherit");
  if (b || D) return "agent";
  if (M("ANTHROPIC_MODEL")) return "settings_env";
  if (!l && process.env.ANTHROPIC_MODEL) return d;
  return a(Kx("model")) ? "settings" : d;
}
function nas(e) {
  return e || false;
}
function uCn(e) {
  let o = S(e), t = S({ ...e, settingsModeForwardable: false }), i = o.permissionMode !== t.permissionMode, n = o.permissionMode, r = n === "default" ? gB : n;
  return { decision: o, isModeFromSettings: i, ...i && n !== void 0 && { noticeOnRunner: { level: n === "plan" ? "warning" : "notice", text: `This session runs on a self-hosted runner, where your settings' default permission mode (${r}) doesn't apply. To start in ${r} mode, relaunch with --permission-mode ${r}.`, short: n === "plan" ? "Type /plan: your default mode doesn't apply on a self-hosted runner." : `Your settings' default mode (${r}) doesn't apply on a self-hosted runner.` } } };
}
function S({ model: e, internal: o, explicitMode: t, droppedMode: i = false, pinnedDefault: n = false, settingsMode: r, settingsModeForwardable: p, autoSeedable: m, storedDefaultBar: l, otherChoiceTyped: d, carriedPlanHolds: b, repositoryModel: D, trustedPlanDisplaced: s }) {
  let u = !i && (t === void 0 || n && t === "default");
  return { permissionMode: u ? p ? u ? r : void 0 : void 0 : t, action: "none" };
}
var T = fTt.filter((e) => /^ANTHROPIC_DEFAULT_[A-Z]+_MODEL$/.test(e));
function N(e) {
  return c().some((o) => {
    let t = pe(o), i = y(o);
    return [...Object.values(t?.modelOverrides ?? {}), ...T.filter((n) => M(n)).flatMap((n) => w(i, n))].some((n) => A(n, e));
  });
}
function C(e, o) {
  return M(e) && c().some((t) => w(y(t), e).some((i) => A(i, o)));
}
function A(e, o) {
  return f(e) === f(o) || f($t(e)) === f($t(o));
}
function f(e) {
  return Ot(e.trim().toLowerCase()).trim();
}
function R() {
  return Ro().some((e) => e !== "policySettings" && pe(e)?.enforceAvailableModels === true);
}
function O() {
  return pe("policySettings")?.availableModels === void 0 && c().some((e) => {
    let o = pe(e);
    return o?.availableModels !== void 0 || o?.enforceAvailableModels !== void 0;
  });
}
function M(e) {
  return c().some((o) => g(o, e)) && !g("flagSettings", e) && !g("policySettings", e);
}
function g(e, o) {
  return w(y(e), o).length > 0;
}
function y(e) {
  return s5(pe(e)?.env, e);
}
function w(e, o) {
  return Object.entries(e).filter(([t]) => t.toUpperCase() === o).map(([, t]) => t);
}
function h(e) {
  return a(e.source) || e.source === "plugin" || e.fromAdditionalDirectory === true;
}
function c() {
  return Ro().filter(a);
}
function a(e) {
  return e === "localSettings" || e === "projectSettings" && !mg();
}
export {
  D5t,
  cCn,
  nas,
  uCn
};
