// linux/telemetry/chunk-6aac91e6.js — Claude Code 2.1.310（linux）模块 chunk-xnemrn6m.js
import { KYo, kn } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { KQs } from "../settings/non-string-value.js";
import { gr } from "../shared/chunk-7e745eb7.js";
var uHn = "tengu_amber_quillwort", xdo = "tengu_velvet_harrow";
function KIt(e) {
  if (gr(e, { safe: false })) return true;
  let r = i.CLAUDE_INTERNAL_FC_OVERRIDES;
  return r !== void 0 && KYo(e) && !KQs("CLAUDE_INTERNAL_FC_OVERRIDES", r) && kn(e, false).value === true;
}
export {
  KIt,
  uHn,
  xdo
};
