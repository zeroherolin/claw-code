// linux/agents/chunk-5531d42a.js — Claude Code 2.1.310（linux）模块 chunk-gdcb8skc.js
import { Mn } from "../shared/ccd-session-mgmt.js";
var GE = "SubagentHandback";
var ht = "Agent", UQn = "Launch a new agent to handle complex, multi-step tasks", NXs = "The task for the agent to perform", $Xs = "A short (3-5 word) description of the task", cGo = "Name for the spawned agent.", FXs = `${cGo} Makes it addressable via ${Mn}({to: name}) while running.`, eH = "fork", UXs = `agent:builtin:${eH}`, uGo = 200, cf = "Task", XSt = 1e5, iGt = /* @__PURE__ */ new Set(["Explore", "Plan"]), bLe = "NOTE: this agent stopped at its ", lGr = `; ${Mn} to task-id to continue`, BQn = ` Send the agent a message (${Mn}) to let it continue from where it stopped.`, jQn = `The subagent ended without delivering a report through ${GE}, so no report was delivered.`, WQn = ` Send the agent a message (${Mn}) to ask it to deliver its report.`, fGo = ` Once its requests are accepted again, send the agent a message (${Mn}) to let it continue from where it stopped instead of starting a new agent.`, GQn = "subagent_type is required: the general-purpose agent is not available in this session";
export {
  $Xs,
  BQn,
  FXs,
  GE,
  GQn,
  NXs,
  UQn,
  UXs,
  WQn,
  XSt,
  bLe,
  cGo,
  cf,
  eH,
  fGo,
  ht,
  iGt,
  jQn,
  lGr,
  uGo
};
