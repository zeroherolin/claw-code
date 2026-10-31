// darwin/shell/exec-relaunch.js — Claude Code 2.1.310（darwin）模块 chunk-mds811s7.js
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import { Nt } from "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../models/claude-3-5-sonnet.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import { Kw } from "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-59ffb646.js";
import "../terminal/xterm-ghostty.js";
import "../shared/chunk-3a99f127.js";
import { CM } from "./invalid-type.js";
import { hj, Oo } from "../shared/cli-error.js";
import "../permissions/classifier-transcript-too-long.js";
import "../remote/local-agent.js";
import "../telemetry/chunk-9097a12b.js";
import { zt } from "../telemetry/chunk-9d6962d2.js";
import { wDn } from "../telemetry/terminal-nonblocking-stdout.js";
import { vR } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { rA, nm, _m, PF } from "../shared/chunk-471874cc.js";
import "../settings/global-config-and-gates.js";
import "../shared/chunk-2fe3b2b7.js";
import "../remote/moved-directory.js";
import "../shared/async-hooks.5238.js";
import "../fs/utf-8.8f8e.js";
import "./chunk-fea9c492.js";
import "./chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.aa9a.js";
import "../auth/descriptor-direct.js";
import "../models/total-tokens-reminder.js";
import "../cli/chunk-af2447be.js";
import "../mcp/allowed-warning.js";
import "../shared/chunk-4563156b.js";
import "../fs/chunk-475c6783.js";
import "../plugins/chunk-0a4c51cf.js";
import "../shared/chunk-8eee6836.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../shared/chunk-1b1c4439.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../plugins/skills-dir.js";
import "../git/chunk-c16cb6b4.js";
import "../fs/chunk-86be9585.js";
import "../git/utf-8.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/async-hooks.9e79.js";
import { iP } from "../context/tool-cgroup-exclude-classes.js";
import "../git/utf8-keep-bom.js";
import "../shared/chunk-d4196a83.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/async-hooks.7959.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import "../mcp/init-function-end.js";
import "./spawn-error.js";
import "../fs/content-encoding.js";
import "../remote/self-hosted.js";
import "../fs/ca-certs-load.js";
import "../shared/chunk-f98598c3.js";
import "../auth/permission-error.js";
import "../auth/claude-code-user.js";
import "./find-generic-password.js";
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
import "../auth/auth-launcher-host-login.js";
import "../permissions/turn-abort.js";
import "../settings/non-string-value.js";
import { Iu } from "../fs/chunk-dacd9872.js";
import "../fs/chunk-0b1060fd.js";
import { __t } from "../settings/shared-if-writable.js";
import { hDn, yDn } from "../terminal/chunk-204c4d01.js";
import { SDn } from "../shared/chunk-ed9e66c6.js";
import { hMt, PNn } from "../cli/chunk-29c07bf4.js";
import { qQt, YQt, HMt, XQt, uFn, pFn, BCs, jCs } from "../permissions/chunk-88685f75.js";
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
import { spawn as p, spawnSync as f } from "child_process";
import { closeSync as d } from "fs";
import { constants as E } from "os";
import { isatty as h } from "tty";
function R() {
  for (let o = 0; o < 32; o++) {
    if (o === 1 || o === 2) continue;
    try {
      if (h(o)) d(o);
    } catch {
    }
  }
}
async function Y({ proactivity: o, pinToCurrentBinary: l } = {}) {
  if (iP(), await new Promise((r) => setImmediate(r)), !await PF()) return await zt("agent_launcher", "relaunch_launcher_not_runnable"), process.stderr.write(`
${_m() ?? `${rA}: launcher \`${nm()[0]}\` was deleted or is not executable — restore it (or fix the setting), then start claude again`}
`), Oo(1);
  let s = vR(() => ({ invocation: Iu({ pinToCurrentBinary: l }), env: { ...process.env } })), { cmd: a, prefixArgs: c } = s.invocation, n = process.argv.slice(2), e = __t(s.env);
  if (yDn(e), delete e[hMt], Object.assign(e, PNn()), SDn(e, n), delete e[qQt], delete e[HMt], delete e[XQt], delete e[YQt], o) {
    if (Object.assign(e, pFn(o)), jCs(n)) Object.assign(e, uFn(o), BCs(o));
  }
  if (wDn(), O() === "windows") {
    for (let t of ["SIGINT", "SIGTERM", "SIGHUP", "SIGBREAK"]) process.removeAllListeners(t), process.on(t, () => {
    });
    await Promise.all([Nt(CM(), 2e3, "write queue drain timeout (relaunch)").catch(() => {
    }), hj()]), hDn();
    let r = f(a, [...c, ...n], { stdio: "inherit", env: e });
    if (r.error) process.stderr.write(`Failed to relaunch Claude Code: ${r.error.message}
`), Kw("relaunch_child_error");
    process.exit(r.status ?? 1);
  }
  let i = p(a, [...c, ...n], { stdio: "inherit", env: e });
  R();
  let m = ["SIGINT", "SIGTERM", "SIGHUP"];
  for (let r of m) process.on(r, () => {
    try {
      i.kill(r);
    } catch {
    }
  });
  return new Promise(() => {
    i.on("close", (r, t) => {
      let u = t ? 128 + (E.signals[t] ?? 0) : 0;
      process.exit(r ?? u);
    }), i.on("error", (r) => {
      process.stderr.write(`Failed to relaunch Claude Code: ${r.message}
`), Kw("relaunch_child_error"), process.exit(1);
    });
  });
}
export {
  Y as execRelaunch
};
