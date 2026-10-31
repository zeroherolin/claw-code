// linux/auth/oauth-storage-warning.js — Claude Code 2.1.310（linux）模块 chunk-bg29rnhz.js
import { w6, FM, LYt, bee, J } from "../context/not-admin-owned.js";
import { b, c } from "../agents/third-party.js";
import { R, Rr, d, E, FI, Vt, EA, kA, Pp } from "../telemetry/anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { Wvt, Atr, VU, vVr, e_n, Aqo, t_n, vqr, Aqr, Y7, Lh, Nh, il, $g, wnt, B_n, nf, U4o, gn, rA, jt, Ut, Re, ue } from "../settings/global-config-and-gates.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { Ae } from "../models/total-tokens-reminder.js";
import { Sl, g5r, Kn } from "./permission-error.js";
import { Pce } from "../context/account-memory-text-not-identified.js";
import { MGs, ONr } from "../telemetry/chunk-d4426fa7.js";
import { amo, NIe, i7t } from "./account-change.js";
import { qme } from "./client-data-cache-key.js";
import { z } from "../shared/chunk-be29de51.js";
async function y(e, r) {
  try {
    if (ue().claudeCodeFirstTokenDate !== void 0) {
      g("api_first_token_date_fetch");
      return;
    }
    let f = await jt.get("/api/organization/claude_code_first_token_date", { auth: "async", timeout: 1e4, credentials: r });
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
    if (Pp(n)) t(`Failed to fetch first token date: ${d(n)}`, { level: "error" });
    else l(n);
    m("api_first_token_date_fetch", "request_failed");
  }
}
var C = "Couldn't save your login. Try logging in again.", D = "Couldn't save your login. If your Mac's keychain is locked, unlock it and log in again.";
async function e6e(e, { storageV5: r, credentials: n, clock: f } = {}) {
  let s = await Kto(e, { storageV5: r, credentials: n }), { result: o, locked: p } = await S(() => Aqr(e, n, "sign_in"), n, { clock: f }), h = p ? o.replaced : void 0, A = Ut() && !p && o.replaced !== void 0;
  if (Nh(), process.env.CLAUDE_CODE_OAUTH_TOKEN) if (o.success) delete process.env.CLAUDE_CODE_OAUTH_TOKEN;
  else process.env.CLAUDE_CODE_OAUTH_TOKEN = e.accessToken;
  if (w6()) FM(o.success ? null : e.accessToken), LYt(false);
  if ("transient" in o && o.transient === true && !i.CLAUDE_CODE_OAUTH_TOKEN && !w6()) throw new Rr(O() === "macos" ? D : C);
  if (z() && n !== void 0) await w(n);
  let { warning: k } = o;
  if (k) a("tengu_oauth_storage_warning", { warning: k === g5r || k === vqr ? c(k) : b("other") });
  if (await e_n(e.accessToken, r).catch((u) => t(String(u), { level: "error" })), VU(e.scopes)) await y(r, n).catch((u) => t(String(u), { level: "error" }));
  else if (!await Aqo(e.accessToken, r)) throw Error("Unable to create API key. The server accepted the request but did not return a key.");
  return await Vto({ storageV5: r, credentials: n, ...s }), { storage: { success: o.success, backendName: o.backendName, transient: o.transient, fallbackWritten: o.fallbackWritten, landedToken: { accessToken: e.accessToken, refreshToken: e.refreshToken, clientId: e.clientId }, ...h !== void 0 && { replacedLogin: h }, ...A && { replacedLoginUnrestorable: A }, sessionAuth: o.success || U4o(e.accessToken) ? "fresh" : nf() ? "previous" : "none" } };
}
async function Kto(e, { storageV5: r, credentials: n }) {
  let f = gn(), s = { accountUuid: e.profile?.account?.uuid ?? e.tokenAccount?.uuid, organizationUuid: e.profile?.organization?.uuid ?? e.tokenAccount?.organizationUuid }, o = $g(f, s), p = $g(rA(), s), h = await Lh(n), k = p && (h === "env" || h === "fd" || h === "store" && o) ? "same_account" : "account_switch";
  await NIe({ clearOnboarding: false, preserveInProcessTokens: true, preserveNonAnthropicAuth: true, storageV5: r, preserveQuotaAutoResume: o, artifactAccount: k, incomingIdentity: s, credentials: n }), bee(null);
  let u = e.profile ?? await Wvt(e.accessToken);
  if (u?.account && u.organization) t_n({ accountUuid: u.account.uuid, emailAddress: u.account.email, organizationUuid: u.organization.uuid, displayName: u.account.display_name || void 0, fullName: u.account.full_name || void 0, hasExtraUsageEnabled: u.organization.has_extra_usage_enabled ?? void 0, billingType: u.organization.billing_type ?? void 0, subscriptionCreatedAt: u.organization.subscription_created_at ?? void 0, accountCreatedAt: u.account.created_at, ccOnboardingFlags: u.organization.cc_onboarding_flags ?? {}, claudeCodeTrialEndsAt: u.organization.claude_code_trial_ends_at ?? null, claudeCodeTrialDurationDays: u.organization.claude_code_trial_duration_days ?? null, seatTier: u.organization.seat_tier ?? null, planDisplayName: Atr(u), profileFetchedAt: Date.now() }, r);
  else if (e.tokenAccount) t_n({ accountUuid: e.tokenAccount.uuid, emailAddress: e.tokenAccount.emailAddress, organizationUuid: e.tokenAccount.organizationUuid }, r);
  return Pce({ action: "login", success: true, authMethod: "oauth" }), { preserveQuotaAutoResume: o, artifactAccount: k, incomingIdentity: s };
}
async function Vto({ storageV5: e, credentials: r, preserveQuotaAutoResume: n = false, incomingIdentity: f }) {
  if (await i7t(e, { preserveQuotaAutoResume: n, artifactAccount: "same_account", incomingIdentity: f }), z() && r !== void 0) await w(r);
  await qme(e, r);
}
var N = 3;
async function S(e, r, { withoutLock: n, clock: f } = {}) {
  if (!Ut() || J()) return { result: await e(), locked: false };
  for (let s = 1; ; s++) {
    let o = false;
    try {
      return await B_n(async ({ isCompromised: p }) => {
        let h = !p();
        if (!h && n !== void 0) return { result: n(), locked: false };
        return o = true, { result: await e(), locked: h && !p() };
      }, r);
    } catch (p) {
      if (o) throw p;
      if (p instanceof wnt && s < N) {
        await X(100 * s, void 0, { clock: f });
        continue;
      }
      return t(`OAuth: no refresh lock for a credential write (${T(p)})`, { level: "warn" }), n !== void 0 ? { result: n(), locked: false } : { result: await e(), locked: false };
    }
  }
}
async function w(e) {
  Y7(), await il(e);
}
var F = "The refused sign-in could not be fully undone: this machine's previous sign-in state could not be confirmed restored, and the refused sign-in was revoked. Sign in again (claude auth login, or /login).", L = "The refused sign-in could not be fully undone: this machine's previous sign-in state could not be confirmed restored, and the refused sign-in may still be valid. Sign in again (claude auth login, or /login), and ask your admin to revoke it if this device is shared.";
function t8t(e) {
  return e.revoked ? F : L;
}
function U(e) {
  return E(e) === "ELOCKED" || Vt(e) || EA(kA(e));
}
function T(e) {
  return FI(e instanceof Error ? e.name : void 0) ?? (e === null ? "null" : typeof e);
}
function xPn(e, r) {
  if (U(e)) {
    t(`Rolling back a refused sign-in failed (${r}; ${T(e)}: ${E(e) ?? kA(e) ?? "no errno"})`, { level: "error" });
    return;
  }
  l(new R(`Rolling back a refused sign-in threw (${r}: ${T(e)})`, "Rolling back a refused sign-in threw"));
}
async function qto(e, { storageV5: r, credentials: n, clock: f }) {
  if (e === void 0 || e.success && !Ut()) return await NIe({ clearOnboarding: false, preserveNonAnthropicAuth: true, storageV5: r, credentials: n }), { restored: true, revoked: true };
  i.unset("CLAUDE_CODE_OAUTH_TOKEN"), FM(null), bee(null), Nh();
  let s = e.landedToken, o = true, p = false;
  if (s !== void 0) {
    let h = s.refreshToken !== null && Ae() === "firstParty" ? s.refreshToken : null, A = Kn();
    try {
      let k = e.replacedLogin, u = k === void 0;
      if (k !== void 0) {
        let _ = await S(() => P(A, s.accessToken, k, n, f), n, { withoutLock: () => false, clock: f });
        u = _.locked && _.result;
      }
      if (u) await MGs(A, (_) => {
        if (_.claudeAiOauth?.accessToken !== s.accessToken) return _;
        let { claudeAiOauth: x, ...I } = _;
        return I;
      }, n);
      let v = await ONr(A, (_) => _.claudeAiOauth?.accessToken, n);
      o = u && !v.some((_) => _.value === Sl || _.value === s.accessToken || Ut() && _.value !== void 0 && _.value !== k?.accessToken);
    } catch (k) {
      xPn(k, "credential store"), o = false;
    } finally {
      if (h !== null) try {
        p = await vVr(h, s.clientId);
      } catch (k) {
        l(new R(`Revoking a refused sign-in's token threw (${T(k)})`, "Revoking a refused sign-in's token threw"));
      }
    }
  }
  return await i7t(r, { artifactAccount: nf() ? "account_switch" : "signed_out", credentials: n }), await amo(r), { restored: o && e.replacedLoginUnrestorable !== true, revoked: p };
}
async function P(e, r, n, f, s) {
  for (let o = 0; o < 3; o++) {
    if (o > 0) await X(100 * o, void 0, { clock: s });
    try {
      if ((await e.mutate((h) => h.claudeAiOauth?.accessToken === r ? { ...h, claudeAiOauth: n } : h, f)).success) return true;
    } catch (p) {
      xPn(p, "credential store");
    }
  }
  return false;
}
async function n8t(e, r, n) {
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
    return await qto(r, n);
  } catch (f) {
    return xPn(f, "sign-out"), { restored: false, revoked: false };
  }
}
export {
  Kto,
  Vto,
  e6e,
  n8t,
  qto,
  t8t,
  xPn
};
