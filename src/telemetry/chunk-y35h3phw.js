// telemetry/chunk-y35h3phw.js — Claude Code 2.1.310 模块 chunk-y35h3phw.js
import { kn, k, Jnt, Nj } from "../settings/global-config-and-gates.27xj.js";
import { oI, Utt, iyn } from "./flag-off.7h9d.js";
var XPe = "tengu_violin_willow";
function xOn() {
  try {
    let { value: e, source: o } = kn(XPe, false);
    return Nj(o) ? e === true : void 0;
  } catch {
    return;
  }
}
function F5e() {
  try {
    return k(XPe, false);
  } catch {
    return false;
  }
}
function $5e() {
  return iyn() && xOn() === true;
}
function IUe({ cloudClient: e }) {
  if (Utt()) return "tengu_violin_wood";
  return e && xOn() === false ? XPe : void 0;
}
async function boo({ cloudClient: e }) {
  try {
    return await oI() && (!e || await Jnt(XPe));
  } catch {
    return false;
  }
}
export {
  $5e,
  F5e,
  IUe,
  XPe,
  boo,
  xOn
};
