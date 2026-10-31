// linux/shared/chunk-9bbd1b38.js — Claude Code 2.1.310（linux）模块 chunk-1kj0zhn3.js
import { w } from "../ui/chunk-0ed4c357.js";
import { Gt, be, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
var Jw = Gt(null);
function sl() {
  return be(Jw) !== null;
}
function ds(o) {
  let c = w(3), l = be(Jw), n;
  if (c[0] !== l || c[1] !== o) n = l ? { rows: l.rows, columns: l.columns } : o, c[0] = l, c[1] = o, c[2] = n;
  else n = c[2];
  return n;
}
function Owe() {
  return be(Jw)?.scrollViewport ?? null;
}
function $lt() {
  return be(Jw)?.claimScrollBox ?? null;
}
export {
  $lt,
  Jw,
  Owe,
  ds,
  sl
};
