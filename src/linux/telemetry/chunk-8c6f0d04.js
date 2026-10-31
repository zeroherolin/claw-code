// linux/telemetry/chunk-8c6f0d04.js — Claude Code 2.1.310（linux）模块 chunk-rg29ns8n.js
import { U, xit } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { ue, WEt } from "../settings/global-config-and-gates.js";
import { Ss } from "../settings/workflow-launch-exec.js";
import { ONe, QVt, ase, M0, Vz, J5 } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { u8o, pwn } from "../shell/find-generic-password.js";
import { INe } from "../auth/auth-launcher-host-login.js";
import { noe } from "../settings/non-string-value.js";
import { SQs } from "../settings/chunk-ece539a6.js";
import { rzr } from "../cli/apply-project-settings.js";
import { z } from "../shared/chunk-be29de51.js";
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
async function NGt(t) {
  if (!l().claimSettingsLoad()) return;
  rzr();
  let e = z() ? t?.backend : void 0;
  if (z() && e !== void 0) {
    let [{ seedUserSettings: o }, { primeWindowsCredManBackendEnabled: i }, { primeRemoteManagedSettingsCache: a }, { primeWorkspaceRoots: r }] = await Promise.all([import("../settings/prime-settings.js"), import("../shared/get-secure-storage.js"), import("../settings/drop-remote-managed-settings-consent-deferral.js"), import("../shared/prime-workspace-roots.js")]);
    await r(e), await Promise.all([WEt(e), o(e, Ss())]), i(ue().cachedGrowthBookFeatures?.tengu_windows_credman === true), await a(e);
  } else await WEt();
  if (await ONe(), await pwn(u8o), z() && e !== void 0) {
    let [{ credentialsStoreFor: o }, { primeFileDescriptorCredentials: i }, { primeStoredLoginCopy: a }] = await Promise.all([import("../shared/credentials-store-for.js"), import("../shared/prime-file-descriptor-credentials.js"), import("../auth/acquire-o-auth-refresh-lock.js")]), r = o(e);
    if (r !== void 0) await i(r, { bgAuthSnapshot: "leave" }), await a(r);
  }
  xit(INe), noe();
  let n = SQs();
  if (n) process.stderr.write(`${n}
`), process.exit(1);
}
async function F7n() {
  let t = l();
  if (t.helperResult) return t.helperResult.error;
  let e = t.beginHelperRun();
  if (e.error = await QVt(M0(), Vz(), J5()), ase()) noe();
  return e.error;
}
async function Mzo(t) {
  return await NGt(t), F7n();
}
export {
  F7n,
  Mzo,
  NGt
};
