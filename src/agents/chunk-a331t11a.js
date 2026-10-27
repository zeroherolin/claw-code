// agents/chunk-a331t11a.js — Claude Code 2.1.310 模块 chunk-a331t11a.js
import { Ne } from "../fs/async-hooks.9s1z.js";
import { zc, Pn } from "../context/not-admin-owned.ersa.js";
import { i } from "../shared/environment.9a41.js";
function Ia() {
  if (!Ne(process.env.CLAUDE_CODE_COORDINATOR_MODE)) return false;
  if (zc() && !Pn() && !i.CLAUDE_CODE_REMOTE) return false;
  return true;
}
function jce(e) {
  return Ia() && e.agentId === void 0;
}
export {
  Ia,
  jce
};
