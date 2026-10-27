// telemetry/chunk-878p1b2j.js — Claude Code 2.1.310 模块 chunk-878p1b2j.js
import { or, k, dT } from "../settings/global-config-and-gates.27xj.js";
import { nqe } from "../shell/invalid-type.qnva.js";
import { zs } from "../shared/chunk-cg45s1mf.js";
import { o_ } from "../shared/chunk-4yx6r993.js";
import { UU } from "../shared/chunk-ppcjex8g.js";
import { gr } from "../shared/chunk-7bt27r62.js";
var t = { enabled: false, pixelValidation: false, clipboardPasteMultiline: true, mouseAnimation: true, hideBeforeAction: true, autoTargetDisplay: true, clipboardGuard: true, maskFailClosed: true, adaptiveResolution: false, coordinateMode: "pixels" };
function o() {
  return { ...t, ...dT("tengu_malort_pedway", t) };
}
function n() {
  let e = or();
  return e === "max" || e === "pro";
}
function sUn() {
  if (zs("hipaa")) return false;
  return n() && o().enabled;
}
function gRs() {
  return nqe() && !UU() && !zs("hipaa") && true && k("tengu_dapper_acorn", false);
}
function bCr() {
  return gr("tengu_clever_yeti", { safe: true });
}
function wCr() {
  let { enabled: e, coordinateMode: a, ...r } = o();
  return r;
}
function spt() {
  let e = o_();
  return e.frozenCoordinateMode ??= o().coordinateMode, e.frozenCoordinateMode;
}
export {
  bCr,
  gRs,
  sUn,
  spt,
  wCr
};
