// linux/shared/chunk-01d7baee.js — Claude Code 2.1.310（linux）模块 chunk-0zs22p6a.js
import { Te } from "./chunk-bdaaea45.js";
import { _, te } from "../fs/gitlab-runner-authentication-token.js";
import { Zno } from "../terminal/ink-renderer.js";
import { Pr } from "./chunk-be0ce119.js";
import { w } from "../ui/chunk-0ed4c357.js";
import { n, ts } from "../telemetry/render-glyph-cardinality.js";
import { Ge } from "../ui/aria-hidden.8741.js";
import { qq } from "./chunk-36233614.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { tv } from "../cli/chunk-631c0fd0.js";
import { TIo } from "./action-not-found.4cf4.js";
import { Gt, be, ee, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
j();
j();
var c = Gt(false);
function emr(r) {
  let s = w(2), { children: t } = r, o;
  if (s[0] !== t) o = e(c.Provider, { value: true, children: t }), s[0] = t, s[1] = o;
  else o = s[1];
  return o;
}
function u() {
  return be(c);
}
function M(r) {
  try {
    let t = te(r), s = _(t), o = r.replaceAll("\\/", "/").replace(/\s+/g, ""), m = s.replace(/\s+/g, "");
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
function tmr(r, t) {
  if (r.length > C) return r;
  let s = (o) => o.replace(A, (m) => tv(m, void 0, { themeName: t }));
  if (!r.includes(Zno)) return s(r);
  return r.split(`
`).map((o) => o.includes(Zno) ? o : s(o)).join(`
`);
}
function jI(r) {
  let l = w(14), { content: t, verbose: s, isError: o, isWarning: m } = r, { columns: d } = Te(), [g] = Pr(), z = u(), h = be(qq), G = s || z, O;
  if (l[0] !== t || l[1] !== g) O = tmr(b(t), g), l[0] = t, l[1] = g, l[2] = O;
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
    if (l[5] !== d || l[6] !== a || l[7] !== h) i2 = f(TIo(a, d, h)), l[5] = d, l[6] = a, l[7] = h, l[8] = i2;
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
  emr,
  jI,
  tmr
};
