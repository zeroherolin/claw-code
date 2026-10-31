// darwin/shared/chunk-37dd5dd4.js — Claude Code 2.1.310（darwin）模块 chunk-3y73jbfr.js
class W {
  #o;
  #r = /* @__PURE__ */ new WeakMap();
  constructor(o) {
    this.#o = o;
  }
  of(o) {
    let e = this.#r.get(o);
    if (e !== void 0) return e;
    let s = this.#o();
    return this.#r.set(o, s), s;
  }
}
var r = { isDiskless: () => false, isDisklessProcess: () => false, reportBuilt: () => {
} };
function Kmi(o) {
  r = o;
}
function $ee() {
  return r.isDiskless();
}
function qmi() {
  return r.isDisklessProcess();
}
var Ymi = new W(() => ({}));
var t = "NoConfigHomeError";
function jit(o) {
  try {
    return typeof o === "object" && o !== null && "name" in o && o.name === t;
  } catch {
    return false;
  }
}
export {
  $ee,
  Kmi,
  W,
  Ymi,
  jit,
  qmi
};
