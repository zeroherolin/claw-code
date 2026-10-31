// darwin/agents/five-hour.js — Claude Code 2.1.310（darwin）模块 chunk-d25rzfr7.js
import { tt, zc, Pn } from "../context/not-admin-owned.js";
import { Qs } from "../models/total-tokens-reminder.js";
import { vt, gn, or, iT, Ut } from "../settings/global-config-and-gates.js";
import { $A, Mk } from "../core/conversation-engine.js";
import { randomUUID as o } from "crypto";
function t(e, r) {
  switch (e) {
    case "pro":
      return "pro";
    case "max":
      switch (r) {
        case "default_claude_max_5x":
          return "max_5x";
        case "default_claude_max_20x":
          return "max_20x";
        default:
          return "max_other";
      }
    default:
      return "other";
  }
}
var i = "You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";
function Cae() {
  return vt() && gn()?.billingType !== "usage_based" && Qs() && zc() && !Pn() && !Ut();
}
function O9e(e) {
  return Cae() && $A(e) && e.rateLimitType === "five_hour";
}
var n = ["five_hour", "seven_day", "seven_day_overage_included", "seven_day_opus", "seven_day_sonnet"];
function oJt(e) {
  return Cae() && $A(e) && e.rateLimitType !== void 0 && n.includes(e.rateLimitType);
}
function hEe() {
  return t(or(), iT());
}
function xct() {
  Mk({ agentId: tt(), mode: "prompt", priority: "later", value: i, uuid: o(), origin: { kind: "auto-continuation" }, isMeta: true, skipSlashCommands: true });
}
export {
  Cae,
  O9e,
  hEe,
  oJt,
  xct
};
