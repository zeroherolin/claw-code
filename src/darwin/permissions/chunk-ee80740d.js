// darwin/permissions/chunk-ee80740d.js — Claude Code 2.1.310（darwin）模块 chunk-hh7ebhfq.js
import { ke } from "../context/not-admin-owned.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { Wz, Gz } from "../shell/not-serialized.js";
import { jz } from "../settings/chunk-16f4230b.js";
import { D$e } from "../shared/chunk-fda5d373.js";
import { M, u, Ue, T } from "../vendor/zod/string-format.js";
var i = "anthropic/renderUnderSessionRules";
function Evi() {
  return { experimental: { [i]: { v: 1 } } };
}
var z = f(() => u({ experimental: u({ [i]: u({ v: T(1) }) }) }));
var a = f(() => Ue({ v: T(1), permissionContext: Wz(), offersHandOff: M(), classifiesEveryCall: M(), grantsApply: M() }));
function DJr(r, n, t) {
  let e = Gz(r) ? void 0 : a().safeParse(r).data;
  if (e === void 0 || n === void 0) return;
  let { mode: s, ...o } = e.permissionContext;
  if (!(s === "default" || s === "dontAsk" || s === "acceptEdits" || s === "auto" && e.offersHandOff) || Object.values(o.alwaysAllowRules).some((l) => l.length > 0) || o.strippedDangerousRules !== void 0 || o.additionalWorkingDirectories.$map.length > 0 || o.trustedNetworkDirectories !== void 0) return;
  return { offersHandOff: e.offersHandOff, classifiesEveryCall: e.classifiesEveryCall, toolPermissionContext: { ...D$e(jz(e.permissionContext, n, ke(), t)), ...!e.grantsApply && { pollEventDeliveryGuard: true } } };
}
export {
  DJr,
  Evi
};
