// context/chunk-c0c5gpmn.js — Claude Code 2.1.310 模块 chunk-c0c5gpmn.js
import "../fs/async-hooks.9s1z.js";
import "../shared/chunk-9sbknd2z.js";
import "./not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import "../agents/third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "../shared/chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "../shared/chunk-3y73jbfr.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-x6r6k81p.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../fs/backed-up.p1qn.js";
import "../shared/chunk-j79dwkaq.js";
import "../shared/chunk-nrx8c90j.js";
import "../shared/environment.9a41.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/chunk-dz0rx1wn.js";
import "../shared/chunk-4kxy1036.js";
import "../remote/local-agent.we9a.js";
import "../remote/moved-directory.z3m0.js";
import { eo } from "../remote/chunk-7nwr416d.js";
import "../telemetry/chunk-wq923bwc.js";
import "../telemetry/chunk-wn8xtaqg.js";
import "../shared/async-hooks.m2fg.js";
import "../fs/utf-8.7pve.js";
import "../shell/chunk-gx93fya1.js";
import "../shell/chunk-tjkwy3jp.js";
import "./utf-8.yzy3.js";
import "../fs/utf-8.fmbx.js";
import "../shell/invalid-type.qnva.js";
import "../shared/chunk-abagh0tt.js";
import "../shared/chunk-nyvhtfb3.js";
import "../fs/chunk-w461d8x8.js";
import "../plugins/chunk-x0a7sawk.js";
import "../shared/chunk-z6efcye4.js";
import "../permissions/classifier-transcript-too-long.8zvz.js";
import "../permissions/quota-auto-resume-disabled.gt6d.js";
import "../shared/chunk-xz73gv4f.js";
import "../terminal/chunk-9vttrktj.js";
import "../mcp/chunk-ykcv164t.js";
import "../mcp/always-allow.9m89.js";
import "../plugins/skills-dir.cemw.js";
import "../git/chunk-q8vnfcnf.js";
import "../fs/chunk-gzs70jxe.js";
import "../auth/descriptor-direct.zd2z.js";
import "../models/total-tokens-reminder.psq3.js";
import "../git/utf-8.vh7e.js";
import "../artifacts/chunk-m8t7qekn.js";
import "../shared/async-hooks.923e.js";
import "./tool-cgroup-exclude-classes.t1za.js";
import "../git/utf8-keep-bom.c49x.js";
import "../shared/chunk-daaayw23.js";
import "../fs/tempdir-owner-mismatch.5xe1.js";
import "../fs/async-hooks.2k4e.js";
import "../settings/workflow-launch-exec.t4r2.js";
import "../shared/chunk-s56ftfc1.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import "../cli/chunk-33ax6j5s.js";
import "../mcp/init-function-end.wpfb.js";
import "../shell/spawn-error.7yg0.js";
import "../auth/auth-launcher-host-login.9f3m.js";
import { Yuo } from "./chunk-r1kn7pj5.js";
import "../models/claude-mythos-preview.rw6s.js";
import "../shared/chunk-s06z5etx.js";
import "../shared/chunk-81mpzfkq.js";
import "../fs/not-utf8.sqq6.js";
import "./tool-result.evq2.js";
import "../shared/chunk-bhdett2m.js";
import "../shared/chunk-n07cvysj.js";
import "../shared/chunk-19a02m7w.js";
import "../remote/chunk-t0kv6pst.js";
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
