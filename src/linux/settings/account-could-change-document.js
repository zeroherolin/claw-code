// linux/settings/account-could-change-document.js — Claude Code 2.1.310（linux）模块 chunk-9t8ct243.js
import "./workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import "../models/claude-mythos-preview.js";
import { qj, Svn, jbe, rJo, oJo, gfe, Ese, Owi, Mqt, $ir, O6r, e2, ZNe, e$e, Fir, Mwi, z9, t$e, RTt, xTt, M6r, PTt, om, aE, n4e, lE, Uir, CI, Tot, kse, wvn, sJo, D6r, vvn, Bir, mB, H6r, Dwi, Hwi, L6r, iJo, ITt, rT, oq, fA, hfe, Aot, Adi, Lwi, Nwi, jir, aJo, $wi, Fwi, N6r, $6r, F6r, lJo, dJo, cJo, uJo, Evn, Qj, fJo, U6r, pJo, mJo, gJo, Qx, B6r, n$e, Dqt, Cot, r$e, Cdi, r4e, o4e, o$e, OTt, j6r, z$, Uwi, hJo, yJo, _Jo, Wir, bJo, SJo, wJo, vJo, EJo, kJo, TJo, MTt, Rdi, s$e, AJo, W6r, xdi, Bwi, G6r, CJo, RJo, z6r, xJo, jwi, Pdi, Idi, PJo, IJo, kvn, K6r, Hqt, K9, V6r, Wwi, Gwi, XPi, JPi } from "../shell/invalid-type.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../permissions/classifier-transcript-too-long.js";
import "../plugins/skills-dir.js";
import "../shared/chunk-1b1c4439.js";
import "../fs/chunk-86be9585.js";
import "../mcp/always-allow.js";
import "../mcp/chunk-0e2a1db6.js";
import "../terminal/chunk-3ca478a4.js";
import "../shared/chunk-2fe3b2b7.js";
import "../fs/chunk-475c6783.js";
import "../shared/chunk-cc3baac1.js";
import "../fs/tempdir-owner-mismatch.js";
import "../shared/async-hooks.9e79.js";
import "../shared/chunk-4563156b.js";
import "../plugins/chunk-0a4c51cf.js";
import "../shared/chunk-1f805b50.js";
import "../shared/chunk-8eee6836.js";
import "../git/chunk-c16cb6b4.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../fs/utf-8.8f8e.js";
import "../shared/chunk-8bf008d9.js";
import "../shared/chunk-6da6c5a3.js";
import "../remote/local-agent.js";
import "../shared/chunk-de56f88d.js";
import "../shared/environment.js";
import "../fs/chunk-ce5d00cd.js";
import "../auth/oauth-2025-04-20.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-d2c47492.js";
import "../fs/backed-up.js";
import "../context/not-admin-owned.js";
import "../shared/chunk-3b9c376b.js";
import "../shared/chunk-0870a9b4.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../fs/async-hooks.93b1.js";
import "../shared/chunk-50219e50.js";
export {
  Bwi as ADDED_TO_A_POLICY_ONLY_TIER,
  MTt as CREDENTIAL_HELPER_SETTINGS_KEYS,
  $wi as HOST_MANAGED_MODEL_ENV_KEYS,
  xdi as KEPT_FROM_MACHINE_UNDER_POLICY_ONLY_TIER,
  Rdi as LAUNCH_FOLDER_WITHHELD_SETTINGS_KEYS,
  Fir as MANAGED_ONLY_KEYS,
  n$e as MANAGED_SOURCE_NOTICE_LABELS,
  om as MAX_SETTINGS_JSON_BYTES,
  Mwi as NON_MANAGED_DROPPED_KEYS,
  t$e as PARENT_MANAGED_SETTINGS_SOURCE_LABEL,
  qj as PATH_RULE_CARVE_OUT_RE,
  B6r as POLICY_HELPER_CONFIG_KEYS,
  RTt as RETENTION_POLICY_KEYS,
  rT as USER_SETTINGS_FILE_NAMES,
  Nwi as WINNER_ONLY_NESTED_UNDER_MERGE,
  jwi as WINNER_ONLY_UNDER_MERGE,
  Mqt as accountCouldChangeDocument,
  OTt as adminDocumentPresent,
  Adi as adminTierComposesParent,
  oJo as allowListEntriesThatVouch,
  z$ as armedHelperOutput,
  r$e as authoredPolicyContent,
  $6r as availableModelsExactEntryWarnings,
  Hwi as canonicalRootIsOwnedByProcessUser,
  Dwi as canonicalRootOwnerUids,
  o$e as combinedLoadState,
  N6r as deniedModelsEntryWarnings,
  Cdi as documentHasPolicyContent,
  TJo as getAdminAuthoredPolicySettings,
  bJo as getAdminPolicyTierSettings,
  PJo as getAdminTierEnvValue,
  Evn as getAllPolicyTierSettings,
  dJo as getDeniedModelsPolicyOverrides,
  kJo as getDurablePolicyTierSettings,
  JPi as getEffectiveSettingSource,
  Svn as getEnabledSettingSources,
  yJo as getEveryMachineAdminTierSettings,
  cJo as getHostManagedModelPricing,
  uJo as getHostManagedToolSearchEnv,
  fJo as getHostPolicyLoginPins,
  Gwi as getInitialSettings,
  hfe as getLegacyLocalSettingsFilePath,
  _Jo as getMachineAdminDocumentLoadErrors,
  G6r as getMachineAdminPolicyEnv,
  s$e as getMachineAdminPolicyTier,
  z6r as getMachineAdminPolicyTiers,
  hJo as getMachineAdminTierSettings,
  mJo as getManagedSourcesInEffect,
  j6r as getMergedPolicySources,
  lJo as getPairedPolicyModelOverrides,
  U6r as getPolicySettingsOrigin,
  fA as getRelativeSettingsFilePathForSource,
  xJo as getRemotePolicyTierWithKind,
  iJo as getRuleAnchorRootForSource,
  oq as getSettingsFilePathForSource,
  Aot as getSettingsForSource,
  kvn as getSettingsForSourceUncached,
  K6r as getSettingsParseErrorsForSource,
  vvn as getSettingsRootPathForSource,
  Wwi as getSettingsWithErrors,
  XPi as getSettingsWithSources,
  pJo as getShadowedManagedSources,
  wJo as getShadowedMcpPolicySources,
  RJo as getVouchedAdminPolicyTier,
  SJo as getVouchedPolicyTierSettings,
  O6r as handleFileSystemError,
  Cot as hasEffectivePolicyContent,
  Dqt as hasPolicyContent,
  rJo as heldOffPluginIds,
  Fwi as hostManagedModelOverlay,
  Qj as isAdminPolicyOrigin,
  EJo as isForceRemoteSettingsRefreshConfigured,
  CI as isInClaudeConfigHome,
  e$e as isInertManagedMcpServersNotice,
  Wir as isMachineAdminDocumentUnreadable,
  W6r as isMachineAdminSourceUnread,
  Owi as isManagedSettingsDropInEntry,
  Ese as isManagedSettingsDropInName,
  gJo as isPolicySlotAdminOrParentComposed,
  r4e as isPolicyTier,
  aJo as keepRestrictiveFromParent,
  jbe as loadManagedFileSettings,
  $ir as loadManagedFileSettingsFromDir,
  IJo as loadPolicySettings,
  V6r as loadSettingsFromDisk,
  o4e as loadStateOf,
  H6r as localSettingsStoreRootBeforeOwnership,
  Tot as logMissingSettingsFile,
  AJo as machineAdminMayPinSignInOrg,
  CJo as machinePolicyKeepsPriority,
  gfe as managedFileSettingsDirs,
  D6r as mdmPolicyErrors,
  Hqt as mergeExtraKnownMarketplacesByEntry,
  Uwi as mergeHelperOutputOverBase,
  kse as missingSettingsFileResult,
  L6r as normalizedRealHomeDir,
  vJo as parentManagedTierParticipates,
  PTt as parseInlineFlagSettings,
  xTt as parseParentManagedSettings,
  M6r as parseParentTierWithOrganization,
  ZNe as parsePolicyObjectTolerant,
  z9 as parseRemoteManagedSettings,
  lE as parseSettingsContent,
  e2 as parseSettingsFile,
  n4e as parseSettingsFileIfChanged,
  aE as parseSettingsFileUncached,
  jir as readSettingsPath,
  Bir as requireCwd,
  mB as resolveLocalSettingsStoreRoot,
  Qx as resolvePolicySettings,
  K9 as settingsMergeCustomizer,
  Lwi as shouldIncludeParentTier,
  F6r as stripHostManagedModelKeys,
  Idi as unionAdminTierEnv,
  Uir as unparseablePolicyDocumentError,
  wvn as unreadableSettingsFileError,
  sJo as unreadableWslFlagWithoutPolicyError,
  ITt as userSettingsHomes,
  Pdi as winnerOnlyUnderMerge
};
