// linux/telemetry/agent-proxy-init.js — Claude Code 2.1.310（linux）模块 chunk-655shhf4.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { U, q, Eu, dXr, vit, ye, brs, NSe, Wr, xit } from "../context/not-admin-owned.js";
import { fy, NI, d } from "./anthropic-workspace-id.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { bt, t } from "../fs/gitlab-runner-authentication-token.js";
import { fie } from "../models/claude-3-5-sonnet.js";
import { Bfi, i } from "../shared/environment.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { _t, l } from "../artifacts/cowritten-artifact-html.js";
import { jfi, O } from "../fs/chunk-ce5d00cd.js";
import { go } from "../mcp/init-function-end.js";
import { OM } from "../remote/local-agent.js";
import { Cqo, x_n, Tnr, hEt, N4o, X7, MVe, _bn, bbn, ul, k, Cs, I5, ue, WEt, _H, GEt, y5o } from "../settings/global-config-and-gates.js";
import { m } from "./chunk-9d6962d2.js";
import { Sr, Ae } from "../models/total-tokens-reminder.js";
import { wli, hvn } from "../shell/invalid-type.js";
import { glr } from "../shell/chunk-8eebd6c6.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { Ss } from "../settings/workflow-launch-exec.js";
import { WRe, GRe, Xai, Jai, pe, M0, Vz, J5 } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { k4e } from "../auth/descriptor-direct.js";
import { OZ, pq, GQo, mq, gq, s4t, qS, HZ } from "../fs/ca-certs-load.js";
import { s8o } from "../auth/permission-error.js";
import { o7o } from "../auth/profile-explicit.js";
import { ece } from "../api/anthropic-client.js";
import { INe } from "../auth/auth-launcher-host-login.js";
import { ist, CEn } from "../git/get-url.js";
import { oE } from "../shared/chunk-537f65d6.js";
import { B6o } from "../git/ssh-placeholder.js";
import { fGt, CJs, nCe } from "../context/account-memory-text-not-identified.js";
import { pMs, sa, Q0s, uPo, ai } from "../core/conversation-engine.js";
import { $P } from "../context/team-memory-sync.js";
import { Mh } from "../auth/env-quad.js";
import { Jv, vd, Xjo } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Izo, Ozo } from "../settings/chunk-10c0eeb6.js";
import { TJs } from "../context/stream-no-events-fallback-warning.js";
import { yXs } from "../context/tool-use-id.js";
import { Gi, VT, Iye } from "../context/org-memory-writes-setting-changed.js";
import { mv } from "../artifacts/utf-8.js";
import { Dr } from "../mcp/spawn-to-exec-ms.js";
import { o9, Fzo, noe, Cx } from "../settings/non-string-value.js";
import { gzs } from "../plugins/plugin-enabled-for-session.js";
import { UP } from "../agents/api-system.js";
import { o2o, i2o, l2o, bhn, m2o } from "../auth/policy-limits-principal-changed.js";
import { Gqn } from "../fs/chunk-b6b2e102.js";
import { lao } from "../auth/chunk-3e75db15.js";
import { kV } from "../cli/stream-json.js";
import { RKo } from "./chunk-1fe233de.js";
import { o4 } from "./chunk-12c9c79d.js";
import { tzr } from "../shared/chunk-759bfb30.js";
import { a7t, aMt, fmo, Hvr, SN } from "../remote/managed-settings-security-dialog-accepted.js";
import { zUe } from "../settings/chunk-e2a1cbb0.js";
import { LGt } from "../auth/chunk-228d29bc.js";
import { ZT } from "../fs/read-failed.js";
import { yct } from "../settings/config-read-failed.js";
import { sKs, iKs } from "./chunk-63c0e0aa.js";
import { qY } from "../shared/chunk-fe849e7d.js";
import { gr } from "../shared/chunk-7e745eb7.js";
import { z } from "../shared/chunk-be29de51.js";
import { sd } from "../remote/chunk-95151620.js";
import { O2 } from "../shared/chunk-960c3301.js";
function G(e, r) {
  return sa("telemetry.log", { origin: r?.hookOrigin, signal: r?.signal, ...r?.engineRaised && { engineRaised: true } })(e);
}
var H = { send: (e, r, f) => G(e, { signal: r, hookOrigin: f, engineRaised: true }) };
nCe.setRoad(H);
function v() {
  {
    if (!sd()) return;
    let e = oE.CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR;
    if (oE.unset("CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR"), e === void 0) return;
    if (e.trim()) NSe("CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR");
    let r = (c) => t(`[agent-proxy] ${c}`, { level: "warn" });
    if (O2(r), !/^[1-9][0-9]{0,5}$/.test(e) || Number(e) < 3) {
      r("CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR is not a descriptor number of 3 or more; no relay token was read"), m("agent_proxy_init", "agent_proxy_init_token_fd_malformed");
      return;
    }
    if (typeof process.send === "function") {
      r("this process has an IPC channel, which no launcher of a tool daemon opens; no relay token was read"), m("agent_proxy_init", "agent_proxy_init_token_fd_ipc");
      return;
    }
    let f = k4e(Number(e), "agent proxy relay's token");
    if (f === null) {
      r("the relay's token was announced but not read (the line above says why); if its descriptor was empty, something else may have read it first"), m("agent_proxy_init", "agent_proxy_init_token_fd_unread");
      return;
    }
    return f;
  }
  return;
}
function A() {
  if (WRe.asks !== void 0) return;
  WRe.asks = qY;
  try {
    b();
  } catch (e) {
    t("organization ask: not settled at start-up; settings reads go by the launch alone", { level: "error" }), l(e);
  }
  ul(b);
}
function b() {
  let e = GRe(), r = WRe.told;
  if (r !== void 0 && r !== e) {
    if (e) Xai(() => ({ settings: M0(), origin: Vz(), loadErrors: J5() }));
    else Jai(() => ({ settings: M0(), origin: Vz(), loadErrors: J5() }));
    Gi.notifyChange("policySettings");
  }
  WRe.told = e;
}
function R() {
  let e = Sr().providerCache;
  if (e.preconnectFired) return;
  if (e.preconnectFired = true, Ae() !== "firstParty" || X7() === "gateway" || MVe()) return;
  if (_t()) return;
  if (i.HTTPS_PROXY || i.https_proxy || i.HTTP_PROXY || i.http_proxy || i.ANTHROPIC_UNIX_SOCKET || i.CLAUDE_CODE_CLIENT_CERT || i.CLAUDE_CODE_CLIENT_KEY) return;
  let r = i.ANTHROPIC_BASE_URL || rn().BASE_API_URL;
  ece(`${r.replace(/\/+$/, "")}/api/hello`, { method: "HEAD", signal: AbortSignal.timeout(1e4) }).catch(() => {
  });
}
function V(e) {
  return e.length > 0 && e.every((r) => r === "prometheus");
}
async function D(e, r) {
  let { initializeTelemetry: f } = await import("./big-query-export-interval-ms.js"), { meter: c, metricsExporterKinds: n } = await f(e, r);
  if (c) sKs(c, (u, S) => {
    let a = c?.createCounter(u, S);
    return { add(g, h = {}) {
      let y = { ...fGt(), ...h };
      a?.add(g, y);
    } };
  }, { omitUnits: V(n) }), await CJs(), iKs()?.add(1, { start_type: brs() });
}
class I {
  promise = void 0;
  telemetryInitialized = false;
  telemetryInit = void 0;
}
var j = new W(() => new I());
function w() {
  return j.of(U().host);
}
async function X(e = {}) {
  let r = v(), f = lao() ?? r, c = Date.now();
  Y("info", "init_started"), go("init_function_start");
  let n = e.storageV5EnvPin;
  if (n?.backend !== void 0 && !fie(n.configHome)) t(`CLAUDE_CONFIG_DIR no longer names ${n.configHome}, where the v5 storage backend was built at start-up; init() loads its config without it`, { level: "warn" }), n = { ...n, backend: void 0 };
  n ??= RKo();
  try {
    let p = Date.now();
    if (z() && n?.backend !== void 0) await tzr(n.backend), await Promise.all([WEt(n.backend), Izo(n.backend, Ss())]);
    else await WEt();
    if (Y("info", "init_configs_enabled", { duration_ms: Date.now() - p }), go("init_configs_enabled"), z() && n?.backend !== void 0) s8o(ue().cachedGrowthBookFeatures?.tengu_windows_credman === true);
    if (z() && n?.backend !== void 0) await hvn(n.backend), go("init_remote_settings_primed");
    let u = ZT(n?.backend);
    if (z() && u !== void 0) await LGt(u), go("init_fd_credentials_primed"), await N4o(u), go("init_stored_login_primed");
    if (xit(INe), i.CCR_AGENT_PROXY_RELAY_MODE !== void 0) {
      let { startAgentProxyStandaloneRelay: o } = await import("../agents/agent-proxy-standalone-proxy-url.js"), s = await o();
      if (s.kind === "failed") {
        if (console.error(s.message), s.cause === "url") await kV({ sessionId: q(), message: s.message, reason: "proxy_invalid" });
        process.exit(1);
      }
    }
    let S = Date.now();
    if (noe(), await B6o(), yct(), await Promise.all([OZ(), pq(), jfi(), Bfi()]), await Gqn(), OM()) zUe();
    if (await x_n(n?.backend !== void 0 && fie(n.configHome) ? u : void 0), Wr()) o9();
    Y("info", "init_safe_env_vars_applied", { duration_ms: Date.now() - S }), go("init_safe_env_vars_applied");
    let a = o4(n);
    wli();
    let g = ZT(a);
    if (z() && a !== void 0) await tzr(a);
    if (await Ozo(a, Ss()), z() && a !== void 0) await o7o(a);
    if (l2o({ storageV5: a, credentials: g }), _bn(g), bbn(a), z() && g !== void 0) {
      if (await LGt(g), hEt()) await Tnr(g);
    }
    await i2o(a), I5(a), gzs(a), uPo({ storageV5: a, credentials: g }), go("init_after_graceful_shutdown"), Promise.all([import("./log-event-to1-p.js"), import("../cli/answer-next-growth-book-remote-eval-with.js")]).then(([o, s]) => {
      o.initialize1PEventLogging(a), s.onGrowthBookRefresh(() => {
        o.reinitialize1PEventLoggingIfConfigChanged();
      });
    }), go("init_after_1p_event_logging"), A();
    let h = e.preparesSession !== false || k("tengu_quizzical_giraffe", false) !== true;
    if (Cqo(g, a, h).catch(l), go("init_after_oauth_populate"), mv(a), import("../shell/command-sandbox-posture.js").then((o) => o.primeUnattendedServingConsent()).catch(() => {
    }), CEn({ trustProbe: Cs }), ist(), Hvr()) aMt();
    if (Mh()) bhn();
    if (go("init_after_remote_settings_check"), y5o(a), GEt(a), z() && a !== void 0) _H(a);
    let T = Date.now();
    t("[init] configureGlobalMTLS starting"), GQo(), Y("info", "init_mtls_configured", { duration_ms: Date.now() - T }), t("[init] configureGlobalMTLS complete");
    let y = mq();
    if (y && !gq(y.value)) {
      let o = s4t(y.source, y.value);
      throw await kV({ sessionId: q(), message: o, reason: "proxy_invalid" }), new fy(o);
    }
    let L = Date.now();
    if (t("[init] configureGlobalAgents starting"), qS(), Y("info", "init_proxy_configured", { duration_ms: Date.now() - L }), t("[init] configureGlobalAgents complete"), go("init_network_configured"), o2o(a7t), e.prefetchManagedConfig === true && h && a7t()) try {
      fmo(g), m2o();
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
      Dr("agent_proxy_init_ms", performance.now() - o, o);
    }
    if (glr(), O() === "windows" && !vd()) {
      if (!Jv()) {
        let s = `Claude Code on Windows requires a shell tool. Git Bash was not found and the PowerShell tool is disabled (CLAUDE_CODE_USE_POWERSHELL_TOOL=0).
  - Install Git for Windows: https://git-scm.com/downloads/win, or
  - Remove CLAUDE_CODE_USE_POWERSHELL_TOOL from your environment or settings.`;
        console.error(s), await kV({ sessionId: q(), message: s, reason: "shell_tool_missing" }), process.exit(1);
      }
      if (await $P() === null) console.error(Xjo), await kV({ sessionId: q(), message: Xjo, reason: "shell_tool_missing" }), process.exit(1);
    }
    if (bt(pMs), bt(async () => {
      let { cleanupSessionTeams: o } = await import("../agents/cleanup-session-teams.js");
      await o(a);
    }), VT()) {
      let o = Date.now();
      try {
        let s = await Iye();
        Y("info", s === null ? "init_scratchpad_unavailable" : "init_scratchpad_created", { duration_ms: Date.now() - o });
      } catch (s) {
        t(`init: ensureScratchpadDir failed: ${s}`, { level: "error" });
      }
    }
    return Eu(() => {
      if (VT()) Iye().catch((o) => t(`onSessionSwitch: ensureScratchpadDir failed: ${o}`, { level: "error" }));
    }), TJs(), yXs(), Q0s(), Y("info", "init_completed", { duration_ms: Date.now() - c }), go("init_function_end"), a;
  } catch (p) {
    if (p instanceof fy) {
      process.stderr.write(`${p.message}
`), ai(1);
      return;
    }
    if (p instanceof NI) {
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
function Jio(e) {
  return w().promise ??= X(e);
}
function Kpe(e) {
  let r = w();
  if (Hvr()) {
    if (ye() && UP()) E(r, e).catch((f) => {
      try {
        t(`[3P telemetry] Eager telemetry init failed (beta tracing): ${d(f)}`, { level: "error" });
      } catch {
      }
    });
    t("[3P telemetry] Waiting for remote managed settings fetch before telemetry init"), SN().then(async () => {
      t("[3P telemetry] Remote managed settings fetch settled, initializing telemetry"), Cx();
      let { captureAdmin3PSteeringSnapshot: f } = await import("../shared/capture-admin3-p-steering-snapshot.js");
      f();
      let [c, n] = await Promise.all([OZ(), pq()]);
      if (c || n.changed) HZ(), qS();
      await E(r, e);
    }).catch((f) => {
      if (vit() && !r.telemetryInitialized) dXr(dXt() || aDn() ? "init_failed" : "not_configured");
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
      if (gr("tengu_typed_treasure", { safe: true })) Fzo();
      await D(r, f);
    } catch (n) {
      if (e.telemetryInitialized = false, e.telemetryInit = void 0, dXt()) c = "init_failed";
      throw n;
    } finally {
      dXr(c);
    }
  })(), e.telemetryInit;
}
function lXt() {
  return E(w(), void 0);
}
function C(e) {
  return (e || "").trim().split(",").filter(Boolean).map((r) => r.trim()).some((r) => r !== "none");
}
function dXt() {
  return Ne(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) && C(i.OTEL_LOGS_EXPORTER);
}
function aDn() {
  try {
    let e = pe("policySettings")?.env;
    if (!e) return false;
    return (Ne(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) || Ne(e.CLAUDE_CODE_ENABLE_TELEMETRY)) && (C(i.OTEL_LOGS_EXPORTER) || C(e.OTEL_LOGS_EXPORTER));
  } catch {
    return false;
  }
}
export {
  Jio,
  Kpe,
  aDn,
  dXt,
  lXt
};
