// linux/fs/chunk-41037178.js — Claude Code 2.1.310（linux）模块 chunk-tezcm8zk.js
function xar(e) {
  let t = Object.values(e).filter((n) => typeof n === "number");
  return Object.entries(e).filter(([n, o]) => t.indexOf(+n) === -1).map(([n, o]) => o);
}
function c7o(e, t = "|") {
  return e.map((r) => p7o(r)).join(t);
}
function Par(e, t) {
  if (typeof t === "bigint") return t.toString();
  return t;
}
class A {
  constructor(e) {
    this._getter = e, this._value = void 0;
  }
  get value() {
    let e = this._getter;
    if (e !== void 0) this._value = e(), this._getter = void 0;
    return this._value;
  }
}
function Iar(e) {
  return new A(e);
}
function Oci(e) {
  return e === null || e === void 0;
}
function EEn(e) {
  let t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function Mci(e, t) {
  let r = e / t, n = Math.round(r), o = 4 * Number.EPSILON * Math.max(Math.abs(r), 1);
  if (Math.abs(r - n) < o) return 0;
  return r - n;
}
var z = Symbol("evaluating");
function kEn(e, t, r) {
  let n = void 0;
  Object.defineProperty(e, t, { get() {
    if (n === z) return;
    if (n === void 0) n = z, n = r();
    return n;
  }, set(o) {
    Object.defineProperty(e, t, { value: o });
  }, configurable: true });
}
function Pfe(e, t, r) {
  Object.defineProperty(e, t, { value: r, writable: true, enumerable: true, configurable: true });
}
function Oar(e) {
  let t = Object.getOwnPropertyDescriptor(e, "shape");
  return t?.get ? t.get.raw : t?.value;
}
function p(e) {
  return Oar(e._zod.def) ?? e._zod.def.shape;
}
function v(e, t, r) {
  Object.defineProperty(e, t, { get() {
    let n = r();
    return Pfe(this, t, n), n;
  }, enumerable: true, configurable: true });
}
function k(e, t, r) {
  if (t in e) Pfe(e, t, r);
  else e[t] = r;
}
function h(e, t, r, n) {
  let o = p(t);
  for (let i of r) {
    let u = Object.getOwnPropertyDescriptor(o, i);
    if (!u.enumerable) continue;
    if (u.get) v(e, i, () => {
      let c = t._zod.def.shape[i];
      return n ? n(c, i) : c;
    });
    else k(e, i, n ? n(u.value, i) : u.value);
  }
}
function I(e, t) {
  for (let r of Reflect.ownKeys(t)) {
    let n = Object.getOwnPropertyDescriptor(t, r);
    if (!n.enumerable) continue;
    if (n.get) v(e, r, () => t[r]);
    else k(e, r, n.value);
  }
}
function tSe(...e) {
  let t = {};
  for (let r of e) {
    let n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function Dci(e) {
  return JSON.stringify(e);
}
function Hci(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var u7o = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function TEn(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var Lci = Iar(() => {
  if (BZ.jitless) return false;
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return false;
  try {
    return new Function(""), true;
  } catch (e) {
    return false;
  }
});
function h4t(e) {
  if (TEn(e) === false) return false;
  let t = e.constructor;
  if (t === void 0) return true;
  if (typeof t !== "function") return true;
  let r = t.prototype;
  if (TEn(r) === false) return false;
  if (Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === false) return false;
  return true;
}
function f7o(e) {
  if (h4t(e)) return { ...e };
  if (Array.isArray(e)) return [...e];
  if (e instanceof Map) return new Map(e);
  if (e instanceof Set) return new Set(e);
  return e;
}
var Nci = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function mAt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function I4e(e, t, r) {
  let n = new e._zod.constr(t ?? e._zod.def);
  if (!t || r?.parent) n._zod.parent = e;
  return n;
}
function yd(e) {
  let t = e;
  if (!t) return {};
  if (typeof t === "string") return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  if (delete t.message, typeof t.error === "string") return { ...t, error: () => t.error };
  return t;
}
function p7o(e) {
  if (typeof e === "bigint") return e.toString() + "n";
  if (typeof e === "string") return `"${e}"`;
  return `${e}`;
}
function $ci(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
var Q3r = (() => ({ safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] }))(), m7o = { int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")], uint64: [BigInt(0), BigInt("18446744073709551615")] };
function Kwi(e, t) {
  let r = e._zod.def, n = r.checks;
  if (n && n.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
  let i = {};
  return h(i, e, m(e, t)), I4e(e, tSe(r, { shape: i, checks: [] }));
}
function m(e, t) {
  let r = p(e), n = [];
  for (let o of Reflect.ownKeys(t)) {
    if (!Object.getOwnPropertyDescriptor(r, o)?.enumerable) throw Error(`Unrecognized key: "${String(o)}"`);
    if (t[o]) n.push(o);
  }
  return n;
}
function Vwi(e, t) {
  let r = e._zod.def, n = r.checks;
  if (n && n.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
  let i = new Set(m(e, t)), u = {};
  return h(u, e, Reflect.ownKeys(p(e)).filter((c) => !i.has(c))), I4e(e, tSe(r, { shape: u, checks: [] }));
}
function qwi(e, t) {
  if (!h4t(t)) throw Error("Invalid input to extend: expected a plain object");
  let r = e._zod.def.checks;
  if (r && r.length > 0) {
    let o = p(e);
    for (let i of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(o, i) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return I4e(e, tSe(e._zod.def, { shape: T(e, t) }));
}
function T(e, t) {
  let r = {};
  return h(r, e, Reflect.ownKeys(p(e))), I(r, t), r;
}
function Ywi(e, t) {
  if (!h4t(t)) throw Error("Invalid input to safeExtend: expected a plain object");
  return I4e(e, tSe(e._zod.def, { shape: T(e, t) }));
}
function Xwi(e, t) {
  if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  let r = {};
  h(r, e, Reflect.ownKeys(p(e))), h(r, t, Reflect.ownKeys(p(t)));
  let n = tSe(e._zod.def, { shape: r, get catchall() {
    return t._zod.def.catchall;
  }, checks: t._zod.def.checks ?? [] });
  return I4e(e, n);
}
function Fci(e, t, r, n = "partial") {
  let i = t._zod.def.checks;
  if (i && i.length > 0) throw Error(`.${n}() cannot be used on object schemas containing refinements`);
  let c = r ? new Set(m(t, r)) : void 0, f = {};
  return h(f, t, Reflect.ownKeys(p(t)), e && ((_, y) => c && !c.has(y) ? _ : new e({ type: "optional", innerType: _ }))), I4e(t, tSe(t._zod.def, { shape: f, checks: [] }));
}
function Jwi(e, t, r) {
  let n = r ? new Set(m(t, r)) : void 0, o = {};
  return h(o, t, Reflect.ownKeys(p(t)), (i, u) => n && !n.has(u) ? i : new e({ type: "nonoptional", innerType: i })), I4e(t, tSe(t._zod.def, { shape: o }));
}
function ixe(e, t = 0) {
  if (e.aborted === true) return true;
  for (let r = t; r < e.issues.length; r++) if (e.issues[r]?.continue !== true) return true;
  return false;
}
function Uci(e, t = 0) {
  if (e.aborted === true) return true;
  for (let r = t; r < e.issues.length; r++) if (e.issues[r]?.continue === false) return true;
  return false;
}
function E$e(e, t) {
  return t.map((r) => {
    var n;
    return (n = r).path ?? (n.path = []), r.path.unshift(e), r;
  });
}
function w(e) {
  return typeof e === "string" ? e : e?.message;
}
function g7o(e, t, r) {
  var n;
  for (let o = t; o < e.length; o++) (n = e[o]).schema ?? (n.schema = r);
}
function O4e(e, t, r) {
  var n;
  let o = e.inst?._zod?.traits;
  if (o?.has("$ZodType")) if (o.has("$ZodCheck")) (n = e).schema ?? (n.schema = e.inst);
  else e.schema = e.inst;
  let i = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0, u = e.message ? e.message : w(e.inst?._zod.def?.error?.(e)) ?? w(i?.(e)) ?? w(t?.error?.(e)) ?? w(r.customError?.(e)) ?? w(r.localeError?.(e)) ?? "Invalid input", c = {};
  for (let f of Object.keys(e)) {
    if (f === "inst" || f === "schema" || f === "continue" || f === "input" || f === "__proto__") continue;
    c[f] = e[f];
  }
  if (c.path ?? (c.path = []), c.message = u, t?.reportInput) c.input = e.input;
  return c;
}
var M = /[\uD800-\uDBFF]/;
function Z3r(e) {
  let t = e.length;
  if (!M.test(e)) return t;
  let r = t;
  for (let n = 0; n < t - 1; n++) if ((e.charCodeAt(n) & 64512) === 55296 && (e.charCodeAt(n + 1) & 64512) === 56320) r--, n++;
  return r;
}
function e8r(e) {
  if (Array.isArray(e)) return "array";
  if (typeof e === "string") return "string";
  return "unknown";
}
function Bci(e) {
  let t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "object": {
      if (e === null) return "null";
      if (Array.isArray(e)) return "array";
      let r = e;
      if (r && Object.getPrototypeOf(r) !== Object.prototype && "constructor" in r && r.constructor) return r.constructor.name;
    }
  }
  return t;
}
function y4t(...e) {
  let [t, r, n] = e;
  if (typeof t === "string") return { message: t, code: "custom", input: r, inst: n };
  return { ...t };
}
function C(e, t) {
  for (let r in t) {
    let n = Object.getOwnPropertyDescriptor(t, r);
    if (n.get) Object.defineProperty(e, r, { ...n, enumerable: false });
    else S(e, r, n.value);
  }
  for (let r of Object.getOwnPropertySymbols(t)) S(e, r, t[r]);
}
function sst(e, t, r, n = true) {
  return Object.defineProperty(e, t, { configurable: true, writable: true, enumerable: n, value: r }), r;
}
function h7o(e, t, r) {
  return sst(e, t, r, false);
}
function jci(e, t) {
  for (let r in e) {
    let n = e[r];
    Object.defineProperty(t, r, { configurable: true, enumerable: true, get() {
      return sst(this, r, n(this));
    }, set(o) {
      sst(this, r, o);
    } });
  }
  return t;
}
function S(e, t, r) {
  Object.defineProperty(e, t, { configurable: true, get() {
    return this == null ? r : sst(this, t, r.bind(this));
  }, set(n) {
    sst(this, t, n);
  } });
}
function D(e, t) {
  let r = Object.getPrototypeOf(e);
  return t in r ? void 0 : r;
}
var P, d = false, K = { configurable: true, get() {
  d = true;
  return;
} };
function jw(e, t, r) {
  let n = Object.getPrototypeOf(e._zod);
  if (t in n && P !== e._zod) {
    P = void 0;
    return;
  }
  P = e._zod, Object.defineProperty(n, t, { configurable: true, get() {
    Object.defineProperty(this, t, K);
    let o = d;
    d = false;
    try {
      let i = r(this);
      if (d) delete this[t];
      else Object.defineProperty(this, t, { configurable: true, writable: true, value: i });
      return d = d || o, i;
    } catch (i) {
      throw delete this[t], d = d || o, i;
    }
  }, set(o) {
    Object.defineProperty(this, t, { configurable: true, writable: true, value: o });
  } });
}
function Qwi(e, t, r, n) {
  let o = D(e, t);
  if (!o) return;
  Object.defineProperty(o, t, { configurable: true, get() {
    let i = { configurable: true, writable: true, enumerable: n, value: void 0 };
    return Object.defineProperty(this, t, i), i.value = r(this), Object.defineProperty(this, t, i), i.value;
  }, set(i) {
    Object.defineProperty(this, t, { configurable: true, writable: true, enumerable: n, value: i });
  } });
}
var U = "~constantCatch";
function Wci(e) {
  let t = () => e;
  return t[U] = true, t;
}
var N, hq = Object.freeze({ status: "aborted" }), E = { value: void 0, enumerable: false }, R = "captureStackTrace" in Error ? Error : null;
function L(e) {
  let t = R;
  if (t) {
    let r = t.stackTraceLimit;
    if (typeof r === "number") {
      try {
        t.stackTraceLimit = 0;
      } catch {
        return R = null, new e();
      }
      try {
        return new e();
      } finally {
        t.stackTraceLimit = r;
      }
    }
  }
  return new e();
}
function Cr(e, t, r, n) {
  let o = {};
  function i(s) {
    this.def = s, this.constr = g, this.traits = /* @__PURE__ */ new Set();
  }
  i.prototype = o;
  let u = r, c = u && /* @__PURE__ */ new WeakSet();
  function f(s, l) {
    if (!s._zod) {
      E.value = new i(l);
      try {
        Object.defineProperty(s, "_zod", E);
      } finally {
        E.value = void 0;
      }
    }
    if (s._zod.traits.has(e)) return;
    if (s._zod.traits.add(e), t(s, l), c) {
      let a = Object.getPrototypeOf(s), O = s._zod.constr.prototype, x = a;
      while (x && x !== O) x = Object.getPrototypeOf(x);
      let j = x ?? a;
      if (!c.has(j)) c.add(j), C(j, u);
    }
    let b = g.prototype;
    for (let a in b) {
      if (!Object.prototype.hasOwnProperty.call(b, a)) continue;
      if (!(a in s)) s[a] = b[a].bind(s);
    }
  }
  let _ = n?.Parent ?? Object;
  class y extends _ {
  }
  Object.defineProperty(y, "name", { value: e });
  function g(s) {
    let l = n?.Parent ? L(y) : this;
    f(l, s);
    let b = l._zod.deferred;
    if (b) {
      for (let O of b) O();
      l._zod.deferred = void 0;
    }
    let a = globalThis.__zod_globalConfig?.postProcessor;
    if (a) a(l);
    return l;
  }
  return Object.defineProperty(g, "init", { value: f }), Object.defineProperty(g, Symbol.hasInstance, { value: (s) => {
    if (n?.Parent && s instanceof n.Parent) return true;
    return s?._zod?.traits?.has(e);
  } }), Object.defineProperty(g, "name", { value: e }), g;
}
class M4e extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Mar extends Error {
  constructor(e) {
    super(`Encountered unidirectional transform during encode: ${e}`);
    this.name = "ZodEncodeError";
  }
}
(N = globalThis).__zod_globalConfig ?? (N.__zod_globalConfig = {});
var BZ = globalThis.__zod_globalConfig;
function jZ(e) {
  if (e) Object.assign(BZ, e);
  return BZ;
}
export {
  $ci,
  BZ,
  Bci,
  Cr,
  Dci,
  E$e,
  EEn,
  Fci,
  Hci,
  I4e,
  Iar,
  Jwi,
  Kwi,
  Lci,
  M4e,
  Mar,
  Mci,
  Nci,
  O4e,
  Oar,
  Oci,
  Par,
  Pfe,
  Q3r,
  Qwi,
  TEn,
  Uci,
  Vwi,
  Wci,
  Xwi,
  Ywi,
  Z3r,
  c7o,
  e8r,
  f7o,
  g7o,
  h4t,
  h7o,
  hq,
  ixe,
  jZ,
  jci,
  jw,
  kEn,
  m7o,
  mAt,
  p7o,
  qwi,
  sst,
  tSe,
  u7o,
  xar,
  y4t,
  yd
};
