// linux/telemetry/chunk-c75040f5.js — Claude Code 2.1.310（linux）模块 chunk-bwb81qzg.js
import { cS } from "../settings/global-config-and-gates.js";
import { tI } from "./flag-off.js";
import { D6e } from "./chunk-47be584e.js";
var n = "tengu_violin_fret";
async function Ami() {
  try {
    return await cS(n);
  } catch {
    return false;
  }
}
async function LQr() {
  return D6e() && await tI() && await Ami();
}
export {
  Ami,
  LQr
};
