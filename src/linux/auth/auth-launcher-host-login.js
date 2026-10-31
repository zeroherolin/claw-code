// linux/auth/auth-launcher-host-login.js — Claude Code 2.1.310（linux）模块 chunk-38g9s4wc.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { wr } from "../models/claude-3-5-sonnet.js";
import { D } from "../shared/chunk-0870a9b4.js";
import { h2, i } from "../shared/environment.js";
import { U, oie, NTn, bee } from "../context/not-admin-owned.js";
import { y2, rn } from "./oauth-2025-04-20.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { cB, TH, cfe, Y9o, qXo } from "../shell/invalid-type.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { pe, LNe, _9o } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { lfe, Ae, of, Hu } from "../models/total-tokens-reminder.js";
import { b$e, dE, tW } from "./descriptor-direct.js";
import { Cfe } from "../shared/chunk-3e787a95.js";
import { et } from "../shared/chunk-061dbb8e.js";
function tfe() {
  let { forceLoginMethod: e, forceLoginGatewayUrl: n } = LNe();
  return e === "gateway" || n !== void 0;
}
function INe() {
  return !i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && !S() && tfe();
}
function S() {
  return lfe.some((e) => i[e]);
}
var p8o = ["signed_out", "identity_changed", "transient", "refresh_failed"];
function xai(e) {
  return p8o.some((n) => n === e);
}
var c = 0, _;
function Pai(e) {
  c++, _ = { reason: e, generation: c };
}
function Iai() {
  c++, _ = void 0;
}
function csr() {
  return _;
}
function qVt() {
  return c;
}
class h {
  token = null;
  everHeld = /* @__PURE__ */ new Set();
  identity = null;
  hasIdentitySaidNothing = false;
  identityReasksMade = 0;
  identityOf = null;
  endedAtRead = null;
  hasEndToSettle = false;
  renewalHoldOffUntilMs = 0;
  judgeReplacement = null;
  readFlag = null;
  replacing = Promise.resolve();
  startupAskIds = /* @__PURE__ */ new Set();
  wasLauncherStarted = false;
  wasOpenToSignIn = false;
}
var l = new W(() => new h()), y = h2(Object.fromEntries([...cB, ...TH, ...cfe, ...Y9o, "ANTHROPIC_UNIX_SOCKET", "CLAUDE_CODE_CUSTOM_OAUTH_URL", "ANTHROPIC_BASE_URL", "ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_HOST_CREDS_FILE", "CLAUDE_SESSION_INGRESS_TOKEN_FILE", ...Cfe].map((e) => [e, D.rawStr()])), null), p = 6e4, R = [5e3, 3e4, 12e4], O = 6e5;
function yI() {
  let e = l.of(U().host);
  return e.wasLauncherStarted ||= Boolean(i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && i.CLAUDE_CODE_HOST_AUTH_ENV_VAR), e.wasOpenToSignIn ||= e.wasLauncherStarted && i.CLAUDE_CODE_ENTRYPOINT !== "claude-desktop-3p", e.wasLauncherStarted;
}
function m8o() {
  return yI(), l.of(U().host).wasOpenToSignIn;
}
function g8o() {
  let e = l.of(U().host);
  e.wasLauncherStarted = false, e.wasOpenToSignIn = false, yI();
}
function Dqe() {
  if (!yI()) return "not_launcher_started";
  if (i.CLAUDE_CODE_DISABLE_LAUNCHER_SIGN_IN) return "switched_off";
  if (Ae() !== "firstParty") return "not_first_party";
  if (tfe()) return "gateway_mandate";
  if (LNe().forceLoginMethod === "console") return "login_method_pin";
  if (!of()) return "custom_base_url";
  let e = f((n) => {
    let o = y[n];
    return typeof o === "string" ? o : void 0;
  });
  if (e !== null) return e;
  try {
    if (!A(rn().BASE_API_URL)) return "api_base_not_anthropic";
  } catch {
    return "api_base_not_anthropic";
  }
  if (y2() === "-local-oauth") return "endpoint_override";
  if (b$e() || dE() || tW() || [...cfe, "CLAUDE_BG_AUTH_SNAPSHOT_PATH"].some((n) => NTn(n)) || wr() && pe("flagSettings")?.apiKeyHelper) return "launcher_credential";
  try {
    let { envs: n, apiKeyHelper: o, unread: r } = _9o();
    if (o || n.some((u) => f((s) => u[s]) !== null)) return "machine_policy_credential";
    if (n.some((u) => Ne(u.CLAUDE_CODE_DISABLE_LAUNCHER_SIGN_IN))) return "switched_off";
    if (r) return "machine_policy_unread";
  } catch (n) {
    return t(`[launcher-host-login] the read of the machine's managed settings threw (${n instanceof Error ? n.name : "unknown"})`, { level: "error" }), "machine_policy_unread";
  }
  if (qXo()) return "served_policy_unread";
  try {
    let { readFlag: n } = l.of(U().host);
    return n?.("tengu_kestrel_lantern", true) === false ? "switched_off" : null;
  } catch {
    return null;
  }
}
function mM() {
  if (!yI()) return null;
  let e = l.of(U().host);
  return e.token !== null && a(e) === null ? e.token : null;
}
function YVt() {
  let e = l.of(U().host);
  if (e.token !== null) a(e);
  if (e.endedAtRead !== null) e.endedAtRead = null, m("auth_launcher_host_login", "refused_while_held");
  let n = e.hasEndToSettle;
  return e.hasEndToSettle = false, n;
}
function h8o(e) {
  l.of(U().host).readFlag = e;
}
function y8o(e) {
  l.of(U().host).judgeReplacement = e;
}
function _8o(e) {
  if (!e || Dqe() !== null) return false;
  let n = l.of(U().host);
  return n.token = e, n.everHeld.add(et(e)), true;
}
function Vkt(e) {
  let n = l.of(U().host).everHeld;
  return n.size > 0 && n.has(et(e));
}
function mwn(e) {
  return Vkt(e) && mM() === null;
}
function bZ(e) {
  return e !== null && Vkt(e.accessToken) ? null : e;
}
function qkt(e) {
  let n = l.of(U().host);
  if (n.identityOf = e, n.identity !== null && !n.hasIdentitySaidNothing) return n.identity;
  let o = mM();
  if (o === null) return n.identity ?? Promise.resolve(null);
  let r = e(o).catch(() => null);
  return n.identity = r, n.hasIdentitySaidNothing = false, r.then((u) => {
    if (u !== null || n.identity !== r) return;
    n.hasIdentitySaidNothing = true;
    let s = R[n.identityReasksMade] ?? O;
    n.identityReasksMade += 1, setTimeout(I, s, n, r, e).unref();
  }), r;
}
function I(e, n, o) {
  try {
    if (e.identity === n && l.of(U().host) === e) qkt(o);
  } catch {
    t("[launcher-host-login] asking again whose sign-in this is threw", { level: "warn" });
  }
}
function b8o() {
  return l.of(U().host).identity;
}
function S8o() {
  let { identityOf: e } = l.of(U().host);
  return e === null ? Promise.resolve(null) : qkt(e);
}
function w8o(e) {
  l.of(U().host).startupAskIds.add(e);
}
function v8o(e) {
  return yI() && typeof e === "string" && l.of(U().host).startupAskIds.has(e);
}
function jRe() {
  let e = l.of(U().host), n = e.token !== null;
  return e.token = null, e.hasEndToSettle ||= n, n;
}
function a(e) {
  let n = Dqe();
  if (n !== null && e.token !== null) e.token = null, e.endedAtRead = n, e.hasEndToSettle = true, t(`[launcher-host-login] the desktop app's sign-in is over for this process (refused_while_held: ${n})`, { level: "warn" });
  return n;
}
function E8o(e) {
  let n = l.of(U().host);
  return L(n, () => w(n, e));
}
function k8o(e) {
  let n = l.of(U().host), o;
  try {
    o = a(n);
  } catch (r) {
    return E(r), null;
  }
  if (!e || n.token === null || o !== null) return t(`[launcher-host-login] refused a pushed claude.ai token (${o ?? (e ? "none_held" : "empty")})`, { level: "warn" }), null;
  return L(n, () => H(n, e));
}
function L(e, n) {
  let o = e.replacing.then(n).catch((r) => (E(r), false));
  return e.replacing = o, o;
}
function E(e) {
  t(`[launcher-host-login] replacing the token held threw (${e instanceof Error ? e.name : "unknown"})`, { level: "error" });
}
async function w(e, n) {
  if (e.token === null || a(e) !== null) return false;
  if (e.token !== n) return true;
  let o = oie();
  if (!o || Date.now() < e.renewalHoldOffUntilMs) return false;
  let r = qVt(), u;
  try {
    u = await o();
  } catch (s) {
    return t(`[launcher-host-login] oauth_token_refresh failed (${s instanceof Error ? s.name : "unknown"})`, { level: "warn" }), e.renewalHoldOffUntilMs = Date.now() + p, m("auth_launcher_host_login", "request_failed"), false;
  }
  if (e.token === null) return false;
  if (Dqe() !== null) return d(e, "refused_after_answer"), false;
  if (!u) {
    let s = csr();
    if (s !== void 0 && s.generation > r && s.reason === "identity_changed") return d(e, "identity_changed"), false;
    return m("auth_launcher_host_login", "no_token"), false;
  }
  if (u === n) return m("auth_launcher_host_login", "same_token"), false;
  return H(e, u, true);
}
async function H(e, n, o = false) {
  if (e.token === null || a(e) !== null) return false;
  if (n === e.token) return true;
  let r = "refused";
  try {
    if (e.judgeReplacement !== null) r = await e.judgeReplacement(n);
  } catch (u) {
    t(`[launcher-host-login] the replacement could not be judged (${u instanceof Error ? u.name : "unknown"})`, { level: "error" });
  }
  if (e.token === null) return false;
  if (r === "held_unknown" && o) return d(e, "identity_never_learned"), false;
  if (r === "unverified" || r === "held_unknown") return e.renewalHoldOffUntilMs = Date.now() + p, m("auth_launcher_host_login", "replacement_unverified"), false;
  if (r === "allowed" && Dqe() === null) return e.token = n, e.everHeld.add(et(n)), bee(null), g("auth_launcher_host_login"), true;
  return d(e, r === "allowed" ? "refused_after_answer" : "replacement_refused"), false;
}
function d(e, n) {
  e.token = null, e.hasEndToSettle = true, t(`[launcher-host-login] the desktop app's sign-in is over for this process (${n})`, { level: "warn" }), m("auth_launcher_host_login", n);
}
function f(e) {
  if (cB.some((o) => o.startsWith("CLAUDE_CODE_USE_") && Ne(e(o)))) return "not_first_party";
  if (e("ANTHROPIC_UNIX_SOCKET")?.trim()) return "unix_socket";
  if (e("CLAUDE_CODE_CUSTOM_OAUTH_URL")?.trim()) return "custom_oauth_deployment";
  let n = e("ANTHROPIC_BASE_URL")?.trim();
  if (n && !A(n)) return "insecure_base_url";
  if (Y9o.some((o) => e(o)?.trim())) return "endpoint_override";
  if (e("ANTHROPIC_CUSTOM_HEADERS")?.trim() || e("CLAUDE_CODE_HOST_CREDS_FILE")?.trim() || e("CLAUDE_SESSION_INGRESS_TOKEN_FILE")?.trim() || TH.some((o) => e(o)?.trim()) || cfe.some((o) => e(o)?.trim())) return "launcher_credential";
  if (Cfe.some((o) => {
    let r = e(o);
    return r !== void 0 && r !== "1";
  })) return "tls_verification_disabled";
  return null;
}
function A(e) {
  return Hu(e) && new URL(e).protocol === "https:";
}
export {
  Dqe,
  E8o,
  INe,
  Iai,
  Pai,
  S8o,
  Vkt,
  YVt,
  _8o,
  b8o,
  bZ,
  csr,
  g8o,
  h8o,
  jRe,
  k8o,
  m8o,
  mM,
  mwn,
  p8o,
  qVt,
  qkt,
  tfe,
  v8o,
  w8o,
  xai,
  y8o,
  yI
};
