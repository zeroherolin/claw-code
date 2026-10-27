// artifacts/chunk-m8t7qekn.js — Claude Code 2.1.310 模块 chunk-m8t7qekn.js
import { U } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { mX } from "../shared/chunk-mzb69x1h.js";
class t {
  filterPolicy = void 0;
  dropNotifier = void 0;
  senderDropWriter = void 0;
  malformedConfigReported = false;
  knownInboundRequestIds = /* @__PURE__ */ new Set();
  knownOutboundRequestIds = /* @__PURE__ */ new Set();
  automatedOutboundRequestIds = /* @__PURE__ */ new Set();
  deviceOutboundRequestIds = /* @__PURE__ */ new Set();
  elicitationOutboundRequestIds = /* @__PURE__ */ new Set();
  hostAskOutboundRequestIds = /* @__PURE__ */ new Set();
  resolvedPromptRequestIds = /* @__PURE__ */ new Set();
  recentDropEventIds = /* @__PURE__ */ new Set();
  commandDropNoticeWindow = { start: 0, count: 0 };
  messageDropNoticeWindow = { start: 0, count: 0 };
  reportedStrayDropCodes = /* @__PURE__ */ new Set();
  reportedCloudWorkerCodes = /* @__PURE__ */ new Set();
  clearWindowsForTesting() {
    this.knownInboundRequestIds.clear(), this.knownOutboundRequestIds.clear(), this.automatedOutboundRequestIds.clear(), this.deviceOutboundRequestIds.clear(), this.elicitationOutboundRequestIds.clear(), this.hostAskOutboundRequestIds.clear(), this.resolvedPromptRequestIds.clear(), this.recentDropEventIds.clear(), this.commandDropNoticeWindow.start = 0, this.commandDropNoticeWindow.count = 0, this.messageDropNoticeWindow.start = 0, this.messageDropNoticeWindow.count = 0;
  }
  resetForTesting() {
    this.filterPolicy = void 0, this.dropNotifier = void 0, this.senderDropWriter = void 0, this.malformedConfigReported = false, this.clearWindowsForTesting(), this.reportedStrayDropCodes.clear(), this.reportedCloudWorkerCodes.clear();
  }
}
class r {
  outboundPeers = /* @__PURE__ */ new Set();
  outboundPosts = /* @__PURE__ */ new Set();
  subscriberStarted = false;
  subscriberStopping = false;
  liveSocket = null;
  enqueuePeerMessage = null;
  getCurrentMode = null;
  enqueueReceiveNotice = null;
  connectFailureStreak = null;
  outageWakeSent = false;
  identity = null;
  identityResolved = null;
  identityFailedClosed = null;
}
class o {
  held = /* @__PURE__ */ new Map();
  settled = [];
  reporter = void 0;
  sessionId = void 0;
  resetForTesting() {
    this.held.clear(), this.settled.length = 0, this.reporter = void 0, this.sessionId = void 0;
  }
}
class s {
  checkouts = null;
  baseRefs = null;
  onMetadataChanged = null;
  lastEmittedBranches = {};
  reset() {
    this.checkouts = null, this.baseRefs = null, this.onMetadataChanged = null, this.lastEmittedBranches = {};
  }
}
class i {
  attestation = new t();
  replHandle = null;
  sdkHostedHandle = null;
  projectFilesDoor = null;
  supervisedBridgeSession = null;
  peerIdentityKey = null;
  walkCredentialKey = null;
  retiredHandles = /* @__PURE__ */ new WeakSet();
  lastReportedPermissionMode = void 0;
  lastKnownPermissionMode = void 0;
  lastReportedEffort = void 0;
  lastKnownEffort = void 0;
  lastReportedUltracodeActive = void 0;
  lastKnownUltracodeActive = void 0;
  lastKnownEffortRequestId = void 0;
  lastReportedModel = void 0;
  lastKnownModel = void 0;
  contextUsageMirror = void 0;
  tokenUsageMirror = void 0;
  lastReportedArtifacts = void 0;
  lastKnownArtifacts = void 0;
  artifactsEgressSuppressed = void 0;
  lastReportedCrossSessionInbound = void 0;
  lastKnownCrossSessionInbound = void 0;
  lastKnownPostTurnSummary = void 0;
  remoteEgressSuppressed = null;
  lastRateLimitMirror = void 0;
  dropSenderWriterByHandle = /* @__PURE__ */ new WeakMap();
  antproto = new r();
  bridgeStateFramesGate = void 0;
  cseShimGate = void 0;
  placeholderWriteChain = Promise.resolve();
  placeholderSweepStarted = false;
  rcActiveImpressionRecorded = false;
  verboseRcActive = void 0;
  teleportedSessionIds = /* @__PURE__ */ new Set();
  nameTagWriteChain = Promise.resolve();
  latestAppliedName = /* @__PURE__ */ new Map();
  connectTimeName = /* @__PURE__ */ new Map();
  diagnosticPolicyKick = void 0;
  bearerPlanFetch = void 0;
  remoteControlLockReason = void 0;
  uploadLimitTold = void 0;
  uploadResends = { underWay: 0, lastFailedAtMs: void 0 };
  imageScaleLock = mX();
  historySpoolDir = null;
  historyPrefetchEntries = /* @__PURE__ */ new Map();
  repoCheckouts = new s();
  inboundReadReceipts = new o();
}
var yes = new W(() => new i());
function mo() {
  return yes.of(U().host);
}
function l3e(e) {
  if (!e.startsWith("cse_")) return e;
  return "session_" + e.slice(4);
}
var d = /^[a-zA-Z0-9_-]+$/;
function By(e, n) {
  if (!n$(e)) throw Error(`Invalid ${n}: contains unsafe characters`);
  return e;
}
function n$(e) {
  return e !== "" && d.test(e);
}
function Bkn(e) {
  return n$(e) && !e.startsWith("-");
}
function _es(e) {
  mo().cseShimGate = e;
}
function pp(e) {
  if (!e.startsWith("cse_")) return e;
  let n = mo().cseShimGate;
  if (n && !n()) return e;
  return l3e(e);
}
function XTt(e) {
  return `remote-${e.slice(-8)}`;
}
function Yl(e) {
  if (!e.startsWith("session_")) return e;
  return "cse_" + e.slice(8);
}
function jkn(e, n) {
  return e.startsWith("cse_") ? Yl(n) : pp(n);
}
function rr(e) {
  return e.replace(/^(?:session|cse)_/, "");
}
function C5(e) {
  return (e.startsWith("session_") || e.startsWith("cse_")) && n$(e) && rr(e) !== "";
}
export {
  Bkn,
  By,
  C5,
  XTt,
  Yl,
  _es,
  jkn,
  l3e,
  mo,
  n$,
  pp,
  rr,
  yes
};
