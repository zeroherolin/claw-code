// linux/shared/session-cron-carry.js — Claude Code 2.1.310（linux）模块 chunk-7cb81v02.js
import { vzn, LTo } from "../core/conversation-engine.js";
import { randomUUID as n } from "crypto";
function $Be(t) {
  let e = LTo(t, vzn(t, t));
  return e === null ? t : [...t, r(e)];
}
var Wgo = (t) => r(LTo(t, vzn(t, t)) ?? { type: "session_cron_carry", tasks: [] }), r = (t) => ({ attachment: t, type: "attachment", uuid: n(), timestamp: (/* @__PURE__ */ new Date()).toISOString() });
export {
  $Be,
  Wgo
};
