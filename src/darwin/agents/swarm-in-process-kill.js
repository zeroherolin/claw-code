// darwin/agents/swarm-in-process-kill.js — Claude Code 2.1.310（darwin）模块 chunk-30bjr4gf.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { Nt } from "../shared/chunk-57ff8cc1.js";
import { g } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { aGe } from "./api-system.js";
import { La } from "../settings/global-config-and-gates.js";
import { run } from "./swarm-team-file-update.js";
import { hf } from "../fs/unadoptable-session-id.js";
import { Yu, C$t } from "../git/bridge-child-tool-diff.js";
import { us } from "./in-process-teammate.b77f.js";
var c7t = { name: "InProcessTeammateTask", type: "in_process_teammate", async kill(a, s, i, r, m) {
  let { memberRemoval: l, osTeardown: o } = hHn(a, s, i, m);
  await Promise.all([l, o]);
} }, k = 1e4;
function hHn(a, s, i, r) {
  let m = false, l = null, o = null, f, u, n;
  s.update(a, (e) => {
    if (e.status !== "running") return e;
    return l = e.identity.teamName, o = e.identity.agentId, f = e.toolUseId, u = e.description, n = e.paneTeardown, e.abortController?.abort(), m = true, e.onIdleCallbacks?.forEach((p) => p()), { ...e, status: "killed", notified: true, endTime: Date.now(), onIdleCallbacks: [], pendingUserMessages: [], abortController: void 0, currentWorkAbortController: void 0, paneTeardown: void 0, evictAfter: void 0 };
  });
  let c = n ? Nt(n(), k, `pane teardown did not settle within ${k}ms`).then((e) => {
    if (!e) t(`[killInProcessTeammate] pane teardown for ${a} reported failure — the backend could not find/kill the pane; its separate \`claude --agent-id\` process may still be running`, { level: "warn" });
    return e;
  }, (e) => (t(`[killInProcessTeammate] pane teardown for ${a} did not complete cleanly: ${d(e)}. Not blocking the stop result on it; the backend kill continues in the background and the separate \`claude --agent-id\` process may still be running`, { level: "warn" }), false)) : Promise.resolve(void 0);
  if (m && o) i((e) => {
    if (!e.teamContext?.teammates?.[o]) return e;
    let { [o]: p, ...y } = e.teamContext.teammates;
    return { ...e, teamContext: { ...e.teamContext, teammates: y } };
  });
  let T = Promise.resolve();
  if (l && o) T = run(l, o, { onlyIfJoinedBefore: Date.now() }, r);
  if (m) hf(a), La(a, "stopped", { toolUseId: f, summary: u }), setTimeout((e, p) => e.evictTerminal(p), C$t, s, a);
  if (o) aGe(o);
  return g("swarm_in_process_kill"), { killed: m, memberRemoval: T, osTeardown: c };
}
function SIe(a, s) {
  let i;
  for (let r of Object.values(s)) if (Yu(r) && r.identity.agentId === a) {
    if (r.status === "running") return r;
    if (!i) i = r;
  }
  return i;
}
function gHn(a, s) {
  let i = SIe(a, s);
  if (i) return { status: "found", task: i };
  let r = Object.values(s).filter(Yu).filter((n) => n.identity.resumableAgentId === a), m = r.find((n) => n.status === "running") ?? r[0];
  if (m) return { status: "found", task: m };
  let l = /* @__PURE__ */ new Map();
  for (let n of Object.values(s)) {
    if (!Yu(n) || n.identity.agentName !== a) continue;
    let c = l.get(n.identity.agentId);
    if (!c || c.status !== "running" && n.status === "running") l.set(n.identity.agentId, n);
  }
  let o = [...l.values()], f = o.filter((n) => n.status === "running"), u = f.length > 0 ? f : o;
  if (u.length === 1) return { status: "found", task: u[0] };
  if (u.length > 1) return { status: "ambiguous", candidates: u.map((n) => n.identity.agentId), anyLive: u.some((n) => !us(n.status)) };
  return { status: "not_found" };
}
function lSs(a) {
  return act(a).filter((s) => s.status === "running").map((s) => s.identity.agentId);
}
function act(a) {
  return Object.values(a).filter(Yu);
}
export {
  SIe,
  act,
  c7t,
  gHn,
  hHn,
  lSs
};
