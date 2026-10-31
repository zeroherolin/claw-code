// linux/ui/truncate-start.js — Claude Code 2.1.310（linux）模块 chunk-7y9rpkcp.js
import { w } from "./chunk-0ed4c357.js";
import { sl, ds } from "../shared/chunk-9bbd1b38.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { le } from "../shared/chunk-4563156b.js";
import { U6 } from "../fs/chunk-fd55ffe7.js";
import { Mm } from "../terminal/aria-preserve-whitespace.js";
import { Ee } from "./chunk-067d565d.js";
import { we } from "./keybinding-auto-hints.js";
import { V } from "../context/chunk-e2302e3b.js";
import { iw, IC } from "./chunk-e2c1cf01.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { Jh, Gt, be, P, Bo, y, kt, j } from "../vendor/react/chunk-9a0b1ced.js";
import { ezt, aoe } from "../shared/chunk-37f396c1.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
j();
j();
var ult = Gt(null);
function Tus() {
  let u = be(ult), t = be(U6);
  return () => {
    if (u === null || !t) return;
    try {
      t.getState().open.find((o) => o.id === u)?.onClaimed?.();
    } catch (o) {
      l(o);
    }
  };
}
function Z() {
  let u = be(ult), t = be(U6), o = u === null || !t ? void 0 : t.getState().open.find((f) => f.id === u)?.countedAsk, d = o === void 0 ? void 0 : t?.askTally;
  return kt(d?.subscribe ?? ke, () => o === void 0 || !d ? null : d.positionLabel(o));
}
function D6(u, t, { perReveal: o = false } = {}) {
  let d = be(ult), f = be(U6), T = Bo(t), [a] = y(() => o && d !== null && f ? f.getState().open.find((m) => m.id === d)?.revealSeq ?? 0 : 0);
  P(() => {
    if (d !== null && f) {
      if (!f.firstReveal(d, o ? `${u}@${a}` : u)) return;
    }
    T();
  }, [d, f, u, o, a]);
}
function ke() {
  return () => {
  };
}
function _(u) {
  let t = aoe(u);
  return t === null ? void 0 : String(t);
}
function M(u) {
  switch (u?.type) {
    case "workflow-agent": {
      let t = _(u.workflowName);
      return t !== void 0 ? `from the "${t}" workflow` : "from a workflow";
    }
    case "subagent": {
      let t = _(u.agentName);
      return t !== void 0 ? `from the ${t} agent` : "from a subagent";
    }
    case "remote-agent":
      return "from a remote cloud agent";
    case "plugin": {
      let t = _(u.pluginName);
      return t === void 0 ? "from a plugin" : `from the ${t} plugin`;
    }
  }
  return;
}
function Uee(u) {
  let q = w(21), { title: t, subtitle: o, color: d, requestSource: f, srPrefix: T, aside: a } = u, m = d === void 0 ? "permission" : d, N;
  if (q[0] !== f) N = M(f), q[0] = f, q[1] = N;
  else N = q[1];
  let i = N;
  const R = T !== void 0 ? `${T} ${t}` : void 0;
  let b;
  if (q[2] !== m || q[3] !== R || q[4] !== t) b = e(n, { "aria-label": R, bold: true, color: m, children: t }), q[2] = m, q[3] = R, q[4] = t, q[5] = b;
  else b = q[5];
  let p;
  if (q[6] !== i) p = i !== void 0 && r(n, { children: [e(n, { dimColor: true, children: "· " }), i] }), q[6] = i, q[7] = p;
  else p = q[7];
  let g;
  if (q[8] !== b || q[9] !== p) g = r(s, { flexDirection: "row", gap: 1, children: [b, p] }), q[8] = b, q[9] = p, q[10] = g;
  else g = q[10];
  let k = g, h = a !== void 0 && le(t) + (i === void 0 ? 0 : 1 + le(`· ${i}`)) + 1 + le(a.text) <= a.rowColumns;
  const L = h ? 1 : void 0;
  let x;
  if (q[11] !== a || q[12] !== h || q[13] !== k) x = h ? r(s, { flexDirection: "row", justifyContent: "space-between", gap: 1, children: [k, e(n, { dimColor: true, children: a.text })] }) : k, q[11] = a, q[12] = h, q[13] = k, q[14] = x;
  else x = q[14];
  let c;
  if (q[15] !== o) c = o != null && (typeof o === "string" ? e(n, { dimColor: true, wrap: "truncate-start", children: o }) : o), q[15] = o, q[16] = c;
  else c = q[16];
  let C;
  if (q[17] !== L || q[18] !== x || q[19] !== c) C = r(s, { flexDirection: "column", flexGrow: L, children: [x, c] }), q[17] = L, q[18] = x, q[19] = c, q[20] = C;
  else C = q[20];
  return C;
}
var ce = { keyCase: "lower" };
function Ba(u) {
  let h = w(35), { title: t, subtitle: o, color: d, titleColor: f, innerPaddingX: T, requestSource: a, titleRight: m, srPrefix: q, frame: N, children: i } = u, R = d === void 0 ? "permission" : d, b = T === void 0 ? 1 : T, p = q === void 0 ? "Permission Required:" : q, g = Z(), k = be(Mm), L;
  if (h[0] !== k) L = k ?? { rows: 0, columns: 0 }, h[0] = k, h[1] = L;
  else L = h[1];
  let { columns: x } = ds(L), c = sl();
  if (N !== void 0) {
    let C2;
    if (h[2] !== g || h[3] !== i || h[4] !== R || h[5] !== x || h[6] !== N || h[7] !== c || h[8] !== a || h[9] !== p || h[10] !== o || h[11] !== t || h[12] !== m) C2 = e(ne, { title: t, subtitle: o, color: R, requestSource: a, titleRight: m, askPosition: g, columns: x, insideModal: c, srPrefix: p, frame: N, children: i }), h[2] = g, h[3] = i, h[4] = R, h[5] = x, h[6] = N, h[7] = c, h[8] = a, h[9] = p, h[10] = o, h[11] = t, h[12] = m, h[13] = C2;
    else C2 = h[13];
    return C2;
  }
  const C = p ?? void 0;
  let D;
  if (h[14] !== g || h[15] !== x || h[16] !== m) D = m === void 0 && g !== null ? { text: g, rowColumns: x - 2 } : void 0, h[14] = g, h[15] = x, h[16] = m, h[17] = D;
  else D = h[17];
  let v;
  if (h[18] !== a || h[19] !== o || h[20] !== C || h[21] !== D || h[22] !== t || h[23] !== f) v = e(Uee, { title: t, subtitle: o, color: f, requestSource: a, srPrefix: C, aside: D }), h[18] = a, h[19] = o, h[20] = C, h[21] = D, h[22] = t, h[23] = f, h[24] = v;
  else v = h[24];
  let z;
  if (h[25] !== v || h[26] !== m) z = e(s, { paddingX: 1, flexDirection: "column", children: r(s, { justifyContent: "space-between", children: [v, m] }) }), h[25] = v, h[26] = m, h[27] = z;
  else z = h[27];
  let E;
  if (h[28] !== i || h[29] !== b) E = e(s, { flexDirection: "column", paddingX: b, children: i }), h[28] = i, h[29] = b, h[30] = E;
  else E = h[30];
  let A;
  if (h[31] !== R || h[32] !== z || h[33] !== E) A = r(s, { flexDirection: "column", borderStyle: "round", borderColor: R, borderLeft: false, borderRight: false, borderBottom: false, marginTop: 1, children: [z, E] }), h[31] = R, h[32] = z, h[33] = E, h[34] = A;
  else A = h[34];
  return A;
}
function ne(u) {
  let c = w(33), { title: t, subtitle: o, color: d, requestSource: f, titleRight: T, askPosition: a, columns: m, insideModal: q, srPrefix: N, frame: i, children: R } = u, b = i.titleSuffix === void 0 ? "" : ezt(i.titleSuffix.replace(/\s+/g, " ").trim()), p = M(f), g = be(Mm), k = Math.max(1, m - 2 * (q ? IC : iw)), h = le(t) + (b === "" ? 0 : 3 + le(b)) + (p === void 0 ? 0 : 3 + le(p)), L = T ?? (a !== null && h + 2 + le(a) <= k ? a : void 0);
  const x = N === null ? void 0 : `${N} ${t}`;
  let C;
  if (c[0] !== x || c[1] !== t) C = e(n, { "aria-label": x, children: t }), c[0] = x, c[1] = t, c[2] = C;
  else C = c[2];
  let D;
  if (c[3] !== p || c[4] !== b) D = b === "" && p === void 0 ? void 0 : r(Q, { children: [b !== "" && r(n, { dimColor: true, children: [" · ", b] }), p !== void 0 && r(n, { dimColor: true, children: [" · ", p] })] }), c[3] = p, c[4] = b, c[5] = D;
  else D = c[5];
  let v;
  if (c[6] !== o) v = typeof o === "string" ? e(n, { dimColor: true, wrap: "truncate-start", children: o }) : o ?? void 0, c[6] = o, c[7] = v;
  else v = c[7];
  const z = i.onCancel;
  let E;
  if (c[8] === S) E = e(V, { chord: "escape", action: "cancel", terse: true, format: ce }, "cancel"), c[8] = E;
  else E = c[8];
  let A;
  if (c[9] !== i.showPermissionsHint) A = i.showPermissionsHint !== false && e(n, { children: "/permissions" }, "permissions"), c[9] = i.showPermissionsHint, c[10] = A;
  else A = c[10];
  let O;
  if (c[11] !== i.hints) O = Jh.toArray(i.hints), c[11] = i.hints, c[12] = O;
  else O = c[12];
  let J;
  if (c[13] !== A || c[14] !== O) J = r(Ee, { children: [E, A, O] }), c[13] = A, c[14] = O, c[15] = J;
  else J = c[15];
  let K;
  if (c[16] !== k || c[17] !== g) K = g === null ? null : { rows: g.rows, columns: k }, c[16] = k, c[17] = g, c[18] = K;
  else K = c[18];
  let U;
  if (c[19] !== R) U = e(s, { flexDirection: "column", children: R }), c[19] = R, c[20] = U;
  else U = c[20];
  let Y;
  if (c[21] !== K || c[22] !== U) Y = e(Mm.Provider, { value: K, children: U }), c[21] = K, c[22] = U, c[23] = Y;
  else Y = c[23];
  let Ce;
  if (c[24] !== d || c[25] !== i.onCancel || c[26] !== Y || c[27] !== C || c[28] !== D || c[29] !== v || c[30] !== J || c[31] !== L) Ce = e(we, { title: C, titleSuffix: D, subtitle: v, isSubtitleDimmed: false, titleEnd: L, color: d, onCancel: z, isCancelActive: false, truncateInputGuide: true, inputGuide: J, children: Y }), c[24] = d, c[25] = i.onCancel, c[26] = Y, c[27] = C, c[28] = D, c[29] = v, c[30] = J, c[31] = L, c[32] = Ce;
  else Ce = c[32];
  return Ce;
}
export {
  Ba,
  D6,
  Tus,
  Uee,
  ult
};
