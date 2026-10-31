// darwin/shared/chunk-22f77b65.js — Claude Code 2.1.310（darwin）模块 chunk-r9r9p0bq.js
import { nt, U, cm } from "../context/not-admin-owned.js";
import { Wse, Gpe } from "./async-hooks.9e79.js";
import { Sz } from "./chunk-5acf247e.js";
class r {
  #e;
  get() {
    return this.#e;
  }
  replace(e) {
    this.#e = e;
  }
}
var u = new nt(() => new r());
function MWr() {
  return u.peek(U())?.get();
}
function aJn() {
  return (Wse() && !Gpe() ? void 0 : MWr()) ?? (cm() ? "UTC" : void 0);
}
function vWo() {
  let e = /* @__PURE__ */ new Date(), n = MWr();
  if (n !== void 0) {
    let t = new Map(Sz("en-US", { timeZone: n, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(e).map((o) => [o.type, o.value]));
    return `${t.get("year")}-${t.get("month")}-${t.get("day")}`;
  }
  let i = e.getFullYear(), a = String(e.getMonth() + 1).padStart(2, "0"), d = String(e.getDate()).padStart(2, "0");
  return `${i}-${a}-${d}`;
}
class s {
  #e;
  get() {
    return this.#e ??= vWo(), this.#e;
  }
  clear() {
    this.#e = void 0;
  }
  get captured() {
    return this.#e !== void 0;
  }
}
var qmn = new nt(() => new s());
function kWo(e) {
  return qmn.of(e).get();
}
function K8s() {
  return kWo(U());
}
function q8s() {
  return (/* @__PURE__ */ new Date()).toLocaleString("en-US", { month: "long", year: "numeric" });
}
export {
  K8s,
  MWr,
  aJn,
  kWo,
  q8s,
  qmn,
  vWo
};
