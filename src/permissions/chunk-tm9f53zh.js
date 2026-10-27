// permissions/chunk-tm9f53zh.js — Claude Code 2.1.310 模块 chunk-tm9f53zh.js
import { Mr, Eie } from "../models/claude-3-5-sonnet.21mz.js";
function zHo(n, e) {
  return e && !n.restricted ? { ...n, restricted: true } : n;
}
function N0e(n) {
  return Mr() || Eie() || [n.permissionMode, n.inheritPermissionMode, n.model, n.fallbackModel, n.clientDataUrl, n.allowOtherModels, n.effort, n.agent, n.agents, n.settings, n.projectConfigRoot, n.appendSystemPrompt, n.appendSystemPromptFile, n.systemPrompt, n.systemPromptFile, n.systemPromptSnapshot, n.replyOnResume, n.permissionPromptTool, n.settingSources, n.managedSettings].some((e) => e !== void 0) || Boolean(n.disableSlashCommands) || Boolean(n.includeUnsupportedModels) || n.sessionPersistence === false || Boolean(n.dangerouslySkipPermissions) || Boolean(n.allowDangerouslySkipPermissions) || Boolean(n.allowBypass) || Boolean(n.restricted) || Boolean(n.ide) || Boolean(n.strictMcpConfig) || (n.allowedTools ?? []).length > 0 || (n.disallowedTools ?? []).length > 0 || (n.tools ?? []).length > 0 || (n.mcpConfig ?? []).length > 0 || (n.addDir ?? []).length > 0 || (n.pluginDir ?? []).length > 0 || (n.pluginDirNoMcp ?? []).length > 0;
}
function VHo(n) {
  return [n.systemPrompt, n.systemPromptFile, n.appendSystemPromptFile, n.permissionPromptTool, n.settingSources, n.managedSettings, n.projectConfigRoot].some((e) => e !== void 0) || (n.tools ?? []).some((e) => e !== "default");
}
var mdn = "a custom system prompt, a tool allowlist, or restricted settings";
export {
  N0e,
  VHo,
  mdn,
  zHo
};
