// cli.js — Claude Code 2.1.310 模块 cli
import { __asset_src } from "./runtime/assets.js";
import "./fs/chunk-kqpf5fh3.js";
import { S } from "./agents/third-party.ydpb.js";
import { ter } from "./shared/chunk-hwsvxy8r.js";
import { oEt, sEt, iue, BZs, S4 } from "./settings/chunk-scxed4qj.js";
import { KZs } from "./cli/standalone-proxy.5etc.js";
import { Dcr } from "./remote/claude-code-remote.yeyj.js";
import { z } from "./shared/chunk-mxa4mwnj.js";
function de() {
  try {
    process.cwd();
    return;
  } catch (s) {
    let f = s instanceof Error && "code" in s && typeof s.code === "string" ? s.code : void 0;
    if (f === "ENOENT") return "The current directory no longer exists (it was deleted or moved). Start Claude Code from an existing directory.";
    return `Can't read the current directory${f ? ` (${f})` : ""}. Start Claude Code from a different directory.`;
  }
}
process.env.NoDefaultCurrentDirectoryInExePath = "1";
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
Dcr();
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  let s = process.env.NODE_OPTIONS || "";
  process.env.NODE_OPTIONS = s ? `${s} --max-old-space-size=8192` : "--max-old-space-size=8192";
}
function me(s) {
  for (let f = 0; f < s.length; f++) {
    let y = s[f];
    if (y === "--debug" || y === "-d" || y === "--debug-to-stderr" || y === "-d2e" || y.startsWith("--debug=") || y.startsWith("--debug-file=")) continue;
    if (y === "--debug-file" && f + 1 < s.length) {
      f++;
      continue;
    }
    return false;
  }
  return true;
}
function ge(s) {
  let f = s.indexOf("--");
  return (f === -1 ? s : s.slice(0, f)).includes("--desktop");
}
function je(s) {
  let f, y, V, e, x, A, W = [];
  for (let M = 0; M < s.length; M++) {
    let N = s[M], h = N.indexOf("="), [B, n] = h > 0 ? [N.slice(0, h), N.slice(h + 1)] : [N, void 0], I = n !== void 0 || M + 1 < s.length;
    if (B === "--dangerously-skip-permissions") f = "bypassPermissions";
    else if (B === "--allow-dangerously-skip-permissions") A = true;
    else if (B === "--permission-mode" && I) f = n ?? s[++M];
    else if (B === "--inherit-permission-mode" && I) y = n ?? s[++M];
    else if (B === "--model" && I) V = n ?? s[++M];
    else if (B === "--effort" && I) e = n ?? s[++M];
    else if (B === "--agent" && I) x = n ?? s[++M];
    else W.push(N);
  }
  let r = f ?? y;
  return { dispatchDefaults: r || V || e || x || A ? { permissionMode: r, ...!f && y && { permissionModeInherited: true }, model: V, effort: e, agent: x, allowBypass: A } : void 0, rest: W };
}
async function Ye() {
  if (process.env.CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR !== void 0 || process.argv.includes("--session-tunnel")) {
    let { guardRelayTokenDescriptor: t } = import.meta.require("./auth/guard-relay-token-descriptor.950w.js");
    t();
  }
  let s = KZs();
  if (s === "refused") return;
  let f = process.argv[2]?.startsWith("--runner-declares=") ? process.argv.splice(2, 1)[0] : void 0, y = ter(process.argv);
  if (y) console.error(y), process.exit(1);
  if (process.env.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review") {
    let { guardRunnerReviewTokens: t } = import.meta.require("./auth/guard-runner-review-tokens.1vxe.js");
    t();
  }
  let { installCliArgvReader: V } = import.meta.require("./cli/cli-argv-reader.vvca.js");
  V((t) => import.meta.require("./tasks/background-session-verb-index.1z47.js").cliFlagWords(t));
  let e = process.argv.slice(2);
  if ((e.length === 1 || e.length === 2 && e[1] === "--verbose") && (e[0] === "--version" || e[0] === "-v" || e[0] === "-V")) {
    if (console.log(`${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION} (Claude Code)${S4()}`), e.length === 2 && { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.GIT_SHA) console.log(`Commit: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.GIT_SHA}`);
    return;
  }
  let x = de();
  if (x) {
    console.error(x);
    let { writeStartupFailureResult: t } = await import("./cli/build-startup-failure-result.f0r0.js"), { randomUUID: o } = await import("crypto");
    await t({ sessionId: o(), message: x, reason: "cwd_unavailable" }), process.exit(1);
  }
  if (f !== void 0) {
    let { adoptRunnerDeclaration: t } = await import("./shared/adopt-runner-declaration.6mag.js");
    await t(f);
  }
  let { profileCheckpoint: A } = await import("./context/add-startup-context.45z1.js");
  A("cli_entry");
  let W = e[0] === "--preload" || e[0] === "--bg-spare", r = !W && process.env.CLAUDE_CODE_HOVER_REST ? (await import("./shared/adopt-storage-v5-env-pin.509t.js")).pinStorageV5FromEnv() : void 0;
  if (!W) setTimeout(() => {
    if (process.env.CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP) import("./cli/set-jit-policy-after-startup.vck7.js").then((t) => t.setJitPolicyAfterStartup());
    else if (typeof Bun < "u") Bun.unsafe.setJITPolicy?.(1);
  }, 1e4).unref();
  if (s !== void 0) {
    let { loadFastPathPolicy: t } = await import("./settings/ensure-fast-path-settings-loaded.c1xj.js"), o = await t(r);
    if (o) {
      let { exitWithError: E } = await import("./shared/drain-stdout-before-exit.ydts.js");
      E(o);
    }
    let { ghStandinMain: i } = await import("./git/gh-standin-main.fs3w.js");
    await i(s);
    return;
  }
  if (e[0] === "plugin" && e[1] === "test") {
    let [{ loadFastPathPolicy: t }, { pluginTestFormOf: o, pluginTestGatesOf: i, pluginTestRefusal: E }, { endPluginTest: _ }] = await Promise.all([import("./settings/ensure-fast-path-settings-loaded.c1xj.js"), import("./git/early-fetch-vetoed.be7y.js"), import("./plugins/end-plugin-test.6n1z.js")]), l = E(await i({ helperError: await t(r), form: o(e.slice(2)), envPin: r }));
    if (e[2] === "--file" && l !== void 0) {
      let { REPORT_MARK: w } = await import("./shared/report-mark.5dt6.js");
      process.stdout.write(`${w}${JSON.stringify({ file: e[3], results: [], error: l })}
`);
      return;
    }
    if (l !== void 0) return process.stderr.write(`claude plugin test: ${l}
`), process.exitCode = 1, _(process.exitCode);
    let { pluginTestMain: p } = await import("./cli/early-fetch-vetoed.cyfn.js");
    return process.exitCode = await p(e.slice(2)), _(process.exitCode);
  }
  if (process.argv[2] === "--eval-mock-server") {
    A("cli_eval_mock_server_path");
    let { runEvalMockServer: t } = await import("./agents/read-fixture.q8df.js");
    try {
      await t(process.argv[3], process.argv[4]);
    } catch (o) {
      console.error(`--eval-mock-server: ${o instanceof Error ? o.message : String(o)}`), process.exitCode = 1;
    }
    return;
  }
  if (process.argv[2] === "--claude-in-chrome-mcp") {
    A("cli_claude_in_chrome_mcp_path");
    let { runClaudeInChromeMcpServer: t } = await import("./context/create-chrome-context.c2wr.js");
    await t(r);
    return;
  } else if (process.argv[2] === "--chrome-native-host") {
    A("cli_chrome_native_host_path");
    let { runChromeNativeHost: t } = await import("./mcp/run-chrome-native-host.6mfk.js");
    await t();
    return;
  } else if (process.argv[2] === "--computer-use-mcp") {
    A("cli_computer_use_mcp_path");
    let { runComputerUseMcpServer: t } = await import("./mcp/create-computer-use-mcp-server-for-cli.49vv.js");
    await t(r);
    return;
  }
  if (e[0] === "--daemon-worker") {
    let { loadFastPathPolicy: t } = await import("./settings/ensure-fast-path-settings-loaded.c1xj.js"), o = await t(r);
    if (o) process.stderr.write(`${o}
`);
    let { sessionFactsRestored: i } = await import("./auth/early-credentials-of.gbs5.js"), E = await i(r);
    if (E !== null) {
      let { endsInARowOf: l, workerEndingOf: p } = await import("./shared/ends-in-a-row-of.eqfb.js"), w = p(E, l(e[2]));
      process.stderr.write(w.said), process.exit(w.code);
    }
    let { runDaemonWorker: _ } = await import("./tasks/is-worker-kind-admitted.wh9s.js");
    await _(e[1], r);
    return;
  }
  if (e[0] === "--bg-pty-host") {
    let { ensureFastPathSettingsLoaded: t } = await import("./settings/ensure-fast-path-settings-loaded.c1xj.js");
    try {
      await t(r);
    } catch (i) {
      process.stderr.write(`ptyHost: settings bootstrap threw (continuing; supervisor already gated): ${i?.stack ?? String(i)}
`);
    }
    let { runPtyHost: o } = await import("./shell/run-pty-host.404z.js");
    await o(e.slice(1));
    return;
  }
  if (e[0] === "--bg-spare") {
    let { ensureFastPathSettingsLoaded: t } = await import("./settings/ensure-fast-path-settings-loaded.c1xj.js");
    await t(void 0);
    let { runBgSpare: o } = await import("./tasks/claim-spare.k2f3.js");
    await o(e.slice(1));
    return;
  }
  if (e[0] === "--preload") {
    let { ensureFastPathSettingsLoaded: t } = await import("./settings/ensure-fast-path-settings-loaded.c1xj.js");
    await t(void 0);
    let { runPreload: o } = await import("./cli/run-preload.mfb5.js");
    await o(e.slice(1));
    return;
  }
  if (e[0] === "remote-control" || e[0] === "rc" || e[0] === "remote" || e[0] === "sync" || e[0] === "bridge") {
    A("cli_bridge_path");
    let { loadFastPathPolicy: t } = await import("./settings/ensure-fast-path-settings-loaded.c1xj.js");
    {
      let g = await t(r);
      if (g) {
        let { exitWithError: u } = await import("./shared/drain-stdout-before-exit.ydts.js");
        u(g);
      }
    }
    if (e.slice(1).some((g) => g === "--help" || g === "-h")) {
      let { printRemoteControlHelp: g } = await import("./shell/print-remote-control-help.8r55.js");
      await g();
      return;
    }
    let { sessionFactsRestored: o } = await import("./auth/early-credentials-of.gbs5.js"), i = await o(r);
    if (i !== null) {
      let { exitWithError: g } = await import("./shared/drain-stdout-before-exit.ydts.js");
      g(i.reason);
    }
    let { refuseRemoteControlLocally: E, refuseRemoteControlIneligible: _, startRemoteControl: l } = await import("./remote/enter-remote-control.fk9f.js"), p = await E(), [{ pinStorageV5: w }, { seedInstallIDs: F }] = await Promise.all([import("./shared/pin-storage-v5.w2tv.js"), import("./settings/check-has-trust-dialog-accepted.aypz.js")]), P = w(r);
    if (z() && P !== void 0) {
      let [{ credentialsStoreFor: g }, { setGrowthBookCredentials: u, setGrowthBookStorageBackend: T }, { composePolicyLimitsClient: k, primePolicyLimitsCache: G }, { primeFastPathCredentials: j }] = await Promise.all([import("./shared/credentials-store-for.bh2g.js"), import("./cli/answer-next-growth-book-remote-eval-with.a8jg.js"), import("./cli/admit-prefetched-policy-limits.z1w7.js"), import("./cli/prime-fast-path-credentials.kax5.js")]), U = g(P);
      u(U), T(P), k({ storageV5: P, credentials: U }), await j(U), await G(P), await F(P);
    }
    let [{ initSinks: H }, { initialize1PEventLogging: c }, { credentialsStoreFor: a }, { initDefaultDebugLog: d }, { watchGlobalConfigThroughStorage: O }] = await Promise.all([import("./ui/init-sinks.zxnn.js"), import("./telemetry/log-event-to1-p.68b1.js"), import("./shared/credentials-store-for.bh2g.js"), import("./shared/dropped-debug-output-totals.1enm.js"), import("./settings/check-has-trust-dialog-accepted.aypz.js")]);
    H();
    let R = a(P);
    c(P);
    let b = await _(p);
    if (z() && P !== void 0) d({ storageV5: P }), O(P);
    await l(b, e.slice(1), P, R);
    return;
  }
  {
    let t = BZs(e);
    if (t !== null) {
      A("cli_daemon_path");
      let { ensureFastPathSettingsLoaded: o } = await import("./settings/ensure-fast-path-settings-loaded.c1xj.js");
      await o(r);
      let { initializeErrorLogSink: i } = await import("./ui/initialize-error-log-sink.k5fh.js");
      i();
      let { daemonMain: E } = await import("./tasks/daemon-main.tpzp.js");
      await E(t, r);
      return;
    }
  }
  let M = process.env.CLAUDE_CODE_SESSION_KIND === "bg", N = e.some((t) => t === "logs" || t === "attach" || t === "stop" || t === "kill" || t === "respawn" || t === "rm") ? import.meta.require("./tasks/background-session-verb-index.1z47.js").backgroundSessionVerbIndex(e, { behindRootOptions: !M }) : -1, h = N === -1 ? [] : e.slice(N), B = e.includes("--bg") || e.includes("--background") ? import.meta.require("./tasks/background-session-verb-index.1z47.js").hasBackgroundFlag(e) : false;
  if (h.length > 0 || B) {
    if (A("cli_bg_path"), ge(e)) console.error(h.length > 0 ? `--desktop can't be combined with \`claude ${h[0]}\`.` : "--desktop opens the Claude Desktop app and can't run in the background (`--bg`, `--background`, `--routine`)."), process.exit(1);
    if (N > 0) {
      let [{ eagerParseCliFlag: a }, { loadSettingsFromFlag: d, loadManagedSettingsFromFlag: O }] = await Promise.all([import("./tasks/background-session-verb-index.1z47.js"), import("./settings/apply-setting-sources-flag-from-argv.99bn.js")]), R = e.slice(0, N), b = a("--settings", R);
      if (b) d(b);
      let g = a("--managed-settings", R);
      if (g) O(g);
    }
    let { loadFastPathPolicy: t } = await import("./settings/ensure-fast-path-settings-loaded.c1xj.js"), { sessionFactsRestored: o } = await import("./auth/early-credentials-of.gbs5.js"), i = null, E = ["logs", "stop", "kill", "rm"].includes(h[0] ?? "");
    {
      let a = await t(r);
      if (a) if (E) process.stderr.write(`${a}
`);
      else {
        let { exitWithError: d } = await import("./shared/drain-stdout-before-exit.ydts.js");
        d(a);
      }
      if (i = await o(r), i !== null && !E) {
        let { exitWithError: d } = await import("./shared/drain-stdout-before-exit.ydts.js");
        d(i.reason);
      }
    }
    let _ = i === null;
    if (i !== null) process.stderr.write(`${i.reason}
`);
    let l = await import("./agents/bg-supervisor-noun.2q8v.js");
    if (await l.ensureFleetGateHydrated({ kickGrowthBook: _ && !E }), !l.isAgentsFleetEnabled()) {
      let a = h[0] ?? e.find((d) => d === "--bg" || d === "--background" || d === "--routine" || d.startsWith("--routine=")) ?? "--bg";
      return l.fleetGateRejected(a);
    }
    let [p, { pinStorageV5: w }, { initDefaultDebugLog: F }, { seedInstallIDs: P, watchGlobalConfigThroughStorage: H }] = await Promise.all([import("./ide/attach-handler.8pqd.js"), import("./shared/pin-storage-v5.w2tv.js"), import("./shared/dropped-debug-output-totals.1enm.js"), import("./settings/check-has-trust-dialog-accepted.aypz.js")]), c = w(r);
    if (z() && c !== void 0) {
      F({ storageV5: c }), H(c);
      let [{ credentialsStoreFor: a }, { setGrowthBookCredentials: d, setGrowthBookStorageBackend: O }, { composePolicyLimitsClient: R, primePolicyLimitsCache: b }, { primeFastPathCredentials: g }] = await Promise.all([import("./shared/credentials-store-for.bh2g.js"), import("./cli/answer-next-growth-book-remote-eval-with.a8jg.js"), import("./cli/admit-prefetched-policy-limits.z1w7.js"), import("./cli/prime-fast-path-credentials.kax5.js")]), u = a(c);
      d(u), O(c), R({ storageV5: c, credentials: u }), await g(u), await b(c), await P(c);
    }
    switch (h[0]) {
      case "logs":
      case "attach":
      case "stop":
      case "kill":
      case "respawn":
      case "rm": {
        let [{ initializeAnalyticsSink: a }, { initialize1PEventLogging: d, shutdown1PEventLogging: O }, { shutdownDatadog: R }, { sleep: b }] = await Promise.all([import("./telemetry/initialize-analytics-sink.deh9.js"), import("./telemetry/log-event-to1-p.68b1.js"), import("./auth/reset-datadog-init.jvxf.js"), import("./shared/full-jitter-backoff-ms.qsyd.js")]);
        if (_) a(), d(c);
        if (h[0] === "logs") await p.logsHandler(h[1], c);
        else if (h[0] === "attach") await p.attachHandler(h[1], c);
        else if (h[0] === "respawn") await p.respawnHandler(h[1], c);
        else if (h[0] === "rm") await p.rmHandler(h[1], c, void 0, _);
        else await p.stopHandler(h[1], c, _);
        return await Promise.race([Promise.all([O(), R()]), b(500, void 0, { unref: true })]).catch(() => {
        }), process.exit(process.exitCode ?? 0);
      }
      default: {
        let [{ initializeAnalyticsSink: a }, { initialize1PEventLogging: d, shutdown1PEventLogging: O }, { shutdownDatadog: R }, { logEvent: b }, { sleep: g }] = await Promise.all([import("./telemetry/initialize-analytics-sink.deh9.js"), import("./telemetry/log-event-to1-p.68b1.js"), import("./auth/reset-datadog-init.jvxf.js"), import("./telemetry/attach-analytics-sink.74xa.js"), import("./shared/full-jitter-backoff-ms.qsyd.js")]);
        a(), d(c), b("tengu_background", { via_flag: true, via: S("flag") }), await p.handleBgFlag(e, c), await Promise.race([Promise.all([O(), R()]), g(500, void 0, { unref: true })]).catch(() => {
        }), process.exit(process.exitCode ?? 0);
      }
    }
    return;
  }
  let n = oEt(e);
  n.config.restricted ||= ["1", "true", "yes", "on"].includes((process.env.CLAUDE_CODE_RESTRICTED ?? "").toLowerCase().trim());
  let { dispatchDefaults: I, rest: ue } = je(n.rest), q = n.hasAgentsPositional && me(ue), ee;
  if ((q || (me(e) || ee !== void 0) && process.stdin.isTTY) && process.stdout.isTTY) {
    let { startCapturingEarlyInput: t, consumeEarlyInput: o } = await import("./cli/consume-early-input.jtks.js");
    t();
    let [{ startMdmRawRead: i }, { startKeychainPrefetch: E }] = await Promise.all([import("./shared/fire-raw-read.d0g3.js"), import("./auth/clear-legacy-api-key-prefetch.ss6m.js")]);
    i(), E();
    let { enableConfigs: _, getGlobalConfig: l, seedInstallIDs: p } = await import("./settings/check-has-trust-dialog-accepted.aypz.js"), w = false, F = false, P = false;
    try {
      await _(z() ? r?.backend : void 0), F = l().defaultToAgentsView === true, w = q || F && ee === void 0;
    } catch {
    }
    if (w) {
      if (n.config.settings || n.config.managedSettings) {
        let { loadSettingsFromFlag: u, loadManagedSettingsFromFlag: T } = await import("./settings/apply-setting-sources-flag-from-argv.99bn.js");
        if (n.config.settings) u(n.config.settings);
        if (n.config.managedSettings) T(n.config.managedSettings);
      }
      if (n.config.pluginDir.length > 0 || n.config.pluginDirNoMcp.length > 0) {
        let [{ setInlinePlugins: u, setInlinePluginsNoMcp: T }, { clearPluginCache: k }] = await Promise.all([import("./mcp/acquire-mcp-clients-accessor.n7y2.js"), import("./git/anchored-plugin-cache-path.8jex.js")]);
        u(n.config.pluginDir), T(n.config.pluginDirNoMcp), k("claude agents --plugin-dir");
      }
      let { loadFastPathPolicy: H } = await import("./settings/ensure-fast-path-settings-loaded.c1xj.js"), c = await H(r);
      if (c) {
        let { exitWithError: u } = await import("./shared/drain-stdout-before-exit.ydts.js");
        u(c);
      }
      let a;
      if (process.env.CLAUDE_CODE_PLUGIN_DIRS?.trim()) {
        let [{ mergePluginDirs: u, PLUGIN_DIRS_ENV_RECOVERY_HINT: T, PLUGIN_DIRS_ENV_VAR: k, settlePluginDirsEnv: G, withoutPluginDirs: j }, { setInlinePlugins: U }, { clearPluginCache: Q }] = await Promise.all([import("./plugins/merge-plugin-dirs.ag02.js"), import("./mcp/acquire-mcp-clients-accessor.n7y2.js"), import("./git/anchored-plugin-cache-path.8jex.js")]), J = j(G(), n.config.pluginDirNoMcp);
        if (J.length > 0) a = { name: k, hint: T }, U(u(n.config.pluginDir, J)), Q("claude agents CLAUDE_CODE_PLUGIN_DIRS");
      }
      {
        let { areSideloadFlagsDisabledByPolicy: u, sideloadFlagsBlockedMessage: T } = await import("./ide/are-command-plugin-sources-disabled-by-policy.92qd.js");
        if (u()) {
          let k = [];
          if (n.config.pluginDir.length > 0) k.push("--plugin-dir");
          if (n.config.pluginDirNoMcp.length > 0) k.push("--plugin-dir-no-mcp");
          if (a) k.push(a.name);
          if (k.length > 0) {
            let { exitWithError: G } = await import("./shared/drain-stdout-before-exit.ydts.js");
            G(a ? `${T(k)} ${a.hint}` : T(k));
          }
        }
      }
      let { isAgentsFleetEnabled: d, ensureFleetGateHydrated: O, fleetGateRejected: R, consumeAgentViewRelaunchMarker: b } = await import("./agents/bg-supervisor-noun.2q8v.js");
      await O({ kickGrowthBook: false });
      let g = false;
      if (w && d() && !g) {
        let { sessionFactsRestored: u } = await import("./auth/early-credentials-of.gbs5.js"), T = await u(r);
        if (T !== null) {
          let { exitWithError: D } = await import("./shared/drain-stdout-before-exit.ydts.js");
          D(T.reason);
        }
        let [{ applyFleetViewHostWindowsEnv: k }, { createRoot: G }, { getBaseRenderOptions: j }, { resolve: U }, { getRootSession: Q, setCliSessionConfigCarried: J, setIsInteractive: Ae, setRestrictedSession: Re, setSessionStartType: De }, { cliCarriesSessionConfig: ye }, { pinStorageV5: Oe }, { appliedSettingSourcesFlagValue: ke }] = await Promise.all([import("./agents/apply-fleet-view-host-windows-env.80y7.js"), import("./cli/create-root.kngf.js"), import("./ui/get-base-render-options.7nga.js"), import("path"), import("./mcp/acquire-mcp-clients-accessor.n7y2.js"), import("./settings/cli-carries-fork-restricted-config.vx0t.js"), import("./shared/pin-storage-v5.w2tv.js"), import("./settings/applied-setting-sources-argv.a9qw.js")]), ie = { ...n.config, settingSources: ke() }, C = Oe(r), Y;
        if (z() && C !== void 0) {
          let [{ credentialsStoreFor: D }, { setGrowthBookCredentials: m, setGrowthBookStorageBackend: L }, { primeFastPathCredentials: K }] = await Promise.all([import("./shared/credentials-store-for.bh2g.js"), import("./cli/answer-next-growth-book-remote-eval-with.a8jg.js"), import("./cli/prime-fast-path-credentials.kax5.js")]);
          Y = D(C), m(Y), L(C), await K(Y), await p(C);
        }
        import("./settings/resolve-setting.crkr.js").then(({ resolveSetting: D }) => {
          let { value: m } = D("theme", "dark");
          if (m.startsWith("custom:")) import("./ui/custom-theme-ref.jxfq.js").then((L) => L.loadCustomThemes(C));
        });
        let Le = b();
        Ae(true), J(ye({ ...ie, ...I })), Re(n.config.restricted), De("agents_view");
        let oe = () => {
        };
        process.on("unhandledRejection", oe);
        let re = Promise.resolve(), se = () => {
        }, ne = new Promise((D) => {
          se = D;
        });
        setImmediate(async () => {
          if (z() && C !== void 0) try {
            let [{ credentialsStoreFor: m }, { composePolicyLimitsClient: L, primePolicyLimitsCache: K }] = await Promise.all([import("./shared/credentials-store-for.bh2g.js"), import("./cli/admit-prefetched-policy-limits.z1w7.js")]);
            L({ storageV5: C, credentials: m(C) }), await K(C);
          } catch (m) {
            import("./shared/dropped-debug-output-totals.1enm.js").then(({ logForDebugging: L }) => L(`Policy limits: start-up composition on the agents path failed: ${m instanceof Error ? m.message : String(m)}`, { level: "warn" }));
          }
          re = Promise.all([import("./ui/claim-shutdown.0yqb.js"), import("./ui/initialize-error-log-sink.k5fh.js"), import("./telemetry/initialize-analytics-sink.deh9.js"), import("./telemetry/log-event-to1-p.68b1.js"), import("./telemetry/attach-analytics-sink.74xa.js"), import("./agents/capture-teammate-mode-snapshot-if-enabled.cpng.js"), import("./cli/answer-next-growth-book-remote-eval-with.a8jg.js"), import("./telemetry/initialize-telemetry-after-trust.6awt.js"), import("./settings/check-has-trust-dialog-accepted.aypz.js"), import("./settings/apply-config-environment-variables.fnxy.js"), import("./git/clear-repository-caches.d7xd.js"), import("./shared/dropped-debug-output-totals.1enm.js")]).then(([{ setupGracefulShutdown: m }, { initializeErrorLogSink: L }, { initializeAnalyticsSink: K }, { initialize1PEventLogging: Me }, { logEvent: Ne }, { captureTeammateModeSnapshotIfEnabled: Be }, { initializeGrowthBook: He }, { initializeTelemetryAfterTrust: xe }, { checkHasTrustDialogAccepted: pe, watchGlobalConfigThroughStorage: Ge }, { applyConfigEnvironmentVariables: Ue }, { setRepoDetectionGuards: Ve }, { initDefaultDebugLog: We }]) => {
            if (m({ storageV5: C, credentials: Y }), Ve({ trustProbe: pe }), He().catch(() => {
            }), L(), K(), Me(C), z() && C !== void 0) We({ storageV5: C }), Ge(C);
            return ne.then(() => {
              if (pe()) Ue(), xe(C);
            }), Ne("tengu_fleetview", { defaultToAgentsView: F, relaunch: Le }), Be();
          }).finally(() => process.off("unhandledRejection", oe));
          let D = () => void import("./tasks/is-last-cleanup-sentinel-fresh.c92d.js").then((m) => m.startBackgroundHousekeeping(Q().host, C));
          Promise.all([import("./cli/answer-next-growth-book-remote-eval-with.a8jg.js"), import("./settings/check-has-trust-dialog-accepted.aypz.js")]).then(([{ getFeatureValue_CACHED_MAY_BE_STALE: m }, { checkHasTrustDialogAccepted: L }]) => {
            if (m("tengu_noble_wozniak", true)) ne.then(() => {
              if (L()) D();
            });
            else D();
          });
        }), o(), k();
        let X = I?.permissionMode === "bypassPermissions" || I?.allowBypass ? await import("./permissions/apply-bypass-policy-gate.ettc.js") : void 0;
        X?.refuseBypassUnderRoot(I);
        let ae = X?.applyBypassPolicyGate(I) ?? I, Z = await G(j(false)), { ensureAgentsWorkspaceTrust: Te, agentsTrustDecision: Ie } = await import("./agents/agents-trust-decision.ndh8.js");
        if (await Te(Z, Ie(), C), se(), X) await X.ensureAgentsBypassConsent(Z, ae, C);
        let ce = true;
        try {
          ce = import.meta.require("./settings/org-config-gate-flag-on-hand.1g7a.js").orgConfigGateFlagOnHand(l(), process.env.CLAUDE_INTERNAL_FC_OVERRIDES);
        } catch {
        }
        if (ce && (await import("./settings/in-org-config-gate-rollout.w30w.js")).orgConfigGateFlagCouldArm()) {
          let { enforceOrgConfigGateOnLaunchLane: D } = await import("./settings/enforce-org-config-gate-at-startup.ddhj.js");
          await D({ showBlockedScreen: () => import("./settings/show-org-config-blocked-screen.pgqk.js").then((m) => m.showOrgConfigBlockedScreen, () => {
            return;
          }), printMessage: async (m) => {
            let { endInkWithError: L } = await import("./onboarding/adopt-persisted-workspace-trust.wdb2.js");
            await L(Z, m);
          } });
        }
        let le = await import("./agents/bg-supervisor-noun.2q8v.js"), Fe = { cwdFilter: n.cwdFilter, dispatchExtraArgs: iue(sEt(ie, U)), dispatchDefaults: ae, entryChannel: le.isListReturnRelaunch() ? "list_return" : q ? "cli_agents" : "default_home", storageV5: C, credentials: Y };
        {
          let { mountFleetViewWithComposerBack: D } = await import("./agents/mount-fleet-view-with-composer-back.f9yn.js");
          await D(Z, Fe);
        }
        await re.catch(() => {
        });
        let { gracefulShutdown: be } = await import("./ui/claim-shutdown.0yqb.js");
        await be(0, "other", { suppressResumeHint: true });
        return;
      }
      if (q && !g) return R("claude agents");
    }
  }
  if (e[0] === "self-hosted-runner") {
    A("cli_self_hosted_runner_path");
    let t = e[1];
    if (t === "orchestrator") {
      let { selfHostedRunnerOrchestratorMain: i } = await import("./remote/self-hosted-runner-orchestrator-main.7e2a.js");
      await i(e.slice(2));
      return;
    }
    if (t === "setup") {
      let { selfHostedRunnerSetupMain: i } = await import("./remote/self-hosted-runner-setup-main.v24g.js");
      await i(e.slice(2), r);
      return;
    }
    if (t === "doctor") {
      let { selfHostedRunnerDoctorMain: i } = await import("./remote/self-hosted-runner-doctor-main.tvca.js");
      await i(e.slice(2), r);
      return;
    }
    if (t === "code-sign") {
      let { selfHostedRunnerCodeSignMain: i } = await import("./git/coauthor-hook-stubs.r0md.js");
      await i(e.slice(2));
      return;
    }
    if (t === "decode-token") {
      let { selfHostedRunnerDecodeTokenMain: i } = await import("./remote/self-hosted-runner-decode-token-main.694d.js");
      await i(e.slice(2));
      return;
    }
    let { selfHostedRunnerMain: o } = await import("./remote/self-hosted-runner-main.b1t6.js");
    await o(e.slice(1));
    return;
  }
  if ((e.includes("--tmux") || e.includes("--tmux=classic")) && (e.includes("-w") || e.includes("--worktree") || e.some((t) => t.startsWith("--worktree=")))) {
    if (A("cli_tmux_worktree_fast_path"), ge(e)) console.error("--desktop only opens the Claude Desktop app; it can't be combined with `--worktree` or `--tmux`."), process.exit(1);
    let { eagerLoadSettings: t } = await import("./settings/apply-setting-sources-flag-from-argv.99bn.js");
    t();
    let { loadFastPathPolicy: o } = await import("./settings/ensure-fast-path-settings-loaded.c1xj.js");
    {
      let _ = await o(r);
      if (_) {
        let { exitWithError: l } = await import("./shared/drain-stdout-before-exit.ydts.js");
        l(_);
      }
    }
    let { configureFastPathGlobalAgents: i } = await import("./agents/configure-fast-path-global-agents.64nb.js");
    i();
    let { isWorktreeModeEnabled: E } = await import("./git/is-worktree-mode-enabled.eewh.js");
    if (E()) {
      let [{ execIntoTmuxWorktree: _ }, { pinStorageV5: l }, { initDefaultDebugLog: p }] = await Promise.all([import("./ide/carries-discard-consent.4bw4.js"), import("./shared/pin-storage-v5.w2tv.js"), import("./shared/dropped-debug-output-totals.1enm.js")]), w = l(r), F;
      if (z() && w !== void 0) {
        p({ storageV5: w });
        let [{ credentialsStoreFor: c }, { setGrowthBookCredentials: a, setGrowthBookStorageBackend: d }, { primeFastPathCredentials: O }] = await Promise.all([import("./shared/credentials-store-for.bh2g.js"), import("./cli/answer-next-growth-book-remote-eval-with.a8jg.js"), import("./cli/prime-fast-path-credentials.kax5.js")]);
        F = c(w), a(F), d(w), await O(F);
        let { seedInstallIDs: R } = await import("./settings/check-has-trust-dialog-accepted.aypz.js");
        await R(w);
      }
      let P = await _(e, w, F);
      if (P.handled) return;
      let { exitWithError: H } = await import("./shared/drain-stdout-before-exit.ydts.js");
      H(P.error);
    }
  }
  if (e.length === 1 && (e[0] === "--update" || e[0] === "--upgrade")) process.argv = [process.argv[0], process.argv[1], "update"];
  let te = e.indexOf("--");
  if ((te === -1 ? e : e.slice(0, te)).includes("--bare")) process.env.CLAUDE_CODE_SIMPLE = "1";
  let { NON_REPL_SUBCOMMANDS: fe, isMcpServeInvocation: we, isPluginEvalInvocation: he, isRemoteControlInvocation: Ee, isAgentsJsonInvocation: _e, isProjectVerbInvocation: Se } = await import("./agents/is-agents-json-invocation.y7ve.js");
  if (!fe.has(process.argv[2] ?? "") && !we(process.argv.slice(2)) && !he(process.argv.slice(2)) && !Ee(process.argv.slice(2)) && !_e(process.argv.slice(2)) && !Se(process.argv.slice(2))) {
    let { startCapturingEarlyInput: t } = await import("./cli/consume-early-input.jtks.js");
    t();
  }
  let [{ startMdmRawRead: Ce }, { startKeychainPrefetch: Pe }] = await Promise.all([import("./shared/fire-raw-read.d0g3.js"), import("./auth/clear-legacy-api-key-prefetch.ss6m.js")]);
  Ce(), Pe(), A("cli_before_main_import"), (await import("./cli/configure-zod-for-startup.ywrd.js")).configureZodForStartup();
  let { main: ve } = await import("./cli/main.q3ah.js");
  A("cli_after_main_import"), await ve(r), A("cli_after_main_complete");
}
Ye();
