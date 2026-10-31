// darwin/shared/policy-blocked.js — Claude Code 2.1.310（darwin）模块 chunk-32xgz7ka.js
import { se } from "../artifacts/cowritten-artifact-html.js";
import { io, jc } from "../mcp/always-allow.js";
import { wi, KCt } from "../plugins/skills-dir.js";
import { $w } from "../shell/invalid-type.js";
import { Tk, ar, Ul, GS, BMs, pin, uu, Io } from "../core/conversation-engine.js";
import { PC } from "../mcp/mcp-discovery-cache.js";
import { fps, Owe, KPn, Uxt, b8t } from "./needs-auth.aacf.js";
import { V1 } from "./chunk-259e511a.js";
import { gBe, Jae, k7 } from "../tools/chunk-69cf9f3c.js";
import { WS } from "../mcp/project-approval.js";
import { HAe } from "./chunk-67236fa7.js";
import { Yi } from "./chunk-62a451b1.js";
function f() {
  return import.meta.require("../mcp/emit-tripwire-event.js").mcpClientModule();
}
function v(n) {
  Yi(n.client).onclose = void 0, f().clearServerCache(n.name, n.config).catch(() => {
  });
}
function x(n, t, i) {
  return { tools: V1(n.tools, (e) => e.name?.startsWith(i)), commands: V1(n.commands, (e) => GS(e, t)), resources: Tk(n.resources, t), resourceTemplates: Tk(n.resourceTemplates, t) };
}
class vlt {
  #e;
  constructor(n) {
    this.#e = n;
  }
  static over(n) {
    return new vlt(HAe(n.getState, n.setState, "mcp"));
  }
  get() {
    return this.#e.get();
  }
  markNeedsAuth(n) {
    this.#e.set((t) => fps(t, n));
  }
  async clearNeedsAuth(n) {
    let t = this.get().clients.find((e) => e.name === n);
    if (t?.type !== "needs-auth") return;
    let i = await f().peekSettledConnection(n, t.config);
    if (i?.type !== "connected") return;
    this.#e.set((e) => ({ ...e, clients: e.clients.map((s) => s === t ? Jae(i, t.config) : s) }));
  }
  adoptServer(n, t, i) {
    let e = "adopted";
    return this.#e.set((s) => {
      if (i?.asked === true) return Owe({ mcp: s }, n, t).mcp;
      let r = s.clients.find((c) => c.name === n);
      if (e = _(r, t) ?? "adopted", r === void 0) return s;
      if (e !== "adopted") return w(s, r, e);
      return Owe({ mcp: s }, n, H(r, t), { appendIfAbsent: false }).mcp;
    }), e;
  }
  markReconnectDiscarded(n, t) {
    this.#e.set((i) => {
      let e = i.clients.find((s) => s.name === n);
      if (e === void 0 || ar(n, e.config) !== ar(n, t)) return i;
      if (Io(n)) return w(i, e, "disabled");
      if (uu(n, e.config) !== null) return w(i, e, "policy-blocked");
      if (e.type !== "connected") return i;
      return { ...i, clients: i.clients.map((s) => s === e ? { name: n, type: "failed", config: e.config, error: "Its connection was closed while signing in again" } : s), ...D(i, n) };
    });
  }
  swapServerTools(n, t, i) {
    let e = false;
    return this.#e.set((s) => {
      let r = b8t(s.clients.find((l) => l.name === n), t, i);
      if (r === void 0) return se(n, "A re-queried tool list was not applied: another server holds the name"), s;
      let c = KPn({ mcp: s }, n, r);
      return e = c.mcp !== s, c.mcp;
    }), e;
  }
  setSuppressedClaudeAiConnectors(n) {
    this.#e.set((t) => pin(t.suppressedClaudeAiConnectors ?? [], n) ? t : { ...t, suppressedClaudeAiConnectors: n });
  }
  setReservedNameRefusals(n) {
    this.#e.set((t) => {
      let i = t.reservedNameRefusals ?? [];
      return i.length === n.length && i.every((s, r) => s.scope === n[r]?.scope && s.name === n[r]?.name) ? t : { ...t, reservedNameRefusals: n };
    });
  }
  addPendingServers(n) {
    this.#e.set((t) => {
      let i = O(t, n);
      if (i.length === 0) return t;
      return { ...t, clients: [...t.clients, ...i] };
    });
  }
  reconcileConfiguredServers(n, t, i) {
    this.#e.set((e) => {
      let { stale: s, ...r } = BMs(e, n, t);
      i(s);
      let c = O(r, n);
      if (c.length === 0 && s.length === 0) {
        if (e.clientsInitialized) return e;
        return { ...e, clientsInitialized: true };
      }
      return { ...e, ...r, clientsInitialized: true, clients: [...r.clients, ...c] };
    });
  }
  applyIdentityBoundary(n, t) {
    let i = [...n, ...t];
    if (i.length === 0) return;
    this.#e.set((e) => {
      let s = i.map((c) => [c, io(c)]), r = (c) => s.some(([l, u]) => jc(c, l, u));
      return { ...e, clients: e.clients.flatMap((c) => t.has(c.name) ? [] : n.has(c.name) ? [{ name: c.name, type: "pending", config: c.config }] : [c]), tools: V1(e.tools, r), commands: V1(e.commands, (c) => i.some((l) => GS(c, l))), resources: Tk(e.resources, i), resourceTemplates: Tk(e.resourceTemplates, i) };
    });
  }
  applyQueuedUpdates(n, t) {
    this.#e.set((i) => {
      let e = i;
      for (let s of n) {
        if (s.epoch !== t.currentEpoch && PC(s.config)) {
          if (s.type === "connected") f().detachAndCloseConnection(s);
          continue;
        }
        let r = e.clients.find((d) => d.name === s.name), c = W(r, s), l = c === "stands" && r !== void 0 ? K(r, s) : s, { tools: u, commands: S, resources: m, resourceTemplates: A, replaceOnly: g, epoch: G, asked: J, superseded: I, ...U } = l, o = U, h = o.type === "disabled" || o.type === "failed", b = h ? u ?? [] : u, T = h ? S ?? [] : S, C = h ? m ?? [] : m, y = h ? A ?? [] : A, M = io(o.name), p = e.clients.findIndex((d) => d.name === o.name), a = p !== -1 ? e.clients[p] : void 0, Q = o.type === "connected" && a?.type === "connected" && a.client === o.client, R = wi(o) && uu(o.name, o.config) === "managed-policy";
        if (o.type !== "disabled" && !Q && Io(o.name) && !(R && a?.type !== "disabled")) {
          if (R) t.onDoorDenied(o.name);
          if (o.type === "connected") v(o);
          if (t.onOrphanedDisable(o.name), a && a.type !== "disabled" && (a.type !== "connected" || !wi(o))) e = { ...e, clients: e.clients.map((d) => d.name === o.name ? { name: o.name, type: "disabled", config: c === "elsewhere" ? d.config : o.config } : d), ...x(e, o.name, M) };
          continue;
        }
        if (c === "elsewhere" && a !== void 0) {
          if (o.type !== "disabled") {
            if (o.type === "connected") v(o);
            se(o.name, `A late ${o.type} result was dropped: another server holds the name`);
            continue;
          }
          if (a.type === "connected") v(a);
          o = { name: o.name, type: "disabled", config: a.config };
        }
        let k = wi(o) ? uu(o.name, o.config) : null;
        if (k) {
          t.onDoorDenied(o.name);
          let d = o.config;
          if (o.type === "connected") Yi(o.client).onclose = void 0;
          else if (a?.type === "connected") Yi(a.client).onclose = void 0, d = a.config;
          if (f().clearServerCache(o.name, d).catch(() => {
          }), p === -1) continue;
          e = { ...e, clients: e.clients.map((P) => P.name === o.name ? { name: o.name, type: "failed", config: o.config, ...WS(k, o.name, o.config) } : P), ...x(e, o.name, M) };
          continue;
        }
        if (g && p !== -1 && (e.clients[p]?.type === "needs-auth" || e.clients[p]?.type === "disabled")) {
          if (o.type === "connected") Yi(o.client).onclose = void 0, f().clearServerCache(o.name, o.config).catch(() => {
          });
          continue;
        }
        if (p === -1 && (g || c === "nowhere" && !I)) {
          if (o.type === "connected") Yi(o.client).onclose = void 0, f().clearServerCache(o.name, o.config).catch(() => {
          });
          if (!g) t.onOrphanedDisable(o.name), se(o.name, `A late ${o.type} result was dropped: no row holds the name`);
          continue;
        }
        if (g && Ul() && p !== -1 && ar(o.name, e.clients[p].config) !== ar(o.name, o.config)) {
          if (o.type === "connected") f().detachAndCloseConnection(o);
          continue;
        }
        if (p !== -1 && !KCt(e.clients[p], o)) {
          if (c === "asked") e = L(e, o);
          continue;
        }
        let j = p === -1 ? [...e.clients, o] : e.clients.map((d) => d.name === o.name ? o : d), B = b === void 0 ? e.tools : [...V1(e.tools, (d) => d.name?.startsWith(M)), ...b], E = T === void 0 ? e.commands : [...V1(e.commands, (d) => GS(d, o.name)), ...T], F = C === void 0 ? e.resources : C.length > 0 ? { ...e.resources, [o.name]: C } : Tk(e.resources, o.name), z = y === void 0 ? e.resourceTemplates : y.length > 0 ? { ...e.resourceTemplates, [o.name]: y } : Tk(e.resourceTemplates, o.name);
        e = { ...e, clients: j, tools: B, commands: E, resources: F, resourceTemplates: z };
      }
      return e;
    });
  }
}
function O(n, t) {
  let i = new Set(n.clients.map((e) => e.name));
  return Object.entries(t).filter(([e]) => !i.has(e)).map(([e, s]) => ({ name: e, type: Io(e) ? "disabled" : "pending", config: s }));
}
function Wmr(n, t) {
  return n.mcpInfo?.serverName === void 0 ? GS(n, t) : n.mcpInfo.serverName === t;
}
function D(n, t) {
  let i = io(t);
  return { tools: V1(n.tools, (e) => jc(e, t, i)), commands: V1(n.commands, (e) => Wmr(e, t)), resources: Tk(n.resources, t), resourceTemplates: Tk(n.resourceTemplates, t) };
}
function W(n, t) {
  if (t.asked === true) return "asked";
  if (n === void 0) return "nowhere";
  return ar(t.name, n.config) === ar(t.name, t.config) ? "stands" : "elsewhere";
}
function K(n, t) {
  let i = { name: t.name, config: n.config };
  return { ...Uxt(t, n.config), ...t.tools !== void 0 && { tools: k7(i, t.tools) }, ...t.commands !== void 0 && { commands: gBe(i, t.commands) } };
}
function L(n, t) {
  let i = n.clients.find((m) => m.name === t.name);
  if (i === void 0 || ar(t.name, i.config) !== ar(t.name, t.config)) return n;
  let e = Uxt(i, t.config);
  if (e === i) return n;
  let s = { name: t.name, config: t.config }, r = io(t.name), [c, l] = $w(n.tools, (m) => jc(m, t.name, r)), [u, S] = $w(n.commands, (m) => Wmr(m, t.name));
  return { ...n, clients: n.clients.map((m) => m === i ? e : m), tools: [...l, ...k7(s, c)], commands: [...S, ...gBe(s, u)] };
}
function _(n, t) {
  let { name: i } = t.client;
  if (n === void 0) return "no-row";
  if (ar(i, n.config) !== ar(i, t.client.config)) return "another-server";
  if (Io(i)) return "disabled";
  if (uu(i, n.config) !== null) return "policy-blocked";
  return;
}
function w(n, t, i) {
  if (i !== "disabled" && i !== "policy-blocked") return n;
  let { name: e, config: s } = t, r = i === "policy-blocked" ? uu(e, s) : null;
  if (r === null && t.type === "disabled") return n;
  let c = r === null ? { name: e, type: "disabled", config: s } : { name: e, type: "failed", config: s, ...WS(r, e, s) };
  return { ...n, clients: n.clients.map((l) => l === t ? c : l), ...D(n, e) };
}
function H(n, t) {
  let i = { name: n.name, config: n.config };
  return { ...t, client: Uxt(t.client, n.config), tools: k7(i, t.tools), commands: gBe(i, t.commands) };
}
export {
  Wmr,
  vlt
};
