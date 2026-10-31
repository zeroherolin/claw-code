// darwin/agents/tool-result.3a7e.js — Claude Code 2.1.310（darwin）模块 chunk-yztyg7xg.js
import { De } from "../telemetry/chunk-1bb3c64e.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { GRr, kWe, Oe, MHr, KWe, Bt } from "../core/conversation-engine.js";
import { Vt } from "../shared/chunk-3b9c376b.js";
import { F, sp, X_ } from "../context/not-admin-owned.js";
import { o, M, C, yt, Fe, T } from "../vendor/zod/string-format.js";
var JPt = f(() => yt({ type: T("text"), text: o().min(1) }));
var fso = (t) => t.kind === "plugin" && "name" in t ? t.name : void 0;
function mso(t, e) {
  let { message: n } = t, r = n.content.flatMap((s) => {
    let u = JPt().safeParse(s);
    return u.success ? [u.data.text] : [];
  }), p = n.content.find((s) => s.type !== "text");
  if (p !== void 0 || r.length !== n.content.length) return { reason: `a ${p?.type ?? "text"} block the conversation does not take from a plugin (a row a plugin appends carries text blocks)` };
  if (n.type === "system") {
    let [s] = r;
    return s !== void 0 && r.length === 1 ? { row: { ...Bt(s, "info"), uuid: e } } : { reason: "a notice that is not one text block" };
  }
  let a = n.type === "user" && n.isMeta === true, m = fso(t.origin);
  return a ? { row: Oe({ content: r.map((s) => ({ type: "text", text: s })), isMeta: true, uuid: e, ...m !== void 0 && { origin: { kind: "plugin", name: m } } }) } : { reason: `a ${n.type} row` + (n.type === "user" ? " that is not isMeta" : "") + " (a plugin appends a user-role isMeta row or a system notice; a prompt is $.prompt.submit)" };
}
function gso(t, e) {
  let n = t ?? "main";
  if (e) return `${n} is a conversation no plugin may shape`;
  if (t === void 0) return "this session keeps no conversation to append to";
  return `no running loop is ${t}`;
}
var tMn = (t) => KWe(t).messages.map((e) => ({ content: e.message.content }));
function QPt(t) {
  let { content: e } = t;
  return typeof e === "string" ? [e] : e.flatMap((r) => r.type === "text" ? [r.text] : []);
}
function hso(t) {
  let e = "content" in t ? t.content : void 0;
  return typeof e === "string" && e !== "" ? e : void 0;
}
function nMn(t) {
  switch (t.type) {
    case "user":
    case "assistant":
      return GRr(t.message.content);
    case "attachment":
      return tMn(t).flatMap(QPt).map((e) => ({ type: "text", text: e }));
    case "system": {
      let e = hso(t);
      return e === void 0 ? [] : [{ type: "text", text: e }];
    }
  }
}
function lyr(t) {
  let e = t.type === "attachment", n = t.type === "system", r = e ? t.attachment.type : n ? t.subtype : void 0, p = !X_(t), a = t.type === "assistant" ? "assistant" : "user", m = "isMeta" in t && t.isMeta === true;
  return { type: t.type, ...r !== void 0 && { name: r }, ...p && { role: a }, ...m && { isMeta: true }, content: nMn(t) };
}
var yso = (t, e) => !MHr(t) && e.length > 0 && e.every(({ content: n }) => typeof n === "string" || n.every((r) => r.type === "text"));
async function UYt(t, e) {
  let r = e?.isHookable === true ? e : void 0, p = Vt(t.uuid), a = gso(t.agentId, e !== void 0), s = p !== null && r !== void 0 ? mso(t, p) : { reason: p === null ? "a uuid the engine did not mint" : a };
  if (r === void 0 || "reason" in s) {
    let u = "reason" in s ? s.reason : a;
    throw new De(`$.session.append: refused: ${u}`);
  }
  return (r.keepArrived ?? r.keep)([s.row]), r.arrived([s.row]), { message: lyr(s.row), uuid: s.row.uuid };
}
var rMn = /* @__PURE__ */ new Set(["text", "image", "document"]);
function _dt(t) {
  let e = /* @__PURE__ */ new Map();
  return t.map((n) => {
    if (rMn.has(n.type)) return;
    if (n.type === "tool_use" && typeof n.id === "string") return `tool_use:${n.id}`;
    let r = n.tool_use_id;
    if (n.type === "tool_result" && typeof r === "string") return `tool_result:${r}`;
    let p = e.get(n.type) ?? 0;
    return e.set(n.type, p + 1), `${n.type}#${p}`;
  });
}
var _so = f(() => yt({ type: o() }));
var K5e = (t) => Array.isArray(t) ? t.flatMap((e) => {
  let n = _so().safeParse(e);
  return n.success ? [n.data] : [];
}) : [];
var q5e = (t, e) => e.flatMap((n) => {
  let r = n.kind === "text" ? n.text : t[n.index];
  return r === void 0 ? [] : [r];
});
function BYt(t, e) {
  if (e === void 0 || typeof e === "string") return e ?? t;
  let n = Array.isArray(t) ? t : [], r = /* @__PURE__ */ new Set();
  return e.flatMap((p) => {
    let a = n.findIndex((u, x) => !r.has(x) && kWe(u, p)), m = n[a], s = JPt().safeParse(p);
    if (m !== void 0) return r.add(a), [m];
    return s.success ? [{ type: "text", text: s.data.text }] : [];
  });
}
var Sso = /* @__PURE__ */ new Set(["thinking", "redacted_thinking", "tool_result"]);
function bso(t, e, n) {
  let r = e.findIndex((a, m) => !n.has(m) && rMn.has(a.type) && kWe(a, t));
  if (r !== -1) return n.add(r), { kind: "raised", index: r };
  let p = JPt().safeParse(t);
  return p.success ? { kind: "text", text: p.data.text } : void 0;
}
var oMn = "^";
var wso = (t, e, n) => ({ kind: "tool-result", index: t, ...e !== void 0 && { content: e }, isError: n });
var Eso = f(() => yt({ type: T("tool_result"), content: Fe([o(), C(yt({ type: o() }))]).optional(), is_error: M().optional() }));
function vso(t, e, n) {
  let r = Eso().safeParse(e);
  return r.success ? wso(t, r.data.content, r.data.is_error ?? n) : { kind: "raised", index: t };
}
function jYt(t, e) {
  if (t.length === 0) return [];
  let n = _dt(t), r = new Set(n.filter((i) => i !== void 0)), p = n.filter((i, c) => i !== void 0 && t[c]?.type === "tool_result"), a = _dt(e), m = F(e, (i) => i.type === "tool_result" && typeof i.tool_use_id !== "string") === p.length, s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Set(), g = oMn, _ = 0;
  e.forEach((i, c) => {
    let y = i.type === "tool_result" && typeof i.tool_use_id !== "string", d = y ? m ? p[_++] : void 0 : a[c];
    if (d === void 0 && !y) {
      let h = bso(i, t, x), H = s.get(g) ?? [];
      if (h !== void 0) s.set(g, [...H, h]);
      return;
    }
    if (d === void 0 || !r.has(d)) return;
    if (g = d, i.type === "tool_result") u.set(d, i);
  });
  let k = t.findIndex((i) => !Sso.has(i.type)), A = k === -1 ? t.length : k, l = [];
  if (t.forEach((i, c) => {
    if (c === A) l.push(...s.get(oMn) ?? []);
    let y = n[c];
    if (y === void 0) return;
    let d = u.get(y);
    l.push(d === void 0 ? { kind: "raised", index: c } : vso(c, d, i.is_error === true), ...s.get(y) ?? []);
  }), A === t.length) l.push(...s.get(oMn) ?? []);
  return l.length > 0 ? l : [{ kind: "text", text: sp }];
}
import { randomUUID as rt } from "crypto";
var WYt = ({ message: t, agentId: e }, n) => ({ message: { type: t.type, ...t.type === "user" && { role: "user", isMeta: true }, content: t.content }, door: "note", origin: { kind: "plugin", name: n }, uuid: rt(), ...e !== void 0 && { agentId: e } });
export {
  BYt,
  Eso,
  JPt,
  K5e,
  QPt,
  Sso,
  UYt,
  WYt,
  _dt,
  _so,
  bso,
  fso,
  gso,
  hso,
  jYt,
  lyr,
  mso,
  nMn,
  oMn,
  q5e,
  rMn,
  tMn,
  vso,
  wso,
  yso
};
