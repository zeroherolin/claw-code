// shared/chunk-98em9746.js — Claude Code 2.1.310 模块 chunk-98em9746.js
import { Eu } from "../vendor/zod/string-format.k395.js";
var _Ke = "(invalid tool name)";
function u_(e) {
  return Eu(e);
}
function bZ(e) {
  return e;
}
function G5o(e) {
  return e;
}
function dii(e) {
  return e;
}
function cii(e) {
  return e;
}
function z5o(e) {
  if (Object.getPrototypeOf(e) !== Array.prototype) throw TypeError("mintDisplayedUpdates: non-plain array in mint input — plain data only");
  if (!Number.isSafeInteger(e.length) || e.length < 0) throw TypeError("mintDisplayedUpdates: non-integer length in mint input — plain data only");
  let t = [];
  for (let o = 0; o < e.length; o++) {
    if (!(o in e)) throw TypeError("mintDisplayedUpdates: sparse mint input — plain data only");
    t.push(f(e[o]));
  }
  return Object.freeze(t);
}
function f(e, t = /* @__PURE__ */ new WeakMap()) {
  if (typeof e === "function") throw TypeError("deepFreezePlainData: function in mint input — plain data only");
  if (e !== null && typeof e === "object") {
    let o = t.get(e);
    if (o !== void 0) return o;
    let n = Object.getPrototypeOf(e);
    if (!(Array.isArray(e) ? n === Array.prototype : n === Object.prototype || n === null)) throw TypeError("deepFreezePlainData: non-plain prototype in mint input — plain data only");
    let a = Object.getOwnPropertyDescriptors(e);
    for (let r of Object.keys(a)) {
      let s = a[r];
      if (s && (s.get !== void 0 || s.set !== void 0)) throw TypeError("deepFreezePlainData: accessor property in mint input — plain data only");
    }
    if (Object.getOwnPropertySymbols(e).length > 0) throw TypeError("deepFreezePlainData: symbol-keyed property in mint input — plain data only");
    for (let r of Object.keys(a)) {
      let s = a[r];
      if (s && s.enumerable === false && !(Array.isArray(e) && r === "length")) throw TypeError("deepFreezePlainData: non-enumerable property in mint input — plain data only");
    }
    let l = Array.isArray(e) ? [] : {};
    t.set(e, l);
    for (let r of Object.keys(a)) {
      if (Array.isArray(e) && r === "length") continue;
      if (r === "__proto__" || r === "constructor") throw TypeError("deepFreezePlainData: prototype-key property in mint input — plain data only");
      let s = a[r];
      Object.defineProperty(l, r, { value: f(s?.value, t), enumerable: true, writable: false, configurable: false });
    }
    return Object.freeze(l), l;
  }
  return e;
}
var D = ["panel"];
function os({ hideWhile: e = D, ...t }) {
  return { ...t, hideWhile: e };
}
function uii(e) {
  return async function(o, n, i) {
    if (kVt(n)) return T(e, o, n, i);
    return g(e, o, n, i);
  };
}
function kVt(e) {
  return typeof e === "object" && e !== null && Symbol.asyncIterator in e;
}
function m(e, t) {
  let o = t?.alsoHideWhile ?? [];
  return o.every((n) => e.includes(n)) ? e : [...e, ...o.filter((n) => !e.includes(n))];
}
async function g(e, t, o, n) {
  let i = t.payload().safeParse(o);
  if (!i.success) return t.default;
  let a;
  try {
    let { replied: r } = e.request({ kind: t.kind, payload: i.data, userInvoked: t.userInvoked, hideWhile: m(t.hideWhile, n), holdsTop: t.holdsTop }, n);
    a = await r;
  } catch {
    return t.default;
  }
  if ("cancelled" in a) return t.default;
  let l = t.result().safeParse(a.result);
  return l.success ? l.data : t.default;
}
async function T(e, t, o, n) {
  let i = o[Symbol.asyncIterator](), a = await i.next();
  if (a.done) return t.default;
  let l = t.payload().safeParse(a.value);
  if (!l.success) return i.return?.(void 0), t.default;
  let r = new AbortController(), s = () => r.abort();
  if (n?.signal) if (n.signal.aborted) r.abort();
  else n.signal.addEventListener("abort", s, { once: true });
  let { replied: P, update: h } = e.request({ kind: t.kind, payload: l.data, userInvoked: t.userInvoked, hideWhile: m(t.hideWhile, n), holdsTop: t.holdsTop }, { signal: r.signal, place: n?.place, askOrder: n?.askOrder, armInputGrace: n?.armInputGrace, succeeds: n?.succeeds, onFirstReveal: n?.onFirstReveal, onClaimed: n?.onClaimed, countedAsk: n?.countedAsk }), p;
  (async () => {
    try {
      while (!r.signal.aborted) {
        let d = await i.next();
        if (d.done) return;
        if (r.signal.aborted) return;
        let c = t.payload().safeParse(d.value);
        if (!c.success) continue;
        h(c.data);
      }
    } catch (d) {
      p = d, r.abort();
    }
  })().catch(() => {
  });
  let u;
  try {
    u = await P;
  } finally {
    n?.signal?.removeEventListener("abort", s), i.return?.(void 0);
  }
  if (p !== void 0) throw p;
  if ("cancelled" in u) return t.default;
  let y = t.result().safeParse(u.result);
  return y.success ? y.data : t.default;
}
export {
  G5o,
  _Ke,
  bZ,
  cii,
  dii,
  kVt,
  os,
  u_,
  uii,
  z5o
};
