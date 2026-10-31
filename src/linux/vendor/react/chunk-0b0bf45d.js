// linux/vendor/react/chunk-0b0bf45d.js — Claude Code 2.1.310（linux）模块 chunk-a2y39866.js
var k = Object.create;
var { getPrototypeOf: l, defineProperty: f, getOwnPropertyNames: m } = Object;
var j = Object.prototype.hasOwnProperty;
function n(a) {
  return this[a];
}
var o, p, Ce = (a, b, c) => {
  var d = a != null && typeof a === "object";
  if (d) {
    var h = b ? o ??= /* @__PURE__ */ new WeakMap() : p ??= /* @__PURE__ */ new WeakMap(), i = h.get(a);
    if (i) return i;
  }
  c = a != null ? k(l(a)) : {};
  let e = b || !a || !a.__esModule || !j.call(a, "default") ? f(c, "default", { value: a, enumerable: true }) : c;
  if (a && typeof a === "object" || typeof a === "function") {
    for (let g of m(a)) if (!j.call(e, g)) f(e, g, { get: n.bind(a, g), enumerable: true });
  }
  if (d) h.set(a, e);
  return e;
};
var x = (a, b) => () => (b || a((b = { exports: {} }).exports, b), b.exports);
var q = (a) => a;
function r(a, b) {
  this[a] = q.bind(null, b);
}
var $r = (a, b) => {
  for (var c in b) f(a, c, { get: b[c], enumerable: true, configurable: true, set: r.bind(b, c) });
};
var Ua = (a, b, c) => () => {
  if (a) try {
    b = a(a = 0);
  } catch (d) {
    c = [d];
  }
  if (c) throw c[0];
  return b;
};
var S = Symbol.for("react.memo_cache_sentinel"), vn = Symbol.for("react.early_return_sentinel"), ovi = (a, b, c) => {
  for (var d in b) f(a, d, { get: b[d], set: c[d], enumerable: true, configurable: true });
}, Fe = import.meta.require;
export {
  $r,
  Ce,
  Fe,
  S,
  Ua,
  ovi,
  vn,
  x
};
