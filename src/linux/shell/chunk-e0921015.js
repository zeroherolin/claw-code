// linux/shell/chunk-e0921015.js — Claude Code 2.1.310（linux）模块 chunk-zcgqwmy7.js
import { Be } from "../mcp/allowed-warning.js";
function U6t(e) {
  if (e.toolName === Be) {
    if (!e.ruleContent) return { prefix: "Any Bash command" };
    if (e.ruleContent.endsWith(":*") || e.ruleContent.endsWith(" *")) return { prefix: "Any Bash command starting with ", emphasis: e.ruleContent.slice(0, -2) };
    return { prefix: "The Bash command ", emphasis: e.ruleContent };
  }
  if (!e.ruleContent) return { prefix: "Any use of the ", emphasis: e.toolName, suffix: " tool" };
  return null;
}
export {
  U6t
};
