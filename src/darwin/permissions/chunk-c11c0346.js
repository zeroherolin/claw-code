// darwin/permissions/chunk-c11c0346.js — Claude Code 2.1.310（darwin）模块 chunk-akdh0dtt.js
import { sR } from "../context/tool-result-clearing-after-idle-server-report.js";
function $br(e) {
  return sR() ? e : void 0;
}
function sme(e) {
  return $br(e.proactivityLevel);
}
function MDn(e, t) {
  let i = $br(t);
  return { permissionMode: e ?? (i === void 0 ? void 0 : "default"), proactivityLevel: i };
}
export {
  $br,
  MDn,
  sme
};
