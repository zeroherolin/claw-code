// linux/artifacts/store-unavailable.129e.js — Claude Code 2.1.310（linux）模块 chunk-frpywcsp.js
import { L } from "../context/not-admin-owned.js";
import { Ye, E, G } from "../telemetry/anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { Wu, _, Gy, odr, Im, jo, ie, t } from "../fs/gitlab-runner-authentication-token.js";
import { re, Ze } from "../shared/chunk-d2c47492.js";
import { Oh } from "../telemetry/service-error-detail-not-plain.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { i } from "../shared/environment.js";
import { Ox, jt } from "../settings/global-config-and-gates.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { _l } from "../mcp/allowed-warning.js";
import { Na } from "../fs/content-encoding.js";
import { s6, OH } from "../fs/ca-certs-load.js";
import { Bg, ar } from "./cobalt-plinth-lovage.js";
import { Z } from "./same-account.js";
import { zft, Kft, pK, _D, Bte, M9e, N1n, BHt, m1, jte, Jae, D9e, _wo, Vft, ROe, rCr, Swo, qtn } from "./cobalt-plinth-comfrey.js";
import { roe, uj, Rwt, xwt, Pwt, ooe } from "../shell/content-scan-transient.js";
import { CEe, qae } from "./cobalt-plinth-samphire.js";
import { itt, Oy, QT, Dce, Qgn } from "../mcp/cobalt-plinth-sedge.js";
import { _9e, oO, wP, g3, k9e, Ttn, Atn, Ctn, Rtn, T9e, xtn, Ptn, $ft } from "./template-instance.js";
import { ALe, kGt, hwt } from "./artifact-share-status.js";
import { iUn } from "./artifact-roster-refresh.js";
import { YL, Yc } from "../shared/chunk-a5f59e6a.js";
import { ge, bn, Go, lr, Tt, Tp } from "../vendor/zod/invalid-return-type.js";
import { et } from "../shared/chunk-061dbb8e.js";
import { closeSync as te, constants as J, fstatSync as pe, lstatSync as j, openSync as be, read as Ae, realpathSync as me } from "fs";
import { extname as ke } from "path";
import { promisify as Se } from "util";
function jZt() {
  return i.CLAUDE_CODE_ARTIFACT_ASSETS ?? (M9e() || (iUn().capabilities?.includes("assets") ?? false));
}
function rCs() {
  if (i.CLAUDE_CODE_ARTIFACT_ASSETS !== void 0) return "env";
  return M9e() ? "agent" : iUn().source;
}
var q = "image/svg+xml", we = 2097152;
function aDt(e) {
  return e === q ? we : YL;
}
var H = /* @__PURE__ */ new Map([[".png", "image/png"], [".jpg", "image/jpeg"], [".jpeg", "image/jpeg"], [".gif", "image/gif"], [".webp", "image/webp"], [".svg", q], [".mp4", "video/mp4"], [".webm", "video/webm"], [".pdf", "application/pdf"], [".woff2", "font/woff2"], [".woff", "font/woff"], [".ttf", "font/ttf"], [".otf", "font/otf"], [".csv", "text/csv"], [".md", "text/markdown"], [".markdown", "text/markdown"], [".json", "application/json"], [".txt", "text/plain"], [".ts", "text/plain"], [".css", "text/css"], [".js", "text/javascript"], [".mjs", "text/javascript"], [".cjs", "text/javascript"]]), oCs = L(H.values()).flatMap((e) => Bkr(e) ?? []), lDt = [...H.keys()].map((e) => e.slice(1)).join(", ");
function oOe(e) {
  return H.get(ke(e).toLowerCase());
}
var ve = /* @__PURE__ */ new Set(["text/csv", "text/markdown", "application/json", "text/plain"]);
function dDt(e) {
  return e !== void 0 && ve.has(e);
}
var C = "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) — retry the upload so it is checked again", ue = "reading where file_path resolves is blocked by a Read permission rule — the upload was not attempted", le = "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking — upload the file by its resolved path, or copy it under the working directory first", WZt = "file_path must name a regular file to upload", GZt = "the file is empty — nothing to upload";
function zZt(e, r) {
  return `too large: ${Math.ceil(Number(e) * 10 / 1024 / 1024) / 10}MB (max ${r / 1024 / 1024}MB)`;
}
var kFn = "file_path is on a volume that reports no usable file identity (some network, FUSE, and virtual-disk mounts), so the approved file cannot be told apart from a replacement — copy it to an ordinary local directory and upload the copy";
function B(e) {
  if (G(e)) return { kind: "missing" };
  let r = E(e);
  return { kind: "error", reason: "read_error", message: `cannot read file_path (${r ?? "unexpected error"})`, errnoCode: r };
}
function Gut(e) {
  return `${e.dev}:${e.ino}:${e.size}:${e.mtimeNs}`;
}
function sCs(e) {
  let r = e.split(":");
  if (r.length !== 4 || !r.every((s) => /^\d+$/.test(s))) return;
  return Number(r[2]);
}
var KZt = "upload_asset reads only local files — file_path names a network path (UNC share, /net automount, or device-style path), reaches one through a link on the way, or has a directory or link on the way that could not be examined; if the file is on a network location, copy it onto a local disk first";
function QW(e) {
  if (_9e(e)) return { kind: "network" };
  let r = Im(ie(), e);
  if (r === Gy) return { kind: "unresolved", error: odr(e) };
  if (r !== void 0 && _9e(r) || oO(e)) return { kind: "network" };
  let s;
  try {
    s = me(e);
  } catch (d) {
    return { kind: "unresolved", error: d };
  }
  return _9e(s) ? { kind: "network" } : { kind: "resolved", real: s };
}
function zut(e) {
  try {
    let r = j(e, { bigint: true });
    return { real: e, identity: Gut(r), ...r.isFile() && r.nlink > 1n && { linked: true } };
  } catch {
    return { real: e, identity: null };
  }
}
function TFn(e, r = QW(e), s = r.kind !== "network" && xe(e)) {
  return dDt(oOe(e)) || r.kind === "resolved" && dDt(oOe(r.real)) || s;
}
function xe(e) {
  return sOe(e).link;
}
function sOe(e) {
  try {
    return { link: j(e).isSymbolicLink(), unreadable: null };
  } catch (r) {
    return { link: true, unreadable: E(r) ?? "unexpected error" };
  }
}
var ce = Se(Ae);
function Tyo(e, r, s, d) {
  let n = r, l = typeof n === "object" && n !== null && typeof n.real === "string" ? { real: n.real, identity: typeof n.identity === "string" && (n.digest === void 0 || typeof n.digest === "string") ? n.identity : null, ...typeof n.digest === "string" && { digest: n.digest } } : void 0, a = QW(e);
  if (a.kind === "network") return { kind: "error", reason: "network", message: KZt };
  if (a.kind === "unresolved") {
    if (l !== void 0 && l.identity !== null) return { kind: "error", reason: "changed", message: C };
    let h = jo(e).slice(1).map(s);
    return h.includes("deny") ? { kind: "error", reason: "read_denied", message: ue } : h.some((b) => b !== "allow") ? { kind: "error", reason: "via_link", message: le } : B(a.error);
  }
  let { real: o } = a, u = o === e ? void 0 : s(o);
  if (u === "deny") return { kind: "error", reason: "read_denied", message: ue };
  if (l !== void 0) {
    if (o !== l.real) return { kind: "error", reason: "changed", message: C };
  } else if (u !== void 0 && u !== "allow") return { kind: "error", reason: "via_link", message: le };
  let w;
  try {
    w = j(o, { bigint: true });
  } catch (h) {
    return l !== void 0 && G(h) ? { kind: "error", reason: "changed", message: C } : B(h);
  }
  if (w.isSymbolicLink()) return { kind: "error", reason: "changed", message: C };
  if (!w.isFile()) return { kind: "error", reason: "not_a_file", message: WZt };
  if (l === void 0 && w.nlink > 1n) return { kind: "error", reason: "hard_link", message: "file_path is one of several hard links to its file, and this approval did not examine that — copy the file to a fresh path under the working directory and upload the copy" };
  let c = J.O_NOFOLLOW | J.O_NONBLOCK, x;
  try {
    x = be(o, J.O_RDONLY | c);
  } catch (h) {
    if (E(h) === "ELOOP") return { kind: "error", reason: "changed", message: C };
    return B(h);
  }
  let R = false;
  try {
    let h = pe(x, { bigint: true });
    if (!h.isFile()) return { kind: "error", reason: "not_a_file", message: WZt };
    if (Wu(h.ino)) return { kind: "error", reason: "no_identity", message: kFn };
    if (Gut(h) !== (l !== void 0 ? l.identity : Gut(w))) return { kind: "error", reason: "changed", message: C };
    {
      let O = null;
      try {
        O = me(`/proc/self/fd/${x}`);
      } catch {
      }
      if (O !== null && O !== o) return { kind: "error", reason: "changed", message: C };
    }
    try {
      let O = QW(e);
      if (O.kind !== "resolved" || O.real !== o) return { kind: "error", reason: "changed", message: C };
      let D = j(o, { bigint: true });
      if (D.dev !== h.dev || D.ino !== h.ino) return { kind: "error", reason: "changed", message: C };
    } catch {
      return { kind: "error", reason: "changed", message: C };
    }
    let b = Number(h.size);
    if (b === 0 || b > d) return { kind: "error", reason: "size", message: b === 0 ? GZt : zZt(b, d), sizeBytes: b };
    return R = true, { kind: "opened", fd: x, size: b, real: o, identity: Gut(h), digest: l?.digest };
  } catch (h) {
    return B(h);
  } finally {
    if (!R) te(x);
  }
}
async function Ayo(e) {
  let { fd: r, size: s, identity: d, digest: n } = e;
  try {
    if (Gut(pe(r, { bigint: true })) !== d) return { kind: "error", reason: "changed", message: C };
    let l = Buffer.allocUnsafe(s), a = 0;
    while (a < s) {
      let { bytesRead: u } = await ce(r, l, a, s - a, a);
      if (u === 0) break;
      a += u;
    }
    let { bytesRead: o } = await ce(r, Buffer.alloc(1), 0, 1, s);
    if (a !== s || o !== 0) return { kind: "error", reason: "changed", message: C };
    if (n !== void 0 && et(l) !== n) return { kind: "error", reason: "changed", message: C };
    return { kind: "ok", bytes: l };
  } catch (l) {
    return B(l);
  } finally {
    te(r);
  }
}
function Cyo(e) {
  try {
    te(e.fd);
  } catch {
  }
}
async function cDt(e, r, s, d) {
  let n = Tyo(e, r, s, d);
  return n.kind === "opened" ? Ayo(n) : n;
}
var Ee = /* @__PURE__ */ new Set(["invalid_request", "too_large", "unsupported_type", "quota_or_state", "rate_limited", "capability_disabled", "store_unavailable", "upstream_error", "credential_rejected", "not_found", "asset_not_found", "not_copyable"]), bme = /^\/?_blob\/[0-9a-f]{32}$/;
function ne(e, r) {
  return r === `_blob/${e}` || r === `/_blob/${e}` ? r : `/_blob/${e}`;
}
var vN = /^[0-9a-f]{64}$/, Re = 50, AFn = 40, Ete = /^[A-Za-z0-9_=-]{1,4096}$/, Ryo = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/, QI = /^[a-z0-9]{1,24}\/[a-z0-9.+-]{1,80}$/, Hae = 10, mD = 25, Sme = 1024, he = p(() => Tt({ opaque_id: ge().regex(Bg), url: ge().optional().catch(void 0), size_bytes: bn().int().nonnegative(), content_type: ge().regex(QI), sha256: ge().regex(vN).optional() })), Te = p(() => Tt({ assets: lr(Tt({ opaque_id: ge().regex(Bg), url: ge().optional().catch(void 0), content_type: ge().regex(QI).max(AFn), size_bytes: bn().int().nonnegative().max(YL), sha256: ge().regex(vN).optional(), created_at: ge().regex(Ryo).max(AFn) })).max(1e3), usage: Tt({ files: bn().int().nonnegative(), bytes: bn().int().nonnegative(), max_files: bn().int().nonnegative(), max_bytes: bn().int().nonnegative() }), next: ge().regex(Ete).or(Tp("")).nullish().transform((e) => e || void 0), cowritten: Tp(true).optional().catch(void 0), outside_writer: Go().optional().catch(void 0) })), Fe = p(() => Tt({ deleted: Go() })), $e = p(() => Tt({ error: Tt({ code: ge(), message: ge().optional() }) })), Oe = p(() => Tt({ error: ge(), reason: ge() })), Ce = 2e4, se = 3e4, Le = 9e4;
function De(e) {
  return `/api/frame/blob/${e}/agent-upload`;
}
function _e(e) {
  return `/api/frame/blob/${e}/agent-list`;
}
function Me(e, r) {
  return `/api/frame/blob/${e}/${r}/agent-delete`;
}
function Pe(e) {
  return `/api/frame/blob/${e}/agent-copy`;
}
function U(e, r) {
  let s = $e().safeParse(r);
  if (s.success) {
    let d = s.data.error.code;
    if (Ee.has(d)) {
      let n = s.data.error.message && ee(s.data.error.message);
      return { code: d, reason: d, ...n && { detail: n } };
    }
    return { code: "upstream_error", reason: "unknown_code" };
  }
  if (e === 403 || e === 503) {
    let d = Oe().safeParse(r);
    if (d.success) return { code: "policy_denied", reason: "policy_denied", detail: ee(d.data.error) };
  }
  if (e === 403) {
    if (typeof r === "string" && r.trim() === "not a writer") return { code: "not_writer", reason: "not_writer" };
    if (typeof r === "string" && /^\s*</.test(r)) return { code: "upstream_error", reason: "http_403_page" };
    return { code: "credential_rejected", reason: "http_403" };
  }
  if (e === 404) return typeof r === "string" && r.trim() === "not found" ? { code: "not_found", reason: "http_404" } : { code: "store_unavailable", reason: "unrouted", detail: "this asset route is not served on this path yet (an older deployment, or a cloud session whose gateway does not relay it) — nothing changed; retry later" };
  if (e === 401) return { code: "upstream_auth", reason: "http_401" };
  if (e === 409) return { code: "quota_or_state", reason: "http_409" };
  if (e === 413) return { code: "too_large", reason: "http_413" };
  if (e === 415) return { code: "unsupported_type", reason: "http_415" };
  if (e === 429) return { code: "rate_limited", reason: "http_429" };
  if (e === 502 || e === 503 || e === 504) return { code: "store_unavailable", reason: `http_${e}` };
  return { code: "upstream_error", reason: `http_${e}` };
}
function ee(e) {
  return re(e.replace(/[\p{Cc}\p{Cf}\p{Co}]/gu, " "), 200);
}
function Be(e, r, s = "upload", d) {
  let n = `asset ${s} failed (${e})`;
  switch (e) {
    case "invalid_request":
      return `${n}: ${r ?? "the server could not accept the request as shaped"}`;
    case "too_large":
      return `${n}: ${r ?? "rejected as too large by the server or an intermediary although under the client limit — compress or split it"}`;
    case "unsupported_type":
      return `${n}: ${r ?? `only these file types are accepted: ${lDt}`}`;
    case "quota_or_state":
      return `${n}: ${r ?? (s === "upload" || s === "copy" ? "the Artifact cannot take uploads right now — it is a live document, unpublished, retired, being deleted, or over its asset storage quota" : "the Artifact has no asset store right now — it is a live document, unpublished, retired, or being deleted")}`;
    case "rate_limited":
      return `${n}: calling too often — wait${r ? ` ${r}` : ""} before retrying, and never loop`;
    case "upstream_auth":
      return `${n}: could not authenticate — the session's credential may need a refresh; try again`;
    case "capability_disabled":
      return `${n}: the Artifact's published version does not declare the assets capability — republish it with assets: {} added to its declared capabilities, then retry`;
    case "store_unavailable":
      return `${n}: ${r ?? `the asset store is unavailable right now — retry once after a short wait${s === "upload" ? " (an upload that timed out upstream may already be stored; a duplicate costs only quota)" : ""}`}`;
    case "upstream_error":
      return `${n}: unexpected answer from the server${r ? ` (${r})` : ""}`;
    case "not_found":
      return s === "copy" && d === "not_found" ? `${n}: the SOURCE Artifact (from_url) does not exist, is not one this session can open, or cannot be copied from — the cases are deliberately indistinguishable; check from_url with action "list", scope "shared"` : `${n}: no such Artifact, or artifact assets are not available to this account or Artifact — the cases are deliberately indistinguishable; check the url with action "list"`;
    case "asset_not_found":
      return `${n}: ${r ?? "the source Artifact holds no asset with one of the given ids"} — run action "list_assets" on from_url for its current ids; nothing was copied`;
    case "not_copyable":
      return `${n}: ${r ?? "this source cannot be copied from"}; nothing was copied`;
    case "not_writer":
      return `${n}: this account can open the Artifact but not edit it — only writers can ${s === "copy" ? "copy assets into it" : `${s} assets`}`;
    case "credential_rejected":
      return `${n}: the server refused this session's credential at the asset door — not an access or existence answer; report this as a client/server integration fault${r ? ` (${r})` : ""}`;
    case "policy_denied":
      return `${n}: ${r ?? "blocked by the organization's artifact policy"}`;
    case "unavailable_to_account":
      return `${n}: artifact assets are not available to this account`;
  }
}
function Y(e, r) {
  return (s, d, n) => (e(d), { kind: "error", code: s, message: Be(s, n, r, d), reason: d });
}
var Ne = "asset uploads, copies, listing, and deletes from an agent session (one with no user account) aren't enabled on the server for this organization; retrying from here will not help";
async function V(e, r) {
  let { verb: s, route: d, body: n, contentType: l, marks: a, fail: o } = e, u = (F) => ({ replied: false, failure: F }), w = M9e();
  if (w) a.agent_direct = true;
  let c = qtn() || Bte() && BHt(pK), x = !w && c && !m1(pK), R = !w && !c && Bte() || x, h = () => u(o("store_unavailable", "relay_unavailable", "asset uploads, copies, listing, and deletes run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help"));
  if (!R && !w && i.CLAUDE_CODE_REMOTE) return h();
  if (R && !_D(pK)) return u(o("store_unavailable", "relay_not_served", "asset uploads, copies, listing, and deletes aren't available from this kind of session; retrying from here will not help"));
  let b = Z();
  if (!b.assetsOnRoster) {
    let F = b.accountEpoch, v = b.roster === void 0, T = b.roster ?? await qae({ timeoutMs: 5e3, signal: r, credentials: e.credentials });
    if ("err" in T) a[`roster_${T.cause}`] = true;
    else if (v && !CEe({ session: b, epoch: F, roster: T, storageV5: void 0 }).adopted) a.roster_outlived = true;
    else if (!T.capabilities.includes("assets")) if (!R) return u(o("unavailable_to_account", "roster_no_assets"));
    else a.roster_no_assets = true;
  }
  let O = { maxRedirects: 0, headers: { ...Yc(), "Content-Type": l, Accept: "application/json" }, ...e.verb === "upload" ? { streamUpload: { tailFloorMs: () => Le, onSettled: (F) => {
    if (F.stalled) a.stalled = true;
  } } } : { timeout: e.timeoutMs }, ...e.maxBodyLength !== void 0 && { maxBodyLength: e.maxBodyLength }, maxContentLength: 262144, validateStatus: () => true, signal: r }, D = async () => R ? (await rCr("POST", d, n, O, pK)).res : jt.post(d, n, { ...O, host: "frame", auth: "claude-ai-oauth", refreshOAuth: true, credentials: e.credentials }), k;
  try {
    if (x && e.verb === "upload" && !D9e(pK)) {
      let v;
      try {
        v = (await rCr("POST", e.probeRoute, _({ limit: 1 }), { maxRedirects: 0, headers: { ...Yc(), "Content-Type": "application/json", Accept: "application/json" }, timeout: se, maxContentLength: 262144, validateStatus: () => true, signal: r }, pK)).res;
      } catch (M) {
        if (Na(M) || M instanceof Ye) throw M;
        return jte(pK, true), u(o("store_unavailable", "probe_request_error", "the session gateway did not answer; nothing was uploaded — one retry is safe"));
      }
      let T = Swo(v);
      if (T.refused) return jte(pK), h();
      if (!T.vouched) {
        if (!v.ok || v.status >= 500 || v.status === 499) jte(pK, true);
        return u(o("store_unavailable", "probe_unvouched", "the session gateway could not confirm the asset route; nothing was uploaded — retry later"));
      }
      Jae(pK);
    }
    let F = (v) => {
      if (!x) return false;
      let T = Swo(v);
      if (T.refused && !(v.ok && v.status === 413)) return jte(pK), _wo(pK), true;
      if (T.vouched) Jae(pK);
      else if (!D9e(pK) && (!v.ok || v.status >= 500 || v.status === 499)) jte(pK, true);
      return false;
    };
    if (k = await D(), F(k)) return h();
    if (k.ok && (k.status === 429 || k.status === 503) && U(k.status, k.data).code !== "policy_denied") {
      let v = k.response.headers?.["retry-after"], T = Oh(typeof v === "string" ? v : void 0);
      if (T !== void 0 && T <= Ce) {
        if (await X(T, r), r.aborted) throw new Ye();
        if (a.retried = true, k = await D(), F(k)) return h();
      }
    }
  } catch (F) {
    if (Na(F) || F instanceof Ye) throw F;
    if (x && !D9e(pK)) jte(pK, true);
    if (OH(F) !== void 0) return u(o("store_unavailable", "proxy_refused", "a network proxy refused the connection; nothing was sent — one retry is safe"));
    return u(o("store_unavailable", "request_error", s === "upload" ? "the request failed in transit or timed out — a timed-out upload may already be stored; one retry is safe (a duplicate costs only quota)" : s === "copy" ? 'the request failed in transit or timed out — a timed-out copy may already have landed; run action "list_assets" on the destination before retrying, or the assets may be copied twice' : "the request failed in transit or timed out — one retry is safe"));
  }
  if (!k.ok) return u({ ...o("store_unavailable", k.reason.replace(/-/g, "_")), message: k.reason === "no-auth" ? R ? itt(k.detail) : Oy(k.detail) : `asset ${s} unavailable: ${k.reason}` });
  if (w && k.status === 403 && U(k.status, k.data).reason === "credential_rejected") return u({ ...o("credential_rejected", "agent_not_enabled"), message: `asset ${s} failed (credential_rejected): ${Ne}` });
  return { replied: true, status: k.status, data: k.data, retryAfter: k.response.headers?.["retry-after"] };
}
function W(e, r) {
  let { code: s, reason: d, detail: n } = U(e.status, e.data), l = Oh(e.retryAfter);
  return r(s, d, s === "rate_limited" ? l !== void 0 ? `${Math.max(1, Math.ceil(l / 1e3))}s` : void 0 : s === "upstream_error" && n === void 0 ? `HTTP ${e.status}` : n);
}
async function Ukr(e, r) {
  let { slug: s, bytes: d, contentType: n } = e, l = {}, a = Y((x) => m("artifact_asset_upload", x, l), "upload");
  if (!ar.test(s)) return a("invalid_request", "invalid_slug", "not a valid artifact id");
  let o = aDt(n);
  if (d.length === 0 || d.length > o) return d.length === 0 ? a("invalid_request", "size", "the file is empty") : a("too_large", "size", n === q ? `the SVG exceeds the ${o >> 20} MiB limit for SVG assets — simplify or rasterize it` : `the file exceeds the ${o >> 20} MiB per-asset limit — compress or split it`);
  let u = await V({ verb: "upload", route: De(s), probeRoute: _e(s), body: d, contentType: n, maxBodyLength: YL + 4096, marks: l, fail: a, credentials: e.credentials }, r), w = (x) => l.retried === true ? { ...x, resent: true } : x;
  if (!u.replied) return w(u.failure);
  if (u.status !== 200) return w(W(u, a));
  let c = he().safeParse(u.data);
  if (!c.success || c.data.content_type !== n || (n === q ? c.data.size_bytes === 0 || c.data.size_bytes > YL : c.data.size_bytes !== d.length)) return w(a("upstream_error", "malformed_echo", "the upload probably succeeded but the reply was unreadable — retry at most once; if it repeats, stop and report it"));
  return Z().assetsOnRoster = true, g("artifact_asset_upload", { ...l, size_bytes: c.data.size_bytes }), { kind: "ok", id: c.data.opaque_id, url: ne(c.data.opaque_id, c.data.url), sizeBytes: c.data.size_bytes, contentType: c.data.content_type, ...c.data.sha256 !== void 0 && { sha256: c.data.sha256 }, ...l.retried === true && { resent: true } };
}
async function iCs(e, r) {
  let { slug: s, after: d } = e, n = {}, l = Y((u) => m("artifact_asset_list", u, n), "list");
  if (!ar.test(s)) return l("invalid_request", "invalid_slug", "not a valid artifact id");
  if (d !== void 0 && !Ete.test(d)) return l("invalid_request", "invalid_cursor", "after must be the next value from an earlier list_assets result");
  let a = await V({ verb: "list", route: _e(s), body: _({ ...d !== void 0 && { after: d }, limit: Re }), contentType: "application/json", timeoutMs: se, marks: n, fail: l, credentials: e.credentials }, r);
  if (!a.replied) return a.failure;
  if (a.status !== 200) return W(a, l);
  let o = Te().safeParse(a.data);
  if (!o.success) return l("upstream_error", "malformed_reply", "the listing was unreadable");
  return Z().assetsOnRoster = true, kGt(s, o.data.cowritten), hwt(s, o.data.outside_writer), g("artifact_asset_list", { ...n, count: o.data.assets.length }), { kind: "ok", assets: o.data.assets.map((u) => ({ id: u.opaque_id, url: ne(u.opaque_id, u.url), contentType: u.content_type, sizeBytes: u.size_bytes, ...u.sha256 !== void 0 && { sha256: u.sha256 }, createdAt: ee(u.created_at) })), usage: { files: o.data.usage.files, bytes: o.data.usage.bytes, maxFiles: o.data.usage.max_files, maxBytes: o.data.usage.max_bytes }, ...o.data.next !== void 0 && { next: o.data.next }, ...o.data.cowritten && { cowritten: true }, ...o.data.outside_writer !== void 0 && { outsideWriter: o.data.outside_writer } };
}
async function aCs(e, r) {
  let { slug: s, id: d } = e, n = {}, l = Y((u) => m("artifact_asset_delete", u, n), "delete");
  if (!ar.test(s)) return l("invalid_request", "invalid_slug", "not a valid artifact id");
  if (!Bg.test(d)) return l("invalid_request", "invalid_id", "not a valid asset id");
  let a = await V({ verb: "delete", route: Me(s, d), body: "{}", contentType: "application/json", timeoutMs: se, marks: n, fail: l, credentials: e.credentials }, r);
  if (!a.replied) return a.failure;
  if (a.status !== 200) return W(a, l);
  let o = Fe().safeParse(a.data);
  if (!o.success) return l("upstream_error", "malformed_reply", "the delete may have succeeded but the reply was unreadable — list the assets to check");
  return Z().assetsOnRoster = true, g("artifact_asset_delete", { ...n, deleted: o.data.deleted }), { kind: "ok", deleted: o.data.deleted };
}
var Ie = p(() => Tt({ assets: lr(he().extend({ from_id: ge().regex(Bg) })).max(Hae) })), ze = 12e4;
async function lCs(e, r) {
  let { slug: s, fromSlug: d, ids: n } = e, l = e.crossOrgOk === true, a = {}, o = Y((c) => m("artifact_asset_copy", c, a), "copy");
  if (!ar.test(s) || !ar.test(d)) return o("invalid_request", "invalid_slug", "not a valid artifact id");
  if (s === d) return o("invalid_request", "same_artifact", "from_url names the destination itself — its assets are already there");
  if (n.length === 0 || n.length > Hae || !n.every((c) => Bg.test(c)) || new Set(n).size !== n.length) return o("invalid_request", "invalid_ids", `asset_ids must be 1–${Hae} distinct asset ids`);
  let u = await V({ verb: "copy", route: Pe(s), body: _({ from: d, ids: n, ...l && { cross_org_ok: true } }), contentType: "application/json", timeoutMs: ze, marks: a, fail: o, credentials: e.credentials }, r);
  if (!u.replied) return u.failure;
  if (u.status !== 200) return l && u.status === 400 && U(400, u.data).detail === "invalid request body" ? o("not_copyable", "predates_cross_org", "this server doesn't support copying from another organization's artifact yet, so don't retry the copy, and tell the user cross-organization copies aren't supported yet") : W(u, o);
  let w = Ie().safeParse(u.data);
  if (!w.success || w.data.assets.length !== n.length || w.data.assets.some((c, x) => c.from_id !== n[x])) return o("upstream_error", "malformed_reply", 'the copy probably succeeded but the reply was unreadable — run action "list_assets" on the destination before retrying, or the assets may be copied twice');
  return Z().assetsOnRoster = true, g("artifact_asset_copy", { ...a, count: n.length }), { kind: "ok", assets: w.data.assets.map((c) => ({ fromId: c.from_id, id: c.opaque_id, url: ne(c.opaque_id, c.url), sizeBytes: c.size_bytes, contentType: c.content_type, ...c.sha256 !== void 0 && { sha256: c.sha256 } })) };
}
var Q = 9e4;
function Bkr(e) {
  for (let [r, s] of H) if (s === e) return r;
  return;
}
var fe = "asset reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help";
async function dCs(e, r, s, d, { admitPublicRead: n, probeToolUseId: l } = {}) {
  let a = (y, S) => (m("artifact_asset_read", y), { kind: "error", message: `asset read failed: ${S}`, reason: y });
  if (!ar.test(e.slug)) return a("invalid_slug", "not a valid artifact id");
  if (!Bg.test(r)) return a("invalid_id", "not a valid asset id");
  let o = N1n(), u = M9e(), w = !o && (Bte() || qtn() && !m1(Ox));
  if (!w && !o && i.CLAUDE_CODE_REMOTE) return a("relay_unavailable", fe);
  let c = await wP(e, "artifact_asset_read", s, { gatePublicRead: false, credentials: d, probeToolUseId: l });
  if (c.err !== null) return { kind: "error", message: c.err.replace(/^artifact read/, "asset read"), reason: c.status === 404 ? "boot_404" : "boot" };
  let { ver: x, assetToken: R } = c, h = R === void 0;
  if (h && !QT()) return a("tokenless", "this artifact is served to you as a public (non-member) reader, and assets are not readable that way");
  if (h && n?.() !== true) return f("artifact_asset_read", Dce), { kind: "error", reason: Dce, message: `asset read failed: ${Qgn}` };
  let b = w && !h, O = `/_f/${x}/_blob/${r}`, D = `frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`, { host: k, base: F, headers: v } = xtn(e), T = () => (Z().contentHostEgressDenied.add(e.env), a("egress_blocked", `this environment's network allowlist blocks ${k}, so the asset cannot be fetched (access to the artifact itself is fine). ${h ? `Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${Ptn(e.env)}` : i.CLAUDE_CODE_REMOTE ? "This is a restriction of where this session runs; retrying from here will not help." : `To allow it, add *.${D} to the network allowlist this session runs behind (the sandbox's allowed domains, or the Claude desktop app's network settings).`}`)), M = (y, S) => (t(`[artifact] asset fetch: egress proxy denied (${S})`), a("egress_denied", `artifact content fetch refused by the environment's egress proxy (${s6(y)})`)), ye = (y, S) => {
    if (S !== void 0) t(`[artifact] asset fetch: proxy refused, marker ${S}`);
    return a("proxy_refused", `the proxy refused the connection to the artifact's content host (${s6(y)})`);
  }, N = false, I;
  if (!b && R !== void 0 && Ctn(c.data)) {
    try {
      I = await Rtn(e.slug, O, { token: R, timeout: Q, maxContentLength: YL + 1, signal: s, credentials: d });
    } catch (y) {
      if (Na(y) || y instanceof Ye) throw y;
      return a("request_error", `the content fetch failed in transit, timed out, or exceeded the ${YL >> 20} MiB limit`);
    }
    N = I.kind === "answer";
  }
  let A;
  try {
    if (I?.kind === "answer") A = I;
    else if (b) {
      if (R === void 0) return a("internal", "internal error: a public artifact read was routed where it cannot be served — this is a bug in this build; do not retry");
      let y = await Atn(e.slug, O, { token: R, timeout: Q, maxContentLength: YL + 1, signal: s, retryBudget: k9e() });
      if (!y.ok) return a(y.reason.replace(/-/g, "_"), y.reason === "no-auth" ? itt(y.detail) : `artifact content is unreachable from this session (${y.reason})`);
      A = { status: y.status, headers: y.response.headers, data: y.data };
    } else {
      let y = R === void 0 ? "" : `?__frame_t=${encodeURIComponent(R)}`, S = await _l.get(`${F}${O}${y}`, { signal: s, timeout: Q, responseType: "arraybuffer", maxRedirects: 0, maxContentLength: YL + 1, validateStatus: () => true, ...v && { headers: v } });
      if (uj(S.status, S.headers)) return T();
      let P = ooe(S.headers);
      if (P !== void 0 && (S.status < 200 || S.status >= 300)) return M(S.status, P);
      Z().contentHostEgressDenied.delete(e.env), A = { status: S.status, headers: S.headers, data: S.data };
    }
  } catch (y) {
    if (Na(y) || y instanceof Ye) throw y;
    if (b) ROe();
    let S = b ? void 0 : OH(y);
    if (S !== void 0) {
      if (uj(S.connectStatus, S.headers)) return T();
      let P = ooe(S.headers);
      if (P !== void 0) return M(S.connectStatus, P);
      return ye(S.connectStatus, Pwt(S.headers));
    }
    return a("request_error", `the content fetch failed in transit, timed out, or exceeded the ${YL >> 20} MiB limit`);
  }
  if (b && Vft(A.status)) return a("relay_unavailable", fe);
  if (b && Kft(A.status, A.data)) return a("network_off", `${zft}; retrying from here will not help`);
  if (b && g3(A.status)) return a(`http_${A.status}`, Ttn(A.status));
  if (b) ROe(A.status);
  if (A.status === 404) return a("http_404", b ? `not found through this cloud session's artifact mount — no asset has that id, or asset reads are not enabled for this session yet; a writer of the artifact can tell which with action "list_assets"` : 'no asset with that id in this artifact (it may have been deleted) — a writer of the artifact can check the id with action "list_assets"');
  if (h && A.status === 403 && ALe(A.headers, roe(A.headers, A.data, (y) => y))) return a("public_refused", "this public artifact serves no asset with that id to readers outside its organization, or it is no longer public");
  let K = b ? void 0 : Rwt({ status: A.status, headers: A.headers, data: A.data, redact: (y) => $ft(y, R), label: "[artifact] asset fetch" });
  if (K !== void 0) return a(K, xwt[K]);
  if (A.status === 401 || A.status === 403) return a(`http_${A.status}`, b ? "the cloud session's artifact mount refused the read — asset reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused — the artifact may have been unshared or taken down since the id was listed");
  if (A.status !== 200) return a(`http_${A.status}`, `unexpected answer from the ${N ? "artifact service" : "content host"} (HTTP ${A.status})`);
  if (b) Jae(Ox);
  let ae = A.headers, oe = b || N ? T9e(ae) : ae?.["content-type"], de = typeof oe === "string" ? Ze(oe, ";").trim().toLowerCase() : "";
  if (Bkr(de) === void 0) return a("unexpected_type", `the ${N ? "artifact service" : "content host"} served a type this tool does not save`);
  let z = Buffer.from(A.data ?? new ArrayBuffer(0));
  if (z.length === 0 || z.length > YL) return a("size", z.length === 0 ? "the asset is empty" : `the asset exceeds the ${YL >> 20} MiB limit`);
  return { kind: "ok", bytes: z, contentType: de, relay: b, agentDirect: u, publicRead: h };
}
export {
  AFn,
  Ayo,
  Bkr,
  Cyo,
  Ete,
  GZt,
  Gut,
  Hae,
  KZt,
  QI,
  QW,
  Ryo,
  Sme,
  TFn,
  Tyo,
  Ukr,
  WZt,
  aCs,
  aDt,
  bme,
  cDt,
  dCs,
  dDt,
  iCs,
  jZt,
  kFn,
  lCs,
  lDt,
  mD,
  oCs,
  oOe,
  rCs,
  sCs,
  sOe,
  vN,
  zZt,
  zut
};
