// darwin/shared/chunk-9bbd1b38.js — Claude Code 2.1.310（darwin）模块 chunk-bezz9j8a.js
import { w } from "../ui/chunk-0ed4c357.js";
import { Gt, Se, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
var Qw = Gt(null);
function il() {
  return Se(Qw) !== null;
}
function cs(o) {
  let c = w(3), l = Se(Qw), n;
  if (c[0] !== l || c[1] !== o) n = l ? { rows: l.rows, columns: l.columns } : o, c[0] = l, c[1] = o, c[2] = n;
  else n = c[2];
  return n;
}
function Nwe() {
  return Se(Qw)?.scrollViewport ?? null;
}
function jlt() {
  return Se(Qw)?.claimScrollBox ?? null;
}
export {
  Nwe,
  Qw,
  cs,
  il,
  jlt
};
