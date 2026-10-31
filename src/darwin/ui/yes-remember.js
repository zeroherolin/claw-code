// darwin/ui/yes-remember.js — Claude Code 2.1.310（darwin）模块 chunk-dhrg25tp.js
import { w } from "./chunk-0ed4c357.js";
import { s, n, X1 } from "../telemetry/render-glyph-cardinality.js";
import { lt } from "../shared/chunk-76877d92.js";
import { Cr } from "../commands/aria-preserve-whitespace.js";
import { ne } from "../workflows/workflow-size-guideline-change.js";
import { Jr } from "../shared/chunk-258385dc.js";
import { q } from "../context/chunk-e2302e3b.js";
import { Je } from "./aria-hidden.aa9d.js";
import { ve } from "./chunk-067d565d.js";
import { we } from "./keybinding-auto-hints.js";
import { RPe } from "./clawd-background.js";
import { MAn } from "./repl-screen.js";
import { Do } from "./chunk-acf5db26.js";
import { vs } from "../shared/chunk-473cbb92.js";
import { pt } from "../shared/chunk-c602eee2.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { QEe, ZEe } from "../shared/chunk-d2d8af65.js";
import { P, te, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { b } from "../vendor/react/chunk-0b0bf45d.js";
j();
function He(l) {
  return l.replace(/[\r\n]/g, "");
}
var V = [{ value: "yes-session", label: "Yes, for this session" }, { value: "yes-remember", label: "Yes, and remember this directory" }, { value: "no", label: "No" }];
function O() {
  let R = w(1), i;
  if (R[0] === b) i = e(n, { dimColor: true, children: "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on." }), R[0] = i;
  else i = R[0];
  return i;
}
function M(R) {
  let d = w(5), { path: i } = R, a;
  if (d[0] !== i) a = e(n, { color: "permission", children: i }), d[0] = i, d[1] = a;
  else a = d[1];
  let p;
  if (d[2] === b) p = e(O, {}), d[2] = p;
  else p = d[2];
  let t;
  if (d[3] !== a) t = r(s, { flexDirection: "column", gap: 1, children: [a, p] }), d[3] = a, d[4] = t;
  else t = d[4];
  return t;
}
function Y(R) {
  let m = w(16), { value: i, onChange: d, cursorOffset: a, onChangeCursorOffset: p, onSubmit: t, error: C, suggestions: c, selectedSuggestion: k } = R, E;
  if (m[0] === b) E = e(n, { children: "Enter the path to the directory:" }), m[0] = E;
  else E = m[0];
  let f;
  if (m[1] !== a || m[2] !== d || m[3] !== p || m[4] !== t || m[5] !== i) f = e(s, { borderDimColor: true, borderStyle: "round", marginTop: 1, paddingLeft: 1, children: e(Cr, { showCursor: true, focus: true, placeholder: `Directory path${ne.ellipsis}`, value: i, onChange: d, onSubmit: t, columns: 80, cursorOffset: a, onChangeCursorOffset: p, inputFilter: He, disableCursorMovementForUpDownKeys: true }) }), m[1] = a, m[2] = d, m[3] = p, m[4] = t, m[5] = i, m[6] = f;
  else f = m[6];
  let v;
  if (m[7] !== k || m[8] !== c) v = c.length > 0 && e(s, { marginBottom: 1, children: e(RPe, { suggestions: c, selectedSuggestion: k, noPad: true }) }), m[7] = k, m[8] = c, m[9] = v;
  else v = m[9];
  let o;
  if (m[10] !== C) o = e(vs, { error: C }), m[10] = C, m[11] = o;
  else o = m[11];
  let F;
  if (m[12] !== f || m[13] !== v || m[14] !== o) F = r(s, { flexDirection: "column", children: [E, f, v, o] }), m[12] = f, m[13] = v, m[14] = o, m[15] = F;
  else F = m[15];
  return F;
}
function Slt(R) {
  let o = w(38), { onAddDirectory: i, onAlreadyAccessible: d, onCancel: a, permissionContext: p, directoryPath: t } = R, C = Jr(), [c, k] = y(""), [m, E] = y(0), [f, v] = y(null), F;
  if (o[0] === b) F = [], o[0] = F;
  else F = o[0];
  let [l, ge] = y(F), [D, K] = y(0), de;
  if (o[1] !== C) de = async (pe) => {
    if (!pe) {
      ge([]), K(0);
      return;
    }
    let _e = await MAn(C, pe);
    ge(_e), K(0);
  }, o[1] = C, o[2] = de;
  else de = o[2];
  let T = X1(de, 100), me, fe;
  if (o[3] !== T || o[4] !== c) me = () => {
    T(c);
  }, fe = [c, T], o[3] = T, o[4] = c, o[5] = me, o[6] = fe;
  else me = o[5], fe = o[6];
  P(me, fe);
  let he;
  if (o[7] === b) he = (et) => {
    let ye = et.id + "/";
    k(ye), E(ye.length), v(null);
  }, o[7] = he;
  else he = o[7];
  let tt = he, be;
  if (o[8] !== i || o[9] !== d || o[10] !== p) be = async (ot) => {
    let x = await QEe(ot, p);
    if (x.resultType === "success") {
      i(x.absolutePath, false);
      return;
    }
    if (x.resultType === "alreadyInWorkingDirectory" && !x.isExactMatch && d?.(x)) {
      return;
    }
    v(ZEe(x));
  }, o[8] = i, o[9] = d, o[10] = p, o[11] = be;
  else be = o[11];
  let z = be, Se;
  if (o[12] === b) Se = { context: "Settings" }, o[12] = Se;
  else Se = o[12];
  lt("confirm:no", a, Se);
  let Ce;
  if (o[13] !== D || o[14] !== l) Ce = (g) => {
    if (l.length > 0) {
      if (g.name === "tab") {
        g.preventDefault();
        let De = l[D];
        if (De) tt(De);
        return;
      }
      if (g.name === "up" || g.ctrl && g.name === "p") {
        g.preventDefault(), K((xe) => xe <= 0 ? l.length - 1 : xe - 1);
        return;
      }
      if (g.name === "down" || g.ctrl && g.name === "n") {
        g.preventDefault(), K((Ae) => Ae >= l.length - 1 ? 0 : Ae + 1);
        return;
      }
    }
  }, o[13] = D, o[14] = l, o[15] = Ce;
  else Ce = o[15];
  let Q = Ce, Oe;
  if (o[16] !== t || o[17] !== i || o[18] !== a) Oe = (rt) => {
    if (!t) {
      return;
    }
    kt: switch (rt) {
      case "yes-session": {
        i(t, false);
        break kt;
      }
      case "yes-remember": {
        i(t, true);
        break kt;
      }
      case "no": {
        a();
      }
    }
  }, o[16] = t, o[17] = i, o[18] = a, o[19] = Oe;
  else Oe = o[19];
  let N = Oe, B;
  if (o[20] !== t) B = t ? void 0 : r(ve, { children: [e(q, { chord: "tab", action: "complete" }), e(q, { chord: "enter", action: "add" }), e(pt, { action: "confirm:no", context: "Settings", fallback: "Esc", description: "cancel" })] }), o[20] = t, o[21] = B;
  else B = o[21];
  let L;
  if (o[22] !== m || o[23] !== c || o[24] !== t || o[25] !== f || o[26] !== N || o[27] !== z || o[28] !== D || o[29] !== l) L = t ? r(s, { flexDirection: "column", gap: 1, children: [e(M, { path: t }), e(Je, { options: V, onChange: N, onCancel: () => N("no") })] }) : r(s, { flexDirection: "column", gap: 1, children: [e(O, {}), e(Y, { value: c, onChange: k, cursorOffset: m, onChangeCursorOffset: E, onSubmit: z, error: f, suggestions: l, selectedSuggestion: D })] }), o[22] = m, o[23] = c, o[24] = t, o[25] = f, o[26] = N, o[27] = z, o[28] = D, o[29] = l, o[30] = L;
  else L = o[30];
  let U;
  if (o[31] !== a || o[32] !== B || o[33] !== L) U = e(we, { title: "Add directory to workspace", onCancel: a, color: "permission", isCancelActive: false, inputGuide: B, children: L }), o[31] = a, o[32] = B, o[33] = L, o[34] = U;
  else U = o[34];
  let Pe;
  if (o[35] !== Q || o[36] !== U) Pe = e(Do, { onKeyDown: Q, children: U }), o[35] = Q, o[36] = U, o[37] = Pe;
  else Pe = o[37];
  return Pe;
}
export {
  Slt
};
