// linux/shared/downstream-unreachable.25bb.js — Claude Code 2.1.310（linux）模块 chunk-9ewvacsd.js
import { U } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
import { NV } from "../settings/global-config-and-gates.js";
import { Qc } from "../context/fetch-project-timeline.js";
var d = new W(() => ({ degraded: false }));
function t() {
  return d.of(U().host);
}
function ele(n, r) {
  if (n !== Qc) return;
  let e = t();
  if (r === void 0) {
    e.degraded = false;
    return;
  }
  let o = NV(r);
  if (o === "downstream_unreachable") e.degraded = true;
  else if (o === "downstream_error") e.degraded = false;
}
function aPs() {
  return t().degraded;
}
export {
  aPs,
  ele
};
