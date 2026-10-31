// darwin/workflows/built-in.js — Claude Code 2.1.310（darwin）模块 chunk-se5582zy.js
import { br } from "./chunk-a1595c7e.js";
import { v4, pVe, $V } from "../shared/allow-bundled-skills.js";
function Hws(o, e, r) {
  br().bundledWorkflows.push({ source: "built-in", ...e, script: o, disableModelInvocation: r?.disableModelInvocation });
}
function pJt() {
  if (v4()) return [];
  let o = br().bundledWorkflows;
  if (pVe()) return o.filter((e) => !$V(e.name));
  return o;
}
export {
  Hws,
  pJt
};
