// linux/shared/chunk-6da6c5a3.js — Claude Code 2.1.310（linux）模块 chunk-f9x3sh8a.js
import { ZS, k2 } from "../context/not-admin-owned.js";
import { x2, gie } from "../fs/node-modules.js";
var s = "[object Symbol]";
function b(r) {
  return typeof r == "symbol" || k2(r) && gie(r) == s;
}
var Gse = b;
function l(r, t) {
  var o = -1, n = r == null ? 0 : r.length, i = Array(n);
  while (++o < n) i[o] = t(r[o], o, r);
  return i;
}
var tYe = l;
var y = 1 / 0, e = x2 ? x2.prototype : void 0, f = e ? e.toString : void 0;
function m(r) {
  if (typeof r == "string") return r;
  if (ZS(r)) return tYe(r, m) + "";
  if (Gse(r)) return f ? f.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -y ? "-0" : t;
}
var p = m;
function u(r) {
  return r == null ? "" : p(r);
}
var zse = u;
export {
  Gse,
  tYe,
  zse
};
