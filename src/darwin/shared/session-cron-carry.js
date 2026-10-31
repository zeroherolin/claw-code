// darwin/shared/session-cron-carry.js — Claude Code 2.1.310（darwin）模块 chunk-ntfmnq1m.js
import { WGn, uTo } from "../core/conversation-engine.js";
import { randomUUID as n } from "crypto";
function K1e(t) {
  let e = uTo(t, WGn(t, t));
  return e === null ? t : [...t, r(e)];
}
var fho = (t) => r(uTo(t, WGn(t, t)) ?? { type: "session_cron_carry", tasks: [] }), r = (t) => ({ attachment: t, type: "attachment", uuid: n(), timestamp: (/* @__PURE__ */ new Date()).toISOString() });
export {
  K1e,
  fho
};
