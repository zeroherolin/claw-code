// shared/chunk-tndwavj2.js — Claude Code 2.1.310 模块 chunk-tndwavj2.js
import { Sr } from "../models/claude-3-5-sonnet.21mz.js";
import { i } from "./environment.9a41.js";
import { wp } from "../shell/async-hooks.4y48.js";
function sf() {
  return wp().backgroundTasksDisabled || C_e();
}
function C_e() {
  return i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || Sr();
}
function zDe() {
  let n = wp();
  return n.backgroundTasksDisabled && !n.backgroundShellsKeptElsewhere || C_e();
}
function eEt() {
  let n = wp();
  return n.backgroundTasksDisabled && n.backgroundLaunchRule === void 0 || n.backgroundAgentLaunchDisabled || i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || Sr();
}
function hoe() {
  return sf() || wp().backgroundAgentLaunchDisabled;
}
function tEt() {
  let n = wp();
  if (!n.foregroundAgentMovesAdmitted) return hoe();
  return n.backgroundAgentLaunchDisabled || i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || Sr();
}
function OZs() {
  let n = wp();
  return n.backgroundLaunchRule !== void 0 && !n.backgroundLaunchByDefault && !eEt();
}
function ryn() {
  return wp().backgroundLaunchByDefault && !eEt();
}
export {
  C_e,
  OZs,
  eEt,
  hoe,
  ryn,
  sf,
  tEt,
  zDe
};
