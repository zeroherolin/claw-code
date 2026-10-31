// linux/ui/watch-system-theme.js — Claude Code 2.1.310（linux）模块 chunk-tymejpvj.js
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../artifacts/cowritten-artifact-html.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import { xD, gm, Ws } from "../terminal/wl-copy.js";
import "../context/chunk-5971c749.js";
import { tDn } from "../shared/chunk-bdfeb227.js";
import "../plugins/chunk-0a4c51cf.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/chunk-0870a9b4.js";
import { i } from "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-de56f88d.js";
import "../shared/chunk-dda594a8.js";
import "../agents/session-stable-address.js";
import "../agents/in-process-teammate.32be.js";
import "../remote/local-agent.js";
import "../shell/chunk-fea9c492.js";
import "../cli/chunk-af2447be.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../remote/self-hosted.js";
import "../context/fetch-project-timeline.js";
import "../mcp/claude-browser.js";
import "../shared/chunk-1b1c4439.js";
import "../shared/chunk-f98598c3.js";
import "../shared/chunk-2fe3b2b7.js";
import "../auth/profile-explicit.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../shared/chunk-537f65d6.js";
import "../git/utf-8.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
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
import "../remote/moved-directory.js";
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
import "../settings/global-config-and-gates.js";
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
import "../permissions/light-daltonized.js";
import { Pfs } from "../terminal/chunk-e4c40fed.js";
import { mhe } from "../telemetry/focus-events.js";
import "../fs/files-directories.js";
import "../workflows/chunk-5e65bb82.js";
import "../fs/chunk-22456fe2.js";
import { SE } from "../terminal/chunk-2969c20f.js";
import "../shared/chunk-28fb8589.js";
import { Vee, zPe } from "../shared/chunk-d55dd270.js";
import { G7t, bTs } from "../shared/chunk-c76f3544.js";
import "../fs/chunk-81d6ccfe.js";
import "../shared/chunk-aa1a72e9.js";
import "../shared/chunk-67236fa7.js";
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
import "../remote/chunk-95151620.js";
var v = 2e3;
function _(e, l, p) {
  let n = false, u = false, y = p?.muxTimeoutMs ?? v, a = Boolean(i.TMUX || i.STY) && !mhe();
  async function c() {
    if (u) return;
    u = true;
    try {
      let r = Pfs(gm.SET_BG_COLOR), s = a ? { ...r, request: xD(r.request) } : r, o, f = a ? "dcs" : "direct";
      if (a) {
        if (o = await Promise.race([e.send(s), X(y, void 0, { unref: true }).then(() => {
          return;
        })]), !o) if (n) e.cancel(s);
        else e.flush(), f = "mux-bare", [o] = await Promise.all([e.send(r), e.flush()]);
      } else [o] = await Promise.all([e.send(s), e.flush()]);
      if (n) return;
      if (!o) {
        t(`systemTheme: OSC 11 query (via=${f}) got no response`, { level: "debug" }), SE().osc11Responsive = false;
        return;
      }
      SE().osc11Responsive = true;
      let m = bTs(o.data);
      if (t(`systemTheme: OSC 11 response=${o.data} detected=${m} via=${f}`, { level: "debug" }), m === void 0) return;
      G7t(m), l(m);
    } finally {
      u = false;
    }
  }
  let d = i.CLAUDE_BG_BACKEND === "daemon";
  if (SE().osc11Responsive !== false && !d) c();
  let T = e.subscribeThemeChange((r) => {
    if (Ws().get(process.stdout)?.modes.isSet("surface")) {
      let s = r ? "dark" : "light";
      t(`systemTheme: theme-change push reported=${s}; surface override active, skipping OSC 11 query`, { level: "debug" }), G7t(s), l(s);
      return;
    }
    c();
  }), h = d ? zPe(() => {
    if (Vee() === "focused") tDn().then(() => {
      if (!n) c();
    });
  }) : void 0;
  return () => {
    n = true, T(), h?.();
  };
}
export {
  _ as watchSystemTheme
};
