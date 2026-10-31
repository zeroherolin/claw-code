// remote/claude-code-error-tracking.ba0h.js — Claude Code 2.1.310 模块 chunk-ba0hdvwh.js
import { __asset_src } from "../runtime/assets.js";
import { Tu, qCn } from "../context/not-admin-owned.ersa.js";
import { ir, Ht, zu, Ru, yk, WTn, m4t, q3e, g4t, Y3e, h4t, y4t, _4t, S4t, P$e, MW, N, vr, uis, GI, mis, $s } from "../telemetry/anthropic-workspace-id.36ys.js";
import { i } from "../shared/environment.9a41.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { Uu, kz } from "./local-agent.we9a.js";
import { Tp } from "../auth/profile-explicit.b7t3.js";
import { Spi, flr, bpi, wpi, kkn, Epi } from "../git/utf8-keep-bom.c49x.js";
import { Uni, Bni, it, Xe, bqr, w6t, jG, GG, E4o, EH, Jvt } from "../settings/global-config-and-gates.27xj.js";
import { ZQs } from "../auth/allowed-taints-clean.v8z4.js";
import { Thn, wzo, Ezo } from "../telemetry/dd-evp-origin-version.230v.js";
import { DSe, Ot } from "../models/claude-mythos-preview.rw6s.js";
import { createHash as R } from "crypto";
import { release as F } from "os";
var I = "claude-code-error-tracking";
function k(e) {
  return e ? { version: `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION}_${e}`, sourcemapGroup: e } : { version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, sourcemapGroup: "none" };
}
var D = 30;
function v() {
  let e = Thn();
  if (e.cachedUserBucket !== void 0) return e.cachedUserBucket;
  let r = EH(), o = R("sha256").update(r).digest("hex");
  return e.cachedUserBucket = parseInt(o.slice(0, 8), 16) % D, e.cachedUserBucket;
}
function b(e, r) {
  let o = r.slice(0, 3).map((n) => wpi(n) ? `${n.function ?? "?"}@${n.file}:${n.line ?? "?"}:${n.column ?? "?"}` : `${n.function ?? "?"}@${Spi(n.file)}`).join("|");
  return R("sha256").update(`${e}
${o}`).digest("hex").slice(0, 16);
}
var M = new Set(DSe);
function P() {
  try {
    let e = it();
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
    let e = GG(), r = E4o(), o = {}, n = 0;
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
var w = !B.name.startsWith("errorTrackingIdentifierProbe"), j = [["APIUserAbortError", zu], ["APIConnectionTimeoutError", yk], ["APIConnectionError", Ru], ["BadRequestError", m4t], ["AuthenticationError", q3e], ["PermissionDeniedError", g4t], ["NotFoundError", Y3e], ["ConflictError", h4t], ["UnprocessableEntityError", y4t], ["RateLimitError", _4t], ["InternalServerError", S4t], ["APIError", Ht], ["RetryableError", WTn], ["WorkloadIdentityError", Tp], ["AnthropicError", ir], ["ClaudeError", P$e]], S = /_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS$/;
function XOo(e, r = w) {
  let o = typeof e.constructor?.name === "string" ? e.constructor.name.replace(S, "") : void 0, n = r && e instanceof P$e && e.name === o, c = ((typeof e.name === "string" && e.name !== "Error" && !n ? e.name : void 0) || (!r && GI(o) !== void 0 ? o : j.find(([, a]) => e instanceof a)?.[0]) || "Error").replace(S, "");
  return GI(c) ?? "Error";
}
var G = 20;
function K(e, r, o) {
  let n = kkn(e), t = bpi(n), s = n.slice(0, G), c = MW(e), a = t && c === void 0 ? `thrown outside the Claude Code bundle (${o})` : Bni(Uni(e, c ?? L(e) ?? e.message ?? String(e))), A = Epi({ name: o, message: a }, s), { version: l, sourcemapGroup: C } = k({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.DD_SOURCEMAP_GROUP), T = b(o, s), E = v(), u = P(), y = typeof Bun < "u" && true, m = vr(e), p = uis(e), f = i.CLAUDE_CODE_ENTRYPOINT === void 0 ? "cli" : Uu() ?? "other", d = jG(), g = qCn(), _ = bqr(), h = X(F());
  return { ddtags: [`service:${I}`, "team:claude-code", `version:${l}`, "env:external", `origin:${r}`, `platform:${O()}`, `os_release:${h}`, `user_bucket:${E}`, `entrypoint:${f}`, `node_version:${process.versions.node}`, "bun_version:1.4.4", `is_native_runtime:${y}`, ...u ? [`model:${u}`] : [], ...m ? [`error_code:${m}`] : [], ...p !== void 0 ? [`child_exit_status:${p}`] : [], ...d ? [`session_kind:${d}`] : [], ...d ? [`has_attacher:${Tu() ? "1" : "0"}`] : [], ...g ? [`renderer_mode:${g}`] : [], ..._ ? [`remote_control_lane:${_}`] : [], ...w6t() ? ["projects_session:1"] : []].join(","), service: I, hostname: "claude-code", status: "error", message: `${o}: ${a}`.slice(0, 4e3), timestamp: (/* @__PURE__ */ new Date()).toISOString(), error: { kind: o, message: a.slice(0, 4e3), stack: A.slice(0, 16e3), fingerprint: T, handling: r === "logError" ? "handled" : "unhandled" }, version: l, sourcemap_group: C, env: "external", user_bucket: E, origin: r, host_platform: O(), host_os_release: h, host_name_redacted: Jvt().slice(0, 12), entrypoint: f, node_version: process.versions.node, bun_version: "1.4.4", ...u && { model: u }, error_frames: s, feature_flags: x() };
}
var V = /* @__PURE__ */ new Set(["APIUserAbortError", "AuthenticationError", "McpSessionExpiredError"]), W = [{ messagePrefix: "File does not exist", topFrameIncludes: "FileReadTool.ts" }], z = [{ topFile: "node:net", topFunction: "internalConnectMultipleTimeout" }, { topFile: "node:_http_server", topFunction: "#onClose" }];
function H(e) {
  let r = kkn(e, 20), o = r[0];
  if (!o || r.some(flr)) return false;
  return z.some((n) => o.file === n.topFile && o.function === n.topFunction);
}
function Y() {
  return i.CLAUDE_CODE_REMOTE === true || Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) || Boolean(i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE);
}
function q(e, r) {
  if (V.has(r)) return true;
  if (kz() && !Y() && $s(e) && e.code !== void 0 && mis.has(e.code) && (e.syscall === "mkdir" || e.syscall === "open") && O() !== "windows") return true;
  let o = e.message ?? "";
  return W.some((n) => o.startsWith(n.messagePrefix) && (e.stack?.split(`
`).find((t) => t.trim().startsWith("at ")) ?? "").includes(n.topFrameIncludes));
}
function X(e) {
  let r = /^(\d+)\.(\d+)/.exec(e);
  return r ? `${r[1]}.${r[2]}` : "unknown";
}
function g2e(e, r = "logError") {
  if (!ZQs()) return;
  try {
    let o = N(e), n = XOo(o);
    if (r === "logError" && q(o, n)) return;
    if ((r === "unhandled_rejection" || r === "uncaught_exception") && H(o)) return;
    if (wzo()) return;
    let t = K(o, r, n);
    Ezo(t);
  } catch {
  }
}
export {
  XOo,
  g2e
};
