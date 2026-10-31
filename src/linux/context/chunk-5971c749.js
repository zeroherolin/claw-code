// linux/context/chunk-5971c749.js — Claude Code 2.1.310（linux）模块 chunk-6b3j8amt.js
import { De } from "../fs/async-hooks.93b1.js";
import { Ps } from "../shared/chunk-67236fa7.js";
import { ve } from "../shared/chunk-fee3c428.js";
var t = { notice: null, shownLoggedForDraftId: null, promptedCount: 0, sessionDraftCount: 0, seededFromDisk: false, seedStarted: false, toolCallCount: 0 };
class n {
  autoDenyPresence = De();
  mainLoopBusy = Ps({ busy: false });
  blockingToolProgress = Ps({ active: false });
  dialogHostUnmounted = Ps({ unmounted: false });
  onScreenBlockingDialog = Ps({ surfaceMounted: false, kind: null });
  headerGauge = Ps({ mounts: 0 });
  pendingSurveyFeedbackSource = null;
  terminalFocus = "unknown";
  terminalFocusGainedAt = Number.NEGATIVE_INFINITY;
  terminalFocusChanged = De();
  feedbackNotice = Ps(t);
  clawdEntranceTaken = false;
  startupUpdateSummary = void 0;
  experimentEnrollmentsUnseen = void 0;
  orgMemoryWritesRowSeen = false;
  orgMemoryReadRowSeen = false;
  remoteHomeSettingsRowSeen = false;
  configRowsSeen = /* @__PURE__ */ new Set();
  configRowNotices = /* @__PURE__ */ new Map();
}
var Da = ve(new n(), (o) => {
  o.configRowsSeen.clear(), o.configRowNotices.clear(), o.mainLoopBusy.setState((e) => e.busy ? { busy: false } : e), o.headerGauge.setState((e) => e.mounts === 0 ? e : { mounts: 0 });
});
export {
  Da
};
