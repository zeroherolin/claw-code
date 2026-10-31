// linux/shared/chunk-79347f42.js — Claude Code 2.1.310（linux）模块 chunk-hm3z7hpp.js
import { Q4r } from "../mcp/allowed-warning.js";
import { aqt, Q5r } from "../shell/invalid-type.js";
var { ceil: i, max: a } = Math;
function m(t, e, r) {
  if (r ? Q5r(t, e, r) : e === void 0) e = 1;
  else e = a(Q4r(e), 0);
  var n = t == null ? 0 : t.length;
  if (!n || e < 1) return [];
  var l = 0, f = 0, o = Array(i(n / e));
  while (l < n) o[f++] = aqt(t, l, l += e);
  return o;
}
var npt = m;
export {
  npt
};
