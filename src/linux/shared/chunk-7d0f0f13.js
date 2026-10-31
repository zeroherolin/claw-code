// linux/shared/chunk-7d0f0f13.js — Claude Code 2.1.310（linux）模块 chunk-gawb97wc.js
import { sq } from "../permissions/classifier-transcript-too-long.js";
import { sve } from "../permissions/recipient-changed.js";
import { Dl } from "../core/conversation-engine.js";
function jIt(e, o, r) {
  if (Dl(e.decisionReason, sq) !== void 0 || sve(r)) return true;
  if (o.requiresUserInteraction?.()) return true;
  return e.forcedByCaller === true || e.personOnly === true;
}
export {
  jIt
};
