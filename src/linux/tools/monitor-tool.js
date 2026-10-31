// linux/tools/monitor-tool.js — Claude Code 2.1.310（linux）模块 chunk-a9gdafcf.js
import { F, J } from "../context/not-admin-owned.js";
import { b } from "../agents/third-party.js";
import { R, N } from "../telemetry/anthropic-workspace-id.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Ii } from "../shell/invalid-type.js";
import { f } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { xI } from "../git/utf-8.js";
import { hs, un } from "../fs/async-hooks.7959.js";
import { Prr } from "../mcp/allowed-warning.js";
import { lk, sT } from "../fs/ca-certs-load.js";
import { C0, yR } from "../artifacts/cobalt-plinth-lovage.js";
import { Sp } from "../auth/env-quad.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { vd, tn } from "../context/tool-result-clearing-after-idle-server-report.js";
import { HL, RD } from "../git/bridge-child-tool-diff.js";
import { h1, QEe, xLt, fge, PLt, ILt, OLt, rke, eHs, xPr, PPr, fMe, rb, Ige, V4, uNt, WWe } from "../core/conversation-engine.js";
import { e$, Xne } from "../context/team-memory-sync.js";
import { eV, D$o } from "../shell/sandbox.js";
import { icn } from "../mcp/declared-tools-dropped-at-compaction.js";
import { O7e, Acn, rHe, Pde, qKs, J$r, v0o, E0o, k0o } from "../shell/chunk-23a29f4d.js";
import { v0n, E0n, tK, oEs, Fwr, ES } from "../tasks/artifact-changed.js";
import { Sws, yQt } from "../shared/chunk-c8bb8655.js";
import { NT, Kb } from "../agents/in-process-teammate.b77f.js";
import { Gs } from "../shared/chunk-22d55e0c.js";
import { o, v, M, T, u, Ue } from "../vendor/zod/string-format.js";
import { isIP as Se } from "net";
import { lookup as de } from "dns/promises";
import { isIP as pe } from "net";
import Q from "ws";
class Fct extends Error {
  constructor(e) {
    super(e);
    this.name = "MonitorWsPreconditionError";
  }
}
function JSr(e) {
  switch (e.protocol) {
    case "wss:":
    case "https:":
      e.protocol = "wss:";
      break;
    case "ws:":
    case "http:":
      e.protocol = "ws:";
      break;
    default:
      throw new Fct(`unsupported socket base scheme ${e.protocol}`);
  }
  return e.toString();
}
function K(e) {
  return e.replace(/^\[|\]$/g, "");
}
async function fe(e, n) {
  let s = new URL(e), r = K(s.hostname);
  if (pe(r)) {
    if (uNt(r)) throw new Fct(`${r} is in a private, link-local, or cloud-metadata range`);
    return { url: e, tls: n.tls };
  }
  let d;
  try {
    d = await de(r, { all: true });
  } catch (D) {
    throw new Fct(`could not resolve ${r}: ${N(D).message}`);
  }
  if (d.length === 0) throw new Fct(`could not resolve ${r}`);
  for (let { address: D } of d) if (uNt(D)) throw new Fct(`${r} resolves to ${D}, which is in a private, link-local, or cloud-metadata range`);
  if (n.proxy) return { url: e, tls: n.tls };
  if (s.protocol === "wss:") return { url: e, tls: n.tls };
  let g = d.find((D) => D.family === 4) ?? d[0], w = s.host;
  return s.hostname = g.family === 6 ? `[${g.address}]` : g.address, { url: s.toString(), headers: { Host: w }, tls: n.tls };
}
var ge = 3e4, NLn = "handshake_timeout";
function he(e, n) {
  let s = Number.isInteger(e) && e >= 100 && e <= 599 ? e : 0;
  return `${n ? "cf_mitigated" : "upgrade_rejected"}_${s}`;
}
function TIe(e) {
  let n = /^(cf_mitigated|upgrade_rejected)_(\d{1,3})$/.exec(e ?? "");
  if (n === null) return null;
  return { status: Number(n[2]), cfMitigated: n[1] === "cf_mitigated" };
}
var Z = 1048576;
function ye(e) {
  if (Array.isArray(e)) return e.reduce((n, s) => n + s.length, 0);
  if (e instanceof ArrayBuffer) return e.byteLength;
  return e.length;
}
function EOt(e) {
  return { taskRegistry: e.taskRegistry, toolUseId: e.toolUseId, agentId: e.agentId, storageV5: e.storageV5, credentials: e.credentials, hookCaller: e.hookCaller, hookServesModel: e.hookServesModel };
}
function be(e) {
  return (n) => {
    if (e.readyState === Q.OPEN) try {
      e.send(n);
    } catch {
    }
  };
}
async function gQt(e, n) {
  let s = EOt(n), { description: r, timeout_ms: d, persistent: g } = e, { url: w, protocols: D } = e.ws;
  Prr(w);
  let { toolUseId: B, taskRegistry: S } = s, C = Xne(s), i = e.reuseTaskId ?? NT("monitor_ws");
  E0n(i, s, S);
  let O = v0n({ description: r, agentId: C, taskRef: { id: i }, arm: e.quietLifecycle ? void 0 : "ws", killTask: () => {
    if (!Fwr(i, m)) return false;
    return ES(i, S, { quiet: true }), true;
  } }), P = sT(w), L = await fe(w, { proxy: P, tls: lk(w) }), E = Ii(e.headers ?? {}, (c, a) => a.toLowerCase() === "host"), m = new Q(L.url, D, { proxy: P, headers: { ...E, ...L.headers }, tls: L.tls }), W = Date.now(), I, x = () => Fwr(i, m), A = Date.now();
  m.on("open", () => {
    let c = S.all()[i];
    if (c && c.status === "running" && x()) try {
      e.onLifecycle?.("open", void 0, Date.now() - W);
    } catch {
    }
    let a = e.keepalive;
    if (a && c && c.status === "running" && x()) {
      for (let y of a.openFrames) try {
        m.send(y);
      } catch {
      }
      A = Date.now();
      let h = { lastAt: A };
      I = setInterval((y, _, k, ue, j, X) => {
        let H = Date.now();
        if (k !== void 0 && H - A > k) {
          try {
            y.terminate();
          } catch {
          }
          return;
        }
        let G = j;
        try {
          G = ue?.() ?? j;
        } catch {
        }
        if (!(k !== void 0 && H - A > k - j * 2) && H - X.lastAt < G - j / 2) return;
        X.lastAt = H;
        for (let me of typeof _ === "function" ? _() : _) try {
          y.send(me);
        } catch {
        }
      }, a.intervalMs, m, typeof a.frame === "string" ? [a.frame] : a.frame, a.deadlineMs, a.sendEveryMs, a.intervalMs, h), I.unref?.();
    }
    if (e.onSender && c && c.status === "running" && x()) try {
      e.onSender(be(m));
    } catch {
    }
  }), m.on("ping", () => {
    A = Date.now();
  }), m.on("message", (c, a) => {
    A = Date.now();
    let h = S.all()[i];
    if (!h || h.status !== "running" || !x()) return;
    let y = ye(c);
    if (y > Z) {
      tK(r, `[Dropped ${y}-byte frame (exceeds ${Z}); closing]`, i, { isHousekeeping: true, agentId: C, turnAttribution: "none" }), ES(i, S, { quiet: true });
      return;
    }
    if (a) {
      if (typeof e.transform === "function") return;
      O.onData(`[binary frame, ${y} bytes]
`);
      return;
    }
    let _ = c.toString("utf8");
    if (typeof e.transform === "function") {
      let k;
      try {
        k = e.transform(_);
      } catch {
        k = null;
      }
      if (k === null) return;
      _ = k;
    }
    O.onData(_ + `
`);
  });
  let z;
  m.on("unexpected-response", (c, a) => {
    let h = a?.statusCode ?? 0;
    if (h === 101) return;
    let y = a?.headers ?? {}, _ = y["cf-mitigated"] !== void 0;
    z = he(h, _), t(`[callWs] upgrade rejected: status=${h} cf-mitigated=${String(y["cf-mitigated"])} cf-ray=${String(y["cf-ray"])}`), a?.resume?.();
    let k = S.all()[i];
    if (!e.quietLifecycle && k?.status === "running" && x()) tK(r, `[WebSocket upgrade rejected: HTTP ${h}]`, i, { isHousekeeping: true, agentId: C, turnAttribution: "none" });
    try {
      m.terminate();
    } catch {
    }
  }), m.on("error", (c) => {
    clearInterval(I);
    try {
      e.onSenderClosed?.();
    } catch {
    }
    let a = S.all()[i];
    if (!a || a.status !== "running" || !x()) return;
    if (t(`[callWs] socket error: ${c.message}`), !e.quietLifecycle && z === void 0) tK(r, `[WebSocket error: ${c.message}]`, i, { isHousekeeping: true, agentId: C, turnAttribution: "none" });
  }), m.on("close", (c, a) => {
    clearInterval(I), O.flushAndClose();
    try {
      e.onSenderClosed?.();
    } catch {
    }
    let h = S.all()[i];
    if (!h || h.status !== "running" || !x()) return;
    try {
      e.onLifecycle?.("close", z ?? String(c), Date.now() - W);
    } catch {
    }
    if (!e.quietLifecycle) {
      let y = a.length ? ` ${a.toString("utf8")}` : "";
      tK(r, `[WebSocket closed: ${c}${y}]`, i, { isHousekeeping: true, agentId: C, turnAttribution: "none" });
    }
    ES(i, S, { quiet: true, connectionLost: true });
  });
  let q = g ? void 0 : setTimeout((c, a, h, y, _, k) => {
    if (c.isClosed()) return;
    if (!k.quiet) {
      if (c.flush(), c.isClosed()) return;
      tK(a, J$r(k.timeoutMs, c.eventCount(), k.bounded), h, { isHousekeeping: true, agentId: y });
    }
    ES(h, _, { quiet: true });
  }, d, O, r, i, C, S, { timeoutMs: d, bounded: e.bounded === true, quiet: e.quietLifecycle }), U = { ...Kb(i, "monitor_ws", r, B), type: "monitor_ws", status: "running", url: w, timeoutId: q, agentId: C, ...e.ambient && { ambient: true }, ...e.autoReactArmed && { autoReactArmed: true }, ...e.autoReactSlug && { autoReactSlug: e.autoReactSlug }, ...e.frameLive && { frameLive: { ...e.frameLive, armedAt: Date.now() } } };
  if (S.register(U), oEs(i, m), HL(C, `monitor:${i}`, S), e.ambient) {
    let c = setTimeout((a, h, y, _, k) => {
      if (a.readyState === 0 && Fwr(h, a)) {
        try {
          _.onLifecycle?.("close", NLn, Date.now() - k);
        } catch {
        }
        ES(h, y, { quiet: true, connectionLost: true });
      }
    }, e.handshakeDeadlineMs ?? ge, m, i, S, e, W);
    c.unref?.(), m.once("open", () => clearTimeout(c)), m.once("close", () => clearTimeout(c));
  }
  return { data: { taskId: i, timeoutMs: g ? 0 : d, persistent: g } };
}
var ee = "Shell command or script. Each stdout line is an event; exit ends the watch.", ke = "command contains control characters that would be hidden in the approval dialog", te = () => o().refine(xI, ke), we = () => u({ url: o().refine(xI, "url contains control characters that would be hidden in the approval dialog").refine((e) => {
  try {
    let n = new URL(e);
    return (n.protocol === "ws:" || n.protocol === "wss:") && !n.username && !n.password && !/[\t\n\r]/.test(e) && /^[\x00-\x7F]*$/.test(e);
  } catch {
    return false;
  }
}, "url must be a valid ASCII ws:// or wss:// URL with no userinfo or whitespace"), protocols: T(o().regex(/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, "protocol must be an RFC 6455 token")).refine((e) => new Set(e).size === e.length, "protocols must be unique").optional() }).describe("WebSocket to open. Each text frame is an event; binary frames are reported as a placeholder line. Socket close ends the watch. Cannot be combined with command."), oe = "Short human-readable description of what you are monitoring (shown in notifications).";
function Me() {
  return { description: o().describe(oe), timeout_ms: v().min(1e3).optional().default(O7e).describe(`Kill the monitor after this deadline. Default ${O7e}ms, max ${Acn}ms. Ignored when persistent is true.`), persistent: M().optional().default(false).describe("Run for the lifetime of the session (no timeout). Use for session-length watches like PR monitoring or log tails. Stop with TaskStop.") };
}
function ne() {
  let e = rHe();
  return { description: o().describe(oe), timeout_ms: v().min(1e3).max(Acn, `timeout_ms must be ≤ ${Acn}`).optional().default(O7e).describe(`Kill the monitor after this deadline. Default ${O7e}ms. Deadlines above ${e}ms are capped to ${e}ms. You are notified at expiry and can re-arm.`) };
}
var Ce = { message: `timeout_ms must be ≤ ${Acn}`, path: ["timeout_ms"] };
function Te(e) {
  return e.persistent || e.timeout_ms <= Acn;
}
function re(...e) {
  return F(e, Boolean) === 1;
}
function Ie() {
  return QEe() ? xLt() : {};
}
var se = "allowed_domains applies only to a command monitor";
function ie(e) {
  return e.command !== void 0 || fge(e) === void 0;
}
function ve(e) {
  let n = PLt(e);
  return n === void 0 ? e.command ?? "" : { command: e.command ?? "", ...n };
}
var le = "exactly one of command or ws";
function ce() {
  return { command: te().optional().describe(ee), ...Ie(), ws: we().optional() };
}
var _e = p(() => Ue({ ...Me(), ...ce() }).refine((e) => re(e.command, e.ws), le).refine(ie, se).refine(Te, Ce)), Re = p(() => u({ ...ne(), ...ce() }).refine((e) => re(e.command, e.ws), le).refine(ie, se));
function De() {
  return Pde() ? Re() : _e();
}
var xe = p(() => {
  let e = ne(), n = rHe();
  return u({ ...e, timeout_ms: e.timeout_ms.describe(`Kill the monitor after this deadline. Default ${O7e}ms. Deadlines above ${n}ms are capped to ${n}ms. It may also stop soon after your reply.`), command: te().describe(ee) });
});
function Ee() {
  if (!J()) return;
  let e = e$(xe());
  return Ae(e) ? e : void 0;
}
function Ae(e) {
  return e.type === "object";
}
var Oe = p(() => u({ taskId: o().describe("ID of the background monitor task."), timeoutMs: v().describe("Timeout deadline in milliseconds (0 when persistent)."), persistent: M().optional().describe("No timeout — runs until TaskStop or session end.") }));
function Pe(e) {
  let n = Xne(e);
  if (n !== void 0 && h1(n)) throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.");
}
async function Le(e, n) {
  let s = icn(ae(n), Gs);
  if (s?.verdict.behavior === "deny") return s.verdict;
  let r = await PPr({ ...e, command: e.command }, { ...n, permissionLayers: [...n.permissionLayers ?? [], { kind: "sandbox_auto_allow_suspended" }] });
  if (s === null || r.behavior === "deny") return r;
  if (r.behavior === "ask") {
    let { suggestions: d, ...g } = r;
    return { ...g, matchedAskRule: s.rule };
  }
  return s.verdict;
}
async function $e(e) {
  if (e.command === void 0) return { result: true };
  let n = rb({ command: e.command }), s = fMe(n, e.command, false, "bash");
  if (s !== null) return f("sandbox_exec", "sandbox_policy_refusal", { tool: b("monitor") }), { result: false, message: s, errorCode: 14 };
  return ILt(e, n) ?? { result: true };
}
async function We(e, n, s, r, d) {
  let { description: g, timeout_ms: w, persistent: D } = n, { abortController: B, toolUseId: S, taskRegistry: C } = r, i = Xne(r), V = rb({ command: e }), O = fMe(V, e, false, "bash");
  if (O !== null) throw f("sandbox_exec", "sandbox_policy_refusal", { tool: b("monitor") }), new eV(O);
  let P = {}, L = v0n({ description: g, agentId: i, taskRef: P, arm: "bash", killTask: () => {
    if (!P.id) return false;
    return V4(P.id, C), true;
  } }), E = await Ige(e, B.signal, "bash", { session: r.session, owningAgentId: i, preventCwdChanges: true, shouldUseSandbox: V, sandboxAttributionId: S, sandboxNetworkLists: OLt(S, e), attributionMessageId: d?.message.id, onStdout: L.onData, agentWorktree: r.agentWorktree, isolationRoot: rke(r), sessionEnvVars: r.sessionEnvVars, storageV5: r.storageV5 });
  if (E.status === "completed") {
    let I = await E.result;
    if (I.preSpawnError) {
      let x = new R(I.preSpawnError, "Monitor: pre-spawn error (cwd/argv redacted)");
      throw I.preSpawnErrorCode === "e2big" ? C0(x, { kind: "spawn_arg_limit" }) : x;
    }
  }
  if (E.status === "killed") {
    if (await E.result, E.cleanup(), i !== void 0 && h1(i)) throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.");
    throw Error("This call was interrupted before the monitor started; nothing is running.");
  }
  let m = await WWe({ command: e, description: g, shellCommand: E, toolUseId: S, agentId: i, kind: "monitor" }, { abortController: B, taskRegistry: C });
  P.id = m.taskId, E0n(m.taskId, r, C), HL(i, `monitor:${m.taskId}`, C);
  let W = D ? void 0 : setTimeout((I, x, A, z, q, U) => {
    if (I.isClosed()) return;
    if (I.flush(), I.isClosed()) return;
    tK(x, J$r(U.timeoutMs, I.eventCount(), U.bounded), A, { isHousekeeping: true, agentId: z }), V4(A, q);
  }, w, L, g, m.taskId, i, C, { timeoutMs: w, bounded: s });
  return E.result.then(async () => {
    if (W) clearTimeout(W);
    try {
      await L.reportExit(m);
    } catch (I) {
      l(I);
    } finally {
      RD(i, `monitor:${m.taskId}`, C);
    }
  }), { data: { taskId: m.taskId, timeoutMs: D ? 0 : w, persistent: D } };
}
function hQt(e) {
  let n = Sp("allow_web_fetch", "Arbitrary-URL egress", "is");
  if (n !== null) return { kind: "compliance", host: "", detail: n };
  let s = new URL(e), r = K(s.hostname);
  if (Se(r) && uNt(r)) return { kind: "ssrf", host: r, detail: "the address is in a private, link-local, or cloud-metadata range" };
  let d = s.port !== "" ? Number(s.port) : s.protocol === "wss:" ? 443 : 80, g = D$o(r, d);
  if (!g.allowed) return { kind: "sandbox-policy", host: r, detail: g.reason };
  return null;
}
function Ne(e) {
  let n = hQt(e.url);
  if (n !== null) return { behavior: "deny", message: n.kind === "compliance" ? `Monitor cannot open a WebSocket. ${n.detail}` : `Monitor cannot open a WebSocket to ${n.host}: ${n.detail}.`, decisionReason: { type: "other", reason: n.kind === "compliance" ? "organization policy disables model-chosen URL egress" : n.kind === "ssrf" ? "SSRF-blocked address range" : n.detail } };
  let s = e.protocols !== void 0 && e.protocols.length > 0 ? ` (subprotocols: ${yQt(e.protocols)})` : "";
  return { behavior: "ask", message: `Monitor will open a WebSocket to ${e.url}${s}`, suggestions: [] };
}
function Y(e, n) {
  return { get session() {
    return e.session;
  }, get hookCaller() {
    return e.hookCaller;
  }, get hookServesModel() {
    return e.hookServesModel;
  }, get storageV5() {
    return e.storageV5;
  }, get credentials() {
    return e.credentials;
  }, get agentId() {
    return e.agentId;
  }, get agentWorktree() {
    return e.agentWorktree;
  }, get taskRegistry() {
    return e.taskRegistry;
  }, get sessionEnvVars() {
    return e.sessionEnvVars;
  }, get shellPermission() {
    return { ...e.shellPermission, abortController: { signal: n.signal }, toolUseId: n.toolUseId };
  }, get mcpState() {
    return e.mcpState;
  }, get getMcp() {
    return e.mcpState;
  }, get toolUseId() {
    return n.toolUseId;
  }, get abortController() {
    return { signal: n.signal };
  } };
}
var ze = { name: Gs, enablesCodeExecution: true, maxResultSizeChars: 1e4, shouldDefer: true, userFacingName() {
  return "Monitor";
}, getToolUseSummary(e) {
  if (!e?.description) return null;
  return hs(e.description, yR);
}, getActivityDescription(e) {
  return e?.description ? `Monitoring: ${e.description}` : "Monitoring";
}, isEnabled() {
  return vd();
}, isConcurrencySafe() {
  return true;
}, renderToolUseMessage(e) {
  if (!e.description) return null;
  return e.description;
}, get outputSchema() {
  return Oe();
}, mapToolResultToToolResultBlockParam(e, n) {
  let s = un(e.timeoutMs, { hideTrailingZeros: true }), r = J() ? `expires in ${s} unless the command exits first, and may stop soon after your reply` : e.persistent ? "persistent — runs until TaskStop or session end" : Pde() ? `expires in ${s} unless the source ends first; you get one notice at expiry — re-arm if you still need the watch` : `timeout ${e.timeoutMs}ms`;
  return { tool_use_id: n, type: "tool_result", content: `Monitor started (task ${e.taskId}, ${r}). You will be notified on each event. Keep working — do not poll or sleep. ${J() ? "An event that arrives after your reply is not the user's reply." : "Events may arrive while you are waiting for the user — an event is not their reply."}` };
} }, Be = tn({ ...ze, backgrounding: "never", searchHint: "watch, monitor, or keep an eye on a process/log/command or WebSocket — stream each stdout line as a live notification", async description() {
  return E0o() + (J() ? "" : k0o) + v0o();
}, async prompt() {
  return E0o() + (J() ? "" : k0o) + v0o();
}, get inputSchema() {
  return De();
}, get inputJSONSchema() {
  return Ee();
}, toAutoClassifierInput(e) {
  return e.ws ? `websocket ${e.ws.url}${Sws(e.ws)}` : ve(e);
}, sandboxNetworkLists(e) {
  return fge(e);
}, create(e) {
  return { permissionCheckFailureDecision(n, s) {
    let r = Y(e, s);
    return xPr(Gs, r.shellPermission);
  }, validateInput: $e, async checkPermissions(n, s) {
    let r = Y(e, s);
    if (n.ws) {
      let d = eHs("Monitor websocket", r.shellPermission);
      if (d !== void 0) return d;
      return Ne(n.ws);
    }
    return Le(n, r.shellPermission);
  }, async call(n, s) {
    let r = Y(e, s), { parentMessage: d } = s;
    Pe(r);
    let g = Pde(), w = qKs(n, g);
    if (n.ws) return gQt({ ...n, ...w, bounded: g, ws: n.ws }, EOt(r));
    return We(n.command, { ...n, ...w }, g, r, d);
  } };
} }), BTi = Be;
export {
  BTi,
  EOt,
  Fct,
  JSr,
  NLn,
  TIe,
  gQt,
  hQt
};
