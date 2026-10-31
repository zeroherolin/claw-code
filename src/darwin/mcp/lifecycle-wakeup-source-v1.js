// darwin/mcp/lifecycle-wakeup-source-v1.js — Claude Code 2.1.310（darwin）模块 chunk-tcb3p9hc.js
import { __asset_src } from "../../runtime/assets.js";
import { V, ci, dm, bTn } from "../context/not-admin-owned.js";
import { p_ } from "../workflows/chunk-a1595c7e.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { xP } from "../core/conversation-engine.js";
import { yn, Kp } from "../fs/gitlab-runner-authentication-token.js";
import { re } from "../shared/chunk-d2c47492.js";
import { i } from "../shared/environment.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { gV, Lb, YC, QT } from "../context/org-memory-writes-setting-changed.js";
import { Pl } from "../shared/async-hooks.5238.js";
import { ft } from "../fs/async-hooks.7959.js";
import { ql, KSe } from "../shell/invalid-type.js";
import { ri } from "../permissions/classifier-transcript-too-long.js";
import { fr } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { it, Xe, Nnr, Bp, ba, nd } from "../settings/global-config-and-gates.js";
import { zs, ez } from "../shared/chunk-f98598c3.js";
import { on } from "../auth/env-quad.js";
import { ht, dp } from "../agents/chunk-5531d42a.js";
import { C7s } from "../models/model-capability-off-from-client-data.js";
import { Hr, TQs } from "./spawn-to-exec-ms.js";
import { ZOo } from "../context/team-memory-sync.js";
import { Gm } from "../telemetry/flag-off.js";
import { Hdt } from "./claudeai-proxy.8e2e.js";
import { o, u } from "../vendor/zod/string-format.js";
import { randomUUID as I } from "crypto";
var m = 6, p = 32, _ = f(() => u({ text: o().optional() }));
function g(e) {
  let r = _().safeParse(e);
  if (!r.success || r.data.text === void 0) return null;
  let a = c(r.data.text);
  return a.length > 0 ? a : null;
}
function Kio(e, r, a) {
  let s = C7s("footer_indicator_", Xe(r), r);
  for (let n of [e, s]) if (n !== void 0) {
    let t = c(n);
    if (t.length > 0) return t;
  }
  return g(a);
}
function d_r() {
  let e = Kio(i.CLAUDE_CODE_FOOTER_INDICATOR, it(), nd()?.footer_indicator);
  return e === null ? void 0 : { text: e };
}
function c(e) {
  let r = Kp(yn(e)).replace(/[\x00-\x1f\x7f-\x9f]/g, "").trim();
  return ft(re(r, p), m);
}
function fXt(e) {
  return e === ht ? dp : e;
}
var qio = "interrupt_receipt_v1", Yio = "msg_lifecycle_v1", y = "request_marker_lists_v1", tys = "lifecycle_wakeup_source_v1", S = "interrupt_cancel_queued_v1", A = "interrupt_requeue_taken_v1", Xio = "interrupt_send_now_v1", nys = "task_list_restore_v1", rys = "task_list_restored_v1";
var oys = "mcp_read_resource_v1", sys = "read_file_as_written_v1", iys = "mcp_tool_ui_meta_v1", c_r = "mcp_call_result_not_for_model_v1";
function d0n(e) {
  return !e.redactsWhatItPersists && !e.isRemoteTransport;
}
var Jio = "ui_surface_v1", ays = "prompts_screened_v1", Qio = "ui_hooked_v1";
function lys() {
  return [];
}
var dys = [qio, S, Xio, A, Yio, y];
function u_r(e) {
  let r = KSe(e.manifest.version);
  return { name: e.name, path: e.path, source: e.source, ...r && { version: r } };
}
function c0n() {
  try {
    return ez() || zs("hipaa");
  } catch (e) {
    return l(e), true;
  }
}
function mXt() {
  let e = fr(), r;
  if (Bp()) {
    if (r = { auto: ba() }, gV()) r.team = Lb();
  }
  let a;
  a = import.meta.require("../remote/current-sender-class.js").getUdsMessagingSocketPath();
  let s = V();
  return { cwd: Pl() ?? "", sessionId: s, apiKeySource: Nnr(), betas: dm(), outputStyle: e?.outputStyle ?? xP, analyticsDisabled: p_(), productFeedbackDisabled: !on("allow_product_feedback"), memoryPaths: r, scratchpadPath: YC() ? QT(s) ?? void 0 : void 0, originalCwd: c0n() ? void 0 : ci() ?? void 0, messagingSocketPath: a, workerEpoch: Gm() ? i.CLAUDE_CODE_WORKER_EPOCH : void 0, powerShellPath: O() === "windows" ? ZOo() : void 0, footerIndicator: d_r() };
}
function u0n() {
  let e = mXt();
  return { cwd: bTn()?.directory?.path ?? "", sessionId: e.sessionId, apiKeySource: e.apiKeySource, betas: void 0, outputStyle: e.outputStyle, analyticsDisabled: e.analyticsDisabled, productFeedbackDisabled: e.productFeedbackDisabled, memoryPaths: void 0, scratchpadPath: void 0, originalCwd: void 0, messagingSocketPath: void 0, workerEpoch: e.workerEpoch, powerShellPath: void 0, footerIndicator: void 0 };
}
function Mdt(e) {
  let r = new Set(e.mcpClients.map((t) => t.name)), a = e.mcpServerErrors.filter((t) => !r.has(t.name)), s = e.commands.filter((t) => t.userInvocable !== false && t.terminalOriented === true).map((t) => t.name), n = { type: "system", subtype: "init", cwd: e.cwd, session_id: e.sessionId, tools: e.tools.map((t) => fXt(t.name)), mcp_servers: e.mcpClients.map((t) => ({ name: t.name, status: Hdt(t.type), ...t.source !== void 0 && { source: t.source } })), model: e.model, permissionMode: ql(e.permissionMode), slash_commands: e.commands.filter((t) => t.userInvocable !== false).map((t) => t.name), ...s.length > 0 && { terminal_slash_commands: s }, apiKeySource: e.apiKeySource, betas: e.betas, claude_code_version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, output_style: e.outputStyle, agents: e.agents.map((t) => t.agentType), skills: ri(e.skills, "name").filter((t) => t.userInvocable !== false).map((t) => t.name), plugins: e.plugins.map(u_r), ...e.pluginErrors.length > 0 && { plugin_errors: e.pluginErrors.map((t) => ({ ...t })) }, ...e.pluginWarnings.length > 0 && { plugin_warnings: e.pluginWarnings.map((t) => ({ ...t })) }, ...e.capabilities && { capabilities: [...e.capabilities] }, ...a.length > 0 && { mcp_server_errors: a.map((t) => ({ ...t })) }, analytics_disabled: e.analyticsDisabled, product_feedback_disabled: e.productFeedbackDisabled, uuid: I() };
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
function p0n(e, r) {
  Hr("init_emit_ms", performance.now() - r, r);
  let a = TQs();
  if (a) e.startup_timing = a;
}
export {
  Jio,
  Kio,
  Mdt,
  Qio,
  Xio,
  Yio,
  ays,
  c0n,
  c_r,
  d0n,
  d_r,
  dys,
  fXt,
  iys,
  lys,
  mXt,
  nys,
  oys,
  p0n,
  qio,
  rys,
  sys,
  tys,
  u0n,
  u_r
};
