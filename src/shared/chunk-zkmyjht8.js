// shared/chunk-zkmyjht8.js — Claude Code 2.1.310 模块 chunk-zkmyjht8.js
import { He } from "../fs/async-hooks.9s1z.js";
import { ha } from "./chunk-6d9n0jaa.js";
import { grt } from "../settings/ax-sr-suggestion-nav.8qsa.js";
import { bdo } from "./chunk-tv0be1h0.js";
import { Gt, Se, kt, j } from "../vendor/react/chunk-s8vmszp2.js";
import { Ps } from "./chunk-bkvejkkf.js";
j();
function _v(o) {
  return o.open.findLast((e) => !e.userInvoked) ?? null;
}
function Mfe(o) {
  return o.open.findLast((e) => e.userInvoked === true) ?? null;
}
function aPt(o, e) {
  return o.open.some((s) => s.kind === e);
}
function fro(o = () => Date.now()) {
  let e = Ps({ open: [] }), s = [_v(e.getState()), Mfe(e.getState())];
  e.subscribe(() => {
    let t = [_v(e.getState()), Mfe(e.getState())];
    if (t.some((n, a) => n !== null && n !== s[a])) grt();
    s = t;
  });
  let l = He(), d = new bdo(), c = Number.NEGATIVE_INFINITY, i = /* @__PURE__ */ new Set(), g = (t, n) => `${t}:${n}`, p = (t) => {
    for (let n of i) if (n.startsWith(`${t}:`)) i.delete(n);
  }, r = (t) => {
    let { removed: n, closedBlockingTopBare: a } = v(e, t);
    if (!n) return false;
    if (a) c = Date.now();
    return p(t), true;
  }, u = { getState: e.getState, subscribe: e.subscribe, onClosed: l.subscribe, askTally: d, open(t) {
    if (t.countedAsk !== void 0) d.join(t.countedAsk);
    e.setState((n) => {
      let a = t.place === "queue" ? h(n.open, t) : void 0;
      if (a !== void 0) return { open: [...n.open.slice(0, a), t, ...n.open.slice(a)] };
      let f = _v(n), k = f?.holdsTop === true && b(f, t) && t.succeeds !== true;
      if ((t.place === "under" || k) && n.open.some((S) => S.userInvoked !== true)) return { open: [t, ...n.open] };
      let D = n.open.some((S) => b(S, t)) || t.userInvoked !== true && n.open.some((S) => S.userInvoked === true), m = t.userInvoked !== true && ha(o, c), y = D || m ? { ...t, shownAt: Date.now() } : t;
      return { open: [...n.open, y] };
    });
  }, update(t, n) {
    e.setState((a) => {
      let f = a.open.findIndex((D) => D.id === t);
      if (f === -1) return a;
      let k = a.open.slice();
      return k[f] = { ...a.open[f], payload: n, shownAt: Date.now() }, { open: k };
    });
  }, answer(t, n) {
    if (e.getState().open.find((a) => a.id === t)?.countedAsk?.settle(), !r(t)) return;
    l.emit({ id: t, type: "answered", result: n });
  }, dismiss(t) {
    if (!r(t)) return;
    l.emit({ id: t, type: "dismissed" });
  }, firstReveal(t, n) {
    if (!e.getState().open.some((f) => f.id === t)) return false;
    let a = g(t, n);
    if (i.has(a)) return false;
    return i.add(a), true;
  }, hasRevealed(t, n) {
    return i.has(g(t, n));
  }, dismissKind(t) {
    for (let n of e.getState().open) if (n.kind === t) u.dismiss(n.id);
  } };
  return u;
}
function v(o, e) {
  let s = false, l = false;
  return o.setState((d) => {
    let c = d.open.find((u) => u.id === e);
    if (!c) return d;
    s = true;
    let i = d.open.filter((u) => u !== c), g = d.open.filter((u) => b(u, c)), p = g.at(-1) === c, r = g.at(-2);
    if (l = p && !r && c.userInvoked !== true, !p || !r) return { open: i };
    return { open: i.map((u) => u === r ? { ...r, shownAt: Date.now(), revealSeq: (r.revealSeq ?? 0) + 1 } : u) };
  }), { removed: s, closedBlockingTopBare: l };
}
function h(o, e) {
  let s = e.askOrder ?? Number.POSITIVE_INFINITY, l = o.findIndex((i) => i.place !== void 0 && i.askOrder !== void 0 && i.askOrder <= s);
  if (l === -1) {
    let i = o.findLastIndex((r) => r.place === "queue" && r.askOrder !== void 0), g = o.findLastIndex((r) => r.place !== void 0 && r.askOrder !== void 0), p = o.slice(g + 1).some((r) => r.askOrder === void 0 && r.holdsTop !== true && r.userInvoked !== true);
    l = i !== -1 && !p ? g + 1 : o.findIndex((r) => r.place === void 0 && r.askOrder !== void 0);
  }
  if (l === -1) return;
  let d = o.findIndex((i) => i.place === void 0 && i.askOrder !== void 0);
  if (d !== -1 && d < l) l = d;
  return o.slice(l).some((i) => i.userInvoked !== true) ? l : void 0;
}
function b(o, e) {
  return o.userInvoked === true === (e.userInvoked === true);
}
var X5 = Gt(null);
function ng() {
  let o = Se(X5);
  if (!o) throw ReferenceError("useDialogStore cannot be called outside of a DialogStoreContext provider (mounted by <AppStateProvider />)");
  return o;
}
function yUe() {
  let o = ng(), e = () => o.getState().open.length > 0;
  return kt(o.subscribe, e, e);
}
function Qz() {
  let o = ng(), e = () => _v(o.getState()) !== null;
  return kt(o.subscribe, e, e);
}
function DA(o) {
  let e = ng(), s = () => aPt(e.getState(), o);
  return kt(e.subscribe, s, s);
}
function U8t() {
  let o = ng(), e = () => Mfe(o.getState());
  return kt(o.subscribe, e, e);
}
function Rps() {
  let o = ng(), e = () => _v(o.getState());
  return kt(o.subscribe, e, e);
}
function mro(o) {
  let e = ng(), s = () => Flt(_v(e.getState()), o);
  return kt(e.subscribe, s, s);
}
function Flt(o, e) {
  return o?.hideWhile?.includes(e) === true;
}
function kIn() {
  let o = ng(), e = () => _v(o.getState())?.kind;
  return kt(o.subscribe, e, e);
}
function n0(o) {
  let e = ng(), s = () => o(e.getState());
  return kt(e.subscribe, s, s);
}
export {
  DA,
  Flt,
  Mfe,
  Qz,
  Rps,
  U8t,
  X5,
  _v,
  aPt,
  fro,
  kIn,
  mro,
  n0,
  ng,
  yUe
};
