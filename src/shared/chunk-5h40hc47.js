// shared/chunk-5h40hc47.js — Claude Code 2.1.310 模块 chunk-5h40hc47.js
import { Yi } from "./chunk-e76vd23z.js";
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
