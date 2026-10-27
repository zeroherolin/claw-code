// cli/drop-worktree-registrations.kkd4.js — Claude Code 2.1.310 模块 chunk-kkd4801m.js
import { pe } from "../shared/async-hooks.m2fg.js";
import { ot } from "../fs/chunk-gzs70jxe.js";
import { _ } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { fn, $U, Fp, Oo } from "../shared/cli-error.bk7h.js";
async function p5e(o = m) {
  let { env: d } = await import("../ide/ant-env.gvny.js");
  return d.CLAUDE_CODE_CHILD_SESSION ? o : void 0;
}
var m = "This setting cannot be changed from an editor started inside a Claude Code session. Start the editor outside the session and try again.", f = "Claude Design cannot be signed in from inside a Claude Code session. Start the editor outside the session and try again.";
async function a(o) {
  let d = [], i = 0, n = Bun.stdin.stream().getReader();
  for (; ; ) {
    let { done: r, value: t } = await n.read();
    if (r) break;
    if (i += t.byteLength, i > o) return await n.cancel(), null;
    d.push(t);
  }
  return new TextDecoder().decode(Buffer.concat(d));
}
function Vno(o, d) {
  o.command("edit-permission-rules", { hidden: true }).allowExcessArguments(false).description("Apply one permission-rule edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async (i) => {
    if (process.stdin.isTTY) return fn("claude edit-permission-rules reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let n = await p5e();
    if (n !== void 0) return fn(n);
    let { runPermissionRuleEdit: r } = await import("../permissions/run-permission-rule-edit.a4q5.js"), t = await a(2097152), s = t === null ? null : ot(t, false);
    if (s === null) return fn("claude edit-permission-rules: stdin is not a JSON edit");
    let e = await r(s, i);
    if (!e.ok) return fn(e.error);
    return await Fp(_({ ok: true, warnings: e.warnings, stored: e.stored }) + `
`), $U();
  })), o.command("edit-memory-settings", { hidden: true }).allowExcessArguments(false).description("Apply one memory-settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async (i) => {
    if (process.stdin.isTTY) return fn("claude edit-memory-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let n = await p5e();
    if (n !== void 0) return fn(n);
    let { runMemorySettingsEdit: r } = await import("../settings/run-memory-settings-edit.21rw.js"), t = await a(4096), s = t === null ? null : ot(t, false);
    if (s === null) return fn("claude edit-memory-settings: stdin is not a JSON edit");
    let e = await r(s, i);
    if (!e.ok) return fn(e.error);
    return await Fp(_({ ok: true, written: e.written }) + `
`), Oo(0);
  })), o.command("edit-skill-overrides", { hidden: true }).allowExcessArguments(false).description("Apply one skill state edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async (i) => {
    if (process.stdin.isTTY) return fn("claude edit-skill-overrides reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let n = await p5e();
    if (n !== void 0) return fn(n);
    let { runSkillOverrideEdit: r } = await import("../skills/run-skill-override-edit.yx1c.js"), t = await a(4096), s = t === null ? null : ot(t, false);
    if (s === null) return fn("claude edit-skill-overrides: stdin is not a JSON edit");
    let e = await r(s, pe(), i);
    if (!e.ok) return fn(e.error);
    return await Fp(_({ ok: true, written: e.written, changed: e.changed }) + `
`), $U();
  })), o.command("edit-sandbox-settings", { hidden: true }).allowExcessArguments(false).description("Apply one sandbox settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(async () => {
    if (process.stdin.isTTY) return fn("claude edit-sandbox-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let i = await p5e();
    if (i !== void 0) return fn(i);
    let { runSandboxSettingsEdit: n } = await import("../settings/run-sandbox-settings-edit.edc5.js"), r = await a(4096), t = r === null ? null : ot(r, false);
    if (t === null) return fn("claude edit-sandbox-settings: stdin is not a JSON edit");
    let s = await n(t);
    if (!s.ok) return fn(s.error);
    return await Fp(_({ ok: true, written: s.written }) + `
`), Oo(0);
  }), o.command("design-login", { hidden: true }).allowExcessArguments(false).description("Run the Claude Design sign-in, or report its state, as JSON lines (used by the VS Code extension)").requiredOption("--json", "Write JSON lines to stdout").option("--status", "Report whether design-system access is authorized, and exit").action(d(async (i, n) => {
    if (process.stdin.isTTY) return fn("claude design-login --json is run by the VS Code extension, not by hand; use /design-login in a session");
    let { isSpawnedByClaudeCodeSession: r } = await import("../context/claude-env-context-from.t56n.js");
    if (r()) return fn(f);
    let { designLoginStatus: t, runDesignLoginSignIn: s } = await import("../auth/design-login-status.agdd.js");
    if (n.status) return await Fp(_(await t()) + `
`), Oo(0);
    let e = new AbortController(), { markPrintModeSignalHandlersRegistered: u } = await import("../ui/claim-shutdown.0yqb.js");
    process.once("SIGTERM", () => e.abort()), process.once("SIGINT", () => e.abort()), u();
    let l = await s({ stdin: process.stdin, write: (c) => Fp(c + `
`), signal: e.signal });
    return Oo(l.ok ? 0 : 1);
  })), o.command("edit-chrome-settings", { hidden: true }).allowExcessArguments(false).description("Apply one Claude in Chrome settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async (i) => {
    if (process.stdin.isTTY) return fn("claude edit-chrome-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let n = await p5e();
    if (n !== void 0) return fn(n);
    let { runChromeSettingsEdit: r } = await import("../settings/run-chrome-settings-edit.yt2t.js"), t = await a(4096), s = t === null ? null : ot(t, false);
    if (s === null) return fn("claude edit-chrome-settings: stdin is not a JSON edit");
    let e = await r(s, i);
    if (!e.ok) return fn(e.error);
    return await Fp(_({ ok: true, written: e.written }) + `
`), $U();
  })), o.command("drop-worktree-registrations", { hidden: true }).allowExcessArguments(false).description("Drop deleted worktrees' git registrations named as JSON on stdin (used by the VS Code extension)").requiredOption("--json", "Read the request as JSON from stdin").action(async () => {
    if (process.stdin.isTTY) return fn("claude drop-worktree-registrations reads one JSON request from stdin; it is run by the VS Code extension, not by hand");
    let i = await p5e("claude drop-worktree-registrations cannot run from inside a Claude Code session; it is run by the VS Code extension");
    if (i !== void 0) return fn(i);
    let { registrationDropsLine: n, runWorktreeRegistrationDrops: r } = await import("../git/registration-drops-line.2rd7.js"), t = await a(262144), s = t === null ? null : ot(t, false);
    if (s === null) return fn("claude drop-worktree-registrations: stdin is not a JSON request");
    let e = await r(s);
    if (!e.ok) return fn(e.error);
    return await Fp(n(e.outcomes) + `
`), $U();
  });
}
export {
  Vno,
  p5e
};
