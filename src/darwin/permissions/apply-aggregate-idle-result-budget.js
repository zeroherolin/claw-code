// darwin/permissions/apply-aggregate-idle-result-budget.js — Claude Code 2.1.310（darwin）模块 chunk-xcf8kdhq.js
import { qRi, WSi, U2, QQe, ZQe, qE, G$r, hHe, mU, yHe, r9n, aun, EGe, sye, NNo, kKs, Wde, lun, eZe, iV, L3, CKs, GSi, gU, Hv, Y1t, o9n, FNo, s9n, dun, cE, zSi, i9n, VSi, KSi, X1t, i_t, hU, iye, Rh, jJ, J1t, TKs, qSi, $No, UNo, z$r, Q1t, BNo, jNo, V$r, K$r, q$r, Y$r, X$r, Z1t, WNo, GNo, zNo, VNo, a_t, a9n, _He, YSi, cun, uun, pun, KNo, eBt, J$r, FO, tBt, qNo, fun, YNo, cF, mun, XSi, nBt, XNo, gun, l9n, JNo } from "../context/envelope-pinned-id.js";
import "../shared/general-purpose.js";
import "../shared/chunk-bfd2df5f.js";
import "../shell/chunk-e0b62862.js";
import "../shared/chunk-725c984c.js";
import "./chunk-42a3174d.js";
import "../agents/session-stable-address.js";
import "../fs/reply-across-default-dirs.js";
import "../agents/in-process-teammate.32be.js";
import "../fs/chunk-b6c2193e.js";
import "../fs/chunk-21654dda.js";
import "../git/ssh-placeholder.js";
import "../shared/chunk-537f65d6.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../context/fetch-project-timeline.js";
import "../mcp/claude-browser.js";
import "../shared/chunk-dda594a8.js";
import "../shared/chunk-f98598c3.js";
import "../shared/chunk-6ae01e90.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../shell/spawn-error.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/workflow-launch-exec.js";
import "../models/total-tokens-reminder.js";
import "../models/claude-mythos-preview.js";
import "../shell/invalid-type.js";
import "./quota-auto-resume-disabled.js";
import "./classifier-transcript-too-long.js";
import "../plugins/skills-dir.js";
import "../shared/chunk-1b1c4439.js";
import "../fs/chunk-86be9585.js";
import "../mcp/always-allow.js";
import "../mcp/chunk-0e2a1db6.js";
import "../terminal/chunk-3ca478a4.js";
import "../auth/profile-explicit.js";
import "../shared/chunk-2fe3b2b7.js";
import "../fs/chunk-475c6783.js";
import "../fs/ca-certs-load.js";
import "../fs/content-encoding.js";
import "../remote/self-hosted.js";
import "../shared/sk-ant-sid.js";
import "../auth/descriptor-direct.js";
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
  TKs as ApprovedPermissionRequestSchema,
  NNo as FAILURE_REASON_MAX_LENGTH,
  dun as FRAME_SANITIZED_FOR_DISPLAY_MARKER,
  Y1t as IDLE_FRAME_TOTAL_RECEIVE_BOUND,
  Hv as IDLE_ID_FIELD_RECEIVE_BOUND,
  L3 as IDLE_RESULT_MAX_LENGTH,
  CKs as IDLE_RESULT_TOTAL_BUDGET,
  gU as IDLE_SUMMARY_RECEIVE_BOUND,
  s9n as INVALID_ID_MARKER,
  FNo as INVALID_TIMESTAMP_MARKER,
  sye as IdleNotificationMessageSchema,
  hHe as MARK_READ_FAILURE_CAP,
  eZe as PLAN_CONTENT_DISPLAY_BOUND,
  YNo as PROTOCOL_FRAME_PROMPT_ERROR,
  qSi as PermissionResponseMessageSchema,
  q$r as PlanApprovalRequestMessageSchema,
  Y$r as PlanApprovalResponseMessageSchema,
  zSi as STRUCTURED_FRAME_RECEIVE_SPECS,
  kKs as SUMMARY_DISPLAY_MAX_LENGTH,
  Z1t as ShutdownApprovedMessageSchema,
  WNo as ShutdownRejectedMessageSchema,
  X$r as ShutdownRequestMessageSchema,
  eBt as TaskCompletedMessageSchema,
  J$r as TeammateTerminatedMessageSchema,
  YSi as UNBOUND_PLAN_VERDICT_HONOURED,
  cE as UNKNOWN_SENDER,
  KSi as applyAggregateIdleResultBudget,
  lun as capFailureReasonForDisplay,
  iV as capFrameBodyForDisplay,
  Wde as capFrameFieldForDisplay,
  Rh as capIdFrameField,
  GSi as capIdleResult,
  jJ as capRawFrameTextForDisplay,
  o9n as capReceivedIdleResult,
  iye as capStrippedFrameField,
  r9n as clearMailbox,
  X1t as createIdleNotification,
  $No as createPermissionRequestMessage,
  UNo as createPermissionResponseMessage,
  BNo as createSandboxPermissionRequestMessage,
  jNo as createSandboxPermissionResponseMessage,
  zNo as createShutdownApprovedMessage,
  VNo as createShutdownRejectedMessage,
  GNo as createShutdownRequestMessage,
  qRi as flushPendingMailboxPrunes,
  aun as formatTeammateMessage,
  EGe as formatTeammateMessages,
  U2 as getInboxPath,
  JNo as getLastPeerDmSummary,
  VSi as idleFrameRecency,
  XNo as isHeadlessLeadDisplayableMessage,
  J1t as isIdleNotification,
  fun as isModeSetRequest,
  z$r as isPermissionRequest,
  Q1t as isPermissionResponse,
  a9n as isPlanApprovalRequest,
  pun as isPlanApprovalResponse,
  V$r as isSandboxPermissionRequest,
  K$r as isSandboxPermissionResponse,
  _He as isShutdownApproved,
  a_t as isShutdownRequest,
  cF as isStructuredProtocolMessage,
  KNo as isTaskAssignment,
  qNo as isTeamPermissionUpdate,
  l9n as isTeammateWakeupPrompt,
  i_t as logIdleResultDeliveryOutcome,
  yHe as markMessagesAsRead,
  gun as markMessagesAsReadByPredicate,
  G$r as markSingleMessageAsRead,
  mU as messageIdentityKey,
  FO as parseFrameForDisplay,
  mun as planApprovalResumeText,
  cun as planVerdictBinding,
  uun as planVerdictMismatchRejection,
  WSi as pruneInvalidMailboxEntries,
  QQe as readMailbox,
  ZQe as readUnreadMessages,
  i9n as sanitizeReceivedStructuredFrame,
  XSi as shutdownRequestReplyInstructions,
  hU as stripFrameControlChars,
  tBt as visibleTeammateMailboxMessages,
  nBt as withShutdownReplyInstructions,
  qE as writeToMailbox
};
