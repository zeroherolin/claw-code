// ui/chunk-xd3535fr.js — Claude Code 2.1.310 模块 chunk-xd3535fr.js
import { w } from "./chunk-zqxc4qtb.js";
import { s, n } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
function NW(p) {
  let l = w(7), { children: i, subtitle: t } = p, o;
  if (l[0] !== i) o = e(n, { bold: true, children: i }), l[0] = i, l[1] = o;
  else o = l[1];
  let c;
  if (l[2] !== t) c = t && e(n, { dimColor: true, children: t }), l[2] = t, l[3] = c;
  else c = l[3];
  let a;
  if (l[4] !== o || l[5] !== c) a = r(s, { flexDirection: "column", children: [o, c] }), l[4] = o, l[5] = c, l[6] = a;
  else a = l[6];
  return a;
}
export {
  NW
};
