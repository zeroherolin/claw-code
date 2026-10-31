// linux/telemetry/inside-launch-dir.js — Claude Code 2.1.310（linux）模块 chunk-ptbywfjp.js
import { Wn } from "../settings/global-config-and-gates.js";
import { aDe } from "../git/bridge-child-tool-diff.js";
var t = "tengu_harp_forepillar";
function e6t() {
  return Wn(t, false) === true;
}
function Tas(e, r) {
  if (e === r) return "launch_dir";
  return aDe(e, r) ? "inside_launch_dir" : "elsewhere";
}
export {
  Tas,
  e6t
};
