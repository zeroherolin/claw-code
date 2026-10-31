// linux/shared/chunk-0870a9b4.js — Claude Code 2.1.310（linux）模块 chunk-3b9j76mf.js
import { Ne, is } from "../fs/async-hooks.93b1.js";
import { Ess, Tu } from "../models/claude-3-5-sonnet.js";
function i(n) {
  return { parse: (e) => n(u(e)) };
}
function t(n) {
  let e = n?.trim();
  return e ? e : void 0;
}
function u(n) {
  return n === void 0 ? void 0 : String(n);
}
var o = i(t), f = i((n) => n), l = i((n) => Ne(n)), s = i((n) => {
  if (Ne(n)) return true;
  if (is(n)) return false;
  return;
}), a = d();
function Ypi(n) {
  if (typeof n === "boolean") return n ? "1" : "0";
  return String(n);
}
var D = { str: () => o, rawStr: () => f, bool: () => l, triBool: () => s, int: (n) => n ? d(n) : a, enum: (n) => i((e) => e !== void 0 && n.includes(e.trim()) ? e.trim() : void 0) };
function d(n) {
  return i((e) => {
    if (e === void 0) return;
    if (n?.digitsOnly && !/^[+-]?\d+$/.test(e.trim())) return;
    if (n?.wholeValue && !/^[+-]?\d+$/.test(e.trim()) && Ess(e.trim()) === void 0) return;
    let r = Tu(e);
    if (!Number.isFinite(r)) return;
    if (n?.min !== void 0 && r < n.min) return;
    if (n?.max !== void 0 && r > n.max) return;
    return r;
  });
}
export {
  D,
  Ypi
};
