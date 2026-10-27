// plugins/chunk-hxt89a41.js — Claude Code 2.1.310 模块 chunk-hxt89a41.js
import { He } from "../fs/async-hooks.9s1z.js";
import { U } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { Ps } from "../shared/chunk-bkvejkkf.js";
var htr = Object.freeze({ open: Object.freeze([]), unplaced: Object.freeze([]), asked: Object.freeze([]), shownId: null, focusedId: null, focusRequest: null, placements: 0, closing: Object.freeze([]) });
var NKo = () => ({ values: Ps(/* @__PURE__ */ new Map()), readers: /* @__PURE__ */ new Map(), readersOf: /* @__PURE__ */ new Map(), mounted: /* @__PURE__ */ new Map(), folds: { steady: { stale: /* @__PURE__ */ new Set(), lastAt: Number.NEGATIVE_INFINITY, pending: void 0 }, live: { stale: /* @__PURE__ */ new Set(), lastAt: Number.NEGATIVE_INFINITY, pending: void 0 } }, staleListeners: /* @__PURE__ */ new Set(), faultRuns: /* @__PURE__ */ new Map(), bumps: 0, versionFloor: 0 });
var FKo = () => ({ pending: void 0, pausedAt: void 0 });
function s() {
  return { pluginLoad: void 0, pluginLoadArm: void 0, pluginLoadCacheOnly: void 0, pluginLoadCacheOnlyArm: void 0, pluginLoadMarks: /* @__PURE__ */ new WeakMap(), commands: void 0, skills: void 0, skillsV5: void 0, agents: void 0, handedIn: void 0, outputStyles: void 0, workflows: void 0, hookRegistration: void 0, organizationAsk: { isHeld: false, isWaited: false, isTold: false, startHooksWait: void 0, isBoundSpent: false, hasHeld: false, isCommandHeld: false, heldReresolve: null, isMarketplaceHeld: false, asking: null, answerWait: null }, admissionText: null, isJudgedAgainTold: false, hookModulesAwaitTrust: false, hookRegistrationInFlight: void 0, hookRegistrationsInFlight: /* @__PURE__ */ new Set(), hooksLoadAtStartup: void 0, hookRegistrationOwed: false, hooksUnknownCause: void 0, hookRegistrationRanBlind: false, pluginsWithHooks: /* @__PURE__ */ new Set(), folderReadAt: /* @__PURE__ */ new Map(), hookRegistrationEpoch: 0, hookSwapEpoch: 0, hooksModulesSwitchRead: void 0, hooksModulesSwitchFollowing: void 0, hooksModulesSwitchRereading: void 0, hooksModulesWakeBound: "ahead", organizationsStatusLoad: void 0, unlatchedAbsentManagedIds: /* @__PURE__ */ new Set(), hooksLeftOutByName: [], hooksLeftOutByNameChanged: He(), hookRegistrationEnded: He(), hookRegistrationArgs: void 0, hookHotReloadUnsubscribe: void 0, hooksModulesSwitchUnwatch: void 0, hookHotReloadSettingsSnapshot: void 0, hookHotReloadTierSnapshot: void 0, hooksRespawns: /* @__PURE__ */ new Set(), loadedModules: [], moduleSeats: /* @__PURE__ */ new Map(), notices: Ps(/* @__PURE__ */ new Map()), openCalls: /* @__PURE__ */ new Map(), withheldCalls: /* @__PURE__ */ new Set(), withheldWatches: /* @__PURE__ */ new Map(), spawnProvenance: /* @__PURE__ */ new Map(), unnamedSteered: /* @__PURE__ */ new Set(), registeredAgents: /* @__PURE__ */ new Map(), renderVersions: Ps(/* @__PURE__ */ new Map()), panes: Ps(htr), pluginState: NKo(), toastClock: FKo(), hoverGroups: Ps(/* @__PURE__ */ new Map()), scrollSites: /* @__PURE__ */ new Map(), focusSites: /* @__PURE__ */ new Map(), focusSiteDraws: He(), mountedRasters: /* @__PURE__ */ new Map(), mountedImages: /* @__PURE__ */ new Map(), rasterAdmission: void 0, uiLogSink: null, pendingUiLog: [], armedMonitorKeys: /* @__PURE__ */ new Set(), hooksPassedBy: /* @__PURE__ */ new Map(), marketplaces: /* @__PURE__ */ new Map(), marketplaceRefreshesInFlight: /* @__PURE__ */ new Map(), marketplaceHelperMemo: /* @__PURE__ */ new Map(), addDirMarketplacesMemo: void 0, headlessInstallPass: void 0, installedPluginsMigrated: false, installedPluginsFile: null, installedPluginsEpoch: 0, recordSpellingsCounted: false, recordSpellingFallbackReported: false, installedPluginsSnapshot: null, optionValues: /* @__PURE__ */ new Map(), flaggedPlugins: null, orphanedVersionGlobExclusions: null, recentActivity: [], pluginActivityFeatures: /* @__PURE__ */ new Map(), autoUpdateListener: null, commandSourceReresolve: null, pendingAutoUpdateNotification: null, ownInUseMarkerPaths: /* @__PURE__ */ new Set(), ownInUseMarkerHandles: /* @__PURE__ */ new Map(), commandProducerDirsDenied: /* @__PURE__ */ new Set(), commandProducerDirsScannedAt: 0, commandProducerDirsComparable: null, commandProducerDirsNeedCanonicalCandidate: false, commandProducerDirsWslProviderUndeterminable: false, commandProducerDirsChanged: He(), denyJoinedPluginRoot: void 0, sandboxBringUp: void 0, inUseMarkerCleanup: void 0, vouchedManagedPluginIds: /* @__PURE__ */ new Set(), hintedPluginIds: /* @__PURE__ */ new Set(), seenHintPluginIds: /* @__PURE__ */ new Set(), gitAvailable: void 0, operatorDeclaredMemo: void 0, marketplaceResolutionNoticesLogged: /* @__PURE__ */ new Set(), marketplaceAdmissionVerdicts: /* @__PURE__ */ new Map(), hiddenRegistryEntries: { raw: /* @__PURE__ */ new Map(), v5: /* @__PURE__ */ new Map() }, releasedRegistryEntries: { raw: /* @__PURE__ */ new Set(), v5: /* @__PURE__ */ new Set() }, cacheRootComparableMemo: void 0, provenLocalRoots: /* @__PURE__ */ new Map(), wslProviderOfPluginsRootMemo: void 0, inlinePluginRootsComparableMemo: void 0 };
}
class n {
  registry = s();
}
var a = new W(() => new n());
function r() {
  return a.of(U().host);
}
function Ie() {
  return r().registry;
}
function rti(e) {
  return Ie().registeredAgents.has(e);
}
function ytr() {
  return Ie().pluginLoadCacheOnly;
}
function _tr() {
  Ie().commands = void 0;
}
function vVr() {
  let e = Ie();
  e.skills = void 0, e.skillsV5 = void 0;
}
function FEt() {
  Ie().agents = void 0;
}
function Str() {
  Ie().outputStyles = void 0;
}
function t_n() {
  Ie().workflows = void 0;
}
export {
  FEt,
  FKo,
  Ie,
  NKo,
  Str,
  _tr,
  htr,
  rti,
  t_n,
  vVr,
  ytr
};
