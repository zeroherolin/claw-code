// linux/agents/in-process-teammate.0b47.js — Claude Code 2.1.310（linux）模块 chunk-92nmes7n.js
import { T_ } from "../shared/chunk-3b9c376b.js";
import { q } from "../context/not-admin-owned.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { re } from "../shared/chunk-d2c47492.js";
import { pYt, t } from "../fs/gitlab-runner-authentication-token.js";
import { ur } from "../permissions/turn-abort.js";
import { $j } from "../fs/reply-across-default-dirs.js";
import { Jsi } from "./in-process-teammate.32be.js";
import { Rt } from "../context/tool-result-clearing-after-idle-server-report.js";
import { ae } from "../permissions/max-thinking-tokens.js";
import { Yu, Tn } from "../git/bridge-child-tool-diff.js";
import { IO } from "../context/envelope-pinned-id.js";
import { XGe, U5n } from "./api-system.js";
import { WA } from "../plugins/unsubscribe-pr-activity.js";
import { NT, Kb } from "./in-process-teammate.b77f.js";
var S = 50;
function obr(o) {
  let s = pYt(o, S), e = re(s, S);
  return e.length < s.length ? `${e}...` : e;
}
function b(o, s) {
  if (s) return "plan";
  if (o === "plan" || o === "dontAsk") return "default";
  return o;
}
async function Jlo(o, s) {
  let { name: e, teamName: d, prompt: I, color: k, planModeRequired: l, model: w } = o, { taskRegistry: A } = s, r = $j(e, d), c = NT("in_process_teammate"), f = o.resumableAgentId ?? T_(e);
  t(`[spawnInProcessTeammate] Spawning ${r} (taskId: ${c})`);
  try {
    let n = ur(), a = q(), P = { agentId: r, agentName: e, teamName: d, color: k, planModeRequired: l, parentSessionId: a, resumableAgentId: f }, C = Jsi({ agentId: r, agentName: e, teamName: d, color: k, planModeRequired: l, parentSessionId: a, hasTaskListTools: IO() && s.rootToolSurface.tools.some((p) => Rt(p, WA)), abortController: n });
    if (XGe()) U5n(r, e, a);
    let M = o.description || obr(I), _ = { ...Kb(c, "in_process_teammate", M, s.toolUseId), type: "in_process_teammate", status: "running", identity: P, spawnedWith: o.spawnedWith, prompt: o.shownPrompt ?? I, model: w, abortController: n, awaitingPlanApproval: false, permissionMode: o.permissionMode ?? b(ae(s).mode, l), isIdle: false, lastReportedToolCount: 0, lastReportedTokenCount: 0, pendingUserMessages: [] };
    A.register(_);
    let y = s.getAppState(), i = y.agentNameRegistry.get(e);
    if (i !== f) {
      let p = i !== void 0 ? y.tasks[i] : void 0, T = i !== void 0 && (p?.status === "running" || Tn(p) || Object.values(y.tasks).some((u) => Yu(u) && u.status === "running" && u.identity.resumableAgentId === i)) ? s.agentLifecycle.allocateName(e) : e;
      if (T !== e) t(`[spawnInProcessTeammate] name "${e}" already routes to live ${i}; registry entry uses "${T}" instead`);
      s.agentLifecycle.registerName(T, f);
    }
    return t(`[spawnInProcessTeammate] Registered ${r} in AppState`), g("swarm_in_process_spawn"), { ok: true, agentId: r, identity: P, taskId: c, abortController: n, teammateContext: C };
  } catch (n) {
    let a = n instanceof Error ? n.message : "Unknown error during spawn";
    return t(`[spawnInProcessTeammate] Failed to spawn ${r}: ${a}`), m("swarm_in_process_spawn", "spawn_failed"), { ok: false, agentId: r, error: a };
  }
}
export {
  Jlo,
  obr
};
