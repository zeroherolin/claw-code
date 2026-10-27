// workflows/workflow-launch-event.9gfy.js — Claude Code 2.1.310 模块 chunk-9gfy2d02.js
import { Vt } from "../shared/chunk-9sbknd2z.js";
import { c } from "../agents/third-party.ydpb.js";
import { X, Pe } from "../shared/chunk-3kevgx4j.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { Y } from "../shared/async-hooks.923e.js";
import { i } from "../shared/environment.9a41.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { gz } from "../remote/moved-directory.z3m0.js";
import { kXn } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { iJt, Oct } from "./script-too-large.3fw0.js";
import { o, E, M, yt } from "../vendor/zod/string-format.k395.js";
import { createHash as q, randomUUID as T, timingSafeEqual as Z } from "crypto";
var Q = "workflow_launch_result", O = 4194304, B = "/.workflow/", cTi = "CLAUDE_CODE_WORKFLOW_LAUNCH_SHA256", ee = /^(?!\.+$)[A-Za-z0-9._-]{1,128}$/;
function z(e) {
  let t = (d) => ({ ok: false, error: d }), r = e.filestore_path;
  if (typeof r !== "string" || r.length === 0) return t("filestore_path is missing or not a non-empty string");
  if (!r.startsWith(B) || !ee.test(r.slice(B.length))) return t(`filestore_path must name one object directly under ${B}`);
  let n = e.artifact_sha256;
  if (typeof n !== "string" || !/^[0-9a-f]{64}$/.test(n)) return t("artifact_sha256 is missing or not 64 lowercase hex chars");
  let s = e.bundle_size_bytes;
  if (typeof s !== "number" || !Number.isSafeInteger(s) || s <= 0) return t("bundle_size_bytes is missing or not a positive integer");
  if (s > O) return t(`bundle_size_bytes exceeds ${O}`);
  let u = typeof e.workflow_name === "string" ? e.workflow_name.replace(/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g, "").slice(0, 200) : "", l = e.session_origin === void 0 ? void 0 : e.session_origin === "review" ? "review" : "other";
  return { ok: true, pointer: { workflowName: u, filestorePath: r, artifactSha256: n, bundleSizeBytes: s, sessionOrigin: l } };
}
function te(e, t) {
  let r = q("sha256").update(e).digest(), n = Buffer.from(t, "hex");
  return n.length === r.length && Z(r, n);
}
var C = 1;
function re(e) {
  let t = (l) => ({ ok: false, error: l });
  if (e.length < 1) return t("bundle is empty");
  if (e[0] !== C) return t(`unsupported bundle format version ${e[0]} (expected ${C})`);
  let r = 1, n = (l, d) => {
    if (r + 8 > e.length) return { ok: false, error: `bundle truncated in ${d} length frame` };
    let L = e.readBigUInt64BE(r);
    if (r += 8, L > BigInt(l)) return { ok: false, error: `${d} frame exceeds ${l} bytes` };
    let h = Number(L);
    if (r + h > e.length) return { ok: false, error: `bundle truncated in ${d} frame` };
    let w = e.subarray(r, r + h);
    return r += h, { ok: true, buf: w };
  }, s = n(kXn, "script");
  if (!s.ok) return t(s.error);
  if (s.buf.length === 0) return t("script frame is empty");
  let u = n(O, "args_json");
  if (!u.ok) return t(u.error);
  if (r !== e.length) return t(`bundle has ${e.length - r} trailing bytes`);
  return { ok: true, script: s.buf.toString("utf8"), argsJson: u.buf.toString("utf8") };
}
function uTi(e = null) {
  return { ledger: /* @__PURE__ */ new Map(), firstLaunch: null, restoredRecord: e };
}
var H = 2, ne = f(() => yt({ event_uuid: o().refine((e) => Vt(e) !== null), dispatched_epoch: E().int().min(0).max(Number.MAX_SAFE_INTEGER), attempts: E().int().min(1).max(Number.MAX_SAFE_INTEGER), settled: M() }));
function pTi(e) {
  let t = ne().safeParse(e);
  if (!t.success) return null;
  let r = z(t.data);
  if (!r.ok) return null;
  return { event_uuid: t.data.event_uuid, filestore_path: r.pointer.filestorePath, artifact_sha256: r.pointer.artifactSha256, bundle_size_bytes: r.pointer.bundleSizeBytes, workflow_name: r.pointer.workflowName, dispatched_epoch: t.data.dispatched_epoch, attempts: t.data.attempts, settled: t.data.settled };
}
class I {
  slots = /* @__PURE__ */ new Map();
  stash(e, t) {
    this.slots.set(e, t);
  }
  take(e) {
    let t = this.slots.get(e);
    return this.slots.delete(e), t;
  }
}
var Pbr = new W(() => new I()), oe = 5e3;
async function x(e) {
  return await Pe(Promise.resolve().then(() => e.flushRecord()).catch(() => false), e.recordFlushBoundMs ?? oe) === true;
}
var se = [1e3, 3e3], ie = 1e4;
function K(e, t, r) {
  let n = { type: "system", subtype: Q, artifact_line: t, uuid: T(), session_id: e.getSessionId() };
  if (r.launchUuid !== void 0) n.launch_uuid = r.launchUuid;
  if (r.artifactSha256 !== void 0) n.artifact_sha256 = r.artifactSha256;
  e.postEvent(n);
}
function J(e, t, r, n) {
  K(e, iJt(t, r), n), Y("warn", "workflow_launch_failed", { layer: t }), a("tengu_workflow_launch_event", { ok: false, layer: c(t) });
}
function D(e, t, r, n) {
  J(e, t, r, n), m("workflow_event_launch", t);
}
function b(e, t, r, n, s) {
  D(e, r, n, s), e.state.ledger.set(t, { eventUuid: t, outcome: "failed-final" }), e.ackProcessed(t);
}
async function U(e, t, r, n, s) {
  let u = t.event_uuid;
  e.state.ledger.set(u, { eventUuid: u, outcome: "failed-final" }), e.persistRecord({ ...t, settled: true }), await x(e), D(e, r, n, s), e.ackProcessed(u);
}
async function j(e, t, r, n, s) {
  let { ledger: u } = e.state, l = t.eventUuid, d = (s?.attempts ?? 0) + 1, L = (_) => ({ event_uuid: l, filestore_path: r.filestorePath, artifact_sha256: r.artifactSha256, bundle_size_bytes: r.bundleSizeBytes, workflow_name: r.workflowName, dispatched_epoch: e.getWorkerEpoch() ?? 0, attempts: d, settled: _ }), h = () => {
    if (e.state.firstLaunch === t) e.state.firstLaunch = null;
  }, w = async (_, F) => {
    if (h(), s) {
      await U(e, s, _, F, n);
      return;
    }
    b(e, l, _, F, n);
  }, S = Date.now(), R = e.fetchRetryWindowMs ?? ie, k = await e.fetchBundle(r.filestorePath), P = 1;
  for (let _ of e.fetchRetryDelaysMs ?? se) {
    if (k.ok || k.gated || Date.now() - S + _ >= R) break;
    P++, Y("warn", "workflow_launch_bundle_fetch_retry", { attempt: P }), await X(_), k = await e.fetchBundle(r.filestorePath);
  }
  if (!k.ok) {
    if (k.gated) {
      await w("bundle-fetch", `bundle fetch gated: ${k.error}`);
      return;
    }
    if (u.delete(l), h(), s) {
      Y("warn", "workflow_launch_rescue_fetch_failed", {}), p("workflow_event_launch", "rescue_fetch_transient");
      return;
    }
    J(e, "bundle-fetch", `bundle fetch failed: ${k.error}`, n), p("workflow_event_launch", "bundle_fetch_transient");
    return;
  }
  let y = k.buf;
  if (y.byteLength > O || y.byteLength !== r.bundleSizeBytes) {
    await w("payload-digest-mismatch", `staged bundle is ${y.byteLength} bytes, event pinned ${r.bundleSizeBytes}`);
    return;
  }
  if (!te(y, r.artifactSha256)) {
    await w("payload-digest-mismatch", "staged bundle sha256 does not match the artifact_sha256 the event pinned");
    return;
  }
  let v = re(y);
  if (!v.ok) {
    await w("launch-payload", v.error);
    return;
  }
  let A;
  if (v.argsJson !== "") try {
    A = JSON.parse(v.argsJson);
  } catch (_) {
    await w("args-parse", `args_json is not valid JSON: ${_ instanceof Error ? _.message : String(_)}`);
    return;
  }
  e.state.firstLaunch = t, e.persistRecord(L(false));
  let V = await x(e);
  if (s && !V) {
    u.delete(l), h(), Y("warn", "workflow_launch_rescue_uncounted", {}), p("workflow_event_launch", "rescue_record_unconfirmed");
    return;
  }
  let N = T();
  Pbr.of(e.host).stash(N, { script: v.script, args: A, eventSessionOrigin: r.sessionOrigin, postResultLine: (_) => K(e, _, n), onRunSettled: async (_) => {
    if (t.outcome = _ ? "executed" : "run-failed", e.persistRecord(L(true)), !await x(e)) e.persistRecord(L(true));
  } }), e.prependUserMessage(`/workflow-launch-exec ${N}`), e.ackProcessed(l), a("tengu_workflow_launch_event", { ok: true, attempt: d }), g("workflow_event_launch"), Y("info", "workflow_launch_dispatched", { attempt: d });
}
function G(e, t) {
  let r = { eventUuid: t.event_uuid, outcome: "failed-final" };
  e.state.ledger.set(t.event_uuid, r), e.state.firstLaunch ??= r, e.persistRecord({ ...t, settled: true }), e.ackProcessed(t.event_uuid), Y("warn", "workflow_launch_attempts_spent", { attempts: t.attempts }), p("workflow_event_launch", "attempts_spent");
}
async function fTi(e, t) {
  let r = typeof e.uuid === "string" ? e.uuid : void 0;
  if (!r) {
    D(t, "launch-payload", "event has no uuid", {});
    return;
  }
  let { ledger: n } = t.state, s = n.get(r);
  if (s) {
    if (s.outcome !== "pending") t.ackProcessed(r);
    return;
  }
  if (!t.isRemoteTransport() || !i.CLAUDE_CODE_REMOTE || !i.CLAUDE_CODE_REMOTE_SESSION_ID) {
    D(t, "not-remote-session", "workflow_launch received outside a remote (CCR) session", { launchUuid: r });
    return;
  }
  let u = z(e);
  if (!u.ok) {
    b(t, r, "launch-payload", u.error, { launchUuid: r });
    return;
  }
  let l = u.pointer, d = { launchUuid: r, artifactSha256: l.artifactSha256 }, L = t.state.restoredRecord, h = L && L.event_uuid === r ? L : null;
  if (h) {
    if (h.settled) {
      let k = { eventUuid: r, outcome: "executed" };
      n.set(r, k), t.state.firstLaunch ??= k, t.ackProcessed(r), Y("info", "workflow_launch_redelivery_settled", {});
      return;
    }
    if (h.attempts >= H) {
      G(t, h);
      return;
    }
  }
  let w = Oct({ serverAuthoredCarrier: true, eventSessionOrigin: l.sessionOrigin });
  if (w) {
    if (h) {
      await U(t, h, "policy-gate", w, d);
      return;
    }
    b(t, r, "policy-gate", w, d);
    return;
  }
  let { firstLaunch: S } = t.state;
  if (S && S.eventUuid !== r) {
    b(t, r, "launch-protocol", "a second distinct workflow_launch event arrived in this session; at most one launch per session is permitted", d);
    return;
  }
  let R = { eventUuid: r, outcome: "pending" };
  n.set(r, R), t.state.firstLaunch = R, await j(t, R, l, d, h);
}
async function mTi(e) {
  let t = e.state.restoredRecord;
  if (!t) return;
  if (!e.isRemoteTransport() || !i.CLAUDE_CODE_REMOTE || !i.CLAUDE_CODE_REMOTE_SESSION_ID) return;
  if (t.settled) {
    Y("info", "workflow_launch_resume_skipped", { reason: "settled" });
    return;
  }
  let r = e.getWorkerEpoch();
  if (r === void 0 || t.dispatched_epoch >= r) {
    Y("info", "workflow_launch_resume_skipped", { reason: "not_a_later_epoch" });
    return;
  }
  let n = e.getDispatchedDigest();
  if (n === void 0 || !/^[0-9a-f]{64}$/.test(n) || n !== t.artifact_sha256) {
    Y("info", "workflow_launch_resume_skipped", { reason: n === void 0 ? "no_server_digest" : "digest_differs" });
    return;
  }
  let { ledger: s } = e.state;
  if (s.has(t.event_uuid) || e.state.firstLaunch) return;
  if (t.attempts >= H) {
    G(e, t);
    return;
  }
  let u = { launchUuid: t.event_uuid, artifactSha256: t.artifact_sha256 }, l = Oct({ serverAuthoredCarrier: true });
  if (l) {
    if (!e.isAccountLaunchedReview() && gz() && Oct({ serverAuthoredCarrier: true, eventSessionOrigin: "review" }) === null) {
      Y("info", "workflow_launch_resume_skipped", { reason: "needs_event_origin" });
      return;
    }
    await U(e, t, "policy-gate", l, u);
    return;
  }
  let d = { eventUuid: t.event_uuid, outcome: "pending" };
  s.set(t.event_uuid, d), e.state.firstLaunch = d, Y("info", "workflow_launch_resuming", { attempt: t.attempts + 1 }), await j(e, d, { workflowName: t.workflow_name, filestorePath: t.filestore_path, artifactSha256: t.artifact_sha256, bundleSizeBytes: t.bundle_size_bytes }, u, t);
}
export {
  Pbr,
  cTi,
  fTi,
  mTi,
  pTi,
  uTi
};
