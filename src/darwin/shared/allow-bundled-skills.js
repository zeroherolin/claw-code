// darwin/shared/allow-bundled-skills.js — Claude Code 2.1.310（darwin）模块 chunk-k5t234z0.js
import { mb, qai, s5 } from "./chunk-f98598c3.js";
import { i } from "./environment.js";
import { mt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Etr } from "../permissions/fewer-permission-prompts.js";
function v4(e) {
  return i.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS || (e ?? mt()).disableBundledSkills === true;
}
var TVr = "allow_bundled_skills";
function pVe() {
  return !mb(TVr);
}
function n() {
  return qai() ?? Etr;
}
function $V(e) {
  return pVe() && !n().includes(e);
}
function Roe(e, t) {
  return v4(t) || $V(e);
}
function sti() {
  return s5(TVr, "Bundled skills", "are");
}
function wtr(e) {
  let t = pVe();
  return `${v4(e)}:${t}:${t ? n().join(",") : ""}`;
}
function AVr(e, t) {
  return e.type === "prompt" && e.source === "builtin" && Roe(e.name, t);
}
export {
  $V,
  AVr,
  Roe,
  TVr,
  pVe,
  sti,
  v4,
  wtr
};
