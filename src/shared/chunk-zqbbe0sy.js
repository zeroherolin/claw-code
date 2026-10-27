// shared/chunk-zqbbe0sy.js — Claude Code 2.1.310 模块 chunk-zqbbe0sy.js
import { types as i } from "util";
import { isContext as s } from "vm";
var { isProxy: c } = i, d = s, { add: r, has: p } = WeakSet.prototype, { apply: e } = Reflect, o = /* @__PURE__ */ new WeakSet();
function tti(t, n) {
  if (e(r, o, [t]), n !== void 0) e(r, o, [n]);
}
function x(t) {
  return e(p, o, [t]);
}
function tp(t) {
  return c(t) || x(t) || typeof t === "object" && t !== null && d(t);
}
export {
  tp,
  tti
};
