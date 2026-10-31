// linux/shell/chunk-e0b62862.js — Claude Code 2.1.310（linux）模块 chunk-znr3gw2p.js
import { De } from "../fs/async-hooks.93b1.js";
import { U } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { Wh } from "../shared/chunk-65fb1c9c.js";
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
  messageDropped = De();
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
  updated = De();
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
function Ma() {
  return y.of(U().host);
}
export {
  Ma
};
