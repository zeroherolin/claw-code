// linux/remote/chunk-7e620e0d.js — Claude Code 2.1.310（linux）模块 chunk-ynkasage.js
import { De } from "../fs/async-hooks.93b1.js";
import { U } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
class t {
  bridgeBinding = void 0;
  browserHints = void 0;
  lastSentPreferredDeviceId = void 0;
  resolvedHostByToolUseId = /* @__PURE__ */ new Map();
  shouldAutoEnable = void 0;
  wiredThisSession = false;
  systemPromptSection = "";
  attachedInstructions = "";
  installUpsellResolution = void 0;
  installUpsellBypassSuppressionCounted = false;
  trackedTabIds = /* @__PURE__ */ new Set();
  tabGroupCleanupRegistered = false;
  unsubscribeSessionSwitch = void 0;
  unregisterExitCleanup = void 0;
  closesInFlight = /* @__PURE__ */ new Map();
  lastExecutedTabUrlByScope = /* @__PURE__ */ new Map();
  resolvedUrlByToolUseId = /* @__PURE__ */ new Map();
  browserRosterVersion = 0;
  browserRosterChanged = De();
  noBrowserFound = void 0;
  relayConnectFailed = void 0;
  disconnectedAnswerCount = 0;
  disconnectedAnswerTexts = /* @__PURE__ */ new Set();
  notConnectedSeenByPriorWorker = false;
  notConnectedMirrored = false;
  chromeSetupOfferArm = void 0;
  chromeSetupOfferArmMirrored = false;
  chromeSetupOfferStateUnread = false;
  lastTurnClientPlatform = void 0;
  reset() {
    this.bridgeBinding = void 0, this.browserHints = void 0, this.lastSentPreferredDeviceId = void 0, this.resolvedHostByToolUseId = /* @__PURE__ */ new Map(), this.shouldAutoEnable = void 0, this.wiredThisSession = false, this.systemPromptSection = "", this.attachedInstructions = "", this.installUpsellResolution = void 0, this.installUpsellBypassSuppressionCounted = false, this.trackedTabIds = /* @__PURE__ */ new Set(), this.tabGroupCleanupRegistered = false, this.unsubscribeSessionSwitch?.(), this.unsubscribeSessionSwitch = void 0, this.unregisterExitCleanup?.(), this.unregisterExitCleanup = void 0, this.closesInFlight = /* @__PURE__ */ new Map(), this.lastExecutedTabUrlByScope = /* @__PURE__ */ new Map(), this.resolvedUrlByToolUseId = /* @__PURE__ */ new Map(), this.browserRosterVersion++, this.noBrowserFound = void 0, this.relayConnectFailed = void 0, this.disconnectedAnswerCount = 0, this.notConnectedSeenByPriorWorker = false, this.notConnectedMirrored = false, this.chromeSetupOfferArm = void 0, this.chromeSetupOfferArmMirrored = false, this.chromeSetupOfferStateUnread = false, this.lastTurnClientPlatform = void 0, this.disconnectedAnswerTexts = /* @__PURE__ */ new Set();
  }
}
function Omn(e) {
  return e === "ios" || e === "android";
}
var uWr = new W(() => new t());
function zi() {
  return uWr.of(U().host);
}
function l8s(e) {
  let n = zi().resolvedHostByToolUseId.get(e);
  if (n !== void 0) n.keepHostPin = true;
}
export {
  Omn,
  l8s,
  uWr,
  zi
};
