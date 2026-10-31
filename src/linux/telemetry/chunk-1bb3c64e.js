// linux/telemetry/chunk-1bb3c64e.js — Claude Code 2.1.310（linux）模块 chunk-1hp0t8kv.js
import { H } from "../shared/chunk-7027e6d5.js";
function Tvt(r, o = "aborted") {
  let { reason: t } = r;
  return t instanceof Error ? t.message : t === void 0 ? o : String(t);
}
var vSi = (r) => `the answer is not plain data: ${r}`;
class He extends Error {
  name = "HooksError";
  telemetryMessage = "function hooks error (message not reported: it may contain plugin details)";
  thrownName;
}
function Lyn(r, o) {
  if (!H(r)) throw new He(`${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);
  return r;
}
function oqo(r) {
  if (!(r instanceof Error)) return;
  let o = r.cause;
  return typeof o === "string" ? o : void 0;
}
var gei = (r) => typeof r === "object" && r !== null && "aborted" in r && typeof r.addEventListener === "function" && typeof r.removeEventListener === "function";
var r2t = (r) => `next() argument is not plain data: ${r}`;
var XKr = (r, o) => `${r}: arguments are not plain data: ${o}`;
class x_e extends He {
}
var hei = (r) => r.reason instanceof x_e;
var sqo = (r, o) => o === true ? new x_e(r) : new He(r);
var jer = (r) => r.reason instanceof x_e ? { isSettled: true } : {};
var ESi = (r) => r instanceof x_e ? new He(r.message) : r;
var e = /* @__PURE__ */ new WeakMap();
function Wer(r, o) {
  if (typeof r === "object" && r !== null) e.set(r, o);
  return r;
}
var iqo = (r) => typeof r === "object" && r !== null ? e.get(r) : void 0;
class JKr extends He {
  asked;
  constructor(r, o) {
    super(r);
    this.asked = o;
  }
}
var n = /* @__PURE__ */ new WeakSet();
var QKr = (r) => typeof r === "object" && r !== null && n.has(r);
function Ger(r) {
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
var Avt = (r, o) => s.mark(r, o);
var CCe = (r) => new He(`${r}: its environment was unloaded`);
var zer = (r, o, t) => ({ plugin: r, op: o, message: t });
function kSi(r, o) {
  let t = CCe(r);
  return Avt(t, zer(r, o, t.message));
}
var Ker = (r) => s.of(r);
export {
  Avt,
  CCe,
  ESi,
  Ger,
  He,
  JKr,
  Ker,
  Lyn,
  QKr,
  Tvt,
  Wer,
  XKr,
  gei,
  hei,
  iqo,
  jer,
  kSi,
  oqo,
  r2t,
  sqo,
  vSi,
  x_e,
  zer
};
