// telemetry/flag-off.7h9d.js — Claude Code 2.1.310 模块 chunk-7h9djjg2.js
import { Ti, kn, k, ub, Jnt, Nj } from "../settings/global-config-and-gates.27xj.js";
async function n() {
  try {
    return await ub("tengu_violin_strad");
  } catch {
    return false;
  }
}
function t() {
  try {
    return k("tengu_violin_strad", false);
  } catch {
    return false;
  }
}
async function oI() {
  try {
    return await ub("tengu_violin_wood");
  } catch {
    return false;
  }
}
function Gm() {
  try {
    return k("tengu_violin_wood", false);
  } catch {
    return false;
  }
}
var a = "tengu_violin_maple";
async function vGt() {
  try {
    return await oI() || await Jnt(a);
  } catch {
    return false;
  }
}
function zm() {
  try {
    return Gm() || k(a, false);
  } catch {
    return false;
  }
}
async function zU() {
  return await oI() && await n();
}
function Sj() {
  return Gm() && t();
}
function A_e(e) {
  return e ? null : "flag_off";
}
function kG(e) {
  return A_e(e) === null;
}
function Utt() {
  try {
    let { value: e, source: o } = kn("tengu_violin_wood", false);
    return e === false && Nj(o);
  } catch {
    return false;
  }
}
function iyn() {
  return Gm() && wbi("tengu_violin_wood");
}
async function U6o() {
  let e = performance.now();
  return await Ti().catch(() => null), Math.round(performance.now() - e);
}
function wbi(e) {
  try {
    return Nj(kn(e, false).source);
  } catch {
    return false;
  }
}
async function Ebi() {
  try {
    return await ub("tengu_violin_amati");
  } catch {
    return false;
  }
}
function Ozr() {
  try {
    return k("tengu_violin_amati", false);
  } catch {
    return false;
  }
}
function ayn() {
  return Gm() && Ozr();
}
async function kGt() {
  let [e, o] = await Promise.all([oI(), Ebi()]);
  return e && o;
}
export {
  A_e,
  Ebi,
  Gm,
  Ozr,
  Sj,
  U6o,
  Utt,
  ayn,
  iyn,
  kG,
  kGt,
  oI,
  vGt,
  wbi,
  zU,
  zm
};
