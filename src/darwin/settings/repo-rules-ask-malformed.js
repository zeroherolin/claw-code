// darwin/settings/repo-rules-ask-malformed.js — Claude Code 2.1.310（darwin）模块 chunk-fmz27ntz.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { gT } from "../shell/invalid-type.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { dn } from "../mcp/chunk-0e2a1db6.js";
import { Qt } from "./workflow-launch-exec.js";
import { Wwn } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { ag, X3 } from "../permissions/frontmatter-grant-withheld.js";
import { kN } from "../remote/managed-settings-security-dialog-accepted.js";
import { mn } from "../shared/chunk-62f8d501.js";
import { u, Ue, T } from "../vendor/zod/string-format.js";
var n = 262144, s = { deny: [], ask: [] };
function p() {
  if (ag()) return { kind: "read", rules: { projectSettings: s, localSettings: s } };
  let r = l("projectSettings");
  if (r === void 0) return { kind: "unread", source: "projectSettings" };
  let e = l("localSettings");
  return e === void 0 ? { kind: "unread", source: "localSettings" } : { kind: "read", rules: { projectSettings: r, localSettings: e } };
}
function l(r) {
  if (!Qt(r)) return s;
  let e = Wwn(r, n);
  if (e === "unreadable" || e.kind !== "in_effect") return;
  let o = X3(e.settings, r);
  return { deny: a(o, "deny"), ask: a(o, "ask") };
}
function a(r, e) {
  return r.filter((o) => o.ruleBehavior === e).map((o) => dn(o.ruleValue));
}
var i = "anthropic/repoRulesReadHere", j = { [i]: { v: 1 } }, R = f(() => u({ [i]: Ue({ v: T(1) }) })), c = { repoRules: void 0 };
function swe(r, e) {
  if (!mn(e) || !Object.hasOwn(e, i)) return c;
  return R().safeParse(e).success ? m(r) : { refused: { cause: "repo_rules_ask_malformed", message: `${r} was not run: its request asks this server to read the repository's permission rules in a form that this server does not know. Retrying won't help.` } };
}
async function m(r) {
  try {
    await kN();
    let e = p();
    return e.kind === "read" ? { repoRules: e.rules } : { refused: { cause: "repo_rules_file_unread", message: `${r} was not run: this server could not load the repository's ${gT(e.source)} (it cannot be read, is not valid settings, or is over ${n / 1024} KiB), so it cannot tell which of its permission rules apply. Tell the user: that file has to be fixed or removed.` } };
  } catch (e) {
    return t(`The repo's permission rules could not be read: ${d(e)}`, { level: "error" }), { refused: { cause: "repo_rules_read_failed", message: `${r} was not run: this server could not read the repository's permission rules to judge it.` } };
  }
}
export {
  swe
};
