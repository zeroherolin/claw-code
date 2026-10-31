// darwin/shared/async-hooks.9e79.js — Claude Code 2.1.310（darwin）模块 chunk-923em3jx.js
import { es, J, cm } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
import { _t, _, ie } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "./environment.js";
import { dirname as m } from "path";
import { AsyncLocalStorage as u } from "async_hooks";
function Ekn(e, t) {
  let n = false;
  for (let o of e) {
    let s = o.deref();
    if (s === void 0) e.delete(o);
    else if (s === t) n = true;
  }
  if (n) return false;
  return e.add(new WeakRef(t)), true;
}
function Tst(e) {
  let t = [];
  for (let n of e) {
    let o = n.deref();
    if (o === void 0) e.delete(n);
    else t.push(o);
  }
  return t;
}
var p = new u(), f = false;
function Wse() {
  return f;
}
function Gpe() {
  return p.getStore() !== void 0;
}
var l = new W(() => /* @__PURE__ */ new Set());
function S() {
  return es(l);
}
function _pi() {
  let e = [];
  for (let t of Tst(S())) {
    let n = t.session?.hookRegistry;
    e.push(n ? n.holder().registeredHooks : t.registeredHooks, n ? n.mainThreadAgentHooks() : t.mainThreadAgentHooks);
  }
  return e;
}
function d() {
}
async function k(e, t) {
  let n = ie();
  try {
    await n.appendFile(e, t);
  } catch {
    await n.mkdir(m(e)).catch(d), await n.appendFile(e, t);
  }
}
class c {
  pendingWrite = Promise.resolve();
  cleanupRegistered = false;
  append(e, t) {
    if (this.pendingWrite = this.pendingWrite.then(k.bind(null, e, t)).catch(d), !this.cleanupRegistered) this.cleanupRegistered = true, _t(() => this.flush());
  }
  flush() {
    return this.pendingWrite;
  }
}
var h = new W(() => new c());
function g() {
  return es(h);
}
function Y(e, t, n, o = "queued") {
  let s = x();
  if (!s) return;
  let r;
  try {
    r = a(e, t, y(n));
  } catch {
    r = a(e, t, { diagnostics_payload_failed: true });
  }
  if (o === "now") try {
    ie().appendFileSync(s, r);
  } catch {
  }
  else g().append(s, r);
}
function y(e) {
  try {
    return (typeof e === "function" ? e() : e) ?? {};
  } catch {
    return { diagnostics_payload_failed: true };
  }
}
function a(e, t, n) {
  let o = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), level: e, event: t, data: n };
  return _(o) + `
`;
}
function BFe() {
  return g().flush();
}
function x() {
  return C() ? void 0 : i.CLAUDE_CODE_DIAGNOSTICS_FILE;
}
function C() {
  return Gpe() ? J() : cm();
}
async function LTt(e, t, n) {
  let o = Date.now();
  Y("info", `${e}_started`);
  try {
    let s = await t(), r = n ? n(s) : {};
    return Y("info", `${e}_completed`, { duration_ms: Date.now() - o, ...r }), s;
  } catch (s) {
    throw Y("error", `${e}_failed`, { duration_ms: Date.now() - o }), s;
  }
}
export {
  BFe,
  Ekn,
  Gpe,
  LTt,
  Tst,
  Wse,
  Y,
  _pi
};
