// darwin/telemetry/chunk-6aac91e6.js — Claude Code 2.1.310（darwin）模块 chunk-41n4sabq.js
import { w4o, kn } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { PQs } from "../settings/non-string-value.js";
import { gr } from "../shared/chunk-7e745eb7.js";
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
