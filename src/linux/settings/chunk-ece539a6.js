// linux/settings/chunk-ece539a6.js — Claude Code 2.1.310（linux）模块 chunk-238vvv39.js
import { __asset_src } from "../../runtime/assets.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { yv, p0e } from "./global-config-and-gates.js";
import { pe } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { oy } from "../mcp/allowed-warning.js";
import { Ce } from "../vendor/react/chunk-0b0bf45d.js";
var o = Ce(oy(), 1);
var s = /* @__PURE__ */ new Set(["update", "install", "doctor"]);
function u({ currentVersion: e, requiredMinimumVersion: r, requiredMaximumVersion: n, topLevelCommand: a }) {
  if (!r && !n) return null;
  if (a !== void 0 && s.has(a)) return null;
  if (!o.parse(e)) return null;
  if (r) {
    let i = o.parse(r)?.version;
    if (!i) t(`requiredMinimumVersion '${r}' is not a valid semver version — ignoring`, { level: "error" });
    else if (!yv(e, i)) return `Claude Code ${e} is older than the minimum version required by your organization (${r}).
Update Claude Code using your organization's approved method, then try again. If automatic updates are available, \`claude update\` may also work.`;
  }
  if (n) {
    let i = o.parse(n)?.version;
    if (!i) t(`requiredMaximumVersion '${n}' is not a valid semver version — ignoring`, { level: "error" });
    else if (!p0e(e, i)) return `Claude Code ${e} is newer than the maximum version allowed by your organization (${n}).
Your organization requires version ${n} or older. Install an approved version using your organization's approved method. \`claude install <version>\` may also work.`;
  }
  return null;
}
function bQs(e) {
  try {
    let r = e.parent ? e : null;
    while (r?.parent?.parent) r = r.parent;
    let n = pe("policySettings");
    return u({ currentVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, requiredMinimumVersion: n?.requiredMinimumVersion, requiredMaximumVersion: n?.requiredMaximumVersion, topLevelCommand: r?.name() });
  } catch (r) {
    return l(r), null;
  }
}
function SQs() {
  try {
    let e = pe("policySettings");
    return u({ currentVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, requiredMinimumVersion: e?.requiredMinimumVersion, requiredMaximumVersion: e?.requiredMaximumVersion, topLevelCommand: void 0 });
  } catch (e) {
    return l(e), null;
  }
}
export {
  SQs,
  bQs
};
