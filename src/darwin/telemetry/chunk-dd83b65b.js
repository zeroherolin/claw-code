// darwin/telemetry/chunk-dd83b65b.js — Claude Code 2.1.310（darwin）模块 chunk-878p1b2j.js
import { or, k, dT } from "../settings/global-config-and-gates.js";
import { nqe } from "../shell/invalid-type.js";
import { zs } from "../shared/chunk-f98598c3.js";
import { o_ } from "../shared/chunk-4bbbe120.js";
import { UU } from "../shared/chunk-cb51a297.js";
import { gr } from "../shared/chunk-7e745eb7.js";
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
