// shared/allow-plugin-skill-search.5ddx.js — Claude Code 2.1.310 模块 chunk-5ddxrtnv.js
import { zs, ER } from "./chunk-cg45s1mf.js";
import { fp } from "../remote/local-agent.we9a.js";
import { $n } from "../models/total-tokens-reminder.psq3.js";
import { aOe } from "../telemetry/chunk-b0w81ksx.js";
import { d9n } from "./chunk-v42f9s3b.js";
class r {
  reader = void 0;
  register(e) {
    this.reader = e;
  }
  read() {
    return this.reader?.() ?? false;
  }
}
var o = new r();
function vyo(e) {
  o.register(e);
}
function N8e() {
  let e = ER("allow_plugin_skill_search");
  if (e === "org_denied" || e === "latched" || e === "unregistered" || e !== null && zs("hipaa")) return false;
  if (aOe()) return true;
  return fp() && $n() && o.read();
}
function rAi(e) {
  if (!d9n.includes(e)) return true;
  return N8e();
}
export {
  N8e,
  rAi,
  vyo
};
