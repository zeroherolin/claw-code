// darwin/fs/setup-token-command.js — Claude Code 2.1.310（darwin）模块 chunk-ydpxeyrb.js
import { __asset_src } from "../../runtime/assets.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { i } from "../shared/environment.js";
import { U } from "../context/not-admin-owned.js";
import { eie, Bes } from "../auth/oauth-2025-04-20.js";
import { An } from "./gitlab-runner-authentication-token.js";
import { Ur } from "./backed-up.js";
import { I } from "../shared/chunk-d2c47492.js";
import { he } from "../terminal/xterm-ghostty.js";
import { hVe, Mzt, kue, nl, sZ } from "../settings/global-config-and-gates.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { jr, zt, da } from "../telemetry/chunk-9d6962d2.js";
import { Kwn } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { OUo } from "../telemetry/bridge-resume-respects-local-owner.js";
import { s, n, CUe } from "../telemetry/render-glyph-cardinality.js";
import { Oo } from "../shared/cli-error.js";
import { eS } from "../ui/chord-started.js";
import { _Xe, HOs, OWn } from "../core/conversation-engine.js";
import { FQn, $Qn } from "../settings/gable-onyx-sluice.js";
import { cLo, QFr } from "../telemetry/binary-content-persisted.js";
import { uft } from "./npm-global.js";
import { LA } from "../cli/tty-stream-error.js";
import { YEe } from "../settings/chunk-7fc531c8.js";
import { Zie } from "../shared/chunk-ab2cef45.js";
import { eae } from "../ui/clawd-body.js";
import { Q5 } from "../shared/chunk-b103ac7f.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { kdt } from "../shared/chunk-d51105fe.js";
import { cwd as A } from "process";
import { stripVTControlCharacters as P } from "util";
import { createInterface as E } from "readline";
function Lxt(c, d = process.stdin) {
  let t = () => {
  }, f = new Promise((p) => {
    t = p;
  }), l = E({ input: d, output: process.stdout });
  return l.question(`${c} [y/N] `, (p) => {
    let _ = p.trim().toLowerCase();
    t(_ === "y" || _ === "yes"), l.close();
  }), l.once("close", () => t(false)), f;
}
function Tki() {
  return CUe({ ...LA(false), patchConsole: false });
}
function R(c) {
  return { ok: true, days: Bes, seconds: eie };
}
async function Aki(c, d) {
  a("tengu_setup_token_command", {});
  let t = R(d?.expiresInDays);
  if (!t.ok) {
    c.unmount(), process.stderr.write(`${t.message}
`), await zt("cli_setup_token", t.errorCode), await Oo(1);
    return;
  }
  let f = sZ(true);
  if (!f.valid) c.unmount(), process.stderr.write(`${f.message}
setup-token creates a long-lived Claude.ai subscription token, which this policy does not permit.
`), await zt("cli_setup_token", "force_login_method_refused"), await Oo(1);
  let l = hVe("firstParty");
  if (l !== void 0) c.unmount(), process.stderr.write(`${l}
setup-token creates a long-lived Claude.ai subscription token, which this machine's allowedProviders policy does not permit.
`), await zt("cli_setup_token", "provider_not_allowed"), await Oo(1);
  let p = !nl(), { ConsoleOAuthFlow: _ } = await import("../auth/console-o-auth-flow.js"), g = U(), h = false;
  if (await new Promise((y) => {
    c.render(e(eS, { session: g, onChangeAppState: (k) => Zie(k, g), children: r(s, { flexDirection: "column", gap: 1, children: [e(eae, {}), p && r(s, { flexDirection: "column", children: [e(n, { color: "warning", children: "Warning: You already have authentication configured via environment variable or API key helper." }), e(n, { color: "warning", children: "The setup-token command will create a new OAuth token which you can use instead." })] }), r(s, { paddingLeft: 1, flexDirection: "column", gap: 1, children: [r(n, { bold: true, children: ["This will guide you through long-lived (", t.days === 365 ? "1-year" : `${t.days}-day`, ") auth token setup for your Claude account. Claude subscription required."] }), e(_, { onDone: () => {
      y();
    }, onAccountOnHold: () => {
      h = true, y();
    }, mode: "setup-token", expiresIn: t.seconds, urlOutdent: 1 })] })] }) }));
  }), c.unmount(), h) {
    await zt("cli_setup_token", "account_on_hold"), await Oo(1);
    return;
  }
  await jr("cli_setup_token"), await Oo(0);
}
async function Rki(c) {
  a("tengu_doctor_command", {});
  let d;
  try {
    let t = await uft({ probeKeychain: true, storageV5: c }), f = Q5(), l = ["Claude Code doctor", "", `Running: ${t.installationType} (${t.version})`, ...{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.GIT_SHA ? [`Commit: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.GIT_SHA.slice(0, 12)}`] : [], "Platform: darwin-arm64", ...t.packageManager ? [`Package manager: ${u(t.packageManager)}`] : [], `Path: ${u(t.installationPath)}`, ...t.invokedBinary !== t.installationPath ? [`Invoked: ${u(t.invokedBinary)}`] : [], `Config install method: ${u(t.configInstallMethod)}`, `Search: ${t.ripgrepStatus.working ? "OK" : "Not working"} (${t.ripgrepStatus.mode === "embedded" ? "bundled" : u(t.ripgrepStatus.systemPath || "system")})`, `Auto-updates: ${t.packageManager ? "Managed by package manager" : u(t.autoUpdates)}`, `Auto-update channel: ${f === "rc" ? "slow" : f}`, `Last update attempt: ${b(t.lastUpdateResult)}`], p = _Xe();
    if (p) l.push(`Managed settings (remote): ${u(OWn(p))}`);
    else if (HOs()) l.push("Managed settings (remote): checking… (fetch in progress; re-run in a moment)");
    {
      let { waitForPolicyLimitsToLoad: o, POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS: m } = await import("../cli/admit-prefetched-policy-limits.js"), { getLastFetchOutcome: w } = await import("../cli/admit-cached-response.js"), v = false, S = o().then(() => {
        v = true;
      }), T = Date.now() + m;
      while (!v && w() === null && Date.now() < T) await Promise.race([S, X(200)]);
    }
    let _ = l.push("Organization policy: …") - 1, { statusNotices: g, invalidEntries: h } = kdt(YEe().errors);
    if (h.length > 0) {
      l.push("", he.yellow("Invalid settings"));
      for (let o of h) {
        let m = [o.file, o.path].flatMap((w) => w ? [u(w)] : []).join(" › ");
        l.push(`- ${m ? `${m}: ` : ""}${u(o.message)}${o.suggestion ? `
  Suggested fix: ${u(o.suggestion)}` : ""}`);
      }
    }
    if (g.length > 0) {
      l.push("");
      for (let o of g) l.push(`- ${u(o.message)}`);
    }
    let y = Kwn();
    if (y.length > 0) {
      l.push("");
      for (let [o, m] of y) l.push(`- ${o}
  ${m}`);
    }
    let k = [{ name: "BASH_MAX_OUTPUT_LENGTH", default: QFr, upperLimit: cLo }, { name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS", ...kue("claude-opus-4-6") }].map((o) => ({ name: o.name, ...Mzt(o.name, process.env[o.name], o.default, o.upperLimit) })).filter((o) => o.status !== "valid");
    if (k.length > 0) {
      l.push("", he.yellow("Environment variables"));
      for (let o of k) l.push(`- ${o.name}: ${u(o.message ?? o.status)}`);
    }
    if (t.multipleInstallations.length > 1) {
      l.push("", he.yellow("Multiple installations found"));
      for (let o of t.multipleInstallations) l.push(`- ${u(`${o.type} at ${o.path}`)}`);
    }
    try {
      let o = await OUo();
      if (l.push("", "Remote Control"), o.inRemoteSession) l.push("Inside a cloud session — Remote Control is unavailable here. Use it from the local session instead.");
      else {
        l.push(u(o.disabledReason ?? "Control this session from claude.ai/code or the Claude mobile app"));
        for (let m of o.checks.filter((w) => !w.ok)) l.push(u(`- ${m.label}${m.detail ? ` (${m.detail})` : ""}`));
      }
    } catch {
      await da("cli_doctor", "bridge_info_unavailable");
    }
    if (l[_] = `Organization policy: ${u($Qn(FQn()))}`, t.warnings.length > 0) {
      l.push("", he.yellow(`${t.warnings.length} ${I(t.warnings.length, "warning")} found`));
      for (let o of t.warnings) l.push(`- ${u(o.issue)}`, `  Fix: ${u(o.fix)}`);
    } else l.push("", "No installation issues found.");
    l.push("", "For a full setup checkup that can also fix issues, run /doctor in a Claude Code session."), Ur(l.join(`
`) + `
`), d = { warnings: t.warnings.length, settings_errors: h.length, env_var_issues: k.length, multiple_installs: t.multipleInstallations.length > 1, ripgrep_working: t.ripgrepStatus.working };
  } catch (t) {
    throw await zt("cli_doctor", "diagnostic_failed"), t;
  }
  await jr("cli_doctor", d), await Oo(0);
}
function u(c) {
  return An(P(c)).replaceAll("`", "");
}
function b(c) {
  if (!c) return "none recorded";
  let d = u(c.timestamp.slice(0, 10));
  switch (c.outcome) {
    case "success":
      return c.version_to ? `success → ${u(c.version_to)} (${d})` : `success (${d})`;
    case "failed":
      return `failed (${u(c.status)}) — ${d}`;
  }
}
async function xki(c, d, t) {
  if (i.DISABLE_UPDATES) process.stdout.write(`Updates are disabled by your administrator. Contact your IT team to get the latest version.
`), process.exit(0);
  let { awaitPolicyLimitsColdStart: f } = await import("../cli/admit-prefetched-policy-limits.js");
  await f();
  let { setup: l } = await import("../auth/is-desktop-entrypoint-exempted.js");
  await l(A(), "default", false, false, void 0, false, void 0, void 0, void 0, t);
  let { install: p } = await import("../commands/command-install.js");
  await new Promise((_) => {
    let g = [];
    if (c) g.push(c);
    if (d.force) g.push("--force");
    p.call(async (h) => {
      if (h.includes("failed")) await zt("cli_install", "cli_install_failed");
      else await jr("cli_install");
      await Oo(h.includes("failed") ? 1 : 0), _();
    }, { storageV5: t }, g);
  });
}
export {
  Aki,
  Lxt,
  Rki,
  Tki,
  xki
};
