// linux/shared/chunk-6ae01e90.js — Claude Code 2.1.310（linux）模块 chunk-4q6qmmwb.js
import { Hn } from "../agents/third-party.js";
import { et } from "./chunk-061dbb8e.js";
function cn(r) {
  return Hn(et(r).slice(0, 12));
}
var t = /^[0-9a-f]{12}$/;
function VVt(r) {
  return t.test(r) ? Hn(r) : void 0;
}
export {
  VVt,
  cn
};
