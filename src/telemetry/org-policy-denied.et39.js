// telemetry/org-policy-denied.et39.js — Claude Code 2.1.310 模块 chunk-et395m1j.js
import { c } from "../agents/third-party.ydpb.js";
import { a, Zs } from "./chunk-wq923bwc.js";
import { HL, ER } from "../shared/chunk-cg45s1mf.js";
import { use } from "../shared/chunk-zmrs49f3.js";
var n = "tengu_org_policy_denied";
function r(i, o) {
  let e = ER(i);
  if (e === null || e === "unregistered") return null;
  return { org_policy_key: c(i), org_policy_deny_kind: c(e), org_policy_taint_named: use(HL()).length > 0, surface: c(o) };
}
function Ex(i, o) {
  let e = r(i, o);
  if (e) a(n, e);
}
async function EU(i, o) {
  let e = r(i, o);
  if (e) await Zs(n, e);
}
export {
  EU,
  Ex
};
