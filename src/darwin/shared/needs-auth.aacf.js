// darwin/shared/needs-auth.aacf.js — Claude Code 2.1.310（darwin）模块 chunk-m06j3npz.js
import { wn } from "../context/not-admin-owned.js";
import { io, jc } from "../mcp/always-allow.js";
import { wi } from "../plugins/skills-dir.js";
import { ar, GS } from "../core/conversation-engine.js";
import { k7 } from "../tools/chunk-69cf9f3c.js";
function fps(e, t) {
  let n = e.clients.findIndex((o) => o.name === t);
  if (n === -1) return e;
  let i = e.clients[n];
  if (!i || !wi(i) && i.type !== "needs-auth") return e;
  let s = [...e.clients];
  return s[n] = i.type === "needs-auth" ? { ...i } : { name: t, type: "needs-auth", config: i.config }, { ...e, clients: s };
}
function Owe(e, t, n, i) {
  let s = e.mcp.clients.some((l) => l.name === t);
  if (!s && i?.appendIfAbsent === false) return e;
  let o = io(t);
  return { ...e, mcp: { ...e.mcp, clients: s ? e.mcp.clients.map((l) => l.name === t ? n.client : l) : [...e.mcp.clients, n.client], tools: [...e.mcp.tools.filter((l) => !jc(l, t, o)), ...n.tools], commands: [...e.mcp.commands.filter((l) => !GS(l, t)), ...n.commands], resources: n.resources ? { ...e.mcp.resources, [t]: n.resources } : e.mcp.resources, resourceTemplates: n.resourceTemplates ? { ...e.mcp.resourceTemplates, [t]: n.resourceTemplates } : e.mcp.resourceTemplates } };
}
function mps(e, t, n) {
  if (!e.clients.some((s) => s.name === t && s.type === "connected")) return e;
  let i = io(t);
  return { ...e, tools: [...e.tools.filter((s) => !jc(s, t, i)), ...n] };
}
function KPn(e, t, n) {
  if (!e.mcp.clients.some((s) => s.name === t && s.type === "connected")) return e;
  let i = io(t);
  return { ...e, mcp: { ...e.mcp, tools: [...e.mcp.tools.filter((s) => !jc(s, t, i)), ...n] } };
}
function gps(e, t, n) {
  let i = new Set(e.clients), s = new Map(t.clients.map((c) => [c.name, c])), o = n;
  for (let c of n.clients) {
    if (!i.has(c)) continue;
    let p = s.get(c.name), a = io(c.name), m = (r) => jc(r, c.name, a);
    if (p === void 0) {
      o = { ...o, clients: o.clients.filter((r) => r !== c), tools: o.tools.filter((r) => !m(r)) };
      continue;
    }
    if (p !== c) o = { ...o, clients: o.clients.map((r) => r === c ? p : r) };
    let S = t.tools.filter(m), d = o.tools.filter(m);
    if (S.length === d.length && S.every((r, T) => r === d[T])) continue;
    o = { ...o, tools: [...o.tools.filter((r) => !m(r)), ...S] };
  }
  let l = new Set(e.clients.map((c) => c.name)), u = new Set(n.clients.map((c) => c.name)), f = t.clients.filter((c) => !l.has(c.name) && !u.has(c.name));
  if (f.length > 0) {
    let c = f.map((p) => [p.name, io(p.name)]);
    o = { ...o, clients: [...o.clients, ...f], tools: [...o.tools, ...t.tools.filter((p) => c.some(([a, m]) => jc(p, a, m)))] };
  }
  return o;
}
function Uxt(e, t) {
  return wn(e.config, t) ? e : { ...e, config: t };
}
function b8t(e, t, n) {
  if (e === void 0) return t;
  return ar(e.name, e.config) !== ar(e.name, n) ? void 0 : k7({ name: e.name, config: e.config }, t);
}
export {
  KPn,
  Owe,
  Uxt,
  b8t,
  fps,
  gps,
  mps
};
