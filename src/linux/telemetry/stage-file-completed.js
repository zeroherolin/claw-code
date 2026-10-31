// linux/telemetry/stage-file-completed.js — Claude Code 2.1.310（linux）模块 chunk-9pjepr8z.js
import { ce } from "../agents/third-party.js";
import { E, ZH, ui } from "./anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { Rc } from "../fs/node-modules.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { i } from "../shared/environment.js";
import { __ } from "../remote/local-agent.js";
import { Get, zet, nGt, xU, uV, Ece, Vre, rgn } from "../shared/project-docs.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { a } from "./chunk-9097a12b.js";
import { g, m, f } from "./chunk-9d6962d2.js";
import { arr, loi, jt } from "../settings/global-config-and-gates.js";
import { Ww, UEn } from "../git/utf-8.js";
import { EU } from "../artifacts/utf-8.js";
import { yIe, _Ie, hct } from "../fs/path-occupied.js";
import { Ca } from "../shared/chunk-34a7f8ba.js";
import { o, T, u } from "../vendor/zod/string-format.js";
import { et } from "../shared/chunk-061dbb8e.js";
import { ve } from "../shared/chunk-fee3c428.js";
import { createWriteStream as we } from "fs";
import { chmod as Ee, lstat as ke, mkdir as Se, readdir as Re, realpath as K, rename as Fe, stat as v, unlink as N } from "fs/promises";
import { Readable as Z } from "stream";
import { pipeline as be } from "stream/promises";
import { posix as Te } from "path";
import { lstat as ye } from "fs/promises";
var Q = 1048576;
async function V(e, t, r) {
  let n;
  try {
    let s = await ye(e);
    if (!s.isFile()) return { replaced: "not_a_file" };
    if (n = { bytes: s.size, ageSeconds: Math.max(0, Math.round((Date.now() - s.mtimeMs) / 1e3)), readOnly: (s.mode & 146) === 0 }, s.size !== r) return { replaced: "different_contents", standing: n };
    if (r > Q) return { replaced: "same_size_not_compared", standing: n };
    let [d, y] = await Promise.all([J(e), J(t)]);
    if (d === null || y === null) return { replaced: "unknown", standing: n };
    return { replaced: d.equals(y) ? "same_contents" : "different_contents", standing: n };
  } catch (s) {
    return E(s) === "ENOENT" ? { replaced: "nothing" } : { replaced: "unknown", standing: n };
  }
}
async function J(e) {
  let t = await UEn(e);
  try {
    let r = await t.stat();
    if (!r.isFile()) return null;
    let n = await Ww(t, Q, r.size);
    return n.overLimit ? null : n.bytes;
  } finally {
    await t.close().catch(() => {
    });
  }
}
var { basename: ie, dirname: x, isAbsolute: le, join: C, normalize: Pe, relative: ue, sep: de } = Te, ee = uV(), te = Ece(), re = Vre(), Oe = 67108864, fe = 3e4, Ae = 16, L = 6e4, De = 500, _e = "STAGE_PARENT_ESCAPE", z = /* @__PURE__ */ new Set(["ENAMETOOLONG", "ENOSPC", "EDQUOT", "EFBIG", "EISDIR", "ENOTDIR", "EINVAL", "ELOOP", "ENOTEMPTY", _e]);
function q(e) {
  return e < 500 && e !== 408 && e !== 429;
}
function sEi(e) {
  return { ok: true, ...e.noop !== void 0 && { noop: e.noop }, ...e.replaced !== void 0 && { replaced: e.replaced } };
}
function j(e, t) {
  let r = ue(e, t);
  if (r === "" || r === "." || r.split(de).includes("..") || le(r)) return null;
  return r;
}
function me(e, t = false) {
  if (e.includes("\0")) throw Error("mount_path contains null bytes");
  if (!le(e)) throw Error("mount_path must be absolute");
  if (e.split(de).includes("..")) throw Error('mount_path must not contain ".." segments');
  let r = Pe(e), n = j(zet, r);
  if (n !== null && __() && EU(t ? "vouched" : i.CLAUDE_CODE_REMOTE_SESSION_ID, i.CLAUDE_CODE_ENVIRONMENT_KIND)) {
    let y = yIe(n);
    if (y !== void 0) throw new H(y);
    return { dest: C(re, n), root: re, readOnly: false, neverReplace: true };
  }
  if (ie(r).startsWith(xU)) throw Error("mount_path names a reserved temporary-file name");
  let s = j(Get, r);
  if (s !== null) return { dest: C(ee, s), root: ee, readOnly: true, neverReplace: false };
  let d = j(nGt, r);
  if (d !== null) {
    if (!EU(t ? "vouched" : i.CLAUDE_CODE_REMOTE_SESSION_ID, i.CLAUDE_CODE_ENVIRONMENT_KIND)) {
      let y = Error("staging under /outputs/ is only supported on managed remote sessions");
      throw y.code = "STAGE_OUTPUTS_UNSUPPORTED_RUNNER", y;
    }
    return { dest: C(te, d), root: te, readOnly: false, neverReplace: false };
  }
  throw Error("mount_path must be under /uploads/ or /outputs/");
}
class H extends Error {
  refusal;
  constructor(e) {
    super("mount_path names a file that may not be written to the home directory");
    this.refusal = e;
  }
}
function iEi(e) {
  let t;
  try {
    t = me(e);
  } catch (r) {
    if (E(r) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER") throw Error("add_directory mount_path must be under /uploads/");
    if (!(r instanceof H)) throw r;
  }
  if (!t?.readOnly) throw Error("add_directory mount_path must be under /uploads/ and not under /uploads/.home/");
  return t.dest;
}
function Me(e, t) {
  if (!rgn(e, t)) throw pe("dest parent escaped stage root");
}
function Ne(e, t) {
  if (Rc(e) || Rc(x(t))) throw pe("a folder on the way to dest has a backslash in its name");
}
function pe(e) {
  let t = Error(e);
  return t.code = _e, t;
}
function hCn(e) {
  return `${xU}${et(ie(e)).slice(0, 16)}.`;
}
async function tat(e, t) {
  let r = Date.now() - 2 * L, n;
  try {
    n = await Re(e);
  } catch {
    return;
  }
  await Promise.all(n.filter((s) => s.startsWith(t)).map(async (s) => {
    let d = C(e, s);
    try {
      if ((await v(d)).mtimeMs < r) await N(d);
    } catch {
    }
  }));
}
function Ce(e, t) {
  return e !== null && e.isFile() && (e.mtimeMs >= t || e.ctimeMs >= t);
}
function ne(e) {
  return typeof e === "object" && e !== null && e.code === "EROFS";
}
function B(e, t) {
  let { kind: r, status: n } = ui(t);
  return { kind: r, status: n, message: `${e} failed: ${r}${n ? ` ${n}` : ""}`, ...r === "http" && n !== void 0 && q(n) && { permanent: true } };
}
async function aEi(e, t, r = "off", n) {
  if (t === void 0 && !i.CLAUDE_CODE_REMOTE_SESSION_ID) return { ok: false, error: "CLAUDE_CODE_REMOTE_SESSION_ID unset", permanent: true };
  if (t !== void 0 && e.filestore_path) return { ok: false, error: "synced documents are not staged here" };
  if (e.filestore_path) {
    if (i.CLAUDE_CODE_ENVIRONMENT_KIND !== void 0) return m("ccr_synced_file_stage", "unsupported_runner_kind"), a("tengu_stage_file_completed", { ok: false, synced_unsupported_runner_kind: true, duration_ms: 0 }), { ok: false, error: "synced-file staging not supported on this runner kind" };
    let { stageSyncedFile: h, SYNCED_FILE_ROOT: c } = await import("../shared/drain-synced-files.js");
    return h({ mount_path: e.mount_path, filestore_path: e.filestore_path, content_sha256: e.content_sha256, expected_local_sha256: e.expected_local_sha256 }, Cmi, c);
  }
  let s;
  try {
    s = me(e.mount_path, t !== void 0);
  } catch (_) {
    if (E(_) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER") m("ccr_stage_file_outputs", "unsupported_runner_kind"), a("tengu_stage_file_completed", { ok: false, outputs_unsupported_runner_kind: true, duration_ms: 0 });
    if (_ instanceof H) return O("refused_name", { refusal: _.refusal }), { ok: true, noop: "refused_name" };
    return { ok: false, error: _ instanceof Error ? _.message : String(_), permanent: true };
  }
  if (s.neverReplace && r === "off") return O("home_files_off", {}), { ok: true, noop: "home_files_off" };
  if (s.neverReplace && e.resync !== void 0) return O("resent_announcement", {}), { ok: true, noop: "resent_announcement" };
  if (s.neverReplace && e.force !== false) return O("unchecked_announcement", {}), { ok: true, noop: "unchecked_announcement" };
  if (s.neverReplace && r === "not_loaded") return O("flag_not_loaded", {}), { ok: false, error: "the flag for home files has not loaded" };
  let d = s.readOnly ? {} : { outputPath: s.dest };
  if (!e.force && !s.neverReplace) try {
    if ((await v(s.dest)).isFile()) return Y("debug", "stage_file_noop_already_present", {}), a("tengu_stage_file_completed", { ok: true, noop_already_present: true, duration_ms: 0 }), { ok: true, noop: "already_present", ...d };
  } catch {
  }
  let y = Date.now();
  return xe(e.mount_path, s, y, t, je(e, n));
}
var oe = ve(/* @__PURE__ */ new Map(), (e) => e.clear());
function xe(e, t, r, n, s) {
  let d = oe.get(t.root);
  if (d === void 0) d = Ca(Ae, Ue), oe.set(t.root, d);
  return d(e, t, r, n, s);
}
function Ue(...e) {
  let [t, r, n, s] = e;
  return r.neverReplace ? Le(t, r, n, s) : Ie(...e);
}
async function Ie(e, { dest: t, root: r, readOnly: n }, s, d, y) {
  let _ = performance.now(), h = Math.max(0, Date.now() - s), c = () => Math.round(performance.now() - _), k = y !== void 0, S = n && !k && !i.CLAUDE_STAGE_FILE_ROOT, R = k ? { in_place: true } : {}, l = hCn(t), w = C(x(t), `${l}${Date.now()}.${Math.random().toString(36).slice(2)}`);
  try {
    Ne(r, t), await Se(x(t), { recursive: true });
    let b = await K(r), A = await K(x(t));
    Me(b, A), await ke(t).catch((W) => {
      if (E(W) === "ENAMETOOLONG") throw W;
    }), await tat(x(t), l);
  } catch (b) {
    let A = typeof b === "object" && b !== null && "code" in b ? String(b.code) : "unknown";
    if (S && ne(b)) return a("tengu_stage_file_completed", { ok: true, noop: true, duration_ms: c(), queued_ms: h, bytes: 0 }), Y("debug", "stage_file_noop_readonly_mount", { duration_ms: c() }), { ok: true, noop: "readonly_mount" };
    if (a("tengu_stage_file_completed", { ok: false, duration_ms: c(), queued_ms: h, ...R }), Y("warn", "stage_file_mkdir_failed", { code: A, duration_ms: c(), queued_ms: h }), !n) m("ccr_stage_file_outputs", "mkdir_failed");
    return { ok: false, error: `mkdir failed: ${A}`, ...z.has(A) && { permanent: true } };
  }
  let F = await G(e, w, d, y);
  if (!F.ok) {
    if (await N(w).catch(() => {
    }), S && F.errno === "EROFS") return a("tengu_stage_file_completed", { ok: true, noop: true, duration_ms: c(), queued_ms: h, bytes: 0 }), Y("debug", "stage_file_noop_readonly_mount", { duration_ms: c() }), { ok: true, noop: "readonly_mount" };
    if (a("tengu_stage_file_completed", { ok: false, gated: F.gated, duration_ms: c(), queued_ms: h, ...R }), !n) m("ccr_stage_file_outputs", "fetch_failed");
    return { ok: false, error: F.error, ...(F.permanent === true || F.gated === true || F.errno !== void 0 && z.has(F.errno)) && { permanent: true } };
  }
  let P = F.bytes, M = c(), { replaced: D, standing: U } = n ? await V(t, w, P) : {};
  try {
    if (!n) {
      let b = await v(t).catch(() => null);
      if (Ce(b, s)) return await N(w).catch(() => {
      }), a("tengu_stage_file_completed", { ok: true, noop: true, duration_ms: c(), queued_ms: h, bytes: 0, outputs_root: true }), Y("info", "stage_file_noop_newer_local", { duration_ms: c() }), g("ccr_stage_file_outputs"), { ok: true, noop: "newer_local" };
    }
    await Ee(w, n ? 292 : 420), await Fe(w, t);
  } catch (b) {
    if (await N(w).catch(() => {
    }), S && ne(b)) return a("tengu_stage_file_completed", { ok: true, noop: true, fetch_ms: M, duration_ms: c(), queued_ms: h, bytes: 0 }), Y("debug", "stage_file_noop_readonly_mount", { duration_ms: c() }), { ok: true, noop: "readonly_mount" };
    let A = typeof b === "object" && b !== null && "code" in b ? String(b.code) : "unknown";
    if (a("tengu_stage_file_completed", { ok: false, fetch_ms: M, duration_ms: c(), queued_ms: h, bytes: P, ...R }), Y("warn", "stage_file_write_failed", { code: A, duration_ms: c(), queued_ms: h }), !n) m("ccr_stage_file_outputs", "write_failed");
    return { ok: false, error: `write failed: ${A}`, ...z.has(A) && { permanent: true } };
  }
  if (a("tengu_stage_file_completed", { ok: true, fetch_ms: M, duration_ms: c(), queued_ms: h, bytes: P, outputs_root: !n, ...R, replaced: ce(D) }), !n) g("ccr_stage_file_outputs");
  return Y(D === "different_contents" ? "warn" : "info", "stage_file_ok", { bytes: P, fetch_ms: M, duration_ms: c(), queued_ms: h, root: n ? "uploads" : "outputs", ...D !== void 0 && { replaced: D }, ...U !== void 0 && { replaced_bytes: U.bytes, replaced_mtime_age_s: U.ageSeconds, replaced_read_only: U.readOnly } }), { ok: true, ...D !== void 0 && { replaced: D }, ...n ? {} : { outputPath: t } };
}
function O(e, t) {
  let r = e === "flag_not_loaded" || e === "probe_failed" || e === "fetch_failed" || e === "place_failed";
  if (Y(r ? "warn" : "info", "stage_file_home", { outcome: e, ...t }), a("tengu_stage_file_completed", { ok: !r, noop: !r && e !== "placed", home_root: true, bytes: t.bytes ?? 0, duration_ms: t.duration_ms ?? 0, queued_ms: t.queued_ms ?? 0 }), r) m("ccr_stage_file_home", e);
  else if (e === "placed" || e === "already_present") g("ccr_stage_file_home");
  else f("ccr_stage_file_home", e);
}
function ae(e, t, r) {
  switch (e.outcome) {
    case "placed":
      return O(e.outcome, r), { ok: true, outputPath: t };
    case "already_present":
    case "path_occupied":
      return O(e.outcome, r), { ok: true, noop: e.outcome };
    case "refused_name":
      return O(e.outcome, { refusal: e.refusal, ...r }), { ok: true, noop: e.outcome };
  }
}
async function Le(e, { dest: t, root: r }, n, s) {
  let d = performance.now(), y = Math.max(0, Date.now() - n), _ = () => ({ duration_ms: Math.round(performance.now() - d), queued_ms: y }), h = ue(r, t), c = C(r, `${hCn(t)}${Date.now()}.${Math.random().toString(36).slice(2)}`);
  try {
    let k = await _Ie(r, h);
    if (await tat(r, xU), k !== void 0) return ae(k, t, _());
  } catch (k) {
    let S = E(k) ?? "unknown";
    return O("probe_failed", { code: S, ..._() }), { ok: false, error: `mkdir failed: ${S}` };
  }
  try {
    let k = await G(e, c, s);
    if (!k.ok && !k.gated && s === void 0) await N(c).catch(() => {
    }), await X(De), k = await G(e, c, s);
    if (!k.ok) return O("fetch_failed", { code: k.errno, ..._() }), { ok: false, error: k.error };
    return ae(await hct(c, r, h), t, { bytes: k.bytes, ..._() });
  } catch (k) {
    let S = E(k) ?? "unknown";
    return O("place_failed", { code: S, ..._() }), { ok: false, error: `write failed: ${S}` };
  } finally {
    await N(c).catch(() => {
    });
  }
}
var Be = "read failed: credential expired";
function $e(e) {
  let t = false;
  return async () => {
    if (t) return { ok: false, error: Be };
    return t = true, ge(e);
  };
}
function ge(e) {
  let { filestore_jwt: t, filesystem_id: r } = e;
  if (!t || !r) return { ok: false, error: "list returned incomplete credential", permanent: true };
  let n = arr(e.filestore_url);
  if (e.filestore_url && !n) Y("warn", "stage_file_filestore_url_rejected", { reason: loi(e.filestore_url) });
  return { ok: true, cred: { filestoreJwt: t, filesystemId: r, filestoreUrl: n } };
}
async function he(e, t) {
  let r = await Ge(e, t);
  return r.ok ? ge(r.data) : r;
}
var se = "/worker/files", He = "stage_request_id", ze = /^stage-file-inplace-req_[0-9A-Za-z_]{1,72}$/;
function je(e, t) {
  return e.in_place === true && typeof t === "string" && ze.test(t) ? t : void 0;
}
async function Ge(e, t) {
  let r = performance.now(), n = () => Math.round(performance.now() - r);
  try {
    let s = await jt.get(t === void 0 ? se : `${se}?${He}=${encodeURIComponent(t)}`, { auth: "session-jwt", host: "ccr-session", headers: { "anthropic-version": "2023-06-01" }, timeout: fe, signal: e });
    if (!s.ok) return Y("warn", "stage_file_list_gated", { reason: s.reason, duration_ms: n() }), { ok: false, error: `list gated: ${s.reason}`, gated: true, permanent: true };
    if (s.status < 200 || s.status >= 300) return Y("warn", "stage_file_list_failed", { kind: "http", status: s.status, duration_ms: n() }), { ok: false, error: `list failed: http ${s.status}`, status: s.status, ...q(s.status) && { permanent: true } };
    let { filestore_jwt: d, filesystem_id: y, filestore_url: _ } = s.data;
    return { ok: true, data: { filestore_jwt: d, filesystem_id: y, filestore_url: _ } };
  } catch (s) {
    let { kind: d, status: y, message: _, permanent: h } = B("list", s);
    return Y("warn", "stage_file_list_failed", { kind: d, status: y, duration_ms: n() }), { ok: false, error: _, status: y, permanent: h };
  }
}
async function G(e, t, r, n) {
  let s = performance.now(), d = () => Math.round(performance.now() - s), y = r === void 0 ? () => he(void 0, n) : $e(r), _ = await y();
  if (!_.ok) return _;
  let h = _.cred;
  for (let c = 0; c <= 1; c++) {
    let k = new AbortController(), S, R = () => {
      if (S) S.refresh();
      else S = setTimeout((l) => l.abort(Error("readFile stall: no bytes for 60s")), L, k);
    };
    R();
    try {
      let l = await jt.post("/v1/filestore/fs/readFile", { filesystem_id: h.filesystemId, path: e }, { auth: "none", host: "api", baseUrl: h.filestoreUrl, headers: { Authorization: `Bearer ${h.filestoreJwt}` }, responseType: "stream", timeout: 0, signal: k.signal, validateStatus: () => true });
      if (!l.ok) return clearTimeout(S), Y("warn", "stage_file_read_gated", { reason: l.reason, duration_ms: d() }), { ok: false, error: `read gated: ${l.reason}`, gated: true };
      if (l.status === 401 && c === 0) {
        if (clearTimeout(S), l.data instanceof Z) l.data.destroy();
        if (Y("info", "stage_file_read_remint_jwt", { duration_ms: d() }), _ = await y(), !_.ok) return _;
        h = _.cred;
        continue;
      }
      if (l.status < 200 || l.status >= 300) {
        if (clearTimeout(S), l.data instanceof Z) l.data.destroy();
        return Y("warn", "stage_file_read_failed", { kind: "http", status: l.status, duration_ms: d() }), { ok: false, error: `read failed: http ${l.status}`, ...q(l.status) && { permanent: true } };
      }
      let w = Number(l.response?.headers["content-length"] ?? -1);
      l.data.on("data", R), await be(l.data, we(t, { flags: "wx" })), clearTimeout(S);
      let F = await v(t);
      if (w >= 0 && F.size !== w) return Y("warn", "stage_file_read_truncated", { expected: w, got: F.size, duration_ms: d() }), { ok: false, error: `read truncated: got ${F.size} of ${w} bytes` };
      return { ok: true, bytes: F.size };
    } catch (l) {
      clearTimeout(S);
      let w = typeof l === "object" && l !== null && "code" in l ? String(l.code) : void 0;
      if (w && !("isAxiosError" in l)) return Y("warn", "stage_file_write_failed", { code: w, duration_ms: d() }), { ok: false, error: `write failed: ${w}`, errno: w };
      if (k.signal.aborted) return Y("warn", "stage_file_read_stalled", { stall_ms: L, duration_ms: d() }), { ok: false, error: `read stalled: no bytes for ${L}ms` };
      let { kind: F, status: P, message: M, permanent: D } = B("read", l);
      return Y("warn", "stage_file_read_failed", { kind: F, status: P, duration_ms: d() }), { ok: false, error: M, permanent: D };
    }
  }
  throw Error("unreachable: fetchFilestoreToFile retry loop fell through");
}
var qe = 1048576;
async function Ye(e) {
  let t = await he(e);
  if (!t.ok) return t;
  let { filestoreJwt: r, filesystemId: n, filestoreUrl: s } = t.cred, d = { auth: "none", host: "api", baseUrl: s, headers: { Authorization: `Bearer ${r}` }, timeout: fe };
  async function y(h, { maxBytes: c, signal: k } = {}) {
    let S = performance.now(), R = () => Math.round(performance.now() - S);
    try {
      let l = await jt.post("/v1/filestore/fs/readFile", { filesystem_id: n, path: h }, { ...d, responseType: "arraybuffer", maxContentLength: c ?? Oe, signal: k });
      if (!l.ok) return Y("warn", "stage_file_read_gated", { reason: l.reason, duration_ms: R() }), { ok: false, error: `read gated: ${l.reason}`, gated: true };
      if (l.status < 200 || l.status >= 300) return Y("warn", "stage_file_read_failed", { kind: "http", status: l.status, duration_ms: R() }), { ok: false, error: `read failed: http ${l.status}`, status: l.status, ...l.status === 404 && { notFound: true } };
      return { ok: true, buf: Buffer.from(l.data) };
    } catch (l) {
      let { kind: w, status: F, message: P } = B("read", l);
      return Y("warn", "stage_file_read_failed", { kind: w, status: F, duration_ms: R() }), { ok: false, error: P, status: F, ...F === 404 && { notFound: true }, ...ZH(l) && { tooLarge: true } };
    }
  }
  async function _(h, { limit: c, signal: k }) {
    let S = performance.now();
    try {
      let R = await jt.post("/v1/filestore/fs/listDirectory", { filesystem_id: n, path: h, limit: c }, { ...d, maxContentLength: qe, signal: k });
      if (!R.ok) return I("gated", void 0, S), { ok: false, error: `directory listing gated: ${R.reason}`, gated: true };
      if (R.status < 200 || R.status >= 300) return I("http", R.status, S), { ok: false, error: `directory listing failed: http ${R.status}`, status: R.status, ...R.status === 404 && { notFound: true } };
      let l = We().safeParse(R.data);
      if (!l.success) return I("shape", R.status, S), { ok: false, error: "directory listing failed: unexpected answer", status: R.status };
      let w = l.data.entries ?? [], F = w.slice(0, c);
      return { ok: true, files: F.flatMap((P) => P.file?.path ?? []), directories: F.flatMap((P) => P.directory?.path ?? []), more: w.length > c || (l.data.cursor ?? "") !== "" };
    } catch (R) {
      let { kind: l, status: w, message: F } = B("directory listing", R);
      return I(l, w, S), { ok: false, error: F, status: w, ...w === 404 && { notFound: true } };
    }
  }
  return { ok: true, reader: { readBytes: y, listDirectory: _ } };
}
function I(e, t, r) {
  Y(t === 404 ? "info" : "warn", "stage_file_directory_failed", { kind: e, status: t, duration_ms: Math.round(performance.now() - r) });
}
var We = p(() => u({ entries: T(u({ file: u({ path: o() }).optional(), directory: u({ path: o() }).optional() })).optional(), cursor: o().optional() }));
async function Cmi(e, t = {}) {
  let r = await Ye(t.signal);
  return r.ok ? r.reader.readBytes(e, t) : r;
}
export {
  Cmi,
  aEi,
  hCn,
  iEi,
  sEi,
  tat
};
