// darwin/shared/chunk-32261137.js — Claude Code 2.1.310（darwin）模块 chunk-5h40hc47.js
import { Yi } from "./chunk-62a451b1.js";
function pve(n) {
  let e = Yi(n.client);
  return e != null && "transport" in e && e.transport === void 0;
}
function fve(n, e) {
  return n === e || n?.type === "connected" && e?.type === "connected" && n.client === e.client;
}
export {
  fve,
  pve
};
