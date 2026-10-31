// linux/permissions/denied-by-server.js — Claude Code 2.1.310（linux）模块 chunk-cefq50ab.js
import { Dt, Au, UYe, BYe, d, E } from "../telemetry/anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { i } from "../shared/environment.js";
import { iYe } from "../auth/oauth-2025-04-20.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { sqt, Sr, Ae, Fn, Ci } from "../models/total-tokens-reminder.js";
import { nbe } from "../mcp/allowed-warning.js";
import { MZ } from "../fs/ca-certs-load.js";
import { _5, hb, w0e, c_n, Xr, g_n, KCe, $t, U_, V7, QCe, Re } from "../settings/global-config-and-gates.js";
import { Y5, Brt, xNe, zVt, Sbe } from "../auth/permission-error.js";
import { n9n, e2e, zUo } from "../api/anthropic-client.js";
import { yGn, IL } from "../core/conversation-engine.js";
import { qme } from "../auth/client-data-cache-key.js";
import { Z5, Pbe } from "../models/claude-mythos-preview.js";
var _ = /* @__PURE__ */ new Set(["fetch_error", "unknown", "org_level_disabled_until"]);
function b() {
  return Sr().providerCache.validatedModels;
}
async function WEr(e, o) {
  let r = e.trim();
  if (!r) return { valid: false, error: "Model name cannot be empty" };
  if (!Xr(r, o.skipEntitlementDenyOverlay ? { skipEntitlementDenyOverlay: true } : void 0)) return { valid: false, error: `Model '${r}' is not in the list of available models`, notAllowed: true };
  if (!o.forceServerProbe) {
    let u = r.toLowerCase();
    if (Z5.includes(u)) return { valid: true };
    if (r === i.ANTHROPIC_CUSTOM_MODEL_OPTION) return { valid: true };
    if (zUo(r) && KCe()?.picker.options.some((c) => c.model.trim() === r)) return { valid: true };
    if (b().has(r)) return { valid: true };
  }
  let n = Ae(), s = i.ANTHROPIC_BASE_URL, a = s && URL.canParse(s) ? new URL(s).hostname : void 0, f = Ci() || a !== void 0 && (a === "anthropic.com" || a.endsWith(".anthropic.com") || iYe.some((u) => new URL(u).hostname === a));
  if (!(n === "gateway" || n === "firstParty" && !f) && /[\s\p{Cc}\p{Cf}]/u.test(r)) return { valid: false, error: `Model '${r}' not found`, notFound: true };
  if (o.serverProbe === false) return { valid: true };
  try {
    return await IL({ model: r, max_tokens: 1, maxRetries: 0, querySource: "model_validation", resendWithoutRefusedContext1m: true, credentials: o.credentials, timeout: o.timeout, signal: o.signal, messages: [{ role: "user", content: [{ type: "text", text: "Hi", cache_control: { type: "ephemeral" } }] }] }), b().add(r), { valid: true };
  } catch (u) {
    return A(u, r);
  }
}
var S = 15e3;
async function g(e, o) {
  let r = Sr(), n = r.sessionModelDenyReprobe.generation, s = new AbortController(), a = await Pe(WEr(e, { forceServerProbe: o.forceServerProbe, skipEntitlementDenyOverlay: o.skipEntitlementDenyOverlay, credentials: o.credentials, timeout: o.deadlineMs, signal: s.signal }), o.deadlineMs);
  if (a === void 0) return s.abort(), { probe: void 0, accountChanged: false };
  let f = r.sessionModelDenyReprobe.generation !== n;
  if (f) r.providerCache.validatedModels.delete(e.trim());
  return { probe: a, accountChanged: f };
}
async function vgo(e, o, r) {
  if (r === void 0 || o.serverProbe === false) return WEr(e, o);
  let { probe: n, accountChanged: s } = await g(e, { ...o, deadlineMs: r });
  if (n === void 0 || s) {
    let a = _5("model");
    return { valid: false, error: `Couldn't confirm model "${hb(e)}" with the API. ${a ? `Try again, or run ${a} to see available models.` : "Try again."}`, retryable: true };
  }
  return n;
}
function X7t(e) {
  let o = e.toLowerCase().trim();
  return Pbe(o);
}
function Ego(e) {
  return X7t(e) || g_n(e) ? $t(e) : e;
}
async function Uve(e, o, r) {
  try {
    if (!Xr(e, { skipEntitlementDenyOverlay: true })) return "denied_by_policy";
    let n = Ego(e);
    if (X7t(n)) return "denied_by_policy";
    let s = Sr(), { confirmedEntitlementDenies: a, overturnedEntitlementDenies: f } = s.providerCache, p = w0e(n), u = a.get(p);
    if (u !== void 0 && Date.now() - u < sqt) return "denied_by_server";
    let { probe: c, accountChanged: y } = await g(n, { credentials: r, deadlineMs: S, forceServerProbe: true, skipEntitlementDenyOverlay: true });
    if (c === void 0) return t("[model-access] stale-deny re-probe timed out", { level: "warn" }), "probe_failed";
    if (!c.valid && !c.notFound && !c.permissionDenied) return "probe_failed";
    if (y) return t("[model-access] stale-deny re-probe answered after the account changed; recording nothing"), c.valid ? "overturned" : "denied_by_server";
    if (!c.valid) {
      let m = Date.now();
      a.set(p, m);
      for (let v of QCe()) if (c_n(v, e)) a.set(w0e(v.apiName), m);
      return "denied_by_server";
    }
    a.delete(p);
    let h = Date.now();
    for (let m of QCe()) if (c_n(m, e)) f.set(w0e(m.apiName), h);
    try {
      await M(e, o);
    } catch (m) {
      if (E(m) !== void 0) t(`[model-access] stale-deny eviction failed: ${d(m)}`, { level: "warn" });
      else l(m);
    }
    return qme(o, r), "overturned";
  } catch (n) {
    return l(n), "probe_failed";
  }
}
async function M(e, o) {
  await Re((r) => {
    let n = r.modelAccessCache;
    if (!n?.length) return r;
    let s = n.filter((a) => {
      if (a == null || typeof a !== "object" || typeof a.apiName !== "string" || typeof a.entitled !== "boolean") return true;
      return !c_n(a, e);
    });
    return s.length === n.length ? r : { ...r, modelAccessCache: s };
  }, o);
}
function A(e, o) {
  if (e instanceof BYe) {
    let n = yGn(o), s = n ? `. Try '${n}' instead` : "";
    return { valid: false, error: `Model '${o}' not found${s}`, notFound: true, ...xNe(e) && { serverRefusedModel: true } };
  }
  if (e instanceof Dt) {
    if (e instanceof UYe) return { valid: false, error: "Authentication failed. Please check your API credentials.", authFailed: true };
    if (e instanceof Au) return { valid: false, error: "Network error. Please check your internet connection.", retryable: true };
    let n = e.error;
    if (n && typeof n === "object" && "type" in n && n.type === "not_found_error" && "message" in n && typeof n.message === "string" && n.message.includes("model:")) return { valid: false, error: `Model '${o}' not found`, notFound: true, serverRefusedModel: true };
    if (Brt(e)) return { valid: false, error: `Model '${o}' isn't available for your account`, permissionDenied: true, serverRefusedModel: true };
    let s = n?.error?.details, a = e.status === 429 && s?.error_code === "credits_required", f = e.headers?.get?.(n9n), p = a && !f && !_.has(e.headers?.get?.(e2e) ?? s?.disabled_reason ?? ""), u = Sbe(e).replace(/[.!?\u2026]+$/, "");
    if (Y5(e) || e.status === 403 && nbe(e.headers?.get?.("x-amzn-errortype") ?? void 0, e.message)) return { valid: false, error: `API error: ${u} · model not changed`, authFailed: true };
    let c = R(e.status) || e.status === 407 && Boolean(MZ()) || e.status === 403 && (i.CLAUDE_CODE_REMOTE || Fn() && !U_() && V7());
    return { valid: false, error: `API error: ${u} · model not changed`, ...c ? { retryable: true } : { rejected: true }, ...e.status === 429 && { rateLimited: true }, ...a && { creditsRequired: true }, ...e.status === 400 && zVt(e) && { sessionModeRefused: true }, ...e.status === 429 && !a && (f === "five_hour" || f === "seven_day") && { sharedLimitReached: true }, ...p && { serverRefusedModel: true } };
  }
  return { valid: false, error: `Unable to validate model: ${e instanceof Error ? e.message : String(e)}`, retryable: true };
}
function R(e) {
  return e === void 0 || e === 408 || e === 409 || e === 429 || e >= 500;
}
export {
  Ego,
  Uve,
  WEr,
  X7t,
  vgo
};
