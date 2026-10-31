// darwin/auth/oauth-storage-warning.js — Claude Code 2.1.310（darwin）模块 chunk-qd158bg2.js
import { I5, GM, X3t, Aee, J } from "../context/not-admin-owned.js";
import { S, c } from "../agents/third-party.js";
import { R, Rr, d, v, GI, Kt, TT, AT, Pf } from "../telemetry/anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { XEt, Gtr, QU, WVr, y_n, tqo, __n, WKr, KKr, rZ, Lh, Nh, al, Fg, Rnt, oSn, np, g3o, gn, sT, Wt, Ut, Re, ue } from "../settings/global-config-and-gates.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { Te } from "../models/total-tokens-reminder.js";
import { ma, N4r, Vn } from "./permission-error.js";
import { Nce } from "../context/account-memory-text-not-identified.js";
import { _Gs, QNr } from "../telemetry/chunk-d4426fa7.js";
import { Mmo, WIe, yQt } from "./account-change.js";
import { Zme } from "./client-data-cache-key.js";
import { z } from "../shared/chunk-be29de51.js";
async function y(e, r) {
  try {
    if (ue().claudeCodeFirstTokenDate !== void 0) {
      g("api_first_token_date_fetch");
      return;
    }
    let f = await Wt.get("/api/organization/claude_code_first_token_date", { auth: "async", timeout: 1e4, credentials: r });
    if (!f.ok) {
      if (f.reason === "no-auth") t(`Failed to get auth headers for first-token-date fetch: ${f.detail}`, { level: "error" }), m("api_first_token_date_fetch", "request_failed");
      return;
    }
    let s = f.data?.first_token_date ?? null;
    if (s !== null) {
      let o = new Date(s).getTime();
      if (isNaN(o)) {
        l(Error(`Received invalid first_token_date from API: ${s}`)), m("api_first_token_date_fetch", "invalid_date");
        return;
      }
    }
    await Re((o) => ({ ...o, claudeCodeFirstTokenDate: s }), e), g("api_first_token_date_fetch");
  } catch (n) {
    if (Pf(n)) t(`Failed to fetch first token date: ${d(n)}`, { level: "error" });
    else l(n);
    m("api_first_token_date_fetch", "request_failed");
  }
}
var C = "Couldn't save your login. Try logging in again.", D = "Couldn't save your login. If your Mac's keychain is locked, unlock it and log in again.";
async function m5e(e, { storageV5: r, credentials: n, clock: f } = {}) {
  let s = await qno(e, { storageV5: r, credentials: n }), { result: o, locked: p } = await E(() => KKr(e, n, "sign_in"), n, { clock: f }), h = p ? o.replaced : void 0, A = Ut() && !p && o.replaced !== void 0;
  if (Nh(), process.env.CLAUDE_CODE_OAUTH_TOKEN) if (o.success) delete process.env.CLAUDE_CODE_OAUTH_TOKEN;
  else process.env.CLAUDE_CODE_OAUTH_TOKEN = e.accessToken;
  if (I5()) GM(o.success ? null : e.accessToken), X3t(false);
  if ("transient" in o && o.transient === true && !i.CLAUDE_CODE_OAUTH_TOKEN && !I5()) throw new Rr(O() === "macos" ? D : C);
  if (z() && n !== void 0) await w(n);
  let { warning: k } = o;
  if (k) a("tengu_oauth_storage_warning", { warning: k === N4r || k === WKr ? c(k) : S("other") });
  if (await y_n(e.accessToken, r).catch((u) => t(String(u), { level: "error" })), QU(e.scopes)) await y(r, n).catch((u) => t(String(u), { level: "error" }));
  else if (!await tqo(e.accessToken, r)) throw Error("Unable to create API key. The server accepted the request but did not return a key.");
  return await Yno({ storageV5: r, credentials: n, ...s }), { storage: { success: o.success, backendName: o.backendName, transient: o.transient, fallbackWritten: o.fallbackWritten, landedToken: { accessToken: e.accessToken, refreshToken: e.refreshToken, clientId: e.clientId }, ...h !== void 0 && { replacedLogin: h }, ...A && { replacedLoginUnrestorable: A }, sessionAuth: o.success || g3o(e.accessToken) ? "fresh" : np() ? "previous" : "none" } };
}
async function qno(e, { storageV5: r, credentials: n }) {
  let f = gn(), s = { accountUuid: e.profile?.account?.uuid ?? e.tokenAccount?.uuid, organizationUuid: e.profile?.organization?.uuid ?? e.tokenAccount?.organizationUuid }, o = Fg(f, s), p = Fg(sT(), s), h = await Lh(n), k = p && (h === "env" || h === "fd" || h === "store" && o) ? "same_account" : "account_switch";
  await WIe({ clearOnboarding: false, preserveInProcessTokens: true, preserveNonAnthropicAuth: true, storageV5: r, preserveQuotaAutoResume: o, artifactAccount: k, incomingIdentity: s, credentials: n }), Aee(null);
  let u = e.profile ?? await XEt(e.accessToken);
  if (u?.account && u.organization) __n({ accountUuid: u.account.uuid, emailAddress: u.account.email, organizationUuid: u.organization.uuid, displayName: u.account.display_name || void 0, fullName: u.account.full_name || void 0, hasExtraUsageEnabled: u.organization.has_extra_usage_enabled ?? void 0, billingType: u.organization.billing_type ?? void 0, subscriptionCreatedAt: u.organization.subscription_created_at ?? void 0, accountCreatedAt: u.account.created_at, ccOnboardingFlags: u.organization.cc_onboarding_flags ?? {}, claudeCodeTrialEndsAt: u.organization.claude_code_trial_ends_at ?? null, claudeCodeTrialDurationDays: u.organization.claude_code_trial_duration_days ?? null, seatTier: u.organization.seat_tier ?? null, planDisplayName: Gtr(u), profileFetchedAt: Date.now() }, r);
  else if (e.tokenAccount) __n({ accountUuid: e.tokenAccount.uuid, emailAddress: e.tokenAccount.emailAddress, organizationUuid: e.tokenAccount.organizationUuid }, r);
  return Nce({ action: "login", success: true, authMethod: "oauth" }), { preserveQuotaAutoResume: o, artifactAccount: k, incomingIdentity: s };
}
async function Yno({ storageV5: e, credentials: r, preserveQuotaAutoResume: n = false, incomingIdentity: f }) {
  if (await yQt(e, { preserveQuotaAutoResume: n, artifactAccount: "same_account", incomingIdentity: f }), z() && r !== void 0) await w(r);
  await Zme(e, r);
}
var N = 3;
async function E(e, r, { withoutLock: n, clock: f } = {}) {
  if (!Ut() || J()) return { result: await e(), locked: false };
  for (let s = 1; ; s++) {
    let o = false;
    try {
      return await oSn(async ({ isCompromised: p }) => {
        let h = !p();
        if (!h && n !== void 0) return { result: n(), locked: false };
        return o = true, { result: await e(), locked: h && !p() };
      }, r);
    } catch (p) {
      if (o) throw p;
      if (p instanceof Rnt && s < N) {
        await X(100 * s, void 0, { clock: f });
        continue;
      }
      return t(`OAuth: no refresh lock for a credential write (${T(p)})`, { level: "warn" }), n !== void 0 ? { result: n(), locked: false } : { result: await e(), locked: false };
    }
  }
}
async function w(e) {
  rZ(), await al(e);
}
var F = "The refused sign-in could not be fully undone: this machine's previous sign-in state could not be confirmed restored, and the refused sign-in was revoked. Sign in again (claude auth login, or /login).", L = "The refused sign-in could not be fully undone: this machine's previous sign-in state could not be confirmed restored, and the refused sign-in may still be valid. Sign in again (claude auth login, or /login), and ask your admin to revoke it if this device is shared.";
function A8t(e) {
  return e.revoked ? F : L;
}
function U(e) {
  return v(e) === "ELOCKED" || Kt(e) || TT(AT(e));
}
function T(e) {
  return GI(e instanceof Error ? e.name : void 0) ?? (e === null ? "null" : typeof e);
}
function rIn(e, r) {
  if (U(e)) {
    t(`Rolling back a refused sign-in failed (${r}; ${T(e)}: ${v(e) ?? AT(e) ?? "no errno"})`, { level: "error" });
    return;
  }
  l(new R(`Rolling back a refused sign-in threw (${r}: ${T(e)})`, "Rolling back a refused sign-in threw"));
}
async function Xno(e, { storageV5: r, credentials: n, clock: f }) {
  if (e === void 0 || e.success && !Ut()) return await WIe({ clearOnboarding: false, preserveNonAnthropicAuth: true, storageV5: r, credentials: n }), { restored: true, revoked: true };
  i.unset("CLAUDE_CODE_OAUTH_TOKEN"), GM(null), Aee(null), Nh();
  let s = e.landedToken, o = true, p = false;
  if (s !== void 0) {
    let h = s.refreshToken !== null && Te() === "firstParty" ? s.refreshToken : null, A = Vn();
    try {
      let k = e.replacedLogin, u = k === void 0;
      if (k !== void 0) {
        let _ = await E(() => P(A, s.accessToken, k, n, f), n, { withoutLock: () => false, clock: f });
        u = _.locked && _.result;
      }
      if (u) await _Gs(A, (_) => {
        if (_.claudeAiOauth?.accessToken !== s.accessToken) return _;
        let { claudeAiOauth: x, ...b } = _;
        return b;
      }, n);
      let I = await QNr(A, (_) => _.claudeAiOauth?.accessToken, n);
      o = u && !I.some((_) => _.value === ma || _.value === s.accessToken || Ut() && _.value !== void 0 && _.value !== k?.accessToken);
    } catch (k) {
      rIn(k, "credential store"), o = false;
    } finally {
      if (h !== null) try {
        p = await WVr(h, s.clientId);
      } catch (k) {
        l(new R(`Revoking a refused sign-in's token threw (${T(k)})`, "Revoking a refused sign-in's token threw"));
      }
    }
  }
  return await yQt(r, { artifactAccount: np() ? "account_switch" : "signed_out", credentials: n }), await Mmo(r), { restored: o && e.replacedLoginUnrestorable !== true, revoked: p };
}
async function P(e, r, n, f, s) {
  for (let o = 0; o < 3; o++) {
    if (o > 0) await X(100 * o, void 0, { clock: s });
    try {
      if ((await e.mutate((h) => h.claudeAiOauth?.accessToken === r ? { ...h, claudeAiOauth: n } : h, f)).success) return true;
    } catch (p) {
      rIn(p, "credential store");
    }
  }
  return false;
}
async function R8t(e, r, n) {
  switch (e.reason) {
    case "org_pin_mismatch":
    case "org_verify_failed":
    case "managed_settings_invalid":
      break;
    case "org_pin_api_key_conflict":
    case "provider_not_allowed":
      return;
  }
  try {
    return await Xno(r, n);
  } catch (f) {
    return rIn(f, "sign-out"), { restored: false, revoked: false };
  }
}
export {
  A8t,
  R8t,
  Xno,
  Yno,
  m5e,
  qno,
  rIn
};
