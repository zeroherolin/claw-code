// linux/hooks/chunk-180a6084.js — Claude Code 2.1.310（linux）模块 chunk-eq8vmbm3.js
var r, a;
function n() {
  if (r !== void 0 && a === "external") return r;
  return a = "external", r = [], r;
}
function Vds() {
  return n().map((e) => e.id);
}
function qds(e) {
  for (let t of n()) {
    let o = t.digests.find((i) => i.sha256 === e);
    if (o) return { template: t, label: o.label };
  }
  return;
}
function Oat(e) {
  return n().find((t) => t.id === e);
}
function Nxn(e) {
  return e.event === "PreToolUse";
}
function $xn() {
  return true;
}
export {
  $xn,
  Nxn,
  Oat,
  Vds,
  qds
};
