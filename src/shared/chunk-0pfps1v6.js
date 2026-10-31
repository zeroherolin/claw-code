// shared/chunk-0pfps1v6.js — Claude Code 2.1.310 模块 chunk-0pfps1v6.js
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { w } from "../ui/chunk-zqxc4qtb.js";
import { n } from "../telemetry/render-glyph-cardinality.7car.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
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
