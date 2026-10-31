// darwin/settings/find-skip-reason-under-host-pin.js — Claude Code 2.1.310（darwin）模块 chunk-dc4wxzsq.js
import { Ne } from "../fs/async-hooks.93b1.js";
import "../shared/chunk-3b9c376b.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../models/claude-3-5-sonnet.js";
import "../auth/oauth-2025-04-20.js";
import { PI, RS } from "../shell/invalid-type.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../shared/chunk-4563156b.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../fs/utf-8.8f8e.js";
import "../shared/chunk-2fe3b2b7.js";
import "../fs/chunk-475c6783.js";
import "../plugins/chunk-0a4c51cf.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../shared/chunk-59ffb646.js";
import { s$ } from "../remote/local-agent.js";
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
import { Ro } from "./workflow-launch-exec.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "../shared/async-hooks.5238.js";
import "../shell/chunk-fea9c492.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.aa9a.js";
import "../git/utf-8.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/async-hooks.9e79.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../git/utf8-keep-bom.js";
import "../shared/chunk-d4196a83.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/async-hooks.7959.js";
import "../fs/chunk-9b7a3f1c.js";
import { fe, Xm } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import "../remote/moved-directory.js";
import "../cli/chunk-af2447be.js";
import "../mcp/init-function-end.js";
import "../models/total-tokens-reminder.js";
import "../shell/spawn-error.js";
import "../models/claude-mythos-preview.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import "../remote/chunk-95151620.js";
function u(n) {
  if (s$()) return "nested session";
  if (PI() !== false && !RS()) return "server-managed settings not loaded";
  let t = Ro();
  if (!t.includes("userSettings")) return "user settings not read";
  if (Xm().errors.some((e) => e.severity !== "warning" || e.path === "env" || e.path === "")) return "settings not readable";
  return [n, ...t.map((e) => fe(e)?.env)].some((e) => Object.entries(e ?? {}).some(r)) ? "turned off in settings" : null;
}
function r([n, t]) {
  switch (n.toUpperCase()) {
    case "DISABLE_AUTOUPDATER":
    case "DISABLE_UPDATES":
      return Ne(t);
    case "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC":
      return t !== "";
    default:
      return false;
  }
}
export {
  u as findSkipReasonUnderHostPin
};
