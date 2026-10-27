// shared/chunk-hfd91m80.js — Claude Code 2.1.310 模块 chunk-hfd91m80.js
import { Ns, sr } from "../shell/invalid-type.qnva.js";
var PG = (o) => o.endsWith(`@${Ns}`);
function NEt(o, e) {
  let t = sr(o);
  return [...e ?? []].some((r) => !PG(r) && sr(r) === t);
}
export {
  NEt,
  PG
};
