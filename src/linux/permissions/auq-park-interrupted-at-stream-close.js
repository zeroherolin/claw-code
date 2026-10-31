// linux/permissions/auq-park-interrupted-at-stream-close.js — Claude Code 2.1.310（linux）模块 chunk-6wsbfyqy.js
import { Xd, Ke, Qe, N } from "../telemetry/anthropic-workspace-id.js";
import { wn } from "../context/not-admin-owned.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g } from "../telemetry/chunk-9d6962d2.js";
import { An, ff, Ls, ort, Be, At } from "../mcp/allowed-warning.js";
import { Vye, $Wr, Q9s } from "../context/tool-result-clearing-after-idle-server-report.js";
import { err, Lw, ioi, K_e, k } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { yn, am, dee, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Oi } from "../git/utf-8.js";
import { hs } from "../fs/async-hooks.7959.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { eu } from "../shell/invalid-type.js";
import { i4e, Gbe, Tse, Dvn, UJo, Lot, Bqt, Not } from "./classifier-transcript-too-long.js";
import { $l } from "../mcp/always-allow.js";
import { iSn, lM } from "./turn-abort.js";
import { yR } from "../artifacts/cobalt-plinth-lovage.js";
import { wf } from "../tools/device-session-limit.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { Tce, ae } from "./max-thinking-tokens.js";
import { yK, O4, Knn, nje, WOe, rOs, oOs, oje, SLt, bEo, wLt, zOe, zRr, xOs, VRr, ene, VWn, EXe, yge, _ge, Rk, _je, k0t, Vrn, mzn, I3, K4, Tmt, Amt, nv, pMe, Rmt, M0t, eon, $A, CTo, Dl, BLs, h2n, OL, DMe, Q4 } from "../core/conversation-engine.js";
import { Z6 } from "./bridge-permission-toolname-check.js";
import { KP, KHe, jG } from "../context/org-memory-writes-setting-changed.js";
import { hJn, RWt, W8, bp } from "./bot-protected-tengu-atomic-magpie.js";
import { WE } from "../mcp/chunk-7d9731c1.js";
import { o3n } from "../mcp/mcp-drive-file-reference-upload.js";
import { ns } from "../shared/chunk-6ea667ee.js";
import { Ran } from "../tasks/continued-in.js";
import { j1 } from "../shared/too-long.js";
import { XL } from "../models/auto-mode-config.js";
import { EG } from "../mcp/declared-tools-dropped-at-compaction.js";
import { UTe } from "../plugins/unsubscribe-pr-activity.js";
import { UL } from "../settings/chunk-ea11cbf9.js";
import { QMn, ZMn, jhs } from "../hooks/chunk-20903237.js";
import { wN } from "./auto-mode-config.js";
import { jIt } from "../shared/chunk-7d0f0f13.js";
import { HE } from "../shared/chunk-cbf69fda.js";
import { Ni } from "../shared/chunk-669ef766.js";
import { Yze } from "../shared/chunk-7e5fd014.js";
import { sS } from "../shared/chunk-11bd2044.js";
import { pC, o, M, oe, u, $e, me, B, A } from "../vendor/zod/string-format.js";
import { randomUUID as ze } from "crypto";
function s_r(r, e, s) {
  if (i.CLAUDE_CODE_DISABLE_PERMISSION_PROMPT_NOTIFY_HOOKS) return () => {
  };
  let n = setTimeout((d, m, h) => {
    try {
      OL(yK(), { message: `Claude needs your permission to use ${d}`, notificationType: "permission_prompt" }, { storageV5: m, credentials: h }).catch(() => {
      });
    } catch {
    }
  }, Ran, r, e, s);
  return n.unref(), () => clearTimeout(n);
}
var ho = p(() => u({ tool_name: o().describe("The name of the tool requesting permission"), input: me(o(), oe()).describe("The input for the tool"), tool_use_id: o().optional().describe("The unique tool use request ID") })), fe = p(() => B(["user_temporary", "user_permanent", "user_reject"]).optional().catch(void 0)), he = (r) => u({ behavior: A("allow"), updatedInput: me(o(), oe()).optional(), updatedPermissions: nje(r, "SDK host"), toolUseID: o().optional(), decisionClassification: fe() }), ye = p(() => u({ behavior: A("deny"), message: o(), interrupt: M().optional(), toolUseID: o().optional(), decisionClassification: fe() })), q6e = p(() => $e([he("refused"), ye()])), De = p(() => $e([he("cut"), ye()]));
function fIt(r) {
  return r === "strict" ? De() : q6e();
}
var o_r = `Expected {behavior: 'allow', updatedInput?: object} or {behavior: 'deny', message: string}. ${Knn}`;
function W(r, e, s, n, d) {
  if (n.forRemoteExecution === true || Lw(n)) return;
  let m = r && W8(r, e.suppressesAlwaysAllowRule?.(s) === true || d ? void 0 : RWt(e, s), ae(n));
  if (m && e.suppressesAllPermissionUpdates?.(s) === true) {
    let h = K4(m);
    return h.length > 0 ? h : void 0;
  }
  return m && (e.suppressesAlwaysAllowRule?.(s) === true || d) ? I3(m, e, ae(n)) : m;
}
function j(r, e, s, n, d, m, h = false) {
  switch (r.kind) {
    case "launcher": {
      let f = W(e, s, n, d, m);
      if (f?.length) d.setSessionToolPermissionContext((_) => KP(_, f)), setImmediate(() => {
        wN.emit();
      }), jG(f, d.storageV5).catch(l);
      return { applied: f ?? [], lostTightenings: 0 };
    }
    case "strict":
      return wLt(r, e, { vetoed: () => false, strip: (f) => W(f, s, n, d, m) ?? [], toolName: $l(s), input: n, suggested: (f) => h && s.suggestedAllowRule?.(f, n) === true, setContext: d.setSessionToolPermissionContext });
  }
}
function ue(r, e) {
  return { ...r, setSessionToolPermissionContext: (s) => r.setSessionToolPermissionContext((n) => {
    let d = typeof s === "function" ? s(n) : s;
    return xOs(e, n, d);
  }) };
}
function pIt(r, e, s, n, d, m = s, h = false, f = false) {
  let _ = { type: "permissionPromptTool", permissionPromptToolName: s.name, toolResult: e };
  if (e.behavior === "allow") {
    let S = e.updatedPermissions?.findLast((c) => c.type === "setMode")?.mode;
    if (S === "default" || S === "acceptEdits") ort(S);
    switch (r.kind) {
      case "launcher": {
        let { applied: c } = j(r, e.updatedPermissions, m, n, f ? ue(d, m) : d, h), P = e.updatedInput && Object.keys(e.updatedInput).length > 0 ? e.updatedInput : O4(m.name, n);
        return { ...e, updatedInput: P, decisionReason: _, ...le(r, c) };
      }
      case "strict": {
        let c = rOs(e.updatedInput, n, m), P = c === void 0 ? oOs(r, e.updatedInput, n, m) : void 0, R = c ?? P?.input;
        if (R === void 0) return oje(m.name, e.toolUseID);
        if (R !== n && bp(ae(d), m, R, "deny") !== null) return P?.onRefused("deny_rule"), oje(m.name, e.toolUseID);
        let { applied: y, lostTightenings: E } = j(r, e.updatedPermissions, m, P?.input ?? n, f ? ue(d, m) : d, h, true);
        if (E > 0) return SLt(m.name, e.toolUseID);
        return { ...e, updatedInput: R, decisionReason: _, ...le(r, y) };
      }
    }
  } else if (e.behavior === "deny" && e.interrupt) t(`SDK permission prompt deny+interrupt: tool=${s.name} message=${e.message}`), lM(d.abortController).abort();
  return { ...e, decisionReason: _, decideLocation: "ask-path" };
}
function le(r, e) {
  let s = Tmt(e);
  return s === "once" || s === "session" && r.kind === "launcher" ? { grantScope: s } : {};
}
var Ce = "tengu_cinder_swift";
function r_r() {
  return k(Ce, "off") === "interrupt";
}
function X(r, e) {
  try {
    return r.getToolUseSummary?.(e) ?? r.getActivityDescription?.(e) ?? "";
  } catch (s) {
    return t(`describeToolUseForPush failed: ${s}`, { level: "error" }), "";
  }
}
function ge(r, e) {
  return Pe(r, e)?.card;
}
function Pe(r, e) {
  if (!r.requiresUserInteraction?.()) return;
  switch (r.name) {
    case ns: {
      let s = Array.isArray(e?.questions) ? e.questions : [], n = s[0], d = n?.header || n?.question, m = s.length > 1 ? ` (+${s.length - 1} more)` : "";
      return { label: "Question", body: d ? d + m : "Tap to answer" };
    }
    case sS:
      return { label: "Plan", body: "Plan ready for review" };
    case Yze:
      return { label: Z6(r.name), body: "" };
    case UTe: {
      let s = typeof e?.reason === "string" ? hs(dee(am(e.reason)), 200).replace(/[\s.!?]+$/u, "") : "";
      return { label: "Claude in Chrome", body: s ? `Let Claude use your browser for ${s}? Open this task on your computer.` : "Let Claude use your browser? Open this task on your computer.", card: { title: "Set up Claude in Chrome on your computer", description: "Claude wants to use your browser through Claude in Chrome. To set it up, open this task in the Claude app on a computer; any answer here skips it." } };
    }
    default:
      return { label: Z6(r.name), body: "" };
  }
}
function _e(r, e, s, n, d) {
  let m = Tse(d?.decisionReason), h = { ...d?.decisionReason && { decision_reason_type: d.decisionReason.type }, ...m && { decision_reason_code: m } }, f = d?.hostDisplay ? { label: d.hostDisplay.displayName, body: "" } : Pe(r, e);
  if (f) return { tool_name: r.name, display_tool_name: f.label, action_description: f.body, raw_command: void 0, tool_use_id: s, request_id: "", ...n && { suppressed_request_id: n }, input: e, ...h };
  let _ = (r.name === Be || r.name === At) && typeof e.command === "string" ? dee(e.command) : void 0, S = _ !== void 0 ? typeof e.description === "string" && e.description && !EG(r) && !wf(e) ? dee(e.description) : hs(_, yR) : dee(X(r, e)), c = d?.tapToOpenOnly === true;
  return { tool_name: r.name, display_tool_name: Z6(r.name), action_description: S, raw_command: _, tool_use_id: s, request_id: c ? "" : n, ...c && n && { suppressed_request_id: n }, input: e, ...h };
}
import { isDeepStrictEqual as Le } from "util";
import { isDeepStrictEqual as Ae } from "util";
var Ne = 3;
function ke(r) {
  let { promise: e, resolve: s } = Promise.withResolvers(), { ask: n, tool: d, input: m, toolUseContext: h, toolUseID: f, isWaiting: _ } = r;
  if (!k("tengu_drifting_dream", false) || r.answers.kind !== "launcher" || r.forced || h.hookAskFloor === true || n.personOnly === true || h.forRemoteExecution === true || WE($l(d)) || XL(d) || jIt(n, d, h)) return { allowed: e, stop: () => {
  } };
  let S = 0, c = (R) => {
    if (!_()) return;
    let y = ae(h);
    if (Ls(eu(d, y), y.servedCall === true)) return;
    let E = ++S, O = Tce(h);
    nv(d, m, { ...h, permissionRound: void 0 }, r.assistantMessage, f).then((w) => {
      if (!_() || E !== S) return;
      if (!Ae(Tce(h), O)) {
        if (R < Ne) c(R + 1);
        return;
      }
      if (w.behavior === "allow" && U(w.decisionReason)) P(), s(w);
    }).catch((w) => {
      if (!Ke(w)) l(Qe(N(w), "permissionRecheckSignal: hasPermissionsToUseTool failed for a waiting can_use_tool ask"));
    });
  }, P = wN.subscribe(() => c(0));
  if (!Ae(Tce(h), r.askedUnder)) c(0);
  return { allowed: e, stop: P };
}
function U(r) {
  switch (r?.type) {
    case "rule":
      return true;
    case "mode":
      return r.mode === "default" || r.mode === "acceptEdits" || r.mode === "bypassPermissions";
    case "subcommandResults": {
      let e = [...r.reasons.values()].filter((s) => s.behavior !== "allow" || s.decisionReason?.type !== "other" || s.decisionReason.reason !== Gbe);
      return e.length > 0 && e.every((s) => s.behavior === "allow" && U(s.decisionReason));
    }
    default:
      return false;
  }
}
function Re(r) {
  let e = r.ask.decisionReason;
  if (e === void 0 ? r.tool.mcpInfo === void 0 : e.type !== "rule") return;
  try {
    if (Te(r)) return false;
  } catch (s) {
    if (!Ke(s)) l(s);
    return false;
  }
  return He(r);
}
function Uhs(r) {
  return r.subtype === "can_use_tool" ? { ...r, server_policy_ask_only: void 0 } : r;
}
function Te({ tool: r, effectiveInput: e, ask: s, toolUseContext: n, forceDecision: d }) {
  let m = s.decisionReason;
  return r.mcpInfo === void 0 || !(m === void 0 || Rmt(m)) || !be(s, ["decisionReason"]) || d !== void 0 || n.hookAskFloor === true || n.forRemoteExecution === true || WE($l(r)) || XL(r) || jIt(s, r, n) || r.suppressesAlwaysAllowRule?.(e) === true || r.suppressesAllPermissionUpdates?.(e) === true || r.ignoresWholeToolAllowRule?.(e) === true || n.remoteCall !== void 0 || n.requireCanUseTool === true || Vye(n.session, r.name) !== void 0 || r.askInputPreparer !== void 0 || xe(r, n) || M0t(m, r, e, n) || Fe(r, n);
}
async function He(r) {
  try {
    let e = Tce(r.toolUseContext);
    return await Me(r) && Le(Tce(r.toolUseContext), e) && !Te(r);
  } catch (e) {
    if (!Ke(e)) l(e);
    return false;
  }
}
async function Me({ tool: r, effectiveInput: e, toolUseContext: s }) {
  let n = false, d = await CTo({ ...r, checkPermissions: async (m, h) => {
    let f = await r.checkPermissions(m, h);
    return n ||= f.behavior === "ask", f;
  } }, e, s);
  return !n && (d.behavior === "allow" ? U(d.decisionReason) : d.behavior === "ask" && be(d, []));
}
var qe = ["behavior", "message", "suggestions"];
function be(r, e) {
  return Object.entries(r).every(([s, n]) => n === void 0 || qe.includes(s) || e.includes(s));
}
function Fe(r, e) {
  return Ie().hooksRespawns.size > 0 || Ni("tool.check", { ...j1(r), agentId: e.agentId }, HE("tool.check")) || DMe("PermissionRequest") !== "none" || UL("PermissionRequest") || Q4("PermissionRequest", e.sessionHooksRegistry, Rk(e, "PermissionRequest", e.session.id));
}
function xe(r, e) {
  let s = ae(e);
  return Ls(eu(r, s), s.servedCall === true);
}
function Bhs(r, e) {
  let s = async (n, d, m, h, f, _) => {
    let S = Tce(m), c;
    switch (r.kind) {
      case "launcher":
        c = _ ?? await nv(n, d, m, h, f);
        break;
      case "strict":
        c = _ ?? await pMe(n, d, m, h, f, r, void 0);
        break;
    }
    if (c.behavior === "allow") return c;
    if (c.behavior === "deny") {
      if (An() && !m.abortController.signal.aborted) return ff();
      if (!i4e(c)) e.emitPermissionDenied(n.name, f, m.agentId, c);
      return c;
    }
    let P = Re({ tool: n, effectiveInput: c.updatedInput ?? d, ask: c, toolUseContext: m, forceDecision: _ }), R = typeof P === "object" ? await P : P;
    if (m.abortController.signal.aborted) return { behavior: "deny", message: "Tool permission request aborted", toolUseID: f, decisionReason: Not, decideLocation: "ask-path" };
    if (An()) return ff();
    if (n.askInputPreparer !== void 0 && !Z.has(c) && m.forRemoteExecution !== true) {
      let C = await n.askInputPreparer(c.updatedInput ?? d, m, f);
      if (C !== void 0) return We(s, r, C, c, n, d, m, h, f);
    }
    let y = c.updatedInput ?? d, E = c.suggestions;
    if (n.name === Be && typeof y.command === "string" && E?.length && !E.some((C) => C.destination !== "session")) E = [...Vrn(y.command), ...E];
    let O = new AbortController(), w = m.abortController.signal, D = false, ee = () => {
      if (!An()) D = true;
      O.abort(w.reason);
    };
    w.addEventListener("abort", ee, { once: true });
    let I = ze(), re = ioi(m.agentContext), ne, v, G = false, ie;
    try {
      let q = (c.personOnly === true || Z.has(c) ? Promise.resolve(void 0) : mIt(r, n, f, y, m, E, c, () => G || w.aborted)).then((b) => ({ source: "hook", outcome: b }));
      q.catch(() => {
      });
      let T = c.decisionReason, K = c.localDisplayOnly === true || c.personOnly === true && T?.type === "classifier", se = ene(n);
      if (e.promptShown) {
        let b = _e(n, y, f, I, { tapToOpenOnly: K || se, hostDisplay: c.hostDisplay, decisionReason: T });
        ne = re, e.promptShown(I, b, re, K_e(m.agentContext));
      }
      let x = Dl(T), Se = n.name === Be || n.name === At, Ee = we.get(c) || (c.metadata && "command" in c.metadata ? c.metadata.command.description : void 0) || (Se && typeof y.command === "string" ? typeof y.description === "string" && y.description ? dee(y.description) : hs(dee(y.command), yR) : X(n, y)) || void 0, Y = ge(n, y), V = EG(n) || n.name === At && wf(y) ? void 0 : Ee ?? Y?.description, te = zOe(T) ?? (T?.type === "subcommandResults" && x ? Dl(T, (b) => !b.classifierApprovable && !zRr(b))?.reason ?? (zRr(x) ? void 0 : x.reason) : void 0), H = c.hostDisplay, J = K ? Oi(yn(te ?? "")) : "", de = H ? H.description : J && V && c.localDisplayOnly !== true ? `${V}
${J}` : J || V, Oe = WE($l(n)), ce = s_r(Z6(n.name), m.storageV5, m.credentials);
      if (H) g("permission_host_worded_ask");
      let F = e.request({ subtype: "can_use_tool", tool_name: n.name, ...n.mcpInfo && { mcp_server: o3n(n.mcpInfo) }, ...Y && { title: Y.title }, display_name: H?.displayName ?? Z6(n.name), input: y, ...H && { title: H.title }, ...de && { description: de }, ...Oe && { tool_kind: "browser" }, permission_suggestions: E, blocked_path: c.blockedPath, decision_reason: te, decision_reason_type: T?.type, decision_reason_code: Tse(T), decision_reason_rule_source: T?.type === "rule" ? T.rule.source : void 0, ...T?.type === "hook" && { decision_reason_hook_event: jhs(T.hookName, n.name), decision_reason_hook_source: QMn(T.hookSource), decision_reason_hook_plugin_id: ZMn(T.hookPluginId) }, server_policy_ask_only: R, ...c.matchedAskRule && { matched_ask_rule: { source: c.matchedAskRule.source, tool_name: c.matchedAskRule.ruleValue.toolName, ...c.matchedAskRule.ruleValue.ruleContent !== void 0 && { rule_content: c.matchedAskRule.ruleValue.ruleContent } } }, classifier_approvable: x ? !Dl(T, (b) => !b.classifierApprovable) : void 0, ...(T?.type === "rule" || T?.type === "other" && T.reason === mzn) && n.mcpInfo?.effectiveMaxPermission === "ask" && { decision_reason_code: "org_ask_ceiling" }, tool_use_id: f, agent_id: m.agentId, plugin: err(m) ?? (Lw(m) ? "" : void 0), suppress_always_allow_rule: c.suppressAlwaysAllowRule || n.suppressesAlwaysAllowRule?.(y, !k("tengu_valiant_crayon", false)) === true && !(E ?? []).some((b) => (b.type === "addRules" || b.type === "replaceRules") && b.behavior === "allow" && b.rules.some((z) => z.ruleContent !== void 0)) || void 0, default_to_no: c.defaultToNo || void 0, provenance_prompt_line: c.provenancePromptLine, requires_user_interaction: n.requiresUserInteraction?.() || K || se || H !== void 0 || void 0 }, O.signal, I).then((b) => ({ source: "sdk", result: b }));
      if (F.catch(() => {
      }), F.then(() => {
        G = true;
      }, () => {
        G = true;
      }), e.isPending(I)) v = { logContext: { tool: n, input: y, messageId: h.message.id, toolUseID: f, permissionMode: ae(m).mode, agentContext: m.agentContext, mcpClients: m.options.mcpClients, appliedAllowUpdates: (b) => {
        switch (r.kind) {
          case "launcher":
            return W(b, n, y, m, c.suppressAlwaysAllowRule === true);
          case "strict":
            return;
        }
      } }, shownAtMs: Date.now() }, BLs(v.logContext, T?.type);
      F.then(ce, ce);
      let L = await Promise.race([q, F]);
      if (L.source === "hook") {
        if (L.outcome) {
          if (An() && !D) await ff();
          if (O.abort(), v) h2n(v.logContext, { kind: "hook", behavior: L.outcome.decision.behavior === "allow" ? "allow" : "deny", permanent: L.outcome.permanent }, v.shownAtMs);
          if (L.outcome.interrupt) t(`Hook interrupt: tool=${n.name} hookMessage=${L.outcome.decision.message}`), lM(m.abortController).abort();
          return L.outcome.decision;
        }
        let b = ke({ answers: r, ask: c, forced: _ !== void 0, askedUnder: S, tool: n, input: d, toolUseContext: m, assistantMessage: h, toolUseID: f, isWaiting: () => e.isPending(I) && !w.aborted });
        ie = b.stop;
        let z = await Promise.race([F.then(() => {
          return;
        }), b.allowed]);
        if (z !== void 0 && e.isPending(I)) {
          if (An() && !D) await ff();
          if (O.abort(), VWn(m, f), v) h2n(v.logContext, { kind: "recheck" }, v.shownAtMs);
          return z;
        }
      }
      let pe = L.source === "hook" ? (await F).result : L.result;
      if (v) h2n(v.logContext, { kind: "host_answer", answer: pe }, v.shownAtMs);
      let Q = pIt(r, pe, n, y, m, n, c.suppressAlwaysAllowRule === true, R !== true);
      if (Q.behavior === "allow" && e.answeredAtHostDialog(I) && m.forRemoteExecution !== true && $Wr()) Q9s(m.session, f, { toolName: n.name, input: Q.updatedInput ?? y });
      return Q;
    } catch (C) {
      if (An() && e.isPending(I)) await ff();
      if (e.interruptedAtStreamClose(I) && r_r()) {
        try {
          a("tengu_auq_park_interrupted_at_stream_close", { stream_closed: C instanceof Xd }), t(`Interrupting parked AskUserQuestion toolUseID=${f} at stream close (deny skipped; turn aborts as shutdown)`);
        } catch {
        }
        throw C;
      }
      let q = bEo(r, C, n.name), T = Bqt;
      if (C instanceof pC) t(`canUseTool returned a schema-invalid permission result for ${n.name}: ${C.message.slice(0, 2e3)}`, { level: "error" }), q = `The canUseTool callback returned an invalid permission result. ${o_r}`, T = Lot;
      else if (C instanceof Xd) T = UJo;
      else if (Ke(C) && w.aborted) {
        if (q = "Tool permission request aborted", T = Not, v && !iSn(w)) h2n(v.logContext, { kind: "turn_aborted" }, v.shownAtMs);
      }
      return { behavior: "deny", message: q, toolUseID: f, decisionReason: T, decideLocation: "ask-path" };
    } finally {
      ie?.(), e.promptSettled(I, ne), w.removeEventListener("abort", ee);
    }
  };
  return EXe("callback", s, () => true);
}
var Z = /* @__PURE__ */ new WeakSet(), we = /* @__PURE__ */ new WeakMap();
async function We(r, e, s, n, d, m, h, f, _) {
  let S = h.abortController.signal, c = () => ({ behavior: "deny", message: "Tool permission request aborted", toolUseID: _, decisionReason: Not, decideLocation: "ask-path" });
  if (n.personOnly !== true) {
    let O;
    try {
      O = await mIt(e, d, _, n.updatedInput ?? m, h, n.suggestions, n, () => S.aborted);
    } catch (w) {
      return S.aborted ? c() : { behavior: "deny", message: bEo(e, w, d.name), toolUseID: _, decisionReason: Bqt, decideLocation: "ask-path" };
    }
    if (O !== void 0) {
      if (An() && !S.aborted) return ff();
      if (O.interrupt) lM(h.abortController).abort();
      return O.decision;
    }
  }
  let P = await s.prepare();
  if (S.aborted) {
    if (!("error" in P)) P.release();
    return c();
  }
  if ("error" in P) return { behavior: "deny", message: P.error, toolUseID: _, decisionReason: { type: "other", reason: "files not attached" }, decideLocation: "ask-path" };
  let R = { ...VRr(n, P.input), updatedInput: P.input };
  Z.add(R), we.set(R, P.description);
  let y;
  try {
    y = await r(d, m, h, f, _, R);
  } catch (O) {
    throw P.release(), O;
  }
  if (y.behavior !== "allow") return P.release(), y;
  let E = y.updatedInput !== void 0 && Object.keys(y.updatedInput).length > 0 ? y.updatedInput : P.input;
  if (!wn(E.files, P.input.files)) return P.release(), { behavior: "deny", message: `The approval for ${d.name} changed the files to attach, which cannot be applied. Call it again with the files you want attached.`, toolUseID: _, decisionReason: { type: "other", reason: "approval changed the files" }, decideLocation: "ask-path" };
  return { ...y, updatedInput: E };
}
async function mIt(r, e, s, n, d, m, h, f) {
  if (d.forRemoteExecution === true) return;
  let _ = ae(d).mode, S = _je(e.name, s, n, d, _, m, d.abortController.signal);
  for await (let c of S) if (c.permissionRequestResult && (c.permissionRequestResult.behavior === "allow" || c.permissionRequestResult.behavior === "deny")) {
    let P = c.permissionRequestResult;
    if (P.behavior === "allow") {
      let R = P.updatedInput;
      switch (r.kind) {
        case "launcher":
          break;
        case "strict":
          if (!WOe(R, n)) return { decision: oje(e.name, s), interrupt: false, permanent: false };
          R = void 0;
          break;
      }
      if (yge(e, n, R, true)) return { decision: _ge(e, "PermissionRequest"), interrupt: false, permanent: false };
      let y = await k0t(e, R, n, (D) => e.validateInput?.(D, { ...d, toolUseId: s }));
      if (y.deny !== void 0) return { decision: y.deny, interrupt: false, permanent: false };
      R = y.input;
      let E = R || n;
      if (R) {
        let D = Amt(await $A(e, E, { ...d, toolUseId: s, permissionRound: void 0 }, { hookUpdatedInput: R }), e.name);
        if (D) return { decision: D.behavior === "ask" ? { behavior: "deny", message: D.message, decisionReason: D.decisionReason ?? Dvn, decideLocation: "ask-path" } : { ...D, decideLocation: "ask-path" }, interrupt: false, permanent: false };
      }
      if (h.hostDisplay !== void 0 || eon(e, R)) return;
      let { applied: O, lostTightenings: w } = f() ? { applied: [], lostTightenings: 0 } : j(r, P.updatedPermissions && hJn(P.updatedPermissions, ae(d)), e, n, d, h.suppressAlwaysAllowRule === true);
      if (w > 0) return;
      return { decision: { behavior: "allow", updatedInput: E, userModified: false, decisionReason: { type: "hook", hookName: "PermissionRequest" } }, interrupt: false, permanent: O.some((D) => KHe(D.destination)) };
    } else return { decision: { behavior: "deny", message: P.message || "Permission denied by PermissionRequest hook", decisionReason: { type: "hook", hookName: "PermissionRequest" }, decideLocation: "ask-path" }, interrupt: P.interrupt === true, permanent: false };
  }
  return;
}
export {
  Bhs,
  Uhs,
  fIt,
  mIt,
  o_r,
  pIt,
  q6e,
  r_r,
  s_r
};
