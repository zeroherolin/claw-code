// ui/truncate-end.3ct3.js — Claude Code 2.1.310 模块 chunk-3ct3kyyd.js
import { w } from "./chunk-zqxc4qtb.js";
import { cs } from "../shared/chunk-bezz9j8a.js";
import { $t } from "../shared/chunk-j79dwkaq.js";
import { Xoe } from "../vendor/chalk/xterm-ghostty.qrwz.js";
import { le } from "../shared/chunk-abagh0tt.js";
import { rt, s, n, ts, sae, Ml, Ys } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { Ip, vg, R$ } from "../terminal/ink-renderer.pma0.js";
import { Pc } from "../shared/chunk-h1g05r4t.js";
import { xi } from "../terminal/left-arrow-blocked.q730.js";
import { Ce } from "../shared/chunk-9vjqn6fm.js";
import { Z_ } from "../computer-use/native-auto-updater-skipped-unverified-release.435s.js";
import { lw } from "../telemetry/select-stray-click-dropped.n2v5.js";
import { vC, v5e, jR, lu } from "./aria-hidden.r9bm.js";
import { yv } from "./keybinding-auto-hints.yb17.js";
import { N8t, K5, qI, Sd, q5 } from "./truncate-end.bmh7.js";
import { Ixt } from "./flex-start.z7v2.js";
import { Q, e, r } from "../vendor/react/chunk-f790ajz4.js";
import { Jh, Gt, Og, Se, A, y, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
var Ze = 32, oe = 2, ee = 2, Re = 2, Pe = "wrap-trim", De = true, we = Gt(void 0), xe = Gt(false), pe = Gt(false);
function en({ children: o, ...t }) {
  let d = cs(Ce()), a = A(null), [u] = y(() => /* @__PURE__ */ new Set()), l = Ml(() => {
    let [i] = u;
    return i && Ys(i).width || a.current && Ys(a.current).width || d.columns;
  }), P = lw(), [k] = y(() => /* @__PURE__ */ new WeakMap()), p = Jh.toArray(o), f = p.filter(Ge), b = Math.min(Math.max(0, ...f.map((i) => le(q5(i.props.label)))), Math.max(Ze, l - ee - oe - Math.max(Ixt, ...f.map((i) => ze(i.props.children))))), m = l - ee - b - oe < Ixt, x = f.filter((i) => !C(i.props.children, Y)), v = K5(t.isDisabled), E = m ? l - ee - Re : l - ee - b - oe, [M, h, S] = lu(void 0), [O, F] = y(void 0), I = A(null), { focusManager: X } = Se(vg), W = Z_({ isActive: true, columns: E, backspaceExitsOnEmpty: false, onExit: () => L(true, true), onCancel: () => L(false), onExitUp: () => L(true, true), onExitDown: () => L(true, true) });
  function L(i, D = false) {
    let c = S();
    if (c === void 0) return true;
    let T = f.find((N) => N.key === c.key)?.props.children, g = W.queryRef.current, R = i && g !== c.from && C(T, G) ? T.props.validate?.(g) ?? null : null;
    if (R !== null && D) return F({ draft: g, reason: R }), false;
    if (h(void 0), F(void 0), I.current && X?.activeElement === I.current) X.blur();
    if (!i || R !== null || !C(T, G) || T.props.disabled) return true;
    if (g !== c.from) Te(k, T.props, g), T.props.onChange(g);
    return true;
  }
  function q(i) {
    let D = i?.props.children;
    if (!C(D, G) || D.props.disabled || typeof i?.key !== "string") return Tn(D, k);
    let c = { key: i.key, from: Mn(D.props, k) };
    return { accept: () => {
      L(true), W.setQuery(c.from), h(c);
    } };
  }
  let B = p.map((i, D) => {
    if (!Ge(i)) return Og(i) && i.type === Sd.Heading ? i : e(Sd.Heading, { children: i }, Og(i) ? i.key : D);
    let { children: c } = i.props, T = q5(i.props.label), g = M?.key === i.key && O?.draft === W.query ? O.reason : void 0, R = g ?? q5(i.props.description), N = R ? $t(Ip(R, Math.max(1, l - ee), Pe), `
`) + 1 : 0, V = !(!v || t.onDisabledRowClick !== void 0) || M?.key === i.key ? void 0 : q(i).accept, J = C(c, re) || C(c, ie) || C(c, se) ? ze(c) : 0, U = e(Qe, { label: T, description: R, ink: i.props.ink, refused: g !== void 0, onClick: V && ((Z) => {
      if (P(Z) || K5(t.isDisabled) && t.onDisabledRowClick === void 0) return;
      V();
    }), labelColumn: b, stacked: m, targetWidth: Math.max(0, Math.min(J, E)), rowLines: C(c, Y) ? void 0 : u, children: e(we, { value: M?.key === i.key && !v && C(c, G) && !c.props.disabled ? { editor: W, room: E, input: I, end: L } : void 0, children: c }) });
    return C(c, Y) ? e(Sd.Heading, { children: U }, i.key) : e(Sd.Item, { declareCursor: M?.key !== i.key, lines: (m ? 2 : 1) + N, children: U }, i.key);
  });
  if (x.length === 0) return r(s, { ref: a, flexDirection: "column", children: [B.length === 0 && t.emptyMessage && e(n, { dimColor: true, children: t.emptyMessage }), B.map((i, D) => e(jR, { isFocused: false, styled: false, children: i }, Og(i) ? i.key : D))] });
  let _ = e(Sd, { ...t, rowClick: "move", onFocus: (i) => {
    if (x[i]?.key !== S()?.key) L(true);
    t.onFocus?.(i);
  }, onSelect: (i) => {
    if (S() !== void 0) {
      L(true, true);
      return;
    }
    q(x[i]).accept?.();
  }, onRowKeyDown: (i, D) => {
    if (S() !== void 0) {
      W.handleKeyDown(i);
      return;
    }
    if (i.ctrl || i.meta) return;
    let c = q(x[D]), T = i.key === " " ? c.accept : i.key === "left" ? c.previous : i.key === "right" ? c.next : void 0;
    if (T === void 0) return;
    i.preventDefault(), T();
  }, children: B });
  return e(s, { ref: a, flexDirection: "column", children: e(xe, { value: v, children: _ }) });
}
function Qe(o) {
  let h = w(54), { label: t, description: d, ink: a, refused: u, onClick: l, labelColumn: P, stacked: k, targetWidth: p, rowLines: f, children: b } = o, m = qI(), x = rt(), [v, E] = v5e(l !== void 0), M = Se(N8t);
  if (x) {
    let S2;
    if (h[0] !== t) S2 = r(n, { children: [t, ","] }), h[0] = t, h[1] = S2;
    else S2 = h[1];
    let O2;
    if (h[2] !== b || h[3] !== S2) O2 = r(s, { children: [S2, b] }), h[2] = b, h[3] = S2, h[4] = O2;
    else O2 = h[4];
    let F2;
    if (h[5] !== d) F2 = d && e(n, { children: d }), h[5] = d, h[6] = F2;
    else F2 = h[6];
    let I2;
    if (h[7] !== O2 || h[8] !== F2) I2 = r(s, { flexDirection: "column", children: [O2, F2] }), h[7] = O2, h[8] = F2, h[9] = I2;
    else I2 = h[9];
    return I2;
  }
  let S;
  if (h[10] !== f) S = (X) => {
    let W = X?.parentNode;
    if (!f || !W) {
      return;
    }
    return f.add(W), () => {
      f.delete(W);
    };
  }, h[10] = f, h[11] = S;
  else S = h[11];
  const O = k ? "column" : "row", F = k ? void 0 : P, I = k ? 0 : oe, L = a === "locked", q = m && a !== "locked" ? "suggestion" : void 0;
  let B;
  if (h[12] !== t || h[13] !== L || h[14] !== q) B = e(n, { dimColor: L, color: q, wrap: "truncate-end", children: t }), h[12] = t, h[13] = L, h[14] = q, h[15] = B;
  else B = h[15];
  let _;
  if (h[16] !== F || h[17] !== I || h[18] !== B) _ = e(s, { width: F, marginRight: I, flexShrink: 0, children: B }), h[16] = F, h[17] = I, h[18] = B, h[19] = _;
  else _ = h[19];
  const i = k ? Re : 0, D = v ? vC : void 0;
  let c;
  if (h[20] !== M || h[21] !== l) c = l && ((T) => {
    if (!M(T)) l(T);
  }), h[20] = M, h[21] = l, h[22] = c;
  else c = h[22];
  let g;
  if (h[23] !== l || h[24] !== E) g = l && (() => E(true)), h[23] = l, h[24] = E, h[25] = g;
  else g = h[25];
  let R;
  if (h[26] !== l || h[27] !== E) R = l && (() => E(false)), h[26] = l, h[27] = E, h[28] = R;
  else R = h[28];
  const N = a !== void 0;
  let K;
  if (h[29] !== b || h[30] !== N) K = e(pe, { value: N, children: b }), h[29] = b, h[30] = N, h[31] = K;
  else K = h[31];
  let V;
  if (h[32] !== D || h[33] !== c || h[34] !== g || h[35] !== R || h[36] !== K || h[37] !== p) V = e(s, { minWidth: p, backgroundColor: D, onClick: c, onMouseEnter: g, onMouseLeave: R, children: K }), h[32] = D, h[33] = c, h[34] = g, h[35] = R, h[36] = K, h[37] = p, h[38] = V;
  else V = h[38];
  let J;
  if (h[39] !== V || h[40] !== i) J = e(s, { paddingLeft: i, children: V }), h[39] = V, h[40] = i, h[41] = J;
  else J = h[41];
  let U;
  if (h[42] !== J || h[43] !== O || h[44] !== _) U = r(s, { flexDirection: O, children: [_, J] }), h[42] = J, h[43] = O, h[44] = _, h[45] = U;
  else U = h[45];
  let Z;
  if (h[46] !== d || h[47] !== u || h[48] !== f) Z = d && e(n, { dimColor: !u, color: u ? "error" : void 0, wrap: f === void 0 ? "truncate-end" : Pe, children: d }), h[46] = d, h[47] = u, h[48] = f, h[49] = Z;
  else Z = h[49];
  let Je;
  if (h[50] !== S || h[51] !== U || h[52] !== Z) Je = r(s, { ref: S, flexDirection: "column", children: [U, Z] }), h[50] = S, h[51] = U, h[52] = Z, h[53] = Je;
  else Je = h[53];
  return Je;
}
function H(o) {
  let m = w(15), { spoken: t, disabled: d, before: a, after: u, children: l } = o, P = d === void 0 ? false : d, k = qI(), p = Se(pe);
  if (rt()) {
    const b2 = P && ", unavailable";
    let x2;
    if (m[0] !== t || m[1] !== b2) x2 = r(n, { children: [t, b2] }), m[0] = t, m[1] = b2, m[2] = x2;
    else x2 = m[2];
    return x2;
  }
  const b = P || p;
  let x;
  if (m[3] !== a) x = a && e(n, { dimColor: true, children: a }), m[3] = a, m[4] = x;
  else x = m[4];
  const v = k && !P && !p ? "suggestion" : void 0;
  let E;
  if (m[5] !== l || m[6] !== v) E = e(n, { color: v, children: l }), m[5] = l, m[6] = v, m[7] = E;
  else E = m[7];
  let M;
  if (m[8] !== u) M = u && e(n, { dimColor: true, children: u }), m[8] = u, m[9] = M;
  else M = m[9];
  let h;
  if (m[10] !== b || m[11] !== x || m[12] !== E || m[13] !== M) h = r(n, { dimColor: b, wrap: "truncate-end", children: [x, E, M] }), m[10] = b, m[11] = x, m[12] = E, m[13] = M, m[14] = h;
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
  let P;
  if (l[0] !== d || l[1] !== a || l[2] !== u) P = e(H, { spoken: a, disabled: d, children: u }), l[0] = d, l[1] = a, l[2] = u, l[3] = P;
  else P = l[3];
  return P;
}
function ie(o) {
  let P = w(8), { value: t, options: d, disabled: a } = o, u = Se(xe), l = qI(), k;
  if (P[0] !== d || P[1] !== t) k = d.find((p) => p.value === t)?.label ?? t, P[0] = d, P[1] = t, P[2] = k;
  else k = P[2];
  let f = k, b = !a && !u && (l || !De);
  const m = b ? "‹ " : void 0, x = b ? " ›" : void 0;
  let v;
  if (P[3] !== a || P[4] !== f || P[5] !== m || P[6] !== x) v = e(H, { spoken: f, disabled: a, before: m, after: x, children: f }), P[3] = a, P[4] = f, P[5] = m, P[6] = x, P[7] = v;
  else v = P[7];
  return v;
}
function fe(o) {
  let l = w(5), { children: t, disabled: d } = o;
  const a = t ? `${t}, opens` : "opens", u = t ? " ›" : "›";
  let P;
  if (l[0] !== t || l[1] !== d || l[2] !== a || l[3] !== u) P = e(H, { spoken: a, disabled: d, after: u, children: t }), l[0] = t, l[1] = d, l[2] = a, l[3] = u, l[4] = P;
  else P = l[4];
  return P;
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
  let P;
  if (u[2] !== d || u[3] !== a || u[4] !== l) P = e(H, { spoken: a, disabled: d, children: l }), u[2] = d, u[3] = a, u[4] = l, u[5] = P;
  else P = u[5];
  return P;
}
function G(o) {
  let p = w(75), { value: t, placeholder: d, disabled: a } = o, u = Se(we), l = rt(), P = Pc();
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
  let { editor: m, input: x, end: v } = u, E, M, h, S, O, k, F, I, f, b, X, W, L, q, B, _;
  if (p[7] !== u.room || p[8] !== m || p[9] !== v || p[10] !== x || p[11] !== l || p[12] !== P) {
    let i = xi.fromText(m.query, u.room, m.cursorOffset);
    let D = P && !l && !R$() ? " " : "";
    let c2;
    if (p[29] !== v) c2 = () => v(true, true) ? false : void 0, p[29] = v, p[30] = c2;
    else c2 = p[30];
    let T = c2;
    O = yv;
    F = "Select";
    let g2;
    if (p[31] !== v) g2 = { action: "select:cancel", run: () => {
      v(false);
    } }, p[31] = v, p[32] = g2;
    else g2 = p[32];
    let R2;
    if (p[33] !== m) R2 = { action: "select:first", run: () => m.setCursorOffset(0) }, p[33] = m, p[34] = R2;
    else R2 = p[34];
    let N2;
    if (p[35] !== m) N2 = { action: "select:last", run: () => m.setCursorOffset(m.queryRef.current.length) }, p[35] = m, p[36] = N2;
    else N2 = p[36];
    let K2, V;
    if (p[37] !== T) K2 = { action: "select:previous", run: T }, V = { action: "select:next", run: T }, p[37] = T, p[38] = K2, p[39] = V;
    else K2 = p[38], V = p[39];
    if (p[40] !== g2 || p[41] !== R2 || p[42] !== N2 || p[43] !== K2 || p[44] !== V) I = [g2, R2, N2, K2, V], p[40] = g2, p[41] = R2, p[42] = N2, p[43] = K2, p[44] = V, p[45] = I;
    else I = p[45];
    S = s;
    if (p[46] !== v) _ = (J) => v(J.relatedTarget !== null), p[46] = v, p[47] = _;
    else _ = p[47];
    h = sae;
    X = x;
    W = true;
    L = { line: 0, column: i.getPosition().column, visible: true };
    if (p[48] !== m) q = (U) => {
      if (m.handleKeyDown(U), U.defaultPrevented) U.stopImmediatePropagation();
    }, p[48] = m, p[49] = q;
    else q = p[49];
    B = m.handlePaste;
    M = n;
    f = "truncate-end";
    b = true;
    E = ts;
    k = i.render(D, "", Xoe, void 0, 1, void 0, void 0, l);
    p[7] = u.room, p[8] = m, p[9] = v, p[10] = x, p[11] = l, p[12] = P, p[13] = E, p[14] = M, p[15] = h, p[16] = S, p[17] = O, p[18] = k, p[19] = F, p[20] = I, p[21] = f, p[22] = b, p[23] = X, p[24] = W, p[25] = L, p[26] = q, p[27] = B, p[28] = _;
  } else E = p[13], M = p[14], h = p[15], S = p[16], O = p[17], k = p[18], F = p[19], I = p[20], f = p[21], b = p[22], X = p[23], W = p[24], L = p[25], q = p[26], B = p[27], _ = p[28];
  let c;
  if (p[50] !== E || p[51] !== k) c = e(E, { children: k }), p[50] = E, p[51] = k, p[52] = c;
  else c = p[52];
  let g;
  if (p[53] !== M || p[54] !== c || p[55] !== f || p[56] !== b) g = e(M, { wrap: f, "aria-preserve-whitespace": b, children: c }), p[53] = M, p[54] = c, p[55] = f, p[56] = b, p[57] = g;
  else g = p[57];
  let R;
  if (p[58] !== h || p[59] !== g || p[60] !== X || p[61] !== W || p[62] !== L || p[63] !== q || p[64] !== B) R = e(h, { ref: X, autoFocus: W, caret: L, onKeyDown: q, onPaste: B, children: g }), p[58] = h, p[59] = g, p[60] = X, p[61] = W, p[62] = L, p[63] = q, p[64] = B, p[65] = R;
  else R = p[65];
  let N;
  if (p[66] !== S || p[67] !== R || p[68] !== _) N = e(S, { onBlur: _, children: R }), p[66] = S, p[67] = R, p[68] = _, p[69] = N;
  else N = p[69];
  let K;
  if (p[70] !== O || p[71] !== F || p[72] !== I || p[73] !== N) K = e(O, { scope: F, bindings: I, children: N }), p[70] = O, p[71] = F, p[72] = I, p[73] = N, p[74] = K;
  else K = p[74];
  return K;
}
function ze(o) {
  if (C(o, re)) return le("false");
  if (C(o, ie)) return Math.max(0, ...o.props.options.map((t) => te(t.label))) + (o.props.disabled ? 0 : le("‹  ›"));
  if (C(o, fe)) {
    let { children: t } = o.props;
    return t ? te(t) + le(" ›") : le("›");
  }
  if (C(o, se)) return te(o.props.children ?? "");
  if (C(o, Y)) return te(o.props.children || "—");
  if (C(o, G)) return te(o.props.value || (o.props.placeholder ?? "")) + 1;
  return 0;
}
function tps(o) {
  let t = q5(o);
  return 2 + (t ? $t(t, " ") + 1 : 0);
}
function te(o) {
  return Math.max(0, ...o.split(`
`).map((t) => le(t)));
}
function Tn(o, t) {
  if (C(o, re) && !o.props.disabled) {
    let d = Dn.bind(void 0, o.props, t);
    return { accept: d, previous: d, next: d };
  }
  if (C(o, ie) && !o.props.disabled) {
    let { props: d } = o, a = (u) => () => {
      let l = d.options.length, P = d.options.findIndex((f) => f.value === (t.get(d) ?? d.value)), k = Math.max(P, u === 1 ? -1 : 0), p = d.options[(k + u + l) % l];
      if (p === void 0) return;
      Te(t, d, p.value), d.onChange(p.value);
    };
    return { accept: a(1), next: a(1), previous: a(-1) };
  }
  if (C(o, fe) && !o.props.disabled) return { accept: o.props.onOpen, next: o.props.onOpen };
  if (C(o, se) && !o.props.disabled) return { accept: o.props.onPress };
  return {};
}
function Dn(o, t) {
  let d = !(t.get(o) ?? o.value);
  Te(t, o, d), o.onChange(d);
}
function Te(o, t, d) {
  o.set(t, d), queueMicrotask(() => o.delete(t));
}
function Mn(o, t) {
  let d = t.get(o);
  return typeof d === "string" ? d : o.value;
}
function Ge(o) {
  return Og(o) && o.type === Ee;
}
function C(o, t) {
  return Og(o) && o.type === t;
}
var qy = Object.assign(en, { Field: Ee, Toggle: re, Select: ie, Text: G, Link: fe, Button: se, Value: Y });
export {
  qy,
  tps
};
