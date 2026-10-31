// darwin/remote/chunk-6cda5263.js — Claude Code 2.1.310（darwin）模块 chunk-12vv3hpq.js
import { k } from "../settings/global-config-and-gates.js";
import { zm } from "../telemetry/flag-off.js";
var e = "tengu_violin_bridgepin";
function o() {
  try {
    return k(e, false);
  } catch {
    return false;
  }
}
function Wie() {
  return zm() && o();
}
export {
  Wie
};
