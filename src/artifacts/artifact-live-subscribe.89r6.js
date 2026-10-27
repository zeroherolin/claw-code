// artifacts/artifact-live-subscribe.89r6.js — Claude Code 2.1.310 模块 chunk-89r66hgz.js
import { tt, ke } from "../context/not-admin-owned.ersa.js";
import { g, p } from "../telemetry/chunk-wn8xtaqg.js";
import { NK } from "./cowritten-artifact-html.thm2.js";
import { Hi } from "../context/chunk-vhc5wsq3.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Gqr } from "../settings/global-config-and-gates.27xj.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { Q4 } from "../fs/reply-across-default-dirs.esvz.js";
import { el } from "../core/conversation-engine.31gx.js";
import { jt } from "../shared/chunk-nfgwaxf2.js";
import { _R } from "../agents/session-stable-address.6kf8.js";
import { Z } from "./same-account.bxg8.js";
import { ya } from "../telemetry/harbor-kite-win.r4w6.js";
import { ey, U3, L8, Aye, tjt, Upn, tQ } from "../telemetry/harbor-kite-pacing-off.qsxe.js";
import { PJt, oLn, AEs, xEs, Opo } from "./artifact-comments-autoreact.vyrr.js";
import { WOt } from "../tasks/artifact-changed.p598.js";
import { JDn, Apo, dme } from "./madrone-spindle-corbel.r0mn.js";
import { $ct } from "./artifact-comment-monitor.qvwj.js";
import { f1e } from "../shared/chunk-5ym902nn.js";
import { PEe, Iae, qJt, _y, I_, Mfo, Yvs, Xvs, Jvs, Zvs, eks, iB, NIe, yD } from "../mcp/artifact-summon-arm-emit.jfmv.js";
import { N8 } from "../shared/chunk-w2f9n0bg.js";
import { Ja } from "../fs/daemon-worker.e01m.js";
var z = 1e3, Q = 200, w = { armable: /* @__PURE__ */ new Set(), yielded: /* @__PURE__ */ new Set(), undo: () => {
} };
async function ee() {
  let n = (await Upn()).find((r) => r.pid === process.pid);
  return n === void 0 ? void 0 : { sessionId: n.sessionId, tmux: n.tmux };
}
async function _Ti(e) {
  let n = await te(e).finally(() => e.claim?.end());
  if (n.kind === "took_over") g("artifact_live_subscribe", { took_over: true, holders: e.holders.length, armable_count: n.armable.size, yielded_count: n.yielded.size });
  else p("artifact_live_subscribe", `takeover_${n.kind}`, { holders: e.holders.length });
  return n;
}
async function te(e) {
  if (!ya()) return { ...w, kind: "messaging_off" };
  let n = tQ();
  if (n === void 0 || e.holders.length === 0) return { ...w, kind: "no_inbox" };
  let r = _R(n), a = e.transport?.ownRecord ?? ee, s = await a().catch(() => {
    return;
  });
  if (s?.sessionId !== e.conversationId) {
    let o = e.transport?.timers ?? oLn;
    await new Promise((d) => void o.setTimeout(d, Q)), s = await a().catch(() => {
      return;
    });
  }
  if (s?.sessionId !== e.conversationId) return { ...w, kind: "registry_stale" };
  let l = s.tmux;
  if (e.holdersIncomplete === true && !e.alreadyReplying) return { ...w, kind: "holder_unreachable" };
  let f = e.slugs.filter((o) => !(e.claim?.lost.has(o) ?? false)).slice(0, PJt);
  if (f.length === 0) return { ...w, kind: "nothing_freed" };
  let h = [];
  for (let o of e.holders) {
    if (o.sock === void 0 || o.sock === "" || !(o.peerFeatures?.includes(Gqr) ?? false) || _R(o.sock) === r || JDn(o.kind)) {
      if (e.alreadyReplying) continue;
      return { ...w, kind: "holder_unreachable" };
    }
    h.push({ sock: o.sock, pid: o.pid });
  }
  if (h.length === 0) return { ...w, kind: "holder_unreachable" };
  let c = e.transport?.send ?? tjt, u = e.transport?.sendControl ?? Aye, I = e.transport?.timers ?? oLn, T = e.transport?.now ?? Date.now, G = Q4(n), Y = (o) => O() !== "windows" ? { expectPeerPid: o } : {}, v = [], D = /* @__PURE__ */ new Set(), { wakes: b, autoReact: X, durable: V } = Z(), W = (o) => {
    for (let d of o.yielded) {
      let i = b.takenFrom.get(d) ?? [];
      if (!i.some((y) => y.msgId === o.msgId)) b.takenFrom.set(d, [...i, { sock: o.sock, pid: o.pid, msgId: o.msgId }]);
      if (e.alreadyReplying && (X.userDisarmed || V.stopLatches.isStopped(d) || _y(d) && !I_(d))) Lws(d, u);
    }
  }, U = e.claim?.sentAt ?? T(), A = (o, d, i) => {
    let y = i?.precautionary !== void 0 ? [...i.precautionary] : [...o.yielded].filter((m) => d === void 0 || d.has(m));
    if (y.length === 0) return;
    for (let m of y) o.yielded.delete(m);
    g("artifact_live_subscribe", { [i?.precautionary !== void 0 ? "takeover_unyield_precautionary" : "takeover_handed_back"]: y.length });
    let _ = { action: "unyield_artifact_replies", orig_msg_id: o.msgId, slugs: y, ...i?.stopped === true && { stopped: true } };
    u(o.sock, _, Y(o.pid)).catch((m) => {
      if (t(`[reply-yield] unyield to ${ey(o.sock)} failed: ${U3(String(m))}`), L8(m) && !Ja(o.pid)) {
        p("artifact_live_subscribe", "unyield_holder_gone");
        return;
      }
      let k = () => void u(o.sock, _, Y(o.pid)).catch(() => {
        p("artifact_live_subscribe", "unyield_send_failed");
      });
      if (L8(m)) I.setTimeout(k, z);
      else k();
    });
  }, N = [];
  for (let o of h) {
    let d = N8(), i = { sock: o.sock, pid: o.pid, msgId: d.msg_id, yielded: /* @__PURE__ */ new Set() };
    v.push(i);
    let y = AEs(d.msg_id, f, { sentAt: U, expectPid: o.pid, ...e.transport?.timeoutMs !== void 0 && { timeoutMs: e.transport.timeoutMs }, ...e.transport?.timers !== void 0 && { timers: e.transport.timers }, onLate: (_) => {
      if (_.kind !== "yielded") return;
      for (let k of _.yielded) i.yielded.add(k);
      let m = new Map([...e.claim?.lost ?? [], ..._.lostTo]);
      A(i, new Set([...i.yielded].filter((k) => m.has(k) ? q(k, i, m, e.alreadyReplying === true) : !e.alreadyReplying && !D.has(k)))), W(i);
    } });
    N.push((async () => {
      try {
        await c(o.sock, { action: "yield_artifact_replies", from: G, session_id: e.conversationId, slugs: f, reason: e.reason, sent_at: T(), claimed_at: U, requester: { cwd: ke(), ...l !== void 0 && { tmux: l } } }, d, Y(o.pid));
      } catch (_) {
        if (L8(_)) {
          let m = xEs(d.msg_id), k = m.map(([J]) => J);
          return Ja(o.pid) ? { kind: "unreachable", lost: k, lostTo: m } : { kind: "gone", lost: k, lostTo: m };
        }
      }
      return y;
    })());
  }
  let B = await Promise.all(N), P = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), S = new Map(e.claim?.lost ?? []), C = true, K = false, F = 0;
  B.forEach((o, d) => {
    for (let [i, y] of o.lostTo) S.set(i, y);
    if (o.kind === "gone") return;
    if (F++, o.kind === "unreachable") {
      C = false;
      return;
    }
    if (o.kind === "yielded") {
      for (let i of o.yielded) v[d].yielded.add(i), P.set(i, (P.get(i) ?? 0) + 1);
      for (let i of o.notHeld) x.set(i, (x.get(i) ?? 0) + 1);
      for (let i of /* @__PURE__ */ new Set([...o.yielded, ...o.notHeld])) L.set(i, (L.get(i) ?? 0) + 1);
    } else if (C = false, o.kind === "refused") K = true;
  });
  let R = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
  if (C && !K) for (let o of f) {
    if (S.has(o) || (L.get(o) ?? 0) !== F) continue;
    if ((P.get(o) ?? 0) > 0) R.add(o), M.add(o);
    else if ((x.get(o) ?? 0) === F) R.add(o);
  }
  for (let o of R) D.add(o);
  if (e.alreadyReplying) {
    for (let o of v) for (let d of o.yielded) if (!S.has(d)) M.add(d);
  }
  for (let o of v) {
    let d = new Set([...o.yielded].filter((i) => S.has(i) ? q(i, o, S, e.alreadyReplying === true) : !e.alreadyReplying && !R.has(i)));
    if (d.size > 0) A(o, d);
  }
  if (!e.alreadyReplying) B.forEach((o, d) => {
    if (o.kind === "timeout") A(v[d], void 0, { precautionary: f });
  });
  for (let o of v) W(o);
  return { armable: R, yielded: M, kind: R.size > 0 ? "took_over" : "nothing_freed", undo: (o) => {
    for (let i of v) A(i, o);
    let d = new Set(v.map((i) => i.msgId));
    for (let i of o ?? f) {
      let y = (b.takenFrom.get(i) ?? []).filter((_) => !d.has(_.msgId));
      if (y.length > 0) b.takenFrom.set(i, y);
      else b.takenFrom.delete(i);
    }
  } };
}
function q(e, n, r, a) {
  let s = r.get(e);
  return s !== void 0 && s === Q4(n.sock) || !a && !iB(e);
}
function Lws(e, n = Aye) {
  j(e, true, n);
}
function Mhi(e, n = Aye) {
  j(e, false, n);
}
function j(e, n, r) {
  let { wakes: a } = Z(), s = a.takenFrom.get(e);
  if (s === void 0 || iB(e)) return;
  a.takenFrom.delete(e);
  for (let l of s) {
    let f = { action: "unyield_artifact_replies", orig_msg_id: l.msgId, slugs: [e], ...n && { stopped: true } }, h = O() !== "windows" ? { expectPeerPid: l.pid } : {};
    r(l.sock, f, h).catch((c) => {
      if (t(`[reply-yield] release to ${ey(l.sock)} failed: ${U3(String(c))}`), L8(c) && !Ja(l.pid)) return;
      let u = () => void r(l.sock, f, h).catch(() => {
        p("artifact_live_subscribe", "takeover_release_failed");
      });
      if (L8(c)) oLn.setTimeout(u, z);
      else u();
    });
  }
  g("artifact_live_subscribe", { [n ? "takeover_stop_notified" : "takeover_released"]: s.length });
}
function H(e) {
  let n = e.slice(0, 2), r = e.length - n.length;
  return `${n.join(", ")}${r > 0 ? ` and ${r} more` : ""}`;
}
function Xuo(e, n, r, a) {
  let s = Apo({ kind: "interactive", ...typeof r.cwd === "string" && { cwd: r.cwd }, ...typeof r.tmux === "string" && { tmux: r.tmux } }, a), l = n === "resume" ? `the session that just resumed this conversation in ${s}` : `another session of this conversation (${s}), which just published or resumed them there`;
  return `Automatic replies to comments on ${H(e)} moved to ${l}; this session keeps watching for new versions only. To take them back here, publish the Artifact again or ask Claude to resume its replies.`;
}
function Juo(e) {
  return `Automatic replies to comments on ${H(e)} are back in this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).`;
}
function Quo(e) {
  return `Automatic replies to comments on ${H(e)} were stopped in the other session of this conversation, so they stay off here too. To turn them back on, publish the Artifact again or ask Claude to resume its replies.`;
}
var oe = "Automatic replies to comments on the Artifact(s) this session was answering moved to another session of this same conversation on this machine, at its request; this session keeps its version watch only. Nothing to do — do not stop or re-arm a watch on your own; a publish the user asks for here takes them back.", ne = "The automatic comment replies this session had handed to another session of this conversation were stopped by the user there; they stay stopped here too. Nothing to do unless the user asks to resume them or to publish again.", ie = "The automatic comment replies are back with this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).";
function STi(e, n) {
  let r = e === "yielded" ? `Comment replies on ${n} Artifact(s) moved to another session of this conversation` : e === "reverted" ? `Comment replies on ${n} Artifact(s) are back with this session` : `Comment replies on ${n} Artifact(s) were stopped in the other session`, a = e === "yielded" ? oe : e === "reverted" ? ie : ne;
  el({ value: Hi({ taskType: NK, summary: jt(r), body: `
<event>${jt(a)}</event>` }), mode: "task-notification", passive: true, priority: "next", origin: { kind: "task-notification", source: NK }, agentId: tt() });
}
function Zuo(e) {
  return Opo((n) => {
    let r = se(n.slugs, n.msgId), a = r.newlyYielded;
    if (a.length > 0) g("artifact_comments_autoreact", { yielded_to_other_session: a.length });
    return { yielded: r.yielded, notHeld: r.notHeld, ...a.length > 0 && { onDelivered: () => {
      let s = a.filter((l) => iB(l));
      for (let l of s) Yvs(l);
      if (s.length > 0) e.yielded(s, n.reason, n.requester);
    } } };
  }, (n, r, a) => {
    for (let u of r) if (a?.stopped?.has(u) ?? false) Zvs(u, n);
    let s = new Set(r.filter((u) => eks(u))), l = new Set(r.filter((u) => Xvs(u))), f = re(n, r), h = f.filter((u) => l.has(u) && !_y(u) && E(u) && !(a?.transferring?.has(u) ?? false));
    if (h.length > 0) e.reverted(h);
    let c = f.filter((u) => l.has(u) && s.has(u));
    if (c.length > 0) e.stoppedElsewhere(c);
    return f;
  }), () => Opo(null);
}
function se(e, n) {
  let { live: r, autoReact: a, durable: s } = Z(), l = [], f = [], h = [];
  for (let c of e) {
    if (iB(c)) {
      Mfo(c, n), l.push(c);
      continue;
    }
    let u = E(c), I = I_(c) && !NIe(c), T = a.wakeEnabledMemo !== false && !a.userDisarmed && !s.stopLatches.isStopped(c) && (!_y(c) || I);
    if (!u || !T) {
      f.push(c);
      continue;
    }
    Mfo(c, n), Iae(c), qJt(c), yD(r, c), l.push(c), h.push(c);
  }
  return { yielded: l, notHeld: f, newlyYielded: h };
}
function E(e) {
  let { live: n } = Z(), r = n.supervisors.get(e);
  return r !== void 0 && !r.stopped && r.autoReactWiring !== void 0 || n.inFlightWiredIntent.has(e) || f1e().has(e);
}
function re(e, n) {
  let { live: r } = Z(), a = [];
  for (let s of n) {
    if (!Jvs(s, e)) continue;
    if (yD(r, s), _y(s) && !I_(s)) $ct(s), Lws(s);
    a.push(s);
    let l = r.supervisors.get(s);
    if (!_y(s) && !E(s)) Mhi(s);
    let f = PEe(s).lastWakeArgs;
    if (!_y(s) && E(s) && l?.taskId !== void 0 && WOt(l.taskId) && f !== null) dme({ ...f, seed: false, confirm: void 0, confirmBase: void 0, confirmAfter: void 0, reentry: void 0, idlePass: void 0, suppressSummonStatus: void 0 });
  }
  if (a.length > 0) g("artifact_comments_autoreact", { yield_reverted: a.length });
  return a;
}
export {
  Juo,
  Lws,
  Mhi,
  Quo,
  STi,
  Xuo,
  Zuo,
  _Ti
};
