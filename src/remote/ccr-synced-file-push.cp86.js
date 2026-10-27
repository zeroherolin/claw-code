// remote/ccr-synced-file-push.cp86.js — Claude Code 2.1.310 模块 chunk-cp86ycxe.js
import { U } from "../context/not-admin-owned.ersa.js";
import { v, G, ui } from "../telemetry/anthropic-workspace-id.36ys.js";
import { X } from "../shared/chunk-3kevgx4j.js";
import { Rc } from "../fs/node-modules.gp4v.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { hW } from "../fs/utf-8.7pve.js";
import { Y } from "../shared/async-hooks.923e.js";
import { i } from "../shared/environment.9a41.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { Xne, NJe } from "../context/team-memory-sync.0s3j.js";
import { Lut } from "../shared/out-of-order.nzcg.js";
import { Wt } from "../settings/global-config-and-gates.27xj.js";
import { o, u } from "../vendor/zod/string-format.k395.js";
import { Wh } from "../shared/chunk-mzb69x1h.js";
import { et } from "../shared/chunk-tftf1nn4.js";
import { constants as O } from "fs";
import { link as we, lstat as ue, mkdir as Q, open as C, readdir as Fe, realpath as L, rename as Ee, unlink as V, writeFile as Re } from "fs/promises";
import { posix as be } from "path";
var bkr = 384;
var { basename: ie, dirname: D, isAbsolute: Z, join: M, normalize: ve, relative: j, sep: z } = be, CZt = "/mnt/user-data/working", I8e = "/working", f$n = `${I8e}/${Xne} is reserved`, g6 = 26214400, de = 4096, Oe = 4, fe = 3e4, ee = 5e3, Te = 12e4, Ne = 5, xe = 2e3, Me = 3, K = 6e5, ae = 36e5, Pe = de;
class pe {
  seenState = /* @__PURE__ */ new Map();
  evictedEtag = /* @__PURE__ */ new Map();
  lastSeenMtime = /* @__PURE__ */ new Map();
  terminalRejects = /* @__PURE__ */ new Map();
  sessionFullUntilMs = 0;
  sessionFullSuppressed = 0;
  sessionFullNextOfferMs = 0;
  inFlight = Wh();
  retryableTransportFailures = 0;
  sessionTerminalRejects = 0;
  syncer = null;
  lateStartRoot = null;
  startInFlight = null;
  recordSeen(e, t, r) {
    this.seenState.set(e, { etag: t, localHash: r }), this.evictedEtag.delete(e);
  }
  forgetSeen(e) {
    this.seenState.delete(e), this.evictedEtag.delete(e);
  }
  recordEvictedEtag(e, t) {
    if (t === void 0) return;
    if (this.evictedEtag.delete(e), this.evictedEtag.set(e, t), this.evictedEtag.size > Pe) {
      let r = this.evictedEtag.keys().next().value;
      if (r !== void 0) this.evictedEtag.delete(r);
    }
  }
  evictDeleted(e) {
    this.recordEvictedEtag(e, this.seenState.get(e)?.etag), this.seenState.delete(e);
  }
  recordSettledMtime(e, t) {
    this.lastSeenMtime.set(e, t);
  }
  reopenMtimeGate(e) {
    this.lastSeenMtime.delete(e);
  }
  recordTerminalReject(e, t = false) {
    let r = this.terminalRejects.get(e) ?? { consecutive: 0, latchedUntilMs: 0, suppressed: 0, heldWhileFull: false };
    if (r.consecutive++, r.heldWhileFull ||= t, this.terminalRejects.set(e, r), r.consecutive >= Me) r.latchedUntilMs = Date.now() + K, m("ccr_synced_file_push", "push_parked_terminal", { consecutive_rejects: r.consecutive, suppressed_pushes: r.suppressed, held_while_full: r.heldWhileFull }), r.suppressed = 0, Y("warn", "working_push_parked", { consecutive: r.consecutive });
  }
  resetTerminalRejectStreak(e) {
    let t = this.terminalRejects.get(e);
    if (t === void 0) return;
    if (t.suppressed === 0) {
      this.terminalRejects.delete(e);
      return;
    }
    t.consecutive = 0, t.latchedUntilMs = 0, t.heldWhileFull = false;
  }
  forgetTerminalReject(e) {
    this.terminalRejects.delete(e);
  }
  sessionFullGate() {
    if (this.sessionFullUntilMs === 0) return "open";
    let e = Date.now();
    if (e < this.sessionFullUntilMs) return this.sessionFullSuppressed++, "skip";
    return this.sessionFullUntilMs = e + K, "probe";
  }
  recordSessionFull() {
    let e = this.sessionFullUntilMs !== 0, t = Date.now();
    if (this.sessionFullUntilMs = t + K, this.sessionFullNextOfferMs = t + ae, e && this.sessionFullSuppressed === 0) return;
    m("ccr_synced_file_push", "push_parked_session_full", { suppressed_pushes: this.sessionFullSuppressed }), Y("warn", "working_session_full", { suppressed_pushes: this.sessionFullSuppressed }), this.sessionFullSuppressed = 0;
  }
  clearSessionFull() {
    this.sessionFullUntilMs = 0;
  }
  sessionFullReprobeNow() {
    if (this.sessionFullUntilMs !== 0) this.sessionFullUntilMs = Date.now();
  }
  releaseSessionFullHold(e) {
    let t = this.terminalRejects.get(e);
    if (t === void 0 || !t.heldWhileFull) return;
    if (this.sessionFullUntilMs !== 0) {
      let r = Date.now();
      if (r < this.sessionFullUntilMs + ee || r < this.sessionFullNextOfferMs || t.latchedUntilMs !== 0) return;
      this.sessionFullNextOfferMs = r + ae;
    }
    t.heldWhileFull = false, this.resetTerminalRejectStreak(e), this.reopenMtimeGate(e);
  }
  get transportFailureSeq() {
    return this.retryableTransportFailures;
  }
  get sessionTerminalRejectSeq() {
    return this.sessionTerminalRejects;
  }
  noteRetryableTransportFailure() {
    if (this.retryableTransportFailures++, this.sessionFullUntilMs !== 0) this.sessionFullNextOfferMs = Math.max(this.sessionFullNextOfferMs, Date.now() + K);
  }
  noteSessionTerminalReject() {
    this.sessionTerminalRejects++;
  }
  get activeSyncer() {
    return this.syncer;
  }
  syncerStarted(e) {
    this.syncer = e;
  }
  syncerStopped(e) {
    if (this.syncer === e) this.syncer = null;
  }
  armLateStart(e) {
    this.lateStartRoot = e;
  }
  async flush() {
    if (this.syncer === null) {
      if (this.lateStartRoot !== null && this.startInFlight === null) {
        let e = Zhi(this.lateStartRoot);
        this.startInFlight = e, e.finally(() => {
          if (this.startInFlight === e) this.startInFlight = null;
        }).catch(() => {
        });
      }
      await this.startInFlight?.catch(() => {
      });
    }
    await this.syncer?.flush();
  }
  sessionFullStateForTest() {
    return { armed: this.sessionFullUntilMs !== 0, suppressed: this.sessionFullSuppressed };
  }
  reset() {
    this.seenState.clear(), this.lastSeenMtime.clear(), this.evictedEtag.clear(), this.terminalRejects.clear(), this.sessionFullUntilMs = 0, this.sessionFullSuppressed = 0, this.sessionFullNextOfferMs = 0, this.lateStartRoot = null, this.startInFlight = null;
  }
}
var Ie = new W(() => new pe());
function N() {
  return Ie.of(U().host);
}
function I(e, t, r) {
  N().recordSeen(e, t, r);
}
function te(e) {
  return N().seenState.get(e);
}
function re(e, t) {
  return N().inFlight.run(e, t);
}
function wkr(e, t) {
  if (!Z(e)) throw Error("syncDir must be absolute");
  if (t.includes("\0")) throw Error("path contains null bytes");
  if (!Z(t)) throw Error("path must be absolute");
  let r = j(e, ve(t));
  if (r === "" || r === "." || H(r)) throw Error("path must be under the working sync dir");
  return r;
}
function H(e) {
  return Z(e) || e.split(z).includes("..");
}
function Eme(e) {
  for (let t of e.split(z)) if (t.startsWith(".") || t.endsWith("~") || t.endsWith(".swp") || t.endsWith(".tmp")) return true;
  return false;
}
var le = "synced_file_limit_exceeded", Zho = "synced_file_lane_denied", Le = f(() => u({ error: u({ reason: o().optional(), resource: o().optional() }) })), je = f(() => u({ error: u({ type: o().optional(), resource_type: o().optional() }) }));
function Ae(e, t) {
  if (e === "timeout" || e === "network") return true;
  if (e === "auth" || e === "other") return false;
  if (t === void 0) return true;
  return t === 408 || t === 429 || t >= 500;
}
function _e(e, t) {
  let r = N(), { kind: l, status: s } = ui(t), c = Ae(l, s);
  if (c) r.noteRetryableTransportFailure();
  else if (l === "auth") r.noteSessionTerminalReject();
  let h = s === 400 || s === 403 ? We(t) : void 0, a = s === 400 ? h?.reason : void 0, _ = s === 403 ? h?.resource : void 0;
  return { kind: "error", message: `${e} failed: ${l}${s ? ` ${s}` : ""}`, retryable: c, errorKind: l, status: s, ...a !== void 0 && { laneReason: a }, ..._ !== void 0 && { refusedResource: _ } };
}
function We(e) {
  let t = e?.response?.data;
  return Le().safeParse(t).data?.error;
}
function Ue(e) {
  if (e.errorKind === "gated") return `put_gated_${(e.gateReason ?? "unknown").replaceAll("-", "_")}`;
  return e.status !== void 0 ? `put_rejected_${e.status}` : `put_rejected_${e.errorKind}`;
}
async function t0t(e, t, r) {
  let l = N();
  try {
    let s = await Wt.put("/worker/synced_file", { path: `${I8e}/${e}`, content: t.toString("base64"), ...r && { if_match_sha256: r }, worker_epoch: i.CLAUDE_CODE_WORKER_EPOCH ?? 0 }, { auth: "session-jwt", host: "ccr-session", headers: { "anthropic-version": "2023-06-01" }, timeout: fe, validateStatus: (c) => c >= 200 && c < 300 || c === 409, maxBodyLength: Math.ceil(g6 * 4 / 3) + 1024 });
    if (!s.ok) return l.noteSessionTerminalReject(), { kind: "error", message: `put gated: ${s.reason}`, retryable: false, errorKind: "gated", status: void 0, gateReason: s.reason };
    if (s.status === 409) return { kind: "conflict" };
    return { kind: "ok", content_sha256: s.data.content_sha256 };
  } catch (s) {
    return _e("put", s);
  }
}
async function oOe(e) {
  let t = N();
  try {
    let r = await Wt.get(`/worker/synced_file?path=${encodeURIComponent(`${I8e}/${e}`)}`, { auth: "session-jwt", host: "ccr-session", headers: { "anthropic-version": "2023-06-01" }, timeout: fe, maxContentLength: Math.ceil(g6 * 4 / 3) + 1024, validateStatus: (l) => l >= 200 && l < 300 || l === 404 });
    if (!r.ok) return t.noteSessionTerminalReject(), { kind: "error", message: `get gated: ${r.reason}`, retryable: false, errorKind: "gated", status: void 0, gateReason: r.reason };
    if (r.status === 404) {
      let l = je().safeParse(r.data);
      return { kind: "not_found", ...l.success && { body: l.data.error } };
    }
    return { kind: "ok", buf: Buffer.from(r.data.content, "base64"), content_sha256: r.data.content_sha256 };
  } catch (r) {
    return _e("get", r);
  }
}
async function ne(e, t, r) {
  he(e, t);
  let l = await L(e), s = await L(D(t)), c = j(l, s);
  if (H(c)) {
    let a = Error("dest parent escaped working sync dir");
    throw a.code = "WORKING_PARENT_ESCAPE", a;
  }
  let h = c === "" ? ie(t) : M(c, ie(t));
  if (Eme(h)) {
    let a = Error("dest resolves into an ignored path");
    throw a.code = "WORKING_DEST_IGNORED", a;
  }
  if (r?.(h)) {
    let a = Error("dest resolves onto a path the caller refuses");
    throw a.code = "WORKING_DEST_REFUSED", a;
  }
  try {
    if ((await ue(t)).isSymbolicLink()) {
      let _ = Error("dest is a symlink");
      throw _.code = "WORKING_DEST_SYMLINK", _;
    }
  } catch (a) {
    if (!G(a)) throw a;
  }
}
function he(e, t) {
  if (Rc(e) || Rc(D(t))) {
    let r = Error("a folder on the way to dest has a backslash in its name");
    throw r.code = "WORKING_PATH_MISREAD", r;
  }
}
async function n0t(e, t, r, l = "replace", s) {
  he(e, t), await Q(e).catch((_) => {
    if (v(_) !== "EEXIST") throw _;
  });
  let c = await L(e), h = D(t);
  for (; ; ) try {
    let _ = await L(h), y = j(c, _);
    if (H(y)) {
      let k = Error("dest ancestor escaped working sync dir");
      throw k.code = "WORKING_PARENT_ESCAPE", k;
    }
    if (Eme(y)) {
      let k = Error("dest ancestor resolves into an ignored path");
      throw k.code = "WORKING_DEST_IGNORED", k;
    }
    if (s?.(M(y, j(h, t))) === true) {
      let k = Error("dest resolves onto a path the caller refuses");
      throw k.code = "WORKING_DEST_REFUSED", k;
    }
    break;
  } catch (_) {
    if (!G(_)) throw _;
    let y = D(h);
    if (y === h) break;
    h = y;
  }
  await Q(D(t), { recursive: true }), await ne(e, t, s);
  let a = `${t}.${process.hrtime.bigint().toString(36)}.tmp`;
  try {
    await hW(a);
  } catch (_) {
    throw ce(_), _;
  }
  try {
    await Re(a, r, { mode: bkr, flag: "wx" });
  } catch (_) {
    throw ce(_), await V(a).catch(() => {
    }), _;
  }
  try {
    if (l === "create_only") await we(a, t), await V(a);
    else await Ee(a, t);
  } catch (_) {
    throw await V(a).catch(() => {
    }), _;
  }
}
function ce(e) {
  if (v(e) !== "EEXIST") return;
  let t = Error("sibling tempfile name already taken", { cause: e });
  throw t.code = "WORKING_TMP_TAKEN", t;
}
async function ZTi(e, t, r) {
  let l;
  try {
    l = wkr(r, e.mount_path);
  } catch (c) {
    return m("ccr_synced_file_stage", "bad_mount_path"), { ok: false, error: c instanceof Error ? c.message : String(c) };
  }
  if (NJe(l)) return Lut.emit(l, "stored"), { ok: true, noop: "dir_sync_lane_row" };
  if (Eme(l)) return m("ccr_synced_file_stage", "ignored_path"), { ok: false, error: "mount_path is an ignored path" };
  let s = M(r, l);
  return re(l, async () => {
    let c, h;
    try {
      try {
        await ne(r, s);
      } catch (n) {
        if (!G(n)) return m("ccr_synced_file_stage", v(n) === "WORKING_PATH_MISREAD" ? "backslash_in_path" : "containment_failed"), { ok: false, error: `mount_path failed containment: ${v(n) ?? "unknown"}` };
      }
      let a = null;
      try {
        let n = await C(s, O.O_RDONLY | O.O_NOFOLLOW | O.O_NONBLOCK);
        try {
          let d = await n.stat();
          if (d.isFile()) {
            if (d.size > g6) return m("ccr_synced_file_stage", "too_large"), { ok: false, error: "local file too large to reconcile" };
            a = await n.readFile();
          }
        } finally {
          await n.close();
        }
      } catch (n) {
        let d = v(n);
        if (d !== "ENOENT" && d !== "ELOOP" && d !== "EMLINK") throw n;
      }
      let _ = a ? et(a) : void 0, y = te(s);
      if (_ && y && y.localHash === _ && e.content_sha256 !== void 0 && y.etag === e.content_sha256) return g("ccr_synced_file_stage"), { ok: true, noop: "already_present" };
      let k = e.expected_local_sha256 || void 0, T = y && y.localHash === _ && (k === void 0 || y.etag === k);
      if (a && !T) {
        let n = await t0t(l, a, k);
        if (n.kind === "error") return m("ccr_synced_file_stage", "push_failed"), { ok: false, error: n.message };
        let d = await oOe(l);
        if (d.kind !== "ok") return m("ccr_synced_file_stage", "reget_failed"), { ok: false, error: d.kind === "error" ? d.message : "get not_found after put" };
        c = d.buf, h = d.content_sha256, Y("info", "working_stage_reconciled", { conflict: n.kind === "conflict" });
      } else {
        let n = await t(e.filestore_path);
        if (!n.ok) return m("ccr_synced_file_stage", "fetch_failed"), { ok: false, error: n.error };
        if (n.buf.length > g6) return m("ccr_synced_file_stage", "too_large"), { ok: false, error: "staged content too large" };
        c = n.buf, h = e.content_sha256;
      }
      let F = null;
      try {
        let n = await C(s, O.O_RDONLY | O.O_NOFOLLOW | O.O_NONBLOCK);
        try {
          let d = await n.stat();
          if (d.isFile()) {
            if (d.size > g6) return m("ccr_synced_file_stage", "too_large"), { ok: false, error: "local file too large to reconcile" };
            F = await n.readFile();
          }
        } finally {
          await n.close();
        }
      } catch (n) {
        let d = v(n);
        if (d !== "ENOENT" && d !== "ELOOP" && d !== "EMLINK") throw n;
      }
      if (F && et(F) !== _) {
        let n = await t0t(l, F, h);
        if (n.kind === "error") return m("ccr_synced_file_stage", "push_failed"), { ok: false, error: n.message };
        let d = await oOe(l);
        if (d.kind !== "ok") return m("ccr_synced_file_stage", "reget_failed"), { ok: false, error: d.kind === "error" ? d.message : "get not_found after put" };
        c = d.buf, h = d.content_sha256, Y("info", "working_stage_reconciled", { conflict: n.kind === "conflict", mid_window: true });
      }
    } catch (a) {
      return m("ccr_synced_file_stage", "reconcile_threw"), { ok: false, error: `reconcile failed: ${v(a) ?? "unknown"}` };
    }
    try {
      await n0t(r, s, c);
    } catch (a) {
      return m("ccr_synced_file_stage", "write_failed"), { ok: false, error: `write failed: ${v(a) ?? "unknown"}` };
    }
    return I(s, h, et(c)), g("ccr_synced_file_stage"), Y("info", "working_stage_ok", { bytes: c.length }), { ok: true };
  });
}
async function Be(e, t) {
  let r = N();
  if (NJe(t)) return p("ccr_synced_file_push", "lane_path_reserved"), true;
  let l = r.terminalRejects.get(t);
  if (l !== void 0 && l.latchedUntilMs !== 0) {
    if (Date.now() < l.latchedUntilMs) return l.suppressed++, true;
    l.latchedUntilMs = 0;
  }
  let s = M(e, t);
  if (Rc(s)) return p("ccr_synced_file_push", "backslash_in_path"), true;
  let c;
  try {
    c = await L(s);
  } catch (S) {
    if (G(S)) return true;
    throw S;
  }
  let h;
  try {
    h = await L(e);
  } catch {
    return false;
  }
  let a = j(h, c);
  if (a !== t && (a === "" || H(a))) return p("ccr_synced_file_push", "symlink_escape"), true;
  let _;
  try {
    let S = await C(s, O.O_RDONLY | O.O_NOFOLLOW | O.O_NONBLOCK);
    try {
      let E = await S.stat();
      if (!E.isFile()) return true;
      if (E.size > g6) return p("ccr_synced_file_push", "too_large"), true;
      _ = await S.readFile();
    } finally {
      await S.close();
    }
  } catch (S) {
    let E = v(S);
    if (E === "ELOOP" || E === "EMLINK") return p("ccr_synced_file_push", "symlink_escape"), true;
    return m("ccr_synced_file_push", "read_failed"), false;
  }
  let y = et(_), k = te(s);
  if (y === k?.localHash) return true;
  let T = k === void 0 ? r.evictedEtag.get(s) : void 0, F = "open";
  if (k === void 0 && T === void 0) {
    let S = await oOe(t);
    if (S.kind === "error") {
      if (m("ccr_synced_file_push", "seed_get_failed"), !S.retryable) r.recordTerminalReject(t);
      return !S.retryable;
    }
    if (S.kind === "ok") {
      r.resetTerminalRejectStreak(t);
      let E = et(S.buf);
      if (E === y) return I(s, S.content_sha256, y), true;
      try {
        await n0t(e, s, S.buf);
      } catch {
        return m("ccr_synced_file_push", "write_failed"), false;
      }
      return I(s, S.content_sha256, E), p("ccr_synced_file_push", "cold_renderer_wins"), true;
    }
    if (F = r.sessionFullGate(), F === "skip") return r.recordTerminalReject(t, true), true;
  }
  let n = await t0t(t, _, k?.etag ?? T);
  if (F === "probe") {
    if (n.kind === "ok") r.clearSessionFull();
    else if (n.kind === "conflict" || n.laneReason !== le) r.sessionFullReprobeNow();
  }
  if (n.kind === "ok") return r.resetTerminalRejectStreak(t), I(s, n.content_sha256, y), g("ccr_synced_file_push"), true;
  if (n.kind === "error") {
    if (n.retryable) r.resetTerminalRejectStreak(t), m("ccr_synced_file_push", "put_failed");
    else {
      m("ccr_synced_file_push", Ue(n));
      let S = n.laneReason === le;
      if (r.recordTerminalReject(t, S), S) r.recordSessionFull();
    }
    return Y("warn", "working_push_failed", { reason: n.message, retryable: n.retryable }), !n.retryable;
  }
  r.resetTerminalRejectStreak(t);
  let d = await oOe(t);
  if (d.kind === "error") {
    if (m("ccr_synced_file_push", "reget_failed"), !d.retryable) r.recordTerminalReject(t);
    return !d.retryable;
  }
  if (d.kind === "not_found") return r.forgetSeen(s), r.sessionFullReprobeNow(), m("ccr_synced_file_push", "reget_failed"), false;
  try {
    await n0t(e, s, d.buf);
  } catch {
    return m("ccr_synced_file_push", "write_failed"), false;
  }
  return I(s, d.content_sha256, et(d.buf)), p("ccr_synced_file_push", "conflict_overwritten"), true;
}
function Qhi() {
  return N().flush();
}
async function eAi() {
  let e = N();
  await Qhi();
  for (; ; ) {
    if (e.inFlight.size === 0 && (e.activeSyncer?.pendingCount() ?? 0) === 0) return;
    await e.inFlight.settle(), await new Promise((t) => setImmediate(t));
  }
}
async function Zhi(e) {
  let t = N();
  t.armLateStart(null);
  for (let R = 1; ; R++) try {
    await Q(e);
    break;
  } catch (A) {
    let x = v(A);
    if (x === "EEXIST") break;
    if (x === "ENOENT") {
      if (R < Ne) {
        await X(xe);
        continue;
      }
      return Y("info", "working_sync_parent_absent", {}), t.armLateStart(e), null;
    }
    return p("ccr_synced_file_push", "sync_start_failed"), Y("warn", "working_sync_start_failed", { code: x ?? "unknown" }), null;
  }
  let r = 0, l = [], s = () => r < Oe ? (r++, Promise.resolve()) : new Promise((R) => l.push(R)), c = () => {
    let R = l.shift();
    if (R) R();
    else r--;
  }, h = /* @__PURE__ */ new Set(), a = false, _ = false, y = 0, k = 0, T = async () => {
    let R = [], A = [""], x = /* @__PURE__ */ new Set(), ge = [...t.seenState.keys()], { transportFailureSeq: ye, sessionTerminalRejectSeq: me } = t, ke = 0, se = false, oe = false;
    e: while (A.length && !a) {
      let B = A.shift(), b;
      try {
        b = await Fe(M(e, B), { withFileTypes: true });
      } catch (P) {
        Y("warn", "working_scan_readdir_failed", { code: v(P) ?? "unknown" }), oe = true;
        continue;
      }
      for (let P of b) {
        if (++ke > de) {
          if (se = true, !_) p("ccr_synced_file_push", "scan_cap_reached"), _ = true;
          break e;
        }
        let w = B ? M(B, P.name) : P.name;
        if (x.add(w), Eme(w) || NJe(w)) continue;
        if (P.isDirectory()) {
          A.push(w);
          continue;
        }
        if (!P.isFile()) continue;
        let q;
        try {
          q = (await ue(M(e, w))).mtimeMs;
        } catch {
          continue;
        }
        let J = t.terminalRejects.get(w);
        if (J !== void 0 && J.latchedUntilMs !== 0 && Date.now() >= J.latchedUntilMs) t.reopenMtimeGate(w);
        if (t.releaseSessionFullHold(w), q === t.lastSeenMtime.get(w)) continue;
        if (h.has(w) || t.inFlight.has(w)) continue;
        h.add(w), R.push((async () => {
          await s();
          try {
            if (await re(w, () => Be(e, w))) t.recordSettledMtime(w, q);
          } finally {
            h.delete(w), c();
          }
        })().catch((Se) => Y("warn", "working_push_threw", { code: v(Se) ?? "unknown" })));
      }
    }
    if (!se && !oe && !a) {
      for (let b of t.lastSeenMtime.keys()) if (!x.has(b)) t.reopenMtimeGate(b);
      for (let b of t.terminalRejects.keys()) if (!x.has(b)) t.forgetTerminalReject(b);
      let B = e.endsWith(z) ? e : e + z;
      for (let b of ge) if (b.startsWith(B) && !x.has(j(e, b))) t.evictDeleted(b);
    }
    if (await Promise.allSettled(R), t.transportFailureSeq > ye || t.sessionTerminalRejectSeq > me) y = y === 0 ? 2 * ee : Math.min(y * 2, Te), k = Date.now() + y;
    else if (h.size === 0) y = 0, k = 0;
  }, F = 0, n = async () => {
    F++;
    try {
      await T();
    } finally {
      F--;
    }
  }, d = n(), S = setInterval(() => {
    if (F > 0 || Date.now() < k) return;
    n().catch((R) => Y("warn", "working_push_threw", { code: v(R) ?? "unknown" }));
  }, ee);
  S.unref?.(), Y("info", "working_sync_started", {});
  let E = { initialReconcile: d, flush: n, pendingCount: () => h.size, pollBackoffUntilForTest: () => k, stop() {
    a = true, clearInterval(S), t.syncerStopped(E);
  } };
  return t.syncerStarted(E), E;
}
async function eyo(e) {
  if (NJe(e)) return { kind: "error", message: f$n, retryable: false, errorKind: "other", status: void 0 };
  return oOe(e);
}
async function tyo(e, t, r, l) {
  let s = N();
  if (NJe(t)) return { ok: false, reason: "put_failed", error: f$n, retryable: false };
  if (r.length > g6) return { ok: false, reason: "too_large", error: "content too large" };
  if (l !== void 0 && l.length === 0) return { ok: false, reason: "put_failed", error: "empty if_match", retryable: false };
  return re(t, async () => {
    let c = await t0t(t, r, l);
    if (c.kind === "conflict") {
      if (l !== void 0) return { ok: false, reason: "conflict", error: "lane row changed since if_match", retryable: false };
      return { ok: false, reason: "put_failed", error: "put rejected (409 without if_match)", retryable: true };
    }
    if (c.kind === "error") return { ok: false, reason: "put_failed", error: c.message, retryable: c.retryable };
    if (!Eme(t)) {
      let h = M(e, t), a = te(h), _ = false;
      try {
        await ne(e, h);
        let y = await C(h, O.O_RDONLY | O.O_NOFOLLOW | O.O_NONBLOCK);
        try {
          let k = await y.stat();
          if (k.isFile() && k.size <= g6 && a !== void 0) {
            let T = Number(k.size), F = Buffer.allocUnsafe(T + 1), n = 0;
            for (; ; ) {
              let { bytesRead: d } = await y.read(F, n, T + 1 - n, n);
              if (d === 0) break;
              if (n += d, n > T) break;
            }
            _ = n <= T && a.localHash === et(F.subarray(0, n));
          }
        } finally {
          await y.close();
        }
      } catch (y) {
        _ = G(y);
      }
      if (!_) return s.recordEvictedEtag(h, c.content_sha256), Y("info", "worker_lane_mirror_skipped"), { ok: true, etag: c.content_sha256 };
      try {
        await n0t(e, h, r);
      } catch (y) {
        return s.recordEvictedEtag(h, c.content_sha256), Y("warn", "worker_lane_mirror_skipped", { code: v(y) ?? "unknown" }), { ok: true, etag: c.content_sha256 };
      }
      I(h, c.content_sha256, et(r));
    }
    return { ok: true, etag: c.content_sha256 };
  });
}
export {
  CZt,
  Eme,
  I8e,
  Qhi,
  ZTi,
  Zhi,
  Zho,
  bkr,
  eAi,
  eyo,
  f$n,
  g6,
  n0t,
  oOe,
  t0t,
  tyo,
  wkr
};
