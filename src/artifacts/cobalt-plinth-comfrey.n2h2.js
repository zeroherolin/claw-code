// artifacts/cobalt-plinth-comfrey.n2h2.js — Claude Code 2.1.310 模块 chunk-n2h2anxj.js
import { F, U, J } from "../context/not-admin-owned.ersa.js";
import { S, c } from "../agents/third-party.ydpb.js";
import { v, QK } from "../telemetry/anthropic-workspace-id.36ys.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Oh } from "../telemetry/service-error-detail-not-plain.9kgx.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { Yti, ZEt, Dzt, XVr, Jti, Qti, Dx, pa, Toi, Aoi, Z3o, JLe, Trr, QLe, Arr, ZLe, Wt, k } from "../settings/global-config-and-gates.27xj.js";
import { i } from "../shared/environment.9a41.js";
import { Ko } from "../shared/chunk-z6efcye4.js";
import { nr, zg, xM } from "../remote/moved-directory.z3m0.js";
import { Fa } from "../fs/content-encoding.v6wj.js";
import { LH, STt, Am } from "../vendor/aws-sdk/ca-certs-load.ft7b.js";
import { TSe } from "../auth/secure-storage-credentials-write.vafw.js";
import { Z } from "./same-account.bxg8.js";
import { Sjn, gEo, hEo } from "../mcp/artifact-mcp-wire-tools-list.2wmg.js";
import { P5s } from "../shared/chunk-z339v9v2.js";
import { Cjt, gfn, O5s } from "../telemetry/gzip-request-body-latch-cleared.0k9a.js";
var we = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/, Oe = /^(?:0x[0-9a-f]*|[0-9]+)$/;
function Ae(e) {
  if (e === void 0) return;
  let n;
  for (let r of e.split(",")) {
    let a = r.trim().toLowerCase();
    if (a === "") continue;
    let l = a.split(".");
    if (a.length > 253 || !l.every((f) => we.test(f)) || l.every((f) => Oe.test(f))) return;
    n ??= a;
  }
  return n;
}
function Q(e) {
  if (LH(e) !== void 0) return true;
  return QK(e, (n) => {
    let r = v(n);
    return r === "ECONNREFUSED" || r === "ConnectionRefused" || r !== void 0 && TSe.has(r);
  }) !== void 0;
}
class ee {
  builtFor = void 0;
  agent = void 0;
  warnedMalformed = void 0;
  agentFor(e) {
    if (this.agent === void 0 || this.builtFor !== e) {
      let n = new STt(e.proxyUrl, { ca: e.gatewayCa });
      n.options = { ...n.options, ca: e.gatewayCa }, this.builtFor = e, this.agent = n;
    }
    return this.agent;
  }
  warnMalformedOnce(e) {
    if (this.warnedMalformed === e) return;
    this.warnedMalformed = e, t("[frame-tunnel] CCR_AGENT_PROXY_FRAME_HOSTS is malformed; keeping the gateway routes", { level: "warn" });
  }
}
var Pe = new W(() => new ee());
function te() {
  if (!nr()) return;
  let e = i.CCR_AGENT_PROXY_FRAME_HOSTS;
  if (e === void 0) return;
  let n = Pe.of(U().host), r = Ae(e);
  if (r === void 0) {
    n.warnMalformedOnce(e);
    return;
  }
  let a = P5s();
  if (a === void 0 || Am() !== void 0) return;
  return { host: r, agent: n.agentFor(a) };
}
var Y = 60, ke = 180, xe = 32768, ve = 1048576, ne = 262144, Me = 1.25, re = { "Content-Encoding": "gzip", "Content-Type": "application/json" };
function bAr(e) {
  if (e === void 0 || e <= 0) return Y;
  return Math.min(ke, Y + Math.floor(e / xe));
}
function Le(e, n) {
  return n * bAr(e) <= e * Y;
}
async function De({ url: e, body: n, storageV5: r }) {
  let a = _(n), l = a.length, f = Cjt(e, a, r, "frame_publish");
  if (f === void 0) return { gzipped: null, encoding: void 0, jsonChars: l };
  let d = Buffer.byteLength(a), T = (R) => ({ gzipped: null, jsonChars: l, encoding: { json_bytes: d, wire_bytes: d, body_gzip: false, gzip_skip: R } });
  if (!f.gzip) return T(f.reason);
  let u = bAr(d) / Y;
  if (d >= ve) {
    let R = a.slice(0, ne), w = Buffer.byteLength(R) / (await Toi(R)).length;
    if (w * Me < u) return t(`[artifact] publish body sent uncompressed: its first ${ne} characters compress only ${w.toFixed(2)}x, and a body of ${d} bytes needs ${u.toFixed(2)}x to finish inside the server's 60-second read limit for a compressed upload`), T("deadline_ratio");
  }
  let s = await Aoi(a);
  if (!Le(d, s.length)) return t(`[artifact] publish body sent uncompressed: gzip only got ${d} bytes down to ${s.length}, too little to finish inside the server's 60-second read limit for a compressed upload`), T("deadline_ratio");
  return { gzipped: s, jsonChars: l, encoding: { json_bytes: d, wire_bytes: s.length, body_gzip: true } };
}
function Be(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return false;
  let n = Object.getPrototypeOf(e);
  return n === Object.prototype || n === null;
}
function Ce(e) {
  if (!e.ok) return { status: 0, header: () => {
    return;
  }, bodyText: async () => "" };
  return { status: e.status, header: (n) => {
    let r = e.response?.headers?.[n];
    return typeof r === "string" ? r : void 0;
  }, bodyText: async () => typeof e.data === "string" ? e.data : e.data === void 0 ? "" : _(e.data) };
}
async function oe({ url: e, body: n, storageV5: r, signal: a, send: l, onEncoding: f }) {
  if (!Be(n)) return l(null);
  let { gzipped: d, encoding: T, jsonChars: u } = await De({ url: e, body: n, storageV5: r });
  if (T !== void 0) f?.(T);
  if (d === null || T === void 0) return l(null);
  gfn("frame_publish");
  let s = await l(d);
  return O5s({ answer: s, facts: Ce, resendIdentity: () => (f?.({ json_bytes: T.json_bytes, wire_bytes: T.json_bytes, body_gzip: false, gzip_fallback_status: s.ok ? s.status : 0 }), l(null)), aborted: () => a?.aborted === true, bodyChars: u, storageV5: r, rollout: "frame_publish" });
}
function UYe(e) {
  return !e.ok && (e.reason === "relay-unavailable" || e.reason === "relay-not-served");
}
var Ue = "x-ccr-relay-upstream", Ne = "x-ccr-sandbox-egress", Ye = /* @__PURE__ */ new Set(["disabled", "restricted", "unrestricted"]);
function hPs(e) {
  if (!e.ok || e.route !== "relay" || !R9(e)) return;
  let n = e.response.headers?.[Ne];
  return typeof n === "string" && Ye.has(n) ? n : void 0;
}
var v6 = "forbidden: CCR agent tokens";
function R7(e) {
  if (typeof e === "string") return e.trim() === "not found";
  return typeof e === "object" && e !== null && e.error === "not_found";
}
function yPs(e) {
  return typeof e === "string" && e.trim() === "no version";
}
var Ie = /* @__PURE__ */ new Set([401, 403, 404, 413]), ze = /* @__PURE__ */ new Set(["organization network policy denies artifact storage reads for this session", "organization network policy could not be determined for this session; artifact storage reads denied"]);
var je = /* @__PURE__ */ new Set(["organization network policy denies artifact storage writes for this session", "organization network policy could not be determined for this session; artifact storage writes denied"]);
function ae(e) {
  if (!e.ok || R9(e) || e.status !== 403 || typeof e.data !== "string") return false;
  let n = e.data.trim();
  return ze.has(n) || ON() && je.has(n);
}
var We = "relay approval required: this change was not approved by the person for this session";
function se(e) {
  return e.ok && !R9(e) && e.status === 403 && typeof e.data === "string" && e.data.trim() === We;
}
var He = /* @__PURE__ */ new Set(["organization network policy denies artifact reads for this session", "organization network policy could not be determined for this session"]), Qpt = "this cloud session's network access is turned off for the organization, or could not be confirmed, so the session gateway does not serve artifact pages or files to it";
function Zpt(e, n) {
  return e === 403 && n !== void 0 && n.byteLength <= 256 && He.has(Buffer.from(n).toString("utf8").trim());
}
var I = 3e5, $e = 15e3, Ve = 65536, de = /* @__PURE__ */ new WeakSet(), fe = /* @__PURE__ */ new WeakMap(), Xe = /^(?:x-frame-[a-z0-9-]+|x-ccr-relay-[a-z0-9-]+|accept|if-match)$/i;
function qe(e) {
  if (!e) return e;
  return Ko(e, (n, r) => Xe.test(r));
}
var wAr = S("boot"), k6 = S("blobs"), lnn = S("comments"), ejn = S("subscriptions"), ce = S("types"), ye = S("type_files"), tjn = S("type_create"), pe = S("db"), zwo = S("sharing"), me = S("publish"), ge = S("frames_external"), Ke = /* @__PURE__ */ new Set([lnn, ejn, wAr, ge, ce, ye, tjn, pe, me, k6, ...[]]), Ze = "tengu_cobalt_plinth_burnet", Je = [...E(wAr, ["GET /{slug}", "GET /versions/{slug}", "GET /frames", "POST /track"]), ...E(ge, ["GET /frames/external"]), ...E(me, ["POST /deploy/direct", "POST /deploy/prepare", "POST /upload", "GET /contract/latest", "GET /contract/{v}", "GET /contract/{v}/{file}", "GET /contract/{v}/prompt", "GET /read/{slug}"]), ...E(lnn, ["GET /comments/{slug}", "POST /comments/{slug}/{thread}", "POST /comments/{slug}/{thread}/resolve", "POST /comments/{slug}/{thread}/summon-status"]), ...E(pe, ["POST /db/agent"]), ...E(ce, ["GET /types", "GET /types/{slug}"]), ...E(tjn, ["POST /types/{slug}/create"]), ...E(S("type_instances"), ["GET /types/{slug}/instances"]), ...E(ye, ["GET /types/{slug}/files/{a}", "GET /types/{slug}/files/{a}/{b}", "GET /types/{slug}/files/{a}/{b}/{c}", "GET /types/{slug}/files/{a}/{b}/{c}/{d}", "GET /types/{slug}/files/{a}/{b}/{c}/{d}/{e}"]), ...E(ejn, ["POST /subscribe/{slug}", "POST /unsubscribe/{slug}"]), ...E(S("delete"), ["DELETE /{slug}"]), ...E(zwo, ["GET /perm/{slug}", "PATCH /perm/{slug}"]), ...E(S("favorites"), ["POST /favorite/{slug}", "DELETE /favorite/{slug}"]), ...[]].sort((e, n) => ie(e) - ie(n));
function E(e, n) {
  return n.map((r) => {
    let [a, l] = r.split(" ");
    return { method: a, pattern: l.split("/"), family: e };
  });
}
function ie(e) {
  return F(e.pattern, (n) => n.startsWith("{"));
}
function JHt(e, n) {
  let r = n.slice(10).replace(/[?#].*$/s, "").split("/");
  return Je.find((l) => l.method === e && l.pattern.length === r.length && l.pattern.every((f, d) => f.startsWith("{") ? r[d] !== "" : f === r[d]))?.family ?? null;
}
var Vwo = "tengu_cobalt_plinth_madder";
function qte() {
  if (!xM()) return false;
  if (JLe() !== void 0) return false;
  if (!k("tengu_cobalt_plinth_sorrel", true)) return false;
  if (!nr() && !k(Vwo, true)) return false;
  return Yti();
}
function ON() {
  return J();
}
function E0(e = null) {
  return qte() && !Re(e);
}
function Re(e) {
  if (!ZEt() && !_e()) return false;
  if (e !== null && ZHt(e)) return false;
  let n = Z().frameRelay;
  if (!n.botContextNoted) n.botContextNoted = true, p("artifact_frame_relay", "bot_context_not_served", { hosted: nr() });
  return true;
}
function Yte() {
  return nr() && qte();
}
var Qe = "tengu_cobalt_plinth_medlar";
function _e() {
  return zg() && k(Qe, false) && XVr();
}
function QHt() {
  if (nr()) return ZEt() && Dzt();
  return _e();
}
function BYe() {
  return xM() && k("tengu_cobalt_plinth_fennel", false) && QHt();
}
var et = "tengu_cobalt_plinth_comfrey";
function njn() {
  return zg() && k(et, false) && BYe();
}
function ZHt(e) {
  return Ke.has(e) && nr() && k(Ze, false) && Jti();
}
function bB(e) {
  return (Z().frameRelay.declinedUntil.get(e) ?? 0) > Date.now();
}
function Xte(e, n = false) {
  let r = Z().frameRelay, a = Date.now() + I;
  if (r.declinedUntil.set(e, a), n) r.hopFailedUntil.set(e, a);
  else r.hopFailedUntil.delete(e);
}
function Kwo(e) {
  return (Z().frameRelay.hopFailedUntil.get(e) ?? 0) > Date.now();
}
function EAr(e) {
  return (Z().frameRelay.servedUntil.get(e) ?? 0) > Date.now();
}
function sle(e) {
  let n = Z().frameRelay;
  n.declinedUntil.delete(e), n.servedUntil.set(e, Date.now() + I), n.vouched.add(e);
}
function jYe(e) {
  return Z().frameRelay.vouched.has(e);
}
function qwo(e) {
  Z().frameRelay.vouched.delete(e);
}
function tt(e) {
  return (Z().frameRelay.directRefusedUntil.get(e) ?? 0) > Date.now();
}
function rjn(e) {
  return e.ok && e.status === 403 && Ywo(e.data);
}
function Ywo(e) {
  return typeof e === "string" && e.trimStart().startsWith(v6);
}
function le(e, n) {
  if (!n.ok) return;
  let { directRefusedUntil: r } = Z().frameRelay;
  if (rjn(n)) r.set(e, Date.now() + I);
  else r.delete(e);
}
function eft(e) {
  if (Yte() || !(e === 401 || e === 403 || e === 404)) return false;
  if (jYe(Dx)) {
    if (e !== 404) qwo(Dx);
    return false;
  }
  return Xte(Dx), true;
}
function HOe(e) {
  if (Yte() || jYe(Dx)) return;
  if (e === void 0 || e === 499) Xte(Dx, true);
}
var be = () => true;
function z(e, n, r) {
  Z().frameRelay.tunnelDeclinedUntil.set(e, Date.now() + I), p("artifact_frame_relay", "tunnel_declined", { family: e, cause: c(n), status: r });
}
var Te = /* @__PURE__ */ new WeakSet();
function ue(e) {
  return typeof e === "object" && e !== null && Te.has(e);
}
async function vAr(e, n, r, a, l) {
  let d = (Z().frameRelay.tunnelDeclinedUntil.get(l) ?? 0) > Date.now() ? void 0 : te();
  if (d !== void 0) {
    let u = 0;
    try {
      let s = await B(e, n, r, { ...a, host: "frame", auth: "session-jwt", frameTunnel: d, maxRedirects: 0 });
      if (!s.ok || R9(s)) return { res: s, tunnelled: true };
      if (u = s.status, u >= 500 || u === 499) return z(l, "hop_failed", u), { res: s, tunnelled: true };
    } catch (s) {
      if (Fa(s)) throw s;
      if (!Q(s)) {
        if (z(l, "threw", 0), typeof s === "object" && s !== null) Te.add(s);
        throw s;
      }
    }
    z(l, u === 0 ? "never_opened" : "refused", u);
  }
  return { res: await B(e, Qti(n), r, { ...a, host: "ccr-gateway", auth: "session-jwt", maxRedirects: 0 }), tunnelled: false };
}
function B(e, n, r, a) {
  switch (e) {
    case "GET":
      return Wt.get(n, a);
    case "POST":
      return Wt.post(n, r, a);
    case "PATCH":
      return Wt.patch(n, r, a);
    case "DELETE":
      return Wt.delete(n, r, a);
  }
}
async function nt(e, n) {
  let r = "answered";
  try {
    let a = await e();
    if (a !== null) return { ...a, mcpWire: r };
    return r = "stood_aside", { ...await n(), mcpWire: r };
  } catch (a) {
    if (typeof a === "object" && a !== null) fe.set(a, r);
    throw a;
  }
}
function Se(e, n, r, a, l = true) {
  if (ON()) throw Error("frameApi: this session may not make the direct call");
  let { recoverOAuth401: f, gzipBody: d, httpOnly: T, ...u } = a, s = { ...u, host: "frame", auth: "claude-ai-oauth", maxRedirects: 0, validateStatus: be, ...f && !i.CLAUDE_CODE_REMOTE && !i.CLAUDE_CODE_REMOTE_SESSION_ID && { recoverOAuth401: f } }, R = l && !T ? gEo(e, n) : null;
  if (R) return nt(() => hEo(R, n, r, s, d?.onEncoding), () => Se(e, n, r, a, false));
  let { streamUpload: w } = u;
  return Sjn({ isRead: e === "GET", wire: "http", signal: u.signal, timeoutMs: s.timeout ?? Z3o, send: (L, P) => {
    let O = { ...s, ...L && { freshConnection: L }, ...P !== void 0 && { timeout: P } };
    if (e !== "POST" || d === void 0 || w === void 0) return B(e, n, r, O);
    return oe({ url: `${Trr()}${n}`, body: r, storageV5: u.storageV5, signal: u.signal, onEncoding: d.onEncoding, send: (y) => y === null ? B(e, n, r, O) : B(e, n, y, { ...O, headers: { ...O.headers, ...re }, streamUpload: { ...w, tailFloorMs: () => d.tailFloorMs } }) });
  } });
}
function rt() {
  return JLe() !== void 0 ? i.CLAUDE_CODE_ARTIFACTS_API_TOKEN : void 0;
}
function kAr() {
  let e = rt();
  if (e) return QLe(`Bearer ${e}`);
  return Arr();
}
async function _Ps(e) {
  if (!ZLe()) return;
  try {
    await pa({ credentials: e });
  } catch {
  }
}
function R9(e) {
  return e.ok && e.response.headers?.[Ue] !== void 0;
}
function j(e) {
  return e.ok && !R9(e) && Ie.has(e.status);
}
function Xwo(e) {
  return { refused: j(e), vouched: R9(e) || e.ok && e.status < 300 };
}
function dnn() {
  return qte() && !nr();
}
function he(e, n, r, a = false) {
  let l = r !== "fallback", f = r === "strict" && xM(), d = ON(), T = qte(), u = T ? JHt(e, n) : null;
  if (T && Re(u)) return d || f || r === "only" && nr() ? { leg: "not-served", relaying: false, family: null } : { leg: "direct", relaying: false, family: null };
  let s = T;
  if (u === null) return { leg: d || f || l && nr() && s ? "unsent" : "direct", relaying: s, family: u };
  let R = (r === "fallback" || r === "bound" && !Ee(u)) && !(a && nr() && tt(u));
  if (!d && bB(u) && (R || !nr() && !f && Kwo(u))) return { leg: "direct", relaying: s, family: u };
  return { leg: "relay", relaying: true, family: u };
}
function Ee(e) {
  return ON() || nr() && (e === null || !ZHt(e));
}
function ot(e, n) {
  switch (e) {
    case "strict":
      return xM();
    case "only":
      return nr();
    case "bound":
      return Ee(n);
    case "fallback":
      return false;
  }
}
function ojn(e, n, r = "fallback") {
  return ON() || he(e, n, r).leg === "relay" ? "relay" : "direct";
}
async function A(e, n, r, a, l = "fallback") {
  let f = ON() || ot(l, JHt(e, n)), { relayProbe: d, relayOnCredentialRefusal: T, ...u } = a, s = async () => ({ ...await Se(e, n, r, u), route: "direct", fromFrame: true }), R = he(e, n, l, T), w = R.relaying && !nr(), L = (o, h) => l === "fallback" ? { ok: false, reason: "no-auth", detail: `its artifact connection did not carry the request${h ? ` (HTTP ${h})` : ""}, so nothing was sent${o === "relay-unavailable" ? "; one retry is safe" : ""}`, route: "relay", fromFrame: false } : { ok: false, reason: o, status: h, route: "relay", fromFrame: false }, P = (o, h) => (p("artifact_frame_relay", "relay_only_unavailable", { ...R.family !== null && { family: R.family }, status: o, probed: h, ...w && { runner: true } }), L("relay-unavailable", o));
  if (R.leg === "not-served") return L("relay-not-served", 0);
  if (R.leg === "unsent") return P(0, false);
  let O, y;
  if (R.leg === "relay") y = R.family;
  else {
    let o = await s();
    if (R.family === null || !nr()) return o;
    if (le(R.family, o), !o.ok || !rjn(o)) return o;
    if (p("artifact_frame_relay", "direct_refused", { family: R.family, status: o.status, reoffered: T === true }), !T) return o;
    y = R.family, O = o;
  }
  let C = false, x = () => ({ ...w && { runner: true }, ...C && { tunnel: true }, ...O !== void 0 && { reoffered: true } }), G = async () => {
    if (O !== void 0) return O;
    let o = await s();
    if (!w) {
      if (le(y, o), o.ok && rjn(o)) p("artifact_frame_relay", "direct_refused", { family: y, status: o.status, reoffered: false });
    }
    return o;
  }, { refreshOAuth: at, isBackground: st, credentials: it, recoverOAuth401: lt, gzipBody: ut, httpOnly: dt, ...H } = u, V = async (o, h, D, M) => {
    let K = await vAr(o, h, D, { ...M, headers: qe(M.headers), validateStatus: be }, y);
    return C = K.tunnelled, K.res;
  }, N = async (o, h) => {
    if (Xte(y, o === 0 || o >= 500), f) return P(o, h);
    let D;
    try {
      let M = await G();
      return D = M.ok ? M.status : void 0, { ...M, gatewayDeclined: o };
    } finally {
      p("artifact_frame_relay", "relay_unavailable", { family: y, status: o, probed: h, ...D !== void 0 && { direct_status: D }, ...x() });
    }
  };
  if (d !== void 0 && !EAr(y)) {
    let o;
    try {
      o = await V("GET", d, void 0, { signal: H.signal, timeout: $e, maxContentLength: Ve });
    } catch (h) {
      if (Fa(h)) throw h;
      return C = ue(h), N(0, true);
    }
    if (!o.ok) return f ? P(0, true) : G();
    if (ae(o)) p("artifact_frame_relay", "relay_policy_refused", { family: y, status: o.status, probed: true, ...x() });
    else if (j(o) || !R9(o) && (o.status >= 500 || o.status === 499)) return N(o.status, true);
    else if (!R9(o) && o.status >= 300) return f ? P(o.status, true) : G();
    sle(y);
  }
  let b;
  try {
    b = await V(e, n, r, H);
  } catch (o) {
    if (!Fa(o)) {
      if (C = ue(o), LH(o) !== void 0) return N(0, false);
      if (Xte(y, true), m("artifact_frame_relay", "request_error", { family: y, ...x() }), typeof o === "object" && o !== null) de.add(o);
    }
    throw o;
  }
  if (!b.ok) return f ? P(0, false) : G();
  if (ae(b) || se(b)) {
    let o = se(b);
    return sle(y), p("artifact_frame_relay", o ? "relay_approval_refused" : "relay_policy_refused", { family: y, status: b.status, ...x() }), { ...b, route: "relay", fromFrame: false, gatewayPolicy: o ? "unapproved" : "network-off" };
  }
  if (j(b)) return N(b.status, false);
  let X = R9(b), q = X || b.status < 300;
  if (q) sle(y), g("artifact_frame_relay", { family: y, status: b.status, upstream: X, ...x() });
  else if (b.status >= 500 || b.status === 499) {
    let o = l !== "fallback" && b.status === 503 ? b.response.headers?.["retry-after"] : void 0, h = Oh(typeof o === "string" ? o : void 0);
    if (h !== void 0) return p("artifact_frame_relay", "relay_busy", { family: y, status: b.status, retry_after_ms: h, ...x() }), { ...b, route: "relay", fromFrame: false, gatewayRetryAfterMs: h };
    Xte(y, true), m("artifact_frame_relay", "relay_error", { family: y, status: b.status, ...x() });
  } else p("artifact_frame_relay", "relay_refused", { family: y, status: b.status, ...x() });
  return { ...b, route: "relay", fromFrame: q };
}
function JR(e) {
  return typeof e === "object" && e !== null && de.has(e);
}
function Fe(e) {
  switch (e) {
    case "answered":
      return S("mcp");
    case "stood_aside":
      return S("http_fallback");
    case void 0:
      return S("http");
  }
}
function ile(e) {
  return e.route === "relay" ? S("relay") : Fe(e.mcpWire);
}
function Wme(e) {
  if (JR(e)) return S("relay");
  return Fe(typeof e === "object" && e !== null ? fe.get(e) : void 0);
}
var cu = { get(e, n) {
  return A("GET", e, void 0, n);
}, post(e, n, r) {
  return A("POST", e, n, r);
}, postRelayOnly(e, n, r) {
  return A("POST", e, n, r, "only");
}, postRelayStrict(e, n, r) {
  return A("POST", e, n, r, "strict");
}, getRelayOnly(e, n) {
  return A("GET", e, void 0, n, "only");
}, postRelayBound(e, n, r) {
  return A("POST", e, n, r, "bound");
}, getRelayBound(e, n) {
  return A("GET", e, void 0, n, "bound");
}, patchRelayOnly(e, n, r) {
  return A("PATCH", e, n, r, "only");
}, deleteRelayOnly(e, n) {
  return A("DELETE", e, void 0, n, "only");
} };
export {
  BYe,
  E0,
  EAr,
  HOe,
  JHt,
  JR,
  Kwo,
  ON,
  QHt,
  Qpt,
  R7,
  R9,
  UYe,
  Vwo,
  Wme,
  Xte,
  Xwo,
  Yte,
  Ywo,
  ZHt,
  Zpt,
  _Ps,
  bAr,
  bB,
  cu,
  dnn,
  eft,
  ejn,
  hPs,
  ile,
  jYe,
  k6,
  kAr,
  lnn,
  njn,
  ojn,
  qte,
  qwo,
  rjn,
  sle,
  tjn,
  v6,
  vAr,
  wAr,
  yPs,
  zwo
};
