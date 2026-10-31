// linux/remote/record-created-pr-to-ccr.js — Claude Code 2.1.310（linux）模块 chunk-5t0tcb8t.js
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import { ui } from "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../plugins/chunk-0a4c51cf.js";
import "../models/claude-3-5-sonnet.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import { _t } from "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-de56f88d.js";
import "../shared/chunk-dda594a8.js";
import "../agents/session-stable-address.js";
import "../agents/in-process-teammate.32be.js";
import "./local-agent.js";
import "../shell/chunk-fea9c492.js";
import "../cli/chunk-af2447be.js";
import "../mcp/toolbox-mcp-server-id.js";
import "./self-hosted.js";
import "../context/fetch-project-timeline.js";
import "../mcp/claude-browser.js";
import "../shared/chunk-1b1c4439.js";
import "../shared/chunk-f98598c3.js";
import "../shared/chunk-2fe3b2b7.js";
import "../auth/profile-explicit.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../shared/chunk-537f65d6.js";
import { wu } from "../git/utf-8.js";
import "../telemetry/chunk-9097a12b.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import "../shared/async-hooks.5238.js";
import "../shared/async-hooks.9e79.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../shared/chunk-8eee6836.js";
import "../git/utf8-keep-bom.js";
import "../git/chunk-c16cb6b4.js";
import "../shared/chunk-4563156b.js";
import "../shared/chunk-d4196a83.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.8f8e.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/utf-8.aa9a.js";
import "../fs/async-hooks.7959.js";
import "../shell/invalid-type.js";
import "../fs/chunk-475c6783.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../plugins/skills-dir.js";
import "../fs/chunk-86be9585.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import "./moved-directory.js";
import "../models/total-tokens-reminder.js";
import "../mcp/init-function-end.js";
import "../shell/spawn-error.js";
import "../fs/content-encoding.js";
import "../auth/descriptor-direct.js";
import "../fs/ca-certs-load.js";
import "../git/ssh-placeholder.js";
import "../fs/reply-across-default-dirs.js";
import "../fs/chunk-b6c2193e.js";
import "../fs/chunk-21654dda.js";
import { PV, jt } from "../settings/global-config-and-gates.js";
import "../mcp/allowed-warning.js";
import "../terminal/xterm-ghostty.js";
import "../auth/permission-error.js";
import "../auth/claude-code-user.js";
import "../shell/find-generic-password.js";
import "../shared/async-hooks.b037.js";
import "../shared/chunk-3a99f127.js";
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import "../settings/ax-sr-suggestion-nav.js";
import "../telemetry/chunk-b109a1d6.js";
import "../telemetry/chunk-addb1ac7.js";
import "../agents/chunk-44729602.js";
import "../git/get-url.js";
import "../shared/chunk-46ffe22f.js";
import "../artifacts/cobalt-plinth-lovage.js";
import "../computer-use/chunk-217335d0.js";
import "../workflows/chunk-a1595c7e.js";
import "../shell/async-hooks.js";
import "./bridge-message-received.js";
import { Yv, zd } from "./chunk-8734517b.js";
import "../telemetry/service-error-detail-not-plain.js";
import { xBo } from "./bridge-project-files-write.js";
import "../shared/chunk-e9fc3352.js";
import "../api/control-response.js";
import "../shared/chunk-cb8096b1.js";
import "../shared/chunk-d1292a44.js";
import "../shared/chunk-6ae01e90.js";
import "../models/claude-mythos-preview.js";
import "../shared/sk-ant-sid.js";
import "../vendor/aws-sdk/chunk-d15f3977.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import "./chunk-95151620.js";
var u = 1500;
async function D(r, e) {
  let d = PV(), c = d ? null : zd() ?? Yv();
  if (!d && !c?.recordCreatedPR) return;
  if (r.provider !== "github") return;
  if (_t()) return;
  let n = r.prRepository.indexOf("/"), s = r.prRepository.slice(0, n), a = r.prRepository.slice(n + 1), p = await wu(e), l = p === "HEAD" ? "" : p;
  try {
    if (c?.recordCreatedPR) {
      let o = await c.recordCreatedPR({ owner: s, repo: a, prNumber: r.prNumber, headRef: l }, u);
      if (o.ok) _(o.status);
      else if ("skipped" in o) R(o.skipped);
      else C(o.kind, o.status);
      return;
    }
    let i = await jt.post(xBo, { owner: s, repo: a, pr_number: r.prNumber, head_ref: l }, { auth: "session-jwt", host: "ccr-session", headers: { "anthropic-version": "2023-06-01" }, timeout: u });
    if (!i.ok) {
      R(i.reason);
      return;
    }
    _(i.status);
  } catch (i) {
    let { kind: o, status: P } = ui(i);
    C(o, P);
  }
}
function _(r) {
  g("ccr_record_created_pr"), t(`recordCreatedPrToCcr: RecordCreatedPR -> ${r}`);
}
function R(r) {
  f("ccr_record_created_pr", r), t(`recordCreatedPrToCcr: skipped (${r})`);
}
function C(r, e) {
  if (e === 404 || e === 501) f("ccr_record_created_pr", "not_deployed");
  else m("ccr_record_created_pr", `${r}${e ? `_${e}` : ""}`);
  t(`recordCreatedPrToCcr: RecordCreatedPR failed: ${r}${e ? ` ${e}` : ""}`);
}
export {
  D as recordCreatedPrToCcr
};
