// linux/context/conversation-reset.js — Claude Code 2.1.310（linux）模块 chunk-ccdartzh.js
import { q, Nxe } from "./not-admin-owned.js";
import { OLe, Ewt, hKe, kwt, Twt } from "../artifacts/same-account.js";
import { _U } from "../api/anthropic-client.js";
import { j9n } from "./org-memory-writes-setting-changed.js";
import { W4, xXe, E0t, EMe, NK, D_ } from "../core/conversation-engine.js";
import { OZe } from "../commands/skill-bundled-extract.js";
import { s1 } from "../telemetry/quota-auto-resume-cancelled.js";
import { fxn } from "../shared/chunk-f699a85a.js";
import { Jwe } from "../shared/chunk-aa7dc48e.js";
import { Q2e } from "../telemetry/stop-hook-removed.js";
function L6t(e, o, t, i) {
  s1("conversation_reset"), _U("conversation_reset"), D_(NK), kwt(), hKe(), OLe(), Twt(), Ewt(), OZe();
  let r = q();
  for (let s of Q2e(e.sessionHooksRegistry, r)) e.sessionHooksRegistry.remove(r, "Stop", s);
  t(), xXe(), e.markConversationRemote?.(), j9n(e.readFileState), W4(e.memorySelector), Nxe(), EMe(o), fxn(i, r, o.map((s) => s.uuid)), e.applyMessageOp({ type: "replace-all", messages: E0t(o) }), Jwe(true);
}
export {
  L6t
};
