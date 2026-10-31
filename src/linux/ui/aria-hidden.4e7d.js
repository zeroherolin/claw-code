// linux/ui/aria-hidden.4e7d.js — Claude Code 2.1.310（linux）模块 chunk-ssys45cq.js
import { Zw } from "../shared/chunk-be0ce119.js";
import { w } from "./chunk-0ed4c357.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { pUe, UR, mUe, x_, Yg, dw } from "../shared/xterm-ghostty.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { S, vn } from "../vendor/react/chunk-0b0bf45d.js";
var Nxt = "●", M = 2e3, P = { r: 171, g: 43, b: 63 }, T = { r: 0, g: 0, b: 0 };
function kpe(ae) {
  let a = w(35), { frame: le, messageColor: l, stalledIntensity: X, thinkingIntensity: Y, reducedMotion: Z, time: U } = ae, f = X === void 0 ? 0 : X, i = Y === void 0 ? 0 : Y, he = Z === void 0 ? false : Z, de = U === void 0 ? 0 : U, m = Zw();
  if (he) {
    let C = 1 - mUe(de, M);
    let u = i > 0 ? "warning" : l;
    let R = m[u];
    let g2;
    if (a[0] !== R || a[1] !== C || a[2] !== i) {
      g2 = vn;
      Re: {
        let G = R ? dw(R) : null;
        if (G) {
          let ce = x_(G, T, 0.5);
          let me = x_(ce, G, UR(C));
          const r3 = e(n, { color: Yg(me), bold: i >= 0.5, children: Nxt });
          let t2;
          if (a[4] !== r3) t2 = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: r3 }), a[4] = r3, a[5] = t2;
          else t2 = a[5];
          g2 = t2;
          break Re;
        }
      }
      a[0] = R, a[1] = C, a[2] = i, a[3] = g2;
    } else g2 = a[3];
    if (g2 !== vn) return g2;
    const r2 = C < 0.5;
    const t = i >= 0.5;
    let h;
    if (a[6] !== u || a[7] !== r2 || a[8] !== t) h = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: e(n, { color: u, dimColor: r2, bold: t, children: Nxt }) }), a[6] = u, a[7] = r2, a[8] = t, a[9] = h;
    else h = a[9];
    return h;
  }
  let g;
  if (a[10] === S) g = pUe(), a[10] = g;
  else g = a[10];
  let q = g, o = q[le % q.length];
  if (f > 0) {
    let B = m[l];
    let r2;
    if (a[11] !== B || a[12] !== o || a[13] !== f) {
      r2 = vn;
      Be: {
        let z = B ? dw(B) : null;
        if (z) {
          let ge = x_(z, P, UR(f));
          const t2 = e(n, { color: Yg(ge), children: o });
          let h;
          if (a[15] !== t2) h = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: t2 }), a[15] = t2, a[16] = h;
          else h = a[16];
          r2 = h;
          break Be;
        }
      }
      a[11] = B, a[12] = o, a[13] = f, a[14] = r2;
    } else r2 = a[14];
    if (r2 !== vn) return r2;
    let W = f > 0.5 ? "error" : l;
    let t;
    if (a[17] !== W || a[18] !== o) t = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: e(n, { color: W, children: o }) }), a[17] = W, a[18] = o, a[19] = t;
    else t = a[19];
    return t;
  }
  if (i > 0) {
    let I = m[l];
    let p, r2;
    if (a[20] !== I || a[21] !== o || a[22] !== m.warning || a[23] !== i) {
      r2 = vn;
      Ie: {
        let E = I ? dw(I) : null;
        let _ = dw(m.warning);
        p = i >= 0.5;
        if (E && _) {
          let be = x_(E, _, UR(i));
          const t2 = e(n, { bold: p, color: Yg(be), children: o });
          let h;
          if (a[26] !== t2) h = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: t2 }), a[26] = t2, a[27] = h;
          else h = a[27];
          r2 = h;
          break Ie;
        }
      }
      a[20] = I, a[21] = o, a[22] = m.warning, a[23] = i, a[24] = p, a[25] = r2;
    } else p = a[24], r2 = a[25];
    if (r2 !== vn) return r2;
    let K = i > 0.5 ? "warning" : l;
    let t;
    if (a[28] !== p || a[29] !== K || a[30] !== o) t = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: e(n, { bold: p, color: K, children: o }) }), a[28] = p, a[29] = K, a[30] = o, a[31] = t;
    else t = a[31];
    return t;
  }
  let r;
  if (a[32] !== l || a[33] !== o) r = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: e(n, { color: l, children: o }) }), a[32] = l, a[33] = o, a[34] = r;
  else r = a[34];
  return r;
}
export {
  Nxt,
  kpe
};
