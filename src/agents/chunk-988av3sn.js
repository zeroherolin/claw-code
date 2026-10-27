// agents/chunk-988av3sn.js — Claude Code 2.1.310 模块 chunk-988av3sn.js
import { Ie } from "../plugins/chunk-hxt89a41.js";
import { Dde } from "../plugins/chunk-3qffpjgv.js";
import { Db } from "../shared/chunk-b6n7b0tm.js";
function TJ(o) {
  return o.hookCaller === void 0 && o.pluginUnnamed === true && (Ie().loadedModules.some((n) => !Db(n)) || Dde());
}
var l4n = "A plugin started or resumed this subagent, or the one that spawned it, and that plugin is not known in this session. It cannot schedule work: nothing would hold that work after a Stop.";
export {
  TJ,
  l4n
};
