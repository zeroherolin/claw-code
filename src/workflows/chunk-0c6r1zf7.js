// workflows/chunk-0c6r1zf7.js — Claude Code 2.1.310 模块 chunk-0c6r1zf7.js
import { J, Ol } from "../context/not-admin-owned.ersa.js";
import { Sr, Mr } from "../models/claude-3-5-sonnet.21mz.js";
import { i } from "../shared/environment.9a41.js";
var t = { claudeMd: true, skills: true, workflows: false, plugins: true, pluginMonitors: false, themes: false, hljsLanguages: true, hooks: true, statusLine: false, fileSuggestion: false, mcpAutoDiscovered: false, mcpClaudeAi: false, mcpAgentFrontmatter: true, agents: true, outputStyles: false, lspServers: true, keybindings: false }, l = { claudeMd: false, skills: false, workflows: false, plugins: false, pluginMonitors: false, themes: false, hljsLanguages: false, hooks: true, statusLine: true, fileSuggestion: true, mcpAutoDiscovered: false, mcpClaudeAi: false, mcpAgentFrontmatter: false, agents: false, outputStyles: false, lspServers: false, keybindings: false }, a = { claudeMd: false, skills: false, workflows: false, plugins: false, pluginMonitors: false, themes: false, hljsLanguages: false, hooks: false, statusLine: true, fileSuggestion: true, mcpAutoDiscovered: false, mcpClaudeAi: false, mcpAgentFrontmatter: false, agents: false, outputStyles: false, lspServers: false, keybindings: true };
function mr(e, s) {
  if (a[e] && J()) return true;
  if (Mr() && !l[e]) return true;
  if (Sr() && !s?.explicitlyRequested) return t[e];
  return false;
}
function QA() {
  return Boolean(i.CLAUDE_CODE_DISABLE_CLAUDE_MDS || mr("claudeMd", { explicitlyRequested: Ol().length > 0 }));
}
export {
  QA,
  mr
};
