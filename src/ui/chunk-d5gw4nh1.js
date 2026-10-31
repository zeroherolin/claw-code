// ui/chunk-d5gw4nh1.js — Claude Code 2.1.310 模块 chunk-d5gw4nh1.js
import { w } from "./chunk-zqxc4qtb.js";
import { Bse, Xqe } from "../fs/async-hooks.2k4e.js";
import { n } from "../telemetry/render-glyph-cardinality.7car.js";
import { Ca } from "../shared/action-not-found.ek51.js";
import { q } from "../context/chunk-d05584w8.js";
import { oq } from "../shared/chunk-sf99v8se.js";
import { Q, e, r } from "../vendor/react/chunk-f790ajz4.js";
import { Gt, Se, j } from "../vendor/react/chunk-s8vmszp2.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
j();
j();
var c = Gt(false);
function dPt(m) {
  let i = w(2), { children: o } = m, a;
  if (i[0] !== o) a = e(c.Provider, { value: true, children: o }), i[0] = o, i[1] = a;
  else a = i[1];
  return a;
}
function xp() {
  let a = w(3), m = Se(c), o = Se(oq), i = Ca("app:toggleTranscript", "Global", "ctrl+o");
  if (m || o) {
    return null;
  }
  let t;
  if (a[0] === b) t = { keyCase: "lower" }, a[0] = t;
  else t = a[0];
  let d;
  if (a[1] !== i) d = e(n, { dimColor: true, children: e(q, { chord: i, action: "expand", parens: true, format: t }) }), a[1] = i, a[2] = d;
  else d = a[2];
  return d;
}
function nS(m) {
  let l = w(11), { count: o, unit: i, expandable: a, hiddenChars: t } = m, d = i === void 0 ? "line" : i, h = a === void 0 ? false : a;
  if (o <= 0) {
    return null;
  }
  let p;
  if (l[0] !== o || l[1] !== d) p = Bse(o, d), l[0] = o, l[1] = d, l[2] = p;
  else p = l[2];
  let s;
  if (l[3] !== t) s = t !== void 0 && t >= 1e3 && ` (~${Xqe(t)} KB)`, l[3] = t, l[4] = s;
  else s = l[4];
  let u;
  if (l[5] !== h) u = h && r(Q, { children: [" ", e(xp, {})] }), l[5] = h, l[6] = u;
  else u = l[6];
  let C;
  if (l[7] !== p || l[8] !== s || l[9] !== u) C = r(n, { dimColor: true, children: [p, s, u] }), l[7] = p, l[8] = s, l[9] = u, l[10] = C;
  else C = l[10];
  return C;
}
export {
  dPt,
  nS,
  xp
};
