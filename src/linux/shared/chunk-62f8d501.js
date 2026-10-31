// linux/shared/chunk-62f8d501.js — Claude Code 2.1.310（linux）模块 chunk-6hzmc7zs.js
function V9(n) {
  return n.replace(/[-_]/g, "").toLowerCase();
}
function Gir(n) {
  return new Map(n.map((t) => [V9(t), t]));
}
function mn(n) {
  if (typeof n !== "object" || n === null) return false;
  let t = Object.getPrototypeOf(n);
  return t === Object.prototype || t === null;
}
export {
  Gir,
  V9,
  mn
};
