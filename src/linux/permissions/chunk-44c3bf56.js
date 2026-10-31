// linux/permissions/chunk-44c3bf56.js — Claude Code 2.1.310（linux）模块 chunk-2q7tzmzh.js
import { st, Hh, E9, zl } from "../settings/global-config-and-gates.js";
import { ur } from "./turn-abort.js";
import { CP, _Ls, Z4, tx } from "../core/conversation-engine.js";
import { NJe, Li } from "../core/system-prompt-blocks.js";
import { TGe } from "../context/team-memory-sync.js";
import { Xh } from "../git/bridge-child-tool-diff.js";
import { vct } from "../remote/ccr-queued-notifications.js";
import { E3e, hae } from "../artifacts/chunk-1727cd82.js";
import { bct } from "../artifacts/chunk-3557a3c9.js";
import { RCe } from "../shared/chunk-67236fa7.js";
async function cSr({ session: s, tools: f, mainLoopModel: o, customSystemPrompt: i, excludeDynamicSections: a, cacheBreakerPhrase: g, analysisOnly: n, storageV5: p, credentials: c }) {
  let [m, l, e, t] = await Promise.all([i !== void 0 ? Promise.resolve([]) : CP(f, o, { excludeDynamicSections: a, analysisOnly: n }), tx(s, p, c), i !== void 0 ? Promise.resolve({}) : Z4(s, g), a && i === void 0 ? _Ls(o, { analysisOnly: n }) : Promise.resolve({})]);
  if (a) return { defaultSystemPrompt: m, userContext: { ...e, ...l, ...t }, systemContext: {} };
  return { defaultSystemPrompt: m, userContext: l, systemContext: e };
}
async function Rco({ session: s, messageQueue: f, tools: o, toolCatalog: i, commands: a, mcpClients: g, messages: n, turnInProgress: p, readFileState: c, toolState: m, sessionHooks: l, getAppState: e, setAppState: t, customSystemPrompt: d, appendSystemPrompt: y, excludeDynamicSections: P, thinkingConfig: x, agents: M, storageV5: C, credentials: S, runQuery: T }) {
  let r = e(), u = Hh({ permissionMode: r.toolPermissionContext.mode, mainLoopModel: st() }), { defaultSystemPrompt: v, userContext: b, systemContext: j } = await cSr({ session: s, tools: o, mainLoopModel: u, customSystemPrompt: d, excludeDynamicSections: P, cacheBreakerPhrase: r.cacheBreakerPhrase, analysisOnly: true, storageV5: C, credentials: S }), R = Li(TGe(NJe(d, v), { tools: o, appendSystemPrompt: y })), k = n.at(-1), h = p && k?.type === "assistant" && k.message.stop_reason === null ? n.slice(0, -1) : n, H = { messageQueue: f, session: s, storageV5: C, credentials: S, agentContext: zl(), options: { commands: a, debug: false, mainLoopModel: u, tools: o, toolCatalog: i, verbose: false, thinkingConfig: x ?? (E9() !== false ? { type: "adaptive" } : { type: "disabled" }), mcpClients: g, mcpResources: {}, isNonInteractiveSession: true, runQuery: T, agentDefinitions: { activeAgents: M, allAgents: [] }, customSystemPrompt: d, ...d !== void 0 && { omitGitStatus: true }, appendSystemPrompt: y, autoCompactWindow: r.autoCompactWindow, fastMode: r.fastMode, cacheBreakerPhrase: r.cacheBreakerPhrase }, abortController: ur(), readFileState: c, toolState: m, toolDecisions: /* @__PURE__ */ new Map(), permissionRelays: hae, getAppState: e, setAppState: t, ...bct(e, t), queuedNotificationsRegistry: vct(e, t, s), taskRegistry: Xh(e, t), sessionHooksRegistry: l, teammateColors: E3e(RCe(e, t, "teammateColors")), rootToolSurface: { tools: o, mainLoopModel: u }, messages: h, turnStartIndex: 0, getFileHistoryState: () => {
    return;
  }, applyFileHistoryOp: () => {
  }, applyAttributionOp: () => {
  } };
  return { systemPrompt: R, userContext: b, systemContext: j, toolUseContext: H, forkContextMessages: h, advisorModel: r.advisorModel };
}
export {
  Rco,
  cSr
};
