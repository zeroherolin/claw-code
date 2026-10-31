// darwin/ui/chunk-7b6068da.js — Claude Code 2.1.310（darwin）模块 chunk-s98wpvgn.js
import { n } from "../telemetry/render-glyph-cardinality.js";
import { w } from "./chunk-0ed4c357.js";
import { ds } from "./chunk-6c28faa3.js";
import { e } from "../vendor/react/chunk-40234545.js";
function FR(m) {
  let R = w(2), { children: f, exitActive: o, onInterrupt: l } = m, s = o === void 0 ? true : o, { pending: u, keyName: x } = ds(void 0, l, s);
  const t = u ? `Press ${x} again to exit` : f;
  let r;
  if (R[0] !== t) r = e(n, { dimColor: true, children: t }), R[0] = t, R[1] = r;
  else r = R[1];
  return r;
}
export {
  FR
};
