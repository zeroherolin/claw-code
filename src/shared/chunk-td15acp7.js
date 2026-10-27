// shared/chunk-td15acp7.js — Claude Code 2.1.310 模块 chunk-td15acp7.js
import { isAbsolute as n, relative as o, sep as s } from "path";
function Uf(r, i, e) {
  let t = o(r, i);
  if (t === "") return e;
  return t !== ".." && !t.startsWith(`..${s}`) && !n(t);
}
export {
  Uf
};
