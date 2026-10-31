// linux/shared/chunk-6f38919d.js — Claude Code 2.1.310（linux）模块 chunk-403aj6gj.js
import { re } from "./chunk-d2c47492.js";
import { Oi } from "../git/utf-8.js";
function o3e(n) {
  return n.replace(/[\r\n\u2028\u2029]+/g, " ");
}
function $Ue(n, r) {
  let e = Oi(n);
  if (e.length <= r) return e;
  let t = re(e, r), o = Array.from(e.slice(t.length)).length;
  return `${t} … (${o} more characters follow that are NOT shown in this message)`;
}
export {
  $Ue,
  o3e
};
