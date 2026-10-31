// linux/telemetry/dd-evp-origin-version.js — Claude Code 2.1.310（linux）模块 chunk-8exhrsmj.js
import { __asset_src } from "../../runtime/assets.js";
import { U } from "../context/not-admin-owned.js";
import { d } from "./anthropic-workspace-id.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "../shared/environment.js";
import { _l } from "../mcp/allowed-warning.js";
import { Yd } from "../fs/content-encoding.js";
import { dzr, czr } from "./remote-tool-restart-adoption-unroutable.js";
import { b2o } from "../auth/allowed-taints-clean.js";
import { randomUUID as c } from "crypto";
var p = "https://browser-intake-us5-datadoghq.com/api/v2/logs", g = 3e4, u = 25, l = 1e4, n = 100;
function m() {
  return i.CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS || g;
}
async function f(e) {
  if (!b2o()) {
    t(`dd-error-tracking: compliance verdict now blocks reporting; dropping batch=${e.length}`, { level: "warn" });
    return;
  }
  let r = _(e), a = new URLSearchParams({ ddsource: "browser", "dd-api-key": czr, "dd-evp-origin": "browser", "dd-evp-origin-version": { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, "dd-request-id": c() });
  try {
    await _l.post(`${p}?${a}`, r, { headers: { "Content-Type": "application/json" }, timeout: l });
  } catch (o) {
    if (Yd(o) && o.response) t(`dd-error-tracking: intake responded ${o.response.status} (batch=${e.length})`, { level: "warn" });
    else t(`dd-error-tracking: intake failed: ${d(o)}`, { level: "warn" });
  }
}
class s {
  reportsEnqueued = 0;
  capSentinelSent = false;
  cachedUserBucket = void 0;
  sender = dzr({ maxBatchSize: u, getFlushIntervalMs: m, post: f });
}
var E = new W(() => new s());
function dhn() {
  return E.of(U().host);
}
function Kzo() {
  return dhn().reportsEnqueued >= n;
}
function h(e) {
  return { ...e, message: `ErrorTrackingCapReached: per-process cap of ${n} hit, dropping further reports`, error: { kind: "ErrorTrackingCapReached", message: `per-process cap of ${n} hit`, stack: `ErrorTrackingCapReached
    at enqueueErrorLog (src/services/errorTracking/client.ts)`, fingerprint: "cap-reached-sentinel", handling: "handled" }, error_frames: void 0 };
}
function Vzo(e) {
  let r = dhn();
  if (r.reportsEnqueued >= n) return;
  if (r.reportsEnqueued++, r.reportsEnqueued === n && !r.capSentinelSent) r.capSentinelSent = true, t(`dd-error-tracking: per-process report cap reached (${n}); dropping further reports`, { level: "warn" }), r.sender.enqueue(h(e));
  else r.sender.enqueue(e);
}
async function IRi() {
  await dhn().sender.shutdown();
}
export {
  IRi,
  Kzo,
  Vzo,
  dhn
};
