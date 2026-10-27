// shell/chunk-0gmzdmcr.js — Claude Code 2.1.310 模块 chunk-0gmzdmcr.js
import { He } from "../fs/async-hooks.9s1z.js";
import { U } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { _ } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Wh } from "../shared/chunk-mzb69x1h.js";
import { createHash as c } from "crypto";
var f = 2048;
class t {
  #e = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Set();
  record(e, n) {
    if (n.msg_id === void 0) return;
    let o = this.#e.get(e);
    if (o === void 0) o = /* @__PURE__ */ new Map(), this.#e.set(e, o);
    if (o.set(n.msg_id, r(n)), !this.#n.has(e)) h(o);
  }
  wrote(e, n) {
    return n.msg_id !== void 0 && this.#e.get(e)?.get(n.msg_id) === r(n);
  }
  retire(e, n) {
    let o = new Set(n);
    this.#o(e, (s) => !o.has(s));
  }
  retain(e, n) {
    this.#n.add(e), this.#o(e, (o) => n.has(o));
  }
  forget(e) {
    this.#e.delete(e);
  }
  #o(e, n) {
    let o = this.#e.get(e);
    if (o === void 0) return;
    for (let s of o.keys()) if (!n(s)) o.delete(s);
    if (o.size === 0) this.#e.delete(e);
  }
}
function h(e) {
  if (e.size <= f) return;
  let [n] = e.keys();
  if (n !== void 0) e.delete(n);
}
function r(e) {
  return c("sha256").update(_([e.from, e.timestamp, e.text, e.summary ?? null, e.color ?? null, e.from_plugin ?? null])).digest("hex");
}
class i {
  getCurrentMode = null;
  modeAtUnwire = void 0;
  onPeerHeld = null;
  onPeerHoldReleased = null;
  onPeerHoldDropped = null;
  sendPeerReceipt = null;
  recordCorrespondent = null;
  publishAvailability = null;
  unsubscribeAvailabilityRefresh = null;
  shutdownSettleHandle = null;
  shuttingDown = false;
  held = [];
  announced = /* @__PURE__ */ new WeakMap();
  reset() {
    this.held.length = 0, this.getCurrentMode = null, this.modeAtUnwire = void 0, this.onPeerHeld = null, this.onPeerHoldReleased = null, this.onPeerHoldDropped = null, this.shutdownSettleHandle?.(), this.shutdownSettleHandle = null, this.shuttingDown = false, this.sendPeerReceipt = null, this.recordCorrespondent = null, this.publishAvailability = null, this.unsubscribeAvailabilityRefresh?.(), this.unsubscribeAvailabilityRefresh = null;
  }
}
class d {
  outstandingSends = [];
  awaitingTerminal = [];
  reset() {
    this.outstandingSends.length = 0, this.awaitingTerminal.length = 0;
  }
}
class l {
  pacer = null;
  reset() {
    this.pacer = null;
  }
}
class a {
  ownUdsHopToken = void 0;
  ownBridgePeerAddressResolver = void 0;
  messageDropped = He();
  reset() {
    this.ownUdsHopToken = void 0, this.ownBridgePeerAddressResolver = void 0, this.messageDropped.clear();
  }
}
class u {
  pending = /* @__PURE__ */ new Map();
  pendingSandbox = /* @__PURE__ */ new Map();
  pendingPlanApproval = null;
  clear() {
    this.pending.clear(), this.pendingSandbox.clear(), this.pendingPlanApproval = null;
  }
}
class p {
  reportedDroppedEntries = /* @__PURE__ */ new Set();
  pendingPrunes = /* @__PURE__ */ new Map();
  ledger = new t();
}
class m {
  updated = He();
  locks = Wh();
  leaderTeamName = void 0;
  reset() {
    if (this.leaderTeamName === void 0) return;
    this.leaderTeamName = void 0;
    try {
      this.updated.emit();
    } catch {
    }
  }
}
class g {
  inbound = new i();
  receipts = new d();
  outbound = new l();
  ingress = new a();
  swarmPermissions = new u();
  mailbox = new p();
  taskList = new m();
}
var y = new W(() => new g());
function Ha() {
  return y.of(U().host);
}
export {
  Ha
};
