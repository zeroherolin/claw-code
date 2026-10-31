// linux/shared/chunk-922e3fb8.js — Claude Code 2.1.310（linux）模块 chunk-bm0f9j8a.js
var n = /* @__PURE__ */ new WeakMap();
var eVe = (o) => n.get(o);
function _ei(o) {
  let t = Object.values(o ?? {}).flatMap((r) => (r ?? []).flatMap((s) => (s.hooks ?? []).map(eVe))), [e] = t;
  return t.every((r) => r === e) ? e : void 0;
}
function i0e(o, t) {
  if (t === void 0) return;
  for (let e of Object.values(o)) for (let r of e ?? []) for (let s of r.hooks ?? []) n.set(s, t);
}
export {
  _ei,
  eVe,
  i0e
};
