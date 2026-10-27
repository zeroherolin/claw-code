// auth/auth-launcher-host-login.9f3m.js — Claude Code 2.1.310 模块 chunk-9f3mwram.js
import { Ne } from "../fs/async-hooks.9s1z.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { Sr } from "../models/claude-3-5-sonnet.21mz.js";
import { H } from "../shared/chunk-nrx8c90j.js";
import { Cz, i } from "../shared/environment.9a41.js";
import { U, pie, eTn, Aee } from "../context/not-admin-owned.ersa.js";
import { Tz, rn } from "./oauth-2025-04-20.ke15.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { g1, xH, ype, TXo, C7o } from "../shell/invalid-type.qnva.js";
import { g, m } from "../telemetry/chunk-wn8xtaqg.js";
import { fe, jNe, YYo } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { gpe, Te, op, Nu } from "../models/total-tokens-reminder.psq3.js";
import { RFe, cv, cW } from "./descriptor-direct.zd2z.js";
import { Npe } from "../shared/chunk-t6575w3p.js";
import { et } from "../shared/chunk-tftf1nn4.js";
function lpe() {
  let { forceLoginMethod: e, forceLoginGatewayUrl: n } = jNe();
  return e === "gateway" || n !== void 0;
}
function NNe() {
  return !i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && !y() && lpe();
}
function y() {
  return gpe.some((e) => i[e]);
}
var G8o = ["signed_out", "identity_changed", "transient", "refresh_failed"];
function cli(e) {
  return G8o.some((n) => n === e);
}
var c = 0, _;
function uli(e) {
  c++, _ = { reason: e, generation: c };
}
function pli() {
  c++, _ = void 0;
}
function Asr() {
  return _;
}
function aKt() {
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
var l = new W(() => new h()), R = Cz(Object.fromEntries([...g1, ...xH, ...ype, ...TXo, "ANTHROPIC_UNIX_SOCKET", "CLAUDE_CODE_CUSTOM_OAUTH_URL", "ANTHROPIC_BASE_URL", "ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_HOST_CREDS_FILE", "CLAUDE_SESSION_INGRESS_TOKEN_FILE", ...Npe].map((e) => [e, H.rawStr()])), null), p = 6e4, O = [5e3, 3e4, 12e4], D = 6e5;
function wI() {
  let e = l.of(U().host);
  return e.wasLauncherStarted ||= Boolean(i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && i.CLAUDE_CODE_HOST_AUTH_ENV_VAR), e.wasOpenToSignIn ||= e.wasLauncherStarted && i.CLAUDE_CODE_ENTRYPOINT !== "claude-desktop-3p", e.wasLauncherStarted;
}
function z8o() {
  return wI(), l.of(U().host).wasOpenToSignIn;
}
function V8o() {
  let e = l.of(U().host);
  e.wasLauncherStarted = false, e.wasOpenToSignIn = false, wI();
}
function jKe() {
  if (!wI()) return "not_launcher_started";
  if (i.CLAUDE_CODE_DISABLE_LAUNCHER_SIGN_IN) return "switched_off";
  if (Te() !== "firstParty") return "not_first_party";
  if (lpe()) return "gateway_mandate";
  if (jNe().forceLoginMethod === "console") return "login_method_pin";
  if (!op()) return "custom_base_url";
  let e = f((n) => {
    let o = R[n];
    return typeof o === "string" ? o : void 0;
  });
  if (e !== null) return e;
  try {
    if (!S(rn().BASE_API_URL)) return "api_base_not_anthropic";
  } catch {
    return "api_base_not_anthropic";
  }
  if (Tz() === "-local-oauth") return "endpoint_override";
  if (RFe() || cv() || cW() || [...ype, "CLAUDE_BG_AUTH_SNAPSHOT_PATH"].some((n) => eTn(n)) || Sr() && fe("flagSettings")?.apiKeyHelper) return "launcher_credential";
  try {
    let { envs: n, apiKeyHelper: o, unread: r } = YYo();
    if (o || n.some((u) => f((s) => u[s]) !== null)) return "machine_policy_credential";
    if (n.some((u) => Ne(u.CLAUDE_CODE_DISABLE_LAUNCHER_SIGN_IN))) return "switched_off";
    if (r) return "machine_policy_unread";
  } catch (n) {
    return t(`[launcher-host-login] the read of the machine's managed settings threw (${n instanceof Error ? n.name : "unknown"})`, { level: "error" }), "machine_policy_unread";
  }
  if (C7o()) return "served_policy_unread";
  try {
    let { readFlag: n } = l.of(U().host);
    return n?.("tengu_kestrel_lantern", true) === false ? "switched_off" : null;
  } catch {
    return null;
  }
}
function bM() {
  if (!wI()) return null;
  let e = l.of(U().host);
  return e.token !== null && a(e) === null ? e.token : null;
}
function lKt() {
  let e = l.of(U().host);
  if (e.token !== null) a(e);
  if (e.endedAtRead !== null) e.endedAtRead = null, m("auth_launcher_host_login", "refused_while_held");
  let n = e.hasEndToSettle;
  return e.hasEndToSettle = false, n;
}
function K8o(e) {
  l.of(U().host).readFlag = e;
}
function q8o(e) {
  l.of(U().host).judgeReplacement = e;
}
function Y8o(e) {
  if (!e || jKe() !== null) return false;
  let n = l.of(U().host);
  return n.token = e, n.everHeld.add(et(e)), true;
}
function tCt(e) {
  let n = l.of(U().host).everHeld;
  return n.size > 0 && n.has(et(e));
}
function Iwn(e) {
  return tCt(e) && bM() === null;
}
function AZ(e) {
  return e !== null && tCt(e.accessToken) ? null : e;
}
function nCt(e) {
  let n = l.of(U().host);
  if (n.identityOf = e, n.identity !== null && !n.hasIdentitySaidNothing) return n.identity;
  let o = bM();
  if (o === null) return n.identity ?? Promise.resolve(null);
  let r = e(o).catch(() => null);
  return n.identity = r, n.hasIdentitySaidNothing = false, r.then((u) => {
    if (u !== null || n.identity !== r) return;
    n.hasIdentitySaidNothing = true;
    let s = O[n.identityReasksMade] ?? D;
    n.identityReasksMade += 1, setTimeout(I, s, n, r, e).unref();
  }), r;
}
function I(e, n, o) {
  try {
    if (e.identity === n && l.of(U().host) === e) nCt(o);
  } catch {
    t("[launcher-host-login] asking again whose sign-in this is threw", { level: "warn" });
  }
}
function X8o() {
  return l.of(U().host).identity;
}
function J8o() {
  let { identityOf: e } = l.of(U().host);
  return e === null ? Promise.resolve(null) : nCt(e);
}
function Q8o(e) {
  l.of(U().host).startupAskIds.add(e);
}
function Z8o(e) {
  return wI() && typeof e === "string" && l.of(U().host).startupAskIds.has(e);
}
function KRe() {
  let e = l.of(U().host), n = e.token !== null;
  return e.token = null, e.hasEndToSettle ||= n, n;
}
function a(e) {
  let n = jKe();
  if (n !== null && e.token !== null) e.token = null, e.endedAtRead = n, e.hasEndToSettle = true, t(`[launcher-host-login] the desktop app's sign-in is over for this process (refused_while_held: ${n})`, { level: "warn" });
  return n;
}
function eYo(e) {
  let n = l.of(U().host);
  return L(n, () => w(n, e));
}
function tYo(e) {
  let n = l.of(U().host), o;
  try {
    o = a(n);
  } catch (r) {
    return E(r), null;
  }
  if (!e || n.token === null || o !== null) return t(`[launcher-host-login] refused a pushed claude.ai token (${o ?? (e ? "none_held" : "empty")})`, { level: "warn" }), null;
  return L(n, () => A(n, e));
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
  let o = pie();
  if (!o || Date.now() < e.renewalHoldOffUntilMs) return false;
  let r = aKt(), u;
  try {
    u = await o();
  } catch (s) {
    return t(`[launcher-host-login] oauth_token_refresh failed (${s instanceof Error ? s.name : "unknown"})`, { level: "warn" }), e.renewalHoldOffUntilMs = Date.now() + p, m("auth_launcher_host_login", "request_failed"), false;
  }
  if (e.token === null) return false;
  if (jKe() !== null) return d(e, "refused_after_answer"), false;
  if (!u) {
    let s = Asr();
    if (s !== void 0 && s.generation > r && s.reason === "identity_changed") return d(e, "identity_changed"), false;
    return m("auth_launcher_host_login", "no_token"), false;
  }
  if (u === n) return m("auth_launcher_host_login", "same_token"), false;
  return A(e, u, true);
}
async function A(e, n, o = false) {
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
  if (r === "allowed" && jKe() === null) return e.token = n, e.everHeld.add(et(n)), Aee(null), g("auth_launcher_host_login"), true;
  return d(e, r === "allowed" ? "refused_after_answer" : "replacement_refused"), false;
}
function d(e, n) {
  e.token = null, e.hasEndToSettle = true, t(`[launcher-host-login] the desktop app's sign-in is over for this process (${n})`, { level: "warn" }), m("auth_launcher_host_login", n);
}
function f(e) {
  if (g1.some((o) => o.startsWith("CLAUDE_CODE_USE_") && Ne(e(o)))) return "not_first_party";
  if (e("ANTHROPIC_UNIX_SOCKET")?.trim()) return "unix_socket";
  if (e("CLAUDE_CODE_CUSTOM_OAUTH_URL")?.trim()) return "custom_oauth_deployment";
  let n = e("ANTHROPIC_BASE_URL")?.trim();
  if (n && !S(n)) return "insecure_base_url";
  if (TXo.some((o) => e(o)?.trim())) return "endpoint_override";
  if (e("ANTHROPIC_CUSTOM_HEADERS")?.trim() || e("CLAUDE_CODE_HOST_CREDS_FILE")?.trim() || e("CLAUDE_SESSION_INGRESS_TOKEN_FILE")?.trim() || xH.some((o) => e(o)?.trim()) || ype.some((o) => e(o)?.trim())) return "launcher_credential";
  if (Npe.some((o) => {
    let r = e(o);
    return r !== void 0 && r !== "1";
  })) return "tls_verification_disabled";
  return null;
}
function S(e) {
  return Nu(e) && new URL(e).protocol === "https:";
}
export {
  AZ,
  Asr,
  G8o,
  Iwn,
  J8o,
  K8o,
  KRe,
  NNe,
  Q8o,
  V8o,
  X8o,
  Y8o,
  Z8o,
  aKt,
  bM,
  cli,
  eYo,
  jKe,
  lKt,
  lpe,
  nCt,
  pli,
  q8o,
  tCt,
  tYo,
  uli,
  wI,
  z8o
};
