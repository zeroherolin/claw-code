// linux/shared/trace-context.js — Claude Code 2.1.310（linux）模块 chunk-km7ss0sz.js
import { Kt } from "./chunk-3b9c376b.js";
var a = /^00-([0-9a-f]{32})-([0-9a-f]{16})-[0-9a-f]{2}$/, c = "0".repeat(32), i = "0".repeat(16), u = 8;
function d(n) {
  if (typeof n !== "string") return false;
  let t = a.exec(n);
  return t !== null && t[1] !== c && t[2] !== i;
}
function JCs(n, { isCrossSession: t }) {
  if (t || typeof n !== "object" || n === null) return;
  if (!("trace_context" in n) || !("uuid" in n)) return;
  let r = n.trace_context, o = Kt(n.uuid);
  if (!d(r) || !o) return;
  return { traceparent: r, eventUuid: o };
}
function QCs(n) {
  let t = n.findLast((e) => e.traceContext)?.traceContext;
  if (!t) return { parent: void 0, linked: [] };
  let r = /* @__PURE__ */ new Set([t.traceparent]), o = [];
  for (let { traceContext: e } of n) if (e && !r.has(e.traceparent)) r.add(e.traceparent), o.push(e);
  return { parent: t, linked: o.slice(-u) };
}
var s = "anthropic/ccr-turn-event-uuid", T = "anthropic/ccr-turn-linked-event-uuids";
function sBn(n) {
  let t = Kt(n?.parent?.eventUuid);
  if (!n || !t) return {};
  let r = n.linked.flatMap((o) => {
    let e = Kt(o.eventUuid);
    return e ? [e] : [];
  });
  return { [s]: t, ...r.length > 0 && { [T]: r } };
}
export {
  JCs,
  QCs,
  sBn
};
