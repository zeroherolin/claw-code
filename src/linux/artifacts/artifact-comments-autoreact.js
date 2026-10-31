// linux/artifacts/artifact-comments-autoreact.js — Claude Code 2.1.310（linux）模块 chunk-gtd0g067.js
import { U } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { g, f } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "./cowritten-artifact-html.js";
import { qm, Ly } from "../fs/chunk-b6c2193e.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { ey, PY, C8 } from "../telemetry/harbor-kite-pacing-off.js";
import { o, v, M, oe, T, u, B, A } from "../vendor/zod/string-format.js";
var k = 4e3, TQt = 16, x = 64, rvs = p(() => u({ action: A("yield_artifact_replies"), from: o().max(512), msg_id: o().min(1).max(128), session_id: o().max(512), slugs: T(o().max(128)).max(TQt), reason: B(["resume", "claim"]).catch("claim"), sent_at: v().finite(), claimed_at: v().finite().optional(), requester: u({ cwd: oe().optional(), tmux: oe().optional() }).optional() })), ovs = p(() => u({ action: A("artifact_replies_yielded"), orig_msg_id: o().max(128), yielded: oe().optional(), not_held: oe().optional(), refused: oe().optional() })), svs = p(() => u({ action: A("unyield_artifact_replies"), orig_msg_id: o().max(128), slugs: T(o().max(128)).max(TQt), stopped: M().optional() })), JLn = { setTimeout: (e, i) => {
  let n = setTimeout(e, i);
  return n.unref?.(), n;
}, clearTimeout: (e) => clearTimeout(e) };
class b {
  outstanding = /* @__PURE__ */ new Map();
  pendingClaims = /* @__PURE__ */ new Map();
  holder = null;
  reverter = null;
  sendAnswer = null;
  ownAddress = null;
  delivered = /* @__PURE__ */ new Map();
  reset() {
    for (let e of this.outstanding.values()) e.timers.clearTimeout(e.timer);
    this.outstanding.clear(), this.pendingClaims.clear(), this.holder = null, this.reverter = null, this.sendAnswer = null, this.ownAddress = null, this.delivered.clear();
  }
}
var P = new W(() => new b());
function y() {
  return P.of(U().host);
}
function z(e, i) {
  while (e.size > x) {
    let n = e.keys().next().value;
    if (n === void 0) break;
    let r = e.get(n);
    e.delete(n), i?.(r, n);
  }
}
function ivs(e, i, n) {
  let r = n.timers ?? JLn, s = y();
  return new Promise((c) => {
    let a = { asked: new Set(i), expectPid: n.expectPid, sentAt: n.sentAt, lost: /* @__PURE__ */ new Map(), resolve: c, onLate: n.onLate, timer: void 0, timers: r };
    a.timer = r.setTimeout(() => {
      if (s.outstanding.get(e) !== a || a.resolve === null) return;
      if (a.resolve = null, c({ kind: "timeout", lost: [...a.lost.keys()], lostTo: [...a.lost] }), a.onLate === void 0) s.outstanding.delete(e);
    }, n.timeoutMs ?? k), s.outstanding.set(e, a), z(s.outstanding, (d) => {
      d.timers.clearTimeout(d.timer), d.resolve?.({ kind: "timeout", lost: [...d.lost.keys()], lostTo: [...d.lost] }), d.resolve = null;
    });
  });
}
function avs(e, i) {
  let n = `claim-${i}-${Math.random().toString(36).slice(2)}`, r = y(), s = { id: n, slugs: new Set(e), sentAt: i, lost: /* @__PURE__ */ new Map(), end: () => void r.pendingClaims.delete(n) };
  return r.pendingClaims.set(n, s), s;
}
function lvs(e) {
  let i = y(), n = i.outstanding.get(e);
  if (n === void 0) return [];
  return n.timers.clearTimeout(n.timer), i.outstanding.delete(e), [...n.lost];
}
function dvs(e) {
  return typeof e === "string" && y().outstanding.has(e);
}
function cvs(e, i) {
  let n = y(), r = n.outstanding.get(e.orig_msg_id);
  if (r === void 0) return false;
  if (r.expectPid !== void 0 && i !== void 0 && i !== r.expectPid) return f("artifact_live_subscribe", "yield_answer_pid_mismatch"), false;
  r.timers.clearTimeout(r.timer);
  let s = (a) => Array.isArray(a) ? a.filter((d) => typeof d === "string" && r.asked.has(d)) : [], c = e.refused === true ? { kind: "refused" } : { kind: "yielded", yielded: s(e.yielded), notHeld: s(e.not_held) };
  if (r.resolve !== null) n.outstanding.delete(e.orig_msg_id), r.resolve({ ...c, lost: [...r.lost.keys()], lostTo: [...r.lost] });
  else {
    n.outstanding.delete(e.orig_msg_id), g("artifact_live_subscribe", { yield_answer_late: true });
    try {
      r.onLate?.({ ...c, lost: [...r.lost.keys()], lostTo: [...r.lost] });
    } catch (a) {
      l(a);
    }
  }
  return true;
}
function dfo(e, i = null) {
  let n = y();
  n.holder = e, n.reverter = i;
}
function H(e, i, n, r) {
  let s = e.delivered.get(i);
  e.delivered.delete(i);
  let c = r?.pid ?? s?.pid;
  e.delivered.set(i, { slugs: /* @__PURE__ */ new Set([...s?.slugs ?? [], ...n]), pid: c, procStart: r?.procStart ?? s?.procStart });
  let a = (d, _) => {
    try {
      e.reverter?.(_, [...d.slugs]);
    } catch (m) {
      l(m);
    }
  };
  while (e.delivered.size > x) {
    let d = [...e.delivered].find(([_, m]) => _ !== i && c !== void 0 && m.pid === c);
    if (d === void 0) break;
    e.delivered.delete(d[0]), a(d[1], d[0]);
  }
  z(e.delivered, a);
}
function C(e, i) {
  if (e.delivered.size < x) return false;
  if (i === void 0) return true;
  for (let n of e.delivered.values()) if (n.pid === i) return false;
  return true;
}
function uvs(e) {
  return Y(y(), e);
}
function Y(e, i) {
  let n = [];
  for (let [r, s] of [...e.delivered]) if (s.pid !== void 0 && qm(s.pid)) n.push(...h(e, r, [...s.slugs], i));
  return D(e), n;
}
function fvs(e) {
  let i = y();
  for (let [n, r] of [...i.delivered]) if (r.slugs.delete(e) && r.slugs.size === 0) i.delivered.delete(n);
}
async function D(e) {
  for (let [i, n] of [...e.delivered]) {
    if (n.pid === void 0 || n.procStart === void 0) continue;
    let r;
    try {
      r = await Ly(n.pid, n.procStart);
    } catch {
      r = void 0;
    }
    if (r === false && e.delivered.get(i) === n) g("artifact_comments_autoreact", { yield_taker_reused: true }), h(e, i, [...n.slugs]);
  }
}
function h(e, i, n, r) {
  let s = e.delivered.get(i);
  if (s === void 0) return [];
  let c = [...n].filter((a) => s.slugs.delete(a));
  if (s.slugs.size === 0) e.delivered.delete(i);
  if (c.length === 0) return [];
  try {
    return e.reverter?.(i, c, r) ?? [];
  } catch (a) {
    return l(a), [];
  }
}
function cfo(e, i = null) {
  let n = y();
  n.sendAnswer = e, n.ownAddress = i;
}
function E(e, i) {
  let n = i.claimed_at ?? i.sent_at, r = false, s = [...e.pendingClaims.values()];
  for (let [c, a] of e.outstanding) if (a.resolve !== null) s.push({ id: c, slugs: a.asked, sentAt: a.sentAt, lost: a.lost });
  for (let c of s) {
    if (!i.slugs.some((d) => c.slugs.has(d))) continue;
    if (n > c.sentAt || n === c.sentAt && i.from > (e.ownAddress ?? "")) {
      for (let d of i.slugs) if (c.slugs.has(d)) c.lost.set(d, i.from);
    } else r = true;
  }
  return r ? "refuse" : "proceed";
}
function ufo(e, i, n, r, s) {
  let c = n?.pid, a = n?.writeToken, d = y(), _ = d.sendAnswer;
  if (_ === null) return;
  let m;
  if (s?.refuse === true) m = "refused";
  else if (r - e.sent_at > k - 500 || e.sent_at > r + 1e3 || e.claimed_at !== void 0 && e.claimed_at > e.sent_at + 1e3) f("artifact_comments_autoreact", "yield_request_stale"), m = "refused";
  else if (E(d, e) === "refuse") m = "refused";
  else if (d.holder === null) m = { yielded: [], notHeld: [...e.slugs] };
  else try {
    if (Y(d, { transferring: new Set(e.slugs) }), C(d, n?.pid)) f("artifact_comments_autoreact", "yield_table_full"), m = "refused";
    else m = d.holder({ msgId: e.msg_id, slugs: e.slugs, reason: e.reason, requester: { cwd: e.requester?.cwd, tmux: e.requester?.tmux } });
  } catch (R) {
    l(R), f("artifact_comments_autoreact", "yield_handler_threw"), m = "refused";
  }
  let S = m === "refused" ? { orig_msg_id: e.msg_id, yielded: [], not_held: [], refused: true } : { orig_msg_id: e.msg_id, yielded: m.yielded.slice(0, TQt), not_held: m.notHeld.slice(0, TQt) }, w = m !== "refused" && m.yielded.length > 0 ? m : null;
  if (w !== null) H(d, e.msg_id, w.yielded, n);
  _(i, S, c, a).then(() => w?.onDelivered?.(), (R) => {
    if (t(`[reply-yield] answer to ${ey(i)} failed: ${PY(String(R))}`), w === null) return;
    if (!C8(R)) {
      f("artifact_comments_autoreact", "yield_answer_send_ambiguous"), _(i, S, c, a).catch(() => {
      }), w.onDelivered?.();
      return;
    }
    f("artifact_comments_autoreact", "yield_answer_undelivered"), h(d, e.msg_id, w.yielded);
  });
}
function pvs(e, i) {
  let n = y(), r = n.delivered.get(e.orig_msg_id);
  if (r === void 0) return false;
  if (r.pid !== void 0 && i !== void 0 && i !== r.pid) return f("artifact_comments_autoreact", "unyield_pid_mismatch"), false;
  let s = h(n, e.orig_msg_id, e.slugs, { ...e.stopped === true && { stopped: new Set(e.slugs) } });
  return s.push(...Y(n)), g("artifact_comments_autoreact", { yield_handed_back: s.length }), true;
}
export {
  JLn,
  TQt,
  avs,
  cfo,
  cvs,
  dfo,
  dvs,
  fvs,
  ivs,
  lvs,
  ovs,
  pvs,
  rvs,
  svs,
  ufo,
  uvs
};
