// darwin/cli/run-preload.js — Claude Code 2.1.310（darwin）模块 chunk-mfb582xn.js
import { Jwe } from "../context/chunk-2446c767.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/async-hooks.9e79.js";
import "../models/claude-3-5-sonnet.js";
import "../shared/chunk-0870a9b4.js";
import { i } from "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-59ffb646.js";
import "../shared/chunk-de64395b.js";
import "../shell/invalid-type.js";
import "../shared/chunk-8eee6836.js";
import "../fs/tempdir-owner-mismatch.js";
import "../permissions/agent-memory.js";
import "../settings/global-config-and-gates.js";
import "../git/utf-8.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/async-hooks.5238.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../git/utf8-keep-bom.js";
import "../shell/chunk-fea9c492.js";
import "../git/chunk-c16cb6b4.js";
import "../shared/chunk-4563156b.js";
import "../shared/chunk-d4196a83.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.8f8e.js";
import "../fs/utf-8.aa9a.js";
import "../fs/async-hooks.7959.js";
import "../plugins/chunk-0a4c51cf.js";
import "../fs/chunk-86be9585.js";
import "../shared/chunk-2fe3b2b7.js";
import "../remote/local-agent.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../mcp/claude-browser.js";
import "./chunk-af2447be.js";
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
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
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
import "../fs/chunk-b6c2193e.js";
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
import "../shared/chunk-dda594a8.js";
import "../shared/chunk-46ffe22f.js";
import "../artifacts/cobalt-plinth-lovage.js";
import "../computer-use/chunk-217335d0.js";
import "../workflows/chunk-a1595c7e.js";
import "../agents/session-stable-address.js";
import "../agents/in-process-teammate.32be.js";
import "../shared/chunk-537f65d6.js";
import "../git/ssh-placeholder.js";
import "../settings/non-string-value.js";
import "../shared/chunk-471874cc.js";
import { Hr } from "../mcp/spawn-to-exec-ms.js";
import { rAn, oAn } from "./bg-claim-env-dropped.js";
import "../shared/chunk-d629da11.js";
import "../git/not-link.js";
import "../shared/chunk-cb51a297.js";
import "../shared/chunk-c564b685.js";
import "../agents/chunk-f334f2d3.js";
import "../shared/chunk-b09058c6.js";
import "../auth/none-at-claim.js";
import "../shared/chunk-339a284e.js";
import "../shared/chunk-7e745eb7.js";
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
import { mkdirSync as C, unlinkSync as S, writeFileSync as I } from "fs";
import { dirname as v } from "path";
var h = "/home/claude/.claude/remote/spare.sock";
async function P(r, n) {
  let e = r[0] || h, c = `${e}.pid`, m = n(), p = Promise.resolve(), g = false;
  for (let o of Jwe) delete process.env[o];
  try {
    C(v(e), { recursive: true, mode: 448 }), S(e);
  } catch {
  }
  let t = () => {
    for (let o of [e, c]) try {
      S(o);
    } catch {
    }
  }, l = () => {
    t(), process.exit(0);
  }, u = (o) => {
    t(), process.stderr.write(`[preload] uncaughtException: ${d(o)}
`), process.exit(1);
  };
  for (let o of ["SIGTERM", "SIGHUP", "SIGINT"]) process.on(o, l);
  process.on("uncaughtException", u);
  let s;
  try {
    s = await rAn(e, () => {
      I(c, String(process.pid), { mode: 384 }), p = w();
    });
  } catch (o) {
    t(), process.stderr.write(`[preload] claim recv failed: ${d(o)}
`), process.exit(1);
  }
  let f = performance.now(), E = Date.now();
  for (let o of ["SIGTERM", "SIGHUP", "SIGINT"]) process.off(o, l);
  process.off("uncaughtException", u), t();
  let a = Number.parseInt(s.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
  if (Number.isFinite(a)) Hr("spare_claim_read_from_spawn_ms", E - a, a - performance.timeOrigin);
  await m, await p, Hr("spare_claim_module_wait_ms", performance.now() - f, f), await oAn(s, m, () => {
  });
}
function w() {
  let r = [import("./headless-print-mode.js"), import("../auth/is-desktop-entrypoint-exempted.js"), import("../shell/install-observer-spawner.js"), import("../telemetry/big-query-export-interval-ms.js"), import("../tasks/is-last-cleanup-sentinel-fresh.js")];
  if (r.push(import("../remote/current-sender-class.js")), i.CLAUDE_CODE_REMOTE) r.push(import("../auth/agent-proxies.js"));
  return Promise.allSettled(r);
}
function U(r, n = () => import("./main.js")) {
  return P(r, n);
}
export {
  U as runPreload
};
