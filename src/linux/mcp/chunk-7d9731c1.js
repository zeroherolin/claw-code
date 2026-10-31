// linux/mcp/chunk-7d9731c1.js — Claude Code 2.1.310（linux）模块 chunk-g9040er0.js
var DQn = ["mcp__Claude_Preview__", "mcp__Claude_Browser__", "mcp__remote-devices__Claude_Browser__"];
var eGo = "mcp__claude-device__chrome_", qre = ["mcp__claude-in-chrome__", "mcp__Claude_in_Chrome__", "mcp__remote-devices__claude-in-chrome__", "mcp__remote-devices__Claude_in_Chrome__", "mcp__claude-device__chrome_", ...DQn];
function r(_) {
  if (!_.startsWith("mcp__claude-device__chrome_")) return null;
  let e = _.slice(27);
  return e === "" || e.startsWith("_") || e.includes("__") ? null : e;
}
function tGo(_) {
  let e = r(_);
  return e === null ? _ : "mcp__claude-in-chrome__" + e;
}
function CXs(_, e) {
  let n = r(_);
  return n !== null && e === "chrome_" + n ? n : e;
}
var t = new RegExp("(?<![\\w-])mcp__claude-device__chrome_[\\w-]*", "g");
function eGr(_) {
  return _.replace(t, (e) => e === "mcp__claude-device__chrome_" ? "mcp__claude-in-chrome__" : tGo(e));
}
function WE(_) {
  return qre.some((e) => _.startsWith(e));
}
function cgn(_) {
  return DQn.some((e) => _.startsWith(e));
}
export {
  CXs,
  DQn,
  WE,
  cgn,
  eGo,
  eGr,
  qre,
  tGo
};
