// darwin/telemetry/org-policy-denied.js — Claude Code 2.1.310（darwin）模块 chunk-et395m1j.js
import { c } from "../agents/third-party.js";
import { a, Zs } from "./chunk-9097a12b.js";
import { HL, ER } from "../shared/chunk-f98598c3.js";
import { use } from "../shared/chunk-d1292a44.js";
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
