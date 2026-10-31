// darwin/shared/chunk-052ccb69.js — Claude Code 2.1.310（darwin）模块 chunk-q8fdq63d.js
import { OE } from "../fs/node-modules.js";
import { Ze, bee } from "./chunk-d2c47492.js";
function fFo(n) {
  return n.birthtimeNs > 0n && n.birthtimeNs !== n.ctimeNs ? n.birthtimeNs.toString() : void 0;
}
function i(n) {
  return n >= -(2n ** 63n) && n < -1n ? n + 2n ** 64n : n;
}
function Nun(n, t) {
  return i(n) === i(t);
}
function e(n) {
  return bee(Ze(n, "."), " ");
}
function mFo(n) {
  return /^con(in|out)\$$/i.test(e(n));
}
var o = /[<>"|?*\\\x00-\x1f]/;
function DKs(n) {
  return n.split("/").some((t) => o.test(t));
}
function v9n(n) {
  return n.split("/").some((t) => t.includes(":") || t.endsWith(".") || t.endsWith(" ") || OE(e(t).replace(/ {2,}/g, " ")) || mFo(t));
}
var r = /^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;
function s(n) {
  return bee(Ze(n, ":"), ". ");
}
function Fun(n) {
  return n.split("/").some((t) => r.test(s(t)));
}
export {
  DKs,
  Fun,
  Nun,
  fFo,
  mFo,
  v9n
};
