// settings/account-could-change-document.yt79.js — Claude Code 2.1.310 模块 chunk-yt796vmk.js
import "../shared/chunk-s56ftfc1.js";
import "./workflow-launch-exec.t4r2.js";
import "../models/claude-mythos-preview.rw6s.js";
import { rW, LEn, qSe, H7o, D7o, Epe, Ise, gEi, VKt, nar, n9r, dz, sFe, iFe, rar, hEi, ZY, aFe, LCt, NCt, r9r, FCt, om, lv, cqe, dv, oar, II, Oot, Ose, NEn, L7o, o9r, FEn, sar, S1, s9r, yEi, _Ei, i9r, N7o, $Ct, sC, mK, gT, vpe, Mot, dci, SEi, bEi, iar, F7o, wEi, EEi, a9r, l9r, d9r, $7o, U7o, B7o, j7o, $En, aW, W7o, c9r, G7o, z7o, V7o, eP, u9r, lFe, KKt, Hot, dFe, cci, uqe, pqe, cFe, UCt, p9r, YF, vEi, K7o, q7o, Y7o, aar, X7o, J7o, Q7o, Z7o, eJo, tJo, nJo, BCt, uci, uFe, rJo, f9r, pci, kEi, m9r, oJo, sJo, g9r, iJo, CEi, fci, mci, aJo, lJo, UEn, h9r, qKt, eX, y9r, TEi, AEi, HIi, DIi } from "../shell/invalid-type.qnva.js";
import "../permissions/quota-auto-resume-disabled.gt6d.js";
import "../permissions/classifier-transcript-too-long.8zvz.js";
import "../plugins/skills-dir.cemw.js";
import "../shared/chunk-xz73gv4f.js";
import "../fs/chunk-gzs70jxe.js";
import "../mcp/always-allow.9m89.js";
import "../mcp/chunk-ykcv164t.js";
import "../terminal/chunk-9vttrktj.js";
import "../shared/chunk-nyvhtfb3.js";
import "../fs/chunk-w461d8x8.js";
import "../shared/chunk-s06z5etx.js";
import "../fs/tempdir-owner-mismatch.5xe1.js";
import "../shared/async-hooks.923e.js";
import "../shared/chunk-abagh0tt.js";
import "../plugins/chunk-x0a7sawk.js";
import "../shared/chunk-81mpzfkq.js";
import "../shared/chunk-z6efcye4.js";
import "../git/chunk-q8vnfcnf.js";
import "../fs/not-utf8.sqq6.js";
import "../context/tool-result.evq2.js";
import "../fs/utf-8.7pve.js";
import "../shared/chunk-bhdett2m.js";
import "../shared/chunk-n07cvysj.js";
import "../remote/local-agent.we9a.js";
import "../shared/chunk-4kxy1036.js";
import "../shared/environment.9a41.js";
import "../fs/chunk-dz0rx1wn.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-j79dwkaq.js";
import "../fs/backed-up.p1qn.js";
import "../context/not-admin-owned.ersa.js";
import "../shared/chunk-9sbknd2z.js";
import "../shared/chunk-nrx8c90j.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../fs/node-modules.gp4v.js";
import "../shared/chunk-3y73jbfr.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "../shared/chunk-3kevgx4j.js";
import "../fs/chunk-kqpf5fh3.js";
import "../agents/third-party.ydpb.js";
import "../fs/async-hooks.9s1z.js";
import "../shared/chunk-x6r6k81p.js";
export {
  kEi as ADDED_TO_A_POLICY_ONLY_TIER,
  BCt as CREDENTIAL_HELPER_SETTINGS_KEYS,
  wEi as HOST_MANAGED_MODEL_ENV_KEYS,
  pci as KEPT_FROM_MACHINE_UNDER_POLICY_ONLY_TIER,
  uci as LAUNCH_FOLDER_WITHHELD_SETTINGS_KEYS,
  rar as MANAGED_ONLY_KEYS,
  lFe as MANAGED_SOURCE_NOTICE_LABELS,
  om as MAX_SETTINGS_JSON_BYTES,
  hEi as NON_MANAGED_DROPPED_KEYS,
  aFe as PARENT_MANAGED_SETTINGS_SOURCE_LABEL,
  rW as PATH_RULE_CARVE_OUT_RE,
  u9r as POLICY_HELPER_CONFIG_KEYS,
  LCt as RETENTION_POLICY_KEYS,
  sC as USER_SETTINGS_FILE_NAMES,
  bEi as WINNER_ONLY_NESTED_UNDER_MERGE,
  CEi as WINNER_ONLY_UNDER_MERGE,
  VKt as accountCouldChangeDocument,
  UCt as adminDocumentPresent,
  dci as adminTierComposesParent,
  D7o as allowListEntriesThatVouch,
  YF as armedHelperOutput,
  dFe as authoredPolicyContent,
  l9r as availableModelsExactEntryWarnings,
  _Ei as canonicalRootIsOwnedByProcessUser,
  yEi as canonicalRootOwnerUids,
  cFe as combinedLoadState,
  a9r as deniedModelsEntryWarnings,
  cci as documentHasPolicyContent,
  nJo as getAdminAuthoredPolicySettings,
  X7o as getAdminPolicyTierSettings,
  aJo as getAdminTierEnvValue,
  $En as getAllPolicyTierSettings,
  U7o as getDeniedModelsPolicyOverrides,
  tJo as getDurablePolicyTierSettings,
  DIi as getEffectiveSettingSource,
  LEn as getEnabledSettingSources,
  q7o as getEveryMachineAdminTierSettings,
  B7o as getHostManagedModelPricing,
  j7o as getHostManagedToolSearchEnv,
  W7o as getHostPolicyLoginPins,
  AEi as getInitialSettings,
  vpe as getLegacyLocalSettingsFilePath,
  Y7o as getMachineAdminDocumentLoadErrors,
  m9r as getMachineAdminPolicyEnv,
  uFe as getMachineAdminPolicyTier,
  g9r as getMachineAdminPolicyTiers,
  K7o as getMachineAdminTierSettings,
  z7o as getManagedSourcesInEffect,
  p9r as getMergedPolicySources,
  $7o as getPairedPolicyModelOverrides,
  c9r as getPolicySettingsOrigin,
  gT as getRelativeSettingsFilePathForSource,
  iJo as getRemotePolicyTierWithKind,
  N7o as getRuleAnchorRootForSource,
  mK as getSettingsFilePathForSource,
  Mot as getSettingsForSource,
  UEn as getSettingsForSourceUncached,
  h9r as getSettingsParseErrorsForSource,
  FEn as getSettingsRootPathForSource,
  TEi as getSettingsWithErrors,
  HIi as getSettingsWithSources,
  G7o as getShadowedManagedSources,
  Q7o as getShadowedMcpPolicySources,
  sJo as getVouchedAdminPolicyTier,
  J7o as getVouchedPolicyTierSettings,
  n9r as handleFileSystemError,
  Hot as hasEffectivePolicyContent,
  KKt as hasPolicyContent,
  H7o as heldOffPluginIds,
  EEi as hostManagedModelOverlay,
  aW as isAdminPolicyOrigin,
  eJo as isForceRemoteSettingsRefreshConfigured,
  II as isInClaudeConfigHome,
  iFe as isInertManagedMcpServersNotice,
  aar as isMachineAdminDocumentUnreadable,
  f9r as isMachineAdminSourceUnread,
  gEi as isManagedSettingsDropInEntry,
  Ise as isManagedSettingsDropInName,
  V7o as isPolicySlotAdminOrParentComposed,
  uqe as isPolicyTier,
  F7o as keepRestrictiveFromParent,
  qSe as loadManagedFileSettings,
  nar as loadManagedFileSettingsFromDir,
  lJo as loadPolicySettings,
  y9r as loadSettingsFromDisk,
  pqe as loadStateOf,
  s9r as localSettingsStoreRootBeforeOwnership,
  Oot as logMissingSettingsFile,
  rJo as machineAdminMayPinSignInOrg,
  oJo as machinePolicyKeepsPriority,
  Epe as managedFileSettingsDirs,
  o9r as mdmPolicyErrors,
  qKt as mergeExtraKnownMarketplacesByEntry,
  vEi as mergeHelperOutputOverBase,
  Ose as missingSettingsFileResult,
  i9r as normalizedRealHomeDir,
  Z7o as parentManagedTierParticipates,
  FCt as parseInlineFlagSettings,
  NCt as parseParentManagedSettings,
  r9r as parseParentTierWithOrganization,
  sFe as parsePolicyObjectTolerant,
  ZY as parseRemoteManagedSettings,
  dv as parseSettingsContent,
  dz as parseSettingsFile,
  cqe as parseSettingsFileIfChanged,
  lv as parseSettingsFileUncached,
  iar as readSettingsPath,
  sar as requireCwd,
  S1 as resolveLocalSettingsStoreRoot,
  eP as resolvePolicySettings,
  eX as settingsMergeCustomizer,
  SEi as shouldIncludeParentTier,
  d9r as stripHostManagedModelKeys,
  mci as unionAdminTierEnv,
  oar as unparseablePolicyDocumentError,
  NEn as unreadableSettingsFileError,
  L7o as unreadableWslFlagWithoutPolicyError,
  $Ct as userSettingsHomes,
  fci as winnerOnlyUnderMerge
};
