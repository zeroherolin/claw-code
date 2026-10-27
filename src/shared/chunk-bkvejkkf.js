// shared/chunk-bkvejkkf.js — Claude Code 2.1.310 模块 chunk-bkvejkkf.js
import { Aie } from "../fs/async-hooks.9s1z.js";
function FV(t, e) {
  return (r) => t((S) => c(S, e, S[e], r(S[e])));
}
function n_n(t) {
  return (e) => t((r) => {
    let S = e(r);
    return Object.is(S, r) ? r : { ...r, ...S };
  });
}
function btr(t) {
  return { getSnapshot: t.getSnapshot, getState: t.getState, setState: n_n(t.setState), subscribe: t.subscribe };
}
function HAe(t, e, r) {
  return { get: () => t()[r], set: FV(e, r) };
}
function Aoe(t, e) {
  return (r, S) => ({ get: () => r()[t] ?? e, set: (a) => S((s) => {
    let n = s[t] ?? e;
    return c(s, t, n, a(n));
  }) });
}
function oti(t) {
  let e = t;
  return { get: () => e, set: (r) => {
    e = r(e);
  } };
}
function Ps(t, e) {
  let r = t, S = /* @__PURE__ */ new Set(), a = e && Aie(e), s = () => r;
  return { getSnapshot: s, getState: s, setState: (n) => {
    let o = r, i = n(o);
    if (Object.is(i, o)) return;
    r = i, a?.({ newState: i, oldState: o });
    for (let u of S) u();
  }, subscribe: (n) => {
    let o = Aie(n);
    return S.add(o), () => S.delete(o);
  } };
}
function c(t, e, r, S) {
  return Object.is(S, r) ? t : { ...t, [e]: S };
}
export {
  Aoe,
  FV,
  HAe,
  Ps,
  btr,
  n_n,
  oti
};
