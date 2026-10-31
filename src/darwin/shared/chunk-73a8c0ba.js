// darwin/shared/chunk-73a8c0ba.js — Claude Code 2.1.310（darwin）模块 chunk-bb4waq8a.js
import { nt, U } from "../context/not-admin-owned.js";
import { P, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
var VIe = "continue";
function _Cs(t, e, n) {
  if (n && e === VIe && t === VIe + "/") return "/";
  if (e.startsWith("/") && t.length === VIe.length + e.length + 1 && t.startsWith(VIe + e)) return t.slice(VIe.length);
  return t;
}
class o {
  lastResult = null;
  listeners = /* @__PURE__ */ new Set();
  inFlight = null;
}
var l = new nt(() => new o());
function i() {
  return l.of(U());
}
function mvr(t) {
  let e = i();
  e.lastResult = t;
  for (let n of e.listeners) n(t);
}
function SCs() {
  return i().inFlight;
}
function cgo(t) {
  i().inFlight = t;
}
function bCs() {
  mvr(null), i().inFlight = null;
}
function wCs() {
  let [t, e] = y(() => i().lastResult);
  return P(() => {
    let n = i();
    return e(n.lastResult), n.listeners.add(e), () => {
      n.listeners.delete(e);
    };
  }, []), t;
}
export {
  SCs,
  VIe,
  _Cs,
  bCs,
  cgo,
  mvr,
  wCs
};
