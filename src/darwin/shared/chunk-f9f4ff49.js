// darwin/shared/chunk-f9f4ff49.js — Claude Code 2.1.310（darwin）模块 chunk-521q2sge.js
import { Sg } from "./chunk-3b9c376b.js";
import { randomUUID as s } from "crypto";
var tvs = (e, t) => ({ type: "system", subtype: "informational", content: `Started in the background: ${t}`, isMeta: false, timestamp: (/* @__PURE__ */ new Date()).toISOString(), uuid: s(), level: "info", launchedAgentId: e });
function nvs(e) {
  let n = e.type === "system" && e.subtype === "informational" ? e.launchedAgentId : void 0;
  return n !== void 0 && Sg(n) !== null ? n : void 0;
}
export {
  nvs,
  tvs
};
