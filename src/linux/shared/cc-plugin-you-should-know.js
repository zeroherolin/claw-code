// linux/shared/cc-plugin-you-should-know.js — Claude Code 2.1.310（linux）模块 chunk-05abnese.js
import { Ns } from "../shell/invalid-type.js";
import { Iyn, zk, Oyn } from "../commands/claude-code.js";
import { Qn } from "../vendor/chalk/chunk-24ee1a9d.js";
var ave = "cc-plugin-you-should-know";
var Bbr = { id: "you-should-know-plugin", providerAgnostic: true, advertisedCommand: "plugin", cooldownSessions: 10, maxLifetimeShows: 3, content: async (o) => `Want a side agent watching your back while Claude works? Turn on You should know:
${Qn("suggestion", o.theme)(`/plugin enable ${ave}@${Ns}`)}`, isRelevant: async () => Iyn(ave) && zk(ave)?.defaultEnabled === false && Oyn(`${ave}@${Ns}`) === void 0 };
export {
  Bbr,
  ave
};
