// linux/skills/prototype-started.js — Claude Code 2.1.310（linux）模块 chunk-m9yrfnzh.js
import { Ra } from "../context/org-memory-writes-setting-changed.js";
import { g } from "../telemetry/chunk-9d6962d2.js";
import { Z } from "../artifacts/same-account.js";
import { WAs } from "../computer-use/artifact-thumbnail.js";
import { UMt } from "../artifacts/workshop-build-started.js";
var i = "<!-- dataviz-callout -->", n = () => "", o;
function X_s(t) {
  n = t;
}
async function cJt() {
  let { SKILL_MD: t } = await import("./skill-artifact-design.js");
  return o = WAs(Ra(t).content.trimStart().replace(i, () => n())), o;
}
function J_s() {
  return o;
}
function p(t) {
  return { arm() {
    Z().templateLanes[t] = true;
  }, take() {
    let e = Z().templateLanes, a = e[t];
    return e[t] = false, a;
  }, giveBack() {
    Z().templateLanes[t] = true;
  } };
}
var r = p("prototypeArmed");
function Q_s() {
  r.arm(), g("prototype_started", {});
}
function Z_s() {
  return r.take();
}
function zIt() {
  r.giveBack();
}
function s(t, e) {
  Z().templateLanes.boundSlugs.set(t, e);
}
function ebs(t) {
  return Z().templateLanes.boundSlugs.get(t);
}
function tbs(t, e) {
  s(t, "prototype"), g("prototype_publish", { artifact_slug: UMt(t), is_first_publish: e });
}
export {
  J_s,
  Q_s,
  X_s,
  Z_s,
  cJt,
  ebs,
  tbs,
  zIt
};
