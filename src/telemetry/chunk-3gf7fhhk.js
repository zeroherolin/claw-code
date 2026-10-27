// telemetry/chunk-3gf7fhhk.js — Claude Code 2.1.310 模块 chunk-3gf7fhhk.js
import { ub } from "../settings/global-config-and-gates.27xj.js";
import { oI } from "./flag-off.7h9d.js";
import { F5e } from "./chunk-y35h3phw.js";
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
