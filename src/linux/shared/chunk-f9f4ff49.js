// linux/shared/chunk-f9f4ff49.js — Claude Code 2.1.310（linux）模块 chunk-hkjrs244.js
import { bg } from "./chunk-3b9c376b.js";
import { randomUUID as s } from "crypto";
var Tvs = (e, t) => ({ type: "system", subtype: "informational", content: `Started in the background: ${t}`, isMeta: false, timestamp: (/* @__PURE__ */ new Date()).toISOString(), uuid: s(), level: "info", launchedAgentId: e });
function Avs(e) {
  let n = e.type === "system" && e.subtype === "informational" ? e.launchedAgentId : void 0;
  return n !== void 0 && bg(n) !== null ? n : void 0;
}
export {
  Avs,
  Tvs
};
