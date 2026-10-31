// darwin/telemetry/bg-agent-action.js — Claude Code 2.1.310（darwin）模块 chunk-adqnrbak.js
import { V, n4t } from "../context/not-admin-owned.js";
import { S, c } from "../agents/third-party.js";
import { i } from "../shared/environment.js";
import { bde, ad, Rl, lo, Ga } from "./bg-roster-parse-failed.js";
import { a } from "./chunk-9097a12b.js";
import { g } from "./chunk-9d6962d2.js";
import { Ut, nSe } from "../settings/global-config-and-gates.js";
import { Xn } from "../core/conversation-engine.js";
import { oDn } from "../shared/chunk-1bf5cfbe.js";
import { _e } from "../shared/chunk-86ecf3aa.js";
function p() {
  return i.CLAUDE_JOB_DIR;
}
async function rDn(n, e, s) {
  a("tengu_bg_agent_action", { action: S("stop"), source: c(n), jobSessionId: _e(V()) }), n4t(void 0);
  let o = p();
  if (Ut() && o) {
    let r = (/* @__PURE__ */ new Date()).toISOString(), t = await lo(o, e);
    if (t && !Ga(t)) await ad(o, { ...t, state: "stopped", detail: "stopped from session", tempo: "idle", needs: void 0, block: void 0, inFlight: void 0, updatedAt: r, firstTerminalAt: t.firstTerminalAt ?? r }, e).catch(Rl);
    else await oDn(o, e);
    if (nSe()) process.stdout.write(bde(s ?? "Session stopped."));
  }
  return g("job_stop_self"), Xn(0, "prompt_input_exit", { suppressResumeHint: true });
}
export {
  rDn
};
