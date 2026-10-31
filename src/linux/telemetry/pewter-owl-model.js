// linux/telemetry/pewter-owl-model.js — Claude Code 2.1.310（linux）模块 chunk-57dzd89j.js
import { ye } from "../context/not-admin-owned.js";
import { st, Xe, k, nd } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
function o() {
  let e = nd()?.pewter_owl_model;
  if (typeof e === "string" && e !== "") return e;
  return k("tengu_pewter_owl_model", "");
}
function r(e) {
  if (i.CLAUDE_CODE_PEWTER_OWL !== void 0) return i.CLAUDE_CODE_PEWTER_OWL;
  if (ye()) return false;
  let t = o();
  if (t !== "" && !Xe(st()).includes(t)) return false;
  return k(`tengu_${e}`, false) || nd()?.[e] === true;
}
function eze() {
  if (i.CLAUDE_CODE_PEWTER_OWL_TOOL !== void 0) return i.CLAUDE_CODE_PEWTER_OWL_TOOL;
  return r("pewter_owl_tool");
}
function l0o() {
  return r("pewter_owl_brief");
}
export {
  eze,
  l0o
};
