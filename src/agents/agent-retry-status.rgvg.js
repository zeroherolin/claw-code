// agents/agent-retry-status.rgvg.js — Claude Code 2.1.310 模块 chunk-rgvgfskg.js
import { He } from "../fs/async-hooks.9s1z.js";
import { DR, U } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
var r = new W(() => He());
function i() {
  return r.of(U().host);
}
var Y2e = DR(i);
function k4n(e) {
  return { setMode(t) {
    Y2e.emit({ kind: "agent-mode", agentId: e, mode: t });
  }, setRetryStatus(t) {
    Y2e.emit({ kind: "agent-retry-status", agentId: e, retryStatus: t });
  }, setTurnEffort(t, n = null) {
    Y2e.emit({ kind: "agent-turn-effort", agentId: e, turnEffort: t, turnModel: n });
  } };
}
var C4n = "Running SessionStart hooks…", X2e = { setSpinnerMessage(e) {
  Y2e.emit({ kind: "main-message", message: e });
}, setSpinnerColors(e, t) {
  Y2e.emit({ kind: "main-colors", color: e, shimmerColor: t });
} };
export {
  C4n,
  X2e,
  Y2e,
  k4n
};
