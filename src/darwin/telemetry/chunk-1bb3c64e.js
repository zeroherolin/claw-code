// darwin/telemetry/chunk-1bb3c64e.js — Claude Code 2.1.310（darwin）模块 chunk-20qqn614.js
import { D } from "../shared/chunk-7027e6d5.js";
function OEt(r, o = "aborted") {
  let { reason: t } = r;
  return t instanceof Error ? t.message : t === void 0 ? o : String(t);
}
var swi = (r) => `the answer is not plain data: ${r}`;
class De extends Error {
  name = "HooksError";
  telemetryMessage = "function hooks error (message not reported: it may contain plugin details)";
  thrownName;
}
function Zyn(r, o) {
  if (!D(r)) throw new De(`${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);
  return r;
}
function MKo(r) {
  if (!(r instanceof Error)) return;
  let o = r.cause;
  return typeof o === "string" ? o : void 0;
}
var Zei = (r) => typeof r === "object" && r !== null && "aborted" in r && typeof r.addEventListener === "function" && typeof r.removeEventListener === "function";
var gzt = (r) => `next() argument is not plain data: ${r}`;
var yVr = (r, o) => `${r}: arguments are not plain data: ${o}`;
class L_e extends De {
}
var eti = (r) => r.reason instanceof L_e;
var HKo = (r, o) => o === true ? new L_e(r) : new De(r);
var itr = (r) => r.reason instanceof L_e ? { isSettled: true } : {};
var iwi = (r) => r instanceof L_e ? new De(r.message) : r;
var e = /* @__PURE__ */ new WeakMap();
function atr(r, o) {
  if (typeof r === "object" && r !== null) e.set(r, o);
  return r;
}
var DKo = (r) => typeof r === "object" && r !== null ? e.get(r) : void 0;
class _Vr extends De {
  asked;
  constructor(r, o) {
    super(r);
    this.asked = o;
  }
}
var n = /* @__PURE__ */ new WeakSet();
var SVr = (r) => typeof r === "object" && r !== null && n.has(r);
function ltr(r) {
  if (typeof r === "object" && r !== null) n.add(r);
  return r;
}
function p() {
  let r = /* @__PURE__ */ new WeakMap();
  return { mark(o, t) {
    if (typeof o === "object" && o !== null && t !== void 0) r.set(o, t);
    return o;
  }, of(o) {
    return typeof o === "object" && o !== null ? r.get(o) : void 0;
  } };
}
var s = p();
var MEt = (r, o) => s.mark(r, o);
var MAe = (r) => new De(`${r}: its environment was unloaded`);
var dtr = (r, o, t) => ({ plugin: r, op: o, message: t });
function awi(r, o) {
  let t = MAe(r);
  return MEt(t, dtr(r, o, t.message));
}
var ctr = (r) => s.of(r);
export {
  DKo,
  De,
  HKo,
  L_e,
  MAe,
  MEt,
  MKo,
  OEt,
  SVr,
  Zei,
  Zyn,
  _Vr,
  atr,
  awi,
  ctr,
  dtr,
  eti,
  gzt,
  itr,
  iwi,
  ltr,
  swi,
  yVr
};
