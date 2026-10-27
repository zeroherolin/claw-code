// shared/allow-promo-offers.rze5.js — Claude Code 2.1.310 模块 chunk-rze580ex.js
import { Te } from "../models/total-tokens-reminder.psq3.js";
import { vt } from "../settings/global-config-and-gates.27xj.js";
import { Mre } from "../api/anthropic-client.7pf8.js";
import { on } from "../auth/env-quad.nmae.js";
var s1e = "allow_promo_offers";
function Tae() {
  return !Mre() && Te() === "firstParty" && vt() && on(s1e);
}
export {
  Tae,
  s1e
};
