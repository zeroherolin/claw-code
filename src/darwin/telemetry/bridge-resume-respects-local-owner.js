// darwin/telemetry/bridge-resume-respects-local-owner.js — Claude Code 2.1.310（darwin）模块 chunk-8dk3fke5.js
import { it, rRe, ua, oT, Ng, Ln, vt, vp, Pnt, GG, Fi, jf, FSn, kn, k, ub, uI, ue, irt, q4o, qSn, _3r, lrt } from "../settings/global-config-and-gates.js";
import { Ne } from "../fs/async-hooks.93b1.js";
import { Vbe, zXr, Pn } from "../context/not-admin-owned.js";
import { Nt, Pe } from "../shared/chunk-57ff8cc1.js";
import { Sr } from "../models/claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { fk } from "../auth/oauth-2025-04-20.js";
import { Iz, t } from "../fs/gitlab-runner-authentication-token.js";
import { w3t, zYr, l } from "../artifacts/cowritten-artifact-html.js";
import { mo } from "../artifacts/chunk-a6c9d164.js";
import { VF } from "../settings/workflow-launch-exec.js";
import { wr, nk, rot, Te, $n, VNe, op } from "../models/total-tokens-reminder.js";
import { HL, CZ } from "../shared/chunk-f98598c3.js";
import { Lo } from "../agents/chunk-44729602.js";
import { $Vt, vNe, _Se, Ikt } from "../artifacts/cobalt-plinth-lovage.js";
import { wor } from "../workflows/chunk-a1595c7e.js";
import { kkt } from "../git/ssh-placeholder.js";
import { aGt, gL, Whn, Mh, OV, DQ, on, MV, yY, w_e, y6o, Jc, xZn, uGt, S6o, Iw, LQ } from "../auth/env-quad.js";
import { xre, tBr, KUo } from "../shared/chunk-3ff808c3.js";
import { gr } from "../shared/chunk-7e745eb7.js";
import { use } from "../shared/chunk-d1292a44.js";
var W = "tengu_reflective_wolf";
function rjt() {
  let e = Lo();
  return e.attributionAnnouncementEnabled ??= i.CLAUDE_CODE_ATTRIBUTION_ANNOUNCEMENT ?? k(W, true), e.attributionAnnouncementEnabled;
}
function pYn(e) {
  let o = rjt() ? qSn() : void 0, n = it();
  if (e(), o === void 0 || it() === n) return;
  return q4o(o, { forContextWindow: true }), o;
}
function P(e, o, n) {
  let r = import("../cli/bootstrap-fetch-can-converge-slot.js").then(({ refreshBootstrapData: a }) => a(e, o, { renderedClientData: n })).then(() => {
  }, (a) => l(a));
  return ojt(r), r;
}
function fYn(e, o, n) {
  return P(e, o, n);
}
function a4s(e) {
  wr().fetchesClientData = e;
}
function RUo() {
  return wr().fetchesClientData && Te() === "firstParty";
}
function ojt(e) {
  let o = _3r(), n = wr().providerCache.clientDataFetches;
  if (o !== void 0 && !(n.get(o) instanceof Promise)) {
    let r = Vbe();
    n.set(o, e), e.finally(() => {
      if (n.get(o) === e) if (Vbe() === r) n.set(o, "over");
      else n.delete(o);
    });
  }
}
function v() {
  return [...wr().providerCache.clientDataFetches.values()].filter((e) => e !== "over");
}
function l4s(e) {
  let o = wr().providerCache.clientDataFetches;
  for (let [n, r] of o) if (r === e) o.set(n, "over");
}
function d4s(e, o) {
  let n = _3r();
  if (n === void 0 || !RUo() || lrt()) return;
  let r = wr().providerCache.clientDataFetches.get(n);
  if (r !== void 0) return r === "over" ? void 0 : r;
  return P(e, o, qSn());
}
function eL() {
  if (!$n()) return false;
  if (gL() !== void 0) return true;
  if (i.ANTHROPIC_UNIX_SOCKET) return false;
  return op();
}
function iSt() {
  return eL() && f() && (k("tengu_ccr_bridge", false) || C());
}
function C() {
  if (!E() || !eL() || le()) return false;
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
  return !jf() && !i.DISABLE_GROWTHBOOK && w3t() === "no-telemetry" && !wor();
}
function N() {
  let e = zXr(), o = e?.named;
  if (!o || e?.bearerSha256 !== y()) return null;
  return (i.CLAUDE_CODE_ORGANIZATION_UUID || m()?.organizationUuid)?.toLowerCase() === o.organizationUuid.toLowerCase() ? o.subscriptionType : null;
}
function x() {
  let e = zXr();
  return e !== null && e.bearerSha256 === y() && (e.named !== null || Date.now() - e.answeredAtMs < F);
}
function U() {
  return E() && N() !== null;
}
function y() {
  try {
    let e = Ln();
    return e && !e.refreshToken && e.accessToken !== kkt ? Pnt() : null;
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
function jpn() {
  if (iSt()) return null;
  if (!p()) return "not_signed_in";
  if (!f()) return "api_key_auth";
  if (!b()) return "no_profile_scope";
  return "not_in_rollout";
}
function c() {
  return false;
}
function pV() {
  return VF()?.settings.disableRemoteControl === true;
}
function KP() {
  if (c()) return true;
  return q();
}
function q() {
  if (pV()) return false;
  return !yF() && iSt();
}
function xUo() {
  return false;
}
function PUo() {
  if (c()) return true;
  return !pV() && !yF() && eL();
}
async function IUo(e) {
  return await G1r(e) === null;
}
async function G1r(e) {
  if (c()) return null;
  if (pV()) return "managed_disabled";
  if (!eL()) return "not_first_party";
  if (yF()) return "cloud_session";
  if (!f()) return p() ? "not_subscription_auth" : "not_signed_in";
  if (await H(e), C() || await ub("tengu_ccr_bridge")) return null;
  if (!jf()) return "flags_disabled";
  return Fi() ? "gate_off" : "flags_unreachable";
}
var K = "Remote Control is disabled by your organization's policy. Contact your organization admin for access.", X = 864e5, J = 2147483647;
function G() {
  return LQ();
}
function mYn() {
  let { featureLabel: e, verb: o } = DQ("allow_remote_control");
  return $Vt(e, o, HL(), K);
}
function UHe(e) {
  let o = e ? ["allow_remote_control", "allow_remote_sessions"] : ["allow_remote_control"];
  try {
    for (let n of o) {
      let r = Jc(n);
      switch (r) {
        case null:
        case "cache_miss":
        case "route_missing":
          continue;
        case "latched": {
          if (!yY() && !L()) continue;
          let { featureLabel: a, verb: _ } = DQ(n);
          return { policy: n, kind: r, detail: vNe(a, _) };
        }
        case "org_denied":
          if (Iw()?.restrictions[n]?.allowed !== false && !yY() && !L()) continue;
          return { policy: n, kind: r, detail: n === "allow_remote_control" ? KUo : "Session mirroring was turned off by your organization's policy (allow_remote_sessions)." };
        default:
          return { policy: n, kind: "org_denied", detail: KUo };
      }
    }
    return null;
  } catch {
    return null;
  }
}
function L() {
  let e = OV();
  return e !== void 0 && Whn.has(e);
}
var s = (e, o) => ({ reason: o, code: e, orgPolicyDenied: false });
async function sjt() {
  if (c()) return null;
  if (!eL()) return s("not_first_party", ae());
  if (yF()) return s("cloud_session", "Remote Control is not available inside a cloud session.");
  if (pV()) return s("managed_disabled", xre);
  if (!p()) return s("not_signed_in", "Remote Control requires a claude.ai subscription. Run `claude auth login` to sign in with your claude.ai account.");
  if (!f()) return s("not_subscription_auth", ijt({ prefix: "Remote Control requires claude.ai subscription auth.", suffix: "to use Remote Control." }));
  await H(void 0);
  let e = U();
  if (!e && !b()) return s("token_scope_limited", "Remote Control requires a full-scope login token. Long-lived tokens (from `claude setup-token` or CLAUDE_CODE_OAUTH_TOKEN) are limited to inference-only for security reasons. Run `claude auth login` to use Remote Control.");
  if (!e && !m()?.organizationUuid) return s("no_organization", "Unable to determine your organization for Remote Control eligibility. Run `claude auth login` to refresh your account information.");
  await rce();
  let o = ajt();
  if (o === "unavailable") return s("policy_unverified", tBr);
  if (o === "denied") return { reason: Y(), code: "org_policy_denied", orgPolicyDenied: true };
  if (C()) return null;
  if (!jf()) {
    let n = zYr();
    if (n) return s("flags_disabled", `Remote Control requires feature-flag evaluation, which is disabled because ${n} is set. Unset it (or run in a shell without it) to use Remote Control.`);
    if (i.DISABLE_GROWTHBOOK) return s("flags_disabled", "Remote Control requires feature-flag evaluation, which is disabled because DISABLE_GROWTHBOOK is set. Unset it (or run in a shell without it) to use Remote Control.");
    return s("flags_disabled", "Remote Control requires feature-flag evaluation, which is unavailable in this environment.");
  }
  if (!await ub("tengu_ccr_bridge")) {
    if (!Fi()) {
      if (uI(), await ub("tengu_ccr_bridge")) return null;
      if (!Fi()) return s("flags_unreachable", "Couldn't verify Remote Control eligibility — the feature-flag service was unreachable (offline or blocked). Retry, or run with `--debug` / `claude doctor` for details.");
    }
    return s("gate_off", "Remote Control isn't enabled for this account. If you recently changed plans, run `claude auth logout` then `claude auth login` to refresh your entitlements, or `claude doctor` for details.");
  }
  return null;
}
async function Q() {
  return (await sjt())?.reason ?? null;
}
function Y() {
  try {
    if (w_e()) return Ikt("Remote Control");
    if (xZn("allow_remote_control")) return vNe("Remote Control", "is");
    if (!G()) return _Se("Remote Control");
    if (!y6o()) return K;
    return mYn();
  } catch {
    return tBr;
  }
}
var Z = "set by your organization's configuration, not an admin setting";
function ee({ policyVerdict: e, policyDenialIsAuthoritative: o, currentTaints: n }) {
  if (e !== "denied" || !o) return false;
  try {
    return !w_e() && !xZn("allow_remote_control") && use(n).length > 0;
  } catch {
    return false;
  }
}
function aSt() {
  if (c()) return null;
  if (pV()) return xre;
  let e = mo(), o = aGt(), n = e.remoteControlLockReason;
  if (n !== void 0 && n.policyCacheRevision === o) return n.reason;
  let r = te();
  return e.remoteControlLockReason = { policyCacheRevision: o, reason: r }, r;
}
function te() {
  let e = ajt();
  if (e === "allowed") return null;
  if (e === "unavailable") return tBr;
  return Y();
}
function nxi() {
  if (!Iz()) return "";
  let e = (o) => o ? "set" : "unset";
  try {
    let o = Ln(), n = Object.values(rot).filter((r) => Ne(process.env[r]));
    return ["", "[debug] Remote Control auth state:", `  isBareMode=${Sr()}`, `  hasOAuthAccessToken=${!!o?.accessToken}`, `  oauthScopes=${o?.scopes?.join(",") ?? "none"}`, `  hasClaudeAIInferenceScope=${p()}`, `  isClaudeAISubscriber=${f()}`, `  hasProfileScope=${b()}`, `  oauthAccount.organizationUuid=${m()?.organizationUuid ? "set" : "unset"}`, `  ANTHROPIC_API_KEY=${e(process.env.ANTHROPIC_API_KEY)}`, `  ANTHROPIC_AUTH_TOKEN=${e(process.env.ANTHROPIC_AUTH_TOKEN)}`, `  apiKeyHelper=${Ng() ? "set" : "unset"}`, `  CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR=${e(process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR)}`, `  CLAUDE_CODE_OAUTH_TOKEN=${e(process.env.CLAUDE_CODE_OAUTH_TOKEN)}`, `  ANTHROPIC_UNIX_SOCKET=${e(process.env.ANTHROPIC_UNIX_SOCKET)}`, `  3P env=${n.length ? n.join(",") : "none"}`, ...oe()].join(`
`);
  } catch (o) {
    return `
[debug] failed to collect auth state: ${o}`;
  }
}
function oe() {
  let e = (r) => r ? "set" : "unset", o = GG(), n = ne();
  return [`  isGrowthBookEnabled=${jf()}`, `  telemetryDisabledBy=${zYr() ?? "none"}`, `  DISABLE_GROWTHBOOK=${e(process.env.DISABLE_GROWTHBOOK)}`, `  hasFreshGrowthBookFeatures=${Fi()}`, `  growthBookFeaturesLoaded=${Object.keys(o).length}`, `  growthBookLastFetched=${n ? `${re(Date.now() - n)} ago` : "never"}`, `  tengu_ccr_bridge=${String(o.tengu_ccr_bridge ?? "unset")}`];
}
async function OUo() {
  if (yF() && !c()) return { disabledReason: null, inRemoteSession: true, checks: [] };
  uI(), await rce();
  let e = await Q(), o = zYr() ?? (i.DISABLE_GROWTHBOOK ? "DISABLE_GROWTHBOOK" : null), n = eL(), r = !pV(), a = p(), _ = f(), D = U(), R = D || b(), A = D || !!m()?.organizationUuid, g = ajt(), O = G(), V = ee({ policyVerdict: g, policyDenialIsAuthoritative: O, currentTaints: CZ() }), B = jf(), h = C(), I = h || await ub("tengu_ccr_bridge"), T = Fi(), z = [{ label: n ? "Connected to the Anthropic API (api.anthropic.com)" : "Not connected to the Anthropic API (api.anthropic.com)", ok: n }, { label: r ? "Not disabled by org policy (disableRemoteControl)" : "Disabled by org policy (disableRemoteControl)", ok: r }, { label: a ? "Signed in to claude.ai" : "Not signed in to claude.ai", ok: a }, { label: _ ? "claude.ai subscription active" : "claude.ai subscription auth not active", ok: _ }, { label: R ? "Sign-in includes the user:profile scope" : "Sign-in is missing the user:profile scope", ok: R }, { label: A ? "Organization resolved" : "Organization not resolved", ok: A }, { label: g === "allowed" ? "Org policy allows Remote Control (allow_remote_control)" : g === "unavailable" ? "Org policy could not be verified (allow_remote_control)" : !O ? "Org policy not loaded, see the Organization policy line above (allow_remote_control)" : "Org policy does not allow Remote Control (allow_remote_control)", ok: g === "allowed", detail: V ? Z : void 0 }, { label: B ? "Feature-flag evaluation enabled" : "Feature-flag evaluation disabled", ok: B || h, detail: o ? h ? `disabled by ${o}; Remote Control does not need it on a paid plan` : `disabled by ${o}` : void 0 }, { label: I ? "Remote Control enabled for this account" : T ? "Remote Control not enabled for this account" : "Remote Control availability could not be verified", ok: I, detail: h ? "decided from your plan, feature flags are off" : T ? void 0 : "no server response this session" }];
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
function ijt({ prefix: e, suffix: o }) {
  try {
    let { source: n } = oT({ skipRetrievingKeyFromApiKeyHelper: true });
    if (n === "ANTHROPIC_API_KEY") return `${e} ANTHROPIC_API_KEY is set, so this session is using API-key auth — unset it (or run in a shell without it) ${o}`;
    if (n === "apiKeyHelper") return `${e} apiKeyHelper is configured, so this session is using API-key auth — unset it ${o}`;
    if (process.env.ANTHROPIC_AUTH_TOKEN) return `${e} ANTHROPIC_AUTH_TOKEN is set, so this session is using API-key auth — unset it (or run in a shell without it) ${o}`;
    let { source: r } = ua(), a = rRe(r);
    if (r !== "none" && a) return `${e} This session is using ${r} auth — ${a}`;
    if (process.env.ANTHROPIC_UNIX_SOCKET) return `${e} ANTHROPIC_UNIX_SOCKET is set without CLAUDE_CODE_OAUTH_TOKEN, so requests on the socket carry no claude.ai login (on a claude ssh remote: the local machine is API-key-authed).`;
  } catch {
  }
  return `${e} Unset ANTHROPIC_API_KEY / apiKeyHelper / ANTHROPIC_AUTH_TOKEN ${o}`;
}
var d = "Remote Control is only available when using Claude via api.anthropic.com.", S = "unset it (or run in a shell without it) to use Remote Control.", ie = "unset them (or run in a shell without them) to use Remote Control.";
function ae() {
  let e = Te();
  if (e !== "firstParty") {
    if (e === "gateway") return `${d} This session uses a ${nk.gateway}, which does not support Remote Control.`;
    if (e === "bedrock" && VNe() === "mantle") return `${d} ${rot.bedrock} and ${rot.mantle} are set, so this session is using ${nk.bedrock} + ${nk.mantle} — ${ie}`;
    return `${d} ${rot[e]} is set, so this session is using ${nk[e]} — ${S}`;
  }
  if (!op()) {
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
    return vt();
  } catch {
    return false;
  }
}
function b() {
  try {
    return vp();
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
    return uGt("require_trusted_devices") || MV();
  } catch {
    return true;
  }
}
async function rce() {
  try {
    await se();
  } catch (e) {
    t(`[bridge] policy-limits hydrate for the Remote Control diagnostic failed: ${e instanceof Error ? e.message : String(e)}`);
  }
}
async function se() {
  try {
    if (Iw() !== null) return;
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
function ajt() {
  try {
    return on("allow_remote_control") ? "allowed" : "denied";
  } catch {
    return "unavailable";
  }
}
function vTe() {
  return KP() && ajt() === "allowed";
}
function yF() {
  return Ne(process.env.CLAUDE_CODE_REMOTE) || Pn();
}
function MUo() {
  return k("tengu_bridge_repl_v2_cse_shim_enabled", true);
}
function kTe() {
  return k("tengu_luminous_seal", true);
}
function HUo() {
  return k("tengu_bridge_partial_messages", false);
}
function gYn() {
  return k("tengu_wobbly_pinwheel", true);
}
function z1r() {
  return k("tengu_copper_kestrel", true);
}
function ljt() {
  return k("tengu_bridge_auth_revive", true);
}
function V1r() {
  return k("tengu_ethereal_mist", true);
}
function DUo() {
  return k("tengu_wild_gosling", false);
}
function lSt() {
  return k("tengu_humble_petal", true);
}
function LUo() {
  return k("tengu_moonlit_lagoon", true);
}
function NUo() {
  return k("tengu_bridge_resume_respects_local_owner", true);
}
function FUo() {
  return k("tengu_sequential_puffin", true);
}
function CTe() {
  return k("tengu_bridge_owner_pinned_end", true);
}
function K1r() {
  return k("tengu_bridge_owner_check_attribution", true);
}
function hYn() {
  return k("tengu_glimmering_glade", true);
}
function $Uo() {
  return k("tengu_lucky_quill", true);
}
function UUo() {
  return k("tengu_keen_lantern", true);
}
function BUo() {
  return k("tengu_zany_melody", true);
}
function q1r() {
  return k("tengu_bridge_host_declined_end", true);
}
function jUo() {
  return k("tengu_bridge_signed_out_neutral", true);
}
function Wpn() {
  return k("tengu_ccr_v2_send_events_cli", true);
}
function bU() {
  return k("tengu_ccr_v2_session_crud_cli", false);
}
function rxi() {
  return k("tengu_ccr_v2_bridge_create_cli", false);
}
function Gpn() {
  return k("tengu_composed_quail", true);
}
function WUo() {
  return k("tengu_gravel_chorus", true);
}
function dSt() {
  return Y1r().value;
}
function Y1r() {
  if (yF()) return { value: false, source: "remote_env" };
  let e = S6o("remote_control_at_startup");
  if (E()) return { value: false, source: e === false ? "org_policy" : "growthbook" };
  if (BHe()) return { value: true, source: "persistent_remote_session" };
  if (e !== void 0) return { value: e, source: "org_policy" };
  return { value: k("tengu_cobalt_harbor", false), source: "growthbook" };
}
function oce() {
  let e = irt();
  return e !== void 0 ? e : dSt();
}
function BHe() {
  return false;
}
function oxi() {
  return false;
}
function zpn() {
  return k("tengu_amber_relay", false);
}
async function sxi() {
  return false;
}
function FZe() {
  {
    let { value: e, source: o } = kn("tengu_bridge_apply_server_session_config", true);
    if (e !== false) return true;
    if (o === "override") return false;
    return !(o === "payload" && FSn().organizationUUID);
  }
  return false;
}
function X1r() {
  return k("tengu_bridge_child_auto_mode", true);
}
function GUo() {
  return k("tengu_bridge_child_auto_over_settings", true);
}
function J1r() {
  return k("tengu_bridge_rc_child_artifact", true);
}
function djt() {
  return k("tengu_bridge_rc_projects_hint", true);
}
function Q1r() {
  return k("tengu_bridge_child_machine_settings", true);
}
function Z1r() {
  return k("tengu_bridge_rc_child_auto_compact", true);
}
function eBr() {
  return gr("tengu_gentle_grove", { safe: false });
}
function zUo() {
  let e = k("tengu_bridge_rc_child_idle_exit_ms", X);
  if (typeof e !== "number" || !Number.isFinite(e) || e < 1) return 0;
  return Math.min(Math.floor(e), J);
}
function Vpn() {
  return k("tengu_bridge_rc_child_restart_resume", true);
}
function Kpn() {
  return { enabled: k("tengu_bridge_subagent_frames", true), forwardText: k("tengu_bridge_subagent_text", false) };
}
function VUo(e, o) {
  if (e.replBridgeOutboundOnly && !o) return e.replBridgeSessionGroupingId !== void 0 ? { ...e, replBridgeSessionGroupingId: void 0 } : e;
  if (e.replBridgeEnabled === o && !e.replBridgeOutboundOnly) return !o && e.replBridgeSessionGroupingId !== void 0 ? { ...e, replBridgeSessionGroupingId: void 0 } : e;
  return { ...e, replBridgeEnabled: o, replBridgeOutboundOnly: false, ...!o && { replBridgeSessionGroupingId: void 0 } };
}
export {
  $Uo,
  BHe,
  BUo,
  CTe,
  DUo,
  FUo,
  FZe,
  G1r,
  GUo,
  Gpn,
  HUo,
  IUo,
  J1r,
  K1r,
  KP,
  Kpn,
  LUo,
  MUo,
  NUo,
  OUo,
  PUo,
  Q1r,
  RUo,
  UHe,
  UUo,
  V1r,
  VUo,
  Vpn,
  WUo,
  Wpn,
  X1r,
  Y1r,
  Z1r,
  a4s,
  aSt,
  ajt,
  bU,
  d4s,
  dSt,
  djt,
  eBr,
  eL,
  fYn,
  gYn,
  hYn,
  iSt,
  ijt,
  jUo,
  jpn,
  kTe,
  l4s,
  lSt,
  ljt,
  mYn,
  nxi,
  oce,
  ojt,
  oxi,
  pV,
  pYn,
  q1r,
  rce,
  rjt,
  rxi,
  sjt,
  sxi,
  vTe,
  xUo,
  yF,
  z1r,
  zUo,
  zpn
};
