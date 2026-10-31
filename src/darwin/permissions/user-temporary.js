// darwin/permissions/user-temporary.js — Claude Code 2.1.310（darwin）模块 chunk-1fqxj4jd.js
import { o$ } from "../remote/local-agent.js";
import { ZGe } from "../shared/create-from-type.js";
import { _u, Xv, mR } from "../settings/global-config-and-gates.js";
import { sh } from "./max-thinking-tokens.js";
class t {
  read = null;
  register(s) {
    this.read = s;
  }
  loaded() {
    if (this.read === null) ZGe.loadWriters?.();
    return this.read;
  }
}
var DCr = new t();
function hRs(s) {
  DCr.register(s);
}
var Ten = { suppressAlwaysAllowRule: true, personOnly: true, defaultToNo: true, localDisplayOnly: true };
function Aen(s) {
  let { decider: e, scheduledTrigger: i, replacedTurnStart: o } = mR(s.messages), r = e === null ? void 0 : s.messages[e.index], n = e === null ? o?.bySessionUsersOwnWords === true : r !== void 0 && _u(e.origin) && Xv(r);
  return sh(s) || i && !n || e?.origin?.kind === "channel" || e?.origin?.kind === "peer" && e.origin.senderTaskId === void 0 && e.origin.selfSent !== true || _u(e?.origin) && !n || o?.byHuman === true && !o.byHumanHere ? { behavior: "deny", message: "The user's organization requires a person to approve each new artifact, and nobody can be asked here: permission prompts are off or bypassed, or a schedule or a message from outside this session started this turn. Nothing was created or published. Tell the user they can ask for it themselves in a session that shows permission prompts, and don't retry in this turn.", decisionReason: { type: "safetyCheck", reason: "Creating an artifact needs a person to approve it", classifierApprovable: false } } : void 0;
}
function vUn(s) {
  let e = s.toolUseId === void 0 ? void 0 : s.toolDecisions?.get(s.toolUseId)?.source;
  return e === void 0 ? o$() : e === "user_temporary" || e === "user_permanent";
}
export {
  Aen,
  DCr,
  Ten,
  hRs,
  vUn
};
