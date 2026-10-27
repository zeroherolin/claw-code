// remote/allow-remote-sessions.rhfq.js — Claude Code 2.1.310 模块 chunk-rhfqw000.js
import { St } from "../artifacts/cowritten-artifact-html.thm2.js";
import { Te } from "../models/total-tokens-reminder.psq3.js";
import { on } from "../auth/env-quad.nmae.js";
function eve() {
  return a0t() === void 0;
}
function a0t() {
  if (St() || Te() !== "firstParty") return "egress";
  return on("allow_remote_sessions") ? void 0 : "policy_org";
}
export {
  a0t,
  eve
};
