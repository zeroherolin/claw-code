// darwin/ui/chunk-1dc08646.js — Claude Code 2.1.310（darwin）模块 chunk-dxkd5eqj.js
import { w } from "./chunk-0ed4c357.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { Zr } from "../shared/chunk-f81ec543.js";
import { Ma, tS, Go, xs, Je } from "./aria-hidden.aa9d.js";
import { MD, Ch } from "../core/conversation-engine.js";
import { cr } from "./chunk-783db08b.js";
import { we } from "./keybinding-auto-hints.js";
import { Cxt, Oto, zie, dmr, Mto, Hto, Dto } from "../telemetry/cedar-ember-confirmed.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { A, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { b, En } from "../vendor/react/chunk-0b0bf45d.js";
j();
function ge() {
}
function hPe(ce) {
  let t = w(55), { offer: o, entry: l, credentials: d, onDone: a } = ce, [u, I] = y(false), T = A(false), C = Ma(Zr), { refusedWithin: h, noteRefused: v } = Go(), K = tS(), m, i, E, f, R, z, V, x, g, W, D, U, O, P, S;
  if (t[0] !== u || t[1] !== d || t[2] !== l || t[3] !== C || t[4] !== v || t[5] !== o || t[6] !== a || t[7] !== h || t[8] !== K) {
    z = En;
    io: {
      let c = MD();
      let L = zie(o);
      let H2;
      if (t[24] !== o) H2 = Oto(o), t[24] = o, t[25] = H2;
      else H2 = t[25];
      let J = H2;
      let Y2;
      if (t[26] !== C || t[27] !== v || t[28] !== h) Y2 = function N2() {
        if (C() || h(Zr)) {
          return v(), true;
        }
        return false;
      }, t[26] = C, t[27] = v, t[28] = h, t[29] = Y2;
      else Y2 = t[29];
      let N = Y2;
      let le;
      if (t[30] !== l || t[31] !== o || t[32] !== a || t[33] !== N) le = function E2() {
        if (T.current || N()) {
          return;
        }
        T.current = true, a(Mto(l, o));
      }, t[30] = l, t[31] = o, t[32] = a, t[33] = N, t[34] = le;
      else le = t[34];
      E = le;
      S = function S2() {
        if (T.current || N()) {
          return;
        }
        T.current = true, I(true), Dto(l, d, o).then(a).catch(() => {
          a({ outcome: "unavailable", text: Ch(o.origin === "wall" ? c.unconfirmedLine : c.unconfirmedAnytimeLine, L) });
        });
      };
      if (u) {
        const Q2 = Ch(c.confirmTitle, L);
        let ue;
        if (t[35] === b) ue = e(n, { dimColor: true, children: "Resetting your limits… this usually takes a few seconds" }), t[35] = ue;
        else ue = t[35];
        z = e(we, { title: Q2, onCancel: ge, exitOnCtrlCD: true, color: "suggestion", hideInputGuide: true, children: ue });
        break io;
      }
      i = we;
      U = Ch(c.confirmTitle, L);
      O = E;
      P = "suggestion";
      let Q;
      if (t[36] !== J) Q = J === void 0 ? null : e(n, { children: J }), t[36] = J, t[37] = Q;
      else Q = t[37];
      R = r(s, { flexDirection: "column", children: [Q, e(n, { children: Ch(c.confirmBody, L) }), e(n, { dimColor: true, children: Ch(c.confirmDetail, L) })] });
      m = cr;
      f = N;
      V = K;
      x = Zr;
      g = true;
      W = Ch(c.confirmYes, L);
      D = Ch(c.confirmNo, L);
    }
    t[0] = u, t[1] = d, t[2] = l, t[3] = C, t[4] = v, t[5] = o, t[6] = a, t[7] = h, t[8] = K, t[9] = m, t[10] = i, t[11] = E, t[12] = f, t[13] = R, t[14] = z, t[15] = V, t[16] = x, t[17] = g, t[18] = W, t[19] = D, t[20] = U, t[21] = O, t[22] = P, t[23] = S;
  } else m = t[9], i = t[10], E = t[11], f = t[12], R = t[13], z = t[14], V = t[15], x = t[16], g = t[17], W = t[18], D = t[19], U = t[20], O = t[21], P = t[22], S = t[23];
  if (z !== En) return z;
  let H;
  if (t[38] !== m || t[39] !== E || t[40] !== f || t[41] !== V || t[42] !== x || t[43] !== g || t[44] !== W || t[45] !== D || t[46] !== S) H = e(m, { refuseInput: f, openedAt: V, windowMs: x, hideIndexes: g, confirmLabel: W, cancelLabel: D, onConfirm: S, onCancel: E }), t[38] = m, t[39] = E, t[40] = f, t[41] = V, t[42] = x, t[43] = g, t[44] = W, t[45] = D, t[46] = S, t[47] = H;
  else H = t[47];
  let Y;
  if (t[48] !== i || t[49] !== R || t[50] !== H || t[51] !== U || t[52] !== O || t[53] !== P) Y = r(i, { title: U, onCancel: O, color: P, children: [R, H] }), t[48] = i, t[49] = R, t[50] = H, t[51] = U, t[52] = O, t[53] = P, t[54] = Y;
  else Y = t[54];
  return Y;
}
j();
function Re(S) {
  return { label: Cxt(S), value: S.kind };
}
function We(c) {
  return { label: c.text, value: c.kind, disabled: true };
}
function Mat(ce) {
  let t = w(30), { offers: o, unusable: l, entry: d, credentials: a, onDone: u } = ce, [I, T] = y(null), C = A(false), h = Ma(Zr), { refusedWithin: v, noteRefused: K } = Go();
  if (I !== null) {
    let m2;
    if (t[0] !== I || t[1] !== a || t[2] !== d || t[3] !== u) m2 = e(hPe, { offer: I, entry: d, credentials: a, onDone: u }), t[0] = I, t[1] = a, t[2] = d, t[3] = u, t[4] = m2;
    else m2 = t[4];
    return m2;
  }
  let m;
  if (t[5] !== h || t[6] !== K || t[7] !== v) m = function i2() {
    if (h() || v(Zr)) {
      return K(), true;
    }
    return false;
  }, t[5] = h, t[6] = K, t[7] = v, t[8] = m;
  else m = t[8];
  let i = m, E;
  if (t[9] !== d || t[10] !== o || t[11] !== u || t[12] !== i) E = function f2() {
    if (C.current || i()) {
      return;
    }
    C.current = true, u(Hto(d, o));
  }, t[9] = d, t[10] = o, t[11] = u, t[12] = i, t[13] = E;
  else E = t[13];
  let f = E, R;
  if (t[14] !== d || t[15] !== o || t[16] !== i) R = function g2(z) {
    let x = o.find((V) => V.kind === z);
    if (x === void 0 || C.current || i()) {
      return;
    }
    dmr(d, x), T(x);
  }, t[14] = d, t[15] = o, t[16] = i, t[17] = R;
  else R = t[17];
  let g = R, W;
  if (t[18] !== o || t[19] !== l) W = [...o.map(Re), ...l.map(We)], t[18] = o, t[19] = l, t[20] = W;
  else W = t[20];
  let D = W, U;
  if (t[21] === b) U = MD(), t[21] = U;
  else U = t[21];
  let O;
  if (t[22] !== g || t[23] !== f || t[24] !== D || t[25] !== i) O = e(Je, { options: D, onChange: g, onCancel: f, refuseInput: i, selectedValue: xs, hideIndexes: true, visibleOptionCount: D.length }), t[22] = g, t[23] = f, t[24] = D, t[25] = i, t[26] = O;
  else O = t[26];
  let P;
  if (t[27] !== f || t[28] !== O) P = e(we, { title: U.chooseTitle, onCancel: f, color: "suggestion", children: O }), t[27] = f, t[28] = O, t[29] = P;
  else P = t[29];
  return P;
}
export {
  Mat,
  hPe
};
