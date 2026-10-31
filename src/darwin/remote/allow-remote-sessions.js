// darwin/remote/allow-remote-sessions.js — Claude Code 2.1.310（darwin）模块 chunk-rhfqw000.js
import { St } from "../artifacts/cowritten-artifact-html.js";
import { Te } from "../models/total-tokens-reminder.js";
import { on } from "../auth/env-quad.js";
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
