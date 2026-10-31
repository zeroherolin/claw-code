// ui/aria-hidden.pbff.js — Claude Code 2.1.310 模块 chunk-pbff90y7.js
import { VD, aV } from "../shared/general-purpose.t0jz.js";
import { w } from "./chunk-zqxc4qtb.js";
import { gkt, Pbn } from "../fs/reply-across-default-dirs.esvz.js";
import { s, n } from "../telemetry/render-glyph-cardinality.7car.js";
import { Ca } from "../shared/action-not-found.ek51.js";
import { q } from "../context/chunk-d05584w8.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { ne } from "../workflows/workflow-size-guideline-change.1rc0.js";
import { te, j } from "../vendor/react/chunk-s8vmszp2.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
var S = "cyan_FOR_SUBAGENTS_ONLY";
function JM(a) {
  if (!a) return S;
  if (aV(a)) return VD[a];
  return `ansi:${a}`;
}
j();
var _ = { keyCase: "lower" };
function Yie(a) {
  let o = w(19), { displayName: f, qualifier: k, count: M, addMargin: R, fallbackLabel: c, body: t } = a, h = M === void 0 ? 1 : M, U = R === void 0 ? true : R, u = Ca("app:toggleTranscript", "Global", "ctrl+o"), A;
  if (o[0] !== f || o[1] !== c) A = gkt(f) || c, o[0] = f, o[1] = c, o[2] = A;
  else A = o[2];
  let g = A, P;
  if (o[3] !== t) P = t ? Pbn(t) : "", o[3] = t, o[4] = P;
  else P = o[4];
  let i = P;
  const y = U ? 1 : 0;
  let G;
  if (o[5] === b) G = r(n, { "aria-hidden": true, children: [ne.pointerSmall, " "] }), o[5] = G;
  else G = o[5];
  const T = h === 1 ? "Message" : `${h} messages`, N = k ? ` (${k})` : "";
  let p;
  if (o[6] !== i) p = i ? r(n, { italic: true, children: [": ", i] }) : "", o[6] = i, o[7] = p;
  else p = o[7];
  let l;
  if (o[8] !== u) l = e(q, { chord: u, action: "expand", parens: true, format: _ }), o[8] = u, o[9] = l;
  else l = o[9];
  let m;
  if (o[10] !== g || o[11] !== l || o[12] !== T || o[13] !== N || o[14] !== p) m = r(n, { dimColor: true, children: [G, T, " from @", g, N, p, " ", l] }), o[10] = g, o[11] = l, o[12] = T, o[13] = N, o[14] = p, o[15] = m;
  else m = o[15];
  let v;
  if (o[16] !== m || o[17] !== y) v = e(s, { marginTop: y, children: m }), o[16] = m, o[17] = y, o[18] = v;
  else v = o[18];
  return v;
}
export {
  JM,
  Yie
};
