// linux/ui/chunk-4425ad7b.js — Claude Code 2.1.310（linux）模块 chunk-63vsgmqn.js
import { w } from "./chunk-0ed4c357.js";
import { Mse, j4e } from "../fs/async-hooks.7959.js";
import { n } from "../telemetry/render-glyph-cardinality.js";
import { ka } from "../shared/action-not-found.e210.js";
import { V } from "../context/chunk-e2302e3b.js";
import { qq } from "../shared/chunk-36233614.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { Gt, be, j } from "../vendor/react/chunk-9a0b1ced.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
j();
j();
var c = Gt(false);
function ePt(m) {
  let i = w(2), { children: o } = m, a;
  if (i[0] !== o) a = e(c.Provider, { value: true, children: o }), i[0] = o, i[1] = a;
  else a = i[1];
  return a;
}
function Pf() {
  let a = w(3), m = be(c), o = be(qq), i = ka("app:toggleTranscript", "Global", "ctrl+o");
  if (m || o) {
    return null;
  }
  let t;
  if (a[0] === S) t = { keyCase: "lower" }, a[0] = t;
  else t = a[0];
  let d;
  if (a[1] !== i) d = e(n, { dimColor: true, children: e(V, { chord: i, action: "expand", parens: true, format: t }) }), a[1] = i, a[2] = d;
  else d = a[2];
  return d;
}
function tb(m) {
  let l = w(11), { count: o, unit: i, expandable: a, hiddenChars: t } = m, d = i === void 0 ? "line" : i, h = a === void 0 ? false : a;
  if (o <= 0) {
    return null;
  }
  let p;
  if (l[0] !== o || l[1] !== d) p = Mse(o, d), l[0] = o, l[1] = d, l[2] = p;
  else p = l[2];
  let s;
  if (l[3] !== t) s = t !== void 0 && t >= 1e3 && ` (~${j4e(t)} KB)`, l[3] = t, l[4] = s;
  else s = l[4];
  let u;
  if (l[5] !== h) u = h && r(Q, { children: [" ", e(Pf, {})] }), l[5] = h, l[6] = u;
  else u = l[6];
  let b;
  if (l[7] !== p || l[8] !== s || l[9] !== u) b = r(n, { dimColor: true, children: [p, s, u] }), l[7] = p, l[8] = s, l[9] = u, l[10] = b;
  else b = l[10];
  return b;
}
export {
  Pf,
  ePt,
  tb
};
