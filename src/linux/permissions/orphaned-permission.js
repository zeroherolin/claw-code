// linux/permissions/orphaned-permission.js — Claude Code 2.1.310（linux）模块 chunk-ktharenx.js
import { Mri } from "../settings/global-config-and-gates.js";
import { lf } from "../core/conversation-engine.js";
function RIt(e, n, t) {
  return () => {
    if (t?.aborted === true) return;
    let a = n();
    return e.getCommandQueueSnapshot().some(i) || e.someSubmissionInFlight((r) => s(r, a)) || (t === void 0 ? e.getInFlightDrainBatchStanding() !== "appended" && e.someInFlightDrainCommand((r) => s(r, a)) : e.getInFlightDrainBatchStanding() === "passed-over" && e.someInFlightDrainCommand(i)) ? void 0 : a;
  };
}
function s(e, n) {
  return i(e) && (e.uuid === void 0 || n.findLast((t) => t.uuid === e.uuid) === void 0);
}
function i(e) {
  if (!lf(e)) return false;
  switch (e.mode) {
    case "task-notification":
      return false;
    case "poll-event": {
      let n = e.pollEvent?.provenance?.authority;
      return n !== void 0 && n !== "peer-agent" && n !== "world-event";
    }
    case "prompt":
    case "bash":
      return Mri(e);
    case "orphaned-permission":
      return true;
  }
  return true;
}
export {
  RIt
};
