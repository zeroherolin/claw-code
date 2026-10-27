// permissions/chunk-z95679ve.js — Claude Code 2.1.310 模块 chunk-z95679ve.js
import { Wte } from "../computer-use/ref-1.3wmt.js";
import { yst } from "../git/utf-8.vh7e.js";
import { W2 } from "../chrome/chrome-open-url.r2dv.js";
import { cne } from "../core/conversation-engine.31gx.js";
import { D } from "../shared/chunk-6rnejvk7.js";
import { Cqt, Tqt } from "../vendor/aws-sdk/ca-certs-load.ft7b.js";
function f(r) {
  return r.replace(/^www\./i, "");
}
function $pt(r) {
  if (r.startsWith("[")) {
    let n = r.indexOf("]");
    return n === -1 ? r : r.slice(0, n + 1);
  }
  let e = r.lastIndexOf(":");
  return e === -1 ? r : r.slice(0, e);
}
function _B(r) {
  let e = Cqt(r).replace(/\.+(?=$|:)/, "").toLowerCase(), n = $pt(e), o = e.slice(n.length), t = (Tqt(n) || n).replace(/\.+$/, "");
  return f(t + o);
}
var d = new RegExp(`^${W2}\\(([^)]+)\\)$`);
function kYe(r) {
  let e = /* @__PURE__ */ new Set(), n = [], o = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Map();
  return u(r.alwaysDenyRules, o, t), u(r.alwaysAllowRules, e, t, n, o), { allowed: e, denied: o, allowedRaw: n, sourceOf: t };
}
function UTr(r, e) {
  return r.has(e) || r.has($pt(e));
}
function Upt(r, e) {
  let n = _B(e);
  if (!UTr(r.denied, n)) return;
  return { behavior: "deny", message: `Claude in Chrome is denied on ${e}.`, decisionReason: { type: "rule", rule: { source: r.sourceOf.get(n) ?? r.sourceOf.get($pt(n)) ?? "session", ruleBehavior: "deny", ruleValue: { toolName: W2, ruleContent: e } } } };
}
function u(r, e, n, o, t) {
  for (let [a, l] of Object.entries(r)) for (let c of l ?? []) {
    let s = d.exec(c);
    if (s?.[1]) {
      let i = _B(s[1]);
      if (t && UTr(t, i)) continue;
      if (!e.has(i)) e.add(i), n.set(i, a), o?.push(s[1]);
    }
  }
}
function kBn(r) {
  return ["back", "forward"].includes(r.trim().toLowerCase());
}
var p = /^(?:https?|wss?|ftp|file)\.*(?=[\\?#]|$)/i;
function DHt(r) {
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
    if (p.test(yst(e))) return;
  }
  if (!n.host || n.username || n.password) return;
  return { host: n.host, url: n.href };
}
function CBn(r) {
  let e = new URL(r.url);
  return e.protocol === "http:" && e.port === "" ? `${e.host}:80` : e.host;
}
function TBn(r) {
  let e = DHt(r);
  return e && { ...e, host: CBn(e) };
}
function vxs(r) {
  if (!Array.isArray(r.actions)) return;
  for (let e of r.actions) {
    if (!D(e) || typeof e.name !== "string") continue;
    let n = D(e.input) ? e.input : {};
    if (Wte.has(e.name) && cne(e.name, n)) continue;
    if (e.name === "navigate" && typeof n.url === "string" && (n.url.trim().toLowerCase() === "back" || n.url.trim().toLowerCase() === "forward")) continue;
    if (e.name === "navigate" && typeof n.url === "string" || typeof n.tabId === "number") return { toolName: e.name, input: n };
  }
  return;
}
export {
  $pt,
  CBn,
  DHt,
  TBn,
  UTr,
  Upt,
  _B,
  kBn,
  kYe,
  vxs
};
