// darwin/models/ccr-unsupported-default-mode-ignored.js — Claude Code 2.1.310（darwin）模块 chunk-fdkh5k16.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { nt, U, cy, Fc, $Cn, Hz, UCn, gie, F3e, ccr } from "../context/not-admin-owned.js";
import { ce } from "../agents/third-party.js";
import { N } from "../telemetry/anthropic-workspace-id.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { aa, nW, y1, Qx, PI, RS } from "../shell/invalid-type.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { i } from "../shared/environment.js";
import { Qm } from "../remote/local-agent.js";
import { $y, ph } from "../permissions/classifier-transcript-too-long.js";
import { ot } from "../fs/chunk-86be9585.js";
import { tr, dl } from "../shared/async-hooks.5238.js";
import { Is, Ro, Qt, kp } from "../settings/workflow-launch-exec.js";
import { Rli, ln, ek, fe, JRe, Gf, mt, qx, CS, yse, Un, not } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { xl, gb, fCt, Te, Od, cK } from "./total-tokens-reminder.js";
import { WQ, MVr, mti, qtr, kVe, Sqo, Xr, Qzt, Yv, EKr, PVe, Bqo, pd, Xe, ug, Ft, OVe, bL, OLe, oRe, yvt, gn, NLe, Ut, kn, k, Re, ue, nd, Q4o } from "../settings/global-config-and-gates.js";
import { zs, Yai } from "../shared/chunk-f98598c3.js";
import { jm } from "../workflows/managed-settings.js";
import { _6e } from "./fable-5-1-prompt-bundle.js";
import { MZs } from "../shared/request-id.js";
import { cn } from "../shared/chunk-6ae01e90.js";
import { Ot, Cc, $L } from "./claude-mythos-preview.js";
import { o, oe, me } from "../vendor/zod/string-format.js";
import { resolve as Ae } from "path";
var Se = new nt(() => ({ layers: [] }));
function W() {
  return Se.peek(U())?.layers ?? [];
}
function owt(e, n, r) {
  let s = A(A(e.autoCompactOffer, n), r);
  if (typeof s !== "object" || s === null || typeof s.eligibleLoggedAt !== "number") return;
  let { escCount: d, resolved: u } = s, c = typeof u === "object" && u !== null, { choice: E, tokens: m } = c ? u : {};
  return { eligibleLoggedAt: s.eligibleLoggedAt, isAnswered: c, ...typeof d === "number" && Number.isInteger(d) && d > 0 && { escCount: d }, ...(E === "accept" || E === "keep") && typeof m === "number" && { resolved: { choice: E, tokens: m } } };
}
function O2r(e, n, r, s) {
  if (owt(e, n, r) !== void 0) return e;
  let d = A(e.autoCompactOffer, n);
  return { ...e, autoCompactOffer: { ...e.autoCompactOffer, [n]: { ...d, [r]: { ...A(d, r), eligibleLoggedAt: s } } } };
}
function L7s(e, n, r) {
  let s = owt(e, n, r);
  return q(e, n, r, { escCount: (s?.escCount ?? 0) + 1 });
}
function N7s(e, n, r, s) {
  return q(e, n, r, { resolved: s });
}
function q(e, n, r, s) {
  let d = A(e.autoCompactOffer, n), u = A(d, r), c = owt(e, n, r);
  if (c === void 0 || c.isAnswered || !u) return e;
  return { ...e, autoCompactOffer: { ...e.autoCompactOffer, [n]: { ...d, [r]: { ...u, ...s } } } };
}
function A(e, n) {
  return typeof e === "object" && e !== null && Object.hasOwn(e, n) ? e[n] : void 0;
}
function Z(e, n, r) {
  let s = owt(e, n, r);
  return s !== void 0 && (s.isAnswered || (s.escCount ?? 0) > 0);
}
function i_e(e, n, r) {
  switch (e) {
    case "ask":
      return n.isAutoModeAvailable ? "auto" : "default";
    case "default": {
      if (n.isAutoModeAvailable) return "auto";
      let s = r ?? "default";
      if (s === "auto" || s === "bypassPermissions" && !n.isBypassPermissionsModeAvailable) return "default";
      return s;
    }
    case "proactive":
      if (n.isBypassPermissionsModeAvailable) return "bypassPermissions";
      return n.isAutoModeAvailable ? "auto" : "acceptEdits";
  }
}
function G(e, n) {
  if (n === "auto" || e === "proactive" && n === "acceptEdits") return n;
  return;
}
function M2r(e) {
  return hG(e) ?? g6e(e);
}
function ne() {
  let { value: e, source: n } = kn("tengu_auto_mode_config", {});
  if (e?.enabled !== "disabled") return false;
  return n === "override" || n === "payload";
}
function H2r(e) {
  let { cli: n, env: r, settings: s, agentFrontmatter: d } = e, u = $y(n.permissionMode), c = $y(n.inheritPermissionMode), E = n.dangerouslySkipPermissions, m = d?.permissionMode, S = Boolean(E || u || m);
  if (Ne(r.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) {
    let g = E || u && u !== "default" || c && c !== "default" || m && m !== "default", _ = "Permission mode forced to default — CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set (allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    return { mode: "default", notification: g ? _ : void 0, fromAutoFallback: false, baselineMode: "default", decidedByProactivityLevel: false, modeSuppliedOnInvocation: true, autoDefaultWithheldForPendingVerdict: false, levelPickHeldForPendingVerdict: void 0, autoStartWithheldForHipaaTaint: false };
  }
  let v = s.permissions?.disableBypassPermissionsMode === "disable", y = ne() || false, C = !y && !J(s), p = [], h, O = c ? te(c, y, "inherited auto mode dropped — auto mode killswitch active (override- or payload-served)") : void 0, x = c ? O?.mode ?? Qx(c) : void 0;
  if (E) if (Hgn("bypassPermissions")) h = swt, p.push("default");
  else p.push("bypassPermissions");
  if (u) {
    let g = te(u, y, "auto mode killswitch active (override- or payload-served) — falling back to default");
    if (g) {
      if (g.unconsented) h = swt;
      p.push(g.mode);
    }
  }
  if (m) if (m === "auto" && y) t("agent frontmatter requested auto mode but circuit breaker active — falling through", { level: "warn" });
  else if (x && y1(m, x) === void 0) t(`agent frontmatter permissionMode "${m}" ignored — it would widen the agent view's inherited mode (effective "${x}"), and the dispatched agent name is repo-controllable (settings \`agent\`)`, { level: "warn" }), a("tengu_agent_frontmatter_mode_widening_carry_ignored", {});
  else p.push(m);
  if (Qm()) {
    let g = !uQn() ? void 0 : z().map((_) => $y(fe(_)?.permissions?.defaultMode)).find((_) => _ != null);
    if (g != null && Ne(r.CLAUDE_CODE_REMOTE) && !V(g)) {
      if (t(`settings defaultMode "${g}" is not supported in CLAUDE_CODE_REMOTE — only acceptEdits, plan, default, and auto are allowed`, { level: "warn" }), p.length === 0) a("tengu_ccr_unsupported_default_mode_ignored", { mode_hash: cn(g) }), p.push("default");
    } else if (g === "bypassPermissions") {
      if (E || n.allowDangerouslySkipPermissions) if (Hgn("bypassPermissions")) {
        if (p.length === 0) h = swt, process.stderr.write(`⚠ ${h}
`);
        p.push("default");
      } else p.push(g);
      else if (p.length === 0) h = 'Permission mode bypassPermissions from settings was ignored — enable the "Claude Code: Allow Dangerously Skip Permissions" setting in VS Code to consent to it', t('settings defaultMode "bypassPermissions" ignored for a VS Code-owned session without the allow-bypass setting', { level: "warn" }), a("tengu_settings_bypass_unconsented_noninteractive_ignored", {}), process.stderr.write(`⚠ ${h}
`), p.push("default");
    } else if (g === "auto") if (!y) p.push(g);
    else t('settings defaultMode "auto" ignored for the IDE session — auto-mode circuit breaker is active', { level: "warn" });
    else if (g != null) p.push(g);
  } else if (s.permissions?.defaultMode) {
    let g = $y(s.permissions.defaultMode);
    if (Ne(r.CLAUDE_CODE_REMOTE) && !V(g)) t(`settings defaultMode "${g}" is not supported in CLAUDE_CODE_REMOTE — only acceptEdits, plan, default, and auto are allowed`, { level: "warn" }), a("tengu_ccr_unsupported_default_mode_ignored", { mode_hash: cn(g) });
    else if (g === "bypassPermissions") if (!T("bypassPermissions")) {
      if (t('settings defaultMode "bypassPermissions" ignored — only policy/user/flag settings may grant bypass mode (projectSettings and localSettings are repo-controllable)', { level: "warn" }), a("tengu_settings_bypass_mode_untrusted_source_ignored", {}), !c) p.push("default");
    } else if (Hgn("bypassPermissions")) {
      if (p.length === 0) h = swt;
      p.push("default");
    } else p.push(g);
    else if (g !== "auto") if (x && !T(g) && y1(g, x) === void 0) t(`settings defaultMode "${g}" ignored — it would widen the agent view's inherited mode (effective "${x}"), and only policy/user/flag settings may do that (projectSettings and localSettings are repo-controllable)`, { level: "warn" }), a("tengu_settings_mode_widening_carry_ignored", {});
    else p.push(g);
    else if (!T("auto")) t('settings defaultMode "auto" ignored — only policy/user/flag settings may grant auto mode (projectSettings and localSettings are repo-controllable)', { level: "warn" }), a("tengu_settings_auto_mode_untrusted_source_ignored", {});
    else if (y) t("auto mode killswitch active (override- or payload-served) — falling back to default", { level: "warn" });
    else if (Ne(r.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT) && J(s)) t('settings defaultMode "auto" ignored — disableAutoMode is set and this is an unattended Remote Control machine session', { level: "warn" });
    else p.push("auto");
  }
  if (c) {
    let g = O;
    if (g) {
      if (g.unconsented && p.length === 0) h = swt;
      p.push(g.mode);
    }
  }
  let M;
  for (let g of p) {
    if (g === "bypassPermissions" && v) {
      t("bypassPermissions mode is disabled by settings", { level: "warn" }), h = "Bypass permissions mode was disabled by settings";
      continue;
    }
    M = { mode: g, notification: h };
    break;
  }
  let L = false, P = false, H, F = false;
  if (!M) {
    let g = C && (!Ne(r.CLAUDE_CODE_REMOTE) && uQn() && (!n.isNonInteractiveSession || Qm() || k("tengu_moss_anchor", false)) || Ne(r.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT)), _ = "default";
    if (g) {
      let w = D2r(), D = Ne(r.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT);
      if (w === void 0 || w === "pending" && D) _ = "auto", L = true;
      else if (w === "taint") h ??= ye, F = true;
      else if (w === "pending") P = true;
    }
    M = { mode: _, notification: h };
  }
  let j = M.mode, Q = false;
  if (e.proactivityLevel && e.proactivityLevel !== "default" && !S) {
    let g = i_e(e.proactivityLevel, { isAutoModeAvailable: C, isBypassPermissionsModeAvailable: false }, j), _ = G(e.proactivityLevel, g), w = RDe(e.proactivityLevel, g, j), D = w === "pending" && Ne(r.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT) ? void 0 : w;
    if (_ !== void 0 && D === "taint") M.notification ??= ie(_), F = true;
    else if (D === "pending") P = true, H = _;
    M = { mode: D === void 0 ? g : "default", notification: M.notification }, L = false, Q = true;
  }
  return { mode: M.mode, notification: M.notification, fromAutoFallback: L, baselineMode: j, decidedByProactivityLevel: Q, modeSuppliedOnInvocation: S, autoDefaultWithheldForPendingVerdict: P, levelPickHeldForPendingVerdict: H, autoStartWithheldForHipaaTaint: F };
}
var re = { auto: "Auto mode", acceptEdits: "Accept edits" }, ye = ie("auto");
function ie(e) {
  return `${re[e]} isn't the default for your organization · Shift+Tab to switch`;
}
function F7s(e) {
  return `${re[e]} didn't start: your organization's policy hasn't loaded · Shift+Tab to switch`;
}
function RDe(e, n, r) {
  let s = G(e, n);
  if (s === void 0 || s === r) return;
  return D2r();
}
function D2r() {
  let e = Yai();
  if (zs("hipaa") || e === "unobtainable_seen_hipaa") return "taint";
  return e === "pending" ? "pending" : void 0;
}
function $7s(e) {
  let n = e.cli.fallbackModel ?? (Array.isArray(e.settings.fallbackModel) ? e.settings.fallbackModel : void 0);
  if (n === void 0) return;
  return ve(n, Xr);
}
function W2o(e) {
  return e.split(",").map((n) => n.trim()).filter((n) => n !== "");
}
function ve(e, n) {
  let r = typeof e === "string" ? W2o(e) : e, s = /* @__PURE__ */ new Set(), d = [];
  for (let u of r) {
    let c = typeof u === "string" ? u.trim() : "";
    if (c === "") continue;
    let E = Ft(c === "default" ? pd() : c);
    if (s.has(E)) continue;
    if (!n(E)) continue;
    if (s.add(E), d.push(E), d.length === he) break;
  }
  return d.length > 0 ? d : void 0;
}
var he = 3;
function be(e) {
  switch (e) {
    case "userSettings":
      return "user_settings";
    case "projectSettings":
      return "project_settings";
    case "localSettings":
      return "local_settings";
    case "flagSettings":
      return "flag_settings";
    case "policySettings":
      return "policy_settings";
    case null:
      return "settings";
  }
}
function _e(e) {
  switch (e) {
    case "env":
    case "user_settings":
    case "project_settings":
    case "local_settings":
    case "flag_settings":
    case "policy_settings":
    case "settings":
    case "agent_frontmatter":
    case "routine_frontmatter":
      return true;
    default:
      return false;
  }
}
function Me(e, n, r) {
  if (WQ()) {
    let y = Sqo();
    if (y !== null && !n && F3e().includes("userSettings") && new Date(y).getTime() > new Date(ue().lastSeenOrgDefaultUpdatedAt ?? 0).getTime()) Re((p) => p.lastSeenOrgDefaultUpdatedAt === y ? p : { ...p, lastSeenOrgDefaultUpdatedAt: y }, r);
    if (PVe() === null) return e;
    let C = e ? qx("model") : null;
    if (C === "policySettings" || C === "flagSettings") return e;
    return;
  }
  let s = kVe();
  if (!s || EKr() === null) return e;
  let d = e ? qx("model") : null;
  if (d === "policySettings" || d === "flagSettings") return e;
  let u = F3e().includes("userSettings"), c = ue().lastSeenOrgDefaultUpdatedAt, E = new Date(s.updated_at).getTime() > new Date(c ?? 0).getTime(), m = E && !n && u, S = () => Re((y) => y.lastSeenOrgDefaultUpdatedAt === s.updated_at ? y : { ...y, lastSeenOrgDefaultUpdatedAt: s.updated_at }, r);
  if (s.override_user_selection) {
    if (m) S();
    return;
  }
  if (n) return e;
  let v = u ? fe("userSettings")?.model : void 0;
  if (E && v) {
    if (Un("userSettings", { model: void 0 }, void 0, r).then((y) => {
      if (!y.error) S();
    }), d === "userSettings") return;
  } else if (m) S();
  return e;
}
function G2o(e, n) {
  let { cli: r, env: s, settings: d, agentFrontmatter: u } = e, c = r.model === "default" ? pd() : r.model, E = c, m = null;
  if (c) m = r.model === "default" ? "cli_default" : "cli";
  let S = u?.model, v;
  if (!c && S && S !== "inherit") v = S, c = Ft(S), E = S, m = u?.modelSource === "routine" ? "routine_frontmatter" : "agent_frontmatter";
  let y = false, C, p = c;
  if (p === void 0) {
    if (s.ANTHROPIC_MODEL) p = s.ANTHROPIC_MODEL, m = "env";
    else if (p = Me(d.model || void 0, r.isNonInteractiveSession === true, n) || void 0, p !== void 0) m = be(qx("model"));
    E = p;
  }
  let h;
  if (p && !Xr(p)) {
    let L = v !== void 0 && !y ? v : p, P = y ? null : Yv(L);
    if (P !== null) {
      if (h = L, p = P, c !== void 0) c = P;
    } else {
      if (!(L.trim().toLowerCase() === "default" || Bqo(L)) && !y) h = L;
      p = void 0, E = void 0, m = null, c = void 0;
    }
  }
  let O;
  if (p && Qzt(p, _e(m) ? "persisted" : "explicit")) O = p, p = void 0, E = void 0, m = null, c = void 0;
  let x = p || null, M = Ft(x ?? pd());
  return { effectiveModel: c, initialMainLoopModel: x, resolvedInitialModel: M, rawModelRequest: E || null, restrictedModel: h, unservedModelSpelling: O, settingLayer: m, modelWithoutStartupOverride: C };
}
function U7s(e) {
  let n = e.cli.systemPrompt, r = e.cli.appendSystemPrompt, s = Rli();
  if (s) r = r ? `${r}

${s}` : s;
  return { systemPrompt: n, appendSystemPrompt: r };
}
function uQn() {
  return k("tengu_harbor_willow", true) || Q4o()?.meadow_lantern === true;
}
var Le = Is.filter((e) => !kp.has(e)).toReversed(), Ce = ["acceptEdits", "plan", "default", "auto"];
function V(e) {
  return Ce.includes(e);
}
function z() {
  return Le.filter(Qt);
}
function T(e) {
  return z().some((n) => fe(n)?.permissions?.defaultMode === e);
}
function J(e) {
  return e.permissions?.disableAutoMode === "disable" || e.disableAutoMode === "disable";
}
function S2t(e) {
  return !J(e) && !ne();
}
function xe(e) {
  return z().map((r) => $y(fe(r)?.permissions?.defaultMode)).find((r) => r != null) === "plan" && $y(e.permissions?.defaultMode) !== "plan";
}
function z2o() {
  let e = Is.filter(Qt).map((n) => ({ source: n, mode: (n === "policySettings" ? yse().length > 0 || CS().some((r) => r.userWritable === true && r.path === "") || gie() && JRe() || PI() !== false && !RS() : ek(n).some((r) => r.severity !== "warning")) ? "unreadable" : fe(n)?.permissions?.defaultMode })).findLast(({ source: n, mode: r }) => r !== void 0 && (r !== "auto" || !kp.has(n)));
  return e === void 0 || e.mode === "auto" ? void 0 : e.mode === "unreadable" ? "settings_unreadable" : "stored_default";
}
function pQn({ settings: e, scrubbed: n, typedLevel: r, carriedMode: s }) {
  let d = r !== void 0 && r !== "default";
  return { autoSeedable: S2t(e) && !n, storedDefaultBar: z2o(), otherChoiceTyped: d || s !== void 0 && s !== "auto", carriedPlanHolds: s === "plan" && !d, trustedPlanDisplaced: xe(e) };
}
function Pe(e) {
  let n = $y(e.permissions?.defaultMode);
  if (n == null || !V(n)) return;
  if (n !== "auto") return n;
  return T("auto") && S2t(e) ? "auto" : void 0;
}
function fQn({ gateOn: e, permissionModeTyped: n, dangerouslySkipPermissions: r, scrubbed: s, settings: d, effort: u }) {
  let c = !n && !r && !s, E = c ? Pe(d) : void 0;
  return { considered: e && c, settingsDefaultModePresent: d.permissions?.defaultMode != null, settingsDefault: E, permissionMode: e ? E : void 0, effort: e ? u : void 0 };
}
function B7s({ sentMode: e, repositorySettings: n }) {
  if (e === "auto") return;
  if (e !== void 0) return e;
  let r = Y(n?.permissions?.defaultMode);
  return r !== void 0 && r !== "auto" && V(r) ? r : "default";
}
function j7s({ seed: e, settingsMode: n, sentMode: r, startsIn: s }) {
  if (!e.considered || !e.settingsDefaultModePresent || e.permissionMode !== void 0 || n === void 0 || r !== void 0 && Y(n) === r) return null;
  let d = Y(n) === "auto" ? "auto mode could not be requested from this machine (it is off here, or only the repository asked for it)" : "not a mode a cloud session can start in";
  return { text: `Settings kept on this machine: the default permission mode in your settings (${n}) — ${d}${s !== void 0 ? `; the session starts in ${s} mode` : ""}`, level: "info" };
}
function Y(e) {
  return e === void 0 ? void 0 : ph(e);
}
var V2o = 'bypass in a background worker needs consent recorded in your user settings — add "skipDangerousModePermissionPrompt": true to ~/.claude/settings.json (accepting the interactive disclaimer writes the same key, but that dialog is skipped while consent already exists in .claude/settings.local.json or via --settings, which does not count here)', swt = `Permission mode downgraded to default: ${V2o}`;
function Hgn(e) {
  if (!Ut()) return false;
  if (e === "bypassPermissions") return !not() && !ue().bypassPermissionsModeAccepted;
  return false;
}
function te(e, n, r) {
  let s = Qx(e);
  if (Hgn(s)) return { mode: "default", unconsented: true };
  if (s === "auto" && n) {
    t(r, { level: "warn" });
    return;
  }
  return { mode: s };
}
function a4(e, n) {
  return ug(Ft(e)) === ug(Ft(n));
}
var we = "tengu_loggia_passage";
function B() {
  return k(we, false);
}
function W7s({ sent: e, turnEffort: n, hookEffortValue: r }) {
  if (e === void 0) return { carry: null, withheld: "none_sent" };
  if (r !== void 0) return { carry: null, withheld: "hook" };
  if (n !== void 0) return { carry: null, withheld: "turn_layer" };
  return B() ? { carry: null, withheld: "killed" } : { carry: e };
}
function Dgn(e) {
  return { refused_effort_level: ce(e.carry), refused_effort_withheld: ce(e.carry === null ? e.withheld : void 0) };
}
function K2o({ refusedEffort: e, fallbackModel: n, heldBySession: r, loopOverride: s, loopEffort: d }) {
  if (r) return { latchEffort: e.carry ?? void 0, loopEffort: void 0 };
  let u = e.carry ?? q2o(s, d);
  return { latchEffort: void 0, loopEffort: u === void 0 ? void 0 : { model: n, level: u } };
}
function q2o(e, n) {
  return n !== void 0 && n.model === e ? n.level : void 0;
}
function se() {
  return Hz()?.carriedEffort !== void 0;
}
function R(e) {
  let n = Hz(), r = Fc();
  if (n?.carriedEffort === void 0 || r == null || B()) return;
  try {
    return a4(r, n.fallbackModel) && a4(e, n.fallbackModel) ? n.carriedEffort : void 0;
  } catch (s) {
    l(N(s));
    return;
  }
}
function mQn({ loopEffort: e, continuesMainConversation: n }, r) {
  if (e !== void 0) return B() ? null : e;
  return (n ? R(r) : void 0) ?? null;
}
function G7s({ carried: e, withIt: n, withoutIt: r, isSavedSetAside: s }) {
  if (n === r) return n === e ? "moot" : "no_effect";
  if (n !== e) return "clamped";
  return s ? "applied_over_saved" : "applied";
}
function gQn() {
  UCn("effort_change");
}
function z7s(e) {
  let n = Hz();
  if (n !== void 0 && !a4(e, n.fallbackModel)) UCn("model_change");
}
function V7s() {
  let e = Hz();
  if (e?.carriedEffort === void 0) return;
  let n = Fc();
  if (B()) UCn("kill_switch");
  else if (n == null || !a4(n, e.fallbackModel)) UCn("model_change");
}
function a_e() {
  return i.CLAUDE_CODE_MAX_EFFORT_REMINDER ?? k("tengu_proud_clover", false);
}
function Tw(e) {
  if (ccr(e)) return false;
  let n = OLe(e, "effort");
  if (n !== void 0) return n;
  let r = Xe(e), s = fCt("effort", r);
  if (s !== void 0) return s;
  let d = MVr(e, r);
  if (d !== void 0) return d.length > 0;
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-haiku-4-5") return false;
  if (i.CLAUDE_CODE_ALWAYS_ENABLE_EFFORT) return true;
  if (gb(r, "effort", e) || r === "claude-mythos-5") return true;
  return cK(Od(e));
}
function Hce(e) {
  if (ccr(e)) return false;
  let n = OLe(e, "max_effort");
  if (n !== void 0) return n;
  let r = Xe(e), s = ae("max_effort", e, r);
  if (s !== void 0) return s;
  let d = MVr(e, r);
  if (d !== void 0) return d.includes("max");
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-opus-4-5" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-haiku-4-5") return false;
  if (gb(r, "max_effort", e) || r === "claude-mythos-5") return true;
  return cK(Od(e));
}
function iwt(e) {
  if (ccr(e)) return false;
  let n = OLe(e, "xhigh_effort");
  if (n !== void 0) return n;
  let r = Xe(e), s = ae("xhigh_effort", e, r);
  if (s !== void 0) return s;
  let d = MVr(e, r);
  if (d !== void 0) return d.includes("xhigh");
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-opus-4-5" || r === "claude-opus-4-6" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-sonnet-4-6" || r === "claude-haiku-4-5") return false;
  if (gb(r, "xhigh_effort", e) || r === "claude-mythos-5") return true;
  return cK(Od(e));
}
function ae(e, n, r) {
  if (fCt("effort", r) === false) return false;
  let s = fCt(e, r);
  if (s === void 0) return;
  return s && Tw(n);
}
function Oe(e) {
  return iwt(e);
}
function sH(e) {
  return jm() && (e === void 0 || Oe(e));
}
function Bm(e, n) {
  return e === true && sH(n);
}
function hQn(e, n, r) {
  if (n.sessionEffort?.kind === "level") {
    let s = n.sessionEffort.value;
    return !(r === s || typeof r === "string" && Aw(r) && xQ(r, e) === s);
  }
  return AV(e, ed(n)) !== AV(e, r);
}
function yQn(e, n, r) {
  if (r.sessionEffort?.kind === "level" || typeof n !== "string") return false;
  let s = Rw(e, ed(r, e)), d = Rw(e, ed(r, e, { withHold: false }), { carriedEffort: null });
  return uL(n) === s && s !== d;
}
function Aw(e) {
  return aa.includes(e);
}
function b(e) {
  return aa.indexOf(e);
}
var awt = "high";
function L2r(e) {
  return Aw(e) && b(e) > b(awt);
}
function N2r(e) {
  let n = Xe(e);
  return gb(n, "thinking_disabled_effort_cap", e) ?? n === "claude-opus-5";
}
function pe(e) {
  let n = [...Gf(), ...Ro().map((d) => fe(d)), ...W()], r = n.some((d) => Object.values(d?.modelSettings ?? {}).some((u) => u?.maxEffortLevel !== void 0)) ? TV(e) : void 0, s = null;
  for (let d of n) {
    if (!d) continue;
    let u;
    if (r !== void 0) for (let [c, E] of Object.entries(d.modelSettings ?? {})) {
      let m = E?.maxEffortLevel;
      if (m !== void 0 && (u === void 0 || b(m) < b(u)) && TV(c) === r) u = m;
    }
    if (u ??= d.maxEffortLevel, u !== void 0 && u !== "max" && (s === null || b(u) < b(s))) s = u;
  }
  return s;
}
function Lgn(e) {
  let n = pe(e), r = null, s = Te();
  if (s === "firstParty" || s === "gateway") {
    let u = Xe(bL(e.trim().toLowerCase()), { identity: true }), c = oRe().find((E) => Xe(bL(E.apiName.trim().toLowerCase()), { identity: true }) === u)?.maxEffortLevel;
    r = c != null && Aw(c) ? c : null;
  }
  let d = r === null ? n : n === null ? r : b(n) < b(r) ? n : r;
  return d === "max" ? null : d;
}
function m6e(e) {
  if (Te() !== "firstParty") return null;
  let n = yvt();
  if (n === null) return null;
  let r = n.default_effort_level;
  if (r == null || !Aw(r)) return null;
  let s = Xe(bL(e.trim().toLowerCase()), { identity: true });
  return Xe(bL(n.name.trim().toLowerCase()), { identity: true }) === s ? r : null;
}
function F2r(e) {
  return yvt()?.override_user_effort === true && m6e(e) !== null;
}
function $2r(e, n) {
  let r = Lgn(n);
  return r === null || b(e) <= b(r);
}
function l_e(e) {
  return aa.filter((n) => $2r(n, e));
}
function xQ(e, n) {
  let r = Lgn(n);
  return r !== null && b(e) > b(r) ? r : e;
}
function K(e, n) {
  if (n === "xhigh") return iwt(e);
  if (n === "max") return Hce(e);
  return true;
}
function K7s(e, n, r) {
  let s = l_e(e).filter((d) => d !== "max" && K(e, d));
  return r === 1 ? s.find((d) => b(d) > b(n)) : s.findLast((d) => b(d) < b(n));
}
function q7s(e) {
  let n = Lgn(e);
  return n !== null && aa.some((r) => b(r) > b(n) && K(e, r));
}
function Y7s(e, n) {
  if (typeof e !== "string" || !Aw(e)) return null;
  let r = Lgn(n);
  if (r === null || b(e) <= b(r)) return null;
  let s = Rw(n, e) ?? r;
  return `Effort '${e}' exceeds the cap for ${n} set by your settings or organization; using '${s}'.`;
}
var ge = { med: "medium" }, Ee = { ultracode: "xhigh" };
function d_e(e) {
  if (typeof e !== "string") return;
  let n = e.trim().toLowerCase();
  return Object.hasOwn(Ee, n) ? n : void 0;
}
function g6e(e) {
  let n = d_e(e);
  return n === void 0 ? void 0 : Ee[n];
}
function l4(e) {
  return String(e);
}
function uL(e) {
  let n = e.trim().toLowerCase(), r = ge[n] ?? n;
  return Aw(r) ? r : void 0;
}
function lwt(e) {
  let n = uL(e);
  if (n !== void 0) return { level: n, warning: void 0 };
  let r = d_e(e);
  if (r !== void 0) return { level: r, warning: void 0 };
  return { level: void 0, warning: `Unknown --effort value '${e}' — ignoring it and using the default effort. Valid values: ${aa.join(", ")}.` };
}
function hG(e) {
  if (e === void 0 || e === null || e === "") return;
  if (typeof e === "number" && le(e)) return e;
  let n = String(e).toLowerCase(), r = ge[n] ?? n;
  if (Aw(r)) return r;
  let s = parseInt(n, 10);
  if (!isNaN(s) && le(s)) return s;
  return;
}
function aAe(e) {
  if (e === "low" || e === "medium" || e === "high" || e === "xhigh") return e;
  return;
}
function dwt(e) {
  return mt().ultracode === true || d_e(e) === "ultracode";
}
function tA() {
  let e = i.CLAUDE_CODE_EFFORT_LEVEL;
  return e?.toLowerCase() === "unset" || e?.toLowerCase() === "auto" ? null : hG(e);
}
var _Qn = Object.freeze({ kind: "inherit" }), De = Object.freeze({ kind: "default" });
function noe(e) {
  return { kind: "level", value: e };
}
function cwt(e) {
  return e === void 0 ? De : noe(e);
}
function ke(e) {
  return e === void 0 ? _Qn : noe(e);
}
function X7s(e) {
  return e.kind === "level" ? String(e.value) : null;
}
function SQn(e) {
  return typeof e === "string" && e !== "" && e.length <= MZs ? e : null;
}
function Dce(e, n) {
  return e === n || e.kind === n.kind && (e.kind !== "level" || n.kind === "level" && e.value === n.value);
}
var Fe = /* @__PURE__ */ new Set(["claude-3-5-haiku", "claude-3-5-sonnet", "claude-3-7-sonnet", "claude-haiku-4-5", "claude-sonnet-4-0", "claude-sonnet-4-5", "claude-sonnet-4-6", "claude-sonnet-5", "claude-opus-4-0", "claude-opus-4-1", "claude-opus-4-5", "claude-opus-4-6", "claude-opus-4-7", "claude-opus-4-8", "claude-opus-5", "claude-fable-5", "claude-fable-5-1", "claude-mythos-5", "claude-mythos-5-1"]), de = /* @__PURE__ */ new Map();
function Y2o(e) {
  let n = de.get(e);
  if (n === void 0) n = Fe.has(e) || !$L(Cc(e)), de.set(e, n);
  return n;
}
function Ve() {
  let e = ue();
  if (e.firstStartVersion !== void 0) return [];
  let n = [];
  if (!e.unpinOpus47LaunchEffort) n.push("claude-opus-4-7");
  if (!e.unpinOpus48LaunchEffort) n.push("claude-opus-4-8");
  if (!e.unpinFable5LaunchEffort) {
    n.push("claude-fable-5");
    let r = i.ANTHROPIC_DEFAULT_FABLE_MODEL;
    if (r && !_6e(Xe(Ft(r), { deterministic: true, identity: true }))) n.push(TV(r));
  }
  return n;
}
function Ngn() {
  let e = /* @__PURE__ */ new Set(), n = [];
  for (let r of Ro()) {
    if (r === "flagSettings") {
      let [u, c] = W();
      if (u !== void 0) n.push({ source: "projectSettings", settings: u });
      if (c !== void 0) n.push({ source: "localSettings", settings: c });
    }
    let s = ln(r);
    if (s !== void 0) {
      let u = Ae(s);
      if (e.has(u) && r !== "flagSettings") continue;
      e.add(u);
    }
    let d = fe(r);
    if (d !== void 0 && d !== null) n.push({ source: r, settings: d });
  }
  return n;
}
function b2t() {
  let e = Ngn(), n = yvt(), r = n !== null && F2r(n.name) ? TV(n.name) : void 0, s, d, u = [];
  for (let { source: S, settings: v } of e) {
    let y = v.effortLevel !== void 0;
    if (S === "userSettings") {
      s = aAe(v.effortLevel), u.push({ source: S, setsTopLevel: false, settings: v });
      continue;
    }
    if (y) d = { level: aAe(v.effortLevel) };
    u.push({ source: S, setsTopLevel: y, settings: v });
  }
  u.reverse();
  let c = u.map(({ settings: S }) => {
    let v = /* @__PURE__ */ new Map();
    for (let [y, C] of Object.entries(S.modelSettings ?? {})) {
      let p = C?.effortLevel;
      if (p === void 0) continue;
      let h = TV(y);
      if (y === h || !v.has(h)) v.set(h, p);
    }
    return v;
  }), E = /* @__PURE__ */ new Set();
  if (r !== void 0) E.add(r);
  for (let S of c) for (let v of S.keys()) E.add(v);
  let m = {};
  for (let S of E) {
    if (S === r) m[S] = void 0;
    for (let v = 0; v < u.length; v++) {
      if (S === r && !Ue(u[v].source)) continue;
      let y = c[v].get(S);
      if (y !== void 0) {
        m[S] = aAe(y);
        break;
      }
      if (u[v].setsTopLevel) {
        m[S] = aAe(u[v].settings.effortLevel);
        break;
      }
    }
  }
  if (d !== void 0) s = void 0;
  if (s !== void 0) {
    for (let S of Ve()) if (!Object.hasOwn(m, S) && !Object.hasOwn(Object.prototype, S)) m[S] = void 0;
  }
  return { default: d?.level, legacyUserEffort: s, byModel: m };
}
function Ue(e) {
  return e === "policySettings" || e === "flagSettings";
}
function bQn(e) {
  if (!F2r(e)) return null;
  return CF(I(U2r(b2t(), e) ?? EQn(e), e));
}
function U2r(e, n) {
  let r = TV(n);
  if (Object.hasOwn(e.byModel, r)) return e.byModel[r];
  if (e.default !== void 0 || e.legacyUserEffort === void 0) return e.default;
  return Y2o(r) ? e.legacyUserEffort : void 0;
}
function Be(e) {
  if (e.legacyUserEffort !== void 0) return false;
  for (let n in e.byModel) return false;
  return true;
}
function TV(e) {
  return Ot(Xe(OVe(e), { deterministic: true, identity: true }));
}
function Ie(e, n) {
  return X2o(e, { effortLevel: n }, { effortLevel: n });
}
function X2o(e, n, r) {
  let s = TV(e);
  return Object.hasOwn(Object.prototype, s) ? r : { modelSettings: { [s]: n } };
}
function J7s(e) {
  let n = gn()?.accountUuid;
  return n !== void 0 && Z(ue(), n, e);
}
function ed(e, n, { withHold: r = true } = {}) {
  let s = e.sessionEffort ?? _Qn;
  switch (s.kind) {
    case "level":
      return s.value;
    case "default":
      return;
    case "inherit": {
      if (e.settingsEffortTable === void 0) return;
      if (Be(e.settingsEffortTable) && !se()) return e.settingsEffortTable.default;
      let d = n ?? Ft(e.mainLoopModelForSession ?? e.mainLoopModel ?? pd());
      return r && w2t(d) !== void 0 ? void 0 : U2r(e.settingsEffortTable, d);
    }
  }
}
function wQn(e, n) {
  return TV(e) === TV(n);
}
function Q7s(e, n) {
  return ed(J2o(e), n, { withHold: false });
}
function J2o(e) {
  return e.sessionEffort?.kind === "level" ? { ...e, sessionEffort: _Qn } : e;
}
function uwt(e) {
  return e.kind === "level" && typeof e.value === "string" ? e.value : void 0;
}
function Rw(e, n, { turnEffort: r, hookEffortValue: s, carriedEffort: d = R(e) } = {}) {
  if (!Tw(e)) return;
  let u = pe(e) !== null;
  if (s !== void 0) {
    let S = typeof s === "number" && u ? CF(s) : s;
    return I(S, e);
  }
  let c = tA();
  if (c === null && !u) return;
  let E = EQn(e, d), m = c ?? (c === null ? E : void 0) ?? r ?? n ?? E;
  if (typeof m === "number" && u) m = CF(m);
  return I(m, e);
}
function Fgn(e, n) {
  if (!Tw(e) || tA() !== void 0) return;
  if (typeof n === "string") return xQ(n, e);
  if (n === void 0 && m6e(e)) return PQ(e);
  return;
}
function I(e, n) {
  let r = e;
  if (typeof r === "string" && Aw(r)) r = xQ(r, n);
  if (r === "max" && !Hce(n)) r = "high";
  if (r === "xhigh" && !iwt(n)) r = "high";
  return r;
}
function PQ(e) {
  return CF(I(EQn(e), e));
}
function Q2o(e) {
  return qtr(e, Xe(e));
}
function h6e(e, n, r, s, d) {
  if (!d) return false;
  let u = cy();
  if (u === 0 || u === s) return false;
  if (!Tw(r)) return false;
  if (typeof Rw(r, e) !== "number" && typeof Rw(r, n) !== "number" && Q2o(r)) return false;
  if (Rw(r, e, { carriedEffort: null }) === Rw(r, n)) return false;
  if (dl() && e !== void 0 && aAe(typeof e === "string" ? xQ(e, r) : e) === void 0) return false;
  return true;
}
async function He(e, n, r) {
  return Un("userSettings", Ie(n, e), void 0, r);
}
async function IQ(e, n, r = true, s) {
  let d = e !== void 0 ? aAe(e) : void 0;
  if (r && (e === void 0 || d !== void 0) && !tr()) {
    let u = await He(d, n, s);
    if (u.error) return u.error;
  }
  return;
}
function pwt(e) {
  let n = { sessionEffort: ke(M2r(e)), settingsEffortTable: b2t() };
  return $Cn(n), n;
}
function y6e(e, n, r) {
  let s = Rw(e, n, { turnEffort: r });
  return s === void 0 ? void 0 : CF(s);
}
function AV(e, n, r) {
  return y6e(e, n, r) ?? "high";
}
function a_(e, n, r) {
  return Tw(e) ? AV(e, n, r) : void 0;
}
function $gn(e, n, r) {
  if (n === void 0 && r === void 0) return "";
  let s = Rw(e, n, { turnEffort: r });
  if (s === void 0) return "";
  return ` with ${l4(CF(s))} effort`;
}
function le(e) {
  return Number.isInteger(e);
}
function CF(e) {
  if (typeof e === "string") return Aw(e) ? e : "high";
  return "high";
}
function je(e) {
  switch (e) {
    case "low":
      return "Quick, straightforward implementation with minimal overhead";
    case "medium":
      return "Balanced approach with standard implementation and testing";
    case "high":
      return "Comprehensive implementation with extensive testing and documentation";
    case "xhigh":
      return "Deeper reasoning than high, just below maximum (on supported models)";
    case "max":
      return `Maximum capability with deepest reasoning. ${nW}`;
  }
}
function Z2o(e) {
  if (typeof e === "string") {
    let n = je(e);
    if (e === "high" && NLe() && k("tengu_slate_finch", false)) return `${n} · burns fastest — medium handles most tasks`;
    return n;
  }
  return "Balanced approach with standard implementation and testing";
}
function EQn(e, n) {
  let r = X(e);
  return (r === void 0 ? n : void 0) ?? m6e(e) ?? r ?? Je(e) ?? We(e) ?? Ye(e);
}
function We(e) {
  let n = nd(e)?.default_effort;
  return typeof n === "string" && Aw(n) && K(e, n) ? n : void 0;
}
function w2t(e) {
  let n = R(e);
  return n !== void 0 && X(e) === void 0 ? n : void 0;
}
function Z7s(e) {
  return m6e(e) !== null || X(e) !== void 0 || R(e) !== void 0;
}
var Ge = "tengu_witty_wand", $e = f(() => me(o(), oe()));
function X(e) {
  let n = k(Ge, {});
  if (typeof n === "string") n = ot(n, false);
  let r = $e().safeParse(n);
  if (!r.success) return;
  let s = r.data[Ot(Xe(e))], d = typeof s === "string" ? s.trim().toLowerCase() : void 0;
  return d !== void 0 && Aw(d) ? d : void 0;
}
function Je(e) {
  let n = mti(e, Xe(e));
  return n !== void 0 && Aw(n) ? n : void 0;
}
function Ye(e) {
  return xl(Xe(e))?.default_effort ?? "high";
}
export {
  $2r,
  $7s,
  $gn,
  AV,
  Aw,
  B7s,
  Bm,
  CF,
  D2r,
  Dce,
  Dgn,
  EQn,
  F2r,
  F7s,
  Fgn,
  G2o,
  G7s,
  H2r,
  Hce,
  Hgn,
  IQ,
  J2o,
  J7s,
  K2o,
  K7s,
  L2r,
  L7s,
  Lgn,
  M2r,
  N2r,
  N7s,
  Ngn,
  O2r,
  PQ,
  Q2o,
  Q7s,
  RDe,
  Rw,
  S2t,
  SQn,
  TV,
  Tw,
  U2r,
  U7s,
  V2o,
  V7s,
  W2o,
  W7s,
  X2o,
  X7s,
  Y2o,
  Y7s,
  Z2o,
  Z7s,
  _Qn,
  a4,
  aAe,
  a_,
  a_e,
  awt,
  b2t,
  bQn,
  cwt,
  d_e,
  dwt,
  ed,
  fQn,
  g6e,
  gQn,
  h6e,
  hG,
  hQn,
  i_e,
  iwt,
  j7s,
  l4,
  l_e,
  lwt,
  m6e,
  mQn,
  noe,
  owt,
  pQn,
  pwt,
  q2o,
  q7s,
  sH,
  swt,
  tA,
  uL,
  uQn,
  uwt,
  w2t,
  wQn,
  xQ,
  y6e,
  yQn,
  z2o,
  z7s
};
