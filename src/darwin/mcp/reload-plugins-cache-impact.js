// darwin/mcp/reload-plugins-cache-impact.js — Claude Code 2.1.310（darwin）模块 chunk-tnzbc962.js
import { F, ke, cy, lN, J_ } from "../context/not-admin-owned.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { br } from "../workflows/chunk-a1595c7e.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { Sr } from "../models/claude-3-5-sonnet.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { mr } from "../workflows/chunk-5e65bb82.js";
import { nu, z_ } from "../shell/invalid-type.js";
import { ali } from "../auth/claude-code-user.js";
import { aDe } from "../plugins/entry-refused.js";
import { Tft, RXe, y2n, $xr, kko, vje, _2n, C0s, Pge, Hje, UA, g2, _To, Q9, Dd, cxo, jFs, iE, Vke, uin, Pxo } from "../core/conversation-engine.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { Sce, bce, oh } from "./tool-search-unsupported-models.js";
import { ze } from "../shell/sandbox.js";
import { uGe } from "../git/coordinator-mode-switched.js";
import { lme, qbr } from "../plugins/chunk-05276ae4.js";
import { My } from "../shared/chunk-fe849e7d.js";
function W(n, e) {
  if (e.pluginSource !== void 0 && z_(e.pluginSource) === nu) return true;
  let c = lme(n, J_());
  if (c === void 0) return false;
  return c.kind === "server" || qbr(e.pluginSource, c);
}
function ame() {
  return Sr() ? W : void 0;
}
var v = (n) => Object.entries(n ?? {}).filter(([, e]) => e.pluginSource !== void 0).map(([e]) => e);
async function Vbr(n, e) {
  return 0;
}
async function P$(n, e, c, y = {}) {
  let u = y.applyStagedInstalls ?? true, f = lN(), { changesLanded: h, holdsSet: k } = f;
  using p = { [Symbol.dispose]: () => {
    f.endHoldSetBefore(k);
  } };
  let i = Ie().organizationAsk, w = u && My() !== "unanswered" ? i.heldReresolve : null;
  if (w) i.heldReresolve = null, await w().catch(l);
  if (t("refreshActivePlugins: clearing all plugin caches"), u) ali(), jFs();
  if (Dd(e, c), u) C0s();
  let o = await iE(e, c);
  cxo();
  let L = Ie().pluginLoadCacheOnly;
  await _To(e), ze.refreshConfig();
  let [S, j, b] = await Promise.all([Pge(e), Hje(e), UA(ke(), e)]), { enabled: g, disabled: R, errors: B, warnings: N } = o, _ = [], E = [], [T, x] = await Promise.all([Promise.all(g.map(async (r) => {
    let s = await Tft(r, _, e, { warnings: E });
    return s ? Object.keys(s).length : 0;
  })), Promise.all(g.map(async (r) => {
    if (r.lspServers) return Object.keys(r.lspServers).length;
    let s = await RXe(r, _, e);
    if (s) r.lspServers = s;
    return s ? Object.keys(s).length : 0;
  }))]), C = T.reduce((r, s) => r + s, 0), I = x.reduce((r, s) => r + s, 0);
  await Vbr(g, _);
  let O = [...N, ...E, ...y2n(g)], A = [...B, ..._];
  n.applyRefresh({ enabled: g, disabled: R, commands: S, errors: A, warnings: O, agentDefinitions: b }), _2n(e, c);
  let P = false;
  try {
    await Q9(e, c);
  } catch (r) {
    P = true, l(r), t(`refreshActivePlugins: loadPluginHooks failed: ${d(r)}`);
  }
  if (!P) await uin(g, e).catch(l), f.reloaded(h);
  let D = g.reduce((r, s) => {
    if (!s.hooksConfig) return r;
    return r + Object.values(s.hooksConfig).reduce((G, z) => G + (z?.reduce((H, J) => H + J.hooks.length, 0) ?? 0), 0);
  }, 0), M = br();
  M.isAnnouncingFreshLoad = L !== void 0 && Ie().pluginLoadCacheOnly === L;
  try {
    g2.emit();
  } finally {
    M.isAnnouncingFreshLoad = false;
  }
  return t(`refreshActivePlugins: ${g.length} enabled, ${S.length} commands, ${j.length} skills, ${b.allAgents.length} agents, ${D} hooks, ${C} MCP, ${I} LSP`), { enabled_count: F(g, (r) => r.isBuiltin !== true), disabled_count: F(R, (r) => r.isBuiltin !== true), command_count: S.length, skill_count: j.length, agent_count: b.allAgents.length, hook_count: D, mcp_count: C, lsp_count: I, error_count: A.length + (P ? 1 : 0), errors: A, warnings: O, agentDefinitions: b, pluginCommands: S };
}
async function a7(n) {
  let e = new Set(n.mcpClients.filter((o) => o.config.pluginSource !== void 0).map((o) => o.name)), c, y = () => c ??= Vke(n.storageV5), u = await Pxo(n.dynamicMcpConfig ?? {}, n.storageV5, y, ame());
  for (let o of v(n.dynamicMcpConfig)) u.add(o);
  let f = [...u].filter((o) => !e.has(o)).sort(), h = [...e].filter((o) => !u.has(o)).sort(), k = f.length > 0 || h.length > 0, p = oh() && bce(n.model) && !Sce(n.model), i = cy() > 0, m = null;
  if (uGe() && !p && i && !mr("lspServers")) {
    let o = kko() ? { hasServers: false, loaderFailed: false, loaderFailedApplyHealable: false, derivationFailed: false } : await K(y, n.storageV5, n.credentials);
    if (!vje()) {
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
  let { enabled: y, errors: u } = await n(), f = false, h = u.some(aDe), k = u.some((i) => aDe(i) && !(i.type === "plugin-not-installed" && i.registryReadFailed !== true) && !(i.type === "marketplace-not-found" && i.registryReadFailed !== true) && i.type !== "dependency-version-unsatisfied" && !(i.type === "dependency-unsatisfied" && i.reason !== "not-found")), p = false;
  for (let i of y) {
    let m = [];
    try {
      let w = await $xr(i, m, e, c);
      if (w !== void 0 && Object.keys(w).length > 0) f = true;
    } catch {
      p = true;
    }
    if (m.length > 0) p = true;
  }
  return { hasServers: f, loaderFailed: h, loaderFailedApplyHealable: k, derivationFailed: p };
}
function fJt(n, e) {
  a("tengu_reload_plugins_cache_impact", { mcp_changed: n.mcpServersAdded.length > 0 || n.mcpServersRemoved.length > 0, lsp_changed: n.lspToolChange !== null, tool_search_on: n.toolSearchEnabled, warned: e.warned, forced: e.forced });
}
export {
  P$,
  Vbr,
  a7,
  ame,
  fJt
};
