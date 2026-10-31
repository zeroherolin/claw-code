// darwin/shared/chunk-9b73b6ad.js — Claude Code 2.1.310（darwin）模块 chunk-n5pe8xrn.js
import { xt } from "../mcp/toolbox-mcp-server-id.js";
function eCs(t) {
  xt().policyColdStartWaiter = t;
}
async function YR() {
  let t = xt().policyColdStartWaiter;
  if (t) await t();
}
export {
  YR,
  eCs
};
