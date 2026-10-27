// shared/chunk-n07cvysj.js — Claude Code 2.1.310 模块 chunk-n07cvysj.js
import { tw, Mz } from "../context/not-admin-owned.ersa.js";
import { Fz, vie } from "../fs/node-modules.gp4v.js";
var s = "[object Symbol]";
function b(r) {
  return typeof r == "symbol" || Mz(r) && vie(r) == s;
}
var Qse = b;
function l(r, t) {
  var o = -1, n = r == null ? 0 : r.length, i = Array(n);
  while (++o < n) i[o] = t(r[o], o, r);
  return i;
}
var d3e = l;
var y = 1 / 0, e = Fz ? Fz.prototype : void 0, f = e ? e.toString : void 0;
function m(r) {
  if (typeof r == "string") return r;
  if (tw(r)) return d3e(r, m) + "";
  if (Qse(r)) return f ? f.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -y ? "-0" : t;
}
var p = m;
function u(r) {
  return r == null ? "" : p(r);
}
var Zse = u;
export {
  Qse,
  Zse,
  d3e
};
