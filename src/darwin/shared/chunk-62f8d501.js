// darwin/shared/chunk-62f8d501.js — Claude Code 2.1.310（darwin）模块 chunk-1a0taxx3.js
function tX(n) {
  return n.replace(/[-_]/g, "").toLowerCase();
}
function lar(n) {
  return new Map(n.map((t) => [tX(t), t]));
}
function mn(n) {
  if (typeof n !== "object" || n === null) return false;
  let t = Object.getPrototypeOf(n);
  return t === Object.prototype || t === null;
}
export {
  lar,
  mn,
  tX
};
