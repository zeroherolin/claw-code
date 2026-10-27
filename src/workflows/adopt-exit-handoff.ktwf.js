// workflows/adopt-exit-handoff.ktwf.js — Claude Code 2.1.310 模块 chunk-ktwfh0nc.js
import { Br } from "../shared/chunk-9sbknd2z.js";
import { L, U } from "../context/not-admin-owned.ersa.js";
import { Nt } from "../shared/chunk-3kevgx4j.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Fm } from "../agents/in-process-teammate.040f.js";
import { Nl } from "../permissions/turn-abort.yvwf.js";
import { i } from "../shared/environment.9a41.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Wg } from "../plugins/skills-dir.cemw.js";
import { La, wS, rc, _H } from "../settings/global-config-and-gates.27xj.js";
import { Tn } from "../mcp/allowed-warning.j2d4.js";
import { Z } from "../artifacts/same-account.bxg8.js";
import { VIs, pf, Pu } from "../core/conversation-engine.31gx.js";
import { oR, tgn, RJn } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { hf } from "../fs/unadoptable-session-id.vxq1.js";
import { Mp, hJ } from "../git/bridge-child-tool-diff.m7a8.js";
import { rte } from "../shared/chunk-zbkxqwyf.js";
import { zmr, Vmr, Kmr, z5, YPn, qmr, Clt, Ymr, JPn, Ono, Mno, GX, Jmr, Qmr, ZPn } from "../agents/refusal-fallback-latch-reset.vg65.js";
import { XW } from "./chunk-bsz0xgn6.js";
import { IJt, Bct, sLn } from "../shared/chunk-5ym902nn.js";
import { Sy } from "../mcp/artifact-summon-arm-emit.jfmv.js";
function x(r) {
  let { bySlug: n } = sLn();
  if (n.size === 0) return r;
  return r.map((o) => {
    let d = Math.min((n.get(o.slug) ?? 0) + (o.unattendedReplies ?? 0), Bct);
    return d > 0 ? { ...o, unattendedReplies: d } : o;
  });
}
var O = 2e3, R = "exit-handoff agent flush timeout";
function y() {
  let r = rte.of(U().host).last;
  return [...wS()?.adoptShellOutputReadRoot ? [wS().adoptShellOutputReadRoot] : [], ...r ? [tgn(RJn(r.worktreePath))] : []];
}
function E(r) {
  let n = rc() ? _H() : void 0, o = n && Z().builtInArtifactHiddenForMcp ? L([...Array.from(Z().live.supervisors.values()).filter((e) => e.autoReactWiring !== void 0).map((e) => e.slug), ...Object.values(r).flatMap((e) => e.type === "monitor_ws" && e.status === "running" && e.autoReactArmed === true && e.frameLive !== void 0 ? [e.frameLive.slug] : [])]) : [];
  if (!n || i.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF) {
    if (n) {
      let e = Z().live;
      if (JPn(n), e.bootingWiredArms.size > 0) p("artifact_live_subscribe", "booting_consent_uncarried");
      IJt(/* @__PURE__ */ new Set([...e.inFlightSubscribes, ...o]));
    }
    return { shells: [], workflows: [], agents: [], unresumedAgents: [], unresumedWorkflows: [], frameLive: [], frameLiveTaskIds: [], wakeOnlyFrameLiveSlugs: o, jobDir: void 0, agentTranscriptPaths: {}, workflowTranscriptDirs: {}, projectTempDir: wS()?.adoptShellOutputRoot ?? oR(), mergeShellOutputReadRoots: y() };
  }
  let d = GX(r), c = Object.values(r), f = c.filter((e) => ZPn(e, d)), u = c.filter((e) => Qmr(e, d)), S = Ymr(n), T = (e) => !Z().autoReact.userDisarmed && !Sy(e.slug), b = JPn(n), v = x(qmr([{ entries: YPn(r), fallbackBasis: Date.now() }, { entries: b.filter(T), fallbackBasis: Date.now() }, { entries: Mno(n).filter(T), fallbackBasis: Date.now() }])), k = new Set(v.map((e) => e.slug)), h = Z().live;
  if ([...h.bootingWiredArms.keys()].some((e) => !k.has(e))) p("artifact_live_subscribe", "booting_consent_uncarried");
  return IJt(/* @__PURE__ */ new Set([...k, ...h.inFlightSubscribes, ...o])), { shells: c.filter((e) => Jmr(e, d) && e.agentId === void 0), workflows: f, agents: u, unresumedAgents: S.agents, unresumedWorkflows: S.workflows, frameLive: v, frameLiveTaskIds: Object.values(r).filter((e) => z5(e) && e.frameLive !== void 0 && k.has(e.frameLive.slug)).map((e) => e.id), wakeOnlyFrameLiveSlugs: o, jobDir: n, agentTranscriptPaths: Object.fromEntries(u.map((e) => [e.agentId, Fm(Br(e.agentId))])), workflowTranscriptDirs: Object.fromEntries(f.map((e) => [e.workflowRunId, XW(e.workflowRunId)])), projectTempDir: wS()?.adoptShellOutputRoot ?? oR(), mergeShellOutputReadRoots: y() };
}
function F({ shells: r, workflows: n, agents: o, unresumedAgents: d, unresumedWorkflows: c, frameLive: f, jobDir: u, agentTranscriptPaths: S, workflowTranscriptDirs: T, projectTempDir: b, mergeShellOutputReadRoots: v }, k) {
  for (let e of n) e.abortController?.abort(Nl("background"));
  for (let e of o) e.abortController?.abort(Nl("background"));
  let h = (async () => {
    let e = [];
    if (o.length > 0) {
      try {
        await Nt((async () => {
          await Wg(), await Pu();
        })(), O, R);
      } catch (s) {
        let A = s instanceof Error && s.message === R;
        p("task_local_agent_exit_handoff", A ? "flush_timeout" : "flush_failed"), t(`exit handoff: agent transcript flush failed: ${s}`, { level: "warn" });
      }
      e = await Promise.all(o.map((s) => Vmr(s, { derivedTranscriptPath: S[s.agentId] })));
    }
    e.push(...d);
    let w = (await Promise.all(r.map((s) => zmr(s, { rerootOutputsTo: b })))).filter((s) => s !== null), _ = [...await Promise.all(n.map((s) => Kmr(s, { derivedTranscriptDir: T[s.workflowRunId] }))), ...c];
    if (w.length === 0 && _.length === 0 && e.length === 0 && f.length === 0 || !u) return;
    try {
      if (await Clt(u, { writtenAtMs: Date.now(), origin: "exit", shells: w, cron: [], workflows: _, agents: e, ...f.length > 0 && { frameLive: f } }, { mergeShellOutputRoot: [b, ...v ?? []] }, k), a("tengu_adopt_exit_handoff", { adopted_shells: w.length, adopted_workflows: _.length, adopted_agents: e.length, adopted_frame_live: f.length }), w.length > 0) g("task_local_shell_exit_handoff");
      if (_.length > 0) g("task_local_workflow_exit_handoff");
      if (e.length > 0) g("task_local_agent_exit_handoff");
      t(`exit handoff: ${w.length} background shell(s), ${_.length} workflow(s), ${e.length} agent(s), and ${f.length} comment-monitoring consent record(s) handed to the next wake of this session`);
    } catch (s) {
      for (let A of r) try {
        A.shellCommand?.kill();
      } catch {
      }
      if (r.length > 0) m("task_local_shell_exit_handoff", "write_failed");
      if (n.length > 0) m("task_local_workflow_exit_handoff", "write_failed");
      if (e.length > 0) m("task_local_agent_exit_handoff", "write_failed");
      if (f.length > 0 && u !== void 0) Ono(u, f), m("artifact_live_subscribe", "consent_exit_write_failed");
      t(`exit handoff: adopt.json write failed: ${s}`, { level: "warn" });
    }
  })();
  return VIs(h), h;
}
function g8t(r, n) {
  let o = E(r), d = o.shells.length > 0 || o.workflows.length > 0 || o.agents.length > 0 || o.unresumedAgents.length > 0 || o.unresumedWorkflows.length > 0 || o.frameLive.length > 0 ? F(o, n) : void 0, c = new Set([...o.shells, ...o.workflows, ...o.agents].map((f) => f.id));
  return jmr(r, c), d;
}
function jmr(r, n = /* @__PURE__ */ new Set()) {
  for (let o of Object.values(r)) {
    if (o.status !== "running" || n.has(o.id)) continue;
    try {
      if (pf(o)) o.shellCommand?.kill(), o.shellCommand?.cleanup();
      else if (Tn()) {
        hf(o.id);
        continue;
      } else if ("abortController" in o) o.abortController?.abort();
      if (!Mp(o)) La(o.id, "stopped", { toolUseId: o.toolUseId, summary: o.description, ambient: hJ(o) });
      hf(o.id);
    } catch (d) {
      l(d);
    }
  }
}
export {
  g8t,
  jmr
};
