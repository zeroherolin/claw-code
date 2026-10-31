// linux/telemetry/omelette-grant-watch.js — Claude Code 2.1.310（linux）模块 chunk-6drae2ee.js
import { k } from "../settings/global-config-and-gates.js";
import { _t } from "../artifacts/cowritten-artifact-html.js";
import { Fn } from "../models/total-tokens-reminder.js";
import { on } from "../auth/env-quad.js";
var e = "tengu_omelette_fouet";
function WUe() {
  if (!on("allow_design_sync")) return false;
  if (_t()) return false;
  if (!Fn()) return false;
  return k(e, false);
}
var r = "tengu_omelette_grant_watch";
function Kbs() {
  return k(r, false);
}
export {
  Kbs,
  WUe
};
