// darwin/shared/chunk-8bf008d9.js — Claude Code 2.1.310（darwin）模块 chunk-bhdett2m.js
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { Tc } from "../context/chunk-3825aa29.js";
function Jse(i, u = 3e5, l) {
  let o = (c) => typeof u === "function" ? u(c) : u, e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = async (...c) => {
    let s = _(c), r = e.get(s);
    if (r && l && !l(r.value, r.timestamp)) {
      if (r.refreshPromise) return r.refreshPromise;
      e.delete(s), r = void 0;
    }
    let h = Date.now();
    if (!r) {
      let f = n.get(s);
      if (f) return f;
      let g = i(...c);
      n.set(s, g);
      try {
        let m = await g;
        if (n.get(s) === g) e.set(s, { value: m, timestamp: Date.now(), refreshing: false, lifetimeMs: o(m) });
        return m;
      } finally {
        if (n.get(s) === g) n.delete(s);
      }
    }
    if (r && h - r.timestamp > r.lifetimeMs && !r.refreshing) {
      r.refreshing = true;
      let f = r, g = i(...c);
      return f.refreshPromise = g, g.then((m) => {
        if (e.get(s) === f) e.set(s, { value: m, timestamp: Date.now(), refreshing: false, lifetimeMs: o(m) });
      }).catch((m) => {
        if (t(String(m), { level: "error" }), e.get(s) === f) e.delete(s);
      }), r.value;
    }
    return e.get(s).value;
  };
  return a.cache = { clear: () => {
    e.clear(), n.clear();
  } }, a;
}
function T1(i, u, l = 100) {
  let o = new Tc({ max: l }), e = (...n) => {
    let a = u(...n), c = o.get(a);
    if (c !== void 0) return c;
    let s = i(...n);
    return o.set(a, s), s;
  };
  return e.cache = { clear: () => o.clear(), size: () => o.size, delete: (n) => o.delete(n), get: (n) => o.peek(n), has: (n) => o.has(n), set: (n, a) => void o.set(n, a) }, e;
}
var d = /* @__PURE__ */ new Set();
function vz(i) {
  return d.add(i), i;
}
function Flr(i, u) {
  let l = [];
  for (let o of u) {
    let e = i.get(o);
    if (e !== void 0) l.push([o, e]);
  }
  i.clear();
  for (let [o, e] of l) i.set(o, e);
}
var R = 128;
function Yst(i, u, l) {
  let o = l?.maxSize ?? R, e = /* @__PURE__ */ new Map();
  d.add(e);
  function n(...a) {
    let c = u ? u(...a) : a[0], s = e.get(c);
    if (s) return s;
    let r = i(...a);
    if (e.size >= o) e.delete(e.keys().next().value);
    return e.set(c, r), r.catch(() => {
      if (e.get(c) === r) e.delete(c);
    }), r;
  }
  return n.cache = e, n;
}
export {
  Flr,
  Jse,
  T1,
  Yst,
  vz
};
