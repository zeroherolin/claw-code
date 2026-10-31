// darwin/agents/teammate-transient-turn-failure.js — Claude Code 2.1.310（darwin）模块 chunk-byn6r3tk.js
import { La, ry, cI, af } from "../settings/global-config-and-gates.js";
import { Br } from "../shared/chunk-3b9c376b.js";
import { He } from "../fs/async-hooks.93b1.js";
import { uie, F, L, ye } from "../context/not-admin-owned.js";
import { S, c } from "./third-party.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { Bn } from "../mcp/chunk-0e2a1db6.js";
import { GL } from "../plugins/skills-dir.js";
import { ur } from "../permissions/turn-abort.js";
import { Xa } from "../fs/reply-across-default-dirs.js";
import { _M } from "../artifacts/cobalt-plinth-lovage.js";
import { Dii } from "./in-process-teammate.32be.js";
import { k4n } from "./agent-retry-status.js";
import { pce, GSt, YP, J2 } from "../context/org-memory-writes-setting-changed.js";
import { _c, D9, eMe, TXe, Of, gke, I6, Cle, B9, n3, SMe, R0, szn, izn, azn, Gmt, eNt, PP, cWe, DMe, b2, xB, yMr, _We, aE, z6, tde, jin, Xs, Oe } from "../core/conversation-engine.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { J8 } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { hf } from "../fs/unadoptable-session-id.js";
import { JA } from "./chunk-25f20db5.js";
import { Li } from "../core/system-prompt-blocks.js";
import { ADr, J7e, b1s, ax, yht, Lan } from "../git/bridge-child-tool-diff.js";
import { aGe } from "./api-system.js";
import { run } from "./swarm-team-file-update.js";
import { oye, zD, SKs, LNo, eTe, U2, QQe, qE, G$r, hHe, mU, yHe, aun, EGe, cE, i9n, X1t, i_t, Q1t, a_t, pun, fun, cF, mun, nBt } from "../context/envelope-pinned-id.js";
import { Nk, VT, x8 } from "../plugins/unsubscribe-pr-activity.js";
import { O4n } from "../tools/tool-result-persisted.js";
import { ZXt, a7t, l7t, eSs, ict, fHn } from "../permissions/auto-mode-denial-dialog-auto-denied.js";
import { vvs } from "../tools/exit-plan-mode-tool.js";
import { zwr, qR } from "./agent-summary-skipped.js";
import { wdo } from "./chunk-8f9be7bc.js";
import { kSr } from "./chunk-84a29c0f.js";
import { PFn, cZt, uZt } from "../shell/input-digest-mismatch.js";
import { W1t, Q5n, Z5n } from "../permissions/swarm-sandbox-permission-request.js";
import { Mn } from "../shared/ccd-session-mgmt.js";
var Ke = 500, Re = 500;
function Ve(n, e, s, b, i) {
  return async (h, f, M, y, D, H) => {
    let v = H ?? await SMe(h, f, { ...M, asksNoHost: true }, y, D, D9, void 0, b);
    if (v.behavior !== "ask") return v;
    if (v.hostDisplay !== void 0) return m("permission_host_worded_ask", "teammate_lane"), eMe(h.name, "a teammate's permission request", { hostWorded: true, remedy: "Ask the team lead to run this tool call itself. When the team lead runs it, the permission prompt shows the full disclosure." });
    let q = v.updatedInput ?? f;
    if (e.signal.aborted) return { behavior: "ask", message: z6 };
    let N = ae(M), E = () => h.description(q, { isNonInteractiveSession: M.options.isNonInteractiveSession, toolPermissionContext: N, tools: M.options.tools });
    if (M.requestDialog !== void 0) {
      let o = fHn.of(M.session).permissionContextSetter, P = a7t(h, f, M, y, D, b, (j) => {
        o?.((G) => YP(G, j.filter((W) => W.type !== "setMode")));
      }), T = await ZXt({ ctx: P, updatedInput: v.updatedInput, suggestions: v.suggestions, permissionMode: N.mode, askSuppressesAlwaysAllowRule: v.suppressAlwaysAllowRule === true, askIsPersonOnly: v.personOnly === true });
      if (T) return T;
      if (e.signal.aborted) return { behavior: "ask", message: z6 };
      let I = await E();
      if (e.signal.aborted) return { behavior: "ask", message: z6 };
      let d = Date.now();
      try {
        return await new Promise((j, G) => {
          l7t({ ctx: P, description: I, result: v, awaitAutomatedChecksBeforeDialog: true }, j).catch(G);
        });
      } finally {
        s(Date.now() - d);
      }
    }
    if (TXe(v) || v.forcedByCaller === true) return eMe(h.name, "the teammate mailbox (a static-description wire)", { hostWorded: v.hostDisplay !== void 0 });
    let C = await E();
    if (e.signal.aborted) return { behavior: "ask", message: z6 };
    return new Promise((o) => {
      let u = Q5n({ toolName: h.name, toolUseId: D, input: q, description: C, permissionSuggestions: v.suggestions, workerId: n.agentId, workerName: n.agentName, workerColor: n.color, teamName: n.teamName });
      PFn({ requestId: u.id, toolUseId: D, toolName: u.toolName, inputDigest: W1t(u.toolName, q), onAllow(d, j, G, W) {
        I();
        let J = J8(j, void 0, ae(M)), ee = h.suppressesAllPermissionUpdates?.(q) === true ? n3(J) : h.suppressesAlwaysAllowRule?.(q) === true || v.suppressAlwaysAllowRule === true ? B9(J, h, ae(M)) : J;
        J2(ee, M.storageV5).catch(l);
        let ne = d && Object.keys(d).length > 0 ? d : q;
        o({ behavior: "allow", updatedInput: ne, userModified: false, ...W && W.length > 0 && { contentBlocks: W } });
      }, onReject(d, j) {
        I();
        let G = d ? `${tde}${d}` : z6;
        o({ behavior: "ask", message: G, contentBlocks: j });
      }, onRefuse(d) {
        I(), o({ behavior: "ask", message: d });
      }, onUnboundVerdict() {
      } }), Z5n(u, M.storageV5).then((d) => {
        if (!d) I(), o({ behavior: "ask", message: "The permission request could not be delivered to the team lead (mailbox write failed). Retry the tool call." });
      });
      let P = setInterval(async (d, j, G, W, J, ee, ne) => {
        if (d.signal.aborted) {
          j(), G({ behavior: "ask", message: z6 });
          return;
        }
        let ie = await QQe(W.agentName, W.teamName, ee), fe = eTe(ie.filter((V) => V && !V.read), U2(W.agentName, W.teamName), { roster: ne(), isPaneTeammate: false });
        for (let V of ie) if (V && !V.read && fe.get(V) !== "forged") {
          let B = Q1t(V.text);
          if (B && B.request_id === J.id) {
            if (await G$r(W.agentName, W.teamName, V, ee), V.from !== Xa) {
              t(`[InProcessRunner] Ignoring permission response from non-team-lead: ${V.from}`, { level: "warn" });
              continue;
            }
            if (B.subtype === "success") uZt({ requestId: B.request_id, toolUseId: B.tool_use_id, approvedRequest: B.approved_request, decision: "approved", updatedInput: B.response?.updated_input, permissionUpdates: B.response?.permission_updates });
            else uZt({ requestId: B.request_id, toolUseId: B.tool_use_id, approvedRequest: B.approved_request, decision: "rejected", feedback: B.error });
            return;
          }
        }
      }, Ke, e, I, o, n, u, M.storageV5, i), T = () => {
        I(), o({ behavior: "ask", message: z6 });
      };
      e.signal.addEventListener("abort", T, { once: true });
      function I() {
        clearInterval(P), cZt(u.id), e.signal.removeEventListener("abort", T);
      }
    });
  };
}
function K(n, e, s) {
  s.update(n, (b) => b.type === "in_process_teammate" ? e(b) : b);
}
async function Ye(n, e, s, b, i) {
  return qE(Xa, { from: n, text: e, timestamp: (/* @__PURE__ */ new Date()).toISOString(), color: s }, b, i);
}
async function Ie(n, e, s, b, i) {
  let h = X1t(n, b), f;
  try {
    f = await Ye(n, _(h), e, s, i);
  } finally {
    i_t(h, b?.result, f);
  }
  return f !== void 0;
}
function Je(n) {
  let e = new Set(n.filter((s) => s.status !== "completed").map((s) => s.id));
  return n.find((s) => {
    if (s.status !== "pending") return false;
    if (s.owner) return false;
    return s.blockedBy.every((b) => !e.has(b));
  });
}
function ze(n) {
  let e = `Complete all open tasks. Start with task #${n.id}: 

 ${n.subject}`;
  if (n.description) e += `

${n.description}`;
  return e;
}
async function We(n, e, s, b) {
  if (!s) return;
  try {
    let i = await zD(n, b), h = Je(i);
    if (!h) return;
    let f = await SKs(n, h.id, e, void 0, b);
    if (!f.success) {
      t(`[inProcessRunner] Failed to claim task #${h.id}: ${f.reason}`);
      return;
    }
    return await oye(n, h.id, { status: "in_progress" }, b), t(`[inProcessRunner] Claimed task #${h.id}: ${h.subject}`), ze(h);
  } catch (i) {
    t(`[inProcessRunner] Error checking task list: ${i}`);
    return;
  }
}
async function Me(n, e, s, b, i, h) {
  let f;
  try {
    f = await QQe(n.agentName, n.teamName, b, { throwOnUnknownReadError: true }), i.readFailures = 0;
  } catch (o) {
    return i.readFailures++, t(`[inProcessRunner] ${n.agentName} could not read mailbox (${i.readFailures} consecutive): ${o}`, { level: "warn" }), null;
  }
  let M = eTe(f.filter((o) => o && !o.read), U2(n.agentName, n.teamName), { roster: h, isPaneTeammate: false }), y = (o) => M.get(o) === "forged", D = new Set(f.filter((o) => o && !o.read).map(mU));
  for (let o of i.consumedUnmarked) if (!D.has(o)) i.consumedUnmarked.delete(o);
  let H = async (o) => {
    let u = await _We(o, { provenanceOf: (T) => M.get(T) ?? "unverifiable", agentId: n.resumableAgentId ?? n.agentId }), P = new Set(u.map(mU));
    for (let T of o) {
      let I = mU(T);
      if (!P.has(I)) i.consumedUnmarked.add(I);
    }
    return u;
  }, v = -1, q = null;
  for (let o = 0; o < f.length; o++) {
    let u = f[o];
    if (u && !u.read && !y(u)) {
      let P = a_t(u.text), I = (M.get(u) === "verified" || u.from === Xa || LNo(u.from, h) !== void 0) && P?.from === u.from ? P : null;
      if (I) {
        v = o, q = I;
        break;
      }
    }
  }
  if (v !== -1) {
    if (i.count > 0) {
      let P = f.filter((T, I) => !T.read && I !== v && (y(T) || !cF(T.text)) && !i.deliveredUnmarked.has(mU(T)) && !i.consumedUnmarked.has(mU(T)));
      if (P.length > 0) {
        for (let d of P) i.deliveredUnmarked.add(mU(d));
        let T = await yHe(n.agentName, n.teamName, P, b);
        if (T) i.count = 0, i.reported = false, i.deliveredUnmarked.clear();
        else if (!i.reported) i.reported = true, p("swarm_inbox_poll", "worker_mark_read_failed_streak");
        t(`[inProcessRunner] ${n.agentName} delivering ${P.length} held message(s) ahead of a shutdown_request${T ? "" : " (mark still not landed)"}`, { level: T ? "debug" : "warn" });
        let I = await H(P);
        if (I.length > 0) return { type: "new_messages", messages: I };
      }
    }
    let o = f[v], u = F(f.slice(0, v), (P) => !P.read);
    return t(`[inProcessRunner] ${n.agentName} received shutdown request from ${q?.from} (prioritized over ${u} unread messages)`), await G$r(n.agentName, n.teamName, o, b), { type: "shutdown_request", request: q, originalMessage: o.text, entryFrom: o.from };
  }
  let N = [], E = [];
  for (let o of f) {
    if (!o || o.read) continue;
    if (!y(o) && cF(o.text)) N.push(o);
    else if (!i.consumedUnmarked.has(mU(o))) E.push(o);
  }
  let C = null;
  if (N.length > 0) {
    for (let u of N) {
      let P = pun(u.text);
      if (P && u.from === Xa) {
        let T = vvs(e, P, s, b);
        if (T) t(`[inProcessRunner] ${n.agentName} applied lead plan_approval_response: approved=${T.approved}`), C = mun(T);
        else t(`[inProcessRunner] ${n.agentName} ignoring stale plan_approval_response (not awaiting approval)`);
        continue;
      }
      if (fun(u.text)) {
        t(`[inProcessRunner] ${n.agentName} dropping mode_set_request message: permission mode changes are never accepted from the inbox`, { level: "warn" });
        continue;
      }
      t(`[inProcessRunner] ${n.agentName} dropping protocol frame from ${u.from}: ${u.text.substring(0, 80)}`, { level: "warn" });
    }
    if (!await yHe(n.agentName, n.teamName, N, b)) t(`[inProcessRunner] ${n.agentName} could not mark ${N.length} protocol frame(s) read; retrying next poll`, { level: "warn" });
  }
  if (C) return { type: "new_message", message: C, from: Xa };
  if (E.length > 0) {
    if (await yHe(n.agentName, n.teamName, E, b)) i.count = 0, i.reported = false, i.deliveredUnmarked.clear();
    else {
      let P = ++i.count;
      if (P < hHe) return t(`[inProcessRunner] ${n.agentName} could not mark ${E.length} message(s) read (${P}/${hHe}); delivery retried next poll`, { level: "warn" }), null;
      if (t(`[inProcessRunner] ${n.agentName} could not mark ${E.length} message(s) read for ${P} poll(s); delivering the batch unmarked`, { level: "warn" }), !i.reported) i.reported = true, p("swarm_inbox_poll", "worker_mark_read_failed_streak");
      for (let T of E) i.deliveredUnmarked.add(mU(T));
    }
    t(`[inProcessRunner] ${n.agentName} draining ${E.length} message(s) from ${L(E.map((P) => P.from)).join(", ")}`);
    let u = await H(E);
    if (u.length === 0) return null;
    return { type: "new_messages", messages: u };
  }
  if (i.count > 0) i.count = 0, i.reported = false, i.deliveredUnmarked.clear();
  return null;
}
async function Xe(n, e, s, b, i, h, f, M, y, D = false, H) {
  t(`[inProcessRunner] ${n.agentName} starting poll loop (abort=${e.signal.aborted})`);
  let v = Date.now(), q = false, N = 0;
  while (!e.signal.aborted) {
    if (N > 0) await X(Re);
    N++;
    let E = b(), C = E.tasks[s];
    if (C && C.type === "in_process_teammate" && C.pendingUserMessages.length > 0) {
      let T = C.pendingUserMessages[0];
      return K(s, (I) => ({ ...I, pendingUserMessages: I.pendingUserMessages.slice(1) }), i), t(`[inProcessRunner] ${n.agentName} found pending user message (poll #${N})`), { type: "new_message", message: T.text, origin: T.origin, from: "user" };
    }
    let o = n.resumableAgentId !== void 0 && cWe(n.resumableAgentId, i), u = D || C?.type === "in_process_teammate" && C.awaitingPlanApproval || E.viewingAgentTaskId === s || Lan(E.tasks, s) || o;
    if (u) v = Date.now();
    if (D && C?.type === "in_process_teammate" && C.evictAfter !== void 0) K(s, (T) => ({ ...T, evictAfter: void 0 }), i);
    if (C?.type === "in_process_teammate" && C.evictAfter !== void 0 && (o && C.evictAfter <= Date.now() + Re || q && !o)) K(s, (T) => ({ ...T, evictAfter: Date.now() + ax }), i);
    if (q = o, e.signal.aborted) return t(`[inProcessRunner] ${n.agentName} aborted while waiting (poll #${N})`), { type: "aborted" };
    if (f) {
      if (R0()) {
        if (!u && Date.now() - v >= yht) return t(`[inProcessRunner] ${n.agentName} idle timeout after ${yht}ms (poll #${N})`), { type: "idle_timeout" };
      }
      continue;
    }
    t(`[inProcessRunner] ${n.agentName} poll #${N}: checking mailbox`);
    try {
      let T = await Me(n, s, i, H, y, b().teamContext?.teammates);
      if (T) return T;
      if (y.count > 0 && y.readFailures < hHe) {
        v = Date.now();
        let I = b().tasks[s];
        if (I?.type === "in_process_teammate" && I.evictAfter !== void 0) K(s, (d) => ({ ...d, evictAfter: Date.now() + ax }), i);
        continue;
      }
    } catch (T) {
      t(`[inProcessRunner] ${n.agentName} poll error: ${T}`);
    }
    let P = await We(h, n.agentName, M, H);
    if (P) return { type: "new_message", message: P, from: "task-list" };
    if (R0()) {
      if (!u && Date.now() - v >= yht) return t(`[inProcessRunner] ${n.agentName} idle timeout after ${yht}ms (poll #${N})`), { type: "idle_timeout" };
    }
  }
  return t(`[inProcessRunner] ${n.agentName} exiting poll loop (abort=${e.signal.aborted}, polls=${N})`), { type: "aborted" };
}
async function Qe(n) {
  let { identity: e, taskId: s, prompt: b, description: i, spawnedAgentType: h, agentDefinition: f, teammateContext: M, toolUseContext: y, abortController: D, model: H, systemPrompt: v, systemPromptMode: q, allowedTools: N, allowPermissionPrompts: E, invokingRequestId: C, standalone: o = false, resumeMessages: u, resumeReplacementState: P, initialFrom: T } = n, { setAppState: I, taskRegistry: d } = y, j = k4n(s), G = { count: 0, reported: false, deliveredUnmarked: /* @__PURE__ */ new Set(), consumedUnmarked: /* @__PURE__ */ new Set(), readFailures: 0 };
  t(`[inProcessRunner] Starting agent loop for ${e.agentId}`);
  let W = { agentId: e.agentId, parentAgentId: y.agentId, depth: af(y.agentContext), parentSessionId: e.parentSessionId, agentName: e.agentName, teamName: e.teamName, agentColor: e.color, planModeRequired: e.planModeRequired, isTeamLead: false, agentType: "teammate", invokingRequestId: C, invocationKind: "spawn", invocationEmitted: false, isBackgroundAgent: true }, { tools: J, mainLoopModel: ee } = y.rootToolSurface, ne;
  if (q === "replace" && v) ne = v;
  else {
    let Q = [...(await PP(J, ee, { teammate: true })).filter((Y) => Y !== GL), wdo];
    if (f) {
      let Y = f.getSystemPrompt({ toolUseContext: y, primedAgentMemory: await GSt(f, y.storageV5) });
      if (Y) Q.push(`
# Custom Agent Instructions
${Y}`);
      if (f.memory) a("tengu_agent_memory_loaded", { ...false, scope: c(f.memory), source: S("in-process-teammate") });
    }
    if (q === "append" && v) Q.push(v);
    ne = Q.join(`
`);
  }
  let ie = M.hasTaskListTools, fe = [Mn, ...ie ? [Nk, x8, JA, VT] : []], V = f?.disallowedTools?.filter((A) => !fe.includes(Bn(A).toolName)), B = { agentType: e.agentName, whenToUse: `In-process teammate: ${e.agentName}`, getSystemPrompt: () => ne, tools: f?.tools ? L([...f.tools, ...fe]) : ["*"], ...V?.length && { disallowedTools: V }, source: "projectSettings", permissionMode: "default", ...f?.model && { model: f.model }, ...f?.effort !== void 0 && { effort: f.effort }, ...f?.omitClaudeMd && { omitClaudeMd: true }, ...f?.autoCompactWindow !== void 0 && { autoCompactWindow: f.autoCompactWindow } }, O = u ? [...u] : [], Se = new Set(u?.map((A) => A.uuid)), Le = { taskKind: "in_process_teammate", teamName: e.teamName, color: e.color, planModeRequired: e.planModeRequired, ...f && { customAgentType: f.agentType }, ...h !== void 0 && { spawnedAgentType: h }, ...H && { model: H } }, ke = aun({ from: T ?? Xa, text: b, summary: i }), z = ke, ue = void 0, Te = false, me = false, Ne = (u?.length ?? 0) > 0, Ce = false, Pe = u ? ict(u).result : void 0, we = false, Ee = async (A) => {
    switch (me = false, A.type) {
      case "shutdown_request":
        t(`[inProcessRunner] ${e.agentId} received shutdown request - passing to model`), z = aun({ from: typeof A.entryFrom === "string" && A.entryFrom !== "" ? A.entryFrom : cE, text: nBt(i9n(A.originalMessage, A.entryFrom) ?? A.originalMessage, A.entryFrom) }), ue = void 0, kSr(s, Oe({ content: z }), d);
        break;
      case "new_message":
        if (t(`[inProcessRunner] ${e.agentId} received new message from ${A.from}`), A.from === "user") z = A.message, ue = A.origin;
        else z = aun({ from: A.from, text: A.message, color: A.color, summary: A.summary }), ue = void 0, kSr(s, Oe({ content: z }), d);
        break;
      case "new_messages":
        t(`[inProcessRunner] ${e.agentId} received ${A.messages.length} drained message(s)`), z = EGe(A.messages, { recipientIsLead: false }), ue = void 0, kSr(s, Oe({ content: z }), d);
        break;
      case "aborted":
        t(`[inProcessRunner] ${e.agentId} aborted while waiting`), Te = true;
        break;
      case "idle_timeout":
        if (t(`[inProcessRunner] ${e.agentId} idle timeout — exiting loop`), !o) y.agentLifecycle.setTeammate(e.agentId, void 0), await run(e.teamName, e.agentId, { onlyIfJoinedBefore: Date.now() }, y.storageV5);
        Te = true;
        break;
    }
  };
  if (!o) await We(e.parentSessionId, e.agentName, ie, y.storageV5);
  try {
    d.updateTranscript(s, (R) => {
      let Z = R.messages;
      if (u) for (let ve of u.slice(-ADr)) Z = J7e(Z, ve);
      return { ...R, messages: J7e(Z, Oe({ content: ke })) };
    });
    let A = y.contentReplacementState ? P ?? O4n() : void 0, Q = uie(), Y = He();
    while (!D.signal.aborted && !Te) {
      t(`[inProcessRunner] ${e.agentId} processing prompt: ${z.substring(0, 50)}...`);
      let R = ur();
      R.signal.addEventListener("abort", () => {
        we = true;
      }), K(s, (r) => ({ ...r, currentWorkAbortController: R, retryWake: Y }), d);
      let Z = Oe({ content: z, origin: ue }), ve = [Z], ce = O, $e = Of(O, ry(ee));
      if ($e > I6(_c(ee), zwr(y.options.autoCompactWindow, B.autoCompactWindow))) {
        t(`[inProcessRunner] ${e.agentId} compacting history (${$e} tokens)`);
        let r = { ...y, abortController: D, agentId: e.resumableAgentId ?? Br(e.agentId), readFileState: pce(y.readFileState, { stripSeededFromContext: true }), memorySelector: Cle(), onCompactEvent: void 0, onRetryStatus: j.setRetryStatus, compactTranscriptUnavailable: true };
        try {
          let w = await yMr(O, r, { systemPrompt: Li([]), userContext: {}, systemContext: {}, toolUseContext: r, forkContextMessages: O, advisorModel: r.getAppState().advisorModel }, true, { isAutoCompact: true });
          if (ce = xB(w), A) A = O4n();
          O.length = 0, O.push(...ce), Se.clear(), d.updateTranscript(s, (k) => ({ ...k, messages: [...ce, Z] }));
        } catch (w) {
          if (w instanceof Error && w.message.startsWith(b2)) t(`[inProcessRunner] ${e.agentId} compaction blocked by PreCompact hook; continuing uncompacted`), Ce = true;
          else if (D.signal.aborted || w instanceof Error && w.message === _M) {
            t(`[inProcessRunner] ${e.agentId} aborted during compaction`), Te = true;
            break;
          } else throw w;
        }
      }
      let Be = ce.length > 0 ? [...ce] : void 0;
      O.push(Z), Pe = void 0, we = R.signal.aborted;
      let pe = szn(), _e = d.get(s);
      if (_e !== void 0 && "progress" in _e && _e.progress !== void 0) pe.latestInputTokens = _e.progress.tokenCount;
      let Fe = eNt(J), ge = [], Ae = y.getAppState().tasks[s], xe = Ae && Ae.type === "in_process_teammate" ? Ae.permissionMode : "default", je = { ...B, permissionMode: xe }, Ue = false, se = null;
      if (await Dii(M, async () => cI(W, async () => {
        K(s, (r) => ({ ...r, status: "running", isIdle: false, idleNotificationOwedToLead: void 0, evictAfter: void 0, evictAfterHeldBySibling: void 0 }), d), d.updateTranscript(s, (r) => ({ ...r, turnStartTime: Date.now() })), j.setMode("responding");
        for await (let r of qR({ agentDefinition: je, promptMessages: ve, turnPrompt: z, toolUseContext: y, canUseTool: Ve(e, R, (w) => {
          K(s, (k) => ({ ...k, totalPausedMs: (k.totalPausedMs ?? 0) + w }), d);
        }, gke(I), () => y.getAppState().teamContext?.teammates), isAsync: true, canShowPermissionPrompts: E ?? true, forkContextMessages: Be, querySource: "agent:custom", override: { abortController: R, agentContext: W, onRetryStatus: j.setRetryStatus, subscribeRetryWake: Y.subscribe, ...e.resumableAgentId && { agentId: e.resumableAgentId } }, ...e.resumableAgentId && { recordedUuids: Se, name: e.agentName, description: i, extraMetadata: { ...Le, permissionMode: xe } }, onStreamTokenEstimate: (w) => {
          azn(pe, w);
          let k = Gmt(pe);
          K(s, (U) => U.progress?.tokenCount === k.tokenCount ? U : { ...U, progress: k }, d);
        }, model: H, preserveToolUseResults: true, availableTools: J, allowedTools: N, contentReplacementState: A, stickyBetas: Q, isTeammate: true, teammateContext: M })) {
          if (D.signal.aborted) {
            t(`[inProcessRunner] ${e.agentId} lifecycle aborted`);
            break;
          }
          if (R.signal.aborted) {
            if (t(`[inProcessRunner] ${e.agentId} current work aborted (Escape pressed)`), r.type === "assistant" || r.type === "user" || r.type === "attachment" && aE(r)) ge.push(r), O.push(r), se = DMe(O, r, se);
            Ue = true;
            break;
          }
          if (r.type === "spinner_mode") {
            j.setMode(r.mode);
            continue;
          }
          if (r.type === "api_metrics") continue;
          if (r.type === "query_model_change") continue;
          if (r.type === "set_in_progress_tool_use_ids") {
            if (r.op.action !== "remove") continue;
            let k = r.op.ids;
            d.updateTranscript(s, (U) => {
              let te = new Set(U.inProgressToolUseIDs), oe = false;
              for (let be of k) if (te.delete(be)) oe = true;
              return oe ? { ...U, inProgressToolUseIDs: te } : U;
            });
            continue;
          }
          if (r.type === "system" && r.subtype === "api_error") continue;
          ge.push(r), O.push(r), se = DMe(O, r, se), izn(pe, r, Fe, J);
          let w = Gmt(pe);
          K(s, (k) => ({ ...k, progress: w }), d), d.updateTranscript(s, (k) => {
            let U = k.inProgressToolUseIDs;
            if (r.type === "assistant") {
              for (let te of r.message.content) if (te.type === "tool_use") U = /* @__PURE__ */ new Set([...U, te.id]);
            } else if (r.type === "user") {
              let te = r.message.content;
              if (Array.isArray(te)) {
                for (let oe of te) if (typeof oe === "object" && "type" in oe && oe.type === "tool_result") {
                  let be = new Set(U);
                  be.delete(oe.tool_use_id), U = be;
                }
              }
            }
            return { ...k, messages: b1s(k.messages, r), inProgressToolUseIDs: U };
          });
        }
        return { success: true, messages: ge };
      })).finally(() => {
        if (se) O.push(...se.preserved), se = null;
      }), K(s, (r) => ({ ...r, currentWorkAbortController: void 0 }), d), D.signal.aborted) break;
      let le = Ue || R.signal.aborted;
      if (le) {
        we = true, t(`[inProcessRunner] ${e.agentId} work interrupted, returning to idle`);
        let r = Xs({ content: _M });
        d.updateTranscript(s, (w) => ({ ...w, messages: J7e(w.messages, r) }));
      }
      Ne ||= ge.some((r) => r.type === "assistant" && !r.isApiErrorMessage || r.type === "user" && !r.isMeta);
      let re = !le ? jin(ge) : void 0;
      if (me = re?.isTransient === true && !o && Ne, !o && !le) {
        let r = null;
        try {
          r = await Me(e, s, d, y.storageV5, G, y.getAppState().teamContext?.teammates);
          while (r === null && G.count > 0 && G.readFailures < hHe && !D.signal.aborted) await X(Re), r = await Me(e, s, d, y.storageV5, G, y.getAppState().teamContext?.teammates);
        } catch (w) {
          t(`[inProcessRunner] ${e.agentName} turn-end mailbox check failed: ${w}`);
        }
        if (r) {
          try {
            let { result: w, summary: k } = ict(O, { emitTelemetry: true });
            if (w !== void 0 || re !== void 0) {
              if (await Ie(e.agentName, e.color, e.teamName, { idleReason: re !== void 0 ? "failed" : void 0, summary: k, failureReason: re?.reason, result: w, senderReachable: true }, y.storageV5) && w !== void 0) Pe = w;
            }
          } catch (w) {
            t(`[inProcessRunner] ${e.agentName} turn-end result delivery failed: ${w}`);
          }
          await Ee(r);
          continue;
        }
      }
      if (re?.isTransient) a("tengu_teammate_transient_turn_failure", { error_kind: c(re.errorKind ?? "unknown"), hold_evict: me });
      let De = y.getAppState().tasks[s], qe = !(De?.type === "in_process_teammate" && De.isIdle) && !o;
      K(s, (r) => (r.onIdleCallbacks?.forEach((w) => w()), { ...r, isIdle: true, idleNotificationOwedToLead: qe && ye() || r.idleNotificationOwedToLead, evictAfter: me ? void 0 : Date.now() + ax, onIdleCallbacks: [] }), d);
      let he = re?.reason;
      if (qe) {
        let r = ict(O, { emitTelemetry: !le }), w = le ? void 0 : r.result, k = await Ie(e.agentName, e.color, e.teamName, { idleReason: le ? "interrupted" : he !== void 0 ? "failed" : "available", summary: r.summary, failureReason: he, result: w, senderReachable: he === void 0 || me }, y.storageV5);
        if (w !== void 0 && k) Pe = w;
        if (!k) K(s, (U) => U.idleNotificationOwedToLead ? { ...U, idleNotificationOwedToLead: void 0 } : U, d);
      } else t(`[inProcessRunner] Skipping duplicate idle notification for ${e.agentName}`);
      t(`[inProcessRunner] ${e.agentId} finished prompt, waiting for next`);
      let Ge = await Xe(e, D, s, y.getAppState, d, e.parentSessionId, o, ie, G, me, y.storageV5);
      await Ee(Ge);
    }
    let de = false, x;
    if (K(s, (R) => {
      if (R.status !== "running") return de = true, R;
      return x = R.toolUseId, R.onIdleCallbacks?.forEach((Z) => Z()), { ...R, status: "completed", notified: true, endTime: Date.now(), pendingUserMessages: [], abortController: void 0, currentWorkAbortController: void 0, retryWake: void 0, onIdleCallbacks: [] };
    }, d), !de) d.updateTranscript(s, (R) => ({ ...R, messages: R.messages.length ? [R.messages.at(-1)] : [], inProgressToolUseIDs: /* @__PURE__ */ new Set() }));
    if (hf(s), d.evictTerminal(s), !de) La(s, "completed", { toolUseId: x, summary: e.agentId });
    if (aGe(e.agentId), Ce) p("swarm_in_process_run", "compact_blocked_by_hook");
    else g("swarm_in_process_run");
    return { success: true, messages: O };
  } catch (A) {
    let Q = A instanceof Error ? A.message : "Unknown error";
    t(`[inProcessRunner] Agent ${e.agentId} failed: ${Q}`);
    let Y = false, de;
    if (K(s, (x) => {
      if (x.status !== "running") return Y = true, x;
      return de = x.toolUseId, x.onIdleCallbacks?.forEach((R) => R()), { ...x, status: "failed", notified: true, error: Q, isIdle: true, endTime: Date.now(), onIdleCallbacks: [], pendingUserMessages: [], abortController: void 0, currentWorkAbortController: void 0, retryWake: void 0 };
    }, d), !Y) d.updateTranscript(s, (x) => ({ ...x, messages: x.messages.length ? [x.messages.at(-1)] : [], inProgressToolUseIDs: /* @__PURE__ */ new Set() }));
    if (hf(s), d.evictTerminal(s), !Y) La(s, "failed", { toolUseId: de, summary: e.agentId });
    if (!o) {
      let x;
      try {
        x = we ? void 0 : eSs(O);
      } catch (R) {
        t(`[inProcessRunner] ${e.agentName} failed to extract partial result: ${R}`);
      }
      if (x !== void 0 && x === Pe) x = void 0;
      await Ie(e.agentName, e.color, e.teamName, { idleReason: "failed", completedStatus: "failed", failureReason: Q, result: x }, y.storageV5);
    }
    return aGe(e.agentId), m("swarm_in_process_run", "agent_loop_failed"), { success: false, error: Q, messages: O };
  }
}
function gdo(n) {
  let e = n.identity.agentId;
  Qe(n).catch((s) => {
    t(`[inProcessRunner] Unhandled error in ${e}: ${s}`);
  });
}
export {
  gdo
};
