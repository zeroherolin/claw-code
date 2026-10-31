// linux/auth/allow-plugin-publish.js — Claude Code 2.1.310（linux）模块 chunk-fkbes5mr.js
import { pd, j_e, ua, k } from "../settings/global-config-and-gates.js";
import { _W, Pn } from "../context/not-admin-owned.js";
import { wr } from "../models/claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { _t } from "../artifacts/cowritten-artifact-html.js";
import { dW, Lkn, MM } from "../remote/local-agent.js";
import { Ae } from "../models/total-tokens-reminder.js";
import { on } from "./env-quad.js";
import { L7e } from "../plugins/claudeai-plugins-sync-enabled.js";
var l = "tengu_copper_gazette";
var x = false;
var Obr = () => k(l, x) === true;
var Mdo = (o) => o.find((u) => u !== false) || void 0;
function E() {
  let { source: o } = ua();
  return o === "CLAUDE_CODE_OAUTH_TOKEN" || o === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR";
}
var _ = () => ua().source === "CCR_OAUTH_TOKEN_FILE" && _W() && pd();
var g = () => Lkn() && !MM() && pd() && (E() || _());
var fHn = () => j_e() && !Pn() && (dW() && ua().source === "CLAUDE_CODE_OAUTH_TOKEN" || g());
var O = () => L7e() || fHn();
var pJt = "allow_plugin_publish";
var ybs = () => i.CLAUDE_CODE_REMOTE ? "cloud-session" : "signed-out";
var Mbr = () => Mdo([Ae() !== "firstParty" && "third-party", wr() && "bare", _t() && "traffic-off", !on(pJt) && "policy", !O() && ybs()]);
export {
  Mbr,
  Mdo,
  Obr,
  fHn,
  pJt,
  ybs
};
