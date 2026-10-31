// darwin/onboarding/admin-policy-load-failure-refuses-launch.js — Claude Code 2.1.310（darwin）模块 chunk-s893dt1e.js
import { dEi, kS, i5r, cEi, uEi, TIi, CYo, ln, ek, UNe, $h, mg, Zrt, TYo, jwn, AYo, eot, RYo, AIi, fe, gse, xYo, PYo, IYo, kI, pEi, GKe, fEi, Wwn, pKt, lCt, xZ, fKt, OYo, Usr, MYo, HYo, DYo, LYo, dCt, tot, RIi, NYo, JRe, FYo, $Yo, UYo, Gwn, BYo, xIi, PIi, IIi, OIi, a5r, Gf, zwn, jYo, ISe, Bsr, zKe, l5r, WYo, BNe, GYo, ppe, QRe, zYo, fpe, d5r, hse, jsr, VYo, KYo, mt, fr, c5r, qx, Xm, qYo, NL, nz, Vwn, tk, mKt, ZRe, jNe, YYo, XYo, JYo, OSe, QYo, CS, a5, Wsr, ZYo, yse, WNe, Gsr, zsr, gKt, dK, eXo, Kwn, tXo, nXo, Un, wa, qwn, VKe, jli, rXo, Ywn, EM, mEi, VY, l5, not, u5r, exe, mpe, oXo, Vsr, sXo, cCt, uCt, Xwn, pCt, iXo, _se, KKe, CI, aXo, qKe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../shell/spawn-error.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/workflow-launch-exec.js";
import "../models/total-tokens-reminder.js";
import "../models/claude-mythos-preview.js";
import { lv, gT, aW, eX } from "../shell/invalid-type.js";
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
import "../remote/moved-directory.js";
import "../shared/chunk-cc3baac1.js";
import "../git/utf-8.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/async-hooks.7959.js";
import "../shared/chunk-d4196a83.js";
import "../shared/async-hooks.9e79.js";
import "../git/utf8-keep-bom.js";
import "../shared/chunk-4563156b.js";
import "../plugins/chunk-0a4c51cf.js";
import "../shared/chunk-1f805b50.js";
import "../shared/chunk-8eee6836.js";
import "../git/chunk-c16cb6b4.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../fs/utf-8.aa9a.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../fs/utf-8.8f8e.js";
import "../shell/chunk-fea9c492.js";
import "../shared/chunk-8bf008d9.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/async-hooks.5238.js";
import "../telemetry/chunk-9d6962d2.js";
import "../shared/chunk-6da6c5a3.js";
import "../cli/chunk-af2447be.js";
import "../mcp/init-function-end.js";
import "../shared/chunk-86ecf3aa.js";
import "../remote/local-agent.js";
import "../telemetry/chunk-9097a12b.js";
import "../shared/chunk-59ffb646.js";
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
import "../remote/chunk-95151620.js";
import "../fs/async-hooks.93b1.js";
import "../shared/chunk-50219e50.js";
export {
  KKe as AUTO_MODE_TRUSTED_SOURCES,
  pEi as BACKGROUND_SETTINGS_WORK_WAIT_MS,
  mEi as SECURITY_SENSITIVE_SETTING_SOURCES,
  dK as adminPolicyLoadFailureRefusesLaunch,
  eot as allowListEntriesThatVouch,
  QYo as anyAdminPolicyTierGovernsRetention,
  _se as autoModeConfigSchema,
  DYo as compareRepoTiersWithHeld,
  cEi as credentialHelperKeysFrom,
  VKe as drainSettingsWrites,
  WNe as filterFatalPolicyErrors,
  xIi as flagFileConsentDropped,
  RIi as flagInlineConsentDropped,
  NYo as flagInlineSettingDropped,
  hse as getAdminAuthoredPolicySettings,
  d5r as getAdminPolicyTierSettings,
  QRe as getAdminTierEnvValue,
  Gf as getAllPolicyTierSettings,
  UYo as getArmedHelperOutput,
  uCt as getAskUserQuestionTimeout,
  CI as getAutoModeConfig,
  NL as getBasePolicySettings,
  nz as getBasePolicySettingsOrigin,
  xYo as getDeniedModelsPolicyOverrides,
  Xwn as getDialogExpiry,
  fpe as getDurablePolicyTierSettings,
  qx as getEffectiveSettingSource,
  BNe as getEveryMachineAdminTierSettings,
  yse as getFatalAdminPolicyLoadErrors,
  AYo as getHeldOffPluginIds,
  PYo as getHostManagedModelPricing,
  IYo as getHostManagedToolSearchEnv,
  jNe as getHostPolicyLoginPins,
  mt as getInitialSettings,
  $h as getLegacyLocalSettingsFilePath,
  a5r as getLegacyLocalSettingsOverlay,
  Zrt as getLocalSettingsValidationErrors,
  YYo as getMachineAdminCredentialInputs,
  GYo as getMachineAdminDocumentLoadErrors,
  Bsr as getMachineAdminDocumentTier,
  RYo as getMachineAdminPolicyEnv,
  ISe as getMachineAdminPolicyTier,
  l5r as getMachineAdminPolicyTiers,
  WYo as getMachineAdminTierSettings,
  tXo as getManagedFileProtectionForLogging,
  qYo as getManagedFileSettingsPresence,
  rXo as getManagedSettingsKeysForLogging,
  JYo as getManagedSourcesInEffect,
  KYo as getMcpPolicyCompositionForLogging,
  jsr as getMcpPolicyView,
  Gwn as getMergedPolicySources,
  iXo as getModelProposedGoalsSetting,
  pCt as getModelProposedGoalsSettingParsed,
  gse as getPairedPolicyModelOverrides,
  FYo as getParsedParentManagedSettings,
  zYo as getPolicyEnvCompositionForLogging,
  a5 as getPolicyHelperSourceLoadErrors,
  CS as getPolicySettingsLoadErrors,
  tk as getPolicySettingsOrigin,
  PIi as getRawSettingFromRejectedSource,
  gT as getRelativeSettingsFilePathForSource,
  zKe as getRemotePolicyTierWithKind,
  UNe as getRuleAnchorRootForSource,
  EM as getSecuritySensitiveSetting,
  VY as getSecuritySensitiveSettingWithSources,
  Ywn as getSettingsAfterPluginLoad,
  ln as getSettingsFilePathForSource,
  fe as getSettingsForSource,
  kI as getSettingsForSourceWriteSeed,
  ek as getSettingsParseErrorsForSource,
  TIi as getSettingsRootPathForSource,
  Xm as getSettingsWithErrors,
  c5r as getSettingsWithSources,
  fr as getSettings_DEPRECATED,
  XYo as getShadowedManagedSources,
  VYo as getShadowedMcpPolicySources,
  BYo as getShadowedPolicyHelperSources,
  cCt as getUseAutoModeDuringPlan,
  ZRe as getVouchedAdminPolicyTier,
  mKt as getVouchedPolicyTierSettings,
  Wsr as hasAdminPolicyLoadRecords,
  oXo as hasAutoModeOptIn,
  mpe as hasDisableClaudeAiConnectors,
  exe as hasIsolatePeerMachines,
  ZYo as hasMachinePluginKeyLoadRecords,
  l5 as hasSkipDangerousModePermissionPrompt,
  u5r as hasSkipWorkflowUsageWarning,
  Gsr as hasSurvivingAdminPolicySource,
  not as hasVouchedSkipDangerousModePermissionPrompt,
  OYo as holdRepoTiers,
  aW as isAdminPolicyOrigin,
  zsr as isAdminPolicyUnreadable,
  aXo as isAutoModeClassifyAllShellEnabled,
  sXo as isDisabledAboveWorkloadFiles,
  Vwn as isForceRemoteSettingsRefreshConfigured,
  ppe as isMachineAdminDocumentUnreadable,
  Vsr as isNotDisabledInTrustedSources,
  gKt as isPermissionDeniedPolicyError,
  OSe as isPolicySlotAdminOrParentComposed,
  tot as isRepoTierAnsweredByACopy,
  dCt as isRepoTierFreezeHeld,
  i5r as isSettingsTierWithheld,
  uEi as launchFolderKeysFrom,
  OIi as legacyLocalConsentDropped,
  dEi as legacyLocalSettingsProbes,
  HYo as lingerRepoTiers,
  jwn as loadManagedFileSettings,
  CYo as localSettingsStoreRootAwaitingOwnershipProbe,
  nXo as logManagedDocumentLinks,
  zwn as machineAdminMayPinSignInOrg,
  jYo as machineAdminPinsSignInOrg,
  AIi as machinePolicyKeepsPriorityOver,
  Kwn as managedLinkWarningLines,
  JRe as parentManagedTierParticipates,
  $Yo as parentTierWithOrganizationLocksHooks,
  TYo as parseRemoteManagedSettings,
  kS as parseSettingsFile,
  lv as parseSettingsFileUncached,
  jli as projectRemovalsOnly,
  mg as projectSettingsAliasesUserSettings,
  qKe as rawSettingsKeyPresence,
  Wwn as readRepoDirSettingsFresh,
  xZ as readRepoTierFileText,
  fKt as readRepoTiersFresh,
  fEi as repoDirSettingsParses,
  pKt as repoTierFileLeadsAway,
  lCt as repoTierFileSlots,
  MYo as repoTierFolderKey,
  Usr as repoTiersFrom,
  qwn as runInSettingsWriteQueue,
  eX as settingsMergeCustomizer,
  GKe as settleBackgroundSettingsWork,
  IIi as sourceFileConsentDropped,
  eXo as surfaceManagedSettingsErrorsHeadless,
  Un as updateSettingsForSource,
  wa as updateSettingsForSourceWithTransform,
  LYo as withRepoTiersLive
};
