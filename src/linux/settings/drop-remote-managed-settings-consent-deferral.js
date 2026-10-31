// linux/settings/drop-remote-managed-settings-consent-deferral.js — Claude Code 2.1.310（linux）模块 chunk-atrc3zha.js
import { xqt, exe, Pir, MXo, b6r, kTt, j9, Iir, S6r, DXo, TTt, Tm, HXo, Pqt, LXo, NXo, $Xo, FXo, UXo, BXo, jXo, WXo, GXo, AI, zXo, Sse, Oir, VS, w6r, _ot, Iqt, KXo, VXo, qXo, wse, ak, bot, YXo, XXo, Sdi, wdi, W9, mvn, n6, Mir, gvn, Sot, hvn, JXo, Dir, yvn, Cb } from "../shell/invalid-type.js";
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
  exe as HELPER_CONSENT_STATE_ID,
  xqt as SETTINGS_FILENAME,
  DXo as dropRemoteManagedSettingsConsentDeferral,
  AI as getEligibilityMemo,
  HXo as getGatewayThatVerifiedRemoteManagedSettings,
  Pir as getHelperConsentPath,
  Sse as getIneligibleReason,
  VS as getLastLoadStatus,
  gvn as getMockRemoteSettingsFixturePath,
  Mir as getMockRemoteSettingsValue,
  Iir as getRemoteManagedSettingsConsentedBaseline,
  yvn as getRemoteManagedSettingsRawCache,
  Cb as getRemoteManagedSettingsSyncFromCache,
  ak as getRemoteSettingsPathOverride,
  n6 as getSettingsPath,
  jXo as getStoredCopyTrust,
  WXo as getStoredCopyTrustedPrincipal,
  j9 as getSyncCacheResetEpoch,
  KXo as hasLoadCycleBegun,
  _ot as hasLoadCycleEnded,
  FXo as hasPolicySettingsNotified,
  zXo as heldMachinePinsSignIn,
  MXo as helperConsentDigest,
  mvn as holdsNoServedSettings,
  W9 as hostSessionSkipsSharedCache,
  bot as isEvalPolicySnapshotOnly,
  Sdi as isProjectedSnapshot,
  Tm as isRemoteManagedSettingsVerified,
  Pqt as isRemoteManagedSettingsVerifiedAndApprovedForSession,
  VXo as markLoadBackstopReleased,
  Iqt as markLoadCycleBegun,
  w6r as markLoadCycleEnded,
  $Xo as markPolicySettingsNotified,
  S6r as markRemoteManagedSettingsConsented,
  wse as onLastLoadStatusChanged,
  hvn as primeRemoteManagedSettingsCache,
  LXo as registerSyncCacheResetListener,
  GXo as rememberEligibility,
  Sot as remoteSettingsFileWritten,
  NXo as resetSyncCache,
  wdi as restrictionsOfUnvouchedDocument,
  kTt as servedBodyOf,
  qXo as servedSettingsLoadLeftNoAnswer,
  YXo as setEvalPolicySnapshotOnly,
  Oir as setLastLoadStatus,
  TTt as setSessionCache,
  XXo as setSessionHybridOrganizationUuid,
  UXo as setStoredCopyGateInputs,
  BXo as setStoredCopyOrgPin,
  b6r as stripReservedKeys,
  Dir as unverifiedRemoteCacheWithholdsProvisions,
  JXo as withholdUnverifiedCacheKeys
};
