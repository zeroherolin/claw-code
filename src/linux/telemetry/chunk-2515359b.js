// linux/telemetry/chunk-2515359b.js — Claude Code 2.1.310（linux）模块 chunk-2x8g8t4c.js
import { Gc } from "../context/not-admin-owned.js";
import { Pt } from "../shared/async-hooks.5238.js";
import { hM } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Ut, k } from "../settings/global-config-and-gates.js";
function J7t() {
  return hM("autoContinueAtUsageLimit")[0];
}
function u$n(e) {
  return J7t() ?? e === "absent";
}
var u = "tengu_marble_heron";
function zEr() {
  let e = n();
  return o(e) ? e : {};
}
function NBe() {
  let e = n();
  return r(o(e) ? e.enabled : e);
}
function Q7t() {
  return Gc() && !Ut() && !Pt();
}
function ITs() {
  return Q7t() && NBe();
}
function f$n() {
  return r(zEr().autoArm);
}
function n() {
  return k(u, {});
}
function o(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function r(e) {
  if (e === void 0) return true;
  if (typeof e === "string") {
    let t = e.trim().toLowerCase();
    return t !== "" && t !== "false" && t !== "0";
  }
  return Boolean(e);
}
export {
  ITs,
  J7t,
  NBe,
  Q7t,
  f$n,
  u$n,
  zEr
};
