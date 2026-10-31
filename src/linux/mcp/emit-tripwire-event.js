// linux/mcp/emit-tripwire-event.js — Claude Code 2.1.310（linux）模块 chunk-43z4gqzg.js
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import { b, c } from "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { Xzo } from "../telemetry/chunk-9e255522.js";
import { Zs } from "../telemetry/chunk-9097a12b.js";
import { qi } from "../shared/async-hooks.b037.js";
import "../settings/global-config-and-gates.js";
import "../models/claude-3-5-sonnet.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-de56f88d.js";
import "../git/utf-8.js";
import "../telemetry/chunk-9d6962d2.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/async-hooks.5238.js";
import "../shared/async-hooks.9e79.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../shared/chunk-8eee6836.js";
import "../git/utf8-keep-bom.js";
import "../shell/chunk-fea9c492.js";
import "../git/chunk-c16cb6b4.js";
import "../shared/chunk-4563156b.js";
import "../shared/chunk-d4196a83.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.8f8e.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/utf-8.aa9a.js";
import "../fs/async-hooks.7959.js";
import "../plugins/chunk-0a4c51cf.js";
import "../fs/chunk-86be9585.js";
import "../shared/chunk-2fe3b2b7.js";
import "../remote/local-agent.js";
import "./toolbox-mcp-server-id.js";
import "./claude-browser.js";
import "../cli/chunk-af2447be.js";
import "../remote/self-hosted.js";
import "../context/fetch-project-timeline.js";
import "../shared/chunk-1b1c4439.js";
import "../shell/invalid-type.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-475c6783.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../terminal/chunk-3ca478a4.js";
import "./chunk-0e2a1db6.js";
import "./always-allow.js";
import "../plugins/skills-dir.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../remote/moved-directory.js";
import "./init-function-end.js";
import "../models/total-tokens-reminder.js";
import "../shell/spawn-error.js";
import "../terminal/xterm-ghostty.js";
import "./allowed-warning.js";
import "../fs/content-encoding.js";
import "../auth/descriptor-direct.js";
import "../fs/ca-certs-load.js";
import "../shared/chunk-f98598c3.js";
import "../auth/permission-error.js";
import "../auth/claude-code-user.js";
import "../shell/find-generic-password.js";
import "../auth/profile-explicit.js";
import "../fs/chunk-b6c2193e.js";
import "../fs/chunk-21654dda.js";
import "../shared/chunk-3a99f127.js";
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import "../settings/ax-sr-suggestion-nav.js";
import "../fs/reply-across-default-dirs.js";
import "../telemetry/chunk-b109a1d6.js";
import "../telemetry/chunk-addb1ac7.js";
import "../agents/chunk-44729602.js";
import "../git/get-url.js";
import "../shared/chunk-dda594a8.js";
import "../shared/chunk-46ffe22f.js";
import "../artifacts/cobalt-plinth-lovage.js";
import "../computer-use/chunk-217335d0.js";
import "../workflows/chunk-a1595c7e.js";
import "../agents/session-stable-address.js";
import "../agents/in-process-teammate.32be.js";
import "../shared/chunk-537f65d6.js";
import "../git/ssh-placeholder.js";
import { NO } from "../telemetry/mcp-sdk-generation.js";
import "../shared/chunk-cb8096b1.js";
import "../shared/chunk-d1292a44.js";
import "../shared/chunk-6ae01e90.js";
import "../models/claude-mythos-preview.js";
import "../shared/sk-ant-sid.js";
import "../vendor/aws-sdk/chunk-d15f3977.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import "../remote/chunk-95151620.js";
function n(t, e) {
  if (!qi().claim("mcp_tree_id_tripwire")) return;
  Xzo(Zs("tengu_mcp_tripwire", { expected: c(t), loaded: e === "v1" || e === "v2" ? c(e) : b("other") }).catch(() => {
  }));
}
function m() {
  if (NO() === "v2") {
    let i = import.meta.require("./apply-capability-serve-time-miss.fa8e.js"), o = i.MCP_TREE_ID;
    if (o !== "v2") throw n("v2", o), Error("MCP runtime accessor tripwire: resolved generation is v2 but the loaded client module does not carry MCP_TREE_ID v2");
    return i;
  }
  let t = import.meta.require("./apply-capability-serve-time-miss.848f.js"), e = t.MCP_TREE_ID;
  if (e !== "v1") throw n("v1", e), Error("MCP runtime accessor tripwire: resolved generation is v1 but the loaded client module does not carry MCP_TREE_ID v1");
  return t;
}
function d() {
  if (NO() === "v2") return import.meta.require("./apply-capability-serve-time-miss.fa8e.js").createSep2663TaskBinding;
  return;
}
function l() {
  if (NO() === "v2") return import.meta.require("../auth/authorization-url-for-debug-log.b402.js");
  return import.meta.require("../auth/authorization-url-for-debug-log.338a.js");
}
function y() {
  if (NO() === "v2") return import.meta.require("../hooks/handle-elicitation-request.7451.js");
  return import.meta.require("../hooks/handle-elicitation-request.913f.js");
}
function _() {
  if (NO() === "v2") return import.meta.require("./bound-mcp-status-message.8ad5.js");
  return import.meta.require("./bound-mcp-status-message.72f9.js");
}
function v() {
  if (NO() === "v2") return import.meta.require("./get-mcp-error-code.990e.js");
  return import.meta.require("./get-mcp-error-code.7bc4.js");
}
function j() {
  if (NO() === "v2") return import.meta.require("./read-mcp-directory.14b7.js");
  return import.meta.require("./read-mcp-directory.543b.js");
}
function M() {
  if (NO() === "v2") return import.meta.require("../auth/is-claude-ai-bearer-rejected-error.f6aa.js");
  return import.meta.require("../auth/is-claude-ai-bearer-rejected-error.705c.js");
}
function E() {
  if (NO() === "v2") return import.meta.require("../auth/acquire-idp-id-token.3fef.js");
  return import.meta.require("../auth/acquire-idp-id-token.0082.js");
}
function h() {
  return import.meta.require("./get-mcp-skill.js");
}
export {
  n as emitTripwireEvent,
  l as mcpAuthModule,
  m as mcpClientModule,
  j as mcpDirectoryReadModule,
  y as mcpElicitationHandlerModule,
  M as mcpIsListAuthErrorModule,
  v as mcpSdkErrorClassificationModule,
  d as mcpSep2663TaskBinding,
  h as mcpSkillsListModule,
  _ as mcpTaskWatcherModule,
  E as mcpXaaIdpLoginModule
};
