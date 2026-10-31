// linux/telemetry/bg-agent-action.js — Claude Code 2.1.310（linux）模块 chunk-nehqevjg.js
import { q, jYt } from "../context/not-admin-owned.js";
import { b, c } from "../agents/third-party.js";
import { i } from "../shared/environment.js";
import { nde, ad, Rl, lo, Wa } from "./bg-roster-parse-failed.js";
import { a } from "./chunk-9097a12b.js";
import { g } from "./chunk-9d6962d2.js";
import { Ut, X_e } from "../settings/global-config-and-gates.js";
import { Xn } from "../core/conversation-engine.js";
import { VHn } from "../shared/chunk-1bf5cfbe.js";
import { _e } from "../shared/chunk-86ecf3aa.js";
function p() {
  return i.CLAUDE_JOB_DIR;
}
async function KHn(n, e, s) {
  a("tengu_bg_agent_action", { action: b("stop"), source: c(n), jobSessionId: _e(q()) }), jYt(void 0);
  let o = p();
  if (Ut() && o) {
    let r = (/* @__PURE__ */ new Date()).toISOString(), t = await lo(o, e);
    if (t && !Wa(t)) await ad(o, { ...t, state: "stopped", detail: "stopped from session", tempo: "idle", needs: void 0, block: void 0, inFlight: void 0, updatedAt: r, firstTerminalAt: t.firstTerminalAt ?? r }, e).catch(Rl);
    else await VHn(o, e);
    if (X_e()) process.stdout.write(nde(s ?? "Session stopped."));
  }
  return g("job_stop_self"), Xn(0, "prompt_input_exit", { suppressResumeHint: true });
}
export {
  KHn
};
