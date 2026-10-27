// ui/permission-rule.rwgs.js — Claude Code 2.1.310 模块 chunk-rwgskffh.js
import { $s } from "../telemetry/anthropic-workspace-id.36ys.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { I, Or } from "../shared/chunk-j79dwkaq.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { w } from "./chunk-zqxc4qtb.js";
import { pe } from "../shared/async-hooks.m2fg.js";
import { Zo } from "../fs/utf-8.fmbx.js";
import { s, n } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { tYt, nYt } from "../terminal/ink-renderer.pma0.js";
import { Ce } from "../shared/chunk-9vjqn6fm.js";
import { Ge } from "./aria-hidden.by9c.js";
import { oWt, sWt } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { vc } from "../artifacts/utf-8.vzjz.js";
import { wKn, a8, Tan, kKn } from "../settings/settings-change-staged.z8pz.js";
import { xp, nS } from "./chunk-d5gw4nh1.js";
import { hy } from "../git/remote-workspace-diff-fetch.6qej.js";
import { LE } from "./chunk-ntt0xt6a.js";
import { Xie, e8t } from "./chunk-rpb7t5zx.js";
import { Eg } from "../shell/tool-use-error.q2cq.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { fi } from "../shared/chunk-2m7ekyg2.js";
import { ro, Yr, y, j } from "../vendor/react/chunk-s8vmszp2.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
j();
import { isAbsolute as ce, resolve as fe } from "path";
function le(i, o, a = 1 / 0) {
  let c = o <= 0 || !Number.isFinite(o), p = 0, f = 0;
  while (f <= i.length) {
    let h = i.indexOf(`
`, f), u = h === -1 ? i.substring(f) : i.substring(f, h);
    if (c) p++;
    else {
      let g = tYt(u);
      p += g === 0 ? 1 : Math.ceil(g / o);
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
var P = 10, v = `
`;
function C(i) {
  let o = i.split(v);
  return i.endsWith(v) ? o.length - 1 : o.length;
}
function Q(i, o) {
  let a = nYt(i, o).height;
  return i.endsWith(v) ? a - 1 : a;
}
function T() {
  let i = w(1), o;
  if (i[0] === b) o = e(n, { dimColor: true, children: " — previous content replaced (no diff shown)" }), i[0] = o;
  else o = i[0];
  return o;
}
function iPn(i) {
  let d = w(38), { filePath: o, content: a, verbose: c, replacedUndiffedContent: p } = i, f = p === void 0 ? false : p, { columns: h } = Ce(), u = Math.max(1, h - 12), g = a || "(No content)", x;
  if (d[0] !== a) x = C(a), d[0] = a, d[1] = x;
  else x = d[1];
  let m = x, F;
  if (d[2] !== g || d[3] !== u || d[4] !== c) F = c ? g : g.split(v).slice(0, P).join(v).slice(0, P * (u + 1)), d[2] = g, d[3] = u, d[4] = c, d[5] = F;
  else F = d[5];
  let k = F, Y = c ? 0 : Q(g, u) - P, L;
  if (d[6] !== m) L = e(n, { bold: true, children: m }), d[6] = m, d[7] = L;
  else L = d[7];
  let M;
  if (d[8] !== m) M = I(m, "line"), d[8] = m, d[9] = M;
  else M = d[9];
  let U;
  if (d[10] !== o || d[11] !== c) U = c ? o : Zo(o), d[10] = o, d[11] = c, d[12] = U;
  else U = d[12];
  let _;
  if (d[13] !== o || d[14] !== U) _ = e(n, { bold: true, children: e(hy, { filePath: o, children: U }) }), d[13] = o, d[14] = U, d[15] = _;
  else _ = d[15];
  let N;
  if (d[16] !== f) N = f && e(T, {}), d[16] = f, d[17] = N;
  else N = d[17];
  let H;
  if (d[18] !== L || d[19] !== M || d[20] !== _ || d[21] !== N) H = r(n, { children: ["Wrote ", L, " ", M, " to", " ", _, N] }), d[18] = L, d[19] = M, d[20] = _, d[21] = N, d[22] = H;
  else H = d[22];
  const q = c ? void 0 : "hidden", z = c ? void 0 : P;
  let S;
  if (d[23] !== k || d[24] !== o || d[25] !== u) S = e(LE, { code: k, filePath: o, width: u }), d[23] = k, d[24] = o, d[25] = u, d[26] = S;
  else S = d[26];
  let K;
  if (d[27] !== q || d[28] !== z || d[29] !== S) K = e(s, { flexDirection: "column", overflowY: q, maxHeight: z, children: S }), d[27] = q, d[28] = z, d[29] = S, d[30] = K;
  else K = d[30];
  let O;
  if (d[31] !== Y || d[32] !== c) O = !c && e(nS, { count: Y, expandable: true }), d[31] = Y, d[32] = c, d[33] = O;
  else O = d[33];
  let ae;
  if (d[34] !== K || d[35] !== O || d[36] !== H) ae = e(Ge, { children: r(s, { flexDirection: "column", children: [H, K, O] }) }), d[34] = K, d[35] = O, d[36] = H, d[37] = ae;
  else ae = d[37];
  return ae;
}
function ne({ type: i, content: o, structuredPatch: a, originalFile: c }) {
  return i === "update" && Array.isArray(a) && a.length === 0 && c === null && typeof o === "string" && o !== "";
}
function oki(i, { columns: o }) {
  let { type: a, content: c } = i;
  if (a !== "create" && !ne(i)) return false;
  if (typeof c !== "string") return false;
  let p = c.endsWith(v) ? P + 1 : P;
  return J(c, Math.max(1, o - 12), p);
}
function ski(i, { verbose: o }) {
  if (!i.file_path) return null;
  if (i.file_path.startsWith(vc())) return "";
  return e(hy, { filePath: i.file_path, children: o ? i.file_path : Zo(i.file_path) });
}
function iki({ file_path: i, content: o }, { style: a, verbose: c }) {
  return e(ie, { filePath: i, content: o, style: a, verbose: c });
}
function ie(i) {
  let f = w(20), { filePath: o, content: a, style: c, verbose: p } = i, h;
  if (f[0] !== a || f[1] !== o) h = () => re(o, a), f[0] = a, f[1] = o, f[2] = h;
  else h = f[2];
  let [u] = y(h), g;
  if (f[3] !== a) g = Or(a), f[3] = a, f[4] = g;
  else g = f[4];
  let d = g, x;
  if (f[5] !== a || f[6] !== o || f[7] !== d || f[8] !== p) x = e(Xie, { file_path: o, operation: "write", content: a, firstLine: d, verbose: p }), f[5] = a, f[6] = o, f[7] = d, f[8] = p, f[9] = x;
  else x = f[9];
  let m = x, F;
  if (f[10] !== m || f[11] !== u || f[12] !== o || f[13] !== d || f[14] !== c || f[15] !== p) F = e(G, { promise: u, filePath: o, firstLine: d, createFallback: m, style: c, verbose: p }), f[10] = m, f[11] = u, f[12] = o, f[13] = d, f[14] = c, f[15] = p, f[16] = F;
  else F = f[16];
  let k;
  if (f[17] !== m || f[18] !== F) k = e(ro, { fallback: m, children: F }), f[17] = m, f[18] = F, f[19] = k;
  else k = f[19];
  return k;
}
function G(i) {
  let g = w(8), { promise: o, filePath: a, firstLine: c, createFallback: p, style: f, verbose: h } = i, u = Yr(o);
  if (u.type === "create") {
    return p;
  }
  if (u.type === "error") {
    let d2;
    if (g[0] === b) d2 = e(Ge, { children: e(n, { children: "(No changes)" }) }), g[0] = d2;
    else d2 = g[0];
    return d2;
  }
  let d;
  if (g[1] !== u.oldContent || g[2] !== u.patch || g[3] !== a || g[4] !== c || g[5] !== f || g[6] !== h) d = e(Xie, { file_path: a, operation: "update", patch: u.patch, firstLine: c, fileContent: u.oldContent, style: f, verbose: h }), g[1] = u.oldContent, g[2] = u.patch, g[3] = a, g[4] = c, g[5] = f, g[6] = h, g[7] = d;
  else d = g[7];
  return d;
}
async function re(i, o) {
  try {
    let a = ce(i) ? i : fe(pe(), i), c = await Tan(a);
    if (c === null) return { type: "create" };
    let p;
    try {
      p = await kKn(c);
    } finally {
      await c.close();
    }
    if (p === null) return { type: "create" };
    return { type: "update", patch: a8({ filePath: i, fileContents: p, edits: [{ old_string: p, new_string: o, replace_all: false }] }), oldContent: p };
  } catch (a) {
    if ($s(a)) t(`Failed to load rejection diff for ${i}: ${a.message}`, { level: "error" });
    else l(a);
    return { type: "error" };
  }
}
function aki(i, { verbose: o, toolDenialKind: a }) {
  if (!o && a !== "permission-rule" && typeof i === "string" && fi(i, "tool_use_error")) return e(Ge, { children: e(n, { color: "error", children: "Error writing file" }) });
  return e(Eg, { result: i, verbose: o });
}
function lki(i, o, { style: a, verbose: c }) {
  if (i.staged && i.filePath) return e(Ge, { children: e(n, { dimColor: true, children: wKn }) });
  return se(i, o, { style: a, verbose: c });
}
function se(i, o, { style: a, verbose: c, replacedUndiffedContent: p = false }) {
  let { filePath: f = "", content: h, structuredPatch: u, type: g, originalFile: d } = i;
  if (!f) return null;
  switch (g) {
    case "create": {
      if (f.startsWith(vc()) && !c) {
        if (a !== "condensed") return e(Ge, { children: e(n, { dimColor: true, children: "/plan to preview" }) });
      } else if (a === "condensed" && !c) {
        let m = C(h);
        return r(n, { children: ["Wrote ", e(n, { bold: true, children: m }), " ", I(m, "line"), " to", " ", e(n, { bold: true, children: e(hy, { filePath: f, children: Zo(f) }) }), p && e(T, {})] });
      } else if (!c && (oWt(f) || sWt(f))) {
        let m = C(h);
        return e(Ge, { children: r(n, { children: ["Wrote ", e(n, { bold: true, children: m }), " ", I(m, "line"), p && e(T, {}), " ", e(xp, {})] }) });
      }
      return e(iPn, { filePath: f, content: h, verbose: c, replacedUndiffedContent: p });
    }
    case "update": {
      if (ne(i)) return se({ ...i, type: "create" }, o, { style: a, verbose: c, replacedUndiffedContent: true });
      let x = f.startsWith(vc());
      return e(e8t, { filePath: f, structuredPatch: u, firstLine: Or(h), fileContent: d ?? void 0, style: a, verbose: c, previewHint: x ? "/plan to preview" : void 0, collapsed: !x && (oWt(f) || sWt(f)) });
    }
  }
}
export {
  aki,
  iPn,
  iki,
  lki,
  oki,
  ski
};
