// shared/downstream-unreachable.bart.js — Claude Code 2.1.310 模块 chunk-bart73sq.js
import { U } from "../context/not-admin-owned.ersa.js";
import { W } from "./chunk-3y73jbfr.js";
import { qV } from "../settings/global-config-and-gates.27xj.js";
import { Zc } from "../context/fetch-project-timeline.g27d.js";
var d = new W(() => ({ degraded: false }));
function t() {
  return d.of(U().host);
}
function lle(n, r) {
  if (n !== Zc) return;
  let e = t();
  if (r === void 0) {
    e.degraded = false;
    return;
  }
  let o = qV(r);
  if (o === "downstream_unreachable") e.degraded = true;
  else if (o === "downstream_error") e.degraded = false;
}
function GPs() {
  return t().degraded;
}
export {
  GPs,
  lle
};
