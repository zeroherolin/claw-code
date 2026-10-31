// linux/remote/claude-code-error-tracking.js — Claude Code 2.1.310（linux）模块 chunk-r2wpxemj.js
import { __asset_src } from "../../runtime/assets.js";
import { ku, ITn } from "../context/not-admin-owned.js";
import { sr, Dt, zu, Au, hk, AAn, e5t, UYe, t5t, BYe, n5t, r5t, o5t, s5t, wFe, kW, N, Er, Pss, FI, Mss, Fs } from "../telemetry/anthropic-workspace-id.js";
import { i } from "../shared/environment.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { Uu, g2 } from "./local-agent.js";
import { Cf } from "../auth/profile-explicit.js";
import { Lui, Xar, Nui, $ui, lkn, Fui } from "../git/utf8-keep-bom.js";
import { nni, rni, st, Xe, Zqr, dKt, Mz, Hz, VYo, _H, GEt } from "../settings/global-config-and-gates.js";
import { g7s } from "../auth/allowed-taints-clean.js";
import { dhn, Kzo, Vzo } from "../telemetry/dd-evp-origin-version.js";
import { xbe, Ot } from "../models/claude-mythos-preview.js";
import { createHash as R } from "crypto";
import { release as F } from "os";
var I = "claude-code-error-tracking";
function k(e) {
  return e ? { version: `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION}_${e}`, sourcemapGroup: e } : { version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, sourcemapGroup: "none" };
}
var D = 30;
function v() {
  let e = dhn();
  if (e.cachedUserBucket !== void 0) return e.cachedUserBucket;
  let r = _H(), o = R("sha256").update(r).digest("hex");
  return e.cachedUserBucket = parseInt(o.slice(0, 8), 16) % D, e.cachedUserBucket;
}
function b(e, r) {
  let o = r.slice(0, 3).map((n) => $ui(n) ? `${n.function ?? "?"}@${n.file}:${n.line ?? "?"}:${n.column ?? "?"}` : `${n.function ?? "?"}@${Lui(n.file)}`).join("|");
  return R("sha256").update(`${e}
${o}`).digest("hex").slice(0, 16);
}
var M = new Set(xbe);
function P() {
  try {
    let e = st();
    if (!e) return;
    let r = Xe(Ot(e), { identity: true });
    return M.has(r) ? r : "other";
  } catch {
    return;
  }
}
var U = 50;
function x() {
  try {
    let e = Hz(), r = VYo(), o = {}, n = 0;
    for (let [t, s] of Object.entries(e)) if (typeof s === "boolean" && r.has(t)) {
      if (o[t] = s, ++n >= U) break;
    }
    return o;
  } catch {
    return {};
  }
}
function L(e) {
  let r = e.issues;
  if (!Array.isArray(r) || r.length === 0) return;
  let o = r.map((n) => n?.code).filter((n) => typeof n === "string" && /^[a-z_]{1,40}$/.test(n));
  return `${r.length} issue(s): ${o.join(",")}`;
}
function B() {
}
var w = !B.name.startsWith("errorTrackingIdentifierProbe"), j = [["APIUserAbortError", zu], ["APIConnectionTimeoutError", hk], ["APIConnectionError", Au], ["BadRequestError", e5t], ["AuthenticationError", UYe], ["PermissionDeniedError", t5t], ["NotFoundError", BYe], ["ConflictError", n5t], ["UnprocessableEntityError", r5t], ["RateLimitError", o5t], ["InternalServerError", s5t], ["APIError", Dt], ["RetryableError", AAn], ["WorkloadIdentityError", Cf], ["AnthropicError", sr], ["ClaudeError", wFe]], S = /_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS$/;
function wOo(e, r = w) {
  let o = typeof e.constructor?.name === "string" ? e.constructor.name.replace(S, "") : void 0, n = r && e instanceof wFe && e.name === o, c = ((typeof e.name === "string" && e.name !== "Error" && !n ? e.name : void 0) || (!r && FI(o) !== void 0 ? o : j.find(([, a]) => e instanceof a)?.[0]) || "Error").replace(S, "");
  return FI(c) ?? "Error";
}
var G = 20;
function K(e, r, o) {
  let n = lkn(e), t = Nui(n), s = n.slice(0, G), c = kW(e), a = t && c === void 0 ? `thrown outside the Claude Code bundle (${o})` : rni(nni(e, c ?? L(e) ?? e.message ?? String(e))), A = Fui({ name: o, message: a }, s), { version: l, sourcemapGroup: C } = k({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.DD_SOURCEMAP_GROUP), T = b(o, s), E = v(), u = P(), y = typeof Bun < "u" && true, m = Er(e), p = Pss(e), f = i.CLAUDE_CODE_ENTRYPOINT === void 0 ? "cli" : Uu() ?? "other", d = Mz(), g = ITn(), _ = Zqr(), h = X(F());
  return { ddtags: [`service:${I}`, "team:claude-code", `version:${l}`, "env:external", `origin:${r}`, `platform:${O()}`, `os_release:${h}`, `user_bucket:${E}`, `entrypoint:${f}`, `node_version:${process.versions.node}`, "bun_version:1.4.4", `is_native_runtime:${y}`, ...u ? [`model:${u}`] : [], ...m ? [`error_code:${m}`] : [], ...p !== void 0 ? [`child_exit_status:${p}`] : [], ...d ? [`session_kind:${d}`] : [], ...d ? [`has_attacher:${ku() ? "1" : "0"}`] : [], ...g ? [`renderer_mode:${g}`] : [], ..._ ? [`remote_control_lane:${_}`] : [], ...dKt() ? ["projects_session:1"] : []].join(","), service: I, hostname: "claude-code", status: "error", message: `${o}: ${a}`.slice(0, 4e3), timestamp: (/* @__PURE__ */ new Date()).toISOString(), error: { kind: o, message: a.slice(0, 4e3), stack: A.slice(0, 16e3), fingerprint: T, handling: r === "logError" ? "handled" : "unhandled" }, version: l, sourcemap_group: C, env: "external", user_bucket: E, origin: r, host_platform: O(), host_os_release: h, host_name_redacted: GEt().slice(0, 12), entrypoint: f, node_version: process.versions.node, bun_version: "1.4.4", ...u && { model: u }, error_frames: s, feature_flags: x() };
}
var V = /* @__PURE__ */ new Set(["APIUserAbortError", "AuthenticationError", "McpSessionExpiredError"]), W = [{ messagePrefix: "File does not exist", topFrameIncludes: "FileReadTool.ts" }], z = [{ topFile: "node:net", topFunction: "internalConnectMultipleTimeout" }, { topFile: "node:_http_server", topFunction: "#onClose" }];
function H(e) {
  let r = lkn(e, 20), o = r[0];
  if (!o || r.some(Xar)) return false;
  return z.some((n) => o.file === n.topFile && o.function === n.topFunction);
}
function Y() {
  return i.CLAUDE_CODE_REMOTE === true || Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) || Boolean(i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE);
}
function q(e, r) {
  if (V.has(r)) return true;
  if (g2() && !Y() && Fs(e) && e.code !== void 0 && Mss.has(e.code) && (e.syscall === "mkdir" || e.syscall === "open") && O() !== "windows") return true;
  let o = e.message ?? "";
  return W.some((n) => o.startsWith(n.messagePrefix) && (e.stack?.split(`
`).find((t) => t.trim().startsWith("at ")) ?? "").includes(n.topFrameIncludes));
}
function X(e) {
  let r = /^(\d+)\.(\d+)/.exec(e);
  return r ? `${r[1]}.${r[2]}` : "unknown";
}
function sGe(e, r = "logError") {
  if (!g7s()) return;
  try {
    let o = N(e), n = wOo(o);
    if (r === "logError" && q(o, n)) return;
    if ((r === "unhandled_rejection" || r === "uncaught_exception") && H(o)) return;
    if (Kzo()) return;
    let t = K(o, r, n);
    Vzo(t);
  } catch {
  }
}
export {
  sGe,
  wOo
};
