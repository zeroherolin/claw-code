// telemetry/dd-evp-origin-version.230v.js — Claude Code 2.1.310 模块 chunk-230v00pk.js
import { __asset_src } from "../runtime/assets.js";
import { U } from "../context/not-admin-owned.ersa.js";
import { d } from "./anthropic-workspace-id.36ys.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { i } from "../shared/environment.9a41.js";
import { Sl } from "../mcp/allowed-warning.j2d4.js";
import { Yd } from "../fs/content-encoding.v6wj.js";
import { PGr, IGr } from "./remote-tool-restart-adoption-unroutable.3t29.js";
import { Kzo } from "../auth/allowed-taints-clean.v8z4.js";
import { randomUUID as c } from "crypto";
var p = "https://browser-intake-us5-datadoghq.com/api/v2/logs", g = 3e4, u = 25, l = 1e4, n = 100;
function m() {
  return i.CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS || g;
}
async function f(e) {
  if (!Kzo()) {
    t(`dd-error-tracking: compliance verdict now blocks reporting; dropping batch=${e.length}`, { level: "warn" });
    return;
  }
  let r = _(e), a = new URLSearchParams({ ddsource: "browser", "dd-api-key": IGr, "dd-evp-origin": "browser", "dd-evp-origin-version": { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, "dd-request-id": c() });
  try {
    await Sl.post(`${p}?${a}`, r, { headers: { "Content-Type": "application/json" }, timeout: l });
  } catch (o) {
    if (Yd(o) && o.response) t(`dd-error-tracking: intake responded ${o.response.status} (batch=${e.length})`, { level: "warn" });
    else t(`dd-error-tracking: intake failed: ${d(o)}`, { level: "warn" });
  }
}
class s {
  reportsEnqueued = 0;
  capSentinelSent = false;
  cachedUserBucket = void 0;
  sender = PGr({ maxBatchSize: u, getFlushIntervalMs: m, post: f });
}
var E = new W(() => new s());
function Thn() {
  return E.of(U().host);
}
function wzo() {
  return Thn().reportsEnqueued >= n;
}
function h(e) {
  return { ...e, message: `ErrorTrackingCapReached: per-process cap of ${n} hit, dropping further reports`, error: { kind: "ErrorTrackingCapReached", message: `per-process cap of ${n} hit`, stack: `ErrorTrackingCapReached
    at enqueueErrorLog (src/services/errorTracking/client.ts)`, fingerprint: "cap-reached-sentinel", handling: "handled" }, error_frames: void 0 };
}
function Ezo(e) {
  let r = Thn();
  if (r.reportsEnqueued >= n) return;
  if (r.reportsEnqueued++, r.reportsEnqueued === n && !r.capSentinelSent) r.capSentinelSent = true, t(`dd-error-tracking: per-process report cap reached (${n}); dropping further reports`, { level: "warn" }), r.sender.enqueue(h(e));
  else r.sender.enqueue(e);
}
async function gxi() {
  await Thn().sender.shutdown();
}
export {
  Ezo,
  Thn,
  gxi,
  wzo
};
