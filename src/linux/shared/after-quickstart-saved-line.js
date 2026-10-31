// linux/shared/after-quickstart-saved-line.js — Claude Code 2.1.310（linux）模块 chunk-at4angf3.js
import "./chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "./chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "./chunk-37dd5dd4.js";
import "../artifacts/cowritten-artifact-html.js";
import "../models/claude-3-5-sonnet.js";
import "../auth/oauth-2025-04-20.js";
import "../fs/gitlab-runner-authentication-token.js";
import "./chunk-50219e50.js";
import "../fs/backed-up.js";
import "./chunk-d2c47492.js";
import "./chunk-0870a9b4.js";
import "./environment.js";
import "../fs/chunk-ce5d00cd.js";
import "./chunk-f98598c3.js";
import "./chunk-de56f88d.js";
import "../remote/local-agent.js";
import "./chunk-46ffe22f.js";
import { Xi } from "../artifacts/cobalt-plinth-lovage.js";
import "./chunk-dda594a8.js";
import "./chunk-d1292a44.js";
import { wo } from "./chunk-5c1d3f9e.js";
function c(t, o, a, d) {
  let e = (i, r) => typeof i === "string" && typeof r === "string" && i === a(r), s = e(t.saved_pages_dir, o) ? `[A quickstart in this conversation saved reference pages of this type on disk in ${wo([t.saved_pages_dir])}; its result lists them, so those are not attached here.]` : "";
  if (t.not_listed === true) return s === "" ? "" : `

${s}`;
  let n = s === "" ? "" : ` ${s}`;
  if (typeof t.saved_system === "string" && e(t.saved_system_dir, t.saved_system)) return `

[A quickstart in this conversation already listed the design systems and saved the files of ${Xi(t.saved_system, "(unrecognized address)")} on disk — skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;
  return s === "" ? null : `${d}${n}`;
}
export {
  c as afterQuickstartSavedLine
};
