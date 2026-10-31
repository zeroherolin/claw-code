// linux/agents/artifact-live-subscribe.js — Claude Code 2.1.310（linux）模块 chunk-bt192xtd.js
import { ye } from "../context/not-admin-owned.js";
import { c } from "./third-party.js";
import { g, f } from "../telemetry/chunk-9d6962d2.js";
import { O3 } from "../core/conversation-engine.js";
import { Z } from "../artifacts/same-account.js";
import { Hme, zSo } from "../artifacts/cobalt-plinth-samphire.js";
import { kIe } from "../artifacts/slate-lantern-hush.js";
import { o3 } from "../shared/bg-session.js";
var u = 32;
function Puo(n) {
  if (n.publishContext !== "subagent" || n.context.agentId === void 0 || n.context.teammateContext !== void 0) return null;
  let { publishContext: e } = Hme({ agentId: void 0, isNonInteractiveSession: ye() });
  return o3(e) ? e : null;
}
function NSr(n, e) {
  let t = Z().live.pendingSubagentArms, s = t.get(n) ?? [], i = s.findIndex((o) => o.slug === e.slug);
  if (i === -1) s.push(e);
  else s[i] = e;
  t.delete(n), t.set(n, s);
  let r = 0;
  for (let o of t.values()) r += o.length;
  while (r > u) {
    let [o, a] = t.entries().next().value;
    if (a.shift(), a.length === 0) t.delete(o);
    r--, f("artifact_live_subscribe", "subagent_arm_evicted");
  }
}
function l(n) {
  let e = Z().live.pendingSubagentArms, t = e.get(n) ?? [];
  return e.delete(n), t;
}
var d = 256;
function m(n) {
  let e = Z().live.finishedSubagentAdopters;
  e.delete(n), e.add(n);
  while (e.size > d) e.delete(e.values().next().value);
}
function FTi(n) {
  let { agentId: e, context: t } = n;
  m(e);
  let s = l(e);
  if (s.length === 0) return;
  let { publishContext: i } = Hme({ agentId: t.agentId, agentType: t.agentContext?.agentType, isNonInteractiveSession: t.options.isNonInteractiveSession });
  if (i === "subagent" && t.agentId !== void 0) {
    let o = O3(t.agentId, t.taskRegistry) === t.agentId || !Z().live.finishedSubagentAdopters.has(t.agentId);
    for (let a of s) if (o) NSr(t.agentId, a);
    else f("artifact_live_subscribe", "subagent_arm_orphaned");
    return;
  }
  if (!o3(i)) return;
  let r = { ...t, abortController: new AbortController() };
  for (let o of s) kIe({ ...o, publishContext: i, getKnownVer: zSo(t.getArtifactReadObservation, o.slug), context: r, adoptedPublish: true, announceArmlessEnd: true }).catch(() => {
  });
  g("artifact_live_subscribe", { subagent_publish_adopted: true, count: s.length, publish_context: c(i) });
}
export {
  FTi,
  NSr,
  Puo
};
