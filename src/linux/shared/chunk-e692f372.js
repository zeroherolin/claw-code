// linux/shared/chunk-e692f372.js — Claude Code 2.1.310（linux）模块 chunk-d7ydc2jy.js
import { w } from "../ui/chunk-0ed4c357.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { Gt, be, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
j();
var o = Gt(false);
function i8t(n) {
  let t = w(2), { children: r } = n, a;
  if (t[0] !== r) a = e(o.Provider, { value: true, children: r }), t[0] = r, t[1] = a;
  else a = t[1];
  return a;
}
function Hxt() {
  return be(o);
}
function BB(n, r) {
  let t = be(o);
  return Boolean(n || r || t);
}
export {
  BB,
  Hxt,
  i8t
};
