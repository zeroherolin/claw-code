// linux/hooks/conversation-reset.js — Claude Code 2.1.310（linux）模块 chunk-f0m66zs2.js
import { Kt } from "../shared/chunk-3b9c376b.js";
import { F, q, mts, ke, ao, Tns, wit, ye, sie, Ait, HYt, Cit, J, Ree, HYe, zc } from "../context/not-admin-owned.js";
import { Ke, Qe, N } from "../telemetry/anthropic-workspace-id.js";
import { g } from "../telemetry/chunk-9d6962d2.js";
import { zn, Ki, yl } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { xt } from "../mcp/toolbox-mcp-server-id.js";
import { vM } from "../remote/moved-directory.js";
import { jht } from "../context/team-memory-sync.js";
import { Kjn, pp, rne, u0t, W4, tIr, Omt, xk, mp, $je, hw, zzn, yne, GNt, MMe, xd, Axo, sin, XJ, oY, JJ, zxo, Vxo, ca, qxo, zDr, Rg, Ane, pin, WMe, C1, OK, Kke, nPo, bin, KN, NK, xg, D_ } from "../core/conversation-engine.js";
import { bf } from "../agents/in-process-teammate.9720.js";
import { g7 } from "../context/tool-result-clearing-after-idle-server-report.js";
import { OLe, Ewt, hKe, kwt, Twt } from "../artifacts/same-account.js";
import { S1o } from "../artifacts/utf-8.js";
import { yp } from "../fs/unadoptable-session-id.js";
import { Yu, GJe, M1, Tn } from "../git/bridge-child-tool-diff.js";
import { ize } from "../plugins/claudeai-plugins-sync-enabled.js";
import { Kgn } from "../artifacts/artifact-share-status.js";
import { OZe } from "../commands/skill-bundled-extract.js";
import { bAe } from "../telemetry/bridge-resume-respects-local-owner.js";
import { LOo } from "../telemetry/bg-roster-parse-failed.js";
import { ohe } from "../vendor/mcp-sdk/chunk-384e0b2c.js";
import { bte } from "../shared/goal-proposal.js";
import { T$n, A$n } from "../artifacts/chunk-bc4d286f.js";
import { a3 } from "../shared/chunk-1d1ed7ec.js";
import { jve } from "../shared/dev-intent-detect.js";
import { vut } from "../shared/project-scan.js";
import { jgo } from "../shared/chunk-5dfabe95.js";
import { $go } from "../web/transcript-cleared.js";
import { $Be } from "../shared/session-cron-carry.js";
import { i1 } from "../shared/chunk-eac3d901.js";
import { _$n } from "../agents/chunk-a6cc40b3.js";
import { w$n } from "../agents/observer-subagent-fanout.js";
import { cs } from "../agents/in-process-teammate.b77f.js";
import { Kre } from "../telemetry/stop-hook-removed.js";
import { randomUUID as le } from "crypto";
var ce = null;
async function* Lgo({ session: o, setMessages: a, readFileState: p, sessionEnvVars: K, toolState: z, memorySelector: W, getAppState: r, setAppState: M, sessionHooksRegistry: Y, dialogStore: Q, isolationLatch: c, taskRegistry: _, clearedSessionTitle: C, storageV5: n, credentials: O, deferSessionStartHooks: D, releaseDeferredSessionStartHooks: X, resetTrigger: I, resetUserMessageUuid: Z }) {
  w$n(o), D_(NK), kwt(), hKe(), OLe();
  let V = MMe();
  await GNt(o, "clear", { sessionHooks: Y, getAppState: r, signal: AbortSignal.timeout(V), storageV5: n, credentials: O }), Kjn("conversation_clear");
  let S = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Map();
  if (r && c?.current != null) {
    let e = Object.values(r().tasks).filter((s) => !P(s) && (Tn(s) || Yu(s)));
    if (e.every(ue)) {
      for (let s of e) if (S.add(s.id), Tn(s)) A.set(s.id, s.agentId);
    }
  }
  let R = (e) => P(e) || S.has(e.id), u = /* @__PURE__ */ new Set(), U = [];
  if (r) for (let e of Object.values(r().tasks)) {
    if (R(e)) continue;
    if (Tn(e)) u.add(e.agentId), U.push(e);
    else if (Yu(e)) u.add(e.identity.agentId);
  }
  X?.(), g7("clear"), a3(o, void 0), a((e) => (zzn.of(o).rollOverContext("main", rne(e)), []));
  let ee = r ? Object.values(r().tasks).some((e) => !R(e) && GJe.has(e.type) && (e.status === "running" || Tn(e) && hw(e))) : false;
  $go(o, u, M, z, n, ee);
  let b = ke();
  try {
    mp(b);
  } catch {
    t(`/clear: originalCwd "${b}" no longer exists; falling back`);
    let e = ao();
    if (e !== b) try {
      mp(e);
    } catch {
    }
  }
  if (p.clear(), jve.of(o.host).reset(), xk.of(o).discardAll(), D_((e) => e.mode === "task-notification" && typeof e.value === "string" && Omt(e.value) !== null), K?.clear(), W4(W), c && u.size === 0 && S.size === 0) c.current = null;
  if (r) A$n(r);
  let v = Rg(q()), j = Ane(), h = !C && v !== void 0, te = h && zDr(ca(q())), T, w;
  if (Ewt(), M) {
    if (Q?.dismissKind(bte.kind), Kgn(/* @__PURE__ */ new Set()), M((e) => {
      let s = {}, E = [];
      for (let [d, m] of Object.entries(e.tasks)) {
        if (!R(m)) {
          s[d] = m;
          continue;
        }
        E.push(d);
        try {
          if (m.status === "running") {
            if (pp(m)) m.shellCommand?.kill(), m.shellCommand?.cleanup();
            if ("abortController" in m) m.abortController?.abort();
          }
        } catch (me) {
          l(me);
        }
        yp(d);
      }
      T = F(Object.values(s), (d) => !fe.has(d.type) && !u0t(d)), w = e.activeGoal;
      let f = e.transcripts;
      if (f && E.length > 0) {
        f = { ...f };
        for (let d of E) delete f[d];
      }
      return { ...T$n(e), tasks: s, ...f !== e.transcripts && { transcripts: f }, ...e.viewingAgentTaskId !== void 0 && E.includes(e.viewingAgentTaskId) && { viewingAgentTaskId: void 0, viewSelectionMode: "none" }, runningSubagents: T === 0 ? 0 : e.runningSubagents, ...{ endedByModel: false }, attribution: jht(), cacheBreakerPhrase: void 0, sendMessagePins: {}, agentNameRegistry: _$n(e.agentNameRegistry, s), frameUrls: {}, standaloneAgentContext: h && e.standaloneAgentContext?.name ? { name: e.standaloneAgentContext.name } : void 0, fileHistory: { snapshots: [], trackedFiles: /* @__PURE__ */ new Set(), snapshotSequence: 0 } };
    }), w !== void 0) Kre(w, "session_clear");
    i1({});
  }
  if (c && u.size === 0 && S.size > 0 && r && ![...S].some((e) => Object.hasOwn(r().tasks, e) || G(e, A.get(e) ?? e)) && !Object.values(r().tasks).some((e) => Tn(e) && [...A.values()].includes(e.agentId))) c.current = null;
  if (_ && T === 0) _.resetWebSearchBudget();
  if (r) {
    for (let e of r().mcp.clients) if (e.name === "ide" && e.type === "connected") {
      ohe(e, void 0);
      let { clearServerCache: s } = import.meta.require("../mcp/emit-tripwire-event.js").mcpClientModule();
      await s(e.name, e.config).catch(() => {
      });
    }
  }
  S1o();
  let oe = q(), se = C ? xd() ?? bf() : void 0, re = JJ(), H = T === 0 && u.size === 0 ? void 0 : Ree(), ne = [...bin()], ie = false, ae = false;
  if (pin(), re) zxo();
  if (ie) sie(true), HYt(true);
  if (ae) Ait(true), Cit(true);
  if (H !== void 0) HYe(H);
  let k = le();
  if (ye() || zc() && bAe()) {
    let e = I === "clear" ? Kt(Z) : null;
    a3(o, k), Ki({ type: "conversation_reset", new_conversation_id: k, uuid: k, ...I !== void 0 && { trigger: I }, ...e !== null && { user_message_uuid: e }, timestamp: (/* @__PURE__ */ new Date()).toISOString() }), g("bridge_conversation_reset");
  }
  if (vut.of(o.host).conversationReset(), yield { type: "conversation_reset", newConversationId: k }, Tns(n), wit(), ye() && vM() && sin() && !J()) Axo();
  let L = ca(q()), pe = te || h && zDr(L);
  if (mts({ setCurrentAsParent: true }), h && v !== void 0) C1(v);
  let ge = Promise.resolve(true);
  if (OZe(), Twt(), jgo.of(o).reset(), xt().needsAuthNoticedThisSession.clear(), ize(o), i.CLAUDE_CODE_SESSION_ID) process.env.CLAUDE_CODE_SESSION_ID = q();
  await XJ();
  for (let e of ce?.pauseStampsCarriedAcrossClear(r?.().mcp.clients, ne) ?? []) nPo({ ...e, afterUuid: null }, n);
  if (Vxo(), qxo(L), await LOo(q(), bf(), n), C) await oY(oe, C, se, "user", n);
  else if (v) {
    if (await oY(q(), v, void 0, "user", n), j) await WMe(q(), j, void 0, "user", n);
  }
  for (let e of U) if (e.status === "running") $je(e.agentId);
  let { isCoordinatorMode: de } = import.meta.require("../context/get-coordinator-system-prompt.js");
  OK(de() ? "coordinator" : "normal");
  let B = yl();
  if (B) KN(B, n);
  if (c?.current) Kke(c.current, n);
  if (D) {
    if (D((e) => yne(o, "clear", { signal: e, storageV5: n, credentials: O }).catch((s) => {
      if (Ke(s)) t(`SessionStart hooks after /clear aborted: ${N(s).message}`);
      else l(Qe(N(s), "SessionStart hooks after /clear threw"));
      return [];
    })), tIr()) a($Be);
    return;
  }
  let x = await yne(o, "clear", { storageV5: n, credentials: O });
  if (x.length > 0) a(() => x);
  if (tIr()) a($Be);
}
function P(o) {
  return "isBackgrounded" in o && o.isBackgrounded === false;
}
function ue(o) {
  return Tn(o) && M1(o) && (o.keepaliveReasons?.size ?? 0) === 0 && o.finalizing !== true && o.resuming !== true && (o.pendingMessages?.length ?? 0) === 0 && !G(o.id, o.agentId);
}
function G(o, a) {
  return zn().resumesInFlight.has(a) || xg().getCommandQueue().some((p) => p.mode === "task-notification" && (p.taskId === o || p.agentId === a));
}
var fe = /* @__PURE__ */ new Set(["local_bash", "monitor_mcp", "monitor_ws", "mcp_task"]);
function Ngo(o) {
  return Object.values(o).some((a) => !P(a) && GJe.has(a.type) && !cs(a.status));
}
export {
  Lgo,
  Ngo
};
