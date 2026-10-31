// linux/agents/subagent-launch.js — Claude Code 2.1.310（linux）模块 chunk-10tqjzdt.js
import { Br, T_ } from "../shared/chunk-3b9c376b.js";
import { tt } from "../context/not-admin-owned.js";
import { re } from "../shared/chunk-d2c47492.js";
import { zn, aI, lp, Lnt, Cj, Rj } from "../settings/global-config-and-gates.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { jx } from "./in-process-teammate.32be.js";
import { oG, wK, xGn, $mt, Ale, CP, Y4, TD, Oe } from "../core/conversation-engine.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { zR, ste } from "./agent-summary-skipped.js";
import { Tvs } from "../shared/chunk-f9f4ff49.js";
import { vae } from "../shared/repl-main-thread.js";
import { xIe } from "../shared/chunk-389154fe.js";
import { Pa } from "./chunk-f334f2d3.js";
async function RQt(t, e, a, n = {}) {
  let { extraMessages: u, forkOrigin: k, narrowCanUseTool: s } = n;
  if (e.getAppState().endedByModel) return m("subagent_launch", "subagent_fork_ended_by_model"), null;
  if (Pa()) return m("subagent_launch", "subagent_fork_coordinator_mode"), null;
  let i = e.renderedSystemPrompt;
  if (!i) {
    if (i = await U(e), !i) return m("subagent_launch", "subagent_fork_prompt_missing"), null;
  }
  let r = e.agentLifecycle.allocateName(_(n.nameHint ?? t)), d = (typeof n.description === "function" ? n.description(r) : n.description ?? t).replace(/\s+/g, " ").trim(), p = d.length > 50 ? re(d, 49) + "…" : d, o = T_(r), { taskRegistry: l } = e, w = Date.now(), f = lp(e.agentContext) + 1, C = oG(wK.model, e.options.mainLoopModel, "inherit", ae(e).mode), S = tt(), T = $mt(e, S), y = Ale({ outputFileReadable: TD(e.options.tools), ownerCanContinueAgents: T, agentId: o, ownerAgentId: S, spawnDepth: f, description: p, prompt: t, model: C, selectedAgent: wK, taskRegistry: l, toolUseId: e.toolUseId, sessionScratch: e.session.sessionScratch }), A = y.abortController;
  if (e.appendSystemMessage?.(Tvs(o, p)), e.agentLifecycle.registerName(r, Br(o)), s) zn().canUseToolNarrowings.set(o, s);
  zn().agentSpawned.emit({ agentId: o, agentType: wK.agentType, parentAgentId: e.agentId, taskRegistry: l });
  let b = { prompt: t, resolvedAgentModel: C, isBuiltInAgent: true, startTime: w, agentType: wK.agentType, isAsync: true, agentDepth: f, callerCanContinueAgents: T, source: wK.source }, c = { agentId: o, parentAgentId: e.agentId, depth: f, ...Lnt(e) && { spawnedByMainThread: true }, parentSessionId: jx(), agentType: "subagent", subagentName: wK.agentType, displayName: r, isAsync: true, isBackgroundAgent: true, isBuiltIn: true, ...Cj(e.agentContext) && { forkOfMainConversation: true }, invocationKind: "spawn", invocationEmitted: false, ...Rj(e.agentContext) }, M = l.takeConcurrencySlot();
  return aI(c, () => ste({ taskId: y.agentId, abortController: A, makeStream: (I, h, P) => zR({ onQueryProgress: h, onStreamTokenEstimate: P, onModelRestricted: xIe(wK.agentType, e.appendSystemMessage), agentDefinition: wK, turnPrompt: t, promptMessages: [...u ?? [], Oe({ content: [{ type: "text", text: xGn(t) }] })], toolUseContext: e, canUseTool: s ? s(a) : a, isAsync: true, querySource: vae(wK.agentType, true), forkOrigin: k, spawnedBySkill: e.options.spawnedBySkill ?? e.options.activeSkill, spawnedByForkedSkill: e.options.spawnedByForkedSkill, model: "inherit", override: { systemPrompt: i, parentSystemPrompt: true, agentId: Br(y.agentId), agentContext: c, abortController: A, requireCanUseTool: s ? true : void 0 }, availableTools: e.options.tools, forkContextMessages: e.messages, useExactTools: true, onCacheSafeParams: I, description: p, name: r }), metadata: { ...b, agentContext: c }, description: p, toolUseContext: e, taskRegistry: l, agentIdForCleanup: o, enableSummarization: true, getWorktreeResult: async () => ({}), onRunSettled: M })), g("subagent_launch"), { agentId: o, name: r };
}
async function U(t) {
  let e = t.getAppState(), a = e.agent ? e.agentDefinitions.activeAgents.find((u) => u.agentType === e.agent) : void 0, n = await CP(t.options.tools, t.options.mainLoopModel);
  return Y4({ mainThreadAgentDefinition: a, toolUseContext: t, customSystemPrompt: t.options.customSystemPrompt, defaultSystemPrompt: n, appendSystemPrompt: t.options.appendSystemPrompt });
}
function _(t) {
  return t.trim().split(/\s+/).slice(0, 3).join("-").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "fork";
}
export {
  RQt
};
