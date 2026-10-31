// linux/shared/chunk-c4549158.js — Claude Code 2.1.310（linux）模块 chunk-tdrdhd0g.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Yqr, UV, kn } from "../settings/global-config-and-gates.js";
import { pRe } from "../telemetry/org-config-required.js";
import { createHash as n } from "crypto";
function I9t() {
  let { value: e, source: r } = kn(pRe, null);
  return { flag: g(e), source: r };
}
function g(e) {
  let { flag: r, problem: o } = Yqr(e);
  if (o !== void 0) t(`org-config gate: ${pRe} is malformed (${o}); treating as off`, { level: "warn" });
  return r;
}
function vki(e = I9t, r = UV) {
  let { flag: o, source: a } = e();
  return o.enabled || a === "fallback" && r();
}
function iso(e) {
  let r = n("sha256").update(`org_config_gate:${e}`).digest("hex");
  return parseInt(r.slice(0, 8), 16) % 100;
}
function aso(e, r) {
  return e.enabled && r < e.percent;
}
export {
  I9t,
  aso,
  iso,
  vki
};
