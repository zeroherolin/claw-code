// linux/shared/async-hooks.b037.js — Claude Code 2.1.310（linux）模块 chunk-rh5ymkjp.js
import { U } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
import { Gst } from "./async-hooks.5238.js";
class r {
  #e = /* @__PURE__ */ new Set();
  #n = /* @__PURE__ */ new Map();
  lastBellAt = 0;
  claim(e) {
    if (this.#e.has(e)) return false;
    return this.#e.add(e), true;
  }
  has(e) {
    return this.#e.has(e);
  }
  claimIfChanged(e, n) {
    if (this.#n.get(e) === n) return false;
    return this.#n.set(e, n), true;
  }
}
var zV = new W(() => new r());
function qi() {
  return zV.of(U().host);
}
import { AsyncLocalStorage as o } from "async_hooks";
var Bue = "cron", t = new o();
function Zrr() {
  return t.getStore()?.workload;
}
function f6o() {
  return t.getStore()?.scheduledByPlugin;
}
function ekt(e) {
  return e?.hookCaller !== void 0 && !e.hookServesModel ? e.hookCaller : f6o();
}
function csi() {
  let e = t.getStore();
  if (e !== void 0) e.scheduledByPlugin = void 0;
}
function usi(e, n) {
  return rSn({ workload: e, scheduledByPlugin: void 0 }, n);
}
function rSn(e, n) {
  return t.run(e, () => Gst(n));
}
export {
  Bue,
  Zrr,
  csi,
  ekt,
  f6o,
  qi,
  rSn,
  usi,
  zV
};
