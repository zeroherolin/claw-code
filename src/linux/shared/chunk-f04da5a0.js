// linux/shared/chunk-f04da5a0.js — Claude Code 2.1.310（linux）模块 chunk-nw94cdht.js
import { Nb, SX } from "./chunk-d2c47492.js";
var n = /(?![\u200C\u200D])[\p{Cf}\u2028\u2029]/gu, o = /[\u001b\u0080-\u009f]/g, c = 8;
function TT(u) {
  let e = u.replace(o, "").replace(SX, "").replace(/[\v\f\r]/g, "");
  for (let r = 0; r < c; r++) {
    let t = Nb(e.replace(n, ""));
    if (t === e) return e;
    e = t;
  }
  return e.replace(/[\ud800-\udfff]/g, "").replace(n, "");
}
export {
  TT
};
