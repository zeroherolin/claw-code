// shared/session-activity-parked-exceeds-refcount.8mxy.js — Claude Code 2.1.310 模块 chunk-8mxy6wbw.js
import { He } from "../fs/async-hooks.9s1z.js";
import { U, LTn } from "../context/not-admin-owned.ersa.js";
import { W } from "./chunk-3y73jbfr.js";
import { _t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Y } from "./async-hooks.923e.js";
import { i } from "./environment.9a41.js";
var u = 3e4;
function y() {
  return { activityCallback: null, refcount: 0, mainLoopRefcount: 0, parkedOnUser: 0, parkGeneration: 0, activeReasons: /* @__PURE__ */ new Map(), oldestActivityStartedAt: null, heartbeatTimer: null, idleTimer: null, cleanupHandle: null };
}
var l = "cli", f = 1e3;
class v {
  activityKey = () => l;
  mainLoopActivityListener = null;
  nestedChainDropListener = null;
  workStarted = He();
  statesByKey = /* @__PURE__ */ new Map();
  evictedKeys = /* @__PURE__ */ new Set();
  setActivityKey(e) {
    this.activityKey = e;
  }
  currentKey() {
    return this.activityKey();
  }
  stateCount() {
    return this.statesByKey.size;
  }
  currentStateOrCreate() {
    let e = this.activityKey();
    if (this.evictedKeys.has(e)) return null;
    let t = this.statesByKey.get(e);
    if (!t) t = y(), this.statesByKey.set(e, t);
    return t;
  }
  currentStateOrNull() {
    return this.statesByKey.get(this.activityKey()) ?? null;
  }
  reset() {
    for (let e of [...this.statesByKey.keys()]) this.evictKey(e);
    this.evictedKeys.clear(), this.activityKey = () => l, this.mainLoopActivityListener = null, this.nestedChainDropListener = null, this.workStarted.clear();
  }
  evictKey(e) {
    if (this.evictedKeys.add(e), this.evictedKeys.size > f) {
      let o = this.evictedKeys.values().next().value;
      if (o !== void 0) this.evictedKeys.delete(o);
    }
    let t = this.statesByKey.get(e);
    if (!t) return;
    if (t.heartbeatTimer !== null) clearInterval(t.heartbeatTimer);
    if (t.idleTimer !== null) clearTimeout(t.idleTimer);
    t.cleanupHandle?.(), this.statesByKey.delete(e);
  }
}
var p = new W(() => new v());
function r() {
  return p.of(U().host);
}
function d(e) {
  a(e), e.heartbeatTimer = setInterval((t) => {
    if (c(t)) {
      Y("debug", "session_keepalive_parked_on_user", { refcount: t.refcount, parked_on_user: t.parkedOnUser });
      return;
    }
    if (Y("debug", "session_keepalive_heartbeat", { refcount: t.refcount, main_loop_refcount: t.mainLoopRefcount, active: Object.fromEntries(t.activeReasons) }), i.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES) t.activityCallback?.();
  }, u, e);
}
function S(e) {
  if (a(e), e.activityCallback === null) return;
  e.idleTimer = setTimeout((t) => {
    Y("info", "session_idle_30s"), t.idleTimer = null;
  }, u, e);
}
function a(e) {
  if (e.idleTimer !== null) clearTimeout(e.idleTimer), e.idleTimer = null;
}
function BQs(e) {
  let t = r().currentStateOrCreate();
  if (!t) return;
  if (t.activityCallback = e, t.refcount > 0 && t.heartbeatTimer === null) d(t);
}
function jQs() {
  let e = r().currentStateOrNull();
  if (!e) return;
  if (e.activityCallback = null, e.heartbeatTimer !== null) clearInterval(e.heartbeatTimer), e.heartbeatTimer = null;
  a(e);
}
function WQs() {
  let e = r().currentStateOrNull();
  if (e && i.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES) e.activityCallback?.();
}
function Gzo(e) {
  r().mainLoopActivityListener = e;
}
function zzo(e) {
  r().nestedChainDropListener = e;
}
function GQs(e) {
  r().nestedChainDropListener?.(e);
}
function zQs(e) {
  return (r().currentStateOrNull()?.activeReasons.get(e) ?? 0) > 0;
}
function Bwt() {
  for (let e of r().statesByKey.values()) if (e.refcount > 0 && !c(e)) return true;
  return false;
}
function hZn(e) {
  return r().workStarted.subscribe(e);
}
function EAe() {
  return r().currentStateOrNull()?.mainLoopRefcount ?? 0;
}
function S_e() {
  return LTn() || EAe() > 0;
}
function nI(e, t) {
  let o = r(), n = o.currentStateOrCreate();
  if (!n) return;
  if (n.refcount++, t === void 0) n.mainLoopRefcount++, o.mainLoopActivityListener?.(n.mainLoopRefcount);
  if (n.activeReasons.set(e, (n.activeReasons.get(e) ?? 0) + 1), n.refcount === 1) {
    if (n.oldestActivityStartedAt = Date.now(), n.activityCallback !== null && n.heartbeatTimer === null) d(n);
  }
  if (n.refcount - n.parkedOnUser === 1) o.workStarted.emit();
  if (n.cleanupHandle === null) {
    let s = o.activityKey();
    n.cleanupHandle = _t(async () => {
      Y("info", "session_activity_at_shutdown", { owner_key: s, refcount: n.refcount, active: Object.fromEntries(n.activeReasons), oldest_activity_ms: n.refcount > 0 && n.oldestActivityStartedAt !== null ? Date.now() - n.oldestActivityStartedAt : null });
    });
  }
}
function rI(e, t) {
  let o = r(), n = o.currentStateOrNull();
  if (!n) return;
  if (n.refcount > 0) n.refcount--;
  if (t === void 0) if (n.mainLoopRefcount > 0) n.mainLoopRefcount--, o.mainLoopActivityListener?.(n.mainLoopRefcount);
  else Y("warn", "session_activity_main_loop_underflow", { reason: e });
  let s = (n.activeReasons.get(e) ?? 0) - 1;
  if (s > 0) n.activeReasons.set(e, s);
  else n.activeReasons.delete(e);
  if (n.refcount === 0) {
    if (n.parkedOnUser > 0) Y("warn", "session_activity_parked_leaked", { parked_on_user: n.parkedOnUser }), n.parkedOnUser = 0, n.parkGeneration++;
    if (n.heartbeatTimer !== null) clearInterval(n.heartbeatTimer), n.heartbeatTimer = null, S(n);
  }
}
function Gce() {
  if (i.CLAUDE_CODE_DISABLE_AWAITING_USER_IDLE) return () => {
  };
  let e = r(), t = e.currentStateOrNull();
  if (!t) return () => {
  };
  if (t.parkedOnUser >= t.refcount) return Y("warn", "session_activity_parked_exceeds_refcount", { refcount: t.refcount, parked_on_user: t.parkedOnUser }), () => {
  };
  t.parkedOnUser++;
  let o = t.parkGeneration, n = false;
  return () => {
    if (n) return;
    if (n = true, t.parkGeneration === o && t.parkedOnUser > 0) {
      if (t.parkedOnUser--, t.refcount - t.parkedOnUser === 1) e.workStarted.emit();
    }
  };
}
function VQs() {
  let e = r().currentStateOrNull();
  return e !== null && c(e);
}
function c(e) {
  return !i.CLAUDE_CODE_DISABLE_AWAITING_USER_IDLE && e.parkedOnUser > 0 && e.refcount - e.parkedOnUser <= 0;
}
export {
  BQs,
  Bwt,
  EAe,
  GQs,
  Gce,
  Gzo,
  S_e,
  VQs,
  WQs,
  hZn,
  jQs,
  nI,
  rI,
  zQs,
  zzo
};
