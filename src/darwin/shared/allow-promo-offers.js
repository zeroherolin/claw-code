// darwin/shared/allow-promo-offers.js — Claude Code 2.1.310（darwin）模块 chunk-rze580ex.js
import { Te } from "../models/total-tokens-reminder.js";
import { vt } from "../settings/global-config-and-gates.js";
import { Mre } from "../api/anthropic-client.js";
import { on } from "../auth/env-quad.js";
var s1e = "allow_promo_offers";
function Tae() {
  return !Mre() && Te() === "firstParty" && vt() && on(s1e);
}
export {
  Tae,
  s1e
};
