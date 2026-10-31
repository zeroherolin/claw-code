// darwin/shared/out-of-order.js — Claude Code 2.1.310（darwin）模块 chunk-nzcg9mae.js
import { He } from "../fs/async-hooks.93b1.js";
import { DR, U } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
var Lut = DR(() => a().rowStaged);
function m() {
  return a().attestationEnforcement;
}
function XTs() {
  return m() === "not_enforced";
}
var v = /^[A-Za-z_$][\w$.]{0,63}$/;
function J1e(e) {
  try {
    let t = e instanceof Error ? e.name : typeof e;
    return typeof t === "string" && v.test(t) ? t : "unnamed";
  } catch {
    return "unnamed";
  }
}
function b(e, t) {
  if (e === void 0) return "deliver";
  if (t === e) return "repeat";
  return e === "served" && t === "refused" ? "deliver" : "out_of_order";
}
function g(e) {
  return typeof e === "object" && e !== null && "then" in e && typeof e.then === "function";
}
function y(e, t) {
  if (!g(e)) return;
  Promise.resolve(e).catch((s) => {
    try {
      t?.(J1e(s));
    } catch {
    }
  });
}
function w() {
  let e, t = [], s = false, c = [], f = (r) => () => {
    t = t.filter((n) => n !== r);
  }, h = (r, n, o) => {
    try {
      return y(r.listener(n, f(r)), o), null;
    } catch (i) {
      return J1e(i);
    }
  }, l = ({ verdict: r, onRejected: n }) => {
    e = r;
    let o = t, i = 0, d = [];
    for (let u of o) {
      if (!t.includes(u)) continue;
      i++;
      let S = h(u, r, n);
      if (S !== null) d.push(S);
    }
    if (r !== "served") t = [];
    return { listeners: i, threw: d };
  }, p = () => {
    let r = [];
    while (c.length > 0) r.push(...l(c.shift()).threw);
    return r;
  };
  return { current: () => e, subscribe: (r) => {
    let n = { listener: r }, o = f(n);
    if (e === void 0) return t = [...t, n], o;
    let i = e;
    if (i === "served") t = [...t, n];
    let d = s;
    s = true;
    try {
      let u = r(i, o);
      if (g(u)) Promise.resolve(u).catch(() => {
      });
    } catch (u) {
      throw o(), u;
    } finally {
      if (!d) p(), s = false;
    }
    return o;
  }, publish: (r, n) => {
    let o = c.at(-1)?.verdict ?? e, i = b(o, r);
    if (i === "repeat") return { kind: "repeat" };
    if (i === "out_of_order") return { kind: "out_of_order", basis: o };
    if (c.push({ verdict: r, onRejected: n }), s) return { kind: "queued" };
    s = true;
    try {
      let d = l(c.shift());
      return { kind: "delivered", listeners: d.listeners, threw: [...d.threw, ...p()] };
    } finally {
      c.length = 0, s = false;
    }
  }, reset: () => {
    e = void 0, t = [], s = false, c.length = 0;
  } };
}
var V = new W(() => ({ rowStaged: He(), streamReconnected: He(), attestationEnforcement: "unknown", verdict: w() }));
function a() {
  return V.of(U().host);
}
var JTs = Object.freeze({ current: () => a().verdict.current(), subscribe: (e) => a().verdict.subscribe(e) }), QTs = (e, t) => a().verdict.publish(e, t);
export {
  J1e,
  JTs,
  Lut,
  QTs,
  XTs
};
