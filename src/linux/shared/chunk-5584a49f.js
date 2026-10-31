// linux/shared/chunk-5584a49f.js — Claude Code 2.1.310（linux）模块 chunk-t1ptejf0.js
import { isAbsolute as n, relative as o, sep as s } from "path";
function Up(r, i, e) {
  let t = o(r, i);
  if (t === "") return e;
  return t !== ".." && !t.startsWith(`..${s}`) && !n(t);
}
export {
  Up
};
