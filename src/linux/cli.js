// linux/cli.js — Claude Code 2.1.310（linux）模块 cli
import { __asset_src } from "../runtime/assets.js";
import "./fs/chunk-86a4e44e.js";
import { b } from "./agents/third-party.js";
import { NZn } from "./shared/chunk-e3957002.js";
import { Jwt, Qwt, Zce, rZs, l5 } from "./settings/chunk-854b416f.js";
import { dZs } from "./cli/standalone-proxy.js";
import { bcr } from "./remote/claude-code-remote.js";
import { z } from "./shared/chunk-be29de51.js";
function de() {
  try {
    process.cwd();
    return;
  } catch (r) {
    let f = r instanceof Error && "code" in r && typeof r.code === "string" ? r.code : void 0;
    if (f === "ENOENT") return "The current directory no longer exists (it was deleted or moved). Start Claude Code from an existing directory.";
    return `Can't read the current directory${f ? ` (${f})` : ""}. Start Claude Code from a different directory.`;
  }
}
process.env.NoDefaultCurrentDirectoryInExePath = "1";
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
bcr();
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  let r = process.env.NODE_OPTIONS || "";
  process.env.NODE_OPTIONS = r ? `${r} --max-old-space-size=8192` : "--max-old-space-size=8192";
}
function me(r) {
  for (let f = 0; f < r.length; f++) {
    let D = r[f];
    if (D === "--debug" || D === "-d" || D === "--debug-to-stderr" || D === "-d2e" || D.startsWith("--debug=") || D.startsWith("--debug-file=")) continue;
    if (D === "--debug-file" && f + 1 < r.length) {
      f++;
      continue;
    }
    return false;
  }
  return true;
}
function ue(r) {
  let f = r.indexOf("--");
  return (f === -1 ? r : r.slice(0, f)).includes("--desktop");
}
function je(r) {
  let f, D, V, e, x, P, W = [];
  for (let M = 0; M < r.length; M++) {
    let N = r[M], h = N.indexOf("="), [B, n] = h > 0 ? [N.slice(0, h), N.slice(h + 1)] : [N, void 0], T = n !== void 0 || M + 1 < r.length;
    if (B === "--dangerously-skip-permissions") f = "bypassPermissions";
    else if (B === "--allow-dangerously-skip-permissions") P = true;
    else if (B === "--permission-mode" && T) f = n ?? r[++M];
    else if (B === "--inherit-permission-mode" && T) D = n ?? r[++M];
    else if (B === "--model" && T) V = n ?? r[++M];
    else if (B === "--effort" && T) e = n ?? r[++M];
    else if (B === "--agent" && T) x = n ?? r[++M];
    else W.push(N);
  }
  let s = f ?? D;
  return { dispatchDefaults: s || V || e || x || P ? { permissionMode: s, ...!f && D && { permissionModeInherited: true }, model: V, effort: e, agent: x, allowBypass: P } : void 0, rest: W };
}
async function Ye() {
  if (process.env.CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR !== void 0 || process.argv.includes("--session-tunnel")) {
    let { guardRelayTokenDescriptor: t } = import.meta.require("./auth/guard-relay-token-descriptor.js");
    t();
  }
  let r = dZs();
  if (r === "refused") return;
  let f = process.argv[2]?.startsWith("--runner-declares=") ? process.argv.splice(2, 1)[0] : void 0, D = NZn(process.argv);
  if (D) console.error(D), process.exit(1);
  if (process.env.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review") {
    let { guardRunnerReviewTokens: t } = import.meta.require("./auth/guard-runner-review-tokens.js");
    t();
  }
  let { installCliArgvReader: V } = import.meta.require("./cli/cli-argv-reader.js");
  V((t) => import.meta.require("./tasks/background-session-verb-index.js").cliFlagWords(t));
  let e = process.argv.slice(2);
  if ((e.length === 1 || e.length === 2 && e[1] === "--verbose") && (e[0] === "--version" || e[0] === "-v" || e[0] === "-V")) {
    if (console.log(`${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION} (Claude Code)${l5()}`), e.length === 2 && { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.GIT_SHA) console.log(`Commit: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.GIT_SHA}`);
    return;
  }
  let x = de();
  if (x) {
    console.error(x);
    let { writeStartupFailureResult: t } = await import("./cli/build-startup-failure-result.js"), { randomUUID: o } = await import("crypto");
    await t({ sessionId: o(), message: x, reason: "cwd_unavailable" }), process.exit(1);
  }
  if (f !== void 0) {
    let { adoptRunnerDeclaration: t } = await import("./shared/adopt-runner-declaration.js");
    await t(f);
  }
  let { profileCheckpoint: P } = await import("./context/add-startup-context.js");
  P("cli_entry");
  let W = e[0] === "--preload" || e[0] === "--bg-spare", s = !W && process.env.CLAUDE_CODE_HOVER_REST ? (await import("./shared/adopt-storage-v5-env-pin.js")).pinStorageV5FromEnv() : void 0;
  if (!W) setTimeout(() => {
    if (process.env.CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP) import("./cli/set-jit-policy-after-startup.js").then((t) => t.setJitPolicyAfterStartup());
    else if (typeof Bun < "u") Bun.unsafe.setJITPolicy?.(1);
  }, 1e4).unref();
  if (r !== void 0) {
    let { loadFastPathPolicy: t } = await import("./settings/ensure-fast-path-settings-loaded.js"), o = await t(s);
    if (o) {
      let { exitWithError: E } = await import("./shared/drain-stdout-before-exit.js");
      E(o);
    }
    let { ghStandinMain: i } = await import("./git/gh-standin-main.js");
    await i(r);
    return;
  }
  if (e[0] === "plugin" && e[1] === "test") {
    let [{ loadFastPathPolicy: t }, { pluginTestFormOf: o, pluginTestGatesOf: i, pluginTestRefusal: E }, { endPluginTest: _ }] = await Promise.all([import("./settings/ensure-fast-path-settings-loaded.js"), import("./git/early-fetch-vetoed.js"), import("./plugins/end-plugin-test.js")]), l = E(await i({ helperError: await t(s), form: o(e.slice(2)), envPin: s }));
    if (e[2] === "--file" && l !== void 0) {
      let { REPORT_MARK: w } = await import("./shared/report-mark.js");
      process.stdout.write(`${w}${JSON.stringify({ file: e[3], results: [], error: l })}
`);
      return;
    }
    if (l !== void 0) return process.stderr.write(`claude plugin test: ${l}
`), process.exitCode = 1, _(process.exitCode);
    let { pluginTestMain: p } = await import("./cli/early-fetch-vetoed.js");
    return process.exitCode = await p(e.slice(2)), _(process.exitCode);
  }
  if (process.argv[2] === "--eval-mock-server") {
    P("cli_eval_mock_server_path");
    let { runEvalMockServer: t } = await import("./agents/read-fixture.js");
    try {
      await t(process.argv[3], process.argv[4]);
    } catch (o) {
      console.error(`--eval-mock-server: ${o instanceof Error ? o.message : String(o)}`), process.exitCode = 1;
    }
    return;
  }
  if (process.argv[2] === "--claude-in-chrome-mcp") {
    P("cli_claude_in_chrome_mcp_path");
    let { runClaudeInChromeMcpServer: t } = await import("./context/create-chrome-context.js");
    await t(s);
    return;
  } else if (process.argv[2] === "--chrome-native-host") {
    P("cli_chrome_native_host_path");
    let { runChromeNativeHost: t } = await import("./mcp/run-chrome-native-host.js");
    await t();
    return;
  }
  if (e[0] === "--daemon-worker") {
    let { loadFastPathPolicy: t } = await import("./settings/ensure-fast-path-settings-loaded.js"), o = await t(s);
    if (o) process.stderr.write(`${o}
`);
    let { sessionFactsRestored: i } = await import("./auth/early-credentials-of.js"), E = await i(s);
    if (E !== null) {
      let { endsInARowOf: l, workerEndingOf: p } = await import("./shared/ends-in-a-row-of.js"), w = p(E, l(e[2]));
      process.stderr.write(w.said), process.exit(w.code);
    }
    let { runDaemonWorker: _ } = await import("./tasks/is-worker-kind-admitted.js");
    await _(e[1], s);
    return;
  }
  if (e[0] === "--bg-pty-host") {
    let { ensureFastPathSettingsLoaded: t } = await import("./settings/ensure-fast-path-settings-loaded.js");
    try {
      await t(s);
    } catch (i) {
      process.stderr.write(`ptyHost: settings bootstrap threw (continuing; supervisor already gated): ${i?.stack ?? String(i)}
`);
    }
    let { runPtyHost: o } = await import("./shell/run-pty-host.js");
    await o(e.slice(1));
    return;
  }
  if (e[0] === "--bg-spare") {
    let { ensureFastPathSettingsLoaded: t } = await import("./settings/ensure-fast-path-settings-loaded.js");
    await t(void 0);
    let { runBgSpare: o } = await import("./tasks/claim-spare.js");
    await o(e.slice(1));
    return;
  }
  if (e[0] === "--preload") {
    let { ensureFastPathSettingsLoaded: t } = await import("./settings/ensure-fast-path-settings-loaded.js");
    await t(void 0);
    let { runPreload: o } = await import("./cli/run-preload.js");
    await o(e.slice(1));
    return;
  }
  if (e[0] === "remote-control" || e[0] === "rc" || e[0] === "remote" || e[0] === "sync" || e[0] === "bridge") {
    P("cli_bridge_path");
    let { loadFastPathPolicy: t } = await import("./settings/ensure-fast-path-settings-loaded.js");
    {
      let u = await t(s);
      if (u) {
        let { exitWithError: g } = await import("./shared/drain-stdout-before-exit.js");
        g(u);
      }
    }
    if (e.slice(1).some((u) => u === "--help" || u === "-h")) {
      let { printRemoteControlHelp: u } = await import("./shell/print-remote-control-help.js");
      await u();
      return;
    }
    let { sessionFactsRestored: o } = await import("./auth/early-credentials-of.js"), i = await o(s);
    if (i !== null) {
      let { exitWithError: u } = await import("./shared/drain-stdout-before-exit.js");
      u(i.reason);
    }
    let { refuseRemoteControlLocally: E, refuseRemoteControlIneligible: _, startRemoteControl: l } = await import("./remote/enter-remote-control.js"), p = await E(), [{ pinStorageV5: w }, { seedInstallIDs: I }] = await Promise.all([import("./shared/pin-storage-v5.js"), import("./settings/check-has-trust-dialog-accepted.js")]), C = w(s);
    if (z() && C !== void 0) {
      let [{ credentialsStoreFor: u }, { setGrowthBookCredentials: g, setGrowthBookStorageBackend: L }, { composePolicyLimitsClient: O, primePolicyLimitsCache: G }, { primeFastPathCredentials: j }] = await Promise.all([import("./shared/credentials-store-for.js"), import("./cli/answer-next-growth-book-remote-eval-with.js"), import("./cli/admit-prefetched-policy-limits.js"), import("./cli/prime-fast-path-credentials.js")]), U = u(C);
      g(U), L(C), O({ storageV5: C, credentials: U }), await j(U), await G(C), await I(C);
    }
    let [{ initSinks: H }, { initialize1PEventLogging: c }, { credentialsStoreFor: a }, { initDefaultDebugLog: d }, { watchGlobalConfigThroughStorage: y }] = await Promise.all([import("./ui/init-sinks.js"), import("./telemetry/log-event-to1-p.js"), import("./shared/credentials-store-for.js"), import("./shared/dropped-debug-output-totals.js"), import("./settings/check-has-trust-dialog-accepted.js")]);
    H();
    let A = a(C);
    c(C);
    let F = await _(p);
    if (z() && C !== void 0) d({ storageV5: C }), y(C);
    await l(F, e.slice(1), C, A);
    return;
  }
  {
    let t = rZs(e);
    if (t !== null) {
      P("cli_daemon_path");
      let { ensureFastPathSettingsLoaded: o } = await import("./settings/ensure-fast-path-settings-loaded.js");
      await o(s);
      let { initializeErrorLogSink: i } = await import("./ui/initialize-error-log-sink.js");
      i();
      let { daemonMain: E } = await import("./tasks/daemon-main.js");
      await E(t, s);
      return;
    }
  }
  let M = process.env.CLAUDE_CODE_SESSION_KIND === "bg", N = e.some((t) => t === "logs" || t === "attach" || t === "stop" || t === "kill" || t === "respawn" || t === "rm") ? import.meta.require("./tasks/background-session-verb-index.js").backgroundSessionVerbIndex(e, { behindRootOptions: !M }) : -1, h = N === -1 ? [] : e.slice(N), B = e.includes("--bg") || e.includes("--background") ? import.meta.require("./tasks/background-session-verb-index.js").hasBackgroundFlag(e) : false;
  if (h.length > 0 || B) {
    if (P("cli_bg_path"), ue(e)) console.error(h.length > 0 ? `--desktop can't be combined with \`claude ${h[0]}\`.` : "--desktop opens the Claude Desktop app and can't run in the background (`--bg`, `--background`, `--routine`)."), process.exit(1);
    if (N > 0) {
      let [{ eagerParseCliFlag: a }, { loadSettingsFromFlag: d, loadManagedSettingsFromFlag: y }] = await Promise.all([import("./tasks/background-session-verb-index.js"), import("./settings/apply-setting-sources-flag-from-argv.js")]), A = e.slice(0, N), F = a("--settings", A);
      if (F) d(F);
      let u = a("--managed-settings", A);
      if (u) y(u);
    }
    let { loadFastPathPolicy: t } = await import("./settings/ensure-fast-path-settings-loaded.js"), { sessionFactsRestored: o } = await import("./auth/early-credentials-of.js"), i = null, E = ["logs", "stop", "kill", "rm"].includes(h[0] ?? "");
    {
      let a = await t(s);
      if (a) if (E) process.stderr.write(`${a}
`);
      else {
        let { exitWithError: d } = await import("./shared/drain-stdout-before-exit.js");
        d(a);
      }
      if (i = await o(s), i !== null && !E) {
        let { exitWithError: d } = await import("./shared/drain-stdout-before-exit.js");
        d(i.reason);
      }
    }
    let _ = i === null;
    if (i !== null) process.stderr.write(`${i.reason}
`);
    let l = await import("./agents/bg-supervisor-noun.js");
    if (await l.ensureFleetGateHydrated({ kickGrowthBook: _ && !E }), !l.isAgentsFleetEnabled()) {
      let a = h[0] ?? e.find((d) => d === "--bg" || d === "--background" || d === "--routine" || d.startsWith("--routine=")) ?? "--bg";
      return l.fleetGateRejected(a);
    }
    let [p, { pinStorageV5: w }, { initDefaultDebugLog: I }, { seedInstallIDs: C, watchGlobalConfigThroughStorage: H }] = await Promise.all([import("./ide/attach-handler.js"), import("./shared/pin-storage-v5.js"), import("./shared/dropped-debug-output-totals.js"), import("./settings/check-has-trust-dialog-accepted.js")]), c = w(s);
    if (z() && c !== void 0) {
      I({ storageV5: c }), H(c);
      let [{ credentialsStoreFor: a }, { setGrowthBookCredentials: d, setGrowthBookStorageBackend: y }, { composePolicyLimitsClient: A, primePolicyLimitsCache: F }, { primeFastPathCredentials: u }] = await Promise.all([import("./shared/credentials-store-for.js"), import("./cli/answer-next-growth-book-remote-eval-with.js"), import("./cli/admit-prefetched-policy-limits.js"), import("./cli/prime-fast-path-credentials.js")]), g = a(c);
      d(g), y(c), A({ storageV5: c, credentials: g }), await u(g), await F(c), await C(c);
    }
    switch (h[0]) {
      case "logs":
      case "attach":
      case "stop":
      case "kill":
      case "respawn":
      case "rm": {
        let [{ initializeAnalyticsSink: a }, { initialize1PEventLogging: d, shutdown1PEventLogging: y }, { shutdownDatadog: A }, { sleep: F }] = await Promise.all([import("./telemetry/initialize-analytics-sink.js"), import("./telemetry/log-event-to1-p.js"), import("./auth/reset-datadog-init.js"), import("./shared/full-jitter-backoff-ms.js")]);
        if (_) a(), d(c);
        if (h[0] === "logs") await p.logsHandler(h[1], c);
        else if (h[0] === "attach") await p.attachHandler(h[1], c);
        else if (h[0] === "respawn") await p.respawnHandler(h[1], c);
        else if (h[0] === "rm") await p.rmHandler(h[1], c, void 0, _);
        else await p.stopHandler(h[1], c, _);
        return await Promise.race([Promise.all([y(), A()]), F(500, void 0, { unref: true })]).catch(() => {
        }), process.exit(process.exitCode ?? 0);
      }
      default: {
        let [{ initializeAnalyticsSink: a }, { initialize1PEventLogging: d, shutdown1PEventLogging: y }, { shutdownDatadog: A }, { logEvent: F }, { sleep: u }] = await Promise.all([import("./telemetry/initialize-analytics-sink.js"), import("./telemetry/log-event-to1-p.js"), import("./auth/reset-datadog-init.js"), import("./telemetry/attach-analytics-sink.js"), import("./shared/full-jitter-backoff-ms.js")]);
        a(), d(c), F("tengu_background", { via_flag: true, via: b("flag") }), await p.handleBgFlag(e, c), await Promise.race([Promise.all([y(), A()]), u(500, void 0, { unref: true })]).catch(() => {
        }), process.exit(process.exitCode ?? 0);
      }
    }
    return;
  }
  let n = Jwt(e);
  n.config.restricted ||= ["1", "true", "yes", "on"].includes((process.env.CLAUDE_CODE_RESTRICTED ?? "").toLowerCase().trim());
  let { dispatchDefaults: T, rest: ge } = je(n.rest), q = n.hasAgentsPositional && me(ge), ee;
  if ((q || (me(e) || ee !== void 0) && process.stdin.isTTY) && process.stdout.isTTY) {
    let { startCapturingEarlyInput: t, consumeEarlyInput: o } = await import("./cli/consume-early-input.js");
    t();
    let [{ startMdmRawRead: i }, { startKeychainPrefetch: E }] = await Promise.all([import("./shared/fire-raw-read.js"), import("./auth/clear-legacy-api-key-prefetch.js")]);
    i(), E();
    let { enableConfigs: _, getGlobalConfig: l, seedInstallIDs: p } = await import("./settings/check-has-trust-dialog-accepted.js"), w = false, I = false, C = false;
    try {
      await _(z() ? s?.backend : void 0), I = l().defaultToAgentsView === true, w = q || I && ee === void 0;
    } catch {
    }
    if (w) {
      if (n.config.settings || n.config.managedSettings) {
        let { loadSettingsFromFlag: g, loadManagedSettingsFromFlag: L } = await import("./settings/apply-setting-sources-flag-from-argv.js");
        if (n.config.settings) g(n.config.settings);
        if (n.config.managedSettings) L(n.config.managedSettings);
      }
      if (n.config.pluginDir.length > 0 || n.config.pluginDirNoMcp.length > 0) {
        let [{ setInlinePlugins: g, setInlinePluginsNoMcp: L }, { clearPluginCache: O }] = await Promise.all([import("./mcp/acquire-mcp-clients-accessor.js"), import("./git/anchored-plugin-cache-path.js")]);
        g(n.config.pluginDir), L(n.config.pluginDirNoMcp), O("claude agents --plugin-dir");
      }
      let { loadFastPathPolicy: H } = await import("./settings/ensure-fast-path-settings-loaded.js"), c = await H(s);
      if (c) {
        let { exitWithError: g } = await import("./shared/drain-stdout-before-exit.js");
        g(c);
      }
      let a;
      if (process.env.CLAUDE_CODE_PLUGIN_DIRS?.trim()) {
        let [{ mergePluginDirs: g, PLUGIN_DIRS_ENV_RECOVERY_HINT: L, PLUGIN_DIRS_ENV_VAR: O, settlePluginDirsEnv: G, withoutPluginDirs: j }, { setInlinePlugins: U }, { clearPluginCache: Q }] = await Promise.all([import("./plugins/merge-plugin-dirs.js"), import("./mcp/acquire-mcp-clients-accessor.js"), import("./git/anchored-plugin-cache-path.js")]), J = j(G(), n.config.pluginDirNoMcp);
        if (J.length > 0) a = { name: O, hint: L }, U(g(n.config.pluginDir, J)), Q("claude agents CLAUDE_CODE_PLUGIN_DIRS");
      }
      {
        let { areSideloadFlagsDisabledByPolicy: g, sideloadFlagsBlockedMessage: L } = await import("./ide/are-command-plugin-sources-disabled-by-policy.js");
        if (g()) {
          let O = [];
          if (n.config.pluginDir.length > 0) O.push("--plugin-dir");
          if (n.config.pluginDirNoMcp.length > 0) O.push("--plugin-dir-no-mcp");
          if (a) O.push(a.name);
          if (O.length > 0) {
            let { exitWithError: G } = await import("./shared/drain-stdout-before-exit.js");
            G(a ? `${L(O)} ${a.hint}` : L(O));
          }
        }
      }
      let { isAgentsFleetEnabled: d, ensureFleetGateHydrated: y, fleetGateRejected: A, consumeAgentViewRelaunchMarker: F } = await import("./agents/bg-supervisor-noun.js");
      await y({ kickGrowthBook: false });
      let u = false;
      if (w && d() && !u) {
        let { sessionFactsRestored: g } = await import("./auth/early-credentials-of.js"), L = await g(s);
        if (L !== null) {
          let { exitWithError: R } = await import("./shared/drain-stdout-before-exit.js");
          R(L.reason);
        }
        let [{ applyFleetViewHostWindowsEnv: O }, { createRoot: G }, { getBaseRenderOptions: j }, { resolve: U }, { getRootSession: Q, setCliSessionConfigCarried: J, setIsInteractive: Ae, setRestrictedSession: Re, setSessionStartType: De }, { cliCarriesSessionConfig: ye }, { pinStorageV5: Oe }, { appliedSettingSourcesFlagValue: ke }] = await Promise.all([import("./agents/apply-fleet-view-host-windows-env.js"), import("./cli/create-root.js"), import("./ui/get-base-render-options.js"), import("path"), import("./mcp/acquire-mcp-clients-accessor.js"), import("./settings/cli-carries-fork-restricted-config.js"), import("./shared/pin-storage-v5.js"), import("./settings/applied-setting-sources-argv.js")]), ie = { ...n.config, settingSources: ke() }, S = Oe(s), Y;
        if (z() && S !== void 0) {
          let [{ credentialsStoreFor: R }, { setGrowthBookCredentials: m, setGrowthBookStorageBackend: k }, { primeFastPathCredentials: K }] = await Promise.all([import("./shared/credentials-store-for.js"), import("./cli/answer-next-growth-book-remote-eval-with.js"), import("./cli/prime-fast-path-credentials.js")]);
          Y = R(S), m(Y), k(S), await K(Y), await p(S);
        }
        import("./settings/resolve-setting.js").then(({ resolveSetting: R }) => {
          let { value: m } = R("theme", "dark");
          if (m.startsWith("custom:")) import("./ui/custom-theme-ref.js").then((k) => k.loadCustomThemes(S));
        });
        let Le = F();
        Ae(true), J(ye({ ...ie, ...T })), Re(n.config.restricted), De("agents_view");
        let oe = () => {
        };
        process.on("unhandledRejection", oe);
        let re = Promise.resolve(), se = () => {
        }, ne = new Promise((R) => {
          se = R;
        });
        setImmediate(async () => {
          if (z() && S !== void 0) try {
            let [{ credentialsStoreFor: m }, { composePolicyLimitsClient: k, primePolicyLimitsCache: K }] = await Promise.all([import("./shared/credentials-store-for.js"), import("./cli/admit-prefetched-policy-limits.js")]);
            k({ storageV5: S, credentials: m(S) }), await K(S);
          } catch (m) {
            import("./shared/dropped-debug-output-totals.js").then(({ logForDebugging: k }) => k(`Policy limits: start-up composition on the agents path failed: ${m instanceof Error ? m.message : String(m)}`, { level: "warn" }));
          }
          re = Promise.all([import("./ui/claim-shutdown.js"), import("./ui/initialize-error-log-sink.js"), import("./telemetry/initialize-analytics-sink.js"), import("./telemetry/log-event-to1-p.js"), import("./telemetry/attach-analytics-sink.js"), import("./agents/capture-teammate-mode-snapshot-if-enabled.js"), import("./cli/answer-next-growth-book-remote-eval-with.js"), import("./telemetry/initialize-telemetry-after-trust.js"), import("./settings/check-has-trust-dialog-accepted.js"), import("./settings/apply-config-environment-variables.js"), import("./git/clear-repository-caches.js"), import("./shared/dropped-debug-output-totals.js")]).then(([{ setupGracefulShutdown: m }, { initializeErrorLogSink: k }, { initializeAnalyticsSink: K }, { initialize1PEventLogging: Me }, { logEvent: Ne }, { captureTeammateModeSnapshotIfEnabled: Be }, { initializeGrowthBook: He }, { initializeTelemetryAfterTrust: xe }, { checkHasTrustDialogAccepted: pe, watchGlobalConfigThroughStorage: Ge }, { applyConfigEnvironmentVariables: Ue }, { setRepoDetectionGuards: Ve }, { initDefaultDebugLog: We }]) => {
            if (m({ storageV5: S, credentials: Y }), Ve({ trustProbe: pe }), He().catch(() => {
            }), k(), K(), Me(S), z() && S !== void 0) We({ storageV5: S }), Ge(S);
            return ne.then(() => {
              if (pe()) Ue(), xe(S);
            }), Ne("tengu_fleetview", { defaultToAgentsView: I, relaunch: Le }), Be();
          }).finally(() => process.off("unhandledRejection", oe));
          let R = () => void import("./tasks/is-last-cleanup-sentinel-fresh.js").then((m) => m.startBackgroundHousekeeping(Q().host, S));
          Promise.all([import("./cli/answer-next-growth-book-remote-eval-with.js"), import("./settings/check-has-trust-dialog-accepted.js")]).then(([{ getFeatureValue_CACHED_MAY_BE_STALE: m }, { checkHasTrustDialogAccepted: k }]) => {
            if (m("tengu_noble_wozniak", true)) ne.then(() => {
              if (k()) R();
            });
            else R();
          });
        }), o(), O();
        let X = T?.permissionMode === "bypassPermissions" || T?.allowBypass ? await import("./permissions/apply-bypass-policy-gate.js") : void 0;
        X?.refuseBypassUnderRoot(T);
        let ae = X?.applyBypassPolicyGate(T) ?? T, Z = await G(j(false)), { ensureAgentsWorkspaceTrust: Te, agentsTrustDecision: Ie } = await import("./agents/agents-trust-decision.js");
        if (await Te(Z, Ie(), S), se(), X) await X.ensureAgentsBypassConsent(Z, ae, S);
        let ce = true;
        try {
          ce = import.meta.require("./settings/org-config-gate-flag-on-hand.js").orgConfigGateFlagOnHand(l(), process.env.CLAUDE_INTERNAL_FC_OVERRIDES);
        } catch {
        }
        if (ce && (await import("./settings/in-org-config-gate-rollout.js")).orgConfigGateFlagCouldArm()) {
          let { enforceOrgConfigGateOnLaunchLane: R } = await import("./settings/enforce-org-config-gate-at-startup.js");
          await R({ showBlockedScreen: () => import("./settings/show-org-config-blocked-screen.js").then((m) => m.showOrgConfigBlockedScreen, () => {
            return;
          }), printMessage: async (m) => {
            let { endInkWithError: k } = await import("./onboarding/adopt-persisted-workspace-trust.js");
            await k(Z, m);
          } });
        }
        let le = await import("./agents/bg-supervisor-noun.js"), Fe = { cwdFilter: n.cwdFilter, dispatchExtraArgs: Zce(Qwt(ie, U)), dispatchDefaults: ae, entryChannel: le.isListReturnRelaunch() ? "list_return" : q ? "cli_agents" : "default_home", storageV5: S, credentials: Y };
        {
          let { mountFleetViewWithComposerBack: R } = await import("./agents/mount-fleet-view-with-composer-back.js");
          await R(Z, Fe);
        }
        await re.catch(() => {
        });
        let { gracefulShutdown: be } = await import("./ui/claim-shutdown.js");
        await be(0, "other", { suppressResumeHint: true });
        return;
      }
      if (q && !u) return A("claude agents");
    }
  }
  if (e[0] === "self-hosted-runner") {
    P("cli_self_hosted_runner_path");
    let t = e[1];
    if (t === "orchestrator") {
      let { selfHostedRunnerOrchestratorMain: i } = await import("./remote/self-hosted-runner-orchestrator-main.js");
      await i(e.slice(2));
      return;
    }
    if (t === "setup") {
      let { selfHostedRunnerSetupMain: i } = await import("./remote/self-hosted-runner-setup-main.js");
      await i(e.slice(2), s);
      return;
    }
    if (t === "doctor") {
      let { selfHostedRunnerDoctorMain: i } = await import("./remote/self-hosted-runner-doctor-main.js");
      await i(e.slice(2), s);
      return;
    }
    if (t === "code-sign") {
      let { selfHostedRunnerCodeSignMain: i } = await import("./git/coauthor-hook-stubs.js");
      await i(e.slice(2));
      return;
    }
    if (t === "decode-token") {
      let { selfHostedRunnerDecodeTokenMain: i } = await import("./remote/self-hosted-runner-decode-token-main.js");
      await i(e.slice(2));
      return;
    }
    let { selfHostedRunnerMain: o } = await import("./remote/self-hosted-runner-main.js");
    await o(e.slice(1));
    return;
  }
  if ((e.includes("--tmux") || e.includes("--tmux=classic")) && (e.includes("-w") || e.includes("--worktree") || e.some((t) => t.startsWith("--worktree=")))) {
    if (P("cli_tmux_worktree_fast_path"), ue(e)) console.error("--desktop only opens the Claude Desktop app; it can't be combined with `--worktree` or `--tmux`."), process.exit(1);
    let { eagerLoadSettings: t } = await import("./settings/apply-setting-sources-flag-from-argv.js");
    t();
    let { loadFastPathPolicy: o } = await import("./settings/ensure-fast-path-settings-loaded.js");
    {
      let _ = await o(s);
      if (_) {
        let { exitWithError: l } = await import("./shared/drain-stdout-before-exit.js");
        l(_);
      }
    }
    let { configureFastPathGlobalAgents: i } = await import("./agents/configure-fast-path-global-agents.js");
    i();
    let { isWorktreeModeEnabled: E } = await import("./git/is-worktree-mode-enabled.js");
    if (E()) {
      let [{ execIntoTmuxWorktree: _ }, { pinStorageV5: l }, { initDefaultDebugLog: p }] = await Promise.all([import("./ide/carries-discard-consent.js"), import("./shared/pin-storage-v5.js"), import("./shared/dropped-debug-output-totals.js")]), w = l(s), I;
      if (z() && w !== void 0) {
        p({ storageV5: w });
        let [{ credentialsStoreFor: c }, { setGrowthBookCredentials: a, setGrowthBookStorageBackend: d }, { primeFastPathCredentials: y }] = await Promise.all([import("./shared/credentials-store-for.js"), import("./cli/answer-next-growth-book-remote-eval-with.js"), import("./cli/prime-fast-path-credentials.js")]);
        I = c(w), a(I), d(w), await y(I);
        let { seedInstallIDs: A } = await import("./settings/check-has-trust-dialog-accepted.js");
        await A(w);
      }
      let C = await _(e, w, I);
      if (C.handled) return;
      let { exitWithError: H } = await import("./shared/drain-stdout-before-exit.js");
      H(C.error);
    }
  }
  if (e.length === 1 && (e[0] === "--update" || e[0] === "--upgrade")) process.argv = [process.argv[0], process.argv[1], "update"];
  let te = e.indexOf("--");
  if ((te === -1 ? e : e.slice(0, te)).includes("--bare")) process.env.CLAUDE_CODE_SIMPLE = "1";
  let { NON_REPL_SUBCOMMANDS: fe, isMcpServeInvocation: we, isPluginEvalInvocation: he, isRemoteControlInvocation: Ee, isAgentsJsonInvocation: _e, isProjectVerbInvocation: Se } = await import("./agents/is-agents-json-invocation.js");
  if (!fe.has(process.argv[2] ?? "") && !we(process.argv.slice(2)) && !he(process.argv.slice(2)) && !Ee(process.argv.slice(2)) && !_e(process.argv.slice(2)) && !Se(process.argv.slice(2))) {
    let { startCapturingEarlyInput: t } = await import("./cli/consume-early-input.js");
    t();
  }
  let [{ startMdmRawRead: Ce }, { startKeychainPrefetch: ve }] = await Promise.all([import("./shared/fire-raw-read.js"), import("./auth/clear-legacy-api-key-prefetch.js")]);
  Ce(), ve(), P("cli_before_main_import"), (await import("./cli/configure-zod-for-startup.js")).configureZodForStartup();
  let { main: Pe } = await import("./cli/main.js");
  P("cli_after_main_import"), await Pe(s), P("cli_after_main_complete");
}
Ye();
