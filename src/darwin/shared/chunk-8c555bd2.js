// darwin/shared/chunk-8c555bd2.js — Claude Code 2.1.310（darwin）模块 chunk-z36bfg3v.js
import { Ne, as } from "../fs/async-hooks.93b1.js";
import { Fr } from "../vendor/react/chunk-0b0bf45d.js";
var BQt = {};
Fr(BQt, { booleanOfInput: () => m8e, default: () => BQt, isHeldTrue: () => Svr, numberInputHint: () => $Qt, numberOfInput: () => UQt });
var m8e = (n) => Ne(n) ? true : as(n) ? false : void 0;
var Svr = (n) => n === true || n === "true";
function $Qt(n) {
  return `It takes a number${n.min !== void 0 || n.max !== void 0 ? ` between ${n.min ?? "-∞"} and ${n.max ?? "∞"}` : ""}.`;
}
function UQt(n, e) {
  let r = n.trim(), t = Number(r);
  return r !== "" && Number.isFinite(t) && (e.min === void 0 || t >= e.min) && (e.max === void 0 || t <= e.max) ? t : void 0;
}
export {
  $Qt,
  BQt,
  Svr,
  UQt,
  m8e
};
