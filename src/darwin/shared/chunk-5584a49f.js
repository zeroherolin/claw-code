// darwin/shared/chunk-5584a49f.js — Claude Code 2.1.310（darwin）模块 chunk-td15acp7.js
import { isAbsolute as n, relative as o, sep as s } from "path";
function Uf(r, i, e) {
  let t = o(r, i);
  if (t === "") return e;
  return t !== ".." && !t.startsWith(`..${s}`) && !n(t);
}
export {
  Uf
};
