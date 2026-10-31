// darwin/shared/downstream-unreachable.25bb.js — Claude Code 2.1.310（darwin）模块 chunk-bart73sq.js
import { U } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
import { qV } from "../settings/global-config-and-gates.js";
import { Zc } from "../context/fetch-project-timeline.js";
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
