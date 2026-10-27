// context/session-state-changed.7pzp.js — Claude Code 2.1.310 模块 chunk-7pzpgenr.js
import { He } from "../fs/async-hooks.9s1z.js";
import { J } from "./not-admin-owned.ersa.js";
import { X } from "../shared/chunk-3kevgx4j.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Y } from "../shared/async-hooks.923e.js";
import { i } from "../shared/environment.9a41.js";
import { Gce } from "../shared/session-activity-parked-exceeds-refcount.8mxy.js";
import { ys } from "../fs/async-hooks.2k4e.js";
import { jt } from "../shared/chunk-nfgwaxf2.js";
import { Vi } from "../settings/global-config-and-gates.27xj.js";
import { bR } from "../artifacts/cobalt-plinth-lovage.hxm5.js";
function mTe(e) {
  for (let n of [e?.request_id, e?.suppressed_request_id]) if (typeof n === "string" && n.length > 0) return n;
  return;
}
var g = 32;
function p(e) {
  let { display_tool_name: n, raw_command: t } = e;
  return { tool_name: e.tool_name, ...n === void 0 ? {} : { display_tool_name: n }, action_description: ys(e.action_description, bR), ...t === void 0 ? {} : { raw_command: ys(t, bR) }, tool_use_id: e.tool_use_id, request_id: e.request_id, ...e.suppressed_request_id === void 0 ? {} : { suppressed_request_id: e.suppressed_request_id }, ...e.decision_reason_type === void 0 ? {} : { decision_reason_type: e.decision_reason_type }, ...e.decision_reason_code === void 0 ? {} : { decision_reason_code: e.decision_reason_code } };
}
function rUo(e, n) {
  return [e, ...n.slice(0, g - 1).map(p)];
}
function J8n(e) {
  switch (e?.cross_session_inbound) {
    case "unavailable":
      return { acceptsPeerMessages: false };
    case "available":
      return { acceptsPeerMessages: true };
    default:
      return;
  }
}
var H1r = 6e4;
class Apn {
  stateChanged = He();
  userDecisionPendingChanged = He();
  userDecisionsPending = 0;
  onStateChanged;
  getPendingActionDetails;
  heldRequiresAction;
  onWaitingOnUserChanged;
  onTurnStarting;
  onTurnBeganBeforeInit;
  onMetadataChanged;
  onInternalMetadataChanged;
  onPermissionModeChanged;
  onProactivityLevelChanged;
  onActiveGoalChanged;
  onAutocompactInputsChanged;
  onConversationReset;
  currentState = "idle";
  hasPendingAction = false;
  hasTaskSummary = false;
  hasTerminalGoalSnapshot = false;
  mainLoopRefcount = 0;
  nestedBlockedChains = /* @__PURE__ */ Object.create(null);
  nestedBlockedChainCount = 0;
  droppedChainAgentIds = /* @__PURE__ */ Object.create(null);
  nestedChainUnparks = /* @__PURE__ */ Object.create(null);
  lastWaitingOnUser = false;
  chainExcessLogged = false;
  beginUserDecision() {
    if (this.userDecisionsPending += 1, this.userDecisionsPending === 1) d(this.userDecisionPendingChanged, true);
  }
  get userDecisionPending() {
    return this.userDecisionsPending > 0;
  }
  endUserDecision() {
    if (this.userDecisionsPending === 0) return;
    if (this.userDecisionsPending -= 1, this.userDecisionsPending === 0) d(this.userDecisionPendingChanged, false);
  }
  getState() {
    return this.currentState;
  }
  get waitingOnUser() {
    return this.currentState === "requires_action" && this.mainLoopRefcount - this.nestedBlockedChainCount <= 0;
  }
  setMainLoopRefcount(e) {
    if (this.mainLoopRefcount = e, e > 0 && this.resumableOrphanedAgents.length > 0) this.restartNoticeShown = true;
    this.emitIfWaitingChanged();
  }
  emitIfWaitingChanged() {
    this.checkChainInvariant();
    let e = this.waitingOnUser;
    if (e !== this.lastWaitingOnUser) this.lastWaitingOnUser = e, this.onWaitingOnUserChanged?.(e);
  }
  checkChainInvariant() {
    if (this.nestedBlockedChainCount - this.mainLoopRefcount > 0) {
      if (!this.chainExcessLogged) this.chainExcessLogged = true, Y("warn", "nested_chain_count_exceeds_refcount", { nested_blocked_chain_count: this.nestedBlockedChainCount, main_loop_refcount: this.mainLoopRefcount, session_state: this.currentState });
    } else this.chainExcessLogged = false;
  }
  reteeWaitingOnUser() {
    this.onWaitingOnUserChanged?.(this.waitingOnUser);
  }
  notifyNestedPromptBlocking(e) {
    if (i.CLAUDE_CODE_DISABLE_NESTED_CHAIN_IDLE) return;
    if (this.droppedChainAgentIds[e]) return;
    let n = this.nestedBlockedChains[e] ?? 0;
    if (this.nestedBlockedChains[e] = n + 1, n === 0) {
      if (this.nestedBlockedChainCount++, this.nestedBlockedChainCount <= this.mainLoopRefcount) this.nestedChainUnparks[e] = Gce();
    }
    this.emitIfWaitingChanged();
  }
  notifyNestedPromptUnblocking(e) {
    let n = (this.nestedBlockedChains[e] ?? 0) - 1;
    if (n > 0) this.nestedBlockedChains[e] = n;
    else if (this.nestedBlockedChains[e] !== void 0) this.removeChain(e);
    this.emitIfWaitingChanged();
  }
  removeChain(e) {
    delete this.nestedBlockedChains[e], this.nestedBlockedChainCount--, this.nestedChainUnparks[e]?.(), delete this.nestedChainUnparks[e];
  }
  dropNestedBlockedChain(e) {
    if (this.droppedChainAgentIds[e] = true, this.nestedBlockedChains[e] !== void 0) this.removeChain(e), this.emitIfWaitingChanged();
  }
  notifyTurnStarting(e, n) {
    this.onTurnStarting?.(e, n);
  }
  notifyTurnBeganBeforeInit() {
    this.onTurnBeganBeforeInit?.();
  }
  notifyStateChanged(e, n) {
    if (this.currentState = e, this.lastWaitingOnUser = this.waitingOnUser, this.onStateChanged?.(e, n), d(this.stateChanged, e, n), e === "requires_action" && n) this.hasPendingAction = true, this.onMetadataChanged?.(this.pendingActionPatch(n));
    else if (this.hasPendingAction) this.hasPendingAction = false, this.onMetadataChanged?.({ pending_action: null, pending_actions: null });
    if (e === "running") this.wipeTurnScopedMetadata();
    if (e === "idle" && this.hasTaskSummary) this.hasTaskSummary = false, this.notifyMetadataChanged({ task_summary: null });
    if (i.CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS) Vi({ type: "system", subtype: "session_state_changed", state: e });
    else if (i.CLAUDE_CODE_SDK_READS_SESSION_STATE) Vi({ type: "system", subtype: "session_state_changed", state: e, sdk_host_only: true });
  }
  republishPendingAction(e) {
    this.hasPendingAction = true, this.onMetadataChanged?.(this.pendingActionPatch(e));
  }
  pendingTurnEndSummary;
  holdTurnEndSummary(e, n) {
    let t = { promise: e, deadlineAt: n, settled: false, superseded: false }, s = () => {
      t.settled = true;
    };
    return e.then(s, s), this.pendingTurnEndSummary = t, t;
  }
  turnEndSummaryOutstanding(e = performance.now()) {
    let n = this.pendingTurnEndSummary;
    return n !== void 0 && !n.settled && e < n.deadlineAt;
  }
  supersedeTurnEndSummary() {
    let e = this.pendingTurnEndSummary;
    if (e !== void 0 && !e.settled) e.superseded = true;
  }
  waitForTurnEndSummary() {
    let e = this.pendingTurnEndSummary;
    if (e === void 0 || !this.turnEndSummaryOutstanding()) return;
    let n = new AbortController();
    return Promise.race([e.promise.catch(() => {
    }), X(Math.max(0, Math.ceil(e.deadlineAt - performance.now()) + 1), n.signal)]).finally(() => n.abort());
  }
  wipeTurnScopedMetadata() {
    if (this.supersedeTurnEndSummary(), this.onMetadataChanged?.({ post_turn_summary: null, recap: null }), this.hasTerminalGoalSnapshot) this.hasTerminalGoalSnapshot = false, this.onMetadataChanged?.({ goal: null });
  }
  adoptRestoredPendingAction() {
    this.hasPendingAction = true;
  }
  pendingActionPatch(e) {
    let t = (this.getPendingActionDetails?.(e.request_id) ?? []).filter((s) => s !== e).reverse();
    return { pending_action: e, pending_actions: rUo(e, t) };
  }
  notifyMetadataChanged(e, n) {
    if ("post_turn_summary" in e && n?.turnEndVerdict !== true) this.supersedeTurnEndSummary();
    if (this.onMetadataChanged?.(e), "is_ultracode_active" in e && this.onMetadataChanged) this.ultracodeActiveSent = e.is_ultracode_active === true, this.ultracodeActiveWritten = true;
    if ("goal" in e) this.hasTerminalGoalSnapshot = e.goal?.met === true;
    if ("task_summary" in e) {
      if (e.task_summary != null) this.hasTaskSummary = true;
      Vi({ type: "system", subtype: "task_summary", detail: e.task_summary ?? null });
    }
    if ("artifacts" in e) Vi({ type: "system", subtype: "session_metadata", metadata: { artifacts: e.artifacts } });
  }
  ultracodeActiveSent = false;
  ultracodeActiveWritten = false;
  ultracodeActivePatch(e) {
    return e === this.ultracodeActiveSent ? {} : { is_ultracode_active: e || null };
  }
  notifyUltracodeActive(e) {
    let n = this.ultracodeActivePatch(e);
    if ("is_ultracode_active" in n) this.notifyMetadataChanged(n);
  }
  settleUltracodeActive(e, n) {
    if (!this.ultracodeActiveWritten) this.ultracodeActiveSent = n?.readFailed === true ? void 0 : n?.external?.is_ultracode_active === true;
    this.notifyUltracodeActive(e);
  }
  workerPermissionModeRecordEnabled = false;
  get isWorkerPermissionModeRecordEnabled() {
    return this.workerPermissionModeRecordEnabled;
  }
  enableWorkerPermissionModeRecord() {
    this.workerPermissionModeRecordEnabled = true;
  }
  notifyPermissionModeChanged(e) {
    this.onPermissionModeChanged?.(e);
  }
  notifyProactivityLevelChanged() {
    this.onProactivityLevelChanged?.();
  }
  resumableOrphanedAgents = [];
  restartNoticeShown = false;
  markResumableOrphanedAgentsToldAtTurnEnd() {
    if (this.restartNoticeShown && this.resumableOrphanedAgents.some((e) => e.told !== true)) {
      let e = this.resumableOrphanedAgents.map((n) => ({ ...n, told: true }));
      this.resumableOrphanedAgents = e, this.notifyInternalMetadataChanged({ resumable_orphaned_agents: e });
    }
  }
  notifyInternalMetadataChanged(e) {
    this.onInternalMetadataChanged?.(e);
  }
  notifyActiveGoalChanged(e) {
    this.onActiveGoalChanged?.(e);
  }
  notifyAutocompactInputsChanged() {
    this.onAutocompactInputsChanged?.();
  }
  notifyConversationReset() {
    this.onConversationReset?.();
  }
}
function oUo(e, n, t) {
  let s = [];
  if (e.length > 0) {
    let o = e.map((a) => `- ${jt(a.description || "(no description)")} (task ${jt(a.task_id)})`);
    s.push(`The following background tasks were running and are now stopped:
${o.join(`
`)}
${t ? `${t} Re-create anything else` : "Re-create them"} if still needed.`);
  }
  if (n.length > 0) {
    let o = n.map((r) => J() ? void 0 : r.output_file), a = n.map((r, _) => {
      let u = o[_], h = u ? `output: ${jt(u)}` : "no output file";
      return `- ${jt(r.description || "(no description)")} (task ${jt(r.task_id)}), status ${jt(r.status)}, ${h}`;
    }), c = o.some(Boolean) ? "Read the output file to get the result (it is gone if the restart replaced the container); they cannot be stopped or messaged." : "No output file was recorded for them, and they cannot be stopped or messaged; re-create them if still needed.";
    s.push(`These background tasks finished before the restart, but their results were not delivered to you:
${a.join(`
`)}
${c}`);
  }
  return `<system-reminder>
The container was restarted. ${s.join(`
`)}
</system-reminder>`;
}
function d(e, ...n) {
  try {
    e.emit(...n);
  } catch (t) {
    l(t);
  }
}
export {
  Apn,
  H1r,
  J8n,
  mTe,
  oUo,
  rUo
};
