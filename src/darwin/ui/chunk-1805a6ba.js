// darwin/ui/chunk-1805a6ba.js — Claude Code 2.1.310（darwin）模块 chunk-j85pkr07.js
import { w } from "./chunk-0ed4c357.js";
import { le } from "../shared/chunk-4563156b.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { lt, an } from "../shared/chunk-76877d92.js";
import { Cr } from "../commands/aria-preserve-whitespace.js";
import { ne } from "../workflows/workflow-size-guideline-change.js";
import { ve } from "./chunk-067d565d.js";
import { we } from "./keybinding-auto-hints.js";
import { q } from "../context/chunk-e2302e3b.js";
import { Plt } from "./flex-start.dc41.js";
import { vs } from "../shared/chunk-473cbb92.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { te, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { b } from "../vendor/react/chunk-0b0bf45d.js";
j();
function Oo(_o) {
  return le(_o.label);
}
function Go(jo) {
  return jo !== null;
}
function Kz(Ye) {
  let o = w(107), { title: l, subtitle: c, fields: t, values: i, onChange: h, onSubmit: B, onCancel: a, submitLabel: X } = Ye, I = X === void 0 ? "Save" : X, f = t.length + 1, [d, F] = y(0), Y;
  if (o[0] !== t[0] || o[1] !== i) Y = () => {
    let se = t[0];
    return se?.type === "text" ? (i[se.key] ?? "").length : 0;
  }, o[0] = t[0], o[1] = i, o[2] = Y;
  else Y = o[2];
  let [S, Z] = y(Y), u = d < t.length ? t[d] : null, Te = u?.type === "text", M;
  if (o[3] !== t) M = Math.max(...t.map(Oo)), o[3] = t, o[4] = M;
  else M = o[4];
  let A = M, N;
  if (o[5] !== i) N = function x2(U) {
    if (U.type !== "text") {
      return null;
    }
    let P = i[U.key] ?? "";
    if (U.required && P.trim() === "") {
      return `${U.label} is required`;
    }
    return U.validate ? U.validate(P, i) : null;
  }, o[5] = i, o[6] = N;
  else N = o[6];
  let x = N, Re;
  if (o[7] !== x || o[8] !== t) Re = t.map(x).find(Go), o[7] = x, o[8] = t, o[9] = Re;
  else Re = o[9];
  let C = Re, D;
  if (o[10] !== t || o[11] !== d || o[12] !== f || o[13] !== i) D = function m2(Se) {
    let Me = Math.max(0, Math.min(f - 1, Se));
    if (Me === d) {
      return;
    }
    F(Me);
    let Ze = t[Me];
    if (Ze?.type === "text") Z((i[Ze.key] ?? "").length);
  }, o[10] = t, o[11] = d, o[12] = f, o[13] = i, o[14] = D;
  else D = o[14];
  let m = D, _e;
  if (o[15] !== C || o[16] !== B) _e = function T2() {
    if (C) {
      return;
    }
    B();
  }, o[15] = C, o[16] = B, o[17] = _e;
  else _e = o[17];
  let T = _e, je;
  if (o[18] !== u || o[19] !== h || o[20] !== i) je = function K2($o) {
    if (u?.type !== "select") {
      return;
    }
    let _ = u.options;
    let zo = i[u.key] ?? _[0]?.value ?? "";
    let Qo = _.findIndex((Jo) => Jo.value === zo);
    let Ke = _[(Qo + $o + _.length) % _.length];
    if (Ke) h(u.key, Ke.value);
  }, o[18] = u, o[19] = h, o[20] = i, o[21] = je;
  else je = o[21];
  let K = je, de, ue;
  if (o[22] !== d || o[23] !== m) ue = () => m(d - 1), de = () => m(d + 1), o[22] = d, o[23] = m, o[24] = de, o[25] = ue;
  else de = o[24], ue = o[25];
  let ce;
  if (o[26] !== d || o[27] !== m || o[28] !== f || o[29] !== T) ce = () => {
    if (d === f - 1) T();
    else m(d + 1);
  }, o[26] = d, o[27] = m, o[28] = f, o[29] = T, o[30] = ce;
  else ce = o[30];
  let eo;
  if (o[31] !== a || o[32] !== de || o[33] !== ce || o[34] !== ue) eo = { "select:previous": ue, "select:next": de, "select:accept": ce, "select:cancel": a }, o[31] = a, o[32] = de, o[33] = ce, o[34] = ue, o[35] = eo;
  else eo = o[35];
  const Ae = !Te;
  let oo;
  if (o[36] !== Ae) oo = { context: "Select", isActive: Ae }, o[36] = Ae, o[37] = oo;
  else oo = o[37];
  an(eo, oo);
  let to;
  if (o[38] === b) to = { context: "Settings" }, o[38] = to;
  else to = o[38];
  lt("confirm:no", a, to), Plt();
  let lo;
  if (o[39] !== K) lo = { "tabs:previous": () => K(-1), "tabs:next": () => K(1) }, o[39] = K, o[40] = lo;
  else lo = o[40];
  const Ue = u?.type === "select";
  let io;
  if (o[41] !== Ue) io = { context: "Tabs", isActive: Ue }, o[41] = Ue, o[42] = io;
  else io = o[42];
  an(lo, io);
  let O = u ? i[u.key] ?? "" : "", no;
  if (o[43] !== u || o[44] !== O || o[45] !== i) no = u?.type === "text" && u.validate ? u.validate(O, i) : null, o[43] = u, o[44] = O, o[45] = i, o[46] = no;
  else no = o[46];
  let L = no, ro;
  if (o[47] !== L || o[48] !== u || o[49] !== O || o[50] !== i) ro = !L && u?.hint ? u.hint(O, i) : void 0, o[47] = L, o[48] = u, o[49] = O, o[50] = i, o[51] = ro;
  else ro = o[51];
  let ae = ro, fe;
  if (o[52] !== S || o[53] !== t || o[54] !== d || o[55] !== A || o[56] !== m || o[57] !== a || o[58] !== h || o[59] !== T || o[60] !== i) {
    let G2;
    if (o[62] !== S || o[63] !== t.length || o[64] !== d || o[65] !== A || o[66] !== m || o[67] !== a || o[68] !== h || o[69] !== T || o[70] !== i) G2 = (me, ee) => {
      let Xo = ee === d;
      let Yo = i[me.key] ?? "";
      return e(De, { field: me, value: Yo, isFocused: Xo, labelWidth: A, cursor: S, setCursor: Z, onChange: (Zo) => h(me.key, Zo), onCancel: a, onUp: () => m(ee - 1), onDown: () => m(ee + 1), onEnter: () => {
        if (ee === t.length - 1) T();
        else m(ee + 1);
      } }, me.key);
    }, o[62] = S, o[63] = t.length, o[64] = d, o[65] = A, o[66] = m, o[67] = a, o[68] = h, o[69] = T, o[70] = i, o[71] = G2;
    else G2 = o[71];
    fe = t.map(G2);
    o[52] = S, o[53] = t, o[54] = d, o[55] = A, o[56] = m, o[57] = a, o[58] = h, o[59] = T, o[60] = i, o[61] = fe;
  } else fe = o[61];
  const G = d === f - 1 ? "suggestion" : void 0, Pe = d === f - 1 ? ne.pointer : " ";
  let pe;
  if (o[72] !== G || o[73] !== Pe) pe = r(n, { color: G, children: [Pe, " "] }), o[72] = G, o[73] = Pe, o[74] = pe;
  else pe = o[74];
  const qe = d === f - 1, Le = !!C;
  let ge;
  if (o[75] !== I || o[76] !== qe || o[77] !== Le) ge = e(n, { bold: qe, dimColor: Le, children: I }), o[75] = I, o[76] = qe, o[77] = Le, o[78] = ge;
  else ge = o[78];
  let be;
  if (o[79] !== C || o[80] !== d || o[81] !== f) be = C && d === f - 1 && r(n, { color: "error", children: [" · ", C] }), o[79] = C, o[80] = d, o[81] = f, o[82] = be;
  else be = o[82];
  let Ce;
  if (o[83] !== pe || o[84] !== ge || o[85] !== be) Ce = r(s, { marginTop: 1, children: [pe, ge, be] }), o[83] = pe, o[84] = ge, o[85] = be, o[86] = Ce;
  else Ce = o[86];
  let he;
  if (o[87] !== L || o[88] !== ae) he = e(s, { marginTop: 1, minHeight: 1, children: L ? e(vs, { error: L }) : ae ? e(n, { dimColor: true, children: ae }) : e(n, { children: " " }) }), o[87] = L, o[88] = ae, o[89] = he;
  else he = o[89];
  let so;
  if (o[90] === b) so = e(q, { chord: ["up", "down"], action: "move" }), o[90] = so;
  else so = o[90];
  let Fe;
  if (o[91] !== u?.type) Fe = u?.type === "select" && e(q, { chord: ["left", "right"], action: "change" }), o[91] = u?.type, o[92] = Fe;
  else Fe = o[92];
  let uo, co;
  if (o[93] === b) uo = e(q, { chord: "enter", action: "continue" }), co = e(q, { chord: "escape", action: "cancel" }), o[93] = uo, o[94] = co;
  else uo = o[93], co = o[94];
  let ye;
  if (o[95] !== Fe) ye = e(s, { marginTop: 1, children: e(n, { dimColor: true, children: r(ve, { children: [so, Fe, uo, co] }) }) }), o[95] = Fe, o[96] = ye;
  else ye = o[96];
  let xe;
  if (o[97] !== fe || o[98] !== Ce || o[99] !== he || o[100] !== ye) xe = r(s, { flexDirection: "column", children: [fe, Ce, he, ye] }), o[97] = fe, o[98] = Ce, o[99] = he, o[100] = ye, o[101] = xe;
  else xe = o[101];
  let ao;
  if (o[102] !== a || o[103] !== c || o[104] !== xe || o[105] !== l) ao = e(we, { title: l, subtitle: c, onCancel: a, hideInputGuide: true, isCancelActive: false, children: xe }), o[102] = a, o[103] = c, o[104] = xe, o[105] = l, o[106] = ao;
  else ao = o[106];
  return ao;
}
function De(Ye) {
  let F = w(44), { field: l, value: c, isFocused: t, labelWidth: i, cursor: h, setCursor: B, onChange: a, onCancel: X, onUp: I, onDown: f, onEnter: d } = Ye, o;
  if (F[0] !== l.label || F[1] !== i) o = " ".repeat(Math.max(0, i - le(l.label))), F[0] = l.label, F[1] = i, F[2] = o;
  else o = F[2];
  let Y = o, se;
  if (F[3] !== l.required || F[4] !== l.type || F[5] !== c) se = l.type === "text" && l.required && c.trim() === "", F[3] = l.required, F[4] = l.type, F[5] = c, F[6] = se;
  else se = F[6];
  let S = se;
  const Z = t ? "suggestion" : void 0, u = t ? ne.pointer : " ";
  let Te;
  if (F[7] !== Z || F[8] !== u) Te = r(n, { color: Z, children: [u, " "] }), F[7] = Z, F[8] = u, F[9] = Te;
  else Te = F[9];
  let M = Te;
  const A = !t;
  let N;
  if (F[10] !== S) N = S ? e(n, { color: "error", children: "*" }) : " ", F[10] = S, F[11] = N;
  else N = F[11];
  let U;
  if (F[12] !== l.label || F[13] !== Y || F[14] !== A || F[15] !== N) U = r(n, { dimColor: A, children: [l.label, N, Y, " "] }), F[12] = l.label, F[13] = Y, F[14] = A, F[15] = N, F[16] = U;
  else U = F[16];
  let P = U;
  if (l.type === "select") {
    let x2;
    if (F[17] !== l.options || F[18] !== c) x2 = l.options.find((Re) => Re.value === c) ?? l.options[0], F[17] = l.options, F[18] = c, F[19] = x2;
    else x2 = F[19];
    let C = x2;
    let D2;
    if (F[20] !== t || F[21] !== C?.label || F[22] !== c) D2 = t ? r(n, { children: [r(n, { dimColor: true, children: [ne.triangleLeft, " "] }), C?.label ?? c, r(n, { dimColor: true, children: [" ", ne.triangleRight] })] }) : e(n, { children: C?.label ?? c }), F[20] = t, F[21] = C?.label, F[22] = c, F[23] = D2;
    else D2 = F[23];
    let Se;
    if (F[24] !== P || F[25] !== M || F[26] !== D2) Se = r(s, { children: [M, P, D2] }), F[24] = P, F[25] = M, F[26] = D2, F[27] = Se;
    else Se = F[27];
    return Se;
  }
  let x;
  if (F[28] !== h || F[29] !== l.mask || F[30] !== l.placeholder || F[31] !== t || F[32] !== X || F[33] !== a || F[34] !== f || F[35] !== d || F[36] !== I || F[37] !== B || F[38] !== c) x = t ? e(Cr, { value: c, onChange: a, onSubmit: () => d(), onExit: X, onHistoryUp: I, onHistoryDown: f, placeholder: l.placeholder, mask: l.mask, columns: 60, cursorOffset: h, onChangeCursorOffset: B, disableCursorMovementForUpDownKeys: true, disableEscapeDoublePress: true, focus: true, showCursor: true }) : c ? e(n, { children: l.mask ? l.mask.repeat(Math.min(le(c), 60)) : c }) : e(n, { dimColor: true, children: l.placeholder ?? "" }), F[28] = h, F[29] = l.mask, F[30] = l.placeholder, F[31] = t, F[32] = X, F[33] = a, F[34] = f, F[35] = d, F[36] = I, F[37] = B, F[38] = c, F[39] = x;
  else x = F[39];
  let D;
  if (F[40] !== P || F[41] !== M || F[42] !== x) D = r(s, { children: [M, P, x] }), F[40] = P, F[41] = M, F[42] = x, F[43] = D;
  else D = F[43];
  return D;
}
export {
  Kz
};
