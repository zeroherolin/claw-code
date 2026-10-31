// linux/mcp/mcp-task.f887.js — Claude Code 2.1.310（linux）模块 chunk-j3trd33d.js
import { uu } from "../shared/chunk-6adae81c.js";
import { NT, Kb } from "../agents/in-process-teammate.b77f.js";
function Wte(t, e) {
  return `${uu(t) ?? ""}/${uu(e) ?? ""}`;
}
function Bxs(t) {
  return uu(t) ?? "";
}
function z1n({ serverName: t, toolName: e, mcpTaskId: o, toolUseId: s, pollIntervalMs: a, abortController: n, protocol: p, driveAbortController: i, ttlExpiresAt: c }) {
  let r = NT("mcp_task");
  return { ...Kb(r, "mcp_task", Wte(t, e), s), type: "mcp_task", status: "running", serverName: t, toolName: e, mcpTaskId: o ?? r, mcpStatus: "working", pollIntervalMs: a, abortController: n, protocol: p, driveAbortController: i, ttlExpiresAt: c };
}
export {
  Bxs,
  Wte,
  z1n
};
