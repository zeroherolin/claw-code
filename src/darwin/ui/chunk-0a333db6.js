// darwin/ui/chunk-0a333db6.js — Claude Code 2.1.310（darwin）模块 chunk-2zdz421s.js
import { w } from "./chunk-0ed4c357.js";
import { K } from "../shared/chunk-e4a3aa33.js";
import { ed } from "../models/ccr-unsupported-default-mode-ignored.js";
import { rt, s, Wa } from "../telemetry/render-glyph-cardinality.js";
import { Dwe } from "./aria-hidden.c79b.js";
import { Pp } from "../telemetry/chunk-56c542d7.js";
import { e } from "../vendor/react/chunk-40234545.js";
function Xy() {
  return K((n) => ed(n));
}
var t = 150;
function Zxt(n) {
  let m = w(8), { tone: f, text: i } = n, E = Pp(), S = rt(), o = E || S, [c, T] = Wa(o ? null : t);
  const p = Math.floor(T / t);
  let r;
  if (m[0] !== o || m[1] !== p || m[2] !== i || m[3] !== f) r = e(Dwe, { state: "live", tone: f, text: i, linkify: false, frame: p, reducedMotion: o }), m[0] = o, m[1] = p, m[2] = i, m[3] = f, m[4] = r;
  else r = m[4];
  let u;
  if (m[5] !== c || m[6] !== r) u = e(s, { ref: c, flexDirection: "column", children: r }), m[5] = c, m[6] = r, m[7] = u;
  else u = m[7];
  return u;
}
var Hwe = 0;
export {
  Hwe,
  Xy,
  Zxt
};
