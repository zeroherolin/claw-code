// linux/settings/run-memory-settings-edit.js — Claude Code 2.1.310（linux）模块 chunk-kqkn29pt.js
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { Zs } from "../telemetry/chunk-9097a12b.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import "../shared/chunk-d2c47492.js";
import { Hli } from "../shell/invalid-type.js";
import "../telemetry/chunk-9d6962d2.js";
import "../models/claude-3-5-sonnet.js";
import "../auth/oauth-2025-04-20.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-4563156b.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../fs/utf-8.8f8e.js";
import "../fs/chunk-475c6783.js";
import "../plugins/chunk-0a4c51cf.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../shared/chunk-de56f88d.js";
import "../remote/local-agent.js";
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
import "./workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import { pt, Sa } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import "../remote/moved-directory.js";
import "../cli/chunk-af2447be.js";
import "../mcp/init-function-end.js";
import "../models/total-tokens-reminder.js";
import "../shell/spawn-error.js";
import "../models/claude-mythos-preview.js";
import { M, Ue } from "../vendor/zod/string-format.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import "../remote/chunk-95151620.js";
var u = null, l = p(() => {
  let r = { autoMemoryEnabled: M().optional(), autoDreamEnabled: M().optional() };
  return Ue(r).refine((a) => Object.values(a).some((o) => o !== void 0), { error: `it sets none of ${new Intl.ListFormat("en", { type: "disjunction" }).format(Object.keys(r))}` });
});
async function S(r, a) {
  let o = l().safeParse(r);
  if (!o.success) {
    let t = o.error.issues[0];
    return { ok: false, error: t ? t.path.length > 0 ? `Not a memory settings edit (${t.path.map(String).join(".")}: ${t.message}).` : `Not a memory settings edit: ${t.message}.` : "Not a memory settings edit." };
  }
  let e = o.data, d = e.autoDreamEnabled === true && pt().autoDreamEnabled === void 0, i = e, n, s = Hli(e.accountMemory), m = await Sa("userSettings", (t) => {
    if (n = s === void 0 ? void 0 : u?.accountSettingRaiseRefusal(t, s), n !== void 0) return null;
    return i = { ...e, ...e.autoMemoryEnabled !== void 0 && e.accountMemory === void 0 && u?.accountKeyKeptWithAutoMemory(t, e.autoMemoryEnabled) }, i;
  }, void 0, a);
  if (m.error) return { ok: false, error: m.error.message };
  if (n !== void 0) return { ok: false, error: n };
  if (typeof e.autoMemoryEnabled === "boolean") await Zs("tengu_auto_memory_toggled", { enabled: e.autoMemoryEnabled });
  if (typeof e.autoDreamEnabled === "boolean") await Zs("tengu_auto_dream_toggled", { enabled: e.autoDreamEnabled, is_first_enable: d });
  return { ok: true, written: i };
}
export {
  S as runMemorySettingsEdit
};
