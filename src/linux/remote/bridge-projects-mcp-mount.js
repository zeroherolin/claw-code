// linux/remote/bridge-projects-mcp-mount.js — Claude Code 2.1.310（linux）模块 chunk-3y2xamk0.js
import { Qc, Tii } from "../context/fetch-project-timeline.js";
import { F } from "../context/not-admin-owned.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { mZ } from "../mcp/toolbox-mcp-server-id.js";
import { Bn, dn } from "../mcp/chunk-0e2a1db6.js";
import { io, jc, Xo } from "../mcp/always-allow.js";
import { Wb } from "../core/conversation-engine.js";
import { Ju } from "../context/org-memory-writes-setting-changed.js";
import { RQr } from "./bad-server-name.js";
import { ele } from "../shared/downstream-unreachable.25bb.js";
import { Fr } from "../mcp/mcp-discovery-cache.js";
import { dwe } from "../mcp/mcp-list-changed.js";
import { Rwe } from "../shared/needs-auth.aacf.js";
function C() {
  return import.meta.require("../mcp/emit-tripwire-event.js").mcpClientModule();
}
var G = [500, 1500, 4e3, 15e3, 6e4];
function TQr(s) {
  let { getAppState: w, setAppState: h, getDynamicMcpState: U } = s.stores, r = null, u = Promise.resolve(), y = false, p = false, M = 0, a = null;
  function j() {
    if (p) return false;
    if (a !== null) return true;
    let e = G[M];
    if (e === void 0) return t("[bridge:projects] reply mount retries exhausted — the mount stays as it is until the binding changes", { level: "warn" }), false;
    return M++, a = setTimeout(() => {
      a = null, A("retry");
    }, e), a.unref(), true;
  }
  function R() {
    if (M = 0, a !== null) clearTimeout(a), a = null;
  }
  function A(e) {
    return u = u.then(() => W(e)).catch((o) => {
      t(`[bridge:projects] converge (${e}) threw: ${d(o)}`, { level: "warn" });
    }), u;
  }
  async function W(e) {
    if (p) return;
    if (e === "binding_changed") R();
    let o = await s.readHearthBinding();
    if (p) return;
    if (!o.read) {
      if (t(`[bridge:projects] binding read did not answer (${e}) — mount left as is`, { level: "warn" }), !r || E(r)) j();
      return;
    }
    let n = RQr({ hearth: o.assertion }, { apiBaseUrl: s.apiBaseUrl, sessionId: s.sessionId });
    if (!n.binding) {
      if (R(), r) {
        t(`[bridge:projects] binding gone (${n.reason}, ${e}) — dropping the reply mount`);
        let i = r;
        r = null, await b(i);
      }
      return;
    }
    if (S(), r && r.binding.mountUrl === n.binding.mountUrl) {
      if (E(r)) {
        t(`[bridge:projects] the reply mount's dial had failed — dialing again (${e})`);
        let i = r;
        if (r = null, await b(i), p) return;
        await B(n.binding);
        return;
      }
      P(r, n.binding), r.binding = n.binding;
      return;
    }
    t(`[bridge:projects] joined to a project thread (${e}) — mounting the reply server`), await B(n.binding);
  }
  async function B(e) {
    if (w().mcp.clients.some((i) => i.name === Qc) || Qc in U().configs || T()) {
      t(`[bridge:projects] reply mount skipped: a server named ${Qc} is already configured`, { level: "warn" }), f("bridge_projects_mcp_mount", "name_taken");
      return;
    }
    let o = mZ({ ...Tii(e.mountUrl, s.sessionId), scope: "dynamic", role: "comms" }, { getBearerToken: s.getBearerToken }), n = { binding: e, config: o, allowRules: [] };
    if (r = n, h((i) => Rwe(i, Qc, { client: { name: Qc, type: "pending", config: o }, tools: [], commands: [] })), !y) n.allowRules = O(e.autoAllowTools.map((i) => dn({ toolName: Xo(Qc, i) })));
    await N(n);
  }
  async function N(e) {
    let o = Fr(), n;
    try {
      n = { ...await C().reconnectMcpServerImpl(Qc, e.config, s.storageV5, s.credentials), attemptEpoch: o };
    } catch (c) {
      t(`[bridge:projects] reply mount connect threw: ${d(c)}`, { level: "warn" }), n = { client: { name: Qc, type: "failed", config: e.config, error: "Connection failed" }, tools: [], commands: [], attemptEpoch: o };
    }
    if (r !== e) {
      if (n.client.type === "connected") await C().detachAndCloseConnection(n.client);
      return;
    }
    let i = dwe(s.stores, Qc, n);
    if (i !== "applied") {
      f("bridge_projects_mcp_mount", i), S();
      return;
    }
    if (n.client.type === "connected") R(), ele(Qc, void 0), g("bridge_projects_mcp_mount");
    else if (x(n.client)) if (ele(Qc, Object.assign(Error("reply mount dial failed"), { mcpErrorSource: "downstream_unreachable" })), j()) f("bridge_projects_mcp_mount", "settled_failed_retrying");
    else m("bridge_projects_mcp_mount", "settled_failed");
    else m("bridge_projects_mcp_mount", n.client.type === "failed" ? `settled_failed_${(n.client.errorCode ?? "answered").toLowerCase()}` : `settled_${n.client.type}`);
  }
  function E(e) {
    let o = w().mcp.clients.find((n) => n.name === Qc);
    return o !== void 0 && o.config === e.config && x(o);
  }
  async function b(e) {
    _(e.allowRules);
    let o = w().mcp.clients.find((i) => i.name === Qc);
    if (o && o.config !== e.config) {
      await D(e.config);
      return;
    }
    let n = io(Qc);
    h((i) => {
      let { [Qc]: c, ...v } = i.mcp.resources, { [Qc]: I, ...H } = i.mcp.resourceTemplates;
      return { ...i, mcp: { ...i.mcp, clients: i.mcp.clients.filter((l) => l !== o), tools: i.mcp.tools.filter((l) => !jc(l, Qc, n)), commands: i.mcp.commands.filter((l) => !Wb(l, Qc)), resources: v, resourceTemplates: H } };
    }), await D(e.config);
  }
  function S() {
    if (!r) return;
    let e = w().mcp.clients.find((n) => n.name === Qc);
    if (e && e.config === r.config && !T()) {
      if (!y) P(r, r.binding);
      return;
    }
    t("[bridge:projects] the reply mount’s name is no longer held by its own row — retracting its pre-approvals", { level: "warn" });
    let o = r;
    r = null, b(o);
  }
  function T() {
    return Object.hasOwn(s.sdkHostConfigs(), Qc);
  }
  function L(e) {
    if (!Object.hasOwn(e, Qc)) return;
    if (y = true, !r) return;
    let o = r.allowRules;
    r.allowRules = [], _(o);
  }
  function V() {
    y = false, S();
  }
  function P(e, o) {
    if (y) return;
    let n = o.autoAllowTools.map((l) => dn({ toolName: Xo(Qc, l) })), i = new Set(n), c = new Set(e.allowRules), v = e.allowRules.filter((l) => !i.has(l));
    if (v.length > 0) _(v);
    let I = e.allowRules.filter((l) => i.has(l)), H = O(n.filter((l) => !c.has(l)));
    e.allowRules = [...I, ...H];
  }
  function k(e) {
    return F(w().toolPermissionContext.alwaysAllowRules.session ?? [], (o) => o === e);
  }
  function O(e) {
    if (p) return [];
    if (e.length === 0) return [];
    let o = new Map(e.map((n) => [n, k(n)]));
    return h((n) => ({ ...n, toolPermissionContext: Ju(n.toolPermissionContext, { type: "addRules", destination: "session", behavior: "allow", rules: e.map(Bn) }) })), e.filter((n) => k(n) > (o.get(n) ?? 0));
  }
  function _(e) {
    if (e.length === 0) return;
    h((o) => {
      let n = [...o.toolPermissionContext.alwaysAllowRules.session ?? []];
      for (let i of e) {
        let c = n.indexOf(i);
        if (c !== -1) n.splice(c, 1);
      }
      return { ...o, toolPermissionContext: { ...o.toolPermissionContext, alwaysAllowRules: { ...o.toolPermissionContext.alwaysAllowRules, session: n } } };
    });
  }
  function D(e) {
    return C().clearServerCache(Qc, e).catch((o) => {
      t(`[bridge:projects] reply mount cleanup failed: ${d(o)}`, { level: "warn" });
    });
  }
  function Y() {
    if (p = true, R(), r) {
      let e = r.allowRules;
      r.allowRules = [], _(e);
    }
    return u = u.then(async () => {
      if (!r) return;
      t("[bridge:projects] dropping the reply mount");
      let e = r;
      r = null, await b(e);
    }).catch((e) => {
      t(`[bridge:projects] drop threw: ${d(e)}`, { level: "warn" });
    }), u;
  }
  return { sync: A, drop: Y, reassertOwnership: S, suspendAllowsForApply: L, reassertAfterApply: V, current: () => r?.binding ?? null, projectFilesDoor: () => r ? { channelId: r.binding.channelId, sessionId: s.sessionId, apiBaseUrl: s.apiBaseUrl, getBearerToken: s.getBearerToken, getWorkerEpoch: s.getWorkerEpoch } : null };
}
function x(s) {
  return s.type === "failed" && !q.has(s.errorCode ?? "");
}
var q = /* @__PURE__ */ new Set(["CLI_OWNED_BEARER_REJECTED", "POLICY_BLOCKED", "APPROVAL_REQUIRED", "DISABLED", "IDENTITY_CHANGED", "SHUTTING_DOWN"]);
export {
  TQr
};
