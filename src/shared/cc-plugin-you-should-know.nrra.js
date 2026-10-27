// shared/cc-plugin-you-should-know.nrra.js — Claude Code 2.1.310 模块 chunk-nrrajs28.js
import { Ns } from "../shell/invalid-type.qnva.js";
import { qyn, Vk, Yyn } from "../commands/claude-code.vy1w.js";
import { Qn } from "../vendor/chalk/chunk-06zv4nk8.js";
var uEe = "cc-plugin-you-should-know";
var KSr = { id: "you-should-know-plugin", providerAgnostic: true, advertisedCommand: "plugin", cooldownSessions: 10, maxLifetimeShows: 3, content: async (o) => `Want a side agent watching your back while Claude works? Turn on You should know:
${Qn("suggestion", o.theme)(`/plugin enable ${uEe}@${Ns}`)}`, isRelevant: async () => qyn(uEe) && Vk(uEe)?.defaultEnabled === false && Yyn(`${uEe}@${Ns}`) === void 0 };
export {
  KSr,
  uEe
};
