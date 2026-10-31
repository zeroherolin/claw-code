// linux/shared/allow-plugin-skill-search.js — Claude Code 2.1.310（linux）模块 chunk-ncmvxmaw.js
import { Ks, bR } from "./chunk-f98598c3.js";
import { mf } from "../remote/local-agent.js";
import { Fn } from "../models/total-tokens-reminder.js";
import { nOe } from "../telemetry/chunk-a6c9c80d.js";
import { G6n } from "./chunk-781ac969.js";
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
function tyo(e) {
  o.register(e);
}
function C8e() {
  let e = bR("allow_plugin_skill_search");
  if (e === "org_denied" || e === "latched" || e === "unregistered" || e !== null && Ks("hipaa")) return false;
  if (nOe()) return true;
  return mf() && Fn() && o.read();
}
function TAi(e) {
  if (!G6n.includes(e)) return true;
  return C8e();
}
export {
  C8e,
  TAi,
  tyo
};
