// telemetry/chunk-z25fxfmj.js — Claude Code 2.1.310 模块 chunk-z25fxfmj.js
import { d } from "./anthropic-workspace-id.36ys.js";
import { Pe } from "../shared/chunk-3kevgx4j.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { mse, NL } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { iA, kc, al, j_, oNe, Ti, z6t, Yvt, srt } from "../settings/global-config-and-gates.27xj.js";
import { t1e } from "../settings/chunk-9vfhfvv7.js";
import { fx, oQe, Ob, eFr } from "./chunk-yxhpkq6g.js";
import { j0e, Adn, mSi, hSi, rQe, YNr } from "../hooks/plugin-function-hooks-switch-followed.e90f.js";
import { zB } from "./started-after-init-empty.2bpk.js";
import { o, oe, u, me } from "../vendor/zod/string-format.k395.js";
import { Fr } from "../vendor/react/chunk-meds60nn.js";
var Cio = {};
Fr(Cio, { IS_WORKTREE_LAUNCH: () => NMn, SAVE_FAILURE: () => VMn, SIGN_IN_MARGIN_MS: () => UMn, default: () => Cio, earlyFetchVetoed: () => $Mn, fetchRefreshesSignIn: () => jMn, flagClientQuieted: () => WMn, isSavedSwitchOf: () => zMn, pluginTestFormOf: () => Eio, pluginTestGatesOf: () => vio, pluginTestRefusal: () => kio, savedFlags: () => GMn, sessionHoldsEarlyFetch: () => FMn, signInNearsExpiry: () => BMn, switchFetched: () => qMn, switchSaveSettled: () => KMn });
function Eio(e) {
  let r = e[0] === "--file", s = e.some((i) => i.startsWith("-"));
  return r ? "file" : s ? "other" : "run";
}
var NMn = false;
async function FMn() {
  let e = NL();
  return mse() || e?.policyHelpers != null || e?.policyHelper != null || import("./branch-mode-for-telemetry.7ap1.js").then((r) => r.pendingSettingsEnvBlocksEarlyGb(NMn));
}
var $Mn = () => Promise.resolve().then(FMn).catch(() => true);
var UMn = 6e4;
async function BMn() {
  let e = await al();
  return e !== null && iA(e.expiresAt, Date.now() + UMn);
}
var jMn = () => Promise.resolve().then(() => kc() || BMn()).catch(() => true);
function WMn() {
  if (oNe()) Ti().then(z6t, z6t);
}
var GMn = f(() => u({ cachedGrowthBookFeatures: me(o(), oe()).optional() }));
function zMn(e) {
  let r = GMn().safeParse(e), s = r.success ? r.data.cachedGrowthBookFeatures?.[j_] : void 0;
  return typeof s === "boolean" ? s : fx;
}
var VMn = "the rollout switch was fetched, but its value could not be saved for the test files to read: the settings file is busy or cannot be written. Run the tests again";
async function KMn() {
  return await Pe(Yvt(), zB), Adn() && Ob() && !YNr() && !zMn(await srt(void 0)) ? VMn : null;
}
var qMn = () => hSi().finally(WMn).then(KMn).catch((e) => (t("claude plugin test: the hold for the rollout flag failed: " + d(e), { level: "error" }), null));
async function vio({ helperError: e, form: r, envPin: s }) {
  if (r === "file") mSi();
  let i = e === null && r === "run", n = i ? (await t1e(s))?.reason ?? null : e, a = i && n === null && !Adn() && !await $Mn() && !await jMn() ? await qMn() : null;
  return await oQe(), { helperError: n ?? a, isRolloutOn: Ob(), isSwitchSaved: j0e(), canLoadUserModules: eFr() };
}
function kio({ helperError: e, isRolloutOn: r, isSwitchSaved: s, canLoadUserModules: i }) {
  if (e !== null) return e;
  if (!r) return s ? `hooks modules are turned off in this process: ${rQe.saved}. Start \`claude\` once with network access, then run the tests again; if this message returns, installed mods are turned off remotely` : `hooks modules are turned off in this process: ${rQe.served}, and a plugin's tests run only while it is on`;
  return i ? void 0 : "hooks modules are turned off here (disableAllHooks, allowManagedHooksOnly or a policy)";
}
export {
  $Mn,
  BMn,
  Cio,
  Eio,
  FMn,
  GMn,
  KMn,
  NMn,
  UMn,
  VMn,
  WMn,
  jMn,
  kio,
  qMn,
  vio,
  zMn
};
