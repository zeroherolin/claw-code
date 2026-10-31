// linux/shared/chunk-22f77b65.js — Claude Code 2.1.310（linux）模块 chunk-183gveyz.js
import { nt, U, cm } from "../context/not-admin-owned.js";
import { Hse, Nfe } from "./async-hooks.9e79.js";
import { c2 } from "./chunk-5acf247e.js";
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
function fWr() {
  return u.peek(U())?.get();
}
function WJn() {
  return (Hse() && !Nfe() ? void 0 : fWr()) ?? (cm() ? "UTC" : void 0);
}
function qjo() {
  let e = /* @__PURE__ */ new Date(), n = fWr();
  if (n !== void 0) {
    let t = new Map(c2("en-US", { timeZone: n, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(e).map((o) => [o.type, o.value]));
    return `${t.get("year")}-${t.get("month")}-${t.get("day")}`;
  }
  let i = e.getFullYear(), a = String(e.getMonth() + 1).padStart(2, "0"), d = String(e.getDate()).padStart(2, "0");
  return `${i}-${a}-${d}`;
}
class s {
  #e;
  get() {
    return this.#e ??= qjo(), this.#e;
  }
  clear() {
    this.#e = void 0;
  }
  get captured() {
    return this.#e !== void 0;
  }
}
var Mmn = new nt(() => new s());
function Yjo(e) {
  return Mmn.of(e).get();
}
function d8s() {
  return Yjo(U());
}
function c8s() {
  return (/* @__PURE__ */ new Date()).toLocaleString("en-US", { month: "long", year: "numeric" });
}
export {
  Mmn,
  WJn,
  Yjo,
  c8s,
  d8s,
  fWr,
  qjo
};
