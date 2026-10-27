// artifacts/workshop-decisions.wghb.js — Claude Code 2.1.310 模块 chunk-wghbzwhm.js
import { F } from "../context/not-admin-owned.ersa.js";
import { ee } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Z } from "./same-account.bxg8.js";
import { $Be, mnn, gnn } from "./ws-status-note.ky4r.js";
import { D } from "../shared/chunk-6rnejvk7.js";
var Ote = new RegExp(`^${$Be}$`), E = 1, iCr = 16, I = 16, aCr = 16, w = 16, x = 16, lCr = 64;
var O = 65536, f_o = 16;
function g(e) {
  return typeof e === "string" && Ote.test(e);
}
function R(e) {
  if (!D(e)) return "schema document must be an object";
  let s = Object.keys(e).sort(), i = ["fields", "format", "invariants", "island", "key", "maxEntries", "name"], o = i.filter((n) => n !== "invariants");
  for (let n of s) if (!i.includes(n)) return `unknown schema key: ${n}`;
  for (let n of o) if (!(n in e)) return `missing schema key: ${n}`;
  if (e.format !== E) return "unsupported format version";
  if (!g(e.name)) return "name must be a token";
  if (!g(e.island)) return "island must be a token";
  let r = e.maxEntries;
  if (typeof r !== "number" || !Number.isInteger(r) || r < 1 || r > lCr) return `maxEntries must be an integer in 1..${lCr}`;
  if (!D(e.fields)) return "fields must be an object";
  let u = Object.keys(e.fields);
  if (u.length === 0 || u.length > iCr) return `fields must declare 1..${iCr} fields`;
  let k = e.fields;
  for (let n of u) {
    if (!g(n)) return `field name must be a token: ${n}`;
    let c = k[n];
    if (!D(c)) return `field ${n} must be an object`;
    let d = c.nullable;
    if (d !== void 0 && typeof d !== "boolean") return `field ${n}: nullable must be boolean`;
    let m = Object.keys(c).filter((t) => t !== "kind" && t !== "nullable");
    switch (c.kind) {
      case "token":
        if (m.length > 0) return `field ${n}: unknown keys ${m.join(",")}`;
        break;
      case "enum": {
        if (m.some((y) => y !== "values")) return `field ${n}: unknown keys`;
        let t = c.values;
        if (!Array.isArray(t) || t.length < 1 || t.length > I || t.some((y) => !g(y)) || new Set(t).size !== t.length) return `field ${n}: enum values must be 1..${I} unique tokens`;
        break;
      }
      case "tokenArray": {
        if (m.some((p) => p !== "minItems" && p !== "maxItems" && p !== "unique")) return `field ${n}: unknown keys`;
        let { minItems: t, maxItems: y, unique: h } = c;
        if (h !== true) return `field ${n}: tokenArray requires unique: true`;
        if (typeof t !== "number" || typeof y !== "number" || !Number.isInteger(t) || !Number.isInteger(y) || t < 0 || y < t || y > aCr) return `field ${n}: need 0 <= minItems <= maxItems <= ${aCr}`;
        break;
      }
      case "ref": {
        if (m.some((h) => h !== "into")) return `field ${n}: unknown keys`;
        let t = c.into;
        if (typeof t !== "string" || t === n) return `field ${n}: ref.into must name another field`;
        let y = k[t];
        if (!D(y) || y.kind !== "tokenArray") return `field ${n}: ref.into must name a declared tokenArray field`;
        break;
      }
      case "text":
        if (m.length > 0) return `field ${n}: unknown keys ${m.join(",")}`;
        break;
      default:
        return `field ${n}: unknown kind`;
    }
  }
  let l = e.key;
  if (typeof l !== "string" || !u.includes(l)) return "key must name a declared field";
  let f = k[l];
  if (f.kind !== "token" || f.nullable === true) return "key field must be kind token and non-nullable";
  let a = e.invariants;
  if (a !== void 0) {
    if (!Array.isArray(a) || a.length > w) return `invariants must be an array of at most ${w}`;
    for (let [n, c] of a.entries()) {
      let d = v(c, k, u, l);
      if (d !== null) return `invariant ${n}: ${d}`;
    }
  }
  return null;
}
function v(e, s, i, o) {
  if (!D(e)) return "must be an object";
  let r = Object.keys(e).sort(), u = (l, f) => {
    if (!Array.isArray(l) || l.length === 0 || l.length > x || new Set(l).size !== l.length) return `${f} must be 1..${x} unique field names`;
    for (let a of l) {
      if (typeof a !== "string" || !i.includes(a)) return `${f} names undeclared field: ${String(a)}`;
      if (s[a].nullable !== true) return `${f} names non-nullable field: ${a}`;
    }
    return null;
  }, k = (l) => {
    if (!D(l)) return "when must be an object";
    let f = Object.keys(l);
    if (f.length !== 1) return "when must compare exactly one field";
    let a = f[0], n = l[a];
    if (!i.includes(a)) return `when names undeclared field: ${a}`;
    if (!g(n)) return "when must compare against a token";
    let c = s[a];
    if (c.kind === "enum") {
      if (!c.values.includes(n)) return `when compares ${a} against a value outside its enum — dead rule`;
    } else if (c.kind !== "token") return `when field ${a} must be kind token or enum`;
    return null;
  };
  if (r.length === 2 && r[0] === "null" && r[1] === "when") return k(e.when) ?? u(e.null, "null");
  if (r.length === 2 && r[0] === "exactlyOneOf" && r[1] === "when") return k(e.when) ?? u(e.exactlyOneOf, "exactlyOneOf");
  if (r.length === 2 && r[0] === "forKey" && r[1] === "null") {
    if (!g(e.forKey)) return "forKey must be a token";
    return u(e.null, "null");
  }
  return "unknown invariant shape";
}
function KAs(e, s) {
  if (Buffer.byteLength(e, "utf-8") > O) return null;
  let i;
  try {
    i = ee(e);
  } catch {
    return null;
  }
  if (!D(i)) return null;
  let o = Object.keys(i);
  if (o.length !== 1 || o[0] !== "items") return null;
  let r = i.items;
  if (!Array.isArray(r) || r.length > s.maxEntries) return null;
  let u = Object.keys(s.fields).sort(), k = [], l = /* @__PURE__ */ new Set();
  for (let f of r) {
    if (!D(f)) return null;
    let a = Object.keys(f).sort();
    if (a.length !== u.length || a.some((d, m) => d !== u[m])) return null;
    let n = /* @__PURE__ */ Object.create(null);
    for (let d of u) {
      let m = s.fields[d], t = f[d];
      if (t === null) {
        if (m.nullable !== true) return null;
        n[d] = null;
        continue;
      }
      switch (m.kind) {
        case "token":
          if (!g(t)) return null;
          n[d] = t;
          break;
        case "enum":
          if (typeof t !== "string" || !m.values.includes(t)) return null;
          n[d] = t;
          break;
        case "tokenArray": {
          if (!Array.isArray(t) || t.length < m.minItems || t.length > m.maxItems || t.some((y) => !g(y)) || new Set(t).size !== t.length) return null;
          n[d] = t.slice();
          break;
        }
        case "ref": {
          if (typeof t !== "string") return null;
          let y = f[m.into];
          if (!Array.isArray(y) || !y.includes(t)) return null;
          n[d] = t;
          break;
        }
        case "text":
          if (typeof t !== "string" || mnn(t) === null) return null;
          n[d] = t;
          break;
      }
    }
    let c = n[s.key];
    if (typeof c !== "string" || l.has(c)) return null;
    l.add(c), k.push(n);
  }
  for (let f of s.invariants ?? []) for (let a of k) if (!N(f, a, s.key)) return null;
  return k;
}
function N(e, s, i) {
  if ("forKey" in e) {
    if (s[i] !== e.forKey) return true;
    return e.null.every((r) => s[r] === null);
  }
  let o = Object.keys(e.when)[0];
  if (s[o] !== e.when[o]) return true;
  if ("null" in e) return e.null.every((r) => s[r] === null);
  return F(e.exactlyOneOf, (r) => s[r] !== null) === 1;
}
function dCr(e) {
  if (Array.isArray(e)) return `[${e.map((s) => dCr(s) ?? "null").join(",")}]`;
  if (e !== null && typeof e === "object") return `{${Object.keys(e).sort().flatMap((i) => {
    let o = dCr(e[i]);
    return o === void 0 ? [] : [`${JSON.stringify(i)}:${o}`];
  }).join(",")}}`;
  return JSON.stringify(e);
}
function b() {
  let e = Z();
  if (e.interactionSchemas === void 0) e.interactionSchemas = { byName: /* @__PURE__ */ new Map(), islandOwners: /* @__PURE__ */ new Map(), metaVerdicts: /* @__PURE__ */ new Map() }, _({ doc: m_o, enabled: () => S.isOpen(), derive: j });
  return e.interactionSchemas;
}
function _(e) {
  let { name: s, island: i } = e.doc, { byName: o, islandOwners: r } = b();
  if (o.has(s)) throw Error("interaction schema name already registered");
  if (r.has(i)) throw Error("interaction schema island id already owned — one island id, one grammar");
  o.set(s, e), r.set(i, s);
}
function sen(e) {
  let { byName: s, metaVerdicts: i } = b(), o = s.get(e);
  if (o === void 0) return { ok: false, reason: "unknown" };
  let r = i.get(e);
  if (r === void 0) r = R(o.doc), i.set(e, r);
  if (r !== null) return { ok: false, reason: "invalid" };
  return { ok: true, reg: o };
}
function qAs() {
  return [...b().byName.entries()].filter(([, e]) => e.enabled()).map(([e]) => e);
}
function YAs() {
  return [...b().byName.keys()];
}
function XAs(e, s) {
  if (e.derive === void 0) return { ok: true };
  let i;
  try {
    i = e.derive(s);
  } catch {
    return { ok: false };
  }
  if (!D(i)) return { ok: false };
  let o = Object.keys(i);
  if (o.length > f_o) return { ok: false };
  let r = {};
  for (let u of o) {
    let k = i[u];
    if (!g(u) || !g(k)) return { ok: false };
    r[u] = k;
  }
  return { ok: true, derived: r };
}
var m_o = { format: 1, name: "workshop-decisions", island: "ws-decisions", key: "id", maxEntries: 20, fields: { id: { kind: "token" }, opts: { kind: "tokenArray", minItems: 2, maxItems: 5, unique: true }, state: { kind: "enum", values: ["open", "resolved"] }, choice: { kind: "ref", into: "opts", nullable: true }, custom: { kind: "text", nullable: true } }, invariants: [{ when: { state: "open" }, null: ["choice", "custom"] }, { when: { state: "resolved" }, exactlyOneOf: ["choice", "custom"] }, { forKey: "get-started", null: ["custom"] }] };
function j(e) {
  let s = e.map((i) => ({ id: i.id, opts: i.opts.slice(), state: i.state, choice: i.choice, custom: i.custom }));
  return { state: gnn(s) };
}
class A {
  gate = () => false;
  register(e) {
    this.gate = e;
  }
  isOpen() {
    return this.gate();
  }
}
var S = new A();
function JAs(e) {
  S.register(e);
}
export {
  JAs,
  KAs,
  Ote,
  XAs,
  YAs,
  aCr,
  dCr,
  f_o,
  iCr,
  lCr,
  m_o,
  qAs,
  sen
};
