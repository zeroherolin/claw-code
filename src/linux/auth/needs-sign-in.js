// linux/auth/needs-sign-in.js — Claude Code 2.1.310（linux）模块 chunk-3ykpnhq2.js
import { ye, J } from "../context/not-admin-owned.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { Ukn, Wlr, rn } from "./oauth-2025-04-20.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "../shared/environment.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { d0 } from "../cli/chunk-0b672c58.js";
import { Kn } from "./permission-error.js";
import { Ks } from "../shared/chunk-f98598c3.js";
import { koe, gb, rC, N7, noi } from "../settings/global-config-and-gates.js";
import { i6 } from "./profile-explicit.js";
import { d9, j2o } from "./env-quad.js";
import { uGt, d7n } from "./oauth-slot-refresh-diskless.js";
import { E$ } from "./oauth-automatic-redirect.js";
import { Js } from "../ide/opener-missing.js";
import { createInterface as L } from "readline";
var U = ".cloud_sessions_oauth_refresh.lock", z = 3e5;
async function F(e) {
  try {
    return (await Kn().readAsync(e))?.cloudSessionsOauth ?? null;
  } catch (s) {
    return t(`Failed to read the cloud-sessions OAuth tokens: ${d(s)}`, { level: "error" }), "unreadable";
  }
}
function N(e) {
  try {
    let s = Kn().read()?.cloudSessionsOauth;
    return s !== void 0 && s.organizationUuid === e && Boolean(s.accessToken);
  } catch (s) {
    return t(`Failed to read the cloud-sessions OAuth tokens: ${d(s)}`, { level: "error" }), false;
  }
}
async function x(e, s) {
  try {
    let k = false, u = await Kn().mutate((r) => {
      if (s?.onlyIf && !s.onlyIf(r.cloudSessionsOauth)) return k = true, r;
      return { ...r, cloudSessionsOauth: e };
    });
    return k ? { ...u, raced: true } : u;
  } catch (k) {
    return t(`Failed to save the cloud-sessions OAuth tokens: ${d(k)}`, { level: "error" }), { success: false, warning: "Failed to save the cloud-sessions OAuth tokens" };
  }
}
async function v(e) {
  try {
    await Kn().mutate((s) => {
      if (!s.cloudSessionsOauth || !e(s.cloudSessionsOauth)) return s;
      let k = { ...s };
      return delete k.cloudSessionsOauth, k;
    });
  } catch (s) {
    t(`Failed to clear the cloud-sessions OAuth tokens: ${d(s)}`, { level: "error" });
  }
}
async function O() {
  let e = Kn();
  return e.invalidateCache?.(), (await e.readAsync())?.cloudSessionsOauth ?? null;
}
async function R({ organizationUuid: e, refusedAccessToken: s, credentials: k }) {
  let u = await F(k);
  if (u === "unreadable") return { ok: false, reason: "refresh_failed", detail: "the credential store could not be read" };
  if (!u?.accessToken || u.organizationUuid !== e) return { ok: false, reason: "needs_sign_in" };
  if (!rC(u.expiresAt) && u.accessToken !== s) return { ok: true, accessToken: u.accessToken };
  if (J()) return m("oauth_token_refresh", "cloud_sessions_oauth_refresh_diskless"), { ok: false, reason: "needs_sign_in" };
  try {
    return await d7n(U, async (r) => {
      let o = await O();
      if (!o?.accessToken || o.organizationUuid !== e) return { ok: false, reason: "needs_sign_in" };
      if (!rC(o.expiresAt) && o.accessToken !== s) return { ok: true, accessToken: o.accessToken };
      if (!o.refreshToken || !Array.isArray(o.scopes) || o.scopes.length === 0) {
        let n = o.refreshToken;
        return await v((c) => c.refreshToken === n), { ok: false, reason: "needs_sign_in" };
      }
      if (r.isCompromised()) return f("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_compromised"), { ok: false, reason: "refresh_failed", detail: "another Claude Code process is renewing it right now" };
      let a = o.refreshToken;
      try {
        let n = await koe(a, { clientId: o.clientId, scopes: o.scopes, skipProfileFetch: true });
        if (!n.refreshToken || !n.expiresAt) {
          if (n.refreshToken && n.refreshToken !== a) await gb(n.refreshToken, o.clientId);
          return { ok: false, reason: "refresh_failed", detail: "the server's reply had no refresh token or expiry" };
        }
        if (!n.scopes.includes(Ukn)) return await gb(n.refreshToken, o.clientId), await v((h) => h.refreshToken === a), { ok: false, reason: "needs_sign_in", detail: "refresh response missing the sessions scope" };
        let c = await x({ accessToken: n.accessToken, refreshToken: n.refreshToken, expiresAt: n.expiresAt, scopes: n.scopes.filter((h) => Wlr.some((p) => p === h)), clientId: o.clientId, organizationUuid: o.organizationUuid }, { onlyIf: (h) => h?.refreshToken === a });
        if (c.raced) {
          await gb(n.refreshToken, o.clientId);
          let h = await O();
          return h?.accessToken && h.organizationUuid === e && !rC(h.expiresAt) ? { ok: true, accessToken: h.accessToken } : { ok: false, reason: "needs_sign_in" };
        }
        if (!c.success) t("Cloud-sessions OAuth refresh succeeded but the new token could not be saved; using it for this session only.", { level: "error" });
        return { ok: true, accessToken: n.accessToken };
      } catch (n) {
        if (r.isCompromised()) {
          let c = await O();
          if (c?.accessToken && c.organizationUuid === e && !rC(c.expiresAt)) return { ok: true, accessToken: c.accessToken };
          if (!N7(n)) f("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_compromised");
          return { ok: false, reason: "refresh_failed", detail: "another Claude Code process is renewing it right now" };
        }
        if (N7(n)) return await v((c) => c.refreshToken === a), { ok: false, reason: "needs_sign_in", detail: "cloud-sessions authorization expired" };
        return t(`Cloud-sessions OAuth refresh failed: ${d(n)}`, { level: "error" }), { ok: false, reason: "refresh_failed", detail: "the renewal request failed" };
      }
    });
  } catch (r) {
    if (r instanceof uGt) f("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_contention");
    else l(r), m("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_error");
    return { ok: false, reason: "refresh_failed", detail: "the renewal could not run; wait a moment" };
  }
}
function D() {
  return !ye() && i.CLAUDE_CODE_REMOTE !== true;
}
var M = "Paste code here if prompted > ";
function H(e, { expectedState: s, onCode: k, onCancel: u }) {
  if (!e.input.isTTY || !e.output.isTTY) return;
  d0();
  let r = false, o = false, a = L({ input: e.input, output: e.output, prompt: M });
  return a.on("SIGINT", () => u()), a.on("close", () => {
    if (!r) u();
  }), a.on("line", (n) => {
    let c = n.trim();
    if (!c) {
      a.prompt();
      return;
    }
    let [h, p] = c.split("#");
    if (!h || !p) {
      e.output.write(`Invalid code. Please make sure the full code was copied.
`), a.prompt();
      return;
    }
    if (s !== void 0 && p !== s) {
      e.output.write(`That code is not from this sign-in. Paste the code shown after opening the address above.
`), a.prompt();
      return;
    }
    o = true, k({ authorizationCode: h, state: p });
  }), a.prompt(), { close: () => {
    if (r) return;
    if (r = true, !o) e.output.write(`
`);
    a.close();
  } };
}
async function B({ organizationUuid: e, onBrowserOpening: s, terminal: k = { input: process.stdin, output: process.stdout } }) {
  let u = rn().CLIENT_ID, r = i6()?.accountEmail, o = new E$(), a = false, n = false, c = false, h, p, S, y = false, I = () => {
  }, b = new Promise((C, A) => {
    I = A;
  });
  b.catch(() => {
  });
  try {
    let C = o.startOAuthFlow(async (T, E) => {
      s?.(T), p = H(k, { expectedState: Y(T), onCode: (P) => o.handleManualAuthCodeInput(P), onCancel: () => {
        if (y) return;
        n = true, c = true, I(Error("cloud-sessions sign-in cancelled"));
      } }), await Js(E ?? T);
    }, { loginWithClaudeAi: false, oauthClient: { clientId: u, scopes: Wlr }, orgUUID: e, loginHint: r, skipBrowserOpen: true, successRedirectUrl: rn().CLAUDEAI_SUCCESS_URL });
    C.then((T) => {
      if (c && T.refreshToken) gb(T.refreshToken, u);
    }).catch(() => {
    }), h = setTimeout(() => {
      a = true, c = true, I(Error("cloud-sessions sign-in timed out"));
    }, z);
    let A = await Promise.race([C, b]);
    y = true, p?.close();
    let _ = await G(A, u, e, r);
    if (!_.ok) return m("cloud_sessions_console_sign_in", _.reason), _;
    S = _.slot;
    let w = await O();
    if (w?.refreshToken && w.refreshToken !== _.slot.refreshToken) await gb(w.refreshToken, w.clientId);
    if (!(await x(_.slot)).success) return await gb(_.slot.refreshToken, u), m("cloud_sessions_console_sign_in", "save_failed"), { ok: false, reason: "save_failed", message: "Could not save the cloud-sessions credential to secure storage. Try again." };
    return S = void 0, g("cloud_sessions_console_sign_in"), { ok: true, accessToken: _.slot.accessToken };
  } catch (C) {
    if (y = true, c = true, S !== void 0) await gb(S.refreshToken, S.clientId);
    if (a) return m("cloud_sessions_console_sign_in", "timed_out"), { ok: false, reason: "timed_out", message: "The browser sign-in for cloud sessions timed out after 5 minutes. Try again." };
    if (n) return f("cloud_sessions_console_sign_in", "cancelled"), { ok: false, reason: "cancelled", message: "The sign-in for cloud sessions was cancelled." };
    return t(`Cloud-sessions sign-in failed: ${d(C)}`, { level: "error" }), m("cloud_sessions_console_sign_in", "failed"), { ok: false, reason: "failed", message: "The browser sign-in for cloud sessions failed. Try again." };
  } finally {
    if (h !== void 0) clearTimeout(h);
    p?.close(), o.cleanup();
  }
}
function Y(e) {
  try {
    return new URL(e).searchParams.get("state") ?? void 0;
  } catch {
    return;
  }
}
async function G(e, s, k, u) {
  let r = async () => {
    if (e.refreshToken) await gb(e.refreshToken, s);
  };
  if (!e.scopes.includes(Ukn)) return await r(), { ok: false, reason: "scope_not_granted", message: "Your Console organization doesn't allow cloud sessions from Claude Code, so the sign-in didn't grant that permission. Cloud sessions stay unavailable with this sign-in." };
  let o = e.tokenAccount?.organizationUuid ?? e.profile?.organization.uuid;
  if (o === void 0) return await r(), { ok: false, reason: "invalid", message: "The sign-in didn't say which organization it was for, so it can't be used. Try again." };
  if (o.toLowerCase() !== k.toLowerCase()) return await r(), { ok: false, reason: "other_organization", message: "The sign-in was for a different organization than your Console sign-in. Sign in again and choose the same organization." };
  if (u !== void 0) {
    let a = (e.tokenAccount?.emailAddress || e.profile?.account.email)?.trim() || void 0;
    if (a === void 0) return await r(), { ok: false, reason: "invalid", message: "The sign-in didn't say which account it was for, so it can't be used. Try again." };
    if (a.trim().toLowerCase() !== u.trim().toLowerCase()) return await r(), { ok: false, reason: "other_account", message: `The sign-in was for ${a}, but your Console sign-in is ${u}. Sign in again as ${u}.` };
  }
  if (!e.refreshToken || !e.expiresAt) return await r(), { ok: false, reason: "invalid", message: "The sign-in came back without a refresh token or an expiry, so it could not be stored. Try again." };
  return { ok: true, slot: { accessToken: e.accessToken, refreshToken: e.refreshToken, expiresAt: e.expiresAt, scopes: e.scopes.filter((a) => Wlr.some((n) => n === a)), clientId: s, organizationUuid: k } };
}
function V() {
  if (!d9() || j2o()) return "unknown";
  return Ks("ldr") ? "ldr" : "not_ldr";
}
noi({ organizationLabel: V, hasStored: N, canSignInHere: D, getValid: R, signIn: B });
