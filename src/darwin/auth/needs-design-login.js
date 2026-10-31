// darwin/auth/needs-design-login.js — Claude Code 2.1.310（darwin）模块 chunk-4cp5d7md.js
import { J, Pn } from "../context/not-admin-owned.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t$e, rn } from "./oauth-2025-04-20.js";
import { m, p } from "../telemetry/chunk-9d6962d2.js";
import { Ioe, hS, iA, zQ } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Vn } from "./permission-error.js";
import { v2t, AQn } from "./oauth-slot-refresh-diskless.js";
import { AF } from "./oauth-automatic-redirect.js";
async function zIe(r) {
  try {
    return (await Vn().readAsync(r))?.designOauth ?? null;
  } catch (n) {
    return t(`Failed to read design OAuth tokens: ${d(n)}`, { level: "error" }), null;
  }
}
async function $Nn(r, n) {
  try {
    let o = false, s = await Vn().mutate((e) => {
      if (n?.onlyIf && !n.onlyIf(e.designOauth)) return o = true, e;
      return { ...e, designOauth: r };
    });
    return o ? { ...s, raced: true } : s;
  } catch (o) {
    return t(`Failed to save design OAuth tokens: ${d(o)}`, { level: "error" }), { success: false, warning: "Failed to save design OAuth tokens" };
  }
}
async function T(r) {
  try {
    await Vn().mutate((n) => {
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
async function _() {
  let r = Vn();
  return r.invalidateCache?.(), (await r.readAsync())?.designOauth ?? null;
}
async function dgo(r) {
  let n = await zIe(r);
  if (!n?.accessToken) return { ok: false, reason: "needs_design_login" };
  if (!iA(n.expiresAt)) return { ok: true, accessToken: n.accessToken };
  if (J()) return m("oauth_token_refresh", "design_oauth_refresh_diskless"), { ok: false, reason: "needs_design_login" };
  try {
    return await AQn(w, async (o) => {
      let s = await _();
      if (!s?.accessToken) return { ok: false, reason: "needs_design_login" };
      if (!iA(s.expiresAt)) return { ok: true, accessToken: s.accessToken };
      if (!s.refreshToken) {
        let e = s.refreshToken;
        return await T((c) => c.refreshToken === e), { ok: false, reason: "needs_design_login" };
      }
      if (!Array.isArray(s.scopes) || s.scopes.length === 0) {
        let e = s.refreshToken;
        return await T((c) => c.refreshToken === e), { ok: false, reason: "needs_design_login" };
      }
      if (o.isCompromised()) return p("oauth_token_refresh", "design_oauth_refresh_lock_compromised"), { ok: false, reason: "design_refresh_failed", detail: "another process is refreshing the design token" };
      try {
        let e = await Ioe(s.refreshToken, { clientId: s.clientId, scopes: s.scopes, skipProfileFetch: true });
        if (!e.refreshToken || !e.expiresAt) {
          if (e.refreshToken && e.refreshToken !== s.refreshToken) await hS(e.refreshToken, s.clientId);
          return { ok: false, reason: "design_refresh_failed", detail: "refresh response missing refresh_token or expiry" };
        }
        if (!t$e.every((a) => e.scopes.includes(a))) {
          if (e.refreshToken) await hS(e.refreshToken, s.clientId);
          let a = s.refreshToken;
          return await T((g) => g.refreshToken === a), { ok: false, reason: "needs_design_login", detail: "refresh response missing design scopes" };
        }
        let c = s.refreshToken, u = await $Nn({ accessToken: e.accessToken, refreshToken: e.refreshToken, expiresAt: e.expiresAt, scopes: e.scopes.filter((a) => t$e.some((g) => g === a)), clientId: s.clientId }, { onlyIf: (a) => a?.refreshToken === c });
        if (u.raced) {
          await hS(e.refreshToken, s.clientId);
          let a = await _();
          return a?.accessToken && !iA(a.expiresAt) ? { ok: true, accessToken: a.accessToken } : { ok: false, reason: "needs_design_login" };
        }
        if (!u.success) t("Design OAuth refresh succeeded but persist failed; continuing with in-memory token.", { level: "error" });
        return { ok: true, accessToken: e.accessToken };
      } catch (e) {
        if (o.isCompromised()) {
          let c = await _();
          if (c?.accessToken && !iA(c.expiresAt)) return { ok: true, accessToken: c.accessToken };
          if (!zQ(e)) p("oauth_token_refresh", "design_oauth_refresh_lock_compromised");
          return { ok: false, reason: "design_refresh_failed", detail: "another process is refreshing the design token" };
        }
        if (zQ(e)) {
          let c = s.refreshToken;
          return await T((u) => u.refreshToken === c), { ok: false, reason: "needs_design_login", detail: "design authorization expired" };
        }
        return { ok: false, reason: "design_refresh_failed", detail: d(e) };
      }
    });
  } catch (o) {
    if (o instanceof v2t) p("oauth_token_refresh", "design_oauth_refresh_lock_contention");
    else l(o), m("oauth_token_refresh", "design_oauth_refresh_lock_error");
    return { ok: false, reason: "design_refresh_failed", detail: d(o) };
  }
}
function UNn() {
  return i.CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID ?? rn().DESIGN_CLIENT_ID;
}
function H1e() {
  return !UNn().startsWith("00000000-");
}
async function fvr(r, n) {
  let o = t$e.filter((s) => !r.scopes.includes(s));
  if (o.length > 0) {
    if (r.refreshToken) await hS(r.refreshToken, n);
    return { ok: false, message: `The authorization server did not grant the design scopes (missing: ${o.join(", ")}) — the Claude Design app registration may be incomplete or out of date.` };
  }
  if (!r.refreshToken || !r.expiresAt) {
    if (r.refreshToken) await hS(r.refreshToken, n);
    return { ok: false, message: "The token response was missing a refresh token or expiry — cannot store a usable design credential." };
  }
  return { ok: true, slot: { accessToken: r.accessToken, refreshToken: r.refreshToken, expiresAt: r.expiresAt, scopes: r.scopes.filter((s) => t$e.some((e) => e === s)), clientId: n } };
}
function MQt() {
  return i.isSSH() || i.CLAUDE_CODE_REMOTE === true || Pn();
}
var D = 3e5;
async function BNn(r, n) {
  if (r?.aborted) return { ok: false, reason: "interrupted", message: "Design login was interrupted." };
  if (!H1e()) return { ok: false, reason: "unconfigured", message: "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client." };
  if (MQt() && !n?.onManualCode) return { ok: false, reason: "remote", message: "This session is remote, so the browser can't reach the local sign-in listener. Run /design-login instead — it supports pasting the authorization code manually." };
  let o = UNn(), s = new AF(), e = false, c = false, u;
  try {
    let a = n?.onAuthUrl;
    n?.onManualCode?.((h, k) => s.handleManualAuthCodeInput({ authorizationCode: h, state: k }));
    let g = s.startOAuthFlow(a ? async (h, k) => {
      a(k ?? h, h);
    } : async () => {
    }, { loginWithClaudeAi: true, oauthClient: { clientId: o, scopes: t$e }, skipProfileFetch: true, successRedirectUrl: rn().CLAUDEAI_SUCCESS_URL, ...a && { skipBrowserOpen: true } });
    g.then((h) => {
      if (c && h.refreshToken) hS(h.refreshToken, o);
    }).catch(() => {
    });
    let O = await Promise.race([g, new Promise((h, k) => {
      u = setTimeout(() => {
        e = true, c = true, k(Error("design login timed out"));
      }, D), r?.addEventListener("abort", () => {
        c = true, k(Error("design login interrupted"));
      }, { once: true });
    })]), f = await fvr(O, o);
    if (!f.ok) return { ok: false, reason: "invalid", message: f.message };
    if (r?.aborted) return await hS(f.slot.refreshToken, f.slot.clientId), { ok: false, reason: "interrupted", message: "Design login was interrupted." };
    if (!(await $Nn(f.slot)).success) return await hS(f.slot.refreshToken, f.slot.clientId), { ok: false, reason: "save_failed", message: "Could not save the design credential to secure storage. Retry, or run /design-login." };
    return { ok: true, accessToken: f.slot.accessToken };
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
  $Nn,
  BNn,
  H1e,
  MQt,
  UNn,
  dgo,
  fvr,
  zIe
};
