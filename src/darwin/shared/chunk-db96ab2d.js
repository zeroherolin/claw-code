// darwin/shared/chunk-db96ab2d.js — Claude Code 2.1.310（darwin）模块 chunk-h1g05r4t.js
import { w } from "../ui/chunk-0ed4c357.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { MUe, tte, JPe } from "./chunk-d55dd270.js";
import { bh } from "./chunk-68a6f4fc.js";
import { Gt, Se, P, y, kt, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
j();
j();
var u = Gt({ isTerminalFocused: true, terminalFocusState: "unknown" });
u.displayName = "TerminalFocusContext";
function Wro(c) {
  let l = w(6), { children: r } = c, t = kt(JPe, MUe), n = kt(JPe, tte), i;
  if (l[0] !== t || l[1] !== n) i = { isTerminalFocused: t, terminalFocusState: n }, l[0] = t, l[1] = n, l[2] = i;
  else i = l[2];
  let s = i, a;
  if (l[3] !== r || l[4] !== s) a = e(u.Provider, { value: s, children: r }), l[3] = r, l[4] = s, l[5] = a;
  else a = l[5];
  return a;
}
var d = u;
function Pc() {
  let { isTerminalFocused: c } = Se(d);
  return c;
}
function $fe() {
  let { terminalFocusState: c } = Se(d);
  return c;
}
function R() {
  return v(bh);
}
var i0 = (c, r) => {
  let t = setTimeout(c, r);
  return () => clearTimeout(t);
}, x5e = () => () => {
}, chr = () => null;
function v(c) {
  let r = /* @__PURE__ */ new Map(), t = null, n = c, l = performance.now(), i = 0;
  function s() {
    i = performance.now() - l;
    for (let o of r.keys()) o();
  }
  function a() {
    if ([...r.values()].some(Boolean)) {
      if (t !== null) clearInterval(t);
      else i = performance.now() - l;
      t = setInterval(s, n);
    } else if (t !== null) clearInterval(t), t = null;
  }
  function f(o, m) {
    return r.set(o, m), a(), () => {
      r.delete(o), a();
    };
  }
  return { subscribeKeepAlive(o) {
    return f(o, true);
  }, subscribeFollower(o) {
    return f(o, false);
  }, now() {
    if (t !== null) return i;
    return performance.now() - l;
  }, setTickInterval(o) {
    if (o === n) return;
    n = o, a();
  }, setTimeout(o, m) {
    let b = setTimeout(o, m);
    return () => clearTimeout(b);
  } };
}
var vk = Gt(null), T = bh * 2;
function Gro(c) {
  let l = w(7), { children: r } = c, [t] = y(R), n = Pc(), i, s;
  if (l[0] !== t || l[1] !== n) i = () => {
    t.setTickInterval(n ? bh : T);
  }, s = [t, n], l[0] = t, l[1] = n, l[2] = i, l[3] = s;
  else i = l[2], s = l[3];
  P(i, s);
  let a;
  if (l[4] !== r || l[5] !== t) a = e(vk.Provider, { value: t, children: r }), l[4] = r, l[5] = t, l[6] = a;
  else a = l[6];
  return a;
}
export {
  $fe,
  Gro,
  Pc,
  Wro,
  chr,
  i0,
  vk,
  x5e
};
