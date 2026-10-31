// linux/agents/chunk-7daf58a0.js — Claude Code 2.1.310（linux）模块 chunk-9mh6r102.js
import { Ie } from "../plugins/chunk-c198f87f.js";
import { Ade } from "../plugins/chunk-238ac5cd.js";
import { DS } from "../shared/chunk-cc3dea5c.js";
function _Q(o) {
  return o.hookCaller === void 0 && o.pluginUnnamed === true && (Ie().loadedModules.some((n) => !DS(n)) || Ade());
}
var zYn = "A plugin started or resumed this subagent, or the one that spawned it, and that plugin is not known in this session. It cannot schedule work: nothing would hold that work after a Stop.";
export {
  _Q,
  zYn
};
