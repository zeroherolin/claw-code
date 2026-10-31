// linux/permissions/chunk-e94eeb4e.js — Claude Code 2.1.310（linux）模块 chunk-cey46yeg.js
import { Hh } from "../settings/global-config-and-gates.js";
import { CP, Y4, jOr, Z4, tx } from "../core/conversation-engine.js";
import { ae } from "./max-thinking-tokens.js";
async function vJt({ toolUseContext: e, forkContextMessages: o, mainThreadAgentDefinition: t }) {
  let { systemPrompt: s, userContext: m, systemContext: r } = jOr() ?? await i(e, t);
  return { systemPrompt: s, userContext: m, systemContext: r, toolUseContext: e, forkContextMessages: o, advisorModel: e.getAdvisorSetting() };
}
async function i(e, o) {
  let [t, s, m] = await Promise.all([e.renderedSystemPrompt ?? n(e, o), tx(e.session, e.storageV5, e.credentials), Z4(e.session, e.options.cacheBreakerPhrase)]);
  return { systemPrompt: t, userContext: s, systemContext: m };
}
async function n(e, o) {
  let t = ae(e), s = await CP(e.options.tools, Hh({ permissionMode: t.mode, mainLoopModel: e.options.mainLoopModel }));
  return Y4({ mainThreadAgentDefinition: o, toolUseContext: e, customSystemPrompt: e.options.customSystemPrompt, defaultSystemPrompt: s, appendSystemPrompt: e.options.appendSystemPrompt });
}
export {
  vJt
};
