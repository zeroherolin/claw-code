// darwin/ui/chunk-aecb5a24.js — Claude Code 2.1.310（darwin）模块 chunk-31c7bzna.js
import { w } from "./chunk-0ed4c357.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
function Ho(R) {
  let c = w(9), { children: t, hint: i } = R;
  if (!i) {
    let o2;
    if (c[0] !== t) o2 = e(n, { dimColor: true, children: t }), c[0] = t, c[1] = o2;
    else o2 = c[1];
    return o2;
  }
  let o;
  if (c[2] !== t) o = e(n, { dimColor: true, children: t }), c[2] = t, c[3] = o;
  else o = c[3];
  let d;
  if (c[4] !== i) d = e(n, { dimColor: true, children: i }), c[4] = i, c[5] = d;
  else d = c[5];
  let a;
  if (c[6] !== o || c[7] !== d) a = r(s, { flexDirection: "column", children: [o, d] }), c[6] = o, c[7] = d, c[8] = a;
  else a = c[8];
  return a;
}
export {
  Ho
};
