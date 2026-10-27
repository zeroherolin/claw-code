// shell/chunk-yp85fkpf.js — Claude Code 2.1.310 模块 chunk-yp85fkpf.js
import { Be } from "../mcp/allowed-warning.j2d4.js";
function Z5t(e) {
  if (e.toolName === Be) {
    if (!e.ruleContent) return { prefix: "Any Bash command" };
    if (e.ruleContent.endsWith(":*") || e.ruleContent.endsWith(" *")) return { prefix: "Any Bash command starting with ", emphasis: e.ruleContent.slice(0, -2) };
    return { prefix: "The Bash command ", emphasis: e.ruleContent };
  }
  if (!e.ruleContent) return { prefix: "Any use of the ", emphasis: e.toolName, suffix: " tool" };
  return null;
}
export {
  Z5t
};
