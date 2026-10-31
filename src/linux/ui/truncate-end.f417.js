// linux/ui/truncate-end.f417.js — Claude Code 2.1.310（linux）模块 chunk-w50tda00.js
import { w } from "./chunk-0ed4c357.js";
import { ds } from "../shared/chunk-9bbd1b38.js";
import { Ft } from "../shared/chunk-d2c47492.js";
import { Goe } from "../terminal/xterm-ghostty.js";
import { le } from "../shared/chunk-4563156b.js";
import { rt, s, n, ts, Jie, Ml, Ys } from "../telemetry/render-glyph-cardinality.js";
import { Of, Eg, kF } from "../terminal/ink-renderer.js";
import { Pc } from "../shared/chunk-db96ab2d.js";
import { xi } from "../terminal/left-arrow-blocked.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { Q_ } from "../computer-use/native-auto-updater-skipped-unverified-release.js";
import { aw } from "../telemetry/select-stray-click-dropped.js";
import { wT, m6e, FR, au } from "./aria-hidden.aa9d.js";
import { hE } from "./keybinding-auto-hints.js";
import { u8t, L6, WI, Sd, N6 } from "./truncate-end.fba9.js";
import { Txt } from "./flex-start.7fbd.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { Jh, Gt, Og, be, C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
var Ze = 32, oe = 2, ee = 2, Ce = 2, Pe = "wrap-trim", De = true, we = Gt(void 0), xe = Gt(false), pe = Gt(false);
function en({ children: o, ...t }) {
  let d = ds(Te()), a = C(null), [u] = y(() => /* @__PURE__ */ new Set()), l = Ml(() => {
    let [i] = u;
    return i && Ys(i).width || a.current && Ys(a.current).width || d.columns;
  }), x = aw(), [k] = y(() => /* @__PURE__ */ new WeakMap()), p = Jh.toArray(o), f = p.filter(Ge), b = Math.min(Math.max(0, ...f.map((i) => le(N6(i.props.label)))), Math.max(Ze, l - ee - oe - Math.max(Txt, ...f.map((i) => ze(i.props.children))))), m = l - ee - b - oe < Txt, E = f.filter((i) => !P(i.props.children, Y)), v = L6(t.isDisabled), S = m ? l - ee - Ce : l - ee - b - oe, [L, h, T] = au(void 0), [F, A] = y(void 0), I = C(null), { focusManager: X } = be(Eg), W = Q_({ isActive: true, columns: S, backspaceExitsOnEmpty: false, onExit: () => N(true, true), onCancel: () => N(false), onExitUp: () => N(true, true), onExitDown: () => N(true, true) });
  function N(i, M = false) {
    let c = T();
    if (c === void 0) return true;
    let D = f.find((O) => O.key === c.key)?.props.children, g = W.queryRef.current, R = i && g !== c.from && P(D, G) ? D.props.validate?.(g) ?? null : null;
    if (R !== null && M) return A({ draft: g, reason: R }), false;
    if (h(void 0), A(void 0), I.current && X?.activeElement === I.current) X.blur();
    if (!i || R !== null || !P(D, G) || D.props.disabled) return true;
    if (g !== c.from) Se(k, D.props, g), D.props.onChange(g);
    return true;
  }
  function q(i) {
    let M = i?.props.children;
    if (!P(M, G) || M.props.disabled || typeof i?.key !== "string") return Tn(M, k);
    let c = { key: i.key, from: Mn(M.props, k) };
    return { accept: () => {
      N(true), W.setQuery(c.from), h(c);
    } };
  }
  let B = p.map((i, M) => {
    if (!Ge(i)) return Og(i) && i.type === Sd.Heading ? i : e(Sd.Heading, { children: i }, Og(i) ? i.key : M);
    let { children: c } = i.props, D = N6(i.props.label), g = L?.key === i.key && F?.draft === W.query ? F.reason : void 0, R = g ?? N6(i.props.description), O = R ? Ft(Of(R, Math.max(1, l - ee), Pe), `
`) + 1 : 0, V = !(!v || t.onDisabledRowClick !== void 0) || L?.key === i.key ? void 0 : q(i).accept, J = P(c, re) || P(c, ie) || P(c, se) ? ze(c) : 0, U = e(Qe, { label: D, description: R, ink: i.props.ink, refused: g !== void 0, onClick: V && ((Z) => {
      if (x(Z) || L6(t.isDisabled) && t.onDisabledRowClick === void 0) return;
      V();
    }), labelColumn: b, stacked: m, targetWidth: Math.max(0, Math.min(J, S)), rowLines: P(c, Y) ? void 0 : u, children: e(we, { value: L?.key === i.key && !v && P(c, G) && !c.props.disabled ? { editor: W, room: S, input: I, end: N } : void 0, children: c }) });
    return P(c, Y) ? e(Sd.Heading, { children: U }, i.key) : e(Sd.Item, { declareCursor: L?.key !== i.key, lines: (m ? 2 : 1) + O, children: U }, i.key);
  });
  if (E.length === 0) return r(s, { ref: a, flexDirection: "column", children: [B.length === 0 && t.emptyMessage && e(n, { dimColor: true, children: t.emptyMessage }), B.map((i, M) => e(FR, { isFocused: false, styled: false, children: i }, Og(i) ? i.key : M))] });
  let _ = e(Sd, { ...t, rowClick: "move", onFocus: (i) => {
    if (E[i]?.key !== T()?.key) N(true);
    t.onFocus?.(i);
  }, onSelect: (i) => {
    if (T() !== void 0) {
      N(true, true);
      return;
    }
    q(E[i]).accept?.();
  }, onRowKeyDown: (i, M) => {
    if (T() !== void 0) {
      W.handleKeyDown(i);
      return;
    }
    if (i.ctrl || i.meta) return;
    let c = q(E[M]), D = i.key === " " ? c.accept : i.key === "left" ? c.previous : i.key === "right" ? c.next : void 0;
    if (D === void 0) return;
    i.preventDefault(), D();
  }, children: B });
  return e(s, { ref: a, flexDirection: "column", children: e(xe, { value: v, children: _ }) });
}
function Qe(o) {
  let h = w(54), { label: t, description: d, ink: a, refused: u, onClick: l, labelColumn: x, stacked: k, targetWidth: p, rowLines: f, children: b } = o, m = WI(), E = rt(), [v, S] = m6e(l !== void 0), L = be(u8t);
  if (E) {
    let T2;
    if (h[0] !== t) T2 = r(n, { children: [t, ","] }), h[0] = t, h[1] = T2;
    else T2 = h[1];
    let F2;
    if (h[2] !== b || h[3] !== T2) F2 = r(s, { children: [T2, b] }), h[2] = b, h[3] = T2, h[4] = F2;
    else F2 = h[4];
    let A2;
    if (h[5] !== d) A2 = d && e(n, { children: d }), h[5] = d, h[6] = A2;
    else A2 = h[6];
    let I2;
    if (h[7] !== F2 || h[8] !== A2) I2 = r(s, { flexDirection: "column", children: [F2, A2] }), h[7] = F2, h[8] = A2, h[9] = I2;
    else I2 = h[9];
    return I2;
  }
  let T;
  if (h[10] !== f) T = (X) => {
    let W = X?.parentNode;
    if (!f || !W) {
      return;
    }
    return f.add(W), () => {
      f.delete(W);
    };
  }, h[10] = f, h[11] = T;
  else T = h[11];
  const F = k ? "column" : "row", A = k ? void 0 : x, I = k ? 0 : oe, N = a === "locked", q = m && a !== "locked" ? "suggestion" : void 0;
  let B;
  if (h[12] !== t || h[13] !== N || h[14] !== q) B = e(n, { dimColor: N, color: q, wrap: "truncate-end", children: t }), h[12] = t, h[13] = N, h[14] = q, h[15] = B;
  else B = h[15];
  let _;
  if (h[16] !== A || h[17] !== I || h[18] !== B) _ = e(s, { width: A, marginRight: I, flexShrink: 0, children: B }), h[16] = A, h[17] = I, h[18] = B, h[19] = _;
  else _ = h[19];
  const i = k ? Ce : 0, M = v ? wT : void 0;
  let c;
  if (h[20] !== L || h[21] !== l) c = l && ((D) => {
    if (!L(D)) l(D);
  }), h[20] = L, h[21] = l, h[22] = c;
  else c = h[22];
  let g;
  if (h[23] !== l || h[24] !== S) g = l && (() => S(true)), h[23] = l, h[24] = S, h[25] = g;
  else g = h[25];
  let R;
  if (h[26] !== l || h[27] !== S) R = l && (() => S(false)), h[26] = l, h[27] = S, h[28] = R;
  else R = h[28];
  const O = a !== void 0;
  let K;
  if (h[29] !== b || h[30] !== O) K = e(pe, { value: O, children: b }), h[29] = b, h[30] = O, h[31] = K;
  else K = h[31];
  let V;
  if (h[32] !== M || h[33] !== c || h[34] !== g || h[35] !== R || h[36] !== K || h[37] !== p) V = e(s, { minWidth: p, backgroundColor: M, onClick: c, onMouseEnter: g, onMouseLeave: R, children: K }), h[32] = M, h[33] = c, h[34] = g, h[35] = R, h[36] = K, h[37] = p, h[38] = V;
  else V = h[38];
  let J;
  if (h[39] !== V || h[40] !== i) J = e(s, { paddingLeft: i, children: V }), h[39] = V, h[40] = i, h[41] = J;
  else J = h[41];
  let U;
  if (h[42] !== J || h[43] !== F || h[44] !== _) U = r(s, { flexDirection: F, children: [_, J] }), h[42] = J, h[43] = F, h[44] = _, h[45] = U;
  else U = h[45];
  let Z;
  if (h[46] !== d || h[47] !== u || h[48] !== f) Z = d && e(n, { dimColor: !u, color: u ? "error" : void 0, wrap: f === void 0 ? "truncate-end" : Pe, children: d }), h[46] = d, h[47] = u, h[48] = f, h[49] = Z;
  else Z = h[49];
  let Je;
  if (h[50] !== T || h[51] !== U || h[52] !== Z) Je = r(s, { ref: T, flexDirection: "column", children: [U, Z] }), h[50] = T, h[51] = U, h[52] = Z, h[53] = Je;
  else Je = h[53];
  return Je;
}
function H(o) {
  let m = w(15), { spoken: t, disabled: d, before: a, after: u, children: l } = o, x = d === void 0 ? false : d, k = WI(), p = be(pe);
  if (rt()) {
    const b2 = x && ", unavailable";
    let E2;
    if (m[0] !== t || m[1] !== b2) E2 = r(n, { children: [t, b2] }), m[0] = t, m[1] = b2, m[2] = E2;
    else E2 = m[2];
    return E2;
  }
  const b = x || p;
  let E;
  if (m[3] !== a) E = a && e(n, { dimColor: true, children: a }), m[3] = a, m[4] = E;
  else E = m[4];
  const v = k && !x && !p ? "suggestion" : void 0;
  let S;
  if (m[5] !== l || m[6] !== v) S = e(n, { color: v, children: l }), m[5] = l, m[6] = v, m[7] = S;
  else S = m[7];
  let L;
  if (m[8] !== u) L = u && e(n, { dimColor: true, children: u }), m[8] = u, m[9] = L;
  else L = m[9];
  let h;
  if (m[10] !== b || m[11] !== E || m[12] !== S || m[13] !== L) h = r(n, { dimColor: b, wrap: "truncate-end", children: [E, S, L] }), m[10] = b, m[11] = E, m[12] = S, m[13] = L, m[14] = h;
  else h = m[14];
  return h;
}
function Ee(o) {
  let d = w(2), { children: t } = o, a;
  if (d[0] !== t) a = e(Q, { children: t }), d[0] = t, d[1] = a;
  else a = d[1];
  return a;
}
function re(o) {
  let l = w(4), { value: t, disabled: d } = o;
  const a = String(t), u = String(t);
  let x;
  if (l[0] !== d || l[1] !== a || l[2] !== u) x = e(H, { spoken: a, disabled: d, children: u }), l[0] = d, l[1] = a, l[2] = u, l[3] = x;
  else x = l[3];
  return x;
}
function ie(o) {
  let x = w(8), { value: t, options: d, disabled: a } = o, u = be(xe), l = WI(), k;
  if (x[0] !== d || x[1] !== t) k = d.find((p) => p.value === t)?.label ?? t, x[0] = d, x[1] = t, x[2] = k;
  else k = x[2];
  let f = k, b = !a && !u && (l || !De);
  const m = b ? "‹ " : void 0, E = b ? " ›" : void 0;
  let v;
  if (x[3] !== a || x[4] !== f || x[5] !== m || x[6] !== E) v = e(H, { spoken: f, disabled: a, before: m, after: E, children: f }), x[3] = a, x[4] = f, x[5] = m, x[6] = E, x[7] = v;
  else v = x[7];
  return v;
}
function fe(o) {
  let l = w(5), { children: t, disabled: d } = o;
  const a = t ? `${t}, opens` : "opens", u = t ? " ›" : "›";
  let x;
  if (l[0] !== t || l[1] !== d || l[2] !== a || l[3] !== u) x = e(H, { spoken: a, disabled: d, after: u, children: t }), l[0] = t, l[1] = d, l[2] = a, l[3] = u, l[4] = x;
  else x = l[4];
  return x;
}
function se(o) {
  let u = w(4), { children: t, disabled: d } = o;
  const a = t ? `${t}, button` : "button";
  let l;
  if (u[0] !== t || u[1] !== d || u[2] !== a) l = e(H, { spoken: a, disabled: d, children: t }), u[0] = t, u[1] = d, u[2] = a, u[3] = l;
  else l = u[3];
  return l;
}
function Y(o) {
  let u = w(6), { children: t, disabled: d } = o;
  const a = t || "empty";
  let l;
  if (u[0] !== t) l = t || e(n, { dimColor: true, children: "—" }), u[0] = t, u[1] = l;
  else l = u[1];
  let x;
  if (u[2] !== d || u[3] !== a || u[4] !== l) x = e(H, { spoken: a, disabled: d, children: l }), u[2] = d, u[3] = a, u[4] = l, u[5] = x;
  else x = u[5];
  return x;
}
function G(o) {
  let p = w(75), { value: t, placeholder: d, disabled: a } = o, u = be(we), l = rt(), x = Pc();
  if (u === void 0) {
    const k2 = `${t || "empty"}, edit text`;
    let f2;
    if (p[0] !== d || p[1] !== t) f2 = t || e(n, { dimColor: true, children: d }), p[0] = d, p[1] = t, p[2] = f2;
    else f2 = p[2];
    let b2;
    if (p[3] !== a || p[4] !== k2 || p[5] !== f2) b2 = e(H, { spoken: k2, disabled: a, children: f2 }), p[3] = a, p[4] = k2, p[5] = f2, p[6] = b2;
    else b2 = p[6];
    return b2;
  }
  let { editor: m, input: E, end: v } = u, S, L, h, T, F, k, A, I, f, b, X, W, N, q, B, _;
  if (p[7] !== u.room || p[8] !== m || p[9] !== v || p[10] !== E || p[11] !== l || p[12] !== x) {
    let i = xi.fromText(m.query, u.room, m.cursorOffset);
    let M = x && !l && !kF() ? " " : "";
    let c2;
    if (p[29] !== v) c2 = () => v(true, true) ? false : void 0, p[29] = v, p[30] = c2;
    else c2 = p[30];
    let D = c2;
    F = hE;
    A = "Select";
    let g2;
    if (p[31] !== v) g2 = { action: "select:cancel", run: () => {
      v(false);
    } }, p[31] = v, p[32] = g2;
    else g2 = p[32];
    let R2;
    if (p[33] !== m) R2 = { action: "select:first", run: () => m.setCursorOffset(0) }, p[33] = m, p[34] = R2;
    else R2 = p[34];
    let O2;
    if (p[35] !== m) O2 = { action: "select:last", run: () => m.setCursorOffset(m.queryRef.current.length) }, p[35] = m, p[36] = O2;
    else O2 = p[36];
    let K2, V;
    if (p[37] !== D) K2 = { action: "select:previous", run: D }, V = { action: "select:next", run: D }, p[37] = D, p[38] = K2, p[39] = V;
    else K2 = p[38], V = p[39];
    if (p[40] !== g2 || p[41] !== R2 || p[42] !== O2 || p[43] !== K2 || p[44] !== V) I = [g2, R2, O2, K2, V], p[40] = g2, p[41] = R2, p[42] = O2, p[43] = K2, p[44] = V, p[45] = I;
    else I = p[45];
    T = s;
    if (p[46] !== v) _ = (J) => v(J.relatedTarget !== null), p[46] = v, p[47] = _;
    else _ = p[47];
    h = Jie;
    X = E;
    W = true;
    N = { line: 0, column: i.getPosition().column, visible: true };
    if (p[48] !== m) q = (U) => {
      if (m.handleKeyDown(U), U.defaultPrevented) U.stopImmediatePropagation();
    }, p[48] = m, p[49] = q;
    else q = p[49];
    B = m.handlePaste;
    L = n;
    f = "truncate-end";
    b = true;
    S = ts;
    k = i.render(M, "", Goe, void 0, 1, void 0, void 0, l);
    p[7] = u.room, p[8] = m, p[9] = v, p[10] = E, p[11] = l, p[12] = x, p[13] = S, p[14] = L, p[15] = h, p[16] = T, p[17] = F, p[18] = k, p[19] = A, p[20] = I, p[21] = f, p[22] = b, p[23] = X, p[24] = W, p[25] = N, p[26] = q, p[27] = B, p[28] = _;
  } else S = p[13], L = p[14], h = p[15], T = p[16], F = p[17], k = p[18], A = p[19], I = p[20], f = p[21], b = p[22], X = p[23], W = p[24], N = p[25], q = p[26], B = p[27], _ = p[28];
  let c;
  if (p[50] !== S || p[51] !== k) c = e(S, { children: k }), p[50] = S, p[51] = k, p[52] = c;
  else c = p[52];
  let g;
  if (p[53] !== L || p[54] !== c || p[55] !== f || p[56] !== b) g = e(L, { wrap: f, "aria-preserve-whitespace": b, children: c }), p[53] = L, p[54] = c, p[55] = f, p[56] = b, p[57] = g;
  else g = p[57];
  let R;
  if (p[58] !== h || p[59] !== g || p[60] !== X || p[61] !== W || p[62] !== N || p[63] !== q || p[64] !== B) R = e(h, { ref: X, autoFocus: W, caret: N, onKeyDown: q, onPaste: B, children: g }), p[58] = h, p[59] = g, p[60] = X, p[61] = W, p[62] = N, p[63] = q, p[64] = B, p[65] = R;
  else R = p[65];
  let O;
  if (p[66] !== T || p[67] !== R || p[68] !== _) O = e(T, { onBlur: _, children: R }), p[66] = T, p[67] = R, p[68] = _, p[69] = O;
  else O = p[69];
  let K;
  if (p[70] !== F || p[71] !== A || p[72] !== I || p[73] !== O) K = e(F, { scope: A, bindings: I, children: O }), p[70] = F, p[71] = A, p[72] = I, p[73] = O, p[74] = K;
  else K = p[74];
  return K;
}
function ze(o) {
  if (P(o, re)) return le("false");
  if (P(o, ie)) return Math.max(0, ...o.props.options.map((t) => te(t.label))) + (o.props.disabled ? 0 : le("‹  ›"));
  if (P(o, fe)) {
    let { children: t } = o.props;
    return t ? te(t) + le(" ›") : le("›");
  }
  if (P(o, se)) return te(o.props.children ?? "");
  if (P(o, Y)) return te(o.props.children || "—");
  if (P(o, G)) return te(o.props.value || (o.props.placeholder ?? "")) + 1;
  return 0;
}
function Ius(o) {
  let t = N6(o);
  return 2 + (t ? Ft(t, " ") + 1 : 0);
}
function te(o) {
  return Math.max(0, ...o.split(`
`).map((t) => le(t)));
}
function Tn(o, t) {
  if (P(o, re) && !o.props.disabled) {
    let d = Dn.bind(void 0, o.props, t);
    return { accept: d, previous: d, next: d };
  }
  if (P(o, ie) && !o.props.disabled) {
    let { props: d } = o, a = (u) => () => {
      let l = d.options.length, x = d.options.findIndex((f) => f.value === (t.get(d) ?? d.value)), k = Math.max(x, u === 1 ? -1 : 0), p = d.options[(k + u + l) % l];
      if (p === void 0) return;
      Se(t, d, p.value), d.onChange(p.value);
    };
    return { accept: a(1), next: a(1), previous: a(-1) };
  }
  if (P(o, fe) && !o.props.disabled) return { accept: o.props.onOpen, next: o.props.onOpen };
  if (P(o, se) && !o.props.disabled) return { accept: o.props.onPress };
  return {};
}
function Dn(o, t) {
  let d = !(t.get(o) ?? o.value);
  Se(t, o, d), o.onChange(d);
}
function Se(o, t, d) {
  o.set(t, d), queueMicrotask(() => o.delete(t));
}
function Mn(o, t) {
  let d = t.get(o);
  return typeof d === "string" ? d : o.value;
}
function Ge(o) {
  return Og(o) && o.type === Ee;
}
function P(o, t) {
  return Og(o) && o.type === t;
}
var qy = Object.assign(en, { Field: Ee, Toggle: re, Select: ie, Text: G, Link: fe, Button: se, Value: Y });
export {
  Ius,
  qy
};
