// darwin/hooks/chunk-20903237.js — Claude Code 2.1.310（darwin）模块 chunk-6x53pwsc.js
var o = new RegExp("^(?:settings|(?:plugin|skill)(?::[A-Za-z0-9][A-Za-z0-9._-]{0,63})?)$"), t = new RegExp("^[A-Za-z0-9][A-Za-z0-9._-]{0,63}@[A-Za-z0-9][A-Za-z0-9._-]{0,63}$");
function f0n(n) {
  return typeof n === "string" && o.test(n) ? n : void 0;
}
function m0n(n) {
  return typeof n === "string" && t.test(n) ? n : void 0;
}
function pys(n, e) {
  if (n === `PreToolUse:${e}`) return "PreToolUse";
  return n === "tool.check" ? "tool.check" : void 0;
}
function fys(n) {
  return n === "PreToolUse" || n === "tool.check" ? n : void 0;
}
export {
  f0n,
  fys,
  m0n,
  pys
};
