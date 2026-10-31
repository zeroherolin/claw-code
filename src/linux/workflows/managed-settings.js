// linux/workflows/managed-settings.js — Claude Code 2.1.310（linux）模块 chunk-m83s757k.js
import { U } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { cr, k } from "../settings/global-config-and-gates.js";
import { S_, i } from "../shared/environment.js";
import { j$ } from "../settings/workflow-launch-exec.js";
import { on } from "../auth/env-quad.js";
import { js } from "../settings/chunk-9121eb73.js";
var TGo = ["unrestricted", "small", "medium", "large"], a = "medium", u = "small";
function Tgn(e) {
  return TGo.find((o) => o === e);
}
var n = { small: 5, medium: 10, large: 50 };
function c(e) {
  let o = e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
  return o === void 0 ? e : `${e} (aim for <${o} agents)`;
}
function yJs(e, o) {
  return o && e !== "unrestricted" ? `${e} (default)` : c(e);
}
function _Js(e) {
  return e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
}
function f(e) {
  if (!(e in n)) return e;
  return `${e} — keep workflows under ${n[e]} agents`;
}
function d() {
  return "This is a guideline, not a hard limit — follow it unless the user's prompt calls for a different scale.";
}
function bJs(e, o) {
  let t = o ? "This session has the default workflow size guideline:" : "A workflow size guideline is configured for this session:", r = o ? ' The user can raise or remove it with "Dynamic workflow size" in /config.' : "";
  return `${t} ${f(e)}. ${d()}${r}`;
}
function SJs(e) {
  if (e === "unrestricted") return "Workflow size is now unrestricted — no size guideline applies.";
  return `The workflow size guideline for this session changed: ${f(e)}. ${d()}`;
}
function i7n() {
  return SGr() || j$()?.settings.disableWorkflows === true;
}
function SGr() {
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
  return AGo() === void 0;
}
function AGo() {
  if (!S_()) return "unsupported_runtime";
  let e = i7n(), o = e && !i.CLAUDE_CODE_DISABLE_WORKFLOWS && js("disableWorkflows", false).source === "userSettings";
  if (e && !o) return "managed_settings";
  if (!l7n()) return "org_policy";
  let { available: t, defaultOn: r } = l();
  if (!t) return "unavailable";
  if (!(j$()?.settings.enableWorkflows ?? r)) {
    let s = js("enableWorkflows", r).source;
    return s === "userSettings" || s === "default" ? "user_setting" : "managed_settings";
  }
  return o ? "user_setting" : void 0;
}
function CGo() {
  return l().defaultOn;
}
function o_e() {
  return cr() === "pro" ? u : a;
}
function a7n() {
  return l7n() && !i.CLAUDE_CODE_DISABLE_WORKFLOWS && l().available;
}
function Agn() {
  return j$()?.settings.workflowKeywordTriggerEnabled ?? true;
}
function l7n() {
  return on("allow_workflows");
}
function wJs() {
  if (!S_() || i7n() || !l7n()) return true;
  if (j$()?.settings.enableWorkflows === false) return true;
  return i.CLAUDE_CODE_WORKFLOWS === false || !k("tengu_workflows_enabled", true);
}
function l() {
  return p.of(U().host).resolve();
}
function m() {
  if (!S_()) return { available: false, defaultOn: false };
  if (i.CLAUDE_CODE_WORKFLOWS === true) {
    let o = k("tengu_workflows_enabled", true);
    return { available: o, defaultOn: o };
  }
  if (i.CLAUDE_CODE_WORKFLOWS === false) return { available: false, defaultOn: false };
  if (!k("tengu_workflows_enabled", true)) return { available: false, defaultOn: false };
  return { available: true, defaultOn: cr() !== "pro" };
}
function RGo() {
  return k("tengu_jade_compass", true);
}
export {
  AGo,
  Agn,
  CGo,
  RGo,
  SGr,
  SJs,
  TGo,
  Tgn,
  _Js,
  a7n,
  bJs,
  i7n,
  jm,
  l7n,
  o_e,
  wJs,
  yJs
};
