// linux/telemetry/chunk-47be584e.js — Claude Code 2.1.310（linux）模块 chunk-3r796kh5.js
import { kn, k, Gnt, Ij } from "../settings/global-config-and-gates.js";
import { tI, Mtt, jhn } from "./flag-off.js";
var GPe = "tengu_violin_willow";
function wOn() {
  try {
    let { value: e, source: o } = kn(GPe, false);
    return Ij(o) ? e === true : void 0;
  } catch {
    return;
  }
}
function D6e() {
  try {
    return k(GPe, false);
  } catch {
    return false;
  }
}
function H6e() {
  return jhn() && wOn() === true;
}
function EUe({ cloudClient: e }) {
  if (Mtt()) return "tengu_violin_wood";
  return e && wOn() === false ? GPe : void 0;
}
async function aoo({ cloudClient: e }) {
  try {
    return await tI() && (!e || await Gnt(GPe));
  } catch {
    return false;
  }
}
export {
  D6e,
  EUe,
  GPe,
  H6e,
  aoo,
  wOn
};
