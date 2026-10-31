// darwin/vendor/react/chunk-0b0bf45d.js — Claude Code 2.1.310（darwin）模块 chunk-meds60nn.js
var l = Object.create;
var { getPrototypeOf: m, defineProperty: g, getOwnPropertyNames: n } = Object;
var k = Object.prototype.hasOwnProperty;
function o(a) {
  return this[a];
}
var p, q, Ae = (a, c, d) => {
  var e = a != null && typeof a === "object";
  if (e) {
    var i = c ? p ??= /* @__PURE__ */ new WeakMap() : q ??= /* @__PURE__ */ new WeakMap(), j = i.get(a);
    if (j) return j;
  }
  d = a != null ? l(m(a)) : {};
  let f = c || !a || !a.__esModule || !k.call(a, "default") ? g(d, "default", { value: a, enumerable: true }) : d;
  if (a && typeof a === "object" || typeof a === "function") {
    for (let h of n(a)) if (!k.call(f, h)) g(f, h, { get: o.bind(a, h), enumerable: true });
  }
  if (e) i.set(a, f);
  return f;
};
var x = (a, c) => () => (c || a((c = { exports: {} }).exports, c), c.exports);
var r = (a) => a;
function s(a, c) {
  this[a] = r.bind(null, c);
}
var Fr = (a, c) => {
  for (var d in c) g(a, d, { get: c[d], enumerable: true, configurable: true, set: s.bind(c, d) });
};
var Ba = (a, c, d) => () => {
  if (a) try {
    c = a(a = 0);
  } catch (e) {
    d = [e];
  }
  if (d) throw d[0];
  return c;
};
var b = Symbol.for("react.memo_cache_sentinel"), En = Symbol.for("react.early_return_sentinel"), BEi = (a, c, d) => {
  for (var e in c) g(a, e, { get: c[e], set: d[e], enumerable: true, configurable: true });
}, $e = import.meta.require;
export {
  $e,
  Ae,
  BEi,
  Ba,
  En,
  Fr,
  b,
  x
};
