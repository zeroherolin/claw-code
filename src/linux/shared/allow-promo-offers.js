// linux/shared/allow-promo-offers.js — Claude Code 2.1.310（linux）模块 chunk-dzx0hez8.js
import { Ae } from "../models/total-tokens-reminder.js";
import { Et } from "../settings/global-config-and-gates.js";
import { Ere } from "../api/anthropic-client.js";
import { on } from "../auth/env-quad.js";
var XUe = "allow_promo_offers";
function _ae() {
  return !Ere() && Ae() === "firstParty" && Et() && on(XUe);
}
export {
  XUe,
  _ae
};
