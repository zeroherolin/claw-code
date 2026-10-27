// settings/run-memory-settings-edit.21rw.js — Claude Code 2.1.310 模块 chunk-21rwrj8q.js
import "../shared/chunk-9sbknd2z.js";
import "../fs/async-hooks.9s1z.js";
import "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import "../agents/third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "../shared/chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "../shared/chunk-3y73jbfr.js";
import { Zs } from "../telemetry/chunk-wq923bwc.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import "../shared/chunk-j79dwkaq.js";
import { Sdi } from "../shell/invalid-type.qnva.js";
import "../telemetry/chunk-wn8xtaqg.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-x6r6k81p.js";
import "../fs/backed-up.p1qn.js";
import "../shared/chunk-abagh0tt.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/chunk-dz0rx1wn.js";
import "../fs/utf-8.7pve.js";
import "../fs/chunk-w461d8x8.js";
import "../plugins/chunk-x0a7sawk.js";
import "../shared/chunk-nrx8c90j.js";
import "../shared/environment.9a41.js";
import "../shared/chunk-4kxy1036.js";
import "../remote/local-agent.we9a.js";
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
import "../shared/async-hooks.m2fg.js";
import "../shell/chunk-gx93fya1.js";
import "../shell/chunk-tjkwy3jp.js";
import "../context/utf-8.yzy3.js";
import "../fs/utf-8.fmbx.js";
import "../git/utf-8.vh7e.js";
import "../artifacts/chunk-m8t7qekn.js";
import "../shared/async-hooks.923e.js";
import "../context/tool-cgroup-exclude-classes.t1za.js";
import "../git/utf8-keep-bom.c49x.js";
import "../shared/chunk-daaayw23.js";
import "../fs/tempdir-owner-mismatch.5xe1.js";
import "../fs/async-hooks.2k4e.js";
import "./workflow-launch-exec.t4r2.js";
import "../shared/chunk-s56ftfc1.js";
import { mt, wa } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import "../remote/moved-directory.z3m0.js";
import "../cli/chunk-33ax6j5s.js";
import "../mcp/init-function-end.wpfb.js";
import "../models/total-tokens-reminder.psq3.js";
import "../shell/spawn-error.7yg0.js";
import "../models/claude-mythos-preview.rw6s.js";
import { M, Ue } from "../vendor/zod/string-format.k395.js";
import "../shared/chunk-s06z5etx.js";
import "../shared/chunk-81mpzfkq.js";
import "../fs/not-utf8.sqq6.js";
import "../context/tool-result.evq2.js";
import "../shared/chunk-bhdett2m.js";
import "../shared/chunk-n07cvysj.js";
import "../shared/chunk-19a02m7w.js";
import "../remote/chunk-t0kv6pst.js";
var u = null, l = f(() => {
  let r = { autoMemoryEnabled: M().optional(), autoDreamEnabled: M().optional() };
  return Ue(r).refine((a) => Object.values(a).some((o) => o !== void 0), { error: `it sets none of ${new Intl.ListFormat("en", { type: "disjunction" }).format(Object.keys(r))}` });
});
async function S(r, a) {
  let o = l().safeParse(r);
  if (!o.success) {
    let t = o.error.issues[0];
    return { ok: false, error: t ? t.path.length > 0 ? `Not a memory settings edit (${t.path.map(String).join(".")}: ${t.message}).` : `Not a memory settings edit: ${t.message}.` : "Not a memory settings edit." };
  }
  let e = o.data, d = e.autoDreamEnabled === true && mt().autoDreamEnabled === void 0, i = e, n, s = Sdi(e.accountMemory), m = await wa("userSettings", (t) => {
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
