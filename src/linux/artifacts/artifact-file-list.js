// linux/artifacts/artifact-file-list.js — Claude Code 2.1.310（linux）模块 chunk-af024f8a.js
import { Ye } from "../telemetry/anthropic-workspace-id.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { te, t } from "../fs/gitlab-runner-authentication-token.js";
import { Ad, Ze } from "../shared/chunk-d2c47492.js";
import { i } from "../shared/environment.js";
import { nr } from "../remote/moved-directory.js";
import { s6, OH } from "../fs/ca-certs-load.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { roe, uj, Rwt, xwt, Pwt, ooe } from "../shell/content-scan-transient.js";
import { Na } from "../fs/content-encoding.js";
import { _l } from "../mcp/allowed-warning.js";
import { ar } from "./cobalt-plinth-lovage.js";
import { Ox } from "../settings/global-config-and-gates.js";
import { Z } from "./same-account.js";
import { E1n, jft, bJ } from "./cobalt-plinth-samphire.js";
import { SJ, zft, Kft, tCr, _D, Bte, M9e, N1n, m1, Jae, Vft, ROe, qtn } from "./cobalt-plinth-comfrey.js";
import { itt, QT, Dce, Qgn, ZA } from "../mcp/cobalt-plinth-sedge.js";
import { PT, EAr, w4, ESo, wP, g3, Pme, kEe, k9e, Ttn, Atn, Ctn, Rtn, T9e, TSo, ASo, CSo, RSo, IAr, xtn, Ptn, $ft } from "./template-instance.js";
import { ALe, CLe, gKe, Ct, dCe } from "./artifact-share-status.js";
import { vN, QI } from "./store-unavailable.129e.js";
import { YL } from "../shared/chunk-a5f59e6a.js";
import { ge, bn, Go, Tt, uh } from "../vendor/zod/invalid-return-type.js";
import { createHash as j } from "crypto";
var K = "_files.json", iDt = 4096, Eyo = YL, X = 16777216, D = 9e4, Q = "x-frame-doc-sha256", J = "x-frame-doc-seq", ee = p(() => Tt({ ver: ge(), files: uh(Tt({ sha256: ge().regex(vN), size: bn().int().nonnegative().max(Eyo), contentType: ge().regex(QI) })), narrowed: Go().optional() }));
function x(e) {
  return e === "file list" ? "artifact_file_list" : "artifact_file_read";
}
function v(e, s, c, h = true) {
  if (h) m(x(e), s);
  return { kind: "error", message: `${e} failed: ${c}`, reason: s };
}
function M(e) {
  let s = e - 1;
  return s >= 1048576 ? `${s >> 20} MiB` : `${s >> 10} KiB`;
}
var W = "published-file reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help", re = "published-file reads aren't available from this kind of session; retrying from here will not help";
async function N(e, s, c, h, { admitPublicRead: r, probeToolUseId: d }) {
  if (!ar.test(e.slug)) return v(s, "invalid_slug", "not a valid artifact id");
  let l = N1n(), F = !l && (Bte() || qtn() && !m1(Ox));
  if (!F && !l && i.CLAUDE_CODE_REMOTE) return v(s, "relay_unavailable", W);
  let a = l || nr() && M9e();
  if (F && !_D(tCr) && !a) return v(s, "relay_not_served", re);
  let n = await wP(e, x(s), c, { gatePublicRead: false, relayOnly: !a, credentials: h, probeToolUseId: d });
  if (n.err !== null) {
    let w = n.errorCode === "boot_relay_error";
    if (w && (n.status === 403 || n.status === 404)) return { kind: "error", reason: "relay_refused", message: `${s} failed: published-file reads from a cloud session go through the session gateway's artifact relay, which is not enabled for this session yet; retrying from here will not help` };
    if (w && n.status === 401) return { kind: "error", reason: "relay_unauthorized", message: `${s} failed: the session gateway did not accept this session's credential for the artifact relay; retrying from here will not help` };
    return { kind: "error", message: n.err.replace(/^artifact read/, s), reason: n.errorCode };
  }
  let y = n.assetToken === void 0;
  if (y && !QT()) return v(s, "tokenless", "this artifact is served to you as a public (non-member) reader, and its files are not readable that way");
  if (y && r?.() !== true) return f(x(s), Dce), v(s, Dce, Qgn, false);
  let R = n.data.cowritten === true || n.data.artifactKind === ZA || Ct(e.slug)?.cowritten === true || Ct(e.slug)?.artifactKind === ZA, b = dCe(e.slug, n.data.type), k = gKe(n.data.perm?.role === "owner", CLe(n.data.outsideWriter), Ct(e.slug)?.outsideWriter);
  return { kind: "ok", target: e, ver: n.ver, assetToken: n.assetToken, publicRead: y, relay: F && !y, frameContent: !F && !y && Ctn(n.data), credentials: h, agentDirect: a, cowritten: R, typeLocked: b, writerClass: Pme(n.data.perm?.role), foreign: n.data.authoredByOthers === true || Ct(e.slug)?.authoredByOthers === true || n.data.perm?.role !== "owner" || R || b || k, outsideOrg: k, orgRelation: ASo(n), livePaths: E1n(n.data).map((w) => w.path), typePaths: ESo(n.data.files)?.type ?? [], source: TSo(n), ...typeof n.data.title === "string" && { title: n.data.title }, ...n.data.favicon !== void 0 && { favicon: n.data.favicon }, ...n.data.publishPreconditions === true && { publishPreconditions: true }, filesCounted: typeof n.data.fileCount === "number" && Number.isSafeInteger(n.data.fileCount) && n.data.fileCount > 0, reused: n.reused === true };
}
async function I(e, s, c, h, r, d, l = true, F = false) {
  let a = (u, _) => v(c, u, _, l), n = (u) => ({ kind: "status", status: u }), { target: y, assetToken: R, relay: b } = e, { host: k, base: w, headers: C } = xtn(y), P = () => (Z().contentHostEgressDenied.add(y.env), a("egress_blocked", `this environment's network allowlist blocks ${k}, so the file cannot be fetched (access to the artifact itself is fine). ${e.publicRead ? `Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${Ptn(y.env)}` : i.CLAUDE_CODE_REMOTE ? "This is a restriction of where this session runs; retrying from here will not help." : `To allow it, add *.frame.${y.env === "staging" ? "staging." : ""}claudeusercontent.com to the environment's allowed domains.`}`)), L = (u, _) => (t(`[artifact] ${c}: egress proxy denied (${_})`), a("egress_denied", `artifact content fetch refused by the environment's egress proxy (${u})`)), A = false, S;
  if (e.frameContent && R !== void 0) {
    try {
      S = await Rtn(y.slug, s, { token: R, timeout: D, maxContentLength: h, signal: r, credentials: e.credentials });
    } catch (u) {
      if (Na(u) || u instanceof Ye) throw u;
      return F ? n(0) : a("request_error", `the content fetch failed in transit, timed out, or exceeded the ${M(h)} limit`);
    }
    A = S.kind === "answer";
  }
  let o;
  try {
    if (S?.kind === "answer") o = S;
    else if (b) {
      if (R === void 0) return a("internal", "internal error: a public artifact read was routed where it cannot be served — this is a bug in this build; do not retry");
      let u = await Atn(y.slug, s, { token: R, timeout: D, maxContentLength: h, signal: r, retryBudget: d });
      if (!u.ok) return a(u.reason.replace(/-/g, "_"), u.reason === "no-auth" ? itt(u.detail) : `artifact content is unreachable from this session (${u.reason})`);
      o = { status: u.status, headers: u.response.headers, data: u.data };
    } else {
      let u = R === void 0 ? "" : `?__frame_t=${encodeURIComponent(R)}`, _ = await _l.get(`${w}${s}${u}`, { signal: r, timeout: D, responseType: "arraybuffer", maxRedirects: 0, maxContentLength: h, validateStatus: () => true, ...C && { headers: C } });
      if (uj(_.status, _.headers)) return P();
      let B = ooe(_.headers);
      if (B !== void 0 && (_.status < 200 || _.status >= 300)) return L(`HTTP ${_.status}`, B);
      o = { status: _.status, headers: _.headers, data: _.data };
    }
  } catch (u) {
    if (Na(u) || u instanceof Ye) throw u;
    if (b && !F) ROe();
    let _ = b ? void 0 : OH(u);
    if (_ !== void 0) {
      if (uj(_.connectStatus, _.headers)) return P();
      let B = ooe(_.headers);
      if (B !== void 0) return L(s6(_.connectStatus), B);
      let q = Pwt(_.headers);
      if (q !== void 0) t(`[artifact] ${c}: proxy refused, marker ${q}`);
      return F ? n(0) : a("proxy_refused", `the proxy refused the connection to the artifact's content host (${s6(_.connectStatus)})`);
    }
    return F ? n(0) : a("request_error", `the content fetch failed in transit, timed out, or exceeded the ${M(h)} limit`);
  }
  if (F && o.status !== 200) return n(o.status);
  if (!b && !A) Z().contentHostEgressDenied.delete(y.env);
  if (b && Vft(o.status)) return a("relay_unavailable", W);
  if (b && Kft(o.status, o.data)) return a("network_off", `${zft}; retrying from here will not help`);
  if (b && g3(o.status)) return a(`http_${o.status}`, Ttn(o.status));
  if (b) ROe(o.status);
  if (o.status === 404) return { kind: "status", status: 404, frameNotFound: o.data !== void 0 && o.data.byteLength <= 256 && SJ(Buffer.from(o.data).toString("utf8")) };
  if (R === void 0 && o.status === 403 && ALe(o.headers, roe(o.headers, o.data, (u) => u))) return { kind: "status", status: 403 };
  let E = b ? void 0 : Rwt({ status: o.status, headers: o.headers, data: o.data, redact: (u) => $ft(u, R), label: `[artifact] ${c}` });
  if (E !== void 0) return a(E, xwt[E]);
  if (o.status === 401 || o.status === 403) return a(`http_${o.status}`, b ? "the cloud session's artifact mount refused the read — file reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused — the artifact may have been unshared or taken down");
  if (o.status !== 200) return a(`http_${o.status}`, `unexpected answer from the ${A ? "artifact service" : "content host"} (HTTP ${o.status})`);
  if (b) Jae(Ox);
  let T = o.headers, O = b || A ? T9e(T) : T?.["content-type"], U = String(T?.[Q] ?? "").toLowerCase(), Y = String(T?.[J] ?? "");
  return { kind: "ok", status: 200, bytes: Buffer.from(o.data ?? new ArrayBuffer(0)), contentType: typeof O === "string" ? Ze(O, ";").trim().toLowerCase() : "", ...vN.test(U) && { docSha256: U }, .../^\d{1,15}$/.test(Y) && { docSeq: Number(Y) } };
}
async function H(e, s, c, h, r = true) {
  let d = await I(e, `/_f/${e.ver}/${K}`, s, X + 1, c, h, r);
  if (d.kind !== "ok") return d;
  let l;
  try {
    l = ee().safeParse(te(d.bytes.toString("utf8")));
  } catch {
    return v(s, "bad_json", "the artifact service answered with something other than a file list", r);
  }
  if (!l.success || l.data.ver !== e.ver) return v(s, "bad_shape", "the artifact service answered with a file list this version of the tool cannot read", r);
  let F = Object.entries(l.data.files);
  if (F.length > iDt) return v(s, "too_many", `the file list names more than ${iDt} files`, r);
  return { kind: "ok", files: F.filter(([n]) => n.length <= PT && !/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(n) && Ad(n) && !EAr(n)).map(([n, y]) => ({ path: n, contentType: y.contentType, sizeBytes: y.size, sha256: y.sha256 })).sort((n, y) => n.path < y.path ? -1 : n.path > y.path ? 1 : 0), narrowed: l.data.narrowed === true };
}
async function Dae(e, s, c, h = {}) {
  let r = await N(e, "file list", s, c, h);
  if (r.kind === "error") return r;
  let d = await H(r, "file list", s, k9e());
  if (d.kind === "error") return d;
  if (d.kind === "status") {
    if (d.status === 404 && !r.filesCounted && (!r.relay || d.frameNotFound === true)) return f("artifact_file_list", "single_page"), { kind: "error", reason: "single_page", message: "this artifact is a single page with no separately published files, so there is no file list; read the page itself", ver: r.ver, cowritten: r.cowritten, typeLocked: r.typeLocked };
    if (r.publicRead && d.status === 403) {
      if (await ie(r, s)) return f("artifact_file_list", "single_page"), { kind: "error", reason: "single_page", message: "this public artifact is a single page with no separately published files, so there is no file list; read the page itself", ver: r.ver, cowritten: r.cowritten, typeLocked: r.typeLocked };
      return v("file list", "public_refused", "this public artifact's files are not available to readers outside its organization right now — it may no longer be public, or it was taken down");
    }
    return m("artifact_file_list", `http_${d.status}`), v("file list", `http_${d.status}`, r.relay ? "not found through this cloud session's artifact mount — this artifact is a single page with no separate files, or file reads are not enabled for this session yet" : "the artifact has published files, but the artifact service does not offer their list yet; retrying from here will not help", false);
  }
  return g("artifact_file_list", { relay: r.relay, files: d.files.length, ...r.agentDirect && { agent_direct: true }, ...r.publicRead && { public: true }, ...r.reused && { boot_reused: true } }), { kind: "ok", ver: r.ver, files: d.files.map((l) => r.livePaths.includes(l.path) ? { ...l, live: true } : l), relay: r.relay, agentDirect: r.agentDirect, cowritten: r.cowritten, typeLocked: r.typeLocked, writerClass: r.writerClass, foreign: r.foreign, outsideOrg: r.outsideOrg, publicRead: r.publicRead, narrowed: r.publicRead && d.narrowed, ...r.typePaths.length > 0 && { typePaths: r.typePaths }, ...r.title !== void 0 && { title: r.title }, ...r.favicon !== void 0 && { favicon: r.favicon }, ...r.publishPreconditions === true && { publishPreconditions: true } };
}
function z(e) {
  return { ver: e.ver, relay: e.relay, agentDirect: e.agentDirect, cowritten: e.cowritten, typeLocked: e.typeLocked, writerClass: e.writerClass, foreign: e.foreign, outsideOrg: e.outsideOrg, ...e.orgRelation === "external" && { external: true }, offOrgRamp: CSo(e.orgRelation), publicRead: e.publicRead, ...e.title !== void 0 && { title: e.title } };
}
function G(e, s, c = true) {
  return v("file read", `http_${s}`, e.relay ? `not found through this cloud session's artifact mount — no file is published at that path in the served version, or file reads are not enabled for this session yet; action "list_files" shows the paths` : e.publicRead ? 'this public artifact serves no file at that path to readers outside its organization — action "list_files" shows the paths it does serve (or the artifact is no longer public)' : 'no file is published at that path in the served version — action "list_files" shows the paths', c);
}
async function ie(e, s) {
  let { base: c, headers: h } = xtn(e.target);
  try {
    return (await _l.head(`${c}/_f/${e.ver}/`, { signal: s, timeout: IAr, maxRedirects: 0, validateStatus: () => true, ...h && { headers: h } })).status === 200;
  } catch (r) {
    if (Na(r) || r instanceof Ye) throw r;
    return false;
  }
}
async function V(e, s, c, h, r, d = true) {
  let l = s.split("/").map(encodeURIComponent).join("/"), F = e.source ? await I(e, RSo(e.ver, l), "file read", kEe, c, h, d, true) : void 0;
  if (F?.kind === "error") return F;
  let a = F?.kind === "ok" ? F : await I(e, `/_f/${e.ver}/${l}`, "file read", kEe, c, h, d), n = a === F;
  if (a.kind !== "ok") return a;
  if (!QI.test(a.contentType)) return v("file read", "unexpected_type", "the content host served the file with a type this tool does not save", d);
  if (a.bytes.length >= kEe) return v("file read", "size", `the file exceeds the ${M(kEe)} limit`, d);
  let y = (S) => j("sha256").update(S).digest("hex"), R = a.bytes, b = y(R), k = true, w = "unused", C = false, P, L, A = e.livePaths.includes(s);
  if (a.contentType === "text/html") {
    let S = await r(), o = S.kind === "ok" ? S.files.find((E) => E.path === s)?.sha256 : void 0;
    if (L = o, o === void 0) w = A ? "live" : "missing", k = false;
    else if (b === o) w = "verified";
    else {
      let E = n ? void 0 : jft(a.bytes, (T) => y(T) === o);
      if (E !== void 0) R = E, b = o, w = "verified";
      else w = A ? "live" : "unverified", k = false;
    }
  }
  return { kind: "ok", path: s, bytes: R, contentType: a.contentType, sha256: b, asPublished: k, listing: w, ...L !== void 0 && { listedSha256: L }, docVerified: C, ...P !== void 0 && { docSeq: P }, ...n && { source: true } };
}
async function BZt(e, s, c, h, r = {}) {
  let d = w4(s);
  if ("errMsg" in d) return v("file read", "invalid_path", d.errMsg);
  let l = await N(e, "file read", c, h, r);
  if (l.kind === "error") return l;
  let F = k9e(), a = await V(l, d.key, c, F, () => H(l, "file read", c, F, false));
  if (a.kind === "error") return a;
  if (a.kind === "status") return G(l, a.status);
  return { ...a, ...z(l) };
}
var kyo = 4, ne = bJ;
async function nCs(e, s, c, h, { byteBudget: r = ne, ...d } = {}) {
  let l = await N(e, "file read", c, h, d);
  if (l.kind === "error") return l;
  let F = k9e(), a, n = () => a ??= H(l, "file read", c, F, false).then((b) => {
    if (b.kind !== "ok") a = void 0;
    return b;
  }), y = 0;
  return { kind: "ok", files: await se(s, kyo, async (b) => {
    let k = w4(b);
    if ("errMsg" in k) return { ...v("file read", "invalid_path", k.errMsg, false), path: b };
    if (y >= r) return { kind: "error", reason: "batch_budget", message: `not fetched: the files read before it in this call already hold ${Math.floor(r / 1048576)}MB, the most one read carries — read it, and any after it, in another call`, path: k.key };
    if (l.livePaths.includes(k.key)) return { kind: "error", reason: "live_path", message: "this is a live file: read it by itself with `path`, which returns its current state", path: k.key };
    let w = await V(l, k.key, c, k9e(), n, false);
    if (w.kind === "status") return { ...G(l, w.status, false), path: k.key };
    if (w.kind === "ok") y += w.bytes.length;
    return w.kind === "error" ? { ...w, path: k.key } : w;
  }), ...z(l) };
}
async function se(e, s, c) {
  let h = Array(e.length), r = 0, d = async () => {
    while (r < e.length) {
      let l = r++;
      h[l] = await c(e[l]);
    }
  };
  return await Promise.all(Array.from({ length: Math.min(s, e.length) }, () => d())), h;
}
export {
  BZt,
  Dae,
  Eyo,
  iDt,
  kyo,
  nCs
};
