// shared/tool-use.vxmn.js — Claude Code 2.1.310 模块 chunk-vxmngq9y.js
import { Lg } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
function* i(n) {
  for (let s of n) if (s.type === "assistant" && Array.isArray(s.message.content)) {
    for (let e of s.message.content) if (e.type === "tool_use" && Lg.includes(e.name)) {
      let { input: t } = e;
      if (typeof t === "object" && t !== null && "command" in t && typeof t.command === "string") yield t.command;
    }
  }
}
function OHn(n) {
  let s = /* @__PURE__ */ new Set();
  for (let e of i(n)) {
    let t = m(e);
    if (t) s.add(t);
  }
  return s;
}
var a = /https?:\/\/([^\s/?#'"`<>\\)\];&|(,]+)/gi;
function c(n) {
  if (!n) return [];
  let s = [];
  for (let e of n.matchAll(a)) {
    let t = e[1].toLowerCase(), o = t.lastIndexOf("@");
    if (o !== -1) t = t.slice(o + 1);
    let r = t.indexOf(":");
    if (r !== -1) t = t.slice(0, r);
    if (t) s.push(t);
  }
  return s;
}
function MHn(n) {
  let s = /* @__PURE__ */ new Set();
  for (let e of i(n)) for (let t of c(e)) s.add(t);
  return s;
}
function lbs(n) {
  let s = /* @__PURE__ */ new Set();
  for (let e of n) if (e.type === "assistant" && Array.isArray(e.message.content)) {
    for (let t of e.message.content) if (t.type === "tool_use") s.add(t.name);
  }
  return s;
}
var f = /* @__PURE__ */ new Set(["sudo"]);
function m(n) {
  if (!n) return;
  let s = n.trim().split(/\s+/);
  for (let e of s) {
    if (/^[A-Za-z_]\w*=/.test(e)) continue;
    if (f.has(e)) continue;
    return e;
  }
  return;
}
export {
  MHn,
  OHn,
  lbs
};
