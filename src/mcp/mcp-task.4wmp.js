// mcp/mcp-task.4wmp.js — Claude Code 2.1.310 模块 chunk-4wmp0td6.js
import "../agents/third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "../shared/chunk-9sbknd2z.js";
import "../fs/async-hooks.9s1z.js";
import "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import "../shared/chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "../shared/chunk-3y73jbfr.js";
import "../telemetry/chunk-wq923bwc.js";
import { g } from "../telemetry/chunk-wn8xtaqg.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-x6r6k81p.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../fs/backed-up.p1qn.js";
import "../shared/chunk-j79dwkaq.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/chunk-dz0rx1wn.js";
import "../fs/utf-8.7pve.js";
import "../shared/chunk-abagh0tt.js";
import "../fs/async-hooks.2k4e.js";
import "../plugins/chunk-x0a7sawk.js";
import "../shared/chunk-nyvhtfb3.js";
import "../shared/chunk-daaayw23.js";
import "../shell/chunk-gx93fya1.js";
import "../context/utf-8.yzy3.js";
import "../agents/in-process-teammate.040f.js";
import { x9 } from "../fs/mcp-tasks.zzgg.js";
import "../shared/chunk-kmah9ecm.js";
import "../shared/chunk-17f2zfzf.js";
import "../context/tool-result.evq2.js";
import "../shared/chunk-n07cvysj.js";
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
