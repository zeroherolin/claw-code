// linux/agents/five-hour.js — Claude Code 2.1.310（linux）模块 chunk-f7000fnc.js
import { tt, Gc, Pn } from "../context/not-admin-owned.js";
import { Qs } from "../models/total-tokens-reminder.js";
import { Et, gn, cr, oA, Ut } from "../settings/global-config-and-gates.js";
import { LC, Ok } from "../core/conversation-engine.js";
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
function yae() {
  return Et() && gn()?.billingType !== "usage_based" && Qs() && Gc() && !Pn() && !Ut();
}
function T3e(e) {
  return yae() && LC(e) && e.rateLimitType === "five_hour";
}
var n = ["five_hour", "seven_day", "seven_day_overage_included", "seven_day_opus", "seven_day_sonnet"];
function qJt(e) {
  return yae() && LC(e) && e.rateLimitType !== void 0 && n.includes(e.rateLimitType);
}
function uve() {
  return t(cr(), oA());
}
function Act() {
  Ok({ agentId: tt(), mode: "prompt", priority: "later", value: i, uuid: o(), origin: { kind: "auto-continuation" }, isMeta: true, skipSlashCommands: true });
}
export {
  Act,
  T3e,
  qJt,
  uve,
  yae
};
