// darwin/auth/account-change.js — Claude Code 2.1.310（darwin）模块 chunk-j1ca7p7h.js
import { U, M3e, GM, hie, Aee, k$e } from "../context/not-admin-owned.js";
import { d, v, Q_ } from "../telemetry/anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { fti, KEt, hS, Vni, t1, Pri, eZ, d3o, rZ, n1, kSn, Ut, uI, Re, UF, J6t } from "../settings/global-config-and-gates.js";
import { g } from "../telemetry/chunk-9d6962d2.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { wr, Te } from "../models/total-tokens-reminder.js";
import { ma, Cwn, Jai, MNe, Vn } from "./permission-error.js";
import { L4s, vU } from "../api/anthropic-client.js";
import { GU } from "../remote/sessions-elevated-auth-disable-proactive-enrollment.js";
import { JAr, HP } from "../core/conversation-engine.js";
import { sjs } from "../context/team-memory-sync.js";
import { Fre } from "../context/org-memory-writes-setting-changed.js";
import { fwt, Ci } from "../context/stream-no-events-fallback-warning.js";
import { eQs, tQs } from "../artifacts/same-account.js";
import { C$r } from "../plugins/claudeai-plugins-sync-enabled.js";
import { Nce } from "../context/account-memory-text-not-identified.js";
import { uKn, NUs, FUs } from "../core/system-prompt-blocks.js";
import { Wzo } from "./policy-limits-principal-changed.js";
import { UJs } from "../mcp/cobalt-plinth-sedge.js";
import { tCs } from "./api-metrics-opt-out-check.js";
import { bte, LEe } from "./grove-print-viewed.js";
import { uPs } from "../artifacts/store-unavailable.9d8d.js";
import { jks } from "./user-oauth.js";
import { uB } from "../telemetry/quota-auto-resume-cancelled.js";
import { SQt } from "../remote/managed-settings-security-dialog-accepted.js";
import { f6 } from "../api/not-signed-in.js";
import { uMt } from "../shared/subscription-switch.js";
import { z } from "../shared/chunk-be29de51.js";
var C = null;
function w(o) {
  return o.oauthAccount = void 0, o.additionalModelOptionsCache = void 0, o.additionalModelOptionsAnsweredAt = void 0, o.additionalModelCostsCache = void 0, o.modelAccessCache = void 0, o.orgModelDefaultCache = void 0, o.cachedArtifactRoster = void 0, o.artifactRosterDenied = void 0, o.lastSeenOrgDefaultUpdatedAt = void 0, o.clientDataCache = void 0, o.clientDataCacheSlots = void 0, o.autoCompactWindowsCache = void 0, o.cachedUsageUtilization = void 0, o.metricsStatusCache = void 0, o.metricsStatusCacheByPrincipal = void 0, o.githubWebConnectionStatusCache = void 0, o.unusedLimitResetStatusCache = void 0, o.startupPrefetchedAt = void 0, o;
}
async function Mmo(o) {
  await Re((s) => w({ ...s }), o), M3e(void 0);
}
async function WIe({ clearOnboarding: o = false, preserveInProcessTokens: s = false, preserveNonAnthropicAuth: u = false, storageV5: n, preserveQuotaAutoResume: p = false, artifactAccount: a = "signed_out", incomingIdentity: M, credentials: f }) {
  let { flushTelemetry: A } = await import("../telemetry/big-query-export-interval-ms.js");
  if (await A(), await tQs(a), Ut()) {
    await yQt(n, { preserveQuotaAutoResume: p, artifactAccount: a, incomingIdentity: M });
    return;
  }
  if (!s && Te() === "firstParty") {
    let r = Vn();
    r.invalidateCache?.();
    let e = await r.readAsync(f), c = e?.claudeAiOauth;
    if (c?.refreshToken) await hS(c.refreshToken, c.clientId);
    let m = e?.designOauth;
    if (m?.refreshToken) await hS(m.refreshToken, m.clientId);
    let S = e?.cloudSessionsOauth;
    if (S?.refreshToken) await hS(S.refreshToken, S.clientId);
  }
  if (Te() === "gateway") {
    let r = Date.now() + 5e3;
    for (let m = k$e(); m && Date.now() < r; m = k$e()) await Pe(m.catch(() => {
    }), r - Date.now());
    let e = Vn();
    e.invalidateCache?.();
    let c = (await e.readAsync(f))?.enterpriseGateway;
    if (c) await Pri(c, f);
  }
  if (!s) i.unset("CLAUDE_CODE_OAUTH_TOKEN"), GM(null);
  await d3o(n), await jks({ revoke: !s && Te() === "firstParty" ? ({ refreshToken: r, clientId: e }) => hS(r, e) : void 0 }), kSn();
  let h = Vn(), O;
  if (u) {
    if (Te() === "firstParty") {
      h.invalidateCache?.();
      let r = (await h.readAsync(f))?.designOauth;
      if (r?.refreshToken) await hS(r.refreshToken, r.clientId);
    }
    await h.mutate((r) => {
      let e = { ...r };
      return delete e.claudeAiOauth, delete e.organizationUuid, delete e.trustedDeviceToken, delete e.trustedDeviceEnrolledAfterRefusalAtMs, delete e.enterpriseGateway, delete e.designOauth, delete e.cloudSessionsOauth, e;
    }, f).catch((r) => {
      let e = v(r);
      if (e === "EPERM" || e === "ENOENT" || Q_(r)) {
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
    await Cwn(e).catch((c) => {
      if (r) throw c;
      return l(c), Jai(e);
    });
  }
  hie(null), Aee(null), await yQt(n, { preserveQuotaAutoResume: p, artifactAccount: a, incomingIdentity: M, credentials: f }), await Re((r) => {
    let e = { ...r };
    if (o) {
      if (e.hasCompletedOnboarding = false, e.subscriptionNoticeCount = 0, e.hasAvailableSubscription = false, e.customApiKeyResponses !== void 0) e.customApiKeyResponses = { approved: [], rejected: UF(e).rejected };
      let c = uMt;
      if (e.seenNotifications?.[c] !== void 0) {
        let { [c]: m, ...S } = e.seenNotifications;
        e.seenNotifications = S;
      }
    }
    return w(e), e;
  }, n), await E(), M3e(void 0), g("oauth_logout");
}
async function E() {
}
async function yQt(o, { preserveQuotaAutoResume: s = false, artifactAccount: u = "signed_out", incomingIdentity: n, credentials: p } = {}) {
  if (rZ(), z() && p === void 0) MNe();
  GU(), J6t(), wr().providerCache.clientDataFetches.clear(), t1(), wr().providerCache.modelConfigs.clear(), wr().providerCache.validatedModels.clear(), Vni(), fti(), eZ(), KEt(null), fwt(Ci().gzipRequestBody.blockStore), Fre();
  let a = U();
  if (sjs(a.host), C?.forgetClaudeCodeKeyHeard(), C?.recordServerAccountMemoryWord(void 0), uPs(a.host), eQs(u, n), u !== "same_account") {
    if (UJs(a), !(Ut() && u === "signed_out")) JAr("account_change"), C$r("account_change");
  }
  if (f6.of(a.host).clear(), n1(), HP(a, "account_change"), uI(), LEe.cache?.clear?.(), bte.cache?.clear?.(), await SQt(o), await Wzo(), tCs(), NUs(), FUs(), !s) uB("account_switch"), vU("account_switch"), L4s();
  uKn();
}
async function FTi({ exit: o, setError: s, setInfo: u, storageV5: n, credentials: p }) {
  u("Signing out…"), Nce({ action: "logout", success: true, authMethod: "oauth" });
  try {
    await WIe({ clearOnboarding: true, storageV5: n, credentials: p }), o();
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
    if (n !== ma) return n;
  }
  l(Error("logout: secure storage could not be read, so the device identity is not carried across the wipe"));
  return;
}
export {
  FTi,
  Mmo,
  WIe,
  yQt
};
