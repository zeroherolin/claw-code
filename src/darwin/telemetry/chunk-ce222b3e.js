// darwin/telemetry/chunk-ce222b3e.js — Claude Code 2.1.310（darwin）模块 chunk-8gsyba51.js
import { k, Wn } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
function aF() {
  return k("tengu_lantern_prism", false) || i.CLAUDE_CODE_LANTERN_PRISM;
}
function dE() {
  return mDo() || Wn("tengu_spicy_blossom", false) === true;
}
function mDo() {
  return Wn("tengu_encapsulated_pebble", true) !== false;
}
function zdn() {
  return !k("tengu_sharded_snowflake", false);
}
function b4n() {
  if (zdn()) return { enabled: true, text: "`claude plugin eval` is available in this session (generally available; no enablement setting is needed on any client, including Bedrock/Vertex/Foundry, LLM gateways, telemetry-disabled clients and CI runners)." };
  return { enabled: false, text: '`claude plugin eval` is generally available but switched OFF for this session by a server-side kill switch: it exists but prints "currently unavailable" here. If the user asks about it, say that plainly rather than that it does not exist; there is no setting or variable that turns it back on, and `claude update` plus a fresh session picks the command up again once the switch is lifted.' };
}
export {
  aF,
  b4n,
  dE,
  mDo,
  zdn
};
