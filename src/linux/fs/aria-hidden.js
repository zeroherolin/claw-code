// linux/fs/aria-hidden.js — Claude Code 2.1.310（linux）模块 chunk-x7fgxqh6.js
import { w } from "../ui/chunk-0ed4c357.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { ne } from "../workflows/workflow-size-guideline-change.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
function ng(d) {
  let i = w(4), { children: o, color: t } = d, l;
  if (i[0] === S) l = e(s, { "aria-hidden": true, width: 2, flexShrink: 0, children: e(n, { children: ne.bullet }) }), i[0] = l;
  else l = i[0];
  let c;
  if (i[1] !== o || i[2] !== t) c = r(s, { flexDirection: "row", children: [l, e(s, { flexGrow: 1, flexShrink: 1, children: e(n, { color: t, children: o }) })] }), i[1] = o, i[2] = t, i[3] = c;
  else c = i[3];
  return c;
}
export {
  ng
};
