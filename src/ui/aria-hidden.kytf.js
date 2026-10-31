// ui/aria-hidden.kytf.js — Claude Code 2.1.310 模块 chunk-kytfex5e.js
import { eE } from "../shared/chunk-y6x1q9pp.js";
import { w } from "./chunk-zqxc4qtb.js";
import { s, n } from "../telemetry/render-glyph-cardinality.7car.js";
import { wUe, WR, EUe, P_, Yg, cw } from "../shared/xterm-ghostty.n6f6.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
import { b, En } from "../vendor/react/chunk-meds60nn.js";
var nPt = "●", M = 2e3, P = { r: 171, g: 43, b: 63 }, T = { r: 0, g: 0, b: 0 };
function Ife(ae) {
  let a = w(35), { frame: le, messageColor: l, stalledIntensity: X, thinkingIntensity: Y, reducedMotion: Z, time: U } = ae, p = X === void 0 ? 0 : X, i = Y === void 0 ? 0 : Y, he = Z === void 0 ? false : Z, de = U === void 0 ? 0 : U, m = eE();
  if (he) {
    let u = 1 - EUe(de, M);
    let R = i > 0 ? "warning" : l;
    let B = m[R];
    let g2;
    if (a[0] !== B || a[1] !== u || a[2] !== i) {
      g2 = En;
      Re: {
        let S = B ? cw(B) : null;
        if (S) {
          let ce = P_(S, T, 0.5);
          let me = P_(ce, S, WR(u));
          const r3 = e(n, { color: Yg(me), bold: i >= 0.5, children: nPt });
          let t2;
          if (a[4] !== r3) t2 = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: r3 }), a[4] = r3, a[5] = t2;
          else t2 = a[5];
          g2 = t2;
          break Re;
        }
      }
      a[0] = B, a[1] = u, a[2] = i, a[3] = g2;
    } else g2 = a[3];
    if (g2 !== En) return g2;
    const r2 = u < 0.5;
    const t = i >= 0.5;
    let h;
    if (a[6] !== R || a[7] !== r2 || a[8] !== t) h = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: e(n, { color: R, dimColor: r2, bold: t, children: nPt }) }), a[6] = R, a[7] = r2, a[8] = t, a[9] = h;
    else h = a[9];
    return h;
  }
  let g;
  if (a[10] === b) g = wUe(), a[10] = g;
  else g = a[10];
  let q = g, o = q[le % q.length];
  if (p > 0) {
    let I = m[l];
    let r2;
    if (a[11] !== I || a[12] !== o || a[13] !== p) {
      r2 = En;
      Be: {
        let z = I ? cw(I) : null;
        if (z) {
          let ge = P_(z, P, WR(p));
          const t2 = e(n, { color: Yg(ge), children: o });
          let h;
          if (a[15] !== t2) h = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: t2 }), a[15] = t2, a[16] = h;
          else h = a[16];
          r2 = h;
          break Be;
        }
      }
      a[11] = I, a[12] = o, a[13] = p, a[14] = r2;
    } else r2 = a[14];
    if (r2 !== En) return r2;
    let W = p > 0.5 ? "error" : l;
    let t;
    if (a[17] !== W || a[18] !== o) t = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: e(n, { color: W, children: o }) }), a[17] = W, a[18] = o, a[19] = t;
    else t = a[19];
    return t;
  }
  if (i > 0) {
    let k = m[l];
    let y, r2;
    if (a[20] !== k || a[21] !== o || a[22] !== m.warning || a[23] !== i) {
      r2 = En;
      Ie: {
        let E = k ? cw(k) : null;
        let _ = cw(m.warning);
        y = i >= 0.5;
        if (E && _) {
          let be = P_(E, _, WR(i));
          const t2 = e(n, { bold: y, color: Yg(be), children: o });
          let h;
          if (a[26] !== t2) h = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: t2 }), a[26] = t2, a[27] = h;
          else h = a[27];
          r2 = h;
          break Ie;
        }
      }
      a[20] = k, a[21] = o, a[22] = m.warning, a[23] = i, a[24] = y, a[25] = r2;
    } else y = a[24], r2 = a[25];
    if (r2 !== En) return r2;
    let K = i > 0.5 ? "warning" : l;
    let t;
    if (a[28] !== y || a[29] !== K || a[30] !== o) t = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: e(n, { bold: y, color: K, children: o }) }), a[28] = y, a[29] = K, a[30] = o, a[31] = t;
    else t = a[31];
    return t;
  }
  let r;
  if (a[32] !== l || a[33] !== o) r = e(s, { "aria-hidden": true, flexWrap: "wrap", height: 1, width: 2, children: e(n, { color: l, children: o }) }), a[32] = l, a[33] = o, a[34] = r;
  else r = a[34];
  return r;
}
export {
  Ife,
  nPt
};
