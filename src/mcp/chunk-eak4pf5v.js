// mcp/chunk-eak4pf5v.js — Claude Code 2.1.310 模块 chunk-eak4pf5v.js
var QJn = ["mcp__Claude_Preview__", "mcp__Claude_Browser__", "mcp__remote-devices__Claude_Browser__"];
var P2o = "mcp__claude-device__chrome_", eoe = ["mcp__claude-in-chrome__", "mcp__Claude_in_Chrome__", "mcp__remote-devices__claude-in-chrome__", "mcp__remote-devices__Claude_in_Chrome__", "mcp__claude-device__chrome_", ...QJn];
function r(_) {
  if (!_.startsWith("mcp__claude-device__chrome_")) return null;
  let e = _.slice(27);
  return e === "" || e.startsWith("_") || e.includes("__") ? null : e;
}
function I2o(_) {
  let e = r(_);
  return e === null ? _ : "mcp__claude-in-chrome__" + e;
}
function u7s(_, e) {
  let n = r(_);
  return n !== null && e === "chrome_" + n ? n : e;
}
var t = new RegExp("(?<![\\w-])mcp__claude-device__chrome_[\\w-]*", "g");
function w2r(_) {
  return _.replace(t, (e) => e === "mcp__claude-device__chrome_" ? "mcp__claude-in-chrome__" : I2o(e));
}
function Gv(_) {
  return eoe.some((e) => _.startsWith(e));
}
function Tgn(_) {
  return QJn.some((e) => _.startsWith(e));
}
export {
  Gv,
  I2o,
  P2o,
  QJn,
  Tgn,
  eoe,
  u7s,
  w2r
};
