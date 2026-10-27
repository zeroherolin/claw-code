// shared/run-headless-cloud-print-arm.wx7f.js — Claude Code 2.1.310 模块 chunk-wx7fbze9.js
import "./chunk-9sbknd2z.js";
import "../fs/async-hooks.9s1z.js";
import "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import "../agents/third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "./chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "./chunk-3y73jbfr.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "./chunk-nrx8c90j.js";
import "./environment.9a41.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../fs/gitlab-runner-authentication-token.d7b0.js";
import "./chunk-x6r6k81p.js";
import "../fs/backed-up.p1qn.js";
import "./chunk-j79dwkaq.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/chunk-dz0rx1wn.js";
import "./chunk-4kxy1036.js";
import "../vendor/chalk/xterm-ghostty.qrwz.js";
import "./chunk-w13tcac4.js";
import { fn } from "./cli-error.bk7h.js";
async function i(r, s) {
  let t = o(r.remote, r.inputPrompt);
  if (t === null) return fn("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");
  let { runHeadlessCloudPrint: e } = await import("../remote/run-headless-cloud-print.20be.js");
  return e(r, s, { prompt: t, outputFormat: r.outputFormat === "json" ? "json" : "text" });
}
function o(r, s) {
  let t = [r ?? "", typeof s === "string" ? s : ""].filter((e) => e.trim() !== "");
  return t.length === 0 ? null : t.join(`
`);
}
export {
  i as runHeadlessCloudPrintArm
};
