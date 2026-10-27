// shared/chunk-ga6mt4j1.js — Claude Code 2.1.310 模块 chunk-ga6mt4j1.js
import { re } from "./chunk-j79dwkaq.js";
import { Oi } from "../git/utf-8.vh7e.js";
function u9e(n) {
  return n.replace(/[\r\n\u2028\u2029]+/g, " ");
}
function VUe(n, r) {
  let e = Oi(n);
  if (e.length <= r) return e;
  let t = re(e, r), o = Array.from(e.slice(t.length)).length;
  return `${t} … (${o} more characters follow that are NOT shown in this message)`;
}
export {
  VUe,
  u9e
};
