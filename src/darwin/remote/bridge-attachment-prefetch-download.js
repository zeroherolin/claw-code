// darwin/remote/bridge-attachment-prefetch-download.js — Claude Code 2.1.310（darwin）模块 chunk-5dan5br5.js
import { xR } from "../git/utf-8.js";
import { St, l } from "../artifacts/cowritten-artifact-html.js";
import { s_e } from "../permissions/chunk-42a3174d.js";
import { S, c } from "../agents/third-party.js";
import { v, vr, rw } from "../telemetry/anthropic-workspace-id.js";
import { Vt } from "../shared/chunk-3b9c376b.js";
import { V, Xts, L3t, OX, Xbe, J, Il } from "../context/not-admin-owned.js";
import { X, zI } from "../shared/chunk-57ff8cc1.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { Gb, Evt, al, xue, sSn, h6t, $Le, ULe, kn, k } from "../settings/global-config-and-gates.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { lP } from "../shell/chunk-8eebd6c6.js";
import { cP, DM, Hn } from "../fs/utf-8.8f8e.js";
import { _r, je } from "../plugins/chunk-0a4c51cf.js";
import { pA } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { oa } from "../fs/ca-certs-load.js";
import { bYn, B3, b4s } from "../shared/chunk-4f9a38d5.js";
import { g4s } from "../telemetry/image-resize-fallback.js";
import { dle, Qte } from "../telemetry/chunk-f6ecba11.js";
import { zut } from "../fs/bridge-attachment-user-data-root.js";
import { F8e, C$n, T$n, A$n, Mkr, xte, Hkr } from "../fs/send-file-received.js";
import { vx, Fv, Uk, _F } from "../shared/remote-control.js";
import { wx, Xpn } from "../shared/file-attachments.js";
import { mUo } from "../tasks/bridge-ingress-demoted.js";
import { T6 } from "../shared/chunk-514dc54c.js";
import { SHe } from "../shell/chunk-88b36f19.js";
import { bx, m8n, _$o, qqs } from "../shared/chunk-c60ee8b6.js";
import { Ra } from "../shared/chunk-34a7f8ba.js";
import { wbn, uNe } from "../shared/allow-large.js";
import { et } from "../shared/chunk-061dbb8e.js";
import { Zm, Et } from "../telemetry/chunk-a27d4004.js";
import { Hs } from "./claude-code-remote.js";
import { z } from "../shared/chunk-be29de51.js";
import { randomUUID as ve } from "crypto";
import { link as Ze, lstat as Qe, realpath as tt, unlink as nt } from "fs/promises";
import { dirname as it, join as Me } from "path";
import { extname as Re } from "path";
function cAs(e) {
  return Re(e).toLowerCase().slice(1) !== "" && !uNe(e) && !SHe(e) && !lP(e);
}
function Cyo(e) {
  return m8n("", F8e(e.file_name));
}
function l0t(e) {
  let i = 0, r = 0, n = 0, f = 0, a = 0, s = 0;
  for (let h of e) {
    if (h.is_image === true) continue;
    let w = Cyo(h), o = h.sha256 === void 0;
    if (wbn.has(Re(w).toLowerCase().slice(1))) i++;
    else if (uNe(w)) {
      if (r++, o) s++;
    } else if (SHe(w)) {
      if (n++, o) a++, s++;
    } else f++;
  }
  let u = e.length > 0;
  return { binary_ext_file_count: n, pdf_file_count: r, text_like_file_count: f, image_ext_file_count: i, all_files_binary_ext_no_sha256: u && a === e.length ? 1 : 0, all_files_binary_ext_or_pdf_no_sha256: u && s === e.length ? 1 : 0 };
}
var rt = 3e4, Se = 36700160, Be = { startsTurn: 3, noTurn: 2 }, Ae = 1e4, be = 250, ot = 1e3, Ue = 25e3, Pe = 16, at = 20, st = 64, dt = 16;
function He() {
  return (Il() ? 16 : 64) * 1024 * 1024;
}
var $e = 3e5, ut = 6e4, xe = { min: 15e3, max: $e }, lt = 3, ft = "x-anthropic-attachment-prefetch", De = { name: "x-anthropic-attachment-prefetch-seen", value: "1" }, ct = 409, mt = 64, _t = 3e5, ht = 32, gt = 6e4, pt = { no_token: "failed_no_token_count", http_status: "failed_http_status_count", too_large: "failed_too_large_count", held_limit: "failed_held_limit_count", stalled: "failed_stalled_count", stopped: "failed_stopped_count", error: "failed_error_count" }, bt = { override: true, payload: true, disk: true, disabled: false, fallback: false }, wt = { no_token: 1, http_status: 2, too_large: 3, held_limit: 4, stalled: 5, stopped: 6, error: 7 }, yt = 8, At = 9;
function x(e) {
  t(`[bridge:inbound-attach] ${e}`);
}
async function ke(e, i) {
  try {
    let r = await Qe(e);
    if (!r.isFile()) return "other";
    if (r.size !== i.length) return "changed";
  } catch (r) {
    let n = v(r);
    if (n === "ENOENT" || n === "ENOTDIR") return "absent";
    return x(`could not look at ${e}: ${r}`), "unknown";
  }
  return (await xte(e, i.length))?.equals(i) ? "same" : "changed";
}
async function kt(e, i, r, n, f, a, s, u, h, w, o = false, d, A = false) {
  let F = $Le(ye().recoveries), y = h?.accessToken ?? (z() && u !== void 0 ? await Uk(u) : Fv());
  if (!y) return x("skip: no oauth token"), _e(n, "no_token", 0);
  let C = y, _, N, I, R = false, O = 0, E = f;
  try {
    let T = e.sha256 === void 0 ? Se : dle;
    if (typeof e.file_size === "number" && e.file_size > T) return _e(n, "too_large", 0);
    let b = Fe(h), M = Gut(e.file_uuid, h);
    if (b !== void 0 && M !== void 0 && M.bearer === et(y) && M.size <= T && (e.sha256 === void 0 || e.sha256 === M.sha256)) {
      let q = await xte(M.path, M.size);
      if (q !== null && et(q) === M.sha256) _ = q, N = M.sha256, I = M.path, n.reusedFileCount++;
      else if (b.get(ne(e.file_uuid)) === M) b.delete(ne(e.file_uuid));
    }
    let D = L3t(), j = ne(e.file_uuid);
    D.refusedEarly?.delete(j);
    let B = _ === void 0 && h === void 0 && d === void 0 ? D.byFileUuid.get(j) : void 0;
    while (B !== void 0) {
      let q = performance.now(), me = Pt(B, q, et(y)), ee = B.settledAt === void 0, pe = B.startedBy === "prefetch", te = await B.bytes, he = performance.now() - q;
      if (O += he, pe && ee) {
        if (n.joinedInFlightCount++, n.slowestJoinWaitMs = Math.max(n.slowestJoinWaitMs, he), B.headersTimedOut) E = Math.max(1, f - 1);
      }
      let ue = B.bearer === et(y), G = te !== null && ue && te.length <= T && (typeof e.sha256 !== "string" || A$n(te, { sha256: e.sha256, file_size: e.file_size }));
      if (G) {
        if (h === void 0) ULe(ye(), F);
        _ = te, R = true;
      } else if (te === null && ee && ue && Ge(B, q)) return _e(n, B.failure ?? "error", B.receivedBytes);
      if (pe && te !== null) {
        if (G) n.prefetchedFileCount++;
        if (me) xt(B, te, { inFlight: ee, passes: G, sameBearer: ue, waitedMs: he });
      }
      let oe = _ === void 0 ? D.byFileUuid.get(j) : void 0;
      B = oe !== B && oe?.startedBy === "message" && oe.bearer === et(y) ? oe : void 0;
    }
    if (_ === void 0) {
      let q = new AbortController(), me = () => q.abort();
      if (d?.addEventListener("abort", me, { once: true }), d?.aborted) me();
      let ee, pe = 0, te = { fileUuid: e.file_uuid, baseUrl: h?.baseUrl, forPrefetch: false, maxBytes: T, token: () => C, admitBytes: (G) => {
        if (pe = G, ee !== void 0) ee.receivedBytes = G;
        return true;
      } }, he = We(E, O, q, n, te).then(async (G) => {
        if (h !== void 0 || !("failure" in G) || G.httpStatus !== 401 || vx() !== void 0) return G;
        let oe = await Dt(C, u, s, q.signal, a, n);
        if (oe === void 0) return G;
        if (C = oe.bearer, F = oe.stamp, ee !== void 0) ee.bearer = et(oe.bearer);
        n.retriedAfter401Count++;
        let Ee = await We(1, 0, q, n, te);
        if (!("failure" in Ee)) n.recoveredFileCount++;
        return Ee;
      }).catch((G) => (l(G), { failure: "error" }));
      if (h === void 0 && d === void 0 && Je().value) ee = qe("message", q, he, et(y)), D.byFileUuid.set(j, ee);
      let ue = await he;
      if (d?.removeEventListener("abort", me), "failure" in ue) return _e(n, ue.failure, pe, ue.httpStatus);
      if (h === void 0) ULe(ye(), F), Evt();
      _ = ue.data;
    }
  } catch (T) {
    return x(`fetch ${e.file_uuid} threw: ${T}`), _e(n, "error", 0);
  }
  if (typeof e.sha256 === "string" && !R && !A$n(_, { sha256: e.sha256, file_size: e.file_size })) return x(`fetch ${e.file_uuid} failed integrity verification`), { failure: "digest_mismatch" };
  let P = { resizeMs: 0, pngPaletteMs: 0, byteBudgetMs: 0 }, K = performance.now(), W = r && e.is_image === true && e.sha256 === void 0 ? await g4s(_, xR, { timings: P }).catch((T) => (x(`inline ${e.file_uuid} threw: ${T}`), null)) : null;
  if (n.slowestInlineImageBuildMs = Math.max(n.slowestInlineImageBuildMs, performance.now() - K), n.slowestInlineImageResizeMs = Math.max(n.slowestInlineImageResizeMs, P.resizeMs), n.slowestInlineImagePngPaletteMs = Math.max(n.slowestInlineImagePngPaletteMs, P.pngPaletteMs), n.slowestInlineImageByteBudgetMs = Math.max(n.slowestInlineImageByteBudgetMs, P.byteBudgetMs), W && B3(_) === "image/png") {
    if (n.inlinedPngSourceCount++, b4s(_)) n.inlinedPngSourceMaybeTransparentCount++;
    if (W.source.type === "base64" && W.source.media_type === "image/jpeg") n.inlinedPngSourceSentAsJpegCount++;
  }
  let le = W ? `image.${bYn[B3(_)]}` : F8e(e.file_name), ge = A ? _$o(e.file_uuid) : (W ? ve().slice(0, 8) : e.file_uuid.slice(0, 8) || ve().slice(0, 8)).replace(/[^a-zA-Z0-9_-]/g, "_"), ae = w ?? bx(), ie = m8n(ge, le), L = Me(ae, ie), fe = V(), re = o && e.sha256 === void 0 && OX() === null && !J(), ce = !o || e.sha256 !== void 0 ? "absent" : I === L ? "same" : re ? await ke(L, _) : "absent";
  if (d?.aborted) return _e(n, "stopped", 0);
  let se = performance.now(), Z, Q, U;
  if (ce === "same") n.unchangedOnDiskCount++;
  else if (ce === "changed" || ce === "unknown") n.keptChangedFileCount++;
  else if (z() && s !== void 0 && _r(fe) && _r(ie) && (w === void 0 || w === bx()) && (OX() !== null || Xbe() === null)) {
    let T = await s.write(je.userConfigDir("uploads", [fe, ie]), _, re ? { mode: 384, precondition: { type: "ifAbsent" } } : { mode: 384 });
    if (re && !T.ok && T.error.code === "AlreadyExists") Q = S("storage_backend");
    else if (!T.ok) Z = Et(T.error), n.lastFailedWrite = { code: rw(Zm(T.error)) ?? c(T.error.code), step: S("storage_backend") };
  } else if (J()) pA("inbound_attachment", L), Z = "refused: this session is diskless and writes no files to this machine's disk", n.lastFailedWrite = { code: S("diskless"), step: S("refused") };
  else {
    let T = S("mkdir");
    try {
      let b = await zut(ae);
      try {
        if (d?.aborted) return _e(n, "stopped", 0);
        T = S("write");
        let M = Me(b.at, ie), D = !re;
        if (re) {
          let j = await DM(M, _, 384);
          try {
            await Ze(j, M), n.linkedFileCount++;
          } catch (B) {
            if (v(B) === "EEXIST") Q = S("link");
            else {
              if (x(`link(2) failed for ${ie} (${B}); looking at the name again, to rename into it only if it is free`), U = await ke(M, _), U === "unknown") throw T = S("look_after_link"), B;
              D = U === "absent", Q = D ? void 0 : S("link");
            }
          } finally {
            await cP(() => nt(j)).catch((B) => {
              x(`the staged name of ${ie} could not be removed: ${B}`), n.stagedNameLeftCount++;
            });
          }
        }
        if (D) {
          if (await Hn(M, _, 384), re) n.renamedAfterLinkRefusedCount++;
        }
      } finally {
        await b.release();
      }
    } catch (b) {
      Z = `${b}`, n.lastFailedWrite = { code: vr(b) ?? S("unknown"), step: T };
    }
  }
  if (Q !== void 0 && Z === void 0) if (U ??= await ke(L, _), U === "same") n.unchangedOnDiskCount++;
  else if (U === "changed" || U === "unknown") n.keptChangedFileCount++;
  else Z = "not saved: something that is not a regular file (a link, a pipe or a folder) has this name and was left as it is, or what had the name was gone when checked again", n.lastFailedWrite = { code: S("EEXIST"), step: Q };
  if (n.slowestWriteMs = Math.max(n.slowestWriteMs, performance.now() - se), Z !== void 0) {
    if (x(`write ${L} failed: ${Z}`), n.failedWriteCount++, W) return n.inlinedImageNotSavedCount++, { imageBlock: W };
    return { failure: "write" };
  }
  let H = performance.now();
  if (N ??= et(_), n.slowestHashAfterWriteMs = Math.max(n.slowestHashAfterWriteMs, performance.now() - H), i && e.sha256 === void 0 && OX() === null) try {
    qqs(await tt(L), N);
  } catch {
    x(`registration skipped for ${L}`);
  }
  let de = Fe(h);
  if (de !== void 0) {
    if (de.delete(ne(e.file_uuid)), de.size >= st) {
      let T = de.keys().next().value;
      if (T !== void 0) de.delete(T);
    }
    de.set(ne(e.file_uuid), { path: L, size: _.length, sha256: N, bearer: et(C) });
  }
  if (x(`resolved ${e.file_uuid} → ${L} (${_.length} bytes)`), W) return x(`inlined ${e.file_uuid} (${_.length} bytes)`), { imageBlock: W, path: L };
  if (r && e.is_image === true && e.sha256 === void 0) return x(`inline ${e.file_uuid} fell back to @path ref`), { path: L, inlineFellBack: true };
  return { path: L };
}
var Ct = { download: "it could not be downloaded", digest_mismatch: "it failed integrity verification", write: "it could not be written to the uploads directory" };
async function Okr(e, i, r, n, f, a, s, u, h, w, o = true, d = false) {
  if (e.length === 0) return { prefix: "", imageBlocks: [], inlinedImagePaths: [], deliveredCount: 0 };
  x(`resolving ${e.length} attachment(s)`);
  let A = L3t().refusedEarly;
  if (A !== void 0 && A.size > 0) for (let b of e) A.delete(ne(b.file_uuid));
  let F = performance.now(), y = { slowestTimeToHeadersMs: 0, slowestDownloadMs: 0, slowestJoinWaitMs: 0, slowestInlineImageBuildMs: 0, slowestInlineImageResizeMs: 0, slowestInlineImagePngPaletteMs: 0, slowestInlineImageByteBudgetMs: 0, slowestWriteMs: 0, slowestHashAfterWriteMs: 0, downloadedBytes: 0, downloadTryCount: 0, recoveredFileCount: 0, retriedAfter401Count: 0, slowest401RefreshWaitMs: 0, failedWriteCount: 0, inlinedImageNotSavedCount: 0, unchangedOnDiskCount: 0, keptChangedFileCount: 0, linkedFileCount: 0, renamedAfterLinkRefusedCount: 0, stagedNameLeftCount: 0, reusedFileCount: 0, prefetchedFileCount: 0, joinedInFlightCount: 0, inlinedPngSourceCount: 0, inlinedPngSourceMaybeTransparentCount: 0, inlinedPngSourceSentAsJpegCount: 0, failedDownloads: {} }, C = e.filter((b) => typeof b.sha256 === "string"), _ = Ye(e);
  if (!(a?.accessToken ?? (z() && f !== void 0 ? await Uk(f) : Fv()))) {
    x("skip: no oauth token");
    let b = { ...Le(e.slice(0, _), 0, 0, y, F), ...Ne(h, u) };
    p("bridge_attachment_resolve", "no_token", b), Y("warn", "bridge_attachment_download_timing", { outcome: "no_token", should_query: s, ...b });
    let M = tBe(e.filter((D) => typeof D.sha256 !== "string"), "no_token");
    if (C.length > 0) {
      let D = C.length - Qte, j = D > 0 ? C.slice(0, Qte) : C;
      Mkr("bridge", j.length, 0);
      let B = D > 0 ? " " + T$n(D) : "";
      return { prefix: j.map((me) => C$n(me.file_name, "it could not be downloaded (not signed in)")).join(" ") + B + (M.length > 0 ? " " + Ie(M.length, M.length) : "") + " ", imageBlocks: [], inlinedImagePaths: [], deliveredCount: 0, ...M.length > 0 && { missingFiles: M } };
    }
    return { prefix: Ie(M.length, M.length) + " ", imageBlocks: [], inlinedImagePaths: [], deliveredCount: 0, missingFiles: M };
  }
  let I = [], R = e, O = R.length > _;
  if (O) {
    if (x(`dropping ${R.length - _} attachment(s) over the ${_} cap`), C.length > 0) I.push(T$n(R.length - _));
    R = R.slice(0, _);
  }
  let E = i && r, P = a === void 0 && w === void 0, K = P && R.length > Pe, W = Ra(Pe, (b) => kt(b, i, E, y, s === false ? Be.noTurn : Be.startsTurn, o, n, f, a, u, s === false, w, d).finally(() => {
    if (K) Oe(b);
  })), le;
  try {
    le = await Promise.all(R.map((b) => W(b)));
  } finally {
    for (let b of P ? R : []) Oe(b);
  }
  let ge = [], ae = [], ie = [], L = 0, fe = 0, re = 0, ce = false, se = [], Z = [];
  if (le.forEach((b, M) => {
    let D = R[M], j = typeof D.sha256 === "string";
    if (j) fe++;
    if ("path" in b) Z.push({ file_uuid: D.file_uuid, path: b.path, inlined: "imageBlock" in b });
    if ("imageBlock" in b) {
      if (ae.push(b.imageBlock), "path" in b) ie.push(b.path);
    } else if ("path" in b) {
      if (ge.push(`@"${b.path}"`), b.inlineFellBack) L++;
      if (j) re++;
    } else {
      if (b.failure === "digest_mismatch") ce = true;
      if (j) I.push(C$n(D.file_name, Ct[b.failure]));
      else se.push({ file_uuid: D.file_uuid, reason: b.failure === "write" ? "write" : b.cause ?? "download" });
    }
  }), se.length > 0) {
    let b = C.length === 0 ? e.slice(_) : [];
    se.push(...tBe(b, "count_cap")), I.push(Ie(se.length, R.length - fe + b.length));
  }
  if (fe > 0) Mkr("bridge", fe, re);
  let Q = ge.length + ae.length, U = { ...Le(R, Q, ae.length, y, F), ...Ne(h, u) }, H;
  if (Q === 0) H = ce ? "digest_mismatch" : "all_failed", m("bridge_attachment_resolve", H, U);
  else if (Q < R.length) H = ce ? "digest_mismatch" : "partial_failed", p("bridge_attachment_resolve", H, U);
  else if (O) H = "over_count_cap", p("bridge_attachment_resolve", H, U);
  else if (y.inlinedImageNotSavedCount > 0) H = "inlined_image_not_saved", p("bridge_attachment_resolve", H, U);
  else H = "ok", g("bridge_attachment_resolve", U);
  let de = H !== "ok" && H !== "over_count_cap" || y.failedWriteCount > 0;
  if (Y(de ? "warn" : "info", "bridge_attachment_download_timing", { outcome: H, should_query: s, ...U }), L > 0) p("bridge_attachment_inline_image", "fallback_path_ref");
  else if (ae.length > 0) g("bridge_attachment_inline_image");
  let T = [...ge, ...I];
  return { prefix: T.length > 0 ? T.join(" ") + " " : "", imageBlocks: ae, inlinedImagePaths: y.inlinedImageNotSavedCount > 0 ? [] : ie, deliveredCount: Q, ...se.length > 0 && { missingFiles: se }, ...Z.length > 0 && { writtenFiles: Z }, timing: { timeToHeadersMs: Math.round(y.slowestTimeToHeadersMs), downloadMs: Math.round(y.slowestDownloadMs), joinWaitMs: Math.round(y.slowestJoinWaitMs), imageBuildMs: Math.round(y.slowestInlineImageBuildMs), approxDownloadedBytes: Number(y.downloadedBytes.toPrecision(2)), prefetchedFileCount: y.prefetchedFileCount } };
}
function ze(e, i) {
  if (!i) return e;
  if (typeof e === "string") return Hkr(e, i);
  let r = e.findLastIndex((n) => n.type === "text");
  if (r !== -1) {
    let n = e[r];
    if (n.type === "text") return [...e.slice(0, r), { ...n, text: Hkr(n.text, i) }, ...e.slice(r + 1)];
  }
  return [...e, { type: "text", text: i.trimEnd() }];
}
function It(e, i) {
  if (i.length === 0) return e;
  let r = typeof e === "string" ? e.trim() === "" ? [] : [{ type: "text", text: e }] : mUo(e);
  return [...i, ...r];
}
function tBe(e, i) {
  return e.map((r) => ({ file_uuid: r.file_uuid, reason: i }));
}
function d0t(e, i, r, n = false) {
  let f = wx(e);
  if (f.length === 0 || f.length > Ye(f)) return;
  let a = [];
  for (let u of f) {
    let h = n ? _$o(u.file_uuid) : u.file_uuid.slice(0, 8).replace(/[^a-zA-Z0-9_-]/g, "_");
    if (h === "") return;
    let w = m8n(h, F8e(u.file_name));
    a.push(Me(r, w));
  }
  let s = a.map((u) => `@"${u}"`);
  return { content: ze(i ?? "", s.join(" ") + " "), refs: s, paths: a };
}
async function BZt(e, i, r, n, f, a, s, u = true, h = false) {
  let w = i ?? "", o = wx(e);
  if (o.length === 0) return { content: w, inlinedImagePaths: [] };
  let d = r && !(typeof w === "string" && s_e(w)), { prefix: A, imageBlocks: F, deliveredCount: y, ...C } = await Okr(o, r, d, n, f, void 0, Xpn(e), a, s, void 0, u, h);
  if (y === 0 && typeof w === "string" && w.trim() === "") return { content: A.trimEnd(), ...C };
  return { content: It(ze(w, A), F), ...C };
}
function Oe(e) {
  let i = L3t(), r = ne(e.file_uuid), n = i.byFileUuid.get(r);
  if (n?.taken !== void 0 && n.settledAt !== void 0) i.byFileUuid.delete(r);
}
function Ye(e) {
  return e.every((i) => i.sha256 === void 0) ? at : Qte;
}
function Tyo(e) {
  if (!e || k("tengu_amber_ferry", false) !== true) return "off";
  return k("tengu_slate_marten", false) === true ? "on_with_pdfs" : "on";
}
function Ne(e, i) {
  return e === void 0 ? {} : { ahead_of_files_flag_on: e === "off" ? 0 : 1, ahead_of_files_on_with_pdfs: e === "on_with_pdfs" ? 1 : 0, queued_ahead_of_files: i === void 0 ? 0 : 1 };
}
function Le(e, i, r, n, f) {
  return { file_count: e.length, resolved_count: i, download_try_count: n.downloadTryCount, recovered_file_count: n.recoveredFileCount, reused_file_count: n.reusedFileCount, prefetched_file_count: n.prefetchedFileCount, joined_in_flight_count: n.joinedInFlightCount, inlined_image_count: r, ...l0t(e), inlined_png_source_count: n.inlinedPngSourceCount, inlined_png_source_maybe_transparent_count: n.inlinedPngSourceMaybeTransparentCount, inlined_png_source_sent_as_jpeg_count: n.inlinedPngSourceSentAsJpegCount, approx_downloaded_bytes: Number(n.downloadedBytes.toPrecision(2)), duration_ms: Math.round(performance.now() - f), slowest_time_to_headers_ms: Math.round(n.slowestTimeToHeadersMs), slowest_download_ms: Math.round(n.slowestDownloadMs), slowest_join_wait_ms: Math.round(n.slowestJoinWaitMs), slowest_inline_image_build_ms: Math.round(n.slowestInlineImageBuildMs), slowest_inline_image_resize_ms: Math.round(n.slowestInlineImageResizeMs), slowest_inline_image_png_palette_ms: Math.round(n.slowestInlineImagePngPaletteMs), slowest_inline_image_byte_budget_ms: Math.round(n.slowestInlineImageByteBudgetMs), slowest_write_ms: Math.round(n.slowestWriteMs), slowest_hash_after_write_ms: Math.round(n.slowestHashAfterWriteMs), ...n.failedDownloads, ...n.retriedAfter401Count > 0 && { retried_after_401_count: n.retriedAfter401Count }, ...n.slowest401RefreshWaitMs > 0 && { slowest_401_refresh_wait_ms: Math.round(n.slowest401RefreshWaitMs) }, ...n.failedWriteCount > 0 && { failed_write_count: n.failedWriteCount }, ...n.inlinedImageNotSavedCount > 0 && { inlined_image_not_saved_count: n.inlinedImageNotSavedCount }, ...n.lastFailedWrite !== void 0 && { last_failed_write_code: n.lastFailedWrite.code, last_failed_write_step: n.lastFailedWrite.step }, ...n.unchangedOnDiskCount > 0 && { unchanged_on_disk_count: n.unchangedOnDiskCount }, ...n.keptChangedFileCount > 0 && { kept_changed_file_count: n.keptChangedFileCount }, ...n.linkedFileCount > 0 && { linked_file_count: n.linkedFileCount }, ...n.renamedAfterLinkRefusedCount > 0 && { renamed_after_link_refused_count: n.renamedAfterLinkRefusedCount }, ...n.stagedNameLeftCount > 0 && { staged_name_left_count: n.stagedNameLeftCount } };
}
var Mt = /* @__PURE__ */ new Set([404, 410]);
function _e(e, i, r, n) {
  let f = e.failedDownloads, a = pt[i];
  if (f[a] = (f[a] ?? 0) + 1, r > 0) f.partway_failed_count = (f.partway_failed_count ?? 0) + 1;
  if (n !== void 0) f.last_failed_http_status = n;
  if (i === "too_large" || i === "no_token") return { failure: "download", cause: i };
  return { failure: "download", ...i === "http_status" && Mt.has(n) && { cause: "not_found" } };
}
function Fe(e) {
  return e === void 0 && OX() === null ? Xts() : void 0;
}
function Gut(e, i) {
  let r = Fe(i)?.get(ne(e));
  return r !== void 0 && it(r.path) === bx() ? r : void 0;
}
function ne(e) {
  return Vt(e) === null ? e : e.toLowerCase();
}
function Je() {
  return kn("tengu_dapper_brooks", false);
}
function Xe() {
  return k("tengu_twinkling_hoare", false) === true;
}
function Ft() {
  let e = k("tengu_hazel_lantern", 0), i = Il(), r = i ? ut : xe.max;
  if (typeof e !== "number" || !(e > 0)) return { ms: r, repeatRenews: false };
  return { ms: Math.min(r, Math.max(xe.min, Math.round(e * 1e3))), repeatRenews: !i };
}
function Ayo(e, { issuedAt: i, credentials: r, onlyThese: n = false }) {
  if (St()) return 0;
  let f = Je();
  if (!f.value) return nve("bridge_attachment_prefetch_flag_off", { file_count: e.length, flag_served: bt[f.source] }), 0;
  let a = L3t(), s = Ft(), u = { file_count: e.length, started_count: 0, already_present_count: 0, held_limit_count: 0, start_budget_count: 0, skipped_count: 0 }, h = 0, w = 0, o = 0, d = 0;
  if (a.earlyReadsStopped === true && !Xe()) a.earlyReadsStopped = void 0, a.earlyReadsStopReported = void 0;
  let A = a.earlyReadsStopped === true, F = /* @__PURE__ */ new Set(), y = Date.now() - i, C = y > Math.max(lt * s.ms, $e), _ = C ? [] : e.slice(0, Qte);
  if (u.skipped_count = e.length - _.length, n && !C) {
    let O = new Set(e.map((E) => ne(E.file_uuid)));
    for (let [E, P] of a.byFileUuid) if (!O.has(E) && P.release !== void 0 && !P.taken) P.release("dropped_unused"), w++;
  }
  for (let O of _) {
    let E = ne(O.file_uuid);
    if (Vt(O.file_uuid) === null || O.file_size !== void 0 && O.file_size > Se) {
      u.skipped_count++;
      continue;
    }
    let P = a.refusedEarly?.get(E);
    if (P !== void 0) {
      if (performance.now() - P < _t) {
        o++;
        continue;
      }
      a.refusedEarly?.delete(E);
    }
    let K = a.byFileUuid.get(E);
    if (K !== void 0 || Gut(O.file_uuid, void 0) !== void 0) {
      if (u.already_present_count++, s.repeatRenews && K?.release !== void 0 && !K.taken && !F.has(E)) we(K, s.ms), F.add(E), h++;
      continue;
    }
    if (A) {
      d++;
      continue;
    }
    let W = Tt(O.file_size), le = Rt(a, W);
    if (le === "held_limit") u.held_limit_count++;
    else if (le === "start_budget") u.start_budget_count++;
    else Bt(a, E, O.file_uuid, W, r, s.ms, s.repeatRenews), F.add(E), u.started_count++;
  }
  let N = Te(a), I = { ...u, age_ms: Math.round(y), held_file_count: N.count, approx_held_bytes: Number(N.bytes.toPrecision(2)), ...s.repeatRenews && { hold_ms: s.ms, refreshed_count: h, renewed_since_last_report: a.renewalsNotYetReported ?? 0 }, ...n && { only_these: true, dropped_count: w }, ...o > 0 && { refused_before_count: o }, ...d > 0 && { early_reads_stopped_count: d } }, R = a.earlyReadsStopReported === true ? d : 0;
  if (h + o + R > 0 && h === u.already_present_count && u.file_count === h + o + R && w === 0) return a.renewalsNotYetReported = (a.renewalsNotYetReported ?? 0) + h, 0;
  if (a.renewalsNotYetReported = 0, d > 0) a.earlyReadsStopReported = true;
  if (C) p("bridge_attachment_prefetch", "stale", I);
  else if (d > 0) p("bridge_attachment_prefetch", "mark_unseen_stop", I);
  else if (u.held_limit_count > 0) p("bridge_attachment_prefetch", "held_limit", I);
  else if (u.start_budget_count > 0) p("bridge_attachment_prefetch", "start_budget", I);
  else g("bridge_attachment_prefetch", I);
  return nve(u.started_count > 0 ? "bridge_attachment_prefetch_started" : "bridge_attachment_prefetch_not_started", { ...I, stale: C }), u.started_count;
}
function nve(e, i) {
  Y("info", e, i);
}
function Tt(e) {
  return e !== void 0 && e > 0 ? e : 0;
}
function Rt(e, i) {
  let r = performance.now(), n = e.recentPrefetchStarts;
  while (n.length > 0 && r - n[0] >= gt) n.shift();
  let f = Te(e);
  if (f.count >= dt || f.bytes + i > He()) return "held_limit";
  return n.length < ht ? "ok" : "start_budget";
}
function Te(e) {
  let i = 0, r = 0;
  for (let n of e.byFileUuid.values()) if (n.startedBy === "prefetch" && !n.taken) i++, r += n.settledAt === void 0 ? Math.max(n.receivedBytes, n.statedBytes) : n.receivedBytes;
  return { count: i, bytes: r };
}
function vt(e) {
  e.release?.("expired_unused");
}
function we(e, i) {
  clearTimeout(e.expiry), e.expiry = setTimeout(vt.bind(void 0, e), i), e.expiry.unref();
}
function Bt(e, i, r, n, f, a, s) {
  let u = new AbortController(), h = false, w = Ke({ fileUuid: r, baseUrl: void 0, forPrefetch: true, maxBytes: Se, quietLimitMs: Ae, token: async () => {
    let d = await Uk(f);
    if (d) o.bearer = et(d);
    return d;
  }, abort: u, totals: void 0, onServed: (d) => {
    let A = !d && Xe();
    if (A) e.earlyReadsStopped = true;
    nve("bridge_attachment_prefetch_served", { mark_seen: d, ...!d && { stops_early_reads: A } });
  }, admitBytes: (d) => {
    if (o.receivedBytes = d, o.taken || Te(e).bytes <= He()) return true;
    return o.receivedBytes = 0, o.statedBytes = 0, false;
  } }), o = qe("prefetch", u, w, void 0);
  o.statedBytes = n, o.release = (d) => {
    if (e.byFileUuid.get(i) !== o || o.taken) return;
    if (d === "expired_unused" && s && o.settledAt === void 0) {
      we(o, a);
      return;
    }
    h = true, clearTimeout(o.expiry), e.byFileUuid.delete(i), u.abort();
    let A = { download_finished: o.settledAt !== void 0, approx_bytes: Number(o.receivedBytes.toPrecision(2)), ...d === "dropped_unused" && { held_for_ms: Math.round(performance.now() - o.startedAt) } };
    p("bridge_attachment_prefetch_download", d, A), nve(`bridge_attachment_prefetch_${d}`, A);
  }, we(o, a), e.recentPrefetchStarts.push(o.startedAt), e.byFileUuid.set(i, o), w.then((d) => {
    if (!("failure" in d)) {
      if (s && e.byFileUuid.get(i) === o && !o.taken) we(o, a);
      return;
    }
    if (e.byFileUuid.get(i) === o && !o.taken) e.byFileUuid.delete(i), clearTimeout(o.expiry);
    let A = d.failure === "http_status" && d.httpStatus === ct;
    if (A && !o.taken) {
      let I = e.refusedEarly ??= /* @__PURE__ */ new Map();
      if (I.delete(i), I.size >= mt) I.delete(I.keys().next().value ?? i);
      I.set(i, performance.now());
    }
    if (h) return;
    let F = { duration_ms: Math.round(performance.now() - o.startedAt), ...d.httpStatus !== void 0 && { http_status: d.httpStatus } }, y = Ve(d), C = y ? "no_answer" : d.failure;
    if (A) {
      p("bridge_attachment_prefetch_download", "refused_early", F), nve("bridge_attachment_prefetch_failed", { ...F, failure_code: yt });
      return;
    }
    let _ = o.taken, N = _?.by === "joiner" && _.bearer === o.bearer && Ge(o, _.at);
    if (N) m("bridge_attachment_prefetch_download", C, F);
    else p("bridge_attachment_prefetch_download", C, F);
    nve(N ? "bridge_attachment_prefetch_failed_file_lost" : "bridge_attachment_prefetch_failed", { ...F, failure_code: y ? At : wt[d.failure] });
  }).catch(l);
}
function qe(e, i, r, n) {
  let f = { startedBy: e, bytes: r.then((a) => {
    if (f.settledAt = performance.now(), "failure" in a) return f.failure = a.failure, f.headersTimedOut = Ve(a), null;
    return a.data;
  }), startedAt: performance.now(), settledAt: void 0, failure: void 0, headersTimedOut: false, receivedBytes: 0, statedBytes: 0, abort: i, taken: e === "message" ? { by: "starter" } : void 0, expiry: void 0, bearer: n };
  return f;
}
function Ge(e, i) {
  let r = (e.settledAt ?? performance.now()) - i;
  return e.startedBy !== "prefetch" || e.failure === "too_large" || e.receivedBytes > 0 && e.failure !== "stalled" && r > Ue;
}
function Pt(e, i, r) {
  if (e.taken) return false;
  return e.taken = { by: "joiner", at: i, bearer: r }, clearTimeout(e.expiry), true;
}
function xt(e, i, { inFlight: r, passes: n, sameBearer: f, waitedMs: a }) {
  let s = { in_flight: r, waited_ms: Math.round(a), download_ms: Math.round((e.settledAt ?? performance.now()) - e.startedAt), approx_bytes: Number(i.length.toPrecision(2)) };
  if (n) g("bridge_attachment_prefetch_download", s), nve(r ? "bridge_attachment_prefetch_used_joined" : "bridge_attachment_prefetch_used_ready", s);
  else p("bridge_attachment_prefetch_download", f ? "attestation_mismatch" : "bearer_changed", s), nve(f ? "bridge_attachment_prefetch_attestation_mismatch" : "bridge_attachment_prefetch_bearer_changed", s);
}
async function We(e, i, r, n, f) {
  let a = performance.now() - i + Ue;
  for (let s = 0; ; s++) {
    let u = new AbortController(), h = () => u.abort();
    if (r.signal.addEventListener("abort", h, { once: true }), r.signal.aborted) u.abort();
    n.downloadTryCount++, f.admitBytes(0);
    let w = s + 1 < e && performance.now() + Ae + be <= a, o = await Ke({ ...f, totals: n, abort: u, quietLimitMs: w ? Ae : rt });
    if (r.signal.removeEventListener("abort", h), !("failure" in o)) {
      if (s > 0) n.recoveredFileCount++;
      return o;
    }
    let d = o.httpStatus ?? 0, A = o.failure === "stalled" || o.failure === "error" && o.final !== true || o.failure === "http_status" && (d >= 500 || d === 408 || d === 429), F = performance.now(), y = a - F, C = Math.min(zI({ baseMs: ot, attempt: s, floorMs: be }), Math.max(be, y)), _ = w && o.failure === "stalled";
    if (A && s + 1 < e && (_ || y >= be)) {
      if (await X(C, r.signal), !r.signal.aborted) continue;
    }
    return o;
  }
}
function ye() {
  let e = L3t();
  return e.signInRefresh ??= { attempted: false, recoveries: { begun: 0, running: 0 } }, e.signInRefresh;
}
async function Dt(e, i, r, n, f, a) {
  let s = ye(), u = new AbortController(), h = X(Ae, AbortSignal.any([n, u.signal])).then(() => {
    return;
  });
  try {
    let w = await Promise.race([Uk(i).catch(() => {
      return;
    }), h]);
    if (w === e) {
      let o = s.attempted && s.recoveries.running === 0;
      if (!s.attempted) {
        s.attempted = true;
        let A = false;
        s.run = h6t(s, () => Gb(e, i, r, { onForcedRefreshOutcome: (F) => {
          if (sSn.has(F)) s.attempted = false;
          else A = true;
        } })).then(async () => {
          if (!A && await Uk(i) !== e) s.attempted = false;
        }).catch(l);
      }
      if (!f) {
        if (!(await Promise.race([al(i).catch(() => null), h]))?.refreshToken) return;
      }
      let d = performance.now();
      w = await Promise.race([(s.run ?? Promise.resolve()).then(() => o ? xue(i) : void 0).then(() => Uk(i)).catch(() => {
        return;
      }), h]), a.slowest401RefreshWaitMs = Math.max(a.slowest401RefreshWaitMs, performance.now() - d);
    }
    return w && w !== e && !n.aborted ? { bearer: w, stamp: $Le(s.recoveries) } : void 0;
  } finally {
    u.abort();
  }
}
async function Ke({ fileUuid: e, baseUrl: i, forPrefetch: r, maxBytes: n, token: f, abort: a, quietLimitMs: s, totals: u, onServed: h, admitBytes: w }) {
  let o = r ? "of a prefetched file" : e, d = false, A = false, F = () => {
    d = true, a.abort();
  }, y = setTimeout(F, s), C = performance.now();
  try {
    let _ = await Promise.race([f(), Ot(a.signal)]);
    if (a.signal.aborted) return d ? Ce(A) : { failure: "stopped" };
    if (!_) return { failure: "no_token" };
    let N;
    try {
      N = `${i ?? _F()}/api/oauth/files/${encodeURIComponent(e)}/content`;
    } catch (P) {
      return x(`fetch ${o} has no URL: ${r ? P instanceof Error ? P.name : "a non-Error" : P}`), { failure: "error", final: true };
    }
    let I = await fetch(N, { headers: { Authorization: `Bearer ${_}`, "User-Agent": Hs(), ...r && { [ft]: "1" } }, ...r && { cache: "no-store" }, signal: a.signal, ...oa({ url: N }) });
    if (A = true, clearTimeout(y), y = setTimeout(F, s), u !== void 0) u.slowestTimeToHeadersMs = Math.max(u.slowestTimeToHeadersMs, performance.now() - C);
    if (I.status !== 200) return x(`fetch ${o} failed: status=${I.status}`), await T6(I), d ? Ce(A) : { failure: "http_status", httpStatus: I.status };
    h?.(I.headers.get(De.name)?.trim() === De.value);
    let R = I.body?.getReader(), O = [], E = 0;
    while (R !== void 0) {
      let { done: P, value: K } = await R.read();
      if (P) break;
      if (y.refresh(), E += K.byteLength, E > n) return x(`fetch ${o} over size cap (${E} bytes so far)`), a.abort(), { failure: "too_large" };
      if (!w(E)) return x(`fetch ${o} stopped: unused prefetched files would exceed their limit in memory`), a.abort(), { failure: "held_limit" };
      O.push(K);
    }
    if (u !== void 0) u.downloadedBytes += E;
    return { data: Buffer.concat(O, E) };
  } catch (_) {
    return x(`fetch ${o} threw: ${r ? _ instanceof Error ? _.name : "a non-Error" : _}`), d ? Ce(A) : { failure: a.signal.aborted ? "stopped" : "error" };
  } finally {
    if (clearTimeout(y), u !== void 0) u.slowestDownloadMs = Math.max(u.slowestDownloadMs, performance.now() - C);
  }
}
function Ve(e) {
  return "failure" in e && e.failure === "stalled" && e.beforeHeaders;
}
function Ce(e) {
  return { failure: "stalled", beforeHeaders: !e };
}
function Ot(e) {
  return new Promise((i) => {
    if (e.aborted) {
      i(void 0);
      return;
    }
    e.addEventListener("abort", () => i(void 0), { once: true });
  });
}
function Ie(e, i) {
  return i === 1 ? "[attachment did not arrive]" : e === i ? `[${i} attachments did not arrive]` : `[${e} of ${i} attachments did not arrive]`;
}
export {
  Ayo,
  BZt,
  Cyo,
  Gut,
  Okr,
  Tyo,
  cAs,
  d0t,
  l0t,
  nve,
  tBe
};
