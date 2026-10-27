// telemetry/pewter-owl-model.6nbd.js — Claude Code 2.1.310 模块 chunk-6nbdfnt4.js
import { ye } from "../context/not-admin-owned.ersa.js";
import { it, Xe, k, nd } from "../settings/global-config-and-gates.27xj.js";
import { i } from "../shared/environment.9a41.js";
function o() {
  let e = nd()?.pewter_owl_model;
  if (typeof e === "string" && e !== "") return e;
  return k("tengu_pewter_owl_model", "");
}
function r(e) {
  if (i.CLAUDE_CODE_PEWTER_OWL !== void 0) return i.CLAUDE_CODE_PEWTER_OWL;
  if (ye()) return false;
  let t = o();
  if (t !== "" && !Xe(it()).includes(t)) return false;
  return k(`tengu_${e}`, false) || nd()?.[e] === true;
}
function cGe() {
  if (i.CLAUDE_CODE_PEWTER_OWL_TOOL !== void 0) return i.CLAUDE_CODE_PEWTER_OWL_TOOL;
  return r("pewter_owl_tool");
}
function LLo() {
  return r("pewter_owl_brief");
}
export {
  LLo,
  cGe
};
