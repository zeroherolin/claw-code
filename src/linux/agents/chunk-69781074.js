// linux/agents/chunk-69781074.js — Claude Code 2.1.310（linux）模块 chunk-3e3q9fy7.js
import { l } from "../artifacts/cowritten-artifact-html.js";
import { at } from "../mcp/allowed-warning.js";
import { mn } from "../shared/chunk-62f8d501.js";
var e = "claudecode/editResult", u = "1";
function XJr(o, t) {
  return o === at && mn(t) && t[e] === u;
}
async function JJr(o, t) {
  if (o.isError === true || t.subagentFrameResult === void 0) return o;
  try {
    if (await t.subagentFrameResultHolds?.() === false) return o;
  } catch (r) {
    return l(r), o;
  }
  return { ...o, _meta: { ...o._meta, [e]: t.subagentFrameResult } };
}
export {
  JJr,
  XJr
};
