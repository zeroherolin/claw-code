// linux/shared/run-headless-cloud-print-arm.js — Claude Code 2.1.310（linux）模块 chunk-k87qsxba.js
import "./chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "./chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "./chunk-37dd5dd4.js";
import "../models/claude-3-5-sonnet.js";
import "./chunk-0870a9b4.js";
import "./environment.js";
import "../auth/oauth-2025-04-20.js";
import "../fs/gitlab-runner-authentication-token.js";
import "./chunk-50219e50.js";
import "../fs/backed-up.js";
import "./chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "./chunk-de56f88d.js";
import "../terminal/xterm-ghostty.js";
import "./chunk-3a99f127.js";
import { pn } from "./cli-error.js";
async function i(r, s) {
  let t = o(r.remote, r.inputPrompt);
  if (t === null) return pn("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");
  let { runHeadlessCloudPrint: e } = await import("../remote/run-headless-cloud-print.js");
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
