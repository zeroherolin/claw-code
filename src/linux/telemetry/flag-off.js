// linux/telemetry/flag-off.js — Claude Code 2.1.310（linux）模块 chunk-g49hnbqz.js
import { Ai, kn, k, cS, Gnt, Ij } from "../settings/global-config-and-gates.js";
async function n() {
  try {
    return await cS("tengu_violin_strad");
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
async function tI() {
  try {
    return await cS("tengu_violin_wood");
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
async function dzt() {
  try {
    return await tI() || await Gnt(a);
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
async function UU() {
  return await tI() && await n();
}
function pj() {
  return Gm() && t();
}
function b_e(e) {
  return e ? null : "flag_off";
}
function gz(e) {
  return b_e(e) === null;
}
function Mtt() {
  try {
    let { value: e, source: o } = kn("tengu_violin_wood", false);
    return e === false && Ij(o);
  } catch {
    return false;
  }
}
function jhn() {
  return Gm() && $bi("tengu_violin_wood");
}
async function cKo() {
  let e = performance.now();
  return await Ai().catch(() => null), Math.round(performance.now() - e);
}
function $bi(e) {
  try {
    return Ij(kn(e, false).source);
  } catch {
    return false;
  }
}
async function Fbi() {
  try {
    return await cS("tengu_violin_amati");
  } catch {
    return false;
  }
}
function c2r() {
  try {
    return k("tengu_violin_amati", false);
  } catch {
    return false;
  }
}
function Whn() {
  return Gm() && c2r();
}
async function czt() {
  let [e, o] = await Promise.all([tI(), Fbi()]);
  return e && o;
}
export {
  $bi,
  Fbi,
  Gm,
  Mtt,
  UU,
  Whn,
  b_e,
  c2r,
  cKo,
  czt,
  dzt,
  gz,
  jhn,
  pj,
  tI,
  zm
};
