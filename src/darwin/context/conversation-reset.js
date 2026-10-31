// darwin/context/conversation-reset.js — Claude Code 2.1.310（darwin）模块 chunk-f86ks5ta.js
import { V, Wxe } from "./not-admin-owned.js";
import { FDe, Pwt, T6e, Iwt, Owt } from "../artifacts/same-account.js";
import { vU } from "../api/anthropic-client.js";
import { iXn } from "./org-memory-writes-setting-changed.js";
import { Zq, NXe, DLt, xMe, q6, D_ } from "../core/conversation-engine.js";
import { jZe } from "../commands/skill-bundled-extract.js";
import { uB } from "../telemetry/quota-auto-resume-cancelled.js";
import { Pxn } from "../shared/chunk-f699a85a.js";
import { nEe } from "../shared/chunk-aa7dc48e.js";
import { l6e } from "../telemetry/stop-hook-removed.js";
function X5t(e, o, t, i) {
  uB("conversation_reset"), vU("conversation_reset"), D_(q6), Iwt(), T6e(), FDe(), Owt(), Pwt(), jZe();
  let r = V();
  for (let s of l6e(e.sessionHooksRegistry, r)) e.sessionHooksRegistry.remove(r, "Stop", s);
  t(), NXe(), e.markConversationRemote?.(), iXn(e.readFileState), Zq(e.memorySelector), Wxe(), xMe(o), Pxn(i, r, o.map((s) => s.uuid)), e.applyMessageOp({ type: "replace-all", messages: DLt(o) }), nEe(true);
}
export {
  X5t
};
