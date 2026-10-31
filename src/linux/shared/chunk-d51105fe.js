// linux/shared/chunk-d51105fe.js — Claude Code 2.1.310（linux）模块 chunk-he7sp1nh.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { dc } from "./chunk-d2c47492.js";
import { Ut } from "../settings/global-config-and-gates.js";
import { xut } from "./chunk-7e54dc9d.js";
function bgs() {
  return !Ut();
}
function _dt(o) {
  return o.filter((r) => !r.mcpErrorMetadata && !r.statusOnly && !r.startupFatal);
}
function bdt(o) {
  let r = [], i = [];
  for (let n of o) (n.statusOnly ? r : i).push(n);
  return { statusNotices: r, invalidEntries: i };
}
function Sdt(o) {
  for (let r of o) t(`Invalid setting skipped without dialog (automated session): ${dc(xut(r.file))}: ${r.path}: ${r.message}`, { level: "error" });
}
export {
  Sdt,
  _dt,
  bdt,
  bgs
};
