// darwin/shared/chunk-b5e358e4.js — Claude Code 2.1.310（darwin）模块 chunk-fhjvpxth.js
import { D } from "./chunk-7027e6d5.js";
import { Ae, x } from "../vendor/react/chunk-0b0bf45d.js";
var R = x(function(h, L) {
  L.exports = { single: { topLeft: "┌", top: "─", topRight: "┐", right: "│", bottomRight: "┘", bottom: "─", bottomLeft: "└", left: "│" }, double: { topLeft: "╔", top: "═", topRight: "╗", right: "║", bottomRight: "╝", bottom: "═", bottomLeft: "╚", left: "║" }, round: { topLeft: "╭", top: "─", topRight: "╮", right: "│", bottomRight: "╯", bottom: "─", bottomLeft: "╰", left: "│" }, bold: { topLeft: "┏", top: "━", topRight: "┓", right: "┃", bottomRight: "┛", bottom: "━", bottomLeft: "┗", left: "┃" }, singleDouble: { topLeft: "╓", top: "─", topRight: "╖", right: "║", bottomRight: "╜", bottom: "─", bottomLeft: "╙", left: "║" }, doubleSingle: { topLeft: "╒", top: "═", topRight: "╕", right: "│", bottomRight: "╛", bottom: "═", bottomLeft: "╘", left: "│" }, classic: { topLeft: "+", top: "-", topRight: "+", right: "|", bottomRight: "+", bottom: "-", bottomLeft: "+", left: "|" }, arrow: { topLeft: "↘", top: "↓", topRight: "↙", right: "←", bottomRight: "↖", bottom: "↑", bottomLeft: "↗", left: "→" } };
});
var n = x(function(c, r) {
  var f = R();
  r.exports = f;
  r.exports.default = f;
});
var p = ["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight"];
var m = (t) => D(t) && p.every((o) => typeof t[o] === "string");
var b = Ae(n(), 1);
var E = { dashed: { top: "╌", left: "╎", right: "╎", bottom: "╌", topLeft: " ", topRight: " ", bottomLeft: " ", bottomRight: " " }, quote: { top: " ", left: "▎", right: " ", bottom: " ", topLeft: " ", topRight: " ", bottomLeft: " ", bottomRight: " " } };
var e = { ...b.default, ...E };
function Ver(t) {
  let i = typeof t === "string" && Object.hasOwn(e, t) ? e[t] : t;
  return m(i) ? i : void 0;
}
var zbi = Object.keys(e).filter((t) => Ver(t) !== void 0);
var nVe = Object.freeze([[1564, 1564], [8234, 8238], [8294, 8297]]), sVr = nVe.map(([t, o]) => `\\u{${t.toString(16)}}` + (o > t ? `-\\u{${o.toString(16)}}` : "")).join(""), CEt = new RegExp(`[${sVr}]`, "gu");
export {
  CEt,
  Ver,
  nVe,
  sVr,
  zbi
};
