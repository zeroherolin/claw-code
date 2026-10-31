// darwin/shared/chunk-d1292a44.js — Claude Code 2.1.310（darwin）模块 chunk-zmrs49f3.js
import { L } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
function Nai(n) {
  switch (n) {
    case "hipaa":
      return "HIPAA";
    case "zdr":
      return "ZDR (Zero Data Retention)";
    default:
      return t(`Unknown compliance_taint '${n}' from policyLimits`, { level: "warn" }), r;
  }
}
var r = "Organization policy", zkt = "Per your organization's policy, some features are limited", fsr = "HIPAA configured", o = /* @__PURE__ */ new Set(["hipaa", "zdr"]);
function pwn(n) {
  return o.has(n) || false;
}
function fwn(n) {
  let e = L(n), i = e.filter(pwn);
  if (i.length === e.length) return i;
  return t(`Unknown compliance_taint values from policyLimits (${e.length - i.length})`, { level: "warn" }), [...i, r];
}
var a = /* @__PURE__ */ new Set(["hipaa"]);
function use(n) {
  return L(n).filter((e) => a.has(e));
}
export {
  Nai,
  fsr,
  fwn,
  pwn,
  use,
  zkt
};
