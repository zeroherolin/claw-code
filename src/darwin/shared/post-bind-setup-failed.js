// darwin/shared/post-bind-setup-failed.js — Claude Code 2.1.310（darwin）模块 chunk-mmdhftr6.js
import { W } from "./chunk-37dd5dd4.js";
var S_r = 3e4;
class t {
  activeSocketPath = void 0;
  connectedClients = /* @__PURE__ */ new Set();
  onEnqueue = null;
  onRename = null;
  onEnableRemoteControl = null;
  onPeerMessageStatus = null;
  processingChain = Promise.resolve();
  activeTokens = void 0;
  activeKeyFile = void 0;
  authRequired = false;
  authOkReported = false;
  authDropReported = false;
  firstLineDeadlineMs = S_r;
  silentDropReported = false;
  lastStartFailureCause = void 0;
  lastStartDegradedCause = void 0;
  lastStartFailureDetail = void 0;
  startInFlight = false;
  peerDirOwnerUids = [];
  reset() {
    this.onEnqueue = null, this.onRename = null, this.onEnableRemoteControl = null, this.onPeerMessageStatus = null, this.activeSocketPath = void 0, this.connectedClients.clear(), this.processingChain = Promise.resolve(), this.activeTokens = void 0, this.activeKeyFile = void 0, this.authRequired = false, this.authOkReported = false, this.authDropReported = false, this.firstLineDeadlineMs = S_r, this.silentDropReported = false, this.lastStartFailureCause = void 0, this.lastStartDegradedCause = void 0, this.lastStartFailureDetail = void 0, this.startInFlight = false, this.peerDirOwnerUids = [];
  }
}
function y0n(e) {
  if (e.startInFlight || e.activeSocketPath !== void 0) return;
  switch (e.lastStartFailureCause) {
    case "socket_dir_refused":
      return e.lastStartFailureDetail !== void 0 ? `its socket directory could not be set up: ${e.lastStartFailureDetail}` : "its socket directory could not be set up";
    case "path_refused":
      return "its socket path is not a usable local address";
    case "bind_failed":
      return "it could not be started";
    case "key_publish_failed":
      return "its peer key could not be published";
    case "post_bind_setup_failed":
      return "setting it up after bind failed";
    case void 0:
      return;
  }
}
var SXt = new W(() => new t());
export {
  SXt,
  S_r,
  y0n
};
