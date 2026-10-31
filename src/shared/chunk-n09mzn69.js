// shared/chunk-n09mzn69.js — Claude Code 2.1.310 模块 chunk-n09mzn69.js
import { Ce } from "./chunk-9vjqn6fm.js";
import { _, ee } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Tro } from "../terminal/ink-renderer.pma0.js";
import { Pr } from "./chunk-y6x1q9pp.js";
import { w } from "../ui/chunk-zqxc4qtb.js";
import { n, ts } from "../telemetry/render-glyph-cardinality.7car.js";
import { Ge } from "../ui/aria-hidden.by9c.js";
import { oq } from "./chunk-sf99v8se.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
import { nE } from "../cli/chunk-6kjzjhs7.js";
import { tOo } from "./action-not-found.3j3w.js";
import { Gt, Se, te, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
j();
j();
var c = Gt(false);
function hmr(r) {
  let s = w(2), { children: t } = r, o;
  if (s[0] !== t) o = e(c.Provider, { value: true, children: t }), s[0] = t, s[1] = o;
  else o = s[1];
  return o;
}
function u() {
  return Se(c);
}
function M(r) {
  try {
    let t = ee(r), s = _(t), o = r.replaceAll("\\/", "/").replace(/\s+/g, ""), m = s.replace(/\s+/g, "");
    if (o !== m) return r;
    return _(t, null, 2);
  } catch {
    return r;
  }
}
var P = 1e4;
function b(r) {
  if (r.length > P) return r;
  return r.split(`
`).map(M).join(`
`);
}
var A = /https?:\/\/[^\s"'<>\\\x00-\x1f]+/g, C = 1e5;
function ymr(r, t) {
  if (r.length > C) return r;
  let s = (o) => o.replace(A, (m) => nE(m, void 0, { themeName: t }));
  if (!r.includes(Tro)) return s(r);
  return r.split(`
`).map((o) => o.includes(Tro) ? o : s(o)).join(`
`);
}
function KI(r) {
  let l = w(14), { content: t, verbose: s, isError: o, isWarning: m } = r, { columns: d } = Ce(), [g] = Pr(), z = u(), h = Se(oq), G = s || z, O;
  if (l[0] !== t || l[1] !== g) O = ymr(b(t), g), l[0] = t, l[1] = g, l[2] = O;
  else O = l[2];
  let a = O, N;
  cr: {
    if (G) {
      let i3;
      if (l[3] !== a) i3 = f(a), l[3] = a, l[4] = i3;
      else i3 = l[4];
      N = i3;
      break cr;
    }
    let i2;
    if (l[5] !== d || l[6] !== a || l[7] !== h) i2 = f(tOo(a, d, h)), l[5] = d, l[6] = a, l[7] = h, l[8] = i2;
    else i2 = l[8];
    N = i2;
  }
  let R = N, x = o ? "error" : m ? "warning" : void 0, i;
  if (l[9] !== R) i = e(ts, { children: R }), l[9] = R, l[10] = i;
  else i = l[10];
  let v;
  if (l[11] !== x || l[12] !== i) v = e(Ge, { children: e(n, { color: x, children: i }) }), l[11] = x, l[12] = i, l[13] = v;
  else v = l[13];
  return v;
}
function f(r) {
  return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g, "");
}
export {
  KI,
  hmr,
  ymr
};
