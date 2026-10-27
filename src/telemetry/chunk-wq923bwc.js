// telemetry/chunk-wq923bwc.js — Claude Code 2.1.310 模块 chunk-wq923bwc.js
import { es } from "../context/not-admin-owned.ersa.js";
import { W } from "../shared/chunk-3y73jbfr.js";
function f3t(t) {
  let e;
  for (let n in t) if (n.startsWith("_PROTO_")) {
    if (e === void 0) e = { ...t };
    delete e[n];
  }
  return e ?? t;
}
var u = 1e3;
function l() {
  return { eventQueue: [], sink: null, droppedEventCount: 0 };
}
function i(t, e) {
  if (t.eventQueue.length >= u) t.eventQueue.shift(), t.droppedEventCount++;
  t.eventQueue.push(e);
}
class r {
  state = l();
}
var c = new W(() => new r());
function s() {
  return es(c);
}
function Hes(t) {
  let e = s().state;
  if (e.sink !== null) return false;
  if (e.sink = t, e.eventQueue.length > 0) {
    let n = e.eventQueue;
    e.eventQueue = [], queueMicrotask(() => {
      for (let o of n) if (o.async) t.logEventAsync(o.eventName, o.metadata);
      else t.logEvent(o.eventName, o.metadata);
    });
  }
  return true;
}
function a(t, e) {
  let n = s().state;
  if (n.sink === null) {
    i(n, { eventName: t, metadata: e, async: false });
    return;
  }
  n.sink.logEvent(t, e);
}
async function Zs(t, e) {
  let n = s().state;
  if (n.sink === null) {
    i(n, { eventName: t, metadata: e, async: true });
    return;
  }
  await n.sink.logEventAsync(t, e);
}
export {
  Hes,
  Zs,
  a,
  f3t
};
