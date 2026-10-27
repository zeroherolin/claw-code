// shared/chunk-vzgn6bk1.js — Claude Code 2.1.310 模块 chunk-vzgn6bk1.js
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { hqr, JV, kn } from "../settings/global-config-and-gates.27xj.js";
import { SRe } from "../telemetry/org-config-required.8xh6.js";
import { createHash as n } from "crypto";
function eXt() {
  let { value: e, source: r } = kn(SRe, null);
  return { flag: g(e), source: r };
}
function g(e) {
  let { flag: r, problem: o } = hqr(e);
  if (o !== void 0) t(`org-config gate: ${SRe} is malformed (${o}); treating as off`, { level: "warn" });
  return r;
}
function iCi(e = eXt, r = JV) {
  let { flag: o, source: a } = e();
  return o.enabled || a === "fallback" && r();
}
function Jso(e) {
  let r = n("sha256").update(`org_config_gate:${e}`).digest("hex");
  return parseInt(r.slice(0, 8), 16) % 100;
}
function Qso(e, r) {
  return e.enabled && r < e.percent;
}
export {
  Jso,
  Qso,
  eXt,
  iCi
};
