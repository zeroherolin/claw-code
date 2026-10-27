// plugins/chunk-tcdz2w3z.js — Claude Code 2.1.310 模块 chunk-tcdz2w3z.js
import { J, PA, fP, Mee } from "../context/not-admin-owned.ersa.js";
import { Mr } from "../models/claude-3-5-sonnet.21mz.js";
import { mr } from "../vendor/highlight/chunk-0c6r1zf7.js";
import { Oy, zJn, sb, VJn, Ph, cG } from "../settings/built-in.5fzv.js";
import { Q0, zTe } from "./not-found.2nbd.js";
class SFo extends Error {
}
var d = ["projectSettings", "flagSettings", "policySettings"];
function PGe(o) {
  let e = fP();
  if (e === void 0) return;
  let t = "settingsSource" in o ? d.find((n) => n === o.settingsSource) : void 0;
  if (t !== void 0) return { settingsSource: t };
  return "pluginId" in o && typeof o.pluginId === "string" && e.holds(o.pluginId) ? { pluginId: o.pluginId } : void 0;
}
function A9n(o) {
  let e = fP();
  if (e === void 0 || Ph()) return [];
  let t = VJn();
  return d.flatMap((n) => t && n !== "policySettings" ? [] : e.settingsHooks(n, o));
}
var pBt = "a cloud session does not run command, script, HTTP or MCP tool hooks from the shared server it runs on", g = /* @__PURE__ */ new Set(["prompt", "agent", "callback", "function"]);
function p(o) {
  return g.has(o.type);
}
function R9n(o) {
  if (!J()) return o;
  return o.flatMap((e) => {
    let t = PGe(e) !== void 0, n = e.hooks.filter((i) => p(i) || t && i.type === "command");
    return n.length > 0 ? [{ ...e, hooks: n }] : [];
  });
}
var k = { command: "command", script: "script", http: "HTTP", mcp_tool: "MCP tool" };
function fUr(o) {
  return { permissionRequestResult: { behavior: "deny", message: `The PermissionRequest ${k[o.type] ?? o.type} hook can't run in this cloud session, so this permission request is denied.` }, outcome: "blocking", hook: o };
}
function B2(o) {
  return R9n(c(o));
}
function c(o) {
  if (mr("hooks")) return [];
  let e = PA()?.[o] ?? [];
  if (Ph()) return e.filter((s) => !("pluginRoot" in s) && !("deviceOwner" in s));
  let t = r(), { managedOnly: n, managedPluginIds: i } = t, u = VJn(), a = fP();
  return [...cG()?.[o] ?? [], ...A9n(o), ...n ? [] : Mee()?.[o] ?? [], ...e.filter((s) => H(s) && a?.holds(s.pluginId) === true ? !(zJn() && !i?.has(s.pluginId)) : (!("pluginRoot" in s) || l(s.pluginId, t)) && !(u && "deviceOwner" in s))];
}
function YKs(o, e) {
  let t = fP();
  return R9n(o.flatMap((n) => {
    if (n.skillRoot === void 0 || t?.holds(n.skillRoot) !== true) return e ? [] : [n];
    return n.hooks.every((i) => i.type === "command") && !t.standsDown(n.skillRoot) && !Ph() && !zJn() ? [{ ...n, pluginId: n.skillRoot }] : [];
  }));
}
function H(o) {
  return "pluginRoot" in o && o.hooks.every((e) => e.type === "command");
}
function bFo(o) {
  return zTe(o);
}
function r(o = Oy()) {
  return { managedOnly: o, managedPluginIds: o && !Mr() ? Q0() : null };
}
function l(o, { managedOnly: e, managedPluginIds: t }) {
  return !e || t?.has(o) === true;
}
function x9n(o) {
  return l(o, r(true));
}
function P9n(o) {
  return aye() && !sb() && l(o, r());
}
function aye() {
  return !mr("hooks") && !Ph() && !Mr();
}
export {
  A9n,
  B2,
  P9n,
  PGe,
  R9n,
  SFo,
  YKs,
  aye,
  bFo,
  fUr,
  pBt,
  x9n
};
