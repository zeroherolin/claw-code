// linux/hooks/chunk-20903237.js — Claude Code 2.1.310（linux）模块 chunk-1nnn2mdy.js
var o = new RegExp("^(?:settings|(?:plugin|skill)(?::[A-Za-z0-9][A-Za-z0-9._-]{0,63})?)$"), t = new RegExp("^[A-Za-z0-9][A-Za-z0-9._-]{0,63}@[A-Za-z0-9][A-Za-z0-9._-]{0,63}$");
function QMn(n) {
  return typeof n === "string" && o.test(n) ? n : void 0;
}
function ZMn(n) {
  return typeof n === "string" && t.test(n) ? n : void 0;
}
function jhs(n, e) {
  if (n === `PreToolUse:${e}`) return "PreToolUse";
  return n === "tool.check" ? "tool.check" : void 0;
}
function Whs(n) {
  return n === "PreToolUse" || n === "tool.check" ? n : void 0;
}
export {
  QMn,
  Whs,
  ZMn,
  jhs
};
