// darwin/telemetry/chunk-c75040f5.js — Claude Code 2.1.310（darwin）模块 chunk-3gf7fhhk.js
import { ub } from "../settings/global-config-and-gates.js";
import { oI } from "./flag-off.js";
import { F5e } from "./chunk-47be584e.js";
var n = "tengu_violin_fret";
async function cgi() {
  try {
    return await ub(n);
  } catch {
    return false;
  }
}
async function dQr() {
  return F5e() && await oI() && await cgi();
}
export {
  cgi,
  dQr
};
