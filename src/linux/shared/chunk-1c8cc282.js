// linux/shared/chunk-1c8cc282.js — Claude Code 2.1.310（linux）模块 chunk-nqahnzma.js
import { i1e, Wae, hJ } from "../tools/chunk-69cf9f3c.js";
function DC(o, e) {
  let n = { name: e.client.name, config: o };
  return { ...e, client: Wae(e.client, o), ...e.tools !== void 0 && { tools: hJ(n, e.tools) }, ...e.commands !== void 0 && { commands: i1e(n, e.commands) } };
}
export {
  DC
};
