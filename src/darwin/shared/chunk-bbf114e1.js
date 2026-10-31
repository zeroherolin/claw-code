// darwin/shared/chunk-bbf114e1.js — Claude Code 2.1.310（darwin）模块 chunk-wsyj9hj6.js
import { xg } from "../core/conversation-engine.js";
import { w } from "../ui/chunk-0ed4c357.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { Gt, Se, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
var u = Gt(void 0);
function Rlt(d) {
  let c = w(3), { queue: t, children: r } = d, o;
  if (c[0] !== r || c[1] !== t) o = e(u.Provider, { value: t, children: r }), c[0] = r, c[1] = t, c[2] = o;
  else o = c[2];
  return o;
}
function iu() {
  return Se(u) ?? xg();
}
export {
  Rlt,
  iu
};
