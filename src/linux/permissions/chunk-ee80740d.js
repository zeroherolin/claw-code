// linux/permissions/chunk-ee80740d.js — Claude Code 2.1.310（linux）模块 chunk-17n5qmhn.js
import { ke } from "../context/not-admin-owned.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { D2, H2 } from "../shell/not-serialized.js";
import { M2 } from "../settings/chunk-16f4230b.js";
import { CFe } from "../shared/chunk-fda5d373.js";
import { M, u, Ue, A } from "../vendor/zod/string-format.js";
var i = "anthropic/renderUnderSessionRules";
function Hvi() {
  return { experimental: { [i]: { v: 1 } } };
}
var z = p(() => u({ experimental: u({ [i]: u({ v: A(1) }) }) }));
var a = p(() => Ue({ v: A(1), permissionContext: D2(), offersHandOff: M(), classifiesEveryCall: M(), grantsApply: M() }));
function YJr(r, n, t) {
  let e = H2(r) ? void 0 : a().safeParse(r).data;
  if (e === void 0 || n === void 0) return;
  let { mode: s, ...o } = e.permissionContext;
  if (!(s === "default" || s === "dontAsk" || s === "acceptEdits" || s === "auto" && e.offersHandOff) || Object.values(o.alwaysAllowRules).some((l) => l.length > 0) || o.strippedDangerousRules !== void 0 || o.additionalWorkingDirectories.$map.length > 0 || o.trustedNetworkDirectories !== void 0) return;
  return { offersHandOff: e.offersHandOff, classifiesEveryCall: e.classifiesEveryCall, toolPermissionContext: { ...CFe(M2(e.permissionContext, n, ke(), t)), ...!e.grantsApply && { pollEventDeliveryGuard: true } } };
}
export {
  Hvi,
  YJr
};
