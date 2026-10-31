// darwin/agents/chunk-46f56dee.js — Claude Code 2.1.310（darwin）模块 chunk-wta7xw90.js
import { je } from "../plugins/chunk-0a4c51cf.js";
import { Rm, mZo } from "../git/utf-8.js";
import { vKs } from "../context/envelope-pinned-id.js";
function GJt(a, t) {
  return vKs(a, (e) => e.replace(/\.jsonl$/, t), (e) => {
    if (e.namespace !== "transcript" || e.agentId === void 0) return;
    let n = ["subagents", ...e.agentRelPath ?? [], `agent-${e.agentId}${t}`], r = je.sidecar(e.projectKey, e.sessionId, n);
    return n.length <= mZo && Rm(r) === void 0 ? r : void 0;
  });
}
export {
  GJt
};
