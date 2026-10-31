// darwin/git/start-worker-dir-sync.js — Claude Code 2.1.310（darwin）模块 chunk-p8fkd79g.js
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import { c } from "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../fs/gitlab-runner-authentication-token.js";
import { Y } from "../shared/async-hooks.9e79.js";
import "../models/claude-3-5-sonnet.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-59ffb646.js";
import "../telemetry/chunk-9097a12b.js";
import "../remote/local-agent.js";
import "../remote/moved-directory.js";
import "../settings/global-config-and-gates.js";
import "../shared/chunk-2fe3b2b7.js";
import "../shell/invalid-type.js";
import { p } from "../telemetry/chunk-9d6962d2.js";
import "../shared/async-hooks.5238.js";
import "../fs/utf-8.8f8e.js";
import "../shell/chunk-fea9c492.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.aa9a.js";
import "../auth/descriptor-direct.js";
import "../models/total-tokens-reminder.js";
import "../terminal/xterm-ghostty.js";
import "../cli/chunk-af2447be.js";
import "../mcp/allowed-warning.js";
import "../shared/chunk-4563156b.js";
import "../fs/chunk-475c6783.js";
import "../plugins/chunk-0a4c51cf.js";
import "../shared/chunk-8eee6836.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../shared/chunk-1b1c4439.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../plugins/skills-dir.js";
import "./chunk-c16cb6b4.js";
import "../fs/chunk-86be9585.js";
import "./utf-8.js";
import "../artifacts/chunk-a6c9d164.js";
import "../context/tool-cgroup-exclude-classes.js";
import "./utf8-keep-bom.js";
import "../shared/chunk-d4196a83.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/async-hooks.7959.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../mcp/init-function-end.js";
import "../shell/spawn-error.js";
import "../fs/content-encoding.js";
import "../remote/self-hosted.js";
import "../fs/ca-certs-load.js";
import "../shared/chunk-f98598c3.js";
import "../auth/permission-error.js";
import "../auth/claude-code-user.js";
import "../shell/find-generic-password.js";
import "../shared/async-hooks.b037.js";
import "../settings/ax-sr-suggestion-nav.js";
import "../auth/profile-explicit.js";
import "../fs/chunk-b6c2193e.js";
import "../fs/chunk-21654dda.js";
import "../context/fetch-project-timeline.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../mcp/claude-browser.js";
import "../fs/reply-across-default-dirs.js";
import "../telemetry/chunk-b109a1d6.js";
import "../telemetry/chunk-addb1ac7.js";
import "../agents/chunk-44729602.js";
import "./get-url.js";
import "../shared/chunk-dda594a8.js";
import "../shared/chunk-46ffe22f.js";
import "../artifacts/cobalt-plinth-lovage.js";
import "../computer-use/chunk-217335d0.js";
import "../workflows/chunk-a1595c7e.js";
import "../agents/session-stable-address.js";
import "../agents/in-process-teammate.32be.js";
import "../shared/chunk-537f65d6.js";
import "./ssh-placeholder.js";
import "../shared/chunk-3a99f127.js";
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import { Kv } from "../settings/non-string-value.js";
import "../shared/chunk-471874cc.js";
import { Lut } from "../shared/out-of-order.js";
import { o2s, AUt } from "../context/team-memory-sync.js";
import "../telemetry/flag-off.js";
import "../shared/chunk-de64395b.js";
import { oOe } from "../remote/ccr-synced-file-push.js";
import { Mhs, e_r, Dhs } from "../remote/turn-handoff-flag-wait.js";
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
var l = 5, u = 500, g = 3, h = 5e3, f = { manifestGetAttempts: l, manifestGetRetryDelayMs: u, maxRefusedManifestGets: g, refusedManifestGetDelayMs: h };
async function m(r, e) {
  for (let t = 1; ; t++) {
    let o = await r(AUt);
    switch (o.kind) {
      case "ok":
      case "not_found":
        return { kind: "answered" };
      case "error":
        if (o.status === o2s || !o.retryable) return { kind: "refused", status: o.status ?? 0, errorKind: o.errorKind };
        if (t >= e.manifestGetAttempts) return Y("warn", "file_store_probe_unreachable", { kind: o.errorKind, status: o.status ?? 0 }), { kind: "unreachable" };
        await X(e.manifestGetRetryDelayMs * 2 ** (t - 1), void 0, { unref: true });
    }
  }
}
async function d(r, e = f) {
  let t = (i) => {
    try {
      r.announceVerdict(i);
    } catch {
      Y("error", "file_store_verdict_publish_threw", {});
    }
    return i;
  }, o;
  try {
    o = await r.enabled();
  } catch {
    o = false;
  }
  if (!o) return t("off");
  let s = S(r.onRowStaged ?? Lut.subscribe), n = await a(r, e, t, false);
  return (async () => {
    let i = n;
    while (i === null) await s.next(), i = await a(r, e, t, true);
    s.close();
  })(), n;
}
function S(r) {
  let e = false, t = null, o = r(() => {
    if (t !== null) {
      let s = t;
      t = null, s();
    } else e = true;
  });
  return { next: () => new Promise((s) => {
    if (e) e = false, s();
    else t = s;
  }), close: o };
}
async function a(r, e, t, o) {
  for (let s = 1; ; s++) {
    let n;
    try {
      n = await m(r.getRow, e);
    } catch {
      n = { kind: "unreachable" };
    }
    switch (n.kind) {
      case "answered":
        return t("served");
      case "unreachable":
        return null;
      case "refused":
        if (o && n.errorKind === "auth") return Y("warn", "file_store_probe_refused_after_stage", { status: n.status }), null;
        if (r.hasPreviousCloudInstance && s < e.maxRefusedManifestGets) {
          await X(e.refusedManifestGetDelayMs, void 0, { unref: true });
          continue;
        }
        return Y("warn", "file_store_probe_refused", { kind: n.errorKind, status: n.status }), p("ccr_dir_sync_seed", "manifest_refused", { status: n.status, refusal: c(n.errorKind) }), t("refused");
    }
  }
}
var F = { beforeTurn: async () => {
}, afterTurn: () => {
}, drain: async () => {
} };
function _() {
  return { enabled: Dhs, getRow: oOe, announceVerdict: Mhs, hasPreviousCloudInstance: R() > 1 };
}
function ie(r, e = _(), t = { git: e_r() }, o = t.git ? k(r) : null) {
  return d(e), F;
}
function k(r) {
  return null;
}
function R() {
  let r = Kv().CLAUDE_CODE_WORKER_EPOCH;
  if (r === void 0) return 1;
  let e = Number.parseInt(r, 10);
  return Number.isInteger(e) && e >= 1 ? e : Number.MAX_SAFE_INTEGER;
}
export {
  ie as startWorkerDirSync
};
