// linux/workflows/script-too-large.js — Claude Code 2.1.310（linux）模块 chunk-nqdwzvh0.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { c } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { re } from "../shared/chunk-d2c47492.js";
import { _ } from "../fs/gitlab-runner-authentication-token.js";
import { xI } from "../git/utf-8.js";
import { HNe, sfe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { s2 } from "../remote/moved-directory.js";
import { QC, iXn, aXn } from "../context/org-memory-writes-setting-changed.js";
import { i7n, SGr, l7n } from "./managed-settings.js";
import { tm } from "../settings/non-string-value.js";
import { S1 } from "../core/conversation-engine.js";
import { wIe, uLn, mLn, gLn, hLn } from "./workflow-journal-started-hit-respawn.js";
import { wE } from "./chunk-d9a07e26.js";
import { BW } from "./chunk-89ff2d95.js";
import { NT } from "../agents/in-process-teammate.b77f.js";
import { randomUUID as y } from "crypto";
var l = 1e5, A = 4e3;
function L(e) {
  let t = e.replace(/[\r\n\v\f\x1c\x1d\x1e\u0085\u2028\u2029]+/g, " ").replaceAll("remote-workflow:", "remote-workflow;");
  if (t.length > A) t = `${re(t, A)}…[truncated]`;
  return t;
}
function XJt(e, t) {
  return `remote-workflow: error[${e}]: ${L(t)}`;
}
function d(e) {
  let t = _(e);
  return t === void 0 ? void 0 : t.replaceAll("", "\\u0085").replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029");
}
function R() {
  let e = tm();
  if (e === void 0) return SGr();
  return Object.keys(e).some((t) => t.toUpperCase() === "CLAUDE_CODE_DISABLE_WORKFLOWS" && Ne(e[t]));
}
function x() {
  return HNe().some((e) => e.disableWorkflows === true || Object.entries(e.env ?? {}).some(([t, f]) => t.toUpperCase() === "CLAUDE_CODE_DISABLE_WORKFLOWS" && Ne(f)));
}
var I = "Code review did not run: workflows are turned off in this machine's managed settings (`disableWorkflows`, or `CLAUDE_CODE_DISABLE_WORKFLOWS` in its `env` block). Ask this machine's administrator to allow it.", M = "Code review did not run: this machine's managed settings could not be read, so whether its administrator turned workflows off is not known. Ask this machine's administrator to fix them.";
function C() {
  if (x()) return I;
  return sfe() ? M : null;
}
function xct(e) {
  if (R()) return "dynamic workflows are disabled for this session (the environment variable `CLAUDE_CODE_DISABLE_WORKFLOWS` was set when Claude Code started).";
  let t = e?.serverAuthoredCarrier === true;
  if (t && e?.eventSessionOrigin === "review") return C();
  if (i7n()) return SGr() ? "dynamic workflows are disabled for this session (the environment variable `CLAUDE_CODE_DISABLE_WORKFLOWS`, set after Claude Code started, for example by a settings `env` block)." : "dynamic workflows are disabled for this session (the `disableWorkflows` setting).";
  if (t && e?.eventSessionOrigin === void 0 && s2()) return C();
  if (!l7n()) return "dynamic workflows are disabled for this session (org policy `allow_workflows`).";
  return null;
}
async function cLn({ script: e, args: t, telemetrySource: f, serverAuthoredCarrier: w = false, eventSessionOrigin: v, context: p }) {
  let i = (s, r) => ({ ok: false, layer: s, line: XJt(s, r) }), S = xct({ serverAuthoredCarrier: w, eventSessionOrigin: v });
  if (S) return i("policy-gate", S);
  let k = w ? iXn : QC;
  if (e.length > k) return i("script-too-large", `workflow script exceeds ${k} bytes.`);
  if (!xI(e)) return i("control-chars", "workflow script contains disallowed control characters.");
  let n = wE(e, { maxBytes: k });
  if ("error" in n) return i("meta-parse", `invalid workflow script: ${n.error}`);
  if (uLn(n.scriptBody)) return i("nondeterminism", "workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.");
  let g = wIe(n.scriptBody);
  if (!g.ok) return i("compile", `workflow script compile failed: ${g.error}`);
  let m = `wf_${y().slice(0, 12)}`, D = NT("local_workflow"), W = aXn(n.meta.name, m, e, p.storageV5), b = mLn(n.meta.name, void 0, false), O = gLn(n.meta.description, void 0, false);
  a("tengu_workflow_launched", { invocation_mode: c(f), workflow_source: c(f), phase_count: n.meta.phases?.length ?? 0, launched_from_subagent: false, has_args: t != null, is_resume: false, script_size_chars: e.length });
  let o = await new Promise((s) => {
    hLn({ taskId: D, workflowRunId: m, script: e, scriptPath: W, args: t, meta: n.meta, vmScript: g.vmScript, toolUseContext: p, canUseTool: p.canUseTool ?? S1, toolUseId: void 0, transcriptDir: BW(m), telemetry: { source: f, name: b, description: O, scriptIsVerbatimBuiltIn: false }, isResume: false, onSettled: s, suppressCompletionNotification: true, withholdScriptFromSdkEvents: w });
  });
  switch (o.status) {
    case "completed": {
      let s = { status: "completed", workflowName: n.meta.name, runId: m, agentCount: o.agentCount, durationMs: o.durationMs, failures: o.failures, result: o.result }, r = d(s);
      if (r === void 0 || r.length > l) {
        let E = r === void 0 ? "not serializable" : `${r.length} chars exceeds ${l}`, u = o.failures.slice(0, 20).map((h) => h.length > 500 ? `${re(h, 500)}…[truncated]` : h);
        if (o.failures.length > u.length) u.push(`…and ${o.failures.length - u.length} more failures omitted`);
        if (r = d({ ...s, failures: u }), r === void 0 || r.length > l) r = d({ ...s, failures: [`<${o.failures.length} failures omitted: diagnostics never outrank the result payload>`] });
        if (r === void 0 || r.length > l) r = d({ ...s, failures: u, result: `<result omitted: ${E}>` });
        if (r === void 0 || r.length > l) r = d({ status: "completed", workflowName: re(String(n.meta.name), 200), runId: m, agentCount: o.agentCount, durationMs: o.durationMs, failures: [`<${o.failures.length} failures omitted: fallback exceeded ${l}>`], result: `<result omitted: ${E}>` }) ?? '{"status":"completed"}';
      }
      return { ok: true, line: `remote-workflow: ${r}`, workflowName: n.meta.name };
    }
    case "failed":
      return i("workflow-failed", `workflow failed after ${o.durationMs}ms (${o.agentCount} agents): ${o.error}`);
    case "killed":
      return i("killed", "workflow was aborted before completion.");
    case "adopted":
    case "unknown":
      return i("unexpected-state", `workflow ended in unexpected state '${o.status}'.`);
  }
}
export {
  XJt,
  cLn,
  xct
};
