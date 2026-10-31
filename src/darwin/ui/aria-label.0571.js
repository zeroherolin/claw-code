// darwin/ui/aria-label.0571.js — Claude Code 2.1.310（darwin）模块 chunk-49534r9n.js
import { WC } from "../permissions/light-daltonized.js";
import { Ji } from "../shared/chunk-d2c47492.js";
import { w } from "./chunk-0ed4c357.js";
import { n } from "../telemetry/render-glyph-cardinality.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { En } from "../vendor/react/chunk-0b0bf45d.js";
var s = [" ", "▏", "▎", "▍", "▌", "▋", "▊", "▉", "█"], I = { fill: "▰", empty: "▱" }, E = { fill: "█", empty: "░" }, _ = () => WC.hasGeometricShapesInkBleedBug() ? E : I, g = (a) => Math.min(1, Math.max(0, a)), k = (a, t) => {
  let o = Math.floor(a * t), l = [Ji(s.at(-1), o)];
  if (o < t) {
    let i = a * t - o, p = Math.floor(i * (s.length - 1));
    l.push(s[p]);
    let m = t - o - 1;
    if (m > 0) l.push(s[0].repeat(m));
  }
  return l.join("");
};
function hP(a) {
  let T = w(17), { ratio: t, width: o, fillColor: l, emptyColor: i, variant: p } = a, m = p === void 0 ? "block" : p, f, c, h, u, y, P;
  if (T[0] !== i || T[1] !== l || T[2] !== t || T[3] !== m || T[4] !== o) {
    P = En;
    z: {
      let b = g(t);
      if (m === "pill") {
        let { fill: x, empty: A } = _();
        let B = Math.round(b * o);
        P = r(n, { children: [e(n, { color: l, children: Ji(x, B) }), e(n, { color: i, dimColor: i === void 0, children: Ji(A, o - B) })] });
        break z;
      }
      f = n;
      c = l;
      h = i;
      u = `${Math.round(b * 100)}%`;
      y = k(b, o);
    }
    T[0] = i, T[1] = l, T[2] = t, T[3] = m, T[4] = o, T[5] = f, T[6] = c, T[7] = h, T[8] = u, T[9] = y, T[10] = P;
  } else f = T[5], c = T[6], h = T[7], u = T[8], y = T[9], P = T[10];
  if (P !== En) return P;
  let G;
  if (T[11] !== f || T[12] !== c || T[13] !== h || T[14] !== u || T[15] !== y) G = e(f, { color: c, backgroundColor: h, "aria-label": u, children: y }), T[11] = f, T[12] = c, T[13] = h, T[14] = u, T[15] = y, T[16] = G;
  else G = T[16];
  return G;
}
export {
  hP
};
