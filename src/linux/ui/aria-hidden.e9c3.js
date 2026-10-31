// linux/ui/aria-hidden.e9c3.js — Claude Code 2.1.310（linux）模块 chunk-j8p1px77.js
import { WL, XK } from "../shared/general-purpose.js";
import { w } from "./chunk-0ed4c357.js";
import { lkt, pSn } from "../fs/reply-across-default-dirs.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { ka } from "../shared/action-not-found.e210.js";
import { V } from "../context/chunk-e2302e3b.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { ne } from "../workflows/workflow-size-guideline-change.js";
import { ee, j } from "../vendor/react/chunk-9a0b1ced.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
var G = "cyan_FOR_SUBAGENTS_ONLY";
function VM(a) {
  if (!a) return G;
  if (XK(a)) return WL[a];
  return `ansi:${a}`;
}
j();
var N = { keyCase: "lower" };
function Bie(a) {
  let o = w(19), { displayName: f, qualifier: E, count: k, addMargin: M, fallbackLabel: c, body: t } = a, R = k === void 0 ? 1 : k, H = M === void 0 ? true : M, b = ka("app:toggleTranscript", "Global", "ctrl+o"), h;
  if (o[0] !== f || o[1] !== c) h = lkt(f) || c, o[0] = f, o[1] = c, o[2] = h;
  else h = o[2];
  let u = h, A;
  if (o[3] !== t) A = t ? pSn(t) : "", o[3] = t, o[4] = A;
  else A = o[4];
  let i = A;
  const g = H ? 1 : 0;
  let P;
  if (o[5] === S) P = r(n, { "aria-hidden": true, children: [ne.pointerSmall, " "] }), o[5] = P;
  else P = o[5];
  const y = R === 1 ? "Message" : `${R} messages`, T = E ? ` (${E})` : "";
  let p;
  if (o[6] !== i) p = i ? r(n, { italic: true, children: [": ", i] }) : "", o[6] = i, o[7] = p;
  else p = o[7];
  let l;
  if (o[8] !== b) l = e(V, { chord: b, action: "expand", parens: true, format: N }), o[8] = b, o[9] = l;
  else l = o[9];
  let m;
  if (o[10] !== u || o[11] !== l || o[12] !== y || o[13] !== T || o[14] !== p) m = r(n, { dimColor: true, children: [P, y, " from @", u, T, p, " ", l] }), o[10] = u, o[11] = l, o[12] = y, o[13] = T, o[14] = p, o[15] = m;
  else m = o[15];
  let q;
  if (o[16] !== m || o[17] !== g) q = e(s, { marginTop: g, children: m }), o[16] = m, o[17] = g, o[18] = q;
  else q = o[18];
  return q;
}
export {
  Bie,
  VM
};
