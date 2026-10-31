// darwin/ui/chunk-e80de2bb.js — Claude Code 2.1.310（darwin）模块 chunk-nfr7se24.js
import { w } from "./chunk-0ed4c357.js";
import { rt, s } from "../telemetry/render-glyph-cardinality.js";
import { e } from "../vendor/react/chunk-40234545.js";
function Cl(f) {
  let b = w(6), { children: r, paddingX: a, marginTop: o, marginBottom: n } = f, d = a === void 0 ? 1 : a;
  const t = rt() ? void 0 : "dashed";
  let i;
  if (b[0] !== r || b[1] !== n || b[2] !== o || b[3] !== d || b[4] !== t) i = e(s, { borderStyle: t, borderColor: "subtle", borderLeft: false, borderRight: false, flexDirection: "column", overflow: "hidden", paddingX: d, marginTop: o, marginBottom: n, children: r }), b[0] = r, b[1] = n, b[2] = o, b[3] = d, b[4] = t, b[5] = i;
  else i = b[5];
  return i;
}
export {
  Cl
};
