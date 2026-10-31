// darwin/context/chunk-e87383ee.js — Claude Code 2.1.310（darwin）模块 chunk-86wg26m1.js
import { HG, DG, l_, dh, cg, Fx } from "../settings/global-config-and-gates.js";
function n() {
  let e = l_();
  if (e === "opus" && HG() && !Fx(dh())) return { alias: "opus[1m]", name: "Opus 1M", multiplier: 5 };
  else if (e === "sonnet" && DG() && !Fx(cg())) return { alias: "sonnet[1m]", name: "Sonnet 1M", multiplier: 5 };
  return null;
}
function mEe(e) {
  let t = n();
  if (!t) return null;
  switch (e) {
    case "warning":
      return `/model ${t.alias}`;
    case "tip":
      return `Tip: You have access to ${t.name} with ${t.multiplier}x more context`;
    default:
      return null;
  }
}
var M7t = "No messages to compact", KHn = "Compaction failed · conversation could not be reduced below the context limit", qHn = "Compaction failed · attached media exceeds size limits", H7t = "Error during compaction: ";
export {
  H7t,
  KHn,
  M7t,
  mEe,
  qHn
};
