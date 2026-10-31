// linux/shared/chunk-e9fc3352.js — Claude Code 2.1.310（linux）模块 chunk-m18k9mtt.js
import { wr } from "../models/claude-3-5-sonnet.js";
import { i } from "./environment.js";
import { vf } from "../shell/async-hooks.js";
function ap() {
  return vf().backgroundTasksDisabled || __e();
}
function __e() {
  return i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || wr();
}
function FLe() {
  let n = vf();
  return n.backgroundTasksDisabled && !n.backgroundShellsKeptElsewhere || __e();
}
function Vwt() {
  let n = vf();
  return n.backgroundTasksDisabled && n.backgroundLaunchRule === void 0 || n.backgroundAgentLaunchDisabled || i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || wr();
}
function doe() {
  return ap() || vf().backgroundAgentLaunchDisabled;
}
function qwt() {
  let n = vf();
  if (!n.foregroundAgentMovesAdmitted) return doe();
  return n.backgroundAgentLaunchDisabled || i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || wr();
}
function q7s() {
  let n = vf();
  return n.backgroundLaunchRule !== void 0 && !n.backgroundLaunchByDefault && !Vwt();
}
function Uhn() {
  return vf().backgroundLaunchByDefault && !Vwt();
}
export {
  FLe,
  Uhn,
  Vwt,
  __e,
  ap,
  doe,
  q7s,
  qwt
};
