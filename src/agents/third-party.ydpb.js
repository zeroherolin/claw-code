// agents/third-party.ydpb.js — Claude Code 2.1.310 模块 chunk-ydpbzmt4.js
function r(n) {
  return n;
}
function S(n) {
  return r(n);
}
function c(n) {
  return r(n);
}
function ce(n) {
  return n == null ? void 0 : r(n);
}
function Kr(n) {
  return r(String(n));
}
function ZK(n) {
  return n == null ? void 0 : r(String(n));
}
function Vu(...n) {
  return r(n.join(""));
}
function Lcr(n) {
  return r(n.join(","));
}
function Ka(n) {
  return r([...n].sort().join(","));
}
function $S(n, e) {
  return r(n.join(e ?? ","));
}
function Dn(n) {
  return r(n);
}
function Jw(n, e) {
  return e ? Dn(n) : void 0;
}
function wis(n, e) {
  return n !== void 0 && e.includes(n) && /^[a-z0-9-]{1,64}$/.test(n) ? Dn(n) : S("none");
}
function hfe(n, e) {
  return e ? Dn(n) : S("custom");
}
function yfe(n) {
  return hfe(n.agentType, n.source === "built-in");
}
function U7r(n, e) {
  return e ? Dn(n) : S("third-party");
}
export {
  $S,
  Dn,
  Jw,
  Ka,
  Kr,
  Lcr,
  S,
  U7r,
  Vu,
  ZK,
  c,
  ce,
  hfe,
  wis,
  yfe
};
