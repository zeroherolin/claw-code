// shared/chunk-aghywqn5.js — Claude Code 2.1.310 模块 chunk-aghywqn5.js
import { S3r } from "../mcp/allowed-warning.j2d4.js";
import { bKt, E5r } from "../shell/invalid-type.qnva.js";
var { ceil: i, max: a } = Math;
function m(t, e, r) {
  if (r ? E5r(t, e, r) : e === void 0) e = 1;
  else e = a(S3r(e), 0);
  var n = t == null ? 0 : t.length;
  if (!n || e < 1) return [];
  var l = 0, f = 0, o = Array(i(n / e));
  while (l < n) o[f++] = bKt(t, l, l += e);
  return o;
}
var lft = m;
export {
  lft
};
