// darwin/hooks/chunk-180a6084.js — Claude Code 2.1.310（darwin）模块 chunk-9jkyv6ws.js
var r, a;
function n() {
  if (r !== void 0 && a === "external") return r;
  return a = "external", r = [], r;
}
function kcs() {
  return n().map((e) => e.id);
}
function Ccs(e) {
  for (let t of n()) {
    let o = t.digests.find((i) => i.sha256 === e);
    if (o) return { template: t, label: o.label };
  }
  return;
}
function $at(e) {
  return n().find((t) => t.id === e);
}
function Zxn(e) {
  return e.event === "PreToolUse";
}
function ePn() {
  return true;
}
export {
  $at,
  Ccs,
  Zxn,
  ePn,
  kcs
};
