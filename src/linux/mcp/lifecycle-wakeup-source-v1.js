// linux/mcp/lifecycle-wakeup-source-v1.js — Claude Code 2.1.310（linux）模块 chunk-wybpgt3b.js
import { __asset_src } from "../../runtime/assets.js";
import { q, ci, dm, rAn } from "../context/not-admin-owned.js";
import { c_ } from "../workflows/chunk-a1595c7e.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { AP } from "../core/conversation-engine.js";
import { yn, Yf } from "../fs/gitlab-runner-authentication-token.js";
import { re } from "../shared/chunk-d2c47492.js";
import { i } from "../shared/environment.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { oV, HS, VT, YA } from "../context/org-memory-writes-setting-changed.js";
import { Pl } from "../shared/async-hooks.5238.js";
import { gt } from "../fs/async-hooks.7959.js";
import { ql, Bbe } from "../shell/invalid-type.js";
import { ri } from "../permissions/classifier-transcript-too-long.js";
import { pr } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { st, Xe, bnr, jf, ba, nd } from "../settings/global-config-and-gates.js";
import { Ks, zz } from "../shared/chunk-f98598c3.js";
import { on } from "../auth/env-quad.js";
import { ht, cf } from "../agents/chunk-5531d42a.js";
import { BXs } from "../models/model-capability-off-from-client-data.js";
import { Dr, jQs } from "./spawn-to-exec-ms.js";
import { QOo } from "../context/team-memory-sync.js";
import { Gm } from "../telemetry/flag-off.js";
import { Idt } from "./claudeai-proxy.8e2e.js";
import { o, u } from "../vendor/zod/string-format.js";
import { randomUUID as I } from "crypto";
var m = 6, f = 32, _ = p(() => u({ text: o().optional() }));
function g(e) {
  let r = _().safeParse(e);
  if (!r.success || r.data.text === void 0) return null;
  let a = c(r.data.text);
  return a.length > 0 ? a : null;
}
function Pio(e, r, a) {
  let s = BXs("footer_indicator_", Xe(r), r);
  for (let n of [e, s]) if (n !== void 0) {
    let t = c(n);
    if (t.length > 0) return t;
  }
  return g(a);
}
function e_r() {
  let e = Pio(i.CLAUDE_CODE_FOOTER_INDICATOR, st(), nd()?.footer_indicator);
  return e === null ? void 0 : { text: e };
}
function c(e) {
  let r = Yf(yn(e)).replace(/[\x00-\x1f\x7f-\x9f]/g, "").trim();
  return gt(re(r, f), m);
}
function tXt(e) {
  return e === ht ? cf : e;
}
var Iio = "interrupt_receipt_v1", Oio = "msg_lifecycle_v1", y = "request_marker_lists_v1", Ihs = "lifecycle_wakeup_source_v1", S = "interrupt_cancel_queued_v1", A = "interrupt_requeue_taken_v1", Mio = "interrupt_send_now_v1", Ohs = "task_list_restore_v1", Mhs = "task_list_restored_v1";
var Dhs = "mcp_read_resource_v1", Hhs = "read_file_as_written_v1", Lhs = "mcp_tool_ui_meta_v1", t_r = "mcp_call_result_not_for_model_v1";
function qMn(e) {
  return !e.redactsWhatItPersists && !e.isRemoteTransport;
}
var Dio = "ui_surface_v1", Nhs = "prompts_screened_v1", Hio = "ui_hooked_v1";
function $hs() {
  return [];
}
var Fhs = [Iio, S, Mio, A, Oio, y];
function n_r(e) {
  let r = Bbe(e.manifest.version);
  return { name: e.name, path: e.path, source: e.source, ...r && { version: r } };
}
function YMn() {
  try {
    return zz() || Ks("hipaa");
  } catch (e) {
    return l(e), true;
  }
}
function nXt() {
  let e = pr(), r;
  if (jf()) {
    if (r = { auto: ba() }, oV()) r.team = HS();
  }
  let a;
  a = import.meta.require("../remote/current-sender-class.js").getUdsMessagingSocketPath();
  let s = q();
  return { cwd: Pl() ?? "", sessionId: s, apiKeySource: bnr(), betas: dm(), outputStyle: e?.outputStyle ?? AP, analyticsDisabled: c_(), productFeedbackDisabled: !on("allow_product_feedback"), memoryPaths: r, scratchpadPath: VT() ? YA(s) ?? void 0 : void 0, originalCwd: YMn() ? void 0 : ci() ?? void 0, messagingSocketPath: a, workerEpoch: Gm() ? i.CLAUDE_CODE_WORKER_EPOCH : void 0, powerShellPath: O() === "windows" ? QOo() : void 0, footerIndicator: e_r() };
}
function XMn() {
  let e = nXt();
  return { cwd: rAn()?.directory?.path ?? "", sessionId: e.sessionId, apiKeySource: e.apiKeySource, betas: void 0, outputStyle: e.outputStyle, analyticsDisabled: e.analyticsDisabled, productFeedbackDisabled: e.productFeedbackDisabled, memoryPaths: void 0, scratchpadPath: void 0, originalCwd: void 0, messagingSocketPath: void 0, workerEpoch: e.workerEpoch, powerShellPath: void 0, footerIndicator: void 0 };
}
function Pdt(e) {
  let r = new Set(e.mcpClients.map((t) => t.name)), a = e.mcpServerErrors.filter((t) => !r.has(t.name)), s = e.commands.filter((t) => t.userInvocable !== false && t.terminalOriented === true).map((t) => t.name), n = { type: "system", subtype: "init", cwd: e.cwd, session_id: e.sessionId, tools: e.tools.map((t) => tXt(t.name)), mcp_servers: e.mcpClients.map((t) => ({ name: t.name, status: Idt(t.type), ...t.source !== void 0 && { source: t.source } })), model: e.model, permissionMode: ql(e.permissionMode), slash_commands: e.commands.filter((t) => t.userInvocable !== false).map((t) => t.name), ...s.length > 0 && { terminal_slash_commands: s }, apiKeySource: e.apiKeySource, betas: e.betas, claude_code_version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, output_style: e.outputStyle, agents: e.agents.map((t) => t.agentType), skills: ri(e.skills, "name").filter((t) => t.userInvocable !== false).map((t) => t.name), plugins: e.plugins.map(n_r), ...e.pluginErrors.length > 0 && { plugin_errors: e.pluginErrors.map((t) => ({ ...t })) }, ...e.pluginWarnings.length > 0 && { plugin_warnings: e.pluginWarnings.map((t) => ({ ...t })) }, ...e.capabilities && { capabilities: [...e.capabilities] }, ...a.length > 0 && { mcp_server_errors: a.map((t) => ({ ...t })) }, analytics_disabled: e.analyticsDisabled, product_feedback_disabled: e.productFeedbackDisabled, uuid: I() };
  if (e.memoryPaths) n.memory_paths = { ...e.memoryPaths };
  if (e.scratchpadPath !== void 0) n.scratchpad_path = e.scratchpadPath;
  if (e.originalCwd !== void 0) n.original_cwd = e.originalCwd;
  if (e.additionalDirectories !== void 0) n.additional_directories = [...e.additionalDirectories];
  if (e.workerEpoch !== void 0 && e.workerEpoch >= 1) n.worker_epoch = e.workerEpoch;
  if (e.messagingSocketPath !== void 0) n.messaging_socket_path = e.messagingSocketPath;
  if (n.fast_mode_state = e.fastModeState, n.fast_mode_disabled_reason = e.fastModeDisabledReason, e.footerIndicator) n.footer_indicator = { ...e.footerIndicator };
  if (e.effort !== void 0) n.effort = e.effort;
  if (e.perTurnEffortActive !== void 0) n.per_turn_effort_active = e.perTurnEffortActive;
  if (e.viewMode !== void 0) n.view_mode = e.viewMode;
  if (e.powerShellPath !== void 0) n.powershell_path = e.powerShellPath;
  return n;
}
function JMn(e, r) {
  Dr("init_emit_ms", performance.now() - r, r);
  let a = jQs();
  if (a) e.startup_timing = a;
}
export {
  $hs,
  Dhs,
  Dio,
  Fhs,
  Hhs,
  Hio,
  Ihs,
  Iio,
  JMn,
  Lhs,
  Mhs,
  Mio,
  Nhs,
  Ohs,
  Oio,
  Pdt,
  Pio,
  XMn,
  YMn,
  e_r,
  nXt,
  n_r,
  qMn,
  tXt,
  t_r
};
