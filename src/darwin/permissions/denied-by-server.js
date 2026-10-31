// darwin/permissions/denied-by-server.js — Claude Code 2.1.310（darwin）模块 chunk-6c7gs074.js
import { Ht, Ru, q3e, Y3e, d, v } from "../telemetry/anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { i } from "../shared/environment.js";
import { m3e } from "../auth/oauth-2025-04-20.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { _Kt, wr, Te, $n, Ai } from "../models/total-tokens-reminder.js";
import { dSe } from "../mcp/allowed-warning.js";
import { zZ } from "../fs/ca-certs-load.js";
import { x4, yS, ALe, A_n, Xr, O_n, QAe, Ft, B_, tZ, oRe, Re } from "../settings/global-config-and-gates.js";
import { i5, qrt, DNe, rKt, ASe } from "../auth/permission-error.js";
import { TYn, gze, P1o } from "../api/anthropic-client.js";
import { F2n, HD } from "../core/conversation-engine.js";
import { Zme } from "../auth/client-data-cache-key.js";
import { d5, LSe } from "../models/claude-mythos-preview.js";
var _ = /* @__PURE__ */ new Set(["fetch_error", "unknown", "org_level_disabled_until"]);
function g() {
  return wr().providerCache.validatedModels;
}
async function okr(e, o) {
  let r = e.trim();
  if (!r) return { valid: false, error: "Model name cannot be empty" };
  if (!Xr(r, o.skipEntitlementDenyOverlay ? { skipEntitlementDenyOverlay: true } : void 0)) return { valid: false, error: `Model '${r}' is not in the list of available models`, notAllowed: true };
  if (!o.forceServerProbe) {
    let u = r.toLowerCase();
    if (d5.includes(u)) return { valid: true };
    if (r === i.ANTHROPIC_CUSTOM_MODEL_OPTION) return { valid: true };
    if (P1o(r) && QAe()?.picker.options.some((c) => c.model.trim() === r)) return { valid: true };
    if (g().has(r)) return { valid: true };
  }
  let n = Te(), s = i.ANTHROPIC_BASE_URL, a = s && URL.canParse(s) ? new URL(s).hostname : void 0, f = Ai() || a !== void 0 && (a === "anthropic.com" || a.endsWith(".anthropic.com") || m3e.some((u) => new URL(u).hostname === a));
  if (!(n === "gateway" || n === "firstParty" && !f) && /[\s\p{Cc}\p{Cf}]/u.test(r)) return { valid: false, error: `Model '${r}' not found`, notFound: true };
  if (o.serverProbe === false) return { valid: true };
  try {
    return await HD({ model: r, max_tokens: 1, maxRetries: 0, querySource: "model_validation", resendWithoutRefusedContext1m: true, credentials: o.credentials, timeout: o.timeout, signal: o.signal, messages: [{ role: "user", content: [{ type: "text", text: "Hi", cache_control: { type: "ephemeral" } }] }] }), g().add(r), { valid: true };
  } catch (u) {
    return A(u, r);
  }
}
var S = 15e3;
async function y(e, o) {
  let r = wr(), n = r.sessionModelDenyReprobe.generation, s = new AbortController(), a = await Pe(okr(e, { forceServerProbe: o.forceServerProbe, skipEntitlementDenyOverlay: o.skipEntitlementDenyOverlay, credentials: o.credentials, timeout: o.deadlineMs, signal: s.signal }), o.deadlineMs);
  if (a === void 0) return s.abort(), { probe: void 0, accountChanged: false };
  let f = r.sessionModelDenyReprobe.generation !== n;
  if (f) r.providerCache.validatedModels.delete(e.trim());
  return { probe: a, accountChanged: f };
}
async function Vgo(e, o, r) {
  if (r === void 0 || o.serverProbe === false) return okr(e, o);
  let { probe: n, accountChanged: s } = await y(e, { ...o, deadlineMs: r });
  if (n === void 0 || s) {
    let a = x4("model");
    return { valid: false, error: `Couldn't confirm model "${yS(e)}" with the API. ${a ? `Try again, or run ${a} to see available models.` : "Try again."}`, retryable: true };
  }
  return n;
}
function iZt(e) {
  let o = e.toLowerCase().trim();
  return LSe(o);
}
function Kgo(e) {
  return iZt(e) || O_n(e) ? Ft(e) : e;
}
async function zEe(e, o, r) {
  try {
    if (!Xr(e, { skipEntitlementDenyOverlay: true })) return "denied_by_policy";
    let n = Kgo(e);
    if (iZt(n)) return "denied_by_policy";
    let s = wr(), { confirmedEntitlementDenies: a, overturnedEntitlementDenies: f } = s.providerCache, p = ALe(n), u = a.get(p);
    if (u !== void 0 && Date.now() - u < _Kt) return "denied_by_server";
    let { probe: c, accountChanged: E } = await y(n, { credentials: r, deadlineMs: S, forceServerProbe: true, skipEntitlementDenyOverlay: true });
    if (c === void 0) return t("[model-access] stale-deny re-probe timed out", { level: "warn" }), "probe_failed";
    if (!c.valid && !c.notFound && !c.permissionDenied) return "probe_failed";
    if (E) return t("[model-access] stale-deny re-probe answered after the account changed; recording nothing"), c.valid ? "overturned" : "denied_by_server";
    if (!c.valid) {
      let m = Date.now();
      a.set(p, m);
      for (let b of oRe()) if (A_n(b, e)) a.set(ALe(b.apiName), m);
      return "denied_by_server";
    }
    a.delete(p);
    let h = Date.now();
    for (let m of oRe()) if (A_n(m, e)) f.set(ALe(m.apiName), h);
    try {
      await M(e, o);
    } catch (m) {
      if (v(m) !== void 0) t(`[model-access] stale-deny eviction failed: ${d(m)}`, { level: "warn" });
      else l(m);
    }
    return Zme(o, r), "overturned";
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
      return !A_n(a, e);
    });
    return s.length === n.length ? r : { ...r, modelAccessCache: s };
  }, o);
}
function A(e, o) {
  if (e instanceof Y3e) {
    let n = F2n(o), s = n ? `. Try '${n}' instead` : "";
    return { valid: false, error: `Model '${o}' not found${s}`, notFound: true, ...DNe(e) && { serverRefusedModel: true } };
  }
  if (e instanceof Ht) {
    if (e instanceof q3e) return { valid: false, error: "Authentication failed. Please check your API credentials.", authFailed: true };
    if (e instanceof Ru) return { valid: false, error: "Network error. Please check your internet connection.", retryable: true };
    let n = e.error;
    if (n && typeof n === "object" && "type" in n && n.type === "not_found_error" && "message" in n && typeof n.message === "string" && n.message.includes("model:")) return { valid: false, error: `Model '${o}' not found`, notFound: true, serverRefusedModel: true };
    if (qrt(e)) return { valid: false, error: `Model '${o}' isn't available for your account`, permissionDenied: true, serverRefusedModel: true };
    let s = n?.error?.details, a = e.status === 429 && s?.error_code === "credits_required", f = e.headers?.get?.(TYn), p = a && !f && !_.has(e.headers?.get?.(gze) ?? s?.disabled_reason ?? ""), u = ASe(e).replace(/[.!?\u2026]+$/, "");
    if (i5(e) || e.status === 403 && dSe(e.headers?.get?.("x-amzn-errortype") ?? void 0, e.message)) return { valid: false, error: `API error: ${u} · model not changed`, authFailed: true };
    let c = R(e.status) || e.status === 407 && Boolean(zZ()) || e.status === 403 && (i.CLAUDE_CODE_REMOTE || $n() && !B_() && tZ());
    return { valid: false, error: `API error: ${u} · model not changed`, ...c ? { retryable: true } : { rejected: true }, ...e.status === 429 && { rateLimited: true }, ...a && { creditsRequired: true }, ...e.status === 400 && rKt(e) && { sessionModeRefused: true }, ...e.status === 429 && !a && (f === "five_hour" || f === "seven_day") && { sharedLimitReached: true }, ...p && { serverRefusedModel: true } };
  }
  return { valid: false, error: `Unable to validate model: ${e instanceof Error ? e.message : String(e)}`, retryable: true };
}
function R(e) {
  return e === void 0 || e === 408 || e === 409 || e === 429 || e >= 500;
}
export {
  Kgo,
  Vgo,
  iZt,
  okr,
  zEe
};
