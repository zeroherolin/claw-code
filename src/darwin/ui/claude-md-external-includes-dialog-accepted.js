// darwin/ui/claude-md-external-includes-dialog-accepted.js — Claude Code 2.1.310（darwin）模块 chunk-bvq08yze.js
import { c } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { I } from "../shared/chunk-d2c47492.js";
import { ch } from "../settings/global-config-and-gates.js";
import { Me } from "../shared/chunk-be0ce119.js";
import { w } from "./chunk-0ed4c357.js";
import { s, n, Yt } from "../telemetry/render-glyph-cardinality.js";
import { Ma, tS, xc, Go } from "./aria-hidden.aa9d.js";
import { Jn } from "../context/org-memory-writes-setting-changed.js";
import { cr } from "./chunk-783db08b.js";
import { we } from "./keybinding-auto-hints.js";
import { TPe } from "../shared/chunk-8b4d4a17.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { P, A, j } from "../vendor/react/chunk-9a0b1ced.js";
import { b } from "../vendor/react/chunk-0b0bf45d.js";
j();
function me() {
  a("tengu_claude_md_includes_dialog_shown", {});
}
function ge(De, Ee) {
  return r(n, { dimColor: true, wrap: "truncate-middle", children: ["  ", Jn(De.path)] }, Ee);
}
function DPn(g, h, o) {
  ch((l) => ({ ...l, hasClaudeMdExternalIncludesApproved: g, hasClaudeMdExternalIncludesWarningShown: true }), o), a(g ? "tengu_claude_md_external_includes_dialog_accepted" : "tengu_claude_md_external_includes_dialog_declined", { source: c(h) });
}
function wmr(g) {
  let t = w(37), { onDone: h, isStandaloneDialog: o, externalIncludes: l } = g, { storageV5: k } = Me(), G;
  if (t[0] === b) G = [], t[0] = G;
  else G = t[0];
  P(me, G);
  let d = Ma(), { refusedWithin: u, noteRefused: p, epoch: Ie } = Go(), z;
  if (t[1] !== d || t[2] !== p || t[3] !== u) z = function y2() {
    if (d() || u()) {
      return p(), true;
    }
    return false;
  }, t[1] = d, t[2] = p, t[3] = u, t[4] = z;
  else z = t[4];
  let y = z, L = tS(), O = xc(Ie), H;
  if (t[5] !== l) H = l ?? [], t[5] = l, t[6] = H;
  else H = t[6];
  let f = H, J;
  if (t[7] !== f) J = f.length <= TPe ? f : f.slice(0, TPe - 2), t[7] = f, t[8] = J;
  else J = t[8];
  let X = J, W = f.slice(X.length), Z = A(false), ee;
  if (t[9] !== d || t[10] !== p || t[11] !== h || t[12] !== u || t[13] !== k) ee = (ye) => {
    if (d() || u()) {
      p();
      return;
    }
    if (Z.current) {
      return;
    }
    Z.current = true, DPn(ye === "yes", "dialog", k), h();
  }, t[9] = d, t[10] = p, t[11] = h, t[12] = u, t[13] = k, t[14] = ee;
  else ee = t[14];
  let i = ee, te;
  if (t[15] !== i) te = () => {
    i("no");
  }, t[15] = i, t[16] = te;
  else te = t[16];
  let M = te;
  const B = we, xe = "Allow external CLAUDE.md file imports?", Ce = "warning", U = !o, N = !o;
  let x;
  if (t[17] === b) x = e(n, { children: "This project's CLAUDE.md or .claude/rules imports files outside the current working directory. Never allow this for third-party repositories." }), t[17] = x;
  else x = t[17];
  const F = l && l.length > 0 && r(s, { flexDirection: "column", children: [e(n, { dimColor: true, children: "External imports:" }), X.map(ge), W.length > 0 ? r(Q, { children: [r(n, { dimColor: true, wrap: "truncate", children: ["  ", "… +", W.length, " ", I(W.length, "import"), " not shown."] }), r(n, { dimColor: true, wrap: "truncate", children: ["  ", "Yes covers those too, plus any this project adds later."] })] }) : null] });
  let oe;
  if (t[18] === b) oe = r(n, { dimColor: true, children: ["Important: Only use Claude Code with files you trust. Accessing untrusted files may pose security risks", " ", e(Yt, { url: "https://code.claude.com/docs/en/security" }), " "] }), t[18] = oe;
  else oe = t[18];
  let C, D;
  if (t[19] !== i) C = () => i("yes"), D = () => i("no"), t[19] = i, t[20] = C, t[21] = D;
  else C = t[20], D = t[21];
  let E;
  if (t[22] !== O.remountKey || t[23] !== y || t[24] !== L || t[25] !== C || t[26] !== D) E = e(cr, { refuseInput: y, openedAt: L, hideIndexes: true, confirmLabel: "Yes, allow external imports", cancelLabel: "No, disable external imports", cancelFirst: true, focus: "cancel", onConfirm: C, onCancel: D }, O.remountKey), t[22] = O.remountKey, t[23] = y, t[24] = L, t[25] = C, t[26] = D, t[27] = E;
  else E = t[27];
  let ne;
  if (t[28] !== B || t[29] !== M || t[30] !== o || t[31] !== N || t[32] !== x || t[33] !== F || t[34] !== E || t[35] !== U) ne = r(B, { title: xe, color: Ce, onCancel: M, exitOnCtrlCD: o, hideBorder: U, hideInputGuide: N, children: [x, F, oe, E] }), t[28] = B, t[29] = M, t[30] = o, t[31] = N, t[32] = x, t[33] = F, t[34] = E, t[35] = U, t[36] = ne;
  else ne = t[36];
  return ne;
}
export {
  DPn,
  wmr
};
