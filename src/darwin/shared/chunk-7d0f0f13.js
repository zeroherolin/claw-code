// darwin/shared/chunk-7d0f0f13.js — Claude Code 2.1.310（darwin）模块 chunk-dna9khr0.js
import { gK } from "../permissions/classifier-transcript-too-long.js";
import { cEe } from "../permissions/recipient-changed.js";
import { Hl } from "../core/conversation-engine.js";
function XIt(e, o, r) {
  if (Hl(e.decisionReason, gK) !== void 0 || cEe(r)) return true;
  if (o.requiresUserInteraction?.()) return true;
  return e.forcedByCaller === true || e.personOnly === true;
}
export {
  XIt
};
