// linux/hooks/async-hooks.js — Claude Code 2.1.310（linux）模块 chunk-d8caf327.js
import { tf } from "../shared/chunk-b5845da6.js";
import { Zhn, UZn, BZn, NKe, y2r, WKo, tyn, _2r, lR, jLe, qZn, M7, bZs, KKe, cVo, yKr, Qbi, her, TZs, uVo, AZs, CZs, Zbi, RZs, xZs, fVo, pVo, PZs, tSi, uvt, ef, hoe, A_e, MZs, c5, oSi, DZs, CKr, gvt, QLe, RVo, aSi, xVo, zZs } from "../agents/tool-use-id.js";
import { $_, ZVo } from "./tool-name.js";
import { He, Lyn, Wer, QKr, Ger } from "../telemetry/chunk-1bb3c64e.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { jKr, GVo, wvt, Zzt } from "../commands/claude-code.js";
import { Ir } from "../shell/invalid-type.js";
import { H } from "../shared/chunk-7027e6d5.js";
var X = () => Ir(M7, (e, t) => bZs(t));
var U = "classic.PostToolUse";
var Z = "this could not be given to a hook that checks it, so it was not done";
var L = "this tool input could not be given to a hook that checks it, so the tool was not run";
function ee(e, t) {
  let o = { "classic.PreToolUse": { deny: L }, "classic.PermissionRequest": { decision: { behavior: "deny", message: L } } }, s = e === "tool.call" || e === "tool.check", f = e === "session.compact" || /* @__PURE__ */ ((p) => e === "session.append")(t) && !uvt(t) ? void 0 : jLe[e];
  return Object.hasOwn(jLe, e) ? f?.(s ? L : Z) : o[e];
}
var Yhn = "a hook that checks this result could not hand back its answer";
var te = /* @__PURE__ */ new Set(["tool.check", "agent.offer", "plugin.register", "classic.PreToolUse", "classic.PermissionRequest"]);
function NKo(e, t) {
  if (e === U) return { isNoted: true };
  let o = ee(e, t);
  if (o === void 0) return;
  if (te.has(e)) return { answer: o, afterNext: o };
  return e === "tool.call" ? { answer: o, afterNext: { deny: Yhn }, isWithholding: true } : { answer: o };
}
function oe(e) {
  let t = "kind" in e, o = "value" in e;
  return t ? "ui.input" : o ? "ui.select" : "ui.press";
}
function re(e, t) {
  let o = e.answering.getStore();
  return o !== void 0 && o.isLive && Date.now() < o.answersUntil && (o.event === "session.start" || o.environmentId === t) ? o.event : void 0;
}
var Oe = (e, t, o) => ({ event: oe(o), isLive: true, answersUntil: Date.now() + A_e, environmentId: t, sent: e });
function be(e, t) {
  let o = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakSet();
  return (i) => {
    let { stamp: n, environments: f } = e;
    if (n === void 0) return Zzt(i);
    let p = n, y = Atomics.load(p, gvt), v = /* @__PURE__ */ new Map(), w = (a) => Atomics.store(p, gvt, a ?? y);
    function l(a, T) {
      w(a);
      let R = T(), C = a !== void 0 && typeof R === "object" && R !== null;
      if (C) ZVo(R, new Set(($_(R) ? Object.values(R) : []).filter((r) => $_(r) && o.has(r))));
      if (C && Object.isFrozen(R)) o.set(R, a);
      return R;
    }
    function h(a, T) {
      if (!v.has(a)) {
        let R = [...f].filter(([, C]) => C.name === a);
        v.set(a, R.length === 1 ? R[0]?.[0] : void 0);
      }
      return l(v.get(a), T);
    }
    try {
      return i((a) => (w(a ? o.get(a) : void 0), a !== void 0 && s.has(a)), h, (a) => {
        let T = l(t, a);
        if (o.has(T)) s.add(T);
        return T;
      });
    } finally {
      Atomics.store(p, gvt, y);
    }
  };
}
function Y(e) {
  let t = e.serving.getStore();
  return t !== void 0 && e.servingLive.has(t.callId) ? t.callers : [];
}
function ne(e, t, o) {
  let { result: s, resolver: i } = o;
  if (tf(s)) throw new He("the ui.resolve answer is a Proxy or a vm context; a table of elements is a plain object");
  if (!H(s)) return s;
  let n = /* @__PURE__ */ Object.create(null);
  for (let f of Reflect.ownKeys(s)) {
    if (typeof f !== "string" || f === "then" || f === "__proto__") continue;
    let p = Reflect.getOwnPropertyDescriptor(s, f);
    if (p?.enumerable !== true) continue;
    let y = p.value, v = !tf(y) && typeof y === "function", w = v && qZn.nameOf(y) === f;
    n[f] = !v ? void 0 : w ? y : (l) => aSi(e.stamp, () => zZs(e.stamp, [...Y(e), i], () => t.invokeSync(y, l)));
  }
  return n;
}
import { AsyncLocalStorage as M } from "async_hooks";
var _e = (e, t, o) => ({ environments: /* @__PURE__ */ new Map(), loading: /* @__PURE__ */ new Map(), dispatching: new M(), framing: new M(), serving: new M(), answering: new M(), servingLive: /* @__PURE__ */ new Set(), hostOps: e, hostStreamOps: t, presses: /* @__PURE__ */ new Map(), taking: /* @__PURE__ */ new Map(), resolving: /* @__PURE__ */ new Map(), stamp: o });
function W({ environment: e, name: t, event: o, e: s }) {
  try {
    return e.argumentFor(s);
  } catch (i) {
    throw Ger(new He(`${t}: ${o}: could not be given its argument: ${d(i)}`));
  }
}
function G(e) {
  let t = /* @__PURE__ */ new WeakMap();
  return (o) => {
    let s = t.get(o) ?? W({ ...e, e: o });
    return t.set(o, s), s;
  };
}
var j = (e, t) => `${e}\0${t}`;
function We(e, t, o) {
  let s = e.taking.get(t);
  if (e.taking.delete(t), s === void 0) return;
  let i = /* @__PURE__ */ new Set();
  for (let { plugin: n, handle: f } of KKe(o)) for (let [p, y] of e.environments) if (y.name === n) i.add(j(p, f));
  for (let n of s) if (!i.has(n)) e.presses.delete(n);
}
function b(e, t) {
  let o = e.environments.get(t);
  if (o === void 0) throw new He(`environment ${t} is not loaded`);
  return o;
}
function ie(e, t) {
  let o = e.framing.getStore();
  return o?.environmentId === t ? o.registration : void 0;
}
var K = (e, t) => MZs({ next: () => t(() => e.next()), return: () => t(() => e.return(void 0)) });
function q(e, t) {
  let { name: o, nextTo: s } = e;
  for (let i of t) if (jKr(i) && !s.has(i)) throw new He(`${o}: next.to("${i}") refused: its hooks module does not spell ${GVo(i)} in a literal the scan reads (host rule)`);
}
function pe(e, t, o) {
  let { environmentId: s, name: i } = t, n = Zbi(t.result, i);
  return CZs(n) ? tSi({ tree: n, plugin: i, seen: o.seen, groups: o.groups, parts: o.parts, take: (f, p) => {
    let y = j(s, f);
    e.presses.set(y, p);
    let v = e.dispatching.getStore();
    if (v !== void 0) e.taking.get(v)?.add(y);
  } }) : n;
}
function fe(e, t, o) {
  let s = QKr(o) ? NKo(e, t) : void 0;
  return s === void 0 ? o : Wer(o, s);
}
function I(e, t, o) {
  let { environmentId: s, event: i, resolver: n, leftOut: f, ended: p, caughtAnswered: y, endedReached: v, withheld: w } = t, { environment: l, name: h, tier: a, isPersons: T, answersForEngine: R } = b(e, s), C = o ?? l.activation.registrations.get(i, f);
  if (!C) throw new He(`${h}: no ${i} handler`);
  let { run: _, catch: r } = C;
  function m(u, c) {
    return n !== void 0 ? ne(e, l, { result: u, resolver: n }) : i === "ui.render" ? pe(e, { environmentId: s, name: h, result: u }, c) : l.leaving(u, i);
  }
  function x(u, { seen: c, groups: N, parts: E, counted: A }) {
    function D(F) {
      if (i === "ui.render" && CZs(F) && !A.has(F)) {
        A.add(F);
        for (let O of KKe(F)) c.add(fVo(O.plugin, O.handle));
        for (let O of yKr(F)) c.add(cVo(O));
        for (let O of PZs(F)) c.add(pVo(O));
        for (let O of AZs(F)) c.add(uVo(O));
        for (let O of RZs(F)) c.add(O);
        for (let O of TZs(F)) {
          let Q = her(O);
          N.set(Q, (N.get(Q) ?? 0) + 1);
        }
        for (let O of xZs(F)) E.set(O, (E.get(O) ?? 0) + 1);
      }
      return F;
    }
    return l.nextFor(NKe({ call: async (F) => (l.freezeForNext(Lyn(F, h)), D(await u(F))), to: async (F, ...V) => (l.freezeForNext(Lyn(F, h)), q(b(e, s), V), D(await tyn(F, u, V))), signal: u.signal, is: u.is, event: u.event, origin: u.origin, trace: () => u.trace, budget: () => u.budget, caught: BZn(u) }), i);
  }
  let k = G({ environment: l, name: h, event: i });
  async function g(u, c, N) {
    let E = Qbi();
    try {
      return m(await u(k(c), x(N, E)), E);
    } catch (A) {
      throw fe(i, c, A);
    }
  }
  async function S(u, c, N) {
    if (v?.(s, c), u.called) await N(c).then(void 0, () => {
      return;
    });
    throw new He(u.reason);
  }
  return { name: h, environmentId: s, tier: a, ...T === false && { isVouched: true }, ...R && { answersForEngine: R }, applied: l.applyIn, ...r && { catch: async (u, c) => {
    let N = await g(r, u, c);
    if (N !== void 0) y?.(s);
    return N;
  } }, ...w && { withheld: w }, run: (u, c) => p === void 0 ? g(_, u, c) : S(p, u, c) };
}
function ue(e, t) {
  let o = e.answering.getStore();
  return o?.event === "ui.press" && o.environmentId === t ? o.sent : void 0;
}
function ce(e) {
  let t = e.serving.getStore();
  return t !== void 0 && e.servingLive.has(t.callId) ? t.callId : void 0;
}
var B = (e, t) => ({ environmentId: t, dispatchId: e.dispatching.getStore(), registration: ie(e, t), serving: ce(e), rootEvent: re(e, t), pressing: ue(e, t) });
var mt = (e, t) => (o, s, i) => {
  let n = () => e.hostOps({ ...B(e, t), op: o, args: s, signal: i });
  return QLe(o) ? n() : UZn(n);
};
var at = (e, t) => (o, s, i) => {
  let n = new AbortController(), f = i === void 0 ? n.signal : AbortSignal.any([i, n.signal]), p = K(e.hostStreamOps({ ...B(e, t), op: o, args: s, signal: f }), UZn);
  async function* y() {
    try {
      return yield* p;
    } catch (v) {
      if (n.signal.aborted) return;
      throw v;
    }
  }
  return DZs(c5(y), () => n.abort(new He(`${o}: the stream was let go`)));
};
function pt(e, { event: t, leftOut: o }, [s, i]) {
  let { environment: n, name: f } = b(e, s);
  return n.activation.registrations.catches(t, W({ environment: n, name: f, event: t, e: i }), o?.find((p) => p.environmentId === s)?.registrations);
}
function ct(e, t) {
  let { environmentId: o, request: s, core: i } = t, n = { surface: s.surface, component: s.component }, f = b(e, o);
  return lR({ e: n, handlers: s.environments.filter((p) => e.environments.has(p)).map((p) => I(e, { environmentId: p, event: "ui.resolve", resolver: o })), site: ef["ui.resolve"], bottom: () => Promise.resolve(i), origin: { plugin: f.name, tier: f.tier } });
}
var gt = (e, t) => {
  e.delete(t);
};
var kt = () => ({ event: "session.start", isLive: true, answersUntil: Number.POSITIVE_INFINITY });
function J(e, t) {
  let { environmentId: o, event: s, leftOut: i } = t, { environment: n, name: f, tier: p } = b(e, o), y = G({ environment: n, name: f, event: s });
  function v(l) {
    let h = l;
    return n.streamNextFor(y2r({ ..._2r(l), call: (a) => (n.freezeForNext(Lyn(a, f)), h(a)), to: (a, ...T) => (n.freezeForNext(Lyn(a, f)), q(b(e, o), T), WKo(a, h, T)) }));
  }
  let w = (l, h) => K(h, (a) => e.framing.run({ environmentId: o, registration: l }, a));
  return n.activation.registrations.streamClauses(s, i).map((l) => {
    if (l.kind === "value") return oSi(I(e, t, l.hook));
    let { registration: h } = l, a = (R) => async (C, _) => w(h, await R(y(C), v(_))), T = l.catch;
    return { name: f, environmentId: o, tier: p, run: a(l.open), ...T !== void 0 && { catch: a(T) } };
  });
}
function Et(e, { request: t, hostNext: o, signal: s }) {
  let { event: i, leftOut: n, environments: f } = t, p = f.flatMap((v) => J(e, { environmentId: v, event: i, leftOut: n?.find((w) => w.environmentId === v)?.registrations })), y = (v, w, l = wvt) => o(v, w, l);
  return { e: t.payload, handlers: p, site: hoe(i, t.raise), signal: s, isHopFold: true, bottom: y, origin: t.origin, floors: t.floors };
}
function $Ko({ hostOps: e, hostStreamOps: t, stamp: o, createEnvironment: s, servedBudgetMs: i = A_e }) {
  let n = _e(e, t, o), f = s ?? RVo, { environments: p, loading: y, dispatching: v, framing: w, serving: l, answering: h, presses: a } = n;
  async function T(r, m, x) {
    if (m === "ui.render") n.taking.set(r, /* @__PURE__ */ new Set());
    let k, S = m === "session.start" ? kt() : void 0;
    try {
      return k = await v.run(r, () => h.run(S, x)), k;
    } finally {
      if (S !== void 0) S.isLive = false;
      We(n, r, k);
    }
  }
  async function R(r, m, x) {
    let k = /* @__PURE__ */ new Set(), g = r.event === U ? { isGiven: false } : void 0, S = /* @__PURE__ */ new Map(), u;
    try {
      u = await T(r.id, r.event, () => lR({ e: r.payload, handlers: r.environments.map((E) => I(n, { environmentId: E, event: r.event, leftOut: r.leftOut?.find((A) => A.environmentId === E)?.registrations, ended: r.ended, caughtAnswered: (A) => k.add(A), ...g && { withheld: () => {
        g.isGiven = true;
      } }, endedReached: (A, D) => S.set(A, D) })), site: hoe(r.event, r.raise), signal: x, isHopFold: true, bottom: (E, A, D = wvt) => m(E, A, D), origin: r.origin, floors: r.floors, cutAt: r.cutAt }));
    } catch (E) {
      throw g?.isGiven === true ? Wer(E, { isNoted: true }) : E;
    }
    let c = [...S].find(([E]) => E === r.ended?.kept), N = c !== void 0 && !k.has(c[0]) && !pt(n, r, c);
    return { result: u, ...r.ended !== void 0 && { answered: [...k] }, ...N && { unmatched: true }, ...g?.isGiven === true && { withheld: true } };
  }
  let C = (r, m) => K(m, (x) => v.run(r, () => h.run(void 0, x)));
  return { currentDispatch: () => v.getStore(), opFailureOf: (r) => Array.from(p.values(), (m) => m.environment.opFailureOf(r)).find((m) => m !== void 0), ownsValue: (r) => Array.from(p.values()).some((m) => m.environment.ownsValue(r)), has: (r) => p.has(r), async load(r, m) {
    let x = new AbortController();
    y.set(r, x);
    let k;
    try {
      k = await f(mt(n, r), m, { stamp: o ? { view: o, environmentId: r } : void 0, signal: x.signal, hostStream: at(n, r), framed: (g, S) => w.run({ environmentId: r, registration: g }, S), blamedFor: () => Y(n)[0], blamedWalk: be(n, r) });
    } finally {
      y.delete(r);
    }
    return p.set(r, { environment: k, name: m.pluginName, tier: m.tier, isPersons: m.isPersons, nextTo: new Set(m.scan.nextTo ?? []), answersForEngine: xVo(m.modulePath) }), { registered: k.activation.registrations.registered };
  }, unload(r) {
    y.get(r)?.abort(), y.delete(r);
    let m = p.get(r);
    if (m) p.delete(r), n.resolving.delete(r), m.environment.dispose();
    for (let x of a.keys()) if (x.startsWith(j(r, 0).slice(0, -1))) a.delete(x);
  }, dispatch: R, dispatchStream: (r, m, x) => c5(C(r.id, CKr(Et(n, { request: r, hostNext: m, signal: x })))), link: (r) => I(n, r), linkStreams: (r) => J(n, r), within: T, withinSteps: C, async resolveTables(r, m) {
    let { environment: x } = b(n, r), k = (n.resolving.get(r) ?? 0) + 1;
    n.resolving.set(r, k);
    let g = X(), S = await Promise.all(m.map(async (c) => ({ surface: c.surface, component: c.component, answer: await ct(n, { environmentId: r, request: c, core: g[c.surface] }) })));
    if (p.get(r)?.environment === x && n.resolving.get(r) === k) x.storeResolved(S);
  }, build: (r, m, x) => {
    b(n, r).environment.activation.finalize(m, x);
  }, callInterface(r, { name: m, method: x, args: k }, g) {
    let { environment: S } = b(n, r);
    if (g) n.servingLive.add(g.callId);
    let c = g !== void 0 && i !== Number.POSITIVE_INFINITY ? setTimeout(gt, i, n.servingLive, g.callId) : void 0;
    function N() {
      if (clearTimeout(c), g) n.servingLive.delete(g.callId);
    }
    let E = () => zZs(o, g?.callers ?? [], () => S.activation.callInterface(m, x, S.cloneIn(k))).then(S.leaving);
    try {
      return Zhn.exit(() => w.run(void 0, () => h.run(void 0, () => l.run(g, E)))).finally(N);
    } catch (A) {
      throw N(), A;
    }
  }, press(r, { handle: m, sent: x }, k) {
    let { environment: g } = b(n, r), S = a.get(j(r, m));
    if (S === void 0) return Promise.reject(new He(`ui.press/ui.input/ui.select: no handler is held under handle ${m}`));
    let u = Oe(x, r, k);
    return w.run(void 0, () => h.run(u, () => g.invoke(S, [g.cloneIn(k)]).then(() => {
      return;
    }).finally(() => {
      u.isLive = false;
    })));
  }, releasePresses: (r, m) => {
    for (let x of m) a.delete(j(r, x));
  } };
}
function Xhn(e, t) {
  for (let o of e.values()) o.reject(new He(t));
  e.clear();
}
function m9(e, t) {
  let o = e.get(t);
  return e.delete(t), o;
}
var g2r = 0;
var jbi = 3;
var FKo = 2;
var UKo = 1;
export {
  $Ko,
  FKo,
  NKo,
  UKo,
  Xhn,
  Yhn,
  g2r,
  jbi,
  m9
};
