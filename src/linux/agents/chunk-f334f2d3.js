// linux/agents/chunk-f334f2d3.js — Claude Code 2.1.310（linux）模块 chunk-9fktyje6.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { Gc, Pn } from "../context/not-admin-owned.js";
import { i } from "../shared/environment.js";
function Pa() {
  if (!Ne(process.env.CLAUDE_CODE_COORDINATOR_MODE)) return false;
  if (Gc() && !Pn() && !i.CLAUDE_CODE_REMOTE) return false;
  return true;
}
function Hce(e) {
  return Pa() && e.agentId === void 0;
}
export {
  Hce,
  Pa
};
