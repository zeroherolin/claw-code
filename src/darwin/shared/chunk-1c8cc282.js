// darwin/shared/chunk-1c8cc282.js — Claude Code 2.1.310（darwin）模块 chunk-vhezxv6x.js
import { gBe, Jae, k7 } from "../tools/chunk-69cf9f3c.js";
function NA(o, e) {
  let n = { name: e.client.name, config: o };
  return { ...e, client: Jae(e.client, o), ...e.tools !== void 0 && { tools: k7(n, e.tools) }, ...e.commands !== void 0 && { commands: gBe(n, e.commands) } };
}
export {
  NA
};
