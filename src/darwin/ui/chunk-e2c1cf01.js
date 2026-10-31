// darwin/ui/chunk-e2c1cf01.js — Claude Code 2.1.310（darwin）模块 chunk-5ffz46a0.js
import { w } from "./chunk-0ed4c357.js";
import { il } from "../shared/chunk-9bbd1b38.js";
import { s } from "../telemetry/render-glyph-cardinality.js";
import { Ql } from "./chunk-1ff74795.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
var aw = 2, HA = 1, rq = 2;
function Ds(d) {
  let c = w(9), { children: t, color: i } = d;
  if (il()) {
    let o2;
    if (c[0] !== t) o2 = e(s, { flexDirection: "column", paddingX: HA, flexShrink: 0, children: t }), c[0] = t, c[1] = o2;
    else o2 = c[1];
    return o2;
  }
  let o;
  if (c[2] !== i) o = e(Ql, { color: i }), c[2] = i, c[3] = o;
  else o = c[3];
  let n;
  if (c[4] !== t) n = e(s, { flexDirection: "column", paddingX: aw, children: t }), c[4] = t, c[5] = n;
  else n = c[5];
  let l;
  if (c[6] !== o || c[7] !== n) l = r(s, { flexDirection: "column", paddingTop: 1, children: [o, n] }), c[6] = o, c[7] = n, c[8] = l;
  else l = c[8];
  return l;
}
export {
  Ds,
  HA,
  aw,
  rq
};
