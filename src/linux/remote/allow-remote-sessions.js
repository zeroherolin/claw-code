// linux/remote/allow-remote-sessions.js — Claude Code 2.1.310（linux）模块 chunk-hq9m7vnk.js
import { _t } from "../artifacts/cowritten-artifact-html.js";
import { Ae } from "../models/total-tokens-reminder.js";
import { on } from "../auth/env-quad.js";
function Vve() {
  return eDt() === void 0;
}
function eDt() {
  if (_t() || Ae() !== "firstParty") return "egress";
  return on("allow_remote_sessions") ? void 0 : "policy_org";
}
export {
  Vve,
  eDt
};
