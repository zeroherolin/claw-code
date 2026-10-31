// linux/mcp/mcp-plugin-beside-ineligible-connector.js — Claude Code 2.1.310（linux）模块 chunk-fbc1ty1s.js
import { _ts } from "../context/not-admin-owned.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l, se } from "../artifacts/cowritten-artifact-html.js";
import { Ir } from "../shell/invalid-type.js";
import { ri } from "../permissions/classifier-transcript-too-long.js";
import { io, jc } from "./always-allow.js";
import { jh, wi, FTt } from "../plugins/skills-dir.js";
import { aT } from "../remote/moved-directory.js";
import { go } from "./init-function-end.js";
import { Lx } from "../settings/global-config-and-gates.js";
import { xt } from "./toolbox-mcp-server-id.js";
import { u_t, Nde, f_t, c3n } from "./claudeai-mcp-eligibility.js";
import { ohe } from "../vendor/mcp-sdk/chunk-384e0b2c.js";
import { Tk, Ul, WLt, bXe, mrn, Wb, mge, zLt, KF, Jsn, m$t, DP, cu, DT, Io } from "../core/conversation-engine.js";
import { Dr, yKe } from "./spawn-to-exec-ms.js";
import { Fr, rO, hft } from "./mcp-discovery-cache.js";
import { jB } from "../shared/chunk-259e511a.js";
import { ZCs, pft } from "./mcp-claudeai-eligibility-gate.js";
import { _4 } from "../shared/chunk-a6f3e9fc.js";
import { jb, LBn } from "./project-approval.js";
import { bRs } from "../shared/chunk-cd9b985e.js";
import { Kze } from "../shared/chunk-51932285.js";
function R() {
  return import.meta.require("./emit-tripwire-event.js").mcpClientModule();
}
function D(n) {
  let o = performance.now();
  try {
    let e = R();
    if (yKe("mcp_client_module_load_ms") === void 0) Dr("mcp_client_module_load_ms", performance.now() - o, o);
    return e;
  } catch (e) {
    l(e), t(`[MCP] ${n} connect error: ${e}`);
    return;
  }
}
var $ls = 1e3, C6t = [500, 1500, 4e3], F = C6t.reduce((n, o) => n + o, 0);
function Fls(n) {
  let { regularMcpConfigs: o, claudeaiConfigPromise: e, state: u, storageV5: d, credentials: s, dialInConnect: c, onDialStart: p, dialFirst: f, dialOptions: m, leaveAlwaysLoadWaitTo: r } = n, S = n.knownListings && Ir(n.knownListings, (y) => Array.isArray(y) ? { tools: y } : y), g = Fr(), v = i.MCP_CONNECTION_NONBLOCKING !== false;
  _ts(v);
  let w = v;
  async function b() {
    go("before_mcp_connect_user"), go("before_mcp_connect_connector");
    let y = iZr({ configs: o, label: "regular", nonBlocking: v, dialInConnect: c, onDialStart: p, dialFirst: f, dialOptions: m, state: u, storageV5: d, credentials: s, knownListings: S, leaveAlwaysLoadWaitTo: r }).then(() => go("after_mcp_connect_user")), O = A(v, () => e.then((C) => I({ claudeaiConfigs: C, regularMcpConfigs: o, state: u, deferConnect: w, storageV5: d, epoch: g })).then((C) => C === "superseded" ? [] : C), "claude.ai connectors").then(() => go("after_mcp_connect_connector"));
    await Promise.all([y, O]);
  }
  return { connect: b };
}
function Uls(n) {
  return i.CLAUDE_CODE_MCP_ALWAYS_LOAD_JOIN_BEFORE_INPUT === true && Boolean(n) && !aT();
}
function iZr(n) {
  let { configs: o, label: e, nonBlocking: u, state: d, storageV5: s, credentials: c, knownListings: p, dialInConnect: f, onDialStart: m, dialFirst: r, dialOptions: S, leaveAlwaysLoadWaitTo: g } = n, v = (C, h) => C.alwaysLoad === true || p !== void 0 && Object.hasOwn(p, h), w = g === void 0 ? {} : Lx(o, (C, h) => C.alwaysLoad === true && C.scope === "dynamic" && !jh(C) && !(p !== void 0 && Object.hasOwn(p, h))), b = Lx(o, (C, h) => v(C, h) && !Object.hasOwn(w, h)), y = Lx(o, (C, h) => !v(C, h)), O = Object.keys(b).length > 0;
  if (Object.keys(w).length > 0) {
    let C = B(w, `${e}-required`, d, false, s, c, p, m, r, S);
    g?.(() => A(false, () => C, "--mcp-config alwaysLoad servers"));
  }
  return Promise.all([...O ? [A(false, () => B(b, `${e}-required`, d, false, s, c, p, m, r, S), "--mcp-config alwaysLoad servers")] : [], A(u, () => B(y, e, d, u && !f, s, c, p, m, r, S), "--mcp-config servers")]).then(() => {
  });
}
function B(n, o, e, u = false, d, s, c, p, f, m) {
  let r = Object.keys(n);
  if (r.length === 0) return [];
  let S = c && Ir(c, (C) => C.tools);
  e.applyMcpUpdate((C) => ({ ...C, clients: [...C.clients, ...Object.entries(n).map(([h, P]) => ({ name: h, type: "pending", config: P }))] }));
  let g = /* @__PURE__ */ new Map(), v = r.map((C) => new Promise((h) => g.set(C, h))), w = Promise.withResolvers(), b = /* @__PURE__ */ new Set(), y = (C) => {
    for (let h of Object.keys(C)) b.add(h);
    R6t(C, e, d, void 0, w.promise).catch((h) => t(`[MCP] ${o} retry error: ${h}`)).finally(() => {
      for (let h of Object.keys(C)) b.delete(h);
    });
  }, O = () => {
    let C = D(o);
    if (!C) {
      for (let P of g.values()) P();
      return;
    }
    if (p !== void 0 && r.some((P) => !Object.hasOwn(S ?? {}, P))) p();
    let h = f === void 0 ? n : { ...Lx(n, (P, M) => f(M)), ...n };
    C.getMcpToolsCommandsAndResources((P) => {
      let { client: M } = P, _ = Object.hasOwn(c ?? {}, M.name) ? c?.[M.name]?.handshake : void 0;
      if (M.type === "cached" && _ !== void 0) {
        M.capabilities = _.capabilities, M.serverInfo = { name: _.serverInfo.name, version: _.serverInfo.version };
        let L = C.capMcpInstructions(_.instructions, M.name, _4(M.config));
        if (L !== void 0) M.instructions = L;
      }
      hfr(e, P), bRs();
      let { name: k } = P.client;
      if (g.get(k)?.(), !b.has(k)) {
        let L = Lx(n, (q, x) => x === k);
        if (QRn(L, e).length > 0) y(L);
      }
    }, h, d, s, S, true, void 0, m).catch((P) => t(`[MCP] ${o} connect error: ${P}`)).finally(() => {
      for (let P of g.values()) P();
      w.resolve(performance.now()), y(Lx(n, (P, M) => !b.has(M)));
    });
  };
  if (u) setImmediate(O);
  else O();
  return v;
}
function hfr(n, o) {
  let { client: e, tools: u, commands: d, attemptEpoch: s } = o, c, p = "applied", f = hft(e.config, s);
  return n.applyMcpUpdate((m) => {
    p = "applied", c = void 0;
    let r = m.clients.find((g) => g.name === e.name);
    if (!r || !R().areMcpConfigsEqual(r.config, e.config)) {
      if (e.type === "connected") se(e.name, r ? "applyConnectionResult: disposing orphaned connect (slot config changed mid-flight)" : "applyConnectionResult: disposing orphaned connect (slot removed mid-flight)"), c = () => T(e);
      return p = "dropped", m;
    }
    if (f) {
      if (se(e.name, "applyConnectionResult: settlement superseded by an account switch — closed, not installed (the identity boundary owns the row)"), e.type === "connected") c = () => {
        R().detachAndCloseConnection(e).catch(() => {
        });
      };
      return p = "superseded", m;
    }
    let S = e.type !== "failed" && e.type !== "disabled" ? cu(e.name, e.config) : null;
    if (S !== "managed-policy" && !LBn(e) && Io(e.name) && e.type !== "disabled") {
      let g = e.type === "connected" && r.type === "connected" && r.client === e.client;
      if (e.type === "connected" && !g) se(e.name, "applyConnectionResult: disposing connect that settled after a disable"), c = () => T(e);
      if (p = "refused", r.type === "disabled" || r.type === "connected" && wi(e)) return m;
      return E(m, { name: e.name, type: "disabled", config: r.config });
    }
    if (S) {
      if (e.type === "connected") se(e.name, `applyConnectionResult: disposing connect that settled after a ${S} deny`);
      return c = () => {
        if (e.type === "connected") T(e);
        R().dropDiscoveryEntry(e.name, e.config).catch(() => {
        });
      }, p = "refused", E(m, { name: e.name, type: "failed", config: r.config, ...jb(S, e.name, e.config) });
    }
    if (!FTt(r, e)) return p = "dropped", m;
    return { ...m, clients: m.clients.map((g) => g.name === e.name ? e : g), tools: ri([...m.tools, ...u], "name"), commands: ri([...m.commands, ...d], "name") };
  }), c?.(), p;
}
function QRn(n, o, e = true) {
  let u = o.getClients();
  return Object.entries(n).filter(([d, s]) => {
    let c = u.find((p) => p.name === d);
    return c !== void 0 && (WLt(c) || e && bXe(c)) && R().areMcpConfigsEqual(c.config, s);
  });
}
function aZr(n) {
  let o = (e) => {
    let u = xt().transientRetryPasses;
    for (let d of n) {
      let s = (u.get(d) ?? 0) + e;
      if (s > 0) u.set(d, s);
      else u.delete(d);
    }
  };
  return o(1), { [Symbol.dispose]: () => o(-1) };
}
async function R6t(n, o, e, u = (s) => hfr(o, s), d) {
  let s = () => QRn(n, o);
  if (s().length === 0) return;
  using c = aZr(Object.keys(n));
  let p = Fr(), { signal: f } = o, m = performance.now(), r = 0;
  for (let [g, v] of C6t.entries()) {
    let w = g === C6t.length - 1;
    if (await X(v, f), d !== void 0 && w) {
      let M = await d + F + r;
      await X(Math.max(0, M - performance.now()), f);
    }
    if (f?.aborted) return;
    if (Fr() !== p) {
      t("[MCP] Retry: identity changed during backoff, stopping (these rows belong to the previous account)");
      return;
    }
    let b = QRn(n, o, w);
    if (b.length === 0) {
      if (s().length > 0) continue;
      t("[MCP] Retry: all remote servers recovered, stopping");
      return;
    }
    t(`[MCP] Retry attempt ${g + 1}: ${b.length} transiently-failed remote server(s)`);
    let y = [];
    for (let M of b) {
      if (!await R().discardMemoizedConnectResult(...M)) continue;
      let [_, k] = M, L = cu(_, k);
      if (L) {
        u({ client: { name: _, type: "failed", config: k, ...jb(L, _, k) }, tools: [], commands: [], attemptEpoch: p });
        continue;
      }
      y.push(M);
    }
    if (y.length === 0 || f?.aborted) continue;
    let O = 0, C = 0, h = performance.now(), P = Math.round(h - m);
    if (await R().getMcpToolsCommandsAndResources((M) => {
      if (!f?.aborted) {
        if (u(M), M.client.type === "connected") O++;
        else if (mrn(M.client)) C++;
      } else if (M.client.type === "connected") R().detachAndCloseConnection(M.client).catch(() => {
      });
    }, Object.fromEntries(y), e), r += performance.now() - h, !f?.aborted) a("tengu_mcp_connect_retry_attempt", { attempt: g + 1, delayMs: v, sincePassStartMs: P, retryable: b.length, dialed: y.length, recovered: O, stillRetryable: C });
    if (s().length === 0) {
      t("[MCP] Retry: all remote servers recovered, stopping");
      return;
    }
  }
  let S = s();
  if (S.length > 0) t(`[MCP] Retry: ${S.length} remote server(s) still failed after all retries: ${S.map(([g]) => g).join(", ")}`);
}
async function A(n, o, e) {
  if (n) {
    Promise.resolve(o()).catch(() => {
    }), t(`[MCP] ${e} running fully async (nonblocking)`);
    return;
  }
  let u = o(), d = Date.now(), s = Kze(), c;
  if (Array.isArray(u)) c = u;
  else {
    let r, S = await Promise.race([u.catch((g) => (l(g), "failed")), new Promise((g) => {
      r = setTimeout((v) => v("deadline"), s, g);
    })]);
    if (clearTimeout(r), S === "deadline") {
      t(`[MCP] ${e} config fetch not ready after ${s}ms — proceeding; background connection continues`);
      return;
    }
    if (S === "failed") {
      t(`[MCP] ${e} batch failed to start — proceeding without waiting on it`);
      return;
    }
    c = S;
  }
  let p = Math.max(0, s - (Date.now() - d));
  if (c.length === 0) return;
  let f = D(e);
  if (!f) return;
  let m = await f.awaitEachWithDeadline(c, p);
  if (m > 0) t(`[MCP] ${e}: ${m}/${c.length} not ready after ${s}ms — proceeding; background connection continues`);
}
function Bls(n, o, e) {
  f_t(), c3n();
  let u = Fr(), d = (async () => {
    let s = await Nde(e);
    if (!rO(u)) return j("list fetch");
    let { allowed: c, blocked: p } = DP(s);
    if (u_t(), p.length > 0) t(`[MCP] claude.ai connectors blocked by enterprise policy after account switch: ${p.join(", ")}`);
    let f = await N(n, o), m = Object.fromEntries([...Object.entries(f), ...n.getClients().filter((r) => r.config.scope !== "claudeai").map((r) => [r.name, r.config])]);
    return I({ claudeaiConfigs: c, regularMcpConfigs: m, state: n, deferConnect: false, storageV5: o, epoch: u, restorablePlugins: f });
  })();
  return { mounted: d.then((s) => s === "superseded" ? s : "mounted"), settled: d.then((s) => s === "superseded" ? [] : Promise.all(s)).then(() => {
  }) };
}
function j(n) {
  return t(`[MCP] claude.ai connector list superseded by an account switch (${n}) — not mounting`), "superseded";
}
async function I(n) {
  if (!rO(n.epoch)) return j("list fetch");
  let o = await U(n);
  if (!rO(n.epoch)) return j("dedup");
  return [...z(n.restorablePlugins ?? {}, o.suppressedPlugins, n.state, n.storageV5), ...W(o, n.state, n.deferConnect, n.storageV5)];
}
async function N(n, o) {
  let e = n.getSuppressedPluginServers();
  if (e.length === 0) return {};
  let { servers: u } = await DT({}, { storageV5: o }), d = {}, s = /* @__PURE__ */ new Set();
  for (let c of e) {
    let p = u[c];
    if (p && p.pluginSource !== void 0) d[c] = p;
    else s.add(c);
  }
  if (s.size > 0) t(`[MCP] Dropping ${s.size} suppressed plugin server(s) whose plugin is no longer installed/enabled: ${[...s].join(", ")}`), n.applyMcpUpdate((c) => ({ ...c, suppressedPluginMcpServers: (c.suppressedPluginMcpServers ?? []).filter((p) => !s.has(p)) }));
  return d;
}
function z(n, o, e, u) {
  let d = new Set(e.getClients().map((f) => f.name)), s = /* @__PURE__ */ new Set(), c = {};
  for (let [f, m] of Object.entries(n)) {
    if (o.has(f)) continue;
    if (s.add(f), !d.has(f)) c[f] = m;
  }
  if (s.size === 0) return [];
  e.applyMcpUpdate((f) => ({ ...f, suppressedPluginMcpServers: (f.suppressedPluginMcpServers ?? []).filter((m) => !s.has(m)) }));
  let p = Object.keys(c);
  if (p.length > 0) t(`[MCP] Restoring ${p.length} plugin server(s) no longer duplicated by claude.ai connectors after account switch: ${p.join(", ")}`);
  return B(c, "plugin-restore", e, false, u);
}
async function U(n) {
  let { claudeaiConfigs: o, regularMcpConfigs: e, state: u } = n, d = /* @__PURE__ */ new Set();
  if (Object.keys(o).length > 0) {
    let c = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set();
    for (let r of Object.values(o)) {
      let S = KF(r);
      if (S) (pft(r) ? p : c).add(S);
    }
    let f = [], m;
    for (let [r, S] of Object.entries(e)) {
      if (!r.startsWith("plugin:")) continue;
      let g = KF(S);
      if (!g) continue;
      if (c.has(g)) d.add(r);
      else if (p.has(g)) {
        if (f.push(r), m ??= ZCs(), !m) d.add(r);
      }
    }
    if (f.length > 0) a("tengu_mcp_plugin_beside_ineligible_connector", { plugin_server_count: f.length, kept: m });
    if (m) t(`[MCP] Lazy dedup: keeping ${f.length} plugin server(s) whose only duplicate claude.ai connectors are ineligible: ${f.join(", ")}`);
    if (d.size > 0) {
      t(`[MCP] Lazy dedup: suppressing ${d.size} plugin server(s) that duplicate claude.ai connectors: ${[...d].join(", ")}`);
      for (let r of u.getClients()) {
        if (!d.has(r.name) || !(wi(r) || r.type === "pending")) continue;
        if (r.type === "connected") ohe(r, void 0), R().clearServerCache(r.name, r.config).catch(() => {
        });
        else R().disposeServerConnectionDetached(r.name, r.config);
      }
      u.applyMcpUpdate((r) => {
        let { clients: S, tools: g, commands: v, resources: w } = r;
        S = S.filter((y) => !d.has(y.name)), g = g.filter((y) => !y.mcpInfo || !d.has(y.mcpInfo.serverName));
        for (let y of d) v = mge(v, y), w = zLt(w, y);
        let b = [...(r.suppressedPluginMcpServers ?? []).filter((y) => !d.has(y)), ...d];
        return { ...r, clients: S, tools: g, commands: v, resources: w, suppressedPluginMcpServers: b };
      });
    }
  }
  let s = Lx(e, (c, p) => !p.startsWith("plugin:"));
  return { ...await m$t(o, s), suppressedPlugins: d };
}
function W({ servers: n, suppressed: o }, e, u, d) {
  return e.applyMcpUpdate((s) => Jsn(s.suppressedClaudeAiConnectors ?? [], o) ? s : { ...s, suppressedClaudeAiConnectors: o }), B(n, "claudeai", e, u, d);
}
function E(n, o) {
  let e = io(o.name);
  return { ...n, clients: n.clients.map((u) => u.name === o.name ? o : u), tools: jB(n.tools, (u) => jc(u, o.name, e)), commands: jB(n.commands, (u) => Wb(u, o.name)), resources: Tk(n.resources, o.name), resourceTemplates: Tk(n.resourceTemplates, o.name) };
}
function T(n) {
  if (Ul()) ohe(n, void 0);
  n.cleanup().catch(() => {
  }), R().clearServerCache(n.name, n.config).catch(() => {
  });
}
export {
  $ls,
  Bls,
  C6t,
  Fls,
  QRn,
  R6t,
  Uls,
  aZr,
  hfr,
  iZr
};
