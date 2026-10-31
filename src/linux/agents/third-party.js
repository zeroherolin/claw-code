// linux/agents/third-party.js — Claude Code 2.1.310（linux）模块 chunk-acd8w9vv.js
function r(n) {
  return n;
}
function b(n) {
  return r(n);
}
function c(n) {
  return r(n);
}
function ce(n) {
  return n == null ? void 0 : r(n);
}
function Vr(n) {
  return r(String(n));
}
function Wq(n) {
  return n == null ? void 0 : r(String(n));
}
function Ku(...n) {
  return r(n.join(""));
}
function Scr(n) {
  return r(n.join(","));
}
function Ka(n) {
  return r([...n].sort().join(","));
}
function $b(n, e) {
  return r(n.join(e ?? ","));
}
function Hn(n) {
  return r(n);
}
function Xw(n, e) {
  return e ? Hn(n) : void 0;
}
function Uss(n, e) {
  return n !== void 0 && e.includes(n) && /^[a-z0-9-]{1,64}$/.test(n) ? Hn(n) : b("none");
}
function dpe(n, e) {
  return e ? Hn(n) : b("custom");
}
function cpe(n) {
  return dpe(n.agentType, n.source === "built-in");
}
function gJr(n, e) {
  return e ? Hn(n) : b("third-party");
}
export {
  $b,
  Hn,
  Ka,
  Ku,
  Scr,
  Uss,
  Vr,
  Wq,
  Xw,
  b,
  c,
  ce,
  cpe,
  dpe,
  gJr
};
