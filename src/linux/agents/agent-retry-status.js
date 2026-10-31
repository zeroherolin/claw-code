// linux/agents/agent-retry-status.js — Claude Code 2.1.310（linux）模块 chunk-0ftmer97.js
import { De } from "../fs/async-hooks.93b1.js";
import { OR, U } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
var r = new W(() => De());
function i() {
  return r.of(U().host);
}
var FGe = OR(i);
function e5n(e) {
  return { setMode(t) {
    FGe.emit({ kind: "agent-mode", agentId: e, mode: t });
  }, setRetryStatus(t) {
    FGe.emit({ kind: "agent-retry-status", agentId: e, retryStatus: t });
  }, setTurnEffort(t, n = null) {
    FGe.emit({ kind: "agent-turn-effort", agentId: e, turnEffort: t, turnModel: n });
  } };
}
var t5n = "Running SessionStart hooks…", UGe = { setSpinnerMessage(e) {
  FGe.emit({ kind: "main-message", message: e });
}, setSpinnerColors(e, t) {
  FGe.emit({ kind: "main-colors", color: e, shimmerColor: t });
} };
export {
  FGe,
  UGe,
  e5n,
  t5n
};
