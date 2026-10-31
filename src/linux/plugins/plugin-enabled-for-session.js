// linux/plugins/plugin-enabled-for-session.js — Claude Code 2.1.310（linux）模块 chunk-783pymr7.js
import { L, U } from "../context/not-admin-owned.js";
import { b, c, ce, Ka, $b, Hn } from "../agents/third-party.js";
import { kW, tw } from "../telemetry/anthropic-workspace-id.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { U0e, Lc, pa, k, Re, ue, Cbn } from "../settings/global-config-and-gates.js";
import { Mr } from "../models/claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { bt, HM, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { cdi, Sn, Ns, Vf, TI, Vs, mc, md, vTt, mot } from "../shell/invalid-type.js";
import { Bvn, PZ } from "./skills-dir.js";
import { dKs, zv } from "../mcp/third-party.js";
import { Sf } from "./not-found.js";
import { Pet, jjr, H2e, Wjr, hce } from "./entry-refused.js";
import { Si } from "../context/account-memory-text-not-identified.js";
import { o, u } from "../vendor/zod/string-format.js";
import { z } from "../shared/chunk-be29de51.js";
import { sep as fe } from "path";
var K = /* @__PURE__ */ new Set(["plugin command source printed a network path", "plugin command source path resolves to a network path", "plugin command source printed a path through a suspect link", "plugin command source entry traverses a suspect link", "plugin command source link escapes producer directory", "plugin command source relink entry not canonical", "plugin command source relink entry unreadable", "plugin command source relink target resolves to a network path", "plugin command source relink target traverses a suspect link", "plugin command source link marker not a small regular file", "plugin command source printed cwd or an ancestor", "plugin command source printed a relative path", "plugin command source printed nothing", "plugin command source printed multiple lines", "plugin command source exceeded the stdout cap", "plugin command source directory has no plugin content", "plugin command source directory has too many files", "plugin command source directory too large", "plugin command source link mode unsupported on windows", "plugin command source disabled by managed policy", "plugin command source held for the organization answer", "plugin command source not started by a tool server daemon", "plugin command source command changed since consent", "plugin command source never consented for an installed plugin", "plugin command source changed between display and run", "plugin command source without consent", "plugin command source declined at the prompt"]), Ndn = "plugin update refused during cli update: ";
class j {
  nameRegistration;
  catalogEntryNames;
  reviewerMarkedEntryNames;
  isAccessAllowed;
  lastFailedWalk;
  staleCatalogFetchedAt;
  catalogLoadInFlight;
  bindingsWriteTail = Promise.resolve();
  marketplaceChoice;
  blockedLogged = /* @__PURE__ */ new Set();
}
var Pe = new W(() => new j());
function OE() {
  return Pe.of(U().host);
}
function uzs(e) {
  OE().nameRegistration = e === void 0 ? "none" : e === "pluginDirectory" ? "built-in" : "other";
}
function c5n(e) {
  if (e !== Sn) return false;
  let { nameRegistration: n } = OE();
  return n === "built-in" || n === "none";
}
function T() {
  let e = OE();
  return e.nameRegistration === "built-in" && e.isAccessAllowed?.() === true;
}
function m7e(e) {
  return OE().reviewerMarkedEntryNames?.has(e) === true;
}
function Y(e) {
  return T() && OE().catalogEntryNames?.has(e) === true;
}
var XHo = ["agent", "subagentStatusLine"];
function J(e) {
  return XHo.includes(e);
}
function q(e, n) {
  return n ? `${e}@${n.toLowerCase()}` : e;
}
class X {
  #e = /* @__PURE__ */ new Map();
  #n = 0;
  generation() {
    return this.#n;
  }
  register(e, n, r, s) {
    if (s !== void 0 && s !== this.#n) return;
    this.#e.set(q(e, n), r);
  }
  get(e, n) {
    if (n === void 0) return;
    return this.#e.get(q(e, n));
  }
  clear() {
    this.#e.clear(), this.#n++;
  }
}
var ke = new W(() => new X());
function E() {
  return ke.of(U().host);
}
function fzs() {
  return E().generation();
}
function pzs(e, n, r, s) {
  E().register(e, n, r, s);
}
function x(e, n) {
  return E().get(e, n);
}
function mzs() {
  E().clear();
}
var Z = /^skill_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/;
function C(e) {
  return Z.test(e);
}
var v = "skill_id";
function Ldn(e, n) {
  let r = {};
  if (typeof e === "string" && C(e)) r.skillId = e;
  if (typeof n === "string" && hce(n)) r.pluginId = n;
  return r.skillId === void 0 && r.pluginId === void 0 ? void 0 : r;
}
var Ee = p(() => u({ [v]: o().regex(Z).optional().catch(void 0), [H2e]: o().regex(Wjr).optional().catch(void 0) })), Ie = 262144, be = () => {
  return;
};
function kyt() {
  let e = i.CLAUDE_CODE_SKILL_ATTRIBUTION;
  if (e === void 0) return be;
  let n = jjr("CLAUDE_CODE_SKILL_ATTRIBUTION", e, Ie, Ae);
  return (r) => n.get(Pet(r));
}
function Ae(e) {
  let n = Ee().safeParse(e);
  if (!n.success) {
    t("Ignoring a CLAUDE_CODE_SKILL_ATTRIBUTION entry: not a JSON object");
    return;
  }
  let r = Ldn(n.data[v], n.data[H2e]);
  if (typeof e === "object" && e !== null) {
    for (let [s, g] of [[v, r?.skillId], [H2e, r?.pluginId]]) if (s in e && g === void 0) t(`Ignoring a CLAUDE_CODE_SKILL_ATTRIBUTION entry field: invalid ${s}`);
  }
  return r;
}
class Q {
  pendingUsage = /* @__PURE__ */ new Map();
  flushTimer = null;
  exitFlushesInFlight = [];
  flushStorageV5 = void 0;
}
var ee = new W(() => new Q());
class ne {
  flushers = null;
  exitFlushRegistered = false;
}
var h = new ne();
var Te = 6e4;
function te(e) {
  h.flushers = e;
  let n = S();
  if (n.pendingUsage.size > 0) ie(n, e);
}
function S() {
  return ee.of(U().host);
}
function KC(e) {
  let n = Date.now(), r = S(), s = r.pendingUsage.get(e);
  if (s) s.count++, s.lastUsedAt = n;
  else r.pendingUsage.set(e, { count: 1, lastUsedAt: n });
  if (h.flushers) ie(r, h.flushers);
}
function ie(e, n) {
  if (!h.exitFlushRegistered) h.exitFlushRegistered = true, process.on("exit", n.flushAtExit);
  if (!e.flushTimer) e.flushTimer = setTimeout(n.flush, Te), e.flushTimer.unref?.();
}
function re(e) {
  S().exitFlushesInFlight.push(e);
}
function oe(e) {
  let n = S().exitFlushesInFlight, r = n.indexOf(e);
  if (r !== -1) n.splice(r, 1);
}
function se() {
  let e = S(), n = e.exitFlushesInFlight.flat();
  return e.exitFlushesInFlight = [], n.length > 0 ? n : null;
}
function le(e) {
  S().flushStorageV5 = e;
}
function ae() {
  return S().flushStorageV5;
}
function I() {
  let e = S();
  if (e.flushTimer) clearTimeout(e.flushTimer), e.flushTimer = null;
  if (e.pendingUsage.size === 0) return null;
  let n = [...e.pendingUsage.entries()];
  return e.pendingUsage.clear(), n;
}
function JHo(e) {
  return S().pendingUsage.has(e);
}
function de(e) {
  let { pendingUsage: n } = S();
  for (let r of n.keys()) if (e.has(r.toLowerCase())) n.delete(r);
}
function Ue() {
  let e = I();
  if (!e) return;
  Re(R(e), ae());
}
async function ge(e) {
  let n = I();
  if (!n) return;
  re(n), await Re(R(n), e), oe(n);
}
function gzs(e) {
  if (z() && e !== void 0) le(e), bt(() => ge(e)), HM(() => ge(e));
}
function xe() {
  let e = [...se() ?? [], ...I() ?? []];
  if (e.length === 0) return;
  Cbn(R(e));
}
te({ flush: Ue, flushAtExit: xe });
function R(e) {
  return (n) => {
    let r = { ...n.pluginUsage };
    for (let [s, g] of e) {
      let f = r[s];
      r[s] = { usageCount: (f?.usageCount ?? 0) + g.count, lastUsedAt: g.lastUsedAt, lastUsedNumStartups: n.numStartups };
    }
    return { ...n, pluginUsage: r };
  };
}
function t$r(e, n) {
  let r = Date.now();
  Re((s) => {
    let g = e.filter((m) => !s.pluginUsage?.[m]);
    if (g.length === 0) return s;
    let f = { ...s.pluginUsage };
    for (let m of g) f[m] = { usageCount: 0, lastUsedAt: r, lastUsedNumStartups: s.numStartups };
    return { ...s, pluginUsage: f };
  }, n);
}
function eBt(e, n) {
  let r = new Set(e.map((s) => s.toLowerCase()));
  de(r), Re((s) => {
    let f = Object.keys(s.pluginUsage ?? {}).filter((_) => r.has(_.toLowerCase()));
    if (f.length === 0) return s;
    let m = { ...s.pluginUsage };
    for (let _ of f) delete m[_];
    return { ...s, pluginUsage: m };
  }, n);
}
function u5n(e) {
  let n = ue().pluginUsage;
  return [e, ...TI(e)].map((r) => n?.[r]).find((r) => r !== void 0);
}
function hzs(e, n) {
  let r = Date.now();
  Re((s) => {
    let g = e.filter((m) => s.pluginUsage?.[m]);
    if (g.length === 0) return s;
    let f = { ...s.pluginUsage };
    for (let m of g) {
      let _ = f[m];
      if (!_) continue;
      f[m] = { ..._, lastUsedAt: r, lastUsedNumStartups: s.numStartups };
    }
    return { ...s, pluginUsage: f };
  }, n);
}
function pe(e, n) {
  let r = ue().pluginUsageLspGraceAppliedIds;
  if (e.every((g) => r?.includes(g))) return;
  let s = Date.now();
  Re((g) => {
    let f = new Set(g.pluginUsageLspGraceAppliedIds), m = e.filter((y) => !f.has(y));
    if (m.length === 0) return g;
    let _ = { ...g.pluginUsage };
    for (let y of m) {
      let d = _[y];
      if (!d || d.usageCount > 0) continue;
      _[y] = { ...d, lastUsedAt: s, lastUsedNumStartups: g.numStartups };
    }
    return { ...g, pluginUsage: _, pluginUsageLspGraceAppliedIds: [...f, ...m] };
  }, n);
}
function f5n(e, n, r) {
  return { sessionsSinceLastUse: Math.max(0, n - e.lastUsedNumStartups), daysSinceLastUse: Math.max(0, Math.floor((r - e.lastUsedAt) / 864e5)) };
}
function n$r(e, n, r) {
  return { "plugin.name": r ? e : zv, ...n && { "marketplace.name": r ? n : zv } };
}
function ux(e, n) {
  let r = x(e, n) ?? n, s = r ? `${e}@${r.toLowerCase()}` : e;
  return Hn(U0e(s));
}
function _de(e) {
  let { name: n, marketplace: r } = mc(e);
  return vTt(r) || _e(n, r) ? Hn(e) : b("third-party");
}
function me(e) {
  return e === Sn && k("tengu_wise_kite", false);
}
function _e(e, n) {
  return me(n) && Y(e);
}
function yzs(e, n) {
  return e.length > 0 ? $b(e.map((r) => n(r) ? _de(r) : b("third-party")).sort()) : void 0;
}
function WDe(e) {
  if (me(e) && T()) return b(Sn);
  return vTt(e) ? Hn(e.toLowerCase()) : b("third-party");
}
function _Y(e, n, r) {
  if (n === Ns) return "default-bundle";
  if (md(n)) return "official";
  if (n !== void 0 && Bvn.has(n.toLowerCase())) return "community";
  if (r?.has(e)) return "org";
  return "user-local";
}
function ere(e) {
  return e === "official" || e === "default-bundle";
}
function ve(e) {
  return ere(e) || e === "community";
}
function QHo(e) {
  return ere(e) || Lc();
}
function tBt(e, n, r, s) {
  let g = n?.type === "prompt" ? n.source : void 0, f = n?.type === "prompt" ? n.pluginInfo : void 0, m = f ? mc(f.repository).marketplace : void 0, y = g === "builtin" || g === "bundled" || g === "plugin" && md(m) || Lc();
  Si("skill_activated", { "skill.name": y ? e : "custom_skill", invocation_trigger: r, ...g && { "skill.source": g }, ...n?.kind && { "skill.kind": n.kind }, ...y && f && { "plugin.name": f.pluginManifest.name }, ...y && m && { "marketplace.name": m } }, s);
}
function Uhe(e, n, r, s) {
  return { ...e && { skill_source: c(e) }, ...n && { skill_loaded_from: c(n) }, ...r && { skill_kind: c(r) }, ...s && { skill_created_by: c(s) } };
}
function ZHo(e) {
  return { skill_name_hash: Hn(U0e(e)) };
}
function eLo(e, n) {
  if (!e) return {};
  return { parent_skill_name_hash: Hn(U0e(e)), parent_command_name: tLo(e, n) };
}
function tLo(e, n) {
  return Hn(n ? e : "custom");
}
function m8({ rawName: e, canonicalName: n, isMcp: r, isBuiltIn: s, isBundled: g, isOfficial: f }) {
  let m = r ? "mcp" : s || g || f ? e : "custom";
  return { sanitizedName: Hn(m), skillNameHash: m === "custom" ? ZHo(n) : {} };
}
function vQ(e) {
  if (e.source !== "plugin" || !e.pluginInfo?.repository) return false;
  return md(mc(e.pluginInfo.repository).marketplace);
}
function $dn(e) {
  let n = e.pluginInfo;
  if (!n || !vQ(e)) return { plugin_name: b(zv), plugin_repository: b(zv) };
  return { plugin_name: Hn(n.pluginManifest.name), plugin_repository: Hn(n.repository) };
}
function nLo(e, n, r) {
  if (e.isBuiltin) return "default-enable";
  if (n?.has(e.name)) return "org-policy";
  if (e.installationPreference === "required" || e.installationPreference === "auto_install") return "admin-install";
  if (r.some((s) => e.path.startsWith(s.endsWith(fe) ? s : s + fe))) return "seed-mount";
  return "user-install";
}
function Fdn(e, n, r = null) {
  let s = _Y(e, n, r), g = ve(s) || mot(e, n) || _e(e, n), f = n === Ns ? cdi(e) : void 0;
  return { plugin_id_hash: ux(e, n), plugin_scope: c5n(n) ? c("directory") : c(s), plugin_name_redacted: g ? Hn(e) : b(zv), marketplace_name_redacted: g && n ? Hn(n) : b(zv), is_official_plugin: ere(s), ...f !== void 0 && { plugin_name_previous: Hn(f), plugin_id_hash_previous: ux(f, n) } };
}
function bY(e, n, r = null) {
  let s = x(e, n) ?? n;
  return { _PROTO_plugin_name: e, ...s && { _PROTO_marketplace_name: s }, ...Fdn(e, n, r) };
}
function N(e) {
  if (e === void 0 || !hce(e)) return;
  return Hn(e);
}
function Ce(e) {
  if (e === void 0 || !C(e)) return;
  return Hn(e);
}
var Fe = /^[0-9a-f]{40}$/;
function Ne(e, n) {
  if (e === void 0 || !vTt(n)) return;
  let r = e.toLowerCase();
  return Fe.test(r) ? Hn(r) : void 0;
}
function nBt(e, n) {
  let r = Ne(n, mc(e).marketplace);
  return r !== void 0 ? { plugin_version_sha: r } : {};
}
function bde(e) {
  return e.pluginSource !== void 0 ? LD(e.pluginSource, Sf()) : {};
}
function r$r(e, n, r) {
  a("tengu_plugin_folder_shadowed", { component: c(r), ...bY(e, n) });
}
function o$r(e, n, r) {
  a("tengu_plugin_renamed", { outcome: c(r.kind), chain_depth: r.kind === "unresolved" ? void 0 : r.chainDepth, reason: r.kind === "unresolved" ? c(r.reason) : void 0, ...bY(e, n) });
}
function Tyt(e, n, r) {
  let s = /* @__PURE__ */ new Map();
  for (let { name: g, source: f } of n) {
    let m = s.get(g);
    if (m === void 0) s.set(g, [f]);
    else m.push(f);
  }
  for (let [g, f] of s) {
    let m = L(f);
    if (m.length < 2) continue;
    a("tengu_plugin_name_collision", { item_type: c(e), _PROTO_skill_name: g, item_name_hash: ux(g), source_count: m.length, sources: Ka(m), ...r.resolves && { winner_source: ce(f.at(-1)) } });
  }
}
function LD(e, n = null) {
  let { name: r, marketplace: s } = mc(e);
  return bY(r, s, n);
}
function Le(e, n = Sf()) {
  let { marketplace: r } = mc(e.repository), s = N(e.serverPluginId);
  return { ...bY(e.pluginManifest.name, r, n), ...s !== void 0 && { server_plugin_id: s } };
}
function Bhe(e, n) {
  let r = Ce(e.serverAttribution?.skillId), s = N(e.serverAttribution?.pluginId);
  return { ...e.pluginInfo && Le(e.pluginInfo, n), ...r !== void 0 && { skill_id: r }, ...s !== void 0 && { server_plugin_id: s } };
}
function _zs(e, n) {
  for (let r of e) try {
    let { marketplace: s } = mc(r.repository);
    if (ere(_Y(r.name, s, n))) dKs(r.name, s);
  } catch (s) {
    l(s);
  }
}
function ye(e) {
  let n = Vs(e);
  return n === void 0 || Vf(n);
}
function De(e) {
  return e.isBuiltin === true || ye(e.repository);
}
function rLo(e) {
  return e.type === "prompt" && e.loadedFrom === "plugin" && e.pluginInfo !== void 0 && !ye(e.pluginInfo.repository);
}
function bzs(e) {
  let n = /* @__PURE__ */ new Map();
  for (let r of e) {
    if (!rLo(r)) continue;
    let s = n.get(r.pluginInfo.repository);
    if (s) s.push(r.name);
    else n.set(r.pluginInfo.repository, [r.name]);
  }
  return n;
}
function Me(e, n) {
  if (e === null) return {};
  let r = e.get(n) ?? [];
  return { skill_name_hash_count: r.length, ...r.length > 0 && { skill_name_hashes: Hn(r.map((s) => U0e(s)).sort().join(",")) } };
}
function Szs(e, n, r, s, g) {
  let f = ue().numStartups, m = Date.now(), _ = [], y = e.filter((d) => d.lspServers && Object.keys(d.lspServers).length > 0).map((d) => d.repository);
  if (y.length > 0) pe(y, g);
  for (let d of e) {
    let { marketplace: P } = mc(d.repository), A = u5n(d.repository);
    if (!A) _.push(d.repository);
    let { sessionsSinceLastUse: Se, daysSinceLastUse: he } = A ? f5n(A, f, m) : { sessionsSinceLastUse: 0, daysSinceLastUse: 0 }, D = _Y(d.name, P, n), M = nLo(d, n, r), O = (d.skillsPath ? 1 : 0) + (d.skillsPaths?.length ?? 0), w = (d.commandsPath ? 1 : 0) + (d.commandsPaths?.length ?? 0), B = (d.agentsPath ? 1 : 0) + (d.agentsPaths?.length ?? 0), G = N(d.serverPluginId), H = d.hooksConfig !== void 0 || d.modulePath !== void 0, V = QHo(D);
    Si("plugin_loaded", { ...n$r(d.name, P, V), ...V && d.manifest.version && { "plugin.version": d.manifest.version }, "plugin.scope": D, enabled_via: M, plugin_id_hash: ux(d.name, P), has_hooks: H, has_mcp: !d.skipMcpDiscovery && d.mcpServers !== void 0, host_owned_mcp: d.skipMcpDiscovery === true, skill_path_count: O, command_path_count: w, agent_path_count: B, safe_mode: String(Mr()) }), a("tengu_plugin_enabled_for_session", { ...bY(d.name, P, n), ...G !== void 0 && { server_plugin_id: G }, enabled_via: c(M), ...d.installationPreference !== void 0 && { installation_preference: c(d.installationPreference) }, skill_path_count: O, command_path_count: w, agent_path_count: B, ...Me(De(d) ? null : s, d.repository), has_mcp: !d.skipMcpDiscovery && d.mcpServers !== void 0, host_owned_mcp: d.skipMcpDiscovery === true, has_lsp: d.lspServers !== void 0, has_hooks: H, has_settings: d.settings !== void 0, sessions_since_last_use: Se, days_since_last_use: he, safe_mode: Mr(), ...d.settings && { settings_keys: Ka(Object.keys(d.settings).filter(J)) }, ...d.manifest.version && { version: pa(d.manifest.version) }, ...nBt(d.repository, d.gitCommitSha) });
  }
  if (_.length > 0) t$r(_, g);
}
var Oe = ["network", "not-found", "permission", "policy", "validation", "in-use", "unknown"], we = new Set(Oe);
function Be(e) {
  return typeof e === "string" && we.has(e);
}
function g8(e) {
  if (typeof e === "object" && e !== null && "pluginCommandErrorCategory" in e && Be(e.pluginCommandErrorCategory)) return e.pluginCommandErrorCategory;
  let n = String(e?.message ?? e), r = kW(e);
  if (typeof r === "string" && (K.has(r) || r.startsWith(Ndn))) return "policy";
  if (/ENOTFOUND|ECONNREFUSED|EAI_AGAIN|ETIMEDOUT|ECONNRESET|network|Could not resolve|Connection refused|timed out/i.test(n)) return "network";
  if (/\b404\b|not found|does not exist|no such plugin/i.test(n)) return "not-found";
  if (/\b40[13]\b|EACCES|EPERM|permission denied|unauthorized/i.test(n)) return "permission";
  if (/blocked by your organization'?s policy|required by your organization/i.test(n)) return "policy";
  if (/(?:the command|it|nothing) was not run|nothing was run|command that installs it was not run|is ignored inside a Claude Code session|Command-sourced plugins are disabled|not supported on Windows yet/i.test(n)) return "policy";
  if (/invalid|malformed|schema|validation|parse error/i.test(n)) return "validation";
  return "unknown";
}
function oLo(e) {
  let n = e.toLowerCase();
  return PZ.has(n) ? Hn(n) : b(zv);
}
function wzs(e, n, r) {
  for (let s of e) {
    let { name: g, marketplace: f } = mc(s.source), m = "plugin" in s && s.plugin ? s.plugin : g;
    a("tengu_plugin_load_failed", { error_category: c(s.type), cache_only: r?.cacheOnly ?? false, ..."component" in s && { component: c(s.component) }, ..."errno" in s && { errno: tw(s.errno) }, ...{ is_directory: c5n(f), removed_from_directory: "removedFromDirectory" in s && s.removedFromDirectory === true }, ...bY(m, f, n), ...s.type === "marketplace-load-failed" && s.untrustedReservedName === true && { plugin_name_redacted: b(zv), marketplace_name_redacted: oLo(s.marketplace), plugin_scope: c("user-local"), is_official_plugin: false } });
  }
}
export {
  $dn,
  Bhe,
  Fdn,
  JHo,
  KC,
  LD,
  Ldn,
  Ndn,
  OE,
  QHo,
  Szs,
  Tyt,
  Uhe,
  WDe,
  XHo,
  ZHo,
  _Y,
  _de,
  _zs,
  bY,
  bde,
  bzs,
  c5n,
  eBt,
  eLo,
  ere,
  f5n,
  fzs,
  g8,
  gzs,
  hzs,
  kyt,
  m7e,
  m8,
  mzs,
  n$r,
  nBt,
  nLo,
  o$r,
  oLo,
  pzs,
  r$r,
  rLo,
  t$r,
  tBt,
  tLo,
  u5n,
  ux,
  uzs,
  vQ,
  wzs,
  yzs
};
