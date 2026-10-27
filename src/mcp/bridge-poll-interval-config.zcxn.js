// mcp/bridge-poll-interval-config.zcxn.js — Claude Code 2.1.310 模块 chunk-zcxngzmq.js
import { QV } from "../settings/global-config-and-gates.27xj.js";
import { _, ee } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { By } from "../artifacts/chunk-m8t7qekn.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { Dt } from "../fs/content-encoding.v6wj.js";
import { xhn } from "../telemetry/service-error-detail-not-plain.9kgx.js";
import { ac } from "../shared/chunk-refybwsn.js";
import { o, E, M, C, u, yt, me, T } from "../vendor/zod/string-format.k395.js";
import { Hs } from "../remote/claude-code-remote.yeyj.js";
var n = { non_exclusive_heartbeat_interval_ms: 0, multisession_poll_interval_ms_not_at_capacity: 2e3, multisession_poll_interval_ms_partial_capacity: 2e3, multisession_poll_interval_ms_at_capacity: 6e5, reclaim_older_than_ms: 5e3, session_keepalive_interval_v2_ms: 12e4, sse_connect_timeout_ms: 3e4, watch_sessions: false, watch_connected_poll_interval_ms: 6e4, watch_fallback_poll_interval_ms: 3e4, watch_session_end_window_ms: 6e5 };
var c = { message: "must be 0 (disabled) or ≥100ms" }, m = f(() => u({ non_exclusive_heartbeat_interval_ms: E().int().min(0).default(0), multisession_poll_interval_ms_not_at_capacity: E().int().min(100).default(n.multisession_poll_interval_ms_not_at_capacity), multisession_poll_interval_ms_partial_capacity: E().int().min(100).default(n.multisession_poll_interval_ms_partial_capacity), multisession_poll_interval_ms_at_capacity: E().int().refine((e) => e === 0 || e >= 100, c).default(n.multisession_poll_interval_ms_at_capacity), reclaim_older_than_ms: E().int().min(1).default(5e3), session_keepalive_interval_v2_ms: E().int().min(0).default(12e4), sse_connect_timeout_ms: E().int().max(ac).refine((e) => e === 0 || e >= 2e4, { message: "must be 0 (disabled) or ≥20000ms" }).default(n.sse_connect_timeout_ms), watch_sessions: M().catch(n.watch_sessions), watch_connected_poll_interval_ms: E().int().min(15e3).max(96e3).catch(n.watch_connected_poll_interval_ms), watch_fallback_poll_interval_ms: E().int().min(15e3).max(96e3).catch(n.watch_fallback_poll_interval_ms), watch_session_end_window_ms: E().int().min(0).max(36e5).catch(n.watch_session_end_window_ms) }).refine((e) => e.non_exclusive_heartbeat_interval_ms > 0 || e.multisession_poll_interval_ms_at_capacity > 0, { message: "at-capacity liveness requires non_exclusive_heartbeat_interval_ms > 0 or multisession_poll_interval_ms_at_capacity > 0" }));
function x7() {
  let e = QV("tengu_bridge_poll_interval_config", n, 3e5), t = m().safeParse(e);
  return t.success ? t.data : n;
}
var p = f(() => yt({ version: T(1), session_ingress_token: o().min(1), api_base_url: o(), claude_code_args: me(o(), o()).optional().catch(void 0), mcp_config: yt({ content: o(), path: o().optional(), mode: E().optional() }).optional().catch(void 0), auto_mode_environment: C(o()).optional().catch(void 0), worktree: M().optional().catch(void 0) })), d = { secret_did_not_decode: "Work secret is not valid JSON", unsupported_version: "Unsupported work secret version", missing_session_ingress_token: "Invalid work secret: missing or empty session_ingress_token", missing_api_base_url: "Invalid work secret: missing api_base_url" };
class jBe extends Error {
  verdict;
  constructor(e) {
    super(d[e]);
    this.verdict = e;
    this.name = "WorkSecretShapeError";
  }
}
function Jme(e) {
  let t;
  try {
    t = ee(Buffer.from(e, "base64url").toString("utf-8"));
  } catch {
    throw new jBe("secret_did_not_decode");
  }
  let s = p().safeParse(t);
  if (s.success) return s.data;
  let i = new Set(s.error.issues.map((r) => r.path[0]));
  if (i.has(void 0) || i.has("version")) throw new jBe("unsupported_version");
  if (i.has("session_ingress_token")) throw new jBe("missing_session_ingress_token");
  throw new jBe("missing_api_base_url");
}
function WBe(e, t) {
  if (e === t) return true;
  let s = e.slice(e.lastIndexOf("_") + 1), i = t.slice(t.lastIndexOf("_") + 1);
  return s.length >= 4 && s === i;
}
function GBe(e, t) {
  return By(t, "sessionId"), `${e.replace(/\/+$/, "")}/v1/code/sessions/${t}`;
}
async function aft(e, t) {
  let s = await Dt.post(`${e}/worker/register`, {}, { headers: { Authorization: `Bearer ${t}`, "Content-Type": "application/json", "anthropic-version": "2023-06-01", "User-Agent": Hs() }, timeout: 1e4 }), i = s.data?.worker_epoch, r = typeof i === "string" ? Number(i) : i;
  if (typeof r !== "number" || !Number.isFinite(r) || !Number.isSafeInteger(r)) {
    let a = xhn(`${_(s.data)}`, "register_worker_response");
    throw Error(`registerWorker: invalid worker_epoch in response${a === void 0 ? " (the response is not quoted: it is too long or is not one plain line)" : `: ${a}`}`);
  }
  return r;
}
export {
  GBe,
  Jme,
  WBe,
  aft,
  jBe,
  x7
};
