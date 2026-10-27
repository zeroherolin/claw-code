// telemetry/inside-launch-dir.gfgn.js — Claude Code 2.1.310 模块 chunk-gfgnnwfp.js
import { Wn } from "../settings/global-config-and-gates.27xj.js";
import { f0e } from "../git/bridge-child-tool-diff.m7a8.js";
var t = "tengu_harp_forepillar";
function l5t() {
  return Wn(t, false) === true;
}
function Gas(e, r) {
  if (e === r) return "launch_dir";
  return f0e(e, r) ? "inside_launch_dir" : "elsewhere";
}
export {
  Gas,
  l5t
};
