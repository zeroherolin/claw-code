// telemetry/chunk-ddefq4nw.js — Claude Code 2.1.310 模块 chunk-ddefq4nw.js
import { U, Lit } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { ue, Xvt } from "../settings/global-config-and-gates.27xj.js";
import { ws } from "../settings/workflow-launch-exec.t4r2.js";
import { FNe, uKt, mse, NL, nz, a5 } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { B8o, xwn } from "../shell/find-generic-password.dx7z.js";
import { NNe } from "../auth/auth-launcher-host-login.9f3m.js";
import { doe } from "../settings/non-string-value.58dq.js";
import { oQs } from "../vendor/semver/chunk-8jjp6ksr.js";
import { kGr } from "../cli/apply-project-settings.g90t.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
class s {
  settingsLoaded = false;
  helperResult = null;
  claimSettingsLoad() {
    if (this.settingsLoaded) return false;
    return this.settingsLoaded = true, true;
  }
  beginHelperRun() {
    return this.helperResult = { error: null }, this.helperResult;
  }
}
var p = new W(() => new s());
function l() {
  return p.of(U().host);
}
async function Y2t(t) {
  if (!l().claimSettingsLoad()) return;
  kGr();
  let e = z() ? t?.backend : void 0;
  if (z() && e !== void 0) {
    let [{ seedUserSettings: o }, { primeWindowsCredManBackendEnabled: i }, { primeRemoteManagedSettingsCache: a }, { primeWorkspaceRoots: r }] = await Promise.all([import("../settings/prime-settings.4tgb.js"), import("../shared/get-secure-storage.65kx.js"), import("../settings/drop-remote-managed-settings-consent-deferral.zwm6.js"), import("../shared/prime-workspace-roots.gd9p.js")]);
    await r(e), await Promise.all([Xvt(e), o(e, ws())]), i(ue().cachedGrowthBookFeatures?.tengu_windows_credman === true), await a(e);
  } else await Xvt();
  if (await FNe(), await xwn(B8o), z() && e !== void 0) {
    let [{ credentialsStoreFor: o }, { primeFileDescriptorCredentials: i }, { primeStoredLoginCopy: a }] = await Promise.all([import("../shared/credentials-store-for.bh2g.js"), import("../shared/prime-file-descriptor-credentials.3qcw.js"), import("../auth/acquire-o-auth-refresh-lock.0dnm.js")]), r = o(e);
    if (r !== void 0) await i(r, { bgAuthSnapshot: "leave" }), await a(r);
  }
  Lit(NNe), doe();
  let n = oQs();
  if (n) process.stderr.write(`${n}
`), process.exit(1);
}
async function rZn() {
  let t = l();
  if (t.helperResult) return t.helperResult.error;
  let e = t.beginHelperRun();
  if (e.error = await uKt(NL(), nz(), a5()), mse()) doe();
  return e.error;
}
async function bhn(t) {
  return await Y2t(t), rZn();
}
export {
  Y2t,
  bhn,
  rZn
};
