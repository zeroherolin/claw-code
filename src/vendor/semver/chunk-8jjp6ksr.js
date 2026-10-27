// vendor/semver/chunk-8jjp6ksr.js — Claude Code 2.1.310 模块 chunk-8jjp6ksr.js
import { __asset_src } from "../../runtime/assets.js";
import { t } from "../../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../../artifacts/cowritten-artifact-html.thm2.js";
import { _E, SLe } from "../../settings/global-config-and-gates.27xj.js";
import { fe } from "../../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { oy } from "../../mcp/allowed-warning.j2d4.js";
import { Ae } from "../react/chunk-meds60nn.js";
var o = Ae(oy(), 1);
var s = /* @__PURE__ */ new Set(["update", "install", "doctor"]);
function u({ currentVersion: e, requiredMinimumVersion: r, requiredMaximumVersion: n, topLevelCommand: a }) {
  if (!r && !n) return null;
  if (a !== void 0 && s.has(a)) return null;
  if (!o.parse(e)) return null;
  if (r) {
    let i = o.parse(r)?.version;
    if (!i) t(`requiredMinimumVersion '${r}' is not a valid semver version — ignoring`, { level: "error" });
    else if (!_E(e, i)) return `Claude Code ${e} is older than the minimum version required by your organization (${r}).
Update Claude Code using your organization's approved method, then try again. If automatic updates are available, \`claude update\` may also work.`;
  }
  if (n) {
    let i = o.parse(n)?.version;
    if (!i) t(`requiredMaximumVersion '${n}' is not a valid semver version — ignoring`, { level: "error" });
    else if (!SLe(e, i)) return `Claude Code ${e} is newer than the maximum version allowed by your organization (${n}).
Your organization requires version ${n} or older. Install an approved version using your organization's approved method. \`claude install <version>\` may also work.`;
  }
  return null;
}
function rQs(e) {
  try {
    let r = e.parent ? e : null;
    while (r?.parent?.parent) r = r.parent;
    let n = fe("policySettings");
    return u({ currentVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, requiredMinimumVersion: n?.requiredMinimumVersion, requiredMaximumVersion: n?.requiredMaximumVersion, topLevelCommand: r?.name() });
  } catch (r) {
    return l(r), null;
  }
}
function oQs() {
  try {
    let e = fe("policySettings");
    return u({ currentVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, requiredMinimumVersion: e?.requiredMinimumVersion, requiredMaximumVersion: e?.requiredMaximumVersion, topLevelCommand: void 0 });
  } catch (e) {
    return l(e), null;
  }
}
export {
  oQs,
  rQs
};
