// linux/workflows/built-in.js — Claude Code 2.1.310（linux）模块 chunk-zpn8sz53.js
import { br } from "./chunk-a1595c7e.js";
import { f5, rVe, RV } from "../shared/allow-bundled-skills.js";
function sws(o, e, r) {
  br().bundledWorkflows.push({ source: "built-in", ...e, script: o, disableModelInvocation: r?.disableModelInvocation });
}
function nQt() {
  if (f5()) return [];
  let o = br().bundledWorkflows;
  if (rVe()) return o.filter((e) => !RV(e.name));
  return o;
}
export {
  nQt,
  sws
};
