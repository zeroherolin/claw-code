// mcp/mcp-task.b051.js — Claude Code 2.1.310 模块 chunk-b051s6aa.js
import { pu } from "../shared/chunk-a9jqgh3e.js";
import { $C, KS } from "../agents/in-process-teammate.e4p6.js";
function Jte(t, e) {
  return `${pu(t) ?? ""}/${pu(e) ?? ""}`;
}
function APs(t) {
  return pu(t) ?? "";
}
function ujn({ serverName: t, toolName: e, mcpTaskId: o, toolUseId: s, pollIntervalMs: a, abortController: n, protocol: p, driveAbortController: i, ttlExpiresAt: c }) {
  let r = $C("mcp_task");
  return { ...KS(r, "mcp_task", Jte(t, e), s), type: "mcp_task", status: "running", serverName: t, toolName: e, mcpTaskId: o ?? r, mcpStatus: "working", pollIntervalMs: a, abortController: n, protocol: p, driveAbortController: i, ttlExpiresAt: c };
}
export {
  APs,
  Jte,
  ujn
};
