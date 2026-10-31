// darwin/permissions/unsupported-protocol.js — Claude Code 2.1.310（darwin）模块 chunk-8js3kmsh.js
import { __asset_src } from "../../runtime/assets.js";
import { _6, l2 } from "../vendor/mcp-sdk/input-required.88fd.js";
import { _7 } from "../vendor/mcp-sdk/tool-result.js";
import { Hve } from "../artifacts/cobalt-plinth-samphire.js";
import { Qe, N, d } from "../telemetry/anthropic-workspace-id.js";
import { T_ } from "../shared/chunk-3b9c376b.js";
import { U, xA, RW } from "../context/not-admin-owned.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { _t, _, t } from "../fs/gitlab-runner-authentication-token.js";
import { vct, kct, kae } from "../artifacts/chunk-1727cd82.js";
import { pe } from "../shared/async-hooks.5238.js";
import { it, qqr, U6t, Frr, MSn } from "../settings/global-config-and-gates.js";
import { ur, df, Nl } from "./turn-abort.js";
import { wp } from "../shell/async-hooks.js";
import { TD, RWn, ake, nMe, Rle, UA, zCo, rE, ff, kNt, p7e, CNt, Ld, xg, kIo, Q$s } from "../core/conversation-engine.js";
import { I8 } from "../plugins/claudeai-plugins-sync-enabled.js";
import { ZO } from "../auth/env-quad.js";
import { YT, pE } from "../context/org-memory-writes-setting-changed.js";
import { Rn, ob } from "../context/tool-result-clearing-after-idle-server-report.js";
import { dU } from "../context/team-memory-sync.js";
import { Ou } from "../fs/unadoptable-session-id.js";
import { Mb } from "../mcp/declared-tools-dropped-at-compaction.js";
import { d8 } from "../git/bridge-child-tool-diff.js";
import { gMn } from "../commands/claudeai-skills-sync-interval-minutes.js";
import { Tct } from "../remote/ccr-queued-notifications.js";
import { yN } from "../core/query-loop.js";
import { BS, r9 } from "../tools/worktree-entered-existing.js";
import { tT } from "../fs/read-failed.js";
import { Mie, M$e, H$e, Xit, o4e, fas, wJr } from "../shell/chunk-e2cdfabc.js";
import { D$e } from "../shared/chunk-fda5d373.js";
import { adt } from "../shared/function-hook-noop.js";
import { VYt } from "../shared/chunk-692d8c00.js";
import { Aut } from "../agents/chunk-a6cc40b3.js";
import { C_e } from "../shared/chunk-e9fc3352.js";
var ke = 3e4;
function Z(f, O, u = ke) {
  if (f === void 0) return { report: void 0, [Symbol.dispose]() {
  } };
  let D = 0, P = 0, I = (k, S) => (P = k > P ? k : P + 1e-3, O({ method: "notifications/progress", params: { progressToken: f, progress: P, message: S } })), b = setInterval(() => {
    D += 1;
    let k = D * u / 1e3;
    I(k, `Running for ${k}s`).catch((S) => {
      t(`MCP server: progress heartbeat not sent: ${d(S)}`);
    });
  }, u);
  return b.unref?.(), { report: (k) => I(0, k), [Symbol.dispose]() {
    clearInterval(b);
  } };
}
function we(f) {
  return "closeSSEStream" in f;
}
var cAn = "callerGone";
async function pvi(f, O, u, D, P, I) {
  ff(f);
  let b = Ycr(O, u, U(), "stdio", D, P, I), k = new VYt();
  await b.connect(k), _t(() => b.close());
}
class Te extends dU {
  #e;
  constructor(f) {
    super();
    this.#e = f;
  }
  get(f) {
    return this.#e.get(f);
  }
}
function Ycr(f, O, u, D, P, I = "raw", b = { kind: "absent" }, k) {
  let S = b.kind === "parsed" ? b.context : void 0, ne = tT(P), i = D === "http";
  MSn(u.host, U6t);
  let K = wp();
  if (K.disableBackgroundAgentLaunch(), K.disableRemoteAgentIsolation(), K.disableBackgroundDeadline(), K.disableForkSubagent(), i) wJr(wp());
  else K.disableBackgroundCompletionNotice();
  if (Q$s(kIo()), TD(), xA()) gMn(P).catch(l);
  if (I8(), RW()) RWn().catch(l);
  let Ce = pE(YT, void 0, i), ve = new dU(), te = { activeAgents: [], allAgents: [] }, ie = i ? Promise.resolve() : UA(pe(), P).then((e) => {
    te = Rle(e, e.allAgents.filter((a) => {
      if (ake(a)) return true;
      return nMe(a, "subagent", "definition"), false;
    }));
  }).catch((e) => {
    l(e);
  }), w = new _7({ name: "claude/tengu", version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION }, { capabilities: { tools: { listChanged: true } } }), ae = ur(), H = () => o4e(i);
  if (i) {
    let { toolOutputServerCapabilities: e } = import.meta.require("./answer-tool-output-request.js"), a = e(H, S);
    if (a !== void 0) {
      if (w.registerCapabilities(a), !C_e()) {
        let { backgroundCommands: c, keepsBackgroundCommandsCapability: x } = import.meta.require("../tasks/background-commands.js");
        w.registerCapabilities(x(c.of(u.host).life));
      }
    }
    if (S !== void 0) {
      let { holdsSafetyAsksCapability: c } = import.meta.require("./as-shown-on-a-card.js");
      w.registerCapabilities(c());
      let { rendersUnderSessionRulesCapability: x } = import.meta.require("../skills/applicable-session-rules.fd66.js");
      w.registerCapabilities(x());
    }
    let { interfaceVersionCapability: s } = import.meta.require("../shared/interface-version-capability.js");
    w.registerCapabilities(s());
  }
  let F = null, ye = () => {
    if (F === null) return;
    let e = H().map((s) => s.name).join(`
`);
    if (e === F) return;
    let a = F;
    F = e, w.sendToolListChanged().catch((s) => {
      if (F === e) F = a;
      t(`mcp serve: tools/list_changed not sent: ${d(s)}`);
    });
  }, le = false, Ee = ZO(() => {
    queueMicrotask(() => {
      if (le) return;
      try {
        ye();
      } catch (e) {
        t(`mcp serve: tool re-list on policy verdict failed: ${d(e)}`, { level: "error" });
      }
    });
  });
  w.onclose = () => {
    le = true, Ee(), ae.abort(Nl("shutdown"));
  }, w.setRequestHandler(_6, async () => {
    await ie;
    let e = await fas(D, { agentDefinitions: te });
    return F = e.map((a) => a.name).join(`
`), { tools: e };
  });
  let Re = { session: u, run: (e) => e(), bind: (e) => e, [Symbol.dispose]: () => {
  } };
  function Q(e, a, s) {
    let c = df(ae), x = () => c.abort(Nl("remote-cancel"));
    if (e.aborted) x();
    else e.addEventListener("abort", x, { once: true });
    let B = new Te(ve), Y, h = () => {
      if (Y ??= { ...Mie(), ...b.kind === "parsed" && { toolPermissionContext: b.context } }, !i) return Y;
      return { ...Y, toolPermissionContext: D$e(Y.toolPermissionContext) };
    };
    return { toolUseContext: { abortController: c, messageQueue: xg(), session: s, agentContext: { agentType: "main", agentId: T_() }, options: { commands: [], tools: a, toolCatalog: r9, mainLoopModel: it(), thinkingConfig: { type: "disabled", mechanical: true }, mcpClients: [], mcpResources: {}, isNonInteractiveSession: true, runQuery: yN, debug: f, verbose: O, agentDefinitions: te }, getAppState: h, setAppState: () => {
    }, markPrResolvedThisSession: () => {
    }, isUltrareviewOverageConfirmed: () => false, markUltrareviewOverageConfirmed: () => {
    }, getAdvisorSetting: () => h().advisorModel, getMcp: () => h().mcp, getProactivityLevel: () => h().proactivityLevel, getWebBrowser: () => h().webBrowser, setToolPermissionContext: () => {
    }, setSessionToolPermissionContext: () => {
    }, taskRegistry: d8, queuedNotificationsRegistry: Tct, sessionHooksRegistry: adt, setWebBrowserSlice: () => {
    }, setArtifactReadVersion: () => {
    }, getArtifactReadObservation: Hve(h), artifactRegistries: vct(), setArtifactContractTarget: () => {
    }, getArtifactContractTarget: () => ({ targetSlug: void 0, pins: {} }), enqueuePendingMemoryUpdate: () => {
    }, agentLifecycle: Aut, teammateColors: kct, rootToolSurface: { tools: a, mainLoopModel: it() }, messages: [], turnStartIndex: 0, readFileState: Ce, dedupUnchangedReads: false, toolState: B, toolDecisions: /* @__PURE__ */ new Map(), permissionRelays: kae, getFileHistoryState: () => {
      return;
    }, applyFileHistoryOp: () => {
    }, applyAttributionOp: () => {
    }, storageV5: P, credentials: ne }, toolState: B };
  }
  return w.setRequestHandler(l2, async ({ params: { name: e, arguments: a, _meta: s } }, { signal: c, sendNotification: x, authInfo: B, requestId: Y }) => {
    let { transport: h } = w;
    using Pe = i ? import.meta.require("../shared/serving-call.js").servingCall(u.host) : void 0;
    let z = (r) => i ? import.meta.require("../shared/serving-call.js").withCpuReport(r, u.host, s) : r, oe = i && h !== void 0 && MSn(u.host, s?.[qqr]), ce = () => {
      if (h !== void 0 && we(h)) h.closeSSEStream(Y);
    };
    if (c.aborted) ce();
    else c.addEventListener("abort", ce, { once: true });
    if (await ie, i) {
      let { refuseCallerInterface: r } = import.meta.require("../shared/interface-version-capability.js"), { bringsToolHostPermissionRequest: y } = import.meta.require("./answer-tool-output-request.js"), n = y(s) ? void 0 : r(e, s);
      if (n !== void 0) return n;
    }
    if (b.kind === "unreadable") {
      let r = `${e} was not run: this server could not read its launch settings (CLAUDE_CODE_MCP_SERVE_SETTINGS), so it runs nothing.`;
      return t(`MCP server: ${r}`, { level: "error" }), { isError: true, content: [{ type: "text", text: r }] };
    }
    if (i && h !== void 0) {
      let { takeSessionEndHooks: r } = import.meta.require("../hooks/take-session-end-hooks.js");
      r(s?.[Frr], { session: u, storageV5: P, credentials: ne });
    }
    if (i && e !== (await import("../shared/run-monitor-command-here.js")).RUN_MONITOR_COMMAND_CALL) {
      let { bringsToolHostPermissionRequest: r, refusedResult: y } = import.meta.require("./answer-tool-output-request.js");
      if (r(s)) {
        let { handleToolHostPermissionRequest: n } = await import("./check-monitor-run.js"), A = await n({ name: e, args: a, meta: s, servedTools: H, launchPermissionContext: S, newCall: () => {
          let E = Q(M$e.has(e) ? ge(c, B) : c, H(), u);
          return { toolUseContext: E.toolUseContext, release: () => ee(E.toolState) };
        }, startHeartbeat: () => Z(s?.progressToken, x), callerLogsSharedEvents: oe });
        return z(A ?? y({ code: "unsupported_protocol", message: `${e} was not run: this server gave no answer to the permission request sent with it. Retrying won't help.` }));
      }
    }
    let de = a?.deny_rules;
    using v = S === void 0 && !(Array.isArray(de) && de.length > 0) ? Re : (await import("../mcp/own-call-directory.js")).ownCallDirectory(u, c);
    if (i) {
      let { countedUnlessRepeated: r, SERVED_FILE_CALLS: y } = await import("../context/counted-unless-repeated.js"), n = y.get(e);
      if (n) {
        using A = Z(s?.progressToken, x);
        let E, C = B?.extra?.[cAn];
        try {
          let { summary: q, output: j } = await r(e, v.bind(() => n(a, c, { toolUseContext: () => (E ??= Q(c, H(), v.session)).toolUseContext, session: v.session, launchPermissionContext: S, workspaceRoot: k, ...oe && { callerLogsSharedEvents: true }, reportProgress: A.report, callerGone: C instanceof AbortSignal ? C : void 0, meta: s, checkAsServedTool: async (V, o, L) => {
            let G = Rn(H(), V);
            if (!G?.isEnabled()) return { rejection: `${e} was not run: this server does not serve ${V}.` };
            let W = ob(G, o);
            if (!W.success) return { rejection: `${e} was not run: its input is not valid for ${V}: ${W.error.message}` };
            let { toolUseContext: me } = E ??= Q(c, H(), v.session), se = await G.validateInput?.(W.data, me);
            if (se && !se.result) return { rejection: `${e} was not run: ${V} refused its input: ${se.message}` };
            let fe = S && D$e(S), Se = L.length === 0 ? fe : (await import("../settings/take-launch-settings.js")).withDenyRulesOfOneCall(fe, L);
            if (L.length > 0 && Se === void 0) return { rejection: `${e} was not run: one of the deny rules sent with it could not be read. Retrying won't help.` };
            let { checkPlainCall: be } = await import("./answer-tool-output-request.js");
            return be(G, W.data, me, Se, s);
          } }))), { encodeServedOutput: M } = await import("../shared/encode-served-output.js");
          return z(v.run(() => M(q, j)));
        } catch (q) {
          let { ServedCallError: j } = await import("../shared/served-call-error.js");
          return z({ isError: true, content: [{ type: "text", text: d(q) }], ...q instanceof j && q.meta !== void 0 && { _meta: q.meta } });
        } finally {
          if (E) ee(E.toolState);
        }
      }
    }
    let J = H(), X = i && M$e.has(e), ue = oe;
    if (i && !X) {
      let { answerToolOutputRequest: r } = await import("./answer-tool-output-request.js"), y = await v.run(() => r({ name: e, args: a, meta: s, tools: J, launchPermissionContext: S, newCall: () => {
        let n = Q(c, J, v.session);
        return { toolUseContext: n.toolUseContext, release: () => ee(n.toolState) };
      }, startHeartbeat: () => Z(s?.progressToken, x) }));
      if (y !== void 0) return y;
    }
    let T = X ? Mb(BS(), e) : Mb(J, e);
    if (!T) throw Error(`Tool ${e} not found`);
    let { toolUseContext: re, toolState: he } = Q(X ? ge(c, B) : c, J, v.session);
    try {
      if (!T.isEnabled()) {
        let o = `Tool ${e} is not enabled`;
        return t(`MCP server: ${o}`, { level: "error" }), { isError: true, content: [{ type: "text", text: o }] };
      }
      let r = { ...a ?? {} }, y = [];
      if (i) {
        for (let o of H$e) if (o in r) delete r[o], y.push(o);
      }
      let n = ob(T, r);
      if (!n.success) {
        let o = `Tool ${e} arguments failed schema validation: ${n.error.message}`;
        return t(`MCP server: ${o}`, { level: "error" }), { isError: true, content: [{ type: "text", text: o }] };
      }
      let A = await v.run(() => T.validateInput?.(n.data, re));
      if (A && !A.result) {
        let o = `Tool ${e} input is invalid: ${A.message}`;
        return t(`MCP server: ${o}`, { level: "error" }), { isError: true, content: [{ type: "text", text: o }] };
      }
      let E = false;
      if (i && I === "rendered") {
        let { asksForEditResult: o } = await import("../shared/asks-for-edit-result.js");
        E = o(T.name, s);
      }
      let C = await v.run(async () => (await import("./answer-tool-output-request.js")).checkPlainCall(T, n.data, re, i && S !== void 0 ? D$e(S) : S, s));
      if ("rejection" in C) return t(`MCP server: ${C.rejection}`, { level: "error" }), { isError: true, content: [{ type: "text", text: C.rejection }], ...C.meta !== void 0 && { _meta: C.meta } };
      using q = Z(s?.progressToken, x);
      let j = await v.run(() => T.call(n.data, { ...C.toolUseContext, permissionPhase: C.toolUseContext.permissionPhase ?? {} }, rE, Ld({ content: [] }), void 0, I === "raw" ? { gitDiffRead: true } : E ? { smallResultAsked: true } : void 0)), M, V = false;
      if (X) {
        let { encodeUnlistedToolResult: o } = await import("../shared/encode-served-output.js");
        M = v.run(() => o(T, j));
      } else if (I === "rendered") {
        let { renderToolResultForMCP: o, withinAnswerLimit: L } = await import("../mcp/render-tool-result-for-mcp.js"), { answer: G, tooLarge: W } = L(T, await v.run(() => o(T, j, re)));
        M = E ? await (await import("../shared/asks-for-edit-result.js")).withEditResult(G, j) : G, V = W;
      }
      if (M === void 0) {
        let o = j.data, L = typeof o === "object" && o !== null && "backgroundTaskId" in o && typeof o.backgroundTaskId === "string" ? { ...o, backgroundOutputPath: Ou(o.backgroundTaskId) } : o;
        M = { content: [{ type: "text", text: _(L) }] };
      }
      if (y.length > 0) {
        let o = Xit(y), L = M.content.at(-1);
        if (L?.type === "text") L.text += `
${o}`;
        else M.content.push({ type: "text", text: o });
      }
      if (!ue) if (V) p(kNt(T.name), "result_too_large");
      else g(kNt(T.name));
      return z(M);
    } catch (r) {
      let n = (r instanceof Error ? zCo(r) : [String(r)]).filter(Boolean).join(`
`).trim() || "Error";
      if (p7e(r)) t(`MCP server tool call '${e}' aborted`);
      else {
        let { code: A, isSad: E } = CNt(r);
        if (E) {
          if (t(`MCP server tool call '${e}' failed: ${n}`, { level: "error" }), !ue) p(kNt(T.name), A);
        } else {
          let C = N(r);
          l("telemetryMessage" in C ? C : Qe(C, `mcp server tool '${T.name}' threw`)), m(kNt(T.name), A);
        }
      }
      return z({ isError: true, content: [{ type: "text", text: n }] });
    } finally {
      ee(he);
    }
  }), w;
}
function ee(f) {
}
function ge(f, O) {
  let u = O?.extra?.[cAn];
  return u instanceof AbortSignal ? AbortSignal.any([f, u]) : f;
}
export {
  Ycr,
  cAn,
  pvi
};
