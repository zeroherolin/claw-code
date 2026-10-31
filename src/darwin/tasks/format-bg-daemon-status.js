// darwin/tasks/format-bg-daemon-status.js — Claude Code 2.1.310（darwin）模块 chunk-3bn5bytj.js
import { __asset_src } from "../../runtime/assets.js";
import { je } from "../plugins/chunk-0a4c51cf.js";
import { ot } from "../fs/chunk-86be9585.js";
import "../fs/async-hooks.93b1.js";
import "../shared/chunk-3b9c376b.js";
import { F } from "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import { I } from "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import "../telemetry/chunk-fd172998.js";
import "../fs/utf-8.8f8e.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../shared/async-hooks.5238.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../shared/chunk-59ffb646.js";
import "../shared/chunk-8eee6836.js";
import "../git/utf8-keep-bom.js";
import "../shell/chunk-fea9c492.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "../fs/chunk-b6c2193e.js";
import "../shell/invalid-type.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../shared/chunk-471874cc.js";
import "../fs/chunk-dacd9872.js";
import { bv } from "../telemetry/not-stopped.js";
import "../shared/chunk-dda594a8.js";
import "../settings/global-config-and-gates.js";
import "../git/utf-8.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/async-hooks.9e79.js";
import "../git/chunk-c16cb6b4.js";
import "../shared/chunk-4563156b.js";
import "../shared/chunk-d4196a83.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/utf-8.aa9a.js";
import "../fs/async-hooks.7959.js";
import "../shared/chunk-2fe3b2b7.js";
import "../remote/local-agent.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../mcp/claude-browser.js";
import "../cli/chunk-af2447be.js";
import "../remote/self-hosted.js";
import "../context/fetch-project-timeline.js";
import "../shared/chunk-1b1c4439.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-475c6783.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../plugins/skills-dir.js";
import "../fs/chunk-9b7a3f1c.js";
import "../remote/moved-directory.js";
import "../mcp/init-function-end.js";
import "../models/total-tokens-reminder.js";
import "../shell/spawn-error.js";
import "../terminal/xterm-ghostty.js";
import "../mcp/allowed-warning.js";
import "../fs/content-encoding.js";
import "../auth/descriptor-direct.js";
import "../fs/ca-certs-load.js";
import "../shared/chunk-f98598c3.js";
import "../auth/permission-error.js";
import "../auth/claude-code-user.js";
import "../shell/find-generic-password.js";
import "../auth/profile-explicit.js";
import "../shared/async-hooks.b037.js";
import "../fs/chunk-21654dda.js";
import "../shared/chunk-3a99f127.js";
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import "../settings/ax-sr-suggestion-nav.js";
import "../fs/reply-across-default-dirs.js";
import "../telemetry/chunk-b109a1d6.js";
import "../telemetry/chunk-addb1ac7.js";
import "../agents/chunk-44729602.js";
import "../git/get-url.js";
import "../shared/chunk-46ffe22f.js";
import "../artifacts/cobalt-plinth-lovage.js";
import "../computer-use/chunk-217335d0.js";
import "../workflows/chunk-a1595c7e.js";
import "../agents/session-stable-address.js";
import "../agents/in-process-teammate.32be.js";
import "../shared/chunk-537f65d6.js";
import "../git/ssh-placeholder.js";
import "../settings/chunk-9121eb73.js";
import "../telemetry/fleet-past-sessions.js";
import { OHe, VC, N3, F3 } from "../fs/attach-journal.js";
import "../permissions/agent-memory.js";
import { Oc, B2e, zUt, sF } from "../telemetry/bg-roster-parse-failed.js";
import { Sh } from "../telemetry/bg-cloud-lease.js";
import { Gee } from "../telemetry/bg-daemon-spawn-reinstall-wait.js";
import { P5e, TPt } from "../permissions/daemon-config.js";
import { u0, rme } from "../shared/chunk-f843925d.js";
import "../shared/chunk-ab773be5.js";
import "../git/not-link.js";
import "../shared/chunk-c564b685.js";
import "../shared/chunk-cb8096b1.js";
import "../shared/chunk-d1292a44.js";
import "../shared/chunk-6ae01e90.js";
import "../models/claude-mythos-preview.js";
import "../shared/sk-ant-sid.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../vendor/aws-sdk/chunk-d15f3977.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import "../remote/chunk-95151620.js";
import { readFile as w, stat as d } from "fs/promises";
async function W(e) {
  let r = await bv(1, e).catch(() => null), t = r?.logPath ?? rme(), [n, a, o, i, b, h] = await Promise.all([Sh({ op: "ping", proto: Oc }, { timeoutMs: 1e3 }).catch((l) => ({ ok: false, code: "ENOCONN", error: String(l) })), sF({ silent: true }, e), S(e), v(t, e), Gee().catch(() => false), y(u0(), e)]), u;
  try {
    u = F3();
  } catch {
    u = O() === "windows" ? "\\\\.\\pipe\\cc-daemon-*" : "<unavailable>";
  }
  let g = null, p = null, k = [];
  if (n.ok) {
    let l = { ok: false }, [c, m] = await Promise.all([Sh({ op: "list", proto: Oc }, { timeoutMs: 1e3 }).catch(() => l), Sh({ op: "leases", proto: Oc }, { timeoutMs: 1e3 }).catch(() => l)]);
    if (c.ok && "jobs" in c) {
      g = F(c.jobs, (s) => !s.outcome);
      let f = r?.version ?? { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION;
      p = F(c.jobs, (s) => !s.outcome && s.cliVersion !== void 0 && s.cliVersion !== f);
    }
    if (m.ok && "clients" in m) k = m.clients.flatMap((f) => B2e().safeParse(f).data ?? []);
  }
  return { supervisor: r ? { pid: r.pid, version: r.version, uptimeSec: Math.floor((Date.now() - r.startedAt) / 1e3) } : null, sockDir: O() === "windows" ? "\\\\.\\pipe\\cc-daemon-*" : OHe(), controlSock: u, controlReachable: n.ok, controlError: n.ok ? void 0 : VC(n.error), workersLive: g, workersSkewed: p, workersRoster: Object.keys(a.workers).length, rosterAgeSec: o ? Math.floor((Date.now() - o.mtimeMs) / 1e3) : null, bgDisabled: r?.bgDisabled === true, logPath: t, logSizeBytes: i?.size ?? null, serviceInstalled: b, configuredWorkers: h, leaseClients: k };
}
async function S(e) {
  if (e) {
    let r = await e.statMeta(zUt()).catch(() => {
      return;
    });
    return r?.ok ? { mtimeMs: r.value.mtimeMs } : null;
  }
  return d(N3()).catch(() => null);
}
async function v(e, r) {
  if (r && e === rme()) {
    let t = await r.statMeta(je.state("daemon-log")).catch(() => {
      return;
    });
    return t?.ok ? { size: t.value.size } : null;
  }
  return d(e).catch(() => null);
}
async function y(e, r) {
  let t;
  if (r && e === u0()) {
    let o = await TPt(r);
    if (o.kind !== "text") return 0;
    t = o.text;
  } else try {
    let o = await d(e);
    if (!o.isFile() || o.size > P5e) return 0;
    t = await w(e, "utf8");
  } catch {
    return 0;
  }
  let n = ot(t, false);
  if (n === null || typeof n !== "object") return 0;
  let a = 0;
  for (let [o, i] of Object.entries(n)) {
    if (o === "$schema") continue;
    a += Array.isArray(i) ? i.length : 1;
  }
  return a;
}
function G(e) {
  let r = ["", "bg sessions:"];
  if (r.push(`  sock dir:     ${e.sockDir}`), r.push(`  control.sock: ${e.controlReachable ? "reachable" : `unreachable (${e.controlError ?? "unknown"})`}`), e.bgDisabled) r.push("  bg sessions:  disabled (start failure — see daemon.log; restart the service after fixing)");
  if (e.workersLive !== null) {
    if (r.push(`  bg workers:   ${e.workersLive} running (control.sock), ${e.workersRoster} in roster.json`), e.workersSkewed && e.workersSkewed > 0) r.push(`                ${e.workersSkewed} from a different CLI version (most stay attachable and upgrade automatically once idle — exec runs never respawn)`);
  } else r.push(`  bg workers:   ${e.workersRoster} in roster.json (${e.controlReachable ? "live count unavailable" : "control unreachable"})`);
  if (r.push(`  roster.json:  ${e.rosterAgeSec === null ? "absent" : `updated ${e.rosterAgeSec}s ago`}`), r.push(`  daemon.log:   ${e.logSizeBytes === null ? "absent" : `${B(e.logSizeBytes)} at ${e.logPath}`}`), !e.supervisor && !e.controlReachable && e.workersRoster > 0) r.push(`  warning:      supervisor not running but ${e.workersRoster} ${I(e.workersRoster, "worker")} in roster — running \`claude agents\` restarts the daemon and re-adopts still-running sessions; run \`claude daemon stop --any\` to reap them instead`);
  return r.join(`
`);
}
function B(e) {
  if (e < 1024) return `${e}B`;
  if (e < 1048576) return `${(e / 1024).toFixed(1)}KB`;
  return `${(e / 1024 / 1024).toFixed(1)}MB`;
}
export {
  G as formatBgDaemonStatus,
  W as getBgDaemonStatus
};
