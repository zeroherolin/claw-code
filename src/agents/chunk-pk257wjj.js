// agents/chunk-pk257wjj.js — Claude Code 2.1.310 模块 chunk-pk257wjj.js
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { at } from "../mcp/allowed-warning.j2d4.js";
import { mn } from "../shared/chunk-1a0taxx3.js";
var e = "claudecode/editResult", u = "1";
function yJr(o, t) {
  return o === at && mn(t) && t[e] === u;
}
async function _Jr(o, t) {
  if (o.isError === true || t.subagentFrameResult === void 0) return o;
  try {
    if (await t.subagentFrameResultHolds?.() === false) return o;
  } catch (r) {
    return l(r), o;
  }
  return { ...o, _meta: { ...o._meta, [e]: t.subagentFrameResult } };
}
export {
  _Jr,
  yJr
};
