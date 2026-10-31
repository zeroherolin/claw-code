// ui/chunk-wq87gft3.js — Claude Code 2.1.310 模块 chunk-wq87gft3.js
import { w } from "./chunk-zqxc4qtb.js";
import { s, n } from "../telemetry/render-glyph-cardinality.7car.js";
import { $we, gt } from "./aria-label.99qs.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
function Kc(x) {
  let i = w(9), { status: t, children: l } = x, { color: o } = $we[t], c;
  if (i[0] !== t) c = e(s, { width: 2, flexShrink: 0, children: e(gt, { status: t }) }), i[0] = t, i[1] = c;
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
