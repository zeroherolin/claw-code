// fs/aria-hidden.gh3z.js — Claude Code 2.1.310 模块 chunk-gh3zv4bj.js
import { w } from "../ui/chunk-zqxc4qtb.js";
import { s, n } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { ne } from "../workflows/workflow-size-guideline-change.1rc0.js";
import { b } from "../vendor/react/chunk-meds60nn.js";
function rg(d) {
  let i = w(4), { children: o, color: t } = d, l;
  if (i[0] === b) l = e(s, { "aria-hidden": true, width: 2, flexShrink: 0, children: e(n, { children: ne.bullet }) }), i[0] = l;
  else l = i[0];
  let c;
  if (i[1] !== o || i[2] !== t) c = r(s, { flexDirection: "row", children: [l, e(s, { flexGrow: 1, flexShrink: 1, children: e(n, { color: t, children: o }) })] }), i[1] = o, i[2] = t, i[3] = c;
  else c = i[3];
  return c;
}
export {
  rg
};
