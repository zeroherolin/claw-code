// artifacts/same-account.bxg8.js — Claude Code 2.1.310 模块 chunk-bxg8d6dd.js
import { nt, U } from "../context/not-admin-owned.ersa.js";
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { X } from "../shared/chunk-3kevgx4j.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Tc } from "../context/chunk-pms6vkpn.js";
import { randomUUID as S } from "crypto";
class u {
  #e = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Set();
  note(e, r, n) {
    if (this.#n.has(e)) return;
    let s = this.#e.get(e);
    if (s !== void 0) {
      if (s.has(r)) return;
      if (s.size >= 4) {
        this.#t(e);
        return;
      }
      s.set(r, n);
      return;
    }
    if (this.#e.size >= 256) {
      let l = 128;
      for (let i of this.#e.keys()) if (this.#t(i), --l === 0) break;
    }
    this.#e.set(e, /* @__PURE__ */ new Map([[r, n]]));
  }
  #t(e) {
    this.#e.delete(e), this.#n.add(e);
  }
  take(e, r) {
    let n = this.#e.get(e);
    return this.#e.delete(e), n?.get(r);
  }
}
class p {
  #e;
  #n;
  #t;
  #r = false;
  constructor(e, r, n) {
    this.#e = e, this.#n = r, this.#t = n;
  }
  settle(e) {
    if (this.#r) return;
    if (this.#r = true, this.#e.get(this.#n) !== this.#t) return;
    if (this.#t.pending--, e.wasWatching || e.teardown !== "unsent") this.#t.confirmed = true;
    if (this.#t.pending === 0 && !this.#t.confirmed) this.#e.delete(this.#n);
  }
}
class c {
  #e = /* @__PURE__ */ new Map();
  #n = 1;
  #t = /* @__PURE__ */ new Set();
  #r = new u();
  isStopped(e) {
    return this.#e.has(e);
  }
  stoppedSlugs() {
    return this.#e.keys();
  }
  latchGeneration(e) {
    return this.#e.get(e)?.generation;
  }
  recordStop(e) {
    this.#t.delete(e);
    let r = this.#e.get(e);
    if (r === void 0) r = { pending: 0, confirmed: false, generation: this.#n++ }, this.#e.set(e, r);
    else r.generation = this.#n++;
    return r.pending++, new p(this.#e, e, r);
  }
  reaffirmStop(e) {
    this.#t.delete(e);
    let r = this.#e.get(e);
    if (r === void 0) this.confirmStop(e);
    else r.confirmed = true;
  }
  confirmStop(e) {
    this.#t.delete(e);
    let r = this.#e.get(e);
    if (r === void 0) this.#e.set(e, { pending: 0, confirmed: true, generation: this.#n++ });
    else r.confirmed = true, r.generation = this.#n++;
  }
  noteRelatchAsk(e, r) {
    this.#r.note(e, r, this.latchGeneration(r));
  }
  takeRelatchAsk(e, r) {
    return this.#r.take(e, r);
  }
  clearByApprovedRewatch(e, r) {
    let n = this.#e.get(e);
    if (n === void 0 || n.generation !== r) return;
    this.#e.delete(e), this.#t.add(e);
  }
  noteApprovedWatch(e) {
    if (!this.#e.has(e)) this.#t.add(e);
  }
  wasClearedByRewatch(e) {
    return this.#t.has(e) && !this.#e.has(e);
  }
}
var b = { baseMs: 1e3, capMs: 3e4, minUptimeMs: 6e4, maxConsecutiveFailures: 10, spreadMinMs: 1e3, spreadMaxMs: 2e4, seedDeferMaxMs: 18e4, idleTtlMs: 126e5, handshakeDeadlineMs: 15e4, stallThresholdMs: 1e4, stallMinMs: 3e4, stallMaxMs: 6e4, longStallMinMs: 12e4, longStallMaxMs: 24e4, maxStallMs: 18e5, stallOutJitterMs: 9e5 }, v = 3e4, M = 100, g = { baseMs: 1e3, capMs: 3e4, minUptimeMs: 6e4, stallThresholdMs: 1e4, stallMinMs: 6e4, stallMaxMs: 6e5, maxConsecutiveRefusals: 10, handshakeDeadlineMs: 3e4 }, y = { ...g, presenceMs: 15e3 }, w = { ...g, keepaliveMs: 25e3 };
function fj(e, r) {
  return `${e ?? "main"}
${r}`;
}
function m(e) {
  let r = [...e.codeliveredFollowups.values()];
  e.codeliveredFollowups.clear();
  for (let { revoke: n } of r) n("reset");
  e.coordinatorEditors.clear(), e.editorSettleWatch?.(), e.editorSettleWatch = null;
}
function hhn(e, r, n) {
  let s = a().current;
  if (s === void 0) return;
  for (let [l, i] of s.codeliveredFollowups) if (i.slug === e && i.agentId !== n?.exceptAgentId) s.codeliveredFollowups.delete(l), i.revoke(r);
}
var R = 64, jk = 25, SAe = 3 * jk;
function A() {
  return { live: { handoffGeneration: 0, inFlightSubscribes: /* @__PURE__ */ new Set(), inFlightWiredIntent: /* @__PURE__ */ new Set(), retiredInFlightArms: /* @__PURE__ */ new Set(), armSettleWaiters: /* @__PURE__ */ new Map(), bootingWiredArms: /* @__PURE__ */ new Map(), pendingInFlightWiring: /* @__PURE__ */ new Map(), supervisors: /* @__PURE__ */ new Map(), heardVersions: /* @__PURE__ */ new Map(), heardAheadOfClockReported: false, commentCensus: /* @__PURE__ */ new Map(), pendingRegistrations: 0, rewatchTiming: { ...b }, mostRecentPublishSlug: void 0, pendingSubagentArms: /* @__PURE__ */ new Map(), finishedSubagentAdopters: /* @__PURE__ */ new Set(), activitySenders: /* @__PURE__ */ new Map(), agentActivitySinks: /* @__PURE__ */ new Map(), activityRefreshTimer: void 0, activityOnsetTimer: void 0, activityClearTimer: void 0, activityRefreshMs: v, activityEdgeDebounceMs: M, activityUnsubscribe: void 0, disposed: false, activityOkReported: false, summonDeclared: /* @__PURE__ */ new Map(), summonArmOkReported: false, armOutcomes: /* @__PURE__ */ new Map(), mcpWriteSlugs: /* @__PURE__ */ new Map(), announcedArmFailures: /* @__PURE__ */ new Set(), nonEditorSlugs: /* @__PURE__ */ new Set(), repliesConsent: { outstanding: /* @__PURE__ */ new Map(), declined: /* @__PURE__ */ new Map(), approved: /* @__PURE__ */ new Set() }, inFlightGenerations: /* @__PURE__ */ new Map(), lastArtifactToolCallAt: 0, endAll: void 0 }, liveDocWatch: { ownSeqs: /* @__PURE__ */ new Map(), rebases: /* @__PURE__ */ new Map(), pendingOwnEdits: /* @__PURE__ */ new Map(), watches: /* @__PURE__ */ new Map(), stopCounts: /* @__PURE__ */ new Map(), retiredWatches: /* @__PURE__ */ new Map(), arming: /* @__PURE__ */ new Map(), notLiveDoc: /* @__PURE__ */ new Set(), noticeBudgets: /* @__PURE__ */ new Map(), journalUnavailable: /* @__PURE__ */ new Set(), journalNegotiations: /* @__PURE__ */ new Set(), headSinks: /* @__PURE__ */ new Map(), stopAll: void 0, stop: void 0 }, liveEditOps: { lastOwnAck: /* @__PURE__ */ new Map(), unansweredKeys: /* @__PURE__ */ new Map() }, liveReplicas: { replicas: /* @__PURE__ */ new Map(), unanswered: /* @__PURE__ */ new Map(), unavailable: /* @__PURE__ */ new Map(), tooOld: /* @__PURE__ */ new Set(), cloudUnserved: /* @__PURE__ */ new Map(), opening: /* @__PURE__ */ new Map(), binding: /* @__PURE__ */ new Map(), transport: void 0, engine: void 0, renderLevel: void 0, headMoved: void 0, workingCopyPath: void 0, settleFileChange: void 0, liveFileEnded: void 0, pushHeldSaves: void 0, heldSavesExitCleanup: void 0 }, autoReact: { artifacts: /* @__PURE__ */ new Map(), optIn: null, responderDispatchOptIn: null, userDisarmed: false, enabledMemo: null, wakeEnabledMemo: null, unattendedReplies: /* @__PURE__ */ new Map(), postSeq: 0, probeSeq: 0, coalesceMsOverride: null, maxAutoTurnsOverride: null, confirmDwellMsOverride: null, readRetryDelaysMsOverride: null, fastAckFlagRefresh: null, fastAckFlagRefreshDeadlineMsOverride: null, fastAckSelectDeadlineMsOverride: null, pendingLedger: null, ledgerLastWritten: null, ledgerLastWriteAt: null, ledgerLastWriteSid: null, ledgerLastWriteAccount: void 0, ledgerFailureSeqAtWrite: null, ledgerDeferredSince: null, ledgerLastAppend: null, ledgerOwnerSid: null, ledgerRetiredSids: /* @__PURE__ */ new Set(), ledgerExitCleanup: void 0, ledgerExitReStamp: void 0, ledgerTimer: void 0, ledgerStorageV5: void 0, ledgerMaxAgeMsOverride: null, ledgerDebounceMsOverride: null, composeDeadlineMsOverride: null }, summonSeeds: { claims: /* @__PURE__ */ new Set(), readClaims: /* @__PURE__ */ new Set(), graceMsOverride: null, open: /* @__PURE__ */ new Map(), settled: /* @__PURE__ */ new Set() }, wakes: { wakes: /* @__PURE__ */ new Map(), stoppedSlugs: /* @__PURE__ */ new Set(), sweptSlugs: /* @__PURE__ */ new Set(), orphanedSweptSlugs: /* @__PURE__ */ new Set(), yieldedSlugs: /* @__PURE__ */ new Map(), takenFrom: /* @__PURE__ */ new Map(), latchChangedAt: /* @__PURE__ */ new Map(), liftedAtScanGeneration: /* @__PURE__ */ new Map(), humanTurnAtScanGeneration: null, pendingResumeDisclosure: /* @__PURE__ */ new Set(), scanGeneration: 0, slugEpochs: /* @__PURE__ */ new Map(), stopGenerations: /* @__PURE__ */ new Map(), resumeSights: new u() }, autoEditAttribution: { staged: /* @__PURE__ */ new Map(), chainPublishIds: /* @__PURE__ */ new Set(), chainPublishSlots: /* @__PURE__ */ new Map() }, summonAnswers: /* @__PURE__ */ new Map(), pipelineReplyOrigins: /* @__PURE__ */ new Map(), summonStatus: { sidBySlug: /* @__PURE__ */ new Map(), seqBySid: /* @__PURE__ */ new Map(), routeAbsentSince: null, handOffs: /* @__PURE__ */ new Map(), queuedWakes: /* @__PURE__ */ new Map() }, noticeCoalesce: /* @__PURE__ */ new Map(), shareStatus: { bySlug: /* @__PURE__ */ new Map(), probeBoots: /* @__PURE__ */ new Map(), filePathToSlug: /* @__PURE__ */ new Map(), pendingNoticeSlugs: /* @__PURE__ */ new Map(), otherComments: /* @__PURE__ */ new Map(), otherCommentSeq: 0, noticeReadSights: { comments: new u(), read_db: new u(), read: new u(), read_page_data: new u(), verify: new u(), webfetch: new u() }, shareProbesInFlight: /* @__PURE__ */ new Map(), capsReadsInFlight: /* @__PURE__ */ new Map(), checkProbesInFlight: /* @__PURE__ */ new Map() }, noticeTap: void 0, templateLanes: { prototypeArmed: false, boundSlugs: /* @__PURE__ */ new Map(), heli: { armed: null, boards: /* @__PURE__ */ new Map() } }, postedReplyIds: /* @__PURE__ */ new Set(), cleanReplyIds: /* @__PURE__ */ new Set(), frameRelay: { declinedUntil: /* @__PURE__ */ new Map(), tunnelDeclinedUntil: /* @__PURE__ */ new Map(), hopFailedUntil: /* @__PURE__ */ new Map(), servedUntil: /* @__PURE__ */ new Map(), vouched: /* @__PURE__ */ new Set(), directRefusedUntil: /* @__PURE__ */ new Map(), mcpAdvert: void 0, mcpAdvertAsked: void 0, mcpNarrower: /* @__PURE__ */ new Set(), botContextNoted: false }, builtInArtifactHiddenForMcp: false, mcpEntryRowNotServed: null, routeOnlyMcpEntryLogged: false, contentHostEgressDenied: /* @__PURE__ */ new Set(), contentHostEgressProbed: /* @__PURE__ */ new Map(), contentHostEgressUnanswered: /* @__PURE__ */ new Set(), contentHostEgressInFlight: /* @__PURE__ */ new Map(), sessionHintsRefusedAt: void 0, leaveOutMissingRefusedAt: void 0, sandboxEgress: /* @__PURE__ */ new Map(), roster: void 0, rosterHeard: void 0, rosterWait: void 0, rosterWaitOver: false, assetsOnRoster: false, accountEpoch: 0, conversationEpoch: 0, ownPrincipalTokens: /* @__PURE__ */ new Map(), ownPrincipalTokenAccount: null, ownPrincipalTokenEpoch: 0, profileNames: /* @__PURE__ */ new Map(), profileIdsServed: /* @__PURE__ */ new Map(), profileIdsForgets: /* @__PURE__ */ new Map(), authoringProgress: { slotsByBlockIndex: /* @__PURE__ */ new Map(), failureReported: false }, strandedMints: /* @__PURE__ */ new Map(), reservedMints: /* @__PURE__ */ new Set(), mintedRoundTripPublishSignals: /* @__PURE__ */ new WeakSet(), durable: { rows: /* @__PURE__ */ new Map(), registrySink: null, registryPublished: "null", unwatchedSlugs: /* @__PURE__ */ new Set(), orphanTriggers: /* @__PURE__ */ new Set(), pendingRestoredRows: /* @__PURE__ */ new Map(), slugOps: /* @__PURE__ */ new Map(), stopLatches: new c(), liveDocArmDeclined: /* @__PURE__ */ new Set(), liveDocRegrantSights: new u(), firstWatchAskSights: new u(), pendingOps: /* @__PURE__ */ new Set(), originatorRefused: false, subscribeForbidden: null, subscribeUnrelayed: null, watchUrlWithheld: null, watchUrlGranted: false, armsInFlight: /* @__PURE__ */ new Map(), armOutcomes: /* @__PURE__ */ new Map(), announcedArmFailures: /* @__PURE__ */ new Set() }, room: { conns: /* @__PURE__ */ new Map(), nonces: /* @__PURE__ */ new Map(), endedOwners: /* @__PURE__ */ new Map(), timing: { ...y } }, presence: { conns: /* @__PURE__ */ new Map(), declined: /* @__PURE__ */ new Set(), timing: { ...w } }, commentMonitorIntent: { sid: null, bySlug: /* @__PURE__ */ new Map(), pendingRestore: null, lastWritten: null, wroteCurrentLine: false, failureSeqAtWrite: 0, storageV5: void 0, unsubscribeSwitch: void 0, unregisterExitDrain: void 0, transcriptPath: null, parked: /* @__PURE__ */ new Map(), writeChain: Promise.resolve(), owedLines: /* @__PURE__ */ new Map(), pendingLines: /* @__PURE__ */ new Map(), exitStamped: false, tornStops: /* @__PURE__ */ new Set(), forgottenAt: /* @__PURE__ */ new Map(), leftWith: null, unsubscribeMaterialized: void 0, earlySeed: void 0, onFile: false, adoptPendingFor: null }, interactionSchemas: void 0, approvedRootBases: /* @__PURE__ */ new Map(), commentTargets: /* @__PURE__ */ new Map(), refusedPublishBodies: /* @__PURE__ */ new Map(), approvedSourcePins: /* @__PURE__ */ new Map(), verifiedAttachments: /* @__PURE__ */ new Map(), approvedCopySources: /* @__PURE__ */ new Map(), gatedThumbnailHrefs: /* @__PURE__ */ new Map(), approvalStashEvicted: false, publishObservationNonce: S(), consumedPublishApprovals: /* @__PURE__ */ new Set(), crashedPublishChecks: /* @__PURE__ */ new Set(), readDeliveries: /* @__PURE__ */ new Map(), pendingHandoverReads: /* @__PURE__ */ new Map(), frozenReadPageDataSchemaNames: void 0, frozenWatchRail: void 0, frozenArtifactTypes: void 0, frozenAssets: void 0, frozenCopyFrom: void 0, frozenPublishEdits: void 0, frozenHotUpdate: void 0, frozenPathPin: void 0, frozenPathPinAck: void 0, pathPinSeq: 0, pathPins: /* @__PURE__ */ new Map(), frozenDbStrReplace: void 0, frozenArtifactPins: void 0, frozenMultiFile: void 0, createdFromType: /* @__PURE__ */ new Map(), deferredSurface: /* @__PURE__ */ new Map(), remoteControlSkippedSlugs: /* @__PURE__ */ new Set(), typeInstanceFiles: /* @__PURE__ */ new Map(), publishedSources: /* @__PURE__ */ new Map(), typeCatalogVouch: /* @__PURE__ */ new Map(), typeDescriptions: /* @__PURE__ */ new Map(), attestedTypeArtifacts: /* @__PURE__ */ new Map(), typeCapabilityReads: /* @__PURE__ */ new Map(), verify: { lastPublish: void 0, reads: /* @__PURE__ */ new Map() }, ownPublishedSlugs: /* @__PURE__ */ new Map(), ownCreatedSlugs: /* @__PURE__ */ new Map(), roomJoinArming: /* @__PURE__ */ new Set(), roomStoppedByUser: /* @__PURE__ */ new Set(), roomArmAsked: /* @__PURE__ */ new Map(), roomArmRefusedByUser: /* @__PURE__ */ new Set(), coordinatorEditors: /* @__PURE__ */ new Map(), editorSettleWatch: null, codeliveredFollowups: /* @__PURE__ */ new Map(), liveEditGateLatch: null, livePathsGateLatch: null, toolsetLatch: null, resultNotes: { kindSaid: false, watchCodesSaid: /* @__PURE__ */ new Set(), previewedPaths: /* @__PURE__ */ new Set(), previewHintedPaths: /* @__PURE__ */ new Set() }, inheritedTypeGrantLatch: null, routineRunTainted: false, routineSourceWriteRefused: false, quietCapsCardKept: false, routineTypeInstances: /* @__PURE__ */ new Map(), routineRelayNotCarried: null, routineRepublishedPaths: /* @__PURE__ */ new Set(), laneNoticeSlugs: /* @__PURE__ */ new Map(), commentReads: /* @__PURE__ */ new Map(), commentReadAtBySlug: /* @__PURE__ */ new Map(), commentRepublishedPaths: /* @__PURE__ */ new Set(), askClassConsent: /* @__PURE__ */ new Set(), askClassPersonConsent: /* @__PURE__ */ new Set(), askClassOutsideOrgConsent: /* @__PURE__ */ new Set(), askNamedOtherOrg: /* @__PURE__ */ new Map(), askClassRequestShown: /* @__PURE__ */ new Map(), askConnectorsShown: /* @__PURE__ */ new Map(), askClassPending: /* @__PURE__ */ new Map(), notedUnreadRefusals: /* @__PURE__ */ new Map(), askCards: /* @__PURE__ */ new Map(), askClassCards: /* @__PURE__ */ new Map(), askCardFacts: /* @__PURE__ */ new Map(), dbWriteOpSights: new u(), askClassTaken: /* @__PURE__ */ new Map(), askClassPersonAsked: /* @__PURE__ */ new Map(), askClassNoClassifier: /* @__PURE__ */ new Map(), askClassTakenByPerson: /* @__PURE__ */ new Map(), askTelemetry: /* @__PURE__ */ new Map(), consentCheckScopes: /* @__PURE__ */ new Map(), consentCheckScopesEvicted: false, designGuardFired: false, quickstartGuidanceToolUseId: void 0, quickstartRan: /* @__PURE__ */ new Map(), designSystemTypeSlug: void 0, artifactDisabledSessionEvaluated: false, artifactWithheldReasonsLogged: [], artifactWithheldRecoveryLogged: false, artifactRegisteredSeen: false, artifactWithheldListedLogged: false, artifactPolicyFetchAnswer: null, heldStartupTelemetry: null, anchorSnippets: /* @__PURE__ */ new Map(), marked: { plain: void 0, inertHtml: void 0 }, bundleEmbedVerdicts: { hljs: void 0 }, blockStripVerdicts: { hljs: void 0, mermaid: void 0 }, workshopBlessedHashes: void 0, rejectBreaker: new Tc({ max: R }) };
}
function yhn(e) {
  if (e.stopped = true, e.abort.abort(), e.timer !== void 0) clearTimeout(e.timer), e.timer = void 0;
  delete e.lease, delete e.renewable, delete e.wake;
}
class f {
  current = void 0;
}
var C = new nt(() => new f());
function a() {
  return C.of(U());
}
function Z() {
  let e = a();
  return e.current ??= A(), e.current;
}
function KJs(e, r) {
  let n = a().current?.autoReact.artifacts.get(e)?.threads.get(r);
  if (n !== void 0) n.lastAutoReplyAt = Date.now();
}
function FDe() {
  let e = a().current;
  if (e === void 0) return;
  for (let r of e.liveDocWatch.noticeBudgets.values()) r.disclosed = false;
}
function Pwt() {
  let e = a().current;
  if (e === void 0) return;
  e.refusedPublishBodies.clear(), tzo();
}
function tzo() {
  let e = a().current;
  if (e === void 0) return;
  for (let r of e.pendingHandoverReads.values()) r.linesReturned.clear(), r.linesPrepared.clear(), r.completedBy.clear(), r.confirmsResendFor.clear();
  e.readDeliveries.clear();
}
function qJs(e) {
  let r = a().current;
  if (r === void 0) return;
  let n = r.refusedPublishBodies, s = fj(void 0, "");
  for (let [l, i] of n) {
    if (!l.startsWith(s)) continue;
    if (!e.has(i.batch)) n.delete(l);
    else if (i.observedFrom !== void 0 && i.observedFrom !== "" && !e.has(i.observedFrom)) delete i.observedFrom;
  }
}
function _hn() {
  return a().current?.room;
}
function YJs() {
  return a().current?.presence;
}
function tZn(e) {
  let r = a().current?.presence;
  r?.disposeSlug?.(r, e);
}
function XJs(e) {
  let r = a().current?.presence;
  r?.retireSlug?.(r, e);
}
function JJs(e) {
  return a().current?.presence.declined.has(e) === true;
}
function mj() {
  return a().current !== void 0;
}
function QJs() {
  let e = _hn();
  e?.consentChanged?.(e);
}
function ZJs(e) {
  let r = _hn();
  r?.accountChanged?.(r, e);
}
function T6e() {
  let e = _hn();
  e?.dispose?.(e);
}
function P(e) {
  k(e);
  for (let r of e.docs.values()) T(r);
}
function k(e) {
  e.journalPos = void 0, e.journalPosOrd = void 0;
}
function T(e) {
  e.journalFence = void 0, e.journalGen += 1;
}
function D(e) {
  let r = e.journal;
  e.journal = void 0, e.journalCap = void 0, P(e);
  for (let n of e.docs.values()) {
    if (n.batchTimer !== void 0) clearTimeout(n.batchTimer), n.batchTimer = void 0;
    n.batch = void 0, n.batchPos = void 0, n.batchHeardAt = void 0, n.settling = void 0;
  }
  r?.stop({ killTask: false });
}
function nzo(e) {
  e.ownPrincipalTokens.clear(), e.ownPrincipalTokenAccount = null, e.ownPrincipalTokenEpoch++;
}
function eQs(e = "signed_out", r) {
  let n = a().current;
  if (n === void 0) return;
  if (nzo(n), n.profileNames.clear(), n.profileIdsServed.clear(), e !== "same_account") {
    n.frameRelay.mcpAdvert = { tools: /* @__PURE__ */ new Set(), until: 0 }, n.frameRelay.mcpNarrower.clear(), n.roster = void 0, n.rosterHeard = void 0, n.rosterWait = void 0, n.rosterWaitOver = false, n.assetsOnRoster = false, n.accountEpoch++, n.askClassOutsideOrgConsent.clear(), n.askNamedOtherOrg.clear(), n.postedReplyIds.clear(), n.commentTargets.clear(), n.summonStatus.handOffs.clear(), n.summonStatus.queuedWakes.clear(), n.verify.lastPublish = void 0, n.verify.reads.clear(), n.ownPublishedSlugs.clear(), n.ownCreatedSlugs.clear(), n.routineTypeInstances.clear(), n.strandedMints.clear(), n.reservedMints.clear(), n.live.heardVersions.clear(), n.roomJoinArming.clear(), m(n);
    for (let i of n.live.supervisors.values()) delete i.lease, delete i.renewable;
    n.live.nonEditorSlugs.clear(), n.laneNoticeSlugs.clear(), n.commentReads.clear(), n.lastOthersCommentReadAt = Date.now(), n.cleanReplyIds.clear();
    for (let i of n.shareStatus.otherComments.values()) i.judged.clear(), i.judgedSends.clear();
    n.live.pendingSubagentArms.clear(), n.live.finishedSubagentAdopters.clear(), n.live.repliesConsent.outstanding.clear(), n.live.repliesConsent.declined.clear(), n.live.repliesConsent.approved.clear();
    for (let i of n.autoReact.artifacts.values()) {
      i.heldReplyDeclined = false, i.heldReplyChain = null;
      for (let o of i.threads.values()) o.ownReplyIds.clear(), o.ownReplyIdsIncomplete = false;
    }
    n.liveDocWatch.journalUnavailable.clear();
    for (let i of n.liveDocWatch.journalNegotiations) i.abort();
    n.liveDocWatch.journalNegotiations.clear();
    for (let i of n.liveDocWatch.arming.values()) for (let o of i.reviving) D(o);
    n.liveDocWatch.stopAll?.(e), n.live.endAll?.(e);
    for (let i of n.liveReplicas.replicas.values()) i.watcher?.close(), clearTimeout(i.pushHold?.due);
    n.liveReplicas.replicas.clear(), n.liveReplicas.unavailable.clear(), n.liveReplicas.tooOld.clear(), n.liveReplicas.cloudUnserved.clear(), n.liveReplicas.opening.clear(), n.liveReplicas.unanswered.clear(), n.createdFromType.clear(), n.deferredSurface.clear(), n.remoteControlSkippedSlugs.clear(), n.typeInstanceFiles.clear(), n.publishedSources.clear(), n.pathPins.clear(), n.typeCatalogVouch.clear(), n.typeDescriptions.clear(), n.attestedTypeArtifacts.clear(), n.typeCapabilityReads.clear(), n.quickstartRan.clear(), n.anchorSnippets.clear(), n.shareStatus.accountBoundaryAt = Date.now(), n.shareStatus.probeBoots.clear();
    for (let [i, o] of n.shareStatus.bySlug) if (o.probeErrorCode !== void 0 || o.role !== void 0 || o.outsideOrgReader !== void 0 || o.external !== void 0 || o.endpointConnectors !== void 0 || o.connectorsIssuedAt !== void 0 || o.lastConnectorsReadToolUseId !== void 0) {
      let { probeErrorCode: E, probeGone: O, role: x, outsideOrgReader: W, external: L, endpointConnectors: F, connectorsIssuedAt: I, lastConnectorsReadToolUseId: B, ...h } = o;
      n.shareStatus.bySlug.set(i, h);
    }
  }
  let { room: s, presence: l } = n;
  s.accountChanged?.(s, r), l.accountChanged?.(l, r);
}
async function tQs(e) {
  if (e === "same_account") return;
  let r = a().current;
  if (r === void 0 || r.liveReplicas.replicas.size === 0) return;
  let n = [], s = r.liveReplicas.pushHeldSaves;
  if (s !== void 0) n.push(s().then(() => t("[liveReplica] held saves pushed before logout"), (l) => t(`[liveReplica] held saves not pushed before logout: ${d(l)}`)));
  for (let [l, i] of r.liveReplicas.replicas) n.push(i.replica.sendFinalReport().then((o) => t(`[liveReplica] final divergence report before logout ${l}: ${o ? "tried" : "nothing due"}`), (o) => t(`[liveReplica] final divergence report before logout ${l} failed: ${d(o)}`)));
  await Promise.race([Promise.all(n), X(2e3)]);
}
function Iwt() {
  let e = a().current;
  if (e?.liveDocWatch.stopAll?.("clear"), e !== void 0) for (let [r, n] of e.liveReplicas.replicas) n.replica.sendFinalReport().then((s) => t(`[liveReplica] final divergence report at conversation retire ${r}: ${s ? "tried" : "nothing due"}`), (s) => t(`[liveReplica] final divergence report at conversation retire ${r} failed: ${d(s)}`));
}
function Owt(e) {
  let r = a().current;
  if (r === void 0) return;
  if (e?.continuesConversation !== true) r.conversationEpoch++, r.ownPublishedSlugs.clear(), r.ownCreatedSlugs.clear(), r.routineTypeInstances.clear(), r.strandedMints.clear(), r.reservedMints.clear(), r.live.heardVersions.clear(), r.roomJoinArming.clear(), r.roomStoppedByUser.clear(), r.roomArmAsked.clear(), r.roomArmRefusedByUser.clear(), m(r), r.live.nonEditorSlugs.clear(), r.live.pendingSubagentArms.clear(), r.live.finishedSubagentAdopters.clear(), r.live.repliesConsent.outstanding.clear(), r.live.repliesConsent.declined.clear(), r.live.repliesConsent.approved.clear(), r.deferredSurface.clear(), r.remoteControlSkippedSlugs.clear();
  if (r.createdFromType.clear(), r.verify.lastPublish = void 0, r.verify.reads.clear(), e?.continuesConversation !== true) r.pathPins.clear(), r.publishedSources.clear(), r.resultNotes.kindSaid = false, r.resultNotes.watchCodesSaid.clear(), r.resultNotes.previewedPaths.clear(), r.resultNotes.previewHintedPaths.clear();
}
export {
  FDe,
  Iwt,
  JJs,
  KJs,
  Owt,
  Pwt,
  QJs,
  SAe,
  T6e,
  XJs,
  YJs,
  Z,
  ZJs,
  _hn,
  eQs,
  fj,
  hhn,
  jk,
  mj,
  nzo,
  qJs,
  tQs,
  tZn,
  tzo,
  yhn
};
