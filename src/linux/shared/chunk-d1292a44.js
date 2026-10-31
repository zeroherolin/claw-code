// linux/shared/chunk-d1292a44.js — Claude Code 2.1.310（linux）模块 chunk-hk0dvhmb.js
import { L } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
function Zii(n) {
  switch (n) {
    case "hipaa":
      return "HIPAA";
    case "zdr":
      return "ZDR (Zero Data Retention)";
    default:
      return t(`Unknown compliance_taint '${n}' from policyLimits`, { level: "warn" }), r;
  }
}
var r = "Organization policy", Nkt = "Per your organization's policy, some features are limited", Yor = "HIPAA configured", o = /* @__PURE__ */ new Set(["hipaa", "zdr"]);
function XSn(n) {
  return o.has(n) || false;
}
function JSn(n) {
  let e = L(n), i = e.filter(XSn);
  if (i.length === e.length) return i;
  return t(`Unknown compliance_taint values from policyLimits (${e.length - i.length})`, { level: "warn" }), [...i, r];
}
var a = /* @__PURE__ */ new Set(["hipaa"]);
function ose(n) {
  return L(n).filter((e) => a.has(e));
}
export {
  JSn,
  Nkt,
  XSn,
  Yor,
  Zii,
  ose
};
