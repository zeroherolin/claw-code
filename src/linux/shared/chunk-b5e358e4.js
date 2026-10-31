// linux/shared/chunk-b5e358e4.js — Claude Code 2.1.310（linux）模块 chunk-b2fbd462.js
import { H } from "./chunk-7027e6d5.js";
import { Ce, x } from "../vendor/react/chunk-0b0bf45d.js";
var R = x(function(h, L) {
  L.exports = { single: { topLeft: "┌", top: "─", topRight: "┐", right: "│", bottomRight: "┘", bottom: "─", bottomLeft: "└", left: "│" }, double: { topLeft: "╔", top: "═", topRight: "╗", right: "║", bottomRight: "╝", bottom: "═", bottomLeft: "╚", left: "║" }, round: { topLeft: "╭", top: "─", topRight: "╮", right: "│", bottomRight: "╯", bottom: "─", bottomLeft: "╰", left: "│" }, bold: { topLeft: "┏", top: "━", topRight: "┓", right: "┃", bottomRight: "┛", bottom: "━", bottomLeft: "┗", left: "┃" }, singleDouble: { topLeft: "╓", top: "─", topRight: "╖", right: "║", bottomRight: "╜", bottom: "─", bottomLeft: "╙", left: "║" }, doubleSingle: { topLeft: "╒", top: "═", topRight: "╕", right: "│", bottomRight: "╛", bottom: "═", bottomLeft: "╘", left: "│" }, classic: { topLeft: "+", top: "-", topRight: "+", right: "|", bottomRight: "+", bottom: "-", bottomLeft: "+", left: "|" }, arrow: { topLeft: "↘", top: "↓", topRight: "↙", right: "←", bottomRight: "↖", bottom: "↑", bottomLeft: "↗", left: "→" } };
});
var n = x(function(c, r) {
  var f = R();
  r.exports = f;
  r.exports.default = f;
});
var p = ["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight"];
var m = (t) => H(t) && p.every((o) => typeof t[o] === "string");
var b = Ce(n(), 1);
var E = { dashed: { top: "╌", left: "╎", right: "╎", bottom: "╌", topLeft: " ", topRight: " ", bottomLeft: " ", bottomRight: " " }, quote: { top: " ", left: "▎", right: " ", bottom: " ", topLeft: " ", topRight: " ", bottomLeft: " ", bottomRight: " " } };
var e = { ...b.default, ...E };
function Rer(t) {
  let i = typeof t === "string" && Object.hasOwn(e, t) ? e[t] : t;
  return m(i) ? i : void 0;
}
var lSi = Object.keys(e).filter((t) => Rer(t) !== void 0);
var VKe = Object.freeze([[1564, 1564], [8234, 8238], [8294, 8297]]), $Kr = VKe.map(([t, o]) => `\\u{${t.toString(16)}}` + (o > t ? `-\\u{${o.toString(16)}}` : "")).join(""), _vt = new RegExp(`[${$Kr}]`, "gu");
export {
  $Kr,
  Rer,
  VKe,
  _vt,
  lSi
};
