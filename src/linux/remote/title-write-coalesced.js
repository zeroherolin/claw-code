// linux/remote/title-write-coalesced.js — Claude Code 2.1.310（linux）模块 chunk-ar2qp04r.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { f } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { V_t, GFo } from "./bridge-outcome-branch-dropped.js";
function VIn(i) {
  let n = { entries: /* @__PURE__ */ new Map(), burst: i?.burst ?? 3, refillMs: i?.refillMs ?? 1e4, retryMs: i?.retryMs ?? 6e4, isOwnTitle: i?.isOwnTitle ?? (() => false), onRemoteTitleAdopted: i?.onRemoteTitleAdopted ?? (() => {
  }) };
  return { update: (e, r, s) => h(n, e, r, s), noteRemoteTitle: (e, r) => S(n, e, r), forget: (e) => R(n, e), hasSent: (e, r) => n.entries.get(e)?.sentTitles.has(r) ?? false, isKnownTitle: (e, r) => n.entries.get(e)?.knownTitles.has(r) ?? false };
}
function c(i, n) {
  let e = i.entries.get(n);
  if (!e) e = { lastSentTitle: void 0, lastSentOk: false, sentTitles: /* @__PURE__ */ new Set(), knownTitles: /* @__PURE__ */ new Set(), tokens: i.burst, refilledAt: Date.now(), pending: void 0, inFlight: false, timer: void 0, retryTimer: void 0, sendingRetry: false, suppressed: 0 }, i.entries.set(n, e);
  return e;
}
function h(i, n, e, r) {
  let s = c(i, n);
  if (y(s, e, r)) return p(s), Promise.resolve();
  return new Promise((l) => {
    let u = [l];
    if (a(s), s.pending || s.inFlight) {
      if (s.suppressed === 0) f("bridge_session_patch", "title_write_coalesced");
      s.suppressed += 1;
    }
    g(s.pending?.waiters), s.pending = { title: e, opts: r, waiters: u }, s.sendingRetry = false, T(i, n);
  });
}
function k(i, n, e) {
  let r = Math.floor((e - n.refilledAt) / i.refillMs);
  if (r > 0) n.tokens = Math.min(i.burst, n.tokens + r), n.refilledAt += r * i.refillMs;
  if (n.tokens === i.burst) n.refilledAt = e;
}
function T(i, n) {
  let e = i.entries.get(n);
  if (!e || e.inFlight || !e.pending) return;
  let r = Date.now();
  if (k(i, e, r), e.tokens <= 0 && !e.pending.opts?.userInitiated) {
    if (!e.timer) {
      let o = Math.max(0, e.refilledAt + i.refillMs - r);
      e.timer = setTimeout(W, o, i, n), e.timer.unref?.();
    }
    return;
  }
  let { title: s, opts: l, waiters: u } = e.pending;
  if (e.pending = void 0, y(e, s, l) || l?.shouldSend !== void 0 && !l.shouldSend()) {
    a(e), e.sendingRetry = false, e.suppressed = 0, g(u);
    return;
  }
  e.tokens = Math.max(0, e.tokens - 1), e.inFlight = true, e.lastSentTitle = s, e.lastSentOk = false, e.sentTitles.add(s), e.knownTitles.add(s), a(e);
  let b = e.sendingRetry;
  if (e.sendingRetry = false, e.suppressed > 0) t(`[bridge] title write: sending latest after coalescing ${e.suppressed} update(s)`), e.suppressed = 0;
  GFo(n, s, l).then((o) => {
    if (o === "landed") e.lastSentTitle = s, e.lastSentOk = true;
    else if (e.lastSentTitle === s) e.lastSentOk = false;
    if (i.entries.get(n) !== e) return;
    if (o === "failed" && !b && !e.retryTimer && !e.pending) e.retryTimer = setTimeout(v, i.retryMs, i, n, s, l), e.retryTimer.unref?.();
  }, (o) => {
    t(`[bridge] title write failed: ${d(o)}`);
  }).finally(() => {
    e.inFlight = false, g(u), T(i, n);
  });
}
function W(i, n) {
  let e = i.entries.get(n);
  if (e) e.timer = void 0, T(i, n);
}
function v(i, n, e, r) {
  let s = i.entries.get(n);
  if (!s) return;
  if (s.retryTimer = void 0, !m(i, s, n, e)) return;
  if (r?.shouldSend !== void 0 && !r.shouldSend()) {
    t("[bridge] title write retry dropped: sending is now barred");
    return;
  }
  V_t(n, { baseUrl: r?.baseUrl, getAccessToken: r?.getAccessToken, credentials: r?.credentials }).then((l) => {
    if (!m(i, s, n, e)) return;
    if (l === null) {
      t("[bridge] title write retry skipped: server state unreadable");
      return;
    }
    if (l.title && !s.knownTitles.has(l.title) && !i.isOwnTitle(n, l.title)) {
      t("[bridge] title write retry dropped: the session was renamed elsewhere"), S(i, n, l.title), i.onRemoteTitleAdopted(n, l.title);
      return;
    }
    s.pending = { title: e, opts: r, waiters: [] }, s.sendingRetry = true, T(i, n);
  }, (l) => {
    t(`[bridge] title write retry skipped: ${d(l)}`);
  });
}
function m(i, n, e, r) {
  return i.entries.get(e) === n && n.lastSentTitle === r && !n.lastSentOk && !n.inFlight && !n.pending && !n.retryTimer;
}
function S(i, n, e) {
  let r = c(i, n);
  r.lastSentTitle = e, r.lastSentOk = true, r.knownTitles.add(e), a(r), p(r);
}
function R(i, n) {
  let e = i.entries.get(n);
  if (!e) return;
  if (e.timer) clearTimeout(e.timer);
  a(e), p(e), i.entries.delete(n);
}
function p(i) {
  g(i.pending?.waiters), i.pending = void 0, i.sendingRetry = false, i.suppressed = 0;
}
function a(i) {
  if (i.retryTimer) clearTimeout(i.retryTimer), i.retryTimer = void 0;
}
function g(i) {
  for (let n of i ?? []) n();
}
function y(i, n, e) {
  if (i.lastSentTitle !== n) return false;
  if (i.inFlight || i.retryTimer !== void 0) return true;
  return i.lastSentOk && !e?.userInitiated;
}
export {
  VIn
};
