// linux/ui/chunk-0a333db6.js — Claude Code 2.1.310（linux）模块 chunk-zfdv17z6.js
import { w } from "./chunk-0ed4c357.js";
import { K } from "../shared/chunk-e4a3aa33.js";
import { ed } from "../models/ccr-unsupported-default-mode-ignored.js";
import { rt, s, ja } from "../telemetry/render-glyph-cardinality.js";
import { Cwe } from "./aria-hidden.c79b.js";
import { If } from "../telemetry/chunk-56c542d7.js";
import { e } from "../vendor/react/chunk-40234545.js";
function Yy() {
  return K((n) => ed(n));
}
var t = 150;
function Dxt(n) {
  let m = w(8), { tone: f, text: i } = n, E = If(), S = rt(), o = E || S, [c, T] = ja(o ? null : t);
  const p = Math.floor(T / t);
  let r;
  if (m[0] !== o || m[1] !== p || m[2] !== i || m[3] !== f) r = e(Cwe, { state: "live", tone: f, text: i, linkify: false, frame: p, reducedMotion: o }), m[0] = o, m[1] = p, m[2] = i, m[3] = f, m[4] = r;
  else r = m[4];
  let u;
  if (m[5] !== c || m[6] !== r) u = e(s, { ref: c, flexDirection: "column", children: r }), m[5] = c, m[6] = r, m[7] = u;
  else u = m[7];
  return u;
}
var Awe = 0;
export {
  Awe,
  Dxt,
  Yy
};
