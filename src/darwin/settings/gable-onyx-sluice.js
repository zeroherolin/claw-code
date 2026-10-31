// darwin/settings/gable-onyx-sluice.js — Claude Code 2.1.310（darwin）模块 chunk-5y5bz0yg.js
import { Ne, as } from "../fs/async-hooks.93b1.js";
import { ye, J } from "../context/not-admin-owned.js";
import { S, c, ce } from "../agents/third-party.js";
import { nD } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "../shared/environment.js";
import { St } from "../artifacts/cowritten-artifact-html.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { Te } from "../models/total-tokens-reminder.js";
import { Sl } from "../mcp/allowed-warning.js";
import { Uu, Nc, yX, xE, kz, ay, fp, Res, FM, Pes } from "../remote/local-agent.js";
import { VF, Qt } from "./workflow-launch-exec.js";
import { mg, fe, a5r, Gf, QRe, fpe, OSe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { LLe, or, k } from "./global-config-and-gates.js";
import { $Re, eu, DKe } from "../artifacts/cobalt-plinth-lovage.js";
import { Z, mj } from "../artifacts/same-account.js";
import { coe, yj, wAe } from "../shell/content-scan-transient.js";
import { LDe, j2t, eT } from "../mcp/cobalt-plinth-sedge.js";
import { M2t, ODe, At } from "../artifacts/artifact-share-status.js";
import { IJs } from "../shared/chunk-5f244a2f.js";
import { O6e, ezr, Vce, Mh, OV, zhn, on, w_e, Jc, H6e, Iw } from "../auth/env-quad.js";
import { tm, loe } from "./non-string-value.js";
import { f_e, BQn } from "../git/artifact-capabilities.js";
import { Roe } from "../shared/allow-bundled-skills.js";
var q = "/_warmup", x = 3e3, z = 6e5, Q = 262144;
function kJs(e) {
  let n = Z();
  return n.contentHostEgressDenied.has(e.env) || n.contentHostEgressUnanswered.has(DKe(e));
}
function T(e) {
  let n = Z().contentHostEgressProbed.get(e);
  return n !== void 0 && Date.now() - n < z;
}
function wGo(e) {
  return J() || Z().contentHostEgressDenied.has(e.env) || T(DKe(e));
}
async function att(e, n) {
  let r = Z(), o = DKe(e);
  if (J()) {
    r.contentHostEgressProbed.delete(o), r.contentHostEgressUnanswered.add(o);
    return;
  }
  if (r.contentHostEgressDenied.has(e.env)) {
    r.contentHostEgressProbed.delete(o), r.contentHostEgressUnanswered.add(o);
    return;
  }
  if (T(o)) return;
  let s = r.contentHostEgressInFlight.get(o);
  if (s !== void 0) return s.catch((l) => {
    if (n.aborted) throw l;
    return att(e, n);
  });
  let f = X(e, o, n).finally(() => {
    r.contentHostEgressInFlight.delete(o);
  });
  return r.contentHostEgressInFlight.set(o, f), f;
}
async function X(e, n, r) {
  let o = Z(), s = () => {
    o.contentHostEgressUnanswered.delete(n), o.contentHostEgressProbed.set(n, Date.now());
  }, f = (p) => {
    t(`[artifact] egress probe of ${n}: ${p}; reading the host as unreachable for this check`), o.contentHostEgressProbed.delete(n), o.contentHostEgressUnanswered.add(n);
  }, l = () => {
    o.contentHostEgressProbed.delete(n), o.contentHostEgressUnanswered.add(n), o.contentHostEgressDenied.add(e.env);
  }, u;
  try {
    u = await Sl.get(`${n}${q}`, { signal: AbortSignal.any([r, AbortSignal.timeout(x)]), timeout: x, maxRedirects: 0, maxContentLength: Q, responseType: "text", validateStatus: () => true });
  } catch (p) {
    if (r.aborted) throw p;
    if (wAe(p)) return l();
    return f(nD(p) ? "an answer larger than the cap" : "no answer");
  }
  if (yj(u.status, u.headers)) return l();
  let h = () => coe(u.headers, u.data, (p) => p);
  if (!(u.status >= 200 && u.status < 300 || u.status === 403 && ODe(u.headers, h()) || u.status === 404 && M2t(u.headers, h()))) return f(`unrecognised HTTP ${u.status}`);
  return s();
}
var A = "classifier", b = "person", CJs = "classifier";
function ev(e) {
  switch (e.operation) {
    case "delete":
      return d("delete", "person", "this_call", "known");
    case "change_access":
      return d("access_change", "person", "this_call", "known");
    case "standing_job":
      return e.turnStartedByHuman ? d("standing_job", "classifier", "artifact", "known") : d("standing_job", "classifier", "this_call", "unattended");
    case "write": {
      if (!e.turnStartedByHuman) {
        if ((e.routineWrite === true || e.commentWrite === true) && e.public === false && e.canWrite === true && e.invitedByOtherOrg !== true) return { ask: false, foreignRead: false };
        return d("public_change", "classifier", "this_call", "unattended");
      }
      if (e.public === true) return d("public_change", "classifier", "artifact", "known");
      if (e.public === void 0) return d("public_change", "classifier", "this_call", "facts_missing", "public");
      if (e.invitedByOtherOrg === true) return { ...d("public_change", "classifier", "artifact", "known"), about: "someone_else" };
      return { ask: false, foreignRead: false };
    }
    case "read": {
      if (e.owned === true) return { ask: false, foreignRead: false };
      if (e.outsideOrg === true) return { ...d("foreign_read", b, e.turnStartedByHuman ? "artifact" : "this_call", "known"), about: "outside_org" };
      if (e.owned === void 0) return d("foreign_read", A, "this_call", "facts_missing", "owned");
      if (e.networkOff === void 0) return d("foreign_read", A, "this_call", "facts_missing", "networkOff");
      if (e.networkOff) return d("foreign_read", A, e.turnStartedByHuman ? "artifact" : "this_call", "known");
      return { ask: false, foreignRead: true };
    }
  }
}
var ee = true;
function TJs(e) {
  if (!ee || e.public === false) return { ask: false, foreignRead: false };
  return e.public === true ? d("public_change", "classifier", "this_call", "known") : d("public_change", "classifier", "this_call", "facts_missing", "public");
}
function d(e, n, r, o, s) {
  return { ask: true, class: e, answeredBy: n, remember: r, basis: o, ...s !== void 0 && { missing: s } };
}
function LQn(e) {
  return e.ask && e.remember === "artifact";
}
function ywt(e) {
  return e.endpoint ? `${e.class}:endpoint` : e.class;
}
function d4(e, n) {
  return Z().askClassConsent.has(g(e, n));
}
function AJs(e, n, r = false) {
  let o = Z();
  if (o.askClassConsent.add(g(e, n)), r) o.askClassPersonConsent.add(g(e, n));
}
function uAe(e, n, r = false) {
  let o = ywt(e);
  return e.informedOnly ? EGo(n) : e.answeredBy === "person" || r ? P2t(o, n) : d4(o, n);
}
function RJs(e) {
  Z().askClassOutsideOrgConsent.add(g("foreign_read", e));
}
function EGo(e) {
  return Z().askClassOutsideOrgConsent.has(g("foreign_read", e));
}
var te = 512;
function ltt(e, n, r) {
  if (e.toolUseId === void 0) return;
  let o = Z().askNamedOtherOrg, s = o.get(e.toolUseId), f = r ? n : [], l = s === void 0 ? f : f.filter((u) => s.includes(u));
  if (o.delete(e.toolUseId), o.set(e.toolUseId, l), o.size > te) {
    let u = o.keys().next().value;
    if (u !== void 0) o.delete(u);
  }
}
function tGr(e) {
  if (e.toolUseId !== void 0) Z().askNamedOtherOrg.delete(e.toolUseId);
}
function _wt(e, n) {
  return e.toolUseId !== void 0 && (Z().askNamedOtherOrg.get(e.toolUseId) ?? []).includes(n);
}
function P2t(e, n) {
  return Z().askClassPersonConsent.has(g(e, n));
}
var ne = ["artifactDbReadConsentSlugs", "artifactDbReadHumanConsentSlugs", "artifactReadConsentSlugs", "artifactAssetUploadConsentSlugs", "artifactAssetUploadHumanConsentSlugs", "artifactAssetReadConsentSlugs", "artifactAssetReadHumanConsentSlugs", "artifactOutsideOrgConsentSlugs", "artifactHandlersReadConsentSlugs", "artifactHandlersReadHumanConsentSlugs", "artifactHandlersWriteConsentSlugs", "artifactHandlersWriteHumanConsentSlugs"], xJs = [...ne, "artifactRoomJoinConsentSlugs", "artifactPlanPublishConsentPaths", "artifactWatchApproved", "artifactDbWriteApproved", "artifactDbWriteHumanApproved", "artifactReadPageDataApproved", "artifactReadPageDataHumanApproved"], re = Object.freeze({});
function pAe(e) {
  return (e.artifactConsentEpoch ?? 0) === Z().accountEpoch ? e : re;
}
function MQ(e, n, r) {
  return pAe(e)[n]?.[r] === true;
}
function NQn(e, n) {
  return MQ({ artifactConsentEpoch: e.consentEpoch.get(), artifactReadConsentSlugs: e.sharedReadConsent.get() }, "artifactReadConsentSlugs", n);
}
function dtt() {
  let { accountEpoch: e, conversationEpoch: n } = Z();
  return `${e}:${n}`;
}
function g(e, n) {
  return `${dtt()}:${e}:${n}`;
}
var _ = " · web fetch, design sync and Channels wait for it";
function m() {
  let e = Iw();
  if (e === null) return "nothing";
  return e === O6e ? "unrestricted" : "stale_cache";
}
function FQn() {
  let e = OV();
  if (e !== void 0) return { state: "ineligible", reason: e };
  let n = Vce(), r = Iw() !== null, o = zhn("allow_web_fetch");
  if (n === null) return { state: "pending", hasCache: r, egressKeysWithheld: o };
  return { state: "settled", outcome: n, served: m(), egressKeysWithheld: o };
}
function oe(e) {
  switch (e) {
    case "third_party_provider":
      return "not fetched: this session doesn't connect to the Anthropic API directly (Bedrock, Vertex, Foundry, or a gateway)";
    case "custom_base_url":
      return "not fetched with a custom ANTHROPIC_BASE_URL";
    case "no_auth":
      return "not fetched: no API key or claude.ai sign-in for the policy lookup (apiKeyHelper keys are not used for it)";
    case "oauth_no_inference_scope":
      return "not fetched: this sign-in lacks the inference scope";
    case "prosumer_oauth":
      return "not applicable to Pro and Max accounts";
  }
}
function ie(e, n, r, o) {
  let s = o ? "" : " · Retried hourly while Claude Code runs; restart to retry now";
  switch (e) {
    case "auth_failed":
      if (n === 403) return `${r}, or a proxy in front of it, refused the request (HTTP 403) · Fix: if you use a web proxy make sure it allows ${r}; if your organization restricts by IP, check this machine is allowed${s}`;
      if (n === 401 && o) return `${r} rejected this session's sign-in (HTTP 401) while it was being refreshed · Claude Code is retrying with the refreshed sign-in`;
      return n ? `${r} rejected this session's credentials (HTTP ${n}) · Fix: sign in again or check the API key this session uses` : "Couldn't attach credentials to the request · Fix: sign in, set the API key this session should use, or check your workload-identity setup";
    case "timeout":
      return `${r} took too long to answer · Fix: check your network or proxy${s}`;
    case "network_error":
      return `Couldn't reach ${r} · Fix: check your network or proxy${s}`;
    case "parse_failed":
      return `The answer from ${r} couldn't be read, either because a proxy replaced it or because this version of Claude Code doesn't understand it · Fix: check your proxy settings, or update Claude Code${s}`;
    case "spurious_304":
      return `${r} confirmed a cached copy from a previous sign-in, which this session can't use${s}`;
    case "stale_tunnel_credential":
      return `The machine running claude ssh changed credentials while ${r} was answering, so that answer wasn't used${s}`;
    case "request_failed":
      if (n === 404) return `The request for ${$Re} on ${r} got a 404, which usually means a proxy or gateway between you and the API isn't forwarding that path · Fix: ask your network admin to allow it${s}`;
      if (n === 304) return `A caching proxy between you and ${r} answered in place of the API (HTTP 304) · Fix: ask your network admin to stop caching ${$Re}${s}`;
      if (n === 407) return `Your proxy asked for authentication before it would forward the request to ${r} (HTTP 407) · Fix: check your proxy credentials${s}`;
      return n ? `HTTP ${n} on the request to ${r}${s}` : `Couldn't complete the request to ${r}; if a proxy intercepts TLS, its certificate must be trusted (NODE_EXTRA_CA_CERTS) · Fix: check your network or proxy${s}`;
  }
}
function $Qn(e) {
  switch (e.state) {
    case "ineligible":
      return oe(e.reason);
    case "pending":
      return e.hasCache ? `Using the copy on disk · not refreshed yet this session${e.egressKeysWithheld ? _ : ""}` : `Not loaded yet${e.egressKeysWithheld ? _ : ""} · if this persists, check your network or proxy`;
    case "settled": {
      let { outcome: n } = e;
      if (n.success) return `Loaded from ${n.host}`;
      let r = ie(n.errorCode, n.httpStatus, n.host, n.retrying), o = n.retrying ? " yet, still retrying" : "", s = e.egressKeysWithheld ? ", web fetch, design sync, Channels" : "";
      switch (e.served) {
        case "stale_cache":
          return `Couldn't refresh${o} · using the last copy on this machine${e.egressKeysWithheld ? _ : ""} · ${r}`;
        case "unrestricted":
          return e.egressKeysWithheld ? `Couldn't load${o} · no restrictions applied this session, except that web fetch, design sync and Channels stay off until it loads · ${r}` : `Couldn't load${o} · no restrictions applied this session · ${r}`;
        case "nothing":
          return `Couldn't load${o} · features that must check it first (Remote Control, cloud sessions, /feedback${s} and others) stay off, and some need a restart once it loads · ${r}`;
      }
    }
  }
}
function PJs(e) {
  switch (e.state) {
    case "pending":
      return false;
    case "settled":
      return !e.outcome.success;
    case "ineligible":
      return e.reason === "third_party_provider" || e.reason === "custom_base_url";
  }
}
var se = ["policySettings", "flagSettings", "userSettings"], ae = ["localSettings", "projectSettings"];
function C(e) {
  let n = [];
  if (e.envDisableVar !== void 0 && ue(e.envDisableVar)) n.push({ layer: "env", via: "envVar" });
  let r;
  for (let l of se) {
    let u = v(l, e);
    if (L(n, l, l === "policySettings" ? [...u, ...fpe()] : u, e), r === void 0 && u.some((h) => h?.[e.enableKey] === true) && (l !== "policySettings" || OSe())) r = l;
  }
  let o = n.some((l) => l.layer === "env" || l.layer === "policySettings" || l.layer === "flagSettings");
  for (let l of ae) L(n, l, v(l, e), e);
  let s = n.some((l) => l.layer === "localSettings" || l.layer === "projectSettings");
  return { enabled: n.length === 0 && (e.defaultOn || r !== void 0), decidedBy: n[0]?.layer ?? r ?? "default", offSources: n, lockedAboveUser: o, userControllable: !o && !s && Qt("userSettings") };
}
function v(e, n) {
  if (e === "policySettings") return [...Gf(), fe("policySettings")];
  if (!Qt(e)) return [];
  if (e === "localSettings") return [fe(e), a5r()];
  let r = fe(e);
  if (e === "projectSettings" && le(r, n) && Qt("userSettings") && mg()) return [];
  return [r];
}
function le(e, n) {
  return e?.[n.enableKey] !== void 0 || n.legacyDisableKey !== void 0 && e?.[n.legacyDisableKey] !== void 0;
}
function L(e, n, r, o) {
  if (r.some((f) => f?.[o.enableKey] === false)) e.push({ layer: n, via: "enableKey" });
  let s = o.legacyDisableKey;
  if (s !== void 0 && r.some((f) => f?.[s] === true)) e.push({ layer: n, via: "legacyDisableKey" });
}
function ue(e) {
  if (i[e] || Ne(E(tm(), e)) || Ne(QRe(e)) || Ne(E(loe(), e))) return true;
  for (let n of ["flagSettings", "userSettings"]) if (Qt(n) && Ne(E(fe(n)?.env, e))) return true;
  return false;
}
function E(e, n) {
  if (e === void 0) return;
  if (n in e) return e[n];
  let r = D.get(e);
  if (r?.has(n)) return r.get(n);
  let o = Object.entries(e).find(([s]) => s.toUpperCase() === n)?.[1];
  if (Object.isFrozen(e)) if (r) r.set(n, o);
  else D.set(e, /* @__PURE__ */ new Map([[n, o]]));
  return o;
}
var D = /* @__PURE__ */ new WeakMap();
var F = { enableKey: "enableArtifact", legacyDisableKey: "disableArtifact", defaultOn: true }, U = { ...F, envDisableVar: "CLAUDE_CODE_DISABLE_ARTIFACT" };
function w6e() {
  return C(U);
}
function y() {
  return !w6e().enabled;
}
function vGo() {
  return !C(F).enabled || Ne(QRe("CLAUDE_CODE_DISABLE_ARTIFACT"));
}
function nGr() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return kz() || e === "claude-code-github-action" || e === "mcp";
}
function W(e) {
  return e === "local-agent" || e?.startsWith("claude-coworker") === true;
}
function iR() {
  return ay() === "local-agent" && fp() && !FM() && Pes();
}
function iY() {
  return yX() && Res() || iR();
}
function E6e() {
  return xE();
}
function tv(e) {
  return e !== void 0 && E6e() && kJs(e);
}
function IDe(e, n) {
  return !e && (tv(n) || p_e(n.slug));
}
function RF(e) {
  return e !== void 0 && e.outsideOrgReader === true && eT();
}
function p_e(e) {
  return b === "person" && RF(At(e));
}
function Rx(e) {
  return RF(e) || I2t(e);
}
function I2t(e) {
  return e !== void 0 && e.external === true && eT();
}
function rGr(e) {
  return e !== void 0 && e.probeFailed !== true && e.external !== true && (e.outsideOrgReader === false || e.role === "owner");
}
function de() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  if (e === "local-agent" && iR()) return false;
  return W(e);
}
function Qgn() {
  return W(ay()) && !iR();
}
function pe() {
  return LDe() && ge();
}
function ge() {
  return N() === null;
}
function N() {
  if (Te() !== "firstParty") return "third_party_provider";
  if (St()) return "essential_traffic_only";
  if (as(i.CLAUDE_CODE_ARTIFACT)) return "artifact_env_off";
  if (!Ne(i.CLAUDE_CODE_ARTIFACT) && !Ne(i.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT) && nGr()) return "sdk_default_off";
  return null;
}
function K() {
  return LDe() && w();
}
function w() {
  return B() === null;
}
function B() {
  if (de()) return "surface_excluded";
  return N();
}
function uxi() {
  if (y()) return false;
  return K();
}
function kGo() {
  return i.CLAUDE_CODE_ARTIFACT_ASSETS === void 0 && aR() && eu() === null && !i.CLAUDE_CODE_REMOTE;
}
function he() {
  let e = OV();
  return e === void 0 || e === "prosumer_oauth" || e === "no_auth";
}
function M() {
  return Ne(i.CLAUDE_CODE_ARTIFACT) && false || k("tengu_cobalt_plinth", he());
}
function Y() {
  return M() && v6e();
}
function Ae() {
  return G() === null;
}
function G() {
  if (!M()) return "growthbook_off";
  if (j2t() || v6e()) return j(), null;
  if (UQn() !== null) return null;
  return "admin_policy";
}
function UQn() {
  if (j2t()) return null;
  if (!P(or())) return null;
  let e = Jc("allow_cobalt_plinth");
  if (e !== "cache_miss" && e !== "route_missing") return j(), null;
  if (H6e("allow_cobalt_plinth")) return null;
  let n = e === "route_missing" ? "policy_route_missing" : "policy_fetch_failed", r = Vce();
  if (r !== null && !r.success && be(r)) return Z().artifactPolicyFetchAnswer = r, { cause: n, outcome: r };
  let o = oGr();
  return o === null ? null : { cause: n, outcome: o };
}
function oGr() {
  return mj() ? Z().artifactPolicyFetchAnswer : null;
}
function CGo() {
  if (H6e("allow_cobalt_plinth")) return "org_denied";
  let e = Jc("allow_cobalt_plinth");
  return e === "org_denied" || e === "latched" ? e : null;
}
function be(e) {
  if (!e.retrying) return true;
  if (e.errorCode === "auth_failed" && e.httpStatus === 401 || e.errorCode === "spurious_304") return false;
  return !ezr(e);
}
function j() {
  if (mj()) Z().artifactPolicyFetchAnswer = null;
}
function aR() {
  if (eu() !== null) return iH();
  return LDe() && iH() && v6e();
}
function iH() {
  return O2t() === null;
}
function O2t() {
  if (y()) return "switched_off";
  if (eu() !== null) return null;
  return B() ?? G();
}
function Zgn() {
  if (y()) return false;
  if (!pe()) return false;
  return Y();
}
function O() {
  let e = /* @__PURE__ */ new Set(), n = false, r = false;
  for (let s of w6e().offSources) switch (s.layer) {
    case "env":
      e.add("env");
      break;
    case "userSettings":
      e.add(s.via === "legacyDisableKey" ? "setting" : "config_pref");
      break;
    case "policySettings":
    case "flagSettings":
      n = true;
      break;
    case "localSettings":
    case "projectSettings":
      r = true;
      break;
  }
  if (n) e.delete("setting"), e.delete("config_pref");
  if (e.size > 1) return "multiple";
  let [o] = e;
  if (o !== void 0) return o;
  return n || r ? "admin_managed" : null;
}
function _e() {
  return O() !== null && K() && Y();
}
function TGo() {
  let e = Z();
  if (e.artifactDisabledSessionEvaluated) return;
  if (VF() === null) return;
  if (e.artifactDisabledSessionEvaluated = true, !_e()) return;
  let n = O();
  if (n === null) return;
  R("tengu_artifact_disabled_session", { mechanism: c(n), session_interactivity: !ye() || Uu() === "claude-vscode" || Nc() ? S("interactive") : S("noninteractive") });
}
function AGo(e) {
  if (!Pes() || ay() !== "local-agent" || FM()) return;
  let n = Z(), r = e === null && !j2t() && !v6e() && UQn() !== null, o = r ? "admin_policy" : e;
  if (o === null) {
    n.artifactRegisteredSeen = true;
    let l = n.artifactWithheldReasonsLogged.at(-1);
    if (l === void 0 || n.artifactWithheldRecoveryLogged) return;
    n.artifactWithheldRecoveryLogged = true, R("tengu_artifact_tool_recovered", { withheld_reason: c(l), ...H(l) });
    return;
  }
  if (VF() === null) return;
  let s = me(o), f = n.artifactWithheldReasonsLogged.includes(s);
  if (f && (!r || n.artifactWithheldListedLogged)) return;
  if (!f) n.artifactWithheldReasonsLogged.push(s);
  if (r) n.artifactWithheldListedLogged = true;
  R("tengu_artifact_tool_withheld", { reason: c(s), off_mechanism: ce(s === "switched_off" ? O() : null), after_registered: n.artifactRegisteredSeen, tool_listed: r, ...H(s) });
}
function H(e) {
  if (e !== "org_policy_denied" && e !== "compliance_taint" && e !== "policy_cache_miss" && e !== "policy_route_missing") return {};
  let n = Vce(), r = m(), o = r === "nothing" ? "none" : r === "unrestricted" ? "fail_open" : n?.success ? "network" : "disk", s = !Mh() ? "ineligible" : n === null || !n.success && n.retrying ? "pending" : n.success ? "ok" : "failed";
  return { policy_source: c(o), policy_fetch: c(s) };
}
function pxi() {
  return Z().heldStartupTelemetry ??= [], { flush: I, [Symbol.dispose]: I };
}
function I() {
  let e = Z(), n = e.heldStartupTelemetry;
  e.heldStartupTelemetry = null;
  for (let r of n ?? []) r();
}
function ehn(e) {
  let n = Z().heldStartupTelemetry;
  if (n === null) {
    e();
    return;
  }
  n.push(e);
}
function R(...e) {
  ehn(() => a(...e));
}
function me(e) {
  switch (e) {
    case "surface_excluded":
      return fp() ? "surface_excluded" : "nested_child_session";
    case "admin_policy": {
      if (!P(or())) return "subscription_ineligible";
      let n = Iw();
      if (n === null) return w_e() ? "policy_route_missing" : "policy_cache_miss";
      return n.restrictions.allow_cobalt_plinth === void 0 ? "compliance_taint" : "org_policy_denied";
    }
    default:
      return e;
  }
}
function sGr() {
  return U.defaultOn;
}
function Se() {
  return w() && Ae();
}
function thn() {
  return Se() && w6e().userControllable;
}
function v6e() {
  return iGr();
}
function iGr() {
  if (j2t()) return V() === null;
  if (!P(or())) return false;
  return on("allow_cobalt_plinth");
}
function P(e) {
  return e === "team" || e === "enterprise" || e === "pro" || e === "max" || e == null;
}
function RGo() {
  return V();
}
function V() {
  if (!j2t()) return null;
  let e = LLe();
  if (e === null) return "plan_unreadable";
  if (e !== "pro" && e !== "max") return "org_policy_unverifiable";
  if (!Mh()) return "policy_unavailable";
  if (on("allow_cobalt_plinth")) return null;
  let n = Jc("allow_cobalt_plinth") ?? "org_denied";
  switch (n) {
    case "org_denied":
    case "latched":
    case "cache_miss":
      return n;
    case "route_missing":
      return "policy_route_missing";
  }
}
function Fce() {
  return aR() && k("tengu_gable_onyx_sluice", false);
}
IJs(Fce);
function xGo() {
  return iH() && k("tengu_gable_onyx_sluice", false);
}
function aGr() {
  return false;
}
function PGo() {
  return Fce() && !Roe(f_e) && !k("tengu_cedar_transom", false);
}
function IGo() {
  return aGr() && !Roe(BQn) && !(mj() && Z().builtInArtifactHiddenForMcp);
}
function OGo() {
  return false;
}
function nhn() {
  return k("tengu_cobalt_plinth_thrift", false) === true;
}
var Ee = "tengu_russet_pergola";
function MGo() {
  return false;
}
function fAe() {
  return aR();
}
function k6e() {
  return !y() && w();
}
export {
  $Qn,
  AGo,
  AJs,
  CGo,
  CJs,
  E6e,
  EGo,
  FQn,
  Fce,
  I2t,
  IDe,
  IGo,
  LQn,
  MGo,
  MQ,
  NQn,
  O2t,
  OGo,
  P2t,
  PGo,
  PJs,
  Qgn,
  RF,
  RGo,
  RJs,
  Rx,
  TGo,
  TJs,
  UQn,
  Zgn,
  _wt,
  aGr,
  aR,
  att,
  d4,
  dtt,
  ehn,
  ev,
  fAe,
  iGr,
  iH,
  iR,
  iY,
  k6e,
  kGo,
  kJs,
  ltt,
  nGr,
  nhn,
  oGr,
  pAe,
  p_e,
  pxi,
  rGr,
  sGr,
  tGr,
  thn,
  tv,
  uAe,
  uxi,
  v6e,
  vGo,
  w6e,
  wGo,
  xGo,
  xJs,
  ywt
};
