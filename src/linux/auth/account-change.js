// linux/auth/account-change.js — Claude Code 2.1.310（linux）模块 chunk-75s50wf6.js
import { U, TYe, FM, lie, bee, gFe } from "../context/not-admin-owned.js";
import { d, E, J_ } from "../telemetry/anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { xei, Uvt, gb, lni, XU, Kni, K7, D4o, Y7, JU, abn, Ut, lI, Re, L$, FKt } from "../settings/global-config-and-gates.js";
import { g } from "../telemetry/chunk-9d6962d2.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Sr, Ae } from "../models/total-tokens-reminder.js";
import { Sl, dwn, pai, CNe, Kn } from "./permission-error.js";
import { FYs, _U } from "../api/anthropic-client.js";
import { FU } from "../remote/sessions-elevated-auth-disable-proactive-enrollment.js";
import { ICr, IP } from "../core/conversation-engine.js";
import { D1s } from "../context/team-memory-sync.js";
import { Ore } from "../context/org-memory-writes-setting-changed.js";
import { iwt, Ti } from "../context/stream-no-events-fallback-warning.js";
import { hQs, yQs } from "../artifacts/same-account.js";
import { sFr } from "../plugins/claudeai-plugins-sync-enabled.js";
import { Pce } from "../context/account-memory-text-not-identified.js";
import { GVn, QFs, ZFs } from "../core/system-prompt-blocks.js";
import { g2o } from "./policy-limits-principal-changed.js";
import { nQs } from "../mcp/cobalt-plinth-sedge.js";
import { Lks } from "./api-metrics-opt-out-check.js";
import { pte, Pve } from "./grove-print-viewed.js";
import { gxs } from "../artifacts/store-unavailable.9d8d.js";
import { cks } from "./user-oauth.js";
import { s1 } from "../telemetry/quota-auto-resume-cancelled.js";
import { l7t } from "../remote/managed-settings-security-dialog-accepted.js";
import { oK } from "../api/not-signed-in.js";
import { oMt } from "../shared/subscription-switch.js";
import { z } from "../shared/chunk-be29de51.js";
var v = null;
function C(o) {
  return o.oauthAccount = void 0, o.additionalModelOptionsCache = void 0, o.additionalModelOptionsAnsweredAt = void 0, o.additionalModelCostsCache = void 0, o.modelAccessCache = void 0, o.orgModelDefaultCache = void 0, o.cachedArtifactRoster = void 0, o.artifactRosterDenied = void 0, o.lastSeenOrgDefaultUpdatedAt = void 0, o.clientDataCache = void 0, o.clientDataCacheSlots = void 0, o.autoCompactWindowsCache = void 0, o.cachedUsageUtilization = void 0, o.metricsStatusCache = void 0, o.metricsStatusCacheByPrincipal = void 0, o.githubWebConnectionStatusCache = void 0, o.unusedLimitResetStatusCache = void 0, o.startupPrefetchedAt = void 0, o;
}
async function amo(o) {
  await Re((s) => C({ ...s }), o), TYe(void 0);
}
async function NIe({ clearOnboarding: o = false, preserveInProcessTokens: s = false, preserveNonAnthropicAuth: u = false, storageV5: n, preserveQuotaAutoResume: p = false, artifactAccount: a = "signed_out", incomingIdentity: M, credentials: f }) {
  let { flushTelemetry: w } = await import("../telemetry/big-query-export-interval-ms.js");
  if (await w(), await yQs(a), Ut()) {
    await i7t(n, { preserveQuotaAutoResume: p, artifactAccount: a, incomingIdentity: M });
    return;
  }
  if (!s && Ae() === "firstParty") {
    let r = Kn();
    r.invalidateCache?.();
    let e = await r.readAsync(f), c = e?.claudeAiOauth;
    if (c?.refreshToken) await gb(c.refreshToken, c.clientId);
    let m = e?.designOauth;
    if (m?.refreshToken) await gb(m.refreshToken, m.clientId);
    let S = e?.cloudSessionsOauth;
    if (S?.refreshToken) await gb(S.refreshToken, S.clientId);
  }
  if (Ae() === "gateway") {
    let r = Date.now() + 5e3;
    for (let m = gFe(); m && Date.now() < r; m = gFe()) await Pe(m.catch(() => {
    }), r - Date.now());
    let e = Kn();
    e.invalidateCache?.();
    let c = (await e.readAsync(f))?.enterpriseGateway;
    if (c) await Kni(c, f);
  }
  if (!s) i.unset("CLAUDE_CODE_OAUTH_TOKEN"), FM(null);
  await D4o(n), await cks({ revoke: !s && Ae() === "firstParty" ? ({ refreshToken: r, clientId: e }) => gb(r, e) : void 0 }), abn();
  let h = Kn(), O;
  if (u) {
    if (Ae() === "firstParty") {
      h.invalidateCache?.();
      let r = (await h.readAsync(f))?.designOauth;
      if (r?.refreshToken) await gb(r.refreshToken, r.clientId);
    }
    await h.mutate((r) => {
      let e = { ...r };
      return delete e.claudeAiOauth, delete e.organizationUuid, delete e.trustedDeviceToken, delete e.trustedDeviceEnrolledAfterRefusalAtMs, delete e.enterpriseGateway, delete e.designOauth, delete e.cloudSessionsOauth, e;
    }, f).catch((r) => {
      let e = E(r);
      if (e === "EPERM" || e === "ENOENT" || J_(r)) {
        t(`[performLogout] re-login secure-storage prune failed (${e}): ${d(r)}`, { level: "error" });
        return;
      }
      l(r);
    });
  } else {
    let r = false, e = async () => {
      r = true;
      let m = (await k(h, f))?.coworkRemoteDevice;
      if (await h.delete(f), m && Object.keys(m).length > 0) await P(h, m, f);
    };
    await dwn(e).catch((c) => {
      if (r) throw c;
      return l(c), pai(e);
    });
  }
  lie(null), bee(null), await i7t(n, { preserveQuotaAutoResume: p, artifactAccount: a, incomingIdentity: M, credentials: f }), await Re((r) => {
    let e = { ...r };
    if (o) {
      if (e.hasCompletedOnboarding = false, e.subscriptionNoticeCount = 0, e.hasAvailableSubscription = false, e.customApiKeyResponses !== void 0) e.customApiKeyResponses = { approved: [], rejected: L$(e).rejected };
      let c = oMt;
      if (e.seenNotifications?.[c] !== void 0) {
        let { [c]: m, ...S } = e.seenNotifications;
        e.seenNotifications = S;
      }
    }
    return C(e), e;
  }, n), await A(), TYe(void 0), g("oauth_logout");
}
async function A() {
}
async function i7t(o, { preserveQuotaAutoResume: s = false, artifactAccount: u = "signed_out", incomingIdentity: n, credentials: p } = {}) {
  if (Y7(), z() && p === void 0) CNe();
  FU(), FKt(), Sr().providerCache.clientDataFetches.clear(), XU(), Sr().providerCache.modelConfigs.clear(), Sr().providerCache.validatedModels.clear(), lni(), xei(), K7(), Uvt(null), iwt(Ti().gzipRequestBody.blockStore), Ore();
  let a = U();
  if (D1s(a.host), v?.forgetClaudeCodeKeyHeard(), v?.recordServerAccountMemoryWord(void 0), gxs(a.host), hQs(u, n), u !== "same_account") {
    if (nQs(a), !(Ut() && u === "signed_out")) ICr("account_change"), sFr("account_change");
  }
  if (oK.of(a.host).clear(), JU(), IP(a, "account_change"), lI(), Pve.cache?.clear?.(), pte.cache?.clear?.(), await l7t(o), await g2o(), Lks(), QFs(), ZFs(), !s) s1("account_switch"), _U("account_switch"), FYs();
  GVn();
}
async function eAi({ exit: o, setError: s, setInfo: u, storageV5: n, credentials: p }) {
  u("Signing out…"), Pce({ action: "logout", success: true, authMethod: "oauth" });
  try {
    await NIe({ clearOnboarding: true, storageV5: n, credentials: p }), o();
  } catch (a) {
    l(a), s(`Couldn't sign out — ${a instanceof Error ? a.message : String(a)}`);
  }
}
async function P(o, s, u) {
  let n;
  for (let p = 0; p < 2; p++) try {
    let a = await o.mutate(() => ({ coworkRemoteDevice: s }), u);
    if (a.success) return;
    if (n = Error("logout: the device identity could not be written back after the credential wipe"), !a.transient) break;
  } catch (a) {
    n = a;
  }
  l(n);
}
async function k(o, s) {
  for (let u = 0; u < 2; u++) {
    let n = await (o.readAsyncStrict?.(s) ?? o.readAsync(s));
    if (n !== Sl) return n;
  }
  l(Error("logout: secure storage could not be read, so the device identity is not carried across the wipe"));
  return;
}
export {
  NIe,
  amo,
  eAi,
  i7t
};
