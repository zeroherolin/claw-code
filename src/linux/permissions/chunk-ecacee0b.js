// linux/permissions/chunk-ecacee0b.js — Claude Code 2.1.310（linux）模块 chunk-9c9qtnk1.js
import { Hte } from "../computer-use/ref-1.js";
import { cst } from "../git/utf-8.js";
import { OG } from "../chrome/chrome-open-url.js";
import { tne } from "../core/conversation-engine.js";
import { H } from "../shared/chunk-7027e6d5.js";
import { r4t, o4t } from "../fs/ca-certs-load.js";
function f(r) {
  return r.replace(/^www\./i, "");
}
function Oft(r) {
  if (r.startsWith("[")) {
    let n = r.indexOf("]");
    return n === -1 ? r : r.slice(0, n + 1);
  }
  let e = r.lastIndexOf(":");
  return e === -1 ? r : r.slice(0, e);
}
function f1(r) {
  let e = r4t(r).replace(/\.+(?=$|:)/, "").toLowerCase(), n = Oft(e), o = e.slice(n.length), t = (o4t(n) || n).replace(/\.+$/, "");
  return f(t + o);
}
var d = new RegExp(`^${OG}\\(([^)]+)\\)$`);
function h9e(r) {
  let e = /* @__PURE__ */ new Set(), n = [], o = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Map();
  return u(r.alwaysDenyRules, o, t), u(r.alwaysAllowRules, e, t, n, o), { allowed: e, denied: o, allowedRaw: n, sourceOf: t };
}
function SAr(r, e) {
  return r.has(e) || r.has(Oft(e));
}
function Mft(r, e) {
  let n = f1(e);
  if (!SAr(r.denied, n)) return;
  return { behavior: "deny", message: `Claude in Chrome is denied on ${e}.`, decisionReason: { type: "rule", rule: { source: r.sourceOf.get(n) ?? r.sourceOf.get(Oft(n)) ?? "session", ruleBehavior: "deny", ruleValue: { toolName: OG, ruleContent: e } } } };
}
function u(r, e, n, o, t) {
  for (let [a, l] of Object.entries(r)) for (let c of l ?? []) {
    let s = d.exec(c);
    if (s?.[1]) {
      let i = f1(s[1]);
      if (t && SAr(t, i)) continue;
      if (!e.has(i)) e.add(i), n.set(i, a), o?.push(s[1]);
    }
  }
}
function s1n(r) {
  return ["back", "forward"].includes(r.trim().toLowerCase());
}
var p = /^(?:https?|wss?|ftp|file)\.*(?=[\\?#]|$)/i;
function EHt(r) {
  let e = r.replace(/[\t\n\r]/g, "").replace(/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, ""), n;
  try {
    if (n = new URL(e), n.protocol !== "http:" && n.protocol !== "https:") {
      if (!/^(localhost|[a-z0-9-]+\.[a-z0-9.-]+):\d+(?=$|[/?#])/i.test(e)) return;
      n = void 0;
    }
  } catch {
  }
  if (!n) {
    if (/^[^/\\?#]*:(?=$|[/\\?#])/.test(e)) return;
    try {
      n = new URL(`https://${e}`);
    } catch {
      return;
    }
    if (p.test(cst(e))) return;
  }
  if (!n.host || n.username || n.password) return;
  return { host: n.host, url: n.href };
}
function i1n(r) {
  let e = new URL(r.url);
  return e.protocol === "http:" && e.port === "" ? `${e.host}:80` : e.host;
}
function a1n(r) {
  let e = EHt(r);
  return e && { ...e, host: i1n(e) };
}
function FRs(r) {
  if (!Array.isArray(r.actions)) return;
  for (let e of r.actions) {
    if (!H(e) || typeof e.name !== "string") continue;
    let n = H(e.input) ? e.input : {};
    if (Hte.has(e.name) && tne(e.name, n)) continue;
    if (e.name === "navigate" && typeof n.url === "string" && (n.url.trim().toLowerCase() === "back" || n.url.trim().toLowerCase() === "forward")) continue;
    if (e.name === "navigate" && typeof n.url === "string" || typeof n.tabId === "number") return { toolName: e.name, input: n };
  }
  return;
}
export {
  EHt,
  FRs,
  Mft,
  Oft,
  SAr,
  a1n,
  f1,
  h9e,
  i1n,
  s1n
};
