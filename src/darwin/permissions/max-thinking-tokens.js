// darwin/permissions/max-thinking-tokens.js — Claude Code 2.1.310（darwin）模块 chunk-hx3hkv7r.js
import { L } from "../context/not-admin-owned.js";
import { PH } from "../shell/invalid-type.js";
import { Bn, dn } from "../mcp/chunk-0e2a1db6.js";
import { ed, wQn, Q7s } from "../models/ccr-unsupported-default-mode-ignored.js";
import { Ls } from "../mcp/allowed-warning.js";
import { Mj } from "../settings/global-config-and-gates.js";
import { ur } from "./turn-abort.js";
import { QC } from "./chunk-a168e9f4.js";
function d(e, o) {
  if (o.length === 0) return e;
  return { ...e, alwaysAllowRules: { ...e.alwaysAllowRules, command: L([...e.alwaysAllowRules.command || [], ...o]) } };
}
function u(e, o) {
  if (o.length === 0) return e;
  return { ...e, alwaysDenyRules: { ...e.alwaysDenyRules, command: L([...e.alwaysDenyRules.command || [], ...o]) } };
}
function KJn(e, o, n, r) {
  if (!r?.replaceCommandRules && !r?.replaceDenyRules && r?.frozenCommandDenies === void 0 && o.length === 0 && n.length === 0) return e;
  return () => {
    let s = e(), t = s.toolPermissionContext.pollEventDeliveryGuard === true ? s.toolPermissionContext : r?.replaceCommandRules ? { ...s.toolPermissionContext, alwaysAllowRules: { ...s.toolPermissionContext.alwaysAllowRules, command: o } } : d(s.toolPermissionContext, o), i = r?.replaceDenyRules ? { ...t, alwaysDenyRules: { ...t.alwaysDenyRules, command: [...n, ...t.turnDisallowedTools ?? []] } } : r?.frozenCommandDenies !== void 0 ? { ...t, alwaysDenyRules: { ...t.alwaysDenyRules, command: L([...r.frozenCommandDenies, ...t.alwaysDenyRules.command ?? [], ...n]) } } : u(t, n);
    return { ...s, toolPermissionContext: i };
  };
}
function Sgn(e) {
  return (e.denyMatchNames ?? []).filter((o) => o.includes(":"));
}
function l7s(e, o) {
  let n;
  return e.map((r) => {
    if (r.loadedFrom !== "mcp") return r;
    let s = Sgn(r);
    if (s.length === 0) return r;
    n ??= /* @__PURE__ */ new Set([...o.map((a) => a.name), ...e.map((a) => a.name)]);
    let t = s.filter((a) => a !== r.name && n.has(a)), i = r.reservedLabels ?? [];
    if (t.length === i.length && t.every((a, l) => a === i[l])) return r;
    return { ...r, reservedLabels: t.length === 0 ? void 0 : t };
  });
}
var To = "Skill", vV = "skill__";
function c6e(e) {
  return vV + e.replaceAll(":", "__").replace(/[^a-zA-Z0-9_-]/g, "_");
}
function d7s(e) {
  let o = [...e.aliases ?? [], ...e.shedAliases ?? [], ...e.unqualifiedName != null ? [e.unqualifiedName] : [], ...Sgn(e), ...e.directoryListingName !== void 0 ? [e.directoryListingName] : []];
  return o.length ? o.map(c6e) : void 0;
}
class f {
  mode;
  autoClassifierActive;
  constructor(e, o) {
    this.mode = e, this.autoClassifierActive = o;
  }
  toJSON() {
    return;
  }
}
function c7s(e) {
  return new f(e, Ls(e));
}
function k2o(e) {
  return e instanceof f && !e.autoClassifierActive;
}
function g(e) {
  if (!k2o(e)) return;
  let o = e.mode;
  switch (o) {
    case "default":
    case "acceptEdits":
    case "dontAsk":
    case "bubble":
      return o;
    case "plan":
    case "bypassPermissions":
      return "default";
    case "auto":
      return;
    default: {
      let n = o;
      return;
    }
  }
}
var R = /* @__PURE__ */ new Set();
function C2o(e) {
  return dn(Bn(e));
}
function h2r(e) {
  let o = e.remoteBrowserCardAnswers;
  return o !== void 0 && o.list === e.alwaysAllowRules.session ? o.rules : R;
}
function h2t(e, o) {
  let n = o.alwaysAllowRules.session;
  if (e.remoteBrowserCardAnswers === void 0 || n === e.alwaysAllowRules.session) return o;
  let r = h2r(e), s = new Set((n ?? []).map(C2o)), t = new Set([...r].filter((i) => s.has(i)));
  return { ...o, remoteBrowserCardAnswers: n === void 0 || t.size === 0 ? void 0 : { rules: t, list: n } };
}
var x = { allowed_tools: "strip", avoid_prompts: "strip", permission_mode: "strip", working_directory: "strip", disallowed_tools: "keep", bash_command_clamp: "keep", sandbox_auto_allow_suspended: "keep", effort: "keep", model: "keep", max_thinking_tokens: "keep", flag_settings: "keep" };
function A(e) {
  if (!e) return e;
  return e.filter((o) => x[o.kind] === "keep");
}
function bgn(e) {
  return { ...e, abortController: ur(), toolUseId: void 0, permissionPhase: void 0, autoModeClassified: void 0, ...false, permissionLayers: A(e.permissionLayers) };
}
function T2o(e) {
  return e.getAppState?.().mcp?.suppressedClaudeAiConnectors ?? [];
}
function Ih(e) {
  let o = ae(e);
  return o.mode !== "bypassPermissions" && !PH(o.mode, o.isBypassPermissionsModeAvailable);
}
function mS(e) {
  if (ae(e).mode !== "plan") return false;
  return sh(e);
}
function Zbt(e) {
  return e.getAppState();
}
function sh(e) {
  return !Ih(e) || ae(e).shouldAvoidPermissionPrompts === true;
}
function h(e) {
  return e === To || e.startsWith(`${To}(`) || e.startsWith(vV);
}
function S(e) {
  let o = h, n = false, r = {}, s = {};
  for (let [t, i] of Object.entries(e.strippedDangerousRules ?? {})) if (i !== void 0) s[t] = [...i];
  for (let [t, i] of Object.entries(e.alwaysAllowRules)) {
    if (i === void 0) continue;
    let a = i.filter((l) => !o(l));
    if (a.length !== i.length) {
      n = true;
      for (let l of i) if (o(l)) {
        let c = s[t] ??= [];
        if (!c.includes(l)) c.push(l);
      }
    }
    r[t] = a;
  }
  if (!n) return e;
  return h2t(e, { ...e, alwaysAllowRules: r, strippedDangerousRules: s });
}
function Ice(e) {
  return e.getAppState().toolPermissionContext;
}
function ae(e) {
  let o = e.getAppState().toolPermissionContext, n = o !== void 0 && o.pollEventDeliveryGuard === true;
  if (n) o = S(o);
  let r = e.permissionLayers;
  if (!r) return y(e, o);
  let s = r.findLast((t) => t.kind === "working_directory");
  for (let t of r) switch (t.kind) {
    case "allowed_tools":
      if (!n) o = d(o, [...t.allowedTools]);
      break;
    case "disallowed_tools":
      o = u(o, [...t.disallowedTools]);
      break;
    case "bash_command_clamp":
      o = { ...o, bashCommandClamps: [...o.bashCommandClamps ?? [], t.rules] };
      break;
    case "avoid_prompts":
      if (!o.shouldAvoidPermissionPrompts) o = { ...o, shouldAvoidPermissionPrompts: true };
      break;
    case "sandbox_auto_allow_suspended":
      if (!o.sandboxAutoAllowSuspended) o = { ...o, sandboxAutoAllowSuspended: true };
      break;
    case "permission_mode": {
      if (t.mode === "bypassPermissions" && (QC() || !o.isBypassPermissionsModeAvailable)) break;
      o = { ...o, mode: t.mode };
      break;
    }
    case "working_directory":
      if (t === s && !o.additionalWorkingDirectories.has(t.directory)) o = { ...o, additionalWorkingDirectories: new Map([...o.additionalWorkingDirectories, [t.directory, { path: t.directory, source: "session" }]]) };
      break;
    case "effort":
    case "model":
    case "max_thinking_tokens":
    case "flag_settings":
      break;
  }
  return y(e, o);
}
function y(e, o) {
  return w(e, P(e, b(e, o)));
}
function b(e, o) {
  if (o === void 0 || o.mode !== "auto" || e.forPromptShellCommand === true || e.forRemoteExecution === true) return o;
  let n = g(e.permissionModeAtRequest);
  return n === void 0 ? o : m(n, o);
}
function w(e, o) {
  if (e.forPromptShellCommand !== true || o === void 0) return o;
  return o.mode === "auto" ? m("default", o) : o;
}
function m(e, o) {
  return { ...o, mode: e, modeBeforeRewrite: o.modeBeforeRewrite ?? o.mode };
}
function P(e, o) {
  if (e.forRemoteExecution !== true || o === void 0) return o;
  let { blockReadsOutsideWorkingDirectories: n, ...r } = o;
  return o.mode === "acceptEdits" || o.mode === "bypassPermissions" ? m("default", r) : r;
}
function i_(e) {
  let o;
  if (!e) return o;
  for (let n of e) if (n.kind === "effort") o = n.effort;
  return o;
}
function ih(e) {
  return i_(e.permissionLayers) ?? ed(e.getAppState(), p(e), { withHold: y2r(e) });
}
function wgn(e, o) {
  return wQn(o, Hc(e)) ? { effortValue: ih(e), turnEffort: i_(e.permissionLayers) } : { effortValue: Q7s(e.getAppState(), o), turnEffort: void 0 };
}
function y2r(e) {
  return e.agentContext === void 0 || Mj(e.agentContext);
}
function Egn(e) {
  return ih(e) === void 0 ? ed(e.getAppState(), p(e), { withHold: false }) : void 0;
}
function p(e) {
  let o = e.options?.mainLoopModel;
  for (let n of e.permissionLayers ?? []) if (n.kind === "model") o = n.mainLoopModel;
  return o;
}
function oAe(e) {
  return e.getAppState().sessionEffort;
}
function Hc(e) {
  return p(e) ?? e.options.mainLoopModel;
}
function Zet(e) {
  let o = e.options.thinkingConfig;
  for (let n of e.permissionLayers ?? []) if (n.kind === "max_thinking_tokens") o = C(n.maxThinkingTokens);
  return o;
}
function C(e) {
  return e === 0 ? { type: "disabled" } : { type: "enabled", budgetTokens: e };
}
function ett(e) {
  return e.getAppState().ultracode === true;
}
function bDe(e, o) {
  if (o.length === 0) return e;
  let n = e.permissionLayers ? [...e.permissionLayers, ...o] : [...o], r;
  for (let i = o.length - 1; i >= 0; i--) {
    let a = o[i];
    if (a.kind === "model") {
      r = a.mainLoopModel;
      break;
    }
  }
  let s;
  for (let i = o.length - 1; i >= 0; i--) {
    let a = o[i];
    if (a.kind === "max_thinking_tokens") {
      s = C(a.maxThinkingTokens);
      break;
    }
  }
  return { ...e, permissionLayers: n, ...(r !== void 0 || s !== void 0) && { options: { ...e.options, ...r !== void 0 && { mainLoopModel: r }, ...s !== void 0 && { thinkingConfig: s } } } };
}
export {
  C2o,
  Egn,
  Hc,
  Ice,
  Ih,
  KJn,
  Sgn,
  T2o,
  To,
  Zbt,
  Zet,
  ae,
  bDe,
  bgn,
  c6e,
  c7s,
  d7s,
  ett,
  h2r,
  h2t,
  i_,
  ih,
  k2o,
  l7s,
  mS,
  oAe,
  sh,
  vV,
  wgn,
  y2r
};
