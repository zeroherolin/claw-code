// linux/shared/chunk-51932285.js — Claude Code 2.1.310（linux）模块 chunk-5j3z2ycg.js
import { i } from "./environment.js";
function Wl() {
  let _ = i.MCP_TIMEOUT;
  return _ && _ > 0 ? Math.min(_, 2147483647) : 3e4;
}
function Kze() {
  let _ = i.MCP_CONNECT_TIMEOUT_MS;
  return _ && _ > 0 ? Math.min(_, 2147483647) : 5e3;
}
var hye = 2e3, R4s = 8e3, x4s = 500;
export {
  Kze,
  R4s,
  Wl,
  hye,
  x4s
};
