// darwin/mcp/mcp-task.f887.js — Claude Code 2.1.310（darwin）模块 chunk-b051s6aa.js
import { pu } from "../shared/chunk-6adae81c.js";
import { $C, KS } from "../agents/in-process-teammate.b77f.js";
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
