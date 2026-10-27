// shared/chunk-dna9khr0.js — Claude Code 2.1.310 模块 chunk-dna9khr0.js
import { gK } from "../permissions/classifier-transcript-too-long.8zvz.js";
import { cEe } from "../permissions/recipient-changed.rfc7.js";
import { Hl } from "../core/conversation-engine.31gx.js";
function XIt(e, o, r) {
  if (Hl(e.decisionReason, gK) !== void 0 || cEe(r)) return true;
  if (o.requiresUserInteraction?.()) return true;
  return e.forcedByCaller === true || e.personOnly === true;
}
export {
  XIt
};
