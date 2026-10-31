// linux/shared/chunk-7c8c6c5a.js — Claude Code 2.1.310（linux）模块 chunk-pdcz0wmt.js
import { Ns, or } from "../shell/invalid-type.js";
var wz = (o) => o.endsWith(`@${Ns}`);
function Pvt(o, e) {
  let t = or(o);
  return [...e ?? []].some((r) => !wz(r) && or(r) === t);
}
export {
  Pvt,
  wz
};
