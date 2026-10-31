// linux/mcp/reload-plugins-cache-impact.js — Claude Code 2.1.310（linux）模块 chunk-xw0ptzv8.js
import { F, ke, ly, oN, X_ } from "../context/not-admin-owned.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { br } from "../workflows/chunk-a1595c7e.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { wr } from "../models/claude-3-5-sonnet.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { mr } from "../workflows/chunk-5e65bb82.js";
import { tu, G_ } from "../shell/invalid-type.js";
import { Tai } from "../auth/claude-code-user.js";
import { tLe } from "../plugins/entry-refused.js";
import { bpt, SXe, XWn, bxr, YEo, pje, JWn, UMs, Tge, kje, NC, sG, WTo, j3, Hd, HRo, r$s, sv, Uke, Xsn, txo } from "../core/conversation-engine.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { fce, pce, oh } from "./tool-search-unsupported-models.js";
import { ze } from "../shell/sandbox.js";
import { tze } from "../git/coordinator-mode-switched.js";
import { nme, OSr } from "../plugins/chunk-05276ae4.js";
import { Iy } from "../shared/chunk-fe849e7d.js";
function W(n, e) {
  if (e.pluginSource !== void 0 && G_(e.pluginSource) === tu) return true;
  let c = nme(n, X_());
  if (c === void 0) return false;
  return c.kind === "server" || OSr(e.pluginSource, c);
}
function tme() {
  return wr() ? W : void 0;
}
var v = (n) => Object.entries(n ?? {}).filter(([, e]) => e.pluginSource !== void 0).map(([e]) => e);
async function PSr(n, e) {
  return 0;
}
async function AF(n, e, c, y = {}) {
  let u = y.applyStagedInstalls ?? true, f = oN(), { changesLanded: h, holdsSet: k } = f;
  using p = { [Symbol.dispose]: () => {
    f.endHoldSetBefore(k);
  } };
  let i = Ie().organizationAsk, w = u && Iy() !== "unanswered" ? i.heldReresolve : null;
  if (w) i.heldReresolve = null, await w().catch(l);
  if (t("refreshActivePlugins: clearing all plugin caches"), u) Tai(), r$s();
  if (Hd(e, c), u) UMs();
  let o = await sv(e, c);
  HRo();
  let L = Ie().pluginLoadCacheOnly;
  await WTo(e), ze.refreshConfig();
  let [S, j, b] = await Promise.all([Tge(e), kje(e), NC(ke(), e)]), { enabled: g, disabled: R, errors: B, warnings: N } = o, _ = [], E = [], [T, x] = await Promise.all([Promise.all(g.map(async (r) => {
    let s = await bpt(r, _, e, { warnings: E });
    return s ? Object.keys(s).length : 0;
  })), Promise.all(g.map(async (r) => {
    if (r.lspServers) return Object.keys(r.lspServers).length;
    let s = await SXe(r, _, e);
    if (s) r.lspServers = s;
    return s ? Object.keys(s).length : 0;
  }))]), C = T.reduce((r, s) => r + s, 0), I = x.reduce((r, s) => r + s, 0);
  await PSr(g, _);
  let O = [...N, ...E, ...XWn(g)], A = [...B, ..._];
  n.applyRefresh({ enabled: g, disabled: R, commands: S, errors: A, warnings: O, agentDefinitions: b }), JWn(e, c);
  let P = false;
  try {
    await j3(e, c);
  } catch (r) {
    P = true, l(r), t(`refreshActivePlugins: loadPluginHooks failed: ${d(r)}`);
  }
  if (!P) await Xsn(g, e).catch(l), f.reloaded(h);
  let D = g.reduce((r, s) => {
    if (!s.hooksConfig) return r;
    return r + Object.values(s.hooksConfig).reduce((G, z) => G + (z?.reduce((H, J) => H + J.hooks.length, 0) ?? 0), 0);
  }, 0), M = br();
  M.isAnnouncingFreshLoad = L !== void 0 && Ie().pluginLoadCacheOnly === L;
  try {
    sG.emit();
  } finally {
    M.isAnnouncingFreshLoad = false;
  }
  return t(`refreshActivePlugins: ${g.length} enabled, ${S.length} commands, ${j.length} skills, ${b.allAgents.length} agents, ${D} hooks, ${C} MCP, ${I} LSP`), { enabled_count: F(g, (r) => r.isBuiltin !== true), disabled_count: F(R, (r) => r.isBuiltin !== true), command_count: S.length, skill_count: j.length, agent_count: b.allAgents.length, hook_count: D, mcp_count: C, lsp_count: I, error_count: A.length + (P ? 1 : 0), errors: A, warnings: O, agentDefinitions: b, pluginCommands: S };
}
async function eJ(n) {
  let e = new Set(n.mcpClients.filter((o) => o.config.pluginSource !== void 0).map((o) => o.name)), c, y = () => c ??= Uke(n.storageV5), u = await txo(n.dynamicMcpConfig ?? {}, n.storageV5, y, tme());
  for (let o of v(n.dynamicMcpConfig)) u.add(o);
  let f = [...u].filter((o) => !e.has(o)).sort(), h = [...e].filter((o) => !u.has(o)).sort(), k = f.length > 0 || h.length > 0, p = oh() && pce(n.model) && !fce(n.model), i = ly() > 0, m = null;
  if (tze() && !p && i && !mr("lspServers")) {
    let o = YEo() ? { hasServers: false, loaderFailed: false, loaderFailedApplyHealable: false, derivationFailed: false } : await K(y, n.storageV5, n.credentials);
    if (!pje()) {
      if (o.hasServers) m = "adds";
      else if (o.loaderFailedApplyHealable) m = "may-add";
    } else if (!o.hasServers && !o.derivationFailed) {
      if (o.loaderFailedApplyHealable) m = "may-remove";
      else if (!o.loaderFailed) m = "removes";
    }
  }
  return { mcpServersAdded: f, mcpServersRemoved: h, toolSearchEnabled: p, lspToolChange: m, wouldInvalidateCache: (k || m !== null) && !p && i };
}
async function K(n, e, c) {
  let { enabled: y, errors: u } = await n(), f = false, h = u.some(tLe), k = u.some((i) => tLe(i) && !(i.type === "plugin-not-installed" && i.registryReadFailed !== true) && !(i.type === "marketplace-not-found" && i.registryReadFailed !== true) && i.type !== "dependency-version-unsatisfied" && !(i.type === "dependency-unsatisfied" && i.reason !== "not-found")), p = false;
  for (let i of y) {
    let m = [];
    try {
      let w = await bxr(i, m, e, c);
      if (w !== void 0 && Object.keys(w).length > 0) f = true;
    } catch {
      p = true;
    }
    if (m.length > 0) p = true;
  }
  return { hasServers: f, loaderFailed: h, loaderFailedApplyHealable: k, derivationFailed: p };
}
function rQt(n, e) {
  a("tengu_reload_plugins_cache_impact", { mcp_changed: n.mcpServersAdded.length > 0 || n.mcpServersRemoved.length > 0, lsp_changed: n.lspToolChange !== null, tool_search_on: n.toolSearchEnabled, warned: e.warned, forced: e.forced });
}
export {
  AF,
  PSr,
  eJ,
  rQt,
  tme
};
