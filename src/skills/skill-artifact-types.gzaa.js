// skills/skill-artifact-types.gzaa.js — Claude Code 2.1.310 模块 chunk-gzaa5nta.js
import { __asset_path, __asset_text } from "../runtime/assets.js";
import { dt } from "../fs/chunk-m1c94bsz.js";
import { $e } from "../vendor/react/chunk-meds60nn.js";
var e = __asset_text("skills/artifact-types/data-table/SKILL.md");
var t = __asset_path("skills/artifact-types/data-table/template.html");
var a = dt(t, import.meta.dirname);
var r = __asset_text("skills/artifact-types/explainer/SKILL.md");
var o = __asset_text("skills/artifact-types/explainer/template.html");
var s = __asset_text("skills/artifact-types/report/SKILL.md");
var i = __asset_path("skills/artifact-types/report/template.html");
var n = dt(i, import.meta.dirname);
var I = { report: s, "data-table": e, explainer: r }, M = { report: { "template.html": n }, "data-table": { "template.html": a }, explainer: { "template.html": o } };
export {
  M as SKILL_FILES,
  I as SKILL_MD
};
