// linux/ui/flex-start.2ddd.js — Claude Code 2.1.310（linux）模块 chunk-t8nfb30b.js
import { I } from "../shared/chunk-d2c47492.js";
import { w } from "./chunk-0ed4c357.js";
import { gt } from "../fs/async-hooks.7959.js";
import { Wx } from "../agents/in-process-teammate.32be.js";
import { _i, rt, s, n, Ta } from "../telemetry/render-glyph-cardinality.js";
import { WL, Yb } from "../shared/general-purpose.js";
import { qM } from "../shared/chunk-1d395236.js";
import { _s } from "../telemetry/chunk-cb9c99f9.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { K } from "../shared/chunk-e4a3aa33.js";
import { ne } from "../workflows/workflow-size-guideline-change.js";
import { ji } from "./spinner-stall-cleared.js";
import { MFe, sPe, IRt, J7r, yat } from "../shared/checkpoint-restore-failed.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
function X() {
  if (!_s()) return;
  let c = Wx();
  if (!c) return;
  if (Yb.includes(c)) return WL[c];
  return;
}
function O(c) {
  let f = w(6), { isLoading: o, isScreenReader: t, themeColor: g } = c, i = g ?? void 0, a;
  if (f[0] !== t) a = t ? e(Q, { children: "$ " }) : r(Q, { children: [ne.pointer, " "] }), f[0] = t, f[1] = a;
  else a = f[1];
  let l;
  if (f[2] !== i || f[3] !== o || f[4] !== a) l = e(n, { color: i, dimColor: o, children: a }), f[2] = i, f[3] = o, f[4] = a, f[5] = l;
  else l = f[5];
  return l;
}
function iat(c) {
  let f = w(10), { mode: o, isLoading: t, viewingAgentName: g, viewingAgentColor: p } = c, i = rt();
  qM();
  let a;
  if (f[0] === S) a = X(), f[0] = a;
  else a = f[0];
  let l = a, m = p ? WL[p] : void 0;
  const h = !i || !g && o === "bash";
  let d;
  if (f[1] !== t || f[2] !== i || f[3] !== o || f[4] !== m || f[5] !== g) d = g ? e(O, { isLoading: t, isScreenReader: i, themeColor: m }) : o === "bash" ? e(n, { color: "bashBorder", dimColor: t, children: "! " }) : e(O, { isLoading: t, isScreenReader: i, themeColor: _s() ? l : void 0 }), f[1] = t, f[2] = i, f[3] = o, f[4] = m, f[5] = g, f[6] = d;
  else d = f[6];
  let L;
  if (f[7] !== h || f[8] !== d) L = e(s, { "aria-hidden": h, alignItems: "flex-start", alignSelf: "flex-start", flexWrap: "nowrap", justifyContent: "flex-start", children: d }), f[7] = h, f[8] = d, f[9] = L;
  else L = f[9];
  return L;
}
j();
function ve(N) {
  return N.remoteBootstrap;
}
function Se() {
  return Date.now();
}
function Pe(A) {
  return A.status === "failed";
}
function Dur() {
  let p = w(22), c = K(ve), { columns: o } = Te(), [t, g] = y(Se), i;
  if (p[0] === S) i = () => g(Date.now()), p[0] = i;
  else i = p[0];
  if (Ta(i, 1e3), c === null) {
    return null;
  }
  let f = c.queuedCount, a, l, m, R, h, d;
  if (p[1] !== o || p[2] !== t || p[3] !== c) {
    l = c.steps.some(Pe);
    let L = MFe(c);
    a = s;
    m = "column";
    R = 1;
    h = r(n, { bold: true, children: [IRt(L, l), l || L === "restored" ? "" : "…"] });
    d = c.steps.map((b) => b.status === "skipped" ? null : e(V, { step: b, label: sPe(b, L), hint: b.id === "setup_script" ? J7r(c, b, L) : "", now: t, columns: o }, b.id));
    p[1] = o, p[2] = t, p[3] = c, p[4] = a, p[5] = l, p[6] = m, p[7] = R, p[8] = h, p[9] = d;
  } else a = p[4], l = p[5], m = p[6], R = p[7], h = p[8], d = p[9];
  let C;
  if (p[10] !== l || p[11] !== f) C = l ? "Send a message to try again." : f > 0 ? `${f} ${I(f, "message")} queued · sends once the session is ready` : "You can start typing — messages send once the session is ready", p[10] = l, p[11] = f, p[12] = C;
  else C = p[12];
  let u;
  if (p[13] !== C) u = e(s, { marginTop: 1, children: e(n, { dimColor: true, children: C }) }), p[13] = C, p[14] = u;
  else u = p[14];
  let x;
  if (p[15] !== a || p[16] !== m || p[17] !== R || p[18] !== h || p[19] !== d || p[20] !== u) x = r(a, { flexDirection: m, marginTop: R, children: [h, d, u] }), p[15] = a, p[16] = m, p[17] = R, p[18] = h, p[19] = d, p[20] = u, p[21] = x;
  else x = p[21];
  return x;
}
function V(c) {
  let l = w(18), { step: o, label: t, hint: g, now: p, columns: i } = c, f = _i() ? o.output : o.output?.slice(-1);
  switch (o.status) {
    case "completed": {
      const a = yat(o, p) + g;
      let m;
      if (l[0] !== t || l[1] !== a) m = e(xie, { status: "completed", label: t, annotation: a }), l[0] = t, l[1] = a, l[2] = m;
      else m = l[2];
      return m;
    }
    case "running": {
      const a = yat(o, p) + g;
      const m = f === void 0 ? o.detail : void 0;
      let R;
      if (l[3] !== i || l[4] !== t || l[5] !== f || l[6] !== a || l[7] !== m) R = e(xie, { status: "running", label: t, annotation: a, detail: m, output: f, columns: i }), l[3] = i, l[4] = t, l[5] = f, l[6] = a, l[7] = m, l[8] = R;
      else R = l[8];
      return R;
    }
    case "failed": {
      const a = o.exitCode === void 0 ? "" : ` · exit code ${o.exitCode}`;
      const m = o.error === t ? void 0 : o.error;
      let R;
      if (l[9] !== i || l[10] !== t || l[11] !== o.output || l[12] !== a || l[13] !== m) R = e(xie, { status: "failed", label: t, annotation: a, detail: m, output: o.output, columns: i }), l[9] = i, l[10] = t, l[11] = o.output, l[12] = a, l[13] = m, l[14] = R;
      else R = l[14];
      return R;
    }
    case "pending": {
      let a;
      if (l[15] !== g || l[16] !== t) a = e(xie, { status: "pending", label: t, annotation: g }), l[15] = g, l[16] = t, l[17] = a;
      else a = l[17];
      return a;
    }
    case "skipped": {
      return null;
    }
  }
}
function xie(c) {
  let d = w(42), { status: o, label: t, annotation: g, detail: p, output: i, columns: f, detailOverflow: a } = c, l = g === void 0 ? "" : g, m = f === void 0 ? 80 : f, R = a === void 0 ? "truncate" : a, h = Math.max(20, m - 8), L;
  if (d[0] !== p || d[1] !== R || d[2] !== h) L = p === void 0 || R === "wrap" ? p : gt(p, h), d[0] = p, d[1] = R, d[2] = h, d[3] = L;
  else L = d[3];
  let b = L;
  switch (o) {
    case "completed": {
      let C;
      if (d[4] === S) C = e(n, { color: "success", children: `  ${ne.tick} ` }), d[4] = C;
      else C = d[4];
      let u;
      if (d[5] !== l) u = e(n, { dimColor: true, children: l }), d[5] = l, d[6] = u;
      else u = d[6];
      let x;
      if (d[7] !== t || d[8] !== u) x = r(s, { children: [C, r(n, { children: [t, u] })] }), d[7] = t, d[8] = u, d[9] = x;
      else x = d[9];
      return x;
    }
    case "running": {
      let C;
      if (d[10] === S) C = e(s, { width: 4, paddingLeft: 2, children: e(ji, {}) }), d[10] = C;
      else C = d[10];
      let u;
      if (d[11] !== l) u = e(n, { dimColor: true, children: l }), d[11] = l, d[12] = u;
      else u = d[12];
      let x;
      if (d[13] !== t || d[14] !== u) x = r(s, { children: [C, r(n, { children: [t, "…", u] })] }), d[13] = t, d[14] = u, d[15] = x;
      else x = d[15];
      let N;
      if (d[16] !== b) N = b !== void 0 && b !== "" && e(s, { paddingLeft: 6, children: e(n, { dimColor: true, children: b }) }), d[16] = b, d[17] = N;
      else N = d[17];
      let A;
      if (d[18] !== h || d[19] !== i) A = e(D, { output: i, width: h }), d[18] = h, d[19] = i, d[20] = A;
      else A = d[20];
      let W;
      if (d[21] !== x || d[22] !== N || d[23] !== A) W = r(s, { flexDirection: "column", children: [x, N, A] }), d[21] = x, d[22] = N, d[23] = A, d[24] = W;
      else W = d[24];
      return W;
    }
    case "failed": {
      let C;
      if (d[25] === S) C = e(n, { color: "error", children: `  ${ne.cross} ` }), d[25] = C;
      else C = d[25];
      let u;
      if (d[26] !== l) u = e(n, { dimColor: true, children: l }), d[26] = l, d[27] = u;
      else u = d[27];
      let x;
      if (d[28] !== t || d[29] !== u) x = r(s, { children: [C, r(n, { children: [t, u] })] }), d[28] = t, d[29] = u, d[30] = x;
      else x = d[30];
      let N;
      if (d[31] !== b) N = b !== void 0 && b !== "" && e(s, { paddingLeft: 6, children: e(n, { color: "error", children: b }) }), d[31] = b, d[32] = N;
      else N = d[32];
      let A;
      if (d[33] !== h || d[34] !== i) A = e(D, { output: i, width: h }), d[33] = h, d[34] = i, d[35] = A;
      else A = d[35];
      let W;
      if (d[36] !== x || d[37] !== N || d[38] !== A) W = r(s, { flexDirection: "column", children: [x, N, A] }), d[36] = x, d[37] = N, d[38] = A, d[39] = W;
      else W = d[39];
      return W;
    }
    case "pending": {
      const C = `  ${ne.circle} ${t}${l}`;
      let u;
      if (d[40] !== C) u = e(s, { children: e(n, { dimColor: true, children: C }) }), d[40] = C, d[41] = u;
      else u = d[41];
      return u;
    }
  }
}
function D(c) {
  let g = w(7), { output: o, width: t } = c;
  if (o === void 0 || o.length === 0) {
    return null;
  }
  let p;
  if (g[0] !== o || g[1] !== t) {
    let i2;
    if (g[3] !== t) i2 = (f, a) => e(n, { dimColor: true, children: gt(f, t) }, a), g[3] = t, g[4] = i2;
    else i2 = g[4];
    p = o.map(i2);
    g[0] = o, g[1] = t, g[2] = p;
  } else p = g[2];
  let i;
  if (g[5] !== p) i = e(s, { flexDirection: "column", paddingLeft: 6, children: p }), g[5] = p, g[6] = i;
  else i = g[6];
  return i;
}
export {
  Dur,
  iat,
  xie
};
