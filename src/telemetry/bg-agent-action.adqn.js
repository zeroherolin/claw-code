// telemetry/bg-agent-action.adqn.js — Claude Code 2.1.310 模块 chunk-adqnrbak.js
import { V, n4t } from "../context/not-admin-owned.ersa.js";
import { S, c } from "../agents/third-party.ydpb.js";
import { i } from "../shared/environment.9a41.js";
import { bde, ad, Rl, lo, Ga } from "./bg-roster-parse-failed.yhsj.js";
import { a } from "./chunk-wq923bwc.js";
import { g } from "./chunk-wn8xtaqg.js";
import { Ut, nSe } from "../settings/global-config-and-gates.27xj.js";
import { Xn } from "../core/conversation-engine.31gx.js";
import { oDn } from "../shared/chunk-hfn0s647.js";
import { _e } from "../shared/chunk-19a02m7w.js";
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
