// linux/remote/home-seed-upload-no-longer-allowed.js — Claude Code 2.1.310（linux）模块 chunk-xa9ve77r.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { c, ce } from "../agents/third-party.js";
import { Ke, R, d, ZH } from "../telemetry/anthropic-workspace-id.js";
import { X, Pe } from "../shared/chunk-57ff8cc1.js";
import { F } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { va, I } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { os } from "../shell/chunk-8eebd6c6.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { cC } from "../mcp/always-allow.js";
import { Fy, Yl, rr } from "../artifacts/chunk-a6c9d164.js";
import { ln } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { LV, jt } from "../settings/global-config-and-gates.js";
import { qi } from "../shared/async-hooks.b037.js";
import { gz } from "../telemetry/flag-off.js";
import { Vne, qne, nyt, DWs } from "../context/team-memory-sync.js";
import { zBe, l1 } from "../telemetry/device-bind-account.js";
import { xZt } from "../shared/client-event-signer.js";
import { i9, chn } from "./untrusted-device.js";
import { Ow, Uce, FU, Bce } from "./sessions-elevated-auth-disable-proactive-enrollment.js";
import { k8e, iK, bho } from "./ccr-synced-file-push.js";
import { RTo, pHs, CL, Pmt, yMe } from "../core/conversation-engine.js";
import { rkr, zMt, mme, fAs, mho } from "../permissions/keep-covers-device-tools.js";
import { B$n } from "../shared/unsupported-version.js";
import { dho, lZt, ZEr } from "../telemetry/home-seed-record-unwritten.js";
import { fho, W$n, G$n, z$n, tkr, nkr, pho } from "../context/home-seed-plan.js";
import { FBe } from "../shared/chunk-9a53444c.js";
import { j$n } from "../shared/chunk-fff8ac27.js";
import { dZt, dAs } from "../shared/chunk-1660bfbc.js";
import { bL } from "../shared/chunk-5569a444.js";
import { _me } from "../shared/chunk-945711c0.js";
import { o, oe, T, u, yt } from "../vendor/zod/string-format.js";
import { createHash as qe } from "crypto";
var Ge = Buffer.from("anthropic.ccr.session_synced_file_put.v1", "utf8"), We = Buffer.from("anthropic.ccr.session_synced_file_upload_begin.v1", "utf8"), Ye = Buffer.from("anthropic.ccr.session_synced_file_upload_commit.v1", "utf8"), ge = Buffer.from([0]), Ve = 32;
function Xe({ sessionUuid: e, boundDeviceUuid: n, issuedAtMs: r, contentSha256: i, path: _, ifMatchSha256: s }) {
  if (i.length !== Ve) throw Error("syncedFileRequestSigner: the content hash is not 32 bytes");
  return ee(Ge, { sessionUuid: e, boundDeviceUuid: n, issuedAtMs: r, fixed: [i], strings: [_, s ?? ""] });
}
function Qe({ sessionUuid: e, boundDeviceUuid: n, issuedAtMs: r, sizeBytes: i, path: _, ifMatchSha256: s }) {
  if (!Number.isSafeInteger(i) || i < 0) throw Error("syncedFileRequestSigner: the size is not a byte count");
  return ee(We, { sessionUuid: e, boundDeviceUuid: n, issuedAtMs: r, fixed: [_e(i)], strings: [_, s ?? ""] });
}
function Ze({ sessionUuid: e, boundDeviceUuid: n, issuedAtMs: r, path: i, uploadPath: _, contentSha256: s, ifMatchSha256: h }) {
  return ee(Ye, { sessionUuid: e, boundDeviceUuid: n, issuedAtMs: r, fixed: [], strings: [i, _, s, h ?? ""] });
}
function ee(e, { sessionUuid: n, boundDeviceUuid: r, issuedAtMs: i, fixed: _, strings: s }) {
  if (s.some((h) => h.includes("\0"))) throw Error("syncedFileRequestSigner: NUL in a signed field");
  return Buffer.concat([e, ge, l1(n), l1(r), _e(i), ..._, ...s.flatMap((h) => [Buffer.from(h, "utf8"), ge])]);
}
function _e(e) {
  let n = Buffer.alloc(8);
  return n.writeBigUInt64BE(BigInt(e)), n;
}
function Je({ sessionUuid: e, deviceUuid: n, key: r, now: i = Date.now }) {
  let _ = zBe + n, s = async (S) => {
    let b = i(), w = await r.sign(S(b));
    return { device_attestation: { kid: _, signature: w.toString("base64") }, device_attestation_issued_at: new Date(b).toISOString() };
  }, h = { sessionUuid: e, boundDeviceUuid: n };
  return { sign: ({ content: S, path: b, ifMatchSha256: w }) => s((v) => Xe({ ...h, issuedAtMs: v, contentSha256: qe("sha256").update(S).digest(), path: b, ifMatchSha256: w })), signBegin: ({ path: S, sizeBytes: b, ifMatchSha256: w }) => s((v) => Qe({ ...h, issuedAtMs: v, sizeBytes: b, path: S, ifMatchSha256: w })), signCommit: ({ path: S, uploadPath: b, contentSha256: w, ifMatchSha256: v }) => s((H) => Ze({ ...h, issuedAtMs: H, path: S, uploadPath: b, contentSha256: w, ifMatchSha256: v })) };
}
async function he({ sessionId: e, boundDeviceUuid: n, credentials: r, held: i }) {
  let _ = cC(e);
  if (_ === void 0) return W("bad_session_id");
  let s = await _me(r).catch(() => {
    return;
  });
  if (s?.status !== "resolved") return W("no_account");
  let h = n.toLowerCase(), S = await xZt(s.accountUuid, r, i?.rowPk.toLowerCase() === h ? i : void 0);
  if (S.status !== "loaded") return W(S.status);
  if (S.rowPk.toLowerCase() !== h) return W("bound_elsewhere");
  return g("client_request_signer"), Je({ sessionUuid: _, deviceUuid: h, key: S.key });
}
function W(e) {
  f("client_request_signer", e);
  return;
}
import { posix as Se } from "path";
var Y = 3e4, be = "synced_file_limit_exceeded", et = "synced_file_too_large_inline", te = p(() => u({ error: u({ type: o().optional(), reason: o().optional(), resource: o().optional(), sub_reason: oe().optional() }) }));
function tt(e) {
  if (e !== Se.normalize(e) || e.includes("\\") || e.includes("\0")) return false;
  return !Se.isAbsolute(e) && (e === Vne || e.startsWith(`${Vne}/`));
}
function ne(e) {
  if (tt(e)) return false;
  return l(new R(`lane path escapes the lane root: ${e}`, "lane path escapes the lane root")), true;
}
function K(e) {
  return `${k8e}/${e}`;
}
function re(e) {
  return e >= 200 && e < 300;
}
function ie(e, n) {
  return e.kind === "failed" ? { ...e, status: n } : e;
}
function nt(e) {
  return e === "compliance_restricted" || e === "zdr_restricted";
}
function G(e) {
  if (e === "aborted") return { kind: "aborted" };
  if (e === "failed") return { kind: "failed" };
  if (e === "timed_out") return { kind: "failed", timedOut: true };
  if (e === "too_large") return { kind: "failed", tooLarge: true };
  if (e === "gated") return { kind: "lane_unavailable" };
  if (e === "no_auth") return { kind: "unauthorized" };
  if (e === "unsigned") return { kind: "lane_unavailable", cause: "device_key_unavailable" };
  if (e.status === 501 || e.status === 404) return { kind: "lane_unavailable" };
  let n = te().safeParse(e.data).data?.error;
  if (e.status === 400 && n?.reason === bho) return { kind: "lane_unavailable", cause: "switched_off_by_anthropic" };
  if (e.status === 400 && n?.reason === et) return { kind: "failed", tooLarge: true };
  if (e.status === 403 && nt(n?.resource)) return { kind: "lane_unavailable", cause: "compliance_restricted" };
  if (e.status === 403 && n?.resource === "untrusted_device" && n.sub_reason === "synced_file_write_unsigned") return { kind: "unauthorized", cause: "write_signature_refused" };
  if (e.status === 401 || e.status === 403) return { kind: "unauthorized" };
  return { kind: "failed" };
}
var ae = 3;
var ot = 300, it = 4, at = 131072, st = 1e5;
function ke(e) {
  let n = at / it;
  return Math.min(st, Math.max(Y, Math.ceil(e / n * 1e3)));
}
var dt = 67108864;
function ut(e) {
  return Math.ceil(e * 4 / 3) + 1024;
}
var ct = { beginUpload: async () => ({ kind: "lane_unavailable" }), commitUpload: async () => ({ kind: "lane_unavailable" }), getDownload: async () => ({ kind: "lane_unavailable" }) };
class V extends Error {
  constructor() {
    super("this machine cannot sign the request as the bound device");
  }
}
var Ee = 64, lt = p(() => u({ content_sha256: o().length(Ee) })), ft = p(() => u({ content: o(), content_sha256: o().length(Ee) }));
function we(e) {
  return typeof e === "object" && e !== null && "code" in e && e.code === "ECONNABORTED";
}
function mt(e, n) {
  if (ne(e)) return "failed";
  if (Array.from(K(e)).length > DWs) return "path_too_long";
  if (n.length > iK) return "too_large";
  return null;
}
function Ae({ sessionId: e, credentials: n, signer: r, signedOnly: i = false }) {
  Fy(e, "seed upload session id");
  let _ = Yl(e), s = null, h;
  function S(A) {
    return s ??= Bce(A).then((P) => {
      if (P !== void 0) h = P;
      return P;
    }, () => {
      return;
    }).finally(() => {
      s = null;
    }), s;
  }
  let b = null, w = false;
  async function v(A) {
    let P = await r?.catch(() => {
      return;
    });
    if (P === void 0) {
      if (i) throw new V();
      return;
    }
    try {
      return await A(P);
    } catch (O) {
      if (!w) w = true, t(`lane: request not signed: ${d(O)}`, { level: "warn" }), f("client_request_signer", "sign_failed");
      if (i) throw new V();
      return;
    }
  }
  async function H(A, P, O = {}) {
    let D = O.heedsRetryAfter ? b?.trackRequest() : void 0, B = await U(A, P, O, D);
    return D?.noteSettled(B), B;
  }
  async function U(A, P, { retryTimeouts: O = false, attempts: D = ae }, B) {
    let M = false;
    for (let y = 0; ; y++) {
      if (bL(P)) return "aborted";
      h ??= await Ow().catch(() => {
        return;
      });
      let C = h, k;
      try {
        k = await A(C === void 0 ? {} : { "X-Trusted-Device-Token": C });
      } catch (L) {
        if (L instanceof V) return "unsigned";
        if (bL(P)) return "aborted";
        if (await LV(n)) return "no_auth";
        if (ZH(L)) return t("lane: the response is larger than this request accepts; not retried", { level: "warn" }), "too_large";
        if ((O || !we(L)) && y + 1 < D) {
          await X(ve(y), P);
          continue;
        }
        if (we(L)) return t("lane: request timed out", { level: "warn" }), "timed_out";
        return l(L), "failed";
      }
      if (!k.ok) return k.reason === "no-auth" ? "no_auth" : "gated";
      if ((k.status === 429 || k.status >= 500 && k.status !== 501) && y + 1 < D) {
        let L = ve(y);
        await X((k.status === 429 ? B?.takeWaitMs(y, k.response?.headers?.["retry-after"], L) : void 0) ?? L, P);
        continue;
      }
      let x = k.status === 403 && !M ? i9(k.data) : void 0;
      if (x !== void 0 && chn(x)) {
        M = true;
        let L = await S(C);
        if (L !== void 0 && L !== C) continue;
      } else if (x !== void 0) Uce("lane:", x), h = void 0, FU();
      return { status: k.status, data: k.data };
    }
  }
  async function j(A, P, { ifMatchSha256: O, signal: D, shouldAttemptOnceIfLong: B = false } = {}) {
    let M = mt(A, P);
    if (M !== null) return { kind: M };
    if (O === "") return { kind: "failed" };
    let y = ke(Re(P.length));
    return pt(await E(A, P, O, D, B && y > Y ? 1 : ae, y));
  }
  function E(A, P, O, D, B, M) {
    let y = K(A);
    return H(async (C) => jt.put(`/v1/code/sessions/${_}/synced_file`, { session_id: _, path: y, content: P.toString("base64"), ...O !== void 0 && { if_match_sha256: O }, ...await v((k) => k.sign({ content: P, path: y, ifMatchSha256: O })) }, { auth: "teleport-org", credentials: n, headers: C, timeout: M, validateStatus: () => true, signal: D, maxBodyLength: dt }), D, { attempts: B });
  }
  async function N(A, P, O = 0, D = iK) {
    if (ne(A)) return { kind: "failed" };
    let B = new URLSearchParams({ path: K(A) }), M = ke(Re(O)), y = await H((C) => jt.get(`/v1/code/sessions/${_}/file?${B.toString()}`, { auth: "teleport-org", credentials: n, headers: C, timeout: M, validateStatus: () => true, signal: P, maxContentLength: ut(D) }), P, { attempts: M > Y ? 1 : ae });
    if (typeof y === "string") return G(y);
    if (re(y.status)) {
      let C = ft().safeParse(y.data);
      if (!C.success) return { kind: "failed", status: y.status };
      let k = Buffer.from(C.data.content, "base64");
      return k.length > D ? { kind: "failed", status: y.status, tooLarge: true } : { kind: "ok", content: k, etag: C.data.content_sha256 };
    }
    if (y.status === 404) return { kind: "not_found" };
    return ie(G(y), y.status);
  }
  return { putStoreRow: j, getStoreRow: N, ...ct };
}
function pt(e) {
  if (typeof e === "string") return G(e);
  if (re(e.status)) {
    let n = lt().safeParse(e.data);
    return n.success ? { kind: "ok", etag: n.data.content_sha256 } : { kind: "failed", status: e.status };
  }
  if (e.status === 409) return { kind: "conflict" };
  if (e.status === 400) {
    let n = te().safeParse(e.data), { type: r, reason: i } = n.success ? n.data.error : { type: void 0, reason: void 0 };
    if (t(`lane: put rejected (400): type=${r} reason=${i}`), i === be) return { kind: "lane_full" };
  }
  return ie(G(e), e.status);
}
function Re(e) {
  return Math.ceil(e / 3) * 4;
}
function ve(e) {
  return ot * 2 ** e * (0.5 + Math.random() / 2);
}
var gt = 1e4;
async function se(e, n) {
  return gz(Pmt(e).enabledNow()) && yMe(e) && (!CL(e) || await Promise.resolve().then(() => n?.() ?? false).catch(() => false));
}
async function Oe({ client: e, pack: n, generation: r, uploaded: i, status: _, launchConsent: s, isProjectStillSynced: h, signal: S, onReadBack: b, deadlineMs: w = gt }) {
  if (i.kind !== "uploaded" || !wt(i.outcome) || bL(S) || !await se(s, h)) return "skipped";
  let v = new AbortController(), H = () => v.abort();
  S?.addEventListener("abort", H, { once: true });
  try {
    let U, E = await Pe(_t({ client: e, pack: n, generation: r, uploaded: i.outcome, signal: v.signal, onRead: (O) => {
      U = O;
    } }), w) ?? U ?? { verdict: "unreadable", heal: "none", got: "deadline", ready: null };
    if (bL(S) || E.got === "aborted") return "skipped";
    let N = bt(E.ready, r, n);
    a("tengu_home_seed_ready_seen", { outcome: c(E.verdict), got: c(E.got), heal: c(E.heal), ready_outcome: c(E.ready?.outcome ?? "none"), deny_or_ask_rules_missing: N, generation: r });
    let A = E.verdict === "applied_before_first_ask" || E.verdict === "applied_late" ? { verdict: E.verdict, left: Rt(E.ready, St(n), N) } : { verdict: E.verdict, left: null };
    b?.(A);
    let P = vt(E.verdict, i.outcome, A.left, i.settingsRefused !== void 0, N);
    if (P !== null) _.publish(P.text, P.level);
    return E.verdict;
  } catch (U) {
    if (Ke(U) || bL(S)) return "skipped";
    return l(U), "unreadable";
  } finally {
    v.abort(), S?.removeEventListener("abort", H);
  }
}
async function _t({ client: e, pack: n, generation: r, uploaded: i, signal: _, onRead: s }) {
  let h = ht(await e.getStoreRow(nyt, _));
  switch (h.kind) {
    case "aborted":
      return { verdict: "unreadable", got: "aborted", heal: "none", ready: null };
    case "unreadable":
      return { verdict: "unreadable", got: h.got, heal: "none", ready: null };
    case "ready":
      return { verdict: h.ready.generation < r ? i === "deadline" ? "not_seen" : "behind" : h.ready.generation !== r ? "stale" : kt(h.ready) ? "not_applied" : h.ready.appliedBeforeFirstAsk ? "applied_before_first_ask" : "applied_late", got: "ready", heal: "none", ready: h.ready };
    case "absent": {
      if (i === "deadline") return { verdict: "not_seen", got: "absent", heal: "none", ready: null };
      return s({ verdict: "not_seen", got: "absent", heal: "failed", ready: null }), { verdict: "not_seen", got: "absent", heal: (await e.putStoreRow(qne, n, { signal: _ })).kind === "ok" ? "ok" : "failed", ready: null };
    }
  }
}
function ht(e) {
  switch (e.kind) {
    case "ok": {
      let n = B$n(e.content);
      return n.ok ? { kind: "ready", ready: n.ready } : { kind: "unreadable", got: n.reason };
    }
    case "not_found":
      return { kind: "absent" };
    case "aborted":
      return { kind: "aborted" };
    case "failed":
    case "lane_unavailable":
    case "unauthorized":
      return { kind: "unreadable", got: e.kind };
  }
}
function St(e) {
  let n = mme(e);
  return n.ok && n.pack.settings !== null;
}
function bt(e, n, r) {
  if (e?.generation !== n || e.outcome !== "partial" || e.settingsWritten) return false;
  let i = mme(r);
  return i.ok && i.pack.settings !== null && mho(i.pack.settings) !== null;
}
function kt(e) {
  return e.outcome === "partial" && e.filesApplied === 0 && !e.settingsWritten;
}
function wt(e) {
  switch (e) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
    case "deadline":
      return true;
    case "raced":
    case "not_forwarded_at_create":
    case "lane_full":
    case "unavailable":
    case "unauthorized":
    case "failed":
    case "aborted":
      return false;
  }
}
function Rt(e, n, r) {
  if (e === null || e.outcome !== "partial") return null;
  return !r && e.filesRefused > 0 ? "files" : n && !e.settingsWritten ? "settings" : "part";
}
function vt(e, n, r, i, _) {
  let s = i ? "the rest of your settings" : "your settings", h = r === null ? "" : ` (${j$n[r]})`, S = n === "deadline" || _;
  switch (e) {
    case "applied_before_first_ask":
      return { text: `The cloud session applied ${s} before its first reply${h}`, level: S ? "info" : "debug" };
    case "applied_late":
      return { text: `${va(s)} reached the cloud session after its first reply${h}; they apply from the next turn (no /clear needed)`, level: r === null || S ? "info" : "debug" };
    case "not_applied":
      return { text: `The cloud session could not apply ${s} (everything it was sent was skipped there)`, level: S ? "warning" : "debug" };
    case "not_seen":
      return n === "deadline" ? { text: `The cloud session has not confirmed ${s} (the upload may not have reached it in time)`, level: "warning" } : { text: `The cloud session has not confirmed ${s} and may be running without them`, level: "info" };
    case "behind":
      return { text: "The cloud session still ran with the settings it had for this reply; the ones just sent apply from the next turn (no /clear needed)", level: "info" };
    case "stale":
      return { text: `The cloud session confirmed a different copy of ${s} than the one just sent`, level: "warning" };
    case "unreadable":
      return { text: `The cloud session's answer about ${s} could not be read`, level: "warning" };
  }
}
var Pt = 15e3, Et = 3e4;
function aho(e) {
  return At(e).pendingSeed(Promise.resolve());
}
function At({ sessionId: e, plan: n, bound: r, boundDeviceUuid: i, held: _, trigger: s, launchConsent: h, isProjectStillSynced: S, signal: b, credentials: w, storageV5: v, client: H, deadlineMs: U = Pt, planDeadlineMs: j = Et }) {
  let E = FBe(), N = Promise.resolve(i).catch(() => {
    return;
  }), A = H === void 0 ? void 0 : Promise.resolve(H), P = () => A ??= N.then((y) => Ae({ sessionId: e, credentials: w, ...y !== void 0 && { signer: he({ sessionId: e, boundDeviceUuid: y, credentials: w, ..._ !== void 0 && { held: _ } }), signedOnly: true } })), O = Pe(Promise.resolve(n).catch((y) => {
    if (!Ke(y)) l(y);
    return { kind: "none", reason: Ke(y) ? "aborted" : "failed" };
  }), j).then((y) => y ?? { kind: "none", reason: "too_slow" }), D;
  O.then((y) => {
    D = y.kind === "ready" ? y.description : null;
  });
  let B = O.then((y) => y.kind === "ready" ? { plan: y, attempts: Ot({ sessionId: e, storageV5: v, plan: y, bound: r, trigger: s, signal: b, getStoreClient: P, deadlineMs: U }, () => se(h, S)) } : { plan: y, attempts: null });
  return { ensureUploaded: (y) => B.then(({ attempts: C }) => C?.ensureUploaded(y) ?? "done"), pendingSeed: (y) => {
    let C = B.then(({ plan: k, attempts: q }) => (q === null ? Promise.resolve().then(() => {
      for (let x of qt(k, s, j)) E.publish(x, $t(k));
      return de(Ct(k.reason, s), s, "plan_"), { outcome: { kind: "none", reason: k.reason, ...Q(k) }, written: null };
    }) : q.endedOnce(y).then((x) => Ut(E, { sessionId: e, plan: k, bound: r, trigger: s }, x))).catch((x) => (l(x), de({ is: "bad", code: "unexpected" }, s, ""), { outcome: k.kind === "ready" ? { kind: "uploaded", outcome: "failed", summary: k.summary, bound: r, ...Be(k), ...Q(k) } : { kind: "none", reason: k.reason, ...Q(k) }, written: null })));
    return dAs({ completion: C.then(({ outcome: k }) => k), status: E, description: () => D, afterFirstReply: (k, q) => C.then(({ outcome: x, written: L }) => L === null ? "skipped" : P().then((je) => Oe({ client: je, pack: L.pack, generation: L.generation, uploaded: x, status: E, launchConsent: h, isProjectStillSynced: S, signal: k, onReadBack: q }))) });
  } };
}
function Ot(e, n) {
  let r = Te(e, 1), i = { packUpload: e, mayStillForwardNow: n, ended: Promise.withResolvers(), isEnded: false, attemptsMade: 1, latest: r, call: void 0 };
  return i.ended.promise.catch(() => {
  }), De(i, r, null), { endedOnce: (_) => (_.then(() => (i.isEnded = true, i.latest)).then((s) => fe(i, s), (s) => me(i, s)), i.ended.promise), ensureUploaded: (_) => i.call ??= Ht(i, _).finally(() => {
    i.call = void 0;
  }) };
}
function fe(e, n) {
  e.isEnded = true, e.ended.resolve(n);
}
function me(e, n) {
  e.isEnded = true, e.ended.reject(n);
}
function De(e, n, r) {
  n.then((i) => {
    if (!Le(i)) fe(e, Fe(r, i));
  }, (i) => me(e, i));
}
function Fe(e, n) {
  return e !== null && e.written !== null && n.written === null && n.outcome !== "raced" ? e : n;
}
async function Ht(e, n) {
  try {
    let r = await e.latest;
    if (e.isEnded) return "done";
    let i = await e.mayStillForwardNow().catch((h) => (l(h), false));
    if (e.isEnded) return "done";
    if (!i) return a("tengu_home_seed_upload_no_longer_allowed", { trigger: c(e.packUpload.trigger), attempts_made: e.attemptsMade }), fe(e, r), "done";
    if (n.aborted) return He(r);
    e.attemptsMade += 1;
    let _ = Te({ ...e.packUpload, cut: n }, e.attemptsMade);
    De(e, _, r), e.latest = _.then((h) => Fe(r, h)), e.latest.catch(() => {
    });
    let s = await _;
    return Le(s) ? He(s) : "done";
  } catch (r) {
    return me(e, r), "done";
  }
}
function He({ outcome: e, cause: n, httpStatus: r }) {
  return { kind: "failed", ...r !== void 0 && r >= 400 && { httpStatus: r }, ...e === "unauthorized" && { remedy: n === "write_signature_refused" ? "clock" : "login" } };
}
function Le({ outcome: e, cause: n, isRefusedAsSent: r }) {
  switch (e) {
    case "deadline":
    case "unauthorized":
      return true;
    case "unavailable":
      return n === void 0;
    case "failed":
      return r !== true;
    case "sent":
    case "unchanged":
    case "conflict_resolved":
    case "raced":
    case "not_forwarded_at_create":
    case "lane_full":
    case "aborted":
      return false;
  }
}
async function Te({ sessionId: e, storageV5: n, plan: r, bound: i, trigger: _, signal: s, cut: h, getStoreClient: S, deadlineMs: b }, w) {
  let v = Date.now(), H = (w === 1 || _ !== "create") && lZt(e)?.tried === true, U = await Ft(S, r.pack, _, { sessionId: e, storageV5: n }, s, h, b);
  return a("tengu_home_seed_upload", { trigger: c(_), outcome: c(U.outcome), attempt: w, bytes: U.written?.pack.length ?? r.pack.length, generation: U.generation, bound: i, row_standing: U.standing === true, allow_rules_cut: U.allowRulesCut ?? 0, allow_rules_recorded: lZt(e)?.allow.length ?? 0, after_failed_create: H, cause: ce(U.cause), duration_ms: Date.now() - v }), U;
}
function Ut(e, { sessionId: n, plan: r, bound: i, trigger: _ }, { outcome: s, written: h, standing: S, allowRulesCut: b, cause: w }) {
  de(Dt(s, w), _, "");
  let v = lZt(n);
  return It(e, r, s, { sessionId: n, trigger: _, bound: i, didCreateCarryAllowRules: (v?.allow.length ?? 0) > 0 }, v?.tried === true && S !== true ? false : S ?? false, b ?? 0, w), { outcome: { kind: "uploaded", outcome: s, summary: r.summary, bound: i, ...Be(r), ...Q(r) }, written: h };
}
function Q(e) {
  if (e.kind === "none") return {};
  let n = nkr(e.leftBehind), r = pho(e.leftBehind);
  return { ...(n.claudeMd || n.others > 0) && { keptForCredential: n }, ...r.names.length > 0 && { keptAsLinks: r } };
}
function Be(e) {
  let n = e.settings;
  return n === "schema_rejected" || n === "settings_too_large" || n === "settings_unreadable" ? { settingsRefused: n } : {};
}
function Ct(e, n) {
  switch (e) {
    case "failed":
    case "home_unvettable":
    case "rules_unreadable":
      return { is: "bad", code: e };
    case "nothing_to_send":
    case "too_slow":
      return { is: "sad", code: e };
    case "unbound":
    case "flag_off":
    case "no_consent":
    case "user_settings_disabled":
    case "aborted":
    case "self_hosted_runner":
      return null;
    case "no_project_files":
      return null;
  }
}
function Dt(e, n) {
  switch (e) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
      return { is: "ok" };
    case "aborted":
    case "not_forwarded_at_create":
      return null;
    case "unavailable":
      return { is: "sad", code: n ?? e };
    case "lane_full":
    case "unauthorized":
    case "deadline":
    case "raced":
      return { is: "sad", code: e };
    case "failed":
      return { is: "bad", code: e };
  }
}
function de(e, n, r) {
  if (e === null) return;
  let i = n === "create";
  switch (e.is) {
    case "ok":
      if (g("ccr_home_seed"), i) g("ccr_home_seed_create_upload");
      return;
    case "sad":
      if (f("ccr_home_seed", e.code), i) f("ccr_home_seed_create_upload", `${r}${e.code}`);
      return;
    case "bad":
      if (m("ccr_home_seed", e.code), i) m("ccr_home_seed_create_upload", `${r}${e.code}`);
      return;
  }
}
async function Ft(e, n, r, i, _, s, h) {
  if (bL(_)) return { outcome: "aborted", generation: 0, written: null };
  let S = new AbortController(), b = () => S.abort();
  _?.addEventListener("abort", b, { once: true }), s?.addEventListener("abort", b, { once: true });
  try {
    let w = await Pe(e().then((v) => Lt(v, n, r, i, S.signal)), h);
    if (w === void 0 || w.outcome === "aborted") {
      if (bL(_)) return { outcome: "aborted", generation: 0, written: null };
      if (r === "create") return Z(i, n, 1, void 0), { outcome: "deadline", generation: 0, written: { pack: n, generation: 1 } };
      return { outcome: "deadline", generation: 0, written: null, standing: "unknown" };
    }
    return w;
  } finally {
    S.abort(), _?.removeEventListener("abort", b), s?.removeEventListener("abort", b);
  }
}
async function Lt(e, n, r, i, _) {
  if (r !== "create") {
    let h = lZt(i.sessionId);
    if (h === void 0) return { outcome: "not_forwarded_at_create", generation: 0, written: null };
    let S = await e.getStoreRow(qne, _);
    if (S.kind !== "ok" && S.kind !== "not_found") return { outcome: Ne(S), generation: 0, written: null, standing: "unknown", ...J(S) };
    let b = Tt(n, h), w = (H) => ZEr(i.sessionId, { ...h, generation: H, etag: void 0, at: Date.now() }, i.storageV5), v = S.kind === "ok" ? await xe(e, b.pack, S, _, w) : { ...await Ue(e, Me(b.pack, h.generation), _, w), standing: "gone" };
    if (S.kind === "not_found") a("tengu_home_seed_stored_pack_gone", { outcome: c(v.outcome), generation: v.generation, record_generation: h.generation, after_failed_create: h.tried === true });
    if (v.written !== null) ZEr(i.sessionId, { ...h, generation: v.generation, etag: v.etag, at: Date.now() }, i.storageV5);
    return b.cut === 0 ? v : { ...v, allowRulesCut: b.cut };
  }
  let s = await Ue(e, { pack: n, generation: 1 }, _, async (h) => {
    if (h > 1) Z(i, n, h, void 0);
  });
  if (s.written !== null) Z(i, s.written.pack, s.generation, s.etag);
  else if (s.outcome in $e) Z(i, n, 1, void 0, { tried: true });
  return s;
}
async function Ue(e, { pack: n, generation: r }, i, _) {
  await _?.(r);
  let s = await e.putStoreRow(qne, n, { signal: i });
  if (s.kind !== "conflict") {
    if (s.kind !== "ok") return { outcome: Ie(s, "sent"), generation: 0, written: null, ...J(s) };
    return { outcome: "sent", generation: r, written: { pack: n, generation: r }, etag: s.etag };
  }
  let h = await e.getStoreRow(qne, i);
  if (h.kind !== "ok") return { outcome: Ne(h), generation: 0, written: null, standing: true, ...J(h) };
  return xe(e, n, h, i, _);
}
function Z(e, n, r, i, _ = {}) {
  let s = mme(n), h = s.ok ? Bt(s.pack.settings) ?? [] : [];
  ZEr(e.sessionId, { generation: r, ...i !== void 0 && { etag: i }, ..._, allow: h.map(dho), at: Date.now() }, e.storageV5);
}
async function xe(e, n, r, i, _) {
  let s = Mt(n, r.content);
  await _?.(s.generation);
  let h = await e.putStoreRow(qne, s.pack, { ifMatchSha256: r.etag, signal: i }), S = h.kind === "conflict" ? "raced" : Ie(h, s.unchanged ? "unchanged" : "conflict_resolved");
  return h.kind === "ok" ? { outcome: S, generation: s.generation, written: { pack: s.pack, generation: s.generation }, standing: true, ...h.etag !== void 0 && { etag: h.etag } } : { outcome: S, generation: 0, written: null, standing: true, ...J(h) };
}
function J(e) {
  switch (e.kind) {
    case "lane_unavailable":
    case "unauthorized":
      return e.cause !== void 0 ? { cause: e.cause } : {};
    case "path_too_long":
    case "too_large":
      return { isRefusedAsSent: true };
    case "failed":
      return e.status === void 0 ? {} : { httpStatus: e.status, ...e.status >= 400 && e.status < 500 && e.status !== 429 && { isRefusedAsSent: true } };
    default:
      return {};
  }
}
function Tt(e, n) {
  let r = mme(e);
  if (!r.ok) throw Error("the settings pack to re-send does not parse");
  if (r.pack.settings === null || r.pack.settings.permissions === void 0) return { pack: e, cut: 0 };
  let i = pe().safeParse(r.pack.settings.permissions);
  if (!i.success) throw Error("the settings pack to re-send carries permissions of an unknown shape");
  let _ = i.data.allow;
  if (_ === void 0) return { pack: e, cut: 0 };
  let s = new Set(n.allow), h = _.filter((b) => s.has(dho(b))), S = _.length - h.length;
  return S === 0 ? { pack: e, cut: S } : { pack: zMt({ ...r.pack, settings: xt(r.pack.settings, h) }), cut: S };
}
var pe = p(() => yt({ allow: T(o()).optional() }));
function Bt(e) {
  let n = pe().safeParse(e?.permissions);
  return n.success ? n.data.allow : void 0;
}
function xt(e, n) {
  let r = pe().safeParse(e.permissions);
  return { ...e, permissions: { ...r.success ? r.data : {}, allow: [...n] } };
}
function Mt(e, n) {
  let r = mme(e), i = mme(n);
  if (r.ok && i.ok) {
    if (zMt({ ...r.pack, generation: i.pack.generation }).equals(n)) return { pack: n, generation: i.pack.generation, unchanged: true };
  }
  if (n.equals(e)) return { pack: n, generation: 1, unchanged: true };
  return { ...Me(e, fAs(n) ?? 0), unchanged: false };
}
function Me(e, n) {
  let r = mme(e);
  if (!r.ok) return { pack: e, generation: 1 };
  let i = Math.min(n + 1, rkr);
  return { pack: zMt({ ...r.pack, generation: i }), generation: i };
}
function Ie(e, n) {
  switch (e.kind) {
    case "ok":
      return n;
    case "conflict":
    case "path_too_long":
    case "too_large":
    case "failed":
      return "failed";
    case "lane_full":
      return "lane_full";
    case "aborted":
      return "aborted";
    case "lane_unavailable":
      return "unavailable";
    case "unauthorized":
      return "unauthorized";
  }
}
function Ne(e) {
  switch (e.kind) {
    case "not_found":
    case "failed":
      return "failed";
    case "aborted":
      return "aborted";
    case "lane_unavailable":
      return "unavailable";
    case "unauthorized":
      return "unauthorized";
  }
}
function It(e, n, r, { sessionId: i, trigger: _, bound: s, didCreateCarryAllowRules: h }, S, b, w) {
  let v = r === "unavailable" && w !== "device_key_unavailable" ? "" : ue;
  switch (r) {
    case "sent":
    case "unchanged":
    case "conflict_resolved": {
      if (e.publish(r === "unchanged" && _ !== "create" ? "Settings from this machine are already in this session" : fho({ ...n.description, permissionRules: n.description.permissionRules - b }) + (s ? "" : " (this session cannot run commands on this machine)"), "debug"), b > 0) e.publish(`${b} ${I(b, "permission allow rule")} ${b === 1 ? "stays" : "stay"} on this machine, because ${b === 1 ? "it was" : "they were"} not in the settings prepared when this cloud session was created; a new session takes ${b === 1 ? "it" : "them"}`, "debug");
      let H = tkr(n, { launch: _ === "create" ? "create" : h ? "reopen_sent" : "reopen_sent_no_allow_recorded", settingsFile: le(n.configHome) });
      if (H !== null) e.publish(H, ze(n));
      return;
    }
    case "aborted":
      return;
    case "deadline":
      e.publish(Ce(S, { ifNoneStood: z$n, otherwise: "The cloud session may not have your latest settings", why: "sending your settings took too long", wayOut: v }), "warning");
      return;
    case "raced":
      e.publish(`${z$n}: another launch of this session, or the session itself, wrote its settings first`, "warning");
      return;
    case "not_forwarded_at_create":
      if (!qi().claim(`home_seed_not_sent_again:${rr(i)}`)) return;
      e.publish("Settings from this machine were not sent again: this machine has no record of sending them when this session was created (a session started without them, from another machine, by an earlier build, or older than this machine still tracks)", "debug");
      return;
    case "lane_full":
    case "unavailable":
    case "unauthorized":
    case "failed": {
      let H = w === "write_signature_refused" ? Nt : r === "unavailable" && w !== void 0 ? zt[w] : $e[r];
      e.publish(Ce(S, { ifNoneStood: W$n, otherwise: G$n, why: H, wayOut: v }), "warning");
      return;
    }
  }
}
function ze(e) {
  let n = e.summary.overCap + e.unreadable + F(e.leftBehind, (_) => _.reason === "undefusable"), r = e.settings === "schema_rejected" || e.settings === "settings_too_large" || e.settings === "settings_unreadable", i = e.summary.droppedRules.credentialRestrictions > 0;
  return n > 0 || r || i ? "warning" : "debug";
}
var ue = "; start a new cloud session to try again";
function le(e) {
  return os(ln("userSettings") ?? e);
}
function Ce(e, { ifNoneStood: n, otherwise: r, why: i, wayOut: _ }) {
  return e === false ? `${n}: ${i}${_}` : `${e === "gone" ? z$n : r}: ${i}`;
}
function z(e, n, r) {
  return [e === "create" ? `${W$n}: ${n}${r}` : `${G$n}: ${n}`];
}
var $e = { lane_full: "the session has reached its limit of uploaded files", unavailable: "sending your settings is not available", unauthorized: dZt, failed: "sending your settings failed" }, Nt = "the cloud could not confirm where your settings came from (this machine's clock may be wrong)", zt = { device_key_unavailable: "this machine could not prove it is the computer the session is bound to (you are signed out, or its device key is missing or unreadable)", compliance_restricted: "your organization's compliance policy does not allow sending your settings", switched_off_by_anthropic: "sending your settings was turned off by Anthropic for now", direct_sync_off: "sending your settings is turned off for your organization" };
function $t(e) {
  if (e.kind === "empty" && e.reason === "nothing_to_send") return ze(e);
  return e.reason === "user_settings_disabled" ? "debug" : "warning";
}
function qt(e, n, r) {
  let i = Math.ceil(r / 1e3);
  switch (e.reason) {
    case "unbound":
      return [];
    case "rules_unreadable": {
      if (e.settings === "settings_unreadable") return z(n, `${le(e.configHome)} has errors (see /status) or links to a missing file`, "; fix it and start a new cloud session");
      let _ = e.unreadableSettingsFiles.length, s = RTo(e.unreadableSettingsFiles);
      return s === "" ? z(n, pHs([]), "") : z(n, `${s} ${I(_, "has", "have")} errors`, `; once ${I(_, "it is", "they are")} fixed, start a new cloud session`);
    }
    case "failed":
      return z(n, "preparing your settings failed (see the debug log)", ue);
    case "too_slow":
      return z(n, `preparing your settings took over ${i} ${I(i, "second")}`, ue);
    case "home_unvettable":
      return e.cause === "too_many_links" ? z(n, `your memory files and what they @import, or the links under ${os(e.configHome)}, are too many to check`, "; remove some and start a new cloud session") : z(n, `a link, an unreadable folder or an @import under ${os(e.configHome)} could not be checked`, "");
    case "nothing_to_send": {
      let _ = e.kind === "empty" ? tkr(e, { launch: n === "create" ? "create" : "reopen_sent_nothing", settingsFile: le(e.configHome) }) : null;
      return _ === null ? [] : [_];
    }
    case "user_settings_disabled":
      return ["Settings from this machine were not sent to the cloud session: this launch does not load your user settings (--setting-sources, or an SDK settingSources list, without user)"];
    case "flag_off":
    case "no_consent":
    case "aborted":
    case "no_project_files":
    case "self_hosted_runner":
      return [];
  }
}
export {
  aho
};
