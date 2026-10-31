// darwin/ui/chord-started.js — Claude Code 2.1.310（darwin）模块 chunk-x7d9yajv.js
import { w } from "./chunk-0ed4c357.js";
import { He } from "../fs/async-hooks.93b1.js";
import { r7r, o7r, Pn } from "../context/not-admin-owned.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { _t, UM, t } from "../fs/gitlab-runner-authentication-token.js";
import { XI, Ggr, zgr, Vgr } from "../shared/chunk-e4a3aa33.js";
import { ch, X6t } from "../settings/global-config-and-gates.js";
import { fr } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { pn, Zi } from "../telemetry/render-glyph-cardinality.js";
import { GPe, jW, WIn, QI, Z5, XX } from "../terminal/ink-renderer.js";
import { jgr, Co } from "../shared/chunk-4837e50a.js";
import { hPt, Me } from "../shared/chunk-be0ce119.js";
import { Yc } from "../terminal/aria-preserve-whitespace.js";
import { Mwt } from "../fs/read-failed.js";
import { Hps, q8t, gPt, Md } from "../shared/chunk-d52cd1ac.js";
import { oVe, qei } from "../permissions/caps-lock.js";
import { _re, Zhe, XA, x1t, Z6s, VB, WCe, dGe, LQe, p$r, Dcn } from "../telemetry/keybinding-customization-release.js";
import { egr, tgr, BR } from "../shared/chunk-258385dc.js";
import { Gi } from "../context/org-memory-writes-setting-changed.js";
import { Ude } from "../plugins/claudeai-plugins-sync-enabled.js";
import { Rlt } from "../shared/chunk-bbf114e1.js";
import { vlt } from "../shared/policy-blocked.js";
import { npt, T0t } from "../shared/chunk-f51cb704.js";
import { cro, Nlt } from "../context/not-a-retry-status.js";
import { fro, X5 } from "../fs/chunk-fd55ffe7.js";
import { vgr, kgr } from "../fs/chunk-d22723dd.js";
import { u5e, nIn } from "../telemetry/fleet-nudge-state.js";
import { E8t } from "../agents/refusal-fallback-latch-reset.js";
import { h8t, y8t, S8t } from "../settings/not-due.js";
import { Bgr } from "../computer-use/chunk-c206db8f.js";
import { Nxt } from "../plugins/chunk-5856c8d1.js";
import { g8t, jmr } from "../workflows/adopt-exit-handoff.js";
import { Q, e } from "../vendor/react/chunk-40234545.js";
import { l9 } from "../plugins/mcpb-needs-config.js";
import { Gt, de, Se, P, Bo, Xt, te, A, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { Ps } from "../shared/chunk-67236fa7.js";
import { z } from "../shared/chunk-be29de51.js";
import { b } from "../vendor/react/chunk-0b0bf45d.js";
j();
j();
var ae = Gt(null), Le = 20;
function Z(o) {
  let a = w(4), { children: i } = o, r;
  if (a[0] === b) r = [], a[0] = r;
  else r = a[0];
  let n = A(r), c;
  if (a[1] === b) c = { getDenials: () => n.current, recordDenial: (h) => {
    n.current = [h, ...n.current.slice(0, Le - 1)];
  }, removeDenial: (M) => {
    n.current = n.current.filter((T) => T !== M);
  } }, a[1] = c;
  else c = a[1];
  let _ = c, u;
  if (a[2] !== i) u = e(ae.Provider, { value: _, children: i }), a[2] = i, a[3] = u;
  else u = a[3];
  return u;
}
function OPe() {
  let o = Se(ae);
  if (!o) {
    throw ReferenceError("useAutoModeDenials cannot be called outside of an <AutoModeDenialsProvider /> (mounted by <AppStateProvider />)");
  }
  return o;
}
j();
var le = Gt(void 0);
function ce(o) {
  let r = w(3), { getFpsMetrics: i, children: a } = o, n;
  if (r[0] !== a || r[1] !== i) n = e(le.Provider, { value: i, children: a }), r[0] = a, r[1] = i, r[2] = n;
  else n = r[2];
  return n;
}
function $mr() {
  return Se(le);
}
j();
function Ve(o, i) {
  let a = i / 100 * (o.length - 1), r = Math.floor(a), n = Math.ceil(a);
  if (r === n) return o[r];
  return o[r] + (o[n] - o[r]) * (a - r);
}
var Ue = 1024;
function Umr() {
  let o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  return { increment(r, n = 1) {
    o.set(r, (o.get(r) ?? 0) + n);
  }, set(r, n) {
    o.set(r, n);
  }, observe(r, n) {
    let c = i.get(r);
    if (!c) c = { reservoir: [], count: 0, sum: 0, min: n, max: n }, i.set(r, c);
    if (c.count++, c.sum += n, n < c.min) c.min = n;
    if (n > c.max) c.max = n;
    if (c.reservoir.length < Ue) c.reservoir.push(n);
    else {
      let h = Math.floor(Math.random() * c.count);
      if (h < Ue) c.reservoir[h] = n;
    }
  }, add(r, n) {
    let c = a.get(r);
    if (!c) c = /* @__PURE__ */ new Set(), a.set(r, c);
    c.add(n);
  }, getAll() {
    let r = Object.fromEntries(o);
    for (let [n, c] of i) {
      if (c.count === 0) continue;
      r[`${n}_count`] = c.count, r[`${n}_min`] = c.min, r[`${n}_max`] = c.max, r[`${n}_avg`] = c.sum / c.count;
      let h = [...c.reservoir].sort((M, T) => M - T);
      r[`${n}_p50`] = Ve(h, 50), r[`${n}_p95`] = Ve(h, 95), r[`${n}_p99`] = Ve(h, 99);
    }
    for (let [n, c] of a) r[n] = c.size;
    return r;
  } };
}
var ze = Gt(null);
function pe(o) {
  let r = w(8), { store: i, children: a } = o, n;
  if (r[0] === b) n = Umr(), r[0] = n;
  else n = r[0];
  let h = i ?? n, { storageV5: M } = Me(), T, _;
  if (r[1] !== M || r[2] !== h) T = () => {
    let u = false;
    let U = z() && M !== void 0 ? UM(async () => {
      let V = h.getAll();
      if (Object.keys(V).length > 0) await ch((p) => ({ ...p, lastSessionMetrics: V }), M);
      u = true;
    }) : void 0;
    let W = () => {
      if (u) {
        return;
      }
      let B = h.getAll();
      if (Object.keys(B).length > 0) X6t((G) => ({ ...G, lastSessionMetrics: B }));
    };
    return process.on("exit", W), () => {
      U?.(), process.off("exit", W);
    };
  }, _ = [h, M], r[1] = M, r[2] = h, r[3] = T, r[4] = _;
  else T = r[3], _ = r[4];
  P(T, _);
  let E;
  if (r[5] !== a || r[6] !== h) E = e(ze.Provider, { value: h, children: a }), r[5] = a, r[6] = h, r[7] = E;
  else E = r[7];
  return E;
}
j();
class f8t extends GPe {
  action;
  sourceEvent;
  isChordCompletion;
  origin;
  constructor(o, i) {
    super("action", { bubbles: true, cancelable: true });
    this.action = o, this.sourceEvent = i?.sourceEvent ?? null, this.isChordCompletion = i?.isChordCompletion ?? false, this.origin = i?.origin ?? "single";
  }
  consume() {
    this.stopPropagation(), this.sourceEvent?.preventDefault(), this.sourceEvent?.stopImmediatePropagation();
  }
  get consumed() {
    return this._isPropagationStopped();
  }
}
var Ze = 3e3;
function a5e(o) {
  let r = w(4), { children: i } = o;
  if (Md()) {
    let n2;
    if (r[0] !== i) n2 = e(Q, { children: i }), r[0] = i, r[1] = n2;
    else n2 = r[1];
    return n2;
  }
  let n;
  if (r[2] !== i) n = e(et, { children: i }), r[2] = i, r[3] = n;
  else n = r[3];
  return n;
}
function et({ children: o }) {
  let [{ bindings: i }, a] = y(() => {
    let x = x1t(XA);
    return t(`[keybindings] KeybindingSetup initialized with ${x.bindings.length} bindings, ${x.warnings.length} warnings`), x;
  }), r = pn(), { addNotification: n } = Co(), c = A(null), [h, M] = y(null), T = A(null), _ = A(/* @__PURE__ */ new Map()), u = A(/* @__PURE__ */ new Set()), V = A(/* @__PURE__ */ new Set()), p = A(null), [U] = y(q8t), B = de((x) => {
    u.current.add(x);
  }, []), G = de((x) => {
    u.current.delete(x);
  }, []), W = de(() => {
    T.current?.(), T.current = null;
  }, []), E = de((x) => {
    if (W(), x !== null) T.current = r.setTimeout(() => {
      t("[keybindings] Chord timeout - cancelling"), c.current = null, M(null), n({ key: "chord-timeout", kind: "feedback", text: `${Zhe(x, VB())} cancelled — no next key within ${Ze / 1e3}s`, priority: "immediate", timeoutMs: 3e3 });
    }, Ze);
    c.current = x, M(x);
  }, [n, W, r]);
  return P(() => {
    Z6s(XA);
    let x = XA.changed.subscribe((s) => {
      a(s), t(`[keybindings] Reloaded: ${s.bindings.length} bindings, ${s.warnings.length} warnings`);
    });
    return () => {
      x(), W();
    };
  }, [W]), e(gPt, { bindings: i, pendingChordRef: c, pendingChord: h, setPendingChord: E, activeContexts: u.current, registerActiveContext: B, unregisterActiveContext: G, handlerRegistryRef: _, preDispatchRef: V, singleKeyEventRef: p, keyHandlerRegistry: U, children: e(Jt, { bindings: i, pendingChordRef: c, setPendingChord: E, activeContexts: u.current, handlerRegistryRef: _, preDispatchRef: V, singleKeyEventRef: p, keyHandlerRegistry: U, children: o }) });
}
function tt(o) {
  let i = [...o], a = new Set(i.filter((r) => !r.fallback).map((r) => r.action));
  return [...i.filter((r) => !r.fallback), ...i.filter((r) => r.fallback && !a.has(r.action))];
}
function ot(o) {
  return !o.ctrl && !o.meta && !o.superKey;
}
var qt = oVe.map((o) => _re(o.key));
function rt(o) {
  let i = WCe(o);
  return i !== null && qt.some((a) => dGe(a, i));
}
function Jt({ bindings: o, pendingChordRef: i, setPendingChord: a, activeContexts: r, handlerRegistryRef: n, preDispatchRef: c, singleKeyEventRef: h, keyHandlerRegistry: M, children: T }) {
  let _ = A([]), u = A(null), V = A("legacy"), p = de((s, d, f, R) => {
    for (let g of c.current) try {
      if (g.handler(s, d, f) === true) return R(), true;
    } catch (S) {
      l(S);
    }
    return false;
  }, [c]), U = (s, d, f, R) => {
    let g = n.current;
    if (!g) return false;
    let S = [...g.values()].flatMap((v) => [...v]), D = [...new Set(S.filter((v) => !v.fallback).map((v) => v.context)), ...r, "Global"], m = LQe(s, D, o, d), N = m.type === "match" && S.some((v) => !v.fallback && v.action === m.action) ? m.action : null, O = N === null ? [f] : [N, f], C = rt(s);
    for (let v of O) {
      let [I] = tt(g.get(v) ?? []).filter((K) => !(K.fallback && C));
      if (I) return I.handler(), Dcn(v), R(), true;
    }
    return false;
  }, B = (s, d, f, R, g, S = false) => {
    let D = n.current, m = rt(s), N = /* @__PURE__ */ new Set();
    if (D) {
      for (let H of D.values()) for (let L of H) if (!(m && L.fallback)) N.add(L.context);
    }
    let O = [...N, ...r, "Global"], C = i.current, v = C !== null, I = LQe(s, O, o, C);
    switch (I.type) {
      case "chord_started":
        V.current = "legacy", a(I.pending), g();
        return;
      case "chord_cancelled":
        a(null), g();
        return;
      case "unbound":
        if (a(null), v) {
          g();
          return;
        }
        break;
      case "match":
        if (a(null), v) {
          U(s, C, I.action, g);
          return;
        }
        break;
      case "none":
        break;
    }
    if (!D) return;
    if (!S && p(d, f, R, g)) return;
    let K = /* @__PURE__ */ new Map(), J = tt([...D.values()].flatMap((H) => [...H])), k = ot(s) || m, re;
    for (let H of J) {
      if (!H.singleKey || H.fallback && k) continue;
      let L;
      if (H.fallback && !r.has(H.context)) re ??= (() => {
        let q = LQe(s, [...r, "Global"], o, null);
        return q.type === "match" ? q.action : null;
      })(), L = re;
      else L = K.get(H.context);
      if (L === void 0) {
        let q = LQe(s, [...r, H.context, "Global"], o, null);
        L = q.type === "match" ? q.action : null, K.set(H.context, L);
      }
      if (L === H.action) {
        let q = h.current;
        h.current = s;
        let se;
        try {
          se = H.handler();
        } finally {
          h.current = q;
        }
        if (se !== false) {
          Dcn(L), g();
          return;
        }
      }
    }
  }, G = (s, d, f, R, g, S) => {
    let D = M, m = (I, K) => {
    };
    if (D.swallowAll.size > 0) {
      m(null, true), S();
      return;
    }
    if (i.current !== null && V.current === "legacy") {
      m(null, false), B(d, f, R, g, S);
      return;
    }
    let N = eo(s.target), O = i.current !== null && V.current === "scopeChain";
    if (N.length === 0 && D.preemptiveScopes.size === 0 && !O) {
      m(null, false), B(d, f, R, g, S);
      return;
    }
    let C = fe(s.target);
    if (D.preemptiveScopes.size > 0 && !O) {
      let I = [...D.preemptiveScopes.keys(), "Global"], K = p$r(d, I, o, null);
      if (K.type === "match" && C) {
        if (Ie(C, s, K.action, false, s.type === "wheel" ? "wheel" : "single")) {
          m(K.action, true), Dcn(K.action);
          return;
        }
      }
    }
    if (!O && C?.attributes.textEntry === true && ot(d) && [...d.key].length === 1) {
      m(null, p(f, R, g, S));
      return;
    }
    if (O) {
      let I = i.current, K = p$r(d, _.current, o, I);
      if (K.type === "chord_started") {
        V.current = "scopeChain", a(K.pending), S(), m(null, true);
        return;
      }
      if (K.type === "match") {
        a(null);
        let J = u.current;
        u.current = null, _.current = [];
        let k = J && C && jW(J, WIn(C)) ? J : C;
        if (k) {
          if (Ie(k, s, K.action, true, "chord")) {
            m(K.action, true), Dcn(K.action);
            return;
          }
        }
        let re = U(d, I, K.action, S);
        m(K.action, re);
        return;
      }
      u.current = null, _.current = [], m(null, false), B(d, f, R, g, S);
      return;
    }
    let v = p$r(d, N, o, null);
    switch (v.type) {
      case "chord_started":
        _.current = N, u.current = C ?? null, V.current = "scopeChain", a(v.pending), S(), m(null, true);
        return;
      case "match": {
        if (!C) {
          m(v.action, false), B(d, f, R, g, S);
          return;
        }
        if (p(f, R, g, S)) {
          a(null), m(v.action, true);
          return;
        }
        if (Ie(C, s, v.action, false, s.type === "wheel" ? "wheel" : "single")) {
          a(null), m(v.action, true), Dcn(v.action);
          return;
        }
        m(v.action, false), B(d, f, R, g, S, true);
        return;
      }
      case "unbound":
        if (p(f, R, g, S)) {
          a(null), m(null, true);
          return;
        }
        a(null), m(null, false);
        return;
      default:
        m(null, false), B(d, f, R, g, S);
        return;
    }
  }, W = (s) => {
    let { input: d, key: f } = Hps(s);
    G(s, s, d, f, s.sequence, () => nt(s));
  }, E = (s) => {
    if (Zt(s.target, s.currentTarget, s.col, s.row)) return;
    let d = { name: s.deltaY < 0 ? "wheelup" : "wheeldown", key: "", ctrl: s.ctrl, shift: s.shift, meta: s.meta, superKey: false }, f = { upArrow: false, downArrow: false, leftArrow: false, rightArrow: false, pageDown: false, pageUp: false, wheelUp: s.deltaY < 0, wheelDown: s.deltaY > 0, home: false, end: false, return: false, escape: false, tab: false, backspace: false, delete: false, ctrl: s.ctrl, shift: s.shift, meta: s.meta, super: false };
    G(s, d, "", f, "", () => nt(s));
  }, x = A(null);
  return Xt(() => {
    if (!x.current) return;
    let s = QI(x.current), d = () => {
      let f = x.current;
      if (!f || s.activeElement === f) return;
      if (s.activeElement === null) {
        s.focus(f);
        return;
      }
      let R = f.parentNode;
      while (R) {
        if (R === s.activeElement) {
          s.focus(f);
          return;
        }
        R = R.parentNode;
      }
    };
    return d(), s.subscribe(d);
  }, []), e(Yc, { ref: x, keybindingScope: "Global", tabIndex: -1, flexDirection: "column", flexGrow: 1, onKeyDownCapture: W, onWheelCapture: E, children: T });
}
function nt(o) {
  o.preventDefault(), o.stopImmediatePropagation();
}
function Yt(o) {
  return o !== null && "attributes" in o;
}
function fe(o) {
  return Yt(o) ? o : void 0;
}
function Zt(o, i, a, r) {
  let n = fe(o), c = fe(i);
  while (n && n !== c) {
    if (n._eventHandlers?.onWheel && (a === void 0 || r === void 0 || typeof n.attributes.tabIndex === "number" || Z5(n, a, r) !== null)) return true;
    n = n.parentNode;
  }
  return false;
}
function eo(o) {
  let i = [], a = fe(o);
  while (a) {
    let r = a.attributes.keybindingScope;
    if (typeof r === "string" && qei(r)) i.push(r);
    a = a.parentNode;
  }
  return i;
}
function Ie(o, i, a, r, n) {
  let c = new f8t(a, { sourceEvent: i, isChordCompletion: r, origin: n });
  return XX.dispatch(o, c), c.consumed;
}
j();
j();
j();
var me = Gt(null);
function X(o) {
  let r = w(3), { children: i } = o, a = A(null), n;
  if (r[0] === b) n = { setHandler: (c) => {
    a.current = c;
  }, tryDelete: (h) => a.current?.(h) ?? false }, r[0] = n;
  else n = r[0];
  let M = n, T;
  if (r[1] !== i) T = e(me.Provider, { value: M, children: i }), r[1] = i, r[2] = T;
  else T = r[2];
  return T;
}
function m8t() {
  let o = Se(me);
  if (!o) {
    throw ReferenceError("useInputSelectionBridge cannot be called outside of an <InputSelectionBridgeProvider /> (mounted by <AppStateProvider />)");
  }
  return o;
}
j();
class ge {
  queue = [];
  waiters = [];
  changed = He();
  _revision = 0;
  get length() {
    return this.queue.length;
  }
  get revision() {
    return this._revision;
  }
  send(o) {
    this._revision++;
    let i = this.waiters.findIndex((a) => a.fn(o));
    if (i !== -1) {
      let a = this.waiters.splice(i, 1)[0];
      if (a) {
        a.resolve(o), this.notify();
        return;
      }
    }
    this.queue.push(o), this.notify();
  }
  poll(o = () => true) {
    let i = this.queue.findIndex(o);
    if (i === -1) return;
    return this.queue.splice(i, 1)[0];
  }
  receive(o = () => true) {
    let i = this.queue.findIndex(o);
    if (i !== -1) {
      let a = this.queue.splice(i, 1)[0];
      if (a) return this.notify(), Promise.resolve(a);
    }
    return new Promise((a) => {
      this.waiters.push({ fn: o, resolve: a });
    });
  }
  subscribe = this.changed.subscribe;
  notify() {
    this.changed.emit();
  }
}
var he = Gt(void 0);
function ye(o) {
  let a = w(3), { children: i } = o, r;
  if (a[0] === b) r = new ge(), a[0] = r;
  else r = a[0];
  let n = r, c;
  if (a[1] !== i) c = e(he.Provider, { value: n, children: i }), a[1] = i, a[2] = c;
  else c = a[2];
  return c;
}
function _no() {
  let o = Se(he);
  if (!o) {
    throw Error("useMailbox must be used within a MailboxProvider");
  }
  return o;
}
j();
function l5e(o) {
  let i = Bo(o);
  P(() => Gi.subscribe((a, r) => {
    let n = fr();
    i(a, n, r);
  }), []);
}
j();
var ve = Gt(null);
function tae() {
  let o = Se(ve);
  if (!o) throw ReferenceError("useSessionHooksRegistry cannot be called outside of an <AppStateProvider />");
  return o;
}
function Eo(Ge) {
  return Ge.expandedView === "tasks" ? { ...Ge, expandedView: "none" } : Ge;
}
var be = Gt(false), Y = null;
function Re(o) {
  let u = w(86), { children: i, store: a, initialState: r, onChangeAppState: n, fleetNudgeStore: c, writesExitHandoff: h, sessionHooks: M } = o, T = h === void 0 ? false : h;
  if (Se(be)) {
    throw Error("AppStateProvider can not be nested within another AppStateProvider");
  }
  let V;
  if (u[0] !== r || u[1] !== n || u[2] !== a) V = () => a ?? Ps(r ?? Nxt(), n), u[0] = r, u[1] = n, u[2] = a, u[3] = V;
  else V = u[3];
  let [p] = y(V), U;
  if (u[4] !== M) U = () => M ?? Ude(), u[4] = M, u[5] = U;
  else U = u[5];
  let [B] = y(U), G = Zi(), W;
  if (u[6] !== G) W = () => fro(G), u[6] = G, u[7] = W;
  else W = u[7];
  let [E] = y(W), [x] = y(cro), { storageV5: s } = Me(), d = BR(), f;
  if (u[8] !== s || u[9] !== p) f = () => new vgr(s, globalThis, () => p.setState(Eo)), u[8] = s, u[9] = p, u[10] = f;
  else f = u[10];
  let [R] = y(f), g;
  if (u[11] !== c || u[12] !== s) g = () => c ?? new u5e({ storageV5: s }), u[11] = c, u[12] = s, u[13] = g;
  else g = u[13];
  let [S] = y(g), D;
  if (u[14] !== s) D = () => Y ? new Y.SessionRosterStore({ storageV5: s }) : null, u[14] = s, u[15] = D;
  else D = u[15];
  let [m] = y(D), [N] = y(T), [O] = y(s), C, v;
  if (u[16] !== O || u[17] !== p || u[18] !== N) C = () => {
    let I = N ? () => g8t(p.getState().tasks, O) : () => jmr(p.getState().tasks);
    let K = _t(I);
    return () => {
      I(), K();
    };
  }, v = [p, N, O], u[16] = O, u[17] = p, u[18] = N, u[19] = C, u[20] = v;
  else C = u[19], v = u[20];
  P(C, v);
  let J;
  if (u[21] !== p) J = () => vlt.over(p), u[21] = p, u[22] = J;
  else J = u[22];
  let [k] = y(J), re;
  if (u[23] !== p) re = () => l9.over(p), u[23] = p, u[24] = re;
  else re = u[24];
  let [H] = y(re), L;
  if (u[25] !== k || u[26] !== d?.mcpSessionWiring) L = () => d?.mcpSessionWiring.acquireConnections(k), u[25] = k, u[26] = d?.mcpSessionWiring, u[27] = L;
  else L = u[27];
  let q;
  if (u[28] !== k || u[29] !== d) q = [d, k], u[28] = k, u[29] = d, u[30] = q;
  else q = u[30];
  P(L, q);
  let se;
  if (u[31] !== p) se = () => npt.over(p), u[31] = p, u[32] = se;
  else se = u[32];
  let [xe] = y(se), Rt, xt;
  if (u[33] !== xe || u[34] !== d) Rt = () => {
    if (d === void 0) {
      return;
    }
    return T0t.of(d).acquire(xe);
  }, xt = [d, xe], u[33] = xe, u[34] = d, u[35] = Rt, u[36] = xt;
  else Rt = u[35], xt = u[36];
  P(Rt, xt);
  let Pt, Ct;
  if (u[37] !== k) Pt = () => r7r(() => k.get().clients), Ct = [k], u[37] = k, u[38] = Pt, u[39] = Ct;
  else Pt = u[38], Ct = u[39];
  P(Pt, Ct);
  let wt, kt;
  if (u[40] !== k) wt = () => o7r((Wo, Go, Lo) => k.swapServerTools(Wo, Go, Lo)), kt = [k], u[40] = k, u[41] = wt, u[42] = kt;
  else wt = u[41], kt = u[42];
  P(wt, kt);
  let Kt;
  if (u[43] !== p.setState) Kt = () => E8t(p.setState), u[43] = p.setState, u[44] = Kt;
  else Kt = u[44];
  let Mt;
  if (u[45] !== p) Mt = [p], u[45] = p, u[46] = Mt;
  else Mt = u[46];
  P(Kt, Mt);
  let Et;
  if (u[47] !== d || u[48] !== s || u[49] !== p) Et = ($o, ei, Uo) => {
    if (h8t(d, $o, p.setState, s, Uo), !Pn()) S8t(p.getState().toolPermissionContext, p.setState, p.getState().fastMode);
  }, u[47] = d, u[48] = s, u[49] = p, u[50] = Et;
  else Et = u[50];
  let Pe = Bo(Et);
  l5e(Pe);
  let At;
  if (u[51] !== Pe) At = () => {
    y8t(() => Pe("policySettings"));
  }, u[51] = Pe, u[52] = At;
  else At = u[52];
  let Dt;
  if (u[53] === b) Dt = [], u[53] = Dt;
  else Dt = u[53];
  P(At, Dt);
  const We = d ?? null;
  let Ce;
  if (u[54] !== i || u[55] !== m) Ce = Y && m ? e(Y.SessionRosterStoreContext.Provider, { value: m, children: i }) : i, u[54] = i, u[55] = m, u[56] = Ce;
  else Ce = u[56];
  let we;
  if (u[57] !== Ce) we = e(Z, { children: e(X, { children: Ce }) }), u[57] = Ce, u[58] = we;
  else we = u[58];
  let ke;
  if (u[59] !== S || u[60] !== we) ke = e(nIn.Provider, { value: S, children: we }), u[59] = S, u[60] = we, u[61] = ke;
  else ke = u[61];
  let Ke;
  if (u[62] !== ke || u[63] !== R) Ke = e(kgr.Provider, { value: R, children: ke }), u[62] = ke, u[63] = R, u[64] = Ke;
  else Ke = u[64];
  let Ee;
  if (u[65] !== x || u[66] !== Ke) Ee = e(Nlt.Provider, { value: x, children: Ke }), u[65] = x, u[66] = Ke, u[67] = Ee;
  else Ee = u[67];
  let Ae;
  if (u[68] !== E || u[69] !== Ee) Ae = e(ye, { children: e(Bgr, { children: e(X5.Provider, { value: E, children: Ee }) }) }), u[68] = E, u[69] = Ee, u[70] = Ae;
  else Ae = u[70];
  let De;
  if (u[71] !== B || u[72] !== Ae) De = e(ve.Provider, { value: B, children: Ae }), u[71] = B, u[72] = Ae, u[73] = De;
  else De = u[73];
  let Ne;
  if (u[74] !== We || u[75] !== De) Ne = e(Ggr.Provider, { value: We, children: De }), u[74] = We, u[75] = De, u[76] = Ne;
  else Ne = u[76];
  let je;
  if (u[77] !== H || u[78] !== Ne) je = e(Vgr.Provider, { value: H, children: Ne }), u[77] = H, u[78] = Ne, u[79] = je;
  else je = u[79];
  let Te;
  if (u[80] !== k || u[81] !== je) Te = e(zgr.Provider, { value: k, children: je }), u[80] = k, u[81] = je, u[82] = Te;
  else Te = u[82];
  let Nt;
  if (u[83] !== p || u[84] !== Te) Nt = e(be.Provider, { value: true, children: e(XI.Provider, { value: p, children: Te }) }), u[83] = p, u[84] = Te, u[85] = Nt;
  else Nt = u[85];
  return Nt;
}
function eS(o) {
  let E = w(32), { session: i, host: a, project: r, storageV5: n, messageQueue: c, store: h, initialState: M, onChangeAppState: T, fleetNudgeStore: _, sessionHooks: u, writesExitHandoff: V, getFpsMetrics: p, stats: U, keybindings: B, children: G } = o, W = B === void 0 ? true : B, x;
  if (E[0] !== n) x = Mwt(n), E[0] = n, E[1] = x;
  else x = E[1];
  let s = x, d;
  if (E[2] !== G || E[3] !== W) d = W ? e(a5e, { children: G }) : G, E[2] = G, E[3] = W, E[4] = d;
  else d = E[4];
  let f;
  if (E[5] !== d) f = e(jgr, { children: e(Z, { children: e(X, { children: d }) }) }), E[5] = d, E[6] = f;
  else f = E[6];
  let R;
  if (E[7] !== _ || E[8] !== M || E[9] !== T || E[10] !== u || E[11] !== h || E[12] !== f || E[13] !== V) R = e(Re, { store: h, initialState: M, onChangeAppState: T, fleetNudgeStore: _, sessionHooks: u, writesExitHandoff: V, children: f }), E[7] = _, E[8] = M, E[9] = T, E[10] = u, E[11] = h, E[12] = f, E[13] = V, E[14] = R;
  else R = E[14];
  let g = R, S;
  if (E[15] !== g || E[16] !== a || E[17] !== r || E[18] !== i) S = i !== void 0 ? e(egr, { session: i, children: g }) : a !== void 0 ? e(tgr, { host: a, project: r, children: g }) : g, E[15] = g, E[16] = a, E[17] = r, E[18] = i, E[19] = S;
  else S = E[19];
  let D;
  if (E[20] !== U || E[21] !== S) D = e(pe, { store: U, children: S }), E[20] = U, E[21] = S, E[22] = D;
  else D = E[22];
  let m;
  if (E[23] !== p || E[24] !== D) m = e(ce, { getFpsMetrics: p, children: D }), E[23] = p, E[24] = D, E[25] = m;
  else m = E[25];
  let N = m, O;
  if (E[26] !== c || E[27] !== N) O = c === void 0 ? N : e(Rlt, { queue: c, children: N }), E[26] = c, E[27] = N, E[28] = O;
  else O = E[28];
  let C = O;
  if (n === void 0) {
    return C;
  }
  let v;
  if (E[29] !== C || E[30] !== s) v = e(hPt, { ...s, children: C }), E[29] = C, E[30] = s, E[31] = v;
  else v = E[31];
  return v;
}
export {
  $mr,
  OPe,
  Umr,
  _no,
  a5e,
  eS,
  f8t,
  l5e,
  m8t,
  tae
};
