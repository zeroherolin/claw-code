// linux/shared/chunk-b5845da6.js — Claude Code 2.1.310（linux）模块 chunk-kk9smtrr.js
import { types as i } from "util";
import { isContext as s } from "vm";
var { isProxy: c } = i, d = s, { add: r, has: p } = WeakSet.prototype, { apply: e } = Reflect, o = /* @__PURE__ */ new WeakSet();
function yei(t, n) {
  if (e(r, o, [t]), n !== void 0) e(r, o, [n]);
}
function x(t) {
  return e(p, o, [t]);
}
function tf(t) {
  return c(t) || x(t) || typeof t === "object" && t !== null && d(t);
}
export {
  tf,
  yei
};
