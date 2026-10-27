// auth/allow-plugin-publish.emxc.js — Claude Code 2.1.310 模块 chunk-emxce8e9.js
import { fd, Y_e, ua, k } from "../settings/global-config-and-gates.27xj.js";
import { AW, Pn } from "../context/not-admin-owned.ersa.js";
import { Sr } from "../models/claude-3-5-sonnet.21mz.js";
import { i } from "../shared/environment.9a41.js";
import { St } from "../artifacts/cowritten-artifact-html.thm2.js";
import { yW, Zkn, FM } from "../remote/local-agent.we9a.js";
import { Te } from "../models/total-tokens-reminder.psq3.js";
import { on } from "./env-quad.nmae.js";
import { GQe } from "../plugins/claudeai-plugins-sync-enabled.61rf.js";
var l = "tengu_copper_gazette";
var x = false;
var tbr = () => k(l, x) === true;
var uco = (o) => o.find((u) => u !== false) || void 0;
function E() {
  let { source: o } = ua();
  return o === "CLAUDE_CODE_OAUTH_TOKEN" || o === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR";
}
var _ = () => ua().source === "CCR_OAUTH_TOKEN_FILE" && AW() && fd();
var g = () => Zkn() && !FM() && fd() && (E() || _());
var GHn = () => Y_e() && !Pn() && (yW() && ua().source === "CLAUDE_CODE_OAUTH_TOKEN" || g());
var O = () => GQe() || GHn();
var I7t = "allow_plugin_publish";
var xbs = () => i.CLAUDE_CODE_REMOTE ? "cloud-session" : "signed-out";
var nbr = () => uco([Te() !== "firstParty" && "third-party", Sr() && "bare", St() && "traffic-off", !on(I7t) && "policy", !O() && xbs()]);
export {
  GHn,
  I7t,
  nbr,
  tbr,
  uco,
  xbs
};
