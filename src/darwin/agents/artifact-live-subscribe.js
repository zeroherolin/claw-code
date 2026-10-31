// darwin/agents/artifact-live-subscribe.js — Claude Code 2.1.310（darwin）模块 chunk-4zbgjbhv.js
import { ye } from "../context/not-admin-owned.js";
import { c } from "./third-party.js";
import { g, p } from "../telemetry/chunk-9d6962d2.js";
import { j9 } from "../core/conversation-engine.js";
import { Z } from "../artifacts/same-account.js";
import { $me, _wo } from "../artifacts/cobalt-plinth-samphire.js";
import { xIe } from "../artifacts/slate-lantern-hush.js";
import { m9 } from "../shared/bg-session.js";
var u = 32;
function juo(n) {
  if (n.publishContext !== "subagent" || n.context.agentId === void 0 || n.context.teammateContext !== void 0) return null;
  let { publishContext: e } = $me({ agentId: void 0, isNonInteractiveSession: ye() });
  return m9(e) ? e : null;
}
function zbr(n, e) {
  let t = Z().live.pendingSubagentArms, s = t.get(n) ?? [], i = s.findIndex((o) => o.slug === e.slug);
  if (i === -1) s.push(e);
  else s[i] = e;
  t.delete(n), t.set(n, s);
  let r = 0;
  for (let o of t.values()) r += o.length;
  while (r > u) {
    let [o, a] = t.entries().next().value;
    if (a.shift(), a.length === 0) t.delete(o);
    r--, p("artifact_live_subscribe", "subagent_arm_evicted");
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
function yTi(n) {
  let { agentId: e, context: t } = n;
  m(e);
  let s = l(e);
  if (s.length === 0) return;
  let { publishContext: i } = $me({ agentId: t.agentId, agentType: t.agentContext?.agentType, isNonInteractiveSession: t.options.isNonInteractiveSession });
  if (i === "subagent" && t.agentId !== void 0) {
    let o = j9(t.agentId, t.taskRegistry) === t.agentId || !Z().live.finishedSubagentAdopters.has(t.agentId);
    for (let a of s) if (o) zbr(t.agentId, a);
    else p("artifact_live_subscribe", "subagent_arm_orphaned");
    return;
  }
  if (!m9(i)) return;
  let r = { ...t, abortController: new AbortController() };
  for (let o of s) xIe({ ...o, publishContext: i, getKnownVer: _wo(t.getArtifactReadObservation, o.slug), context: r, adoptedPublish: true, announceArmlessEnd: true }).catch(() => {
  });
  g("artifact_live_subscribe", { subagent_publish_adopted: true, count: s.length, publish_context: c(i) });
}
export {
  juo,
  yTi,
  zbr
};
