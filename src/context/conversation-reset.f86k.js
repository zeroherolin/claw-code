// context/conversation-reset.f86k.js — Claude Code 2.1.310 模块 chunk-f86ks5ta.js
import { V, Wxe } from "./not-admin-owned.ersa.js";
import { FDe, Pwt, T6e, Iwt, Owt } from "../artifacts/same-account.bxg8.js";
import { vU } from "../api/anthropic-client.7pf8.js";
import { iXn } from "./org-memory-writes-setting-changed.w8x9.js";
import { Zq, NXe, DLt, xMe, q6, D_ } from "../core/conversation-engine.31gx.js";
import { jZe } from "../commands/skill-bundled-extract.zw7p.js";
import { uB } from "../telemetry/quota-auto-resume-cancelled.v6a4.js";
import { Pxn } from "../shared/chunk-njy6ye5w.js";
import { nEe } from "../shared/chunk-k00kepx1.js";
import { l6e } from "../telemetry/stop-hook-removed.w16m.js";
function X5t(e, o, t, i) {
  uB("conversation_reset"), vU("conversation_reset"), D_(q6), Iwt(), T6e(), FDe(), Owt(), Pwt(), jZe();
  let r = V();
  for (let s of l6e(e.sessionHooksRegistry, r)) e.sessionHooksRegistry.remove(r, "Stop", s);
  t(), NXe(), e.markConversationRemote?.(), iXn(e.readFileState), Zq(e.memorySelector), Wxe(), xMe(o), Pxn(i, r, o.map((s) => s.uuid)), e.applyMessageOp({ type: "replace-all", messages: DLt(o) }), nEe(true);
}
export {
  X5t
};
