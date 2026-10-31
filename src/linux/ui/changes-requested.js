// linux/ui/changes-requested.js — Claude Code 2.1.310（linux）模块 chunk-ed0saqtf.js
import { GUe, uw } from "../terminal/no-hyperlinks.js";
import { g, f } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "../shared/environment.js";
import { qi } from "../shared/async-hooks.b037.js";
import { w } from "./chunk-0ed4c357.js";
import { n, Yt } from "../telemetry/render-glyph-cardinality.js";
import { K } from "../shared/chunk-e4a3aa33.js";
import { yQ } from "../context/team-memory-sync.js";
import { Q, e, r } from "../vendor/react/chunk-40234545.js";
import { P, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
j();
var Gpr = "current-pr";
function tto(s, o) {
  if (!s || !o) return null;
  let d = s.kind === "cr" && false, u = s.kind === "mr";
  return { prefix: u ? "MR" : "PR", label: `${u ? "!" : "#"}${s.number}`, url: o, dedupUrl: s.url, color: de(s.reviewState) };
}
function de(s) {
  switch (s) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return;
  }
}
function S(s, o, d) {
  return;
}
function nto(s, o, d) {
  P(() => {
    if (o === void 0) return;
    S(s, o, d === "cr" || d === "mr");
  }, [s, o, d]);
}
function fe(ge) {
  return ge.settings?.prUrlTemplate;
}
function Lie(s) {
  let p = w(41), { number: o, url: d, reviewState: u, bold: l, color: c, dimColor: b, inverse: a, underline: x, hidePrefix: A, kind: Z } = s, be = x === void 0 ? true : x, R = Z === "cr" && false, m = Z === "mr", C = m ? "!" : "#", I = K(fe), ee;
  if (p[0] !== R || p[1] !== m || p[2] !== I || p[3] !== d) ee = R || m ? d : yQ(d, I), p[0] = R, p[1] = m, p[2] = I, p[3] = d, p[4] = ee;
  else ee = p[4];
  let v = ee, re, oe;
  if (p[5] !== R || p[6] !== m || p[7] !== d || p[8] !== v) re = () => {
    S(v, d, R || m);
  }, oe = [v, d, R, m], p[5] = R, p[6] = m, p[7] = d, p[8] = v, p[9] = re, p[10] = oe;
  else re = p[9], oe = p[10];
  P(re, oe);
  let te;
  if (p[11] !== c || p[12] !== u) te = c ?? V(u), p[11] = c, p[12] = u, p[13] = te;
  else te = p[13];
  let _ = te, k = !a && (b || !_ && !l), ne;
  if (p[14] !== l || p[15] !== k || p[16] !== C || p[17] !== a || p[18] !== o || p[19] !== _) ne = r(n, { color: _, dimColor: k, bold: l, inverse: a, children: [C, o] }), p[14] = l, p[15] = k, p[16] = C, p[17] = a, p[18] = o, p[19] = _, p[20] = ne;
  else ne = p[20];
  let B = ne, U;
  if (p[21] !== l || p[22] !== b || p[23] !== A || p[24] !== m) U = !A && r(Q, { children: [e(n, { dimColor: b || !l, children: m ? "MR" : "PR" }), " "] }), p[21] = l, p[22] = b, p[23] = A, p[24] = m, p[25] = U;
  else U = p[25];
  const G = !a && be;
  let F;
  if (p[26] !== l || p[27] !== k || p[28] !== C || p[29] !== a || p[30] !== o || p[31] !== _ || p[32] !== G) F = r(n, { color: _, dimColor: k, underline: G, bold: l, inverse: a, children: [C, o] }), p[26] = l, p[27] = k, p[28] = C, p[29] = a, p[30] = o, p[31] = _, p[32] = G, p[33] = F;
  else F = p[33];
  let O;
  if (p[34] !== B || p[35] !== F || p[36] !== v) O = e(Yt, { url: v, fallback: B, assumeSupport: true, children: F }), p[34] = B, p[35] = F, p[36] = v, p[37] = O;
  else O = p[37];
  let ie;
  if (p[38] !== O || p[39] !== U) ie = r(n, { children: [U, O] }), p[38] = O, p[39] = U, p[40] = ie;
  else ie = p[40];
  return ie;
}
function V(s) {
  switch (s) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return;
  }
}
function Ov(s) {
  let l = w(10), { added: o, removed: d, bold: u } = s;
  if (o === 0 && d === 0) {
    return null;
  }
  let c;
  if (l[0] !== o || l[1] !== u) c = o > 0 && r(n, { color: "diffAddedWord", bold: u, children: ["+", o] }), l[0] = o, l[1] = u, l[2] = c;
  else c = l[2];
  const b = o > 0 && d > 0 && " ";
  let a;
  if (l[3] !== u || l[4] !== d) a = d > 0 && r(n, { color: "diffRemovedWord", bold: u, children: ["-", d] }), l[3] = u, l[4] = d, l[5] = a;
  else a = l[5];
  let x;
  if (l[6] !== c || l[7] !== b || l[8] !== a) x = r(n, { children: [c, b, a] }), l[6] = c, l[7] = b, l[8] = a, l[9] = x;
  else x = l[9];
  return x;
}
export {
  Gpr,
  Lie,
  Ov,
  nto,
  tto
};
