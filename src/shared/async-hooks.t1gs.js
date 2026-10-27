// shared/async-hooks.t1gs.js — Claude Code 2.1.310 模块 chunk-t1gsmm5c.js
import { U } from "../context/not-admin-owned.ersa.js";
import { W } from "./chunk-3y73jbfr.js";
import { Xst } from "./async-hooks.m2fg.js";
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
var nK = new W(() => new r());
function qi() {
  return nK.of(U().host);
}
import { AsyncLocalStorage as o } from "async_hooks";
var que = "cron", t = new o();
function _or() {
  return t.getStore()?.workload;
}
function B5o() {
  return t.getStore()?.scheduledByPlugin;
}
function akt(e) {
  return e?.hookCaller !== void 0 && !e.hookServesModel ? e.hookCaller : B5o();
}
function qsi() {
  let e = t.getStore();
  if (e !== void 0) e.scheduledByPlugin = void 0;
}
function Ysi(e, n) {
  return bbn({ workload: e, scheduledByPlugin: void 0 }, n);
}
function bbn(e, n) {
  return t.run(e, () => Xst(n));
}
export {
  B5o,
  Ysi,
  _or,
  akt,
  bbn,
  nK,
  qi,
  qsi,
  que
};
