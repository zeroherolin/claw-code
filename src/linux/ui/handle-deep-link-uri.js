// linux/ui/handle-deep-link-uri.js — Claude Code 2.1.310（linux）模块 chunk-7t0r3jfb.js
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../telemetry/chunk-9097a12b.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../shared/chunk-0870a9b4.js";
import { hc, i } from "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-de56f88d.js";
import { ue } from "../settings/global-config-and-gates.js";
import "../remote/local-agent.js";
import "../shell/chunk-fea9c492.js";
import "../terminal/xterm-ghostty.js";
import "../cli/chunk-af2447be.js";
import "../shared/chunk-2fe3b2b7.js";
import "../models/total-tokens-reminder.js";
import "../mcp/allowed-warning.js";
import "../shell/invalid-type.js";
import "../shared/chunk-4563156b.js";
import "../fs/utf-8.8f8e.js";
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
import "../git/chunk-c16cb6b4.js";
import "../fs/chunk-86be9585.js";
import "../shared/async-hooks.5238.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.aa9a.js";
import "../git/utf-8.js";
import "../artifacts/chunk-a6c9d164.js";
import "../shared/async-hooks.9e79.js";
import { II } from "../context/tool-cgroup-exclude-classes.js";
import { it } from "../git/utf8-keep-bom.js";
import "../shared/chunk-d4196a83.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/async-hooks.7959.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../remote/moved-directory.js";
import "../mcp/init-function-end.js";
import "../shell/spawn-error.js";
import "../fs/content-encoding.js";
import "../auth/descriptor-direct.js";
import "../remote/self-hosted.js";
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
import "../mcp/toolbox-mcp-server-id.js";
import "../settings/ax-sr-suggestion-nav.js";
import "../context/fetch-project-timeline.js";
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
import { ags } from "../plugins/install-plugin.js";
import "../shared/chunk-471874cc.js";
import "../fs/chunk-dacd9872.js";
import "../fs/deep-link-register-failed.js";
import { rCn, oCn } from "../fs/chunk-0e22c0a4.js";
import { Pds } from "../agents/fullscreen-upsell-trial-persisted.js";
import { vLn } from "../plugins/install-from-source.js";
import "../telemetry/chunk-ce222b3e.js";
import "../shared/chunk-c564b685.js";
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
import { realpath as R } from "fs/promises";
import { homedir as T } from "os";
import { spawn as x } from "child_process";
import { basename as C } from "path";
var u = [{ name: "iTerm2", bundleId: "com.googlecode.iterm2", app: "iTerm" }, { name: "Ghostty", bundleId: "com.mitchellh.ghostty", app: "Ghostty" }, { name: "Kitty", bundleId: "net.kovidgoyal.kitty", app: "kitty" }, { name: "Alacritty", bundleId: "org.alacritty", app: "Alacritty" }, { name: "WezTerm", bundleId: "com.github.wez.wezterm", app: "WezTerm" }, { name: "Terminal.app", bundleId: "com.apple.Terminal", app: "Terminal", termProgramAliases: ["apple_terminal"] }], I = ["ghostty", "kitty", "alacritty", "wezterm", "gnome-terminal", "konsole", "xfce4-terminal", "mate-terminal", "tilix", "xterm"];
async function S() {
  let r = ue().deepLinkTerminal;
  if (r) {
    let e = u.find((a) => a.app === r);
    if (e) return { name: e.name, command: e.app };
  }
  let n = i.TERM_PROGRAM;
  if (n) {
    let e = n.replace(/\.app$/i, "").toLowerCase(), a = u.find((s) => s.app.toLowerCase() === e || s.name.toLowerCase() === e || s.termProgramAliases?.includes(e));
    if (a) return { name: a.name, command: a.app };
  }
  for (let e of u) {
    let { code: a, stdout: s } = await it("mdfind", [`kMDItemCFBundleIdentifier == "${e.bundleId}"`], { timeout: 5e3, useCwd: false });
    if (a === 0 && s.trim().length > 0) return { name: e.name, command: e.app };
  }
  for (let e of u) {
    let { code: a } = await it("ls", [`/Applications/${e.app}.app`], { timeout: 1e3, useCwd: false });
    if (a === 0) return { name: e.name, command: e.app };
  }
  return { name: "Terminal.app", command: "Terminal" };
}
async function F() {
  let r = i.TERMINAL;
  if (r) {
    let e = await hc(r);
    if (e) return { name: C(r), command: e };
  }
  let n = await hc("x-terminal-emulator");
  if (n) return { name: "x-terminal-emulator", command: n };
  for (let e of I) {
    let a = await hc(e);
    if (a) return { name: e, command: a };
  }
  return null;
}
async function A() {
  let r = await hc("wt.exe");
  if (r) return { name: "Windows Terminal", command: r };
  let n = await hc("pwsh.exe");
  if (n) return { name: "PowerShell", command: n };
  let e = await hc("powershell.exe");
  if (e) return { name: "PowerShell", command: e };
  return { name: "Command Prompt", command: i.ComSpec || `${i.SystemRoot || "C:\\Windows"}\\System32\\cmd.exe` };
}
async function M() {
  switch ("linux") {
    case "darwin":
      return S();
    case "linux":
      return F();
    case "win32":
      return A();
    default:
      return null;
  }
}
async function y(r, n) {
  let e = await M();
  if (!e) return t("No terminal emulator detected", { level: "error" }), false;
  t(`Launching in terminal: ${e.name} (${e.command})`);
  let a = ["--deep-link-origin"];
  if (n.repo) {
    if (a.push(`--deep-link-repo=${n.repo}`), n.lastFetchMs !== void 0) a.push(`--deep-link-last-fetch=${n.lastFetchMs}`);
  }
  if (n.query) a.push(`--prefill=${n.query}`);
  switch ("linux") {
    case "darwin":
      return k(e, r, a, n);
    case "linux":
      return E(e, r, a, n);
    case "win32":
      return v(e, r, n);
    default:
      return false;
  }
}
async function k(r, n, e, a) {
  let { cwd: s } = a;
  switch (r.command) {
    case "iTerm": {
      let o = f(n, a), l = `tell application "iTerm"
  if running then
    create window with default profile
  else
    activate
  end if
  tell current session of current window
    write text ${w(o)}
  end tell
end tell`, { code: c } = await it("osascript", ["-e", l], { useCwd: false });
      if (c === 0) return true;
      break;
    }
    case "Terminal": {
      let o = f(n, a), l = `tell application "Terminal"
  do script ${w(o)}
  activate
end tell`, { code: c } = await it("osascript", ["-e", l], { useCwd: false });
      return c === 0;
    }
    case "Ghostty": {
      let o = ["-na", r.command, "--args", "--window-save-state=never"];
      if (s) o.push(`--working-directory=${s}`);
      o.push("-e", n, ...p(a));
      let { code: l } = await it("open", o, { useCwd: false });
      if (l === 0) return true;
      break;
    }
    case "Alacritty": {
      let o = ["-na", r.command, "--args"];
      if (s) o.push("--working-directory", s);
      o.push("-e", n, ...e);
      let { code: l } = await it("open", o, { useCwd: false });
      if (l === 0) return true;
      break;
    }
    case "kitty": {
      let o = ["-na", r.command, "--args"];
      if (s) o.push("--directory", s);
      o.push(n, ...e);
      let { code: l } = await it("open", o, { useCwd: false });
      if (l === 0) return true;
      break;
    }
    case "WezTerm": {
      let o = ["-na", r.command, "--args", "start"];
      if (s) o.push("--cwd", s);
      o.push("--", n, ...e);
      let { code: l } = await it("open", o, { useCwd: false });
      if (l === 0) return true;
      break;
    }
  }
  return t(`Failed to launch ${r.name}, falling back to Terminal.app`), k({ name: "Terminal.app", command: "Terminal" }, n, e, a);
}
async function E(r, n, e, a) {
  let { cwd: s } = a, o, l;
  switch (r.name) {
    case "gnome-terminal":
      o = s ? [`--working-directory=${s}`, "--"] : ["--"], o.push(n, ...e);
      break;
    case "konsole":
      o = s ? ["--workdir", s, "-e"] : ["-e"], o.push(n, ...e);
      break;
    case "kitty":
      o = s ? ["--directory", s] : [], o.push(n, ...e);
      break;
    case "wezterm":
      o = s ? ["start", "--cwd", s, "--"] : ["start", "--"], o.push(n, ...e);
      break;
    case "alacritty":
      o = s ? ["--working-directory", s, "-e"] : ["-e"], o.push(n, ...e);
      break;
    case "ghostty":
      o = s ? [`--working-directory=${s}`, "-e"] : ["-e"], o.push(n, ...p(a));
      break;
    case "xfce4-terminal":
    case "mate-terminal":
      o = s ? [`--working-directory=${s}`, "-x"] : ["-x"], o.push(n, ...e);
      break;
    case "tilix":
      o = s ? [`--working-directory=${s}`, "-e"] : ["-e"], o.push(n, ...p(a));
      break;
    default:
      o = ["-e", n, ...p(a)], l = s;
      break;
  }
  return b(r.command, o, { cwd: l });
}
async function v(r, n, e) {
  let a = [], s = p(e), o = e.cwd;
  switch (r.name) {
    case "Windows Terminal": {
      let l = (c) => c.replaceAll(";", "\\;");
      if (o) a.push("-d", l(o));
      a.push("--", l(n), ...s);
      break;
    }
    case "PowerShell": {
      a.push("-NoExit", "-Command", `& ${q(n)} ${s.join(" ")}`);
      break;
    }
    default: {
      let l = `${h(n)} ${s.map(h).join(" ")}`;
      a.push("/d", "/v:off", "/s", "/k", `"${l}"`);
      break;
    }
  }
  return b(r.command, a, { windowsVerbatimArguments: r.name === "Command Prompt", cwd: e.cwd });
}
async function b(r, n, e = {}) {
  let a = (s) => new Promise((o) => {
    let l = (d) => {
      t(`Failed to spawn ${r}: ${d.message}`, { level: "error" }), o(false);
    }, c;
    try {
      c = x(r, n, { detached: true, stdio: "ignore", windowsHide: false, cwd: s, windowsVerbatimArguments: e.windowsVerbatimArguments });
    } catch (d) {
      return l(d);
    }
    II(c.pid), c.once("error", l), c.once("spawn", () => {
      c.unref(), o(true);
    });
  });
  if (await a(e.cwd)) return true;
  if (e.cwd) return a(void 0);
  return false;
}
var L = /^[A-Za-z0-9 /._=-]+$/;
function p(r) {
  let n = (a) => Buffer.from(a, "utf8").toString("base64url"), e = ["--deep-link-origin"];
  if (r.repo) e.push(`--deep-link-repo=${r.repo}`);
  if (r.lastFetchMs !== void 0) e.push(`--deep-link-last-fetch=${r.lastFetchMs}`);
  if (r.cwd) e.push(`--deep-link-cwd-b64=${n(r.cwd)}`);
  if (r.query) e.push(`--prefill-b64=${n(r.query)}`);
  return e;
}
function f(r, n) {
  let e = p(n).join(" ");
  if (!L.test(e)) throw Error(`Internal error: shell-safe args contain metacharacters: ${e}`);
  if (/^[A-Za-z0-9/._-]+$/.test(r)) return `${r} ${e}`;
  if (/['\\!$\n]/.test(r)) throw Error(`Deep-link launch unsupported: the claude binary path "${r}" contains a single quote, backslash, exclamation mark, dollar sign, or newline, which cannot be portably quoted for every login shell. Reinstall claude to a path without these characters to use deep links with iTerm2 or Terminal.app.`);
  return `'${r}' ${e}`;
}
function w(r) {
  return `"${r.replaceAll("\\", "\\\\").replaceAll('"', '\\"').replaceAll(`
`, "\\n").replaceAll("	", "\\t")}"`;
}
function q(r) {
  if (/[\u2018\u2019\u201A\u201B]/.test(r)) throw Error("Cannot safely quote a Unicode single-quote variant (U+2018-U+201B) in a PowerShell path; install Windows Terminal (wt.exe).");
  return `'${r.replaceAll('"', "").replaceAll("'", "''")}'`;
}
function h(r) {
  return `"${r.replace(/[\n\t]/g, " ").replace(/["%]/g, "").replace(/(\\+)$/, "$1$1")}"`;
}
async function ae(r) {
  t(`Handling deep link URI: ${r}`);
  let n;
  try {
    n = ags(r);
  } catch (o) {
    let l = o instanceof Error ? o.message : String(o);
    return console.error(`Deep link error: ${l}`), m("deep_link_handle", "parse_failed"), 1;
  }
  t(`Parsed deep link action: ${_(n)}`);
  let e = await R(process.execPath).catch(() => process.execPath), a;
  switch (n.action) {
    case "open": {
      let { cwd: o, resolvedRepo: l } = await D(n), c = l ? await Pds(o) : void 0;
      a = { query: n.query, cwd: o, repo: l, lastFetchMs: c?.getTime() };
      break;
    }
    case "install-plugin":
      a = { cwd: T(), query: vLn({ plugin: n.plugin, marketplaceSource: n.marketplace }) };
      break;
  }
  let s;
  try {
    s = await y(e, a);
  } catch (o) {
    let l = o instanceof Error ? o.message : String(o);
    return console.error(`Deep link error: ${l}`), m("deep_link_handle", "launch_error"), 1;
  }
  if (!s) return console.error("Failed to open a terminal. Make sure a supported terminal emulator is installed."), m("deep_link_handle", "no_terminal"), 1;
  return g("deep_link_handle"), 0;
}
async function D(r) {
  if (r.cwd) return { cwd: r.cwd };
  if (r.repo) {
    let n = rCn(r.repo), e = await oCn(n);
    if (e[0]) return t(`Resolved repo ${r.repo} → ${e[0]}`), { cwd: e[0], resolvedRepo: r.repo };
    t(`No local clone found for repo ${r.repo}, falling back to home`);
  }
  return { cwd: T() };
}
export {
  ae as handleDeepLinkUri
};
