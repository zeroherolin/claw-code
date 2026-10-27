// agents/chunk-zwvcbrvr.js — Claude Code 2.1.310 模块 chunk-zwvcbrvr.js
import { Mn } from "../shared/ccd-session-mgmt.z8jd.js";
var zv = "SubagentHandback";
var ht = "Agent", rQn = "Launch a new agent to handle complex, multi-step tasks", b7s = "The task for the agent to perform", w7s = "A short (3-5 word) description of the task", L2o = "Name for the spawned agent.", E7s = `${L2o} Makes it addressable via ${Mn}({to: name}) while running.`, oH = "fork", v7s = `agent:builtin:${oH}`, N2o = 200, dp = "Task", nwt = 1e5, y2t = /* @__PURE__ */ new Set(["Explore", "Plan"]), CDe = "NOTE: this agent stopped at its ", C2r = `; ${Mn} to task-id to continue`, oQn = ` Send the agent a message (${Mn}) to let it continue from where it stopped.`, sQn = `The subagent ended without delivering a report through ${zv}, so no report was delivered.`, iQn = ` Send the agent a message (${Mn}) to ask it to deliver its report.`, F2o = ` Once its requests are accepted again, send the agent a message (${Mn}) to let it continue from where it stopped instead of starting a new agent.`, aQn = "subagent_type is required: the general-purpose agent is not available in this session";
export {
  C2r,
  CDe,
  E7s,
  F2o,
  L2o,
  N2o,
  aQn,
  b7s,
  dp,
  ht,
  iQn,
  nwt,
  oH,
  oQn,
  rQn,
  sQn,
  v7s,
  w7s,
  y2t,
  zv
};
