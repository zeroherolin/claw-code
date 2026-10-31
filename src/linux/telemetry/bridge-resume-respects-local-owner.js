// linux/telemetry/bridge-resume-respects-local-owner.js — Claude Code 2.1.310（linux）模块 chunk-r5xsp8d0.js
import { st, JCe, ua, nA, Ng, Ln, Et, kf, Ent, Hz, $i, jp, wbn, kn, k, cS, lI, ue, Znt, b5o, Ibn, J4r, trt } from "../settings/global-config-and-gates.js";
import { Ne } from "../fs/async-hooks.93b1.js";
import { FSe, SXr, Pn } from "../context/not-admin-owned.js";
import { Nt, Pe } from "../shared/chunk-57ff8cc1.js";
import { wr } from "../models/claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { fk } from "../auth/oauth-2025-04-20.js";
import { v2, t } from "../fs/gitlab-runner-authentication-token.js";
import { aYt, S9r, l } from "../artifacts/cowritten-artifact-html.js";
import { mo } from "../artifacts/chunk-a6c9d164.js";
import { j$ } from "../settings/workflow-launch-exec.js";
import { Sr, tk, Xrt, Ae, Fn, UNe, of } from "../models/total-tokens-reminder.js";
import { I0, yZ } from "../shared/chunk-f98598c3.js";
import { Lo } from "../agents/chunk-44729602.js";
import { CVt, yNe, ube, Ekt } from "../artifacts/cobalt-plinth-lovage.js";
import { nor } from "../workflows/chunk-a1595c7e.js";
import { hkt } from "../git/ssh-placeholder.js";
import { YGt, f0, Ahn, Mh, wV, C7, on, vV, d9, m_e, W2o, Xc, uZn, ZGt, z2o, Pw, R7 } from "../auth/env-quad.js";
import { Sre, NBr, kUo } from "../shared/chunk-3ff808c3.js";
import { gr } from "../shared/chunk-7e745eb7.js";
import { ose } from "../shared/chunk-d1292a44.js";
var W = "tengu_reflective_wolf";
function z1t() {
  let e = Lo();
  return e.attributionAnnouncementEnabled ??= i.CLAUDE_CODE_ATTRIBUTION_ANNOUNCEMENT ?? k(W, true), e.attributionAnnouncementEnabled;
}
function V8n(e) {
  let o = z1t() ? Ibn() : void 0, n = st();
  if (e(), o === void 0 || st() === n) return;
  return b5o(o, { forContextWindow: true }), o;
}
function P(e, o, n) {
  let r = import("../cli/bootstrap-fetch-can-converge-slot.js").then(({ refreshBootstrapData: a }) => a(e, o, { renderedClientData: n })).then(() => {
  }, (a) => l(a));
  return K1t(r), r;
}
function q8n(e, o, n) {
  return P(e, o, n);
}
function CYs(e) {
  Sr().fetchesClientData = e;
}
function sUo() {
  return Sr().fetchesClientData && Ae() === "firstParty";
}
function K1t(e) {
  let o = J4r(), n = Sr().providerCache.clientDataFetches;
  if (o !== void 0 && !(n.get(o) instanceof Promise)) {
    let r = FSe();
    n.set(o, e), e.finally(() => {
      if (n.get(o) === e) if (FSe() === r) n.set(o, "over");
      else n.delete(o);
    });
  }
}
function v() {
  return [...Sr().providerCache.clientDataFetches.values()].filter((e) => e !== "over");
}
function RYs(e) {
  let o = Sr().providerCache.clientDataFetches;
  for (let [n, r] of o) if (r === e) o.set(n, "over");
}
function xYs(e, o) {
  let n = J4r();
  if (n === void 0 || !sUo() || trt()) return;
  let r = Sr().providerCache.clientDataFetches.get(n);
  if (r !== void 0) return r === "over" ? void 0 : r;
  return P(e, o, Ibn());
}
function JL() {
  if (!Fn()) return false;
  if (f0() !== void 0) return true;
  if (i.ANTHROPIC_UNIX_SOCKET) return false;
  return of();
}
function tbt() {
  return JL() && f() && (k("tengu_ccr_bridge", false) || C());
}
function C() {
  if (!E() || !JL() || le()) return false;
  let e = N();
  if (e !== null) return M.includes(e) && (e !== "team" && e !== "enterprise" || Mh());
  if (!b() || !m()?.organizationUuid) return false;
  try {
    let o = Ln(), n = o?.refreshToken ? o.subscriptionType ?? null : null;
    return n !== null && M.includes(n);
  } catch {
    return false;
  }
}
function E() {
  return !jp() && !i.DISABLE_GROWTHBOOK && aYt() === "no-telemetry" && !nor();
}
function N() {
  let e = SXr(), o = e?.named;
  if (!o || e?.bearerSha256 !== y()) return null;
  return (i.CLAUDE_CODE_ORGANIZATION_UUID || m()?.organizationUuid)?.toLowerCase() === o.organizationUuid.toLowerCase() ? o.subscriptionType : null;
}
function x() {
  let e = SXr();
  return e !== null && e.bearerSha256 === y() && (e.named !== null || Date.now() - e.answeredAtMs < F);
}
function U() {
  return E() && N() !== null;
}
function y() {
  try {
    let e = Ln();
    return e && !e.refreshToken && e.accessToken !== hkt ? Ent() : null;
  } catch {
    return null;
  }
}
var j = 6e3, F = 6e4;
async function H(e) {
  if (y() === null || !E() || x()) return;
  await Pe(Promise.allSettled(v()).then(async () => {
    if (e !== void 0) await w(e), await w(e);
  }), j);
}
function w({ storageV5: e, credentials: o }) {
  let n = y();
  if (n === null || x()) return;
  let r = mo();
  if (r.bearerPlanFetch?.bearerSha256 !== n || Date.now() - r.bearerPlanFetch.startedAtMs >= F) r.bearerPlanFetch = { bearerSha256: n, startedAtMs: Date.now(), answered: import("../cli/bootstrap-fetch-can-converge-slot.js").then(({ refreshBootstrapData: a }) => a(e, o, { keepRenderCaches: true })).then(() => {
  }, (a) => l(a)) };
  return r.bearerPlanFetch.answered;
}
var M = ["pro", "max", "team", "enterprise"];
function Rfn() {
  if (tbt()) return null;
  if (!p()) return "not_signed_in";
  if (!f()) return "api_key_auth";
  if (!b()) return "no_profile_scope";
  return "not_in_rollout";
}
function c() {
  return false;
}
function tV() {
  return j$()?.settings.disableRemoteControl === true;
}
function GP() {
  if (c()) return true;
  return q();
}
function q() {
  if (tV()) return false;
  return !p$() && tbt();
}
function iUo() {
  return false;
}
function aUo() {
  if (c()) return true;
  return !tV() && !p$() && JL();
}
async function lUo(e) {
  return await ABr(e) === null;
}
async function ABr(e) {
  if (c()) return null;
  if (tV()) return "managed_disabled";
  if (!JL()) return "not_first_party";
  if (p$()) return "cloud_session";
  if (!f()) return p() ? "not_subscription_auth" : "not_signed_in";
  if (await H(e), C() || await cS("tengu_ccr_bridge")) return null;
  if (!jp()) return "flags_disabled";
  return $i() ? "gate_off" : "flags_unreachable";
}
var K = "Remote Control is disabled by your organization's policy. Contact your organization admin for access.", X = 864e5, J = 2147483647;
function G() {
  return R7();
}
function Y8n() {
  let { featureLabel: e, verb: o } = C7("allow_remote_control");
  return CVt(e, o, I0(), K);
}
function DHe(e) {
  let o = e ? ["allow_remote_control", "allow_remote_sessions"] : ["allow_remote_control"];
  try {
    for (let n of o) {
      let r = Xc(n);
      switch (r) {
        case null:
        case "cache_miss":
        case "route_missing":
          continue;
        case "latched": {
          if (!d9() && !L()) continue;
          let { featureLabel: a, verb: _ } = C7(n);
          return { policy: n, kind: r, detail: yNe(a, _) };
        }
        case "org_denied":
          if (Pw()?.restrictions[n]?.allowed !== false && !d9() && !L()) continue;
          return { policy: n, kind: r, detail: n === "allow_remote_control" ? kUo : "Session mirroring was turned off by your organization's policy (allow_remote_sessions)." };
        default:
          return { policy: n, kind: "org_denied", detail: kUo };
      }
    }
    return null;
  } catch {
    return null;
  }
}
function L() {
  let e = wV();
  return e !== void 0 && Ahn.has(e);
}
var s = (e, o) => ({ reason: o, code: e, orgPolicyDenied: false });
async function V1t() {
  if (c()) return null;
  if (!JL()) return s("not_first_party", ae());
  if (p$()) return s("cloud_session", "Remote Control is not available inside a cloud session.");
  if (tV()) return s("managed_disabled", Sre);
  if (!p()) return s("not_signed_in", "Remote Control requires a claude.ai subscription. Run `claude auth login` to sign in with your claude.ai account.");
  if (!f()) return s("not_subscription_auth", q1t({ prefix: "Remote Control requires claude.ai subscription auth.", suffix: "to use Remote Control." }));
  await H(void 0);
  let e = U();
  if (!e && !b()) return s("token_scope_limited", "Remote Control requires a full-scope login token. Long-lived tokens (from `claude setup-token` or CLAUDE_CODE_OAUTH_TOKEN) are limited to inference-only for security reasons. Run `claude auth login` to use Remote Control.");
  if (!e && !m()?.organizationUuid) return s("no_organization", "Unable to determine your organization for Remote Control eligibility. Run `claude auth login` to refresh your account information.");
  await Xde();
  let o = Y1t();
  if (o === "unavailable") return s("policy_unverified", NBr);
  if (o === "denied") return { reason: Y(), code: "org_policy_denied", orgPolicyDenied: true };
  if (C()) return null;
  if (!jp()) {
    let n = S9r();
    if (n) return s("flags_disabled", `Remote Control requires feature-flag evaluation, which is disabled because ${n} is set. Unset it (or run in a shell without it) to use Remote Control.`);
    if (i.DISABLE_GROWTHBOOK) return s("flags_disabled", "Remote Control requires feature-flag evaluation, which is disabled because DISABLE_GROWTHBOOK is set. Unset it (or run in a shell without it) to use Remote Control.");
    return s("flags_disabled", "Remote Control requires feature-flag evaluation, which is unavailable in this environment.");
  }
  if (!await cS("tengu_ccr_bridge")) {
    if (!$i()) {
      if (lI(), await cS("tengu_ccr_bridge")) return null;
      if (!$i()) return s("flags_unreachable", "Couldn't verify Remote Control eligibility — the feature-flag service was unreachable (offline or blocked). Retry, or run with `--debug` / `claude doctor` for details.");
    }
    return s("gate_off", "Remote Control isn't enabled for this account. If you recently changed plans, run `claude auth logout` then `claude auth login` to refresh your entitlements, or `claude doctor` for details.");
  }
  return null;
}
async function Q() {
  return (await V1t())?.reason ?? null;
}
function Y() {
  try {
    if (m_e()) return Ekt("Remote Control");
    if (uZn("allow_remote_control")) return yNe("Remote Control", "is");
    if (!G()) return ube("Remote Control");
    if (!W2o()) return K;
    return Y8n();
  } catch {
    return NBr;
  }
}
var Z = "set by your organization's configuration, not an admin setting";
function ee({ policyVerdict: e, policyDenialIsAuthoritative: o, currentTaints: n }) {
  if (e !== "denied" || !o) return false;
  try {
    return !m_e() && !uZn("allow_remote_control") && ose(n).length > 0;
  } catch {
    return false;
  }
}
function nbt() {
  if (c()) return null;
  if (tV()) return Sre;
  let e = mo(), o = YGt(), n = e.remoteControlLockReason;
  if (n !== void 0 && n.policyCacheRevision === o) return n.reason;
  let r = te();
  return e.remoteControlLockReason = { policyCacheRevision: o, reason: r }, r;
}
function te() {
  let e = Y1t();
  if (e === "allowed") return null;
  if (e === "unavailable") return NBr;
  return Y();
}
function _Ri() {
  if (!v2()) return "";
  let e = (o) => o ? "set" : "unset";
  try {
    let o = Ln(), n = Object.values(Xrt).filter((r) => Ne(process.env[r]));
    return ["", "[debug] Remote Control auth state:", `  isBareMode=${wr()}`, `  hasOAuthAccessToken=${!!o?.accessToken}`, `  oauthScopes=${o?.scopes?.join(",") ?? "none"}`, `  hasClaudeAIInferenceScope=${p()}`, `  isClaudeAISubscriber=${f()}`, `  hasProfileScope=${b()}`, `  oauthAccount.organizationUuid=${m()?.organizationUuid ? "set" : "unset"}`, `  ANTHROPIC_API_KEY=${e(process.env.ANTHROPIC_API_KEY)}`, `  ANTHROPIC_AUTH_TOKEN=${e(process.env.ANTHROPIC_AUTH_TOKEN)}`, `  apiKeyHelper=${Ng() ? "set" : "unset"}`, `  CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR=${e(process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR)}`, `  CLAUDE_CODE_OAUTH_TOKEN=${e(process.env.CLAUDE_CODE_OAUTH_TOKEN)}`, `  ANTHROPIC_UNIX_SOCKET=${e(process.env.ANTHROPIC_UNIX_SOCKET)}`, `  3P env=${n.length ? n.join(",") : "none"}`, ...oe()].join(`
`);
  } catch (o) {
    return `
[debug] failed to collect auth state: ${o}`;
  }
}
function oe() {
  let e = (r) => r ? "set" : "unset", o = Hz(), n = ne();
  return [`  isGrowthBookEnabled=${jp()}`, `  telemetryDisabledBy=${S9r() ?? "none"}`, `  DISABLE_GROWTHBOOK=${e(process.env.DISABLE_GROWTHBOOK)}`, `  hasFreshGrowthBookFeatures=${$i()}`, `  growthBookFeaturesLoaded=${Object.keys(o).length}`, `  growthBookLastFetched=${n ? `${re(Date.now() - n)} ago` : "never"}`, `  tengu_ccr_bridge=${String(o.tengu_ccr_bridge ?? "unset")}`];
}
async function dUo() {
  if (p$() && !c()) return { disabledReason: null, inRemoteSession: true, checks: [] };
  lI(), await Xde();
  let e = await Q(), o = S9r() ?? (i.DISABLE_GROWTHBOOK ? "DISABLE_GROWTHBOOK" : null), n = JL(), r = !tV(), a = p(), _ = f(), D = U(), R = D || b(), A = D || !!m()?.organizationUuid, g = Y1t(), O = G(), V = ee({ policyVerdict: g, policyDenialIsAuthoritative: O, currentTaints: yZ() }), B = jp(), h = C(), I = h || await cS("tengu_ccr_bridge"), T = $i(), z = [{ label: n ? "Connected to the Anthropic API (api.anthropic.com)" : "Not connected to the Anthropic API (api.anthropic.com)", ok: n }, { label: r ? "Not disabled by org policy (disableRemoteControl)" : "Disabled by org policy (disableRemoteControl)", ok: r }, { label: a ? "Signed in to claude.ai" : "Not signed in to claude.ai", ok: a }, { label: _ ? "claude.ai subscription active" : "claude.ai subscription auth not active", ok: _ }, { label: R ? "Sign-in includes the user:profile scope" : "Sign-in is missing the user:profile scope", ok: R }, { label: A ? "Organization resolved" : "Organization not resolved", ok: A }, { label: g === "allowed" ? "Org policy allows Remote Control (allow_remote_control)" : g === "unavailable" ? "Org policy could not be verified (allow_remote_control)" : !O ? "Org policy not loaded, see the Organization policy line above (allow_remote_control)" : "Org policy does not allow Remote Control (allow_remote_control)", ok: g === "allowed", detail: V ? Z : void 0 }, { label: B ? "Feature-flag evaluation enabled" : "Feature-flag evaluation disabled", ok: B || h, detail: o ? h ? `disabled by ${o}; Remote Control does not need it on a paid plan` : `disabled by ${o}` : void 0 }, { label: I ? "Remote Control enabled for this account" : T ? "Remote Control not enabled for this account" : "Remote Control availability could not be verified", ok: I, detail: h ? "decided from your plan, feature flags are off" : T ? void 0 : "no server response this session" }];
  return { disabledReason: e !== null && n && r && a && _ && R && A && g === "denied" && !O ? "Remote Control needs your organization's policy, which isn't loaded — see the Organization policy line above." : e, inRemoteSession: false, checks: z };
}
function ne() {
  try {
    return ue().cachedGrowthBookFeaturesAt;
  } catch {
    return;
  }
}
function re(e) {
  let o = Math.round(e / 1e3);
  if (o < 120) return `${o}s`;
  let n = Math.round(o / 60);
  if (n < 120) return `${n}m`;
  let r = Math.round(n / 60);
  if (r < 48) return `${r}h`;
  return `${Math.round(r / 24)}d`;
}
function q1t({ prefix: e, suffix: o }) {
  try {
    let { source: n } = nA({ skipRetrievingKeyFromApiKeyHelper: true });
    if (n === "ANTHROPIC_API_KEY") return `${e} ANTHROPIC_API_KEY is set, so this session is using API-key auth — unset it (or run in a shell without it) ${o}`;
    if (n === "apiKeyHelper") return `${e} apiKeyHelper is configured, so this session is using API-key auth — unset it ${o}`;
    if (process.env.ANTHROPIC_AUTH_TOKEN) return `${e} ANTHROPIC_AUTH_TOKEN is set, so this session is using API-key auth — unset it (or run in a shell without it) ${o}`;
    let { source: r } = ua(), a = JCe(r);
    if (r !== "none" && a) return `${e} This session is using ${r} auth — ${a}`;
    if (process.env.ANTHROPIC_UNIX_SOCKET) return `${e} ANTHROPIC_UNIX_SOCKET is set without CLAUDE_CODE_OAUTH_TOKEN, so requests on the socket carry no claude.ai login (on a claude ssh remote: the local machine is API-key-authed).`;
  } catch {
  }
  return `${e} Unset ANTHROPIC_API_KEY / apiKeyHelper / ANTHROPIC_AUTH_TOKEN ${o}`;
}
var d = "Remote Control is only available when using Claude via api.anthropic.com.", S = "unset it (or run in a shell without it) to use Remote Control.", ie = "unset them (or run in a shell without them) to use Remote Control.";
function ae() {
  let e = Ae();
  if (e !== "firstParty") {
    if (e === "gateway") return `${d} This session uses a ${tk.gateway}, which does not support Remote Control.`;
    if (e === "bedrock" && UNe() === "mantle") return `${d} ${Xrt.bedrock} and ${Xrt.mantle} are set, so this session is using ${tk.bedrock} + ${tk.mantle} — ${ie}`;
    return `${d} ${Xrt[e]} is set, so this session is using ${tk[e]} — ${S}`;
  }
  if (!of()) {
    let o = i._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL ? " (_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL does not apply to Remote Control.)" : "";
    return `${d} ANTHROPIC_BASE_URL is set and does not point at api.anthropic.com, so this session is using a custom endpoint — ${S}${o}`;
  }
  if (i.ANTHROPIC_UNIX_SOCKET) return `${d} ANTHROPIC_UNIX_SOCKET is set, so this session sends requests through a local socket rather than to api.anthropic.com — ${S}`;
  return d;
}
function p() {
  try {
    return Boolean(Ln()?.scopes?.includes(fk));
  } catch {
    return false;
  }
}
function f() {
  try {
    return Et();
  } catch {
    return false;
  }
}
function b() {
  try {
    return kf();
  } catch {
    return false;
  }
}
function m() {
  try {
    return ue().oauthAccount;
  } catch {
    return;
  }
}
function le() {
  try {
    return ZGt("require_trusted_devices") || vV();
  } catch {
    return true;
  }
}
async function Xde() {
  try {
    await se();
  } catch (e) {
    t(`[bridge] policy-limits hydrate for the Remote Control diagnostic failed: ${e instanceof Error ? e.message : String(e)}`);
  }
}
async function se() {
  try {
    if (Pw() !== null) return;
  } catch {
  }
  let e = await import("../cli/admit-prefetched-policy-limits.js");
  e.initializePolicyLimitsLoadingPromise();
  let o = mo();
  if (o.diagnosticPolicyKick === void 0) {
    let n = e.loadPolicyLimits();
    n.catch(() => {
    }).finally(() => {
      o.diagnosticPolicyKick = void 0;
    }), o.diagnosticPolicyKick = Nt(n, e.POLICY_LIMITS_COLD_AWAIT_MS, "bridge_diagnostic_policy_limits").catch(() => {
    });
  }
  await o.diagnosticPolicyKick;
}
function Y1t() {
  try {
    return on("allow_remote_control") ? "allowed" : "denied";
  } catch {
    return "unavailable";
  }
}
function _Ae() {
  return GP() && Y1t() === "allowed";
}
function p$() {
  return Ne(process.env.CLAUDE_CODE_REMOTE) || Pn();
}
function cUo() {
  return k("tengu_bridge_repl_v2_cse_shim_enabled", true);
}
function bAe() {
  return k("tengu_luminous_seal", true);
}
function uUo() {
  return k("tengu_bridge_partial_messages", false);
}
function X8n() {
  return k("tengu_wobbly_pinwheel", true);
}
function CBr() {
  return k("tengu_copper_kestrel", true);
}
function X1t() {
  return k("tengu_bridge_auth_revive", true);
}
function RBr() {
  return k("tengu_ethereal_mist", true);
}
function fUo() {
  return k("tengu_wild_gosling", false);
}
function rbt() {
  return k("tengu_humble_petal", true);
}
function pUo() {
  return k("tengu_moonlit_lagoon", true);
}
function mUo() {
  return k("tengu_bridge_resume_respects_local_owner", true);
}
function gUo() {
  return k("tengu_sequential_puffin", true);
}
function SAe() {
  return k("tengu_bridge_owner_pinned_end", true);
}
function xBr() {
  return k("tengu_bridge_owner_check_attribution", true);
}
function J8n() {
  return k("tengu_glimmering_glade", true);
}
function hUo() {
  return k("tengu_lucky_quill", true);
}
function yUo() {
  return k("tengu_keen_lantern", true);
}
function _Uo() {
  return k("tengu_zany_melody", true);
}
function PBr() {
  return k("tengu_bridge_host_declined_end", true);
}
function bUo() {
  return k("tengu_bridge_signed_out_neutral", true);
}
function xfn() {
  return k("tengu_ccr_v2_send_events_cli", true);
}
function yU() {
  return k("tengu_ccr_v2_session_crud_cli", false);
}
function bRi() {
  return k("tengu_ccr_v2_bridge_create_cli", false);
}
function Pfn() {
  return k("tengu_composed_quail", true);
}
function SUo() {
  return k("tengu_gravel_chorus", true);
}
function obt() {
  return IBr().value;
}
function IBr() {
  if (p$()) return { value: false, source: "remote_env" };
  let e = z2o("remote_control_at_startup");
  if (E()) return { value: false, source: e === false ? "org_policy" : "growthbook" };
  if (HHe()) return { value: true, source: "persistent_remote_session" };
  if (e !== void 0) return { value: e, source: "org_policy" };
  return { value: k("tengu_cobalt_harbor", false), source: "growthbook" };
}
function Jde() {
  let e = Znt();
  return e !== void 0 ? e : obt();
}
function HHe() {
  return false;
}
function SRi() {
  return false;
}
function Ifn() {
  return k("tengu_amber_relay", false);
}
async function wRi() {
  return false;
}
function IZe() {
  {
    let { value: e, source: o } = kn("tengu_bridge_apply_server_session_config", true);
    if (e !== false) return true;
    if (o === "override") return false;
    return !(o === "payload" && wbn().organizationUUID);
  }
  return false;
}
function OBr() {
  return k("tengu_bridge_child_auto_mode", true);
}
function wUo() {
  return k("tengu_bridge_child_auto_over_settings", true);
}
function MBr() {
  return k("tengu_bridge_rc_child_artifact", true);
}
function J1t() {
  return k("tengu_bridge_rc_projects_hint", true);
}
function DBr() {
  return k("tengu_bridge_child_machine_settings", true);
}
function HBr() {
  return k("tengu_bridge_rc_child_auto_compact", true);
}
function LBr() {
  return gr("tengu_gentle_grove", { safe: false });
}
function vUo() {
  let e = k("tengu_bridge_rc_child_idle_exit_ms", X);
  if (typeof e !== "number" || !Number.isFinite(e) || e < 1) return 0;
  return Math.min(Math.floor(e), J);
}
function Ofn() {
  return k("tengu_bridge_rc_child_restart_resume", true);
}
function Mfn() {
  return { enabled: k("tengu_bridge_subagent_frames", true), forwardText: k("tengu_bridge_subagent_text", false) };
}
function EUo(e, o) {
  if (e.replBridgeOutboundOnly && !o) return e.replBridgeSessionGroupingId !== void 0 ? { ...e, replBridgeSessionGroupingId: void 0 } : e;
  if (e.replBridgeEnabled === o && !e.replBridgeOutboundOnly) return !o && e.replBridgeSessionGroupingId !== void 0 ? { ...e, replBridgeSessionGroupingId: void 0 } : e;
  return { ...e, replBridgeEnabled: o, replBridgeOutboundOnly: false, ...!o && { replBridgeSessionGroupingId: void 0 } };
}
export {
  ABr,
  CBr,
  CYs,
  DBr,
  DHe,
  EUo,
  GP,
  HBr,
  HHe,
  IBr,
  IZe,
  Ifn,
  J1t,
  J8n,
  JL,
  Jde,
  K1t,
  LBr,
  MBr,
  Mfn,
  OBr,
  Ofn,
  PBr,
  Pfn,
  RBr,
  RYs,
  Rfn,
  SAe,
  SRi,
  SUo,
  V1t,
  V8n,
  X1t,
  X8n,
  Xde,
  Y1t,
  Y8n,
  _Ae,
  _Ri,
  _Uo,
  aUo,
  bAe,
  bRi,
  bUo,
  cUo,
  dUo,
  fUo,
  gUo,
  hUo,
  iUo,
  lUo,
  mUo,
  nbt,
  obt,
  p$,
  pUo,
  q1t,
  q8n,
  rbt,
  sUo,
  tV,
  tbt,
  uUo,
  vUo,
  wRi,
  wUo,
  xBr,
  xYs,
  xfn,
  yU,
  yUo,
  z1t
};
