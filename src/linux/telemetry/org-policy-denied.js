// linux/telemetry/org-policy-denied.js — Claude Code 2.1.310（linux）模块 chunk-587ndc4k.js
import { c } from "../agents/third-party.js";
import { a, Zs } from "./chunk-9097a12b.js";
import { I0, bR } from "../shared/chunk-f98598c3.js";
import { ose } from "../shared/chunk-d1292a44.js";
var n = "tengu_org_policy_denied";
function r(i, o) {
  let e = bR(i);
  if (e === null || e === "unregistered") return null;
  return { org_policy_key: c(i), org_policy_deny_kind: c(e), org_policy_taint_named: ose(I0()).length > 0, surface: c(o) };
}
function bx(i, o) {
  let e = r(i, o);
  if (e) a(n, e);
}
async function SU(i, o) {
  let e = r(i, o);
  if (e) await Zs(n, e);
}
export {
  SU,
  bx
};
