// tools/exit-plan-mode-tool.5tnq.js — Claude Code 2.1.310 模块 chunk-5tnqezhq.js
import { ye, hC, wTn, N1, O5, f$, J_ } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g, p } from "../telemetry/chunk-wn8xtaqg.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { ZE } from "./device-session-limit.cjq3.js";
import { Rt, tn } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { ql, Qx } from "../shell/invalid-type.qnva.js";
import { wt, Ij } from "../settings/global-config-and-gates.27xj.js";
import { zj, xor } from "../fs/reply-across-default-dirs.esvz.js";
import { yM, pc } from "../agents/in-process-teammate.5te1.js";
import { ht, oH } from "../agents/chunk-zwvcbrvr.js";
import { Ss } from "../telemetry/chunk-ky8866zn.js";
import { Fb, XBo, Bk, bet } from "../artifacts/utf-8.vzjz.js";
import { Ha } from "../shell/chunk-0gmzdmcr.js";
import { qE, cun, uun } from "../context/envelope-pinned-id.a4yh.js";
import { Lce } from "../context/account-memory-text-not-identified.y6np.js";
import { Qve, jq, rke, zft, s2n, W7, sS } from "../core/conversation-engine.31gx.js";
import { ns } from "../shared/chunk-5qjrv5ax.js";
import { Yu } from "../git/bridge-child-tool-diff.m7a8.js";
import { B$r } from "../agents/swarm-team-file-update.vdzy.js";
import { QC } from "../permissions/chunk-vacbe373.js";
import { Zd } from "../shared/chunk-w7s7vczj.js";
import { Mn } from "../shared/ccd-session-mgmt.z8jd.js";
import { o, M, C, u, Ue, B } from "../vendor/zod/string-format.k395.js";
function k(r, e, n) {
  e.update(r, (s) => ({ ...s, awaitingPlanApproval: n !== null, pendingPlanApproval: n ? { requestId: n.requestId, answered: false } : void 0 }));
}
function vvs(r, e, n, s) {
  let l = n.get(r);
  if (!l || !Yu(l) || !l.awaitingPlanApproval) return null;
  switch (cun(l.pendingPlanApproval, e)) {
    case "mismatch":
      return t(`[InProcessTeammate] Plan approval response ${_(e.requestId)} does not name the pending plan request ${_(l.pendingPlanApproval?.requestId)}; resolving the wait as a rejection`, { level: "warn" }), p("plan_approval", "request_binding_mismatch"), k(r, n, null), uun(e);
    case "unbound":
      p("plan_approval", "verdict_unbound");
      break;
    case "bound":
      g("plan_approval");
      break;
    case "already_answered":
      return null;
  }
  if (!e.approved) return k(r, n, null), e;
  let h = H(e.permissionMode);
  return n.update(r, (m) => ({ ...m, awaitingPlanApproval: false, pendingPlanApproval: void 0, permissionMode: h, planHeldAfterSpawn: false })), B$r(l.identity.teamName, l.identity.agentName, h, s), e;
}
function H(r) {
  let e = ql(Qx(r ?? "default"));
  if (e === "bypassPermissions" && QC()) return "default";
  if (e === "auto" && !sS()) return "default";
  return e;
}
function HLn({ recipientName: r, leaderMode: e, leaderAutoPickedByLevel: n, proactivityLevel: s, tasks: l }) {
  let d = Object.values(l).some((m) => R(m, r)) ? e : W7(e, s, n), h = ql(d);
  return h === "plan" ? "default" : h;
}
function kvs(r, e) {
  return Object.values(e).some((n) => Yu(n) && n.status === "running" && n.identity.agentName === r && n.identity.planModeRequired && !n.planHeldAfterSpawn);
}
function R(r, e) {
  return Yu(r) && r.status === "running" && r.identity.agentName === e && r.paneTeardown === void 0 && r.identity.resumableAgentId !== void 0;
}
class A extends Error {
  constructor(r) {
    super(r);
    this.name = "PlanPreconditionError";
  }
}
function DLn(r) {
  if (!r || Ij() !== "default") return "";
  return `

If this plan can be broken down into multiple independent tasks, consider spawning named teammates with the ${ht} tool (pass a \`name\`) to parallelize the work.`;
}
var j = `Use this tool when you are in plan mode and have finished writing your plan to the plan file and are ready for user approval.

## How This Tool Works
- You should have already written your plan to the plan file specified in the plan mode system message
- This tool does NOT take the plan content as a parameter - it will read the plan from the file you wrote
- This tool simply signals that you're done planning and ready for the user to review and approve
- The user will see the contents of your plan file when they review it

## When to Use This Tool
IMPORTANT: Only use this tool when the task requires planning the implementation steps of a task that requires writing code. For research tasks where you're gathering information, searching files, reading files or in general trying to understand the codebase - do NOT use this tool.

## Before Using This Tool
Ensure your plan is complete and unambiguous:
- If you have unresolved questions about requirements or approach, use ${ns} first (in earlier phases)
- Once your plan is finalized, use THIS tool to request approval

**Important:** Do NOT use ${ns} to ask "Is this plan okay?" or "Should I proceed?" - that's exactly what THIS tool does. ExitPlanMode inherently requests user approval of your plan.

## Examples

1. Initial task: "Search for and understand the implementation of vim mode in the codebase" - Do not use the exit plan mode tool because you are not planning the implementation steps of a task.
2. Initial task: "Help me implement yank mode for vim" - Use the exit plan mode tool after you have finished planning the implementation steps of the task.
3. Initial task: "Add a new feature to handle user authentication" - If unsure about auth method (OAuth, JWT, etc.), use ${ns} first, then use exit plan mode tool after clarifying the approach.
`, q = `Use this tool when you are in plan mode and your plan is ready for the user to approve.

- Pass the whole plan as \`plan\`, in Markdown. This session has no plan file, so do not write the plan to a file.
- The user sees the plan on an approval card and approves or declines it. Do NOT ask "Is this plan okay?" or "Should I proceed?" in any other way: that is what this tool does.
- If they approve, plan mode ends and you carry out the plan as approved.
- If they decline, you stay in plan mode: find out what they want changed, revise the plan, and call this tool again.
`;
var G = f(() => u({ tool: B(["Bash"]).describe("The tool this prompt applies to"), prompt: o().describe('Semantic description of the action, e.g. "run tests", "install dependencies"') })), D = f(() => Ue({ allowedPrompts: C(G()).optional().describe("Deprecated: no longer used.") }).passthrough()), V = { type: "object", properties: { plan: { type: "string", description: "The whole plan, in Markdown, as the user will see it" } }, required: ["plan"], additionalProperties: false }, z = 32768, $e = f(() => D().extend({ plan: o().optional().describe("The plan content (injected by normalizeToolInput from disk)"), planFilePath: o().optional().describe("The plan file path (injected by normalizeToolInput)") })), W = f(() => u({ plan: o().nullable().describe("The plan that was presented to the user"), isAgent: M(), filePath: o().optional().describe("The file path where the plan was saved"), hasTaskTool: M().optional().describe("Whether the Agent tool is available in the current context"), planWasEdited: M().optional().describe("True when the user edited the plan (CCR web UI or Ctrl+G); determines whether the plan is echoed back in tool_result"), awaitingLeaderApproval: M().optional().describe("When true, the teammate has sent a plan approval request to the team leader"), requestId: o().optional().describe("Unique identifier for the plan approval request") }));
function E(r) {
  if (r.teammateContext) return r.teammateContext;
  let e = yM();
  return e?.agentId && e.teamName ? e : void 0;
}
var c9 = tn({ name: Zd, searchHint: "present plan for approval and start coding (plan mode only)", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return "Prompts the user to exit plan mode and start coding";
}, async prompt() {
  return Qve() ? q : j;
}, get inputSchema() {
  return D();
}, get inputJSONSchema() {
  return Qve() ? V : void 0;
}, get outputSchema() {
  return W();
}, userFacingName() {
  return "";
}, shouldDefer: true, isEnabled() {
  if (J_().length > 0 && ye()) return false;
  if (ye() && !rke(hC())) return false;
  return true;
}, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return false;
}, requiresUserInteraction() {
  if (pc()) return false;
  return true;
}, renderToolUseMessage() {
  return null;
}, create(r) {
  return { async validateInput(e) {
    let n = r;
    if (n.agentContext.agentType === "subagent" && n.agentContext.isBuiltIn === true && n.agentContext.subagentName === oH && (E(n) || n.permissions().mode === "plan")) return { result: false, message: "A fork cannot exit plan mode; that belongs to the session that forked it. Finish your part and report back.", errorCode: 2 };
    if (E(n)) return { result: true };
    if (Qve() && n.agentId) return { result: false, message: "Only the main conversation can ask for plan approval in this session. Give your plan in your final message.", errorCode: 3 };
    let l = n.permissions().mode;
    if (l !== "plan") return a("tengu_exit_plan_mode_called_outside_plan", { model: wt(n.mainLoopModel()), mode: c(l), hasExitedPlanModeInSession: wTn() }), { result: false, message: `You are not in plan mode. To enter plan mode, call the ${ZE} tool first. If your plan was already approved, continue with implementation.`, errorCode: 1 };
    if (Qve()) {
      let d = "plan" in e ? e.plan : void 0;
      if (typeof d !== "string" || d.trim() === "" || Object.keys(e).length > 1) return { result: false, message: "Pass the whole plan as non-empty text in the `plan` argument, and pass no other argument. This session has no plan file to read it from.", errorCode: 4 };
      let h = Buffer.byteLength(_(e));
      if (h > z) return { result: false, message: `The plan is ${h} bytes as JSON, over the ${z} that the user's approval card can carry. A quote, backslash or line break counts as two bytes, and a non-ASCII character as two to four. Shorten the plan and call this tool again.`, errorCode: 5 };
    }
    return { result: true };
  }, async checkPermissions(e) {
    if (E(r)) return { behavior: "allow", updatedInput: jq(Zd, e) };
    return { behavior: "ask", message: "Exit plan mode?", updatedInput: e };
  }, async call(e, { onProgress: n }) {
    let s = r, l = null, d = null;
    [l, d] = await Promise.all([import("../permissions/auto-mode-states.wggp.js"), import("../permissions/abandon-pending-policy-verdict-resolution.2kt5.js")]);
    let h = !!s.agentId, m = Qve(), P = "plan" in e && typeof e.plan === "string" ? e.plan : void 0;
    if (m && P === void 0) throw new A("The approval arrived without the plan, so plan mode was not exited. Call this tool again with the whole plan in the `plan` argument.");
    let T = Bk(s.agentId);
    if (!m) Fb(T);
    let I = P ?? await bet(s.agentId, s.storageV5);
    if (P !== void 0 && T) await XBo(T, P, s.storageV5), zft(s.storageV5);
    let x = E(s), S = x ? Object.values(s.tasks() ?? {}).find((i) => R(i, x.agentName)) : void 0, L = s.teammateContext !== void 0 && s.permissions().mode === "plan";
    if (L && S === void 0) throw new A("This teammate's task could not be found, so plan mode was not exited. Ask the lead to approve your plan.");
    let F = L && S?.permissionMode === "plan";
    if (x && (x.planModeRequired || F)) {
      if (!I) throw new A(`No plan file found at ${T}. Please write your plan to this file before calling ExitPlanMode.`);
      let { agentName: i, teamName: v } = x, w = xor("plan_approval", zj(i, v || "default")), b = { type: "plan_approval_request", from: i, timestamp: (/* @__PURE__ */ new Date()).toISOString(), planFilePath: T, planContent: I, requestId: w };
      if (await qE("team-lead", { from: i, text: _(b), timestamp: (/* @__PURE__ */ new Date()).toISOString() }, v, s.storageV5) === void 0) throw new A("Failed to write the plan approval request to the lead's inbox — plan not submitted; try again");
      if (S) k(S.id, s.taskRegistry, { requestId: w });
      else Ha().swarmPermissions.pendingPlanApproval = { requestId: w, answered: false };
      return { data: { plan: I, isAgent: true, filePath: T, awaitingLeaderApproval: true, requestId: w } };
    }
    let N = null;
    {
      let i = s.permissions().prePlanMode ?? "default";
      if (i === "auto" && !(d?.canPlanReturnToAutoMode(i) ?? false)) {
        let v = d?.getAutoModeUnavailableReason() ?? "circuit-breaker";
        N = d?.getAutoModeUnavailableNotification(v) ?? "auto mode unavailable", t(`[auto-mode gate @ ExitPlanModeV2Tool] prePlanMode=${i} but plan may not return to it (reason=${v}) — falling back to default on plan exit`, { level: "warn" });
      }
    }
    if (N) n?.({ type: "notification", notification: { key: "auto-mode-gate-plan-exit-fallback", text: `plan exit → default · ${N}`, priority: "immediate", color: "warning", timeoutMs: 1e4 } });
    let O = s.permissions();
    if (O.mode === "plan" && s.teammateContext === void 0) {
      N1(true), O5(true);
      let i = O.prePlanMode ?? "default";
      {
        if (i === "auto" && !(d?.canPlanReturnToAutoMode(i) ?? false)) i = "default";
        let b = i === "auto", y = l?.isAutoModeActive() ?? false;
        if (l?.setAutoModeActive(b), y && !b) f$(true);
      }
      Lce({ from: "plan", to: i, trigger: "exit_plan_mode" }, s.agentContext);
      let v = i === "auto", w = O.strippedDangerousRules;
      s.setToolPermissionContext((b) => {
        let y = b;
        if (v) y = d?.stripDangerousPermissionsForAutoMode(y) ?? y;
        else if (w) y = d?.restoreDangerousPermissions(y) ?? y;
        return { ...y, mode: i, prePlanMode: void 0 };
      });
    }
    let U = Ss() && s.tools.some((i) => Rt(i, ht)) && !s2n(Mn, s.tools);
    return { data: { plan: I, isAgent: h, filePath: m ? void 0 : T, hasTaskTool: U || void 0, planWasEdited: P !== void 0 && !m || void 0 } };
  } };
}, mapToolResultToToolResultBlockParam({ isAgent: r, plan: e, filePath: n, hasTaskTool: s, planWasEdited: l, awaitingLeaderApproval: d, requestId: h }, m) {
  if (d) return { type: "tool_result", content: `Your plan has been submitted to the team lead for approval.

Plan file: ${n}

**What happens next:**
1. Wait for the team lead to review your plan
2. You will receive a message in your inbox with approval/rejection
3. If approved, you can proceed with implementation
4. If rejected, refine your plan based on the feedback

**Important:** Do NOT proceed until you receive approval. Check your inbox for response.

Request ID: ${h}`, tool_use_id: m };
  if (r) return { type: "tool_result", content: 'User has approved the plan. There is nothing else needed from you now. Please respond with "ok"', tool_use_id: m };
  if (!e || e.trim() === "") return { type: "tool_result", content: "User has approved exiting plan mode. You can now proceed.", tool_use_id: m };
  let P = DLn(Boolean(s)), T = l ? "Approved Plan (edited by user)" : "Approved Plan";
  return { type: "tool_result", content: `User has approved your plan. You can now start coding. Start with updating your todo list if applicable${n === void 0 ? "" : `

Your plan has been saved to: ${n}
You can refer back to it if needed during implementation.`}${P}

## ${T}:
${e}`, tool_use_id: m };
} });
export {
  DLn,
  HLn,
  c9,
  kvs,
  vvs
};
