// linux/remote/local-session.js — Claude Code 2.1.310（linux）模块 chunk-2wanngt1.js
import { Rli, G9 } from "../shell/invalid-type.js";
import { Br, bg } from "../shared/chunk-3b9c376b.js";
import { L } from "../context/not-admin-owned.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { I } from "../shared/chunk-d2c47492.js";
import { _t } from "../artifacts/cowritten-artifact-html.js";
import { Ae } from "../models/total-tokens-reminder.js";
import { rr } from "../artifacts/chunk-a6c9d164.js";
import { sy, pZ, hVt, skt, drt, bo, crt, ikt, Zoe, urt, dM, F5, U5, akt, lor, yVt, dSn, frt, _Vt } from "../agents/session-stable-address.js";
import { oc } from "../agents/in-process-teammate.32be.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { j_, Ya, kRe, Kue } from "../fs/reply-across-default-dirs.js";
import { JRr, MEo, kHr } from "../core/conversation-engine.js";
import { Tn } from "../git/bridge-child-tool-diff.js";
import { ha } from "../telemetry/harbor-kite-win.js";
import { Pyt, b5n, S5n, Wdn, w5n, Gdn, aBt, g7e } from "./fetch-failed.js";
import { MS } from "../agents/swarm-team-file-update.js";
var we = { "remote-control": ["allow_remote_control"], cloud: ["allow_remote_sessions"], unknown: ["allow_remote_control", "allow_remote_sessions"] }, re = { featureLabel: "Remote Control and Cloud sessions", verb: "are" }, ae = "No organization policy allows sends to this kind of session, so it can't be shown as permitted.";
function $Dn(e) {
  if (Ae() !== "firstParty" || _t()) return { cause: "residency" };
  if (Rli()) return null;
  let n = import.meta.require("../cli/admit-cached-response.js"), i = we[e], s = [];
  for (let d of i) {
    let { featureLabel: l, verb: c } = n.policyKeyLabel(d), u = n.policyDeniedReason(d, l, c);
    if (u === null) return null;
    s.push(u);
  }
  let [o] = i;
  if (o === void 0) return { cause: "policy", reason: ae };
  let { logOrgPolicyDenied: a } = import.meta.require("../shared/log-org-policy-denied.js");
  return a(o, "tool"), { cause: "policy", reason: (e === "unknown" && s.length > 1 ? n.policyDeniedReason(o, re.featureLabel, re.verb) ?? s[0] : s[0]) ?? ae };
}
function Jdt(e, n, i) {
  let s = bo(n);
  e((o) => {
    let a = Object.hasOwn(o.sendMessagePins, s) ? o.sendMessagePins[s] : void 0, r = a !== void 0 && skt(a.id) && !skt(i.id) && (i.claimedSessionIds ?? []).some((d) => hVt(d) === a.id) ? a.id : i.id;
    return a?.id === r && a.sock === i.sock ? o : { ...o, sendMessagePins: { ...o.sendMessagePins, [s]: { id: r, name: n, ref: frt(i.kind, r), ...i.sock !== void 0 && { sock: i.sock } } } };
  });
}
var X_r = "Note: messaging a new session for the first time under a previously used name (was it restarted?)";
function FDn(e, n) {
  return `
A session on this machine now named '${n}' reports '${e}' as one of its former names — if that is the session you meant, it goes by '${n}' now (a rename, not a stop).`;
}
function f_s(e) {
  return ` A session now named '${e}' reports it as a former name (renamed).`;
}
var Ulo = "Note: another live session record on this machine currently claims this session's identity (the same conversation open in two places, or a record impersonating it). This went to the socket confirmed earlier in this conversation; if that is unexpected, check with the user before sending it anything sensitive.", Blo = "Note: this session has restarted since this conversation last reached it (same session, new process). If you were not expecting that, check with the user before sending it anything sensitive.", r3e = "another Claude session on this machine";
function NXt(e, n, i) {
  if (e === void 0) return { message: "", display: "" };
  let s = n && j_(n) || "an agent in this session";
  return i.oneWay ? { message: "; sent under this session's address, not this agent's", display: ` (sent by ${s}, under this session's name)` } : { message: "; sent under this session's address: any reply will be delivered to this session's main conversation, not to this agent", display: ` (sent by ${s}; replies go to the main conversation)` };
}
function UDn(e) {
  return e === "cloud" ? "a Claude session running in the cloud" : "a Claude session on another machine, over Remote Control";
}
var J_r = "; accepted by the server for that session, but delivery is not confirmed: it has not reported that it can receive cross-session messages and may be on an older version that cannot", Me = " (accepted by the server; delivery not confirmed, that session may be on an older version)", Te = "; in that session's inbox, not yet read by its Claude — a [Cross-session delivery notice] follows if that session holds it (usually a different permission mode) or refuses it", Le = "; in that session's inbox, not yet read by its Claude — that session may hold it (usually a different permission mode) or refuse it, and with no inbox bound here nothing reports back, so never treat silence as agreement";
function jlo(e) {
  return e ? Te : Le;
}
var Q_r = "; not confirmed read — that session may hold it (usually a different permission mode) or refuse it, and this route reports nothing back", Z_r = " (that session's settings decide delivery; no read receipt)";
function Wlo(e) {
  return e ? { message: J_r, display: Me } : { message: "", display: "" };
}
function LIt(e) {
  return `${e.alsoListedRemotely ? "; it is also connected via Remote Control" : ""}${e.remoteNamesakeClaimedLocally ? `; a Remote Control or cloud session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? le : ""}`;
}
function ebr(e, n, i = "live session", s = "delivery") {
  return de(e, `. ${s === "subscription" ? "The subscription" : "This"} went to the one this conversation confirmed; to switch, re-send with that ${i === "agent" ? "agent" : "session"}'s 'name [ref]'${n}.`, i);
}
function tbr(e, n = "live session", i = "delivery") {
  return de(e, `; ${i === "subscription" ? "the subscription" : "this"} went to the one confirmed earlier in this conversation.`, n);
}
function de(e, n, i) {
  let s = e.previouslyPinned ? `
${X_r}` : e.restartedSincePin ? `
${Blo}` : e.identityContested ? `
${Ulo}` : "", o = e.sameNamedSiblings ? `
Note: ${e.sameNamedSiblings} other ${I(e.sameNamedSiblings, `${i} is`, `${i}s are`)} also named '${e.displayName}'${n}` : "";
  return `${s}${o}`;
}
function BDn(e) {
  return `${e.offline ? Ee : ""}${e.remoteNamesakeClaimedLocally ? `; another session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? le : ""}`;
}
var Ee = "; it is offline right now — delivery is queued until that machine reconnects";
function Glo(e) {
  return e.localUnavailable && !e.bridgeUnavailable && !e.cloudUnavailable ? "the sessions on this machine could not be listed just now" : e.localUnavailable ? "this machine's and your account's other sessions could not all be checked just now" : "your account's other sessions could not be checked just now";
}
function zlo(e) {
  return `A session on this machine now claims to be '${e}', which was confirmed earlier as a session elsewhere`;
}
var le = "; your session list was too long to check completely, so a same-named session beyond what was searched would not have been seen", NIt = `
Your session list was too long to check completely, so a session by that name may exist beyond what was searched.`, Klo = "your session list was too long to check completely";
async function $Xt(e, n, i, s, o, a) {
  await Pyt({ refresh: true, credentials: a });
  let r = bo(n), d = oc(s.teamContext), l = null;
  if (yVt(n)) return { kind: "not-found", closest: [] };
  if (typeof i === "string") {
    if (n === sy) return { kind: "main" };
    let h = s.teamContext?.teammates ?? {}, R = Object.entries(h).find(([, v]) => v.name === n), x = bg(n) ?? bg(r), y = R || x ? void 0 : s.agentNameRegistry.get(n), _ = x ?? y;
    if (_) return X(s, _, n);
    if (R) return { kind: "mailbox", recipientName: n, memberAgentId: R[0], memberIdentitySource: "team-context" };
    let ne = F5(n);
    if (d) {
      if (n === Ya) return { kind: "mailbox", recipientName: n };
      if (l = await MS(d, o), ne === null && l !== null) {
        let v = urt(l, Zoe(s)).find((p) => p.name === n);
        if (v !== void 0) return { kind: "mailbox", recipientName: n, memberAgentId: v.agentId, memberIdentitySource: "roster" };
      }
    }
    let Ne = Zoe(s), z = Object.entries(h).find(([v, p]) => (ikt({ name: p.name, agentId: v }, Ne) || !crt(p.name)) && bo(p.name) === r);
    if (z !== void 0) return { kind: "mailbox", recipientName: z[1].name, memberAgentId: z[0], memberIdentitySource: "team-context" };
    for (let [v, p] of s.agentNameRegistry) if (!crt(v) && bo(v) === r) return X(s, p, v);
    let T = ne;
    if (T) {
      let [v, p] = await Promise.all([JRr(), g7e(e, a)]), E = v.sessions, W = await ce(e, s.sendMessagePins, bo(T.name), p, r, MEo(e), a), { rows: G, unavailable: Se } = W, P = U5(s, { teamFile: l, sessions: E, cloud: p.sessions, bridge: G }), w = bo(T.name), se = (C, K, _e, xe) => {
        let U = j(C, s);
        return U.kind === "local-session" || U.kind === "cloud-session" ? { ...U, ...J(U, w, K, { socksMirroredRemotely: ye(E, p, _e), searchTruncated: p.truncated === true || xe }, s.sendMessagePins) } : U;
      }, ie = me(P, w, T.ref);
      if (ie) return se(ie, P, G, W.truncated);
      let te = Se, oe = W.truncated;
      if (G === void 0) {
        let C = await H(e, p, r, a);
        if (te = C.unavailable, oe = C.truncated, C.rows.length > 0) {
          P = U5(s, { teamFile: l, sessions: E, cloud: p.sessions, bridge: C.rows });
          let K = me(P, w, T.ref);
          if (K) return se(K, P, C.rows, C.truncated);
        }
      }
      return { ...O(w, P), ...be(w, E, P, s.sendMessagePins), ...fe(p, te, v.unavailable, { remoteTruncated: oe }), ...N(s.sendMessagePins, [w], _Vt(E)) };
    }
  }
  if (typeof i !== "string") {
    if (i.type === "shutdown_response") return { kind: "mailbox", recipientName: n };
    if (n !== Ya && dM(n)) return O(bo(n), U5(s, { teamFile: null, sessions: [] }), (y) => y.kind === "teammate");
    if (!d) return { kind: "mailbox", recipientName: n };
    if (n === Ya) return { kind: "mailbox", recipientName: n };
    let h = Object.entries(s.teamContext?.teammates ?? {}).filter(([y, _]) => ikt({ name: _.name, agentId: y }, Zoe(s)) || !crt(_.name)), R = h.find(([, y]) => y.name === n);
    if (R) return { kind: "mailbox", recipientName: n, memberAgentId: R[0], memberIdentitySource: "team-context" };
    if (l = await MS(d, o), F5(n) === null && l !== null) {
      let y = urt(l, Zoe(s)).find((_) => _.name === n);
      if (y !== void 0) return { kind: "mailbox", recipientName: n, memberAgentId: y.agentId, memberIdentitySource: "roster" };
    }
    let x = h.find(([, y]) => bo(y.name) === r);
    if (x !== void 0) return { kind: "mailbox", recipientName: x[1].name, memberAgentId: x[0], memberIdentitySource: "team-context" };
    if (F5(n) === null && l !== null) {
      let y = lor(urt(l, Zoe(s)), n);
      if (y !== void 0) return { kind: "mailbox", recipientName: y.name, displayName: n, memberAgentId: y.agentId, memberIdentitySource: "roster" };
    }
    if (l === null) return { kind: "mailbox", recipientName: n };
    return O(r, U5(s, { teamFile: l, sessions: [] }), (y) => y.kind === "teammate");
  }
  if (d && l === null) {
    if (dM(n)) return O(r, U5(s, { teamFile: l, sessions: [] }));
    return { kind: "mailbox", recipientName: n };
  }
  let [c, u] = await Promise.all([JRr(), g7e(e, a)]), b = c.sessions, q = await ce(e, s.sendMessagePins, r, u, r, MEo(e), a), { rows: S, unavailable: F, truncated: Y } = q, Q = _Vt(b), V = () => ({ cloudUnavailable: he(u.unavailable), bridgeUnavailable: F, localClaimedRemoteBodies: Q, bridgeSettled: S !== void 0, localUnavailable: c.unavailable, socksMirroredRemotely: ye(b, u, S), searchTruncated: u.truncated === true || Y }), k = U5(s, { teamFile: l, sessions: b, cloud: u.sessions, bridge: S }), M = k.byName.get(r)?.length === 1 ? k.byName.get(r)[0] : void 0, Z = A(s.sendMessagePins, r), Ie = M !== void 0 && Z !== void 0 && Object.hasOwn(s.sendMessagePins, r) && Re(s.sendMessagePins[r], M), Ce = M !== void 0 && (M.kind === "session" || M.kind === "cloud-session") && Z !== "agent" && !Ie;
  if (S === void 0 && Ce) {
    let h = await H(e, u, r, a);
    S = h.rows, F = h.unavailable, Y = h.truncated, k = U5(s, { teamFile: l, sessions: b, cloud: u.sessions, bridge: h.rows });
  }
  let ee = ue(k, r, n, s, V());
  if (ee) return ee;
  if (S === void 0) {
    let h = await H(e, u, r, a);
    if (S = h.rows, F = h.unavailable, Y = h.truncated, h.rows.length > 0) {
      k = U5(s, { teamFile: l, sessions: b, cloud: u.sessions, bridge: h.rows });
      let R = ue(k, r, n, s, V());
      if (R) return R;
    }
  }
  return Be(k, r, s, V()) ?? { ...O(r, k), ...be(r, b, k, s.sendMessagePins), ...fe(u, F, c.unavailable, { remoteTruncated: Y }), ...N(s.sendMessagePins, [r], Q) };
}
function Ue(e, n, i) {
  let s = A(e, n);
  if (s !== "cloud" && s !== "remote-control") return;
  let o = e[n];
  return i.has(rr(o.id)) ? o.name : void 0;
}
function Oe(e, n) {
  let i = n[0];
  if (i === void 0 || i.length < 3) return n;
  let s = Object.keys(e).filter((o) => o !== i && o.startsWith(i) && !n.includes(o));
  return s.length === 0 ? n : [...n, ...s];
}
function N(e, n, i) {
  for (let s of Oe(e, n)) {
    let o = Ue(e, s, i);
    if (o !== void 0) return { pinnedIdentityClaimedLocally: o };
  }
  return {};
}
function A(e, n) {
  let i = Object.hasOwn(e, n) ? e[n] : void 0;
  if (i === void 0) return;
  if (bg(i.id) !== null) return "agent";
  if (i.id.startsWith("cse_")) return "cloud";
  return rr(i.id) !== i.id ? "remote-control" : "local";
}
async function ce(e, n, i, s, o, a, r) {
  let d = a?.rows;
  if (!De(n, i, s.sessions, d)) return { rows: d, unavailable: void 0, truncated: a !== void 0 && a.truncated };
  let l = await H(e, s, o, r);
  return { rows: l.unavailable === void 0 || d === void 0 ? l.rows : d, unavailable: l.unavailable, truncated: l.unavailable === void 0 || a === void 0 ? l.truncated : a.truncated };
}
function De(e, n, i, s) {
  let o = A(e, n);
  if (o !== "remote-control" && o !== "cloud") return false;
  let a = rr(e[n].id);
  if (i.some((r) => rr(r.id) === a)) return false;
  return s === void 0 || !s.some((r) => rr(r.id) === a);
}
function D(e) {
  return { ...e.cloudUnavailable && { cloudUnavailable: e.cloudUnavailable }, ...e.bridgeUnavailable && { bridgeUnavailable: e.bridgeUnavailable }, ...e.localUnavailable && { localUnavailable: true }, ...e.searchTruncated && { searchTruncated: true } };
}
function ue(e, n, i, s, o) {
  let a = akt(e.byName, n, i);
  if (a) {
    if (a.kind === "ambiguous") {
      let r = e.byName.get(n), d = ve(s.sendMessagePins, n, r, i, o);
      if (d) return ke(d, r, s, n, e, o);
      let l = N(s.sendMessagePins, [n], o.localClaimedRemoteBodies), c = r[0], u = A(s.sendMessagePins, n);
      if (r.length === 1 && (c.kind === "session" || c.kind === "cloud-session" || c.kind === "bridge-session") && !o.cloudUnavailable && o.bridgeSettled && !o.bridgeUnavailable && !o.localUnavailable && l.pinnedIdentityClaimedLocally === void 0 && u !== "agent" && !c.derivedName) {
        let b = j(c, s);
        if (b.kind === "local-session" || b.kind === "cloud-session") return { ...b, exactUnique: true, ...u !== void 0 && { previouslyPinned: true }, ...J(b, n, e, o, s.sendMessagePins) };
      }
      return { ...B(r, "exact"), ...D(o), ...l };
    }
    return j(a.candidate, s);
  }
  return;
}
function Be(e, n, i, s) {
  if (n.length >= 3) {
    let o = [...e.byName.keys()].filter((a) => a.startsWith(n));
    if (o.length === 1) {
      let a = akt(e.byName, o[0]), r = A(i.sendMessagePins, n), d = N(i.sendMessagePins, [n], s.localClaimedRemoteBodies).pinnedIdentityClaimedLocally !== void 0;
      if (r !== void 0 && r !== "agent" || d) {
        let l = e.byName.get(o[0]);
        return f("send_message_prefix_match", r !== void 0 && r !== "agent" ? "typed_name_pinned" : "prefix_of_claimed_pin"), { ...B(a.kind === "one" ? [a.candidate] : l, "prefix"), ...D(s), ...N(i.sendMessagePins, [n, o[0]], s.localClaimedRemoteBodies) };
      }
      if (a.kind === "ambiguous") {
        let l = e.byName.get(o[0]), c = ve(i.sendMessagePins, o[0], l, void 0, s, true);
        if (c) return g("send_message_prefix_match", { input_len: n.length, index_size: e.candidates.length, pinned: 1 }), ke(c, l, i, o[0], e, s);
        if (l.length === 1) f("send_message_prefix_match", "confirm_required");
        else m("send_message_prefix_match", "ambiguous_name");
        return { ...B(l, "prefix"), ...D(s), ...N(i.sendMessagePins, [n, o[0]], s.localClaimedRemoteBodies) };
      }
      if (s.cloudUnavailable || s.bridgeUnavailable || s.localUnavailable) return f("send_message_prefix_match", s.cloudUnavailable || s.bridgeUnavailable ? "remote_unsearched" : "local_unsearched"), { ...B([a.candidate], "prefix"), ...D(s), ...N(i.sendMessagePins, [n, o[0]], s.localClaimedRemoteBodies) };
      return g("send_message_prefix_match", { input_len: n.length, index_size: e.candidates.length, ...s.searchTruncated && { search_truncated: true } }), j(a.candidate, i);
    }
    if (o.length > 1) return m("send_message_prefix_match", "ambiguous_prefix"), { ...D(s), ...N(i.sendMessagePins, [n, ...o], s.localClaimedRemoteBodies), ...B(o.flatMap((a) => {
      let r = e.byName.get(a), d = akt(e.byName, a);
      return d?.kind === "one" ? [d.candidate] : r;
    }), "prefix") };
  }
  return;
}
function me(e, n, i) {
  let s = e.byName.get(n) ?? [], o = akt(e.byName, n);
  return (o?.kind === "one" ? [o.candidate] : s).find((r) => r.ref === i);
}
async function H(e, n, i, s) {
  if (ha()) {
    let o = !aBt(n.unavailable), a = b5n(e, s), r = await Pe(a, ge);
    if (r === void 0) {
      if (t(`[bridge:resolve] "${i}": Remote Control population not ready within ${ge}ms (cold) — not searched, disclosing a hedge`, { level: "warn" }), o) a.then((l) => Wdn(e, l, Gdn(l.rows, n.sessions)));
      return { rows: [], unavailable: "timeout", truncated: false };
    }
    if (r.failed || r.identityKey !== null && !S5n(r)) return t(`[bridge:resolve] "${i}": Remote Control walk ${r.failed ? "failed" : "ran under a previous handle"} (cold) — not searched, disclosing a hedge`, { level: "warn" }), { rows: [], unavailable: "fetch_failed", truncated: false };
    let d = Gdn(r.rows, n.sessions);
    if (o) Wdn(e, r, d);
    else w5n(e, r);
    return t(`[bridge:resolve] "${i}": ${r.rows.length} Remote Control rows, ${d.length} listed (cold${o ? ", recorded" : ", not recorded — cloud list failed"})`), { rows: d, unavailable: void 0, truncated: r.truncated === true };
  }
  return { rows: [], unavailable: void 0, truncated: false };
}
function he(e) {
  return aBt(e) ? e : void 0;
}
function fe(e, n, i, { remoteTruncated: s }) {
  return { cloudUnavailable: he(e.unavailable), ...n !== void 0 && { bridgeUnavailable: n }, ...i && { localUnavailable: true }, ...(e.truncated === true || s) && { searchTruncated: true } };
}
function X(e, n, i) {
  let s = e.tasks[n];
  if (Tn(s) && !kHr(s)) {
    if (s.status === "running") return { kind: "agent-live", agentId: n, agentName: i };
    if (s.stoppedByUser) return { kind: "agent-stopped-by-user", agentName: i };
    return { kind: "agent-stopped", agentId: n, status: s.status, agentName: i };
  }
  return { kind: "agent-evicted", agentId: n, agentName: i };
}
function j(e, n) {
  switch (e.kind) {
    case "main":
      return { kind: "main" };
    case "teammate":
      return { kind: "mailbox", recipientName: e.name, memberAgentId: e.id, memberIdentitySource: e.where === "in-process" ? "team-context" : "roster" };
    case "subagent":
      return X(n, Br(e.id), e.name);
    case "session":
      return { kind: "local-session", sock: e.sock, pinId: dSn(e), ...e.claimedSessionIds !== void 0 && { claimedSessionIds: e.claimedSessionIds }, displayName: e.name, ...e.hostSessionId !== void 0 && { hostSessionId: e.hostSessionId } };
    case "cloud-session":
    case "bridge-session":
      return { kind: "cloud-session", via: e.where === "cloud" ? "cloud" : "remote-control", refKind: e.kind, sessionId: e.id, displayName: e.name, ...e.offline && { offline: true }, ...e.reportsInbound && { reportsInbound: true }, ...e.inboundReportUnavailable && { inboundReportUnavailable: true } };
  }
}
var pe = 3, ge = 5e3;
function B(e, n) {
  return { kind: "ambiguous", candidates: e.slice(0, pe), total: e.length, matchedBy: n };
}
function be(e, n, i, s) {
  if (!pZ()) return {};
  let o = n.filter((c) => drt(c) && c.sessionId !== void 0 && c.formerNames?.some((u) => u.sessionId === c.sessionId && bo(u.name) === e));
  if (o.length !== 1) return {};
  let a = o[0];
  if (n.filter((c) => drt(c) && Kue(c.sock, a.sock)).length !== 1) return {};
  let d = i.candidates.find((c) => c.kind === "session" && c.sock !== void 0 && kRe(c.sock, a.sock));
  if (d === void 0 || F5(d.name) !== null || dM(d.name) || (i.byName.get(bo(d.name))?.length ?? 0) !== 1) return {};
  let l = Object.hasOwn(s, e) ? s[e] : void 0;
  if (l !== void 0 && l.id !== dSn(d)) return {};
  return { renamedTo: d };
}
function O(e, n, i) {
  let s = i ? n.candidates.filter(i) : n.candidates, o = L(s.map((r) => bo(r.name)));
  return { kind: "not-found", closest: G9(e, o, pe).map((r) => s.find((d) => bo(d.name) === r)) };
}
function ve(e, n, i, s, o, a = false) {
  let r = Object.hasOwn(e, n) ? e[n] : void 0;
  if (r === void 0) return;
  let d = A(e, n);
  if (d === "agent") return;
  let l = d !== "local";
  if (l && o.localClaimedRemoteBodies.has(rr(r.id))) return;
  if (d === "cloud" && o.cloudUnavailable || d === "remote-control" && o.bridgeUnavailable || d === "local" && o.localUnavailable || a && (o.cloudUnavailable || o.bridgeUnavailable || o.localUnavailable)) return;
  let c = i.filter((b) => (l ? b.kind === "cloud-session" || b.kind === "bridge-session" : b.kind === "session") && b.where !== "in-process"), u = c.find((b) => dSn(b) === r.id) ?? c.find((b) => Re(r, b));
  if (u === void 0) {
    if (!(l && o.searchTruncated)) f("send_message_pin", "stale");
    return;
  }
  if (s !== void 0 && u.name !== s && i.some((b) => b.name === s)) return;
  return g("send_message_pin"), u;
}
function ke(e, n, i, s, o, a) {
  let r = j(e, i);
  if (r.kind !== "local-session" && r.kind !== "cloud-session") return r;
  let d = Object.hasOwn(i.sendMessagePins, s) ? i.sendMessagePins[s] : void 0, c = r.kind === "local-session" && d !== void 0 && d.id !== r.pinId && d.sock !== void 0 && kRe(d.sock, r.sock) && skt(d.id) && !skt(r.pinId) ? { ...r, pinId: d.id, identityContested: true } : r;
  return { ...c, ...n.length > 1 && { sameNamedSiblings: n.length - 1 }, ...J(c, s, o, a, i.sendMessagePins) };
}
function ye(e, n, i) {
  let s = /* @__PURE__ */ new Set([...n.sessions.map((o) => rr(o.id)), ...(i ?? []).map((o) => rr(o.id))]);
  return new Set(e.flatMap((o) => o.bridgeSessionId !== void 0 && s.has(rr(o.bridgeSessionId)) ? [o.sock] : []));
}
function Re(e, n) {
  if (dSn(n) === e.id) return true;
  if (e.sock === void 0 || n.kind !== "session" || n.sock === void 0 || !kRe(n.sock, e.sock)) return false;
  return !skt(e.id) || n.stableId === void 0 && (n.claimedSessionIds ?? []).some((i) => hVt(i) === e.id);
}
function J(e, n, i, s, o) {
  let a = Object.hasOwn(o, n) ? o[n] : void 0;
  return { ...e.kind === "local-session" && a?.sock !== void 0 && a.id === e.pinId && !kRe(a.sock, e.sock) && { restartedSincePin: true }, ...e.kind === "local-session" && s.socksMirroredRemotely.has(e.sock) && { alsoListedRemotely: true }, ...[...i.remoteNamesClaimedLocally.get(n) ?? []].some((r) => e.kind !== "local-session" || r !== e.sock) && { remoteNamesakeClaimedLocally: true }, ...s.searchTruncated && { searchTruncated: true } };
}
export {
  $Dn,
  $Xt,
  BDn,
  Blo,
  FDn,
  Glo,
  J_r,
  Jdt,
  Klo,
  LIt,
  NIt,
  NXt,
  Q_r,
  UDn,
  Ulo,
  Wlo,
  X_r,
  Z_r,
  ebr,
  f_s,
  jlo,
  r3e,
  tbr,
  zlo
};
