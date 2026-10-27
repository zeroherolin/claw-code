// telemetry/chunk-41n4sabq.js — Claude Code 2.1.310 模块 chunk-41n4sabq.js
import { w4o, kn } from "../settings/global-config-and-gates.27xj.js";
import { i } from "../shared/environment.9a41.js";
import { PQs } from "../settings/non-string-value.58dq.js";
import { gr } from "../shared/chunk-7bt27r62.js";
var CHn = "tengu_amber_quillwort", Gdo = "tengu_velvet_harrow";
function eOt(e) {
  if (gr(e, { safe: false })) return true;
  let r = i.CLAUDE_INTERNAL_FC_OVERRIDES;
  return r !== void 0 && w4o(e) && !PQs("CLAUDE_INTERNAL_FC_OVERRIDES", r) && kn(e, false).value === true;
}
export {
  CHn,
  Gdo,
  eOt
};
