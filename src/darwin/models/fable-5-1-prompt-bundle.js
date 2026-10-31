// darwin/models/fable-5-1-prompt-bundle.js — Claude Code 2.1.310（darwin）模块 chunk-mhz6d0a4.js
import { Vlr } from "../remote/local-agent.js";
import { gb } from "./total-tokens-reminder.js";
function LU(o, n) {
  let e = gb(o, "fable_5_mitigations", n);
  if (e !== void 0) return e;
  if (o === "claude-mythos-5") return true;
  return false;
}
function xDe(o) {
  return !Vlr() && gb(o, "fable_5_1_prompt_bundle") === true;
}
function _6e(o) {
  return o.startsWith("claude-fable-");
}
function eJs(o) {
  return o.startsWith("claude-mythos-");
}
function vQn(o) {
  return false;
}
export {
  LU,
  _6e,
  eJs,
  vQn,
  xDe
};
