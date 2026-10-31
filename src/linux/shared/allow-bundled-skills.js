// linux/shared/allow-bundled-skills.js — Claude Code 2.1.310（linux）模块 chunk-s6fbb5tf.js
import { pS, cai, q5 } from "./chunk-f98598c3.js";
import { i } from "./environment.js";
import { pt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { otr } from "../permissions/fewer-permission-prompts.js";
function f5(e) {
  return i.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS || (e ?? pt()).disableBundledSkills === true;
}
var sVr = "allow_bundled_skills";
function rVe() {
  return !pS(sVr);
}
function n() {
  return cai() ?? otr;
}
function RV(e) {
  return rVe() && !n().includes(e);
}
function woe(e, t) {
  return f5(t) || RV(e);
}
function wei() {
  return q5(sVr, "Bundled skills", "are");
}
function rtr(e) {
  let t = rVe();
  return `${f5(e)}:${t}:${t ? n().join(",") : ""}`;
}
function iVr(e, t) {
  return e.type === "prompt" && e.source === "builtin" && woe(e.name, t);
}
export {
  RV,
  f5,
  iVr,
  rVe,
  rtr,
  sVr,
  wei,
  woe
};
