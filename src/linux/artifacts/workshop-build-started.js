// linux/artifacts/workshop-build-started.js — Claude Code 2.1.310（linux）模块 chunk-njg1cdnf.js
import { b, c, Hn } from "../agents/third-party.js";
import { ar } from "./cobalt-plinth-lovage.js";
import { g } from "../telemetry/chunk-9d6962d2.js";
import { Soe } from "../shared/chunk-67236fa7.js";
var k = /^\d{1,12}-[0-9a-f]{1,32}$/;
function UMt(e) {
  return ar.test(e) ? Hn(e) : b("nonconforming");
}
function p(e) {
  return k.test(e) ? Hn(e) : b("nonconforming");
}
var h = { startedSeen: [], completedSeen: [], startedPublishes: {}, invokeT0: null }, JTs = Soe("workshopTelemetry", h);
function QTs(e) {
  e.set((t) => ({ ...t, invokeT0: performance.now() }));
}
function ZTs(e) {
  if (e === void 0 || e.invokeT0 === null) return e;
  return { ...e, invokeT0: null };
}
function S(e, t) {
  if (e.startedSeen.includes(t)) return e;
  return { ...e, startedSeen: [...e.startedSeen, t] };
}
function f(e, t) {
  if (e.completedSeen.includes(t)) return e;
  return { ...e, completedSeen: [...e.completedSeen, t] };
}
function eAs(e, t, l, i, o, d) {
  if (g("workshop_turn", { artifact_slug: UMt(t), artifact_version: p(l), decisions_total: o, decisions_resolved: d, state: c(i) }), i !== "started") return;
  let s = true;
  if (e.set((n) => (s = n.startedSeen.includes(t), S(n, t))), !s) g("workshop_build_started", { artifact_slug: UMt(t) });
}
function qgo(e, t, l, i, o, d) {
  let s;
  e.set((a) => {
    let r = a;
    if (r.invokeT0 !== null) r = { ...r, invokeT0: null };
    if (i === "started") r = S(r, t);
    if (o.n > 0) r = f(r, t);
    else if (i === "started" && !r.completedSeen.includes(t)) {
      let m = (r.startedPublishes[t] ?? 0) + 1;
      if (r = { ...r, startedPublishes: { ...r.startedPublishes, [t]: m } }, m >= 2) r = f(r, t);
    }
    return s = { prev: a, next: r }, r;
  });
  let { prev: n, next: u } = s;
  if (n.invokeT0 !== null && d) g("workshop_first_page", { invoke_to_publish_ms: Math.round(performance.now() - n.invokeT0), first_publish_state: c(i) });
  if (!n.startedSeen.includes(t) && u.startedSeen.includes(t)) g("workshop_build_started", { artifact_slug: UMt(t) });
  if (!n.completedSeen.includes(t) && u.completedSeen.includes(t)) {
    let a = o.n > 0 ? "structural" : "post_kickoff_republish";
    g("workshop_build_completed", { artifact_slug: UMt(t), artifact_version: p(l), source: c(a), deliverables_n: o.n, deliverables_pr: o.pr, deliverables_artifact: o.artifact, deliverables_other: o.other });
  }
}
export {
  JTs,
  QTs,
  UMt,
  ZTs,
  eAs,
  qgo
};
