// darwin/shared/chunk-922e3fb8.js — Claude Code 2.1.310（darwin）模块 chunk-s0p49rh9.js
var n = /* @__PURE__ */ new WeakMap();
var dVe = (o) => n.get(o);
function nti(o) {
  let t = Object.values(o ?? {}).flatMap((r) => (r ?? []).flatMap((s) => (s.hooks ?? []).map(dVe))), [e] = t;
  return t.every((r) => r === e) ? e : void 0;
}
function pLe(o, t) {
  if (t === void 0) return;
  for (let e of Object.values(o)) for (let r of e ?? []) for (let s of r.hooks ?? []) n.set(s, t);
}
export {
  dVe,
  nti,
  pLe
};
