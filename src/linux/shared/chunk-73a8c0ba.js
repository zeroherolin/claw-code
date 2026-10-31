// linux/shared/chunk-73a8c0ba.js — Claude Code 2.1.310（linux）模块 chunk-qrdc45xv.js
import { nt, U } from "../context/not-admin-owned.js";
import { P, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
var UIe = "continue";
function Wks(t, e, n) {
  if (n && e === UIe && t === UIe + "/") return "/";
  if (e.startsWith("/") && t.length === UIe.length + e.length + 1 && t.startsWith(UIe + e)) return t.slice(UIe.length);
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
function Zvr(t) {
  let e = i();
  e.lastResult = t;
  for (let n of e.listeners) n(t);
}
function Gks() {
  return i().inFlight;
}
function Umo(t) {
  i().inFlight = t;
}
function zks() {
  Zvr(null), i().inFlight = null;
}
function Kks() {
  let [t, e] = y(() => i().lastResult);
  return P(() => {
    let n = i();
    return e(n.lastResult), n.listeners.add(e), () => {
      n.listeners.delete(e);
    };
  }, []), t;
}
export {
  Gks,
  Kks,
  UIe,
  Umo,
  Wks,
  Zvr,
  zks
};
