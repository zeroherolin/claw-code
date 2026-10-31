// linux/shared/chunk-052ccb69.js — Claude Code 2.1.310（linux）模块 chunk-wp7k62hm.js
import { Iv } from "../fs/node-modules.js";
import { Ze, fee } from "./chunk-d2c47492.js";
function kNo(n) {
  return n.birthtimeNs > 0n && n.birthtimeNs !== n.ctimeNs ? n.birthtimeNs.toString() : void 0;
}
function i(n) {
  return n >= -(2n ** 63n) && n < -1n ? n + 2n ** 64n : n;
}
function tun(n, t) {
  return i(n) === i(t);
}
function e(n) {
  return fee(Ze(n, "."), " ");
}
function TNo(n) {
  return /^con(in|out)\$$/i.test(e(n));
}
var o = /[<>"|?*\\\x00-\x1f]/;
function jVs(n) {
  return n.split("/").some((t) => o.test(t));
}
function W6n(n) {
  return n.split("/").some((t) => t.includes(":") || t.endsWith(".") || t.endsWith(" ") || Iv(e(t).replace(/ {2,}/g, " ")) || TNo(t));
}
var r = /^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;
function s(n) {
  return fee(Ze(n, ":"), ". ");
}
function nun(n) {
  return n.split("/").some((t) => r.test(s(t)));
}
export {
  TNo,
  W6n,
  jVs,
  kNo,
  nun,
  tun
};
