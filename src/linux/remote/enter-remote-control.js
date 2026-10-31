// linux/remote/enter-remote-control.js — Claude Code 2.1.310（linux）模块 chunk-pkryw51j.js
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
import "../auth/oauth-2025-04-20.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../shared/async-hooks.5238.js";
import "../shared/chunk-de56f88d.js";
import "../shared/chunk-8eee6836.js";
import "../git/utf8-keep-bom.js";
import "../shell/chunk-fea9c492.js";
import "../shared/utf-8.js";
import "../cli/chunk-af2447be.js";
import "../cli/chunk-0b672c58.js";
import "../auth/permission-error.js";
import "../fs/chunk-475c6783.js";
import "../auth/claude-code-user.js";
import "../fs/utf-8.8f8e.js";
import "../shell/find-generic-password.js";
import "../shared/chunk-f98598c3.js";
import "../shell/invalid-type.js";
import "../terminal/xterm-ghostty.js";
import "../shared/chunk-2fe3b2b7.js";
import "../models/total-tokens-reminder.js";
import "../mcp/allowed-warning.js";
import "../shared/chunk-4563156b.js";
import "../plugins/chunk-0a4c51cf.js";
import "./local-agent.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../shared/chunk-1b1c4439.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../plugins/skills-dir.js";
import "../git/chunk-c16cb6b4.js";
import "../fs/chunk-86be9585.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.aa9a.js";
import "../git/utf-8.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/async-hooks.9e79.js";
import "../shared/chunk-d4196a83.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/async-hooks.7959.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "./moved-directory.js";
import "../mcp/init-function-end.js";
import "../shell/spawn-error.js";
import "../fs/content-encoding.js";
import "../auth/descriptor-direct.js";
import "./self-hosted.js";
import "../fs/ca-certs-load.js";
import "../settings/global-config-and-gates.js";
import "../shared/async-hooks.b037.js";
import "../settings/ax-sr-suggestion-nav.js";
import "../auth/profile-explicit.js";
import "../fs/chunk-b6c2193e.js";
import "../fs/chunk-21654dda.js";
import "../context/fetch-project-timeline.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../mcp/claude-browser.js";
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
import "../shared/chunk-3a99f127.js";
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import "../auth/claude-desktop-3p.js";
import "../auth/env-quad.js";
import "../context/account-memory-text-not-identified.js";
import "./chunk-c3e8b741.js";
import "../auth/needs-sign-in.js";
import { Sre } from "../shared/chunk-3ff808c3.js";
import "../auth/oauth-slot-refresh-diskless.js";
import "../auth/oauth-automatic-redirect.js";
import "../ide/opener-missing.js";
import "../context/other-server.js";
import "../shared/chunk-37f396c1.js";
import "../shared/chunk-339a284e.js";
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
import "./chunk-95151620.js";
var b = {}, C = {};
async function E() {
  let { exitWithError: e } = await import("../shared/drain-stdout-before-exit.js"), { getSettingsWithErrors: o } = await import("../onboarding/admin-policy-load-failure-refuses-launch.js");
  if (o().settings.disableRemoteControl === true) e(`Error: ${Sre}`);
  let [{ hasStoredOAuthToken: t }, { BRIDGE_LOGIN_ERROR: r }, { getBridgeAuthDebugInfo: i }] = await Promise.all([import("../auth/acquire-o-auth-refresh-lock.js"), import("./bridge-account-unverified-hint.js"), import("./apply-remote-control-to-app-state.js")]);
  if (!t()) e(r + i());
  return b;
}
async function _(e) {
  let { getBridgeDisabledDiagnosis: o, getBridgeAuthDebugInfo: t, ensurePolicyLimitsLoadedForDiagnostic: r } = await import("./apply-remote-control-to-app-state.js"), { checkBridgeMinVersion: i } = await import("./check-bridge-min-version.js"), { exitWithError: n } = await import("../shared/drain-stdout-before-exit.js"), { logOrgPolicyDeniedAsync: s } = await import("../shared/log-org-policy-denied.js"), a = await o();
  if (a) {
    if (a.orgPolicyDenied) await s("allow_remote_control", "cli_flag");
    await m(a.code), n(`Error: ${a.reason}` + t());
  }
  let c = i();
  if (c) await m("version_floor"), n(c);
  let { policyDeniedReason: u } = await import("../cli/admit-cached-response.js");
  await r();
  let d = u("allow_remote_control", "Remote Control", "is", "Remote Control is disabled by your organization's policy.");
  if (d !== null) await s("allow_remote_control", "cli_flag"), await m("policy_denied"), n(`Error: ${d}`);
  return C;
}
async function m(e) {
  let [{ logFeatureBadAsync: o }, { flushAnalyticsBeforeExit: t }] = await Promise.all([import("../hooks/cmd-feature.js"), import("../cli/cli-error.js")]);
  await o("remote_control_entry", e), await t();
}
async function D(e, o, t, r) {
  let [{ preflightTrustedDeviceBlocking: i, sayHeldAutomaticEnrollmentNoticeOnStderr: n }, { shutdown1PEventLogging: s }, { shutdownDatadog: a }, { sleep: c }, { exitWithError: u }, { bridgeMain: d }, { initializeGrowthBook: g }, { logForDebugging: f }, { logFeatureBadAsync: y }, { claudeTempDir: w }, { errorMessage: R }, { logError: h }] = await Promise.all([import("../auth/clear-trusted-device-token.js"), import("../telemetry/log-event-to1-p.js"), import("../auth/reset-datadog-init.js"), import("../shared/full-jitter-backoff-ms.js"), import("../shared/drain-stdout-before-exit.js"), import("./bridge-main.js"), import("../cli/answer-next-growth-book-remote-eval-with.js"), import("../shared/dropped-debug-output-totals.js"), import("../hooks/cmd-feature.js"), import("../plugins/child-process-tmp-dir.js"), import("../cli/classify-axios-error.js"), import("../ui/attach-error-log-sink.js")]);
  try {
    w();
  } catch (l) {
    h(l), await m("temp_dir_unusable"), u(R(l));
  }
  g().catch((l) => {
    f(`[remote-control] GrowthBook init failed (${l instanceof Error ? l.name : typeof l}); feature gates keep serving the disk cache`, { level: "error" });
  });
  let p = await i(r);
  if (n(), p) await y("remote_control_entry", "trusted_device_unenrolled"), await Promise.race([Promise.all([s(), a()]), c(500, void 0, { unref: true })]).catch(() => {
  }), u(`Error: ${p}`);
  await d(o, t, r);
}
async function B(e, o, t) {
  let r = await E(), i = await _(r);
  await D(i, e, o, t);
}
var O = /* @__PURE__ */ new Map([["verbose", () => true], ["debug", () => true], ["debugToStderr", () => true], ["debugFile", () => true], ["axScreenReader", () => true], ["workload", () => true], ["sessionId", () => true], ["name", () => true], ["remoteControlSessionNamePrefix", () => true], ["pluginDir", () => true], ["pluginDirNoMcp", () => true], ["pluginUrl", () => true], ["addDir", () => true], ["ide", () => true], ["chrome", (e) => e === true], ["model", () => true], ["effort", () => true], ["fallbackModel", () => true], ["betas", () => true], ["thinking", () => true], ["thinkingDisplay", () => true], ["maxThinkingTokens", () => true], ["autocompact", () => true], ["allowedTools", () => true], ["dangerouslySkipPermissions", () => true], ["allowDangerouslySkipPermissions", () => true], ["enableAutoMode", () => true], ["bare", () => true]]);
function v(e) {
  return e.filter(({ key: o, value: t }) => !O.get(o)?.(t)).map(({ flag: o }) => o);
}
function P(e) {
  let o = e.map((n) => `\`${n}\``).join(", "), [t, r] = e.length === 1 ? ["it", "is"] : ["them", "are"], i = e.includes("--permission-mode") ? " Set the permission mode with `claude remote-control --permission-mode <mode>`." : "";
  return `Error: ${o} before \`remote-control\` ${r} not carried over to the sessions Remote Control starts, so Remote Control refuses to start rather than drop ${t} — remove ${t}, and give Remote Control's own options after the verb (see \`claude remote-control --help\`).` + i;
}
export {
  B as enterRemoteControl,
  _ as refuseRemoteControlIneligible,
  E as refuseRemoteControlLocally,
  P as rootOptionsRefusedMessage,
  v as rootOptionsRemoteControlRefuses,
  D as startRemoteControl
};
