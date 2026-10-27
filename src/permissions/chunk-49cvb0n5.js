// permissions/chunk-49cvb0n5.js — Claude Code 2.1.310 模块 chunk-49cvb0n5.js
import { Dh } from "../settings/global-config-and-gates.27xj.js";
import { PP, s3, lMr, d3, ox } from "../core/conversation-engine.31gx.js";
import { ae } from "./max-thinking-tokens.hx3h.js";
async function O7t({ toolUseContext: e, forkContextMessages: o, mainThreadAgentDefinition: t }) {
  let { systemPrompt: s, userContext: m, systemContext: r } = lMr() ?? await i(e, t);
  return { systemPrompt: s, userContext: m, systemContext: r, toolUseContext: e, forkContextMessages: o, advisorModel: e.getAdvisorSetting() };
}
async function i(e, o) {
  let [t, s, m] = await Promise.all([e.renderedSystemPrompt ?? n(e, o), ox(e.session, e.storageV5, e.credentials), d3(e.session, e.options.cacheBreakerPhrase)]);
  return { systemPrompt: t, userContext: s, systemContext: m };
}
async function n(e, o) {
  let t = ae(e), s = await PP(e.options.tools, Dh({ permissionMode: t.mode, mainLoopModel: e.options.mainLoopModel }));
  return s3({ mainThreadAgentDefinition: o, toolUseContext: e, customSystemPrompt: e.options.customSystemPrompt, defaultSystemPrompt: s, appendSystemPrompt: e.options.appendSystemPrompt });
}
export {
  O7t
};
