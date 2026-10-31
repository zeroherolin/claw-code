// linux/shared/chunk-37dd5dd4.js — Claude Code 2.1.310（linux）模块 chunk-jgvfzp2r.js
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
function lmi(o) {
  r = o;
}
function Iee() {
  return r.isDiskless();
}
function dmi() {
  return r.isDisklessProcess();
}
var cmi = new W(() => ({}));
var t = "NoConfigHomeError";
function Hit(o) {
  try {
    return typeof o === "object" && o !== null && "name" in o && o.name === t;
  } catch {
    return false;
  }
}
export {
  Hit,
  Iee,
  W,
  cmi,
  dmi,
  lmi
};
