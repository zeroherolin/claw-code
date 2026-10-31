// linux/auth/needs-design-login.js — Claude Code 2.1.310（linux）模块 chunk-tbyhf9za.js
import { J, Pn } from "../context/not-admin-owned.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { K$e, rn } from "./oauth-2025-04-20.js";
import { m, f } from "../telemetry/chunk-9d6962d2.js";
import { koe, gb, rC, N7 } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Kn } from "./permission-error.js";
import { uGt, d7n } from "./oauth-slot-refresh-diskless.js";
import { E$ } from "./oauth-automatic-redirect.js";
async function FIe(r) {
  try {
    return (await Kn().readAsync(r))?.designOauth ?? null;
  } catch (n) {
    return t(`Failed to read design OAuth tokens: ${d(n)}`, { level: "error" }), null;
  }
}
async function ANn(r, n) {
  try {
    let o = false, s = await Kn().mutate((e) => {
      if (n?.onlyIf && !n.onlyIf(e.designOauth)) return o = true, e;
      return { ...e, designOauth: r };
    });
    return o ? { ...s, raced: true } : s;
  } catch (o) {
    return t(`Failed to save design OAuth tokens: ${d(o)}`, { level: "error" }), { success: false, warning: "Failed to save design OAuth tokens" };
  }
}
async function _(r) {
  try {
    await Kn().mutate((n) => {
      if (!n.designOauth) return n;
      if (!r(n.designOauth)) return n;
      let o = { ...n };
      return delete o.designOauth, o;
    });
  } catch (n) {
    t(`Failed to clear design OAuth tokens: ${d(n)}`, { level: "error" });
  }
}
var w = ".design_oauth_refresh.lock";
async function p() {
  let r = Kn();
  return r.invalidateCache?.(), (await r.readAsync())?.designOauth ?? null;
}
async function Fmo(r) {
  let n = await FIe(r);
  if (!n?.accessToken) return { ok: false, reason: "needs_design_login" };
  if (!rC(n.expiresAt)) return { ok: true, accessToken: n.accessToken };
  if (J()) return m("oauth_token_refresh", "design_oauth_refresh_diskless"), { ok: false, reason: "needs_design_login" };
  try {
    return await d7n(w, async (o) => {
      let s = await p();
      if (!s?.accessToken) return { ok: false, reason: "needs_design_login" };
      if (!rC(s.expiresAt)) return { ok: true, accessToken: s.accessToken };
      if (!s.refreshToken) {
        let e = s.refreshToken;
        return await _((c) => c.refreshToken === e), { ok: false, reason: "needs_design_login" };
      }
      if (!Array.isArray(s.scopes) || s.scopes.length === 0) {
        let e = s.refreshToken;
        return await _((c) => c.refreshToken === e), { ok: false, reason: "needs_design_login" };
      }
      if (o.isCompromised()) return f("oauth_token_refresh", "design_oauth_refresh_lock_compromised"), { ok: false, reason: "design_refresh_failed", detail: "another process is refreshing the design token" };
      try {
        let e = await koe(s.refreshToken, { clientId: s.clientId, scopes: s.scopes, skipProfileFetch: true });
        if (!e.refreshToken || !e.expiresAt) {
          if (e.refreshToken && e.refreshToken !== s.refreshToken) await gb(e.refreshToken, s.clientId);
          return { ok: false, reason: "design_refresh_failed", detail: "refresh response missing refresh_token or expiry" };
        }
        if (!K$e.every((a) => e.scopes.includes(a))) {
          if (e.refreshToken) await gb(e.refreshToken, s.clientId);
          let a = s.refreshToken;
          return await _((k) => k.refreshToken === a), { ok: false, reason: "needs_design_login", detail: "refresh response missing design scopes" };
        }
        let c = s.refreshToken, u = await ANn({ accessToken: e.accessToken, refreshToken: e.refreshToken, expiresAt: e.expiresAt, scopes: e.scopes.filter((a) => K$e.some((k) => k === a)), clientId: s.clientId }, { onlyIf: (a) => a?.refreshToken === c });
        if (u.raced) {
          await gb(e.refreshToken, s.clientId);
          let a = await p();
          return a?.accessToken && !rC(a.expiresAt) ? { ok: true, accessToken: a.accessToken } : { ok: false, reason: "needs_design_login" };
        }
        if (!u.success) t("Design OAuth refresh succeeded but persist failed; continuing with in-memory token.", { level: "error" });
        return { ok: true, accessToken: e.accessToken };
      } catch (e) {
        if (o.isCompromised()) {
          let c = await p();
          if (c?.accessToken && !rC(c.expiresAt)) return { ok: true, accessToken: c.accessToken };
          if (!N7(e)) f("oauth_token_refresh", "design_oauth_refresh_lock_compromised");
          return { ok: false, reason: "design_refresh_failed", detail: "another process is refreshing the design token" };
        }
        if (N7(e)) {
          let c = s.refreshToken;
          return await _((u) => u.refreshToken === c), { ok: false, reason: "needs_design_login", detail: "design authorization expired" };
        }
        return { ok: false, reason: "design_refresh_failed", detail: d(e) };
      }
    });
  } catch (o) {
    if (o instanceof uGt) f("oauth_token_refresh", "design_oauth_refresh_lock_contention");
    else l(o), m("oauth_token_refresh", "design_oauth_refresh_lock_error");
    return { ok: false, reason: "design_refresh_failed", detail: d(o) };
  }
}
function CNn() {
  return i.CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID ?? rn().DESIGN_CLIENT_ID;
}
function TBe() {
  return !CNn().startsWith("00000000-");
}
async function Qvr(r, n) {
  let o = K$e.filter((s) => !r.scopes.includes(s));
  if (o.length > 0) {
    if (r.refreshToken) await gb(r.refreshToken, n);
    return { ok: false, message: `The authorization server did not grant the design scopes (missing: ${o.join(", ")}) — the Claude Design app registration may be incomplete or out of date.` };
  }
  if (!r.refreshToken || !r.expiresAt) {
    if (r.refreshToken) await gb(r.refreshToken, n);
    return { ok: false, message: "The token response was missing a refresh token or expiry — cannot store a usable design credential." };
  }
  return { ok: true, slot: { accessToken: r.accessToken, refreshToken: r.refreshToken, expiresAt: r.expiresAt, scopes: r.scopes.filter((s) => K$e.some((e) => e === s)), clientId: n } };
}
function E7t() {
  return i.isSSH() || i.CLAUDE_CODE_REMOTE === true || Pn();
}
var D = 3e5;
async function RNn(r, n) {
  if (r?.aborted) return { ok: false, reason: "interrupted", message: "Design login was interrupted." };
  if (!TBe()) return { ok: false, reason: "unconfigured", message: "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client." };
  if (E7t() && !n?.onManualCode) return { ok: false, reason: "remote", message: "This session is remote, so the browser can't reach the local sign-in listener. Run /design-login instead — it supports pasting the authorization code manually." };
  let o = CNn(), s = new E$(), e = false, c = false, u;
  try {
    let a = n?.onAuthUrl;
    n?.onManualCode?.((g, T) => s.handleManualAuthCodeInput({ authorizationCode: g, state: T }));
    let k = s.startOAuthFlow(a ? async (g, T) => {
      a(T ?? g, g);
    } : async () => {
    }, { loginWithClaudeAi: true, oauthClient: { clientId: o, scopes: K$e }, skipProfileFetch: true, successRedirectUrl: rn().CLAUDEAI_SUCCESS_URL, ...a && { skipBrowserOpen: true } });
    k.then((g) => {
      if (c && g.refreshToken) gb(g.refreshToken, o);
    }).catch(() => {
    });
    let O = await Promise.race([k, new Promise((g, T) => {
      u = setTimeout(() => {
        e = true, c = true, T(Error("design login timed out"));
      }, D), r?.addEventListener("abort", () => {
        c = true, T(Error("design login interrupted"));
      }, { once: true });
    })]), h = await Qvr(O, o);
    if (!h.ok) return { ok: false, reason: "invalid", message: h.message };
    if (r?.aborted) return await gb(h.slot.refreshToken, h.slot.clientId), { ok: false, reason: "interrupted", message: "Design login was interrupted." };
    if (!(await ANn(h.slot)).success) return await gb(h.slot.refreshToken, h.slot.clientId), { ok: false, reason: "save_failed", message: "Could not save the design credential to secure storage. Retry, or run /design-login." };
    return { ok: true, accessToken: h.slot.accessToken };
  } catch (a) {
    if (c = true, r?.aborted) return { ok: false, reason: "interrupted", message: "Design login was interrupted." };
    if (e) return { ok: false, reason: "timed_out", message: "The browser authorization timed out after 5 minutes. Retry, or run /design-login for the manual flow." };
    return { ok: false, reason: "failed", cause: d(a), message: `The browser authorization failed (${d(a)}). Run /design-login to retry with the manual flow.` };
  } finally {
    if (u !== void 0) clearTimeout(u);
    s.cleanup();
  }
}
export {
  ANn,
  CNn,
  E7t,
  FIe,
  Fmo,
  Qvr,
  RNn,
  TBe
};
