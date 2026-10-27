// permissions/chunk-cvf3sb18.js — Claude Code 2.1.310 模块 chunk-cvf3sb18.js
import { it, Dh, IY, zl } from "../settings/global-config-and-gates.27xj.js";
import { ur } from "./turn-abort.yvwf.js";
import { PP, rLs, d3, ox } from "../core/conversation-engine.31gx.js";
import { z7e, Li } from "../core/system-prompt-blocks.dpjp.js";
import { O2e } from "../context/team-memory-sync.0s3j.js";
import { Xh } from "../git/bridge-child-tool-diff.m7a8.js";
import { Cct } from "../remote/ccr-queued-notifications.8374.js";
import { P9e, kae } from "../artifacts/chunk-hwwrq0h1.js";
import { Ect } from "../artifacts/chunk-s10h8rvj.js";
import { HAe } from "../shared/chunk-bkvejkkf.js";
async function Cbr({ session: s, tools: f, mainLoopModel: o, customSystemPrompt: i, excludeDynamicSections: a, cacheBreakerPhrase: g, analysisOnly: n, storageV5: p, credentials: c }) {
  let [m, l, e, t] = await Promise.all([i !== void 0 ? Promise.resolve([]) : PP(f, o, { excludeDynamicSections: a, analysisOnly: n }), ox(s, p, c), i !== void 0 ? Promise.resolve({}) : d3(s, g), a && i === void 0 ? rLs(o, { analysisOnly: n }) : Promise.resolve({})]);
  if (a) return { defaultSystemPrompt: m, userContext: { ...e, ...l, ...t }, systemContext: {} };
  return { defaultSystemPrompt: m, userContext: l, systemContext: e };
}
async function Qco({ session: s, messageQueue: f, tools: o, toolCatalog: i, commands: a, mcpClients: g, messages: n, turnInProgress: p, readFileState: c, toolState: m, sessionHooks: l, getAppState: e, setAppState: t, customSystemPrompt: d, appendSystemPrompt: y, excludeDynamicSections: P, thinkingConfig: x, agents: M, storageV5: C, credentials: S, runQuery: T }) {
  let r = e(), u = Dh({ permissionMode: r.toolPermissionContext.mode, mainLoopModel: it() }), { defaultSystemPrompt: v, userContext: b, systemContext: j } = await Cbr({ session: s, tools: o, mainLoopModel: u, customSystemPrompt: d, excludeDynamicSections: P, cacheBreakerPhrase: r.cacheBreakerPhrase, analysisOnly: true, storageV5: C, credentials: S }), R = Li(O2e(z7e(d, v), { tools: o, appendSystemPrompt: y })), k = n.at(-1), h = p && k?.type === "assistant" && k.message.stop_reason === null ? n.slice(0, -1) : n, H = { messageQueue: f, session: s, storageV5: C, credentials: S, agentContext: zl(), options: { commands: a, debug: false, mainLoopModel: u, tools: o, toolCatalog: i, verbose: false, thinkingConfig: x ?? (IY() !== false ? { type: "adaptive" } : { type: "disabled" }), mcpClients: g, mcpResources: {}, isNonInteractiveSession: true, runQuery: T, agentDefinitions: { activeAgents: M, allAgents: [] }, customSystemPrompt: d, ...d !== void 0 && { omitGitStatus: true }, appendSystemPrompt: y, autoCompactWindow: r.autoCompactWindow, fastMode: r.fastMode, cacheBreakerPhrase: r.cacheBreakerPhrase }, abortController: ur(), readFileState: c, toolState: m, toolDecisions: /* @__PURE__ */ new Map(), permissionRelays: kae, getAppState: e, setAppState: t, ...Ect(e, t), queuedNotificationsRegistry: Cct(e, t, s), taskRegistry: Xh(e, t), sessionHooksRegistry: l, teammateColors: P9e(HAe(e, t, "teammateColors")), rootToolSurface: { tools: o, mainLoopModel: u }, messages: h, turnStartIndex: 0, getFileHistoryState: () => {
    return;
  }, applyFileHistoryOp: () => {
  }, applyAttributionOp: () => {
  } };
  return { systemPrompt: R, userContext: b, systemContext: j, toolUseContext: H, forkContextMessages: h, advisorModel: r.advisorModel };
}
export {
  Cbr,
  Qco
};
