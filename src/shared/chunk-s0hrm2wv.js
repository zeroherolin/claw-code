// shared/chunk-s0hrm2wv.js — Claude Code 2.1.310 模块 chunk-s0hrm2wv.js
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { dc } from "./chunk-j79dwkaq.js";
import { Ut } from "../settings/global-config-and-gates.27xj.js";
import { Dut } from "./chunk-jav2z436.js";
function ths() {
  return !Ut();
}
function vdt(o) {
  return o.filter((r) => !r.mcpErrorMetadata && !r.statusOnly && !r.startupFatal);
}
function kdt(o) {
  let r = [], i = [];
  for (let n of o) (n.statusOnly ? r : i).push(n);
  return { statusNotices: r, invalidEntries: i };
}
function Cdt(o) {
  for (let r of o) t(`Invalid setting skipped without dialog (automated session): ${dc(Dut(r.file))}: ${r.path}: ${r.message}`, { level: "error" });
}
export {
  Cdt,
  kdt,
  ths,
  vdt
};
