// linux/ui/chunk-1dc08646.js — Claude Code 2.1.310（linux）模块 chunk-338c6mgq.js
import { w } from "./chunk-0ed4c357.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { Zr } from "../shared/chunk-f81ec543.js";
import { Oa, eb, Wo, xs, Je } from "./aria-hidden.aa9d.js";
import { PL, Th } from "../core/conversation-engine.js";
import { dr } from "./chunk-783db08b.js";
import { we } from "./keybinding-auto-hints.js";
import { hxt, ato, Nie, Vpr, lto, dto, cto } from "../telemetry/cedar-ember-confirmed.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { S, vn } from "../vendor/react/chunk-0b0bf45d.js";
j();
function ge() {
}
function pPe(ce) {
  let t = w(55), { offer: o, entry: l, credentials: d, onDone: a } = ce, [u, I] = y(false), T = C(false), b = Oa(Zr), { refusedWithin: h, noteRefused: v } = Wo(), R = eb(), m, i, E, f, W, z, V, x, g, U, D, P, O, N, L;
  if (t[0] !== u || t[1] !== d || t[2] !== l || t[3] !== b || t[4] !== v || t[5] !== o || t[6] !== a || t[7] !== h || t[8] !== R) {
    z = vn;
    io: {
      let c = PL();
      let H = Nie(o);
      let K2;
      if (t[24] !== o) K2 = ato(o), t[24] = o, t[25] = K2;
      else K2 = t[25];
      let J = K2;
      let Y2;
      if (t[26] !== b || t[27] !== v || t[28] !== h) Y2 = function A2() {
        if (b() || h(Zr)) {
          return v(), true;
        }
        return false;
      }, t[26] = b, t[27] = v, t[28] = h, t[29] = Y2;
      else Y2 = t[29];
      let A = Y2;
      let le;
      if (t[30] !== l || t[31] !== o || t[32] !== a || t[33] !== A) le = function E2() {
        if (T.current || A()) {
          return;
        }
        T.current = true, a(lto(l, o));
      }, t[30] = l, t[31] = o, t[32] = a, t[33] = A, t[34] = le;
      else le = t[34];
      E = le;
      L = function L2() {
        if (T.current || A()) {
          return;
        }
        T.current = true, I(true), cto(l, d, o).then(a).catch(() => {
          a({ outcome: "unavailable", text: Th(o.origin === "wall" ? c.unconfirmedLine : c.unconfirmedAnytimeLine, H) });
        });
      };
      if (u) {
        const Q2 = Th(c.confirmTitle, H);
        let ue;
        if (t[35] === S) ue = e(n, { dimColor: true, children: "Resetting your limits… this usually takes a few seconds" }), t[35] = ue;
        else ue = t[35];
        z = e(we, { title: Q2, onCancel: ge, exitOnCtrlCD: true, color: "suggestion", hideInputGuide: true, children: ue });
        break io;
      }
      i = we;
      P = Th(c.confirmTitle, H);
      O = E;
      N = "suggestion";
      let Q;
      if (t[36] !== J) Q = J === void 0 ? null : e(n, { children: J }), t[36] = J, t[37] = Q;
      else Q = t[37];
      W = r(s, { flexDirection: "column", children: [Q, e(n, { children: Th(c.confirmBody, H) }), e(n, { dimColor: true, children: Th(c.confirmDetail, H) })] });
      m = dr;
      f = A;
      V = R;
      x = Zr;
      g = true;
      U = Th(c.confirmYes, H);
      D = Th(c.confirmNo, H);
    }
    t[0] = u, t[1] = d, t[2] = l, t[3] = b, t[4] = v, t[5] = o, t[6] = a, t[7] = h, t[8] = R, t[9] = m, t[10] = i, t[11] = E, t[12] = f, t[13] = W, t[14] = z, t[15] = V, t[16] = x, t[17] = g, t[18] = U, t[19] = D, t[20] = P, t[21] = O, t[22] = N, t[23] = L;
  } else m = t[9], i = t[10], E = t[11], f = t[12], W = t[13], z = t[14], V = t[15], x = t[16], g = t[17], U = t[18], D = t[19], P = t[20], O = t[21], N = t[22], L = t[23];
  if (z !== vn) return z;
  let K;
  if (t[38] !== m || t[39] !== E || t[40] !== f || t[41] !== V || t[42] !== x || t[43] !== g || t[44] !== U || t[45] !== D || t[46] !== L) K = e(m, { refuseInput: f, openedAt: V, windowMs: x, hideIndexes: g, confirmLabel: U, cancelLabel: D, onConfirm: L, onCancel: E }), t[38] = m, t[39] = E, t[40] = f, t[41] = V, t[42] = x, t[43] = g, t[44] = U, t[45] = D, t[46] = L, t[47] = K;
  else K = t[47];
  let Y;
  if (t[48] !== i || t[49] !== W || t[50] !== K || t[51] !== P || t[52] !== O || t[53] !== N) Y = r(i, { title: P, onCancel: O, color: N, children: [W, K] }), t[48] = i, t[49] = W, t[50] = K, t[51] = P, t[52] = O, t[53] = N, t[54] = Y;
  else Y = t[54];
  return Y;
}
j();
function Re(L) {
  return { label: hxt(L), value: L.kind };
}
function We(c) {
  return { label: c.text, value: c.kind, disabled: true };
}
function Dat(ce) {
  let t = w(30), { offers: o, unusable: l, entry: d, credentials: a, onDone: u } = ce, [I, T] = y(null), b = C(false), h = Oa(Zr), { refusedWithin: v, noteRefused: R } = Wo();
  if (I !== null) {
    let m2;
    if (t[0] !== I || t[1] !== a || t[2] !== d || t[3] !== u) m2 = e(pPe, { offer: I, entry: d, credentials: a, onDone: u }), t[0] = I, t[1] = a, t[2] = d, t[3] = u, t[4] = m2;
    else m2 = t[4];
    return m2;
  }
  let m;
  if (t[5] !== h || t[6] !== R || t[7] !== v) m = function i2() {
    if (h() || v(Zr)) {
      return R(), true;
    }
    return false;
  }, t[5] = h, t[6] = R, t[7] = v, t[8] = m;
  else m = t[8];
  let i = m, E;
  if (t[9] !== d || t[10] !== o || t[11] !== u || t[12] !== i) E = function f2() {
    if (b.current || i()) {
      return;
    }
    b.current = true, u(dto(d, o));
  }, t[9] = d, t[10] = o, t[11] = u, t[12] = i, t[13] = E;
  else E = t[13];
  let f = E, W;
  if (t[14] !== d || t[15] !== o || t[16] !== i) W = function g2(z) {
    let x = o.find((V) => V.kind === z);
    if (x === void 0 || b.current || i()) {
      return;
    }
    Vpr(d, x), T(x);
  }, t[14] = d, t[15] = o, t[16] = i, t[17] = W;
  else W = t[17];
  let g = W, U;
  if (t[18] !== o || t[19] !== l) U = [...o.map(Re), ...l.map(We)], t[18] = o, t[19] = l, t[20] = U;
  else U = t[20];
  let D = U, P;
  if (t[21] === S) P = PL(), t[21] = P;
  else P = t[21];
  let O;
  if (t[22] !== g || t[23] !== f || t[24] !== D || t[25] !== i) O = e(Je, { options: D, onChange: g, onCancel: f, refuseInput: i, selectedValue: xs, hideIndexes: true, visibleOptionCount: D.length }), t[22] = g, t[23] = f, t[24] = D, t[25] = i, t[26] = O;
  else O = t[26];
  let N;
  if (t[27] !== f || t[28] !== O) N = e(we, { title: P.chooseTitle, onCancel: f, color: "suggestion", children: O }), t[27] = f, t[28] = O, t[29] = N;
  else N = t[29];
  return N;
}
export {
  Dat,
  pPe
};
