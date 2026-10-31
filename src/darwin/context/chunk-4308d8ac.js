// darwin/context/chunk-4308d8ac.js — Claude Code 2.1.310（darwin）模块 chunk-c0c5gpmn.js
import "../fs/async-hooks.93b1.js";
import "../shared/chunk-3b9c376b.js";
import "./not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-59ffb646.js";
import "../remote/local-agent.js";
import "../remote/moved-directory.js";
import { eo } from "../remote/chunk-8d3e7b64.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "../shared/async-hooks.5238.js";
import "../fs/utf-8.8f8e.js";
import "../shell/chunk-fea9c492.js";
import "../shell/chunk-8eebd6c6.js";
import "./utf-8.js";
import "../fs/utf-8.aa9a.js";
import "../shell/invalid-type.js";
import "../shared/chunk-4563156b.js";
import "../shared/chunk-2fe3b2b7.js";
import "../fs/chunk-475c6783.js";
import "../plugins/chunk-0a4c51cf.js";
import "../shared/chunk-8eee6836.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../shared/chunk-1b1c4439.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../plugins/skills-dir.js";
import "../git/chunk-c16cb6b4.js";
import "../fs/chunk-86be9585.js";
import "../auth/descriptor-direct.js";
import "../models/total-tokens-reminder.js";
import "../git/utf-8.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/async-hooks.9e79.js";
import "./tool-cgroup-exclude-classes.js";
import "../git/utf8-keep-bom.js";
import "../shared/chunk-d4196a83.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/async-hooks.7959.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../cli/chunk-af2447be.js";
import "../mcp/init-function-end.js";
import "../shell/spawn-error.js";
import "../auth/auth-launcher-host-login.js";
import { Yuo } from "./chunk-34131468.js";
import "../models/claude-mythos-preview.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "./tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import "../remote/chunk-95151620.js";
import { basename as l } from "path";
async function x(r, e) {
  let o = await Yuo(), a = eo(e.session);
  if (!o.success) {
    if (a) return t(`heapdump failed: ${o.error}`, { level: "error" }), { type: "text", value: "Failed to create heap dump (detail withheld on this connection)" };
    return { type: "text", value: `Failed to create heap dump: ${o.error}` };
  }
  let i = a ? l(o.heapPath) : o.heapPath, p = a ? l(o.diagPath) : o.diagPath;
  if (a) t(`heapdump written: ${o.heapPath} ${o.diagPath}`);
  let h = [i, p, "", d(o.diagnostics)];
  return h.push("", "Open the .heapsnapshot in Chrome DevTools → Memory → Load to inspect retainers."), { type: "text", value: h.join(`
`) };
}
function d(r) {
  let { memoryUsage: e, resourceUsage: o, analysis: a } = r, i = a.potentialLeaks.length ? a.potentialLeaks.map((n) => `  ⚠ ${n}`).join(`
`) : "  (no obvious leak indicators)", p = (n, u) => `RSS ${s(e.rss)} (peak ${s(o.maxRSS)}) ${n > u ? "— most memory is JS heap (inspect the .heapsnapshot)" : "— most memory is native (NOT in the .heapsnapshot)"}`;
  if (r.runtime === "bun") {
    let n = Math.max(0, e.rss - e.heapUsed);
    return [p(e.heapUsed, n), `  JS heap          ${s(e.heapUsed).padStart(8)}  in snapshot`, `  strings, buffers ${s(e.external).padStart(8)}  part of the JS heap, in snapshot`, `  outside the heap ${s(n).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`, i].join(`
`);
  }
  let h = e.external - e.arrayBuffers, c = Math.max(0, e.rss - e.heapTotal - e.external);
  return [p(e.heapTotal, e.external + c), `  JS heap        ${s(e.heapTotal).padStart(8)}  in snapshot`, `  array buffers  ${s(e.arrayBuffers).padStart(8)}  not in snapshot`, `  other external ${s(h).padStart(8)}  not in snapshot`, `  unaccounted    ${s(c).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`, i].join(`
`);
}
function s(r) {
  return `${(r / 1073741824).toFixed(2)} GB`;
}
export {
  x as call
};
