// linux/shared/chunk-259e511a.js — Claude Code 2.1.310（linux）模块 chunk-a6g4mbkc.js
import { Y5r, X5r } from "../shell/invalid-type.js";
import { rW } from "./chunk-1f805b50.js";
import { ZS, M9r } from "../context/not-admin-owned.js";
function m(r, e) {
  var t = [];
  return X5r(r, function(o, f, i) {
    if (e(o, f, i)) t.push(o);
  }), t;
}
var a = m;
function n(r, e) {
  var t = ZS(r) ? M9r : a;
  return t(r, Y5r(rW(e, 3)));
}
var jB = n;
export {
  jB
};
