// darwin/agents/subagent-launch.js — Claude Code 2.1.310（darwin）模块 chunk-a6dq66f7.js
import { Br, T_ } from "../shared/chunk-3b9c376b.js";
import { tt } from "../context/not-admin-owned.js";
import { re } from "../shared/chunk-d2c47492.js";
import { zn, cI, af, Wnt, Mj, Hj } from "../settings/global-config-and-gates.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { Gx } from "./in-process-teammate.32be.js";
import { m2, O6, X2n, zmt, Dle, PP, s3, x0, Oe } from "../core/conversation-engine.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { qR, pte } from "./agent-summary-skipped.js";
import { tvs } from "../shared/chunk-f9f4ff49.js";
import { Pae } from "../shared/repl-main-thread.js";
import { DIe } from "../shared/chunk-389154fe.js";
import { Ia } from "./chunk-f334f2d3.js";
async function $Jt(t, e, a, n = {}) {
  let { extraMessages: u, forkOrigin: k, narrowCanUseTool: s } = n;
  if (e.getAppState().endedByModel) return m("subagent_launch", "subagent_fork_ended_by_model"), null;
  if (Ia()) return m("subagent_launch", "subagent_fork_coordinator_mode"), null;
  let i = e.renderedSystemPrompt;
  if (!i) {
    if (i = await U(e), !i) return m("subagent_launch", "subagent_fork_prompt_missing"), null;
  }
  let r = e.agentLifecycle.allocateName(_(n.nameHint ?? t)), d = (typeof n.description === "function" ? n.description(r) : n.description ?? t).replace(/\s+/g, " ").trim(), p = d.length > 50 ? re(d, 49) + "…" : d, o = T_(r), { taskRegistry: l } = e, w = Date.now(), f = af(e.agentContext) + 1, C = m2(O6.model, e.options.mainLoopModel, "inherit", ae(e).mode), S = tt(), T = zmt(e, S), y = Dle({ outputFileReadable: x0(e.options.tools), ownerCanContinueAgents: T, agentId: o, ownerAgentId: S, spawnDepth: f, description: p, prompt: t, model: C, selectedAgent: O6, taskRegistry: l, toolUseId: e.toolUseId, sessionScratch: e.session.sessionScratch }), A = y.abortController;
  if (e.appendSystemMessage?.(tvs(o, p)), e.agentLifecycle.registerName(r, Br(o)), s) zn().canUseToolNarrowings.set(o, s);
  zn().agentSpawned.emit({ agentId: o, agentType: O6.agentType, parentAgentId: e.agentId, taskRegistry: l });
  let b = { prompt: t, resolvedAgentModel: C, isBuiltInAgent: true, startTime: w, agentType: O6.agentType, isAsync: true, agentDepth: f, callerCanContinueAgents: T, source: O6.source }, c = { agentId: o, parentAgentId: e.agentId, depth: f, ...Wnt(e) && { spawnedByMainThread: true }, parentSessionId: Gx(), agentType: "subagent", subagentName: O6.agentType, displayName: r, isAsync: true, isBackgroundAgent: true, isBuiltIn: true, ...Mj(e.agentContext) && { forkOfMainConversation: true }, invocationKind: "spawn", invocationEmitted: false, ...Hj(e.agentContext) }, M = l.takeConcurrencySlot();
  return cI(c, () => pte({ taskId: y.agentId, abortController: A, makeStream: (I, h, P) => qR({ onQueryProgress: h, onStreamTokenEstimate: P, onModelRestricted: DIe(O6.agentType, e.appendSystemMessage), agentDefinition: O6, turnPrompt: t, promptMessages: [...u ?? [], Oe({ content: [{ type: "text", text: X2n(t) }] })], toolUseContext: e, canUseTool: s ? s(a) : a, isAsync: true, querySource: Pae(O6.agentType, true), forkOrigin: k, spawnedBySkill: e.options.spawnedBySkill ?? e.options.activeSkill, spawnedByForkedSkill: e.options.spawnedByForkedSkill, model: "inherit", override: { systemPrompt: i, parentSystemPrompt: true, agentId: Br(y.agentId), agentContext: c, abortController: A, requireCanUseTool: s ? true : void 0 }, availableTools: e.options.tools, forkContextMessages: e.messages, useExactTools: true, onCacheSafeParams: I, description: p, name: r }), metadata: { ...b, agentContext: c }, description: p, toolUseContext: e, taskRegistry: l, agentIdForCleanup: o, enableSummarization: true, getWorktreeResult: async () => ({}), onRunSettled: M })), g("subagent_launch"), { agentId: o, name: r };
}
async function U(t) {
  let e = t.getAppState(), a = e.agent ? e.agentDefinitions.activeAgents.find((u) => u.agentType === e.agent) : void 0, n = await PP(t.options.tools, t.options.mainLoopModel);
  return s3({ mainThreadAgentDefinition: a, toolUseContext: t, customSystemPrompt: t.options.customSystemPrompt, defaultSystemPrompt: n, appendSystemPrompt: t.options.appendSystemPrompt });
}
function _(t) {
  return t.trim().split(/\s+/).slice(0, 3).join("-").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "fork";
}
export {
  $Jt
};
