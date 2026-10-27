// skills/prototype-started.ehn3.js — Claude Code 2.1.310 模块 chunk-ehn3x7t2.js
import { xa } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { g } from "../telemetry/chunk-wn8xtaqg.js";
import { Z } from "../artifacts/same-account.bxg8.js";
import { TAs } from "../computer-use/artifact-thumbnail.fazj.js";
import { KMt } from "../artifacts/workshop-build-started.66d5.js";
var i = "<!-- dataviz-callout -->", n = () => "", o;
function CSs(t) {
  n = t;
}
async function v7t() {
  let { SKILL_MD: t } = await import("./skill-artifact-design.16ve.js");
  return o = TAs(xa(t).content.trimStart().replace(i, () => n())), o;
}
function TSs() {
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
function ASs() {
  r.arm(), g("prototype_started", {});
}
function RSs() {
  return r.take();
}
function ZIt() {
  r.giveBack();
}
function s(t, e) {
  Z().templateLanes.boundSlugs.set(t, e);
}
function xSs(t) {
  return Z().templateLanes.boundSlugs.get(t);
}
function PSs(t, e) {
  s(t, "prototype"), g("prototype_publish", { artifact_slug: KMt(t), is_first_publish: e });
}
export {
  ASs,
  CSs,
  PSs,
  RSs,
  TSs,
  ZIt,
  v7t,
  xSs
};
