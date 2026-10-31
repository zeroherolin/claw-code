// darwin/mcp/mcp-list-changed.js — Claude Code 2.1.310（darwin）模块 chunk-awhxce29.js
import { S } from "../agents/third-party.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { X, zI } from "../shared/chunk-57ff8cc1.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { se } from "../artifacts/cowritten-artifact-html.js";
import { io, jc } from "./always-allow.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { cM } from "../settings/global-config-and-gates.js";
import { xt } from "./toolbox-mcp-server-id.js";
import { sUs } from "../vendor/mcp-sdk/chunk-384e0b2c.js";
import { oV } from "./declared-tools-dropped-at-compaction.js";
import { Tk, ar, Ul, qft, nLt, GS, F9, Sje, V0r, uu, qle, f3, Dgt, Io, _s } from "../core/conversation-engine.js";
import { gve, $r, iO, PC, _pt, N1n, F1n } from "./mcp-discovery-cache.js";
import { B5t, bds } from "./mcp-plugin-beside-ineligible-connector.js";
import { gae } from "../shared/kept-previous.js";
import { bOe, hB } from "../tools/tool-result.12b0.js";
import { Owe, mps, KPn, Uxt, b8t } from "../shared/needs-auth.aacf.js";
import { V1 } from "../shared/chunk-259e511a.js";
import { TRs } from "../vendor/marked/chunk-ebdd49c0.js";
import { pve, fve } from "../shared/chunk-32261137.js";
import { NA } from "../shared/chunk-1c8cc282.js";
import { Jae } from "../tools/chunk-69cf9f3c.js";
import { WS, tBn } from "./project-approval.js";
import { Ace, Wet, Yre, H8s, Cbt, G7n, eWo, D8s } from "./mcp-answer-stream-ended.js";
function G() {
  return import.meta.require("./emit-tripwire-event.js").mcpClientModule();
}
function DZr(n, e, o, C) {
  if (Object.hasOwn(e, n)) return e[n];
  if (o && !qle.has(o.scope)) return o;
  return C ? C(n) : o ?? null;
}
function pds(n, e) {
  if (!n.clients.some((o) => o.name === e)) return n;
  return { ...n, clients: n.clients.map((o) => o.name === e ? { name: e, type: "disabled", config: o.config } : o), tools: F9(n.tools, e) };
}
function Mpr(n, e) {
  let o = io(e);
  return { tools: n.tools.filter((C) => jc(C, e, o)), commands: n.commands.filter((C) => GS(C, e)), resources: n.resources[e], resourceTemplates: n.resourceTemplates[e] };
}
function b4e(n, e) {
  let o = e.type !== "failed" ? uu(n, e.config) : void 0;
  if (o === "managed-policy") return N(n, e.config, o);
  if (Io(n) && !tBn(e)) return { name: n, type: "disabled", config: e.config };
  return o ? N(n, e.config, o) : void 0;
}
function N(n, e, o) {
  return { name: n, type: "failed", config: e, ...WS(o, n, e) };
}
function oe(n, e) {
  return e.asked || n === void 0 || Jae(e.client, n.config) === e.client ? e : NA(n.config, e);
}
function re(n, e, o) {
  let { incoming: C, result: R, outcome: A } = o;
  if (A === "refused") {
    let h = C.asked ? R.client : Uxt(R.client, e.config);
    return h === R.client ? R : { ...R, client: h };
  }
  if (Jae(R.client, e.config) === R.client) return R;
  let M = oe(e, C);
  if (M.client.type === "disabled") return M;
  let w = b4e(n, M.client);
  return w ? { ...M, client: w, tools: [], commands: [] } : M;
}
function gwe(n, e, o) {
  let { getAppState: C, setAppState: R, getDynamicMcpState: A, setDynamicMcpState: M } = n, w = () => {
    if (o.client.type === "connected") G().detachAndCloseConnection(o.client).catch(() => {
    });
  }, h = C().mcp.clients.find((f) => f.name === e), i = A().clients.find((f) => f.name === e);
  if (!h && !i) return w(), "dropped";
  let P = ar(e, o.client.config), b = (f) => f !== void 0 && ar(e, f.config) !== P;
  if (b(h) || b(i)) return t(`[MCP] ${e}: dropping a settlement whose slot config changed mid-flight`), w(), "dropped";
  if (_pt(o.client.config, o.attemptEpoch)) return t(`[MCP] ${e}: settlement superseded by an account switch — closed, not installed (the identity boundary owns the row)`), w(), "superseded";
  let T = oe(h ?? i, o), l = T, _ = "applied";
  if (T.client.type !== "disabled") {
    let f = b4e(e, T.client);
    if (f) {
      if (w(), f.type === "failed") G().dropDiscoveryEntry(e, T.client.config).catch(() => {
      });
      l = { client: f, tools: [], commands: [], resources: [], attemptEpoch: o.attemptEpoch }, _ = "refused";
    }
  }
  if (R((f) => {
    let E = Owe(f, e, l, { appendIfAbsent: l.client.config.type !== "sdk" }), U = !!l.resources && l.resources.length > 0, L = !!l.resourceTemplates && l.resourceTemplates.length > 0;
    return U && L ? E : { ...E, mcp: { ...E.mcp, resources: U ? E.mcp.resources : Tk(E.mcp.resources, e), resourceTemplates: L ? E.mcp.resourceTemplates : Tk(E.mcp.resourceTemplates, e) } };
  }), !i) return _;
  let c = io(e), y = A(), H = h === void 0 ? l : re(e, i, { incoming: o, result: l, outcome: _ });
  return M({ ...y, clients: y.clients.map((f) => f.name === e ? H.client : f), tools: [...y.tools.filter((f) => !jc(f, e, c)), ...H.tools] }), _;
}
function hxn(n) {
  if (!Ul()) return;
  let { getAppState: e, setAppState: o, getDynamicMcpState: C, setDynamicMcpState: R, storageV5: A, credentials: M, force: w = false, spareUnchangedFrom: h } = n;
  bOe(A);
  let i = G(), P = xt();
  if (!i.mcpIdentityChangedSinceLastCheck() && !w) return P.headlessConnectorMountInFlight;
  let b = !w || !qft(gve()), T = C(), l = [...e().mcp.clients, ...T.clients], _ = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set();
  if (h) {
    for (let s of l) H.add(s.name);
    for (let s of l) if (!h.has(s) || s.type === "pending") H.delete(s.name);
  }
  for (let s of l) {
    if (!PC(s.config) || H.has(s.name)) {
      y.add(ar(s.name, s.config));
      continue;
    }
    if (i.disposeServerConnectionDetached(s.name, s.config), s.config.scope === "claudeai") {
      c.add(s.name);
      continue;
    }
    if (s.type !== "disabled") _.add(s.name);
  }
  i.evictAllMcpMemosOnIdentityChange(y, F1n(l)), oV().clear();
  let f = /* @__PURE__ */ Object.create(null), E = /* @__PURE__ */ new Set(), U = n.getHostOwnedConfigs?.() ?? T.configs;
  for (let s of l) {
    if (!_.has(s.name) || !b) continue;
    let v = f[s.name] ?? DZr(s.name, U, s.config, f3);
    if (!v) {
      E.add(s.name);
      continue;
    }
    let k = f[s.name] ??= v;
    if (k !== s.config && ar(s.name, k) !== ar(s.name, s.config)) t(`[MCP] ${s.name}: appState and dynamic-store rows disagree on config at the identity boundary — converging both under the ${Object.hasOwn(U, s.name) ? "host's" : "appState row's"} config and re-dialing it`, { level: "warn" });
  }
  let L = /* @__PURE__ */ new Map(), z = Dgt() && b, j = /* @__PURE__ */ Object.create(null);
  for (let [s, v] of Object.entries(f)) {
    if (z && V0r(v)) {
      j[s] = v, delete f[s];
      continue;
    }
    let k = uu(s, v);
    if (k) L.set(s, N(s, v, k)), delete f[s];
  }
  let W = [..._, ...c];
  if (W.length > 0) {
    let s = W.map((r) => [r, io(r)]), v = (r) => s.some(([x, I]) => jc(r, x, I)), k = (r) => c.has(r.name) ? [] : _.has(r.name) ? [!b || E.has(r.name) ? N1n(r.name, r.config) : L.get(r.name) ?? { name: r.name, type: "pending", config: f[r.name] ?? j[r.name] ?? r.config }] : [r];
    o((r) => ({ ...r, mcp: { ...r.mcp, clients: r.mcp.clients.flatMap(k), tools: V1(r.mcp.tools, v), commands: V1(r.mcp.commands, (x) => W.some((I) => GS(x, I))), resources: Tk(r.mcp.resources, W), resourceTemplates: Tk(r.mcp.resourceTemplates, W) } })), R({ ...T, clients: T.clients.flatMap(k), tools: T.tools.filter((r) => !v(r)) });
  }
  let u, D;
  if (z) {
    let v = bds({ getClients: () => e().mcp.clients, getSuppressedPluginServers: () => e().mcp.suppressedPluginMcpServers ?? [], applyMcpUpdate: (r) => {
      let x = /* @__PURE__ */ new Set();
      if (o((B) => {
        let Z = r(B.mcp), ee = new Set(Z.clients.map((Y) => Y.name));
        return x = new Set(B.mcp.clients.filter((Y) => !ee.has(Y.name)).map((Y) => Y.name)), { ...B, mcp: Z };
      }), x.size === 0) return;
      let I = C();
      if (!I.clients.some((B) => x.has(B.name))) return;
      let F = [...x].map((B) => [B, io(B)]);
      R({ ...I, clients: I.clients.filter((B) => !x.has(B.name)), tools: I.tools.filter((B) => !F.some(([Z, ee]) => jc(B, Z, ee))) });
    } }, A, M);
    v.settled.catch(() => {
    }), D = v.mounted.catch(() => "mounted");
    let k = v.mounted.then(() => {
    }, (r) => t(`MCP connector refetch after account switch failed: ${d(r)}`, { level: "warn" })).finally(() => {
      if (P.headlessConnectorMountInFlight === k) P.headlessConnectorMountInFlight = void 0;
    });
    P.headlessConnectorMountInFlight = u = k;
  }
  if (_.size === 0 || !b) return u;
  let K = (s) => {
    gwe(n, s.client.name, s);
  }, Q = { getClients: () => [...e().mcp.clients, ...C().clients], getSuppressedPluginServers: () => e().mcp.suppressedPluginMcpServers ?? [], applyMcpUpdate: (s) => o((v) => ({ ...v, mcp: s(v.mcp) })) }, J = (s) => {
    i.getMcpToolsCommandsAndResources(K, s, A, M).catch((v) => t(`MCP re-dial after account switch failed: ${d(v)}`, { level: "warn" })).finally(() => {
      B5t(s, Q, A, K).catch((v) => t(`MCP re-dial retry after account switch failed: ${d(v)}`, { level: "warn" }));
    });
  };
  if (J(f), Object.keys(j).length === 0 || !D) return u;
  let V = $r(), O = D.then((s) => {
    if (s === "superseded" || !iO(V)) return;
    let v = /* @__PURE__ */ Object.create(null);
    for (let [k, r] of Object.entries(j)) {
      let x = uu(k, r);
      if (x) K({ client: N(k, r, x), tools: [], commands: [], attemptEpoch: V });
      else v[k] = r;
    }
    if (Object.keys(v).length > 0) J(v);
  }).catch((s) => t(`MCP re-dial of held claude.ai proxy entries after account switch failed: ${d(s)}`, { level: "warn" })), q = Promise.all([u, O]).then(() => {
  }).finally(() => {
    if (P.headlessConnectorMountInFlight === q) P.headlessConnectorMountInFlight = void 0;
  });
  return P.headlessConnectorMountInFlight = q, q;
}
function LZr(n, e, o, C) {
  let R = o?.type === "connected" && o.client === n.client, A = o !== void 0 && o.type !== "disabled" && ar(n.name, o.config) === ar(n.name, e);
  return !R && (!C || !A);
}
var ie = 5, ae = 1e3;
function fds(n) {
  let { getAppState: e, getDynamicMcpState: o, now: C = Date.now } = n, R = /* @__PURE__ */ new WeakSet(), A = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), w = (h, i, P) => {
    let b = i > 1 ? Cbt(i - 1) - P : 0, T = [...e().mcp.clients, ...o().clients].some((l) => l.type === "connected" && l.client === h.client);
    if (b <= 0 || !T || n.isControlReconnectInFlight(h.name)) return 0;
    try {
      n.onHeldOff?.(i, b);
    } catch (l) {
      t(`MCP reconnect hold-off observer failed for ${h.name}: ${d(l)}`, { level: "warn" });
    }
    return se(h.name, `${h.config.type} transport closed again soon after it connected: reconnecting in ${b}ms`), b;
  };
  return (h) => {
    for (let i of h) {
      if (i.type === "connected") M.set(i.client, i);
      if (i.type !== "connected" || R.has(i.client) || !le(i.config)) continue;
      R.add(i.client);
      let P = C(), b = (T) => {
        if (_s() || n.isRunEnding()) return;
        i.cleanup().catch(() => {
        });
        let l = Math.max(0, C() - P), _ = l < H8s ? (A.get(i.client) ?? 0) + 1 : 0;
        (async () => {
          let c = w(i, _, l), y = n.sleep ?? ce;
          if (c > 0) await y(c);
          let H = () => M.get(i.client) ?? i;
          for (let f = 0; c > 0 && f < ie && await G().hasUnsettledDial(H().name, H().config); f++) await y(ae);
          await de(n, H(), T, _, c > 0, (f, E) => A.set(f.client, E));
        })().catch((c) => t(`MCP reconnect after close failed for ${i.name}: ${d(c)}`, { level: "warn" }));
      };
      if (sUs(i, () => b(false)), pve(i)) setImmediate(b, true);
    }
  };
}
function ce(n) {
  return X(n, void 0, { unref: true });
}
function le(n) {
  return n.type !== void 0 && n.type !== "stdio" && n.type !== "sdk";
}
async function de(n, e, o, C, R, A) {
  let { getAppState: M, getDynamicMcpState: w, storageV5: h, credentials: i, isControlReconnectInFlight: P, isRunEnding: b, onReconnected: T, sleep: l = ce, random: _ = Math.random } = n, { name: c, config: y } = e, H = $r(), f = () => _s() || b() || $r() !== H && PC(y), E = () => M().mcp.clients.find((u) => u.name === c) ?? w().clients.find((u) => u.name === c), U = e, L = () => E() === U, z = (u) => {
    gwe(n, c, u);
  }, j = G(), W = Yre + G7n;
  for (let u = 1; u <= W; u++) {
    let D = u - Yre;
    if (u > 1) await l(D > 0 ? zI({ baseMs: eWo, capMs: D8s, floorMs: eWo / 2, attempt: D - 1, random: _ }) : Cbt(u - 1));
    if (f() || !L()) return;
    let K = $r();
    if (D > 0) {
      let F = { name: c, type: "pending", config: y };
      if (b4e(c, F)) {
        z({ client: F, tools: [], commands: [], attemptEpoch: K });
        return;
      }
      if (await j.hasUnsettledDial(c, y)) {
        if (u < W) {
          se(c, `Background reconnect attempt ${D}/${G7n} skipped: another reconnect to this server is in progress; will try again at the next attempt`);
          continue;
        }
        if (!f() && L() && !P(c)) se(c, `Reconnect gave up after ${u} attempts: another reconnect to this server is still in progress; leaving it to finish`), m("mcp_slow_reconnect", "gave_up", { attempts: u, found_closed: o });
        return;
      }
      if (f() || !L()) return;
    } else {
      let F = { name: c, type: "pending", config: y, reconnectAttempt: u, maxReconnectAttempts: Yre };
      z({ client: F, ...Mpr(M().mcp, c), attemptEpoch: K }), U = F;
    }
    if (!L() || P(c)) return;
    se(c, u === 1 ? `${y.type} transport ${o ? "had already closed when wired" : "closed"} — reconnecting (attempt 1/${Yre})` : D > 0 ? `Background reconnect attempt ${D}/${G7n}` : `Reconnect attempt ${u}/${Yre}`);
    let Q = R && u === 1 ? await j.peekSettledConnection(c, y) : void 0, J = Q?.type === "connected" && !pve(Q) ? Jae(Q, y) : void 0, V = { ...J !== void 0 ? { client: J, ...Mpr(M().mcp, c) } : await j.reconnectMcpServerImpl(c, y, h, i, { keepConnectionInUse: true }).catch((F) => ({ client: { name: c, type: "failed", config: y, error: d(F) }, tools: [], commands: [] })), attemptEpoch: K }, O = V.client.type === "connected" ? V.client : void 0, q = O !== void 0 && fve(await j.peekSettledConnection(c, y), O), s = () => {
      if (O && LZr(O, y, E(), q && !b())) j.detachAndCloseConnection(O).catch(() => {
      });
    };
    if (f() || !L() || P(c)) {
      s();
      return;
    }
    let v = V.keptConnectionInUse === true && O?.toolsListError !== void 0 && b4e(c, O) === void 0;
    if (O && q && !v) {
      if (A(O, C + u - 1), z(V), E() === O) {
        if (O === J) gae(O, (F, B) => {
          ne(n, F, B, O.config);
        }, h).catch((F) => t(`MCP tools refresh over a kept connection failed for ${c}: ${d(F)}`, { level: "warn" }));
        se(c, `Reconnected (attempt ${u})`), g(D > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", { attempts: u, found_closed: o, young_closes: C }), T(O);
      }
      return;
    }
    s();
    let k = O && { name: c, type: "failed", config: y, error: v ? "Its tools could not be listed" : "Connection closed again while reconnecting" }, r = k ?? V.client, x = k ? { ...k, errorCode: "ConnectionClosed" } : r, I = nLt(x);
    if (u === Yre || D > 0 && (!I || u === W)) {
      if (se(c, D <= 0 && I ? `Still failing after ${u} attempts` : `Reconnect gave up after ${u} attempts: ${r.type}`), z({ client: r, tools: r.type === "needs-auth" ? hB(c, y) : [], commands: [], attemptEpoch: K }), E() !== r) return;
      if (r.type === "needs-auth") {
        p(D > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", "needs_auth", { attempts: u, found_closed: o, young_closes: C });
        return;
      }
      if (D > 0) {
        m("mcp_slow_reconnect", I ? "gave_up" : "not_retryable", { attempts: u, found_closed: o });
        return;
      }
      if (m("mcp_auto_reconnect", "exhausted", { attempts: u, found_closed: o, young_closes: C, goes_slow: I }), !I) return;
      U = r, se(c, `Reconnect attempts spent; retrying in the background, up to ${G7n} more times`);
      continue;
    }
    se(c, D > 0 ? `Background reconnect attempt ${D} did not connect (${r.type})` : `Reconnect attempt ${u} did not connect (${r.type}); next in ${Cbt(u)}ms`);
  }
}
var te = /* @__PURE__ */ new WeakMap();
function mds(n) {
  return te.get(n);
}
function ne(n, e, o, C) {
  let { setAppState: R, getDynamicMcpState: A, setDynamicMcpState: M } = n, w = false, h = false, i;
  R((l) => {
    let _ = l.mcp.clients.find((H) => H.name === e), c = b8t(_, o, C);
    if (c === void 0) return h = true, l;
    let y = KPn(l, e, c);
    return w = y !== l, i = w && _ !== void 0 ? { row: _, tools: c } : void 0, y;
  });
  let P = A(), b = P.clients.find((l) => l.name === e), T = b8t(b, o, C);
  if (T === void 0) h = true;
  else {
    let l = mps(P, e, T);
    if (l !== P) M(l), w = true;
  }
  if (i !== void 0) if (b?.type === "pending") te.set(i.row, i.tools);
  else te.delete(i.row);
  if (h) se(e, "A re-queried tool list was not applied: another server holds the name");
  return w;
}
function gds(n) {
  return (e, o, C) => ne(n, e, o, C);
}
function hds(n) {
  let { getAppState: e, getDynamicMcpState: o } = n.stores, C = /* @__PURE__ */ new WeakSet(), R = /* @__PURE__ */ new WeakMap();
  return (A) => {
    for (let M of A) {
      if (M.type === "connected") R.set(M.client, M);
      if (M.type !== "connected" || C.has(M.client)) continue;
      if (C.add(M.client), !M.capabilities?.tools?.listChanged) continue;
      let w = M.name;
      G().onMcpToolListChanged(M, async (h) => {
        se(w, h === Ace ? "Synthesized tools refetch after listen-stream reopen (no notification received)" : h === Wet ? "Refreshing tools for a tools/list_changed notification received before this handler was registered" : "Received tools/list_changed notification, refreshing tools");
        let i = e().mcp.clients.find((c) => c.name === w) ?? o().clients.find((c) => c.name === w), P = R.get(M.client) ?? M, b = i !== void 0 && ar(w, i.config) === ar(w, P.config) ? Jae(P, i.config) : P;
        R.set(M.client, b);
        let T = await gae(b, (c, y) => {
          ne(n.stores, c, y, b.config);
        }, n.storageV5);
        if (T.status === "kept-previous") {
          se(w, "tools/list failed after list_changed — keeping previous tool set");
          return;
        }
        let l = T.newTools.length, _ = (c) => a("tengu_mcp_list_changed", { mcpServerKeyHash: cM(w), type: S("tools"), cause: Sje(h), previousCount: c, newCount: l, ...TRs(M) });
        if (T.previousToolsPromise) T.previousToolsPromise.then((c) => _(c.length), () => _());
        else _();
      });
    }
  };
}
export {
  DZr,
  LZr,
  Mpr,
  b4e,
  fds,
  gds,
  gwe,
  hds,
  hxn,
  mds,
  pds
};
