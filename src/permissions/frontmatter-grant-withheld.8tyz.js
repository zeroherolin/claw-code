// permissions/frontmatter-grant-withheld.8tyz.js — Claude Code 2.1.310 模块 chunk-8tyz1ak6.js
import { U, ci, AA, ye, Tee, pP, Vxe, Ol } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { NZ, Uy } from "../plugins/skills-dir.cemw.js";
import { fee, i } from "../shared/environment.9a41.js";
import { rC, Ro, TS } from "../settings/workflow-launch-exec.t4r2.js";
import { nu, REn, Cp, ni, Ns, z_, Ks, sr, md, rd } from "../shell/invalid-type.qnva.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { Nc } from "../remote/local-agent.we9a.js";
import { Bn, dn } from "../mcp/chunk-ykcv164t.js";
import { kS, $h, mg, fe, hse, wa } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { o4, oY } from "../settings/built-in.5fzv.js";
import { Ut, sSe, As, $g, rrt, iSe, fI, Bx, $4o, Re, ue } from "../settings/global-config-and-gates.27xj.js";
import { PU } from "../plugins/not-found.2nbd.js";
import { NWt, Vjo, Dmn } from "../plugins/entry-refused.bp7z.js";
import { c2t, XO, u2t } from "../telemetry/stop-hook-removed.w16m.js";
import { Dy } from "../shared/chunk-9m922vm4.js";
import { nti } from "../shared/chunk-s0p49rh9.js";
import { PG, NEt } from "../shared/chunk-hfd91m80.js";
function QXn(e) {
  if (e.source === "plugin") return e.pluginInfo?.repository;
  return e.source === "bundled" ? nti(e.hooks) : void 0;
}
var jjr = (e) => PG(e) || NEt(e, PU());
function Ret(e, r) {
  if (!c2t() || !NZ(e)) return false;
  try {
    if (oY()) return true;
  } catch (n) {
    return l(n), true;
  }
  if (!XO()) return false;
  let o = true;
  try {
    o = r === void 0 || !jjr(r);
  } catch (n) {
    l(n);
  }
  if (o) u2t();
  return o;
}
function ag() {
  return fe("policySettings")?.allowManagedPermissionRulesOnly === true;
}
function nj() {
  return !ag();
}
function G(e, r, o = false) {
  return ZXn(e, r, o) === void 0;
}
function ZXn(e, r, o = false) {
  if (ag()) {
    if (!(e === "plugin" ? I(r) : o4(e))) return "managed_rules_only";
  }
  return Dy() && !o && m(e, r) ? "personal_config" : void 0;
}
function m(e, r) {
  if (e === void 0 || e === "userSettings") return true;
  if (e !== "plugin") return false;
  let o = r?.marketplaceSource;
  if (o?.source === "claudeai" && o.scope !== "org" && o.scope !== "default") return true;
  let n = r?.id;
  if (n === void 0) return true;
  switch (z_(n) ?? Ks(n)) {
    case ni:
      return r?.officiallyAttested !== true;
    case nu:
      return sr(n) === REn;
    default:
      return false;
  }
}
function I(e) {
  let r = e?.id;
  if (r === void 0) return false;
  let o = z_(r) ?? Ks(r);
  switch (o) {
    case void 0:
    case Cp:
      return false;
    case nu:
      return sr(r) !== REn && !(Nc() && hse()?.allowManagedPermissionRulesOnly === true);
    case Ns:
      return true;
    case ni:
      return e?.officiallyAttested === true;
    case Uy:
      return e?.npmResolution !== void 0 && Vjo(e.npmResolution);
    default:
      break;
  }
  if (e?.marketplaceSource === void 0) return false;
  return md(o) && Dmn(e.marketplaceSource) || NWt(e.marketplaceSource, e.home);
}
var h = new W(() => /* @__PURE__ */ new Set());
function M9s() {
  return h.of(U().host);
}
function Wjr(e, r, o, n = "managed_rules_only") {
  let s = "pluginId" in r ? r.pluginId : b(r.source), u = "pluginId" in r ? z_(r.pluginId) === Cp ? "plugin_skills_dir" : "plugin_other" : r.source, d = rd(`/${e} (${s})`), g = n === "personal_config";
  if (t(g ? `Ignoring allowed-tools ${rd(o.join(", "))} from ${d}: this session does not let your own skills and commands pre-approve tools (CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG).` : `Ignoring allowed-tools ${rd(o.join(", "))} from ${d}: permission rules are restricted to managed settings (allowManagedPermissionRulesOnly).`, { level: "warn" }), !g) h.of(U().host).add(d);
  if (a("tengu_frontmatter_grant_withheld", { origin: c(u), tool_count: o.length, ...g && { reason: c(n) } }), Tee() === "text" && !Ut()) console.error(g ? `allowed-tools from ${d} ignored: this session doesn't let your own skills and commands pre-approve tools (CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG), so their tool calls are checked like any other call, and their inline shell commands run only if this session's permission rules already allow them.` : `allowed-tools from ${d} ignored: your organization restricts permission rules to managed settings (allowManagedPermissionRulesOnly). Ask an admin to add the rules it needs to managed settings.`);
}
function b(e) {
  switch (e) {
    case "userSettings":
    case "projectSettings":
    case "localSettings":
    case "flagSettings":
    case "policySettings":
      return rC(e);
    case "builtin":
    case "bundled":
    case "mcp":
    case "memoryStore":
    case "plugin":
      return e;
  }
}
async function xet(e) {
  let r = await e.getAllowedTools?.() ?? e.allowedTools ?? [], o = Ret(e.hooks, QXn(e));
  if (r.length === 0 || o) return [];
  return G(e.source, y(e), e.fromHostCatalog === true) ? r : [];
}
function y(e) {
  return e.source === "plugin" ? { id: e.pluginInfo?.repository, officiallyAttested: e.pluginInfo?.officiallyAttested, marketplaceSource: e.pluginInfo?.marketplaceSource, npmResolution: e.pluginInfo?.npmResolution, home: e.pluginInfo?.home } : void 0;
}
function cbt(e) {
  return Dy() && m("plugin", kjo(e));
}
function kjo(e) {
  return { id: e.source, officiallyAttested: e.officialAttestation !== void 0, marketplaceSource: e.marketplaceSource };
}
function H9s(e) {
  return iDe(e) || Ret(e.hooks, e.plugin);
}
function iDe(e) {
  if (!Dy() || e.registeredAtRunTime === true) return false;
  return m(e.source, e.source === "plugin" ? e.pluginProvenance ?? { id: e.plugin } : void 0);
}
function D9s(e) {
  return Dy() && e.fromHostCatalog !== true && m(e.source, y(e));
}
var v = ["allow", "deny", "ask"];
function X3(e, r) {
  if (!e || !e.permissions) return [];
  let { permissions: o } = e, n = [];
  for (let s of v) {
    let u = o[s];
    if (u) for (let d of u) n.push({ source: r, ruleBehavior: s, ruleValue: Bn(d) });
  }
  return n;
}
function GTe() {
  return i.CLAUDE_CODE_EVAL_CONFINED === true;
}
function J0(e = {}) {
  let r = x(e);
  return GTe() ? r.filter((o) => o.ruleBehavior !== "allow") : r;
}
function x(e = {}) {
  if (ag()) return wce("policySettings");
  let r = [];
  for (let o of Ro()) r.push(...wce(o));
  if (!(e.strictPersistedTrust ?? $g())) {
    let { gateProject: o, gateLocal: n } = t7n(), s = /* @__PURE__ */ new Set(), u = r.filter((d) => {
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
function ymn(e) {
  let r = ci();
  if (r === null) return ["projectSettings", "localSettings"];
  let o = O.of(U().host), n = Bx({ onIndeterminate: "tracked" });
  if (n && As()) {
    if (o.markTracked(r), !o.persistIssued(r) && $4o()) o.markPersistIssued(r), L(e);
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
  return ue().projects?.[fI()]?.localSettingsSeenGitTracked === true;
}
function L(e) {
  let r = fI();
  Re((o) => {
    if (o.projects?.[r]?.localSettingsSeenGitTracked === true) return o;
    return { ...o, projects: { ...o.projects, [r]: { ...o.projects?.[r] ?? sSe, localSettingsSeenGitTracked: true } } };
  }, e);
}
function e7n(e, r) {
  let o = ymn(r), n = (d) => new Set(d.flatMap((g) => (fe(g)?.permissions?.additionalDirectories ?? []).flatMap(e))), s = n(o), u = /* @__PURE__ */ new Set([...n(Ro().filter((d) => !o.includes(d))), ...Ol().flatMap(e)]);
  for (let d of u) s.delete(d);
  return { declared: /* @__PURE__ */ new Set([...s, ...u]), repoOnly: s };
}
function Pet(e = {}) {
  if (GTe()) return [];
  let r = e.strictPersistedTrust ?? $g(), { gateProject: o, gateLocal: n } = r ? { gateProject: false, gateLocal: false } : t7n(), s = [], u = 0, d = /* @__PURE__ */ new Set();
  for (let g of Ro()) {
    let f = fe(g)?.permissions?.additionalDirectories ?? [];
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
function t7n() {
  return { gateProject: !mg(), gateLocal: Bx({ onIndeterminate: "untracked" }) };
}
function P(e) {
  if (!Ro().includes(e)) return false;
  return wce(e).some((r) => r.ruleBehavior === "allow") || (fe(e)?.permissions?.additionalDirectories?.length ?? 0) > 0;
}
function Cjo() {
  if (i.CLAUDE_CODE_SANDBOXED) return true;
  if (pP()) return true;
  if (Vxe()) return true;
  if (Ut()) return true;
  if (AA()) return true;
  return $g();
}
function j() {
  if (Cjo()) return false;
  return _mn();
}
function _mn() {
  let { gateProject: e, gateLocal: r } = t7n();
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
function n7n(e) {
  return T.of(U().host).firstTimeFor(e);
}
function E(e, r, o) {
  if (!T.of(U().host).firstTimeFor(e)) return;
  if (t(`Dropped ${r} project-scoped ${e} entr${r === 1 ? "y" : "ies"} — workspace not yet trusted`), !ye() && (!As() || j())) return;
  let n = o.length > 0 ? o.join(" and ") : ".claude/ settings", s = `Ignoring ${r} ${e} ${r === 1 ? "entry" : "entries"} from ${n}: `;
  if (ci() === null) {
    console.error(`${s}a session with no working directory is never trusted.`);
    return;
  }
  if (iSe()) {
    console.error(`${s}${rrt}. Put ${r === 1 ? "it" : "them"} in user or managed settings instead.`);
    return;
  }
  let u = fI();
  console.error(s + `this workspace has not been trusted. Run Claude Code interactively here once and accept the trust dialog, or set projects[${_(u)}].hasTrustDialogAccepted: true in ${fee()}.`);
}
function wce(e) {
  let r = fe(e);
  return X3(r, e);
}
var D = TS;
async function r7n(e, r) {
  if (!D.includes(e.source)) return false;
  let o = dn(e.ruleValue), n = (s) => dn(Bn(s));
  try {
    let s = false;
    if (e.source === "localSettings") {
      let g = $h();
      if (g) s = !!kS(g).settings?.permissions?.[e.ruleBehavior]?.some((p) => n(p) === o);
    }
    let u = false, { error: d } = await wa(e.source, (g) => {
      let f = g?.permissions?.[e.ruleBehavior];
      if (!f || !f.some((p) => n(p) === o)) return null;
      return u = true, { permissions: { [e.ruleBehavior]: f.filter((p) => n(p) !== o) } };
    }, void 0, r);
    if (d) return false;
    if (!u && s) {
      let g = $h();
      if (g) return !kS(g).settings?.permissions?.[e.ruleBehavior]?.some((p) => n(p) === o);
    }
    return u || s;
  } catch (s) {
    return l(s), false;
  }
}
async function L9s({ ruleValues: e, ruleBehavior: r }, o, n) {
  if (ag()) return false;
  if (e.length < 1) return true;
  let s = e.map(dn);
  try {
    let u = await wa(o, (d) => {
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
  Cjo,
  D9s,
  GTe,
  H9s,
  J0,
  L9s,
  M9s,
  Pet,
  QXn,
  Ret,
  Wjr,
  X3,
  ZXn,
  _mn,
  ag,
  cbt,
  e7n,
  iDe,
  jjr,
  kjo,
  n7n,
  nj,
  r7n,
  t7n,
  wce,
  xet,
  ymn
};
