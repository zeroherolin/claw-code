// linux/models/fable-5-1-prompt-bundle.js — Claude Code 2.1.310（linux）模块 chunk-5bd63sq9.js
import { Plr } from "../remote/local-agent.js";
import { mS } from "./total-tokens-reminder.js";
function OU(o, n) {
  let e = mS(o, "fable_5_mitigations", n);
  if (e !== void 0) return e;
  if (o === "claude-mythos-5") return true;
  return false;
}
function ELe(o) {
  return !Plr() && mS(o, "fable_5_1_prompt_bundle") === true;
}
function lKe(o) {
  return o.startsWith("claude-fable-");
}
function hJs(o) {
  return o.startsWith("claude-mythos-");
}
function s7n(o) {
  return false;
}
export {
  ELe,
  OU,
  hJs,
  lKe,
  s7n
};
