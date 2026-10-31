// linux/permissions/frontmatter-grant-withheld.js — Claude Code 2.1.310（linux）模块 chunk-krgv9fvy.js
import { U, ci, kC, ye, _ee, dP, Uxe, Ol } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { xZ, $y } from "../plugins/skills-dir.js";
import { see, i } from "../shared/environment.js";
import { nT, Ro, Tb } from "../settings/workflow-launch-exec.js";
import { tu, fvn, Af, ni, Ns, G_, Vs, or, md, rd } from "../shell/invalid-type.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { Nc } from "../remote/local-agent.js";
import { Bn, dn } from "../mcp/chunk-0e2a1db6.js";
import { Eb, Fh, mg, pe, dse, Sa } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { VY, X8 } from "../settings/built-in.js";
import { Ut, Q_e, Cs, Fg, Xnt, Z_e, cI, Fx, c5o, Re, ue } from "../settings/global-config-and-gates.js";
import { AU } from "../plugins/not-found.js";
import { TWt, yjo, Smn } from "../plugins/entry-refused.js";
import { QWt, GO, ZWt } from "../telemetry/stop-hook-removed.js";
import { My } from "../shared/chunk-b09058c6.js";
import { _ei } from "../shared/chunk-922e3fb8.js";
import { wz, Pvt } from "../shared/chunk-7c8c6c5a.js";
function DXn(e) {
  if (e.source === "plugin") return e.pluginInfo?.repository;
  return e.source === "bundled" ? _ei(e.hooks) : void 0;
}
var wjr = (e) => wz(e) || Pvt(e, AU());
function wet(e, r) {
  if (!QWt() || !xZ(e)) return false;
  try {
    if (X8()) return true;
  } catch (n) {
    return l(n), true;
  }
  if (!GO()) return false;
  let o = true;
  try {
    o = r === void 0 || !wjr(r);
  } catch (n) {
    l(n);
  }
  if (o) ZWt();
  return o;
}
function ag() {
  return pe("policySettings")?.allowManagedPermissionRulesOnly === true;
}
function Y1() {
  return !ag();
}
function G(e, r, o = false) {
  return HXn(e, r, o) === void 0;
}
function HXn(e, r, o = false) {
  if (ag()) {
    if (!(e === "plugin" ? I(r) : VY(e))) return "managed_rules_only";
  }
  return My() && !o && m(e, r) ? "personal_config" : void 0;
}
function m(e, r) {
  if (e === void 0 || e === "userSettings") return true;
  if (e !== "plugin") return false;
  let o = r?.marketplaceSource;
  if (o?.source === "claudeai" && o.scope !== "org" && o.scope !== "default") return true;
  let n = r?.id;
  if (n === void 0) return true;
  switch (G_(n) ?? Vs(n)) {
    case ni:
      return r?.officiallyAttested !== true;
    case tu:
      return or(n) === fvn;
    default:
      return false;
  }
}
function I(e) {
  let r = e?.id;
  if (r === void 0) return false;
  let o = G_(r) ?? Vs(r);
  switch (o) {
    case void 0:
    case Af:
      return false;
    case tu:
      return or(r) !== fvn && !(Nc() && dse()?.allowManagedPermissionRulesOnly === true);
    case Ns:
      return true;
    case ni:
      return e?.officiallyAttested === true;
    case $y:
      return e?.npmResolution !== void 0 && yjo(e.npmResolution);
    default:
      break;
  }
  if (e?.marketplaceSource === void 0) return false;
  return md(o) && Smn(e.marketplaceSource) || TWt(e.marketplaceSource, e.home);
}
var h = new W(() => /* @__PURE__ */ new Set());
function Y6s() {
  return h.of(U().host);
}
function vjr(e, r, o, n = "managed_rules_only") {
  let s = "pluginId" in r ? r.pluginId : b(r.source), u = "pluginId" in r ? G_(r.pluginId) === Af ? "plugin_skills_dir" : "plugin_other" : r.source, d = rd(`/${e} (${s})`), g = n === "personal_config";
  if (t(g ? `Ignoring allowed-tools ${rd(o.join(", "))} from ${d}: this session does not let your own skills and commands pre-approve tools (CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG).` : `Ignoring allowed-tools ${rd(o.join(", "))} from ${d}: permission rules are restricted to managed settings (allowManagedPermissionRulesOnly).`, { level: "warn" }), !g) h.of(U().host).add(d);
  if (a("tengu_frontmatter_grant_withheld", { origin: c(u), tool_count: o.length, ...g && { reason: c(n) } }), _ee() === "text" && !Ut()) console.error(g ? `allowed-tools from ${d} ignored: this session doesn't let your own skills and commands pre-approve tools (CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG), so their tool calls are checked like any other call, and their inline shell commands run only if this session's permission rules already allow them.` : `allowed-tools from ${d} ignored: your organization restricts permission rules to managed settings (allowManagedPermissionRulesOnly). Ask an admin to add the rules it needs to managed settings.`);
}
function b(e) {
  switch (e) {
    case "userSettings":
    case "projectSettings":
    case "localSettings":
    case "flagSettings":
    case "policySettings":
      return nT(e);
    case "builtin":
    case "bundled":
    case "mcp":
    case "memoryStore":
    case "plugin":
      return e;
  }
}
async function vet(e) {
  let r = await e.getAllowedTools?.() ?? e.allowedTools ?? [], o = wet(e.hooks, DXn(e));
  if (r.length === 0 || o) return [];
  return G(e.source, y(e), e.fromHostCatalog === true) ? r : [];
}
function y(e) {
  return e.source === "plugin" ? { id: e.pluginInfo?.repository, officiallyAttested: e.pluginInfo?.officiallyAttested, marketplaceSource: e.pluginInfo?.marketplaceSource, npmResolution: e.pluginInfo?.npmResolution, home: e.pluginInfo?.home } : void 0;
}
function rSt(e) {
  return My() && m("plugin", Y1o(e));
}
function Y1o(e) {
  return { id: e.source, officiallyAttested: e.officialAttestation !== void 0, marketplaceSource: e.marketplaceSource };
}
function X6s(e) {
  return eLe(e) || wet(e.hooks, e.plugin);
}
function eLe(e) {
  if (!My() || e.registeredAtRunTime === true) return false;
  return m(e.source, e.source === "plugin" ? e.pluginProvenance ?? { id: e.plugin } : void 0);
}
function J6s(e) {
  return My() && e.fromHostCatalog !== true && m(e.source, y(e));
}
var v = ["allow", "deny", "ask"];
function FY(e, r) {
  if (!e || !e.permissions) return [];
  let { permissions: o } = e, n = [];
  for (let s of v) {
    let u = o[s];
    if (u) for (let d of u) n.push({ source: r, ruleBehavior: s, ruleValue: Bn(d) });
  }
  return n;
}
function $Ae() {
  return i.CLAUDE_CODE_EVAL_CONFINED === true;
}
function VD(e = {}) {
  let r = x(e);
  return $Ae() ? r.filter((o) => o.ruleBehavior !== "allow") : r;
}
function x(e = {}) {
  if (ag()) return mce("policySettings");
  let r = [];
  for (let o of Ro()) r.push(...mce(o));
  if (!(e.strictPersistedTrust ?? Fg())) {
    let { gateProject: o, gateLocal: n } = NXn(), s = /* @__PURE__ */ new Set(), u = r.filter((d) => {
      if (d.ruleBehavior !== "allow") return true;
      if (d.source === "projectSettings" && o) return s.add(".claude/settings.json"), false;
      if (d.source === "localSettings" && n) return s.add(".claude/settings.local.json"), false;
      return true;
    });
    if (u.length !== r.length) E("permissions.allow", r.length - u.length, [...s]);
    return u;
  }
  return r;
}
function nmn(e) {
  let r = ci();
  if (r === null) return ["projectSettings", "localSettings"];
  let o = O.of(U().host), n = Fx({ onIndeterminate: "tracked" });
  if (n && Cs()) {
    if (o.markTracked(r), !o.persistIssued(r) && c5o()) o.markPersistIssued(r), L(e);
  }
  return n || o.isTracked(r) || C() ? ["projectSettings", "localSettings"] : ["projectSettings"];
}
class k {
  tracked = /* @__PURE__ */ new Set();
  persisted = /* @__PURE__ */ new Set();
  isTracked(e) {
    return this.tracked.has(e);
  }
  markTracked(e) {
    this.tracked.add(e);
  }
  persistIssued(e) {
    return this.persisted.has(e);
  }
  markPersistIssued(e) {
    this.persisted.add(e);
  }
}
var O = new W(() => new k());
function C() {
  return ue().projects?.[cI()]?.localSettingsSeenGitTracked === true;
}
function L(e) {
  let r = cI();
  Re((o) => {
    if (o.projects?.[r]?.localSettingsSeenGitTracked === true) return o;
    return { ...o, projects: { ...o.projects, [r]: { ...o.projects?.[r] ?? Q_e, localSettingsSeenGitTracked: true } } };
  }, e);
}
function LXn(e, r) {
  let o = nmn(r), n = (d) => new Set(d.flatMap((g) => (pe(g)?.permissions?.additionalDirectories ?? []).flatMap(e))), s = n(o), u = /* @__PURE__ */ new Set([...n(Ro().filter((d) => !o.includes(d))), ...Ol().flatMap(e)]);
  for (let d of u) s.delete(d);
  return { declared: /* @__PURE__ */ new Set([...s, ...u]), repoOnly: s };
}
function Eet(e = {}) {
  if ($Ae()) return [];
  let r = e.strictPersistedTrust ?? Fg(), { gateProject: o, gateLocal: n } = r ? { gateProject: false, gateLocal: false } : NXn(), s = [], u = 0, d = /* @__PURE__ */ new Set();
  for (let g of Ro()) {
    let f = pe(g)?.permissions?.additionalDirectories ?? [];
    if (o && g === "projectSettings" && f.length > 0) {
      u += f.length, d.add(".claude/settings.json");
      continue;
    }
    if (n && g === "localSettings" && f.length > 0) {
      u += f.length, d.add(".claude/settings.local.json");
      continue;
    }
    s.push(...f);
  }
  if (u > 0) E("permissions.additionalDirectories", u, [...d]);
  return s;
}
function NXn() {
  return { gateProject: !mg(), gateLocal: Fx({ onIndeterminate: "untracked" }) };
}
function P(e) {
  if (!Ro().includes(e)) return false;
  return mce(e).some((r) => r.ruleBehavior === "allow") || (pe(e)?.permissions?.additionalDirectories?.length ?? 0) > 0;
}
function X1o() {
  if (i.CLAUDE_CODE_SANDBOXED) return true;
  if (dP()) return true;
  if (Uxe()) return true;
  if (Ut()) return true;
  if (kC()) return true;
  return Fg();
}
function j() {
  if (X1o()) return false;
  return rmn();
}
function rmn() {
  let { gateProject: e, gateLocal: r } = NXn();
  return e && P("projectSettings") || r && P("localSettings");
}
class R {
  warned = /* @__PURE__ */ new Set();
  firstTimeFor(e) {
    if (this.warned.has(e)) return false;
    return this.warned.add(e), true;
  }
  reset() {
    this.warned.clear();
  }
}
var T = new W(() => new R());
function $Xn(e) {
  return T.of(U().host).firstTimeFor(e);
}
function E(e, r, o) {
  if (!T.of(U().host).firstTimeFor(e)) return;
  if (t(`Dropped ${r} project-scoped ${e} entr${r === 1 ? "y" : "ies"} — workspace not yet trusted`), !ye() && (!Cs() || j())) return;
  let n = o.length > 0 ? o.join(" and ") : ".claude/ settings", s = `Ignoring ${r} ${e} ${r === 1 ? "entry" : "entries"} from ${n}: `;
  if (ci() === null) {
    console.error(`${s}a session with no working directory is never trusted.`);
    return;
  }
  if (Z_e()) {
    console.error(`${s}${Xnt}. Put ${r === 1 ? "it" : "them"} in user or managed settings instead.`);
    return;
  }
  let u = cI();
  console.error(s + `this workspace has not been trusted. Run Claude Code interactively here once and accept the trust dialog, or set projects[${_(u)}].hasTrustDialogAccepted: true in ${see()}.`);
}
function mce(e) {
  let r = pe(e);
  return FY(r, e);
}
var D = Tb;
async function FXn(e, r) {
  if (!D.includes(e.source)) return false;
  let o = dn(e.ruleValue), n = (s) => dn(Bn(s));
  try {
    let s = false;
    if (e.source === "localSettings") {
      let g = Fh();
      if (g) s = !!Eb(g).settings?.permissions?.[e.ruleBehavior]?.some((p) => n(p) === o);
    }
    let u = false, { error: d } = await Sa(e.source, (g) => {
      let f = g?.permissions?.[e.ruleBehavior];
      if (!f || !f.some((p) => n(p) === o)) return null;
      return u = true, { permissions: { [e.ruleBehavior]: f.filter((p) => n(p) !== o) } };
    }, void 0, r);
    if (d) return false;
    if (!u && s) {
      let g = Fh();
      if (g) return !Eb(g).settings?.permissions?.[e.ruleBehavior]?.some((p) => n(p) === o);
    }
    return u || s;
  } catch (s) {
    return l(s), false;
  }
}
async function Q6s({ ruleValues: e, ruleBehavior: r }, o, n) {
  if (ag()) return false;
  if (e.length < 1) return true;
  let s = e.map(dn);
  try {
    let u = await Sa(o, (d) => {
      let g = d?.permissions?.[r] || [], f = new Set(g.map((S) => dn(Bn(S)))), p = s.filter((S) => !f.has(S));
      if (p.length === 0) return null;
      return { permissions: { [r]: [...g, ...p] } };
    }, void 0, n);
    if (u.error) throw u.error;
    return true;
  } catch (u) {
    return t(`Failed to add permission rules to ${o} settings: ${u instanceof Error ? u.message : String(u)}`, { level: "error" }), false;
  }
}
export {
  $Ae,
  $Xn,
  DXn,
  Eet,
  FXn,
  FY,
  HXn,
  J6s,
  LXn,
  NXn,
  Q6s,
  VD,
  X1o,
  X6s,
  Y1,
  Y1o,
  Y6s,
  ag,
  eLe,
  mce,
  nmn,
  rSt,
  rmn,
  vet,
  vjr,
  wet,
  wjr
};
