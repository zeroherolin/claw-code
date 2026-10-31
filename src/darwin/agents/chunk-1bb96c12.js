// darwin/agents/chunk-1bb96c12.js — Claude Code 2.1.310（darwin）模块 chunk-3nhq7xba.js
import { De } from "../telemetry/chunk-1bb3c64e.js";
import { g0s, Jxr, Brn, jrn, zyi, Vyi, Kyi, rsn } from "../core/conversation-engine.js";
import { Ni } from "../shared/chunk-669ef766.js";
function m(e, n) {
  let s = e.subagentType === n.agent.agentType ? n.agent : n.agents.find((t) => t.agentType === e.subagentType);
  if (s !== void 0) return { agent: s };
  let r = n.agents.map((t) => t.agentType), g = r.length > 0 ? `available: ${r.join(", ")}` : "none is available";
  return { deny: `a hook's subagentType '${e.subagentType}' names no agent this call can dispatch (${g})` };
}
var c = (e) => ({ tool_use_id: e.tool_use_id, prompt: e.prompt, description: e.description, subagentType: e.agent.agentType, provider: g0s(e.agent), model: e.model, parentModel: e.parentModel, ...e.parentAgentId !== void 0 && { parentAgentId: e.parentAgentId }, permissionMode: e.permissionMode, background: e.background, fork: e.fork, ...e.isTeammate === true && { isTeammate: true }, ...e.workflow !== void 0 && { workflow: e.workflow }, ...e.resume !== void 0 && { resume: e.resume }, name: e.name, cwd: e.cwd });
var d = (e) => ({ started: ({ agentId: n, model: o, teammateId: s }) => e.done({ model: o, agentId: n, ...s !== void 0 && { teammateId: s } }), [Symbol.dispose]: e[Symbol.dispose] });
var dfo = Object.freeze({ started: () => {
  return;
}, [Symbol.dispose]: () => {
  return;
} });
async function Mwr(e, n) {
  let { agent: o, agents: s, signal: r, origin: g } = e, t = c(e);
  if (!Ni("agent.spawn")) return { spawn: t, agent: o, starting: dfo, isRewritten: false };
  let a = jrn(Kyi), f = await Brn(a, n({ signal: r, origin: g, core: { "agent.spawn": Jxr(a) } }).agent.spawn(t));
  if (!f.arrived) return zyi({ result: f.answered, input: t, signal: r });
  let p = f.arrived;
  Vyi({ input: t, spawn: p });
  let i = m(p, { agent: o, agents: s });
  if (i.deny !== void 0) return a.failed(new De(i.deny)), i;
  return { spawn: p, agent: i.agent, starting: d(a), isRewritten: !rsn({ input: t }, p) };
}
export {
  Mwr,
  dfo
};
