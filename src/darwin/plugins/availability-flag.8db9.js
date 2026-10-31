// darwin/plugins/availability-flag.8db9.js — Claude Code 2.1.310（darwin）模块 chunk-3f0r8wvy.js
import { k } from "../settings/global-config-and-gates.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../models/claude-3-5-sonnet.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-59ffb646.js";
import "../git/utf-8.js";
import "../telemetry/chunk-9097a12b.js";
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
import "./chunk-0a4c51cf.js";
import "../fs/chunk-86be9585.js";
import "../shared/chunk-2fe3b2b7.js";
import "../remote/local-agent.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../mcp/claude-browser.js";
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
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "./skills-dir.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../remote/moved-directory.js";
import "../mcp/init-function-end.js";
import "../models/total-tokens-reminder.js";
import "../shell/spawn-error.js";
import "../terminal/xterm-ghostty.js";
import "../mcp/allowed-warning.js";
import "../fs/content-encoding.js";
import "../auth/descriptor-direct.js";
import "../fs/ca-certs-load.js";
import { zs, Qkt, ez } from "../shared/chunk-f98598c3.js";
import "../auth/permission-error.js";
import "../auth/claude-code-user.js";
import "../shell/find-generic-password.js";
import "../auth/profile-explicit.js";
import "../shared/async-hooks.b037.js";
import "../fs/chunk-b6c2193e.js";
import "../fs/chunk-21654dda.js";
import "../shared/chunk-3a99f127.js";
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import { Wf } from "../settings/ax-sr-suggestion-nav.js";
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
import { HF, lb } from "../commands/claude-code.js";
import "../telemetry/chunk-1bb3c64e.js";
import "../shared/chunk-53e41b56.js";
import "../shared/chunk-23ad546c.js";
import "../mcp/chunk-d6e9c05b.js";
import "../shared/chunk-7c8c6c5a.js";
import "../shared/allow-bundled-skills.js";
import "../shared/chunk-cb8096b1.js";
import "../shared/chunk-d1292a44.js";
import "../shared/chunk-6ae01e90.js";
import "../models/claude-mythos-preview.js";
import "../shared/sk-ant-sid.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../vendor/aws-sdk/chunk-d15f3977.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import { x, Fr } from "../vendor/react/chunk-0b0bf45d.js";
import "../remote/chunk-95151620.js";
var u = x(function(F, m) {
  m.exports = { scan: { hooks: ["session.start", "session.attach", "prompt.section", "tool.call", "ui.render"], calls: ["clock.now", "clock.sleep", "env.get", "session.messages", "session.surfaces", "settings.read", "telemetry.log", "telemetry.mark", "tool.register", "ui.log", "ui.resolve"], env: { reads: ["CLAUDE_AX_SCREEN_READER"], writes: [] } }, files: {} };
});
var s = {};
Fr(s, { PLUGIN_DESCRIPTION: () => o, SUPPLEMENTED_MODULE: () => l, availabilityFlag: () => e, default: () => s, isAvailable: () => t, isOnByDefault: () => r, registerPlugin: () => E });
function e() {
  return "tengu_joyful_otter";
}
var l = { register: (a, i) => import.meta.require("../agents/register.js").register(a, i, { isReaderOn: () => Wf(), isBatchAwaited: () => k("tengu_virtual_toast", false) }) };
var r = false;
var c = /* @__PURE__ */ new Set(["linux", "macos"]);
function t() {
  if (k(e(), r) !== true) return false;
  return (c.has(O()) || false) && Qkt() && !ez() && !zs("hipaa") && !zs("zdr");
}
var o = "Draws charts in the transcript: a chart tool for Claude, and automatic charts for MCP results that are metrics over time";
var E = () => lb({ name: "cc-plugin-easel", description: o, isAvailable: t, hooksModule: HF(import.meta.dir, l, () => u()), userConfig: { autoCharts: { type: "boolean", title: "Auto charts", description: "Draw a chart under an MCP result that is metrics over time, without being asked. Off: only the charts Claude asks for.", required: false, default: true }, autoChartSkip: { type: "string", title: "Auto charts: servers to skip", description: 'MCP servers whose results never get an auto chart, separated by commas. A server is named as its tools name it: "grafana" for mcp__grafana__query.', required: false, default: "" } } });
export {
  o as PLUGIN_DESCRIPTION,
  l as SUPPLEMENTED_MODULE,
  e as availabilityFlag,
  s as default,
  t as isAvailable,
  r as isOnByDefault,
  E as registerPlugin
};
