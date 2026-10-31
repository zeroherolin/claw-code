// linux/ui/chunk-61f50343.js — Claude Code 2.1.310（linux）模块 chunk-qdz0773v.js
import { w } from "./chunk-0ed4c357.js";
import { F } from "../context/not-admin-owned.js";
import { V } from "../context/chunk-e2302e3b.js";
import { Zo } from "../fs/utf-8.aa9a.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { Ge } from "./aria-hidden.8741.js";
import { jI } from "../shared/chunk-01d7baee.js";
import { con, KPo } from "../core/conversation-engine.js";
import { Pf } from "./chunk-4425ad7b.js";
import { H6 } from "./aria-hidden.3bf7.js";
import { vpe } from "./chunk-8231a0ec.js";
import { llt } from "../shell/tool-use-error.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { ee, j } from "../vendor/react/chunk-9a0b1ced.js";
import { S, vn } from "../vendor/react/chunk-0b0bf45d.js";
j();
var te = 40, U = "(another command ran in this repository at the same time; a change made by either may show under either result)", ne = "(a git step in this command can move the working tree, so these may be its changes, not edits)", X = null;
function B({ diff: t, verbose: l, style: o, treeMoved: c }) {
  let { columns: h } = Te();
  if (t.skipped || (t.unavailable || t.shared) && t.files.length === 0) return e(Ge, { children: e(n, { dimColor: true, children: t.skipped ? "(file diff skipped for this git command)" : t.unavailable ? t.moreFiles > 0 ? `(file diff unavailable for this command; ${q(t.moreFiles)} changed)` : "(file diff unavailable for this command)" : U }) });
  X ??= t;
  let i = l || X === t ? "(files that changed while this command ran, by the command or by another process; a convenience view, not a review or audit of the command)" : null, u = t.shared ? U : null, k = (o === "condensed" || c) && !l;
  return r(s, { flexDirection: "column", children: [t.files.map((d) => {
    let b = d.hunks.flatMap((a) => a.lines), v = d.created ? "Created" : d.deleted ? "Deleted" : "Updated", { hunks: x, hiddenLines: m } = l ? { hunks: d.hunks, hiddenLines: 0 } : oe(d.hunks, te);
    return e(Ge, { children: r(s, { flexDirection: "column", children: [r(n, { children: [v, " ", e(n, { bold: true, children: l ? d.filePath : Zo(d.filePath) }), " ", r(n, { dimColor: true, children: ["(+", F(b, (a) => a.startsWith("+")), " -", F(b, (a) => a.startsWith("-")), ")"] })] }), k ? null : e(H6, { hunks: x, dim: false, width: h - 12, filePath: d.filePath, firstLine: null }), m > 0 && !k ? r(n, { dimColor: true, children: ["… ", m, " more lines ", e(Pf, {})] }) : null] }) }, d.filePath);
  }), t.moreFiles > 0 ? e(Ge, { children: r(n, { dimColor: true, children: [t.files.length > 0 ? `… ${t.moreFiles} more ${t.moreFiles === 1 ? "file" : "files"} changed` : `${q(t.moreFiles)} changed (binary, mode only or too large to show)`, t.unavailable ? " (part of the diff is unavailable)" : ""] }) }) : null, c ? e(Ge, { children: r(n, { dimColor: true, children: [ne, l ? null : r(Q, { children: [" ", e(Pf, {})] })] }) }) : null, u ? e(Ge, { children: e(n, { dimColor: true, children: u }) }) : null, i ? e(Ge, { children: e(n, { dimColor: true, children: i }) }) : null] });
}
function q(t) {
  return `${t} ${t === 1 ? "file" : "files"}`;
}
function oe(t, l) {
  let o = [], c = 0, h = 0;
  for (let i of t) {
    let u = l - c;
    if (u <= 0) h += i.lines.length;
    else if (i.lines.length <= u) o.push(i), c += i.lines.length;
    else o.push({ ...i, lines: i.lines.slice(0, u) }), h += i.lines.length - u, c = l;
  }
  return { hunks: o, hiddenLines: h };
}
function G(t) {
  if (!t.match(/<sandbox_violations>([\s\S]*?)<\/sandbox_violations>/)) return { cleanedStderr: t };
  return { cleanedStderr: llt(t).trim() };
}
function J(t) {
  let l = t.match(con);
  if (!l) return { cleanedStderr: t, cwdResetWarning: null };
  let o = l[1] ?? null;
  return { cleanedStderr: t.replace(con, "").trim(), cwdResetWarning: o };
}
function alt(t) {
  let p = w(44), { content: l, verbose: o, timeoutMs: c, style: h, command: i } = t, { stdout: u, stderr: k, isImage: d, returnCodeInterpretation: b, noOutputExpected: v, backgroundTaskId: x, bashEditDiff: m } = l, a = u === void 0 ? "" : u, H = k === void 0 ? "" : k, Y;
  if (p[0] !== m || p[1] !== i) Y = m !== void 0 && i !== void 0 && KPo(i), p[0] = m, p[1] = i, p[2] = Y;
  else Y = p[2];
  let A = Y, y, f, E, M, T, D, z;
  if (p[3] !== d || p[4] !== H || p[5] !== a || p[6] !== o) {
    z = vn;
    Fe: {
      let { cleanedStderr: ue } = G(H);
      ({ cleanedStderr: E, cwdResetWarning: f } = J(ue));
      if (d) {
        let g2;
        if (p[14] === S) g2 = e(Ge, { height: 1, children: e(n, { dimColor: true, children: "[Image data detected and sent to Claude]" }) }), p[14] = g2;
        else g2 = p[14];
        z = g2;
        break Fe;
      }
      y = s;
      M = "column";
      if (p[15] !== a || p[16] !== o) T = a !== "" ? e(jI, { content: a, verbose: o }) : null, p[15] = a, p[16] = o, p[17] = T;
      else T = p[17];
      D = E.trim() !== "" ? e(jI, { content: E, verbose: o, isError: true }) : null;
    }
    p[3] = d, p[4] = H, p[5] = a, p[6] = o, p[7] = y, p[8] = f, p[9] = E, p[10] = M, p[11] = T, p[12] = D, p[13] = z;
  } else y = p[7], f = p[8], E = p[9], M = p[10], T = p[11], D = p[12], z = p[13];
  if (z !== vn) return z;
  let g;
  if (p[18] !== f) g = f ? e(Ge, { children: e(n, { dimColor: true, children: f }) }) : null, p[18] = f, p[19] = g;
  else g = p[19];
  let C;
  if (p[20] !== m || p[21] !== h || p[22] !== A || p[23] !== o) C = m ? e(B, { diff: m, verbose: o, style: h, treeMoved: A }) : null, p[20] = m, p[21] = h, p[22] = A, p[23] = o, p[24] = C;
  else C = p[24];
  let P;
  if (p[25] !== x || p[26] !== m || p[27] !== f || p[28] !== v || p[29] !== b || p[30] !== E || p[31] !== a) P = a === "" && E.trim() === "" && !f && !m ? e(Ge, { height: 1, children: e(n, { dimColor: true, children: x ? r(Q, { children: ["Running in the background", " ", e(V, { chord: "down", action: "manage", parens: true })] }) : b || (v ? "Done" : "(No output)") }) }) : null, p[25] = x, p[26] = m, p[27] = f, p[28] = v, p[29] = b, p[30] = E, p[31] = a, p[32] = P;
  else P = p[32];
  let W;
  if (p[33] !== c) W = c && e(Ge, { children: e(vpe, { timeoutMs: c }) }), p[33] = c, p[34] = W;
  else W = p[34];
  let Z;
  if (p[35] !== y || p[36] !== C || p[37] !== P || p[38] !== W || p[39] !== M || p[40] !== T || p[41] !== D || p[42] !== g) Z = r(y, { flexDirection: M, children: [T, D, g, C, P, W] }), p[35] = y, p[36] = C, p[37] = P, p[38] = W, p[39] = M, p[40] = T, p[41] = D, p[42] = g, p[43] = Z;
  else Z = p[43];
  return Z;
}
export {
  alt
};
