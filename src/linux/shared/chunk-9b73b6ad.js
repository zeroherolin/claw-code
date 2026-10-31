// linux/shared/chunk-9b73b6ad.js — Claude Code 2.1.310（linux）模块 chunk-1t7vm9a1.js
import { xt } from "../mcp/toolbox-mcp-server-id.js";
function vks(t) {
  xt().policyColdStartWaiter = t;
}
async function KR() {
  let t = xt().policyColdStartWaiter;
  if (t) await t();
}
export {
  KR,
  vks
};
