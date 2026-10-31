// darwin/ui/chunk-067d565d.js — Claude Code 2.1.310（darwin）模块 chunk-kjz7kbmb.js
import { w } from "./chunk-0ed4c357.js";
import { n } from "../telemetry/render-glyph-cardinality.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { Jh, bc, Og, j } from "../vendor/react/chunk-9a0b1ced.js";
import { En } from "../vendor/react/chunk-0b0bf45d.js";
j();
j();
function y(s) {
  return s !== "";
}
function C(o, a) {
  return r(bc, { children: [a > 0 && e(n, { dimColor: true, children: " · " }), o] }, Og(o) ? o.key ?? a : a);
}
function ve(g) {
  let m = w(5), { children: l } = g, i, c;
  if (m[0] !== l) {
    c = En;
    T: {
      let R = Jh.toArray(l).filter(y);
      if (R.length === 0) {
        c = null;
        break T;
      }
      i = R.map(C);
    }
    m[0] = l, m[1] = i, m[2] = c;
  } else i = m[1], c = m[2];
  if (c !== En) return c;
  let f;
  if (m[3] !== i) f = e(Q, { children: i }), m[3] = i, m[4] = f;
  else f = m[4];
  return f;
}
export {
  ve
};
