// darwin/agents/chunk-7daf58a0.js — Claude Code 2.1.310（darwin）模块 chunk-988av3sn.js
import { Ie } from "../plugins/chunk-c198f87f.js";
import { Dde } from "../plugins/chunk-238ac5cd.js";
import { Db } from "../shared/chunk-cc3dea5c.js";
function TJ(o) {
  return o.hookCaller === void 0 && o.pluginUnnamed === true && (Ie().loadedModules.some((n) => !Db(n)) || Dde());
}
var l4n = "A plugin started or resumed this subagent, or the one that spawned it, and that plugin is not known in this session. It cannot schedule work: nothing would hold that work after a Stop.";
export {
  TJ,
  l4n
};
