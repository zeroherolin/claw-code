// darwin/shared/chunk-7c8c6c5a.js — Claude Code 2.1.310（darwin）模块 chunk-hfd91m80.js
import { Ns, sr } from "../shell/invalid-type.js";
var PG = (o) => o.endsWith(`@${Ns}`);
function NEt(o, e) {
  let t = sr(o);
  return [...e ?? []].some((r) => !PG(r) && sr(r) === t);
}
export {
  NEt,
  PG
};
