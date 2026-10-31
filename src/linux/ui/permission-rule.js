// linux/ui/permission-rule.js — Claude Code 2.1.310（linux）模块 chunk-e56q1c5a.js
import { Fs } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { I, Or } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { w } from "./chunk-0ed4c357.js";
import { fe } from "../shared/async-hooks.5238.js";
import { Zo } from "../fs/utf-8.aa9a.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { j8t, W8t } from "../terminal/ink-renderer.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { Ge } from "./aria-hidden.8741.js";
import { Kjt, Vjt } from "../context/org-memory-writes-setting-changed.js";
import { Ec } from "../artifacts/utf-8.js";
import { eqn, J3, uan, rqn } from "../settings/settings-change-staged.js";
import { Pf, tb } from "./chunk-4425ad7b.js";
import { my } from "../git/remote-workspace-diff-fetch.js";
import { Hv } from "./chunk-eb304a9e.js";
import { jie, B3t } from "./chunk-e9dcbeff.js";
import { vg } from "../shell/tool-use-error.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { pi } from "../shared/chunk-1b66b4d6.js";
import { ro, Yr, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
j();
import { isAbsolute as ce, resolve as pe } from "path";
function le(i, o, a = 1 / 0) {
  let c = o <= 0 || !Number.isFinite(o), p = 0, f = 0;
  while (f <= i.length) {
    let h = i.indexOf(`
`, f), u = h === -1 ? i.substring(f) : i.substring(f, h);
    if (c) p++;
    else {
      let b = j8t(u);
      p += b === 0 ? 1 : Math.ceil(b / o);
    }
    if (p > a) return p;
    if (h === -1) break;
    f = h + 1;
  }
  return p;
}
function J(i, o, a) {
  return le(i, o, a) > a;
}
var g = 10, P = `
`;
function W(i) {
  let o = i.split(P);
  return i.endsWith(P) ? o.length - 1 : o.length;
}
function Q(i, o) {
  let a = W8t(i, o).height;
  return i.endsWith(P) ? a - 1 : a;
}
function F() {
  let i = w(1), o;
  if (i[0] === S) o = e(n, { dimColor: true, children: " — previous content replaced (no diff shown)" }), i[0] = o;
  else o = i[0];
  return o;
}
function fPn(i) {
  let d = w(38), { filePath: o, content: a, verbose: c, replacedUndiffedContent: p } = i, f = p === void 0 ? false : p, { columns: h } = Te(), u = Math.max(1, h - 12), b = a || "(No content)", v;
  if (d[0] !== a) v = W(a), d[0] = a, d[1] = v;
  else v = d[1];
  let m = v, R;
  if (d[2] !== b || d[3] !== u || d[4] !== c) R = c ? b : b.split(P).slice(0, g).join(P).slice(0, g * (u + 1)), d[2] = b, d[3] = u, d[4] = c, d[5] = R;
  else R = d[5];
  let T = R, Y = c ? 0 : Q(b, u) - g, C;
  if (d[6] !== m) C = e(n, { bold: true, children: m }), d[6] = m, d[7] = C;
  else C = d[7];
  let L;
  if (d[8] !== m) L = I(m, "line"), d[8] = m, d[9] = L;
  else L = d[9];
  let M;
  if (d[10] !== o || d[11] !== c) M = c ? o : Zo(o), d[10] = o, d[11] = c, d[12] = M;
  else M = d[12];
  let U;
  if (d[13] !== o || d[14] !== M) U = e(n, { bold: true, children: e(my, { filePath: o, children: M }) }), d[13] = o, d[14] = M, d[15] = U;
  else U = d[15];
  let _;
  if (d[16] !== f) _ = f && e(F, {}), d[16] = f, d[17] = _;
  else _ = d[17];
  let N;
  if (d[18] !== C || d[19] !== L || d[20] !== U || d[21] !== _) N = r(n, { children: ["Wrote ", C, " ", L, " to", " ", U, _] }), d[18] = C, d[19] = L, d[20] = U, d[21] = _, d[22] = N;
  else N = d[22];
  const q = c ? void 0 : "hidden", z = c ? void 0 : g;
  let H;
  if (d[23] !== T || d[24] !== o || d[25] !== u) H = e(Hv, { code: T, filePath: o, width: u }), d[23] = T, d[24] = o, d[25] = u, d[26] = H;
  else H = d[26];
  let K;
  if (d[27] !== q || d[28] !== z || d[29] !== H) K = e(s, { flexDirection: "column", overflowY: q, maxHeight: z, children: H }), d[27] = q, d[28] = z, d[29] = H, d[30] = K;
  else K = d[30];
  let O;
  if (d[31] !== Y || d[32] !== c) O = !c && e(tb, { count: Y, expandable: true }), d[31] = Y, d[32] = c, d[33] = O;
  else O = d[33];
  let ae;
  if (d[34] !== K || d[35] !== O || d[36] !== N) ae = e(Ge, { children: r(s, { flexDirection: "column", children: [N, K, O] }) }), d[34] = K, d[35] = O, d[36] = N, d[37] = ae;
  else ae = d[37];
  return ae;
}
function ne({ type: i, content: o, structuredPatch: a, originalFile: c }) {
  return i === "update" && Array.isArray(a) && a.length === 0 && c === null && typeof o === "string" && o !== "";
}
function HEi(i, { columns: o }) {
  let { type: a, content: c } = i;
  if (a !== "create" && !ne(i)) return false;
  if (typeof c !== "string") return false;
  let p = c.endsWith(P) ? g + 1 : g;
  return J(c, Math.max(1, o - 12), p);
}
function LEi(i, { verbose: o }) {
  if (!i.file_path) return null;
  if (i.file_path.startsWith(Ec())) return "";
  return e(my, { filePath: i.file_path, children: o ? i.file_path : Zo(i.file_path) });
}
function NEi({ file_path: i, content: o }, { style: a, verbose: c }) {
  return e(ie, { filePath: i, content: o, style: a, verbose: c });
}
function ie(i) {
  let f = w(20), { filePath: o, content: a, style: c, verbose: p } = i, h;
  if (f[0] !== a || f[1] !== o) h = () => re(o, a), f[0] = a, f[1] = o, f[2] = h;
  else h = f[2];
  let [u] = y(h), b;
  if (f[3] !== a) b = Or(a), f[3] = a, f[4] = b;
  else b = f[4];
  let d = b, v;
  if (f[5] !== a || f[6] !== o || f[7] !== d || f[8] !== p) v = e(jie, { file_path: o, operation: "write", content: a, firstLine: d, verbose: p }), f[5] = a, f[6] = o, f[7] = d, f[8] = p, f[9] = v;
  else v = f[9];
  let m = v, R;
  if (f[10] !== m || f[11] !== u || f[12] !== o || f[13] !== d || f[14] !== c || f[15] !== p) R = e(G, { promise: u, filePath: o, firstLine: d, createFallback: m, style: c, verbose: p }), f[10] = m, f[11] = u, f[12] = o, f[13] = d, f[14] = c, f[15] = p, f[16] = R;
  else R = f[16];
  let T;
  if (f[17] !== m || f[18] !== R) T = e(ro, { fallback: m, children: R }), f[17] = m, f[18] = R, f[19] = T;
  else T = f[19];
  return T;
}
function G(i) {
  let b = w(8), { promise: o, filePath: a, firstLine: c, createFallback: p, style: f, verbose: h } = i, u = Yr(o);
  if (u.type === "create") {
    return p;
  }
  if (u.type === "error") {
    let d2;
    if (b[0] === S) d2 = e(Ge, { children: e(n, { children: "(No changes)" }) }), b[0] = d2;
    else d2 = b[0];
    return d2;
  }
  let d;
  if (b[1] !== u.oldContent || b[2] !== u.patch || b[3] !== a || b[4] !== c || b[5] !== f || b[6] !== h) d = e(jie, { file_path: a, operation: "update", patch: u.patch, firstLine: c, fileContent: u.oldContent, style: f, verbose: h }), b[1] = u.oldContent, b[2] = u.patch, b[3] = a, b[4] = c, b[5] = f, b[6] = h, b[7] = d;
  else d = b[7];
  return d;
}
async function re(i, o) {
  try {
    let a = ce(i) ? i : pe(fe(), i), c = await uan(a);
    if (c === null) return { type: "create" };
    let p;
    try {
      p = await rqn(c);
    } finally {
      await c.close();
    }
    if (p === null) return { type: "create" };
    return { type: "update", patch: J3({ filePath: i, fileContents: p, edits: [{ old_string: p, new_string: o, replace_all: false }] }), oldContent: p };
  } catch (a) {
    if (Fs(a)) t(`Failed to load rejection diff for ${i}: ${a.message}`, { level: "error" });
    else l(a);
    return { type: "error" };
  }
}
function $Ei(i, { verbose: o, toolDenialKind: a }) {
  if (!o && a !== "permission-rule" && typeof i === "string" && pi(i, "tool_use_error")) return e(Ge, { children: e(n, { color: "error", children: "Error writing file" }) });
  return e(vg, { result: i, verbose: o });
}
function FEi(i, o, { style: a, verbose: c }) {
  if (i.staged && i.filePath) return e(Ge, { children: e(n, { dimColor: true, children: eqn }) });
  return se(i, o, { style: a, verbose: c });
}
function se(i, o, { style: a, verbose: c, replacedUndiffedContent: p = false }) {
  let { filePath: f = "", content: h, structuredPatch: u, type: b, originalFile: d } = i;
  if (!f) return null;
  switch (b) {
    case "create": {
      if (f.startsWith(Ec()) && !c) {
        if (a !== "condensed") return e(Ge, { children: e(n, { dimColor: true, children: "/plan to preview" }) });
      } else if (a === "condensed" && !c) {
        let m = W(h);
        return r(n, { children: ["Wrote ", e(n, { bold: true, children: m }), " ", I(m, "line"), " to", " ", e(n, { bold: true, children: e(my, { filePath: f, children: Zo(f) }) }), p && e(F, {})] });
      } else if (!c && (Kjt(f) || Vjt(f))) {
        let m = W(h);
        return e(Ge, { children: r(n, { children: ["Wrote ", e(n, { bold: true, children: m }), " ", I(m, "line"), p && e(F, {}), " ", e(Pf, {})] }) });
      }
      return e(fPn, { filePath: f, content: h, verbose: c, replacedUndiffedContent: p });
    }
    case "update": {
      if (ne(i)) return se({ ...i, type: "create" }, o, { style: a, verbose: c, replacedUndiffedContent: true });
      let v = f.startsWith(Ec());
      return e(B3t, { filePath: f, structuredPatch: u, firstLine: Or(h), fileContent: d ?? void 0, style: a, verbose: c, previewHint: v ? "/plan to preview" : void 0, collapsed: !v && (Kjt(f) || Vjt(f)) });
    }
  }
}
export {
  $Ei,
  FEi,
  HEi,
  LEi,
  NEi,
  fPn
};
