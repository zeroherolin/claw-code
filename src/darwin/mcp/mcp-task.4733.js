// darwin/mcp/mcp-task.4733.js — Claude Code 2.1.310（darwin）模块 chunk-4wmp0td6.js
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../telemetry/chunk-9097a12b.js";
import { g } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../fs/utf-8.8f8e.js";
import "../shared/chunk-4563156b.js";
import "../fs/async-hooks.7959.js";
import "../plugins/chunk-0a4c51cf.js";
import "../shared/chunk-2fe3b2b7.js";
import "../shared/chunk-d4196a83.js";
import "../shell/chunk-fea9c492.js";
import "../context/utf-8.js";
import "../agents/in-process-teammate.9720.js";
import { x9 } from "../fs/mcp-tasks.js";
import "../shared/chunk-b7346a10.js";
import "../shared/chunk-e30378d4.js";
import "../context/tool-result.js";
import "../shared/chunk-6da6c5a3.js";
var y = { name: "MCP Task", type: "mcp_task", async kill(o, s, d, k, i) {
  let e = s.get(o), p = e?.type === "mcp_task" ? e.sidecarSessionId : void 0, c = e?.type === "mcp_task" ? e.sidecarProjectDir : void 0, n = e?.type === "mcp_task" ? e.sidecarWrite : void 0;
  if (e?.type === "mcp_task") e.abortController?.abort(), e.driveAbortController?.abort(), e.sep2663Cancel?.();
  let a = false;
  if (s.update(o, (r) => {
    if (r.notified || r.status !== "running") return r;
    return a = true, { ...r, status: "killed", endTime: Date.now(), parked: void 0, notified: true };
  }), a && e?.type === "mcp_task") try {
    e.onWorkerWakeOutcome?.({ kind: "stopped" });
  } catch (r) {
    t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"), l(r);
  }
  if ((async () => {
    await n, await x9(o, i, p, c);
  })().catch((r) => t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`)), a && e?.type === "mcp_task" && e.protocol === "sep2663") g("mcp_task_stop");
} };
export {
  y as MCP_TASK
};
