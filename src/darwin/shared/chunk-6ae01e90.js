// darwin/shared/chunk-6ae01e90.js — Claude Code 2.1.310（darwin）模块 chunk-dpjnt83j.js
import { Dn } from "../agents/third-party.js";
import { et } from "./chunk-061dbb8e.js";
function cn(r) {
  return Dn(et(r).slice(0, 12));
}
var t = /^[0-9a-f]{12}$/;
function iKt(r) {
  return t.test(r) ? Dn(r) : void 0;
}
export {
  cn,
  iKt
};
