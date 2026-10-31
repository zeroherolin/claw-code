// linux/remote/remote-tool-targets.js — Claude Code 2.1.310（linux）模块 chunk-pg7b5jxr.js
import { F } from "../context/not-admin-owned.js";
import { b, c, ce } from "../agents/third-party.js";
import { Ye, Xd, N, d, E } from "../telemetry/anthropic-workspace-id.js";
import { Pe, si } from "../shared/chunk-57ff8cc1.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { BH, t } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "../shared/environment.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Xo } from "../mcp/always-allow.js";
import { Gf, PRe } from "../mcp/toolbox-mcp-server-id.js";
import { hG, Ggt } from "../vendor/mcp-sdk/chunk-384e0b2c.js";
import { hd } from "./self-hosted.js";
import { z5, TNe } from "../mcp/claude-browser.js";
import { tZ, nZ, NV, k } from "../settings/global-config-and-gates.js";
import { pV } from "../tools/device-session-limit.js";
import { Qu, JJn, QJn, LWt, K2e, XD, o9s, s9s, MSt, eQn, oQn, a9s, dWo, l9s, d9s, iQn, p9s, g9s, dV, V8, XA, $S } from "../context/tool-result-clearing-after-idle-server-report.js";
import { dY, BK, tU, a8, Yne, RGe, _w } from "../context/team-memory-sync.js";
import { Ove, u7t, bBe } from "../permissions/device-bash.js";
import { jl } from "../mcp/declared-tools-dropped-at-compaction.js";
import { Jd, m7t } from "../shared/outcome-of.js";
import { g7t, h7t, y7t } from "../shared/chunk-6346e686.js";
import { SBe } from "./remote-tools-reannounce.1ffc.js";
import { ir, oNt } from "../core/conversation-engine.js";
import { En } from "../shared/chunk-3c6e6b31.js";
function te() {
  try {
    return k("tengu_violin_scroll", false);
  } catch {
    return false;
  }
}
function H() {
  return import.meta.require("../mcp/emit-tripwire-event.js").mcpClientModule();
}
class X {
  #e = /* @__PURE__ */ new WeakMap();
  reinitialize(e) {
    let n = this.#e.get(e);
    if (n) return n;
    let r = H().clearServerCache(e.name, e.config).catch(() => {
    });
    return this.#e.set(e, r), r;
  }
}
var Ce = -32e3;
async function j(e, n, r) {
  let o = await re(e, n, r);
  if (o.kind !== "session_expired") return oe(e, o);
  await n.recovery.reinitialize(o.connection);
  let u = await re(e, n, r);
  return u.kind === "session_expired" ? { kind: "expired_twice" } : oe(e, u);
}
async function oe(e, n) {
  if (n.kind === "connect_failed") await H().evictStaleFailedConnectMemoForServe(e.name, e.config).catch(() => {
  });
  return n;
}
async function re(e, { deadlineAt: n, signal: r, idempotent: o = false }, u) {
  let s = H(), m;
  try {
    m = await s.ensureConnectedClient(e, { signal: r, timeoutMs: Math.max(1, n - Date.now()), context: "remote tool execution" });
  } catch (f) {
    return { kind: "connect_failed", error: f };
  }
  let p = n - Date.now();
  if (p <= 0) return { kind: "connect_failed", error: Error("deadline reached before the request could be sent") };
  try {
    return { kind: "ok", value: await u(m, p) };
  } catch (f) {
    return f instanceof Error && (s.isMcpSessionExpiredError(f) || o && Re(f, m)) ? { kind: "session_expired", connection: m } : { kind: "failed", error: f };
  }
}
function Re(e, n) {
  return ("code" in e && e.code === Ce && e.message.includes("Connection closed") || E(e) === "CONNECTION_CLOSED") && (n.config.type === "http" || n.config.type === "claudeai-proxy");
}
var Ae = { maxRequestBytes: 4128768, defaultDeadlineMs: 58e3 }, Ee = -32001, Me = "office_bridge.kind", De = "office_bridge.bound_miss", Oe = /* @__PURE__ */ new Set(["not_connected", "send_failed", "contested", "unsupported_on_bound"]), Le = /* @__PURE__ */ new Set(["disconnected", "cancelled"]), Ie = /* @__PURE__ */ new Set(["timeout"]), He = /not connected|not reachable|offline/i, Be = /disconnected before responding|connection may be closing/i, xe = /did not respond within/i, Ne = 200;
function ae(e, n) {
  return { kind: "bridge", limits: Ae, call: (r, o, u, s) => Fe(e, n, r, o, u, s), callPlumbing: (r, o, u) => qe(e, n, r, o, u) };
}
async function qe(e, n, r, o, u) {
  if (!RGe.has(r)) throw Error("callPlumbing: not a bridge plumbing tool");
  let s = Date.now(), m = V8(u.deadlineMs), p = await j(e, { deadlineAt: s + m, recovery: n, signal: u.signal, idempotent: u.idempotent }, (f, _) => hG(f, { name: r, arguments: { ...o } }, { signal: u.signal, timeout: _ }));
  if (p.kind === "ok") {
    let f = dV(p.value), _ = ue(f.content), g = f.isError && f.envelope.status === "absent" ? de(p.value, _, m) : void 0;
    if (g !== void 0) return ie(g);
    return { kind: "result", structuredContent: p.value.structuredContent, text: _, isError: f.isError };
  }
  if (u.signal.aborted) return { kind: "cancelled" };
  switch (p.kind) {
    case "connect_failed":
      return { kind: "unreachable", detail: jl(d(p.error)) };
    case "expired_twice":
      return { kind: "unreachable", detail: "the device bridge rejected the session again right after re-initializing it; nothing ran" };
    case "failed":
      return ie(le(p.error, m, void 0));
  }
}
function ie(e) {
  switch (e.kind) {
    case "timed_out":
    case "unreachable":
    case "dropped":
    case "transport_error":
    case "cancelled":
      return e;
    default:
      return { kind: "transport_error", detail: `unexpected: ${e.kind}` };
  }
}
async function Fe(e, n, r, o, u, s) {
  let m = Date.now(), p = V8(s.deadlineMs), f = a9s(u), _ = await j(e, { deadlineAt: m + p, recovery: n, signal: s.signal }, (g, w) => hG(g, { name: r, arguments: { ...o, [K2e]: u }, _meta: { [s9s]: s.toolUseId, ...f !== void 0 && { [o9s]: f } } }, { signal: s.signal, timeout: w }));
  if (_.kind === "ok") {
    let g = Ue(_.value, Date.now() - m, p);
    return g.kind === "result" ? { ...g, metaCopy: f === void 0 ? "omitted" : "attached" } : g;
  }
  if (s.signal.aborted) return { kind: "cancelled" };
  switch (_.kind) {
    case "connect_failed":
      return { kind: "unreachable", detail: jl(d(_.error)) };
    case "expired_twice":
      return { kind: "unreachable", detail: "the device bridge rejected the session again right after re-initializing it; nothing ran" };
    case "failed":
      return le(_.error, p, s.toolUseId);
  }
}
function Ue(e, n, r) {
  let o = dV(e);
  switch (o.envelope.status) {
    case "malformed":
      return { kind: "transport_error", detail: "malformed result envelope", unreadableResult: true };
    case "present":
      return { kind: "result", content: o.content, isError: o.isError, envelope: o.envelope.envelope, elapsedMs: n, responseBytes: XA(e), ...{} };
    case "absent": {
      let u = o.isError ? de(e, ue(o.content), r) : void 0;
      if (u) return u;
      return { kind: "result", content: o.content, isError: o.isError, envelope: void 0, elapsedMs: n, responseBytes: XA(e) };
    }
  }
}
function de(e, n, r) {
  let o = je(e);
  if (o !== void 0 && Ie.has(o)) return { kind: "timed_out", capMs: r };
  if (o !== void 0 && Le.has(o)) return { kind: "dropped", detail: `bridge: ${o}` };
  if (o !== void 0 && Oe.has(o)) return { kind: "unreachable", detail: `bridge: ${o}`, ...o === "not_connected" && { machineNotAnswering: true } };
  if (o === "malformed_result") return { kind: "transport_error", detail: "bridge: malformed result", unreadableResult: true };
  if (n.length > Ne) return;
  if (xe.test(n)) return { kind: "timed_out", capMs: r };
  if (Be.test(n)) return { kind: "dropped", detail: "bridge: disconnected" };
  if (He.test(n)) return { kind: "unreachable", detail: "bridge: not connected", machineNotAnswering: true };
  return;
}
function je(e) {
  let n = e !== null && typeof e === "object" && "_meta" in e ? e._meta : void 0;
  if (n === null || typeof n !== "object") return;
  let r = n, o = r[Me];
  if (typeof o === "string") return o;
  return r[De] !== void 0 ? "not_connected" : void 0;
}
function le(e, n, r) {
  if (se(e) === Ee || E(e) === "REQUEST_TIMEOUT") return { kind: "timed_out", capMs: n };
  let o = jl(d(e));
  if (se(e) === nZ && Ve(e, r)) return { kind: "approval_unverified" };
  if (NV(e) !== "downstream_unreachable") return { kind: "transport_error", detail: o };
  return $e.has(E(e) ?? "") ? { kind: "unreachable", detail: o } : { kind: "dropped", detail: o };
}
var $e = /* @__PURE__ */ new Set(["ECONNREFUSED", "ConnectionRefused", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN", "FailedToOpenSocket"]);
function Ve(e, n) {
  let r = e !== null && typeof e === "object" && "data" in e ? e.data : void 0;
  if (typeof r !== "object" || r === null) return false;
  let o = r;
  return typeof o.args_sha256 === "string" && typeof o.tool_name === "string" && typeof o.tool_use_id === "string" && n !== void 0 && o.tool_use_id === n;
}
function se(e) {
  return e !== null && typeof e === "object" && "code" in e && typeof e.code === "number" ? e.code : void 0;
}
function ue(e) {
  return typeof e === "string" ? e : e.flatMap((n) => n.type === "text" ? [n.text] : []).join(`
`);
}
var Ke = "attached-machine";
function fe(e, n, r) {
  let o = n.map((h) => ({ ...h, name: BH(h.name) })), u = o.filter((h) => Yne.has(h.name)).map((h) => ({ toolName: h.name, meta: Ge(h), raw: h._meta?.[XD] })), s = o.filter((h) => !Yne.has(h.name) && bBe(h.name) && h._meta?.[Ove] !== void 0), m = s.flatMap((h) => {
    let O = We(h);
    return O === void 0 ? [] : [{ bridgeName: h.name, marker: O }];
  }), p = new Set(m.map((h) => h.bridgeName)), f = new Set(s.filter((h) => !p.has(h.name)).map((h) => h.name)), _ = f.size, g = F(u, (h) => h.meta === void 0), w = new Set(u.map((h) => h.toolName)), v = new Set(o.filter((h) => RGe.has(h.name)).map((h) => h.name)), C = new Map(m.map(({ bridgeName: h, marker: O }) => [h, { localName: O.tool }])), S = /* @__PURE__ */ new Set([...u.flatMap((h) => h.meta ? [h.meta.target.name] : []), ...m.map(({ marker: h }) => h.target.name)]), R = o.reduce((h, O) => {
    let T = En(O.name);
    return h.set(T, (h.get(T) ?? 0) + 1), h;
  }, /* @__PURE__ */ new Map()), M = s.some((h) => (R.get(En(h.name)) ?? 0) > 1), y = S.size > 1 ? "two_names" : w.size < u.length || M ? "duplicate_tool" : void 0;
  if (u.length === 0 && m.length === 0 && _ === 0) return { hosts: [], invalid: y, unreadable: 0, unreadableMarkers: _ };
  let x = u.find((h) => h.meta)?.meta, q = x?.target ?? m[0]?.marker.target, P = x === void 0 ? u.map((h) => h.raw) : [], U = P.map(l9s).find((h) => h !== void 0), G = P.map(d9s).find((h) => h !== void 0);
  return { hosts: [{ kind: "remote", source: "bridge", name: q?.name ?? Ke, status: y === void 0 ? "online" : "offline", enforcement: "self", description: q, servedTools: w, passthroughTools: C, rejectedPassthroughTools: f, plumbingTools: v, protocol: U !== void 0 ? { kind: "incompatible", announced: U } : oQn(x?.protocol_versions ?? G ?? (u.length === 0 ? [Qu] : void 0)), transport: ae(e, r) }], invalid: y, unreadable: g, unreadableMarkers: _ };
}
function We(e) {
  let n = u7t(BH(e._meta?.[Ove]));
  return n !== void 0 && n.tool === Xo(...ze(e.name)) && pV(n.target.name) ? n : void 0;
}
function ze(e) {
  let n = e.indexOf("__");
  return n < 0 ? ["", e] : [e.slice(0, n), e.slice(n + 2)];
}
function Ge(e) {
  let n = iQn(BH(e._meta?.[XD]));
  return n !== void 0 && n.tool === e.name && pV(n.target.name) ? n : void 0;
}
async function me(e, n, r, o, u) {
  if (!RGe.has(r)) throw Error("callPlumbing: not a plumbing tool");
  if (u.signal.aborted) return { kind: "cancelled" };
  let s = V8(u.deadlineMs), m = { subtype: "remote_plumbing_call", ...g9s({ instanceId: n.instanceId, host: n.host, name: r, args: o, issuedAt: Date.now(), deadlineMs: s }) }, p;
  try {
    p = e.sendServedCallRequest({ request: m, accepts: Xe, signal: u.signal });
  } catch (g) {
    return { kind: "transport_error", detail: `send failed: ${d(g)}` };
  }
  if (!p.sent) return p.reply.catch(() => {
  }), { kind: "unreachable", detail: "the session stream is closed; nothing was sent" };
  let f = false, _ = setTimeout(() => {
    f = true, p.cancel();
  }, s);
  try {
    let g = await p.reply;
    return Je(g) ?? { kind: "transport_error", detail: "the answer was not a tool result" };
  } catch (g) {
    if (f) return { kind: "timed_out", capMs: s };
    if (u.signal.aborted) return { kind: "cancelled" };
    if (g instanceof Xd) return { kind: "dropped", detail: "the session stream closed after the request left" };
    return { kind: "transport_error", detail: d(g) };
  } finally {
    clearTimeout(_);
  }
}
function pe(e) {
  let n = typeof e === "object" && e !== null && "result" in e ? e.result : void 0;
  if (typeof n !== "object" || n === null) return;
  return Array.isArray(n.content) ? n : void 0;
}
function Xe(e) {
  try {
    if (eQn(e)) return false;
    return pe(e) !== void 0;
  } catch {
    return false;
  }
}
function Je(e) {
  let n = pe(e);
  if (n === void 0) return;
  let { content: r, structuredContent: o, isError: u } = n;
  return { kind: "result", structuredContent: o, text: r.flatMap((s) => typeof s === "object" && s !== null && s.type === "text" && typeof s.text === "string" ? [s.text] : []).join(`
`), isError: u === true };
}
var Uvr = { maxRequestBytes: 4128768, defaultDeadlineMs: 58e3 }, ge = 6e4, uut = 1e4;
function tAi(e) {
  let n = { stale: false, quietMisses: [] }, r = e.limits ?? Uvr;
  return { kind: "session", limits: r, call: (o, u, s, m) => Qe(e, n, r, o, u, s, m), markUnresponsive: () => {
    n.stale = true;
  }, checkLive: async ({ signal: o, hold: u }) => {
    let s = e.host(), m = s?.live(), p = e.now ?? Date.now;
    if (s === void 0 || m === void 0 || o.aborted || !(m.status === "offline" || n.stale || p() - m.lastHeardAt > ge)) return;
    if (he(s, p())) return V(s);
    let f = await be(e, n, s, o);
    if (f === "missed" && u !== void 0 && s.live()?.status === "online" && !n.stale) {
      if (u.notify("waiting"), f = await sn(e, n, s, o, u.ms), f === "there") u.notify("back");
    }
    if (f !== "missed") return;
    return s.markAway("probe_missed"), V(s);
  }, saidAsleep: () => e.host()?.live()?.asleepSince !== void 0, probeLive: async ({ signal: o }) => {
    let u = e.host();
    if (u === void 0 || u.live() === void 0 || o.aborted) return;
    let s = (e.now ?? Date.now)(), m = await K(e, u, o), p = (u.live()?.lastHeardAt ?? -1 / 0) > s;
    if (m === "answered" || p) return n.stale = false, true;
    if (m !== "missed") return;
    return u.markAway("probe_missed"), false;
  }, isAway: () => e.host()?.live()?.status === "offline", silence: { quietForMs: () => {
    let o = e.host()?.live();
    return o === void 0 || o.status === "offline" || o.asleepSince !== void 0 ? void 0 : (e.now ?? Date.now)() - o.lastHeardAt;
  }, probe: (o) => dn(e, n, o), missed: () => we(e, n), ownStreamFrameAt: () => e.sender.readStreamFrameAt?.(), giveUp: () => {
    e.host()?.markAway("probe_missed");
  } }, isRechecked: () => e.rechecked?.() === true, ...e.sender.withdrawStandingServedCall !== void 0 && { withdrawStanding: (o) => {
    e.sender.withdrawStandingServedCall?.(o);
  } }, callPlumbing: async (o, u, s) => {
    let m = e.host();
    if (m === void 0) return { kind: "unreachable", detail: "the machine is no longer announced on this session" };
    let p = await me(e.sender, { instanceId: m.instanceId, host: m.hostName }, o, u, s);
    if (p.kind === "result") m.heard((e.now ?? Date.now)());
    return p;
  } };
}
function V(e) {
  let n = e.live();
  return n?.asleepSince !== void 0 ? { kind: "unreachable", detail: "it said it was going to sleep", machineNotAnswering: true, saidAsleep: true, lastHeardAt: n.asleepSince } : { kind: "unreachable", detail: "the machine did not answer a liveness check on this session; nothing was sent", machineNotAnswering: true, ...n !== void 0 && { lastHeardAt: Math.max(n.lastHeardAt, n.lastStillHereAt ?? 0) }, ...n?.lastStillHereAt !== void 0 && n.lastStillHereAt > n.lastHeardAt && { saidBusy: true } };
}
function he(e, n) {
  let r = e.live()?.asleepSince;
  return r !== void 0 && n >= r && n - r < JJn;
}
async function Qe(e, n, r, o, u, s, m) {
  let p = e.now ?? Date.now;
  if (m.signal.aborted) return { kind: "cancelled" };
  let f = e.host(), _ = f?.live();
  if (f === void 0 || _ === void 0) return { kind: "unreachable", detail: "the machine is not announcing on this session", machineNotAnswering: true, ...e.signedOff?.() === true && { signedOff: true } };
  let g = "op" in s && s.op === "outcome_of";
  if (!g && (_.status === "offline" || n.stale || p() - _.lastHeardAt > ge)) {
    if (he(f, p())) return V(f);
    let T = p(), A = await K(e, f, m.signal);
    if (A === "cancelled") return { kind: "cancelled" };
    if (A === "unsent") return { kind: "unreachable", detail: "this session's event stream is not accepting requests; nothing was sent" };
    if (A === "stalled" || A === "taken_back") return { kind: "stalled", capMs: e.probeDeadlineMs ?? uut, request: "probe", takenBack: A === "taken_back" };
    if (A === "stream_lost") return { kind: "unreachable", detail: "this session could not complete the liveness check for a reason on its own side (its event stream closed, the service refused the write that carried it, or that write had not completed in time); the machine was not reached and nothing was sent" };
    let B = A === "missed" && (f.live()?.lastHeardAt ?? -1 / 0) > T;
    if (A !== "answered" && !B) {
      if (A === "missed") f.markAway("probe_missed");
      let D = e.host(), ne = D?.live();
      if (D === void 0 || D.instanceId === f.instanceId || ne === void 0 || ne.status === "offline") return A === "gone" ? { kind: "unreachable", detail: "the machine withdrew from this session while it was being asked whether it is still there; nothing was sent", machineNotAnswering: true, signedOff: true } : V(f);
      f = D;
    }
    n.stale = false;
  }
  let w = V8(m.deadlineMs), v = p(), C = f.epoch(), S = C === void 0 ? {} : { sentUnderEpoch: C }, R = "op" in s ? s.op : s.approval ? 2 : 1, M = m7t(R), y = { posts: 0 }, x = (T) => {
    switch (T) {
      case "sending":
        y.posts += 1, y.startedAt ??= p(), Jd(s.call_id, "post started", { leg: R, queue_ms: y.startedAt - v, attempt: y.posts }, M);
        return;
      case "accepted":
        if (y.acceptedAt === void 0) {
          y.acceptedAt = p();
          try {
            m.onAccepted?.();
          } catch (A) {
            t(`[remote-tools] a leg's acceptance was not reported: ${d(A)}`);
          }
        }
        Jd(s.call_id, "post accepted", { leg: R, post_ms: y.startedAt === void 0 ? void 0 : y.acceptedAt - y.startedAt, attempt: y.posts }, M);
        return;
      case "not_accepted":
      case "indeterminate":
        Jd(s.call_id, "post not accepted", { leg: R, phase: T, attempt: y.posts }, M);
    }
  }, q, P;
  try {
    P = e.sender.sendServedCallRequest({ onUpload: x, request: { subtype: "remote_tool_call", ...p9s({ instanceId: f.instanceId, host: f.hostName, name: o, input: u, envelope: s, toolUseId: m.toolUseId, issuedAt: v, deadlineMs: w }) }, accepts: (T) => {
      if (!tn(T, s.call_id)) return false;
      if (g && eQn(T)) return q = T, false;
      return true;
    }, signal: m.signal });
  } catch (T) {
    return { kind: "transport_error", detail: `send failed: ${d(T)}` };
  }
  if (!P.sent) return { kind: "unreachable", detail: "this session's event stream is closed; nothing was sent" };
  Jd(s.call_id, "sent", { leg: R, host_inst: f.instanceId, host_epoch: C, deadline_ms: w }), m.onSent?.({ instanceId: f.instanceId, epoch: C, requestId: P.requestId });
  let U = !g && !("approval" in s && s.approval?.decision === "deny"), { settled: G, late: h } = await _e(P, w, m.signal, { holdAtDeadline: m.onHeldAtDeadline !== void 0, withdrawable: U }), O = (T) => {
    let A = Ze(T, { state: n, limits: r, entry: f, sent: P, toolName: o, callId: s.call_id, capMs: w, held: h !== void 0, sentUnderEpoch: S, elapsedMs: () => p() - v, heardNow: () => p(), heldBelowFloorAnswer: () => q });
    if (A.kind === "result") try {
      let B = p(), D = { ...y.startedAt !== void 0 && { queueMs: y.startedAt - v }, ...y.startedAt !== void 0 && y.acceptedAt !== void 0 && { postMs: y.acceptedAt - y.startedAt }, ...y.acceptedAt !== void 0 && { replyWaitMs: B - y.acceptedAt }, totalMs: B - v, posts: y.posts };
      Jd(s.call_id, "answered", { leg: R, total_ms: D.totalMs, queue_ms: D.queueMs, post_ms: D.postMs, reply_wait_ms: D.replyWaitMs, posts: D.posts }, M), m.onTransit?.(D);
    } catch (B) {
      t(`[remote-tools] a leg's transit was not reported: ${d(B)}`);
    }
    return A;
  };
  if (h !== void 0) m.onHeldAtDeadline?.({ late: h.then(O), withdraw: () => P.cancel(), takeBack: () => U && P.withdraw(), accepted: () => {
    let T = P.delivery();
    return T === "delivered" || T === "untracked";
  } });
  return O(G);
}
function Ze(e, { state: n, limits: r, entry: o, sent: u, toolName: s, callId: m, capMs: p, held: f, sentUnderEpoch: _, elapsedMs: g, heardNow: w, heldBelowFloorAnswer: v }) {
  let C = () => {
    let S = v();
    if (S === void 0) return;
    Jd(m, "query deadline; taking the below-floor answer held for it", { deadline_ms: p, host_inst: o.instanceId });
    let R = J(S, g());
    return R.kind === "dropped" ? { ...R, ..._ } : R;
  };
  switch (e.kind) {
    case "answered": {
      let S = J(e.payload, g());
      if (nn(S)) n.stale = false, o.heard(w());
      return S.kind === "dropped" ? { ...S, ..._ } : S;
    }
    case "deadline": {
      let S = C();
      if (S !== void 0) return S;
      if (f) return Jd(m, "no answer by the deadline; request left standing, checking on it", { deadline_ms: p, host_inst: o.instanceId }), { kind: "timed_out", capMs: p, ..._ };
      if (Jd(m, "no answer by the deadline; request withdrawn", { deadline_ms: p, host_inst: o.instanceId, error_replies_ignored: u.errorRepliesIgnored() }), p >= r.defaultDeadlineMs) n.stale = true;
      return { kind: "timed_out", capMs: p, ..._ };
    }
    case "stalled":
      return Jd(m, e.takenBack ? "still queued here at the deadline; taken back before any write carried it" : "still queued here at the deadline; cancelled behind it", { deadline_ms: p, host_inst: o.instanceId }), { kind: "stalled", capMs: p, request: "call", takenBack: e.takenBack };
    case "unconfirmed": {
      let S = C();
      if (S !== void 0) return S;
      return Jd(m, "deadline reached with the write carrying the request unresolved; withdrawn, delivery unknown", { deadline_ms: p, host_inst: o.instanceId, delivery: e.delivery }), { kind: "dropped", why: "write_unresolved", detail: "the write carrying the request to the session service had not completed, or ended without an answer, by its deadline; whether the machine received it is unknown", ..._ };
    }
    case "cancelled":
      return { kind: "cancelled" };
    case "dropped":
      return { kind: "dropped", detail: "this session's event stream closed after the call was sent", ..._ };
    case "undelivered":
      return { kind: "unreachable", detail: `the session service refused the request${e.status !== void 0 ? ` (HTTP ${e.status})` : ""}; nothing was delivered` };
    case "delivery_unknown":
      return { kind: "dropped", detail: `an upload of the request ended without an answer and a later attempt was refused${e.status !== void 0 ? ` (HTTP ${e.status})` : ""}; whether the machine received it is unknown`, ..._ };
    case "gone":
      return { kind: "host_gone", why: e.why, unsent: e.unsent };
    case "failed":
      return { kind: "transport_error", detail: e.detail };
  }
}
async function _e(e, n, r, { holdAtDeadline: o, withdrawable: u }) {
  let s = e.reply.then((f) => ({ kind: "answered", payload: f }), (f) => {
    if (r.aborted) return { kind: "cancelled" };
    if (f instanceof y7t) return { kind: "undelivered", status: f.status };
    if (f instanceof h7t) return { kind: "delivery_unknown", status: f.status };
    if (f instanceof Xd) return { kind: "dropped" };
    if (f instanceof g7t) return { kind: "gone", why: f.why, unsent: e.delivery() === "queued" };
    return { kind: "failed", detail: d(f) };
  }), m = await Pe(s, n);
  if (m !== void 0) return { settled: m, late: void 0 };
  let p = e.delivery();
  if (p === "queued") {
    if (u && e.withdraw()) return { settled: { kind: "stalled", takenBack: true }, late: void 0 };
    return e.cancel(), { settled: { kind: "stalled", takenBack: false }, late: void 0 };
  }
  if (o) return { settled: { kind: "deadline" }, late: s };
  return e.cancel(), { settled: p === "in_flight" || p === "indeterminate" ? { kind: "unconfirmed", delivery: p } : { kind: "deadline" }, late: void 0 };
}
function en(e) {
  return e.kind === "approval_unverified" || e.kind === "result" && e.envelope?.outcome === "refused";
}
function nn(e) {
  return !en(e) && e.kind !== "dropped";
}
function tn(e, n) {
  try {
    return on(e, n);
  } catch (r) {
    return t(`[remote-tools] an unreadable reply was not taken as an answer: ${d(r)}`), false;
  }
}
function on(e, n) {
  let r = L(e) ? e.result : void 0, o = dV(r);
  switch (o.envelope.status) {
    case "present":
      return o.envelope.envelope.call_id === n;
    case "malformed":
      return rn(r) === n;
    case "absent":
      return false;
  }
}
function rn(e) {
  if (!L(e)) return;
  return [e.structuredContent, e._meta].filter(L).map((r) => r[XD]).find(L)?.call_id;
}
function J(e, n) {
  if (eQn(e)) {
    let { [MSt]: s, ...m } = e, p = J(m, n), f = p.kind === "result" && p.envelope?.outcome === "refused" ? p.envelope : void 0;
    return { kind: "dropped", why: "unverified_refusal", detail: "a sender this session could not verify reported the call refused; the machine itself is asked what became of it", ...p.kind === "result" && f !== void 0 && { reported: { kind: "result", content: "", isError: p.isError, envelope: { v: f.v, outcome: f.outcome, target: { name: "", working_dir: "" }, code: f.code, ...f.reason !== void 0 && { reason: f.reason }, ...f.limit !== void 0 && { limit: f.limit }, message: "" }, elapsedMs: p.elapsedMs, responseBytes: p.responseBytes } } };
  }
  let r = L(e) ? e.result : void 0, o = dV(r);
  if (o.envelope.status === "malformed") return { kind: "transport_error", detail: "malformed result envelope", unreadableResult: true };
  if (o.envelope.status === "absent") return { kind: "transport_error", detail: "answer without an envelope" };
  let u = o.envelope.envelope;
  if (u.outcome === "refused" && u.code === "no_approval") return { kind: "approval_unverified" };
  return { kind: "result", content: o.content, isError: o.isError, envelope: u, elapsedMs: n, responseBytes: XA(r), ...{} };
}
async function be(e, n, r, o) {
  let u = (e.now ?? Date.now)(), s = await K(e, r, o), m = (r.live()?.lastHeardAt ?? -1 / 0) > u, p = e.host(), f = p?.instanceId !== r.instanceId;
  if (s === "answered" || s === "missed" && (m || f)) n.stale = false;
  if (s === "answered" || s === "missed" && m || s !== "cancelled" && f && p !== void 0) return "there";
  return s === "missed" && !f ? "missed" : "unknown";
}
async function sn(e, n, r, o, u) {
  if (n.hold === void 0) {
    let m = new AbortController(), p = an(e, n, r, m.signal, u);
    n.hold = { ended: p.finally(() => {
      n.hold = void 0;
    }), stop: m, waiting: 0 };
  }
  let s = n.hold;
  s.waiting += 1;
  try {
    return await si(s.ended, o, () => new Ye());
  } catch {
    return "unknown";
  } finally {
    if (s.waiting -= 1, s.waiting === 0) s.stop.abort();
  }
}
async function an(e, n, r, o, u) {
  let s = e.probeDeadlineMs ?? uut;
  for (let m = u; m > 0; m -= s) {
    let p = await be(e, n, r, o);
    if (p !== "missed") return p;
  }
  return "missed";
}
function we(e, n) {
  let r = n.quietMisses[0], o = e.host()?.live();
  if (r !== void 0 && (o === void 0 || ye(o, r.writtenAt))) n.quietMisses = [];
  return n.quietMisses;
}
function ye(e, n) {
  return e.lastHeardAt > n || e.lastStillHereAt !== void 0 && e.lastStillHereAt > n;
}
function dn(e, n, r) {
  if (n.quietProbe !== void 0) return n.quietProbe;
  let o = e.host(), u = o?.live();
  if (o === void 0 || u === void 0 || u.asleepSince !== void 0) return Promise.resolve(void 0);
  let s = (e.now ?? Date.now)(), m = r ?? e.probeDeadlineMs ?? uut, p = K(e, o, new AbortController().signal, { putWithinMs: QJn, deadlineMs: m }).then((f) => {
    let _ = o.live();
    if (f === "answered" || f === "missed" && _ !== void 0 && ye(_, s)) {
      if (f === "answered" || (_?.lastHeardAt ?? -1 / 0) > s) n.stale = false;
      return n.quietMisses = [], true;
    }
    if (f !== "missed" || _ === void 0 || _.asleepSince !== void 0) return;
    return n.quietMisses = [...we(e, n), { writtenAt: s, waitedMs: m }], false;
  }).catch((f) => {
    t(`[remote-tools] a liveness probe for a waiting call failed: ${d(f)}`);
    return;
  }).finally(() => {
    n.quietProbe = void 0;
  });
  return n.quietProbe = p, p;
}
async function K(e, n, r, o) {
  let u = e.now ?? Date.now, s = o?.deadlineMs ?? e.probeDeadlineMs ?? uut, m = u(), p, f;
  try {
    f = e.sender.sendServedCallRequest({ request: { subtype: "remote_tools_probe", instance_id: n.instanceId, issued_at: m, deadline_ms: s }, accepts: ln, signal: r, ...o !== void 0 && { onUpload: (g) => {
      if (g === "accepted") p ??= u();
    } } });
  } catch (g) {
    return t(`[remote-tools] liveness probe to ${n.hostName} could not be sent: ${d(g)}`), "unsent";
  }
  if (!f.sent) return "unsent";
  let { settled: _ } = await _e(f, s, r, { holdAtDeadline: false, withdrawable: true });
  if (_.kind === "answered") {
    let g = L(_.payload) ? _.payload.result : void 0;
    return n.heard(u(), L(g) ? dWo(g.epoch) : void 0), "answered";
  }
  switch (_.kind) {
    case "cancelled":
      return "cancelled";
    case "undelivered":
    case "failed":
      return "unsent";
    case "stalled":
      return _.takenBack ? "taken_back" : "stalled";
    case "gone":
      return "gone";
    case "deadline":
      return o !== void 0 && (p === void 0 || m + s - p < (e.probeDeadlineMs ?? uut) - o.putWithinMs) ? "stream_lost" : "missed";
    case "dropped":
    case "delivery_unknown":
    case "unconfirmed":
      return "stream_lost";
  }
}
function ln(e) {
  let n = L(e) ? e.result : void 0;
  return L(n) && dWo(n.epoch) !== void 0;
}
function L(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function fut(e) {
  return { toolState: e.toolState, agentContext: e.agentContext, mcpClients: () => $S(e) };
}
var un = 8e3, cn = 5e3, fn = 3e4, mn = 2e3, W = 5e3, Y = 6e4;
class I {
  recovery = new X();
  connection = void 0;
  listingMemo = void 0;
  synced = false;
  lastListingFailed = false;
  lastForcedRelistAt = void 0;
  reportedUnmatched = false;
  provisional = void 0;
  setAside = 0;
  offer = "unread";
  lastListedAt = void 0;
  unconnectedSince = void 0;
  failedAt = void 0;
  inFlight = void 0;
}
function Eks(e) {
  let n = e.toolState.get(I), r = Date.now(), o = n.provisional !== void 0 && (n.provisional.stub || r - n.provisional.since < Y) ? W : pn;
  if (n.lastForcedRelistAt !== void 0 && r - n.lastForcedRelistAt < o || n.lastListedAt !== void 0 && r - n.lastListedAt < W) return false;
  n.lastForcedRelistAt = r;
  let u = n.connection;
  if (u !== void 0) H().fetchToolsForClient.cache.delete(ir(u.name, u.config));
  return n.synced = false, n.listingMemo = void 0, true;
}
var pn = 3e4;
async function put(e, n, r) {
  Bvr(e, n, r), await gn(e, n, r), Bvr(e, n, r);
}
function Bvr(e, n, r) {
  let o = n.sourceHosts("session");
  n.replaceRemoteHosts("session", e.toolState.get(_w).hostsForTable());
  let u = n.sourceHosts("session");
  if (z(o) === z(u)) return;
  a("tengu_remote_tool_targets", { event: e.toolState.get(_w).entries().length === 0 ? b("withdrawn") : c(Te(o, u)), source: b("session"), trigger: c(r), target_count: u.length, served_tool_count: u.reduce((s, m) => s + m.servedTools.size, 0), passthrough_tool_count: u.reduce((s, m) => s + (m.passthroughTools?.size ?? 0), 0), target_kind: ce(u[0]?.description?.kind), target_platform: ce(LWt(u[0]?.description?.platform)), incompatible_count: F(u, (s) => s.protocol.kind === "incompatible") });
}
async function gn(e, n, r) {
  if (!await dY()) return;
  let o = e.toolState.get(I);
  return o.inFlight ??= hn(e, o, n, r).catch((u) => {
    l(N(u));
  }).finally(() => {
    o.inFlight = void 0;
  }), o.inFlight;
}
function kks(e) {
  let n = e.toolState.get(I), r = jvr(e);
  if (n.synced && !n.lastListingFailed && r !== void 0 && r !== "set_aside") return "unlisted";
  if (n.synced && !n.lastListingFailed) return "listed";
  return Q(e) ? "unlisted" : "absent";
}
function Tks(e) {
  return e.toolState.get(I).connection !== void 0;
}
function Aks(e, n) {
  return e.toolState.get(I).lastListingFailed && !n.hosts().some((o) => o.kind === "remote" && (o.source === "bridge" || o.source === "session"));
}
async function hn(e, n, r, o) {
  let u = e.mcpClients(), s = Tn(u);
  if (s === void 0) {
    if (tZ(e.agentContext)) return;
    if (Sn(u, n, o), n.failedAt = void 0, n.lastListingFailed = false, Q(e)) n.unconnectedSince ??= Date.now();
    else n.provisional = void 0, n.unconnectedSince = void 0;
    if (n.connection !== void 0) n.connection = void 0, n.listingMemo = void 0, n.setAside = 0, Se(r, [], { invalid: void 0, unreadable: 0, unreadableMarkers: 0, trigger: o });
    return;
  }
  let m = H().fetchToolsForClient.cache.get(ir(s.name, s.config)), p = e.toolState.get(_w).entries().some((M) => M.status === "online"), f = o !== "resolve" && n.provisional?.stub === true && !tU();
  if (n.synced && s === n.connection && m === n.listingMemo && (p || f || !vn(n.provisional))) return;
  if (n.failedAt?.connection === s && Date.now() - n.failedAt.time < fn) return;
  let _ = Date.now(), g = await j(s, { deadlineAt: _ + un, recovery: n.recovery, idempotent: true }, (M, y) => _n(M, Math.min(y, cn)));
  if (g.kind !== "ok") {
    n.lastListingFailed = true, n.failedAt = Date.now() - _ >= mn ? { connection: s, time: Date.now() } : void 0, t(`[remote-tools] device-bridge tools/list failed (${g.kind}); keeping last known machines${"error" in g ? `: ${d(g.error)}` : ""}`, { level: "warn" }), a("tengu_remote_tool_targets", { event: b("list_failed"), trigger: c(o), reason: "error" in g && wn(g.error) ? b("timeout") : c(g.kind) });
    return;
  }
  if (g.value.truncated) t("[remote-tools] device-bridge tools/list is paginated; only the first page is read for machine discovery", { level: "warn" });
  let w = fe(s, g.value.tools, n.recovery), v = tU() ? w : { ...w, hosts: [], invalid: void 0 }, C = w.hosts.length - v.hosts.length;
  if (n.offer = C > 0 ? "offered" : "none", C !== n.setAside) {
    if (n.setAside = C, C > 0) a("tengu_remote_tool_targets", { event: b("listing_set_aside"), trigger: c(o), host_count: C, tool_count: g.value.tools.length, stub: g.value.stub, invalid: ce(w.invalid) }), t("[remote-tools] device-bridge listing offered a machine; not adopted: machines are taken from the session channel alone", { level: "warn" });
  }
  let S = v.hosts.length === 0;
  if (S && (n.provisional === void 0 || n.provisional.stub !== g.value.stub)) a("tengu_remote_tool_targets", { event: b("listed_empty"), trigger: c(o), tool_count: g.value.tools.length, truncated: g.value.truncated, has_served_name: g.value.tools.some((M) => Yne.has(M.name)), marker_count: F(g.value.tools, (M) => M._meta?.[Ove] !== void 0), stub: g.value.stub }), t(`[remote-tools] device-bridge listing adopted no machine (${g.value.tools.length} tools${g.value.stub ? p ? ", stub listing — the bound machine serves over the session channel instead" : ", stub listing — the bound machine has not announced yet" : ""})`);
  if (v.invalid !== void 0) t(`[remote-tools] device-bridge listing rejected (${v.invalid}): one connection must announce exactly one machine — its first announced name stays attached but unreachable`, { level: "warn" });
  Se(r, v.hosts, { invalid: v.invalid, unreadable: v.unreadable, unreadableMarkers: v.unreadableMarkers, trigger: o });
  let R = !S && n.provisional !== void 0 && m !== void 0 && m === n.listingMemo;
  if (R) H().fetchToolsForClient.cache.delete(ir(s.name, s.config));
  n.connection = s, n.listingMemo = R ? void 0 : m, n.synced = true, n.lastListedAt = Date.now(), n.unconnectedSince = void 0, n.provisional = S ? { at: Date.now(), since: n.provisional?.since ?? Date.now(), stub: g.value.stub } : void 0, n.reportedUnmatched = false, n.failedAt = void 0, n.lastListingFailed = false, t(`[remote-tools] device bridge matched: ${s.name} (${g.value.tools.length} tools over ${g.value.pages} page(s))`);
}
async function _n(e, n) {
  let r = await Ggt(e, { timeout: n });
  return { tools: r.tools.filter(bn), pages: 1, truncated: Boolean(r.nextCursor), stub: TNe(r) === "stub" };
}
function bn(e) {
  return typeof e === "object" && e !== null && typeof e.name === "string";
}
function wn(e) {
  let n = d(e).toLowerCase();
  return n.includes("timed out") || n.includes("timeout");
}
function Q(e) {
  return e.mcpClients().some((n) => Z(n) && n.type !== "disabled" && n.type !== "needs-auth");
}
function jvr(e) {
  let n = yn(e), r = n !== "connecting" && e.toolState.get(I).setAside > 0 ? "set_aside" : n;
  if (n === void 0 || tU()) return r;
  let o = e.toolState.get(_w);
  if (o.hasAnnouncedThisLife()) return o.entries().length === 0 ? "serves_nothing" : r;
  return (i.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 ? "not_reannounced" : r;
}
function Cks(e) {
  if (tU()) return "none";
  let { offer: n } = e.toolState.get(I);
  if (n !== "unread") return n;
  let r = e.mcpClients().filter((o) => o.name === a8);
  return r.length > 0 && !r.some((o) => Z(o) || ee(o)) ? "none" : "unread";
}
var ve = 15e3;
function Rks(e) {
  return e ? Math.max(ve, Uvr.defaultDeadlineMs) : ve;
}
function Emo(e) {
  let n = e.toolState.get(_w);
  return (i.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 && !tU() && !(n.hasAnnouncedThisLife() && n.entries().length === 0) && e.toolState.get(SBe).canAsk() && BK() && te();
}
function xks(e, n, r) {
  return n.has(r) && !e.toolState.get(_w).withdrawnThisLife(r) && Emo(e);
}
async function Pks(e, n, { deadlineMs: r = Uvr.defaultDeadlineMs, sliceMs: o = W, routableOtherwise: u, forMachine: s } = {}) {
  let m = e.toolState.get(_w);
  if (s === void 0 && m.entries().length > 0) return { kind: "announced" };
  let p = m.announceWaitExpired();
  if (p !== void 0) return { kind: "gave_up_earlier", waitedMs: p };
  if (s !== void 0 && e.toolState.get(SBe).askOnce({ workerEpoch: i.CLAUDE_CODE_WORKER_EPOCH ?? 1, deadlineMs: r })) t("[remote-tools] asked the attached client to announce to this replacement worker");
  let f = Date.now();
  for (; ; ) {
    if (n.aborted) return { kind: "aborted" };
    if (s === void 0 ? m.hasAnnouncedThisLife() : m.withdrawnThisLife(s)) return { kind: "announced" };
    let g = r - (Date.now() - f);
    if (g <= 0) break;
    let w = await oNt(m, n, Math.min(o, g));
    if (w === "announced" && (s === void 0 || u === void 0)) return { kind: "announced" };
    if (w === "aborted") return { kind: "aborted" };
    if (u !== void 0 && await u()) return w === "announced" ? { kind: "announced" } : { kind: "routable" };
  }
  let _ = Date.now() - f;
  return m.markAnnounceWaitExpired(_), { kind: "gave_up", waitedMs: _ };
}
function yn(e) {
  let n = e.toolState.get(I);
  if (n.connection === void 0) return Q(e) && n.unconnectedSince !== void 0 && Date.now() - n.unconnectedSince < Y ? "connecting" : void 0;
  if (!n.provisional) return;
  if (Date.now() - n.provisional.since < Y) return "connecting";
  return n.provisional.stub ? "not_connected" : void 0;
}
function vn(e) {
  if (e === void 0) return false;
  let n = Date.now();
  if (!e.stub && n - e.since >= Y) return false;
  return n - e.at >= W;
}
function Sn(e, n, r) {
  let o = e.filter((s) => s.name === a8);
  if (o.length === 0 || n.reportedUnmatched) return;
  let u = o.map(kn);
  if (u.every((s) => s === "connecting")) return;
  n.reportedUnmatched = true, t(`[remote-tools] a '${a8}' MCP entry exists but was not adopted as the device bridge: ${o.map((s, m) => `${u[m]} (type=${s.type}, scope=${s.config.scope})`).join("; ")}`, { level: "warn" }), a("tengu_remote_tool_targets", { event: b("no_bridge_connection"), trigger: c(r), servers_seen: o.length, reason: c(u[0] ?? "none"), ingress_base_unset: hd.atStartup === void 0 });
}
function kn(e) {
  if (ee(e)) return "scoped_entry";
  if (!("url" in e.config) || typeof e.config.url !== "string") return "no_url";
  if (!Gf(e.config.url)) return "not_ccr_proxy_url";
  if (!PRe(e.config.url)) return "not_devices_upstream";
  if (!ke(e.config.url)) return "routing_shape";
  switch (e.type) {
    case "connected":
      return "none";
    case "disabled":
      return "disabled";
    case "needs-auth":
      return "needs_auth";
    default:
      return "connecting";
  }
}
function Tn(e) {
  return e.find((n) => n.type === "connected" && Z(n));
}
function Z(e) {
  return e.name === a8 && !ee(e) && "url" in e.config && typeof e.config.url === "string" && PRe(e.config.url) && ke(e.config.url);
}
function ee(e) {
  let { scope: n, pluginSource: r, agentSource: o } = e.config;
  return n === "project" || n === "local" || n === "agent" || r !== void 0 || o !== void 0;
}
function ke(e) {
  try {
    let n = new URL(e), r = n.searchParams.getAll("toolbox_mcp_server_id"), o = /\/v2\/ccr-sessions\/([^/]+)\/mcp$/.exec(n.pathname)?.[1], u = r[0];
    return n.searchParams.getAll("mcp_url").length === 1 && (r.length === 0 || r.length === 1 && (u === a8 || o !== void 0 && u === Cn(o)));
  } catch {
    return false;
  }
}
function Cn(e) {
  return z5(e, a8);
}
function Se(e, n, { invalid: r, unreadable: o, unreadableMarkers: u, trigger: s }) {
  let m = e.sourceHosts("bridge"), { dropped: p } = e.replaceRemoteHosts("bridge", n);
  if (p.length > 0) t(`[remote-tools] the bridge announced ${p.length} machine(s) under a name this session cannot adopt; not adopted: ${p.join(", ")}`, { level: "warn" });
  let f = e.sourceHosts("bridge"), _ = z(m) !== z(f);
  if (r !== void 0) a("tengu_remote_tool_targets", { event: b("listing_invalid"), reason: c(r), trigger: c(s) });
  let g = _ ? Te(m, f) : void 0;
  if (g !== void 0) a("tengu_remote_tool_targets", { event: c(g), trigger: c(s), target_count: f.length, served_tool_count: f.reduce((w, v) => w + v.servedTools.size, 0), passthrough_tool_count: f.reduce((w, v) => w + (v.passthroughTools?.size ?? 0), 0), target_kind: ce(f[0]?.description?.kind), target_platform: ce(LWt(f[0]?.description?.platform)), incompatible_count: F(f, (w) => w.protocol.kind === "incompatible"), protocol_version: f[0]?.protocol.kind === "compatible" ? f[0].protocol.version : void 0 });
  if (o > 0 || u > 0) a("tengu_remote_tool_targets", { event: b("unreadable"), trigger: c(s), unreadable_count: o, unreadable_marker_count: u });
}
function z(e) {
  return e.map((n) => `${n.name}\0${n.status}\0${n.servedTools.size}\0${n.passthroughTools?.size ?? 0}`).sort().join(`
`);
}
function Te(e, n) {
  let r = e.some((u) => u.status === "online"), o = n.some((u) => u.status === "online");
  if (e.length === 0) return n.length === 0 ? "changed" : "discovered";
  if (r && !o) return "went_offline";
  if (!r && o) return "came_online";
  return "changed";
}
export {
  Aks,
  Bvr,
  Cks,
  Eks,
  Emo,
  Pks,
  Rks,
  Tks,
  Uvr,
  fut,
  jvr,
  kks,
  put,
  tAi,
  uut,
  xks
};
