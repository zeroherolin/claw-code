// darwin/workflows/managed-settings.js — Claude Code 2.1.310（darwin）模块 chunk-qezssh9y.js
import { U } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { or, k } from "../settings/global-config-and-gates.js";
import { w_, i } from "../shared/environment.js";
import { VF } from "../settings/workflow-launch-exec.js";
import { on } from "../auth/env-quad.js";
import { js } from "../settings/chunk-9121eb73.js";
var eGo = ["unrestricted", "small", "medium", "large"], a = "medium", u = "small";
function Ugn(e) {
  return eGo.find((o) => o === e);
}
var n = { small: 5, medium: 10, large: 50 };
function c(e) {
  let o = e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
  return o === void 0 ? e : `${e} (aim for <${o} agents)`;
}
function tJs(e, o) {
  return o && e !== "unrestricted" ? `${e} (default)` : c(e);
}
function nJs(e) {
  return e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
}
function f(e) {
  if (!(e in n)) return e;
  return `${e} — keep workflows under ${n[e]} agents`;
}
function d() {
  return "This is a guideline, not a hard limit — follow it unless the user's prompt calls for a different scale.";
}
function rJs(e, o) {
  let t = o ? "This session has the default workflow size guideline:" : "A workflow size guideline is configured for this session:", r = o ? ' The user can raise or remove it with "Dynamic workflow size" in /config.' : "";
  return `${t} ${f(e)}. ${d()}${r}`;
}
function oJs(e) {
  if (e === "unrestricted") return "Workflow size is now unrestricted — no size guideline applies.";
  return `The workflow size guideline for this session changed: ${f(e)}. ${d()}`;
}
function kQn() {
  return B2r() || VF()?.settings.disableWorkflows === true;
}
function B2r() {
  return i.CLAUDE_CODE_DISABLE_WORKFLOWS;
}
class w {
  cached = void 0;
  resolve() {
    if (this.cached !== void 0) return this.cached;
    return this.cached = m(), this.cached;
  }
}
var p = new W(() => new w());
function jm() {
  return tGo() === void 0;
}
function tGo() {
  if (!w_()) return "unsupported_runtime";
  let e = kQn(), o = e && !i.CLAUDE_CODE_DISABLE_WORKFLOWS && js("disableWorkflows", false).source === "userSettings";
  if (e && !o) return "managed_settings";
  if (!TQn()) return "org_policy";
  let { available: t, defaultOn: r } = l();
  if (!t) return "unavailable";
  if (!(VF()?.settings.enableWorkflows ?? r)) {
    let s = js("enableWorkflows", r).source;
    return s === "userSettings" || s === "default" ? "user_setting" : "managed_settings";
  }
  return o ? "user_setting" : void 0;
}
function nGo() {
  return l().defaultOn;
}
function c_e() {
  return or() === "pro" ? u : a;
}
function CQn() {
  return TQn() && !i.CLAUDE_CODE_DISABLE_WORKFLOWS && l().available;
}
function Bgn() {
  return VF()?.settings.workflowKeywordTriggerEnabled ?? true;
}
function TQn() {
  return on("allow_workflows");
}
function sJs() {
  if (!w_() || kQn() || !TQn()) return true;
  if (VF()?.settings.enableWorkflows === false) return true;
  return i.CLAUDE_CODE_WORKFLOWS === false || !k("tengu_workflows_enabled", true);
}
function l() {
  return p.of(U().host).resolve();
}
function m() {
  if (!w_()) return { available: false, defaultOn: false };
  if (i.CLAUDE_CODE_WORKFLOWS === true) {
    let o = k("tengu_workflows_enabled", true);
    return { available: o, defaultOn: o };
  }
  if (i.CLAUDE_CODE_WORKFLOWS === false) return { available: false, defaultOn: false };
  if (!k("tengu_workflows_enabled", true)) return { available: false, defaultOn: false };
  return { available: true, defaultOn: or() !== "pro" };
}
function rGo() {
  return k("tengu_jade_compass", true);
}
export {
  B2r,
  Bgn,
  CQn,
  TQn,
  Ugn,
  c_e,
  eGo,
  jm,
  kQn,
  nGo,
  nJs,
  oJs,
  rGo,
  rJs,
  sJs,
  tGo,
  tJs
};
