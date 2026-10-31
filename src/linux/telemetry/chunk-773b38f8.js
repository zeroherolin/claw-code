// linux/telemetry/chunk-773b38f8.js — Claude Code 2.1.310（linux）模块 chunk-ps0xnm7j.js
import { d } from "./anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { ase, M0 } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { rC, kc, il, B_, Q0e, Ai, MKt, jEt, Qnt } from "../settings/global-config-and-gates.js";
import { Adt } from "../settings/chunk-275ba5ad.js";
import { cx, XQe, IS, DNr } from "./chunk-d4426fa7.js";
import { LDe, pdn, I_i, M_i, YQe, xNr } from "../hooks/plugin-function-hooks-switch-followed.js";
import { F1 } from "./started-after-init-empty.js";
import { o, oe, u, me } from "../vendor/zod/string-format.js";
import { $r } from "../vendor/react/chunk-0b0bf45d.js";
var Yso = {};
$r(Yso, { IS_WORKTREE_LAUNCH: () => bMn, SAVE_FAILURE: () => RMn, SIGN_IN_MARGIN_MS: () => vMn, default: () => Yso, earlyFetchVetoed: () => wMn, fetchRefreshesSignIn: () => kMn, flagClientQuieted: () => TMn, isSavedSwitchOf: () => CMn, pluginTestFormOf: () => Kso, pluginTestGatesOf: () => Vso, pluginTestRefusal: () => qso, savedFlags: () => AMn, sessionHoldsEarlyFetch: () => SMn, signInNearsExpiry: () => EMn, switchFetched: () => PMn, switchSaveSettled: () => xMn });
function Kso(e) {
  let r = e[0] === "--file", s = e.some((i) => i.startsWith("-"));
  return r ? "file" : s ? "other" : "run";
}
var bMn = false;
async function SMn() {
  let e = M0();
  return ase() || e?.policyHelpers != null || e?.policyHelper != null || import("./branch-mode-for-telemetry.js").then((r) => r.pendingSettingsEnvBlocksEarlyGb(bMn));
}
var wMn = () => Promise.resolve().then(SMn).catch(() => true);
var vMn = 6e4;
async function EMn() {
  let e = await il();
  return e !== null && rC(e.expiresAt, Date.now() + vMn);
}
var kMn = () => Promise.resolve().then(() => kc() || EMn()).catch(() => true);
function TMn() {
  if (Q0e()) Ai().then(MKt, MKt);
}
var AMn = p(() => u({ cachedGrowthBookFeatures: me(o(), oe()).optional() }));
function CMn(e) {
  let r = AMn().safeParse(e), s = r.success ? r.data.cachedGrowthBookFeatures?.[B_] : void 0;
  return typeof s === "boolean" ? s : cx;
}
var RMn = "the rollout switch was fetched, but its value could not be saved for the test files to read: the settings file is busy or cannot be written. Run the tests again";
async function xMn() {
  return await Pe(jEt(), F1), pdn() && IS() && !xNr() && !CMn(await Qnt(void 0)) ? RMn : null;
}
var PMn = () => M_i().finally(TMn).then(xMn).catch((e) => (t("claude plugin test: the hold for the rollout flag failed: " + d(e), { level: "error" }), null));
async function Vso({ helperError: e, form: r, envPin: s }) {
  if (r === "file") I_i();
  let i = e === null && r === "run", n = i ? (await Adt(s))?.reason ?? null : e, a = i && n === null && !pdn() && !await wMn() && !await kMn() ? await PMn() : null;
  return await XQe(), { helperError: n ?? a, isRolloutOn: IS(), isSwitchSaved: LDe(), canLoadUserModules: DNr() };
}
function qso({ helperError: e, isRolloutOn: r, isSwitchSaved: s, canLoadUserModules: i }) {
  if (e !== null) return e;
  if (!r) return s ? `hooks modules are turned off in this process: ${YQe.saved}. Start \`claude\` once with network access, then run the tests again; if this message returns, installed mods are turned off remotely` : `hooks modules are turned off in this process: ${YQe.served}, and a plugin's tests run only while it is on`;
  return i ? void 0 : "hooks modules are turned off here (disableAllHooks, allowManagedHooksOnly or a policy)";
}
export {
  AMn,
  CMn,
  EMn,
  Kso,
  PMn,
  RMn,
  SMn,
  TMn,
  Vso,
  Yso,
  bMn,
  kMn,
  qso,
  vMn,
  wMn,
  xMn
};
