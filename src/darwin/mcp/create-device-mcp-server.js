// darwin/mcp/create-device-mcp-server.js — Claude Code 2.1.310（darwin）模块 chunk-8wp00xmy.js
import { H$, _6, l2 } from "../vendor/mcp-sdk/input-required.88fd.js";
import "../vendor/mcp-sdk/input-required.1d23.js";
import { _7 } from "../vendor/mcp-sdk/tool-result.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import { S } from "../agents/third-party.js";
import { N } from "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { rr } from "../artifacts/chunk-a6c9d164.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import "../telemetry/chunk-9d6962d2.js";
import "../shared/chunk-2fe3b2b7.js";
import "./allowed-warning.js";
import "../permissions/classifier-transcript-too-long.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../shared/chunk-59ffb646.js";
import "../shell/async-hooks.js";
import "../settings/global-config-and-gates.js";
import "../remote/local-agent.js";
import "../fs/reply-across-default-dirs.js";
import "../terminal/chunk-3ca478a4.js";
import "../remote/bridge-message-received.js";
import "../context/fetch-project-timeline.js";
import "../shared/chunk-d4196a83.js";
import "../fs/async-hooks.7959.js";
import "../fs/content-encoding.js";
import "../git/utf-8.js";
import "../shared/async-hooks.5238.js";
import "../shared/async-hooks.9e79.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../shared/chunk-8eee6836.js";
import "../git/utf8-keep-bom.js";
import "../shell/chunk-fea9c492.js";
import "../git/chunk-c16cb6b4.js";
import "../shared/chunk-4563156b.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.8f8e.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/utf-8.aa9a.js";
import "../plugins/chunk-0a4c51cf.js";
import "../fs/chunk-86be9585.js";
import "./toolbox-mcp-server-id.js";
import "./claude-browser.js";
import "../cli/chunk-af2447be.js";
import "../remote/self-hosted.js";
import "../shared/chunk-1b1c4439.js";
import "../shell/invalid-type.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-475c6783.js";
import "../permissions/quota-auto-resume-disabled.js";
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
import "../auth/descriptor-direct.js";
import "../fs/ca-certs-load.js";
import "../shared/chunk-f98598c3.js";
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
import "../settings/ax-sr-suggestion-nav.js";
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
import "../shell/bridge-folder-already-served.js";
import "../remote/sessions-elevated-auth-disable-proactive-enrollment.js";
import { mdt } from "../permissions/credential-store-files.js";
import { POn } from "../telemetry/below-floor.js";
import "../shared/chunk-e9fc3352.js";
import "../shared/chunk-7e745eb7.js";
import "../api/control-response.js";
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
import "../remote/chunk-95151620.js";
var p = "claude-code-device", m = "get_device_info";
function h(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return { sessionId: void 0, toolArgs: {} };
  let { session_id: o, trigger_id: n, ...s } = e;
  return { sessionId: typeof o === "string" && o.length > 0 ? o : void 0, toolArgs: s };
}
function A(e) {
  return H$.parse(e);
}
function B(e) {
  let o = 0, n = [], s = () => {
    if (o !== 0) return;
    let i = n;
    n = [], i.forEach((r) => r());
  }, l = new _7({ name: p, version: e.version }, { capabilities: { tools: {} } });
  return l.setRequestHandler(_6, async () => ({ tools: [...e.registry.definitions()] })), l.setRequestHandler(l2, async ({ params: { name: i, arguments: r } }, f) => {
    let d = e.registry.get(i);
    if (!d) return { content: [{ type: "text", text: `Unknown tool: ${i}` }], isError: true };
    let { sessionId: c, toolArgs: g } = h(r);
    if (c !== void 0 && rr(c) !== rr(e.sessionId)) return v(d, c, e.sessionId);
    if (d.senderJudgedBy === "dispatch") {
      let u = POn();
      if (u.heldBack) return y(d, u.attestation);
    }
    o++;
    try {
      return await d.call(g, { sessionId: c, signal: f.signal });
    } catch (u) {
      return t(`[deviceBridge] tool ${i} failed: ${N(u).message}`), { content: [{ type: "text", text: `Tool ${i} failed: internal error` }], isError: true };
    } finally {
      if (o--, o === 0) setTimeout(s, 0);
    }
  }), { server: l, inFlightCalls: () => o, whenIdle: () => {
    let i = new Promise((r) => {
      n.push(r);
    });
    if (o === 0) setTimeout(s, 0);
    return i;
  } };
}
function v(e, o, n) {
  let s = e.definition.name;
  return t(`[deviceBridge] refused ${s}: call asserted for session ${_(o.slice(0, 48))}, this device serves ${n}`), a("tengu_device_tool_refused", { tool: e.analyticsName, reason: S("session_mismatch") }), { content: [{ type: "text", text: `${s} refused: the user's machine is currently connected on behalf of a different Claude Code cloud session (usually another session started from the same machine), so it cannot run device tools for this session and nothing was run. Tell the user, and continue with the tools in this cloud environment; if this session was also started with Claude Code on that machine, its device tools may work again once the other session ends. Do not retry in a loop.` }], isError: true };
}
function y(e, o) {
  let n = o?.status ?? "UNSPECIFIED";
  return t(`[deviceBridge] refused ${e.definition.name}: its sender is held back under the trusted-device policy (${n})`), a("tengu_device_tool_refused", { tool: e.analyticsName, reason: S("unattested_request") }), { content: [{ type: "text", text: mdt({ targetName: "this machine", status: n, subtype: "remote_tool_call" }) }], isError: true };
}
var T = "This machine is attached but does not run commands for this session.";
function J(e) {
  let o = e.now ?? (() => /* @__PURE__ */ new Date());
  return { definition: { name: m, description: "Returns runtime environment details for this device (platform, architecture, Claude Code version, and device name). Call this to confirm the device connection is live." + (e.idle ? ` ${T}` : ""), inputSchema: { type: "object", properties: {} } }, analyticsName: S(m), senderJudgedBy: { notJudged: "The bridge service's own identify probe, sent with no session. It takes no input, runs nothing and reads nothing here, and answers the name this machine dialed the bridge under plus platform, architecture, Claude Code version and the time. Refusing it would hide the machine from the bridge, not keep anything from a sender." }, call: async () => {
    let n = { platform: O(), arch: "arm64", claudeCodeVersion: e.version, deviceName: e.getDeviceName(), timestamp: o().toISOString() };
    return { content: [{ type: "text", text: _(n, null, 2) }] };
  } };
}
export {
  B as createDeviceMcpServer,
  J as deviceInfoProbeTool,
  A as parseJsonRpcMessage
};
