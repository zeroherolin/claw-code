// linux/workflows/chunk-5e65bb82.js — Claude Code 2.1.310（linux）模块 chunk-spwjh8kb.js
import { J, Ol } from "../context/not-admin-owned.js";
import { wr, Mr } from "../models/claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
var t = { claudeMd: true, skills: true, workflows: false, plugins: true, pluginMonitors: false, themes: false, hljsLanguages: true, hooks: true, statusLine: false, fileSuggestion: false, mcpAutoDiscovered: false, mcpClaudeAi: false, mcpAgentFrontmatter: true, agents: true, outputStyles: false, lspServers: true, keybindings: false }, l = { claudeMd: false, skills: false, workflows: false, plugins: false, pluginMonitors: false, themes: false, hljsLanguages: false, hooks: true, statusLine: true, fileSuggestion: true, mcpAutoDiscovered: false, mcpClaudeAi: false, mcpAgentFrontmatter: false, agents: false, outputStyles: false, lspServers: false, keybindings: false }, a = { claudeMd: false, skills: false, workflows: false, plugins: false, pluginMonitors: false, themes: false, hljsLanguages: false, hooks: false, statusLine: true, fileSuggestion: true, mcpAutoDiscovered: false, mcpClaudeAi: false, mcpAgentFrontmatter: false, agents: false, outputStyles: false, lspServers: false, keybindings: true };
function mr(e, s) {
  if (a[e] && J()) return true;
  if (Mr() && !l[e]) return true;
  if (wr() && !s?.explicitlyRequested) return t[e];
  return false;
}
function YC() {
  return Boolean(i.CLAUDE_CODE_DISABLE_CLAUDE_MDS || mr("claudeMd", { explicitlyRequested: Ol().length > 0 }));
}
export {
  YC,
  mr
};
