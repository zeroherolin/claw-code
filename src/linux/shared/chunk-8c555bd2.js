// linux/shared/chunk-8c555bd2.js — Claude Code 2.1.310（linux）模块 chunk-1w30mhyz.js
import { Ne, is } from "../fs/async-hooks.93b1.js";
import { $r } from "../vendor/react/chunk-0b0bf45d.js";
var I7t = {};
$r(I7t, { booleanOfInput: () => a8e, default: () => I7t, isHeldTrue: () => oEr, numberInputHint: () => x7t, numberOfInput: () => P7t });
var a8e = (n) => Ne(n) ? true : is(n) ? false : void 0;
var oEr = (n) => n === true || n === "true";
function x7t(n) {
  return `It takes a number${n.min !== void 0 || n.max !== void 0 ? ` between ${n.min ?? "-∞"} and ${n.max ?? "∞"}` : ""}.`;
}
function P7t(n, e) {
  let r = n.trim(), t = Number(r);
  return r !== "" && Number.isFinite(t) && (e.min === void 0 || t >= e.min) && (e.max === void 0 || t <= e.max) ? t : void 0;
}
export {
  I7t,
  P7t,
  a8e,
  oEr,
  x7t
};
