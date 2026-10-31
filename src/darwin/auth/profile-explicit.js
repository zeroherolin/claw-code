// darwin/auth/profile-explicit.js — Claude Code 2.1.310（darwin）模块 chunk-b7t3ypkx.js
import { ir, d, Kt, TT } from "../telemetry/anthropic-workspace-id.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { rn } from "./oauth-2025-04-20.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { L, U, J } from "../context/not-admin-owned.js";
import { Pm, ee, ie, t } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "../shared/environment.js";
import { o, oe, u, B, T } from "../vendor/zod/string-format.js";
import { Zm } from "../telemetry/chunk-a27d4004.js";
var gqt = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/g;
function x(e) {
  return /^https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+$/.test(e);
}
var K = { ")": "(", "]": "[", "}": "{" };
function Nse(e) {
  while (e.length > 0) {
    let n = e.at(-1);
    if (".,;:!?".includes(n)) {
      e = e.slice(0, -1);
      continue;
    }
    let r = K[n];
    if (!r) break;
    let s = 0, c = 0;
    for (let a of e) if (a === r) s++;
    else if (a === n) c++;
    if (c > s) e = e.slice(0, -1);
    else break;
  }
  return e;
}
function cQo(e) {
  for (let n of e.matchAll(gqt)) return Nse(n[0]);
  return;
}
var Z = "tengu_lively_beaver";
class S {
  reader = null;
  register(e) {
    let n = this.reader;
    return this.reader = e, n;
  }
}
var N = new S();
function zci(e) {
  return N.register(e);
}
function hqt() {
  let e = N.reader;
  if (!e) return false;
  try {
    return e(Z, false) === true;
  } catch {
    return false;
  }
}
var fTt = "account_on_hold", yqt = "https://claude.ai/restricted", y = "Your account is on hold and can't use Claude Code. View details or appeal: ";
function uQo(e) {
  return `${y}${e}`;
}
function Lar(e) {
  return `Your account is on hold and can't sign in to Claude Code. View details or appeal: ${e}`;
}
var Te = uQo(yqt);
function pQo(e) {
  if (!hqt() || !e.startsWith(y)) return false;
  let n = e.slice(y.length);
  return x(n) && Aqe(n) === n;
}
var v = 2048, X = /^https:\/\/[a-z0-9.-]+\/[A-Za-z0-9/._~%-]*(?:\?[A-Za-z0-9._~%=&-]*)?(?<![.?])$/;
function Q(e) {
  try {
    return e === new URL(rn().CLAUDE_AI_ORIGIN).origin;
  } catch {
    return false;
  }
}
function Aqe(e) {
  if (typeof e !== "string" || e.length > v) return yqt;
  let n;
  try {
    n = new URL(e);
  } catch {
    return yqt;
  }
  if (n.protocol !== "https:" || n.username || n.password || n.port || n.hash) return yqt;
  let r = n.hostname;
  return (r === "claude.ai" || r.endsWith(".claude.ai") || r === "anthropic.com" || r.endsWith(".anthropic.com") || Q(n.origin)) && n.href.length <= v && X.test(n.href) ? n.href : yqt;
}
var te = f(() => u({ error: B(["invalid_grant", "access_denied"]), error_description: T(fTt), error_uri: oe().optional() }));
function vvn(e) {
  if (!hqt()) return null;
  let n = e;
  if (typeof n === "string") {
    if (!n.includes(fTt)) return null;
    try {
      n = ee(n);
    } catch {
      return null;
    }
  }
  let r = te().safeParse(n);
  return r.success ? { url: Aqe(r.data.error_uri) } : null;
}
class rbe extends Error {
  url;
  constructor(e) {
    super("OAuth account is on hold");
    this.url = e;
    this.name = "OAuthAccountOnHoldError";
  }
}
class UZ extends Error {
  error;
  errorDescription;
  errorUri;
  displayMessage;
  constructor(e, n, r) {
    super("OAuth authorization was denied or failed");
    this.error = e;
    this.errorDescription = n;
    this.errorUri = r;
    this.name = "OAuthCallbackError", this.displayMessage = n ? `${e}: ${n}` : e;
  }
}
function Nar(e) {
  return e instanceof UZ && e.errorDescription === fTt;
}
var Vci = "urn:ietf:params:oauth:grant-type:jwt-bearer", Kci = "refresh_token", e8r = "/v1/oauth/token", mTt = "oauth-2025-04-20", qci = "oidc-federation-2026-04-01", Yci = 120, gTt = 30, Xci = 5, C = 1048576;
function t8r(e) {
  if (!e) return;
  let n;
  try {
    n = new URL(e);
  } catch (s) {
    throw new Tp(`Invalid token endpoint base URL "${e}": ${s}`);
  }
  if (n.protocol === "https:") return;
  let r = n.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (n.protocol === "http:" && (r === "localhost" || r === "127.0.0.1" || r === "::1")) return;
  throw new Tp(`Refusing to send credential over non-https token endpoint "${e}"`);
}
async function n8r(e, n) {
  let r = await re(e), s;
  try {
    s = JSON.parse(r);
  } catch {
    throw new Tp(`Token endpoint returned non-JSON response (status ${e.status})`, e.status, Mpe(r), n);
  }
  if (!s.access_token) throw new Tp(`Token endpoint response missing access_token: ${JSON.stringify(Mpe(s))}`, e.status, Mpe(s), n);
  if (s.token_type && s.token_type.toLowerCase() !== "bearer") throw new Tp(`Token endpoint response: unsupported token_type "${s.token_type}" (want Bearer)`, e.status, Mpe(s), n);
  return s;
}
var R = 2e3, ne = /* @__PURE__ */ new Set(["error", "error_description", "error_uri"]);
function Mpe(e) {
  if (e == null) return e;
  if (typeof e === "string") {
    let n;
    try {
      n = JSON.parse(e);
    } catch {
      if (e.length <= R) return e;
      return e.slice(0, R) + `... <${e.length - R} more chars>`;
    }
    return JSON.stringify(Mpe(n));
  }
  if (typeof e === "object" && !Array.isArray(e)) {
    let n = {};
    for (let [r, s] of Object.entries(e)) if (ne.has(r)) n[r] = s;
    return n;
  }
  return null;
}
async function kvn(e, n = (r) => console.warn(`anthropic-sdk: ${r}`)) {
  if (typeof process > "u") return;
  let { fs: r } = await import("../shell/chunk-e7957482.js"), s = e, c;
  try {
    s = await r.promises.realpath(e), c = await r.promises.stat(s);
  } catch {
    return;
  }
  let a = c.mode & 511;
  if (a & 18) throw new Tp(`Credentials file at ${s} is group/world-writable (mode 0o${a.toString(8)}); this allows other local users to plant tokens. Run \`chmod 600 ${s}\`.`);
  if (a & 36) throw new Tp(`Credentials file at ${s} is group/world-readable (mode 0o${a.toString(8)}); run \`chmod 600 ${s}\` before retrying.`);
  if (typeof process.getuid === "function" && c.uid !== process.getuid()) n(`credentials file at ${s} is owned by uid ${c.uid} (current process uid ${process.getuid()}); verify this is intentional.`);
}
async function Rqe(e, n) {
  let { fs: r, path: s } = await import("../shell/chunk-e7957482.js"), c = s.dirname(e);
  await r.promises.mkdir(c, { recursive: true, mode: 448 });
  let a = `${e}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;
  try {
    let l = await r.promises.open(a, "w", 384);
    try {
      await l.writeFile(JSON.stringify(n, null, 2)), await l.sync();
    } finally {
      await l.close();
    }
    await r.promises.rename(a, e);
  } catch (l) {
    throw await r.promises.unlink(a).catch(() => {
    }), l;
  }
  try {
    let l = await r.promises.open(c, "r");
    try {
      await l.sync();
    } finally {
      await l.close();
    }
  } catch {
  }
}
async function re(e) {
  if (!e.body) return "";
  let n = e.body.getReader(), r = [], s = 0;
  for (; ; ) {
    let { done: a, value: l } = await n.read();
    if (a) break;
    if (s + l.length > C) {
      let h = C - s;
      if (h > 0) r.push(l.subarray(0, h));
      await n.cancel();
      break;
    }
    r.push(l), s += l.length;
  }
  let c;
  if (r.length === 1) c = r[0];
  else {
    c = new Uint8Array(r.reduce((l, h) => l + h.length, 0));
    let a = 0;
    for (let l of r) c.set(l, a), a += l.length;
  }
  return new TextDecoder("utf-8").decode(c);
}
class Tp extends ir {
  constructor(e, n = null, r = null, s = null) {
    super(e);
    this.statusCode = n, this.body = r, this.requestId = s;
  }
}
import { lstatSync as se, readdirSync as $e, readFileSync as ae, realpathSync as ce } from "fs";
import { basename as P, dirname as le, isAbsolute as b, join as p, parse as ue, relative as fe, resolve as O, sep as z } from "path";
function xqe(e) {
  if (!(e instanceof Tp) || e.statusCode !== 400 && e.statusCode !== 401 && e.statusCode !== 403) return null;
  return vvn(e.body);
}
function hTt(e) {
  return e instanceof Tp && e.statusCode === null && e.message.includes("has expired and no refresh is available");
}
var de = ["ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID"];
class j {
  precedenceSource = { filled: false };
  authType = { filled: false };
  profileBaseUrl = { filled: false };
  accountInfo = { filled: false };
  federationIdentity = { filled: false };
  profileStoreDenyPaths = { filled: false };
  settingsBearerRejected = false;
  primedFiles = void 0;
}
var g = new W(() => new j());
function AE() {
  let e = g.of(U().host);
  if (e.precedenceSource.filled) return e.precedenceSource.value;
  let n = pe();
  return e.precedenceSource = { filled: true, value: n }, n;
}
function pe() {
  let e = DH(), n = G();
  if (n) {
    if (e === null) return null;
    let r = F(e, n);
    return r === "oidc_federation" || r === "user_oauth" ? "profile-explicit" : null;
  }
  if (Y()) return "env-quad";
  if (e !== null) {
    let r = F(e, dxe(e));
    if (r === "oidc_federation" || r === "user_oauth") return "profile-implicit";
  }
  return null;
}
function Cvn() {
  let e = g.of(U().host);
  e.precedenceSource = { filled: false }, e.authType = { filled: false }, e.profileBaseUrl = { filled: false }, e.federationIdentity = { filled: false }, e.profileStoreDenyPaths = { filled: false }, e.settingsBearerRejected = false, _qt();
}
function _qt() {
  g.of(U().host).accountInfo = { filled: false };
}
function ost() {
  return AE() !== null;
}
function Hpe() {
  let e = g.of(U().host);
  if (e.authType.filled) return e.authType.value;
  let n = ge();
  return e.authType = { filled: true, value: n }, n;
}
function ge() {
  let e = AE();
  if (e === null) return null;
  if (e === "env-quad") return "oidc_federation";
  let n = DH();
  if (n === null) return null;
  let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : dxe(n), s = F(n, r);
  return s === "oidc_federation" || s === "user_oauth" ? s : null;
}
function Pqe() {
  return AE() === "profile-implicit" && Hpe() === "user_oauth";
}
function g5() {
  let e = g.of(U().host);
  if (e.accountInfo.filled) return e.accountInfo.value;
  let n = he();
  return e.accountInfo = { filled: true, value: n }, n;
}
function he() {
  let e = AE();
  if (e === null || e === "env-quad") return;
  let n = DH();
  if (n === null) return;
  let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : dxe(n);
  return r8r(n, r);
}
function r8r(e, n) {
  let r = m(E(e, n));
  if (r === null) return;
  try {
    let s = JSON.parse(r);
    return { organizationUuid: s.organization_uuid, organizationName: s.organization_name, accountEmail: s.account_email, workspaceId: s.workspace_id, workspaceName: s.workspace_name };
  } catch {
    return;
  }
}
function Sqt() {
  let e = AE();
  if (e === "env-quad") {
    let n = process.env.ANTHROPIC_WORKSPACE_ID?.trim();
    return `env-quad · org ${w(process.env.ANTHROPIC_ORGANIZATION_ID ?? "")} · rule ${w(process.env.ANTHROPIC_FEDERATION_RULE_ID ?? "")}${n ? ` · ws ${n.startsWith("wrkspc_") ? w(n) : n}` : ""}`;
  }
  if (e === "profile-explicit" || e === "profile-implicit") {
    let n = DH(), r = n === null ? "default" : e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : dxe(n);
    return `credentials-file · ${Hpe() ?? "unknown"} · profile ${r}`;
  }
  return "inactive";
}
function w(e) {
  return e.length <= 6 ? e : `…${e.slice(-6)}`;
}
function EFe() {
  let e = g.of(U().host);
  if (e.profileBaseUrl.filled) return e.profileBaseUrl.value;
  let n = me();
  return e.profileBaseUrl = { filled: true, value: n }, n;
}
function me() {
  let e = AE();
  if (e === null || e === "env-quad") return;
  let n = DH();
  if (n === null) return;
  try {
    let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : dxe(n), s = m(p(n, "configs", `${r}.json`));
    if (s === null) return;
    let c = JSON.parse(s);
    return typeof c.base_url === "string" && c.base_url.trim() ? c.base_url.trim() : void 0;
  } catch {
    return;
  }
}
var _e = f(() => u({ organization_id: o().optional(), workspace_id: o().optional(), authentication: u({ type: o().optional(), federation_rule_id: o().optional() }).loose().optional() }).loose());
function LIi() {
  let e = g.of(U().host);
  if (e.federationIdentity.filled) return e.federationIdentity.value;
  let n = Ie();
  return e.federationIdentity = { filled: true, value: n }, n;
}
function Ie() {
  let e = AE();
  if (e === null) return;
  if (e === "env-quad") return k({ organizationId: i.ANTHROPIC_ORGANIZATION_ID, federationRuleId: i.ANTHROPIC_FEDERATION_RULE_ID, workspaceId: i.ANTHROPIC_WORKSPACE_ID });
  let n = DH();
  if (n === null) return;
  try {
    let r = m(p(n, "configs", `${Avn(n)}.json`));
    if (r === null) return;
    let s = _e().safeParse(ee(r));
    if (!s.success || s.data.authentication?.type !== "oidc_federation") return;
    return k({ organizationId: s.data.organization_id, federationRuleId: s.data.authentication.federation_rule_id, workspaceId: s.data.workspace_id });
  } catch {
    return;
  }
}
function k({ organizationId: e, federationRuleId: n, workspaceId: r }) {
  let s = e?.trim(), c = n?.trim();
  if (!s || !c) return;
  let a = r?.trim() || void 0;
  return { organizationId: s, federationRuleId: c, ...a !== void 0 && { workspaceId: a } };
}
function fQo() {
  return g.of(U().host).settingsBearerRejected;
}
function mQo(e) {
  g.of(U().host).settingsBearerRejected = e;
}
var Oe = ["configs", "credentials"], Ae = ["active_config"];
function Tvn() {
  let e = g.of(U().host);
  if (e.profileStoreDenyPaths.filled) return e.profileStoreDenyPaths.value;
  let { value: n, complete: r } = ye();
  if (r) e.profileStoreDenyPaths = { filled: true, value: n };
  return n;
}
function ye() {
  let e = DH();
  if (e === null) return { value: null, complete: true };
  let n = { dirs: [e], files: [] };
  try {
    let r = O(e);
    n = D(r) ? { dirs: Oe.map((a) => p(r, a)), files: Ae.map((a) => p(r, a)) } : { dirs: [r], files: [] };
    let c = we(e, Avn(e)).filter((a) => !n.dirs.some((l) => a === l || a.startsWith(l + z)) && !n.files.includes(a) && !D(a) && !Fe(a));
    return { value: { dirs: n.dirs, files: [...n.files, ...c] }, complete: true };
  } catch (r) {
    return t(`WIF profile store: could not resolve the active profile's credentials path (${d(r)}); denying the store root only`, { level: "warn" }), { value: n, complete: false };
  }
}
function Re(e, n) {
  let r = E(e, n);
  if (!r) return p(e, "credentials", `${n}.json`);
  return typeof r === "string" ? r : null;
}
function we(e, n) {
  let r = Re(e, n);
  if (r === null || !r.trim()) return [];
  return L(b(r) ? [O(r)] : [O(e, r), O(r)]);
}
function o8r(e) {
  return !!e && /^[A-Za-z0-9_.-]+$/.test(e) && e !== "." && e !== "..";
}
function dxe(e) {
  return m(p(e, "active_config"))?.trim() || "default";
}
function Avn(e) {
  return process.env.ANTHROPIC_PROFILE?.trim() || dxe(e);
}
function F(e, n) {
  let r = m(p(e, "configs", `${n}.json`));
  if (r === null) return null;
  let s;
  try {
    s = JSON.parse(r);
  } catch {
    return null;
  }
  let c = s?.authentication?.type ?? null;
  if (c === "user_oauth") {
    if (!m(E(e, n, s))?.trim()) return null;
  }
  return c;
}
function E(e, n, r) {
  if (r === void 0) {
    let s = m(p(e, "configs", `${n}.json`));
    if (s !== null) try {
      r = JSON.parse(s);
    } catch {
    }
  }
  return r?.authentication?.credentials_path ?? p(e, "credentials", `${n}.json`);
}
function DH() {
  return M()?.dir ?? null;
}
function M() {
  if (J()) return null;
  let e = process.env, n = e.ANTHROPIC_CONFIG_DIR?.trim();
  if (n) return { dir: n, space: "userNamed" };
  let r = e.XDG_CONFIG_HOME?.trim();
  if (r) return { dir: p(r, "anthropic"), space: "home" };
  let s = e.HOME?.trim();
  return s ? { dir: p(s, ".config", "anthropic"), space: "home" } : null;
}
function G() {
  return process.env.ANTHROPIC_PROFILE?.trim();
}
function Y() {
  return de.every((e) => process.env[e]?.trim());
}
function D(e) {
  let n = H(e);
  if (n === ue(n).root) return true;
  let r = fe(n, H(ie().cwd())), s = r.split(z)[0];
  return r === "" || s !== ".." && !b(r);
}
function H(e) {
  let n = O(e), r = "";
  for (; ; ) try {
    n = p(ce.native(n), r);
    break;
  } catch {
    let s = le(n);
    if (s === n) {
      n = p(n, r);
      break;
    }
    r = r ? p(P(n), r) : P(n), n = s;
  }
  return n.toLowerCase();
}
function Fe(e) {
  try {
    return se(e).isDirectory();
  } catch {
    return false;
  }
}
function m(e) {
  let n = g.of(U().host).primedFiles;
  if (n !== void 0 && n.has(e)) return n.get(e) ?? null;
  try {
    return ae(e, "utf-8");
  } catch (r) {
    if (Kt(r)) return null;
    throw r;
  }
}
async function gQo(e) {
  let n = g.of(U().host), r = M();
  if (n.precedenceSource.filled || r === null) return;
  let { dir: s, space: c } = r, a = /* @__PURE__ */ new Map(), l = async (_) => {
    let I;
    try {
      I = await e.hostFiles.readText(Pm[c](_));
    } catch (A) {
      return t(`WIF profile read-ahead: the storage backend threw reading ${_}: ${d(A)}`, { level: "warn" }), null;
    }
    if (I.ok) {
      let A = I.value.found ? I.value.value : null;
      return a.set(_, A), A;
    }
    if (TT(Zm(I.error))) a.set(_, null);
    return null;
  }, h = G();
  if (!h && Y()) return;
  let q = h || (await l(p(s, "active_config")))?.trim() || "default";
  await l(p(s, "configs", `${q}.json`)), n.primedFiles = a;
  try {
    AE(), Hpe();
  } catch (_) {
    t(`WIF profile read-ahead: left to the first reader: ${d(_)}`);
  } finally {
    n.primedFiles = void 0;
  }
}
export {
  AE,
  Aqe,
  Avn,
  Cvn,
  DH,
  EFe,
  Hpe,
  Kci,
  LIi,
  Lar,
  Mpe,
  Nar,
  Nse,
  Pqe,
  Rqe,
  Sqt,
  Tp,
  Tvn,
  UZ,
  Vci,
  Xci,
  Yci,
  _qt,
  cQo,
  dxe,
  e8r,
  fQo,
  fTt,
  g5,
  gQo,
  gTt,
  gqt,
  hTt,
  hqt,
  kvn,
  mQo,
  mTt,
  n8r,
  o8r,
  ost,
  pQo,
  qci,
  r8r,
  rbe,
  t8r,
  uQo,
  vvn,
  xqe,
  yqt,
  zci
};
