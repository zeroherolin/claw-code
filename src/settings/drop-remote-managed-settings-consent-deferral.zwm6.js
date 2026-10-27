// settings/drop-remote-managed-settings-consent-deferral.zwm6.js — Claude Code 2.1.310 模块 chunk-zwm686k7.js
import { jKt, sxe, qir, c7o, W5r, OCt, XY, Yir, G5r, u7o, MCt, Cm, p7o, WKt, f7o, m7o, g7o, h7o, y7o, _7o, S7o, b7o, w7o, PI, E7o, Rse, Xir, qb, z5r, Cot, GKt, v7o, k7o, C7o, xse, lk, Tot, T7o, A7o, rci, oci, JY, PEn, p5, Jir, IEn, Aot, OEn, R7o, Qir, MEn, RS } from "../shell/invalid-type.qnva.js";
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
