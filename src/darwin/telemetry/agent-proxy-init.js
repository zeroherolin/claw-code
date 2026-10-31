// darwin/telemetry/agent-proxy-init.js — Claude Code 2.1.310（darwin）模块 chunk-2ybvhsfs.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { U, V, Cu, HXr, xit, ye, eos, Gbe, Wr, Lit } from "../context/not-admin-owned.js";
import { my, jI, d } from "./anthropic-workspace-id.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { _t, t } from "../fs/gitlab-runner-authentication-token.js";
import { bie } from "../models/claude-3-5-sonnet.js";
import { Tfi, i } from "../shared/environment.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { St, l } from "../artifacts/cowritten-artifact-html.js";
import { Afi, O } from "../fs/chunk-ce5d00cd.js";
import { go } from "../mcp/init-function-end.js";
import { NM } from "../remote/local-agent.js";
import { nqo, V_n, Wnr, vvt, p3o, oZ, jVe, DSn, LSn, pl, k, As, $j, ue, Xvt, EH, Jvt, V4o } from "../settings/global-config-and-gates.js";
import { m } from "./chunk-9d6962d2.js";
import { wr, Te } from "../models/total-tokens-reminder.js";
import { sdi, OEn } from "../shell/invalid-type.js";
import { Ilr } from "../shell/chunk-8eebd6c6.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { ws } from "../settings/workflow-launch-exec.js";
import { qRe, YRe, Ili, Oli, fe, NL, nz, a5 } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Bqe } from "../auth/descriptor-direct.js";
import { GZ, kK, $Qo, CK, TK, Aqt, Yb, KZ } from "../fs/ca-certs-load.js";
import { D8o } from "../auth/permission-error.js";
import { gQo } from "../auth/profile-explicit.js";
import { lce } from "../api/anthropic-client.js";
import { NNe } from "../auth/auth-launcher-host-login.js";
import { fst, Wvn } from "../git/get-url.js";
import { sv } from "../shared/chunk-537f65d6.js";
import { h9o } from "../git/ssh-placeholder.js";
import { k2t, uJs, lAe } from "../context/account-memory-text-not-identified.js";
import { QMs, sa, NNs, UPo, ai } from "../core/conversation-engine.js";
import { UP } from "../context/team-memory-sync.js";
import { Mh } from "../auth/env-quad.js";
import { QE, wd, CWo } from "../context/tool-result-clearing-after-idle-server-report.js";
import { azo, lzo } from "../settings/chunk-10c0eeb6.js";
import { dJs } from "../context/stream-no-events-fallback-warning.js";
import { t7s } from "../context/tool-use-id.js";
import { Gi, YC, Nye } from "../context/org-memory-writes-setting-changed.js";
import { gE } from "../artifacts/utf-8.js";
import { Hr } from "../mcp/spawn-to-exec-ms.js";
import { pY, mzo, doe, Px } from "../settings/non-string-value.js";
import { BGs } from "../plugins/plugin-enabled-for-session.js";
import { WP } from "../agents/api-system.js";
import { Ozo, Hzo, Lzo, Lhn, jzo } from "../auth/policy-limits-principal-changed.js";
import { F4n } from "../fs/chunk-b6b2e102.js";
import { Eao } from "../auth/chunk-3e75db15.js";
import { DV } from "../cli/stream-json.js";
import { nVo } from "./chunk-1fe233de.js";
import { tB } from "./chunk-12c9c79d.js";
import { EGr } from "../shared/chunk-759bfb30.js";
import { _Qt, mMt, Fmo, QEr, kN } from "../remote/managed-settings-security-dialog-accepted.js";
import { ZUe } from "../settings/chunk-e2a1cbb0.js";
import { q2t } from "../auth/chunk-228d29bc.js";
import { tT } from "../fs/read-failed.js";
import { bct } from "../settings/config-read-failed.js";
import { G6s, z6s } from "./chunk-63c0e0aa.js";
import { s4 } from "../shared/chunk-fe849e7d.js";
import { gr } from "../shared/chunk-7e745eb7.js";
import { z } from "../shared/chunk-be29de51.js";
import { sd } from "../remote/chunk-95151620.js";
import { Bz } from "../shared/chunk-d7d58ade.js";
function G(e, r) {
  return sa("telemetry.log", { origin: r?.hookOrigin, signal: r?.signal, ...r?.engineRaised && { engineRaised: true } })(e);
}
var H = { send: (e, r, f) => G(e, { signal: r, hookOrigin: f, engineRaised: true }) };
lAe.setRoad(H);
function v() {
  {
    if (!sd()) return;
    let e = sv.CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR;
    if (sv.unset("CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR"), e === void 0) return;
    if (e.trim()) Gbe("CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR");
    let r = (c) => t(`[agent-proxy] ${c}`, { level: "warn" });
    if (Bz(r), !/^[1-9][0-9]{0,5}$/.test(e) || Number(e) < 3) {
      r("CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR is not a descriptor number of 3 or more; no relay token was read"), m("agent_proxy_init", "agent_proxy_init_token_fd_malformed");
      return;
    }
    if (typeof process.send === "function") {
      r("this process has an IPC channel, which no launcher of a tool daemon opens; no relay token was read"), m("agent_proxy_init", "agent_proxy_init_token_fd_ipc");
      return;
    }
    let f = Bqe(Number(e), "agent proxy relay's token");
    if (f === null) {
      r("the relay's token was announced but not read (the line above says why); if its descriptor was empty, something else may have read it first"), m("agent_proxy_init", "agent_proxy_init_token_fd_unread");
      return;
    }
    return f;
  }
  return;
}
function A() {
  if (qRe.asks !== void 0) return;
  qRe.asks = s4;
  try {
    b();
  } catch (e) {
    t("organization ask: not settled at start-up; settings reads go by the launch alone", { level: "error" }), l(e);
  }
  pl(b);
}
function b() {
  let e = YRe(), r = qRe.told;
  if (r !== void 0 && r !== e) {
    if (e) Ili(() => ({ settings: NL(), origin: nz(), loadErrors: a5() }));
    else Oli(() => ({ settings: NL(), origin: nz(), loadErrors: a5() }));
    Gi.notifyChange("policySettings");
  }
  qRe.told = e;
}
function R() {
  let e = wr().providerCache;
  if (e.preconnectFired) return;
  if (e.preconnectFired = true, Te() !== "firstParty" || oZ() === "gateway" || jVe()) return;
  if (St()) return;
  if (i.HTTPS_PROXY || i.https_proxy || i.HTTP_PROXY || i.http_proxy || i.ANTHROPIC_UNIX_SOCKET || i.CLAUDE_CODE_CLIENT_CERT || i.CLAUDE_CODE_CLIENT_KEY) return;
  let r = i.ANTHROPIC_BASE_URL || rn().BASE_API_URL;
  lce(`${r.replace(/\/+$/, "")}/api/hello`, { method: "HEAD", signal: AbortSignal.timeout(1e4) }).catch(() => {
  });
}
function j(e) {
  return e.length > 0 && e.every((r) => r === "prometheus");
}
async function D(e, r) {
  let { initializeTelemetry: f } = await import("./big-query-export-interval-ms.js"), { meter: c, metricsExporterKinds: n } = await f(e, r);
  if (c) G6s(c, (u, S) => {
    let a = c?.createCounter(u, S);
    return { add(g, h = {}) {
      let y = { ...k2t(), ...h };
      a?.add(g, y);
    } };
  }, { omitUnits: j(n) }), await uJs(), z6s()?.add(1, { start_type: eos() });
}
class I {
  promise = void 0;
  telemetryInitialized = false;
  telemetryInit = void 0;
}
var X = new W(() => new I());
function w() {
  return X.of(U().host);
}
async function K(e = {}) {
  let r = v(), f = Eao() ?? r, c = Date.now();
  Y("info", "init_started"), go("init_function_start");
  let n = e.storageV5EnvPin;
  if (n?.backend !== void 0 && !bie(n.configHome)) t(`CLAUDE_CONFIG_DIR no longer names ${n.configHome}, where the v5 storage backend was built at start-up; init() loads its config without it`, { level: "warn" }), n = { ...n, backend: void 0 };
  n ??= nVo();
  try {
    let p = Date.now();
    if (z() && n?.backend !== void 0) await EGr(n.backend), await Promise.all([Xvt(n.backend), azo(n.backend, ws())]);
    else await Xvt();
    if (Y("info", "init_configs_enabled", { duration_ms: Date.now() - p }), go("init_configs_enabled"), z() && n?.backend !== void 0) D8o(ue().cachedGrowthBookFeatures?.tengu_windows_credman === true);
    if (z() && n?.backend !== void 0) await OEn(n.backend), go("init_remote_settings_primed");
    let u = tT(n?.backend);
    if (z() && u !== void 0) await q2t(u), go("init_fd_credentials_primed"), await p3o(u), go("init_stored_login_primed");
    if (Lit(NNe), i.CCR_AGENT_PROXY_RELAY_MODE !== void 0) {
      let { startAgentProxyStandaloneRelay: o } = await import("../agents/agent-proxy-standalone-proxy-url.js"), s = await o();
      if (s.kind === "failed") {
        if (console.error(s.message), s.cause === "url") await DV({ sessionId: V(), message: s.message, reason: "proxy_invalid" });
        process.exit(1);
      }
    }
    let S = Date.now();
    if (doe(), await h9o(), bct(), await Promise.all([GZ(), kK(), Afi(), Tfi()]), await F4n(), NM()) ZUe();
    if (await V_n(n?.backend !== void 0 && bie(n.configHome) ? u : void 0), Wr()) pY();
    Y("info", "init_safe_env_vars_applied", { duration_ms: Date.now() - S }), go("init_safe_env_vars_applied");
    let a = tB(n);
    sdi();
    let g = tT(a);
    if (z() && a !== void 0) await EGr(a);
    if (await lzo(a, ws()), z() && a !== void 0) await gQo(a);
    if (Lzo({ storageV5: a, credentials: g }), DSn(g), LSn(a), z() && g !== void 0) {
      if (await q2t(g), vvt()) await Wnr(g);
    }
    await Hzo(a), $j(a), BGs(a), UPo({ storageV5: a, credentials: g }), go("init_after_graceful_shutdown"), Promise.all([import("./log-event-to1-p.js"), import("../cli/answer-next-growth-book-remote-eval-with.js")]).then(([o, s]) => {
      o.initialize1PEventLogging(a), s.onGrowthBookRefresh(() => {
        o.reinitialize1PEventLoggingIfConfigChanged();
      });
    }), go("init_after_1p_event_logging"), A();
    let h = e.preparesSession !== false || k("tengu_quizzical_giraffe", false) !== true;
    if (nqo(g, a, h).catch(l), go("init_after_oauth_populate"), gE(a), import("../shell/command-sandbox-posture.js").then((o) => o.primeUnattendedServingConsent()).catch(() => {
    }), Wvn({ trustProbe: As }), fst(), QEr()) mMt();
    if (Mh()) Lhn();
    if (go("init_after_remote_settings_check"), V4o(a), Jvt(a), z() && a !== void 0) EH(a);
    let T = Date.now();
    t("[init] configureGlobalMTLS starting"), $Qo(), Y("info", "init_mtls_configured", { duration_ms: Date.now() - T }), t("[init] configureGlobalMTLS complete");
    let y = CK();
    if (y && !TK(y.value)) {
      let o = Aqt(y.source, y.value);
      throw await DV({ sessionId: V(), message: o, reason: "proxy_invalid" }), new my(o);
    }
    let L = Date.now();
    if (t("[init] configureGlobalAgents starting"), Yb(), Y("info", "init_proxy_configured", { duration_ms: Date.now() - L }), t("[init] configureGlobalAgents complete"), go("init_network_configured"), Ozo(_Qt), e.prefetchManagedConfig === true && h && _Qt()) try {
      Fmo(g), jzo();
    } catch {
      l(Error("a managed-config prefetch threw in init(); start-up went on without it"));
    }
    if (R(), e.startupGrowthBookKick?.(), e.startClientDataUrlFetch?.(), Ne(process.env.CLAUDE_CODE_REMOTE)) {
      let o = performance.now();
      try {
        let { initAgentProxy: s, getAgentProxyEnv: x, getGhStandinDir: M } = await import("../auth/agent-proxies.js"), { registerAgentProxyEnvFn: F, registerGhStandinDirFn: B } = await import("../ide/agent-proxy-env.js");
        F(x), B(M), await s({ toolContainerToken: f });
      } catch (s) {
        t(`[init] agent proxy init failed: ${s instanceof Error ? s.message : String(s)}; continuing without proxy`, { level: "warn" });
      }
      Hr("agent_proxy_init_ms", performance.now() - o, o);
    }
    if (Ilr(), O() === "windows" && !wd()) {
      if (!QE()) {
        let s = `Claude Code on Windows requires a shell tool. Git Bash was not found and the PowerShell tool is disabled (CLAUDE_CODE_USE_POWERSHELL_TOOL=0).
  - Install Git for Windows: https://git-scm.com/downloads/win, or
  - Remove CLAUDE_CODE_USE_POWERSHELL_TOOL from your environment or settings.`;
        console.error(s), await DV({ sessionId: V(), message: s, reason: "shell_tool_missing" }), process.exit(1);
      }
      if (await UP() === null) console.error(CWo), await DV({ sessionId: V(), message: CWo, reason: "shell_tool_missing" }), process.exit(1);
    }
    if (_t(QMs), _t(async () => {
      let { cleanupSessionTeams: o } = await import("../agents/cleanup-session-teams.js");
      await o(a);
    }), YC()) {
      let o = Date.now();
      try {
        let s = await Nye();
        Y("info", s === null ? "init_scratchpad_unavailable" : "init_scratchpad_created", { duration_ms: Date.now() - o });
      } catch (s) {
        t(`init: ensureScratchpadDir failed: ${s}`, { level: "error" });
      }
    }
    return Cu(() => {
      if (YC()) Nye().catch((o) => t(`onSessionSwitch: ensureScratchpadDir failed: ${o}`, { level: "error" }));
    }), dJs(), t7s(), NNs(), Y("info", "init_completed", { duration_ms: Date.now() - c }), go("init_function_end"), a;
  } catch (p) {
    if (p instanceof my) {
      process.stderr.write(`${p.message}
`), ai(1);
      return;
    }
    if (p instanceof jI) {
      if (!ye() && e.showInvalidConfigDialog) {
        await e.showInvalidConfigDialog({ error: p });
        return;
      }
      process.stderr.write(`Configuration error in ${p.filePath}: ${p.message}
`), ai(1);
      return;
    } else throw p;
  }
}
function Sao(e) {
  return w().promise ??= K(e);
}
function Zfe(e) {
  let r = w();
  if (QEr()) {
    if (ye() && WP()) E(r, e).catch((f) => {
      try {
        t(`[3P telemetry] Eager telemetry init failed (beta tracing): ${d(f)}`, { level: "error" });
      } catch {
      }
    });
    t("[3P telemetry] Waiting for remote managed settings fetch before telemetry init"), kN().then(async () => {
      t("[3P telemetry] Remote managed settings fetch settled, initializing telemetry"), Px();
      let { captureAdmin3PSteeringSnapshot: f } = await import("../shared/capture-admin3-p-steering-snapshot.js");
      f();
      let [c, n] = await Promise.all([GZ(), kK()]);
      if (c || n.changed) KZ(), Yb();
      await E(r, e);
    }).catch((f) => {
      if (xit() && !r.telemetryInitialized) HXr(EXt() || v0n() ? "init_failed" : "not_configured");
      try {
        t(`[3P telemetry] Telemetry init failed (remote settings path): ${d(f)}`, { level: "error" });
      } catch {
      }
    });
  } else E(r, e).catch((f) => {
    try {
      t(`[3P telemetry] Telemetry init failed: ${d(f)}`, { level: "error" });
    } catch {
    }
  });
}
async function E(e, r, f) {
  if (e.telemetryInitialized) return e.telemetryInit;
  return e.telemetryInitialized = true, e.telemetryInit = (async () => {
    let c = "not_configured";
    try {
      if (gr("tengu_typed_treasure", { safe: true })) mzo();
      await D(r, f);
    } catch (n) {
      if (e.telemetryInitialized = false, e.telemetryInit = void 0, EXt()) c = "init_failed";
      throw n;
    } finally {
      HXr(c);
    }
  })(), e.telemetryInit;
}
function wXt() {
  return E(w(), void 0);
}
function C(e) {
  return (e || "").trim().split(",").filter(Boolean).map((r) => r.trim()).some((r) => r !== "none");
}
function EXt() {
  return Ne(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) && C(i.OTEL_LOGS_EXPORTER);
}
function v0n() {
  try {
    let e = fe("policySettings")?.env;
    if (!e) return false;
    return (Ne(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) || Ne(e.CLAUDE_CODE_ENABLE_TELEMETRY)) && (C(i.OTEL_LOGS_EXPORTER) || C(e.OTEL_LOGS_EXPORTER));
  } catch {
    return false;
  }
}
export {
  EXt,
  Sao,
  Zfe,
  v0n,
  wXt
};
