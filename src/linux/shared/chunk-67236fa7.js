// linux/shared/chunk-67236fa7.js — Claude Code 2.1.310（linux）模块 chunk-5b88xb0z.js
import { bie } from "../fs/async-hooks.93b1.js";
function CV(t, e) {
  return (r) => t((S) => c(S, e, S[e], r(S[e])));
}
function Fyn(t) {
  return (e) => t((r) => {
    let S = e(r);
    return Object.is(S, r) ? r : { ...r, ...S };
  });
}
function ntr(t) {
  return { getSnapshot: t.getSnapshot, getState: t.getState, setState: Fyn(t.setState), subscribe: t.subscribe };
}
function RCe(t, e, r) {
  return { get: () => t()[r], set: CV(e, r) };
}
function Soe(t, e) {
  return (r, S) => ({ get: () => r()[t] ?? e, set: (a) => S((s) => {
    let n = s[t] ?? e;
    return c(s, t, n, a(n));
  }) });
}
function Sei(t) {
  let e = t;
  return { get: () => e, set: (r) => {
    e = r(e);
  } };
}
function Ps(t, e) {
  let r = t, S = /* @__PURE__ */ new Set(), a = e && bie(e), s = () => r;
  return { getSnapshot: s, getState: s, setState: (n) => {
    let o = r, i = n(o);
    if (Object.is(i, o)) return;
    r = i, a?.({ newState: i, oldState: o });
    for (let u of S) u();
  }, subscribe: (n) => {
    let o = bie(n);
    return S.add(o), () => S.delete(o);
  } };
}
function c(t, e, r, S) {
  return Object.is(S, r) ? t : { ...t, [e]: S };
}
export {
  CV,
  Fyn,
  Ps,
  RCe,
  Sei,
  Soe,
  ntr
};
