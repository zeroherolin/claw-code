// ui/changes-requested.mymb.js — Claude Code 2.1.310 模块 chunk-mymbm0ph.js
import { QUe, pw } from "../terminal/no-hyperlinks.md9p.js";
import { g, p } from "../telemetry/chunk-wn8xtaqg.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { i } from "../shared/environment.9a41.js";
import { qi } from "../shared/async-hooks.t1gs.js";
import { w } from "./chunk-zqxc4qtb.js";
import { n, Yt } from "../telemetry/render-glyph-cardinality.7car.js";
import { K } from "../shared/chunk-p82eferg.js";
import { CJ } from "../context/team-memory-sync.0s3j.js";
import { Q, e, r } from "../vendor/react/chunk-f790ajz4.js";
import { P, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
j();
var imr = "current-pr";
function Tto(s, o) {
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
function Ato(s, o, d) {
  P(() => {
    if (o === void 0) return;
    S(s, o, d === "cr" || d === "mr");
  }, [s, o, d]);
}
function fe(ge) {
  return ge.settings?.prUrlTemplate;
}
function Gie(s) {
  let c = w(41), { number: o, url: d, reviewState: u, bold: l, color: f, dimColor: b, inverse: a, underline: x, hidePrefix: A, kind: Z } = s, be = x === void 0 ? true : x, R = Z === "cr" && false, m = Z === "mr", C = m ? "!" : "#", I = K(fe), ee;
  if (c[0] !== R || c[1] !== m || c[2] !== I || c[3] !== d) ee = R || m ? d : CJ(d, I), c[0] = R, c[1] = m, c[2] = I, c[3] = d, c[4] = ee;
  else ee = c[4];
  let v = ee, re, oe;
  if (c[5] !== R || c[6] !== m || c[7] !== d || c[8] !== v) re = () => {
    S(v, d, R || m);
  }, oe = [v, d, R, m], c[5] = R, c[6] = m, c[7] = d, c[8] = v, c[9] = re, c[10] = oe;
  else re = c[9], oe = c[10];
  P(re, oe);
  let te;
  if (c[11] !== f || c[12] !== u) te = f ?? V(u), c[11] = f, c[12] = u, c[13] = te;
  else te = c[13];
  let _ = te, k = !a && (b || !_ && !l), ne;
  if (c[14] !== l || c[15] !== k || c[16] !== C || c[17] !== a || c[18] !== o || c[19] !== _) ne = r(n, { color: _, dimColor: k, bold: l, inverse: a, children: [C, o] }), c[14] = l, c[15] = k, c[16] = C, c[17] = a, c[18] = o, c[19] = _, c[20] = ne;
  else ne = c[20];
  let B = ne, U;
  if (c[21] !== l || c[22] !== b || c[23] !== A || c[24] !== m) U = !A && r(Q, { children: [e(n, { dimColor: b || !l, children: m ? "MR" : "PR" }), " "] }), c[21] = l, c[22] = b, c[23] = A, c[24] = m, c[25] = U;
  else U = c[25];
  const G = !a && be;
  let F;
  if (c[26] !== l || c[27] !== k || c[28] !== C || c[29] !== a || c[30] !== o || c[31] !== _ || c[32] !== G) F = r(n, { color: _, dimColor: k, underline: G, bold: l, inverse: a, children: [C, o] }), c[26] = l, c[27] = k, c[28] = C, c[29] = a, c[30] = o, c[31] = _, c[32] = G, c[33] = F;
  else F = c[33];
  let O;
  if (c[34] !== B || c[35] !== F || c[36] !== v) O = e(Yt, { url: v, fallback: B, assumeSupport: true, children: F }), c[34] = B, c[35] = F, c[36] = v, c[37] = O;
  else O = c[37];
  let ie;
  if (c[38] !== O || c[39] !== U) ie = r(n, { children: [U, O] }), c[38] = O, c[39] = U, c[40] = ie;
  else ie = c[40];
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
function ME(s) {
  let l = w(10), { added: o, removed: d, bold: u } = s;
  if (o === 0 && d === 0) {
    return null;
  }
  let f;
  if (l[0] !== o || l[1] !== u) f = o > 0 && r(n, { color: "diffAddedWord", bold: u, children: ["+", o] }), l[0] = o, l[1] = u, l[2] = f;
  else f = l[2];
  const b = o > 0 && d > 0 && " ";
  let a;
  if (l[3] !== u || l[4] !== d) a = d > 0 && r(n, { color: "diffRemovedWord", bold: u, children: ["-", d] }), l[3] = u, l[4] = d, l[5] = a;
  else a = l[5];
  let x;
  if (l[6] !== f || l[7] !== b || l[8] !== a) x = r(n, { children: [f, b, a] }), l[6] = f, l[7] = b, l[8] = a, l[9] = x;
  else x = l[9];
  return x;
}
export {
  Ato,
  Gie,
  ME,
  Tto,
  imr
};
