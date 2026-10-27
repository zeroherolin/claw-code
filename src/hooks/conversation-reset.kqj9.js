// hooks/conversation-reset.kqj9.js — Claude Code 2.1.310 模块 chunk-kqj957ew.js
import { Vt } from "../shared/chunk-9sbknd2z.js";
import { F, V, Yts, ke, ao, irs, Rit, ye, fie, Mit, Y3t, Hit, J, Lee, W3e, Vc } from "../context/not-admin-owned.ersa.js";
import { Ve, Qe, N } from "../telemetry/anthropic-workspace-id.36ys.js";
import { g } from "../telemetry/chunk-wn8xtaqg.js";
import { zn, Vi, _l } from "../settings/global-config-and-gates.27xj.js";
import { i } from "../shared/environment.9a41.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { xt } from "../mcp/toolbox-mcp-server-id.fewh.js";
import { xM } from "../remote/moved-directory.z3m0.js";
import { Mht } from "../context/team-memory-sync.0s3j.js";
import { fWn, pf, pne, vLt, Zq, wIr, $mt, Pk, ff, qje, yw, pzn, Tne, nFt, $Me, xd, tPo, bin, oJ, m3, sJ, bPo, EPo, ca, vPo, uHr, Rg, Dne, Rin, YMe, MB, W6, Qke, IPo, Hin, XN, q6, xg, D_ } from "../core/conversation-engine.31gx.js";
import { _p } from "../agents/in-process-teammate.040f.js";
import { vQ } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { FDe, Pwt, T6e, Iwt, Owt } from "../artifacts/same-account.bxg8.js";
import { YBo } from "../artifacts/utf-8.vzjz.js";
import { hf } from "../fs/unadoptable-session-id.vxq1.js";
import { Yu, Q7e, $B, Cn } from "../git/bridge-child-tool-diff.m7a8.js";
import { hGe } from "../plugins/claudeai-plugins-sync-enabled.61rf.js";
import { lhn } from "../artifacts/artifact-share-status.jp2v.js";
import { jZe } from "../commands/skill-bundled-extract.zw7p.js";
import { kTe } from "../telemetry/bridge-resume-respects-local-owner.8dk3.js";
import { LHo } from "../telemetry/bg-roster-parse-failed.yhsj.js";
import { dhe } from "../vendor/mcp-sdk/chunk-mcb3r2r5.js";
import { Tte } from "../shared/goal-proposal.6vet.js";
import { FFn, $Fn } from "../artifacts/chunk-qdjaz4y7.js";
import { y9 } from "../shared/chunk-wat1841y.js";
import { KEe } from "../shared/dev-intent-detect.4hw4.js";
import { Cut } from "../shared/project-scan.wq9f.js";
import { pho } from "../shared/chunk-dmpp51a5.js";
import { lho } from "../web/transcript-cleared.90fv.js";
import { K1e } from "../shared/session-cron-carry.ntfm.js";
import { pB } from "../shared/chunk-evnd096q.js";
import { IFn } from "../agents/chunk-9e0559c6.js";
import { HFn } from "../agents/observer-subagent-fanout.taja.js";
import { us } from "../agents/in-process-teammate.e4p6.js";
import { Qre } from "../telemetry/stop-hook-removed.w16m.js";
import { randomUUID as le } from "crypto";
var ce = null;
async function* iho({ session: o, setMessages: a, readFileState: p, sessionEnvVars: K, toolState: q, memorySelector: z, getAppState: r, setAppState: M, sessionHooksRegistry: W, dialogStore: Y, isolationLatch: c, taskRegistry: _, clearedSessionTitle: C, storageV5: n, credentials: O, deferSessionStartHooks: D, releaseDeferredSessionStartHooks: Q, resetTrigger: I, resetUserMessageUuid: X }) {
  HFn(o), D_(q6), Iwt(), T6e(), FDe();
  let Z = $Me();
  await nFt(o, "clear", { sessionHooks: W, getAppState: r, signal: AbortSignal.timeout(Z), storageV5: n, credentials: O }), fWn("conversation_clear");
  let S = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Map();
  if (r && c?.current != null) {
    let e = Object.values(r().tasks).filter((s) => !P(s) && (Cn(s) || Yu(s)));
    if (e.every(ue)) {
      for (let s of e) if (S.add(s.id), Cn(s)) A.set(s.id, s.agentId);
    }
  }
  let R = (e) => P(e) || S.has(e.id), u = /* @__PURE__ */ new Set(), U = [];
  if (r) for (let e of Object.values(r().tasks)) {
    if (R(e)) continue;
    if (Cn(e)) u.add(e.agentId), U.push(e);
    else if (Yu(e)) u.add(e.identity.agentId);
  }
  Q?.(), vQ("clear"), y9(o, void 0), a((e) => (pzn.of(o).rollOverContext("main", pne(e)), []));
  let ee = r ? Object.values(r().tasks).some((e) => !R(e) && Q7e.has(e.type) && (e.status === "running" || Cn(e) && yw(e))) : false;
  lho(o, u, M, q, n, ee);
  let b = ke();
  try {
    ff(b);
  } catch {
    t(`/clear: originalCwd "${b}" no longer exists; falling back`);
    let e = ao();
    if (e !== b) try {
      ff(e);
    } catch {
    }
  }
  if (p.clear(), KEe.of(o.host).reset(), Pk.of(o).discardAll(), D_((e) => e.mode === "task-notification" && typeof e.value === "string" && $mt(e.value) !== null), K?.clear(), Zq(z), c && u.size === 0 && S.size === 0) c.current = null;
  if (r) $Fn(r);
  let v = Rg(V()), j = Dne(), h = !C && v !== void 0, te = h && uHr(ca(V())), T, w;
  if (Pwt(), M) {
    if (Y?.dismissKind(Tte.kind), lhn(/* @__PURE__ */ new Set()), M((e) => {
      let s = {}, E = [];
      for (let [d, m] of Object.entries(e.tasks)) {
        if (!R(m)) {
          s[d] = m;
          continue;
        }
        E.push(d);
        try {
          if (m.status === "running") {
            if (pf(m)) m.shellCommand?.kill(), m.shellCommand?.cleanup();
            if ("abortController" in m) m.abortController?.abort();
          }
        } catch (me) {
          l(me);
        }
        hf(d);
      }
      T = F(Object.values(s), (d) => !fe.has(d.type) && !vLt(d)), w = e.activeGoal;
      let f = e.transcripts;
      if (f && E.length > 0) {
        f = { ...f };
        for (let d of E) delete f[d];
      }
      return { ...FFn(e), tasks: s, ...f !== e.transcripts && { transcripts: f }, ...e.viewingAgentTaskId !== void 0 && E.includes(e.viewingAgentTaskId) && { viewingAgentTaskId: void 0, viewSelectionMode: "none" }, runningSubagents: T === 0 ? 0 : e.runningSubagents, ...{ endedByModel: false }, attribution: Mht(), cacheBreakerPhrase: void 0, sendMessagePins: {}, agentNameRegistry: IFn(e.agentNameRegistry, s), frameUrls: {}, standaloneAgentContext: h && e.standaloneAgentContext?.name ? { name: e.standaloneAgentContext.name } : void 0, fileHistory: { snapshots: [], trackedFiles: /* @__PURE__ */ new Set(), snapshotSequence: 0 } };
    }), w !== void 0) Qre(w, "session_clear");
    pB({});
  }
  if (c && u.size === 0 && S.size > 0 && r && ![...S].some((e) => Object.hasOwn(r().tasks, e) || G(e, A.get(e) ?? e)) && !Object.values(r().tasks).some((e) => Cn(e) && [...A.values()].includes(e.agentId))) c.current = null;
  if (_ && T === 0) _.resetWebSearchBudget();
  if (r) {
    for (let e of r().mcp.clients) if (e.name === "ide" && e.type === "connected") {
      dhe(e, void 0);
      let { clearServerCache: s } = import.meta.require("../mcp/emit-tripwire-event.zkve.js").mcpClientModule();
      await s(e.name, e.config).catch(() => {
      });
    }
  }
  YBo();
  let oe = V(), se = C ? xd() ?? _p() : void 0, re = sJ(), H = T === 0 && u.size === 0 ? void 0 : Lee(), ne = [...Hin()], ie = false, ae = false;
  if (Rin(), re) bPo();
  if (ie) fie(true), Y3t(true);
  if (ae) Mit(true), Hit(true);
  if (H !== void 0) W3e(H);
  let k = le();
  if (ye() || Vc() && kTe()) {
    let e = I === "clear" ? Vt(X) : null;
    y9(o, k), Vi({ type: "conversation_reset", new_conversation_id: k, uuid: k, ...I !== void 0 && { trigger: I }, ...e !== null && { user_message_uuid: e }, timestamp: (/* @__PURE__ */ new Date()).toISOString() }), g("bridge_conversation_reset");
  }
  if (Cut.of(o.host).conversationReset(), yield { type: "conversation_reset", newConversationId: k }, irs(n), Rit(), ye() && xM() && bin() && !J()) tPo();
  let L = ca(V()), pe = te || h && uHr(L);
  if (Yts({ setCurrentAsParent: true }), h && v !== void 0) MB(v);
  let ge = Promise.resolve(true);
  if (jZe(), Owt(), pho.of(o).reset(), xt().needsAuthNoticedThisSession.clear(), hGe(o), i.CLAUDE_CODE_SESSION_ID) process.env.CLAUDE_CODE_SESSION_ID = V();
  await oJ();
  for (let e of ce?.pauseStampsCarriedAcrossClear(r?.().mcp.clients, ne) ?? []) IPo({ ...e, afterUuid: null }, n);
  if (EPo(), vPo(L), await LHo(V(), _p(), n), C) await m3(oe, C, se, "user", n);
  else if (v) {
    if (await m3(V(), v, void 0, "user", n), j) await YMe(V(), j, void 0, "user", n);
  }
  for (let e of U) if (e.status === "running") qje(e.agentId);
  let { isCoordinatorMode: de } = import.meta.require("../context/get-coordinator-system-prompt.94gk.js");
  W6(de() ? "coordinator" : "normal");
  let B = _l();
  if (B) XN(B, n);
  if (c?.current) Qke(c.current, n);
  if (D) {
    if (D((e) => Tne(o, "clear", { signal: e, storageV5: n, credentials: O }).catch((s) => {
      if (Ve(s)) t(`SessionStart hooks after /clear aborted: ${N(s).message}`);
      else l(Qe(N(s), "SessionStart hooks after /clear threw"));
      return [];
    })), wIr()) a(K1e);
    return;
  }
  let x = await Tne(o, "clear", { storageV5: n, credentials: O });
  if (x.length > 0) a(() => x);
  if (wIr()) a(K1e);
}
function P(o) {
  return "isBackgrounded" in o && o.isBackgrounded === false;
}
function ue(o) {
  return Cn(o) && $B(o) && (o.keepaliveReasons?.size ?? 0) === 0 && o.finalizing !== true && o.resuming !== true && (o.pendingMessages?.length ?? 0) === 0 && !G(o.id, o.agentId);
}
function G(o, a) {
  return zn().resumesInFlight.has(a) || xg().getCommandQueue().some((p) => p.mode === "task-notification" && (p.taskId === o || p.agentId === a));
}
var fe = /* @__PURE__ */ new Set(["local_bash", "monitor_mcp", "monitor_ws", "mcp_task"]);
function aho(o) {
  return Object.values(o).some((a) => !P(a) && Q7e.has(a.type) && !us(a.status));
}
export {
  aho,
  iho
};
