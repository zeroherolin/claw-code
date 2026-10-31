// darwin/settings/drop-remote-managed-settings-consent-deferral.js — Claude Code 2.1.310（darwin）模块 chunk-zwm686k7.js
import { jKt, sxe, qir, c7o, W5r, OCt, XY, Yir, G5r, u7o, MCt, Cm, p7o, WKt, f7o, m7o, g7o, h7o, y7o, _7o, S7o, b7o, w7o, PI, E7o, Rse, Xir, qb, z5r, Cot, GKt, v7o, k7o, C7o, xse, lk, Tot, T7o, A7o, rci, oci, JY, PEn, p5, Jir, IEn, Aot, OEn, R7o, Qir, MEn, RS } from "../shell/invalid-type.js";
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
import "../fs/async-hooks.93b1.js";
import "../shared/chunk-50219e50.js";
export {
  sxe as HELPER_CONSENT_STATE_ID,
  jKt as SETTINGS_FILENAME,
  u7o as dropRemoteManagedSettingsConsentDeferral,
  PI as getEligibilityMemo,
  p7o as getGatewayThatVerifiedRemoteManagedSettings,
  qir as getHelperConsentPath,
  Rse as getIneligibleReason,
  qb as getLastLoadStatus,
  IEn as getMockRemoteSettingsFixturePath,
  Jir as getMockRemoteSettingsValue,
  Yir as getRemoteManagedSettingsConsentedBaseline,
  MEn as getRemoteManagedSettingsRawCache,
  RS as getRemoteManagedSettingsSyncFromCache,
  lk as getRemoteSettingsPathOverride,
  p5 as getSettingsPath,
  S7o as getStoredCopyTrust,
  b7o as getStoredCopyTrustedPrincipal,
  XY as getSyncCacheResetEpoch,
  v7o as hasLoadCycleBegun,
  Cot as hasLoadCycleEnded,
  h7o as hasPolicySettingsNotified,
  E7o as heldMachinePinsSignIn,
  c7o as helperConsentDigest,
  PEn as holdsNoServedSettings,
  JY as hostSessionSkipsSharedCache,
  Tot as isEvalPolicySnapshotOnly,
  rci as isProjectedSnapshot,
  Cm as isRemoteManagedSettingsVerified,
  WKt as isRemoteManagedSettingsVerifiedAndApprovedForSession,
  k7o as markLoadBackstopReleased,
  GKt as markLoadCycleBegun,
  z5r as markLoadCycleEnded,
  g7o as markPolicySettingsNotified,
  G5r as markRemoteManagedSettingsConsented,
  xse as onLastLoadStatusChanged,
  OEn as primeRemoteManagedSettingsCache,
  f7o as registerSyncCacheResetListener,
  w7o as rememberEligibility,
  Aot as remoteSettingsFileWritten,
  m7o as resetSyncCache,
  oci as restrictionsOfUnvouchedDocument,
  OCt as servedBodyOf,
  C7o as servedSettingsLoadLeftNoAnswer,
  T7o as setEvalPolicySnapshotOnly,
  Xir as setLastLoadStatus,
  MCt as setSessionCache,
  A7o as setSessionHybridOrganizationUuid,
  y7o as setStoredCopyGateInputs,
  _7o as setStoredCopyOrgPin,
  W5r as stripReservedKeys,
  Qir as unverifiedRemoteCacheWithholdsProvisions,
  R7o as withholdUnverifiedCacheKeys
};
