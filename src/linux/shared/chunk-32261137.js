// linux/shared/chunk-32261137.js — Claude Code 2.1.310（linux）模块 chunk-aqr6n7ck.js
import { Yi } from "./chunk-62a451b1.js";
function aEe(n) {
  let e = Yi(n.client);
  return e != null && "transport" in e && e.transport === void 0;
}
function lEe(n, e) {
  return n === e || n?.type === "connected" && e?.type === "connected" && n.client === e.client;
}
export {
  aEe,
  lEe
};
