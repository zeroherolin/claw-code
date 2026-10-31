// darwin/telemetry/chunk-2515359b.js — Claude Code 2.1.310（darwin）模块 chunk-7gez08f3.js
import { zc } from "../context/not-admin-owned.js";
import { Pt } from "../shared/async-hooks.5238.js";
import { EM } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Ut, k } from "../settings/global-config-and-gates.js";
function aZt() {
  return EM("autoContinueAtUsageLimit")[0];
}
function kFn(e) {
  return aZt() ?? e === "absent";
}
var u = "tengu_marble_heron";
function ikr() {
  let e = n();
  return o(e) ? e : {};
}
function V1e() {
  let e = n();
  return r(o(e) ? e.enabled : e);
}
function lZt() {
  return zc() && !Ut() && !Pt();
}
function iTs() {
  return lZt() && V1e();
}
function CFn() {
  return r(ikr().autoArm);
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
  CFn,
  V1e,
  aZt,
  iTs,
  ikr,
  kFn,
  lZt
};
