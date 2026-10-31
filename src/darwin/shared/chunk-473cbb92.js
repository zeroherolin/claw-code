// darwin/shared/chunk-473cbb92.js — Claude Code 2.1.310（darwin）模块 chunk-0pfps1v6.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { w } from "../ui/chunk-0ed4c357.js";
import { n } from "../telemetry/render-glyph-cardinality.js";
import { e } from "../vendor/react/chunk-40234545.js";
function vs(m) {
  let p = w(4), { error: r } = m;
  if (!r) {
    return null;
  }
  let o;
  if (p[0] !== r) o = d(r), p[0] = r, p[1] = o;
  else o = p[1];
  let f;
  if (p[2] !== o) f = e(n, { color: "error", children: o }), p[2] = o, p[3] = f;
  else f = p[3];
  return f;
}
export {
  vs
};
