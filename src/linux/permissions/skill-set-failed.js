// linux/permissions/skill-set-failed.js — Claude Code 2.1.310（linux）模块 chunk-qh2k3g2z.js
import { L } from "../context/not-admin-owned.js";
import { Hh } from "../settings/global-config-and-gates.js";
import { I } from "../shared/chunk-d2c47492.js";
import { le } from "../shared/chunk-4563156b.js";
import { yr, l2 } from "../fs/async-hooks.7959.js";
import { Bh } from "../shell/invalid-type.js";
import { zj } from "../settings/workflow-launch-exec.js";
import { ije, DN, lge, Hpt, wLs, eOr, tOr } from "../core/conversation-engine.js";
import { o7t, sks } from "../mcp/allow-skill-doctor-transcript-scan.js";
import { ae } from "./max-thinking-tokens.js";
import { jY } from "./bot-protected-tengu-atomic-magpie.js";
import { n8e } from "../plugins/user-install.js";
import { En } from "../shared/chunk-3c6e6b31.js";
function fte(n, s) {
  return n + " ".repeat(Math.max(0, s - le(n)));
}
function n1(n, s) {
  return " ".repeat(Math.max(0, s - le(n))) + n;
}
function r7t(n) {
  let s = n.map((o) => ({ context: o.listingTokens === null ? "-" : l2(o.listingTokens), week: o.weekTokens === null ? "-" : yr(o.weekTokens), lastUsed: o.daysSinceUse === null ? "never" : o.daysSinceUse === 0 ? "today" : `${o.daysSinceUse} ${I(o.daysSinceUse, "day")}` }));
  return { cells: s, widths: { name: Math.max(5, ...n.map((o) => le(o.name))), source: Math.max(6, ...n.map((o) => le(o.source))), context: Math.max(7, ...s.map((o) => le(o.context))), week: Math.max(9, ...s.map((o) => le(o.week))), uses: Math.max(4, ...n.map((o) => le(String(o.usageCount)))) } };
}
class hBe extends Error {
  featureErrorCode;
  constructor(n, s) {
    super("skill-doctor stage failed", { cause: s });
    this.featureErrorCode = n;
  }
}
function aut(n) {
  return { commands: n.options.commands, mcpCommands: n.getMcp().commands, mcpClients: n.getMcp().clients, agentId: n.agentId, mainLoopModel: n.options.mainLoopModel, permissionMode: ae(n).mode, storageV5: n.storageV5 };
}
async function aNn(n) {
  let s = n8e();
  s.catch(() => {
  });
  let o = o7t(), c = o.allowed ? sks(n.storageV5).catch((e) => {
    throw new hBe("scan_failed", e);
  }) : Promise.resolve(/* @__PURE__ */ new Map());
  c.catch(() => {
  });
  let { included: k } = await tOr(n.mcpCommands, n.agentId, n.storageV5).catch((e) => {
    throw new hBe("skill_set_failed", e);
  }), S = Hh({ permissionMode: n.permissionMode, mainLoopModel: n.mainLoopModel }), y = eOr(k, S, n.mainLoopModel), p = await c, r = [], l = lge([...n.commands]), w = new Set(l.map((e) => e.name)), M = new Set(n.commands.filter((e) => Hpt(e) && !w.has(e.name)).map((e) => e.name)), m = /* @__PURE__ */ new Map();
  for (let e of l) {
    let t = e.type === "prompt" && e.loadedFrom !== "syncedSkills" ? e.name.lastIndexOf(":") : -1;
    if (t > 0) {
      let i = e.name.slice(t + 1);
      m.set(i, (m.get(i) ?? 0) + 1);
    }
  }
  for (let e of l) {
    if (e.type !== "prompt") continue;
    if (e.source === "bundled" || e.source === "builtin" || e.source === "policySettings") continue;
    if (e.source === "mcp" && e.loadedFrom !== "mcp") continue;
    let t = e.name.lastIndexOf(":"), i = t > 0 ? e.name.slice(t + 1) : void 0, u = i !== void 0 && e.loadedFrom !== "syncedSkills" && M.has(i) && m.get(i) === 1 ? i : void 0, f = wLs(e.name, u ?? ije(e));
    r.push({ name: e.pluginInfo ? Bh(e.name) : e.name, source: e.pluginInfo ? jY(e.pluginInfo.repository) ? zj : Bh(e.pluginInfo.pluginManifest.name) : e.loadedFrom === "syncedSkills" ? zj : e.source, owner: e.source === "plugin" ? "plugin" : e.source === "mcp" ? "mcp" : e.loadedFrom === "syncedSkills" ? "synced" : "settings", pluginKey: e.pluginInfo?.pluginManifest.name, usageCount: f?.usageCount ?? 0, daysSinceUse: f?.daysSinceUse ?? null, listingTokens: y.get(e.name) ?? null, weekTokens: p.get(DN(e)) ?? (u ? p.get(u) : void 0) ?? null });
  }
  r.sort((e, t) => (t.daysSinceUse ?? 1 / 0) - (e.daysSinceUse ?? 1 / 0));
  let a = r.filter((e) => e.usageCount === 0 && e.listingTokens !== null), h = a.filter((e) => e.owner === "settings"), b = a.filter((e) => e.owner === "synced"), x = new Set(r.filter((e) => e.usageCount > 0 && e.pluginKey !== void 0).map((e) => e.pluginKey)), C = a.filter((e) => e.owner === "plugin" && (e.pluginKey === void 0 || !x.has(e.pluginKey))), d = (e) => {
    let t = e.name.indexOf(":");
    return t > 0 ? e.name.slice(0, t) : void 0;
  }, T = new Set(r.filter((e) => e.owner === "mcp" && e.usageCount > 0).map(d).filter((e) => e !== void 0)), g = a.filter((e) => {
    if (e.owner !== "mcp") return false;
    let t = d(e);
    return t === void 0 || !T.has(t);
  }), P = L(g.map(d).filter((e) => e !== void 0)).map((e) => Bh(n.mcpClients.find((t) => En(t.name) === e)?.name ?? e));
  return { rows: r, unusedOwned: h, unusedFromPlugins: C, unusedFromMcp: g, unusedSynced: b, unusedMcpServers: P, disusedPlugins: await s, weekTokensNote: o.allowed ? null : o.reason };
}
export {
  aNn,
  aut,
  fte,
  hBe,
  n1,
  r7t
};
