// vendor/highlight/meta-keyword.jk0t.js — Claude Code 2.1.310 模块 chunk-jk0txhqk.js
import { CA } from "../../shared/chunk-j79dwkaq.js";
import { he } from "../../terminal/xterm-ghostty.qrwz.js";
import { wIn, nae } from "./built-in.1q40.js";
import { ulr } from "../../shared/chunk-380qngfk.js";
var s = "\x1B[0m";
function i(t) {
  return he.level > 0 && t.includes(s) ? s + t.replace(/\r?\n/g, `${s}$&${s}`) + s : he.reset(t);
}
var m = new Map(Object.entries({ keyword: he.blue, built_in: he.cyan, type: he.cyan.dim, literal: he.blue, number: he.green, regexp: he.red, string: he.red, subst: i, symbol: i, class: he.blue, function: he.yellow, title: i, "title.function": he.yellow, "title.class": he.blue, params: i, comment: he.green, doctag: he.green, meta: he.grey, "meta-keyword": i, "meta-string": i, "meta.keyword": i, "meta.string": i, section: i, tag: he.grey, name: he.blue, attr: he.cyan, attribute: i, variable: i, bullet: i, code: i, emphasis: he.italic, strong: he.bold, link: he.underline, quote: i, addition: he.green, deletion: he.red }));
function c(t) {
  let e = CA(t, "hljs-");
  for (; ; ) {
    let r = m.get(e);
    if (r) return r;
    let n = e.lastIndexOf(".");
    if (n < 0) return;
    e = e.slice(0, n);
  }
}
function d(t) {
  let e = [], r = [];
  p(t, e, r);
  let n = ulr(r);
  if (n === r) return;
  e.forEach(({ siblings: o, at: a }, l) => {
    o[a] = n[l];
  });
}
function p(t, e, r) {
  t.children.forEach((n, o) => {
    if (typeof n === "string") e.push({ siblings: t.children, at: o }), r.push(n);
    else p(n, e, r);
  });
}
function u(t) {
  if (typeof t === "string") return t;
  let e = t.children.map(u).join(""), r = t.scope ?? t.kind, n = r ? c(r) : void 0;
  return n ? n(e) : e;
}
function f(t, e) {
  let r = e?.language;
  if (!r) return t;
  try {
    let n = nae(r);
    if (!n) return t;
    let o = wIn().highlight(t, { language: n, ignoreIllegals: true }), a = o._emitter ?? o.emitter, l = a?.rootNode ?? a?.root;
    if (!l || typeof l === "string") return t;
    return d(l), l.children.map(u).join("");
  } catch {
    return t;
  }
}
function y(t) {
  return nae(t) !== null;
}
var h = { highlight: f, supportsLanguage: y };
function $W() {
  return h;
}
export {
  $W
};
