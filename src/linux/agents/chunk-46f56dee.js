// linux/agents/chunk-46f56dee.js — Claude Code 2.1.310（linux）模块 chunk-fjn7222m.js
import { We } from "../plugins/chunk-0a4c51cf.js";
import { Rm, $7o } from "../git/utf-8.js";
import { $Vs } from "../context/envelope-pinned-id.js";
function MQt(a, t) {
  return $Vs(a, (e) => e.replace(/\.jsonl$/, t), (e) => {
    if (e.namespace !== "transcript" || e.agentId === void 0) return;
    let n = ["subagents", ...e.agentRelPath ?? [], `agent-${e.agentId}${t}`], r = We.sidecar(e.projectKey, e.sessionId, n);
    return n.length <= $7o && Rm(r) === void 0 ? r : void 0;
  });
}
export {
  MQt
};
