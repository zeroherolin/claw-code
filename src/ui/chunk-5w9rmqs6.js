// ui/chunk-5w9rmqs6.js — Claude Code 2.1.310 模块 chunk-5w9rmqs6.js
import { w } from "./chunk-zqxc4qtb.js";
import { rt, s, n } from "../telemetry/render-glyph-cardinality.7car.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
function uf(u) {
  let h = w(10), { children: i, color: o, title: t } = u, f = rt();
  const l = f ? void 0 : "round", m = f ? 0 : 1, a = t ? 1 : 0;
  let c;
  if (h[0] !== o || h[1] !== t) c = t && e(n, { bold: true, color: o, children: t }), h[0] = o, h[1] = t, h[2] = c;
  else c = h[2];
  let y;
  if (h[3] !== i || h[4] !== o || h[5] !== l || h[6] !== m || h[7] !== a || h[8] !== c) y = r(s, { borderStyle: l, borderColor: o, flexDirection: "column", paddingX: m, gap: a, children: [c, i] }), h[3] = i, h[4] = o, h[5] = l, h[6] = m, h[7] = a, h[8] = c, h[9] = y;
  else y = h[9];
  return y;
}
export {
  uf
};
