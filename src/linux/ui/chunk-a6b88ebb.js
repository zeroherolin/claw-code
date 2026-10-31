// linux/ui/chunk-a6b88ebb.js — Claude Code 2.1.310（linux）模块 chunk-gppw1293.js
import { w } from "./chunk-0ed4c357.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { Mwe, mt } from "./aria-label.132c.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
function Kc(x) {
  let i = w(9), { status: t, children: l } = x, { color: o } = Mwe[t], c;
  if (i[0] !== t) c = e(s, { width: 2, flexShrink: 0, children: e(mt, { status: t }) }), i[0] = t, i[1] = c;
  else c = i[1];
  const u = !o;
  let a;
  if (i[2] !== l || i[3] !== o || i[4] !== u) a = e(s, { flexGrow: 1, flexShrink: 1, children: e(n, { color: o, dimColor: u, children: l }) }), i[2] = l, i[3] = o, i[4] = u, i[5] = a;
  else a = i[5];
  let d;
  if (i[6] !== c || i[7] !== a) d = r(s, { flexDirection: "row", children: [c, a] }), i[6] = c, i[7] = a, i[8] = d;
  else d = i[8];
  return d;
}
export {
  Kc
};
