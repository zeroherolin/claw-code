// darwin/shared/allow-plugin-skill-search.js — Claude Code 2.1.310（darwin）模块 chunk-5ddxrtnv.js
import { zs, ER } from "./chunk-f98598c3.js";
import { fp } from "../remote/local-agent.js";
import { $n } from "../models/total-tokens-reminder.js";
import { aOe } from "../telemetry/chunk-a6c9c80d.js";
import { d9n } from "./chunk-781ac969.js";
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
