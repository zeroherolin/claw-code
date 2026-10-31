// linux/ui/chord-started.js — Claude Code 2.1.310（linux）模块 chunk-db3bnzed.js
import { w } from "./chunk-0ed4c357.js";
import { De } from "../fs/async-hooks.93b1.js";
import { OXr, MXr, Pn } from "../context/not-admin-owned.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { bt, HM, t } from "../fs/gitlab-runner-authentication-token.js";
import { zI, Rgr, xgr, Pgr } from "../shared/chunk-e4a3aa33.js";
import { ch, $Kt } from "../settings/global-config-and-gates.js";
import { pr } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { fn, Zi } from "../telemetry/render-glyph-cardinality.js";
import { $Pe, MW, CIn, VI, W6, jX } from "../terminal/ink-renderer.js";
import { Tgr, To } from "../shared/chunk-4837e50a.js";
import { aPt, Me } from "../shared/chunk-be0ce119.js";
import { qc } from "../terminal/aria-preserve-whitespace.js";
import { Awt } from "../fs/read-failed.js";
import { rfs, H8t, iPt, Md } from "../shared/chunk-d52cd1ac.js";
import { YKe, cei } from "../permissions/caps-lock.js";
import { dre, qhe, VC, yBt, mKs, U1, NTe, ZGe, R7e, K$r, Scn } from "../telemetry/keybinding-customization-release.js";
import { sgr, igr, $R } from "../shared/chunk-258385dc.js";
import { Gi } from "../context/org-memory-writes-setting-changed.js";
import { Ide } from "../plugins/claudeai-plugins-sync-enabled.js";
import { Ilt } from "../shared/chunk-bbf114e1.js";
import { Alt } from "../shared/policy-blocked.js";
import { fdt, xPt } from "../shared/chunk-f51cb704.js";
import { Nno, Olt } from "../context/not-a-retry-status.js";
import { Uno, U6 } from "../fs/chunk-fd55ffe7.js";
import { agr, lgr } from "../fs/chunk-d22723dd.js";
import { p6e, iIn } from "../telemetry/fleet-nudge-state.js";
import { k8t } from "../agents/refusal-fallback-latch-reset.js";
import { _8t, b8t, w8t } from "../settings/not-due.js";
import { kgr } from "../computer-use/chunk-c206db8f.js";
import { jxt } from "../plugins/chunk-5856c8d1.js";
import { y8t, Vmr } from "../workflows/adopt-exit-handoff.js";
import { Q, e } from "../vendor/react/chunk-40234545.js";
import { Q6 } from "../plugins/mcpb-needs-config.js";
import { Gt, de, be, P, Bo, Xt, ee, C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
import { Ps } from "../shared/chunk-67236fa7.js";
import { z } from "../shared/chunk-be29de51.js";
import { S } from "../vendor/react/chunk-0b0bf45d.js";
j();
j();
var ae = Gt(null), Le = 20;
function Z(o) {
  let a = w(4), { children: i } = o, r;
  if (a[0] === S) r = [], a[0] = r;
  else r = a[0];
  let n = C(r), c;
  if (a[1] === S) c = { getDenials: () => n.current, recordDenial: (h) => {
    n.current = [h, ...n.current.slice(0, Le - 1)];
  }, removeDenial: (E) => {
    n.current = n.current.filter((T) => T !== E);
  } }, a[1] = c;
  else c = a[1];
  let _ = c, u;
  if (a[2] !== i) u = e(ae.Provider, { value: _, children: i }), a[2] = i, a[3] = u;
  else u = a[3];
  return u;
}
function xPe() {
  let o = be(ae);
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
function Gmr() {
  return be(le);
}
j();
function Ve(o, i) {
  let a = i / 100 * (o.length - 1), r = Math.floor(a), n = Math.ceil(a);
  if (r === n) return o[r];
  return o[r] + (o[n] - o[r]) * (a - r);
}
var Ue = 1024;
function zmr() {
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
      let h = [...c.reservoir].sort((E, T) => E - T);
      r[`${n}_p50`] = Ve(h, 50), r[`${n}_p95`] = Ve(h, 95), r[`${n}_p99`] = Ve(h, 99);
    }
    for (let [n, c] of a) r[n] = c.size;
    return r;
  } };
}
var ze = Gt(null);
function pe(o) {
  let r = w(8), { store: i, children: a } = o, n;
  if (r[0] === S) n = zmr(), r[0] = n;
  else n = r[0];
  let h = i ?? n, { storageV5: E } = Me(), T, _;
  if (r[1] !== E || r[2] !== h) T = () => {
    let u = false;
    let U = z() && E !== void 0 ? HM(async () => {
      let V = h.getAll();
      if (Object.keys(V).length > 0) await ch((p) => ({ ...p, lastSessionMetrics: V }), E);
      u = true;
    }) : void 0;
    let W = () => {
      if (u) {
        return;
      }
      let B = h.getAll();
      if (Object.keys(B).length > 0) $Kt((G) => ({ ...G, lastSessionMetrics: B }));
    };
    return process.on("exit", W), () => {
      U?.(), process.off("exit", W);
    };
  }, _ = [h, E], r[1] = E, r[2] = h, r[3] = T, r[4] = _;
  else T = r[3], _ = r[4];
  P(T, _);
  let A;
  if (r[5] !== a || r[6] !== h) A = e(ze.Provider, { value: h, children: a }), r[5] = a, r[6] = h, r[7] = A;
  else A = r[7];
  return A;
}
j();
class g8t extends $Pe {
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
function d6e(o) {
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
    let x = yBt(VC);
    return t(`[keybindings] KeybindingSetup initialized with ${x.bindings.length} bindings, ${x.warnings.length} warnings`), x;
  }), r = fn(), { addNotification: n } = To(), c = C(null), [h, E] = y(null), T = C(null), _ = C(/* @__PURE__ */ new Map()), u = C(/* @__PURE__ */ new Set()), V = C(/* @__PURE__ */ new Set()), p = C(null), [U] = y(H8t), B = de((x) => {
    u.current.add(x);
  }, []), G = de((x) => {
    u.current.delete(x);
  }, []), W = de(() => {
    T.current?.(), T.current = null;
  }, []), A = de((x) => {
    if (W(), x !== null) T.current = r.setTimeout(() => {
      t("[keybindings] Chord timeout - cancelling"), c.current = null, E(null), n({ key: "chord-timeout", kind: "feedback", text: `${qhe(x, U1())} cancelled — no next key within ${Ze / 1e3}s`, priority: "immediate", timeoutMs: 3e3 });
    }, Ze);
    c.current = x, E(x);
  }, [n, W, r]);
  return P(() => {
    mKs(VC);
    let x = VC.changed.subscribe((s) => {
      a(s), t(`[keybindings] Reloaded: ${s.bindings.length} bindings, ${s.warnings.length} warnings`);
    });
    return () => {
      x(), W();
    };
  }, [W]), e(iPt, { bindings: i, pendingChordRef: c, pendingChord: h, setPendingChord: A, activeContexts: u.current, registerActiveContext: B, unregisterActiveContext: G, handlerRegistryRef: _, preDispatchRef: V, singleKeyEventRef: p, keyHandlerRegistry: U, children: e(Jt, { bindings: i, pendingChordRef: c, setPendingChord: A, activeContexts: u.current, handlerRegistryRef: _, preDispatchRef: V, singleKeyEventRef: p, keyHandlerRegistry: U, children: o }) });
}
function tt(o) {
  let i = [...o], a = new Set(i.filter((r) => !r.fallback).map((r) => r.action));
  return [...i.filter((r) => !r.fallback), ...i.filter((r) => r.fallback && !a.has(r.action))];
}
function ot(o) {
  return !o.ctrl && !o.meta && !o.superKey;
}
var qt = YKe.map((o) => dre(o.key));
function rt(o) {
  let i = NTe(o);
  return i !== null && qt.some((a) => ZGe(a, i));
}
function Jt({ bindings: o, pendingChordRef: i, setPendingChord: a, activeContexts: r, handlerRegistryRef: n, preDispatchRef: c, singleKeyEventRef: h, keyHandlerRegistry: E, children: T }) {
  let _ = C([]), u = C(null), V = C("legacy"), p = de((s, d, f, R) => {
    for (let g of c.current) try {
      if (g.handler(s, d, f) === true) return R(), true;
    } catch (v) {
      l(v);
    }
    return false;
  }, [c]), U = (s, d, f, R) => {
    let g = n.current;
    if (!g) return false;
    let v = [...g.values()].flatMap((b) => [...b]), D = [...new Set(v.filter((b) => !b.fallback).map((b) => b.context)), ...r, "Global"], m = R7e(s, D, o, d), N = m.type === "match" && v.some((b) => !b.fallback && b.action === m.action) ? m.action : null, O = N === null ? [f] : [N, f], k = rt(s);
    for (let b of O) {
      let [I] = tt(g.get(b) ?? []).filter((M) => !(M.fallback && k));
      if (I) return I.handler(), Scn(b), R(), true;
    }
    return false;
  }, B = (s, d, f, R, g, v = false) => {
    let D = n.current, m = rt(s), N = /* @__PURE__ */ new Set();
    if (D) {
      for (let H of D.values()) for (let L of H) if (!(m && L.fallback)) N.add(L.context);
    }
    let O = [...N, ...r, "Global"], k = i.current, b = k !== null, I = R7e(s, O, o, k);
    switch (I.type) {
      case "chord_started":
        V.current = "legacy", a(I.pending), g();
        return;
      case "chord_cancelled":
        a(null), g();
        return;
      case "unbound":
        if (a(null), b) {
          g();
          return;
        }
        break;
      case "match":
        if (a(null), b) {
          U(s, k, I.action, g);
          return;
        }
        break;
      case "none":
        break;
    }
    if (!D) return;
    if (!v && p(d, f, R, g)) return;
    let M = /* @__PURE__ */ new Map(), J = tt([...D.values()].flatMap((H) => [...H])), K = ot(s) || m, re;
    for (let H of J) {
      if (!H.singleKey || H.fallback && K) continue;
      let L;
      if (H.fallback && !r.has(H.context)) re ??= (() => {
        let q = R7e(s, [...r, "Global"], o, null);
        return q.type === "match" ? q.action : null;
      })(), L = re;
      else L = M.get(H.context);
      if (L === void 0) {
        let q = R7e(s, [...r, H.context, "Global"], o, null);
        L = q.type === "match" ? q.action : null, M.set(H.context, L);
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
          Scn(L), g();
          return;
        }
      }
    }
  }, G = (s, d, f, R, g, v) => {
    let D = E, m = (I, M) => {
    };
    if (D.swallowAll.size > 0) {
      m(null, true), v();
      return;
    }
    if (i.current !== null && V.current === "legacy") {
      m(null, false), B(d, f, R, g, v);
      return;
    }
    let N = eo(s.target), O = i.current !== null && V.current === "scopeChain";
    if (N.length === 0 && D.preemptiveScopes.size === 0 && !O) {
      m(null, false), B(d, f, R, g, v);
      return;
    }
    let k = fe(s.target);
    if (D.preemptiveScopes.size > 0 && !O) {
      let I = [...D.preemptiveScopes.keys(), "Global"], M = K$r(d, I, o, null);
      if (M.type === "match" && k) {
        if (Ie(k, s, M.action, false, s.type === "wheel" ? "wheel" : "single")) {
          m(M.action, true), Scn(M.action);
          return;
        }
      }
    }
    if (!O && k?.attributes.textEntry === true && ot(d) && [...d.key].length === 1) {
      m(null, p(f, R, g, v));
      return;
    }
    if (O) {
      let I = i.current, M = K$r(d, _.current, o, I);
      if (M.type === "chord_started") {
        V.current = "scopeChain", a(M.pending), v(), m(null, true);
        return;
      }
      if (M.type === "match") {
        a(null);
        let J = u.current;
        u.current = null, _.current = [];
        let K = J && k && MW(J, CIn(k)) ? J : k;
        if (K) {
          if (Ie(K, s, M.action, true, "chord")) {
            m(M.action, true), Scn(M.action);
            return;
          }
        }
        let re = U(d, I, M.action, v);
        m(M.action, re);
        return;
      }
      u.current = null, _.current = [], m(null, false), B(d, f, R, g, v);
      return;
    }
    let b = K$r(d, N, o, null);
    switch (b.type) {
      case "chord_started":
        _.current = N, u.current = k ?? null, V.current = "scopeChain", a(b.pending), v(), m(null, true);
        return;
      case "match": {
        if (!k) {
          m(b.action, false), B(d, f, R, g, v);
          return;
        }
        if (p(f, R, g, v)) {
          a(null), m(b.action, true);
          return;
        }
        if (Ie(k, s, b.action, false, s.type === "wheel" ? "wheel" : "single")) {
          a(null), m(b.action, true), Scn(b.action);
          return;
        }
        m(b.action, false), B(d, f, R, g, v, true);
        return;
      }
      case "unbound":
        if (p(f, R, g, v)) {
          a(null), m(null, true);
          return;
        }
        a(null), m(null, false);
        return;
      default:
        m(null, false), B(d, f, R, g, v);
        return;
    }
  }, W = (s) => {
    let { input: d, key: f } = rfs(s);
    G(s, s, d, f, s.sequence, () => nt(s));
  }, A = (s) => {
    if (Zt(s.target, s.currentTarget, s.col, s.row)) return;
    let d = { name: s.deltaY < 0 ? "wheelup" : "wheeldown", key: "", ctrl: s.ctrl, shift: s.shift, meta: s.meta, superKey: false }, f = { upArrow: false, downArrow: false, leftArrow: false, rightArrow: false, pageDown: false, pageUp: false, wheelUp: s.deltaY < 0, wheelDown: s.deltaY > 0, home: false, end: false, return: false, escape: false, tab: false, backspace: false, delete: false, ctrl: s.ctrl, shift: s.shift, meta: s.meta, super: false };
    G(s, d, "", f, "", () => nt(s));
  }, x = C(null);
  return Xt(() => {
    if (!x.current) return;
    let s = VI(x.current), d = () => {
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
  }, []), e(qc, { ref: x, keybindingScope: "Global", tabIndex: -1, flexDirection: "column", flexGrow: 1, onKeyDownCapture: W, onWheelCapture: A, children: T });
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
    if (n._eventHandlers?.onWheel && (a === void 0 || r === void 0 || typeof n.attributes.tabIndex === "number" || W6(n, a, r) !== null)) return true;
    n = n.parentNode;
  }
  return false;
}
function eo(o) {
  let i = [], a = fe(o);
  while (a) {
    let r = a.attributes.keybindingScope;
    if (typeof r === "string" && cei(r)) i.push(r);
    a = a.parentNode;
  }
  return i;
}
function Ie(o, i, a, r, n) {
  let c = new g8t(a, { sourceEvent: i, isChordCompletion: r, origin: n });
  return jX.dispatch(o, c), c.consumed;
}
j();
j();
j();
var me = Gt(null);
function X(o) {
  let r = w(3), { children: i } = o, a = C(null), n;
  if (r[0] === S) n = { setHandler: (c) => {
    a.current = c;
  }, tryDelete: (h) => a.current?.(h) ?? false }, r[0] = n;
  else n = r[0];
  let E = n, T;
  if (r[1] !== i) T = e(me.Provider, { value: E, children: i }), r[1] = i, r[2] = T;
  else T = r[2];
  return T;
}
function h8t() {
  let o = be(me);
  if (!o) {
    throw ReferenceError("useInputSelectionBridge cannot be called outside of an <InputSelectionBridgeProvider /> (mounted by <AppStateProvider />)");
  }
  return o;
}
j();
class ge {
  queue = [];
  waiters = [];
  changed = De();
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
  if (a[0] === S) r = new ge(), a[0] = r;
  else r = a[0];
  let n = r, c;
  if (a[1] !== i) c = e(he.Provider, { value: n, children: i }), a[1] = i, a[2] = c;
  else c = a[2];
  return c;
}
function dno() {
  let o = be(he);
  if (!o) {
    throw Error("useMailbox must be used within a MailboxProvider");
  }
  return o;
}
j();
function c6e(o) {
  let i = Bo(o);
  P(() => Gi.subscribe((a, r) => {
    let n = pr();
    i(a, n, r);
  }), []);
}
j();
var Se = Gt(null);
function qie() {
  let o = be(Se);
  if (!o) throw ReferenceError("useSessionHooksRegistry cannot be called outside of an <AppStateProvider />");
  return o;
}
function Mo(Ge) {
  return Ge.expandedView === "tasks" ? { ...Ge, expandedView: "none" } : Ge;
}
var ve = Gt(false), Y = null;
function Re(o) {
  let u = w(86), { children: i, store: a, initialState: r, onChangeAppState: n, fleetNudgeStore: c, writesExitHandoff: h, sessionHooks: E } = o, T = h === void 0 ? false : h;
  if (be(ve)) {
    throw Error("AppStateProvider can not be nested within another AppStateProvider");
  }
  let V;
  if (u[0] !== r || u[1] !== n || u[2] !== a) V = () => a ?? Ps(r ?? jxt(), n), u[0] = r, u[1] = n, u[2] = a, u[3] = V;
  else V = u[3];
  let [p] = y(V), U;
  if (u[4] !== E) U = () => E ?? Ide(), u[4] = E, u[5] = U;
  else U = u[5];
  let [B] = y(U), G = Zi(), W;
  if (u[6] !== G) W = () => Uno(G), u[6] = G, u[7] = W;
  else W = u[7];
  let [A] = y(W), [x] = y(Nno), { storageV5: s } = Me(), d = $R(), f;
  if (u[8] !== s || u[9] !== p) f = () => new agr(s, globalThis, () => p.setState(Mo)), u[8] = s, u[9] = p, u[10] = f;
  else f = u[10];
  let [R] = y(f), g;
  if (u[11] !== c || u[12] !== s) g = () => c ?? new p6e({ storageV5: s }), u[11] = c, u[12] = s, u[13] = g;
  else g = u[13];
  let [v] = y(g), D;
  if (u[14] !== s) D = () => Y ? new Y.SessionRosterStore({ storageV5: s }) : null, u[14] = s, u[15] = D;
  else D = u[15];
  let [m] = y(D), [N] = y(T), [O] = y(s), k, b;
  if (u[16] !== O || u[17] !== p || u[18] !== N) k = () => {
    let I = N ? () => y8t(p.getState().tasks, O) : () => Vmr(p.getState().tasks);
    let M = bt(I);
    return () => {
      I(), M();
    };
  }, b = [p, N, O], u[16] = O, u[17] = p, u[18] = N, u[19] = k, u[20] = b;
  else k = u[19], b = u[20];
  P(k, b);
  let J;
  if (u[21] !== p) J = () => Alt.over(p), u[21] = p, u[22] = J;
  else J = u[22];
  let [K] = y(J), re;
  if (u[23] !== p) re = () => Q6.over(p), u[23] = p, u[24] = re;
  else re = u[24];
  let [H] = y(re), L;
  if (u[25] !== K || u[26] !== d?.mcpSessionWiring) L = () => d?.mcpSessionWiring.acquireConnections(K), u[25] = K, u[26] = d?.mcpSessionWiring, u[27] = L;
  else L = u[27];
  let q;
  if (u[28] !== K || u[29] !== d) q = [d, K], u[28] = K, u[29] = d, u[30] = q;
  else q = u[30];
  P(L, q);
  let se;
  if (u[31] !== p) se = () => fdt.over(p), u[31] = p, u[32] = se;
  else se = u[32];
  let [xe] = y(se), xt, Pt;
  if (u[33] !== xe || u[34] !== d) xt = () => {
    if (d === void 0) {
      return;
    }
    return xPt.of(d).acquire(xe);
  }, Pt = [d, xe], u[33] = xe, u[34] = d, u[35] = xt, u[36] = Pt;
  else xt = u[35], Pt = u[36];
  P(xt, Pt);
  let Ct, wt;
  if (u[37] !== K) Ct = () => OXr(() => K.get().clients), wt = [K], u[37] = K, u[38] = Ct, u[39] = wt;
  else Ct = u[38], wt = u[39];
  P(Ct, wt);
  let kt, Kt;
  if (u[40] !== K) kt = () => MXr((Wo, Go, Lo) => K.swapServerTools(Wo, Go, Lo)), Kt = [K], u[40] = K, u[41] = kt, u[42] = Kt;
  else kt = u[41], Kt = u[42];
  P(kt, Kt);
  let Mt;
  if (u[43] !== p.setState) Mt = () => k8t(p.setState), u[43] = p.setState, u[44] = Mt;
  else Mt = u[44];
  let Et;
  if (u[45] !== p) Et = [p], u[45] = p, u[46] = Et;
  else Et = u[46];
  P(Mt, Et);
  let At;
  if (u[47] !== d || u[48] !== s || u[49] !== p) At = ($o, ei, Uo) => {
    if (_8t(d, $o, p.setState, s, Uo), !Pn()) w8t(p.getState().toolPermissionContext, p.setState, p.getState().fastMode);
  }, u[47] = d, u[48] = s, u[49] = p, u[50] = At;
  else At = u[50];
  let Pe = Bo(At);
  c6e(Pe);
  let Dt;
  if (u[51] !== Pe) Dt = () => {
    b8t(() => Pe("policySettings"));
  }, u[51] = Pe, u[52] = Dt;
  else Dt = u[52];
  let Nt;
  if (u[53] === S) Nt = [], u[53] = Nt;
  else Nt = u[53];
  P(Dt, Nt);
  const We = d ?? null;
  let Ce;
  if (u[54] !== i || u[55] !== m) Ce = Y && m ? e(Y.SessionRosterStoreContext.Provider, { value: m, children: i }) : i, u[54] = i, u[55] = m, u[56] = Ce;
  else Ce = u[56];
  let we;
  if (u[57] !== Ce) we = e(Z, { children: e(X, { children: Ce }) }), u[57] = Ce, u[58] = we;
  else we = u[58];
  let ke;
  if (u[59] !== v || u[60] !== we) ke = e(iIn.Provider, { value: v, children: we }), u[59] = v, u[60] = we, u[61] = ke;
  else ke = u[61];
  let Ke;
  if (u[62] !== ke || u[63] !== R) Ke = e(lgr.Provider, { value: R, children: ke }), u[62] = ke, u[63] = R, u[64] = Ke;
  else Ke = u[64];
  let Ee;
  if (u[65] !== x || u[66] !== Ke) Ee = e(Olt.Provider, { value: x, children: Ke }), u[65] = x, u[66] = Ke, u[67] = Ee;
  else Ee = u[67];
  let Ae;
  if (u[68] !== A || u[69] !== Ee) Ae = e(ye, { children: e(kgr, { children: e(U6.Provider, { value: A, children: Ee }) }) }), u[68] = A, u[69] = Ee, u[70] = Ae;
  else Ae = u[70];
  let Ne;
  if (u[71] !== B || u[72] !== Ae) Ne = e(Se.Provider, { value: B, children: Ae }), u[71] = B, u[72] = Ae, u[73] = Ne;
  else Ne = u[73];
  let He;
  if (u[74] !== We || u[75] !== Ne) He = e(Rgr.Provider, { value: We, children: Ne }), u[74] = We, u[75] = Ne, u[76] = He;
  else He = u[76];
  let je;
  if (u[77] !== H || u[78] !== He) je = e(Pgr.Provider, { value: H, children: He }), u[77] = H, u[78] = He, u[79] = je;
  else je = u[79];
  let Te;
  if (u[80] !== K || u[81] !== je) Te = e(xgr.Provider, { value: K, children: je }), u[80] = K, u[81] = je, u[82] = Te;
  else Te = u[82];
  let Ht;
  if (u[83] !== p || u[84] !== Te) Ht = e(ve.Provider, { value: true, children: e(zI.Provider, { value: p, children: Te }) }), u[83] = p, u[84] = Te, u[85] = Ht;
  else Ht = u[85];
  return Ht;
}
function Z_(o) {
  let A = w(32), { session: i, host: a, project: r, storageV5: n, messageQueue: c, store: h, initialState: E, onChangeAppState: T, fleetNudgeStore: _, sessionHooks: u, writesExitHandoff: V, getFpsMetrics: p, stats: U, keybindings: B, children: G } = o, W = B === void 0 ? true : B, x;
  if (A[0] !== n) x = Awt(n), A[0] = n, A[1] = x;
  else x = A[1];
  let s = x, d;
  if (A[2] !== G || A[3] !== W) d = W ? e(d6e, { children: G }) : G, A[2] = G, A[3] = W, A[4] = d;
  else d = A[4];
  let f;
  if (A[5] !== d) f = e(Tgr, { children: e(Z, { children: e(X, { children: d }) }) }), A[5] = d, A[6] = f;
  else f = A[6];
  let R;
  if (A[7] !== _ || A[8] !== E || A[9] !== T || A[10] !== u || A[11] !== h || A[12] !== f || A[13] !== V) R = e(Re, { store: h, initialState: E, onChangeAppState: T, fleetNudgeStore: _, sessionHooks: u, writesExitHandoff: V, children: f }), A[7] = _, A[8] = E, A[9] = T, A[10] = u, A[11] = h, A[12] = f, A[13] = V, A[14] = R;
  else R = A[14];
  let g = R, v;
  if (A[15] !== g || A[16] !== a || A[17] !== r || A[18] !== i) v = i !== void 0 ? e(sgr, { session: i, children: g }) : a !== void 0 ? e(igr, { host: a, project: r, children: g }) : g, A[15] = g, A[16] = a, A[17] = r, A[18] = i, A[19] = v;
  else v = A[19];
  let D;
  if (A[20] !== U || A[21] !== v) D = e(pe, { store: U, children: v }), A[20] = U, A[21] = v, A[22] = D;
  else D = A[22];
  let m;
  if (A[23] !== p || A[24] !== D) m = e(ce, { getFpsMetrics: p, children: D }), A[23] = p, A[24] = D, A[25] = m;
  else m = A[25];
  let N = m, O;
  if (A[26] !== c || A[27] !== N) O = c === void 0 ? N : e(Ilt, { queue: c, children: N }), A[26] = c, A[27] = N, A[28] = O;
  else O = A[28];
  let k = O;
  if (n === void 0) {
    return k;
  }
  let b;
  if (A[29] !== k || A[30] !== s) b = e(aPt, { ...s, children: k }), A[29] = k, A[30] = s, A[31] = b;
  else b = A[31];
  return b;
}
export {
  Gmr,
  Z_,
  c6e,
  d6e,
  dno,
  g8t,
  h8t,
  qie,
  xPe,
  zmr
};
