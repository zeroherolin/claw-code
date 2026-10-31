// linux/telemetry/daemon-upgrade-defer-busy.js — Claude Code 2.1.310（linux）模块 chunk-k8kjagwj.js
import { I5, Uoe } from "../settings/global-config-and-gates.js";
import { R, N, d, G } from "./anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { _, te, y6, t } from "../fs/gitlab-runner-authentication-token.js";
import { _t, l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { g, f, fo } from "./chunk-9d6962d2.js";
import { Ko } from "../shared/chunk-8eee6836.js";
import { hn } from "../fs/async-hooks.7959.js";
import { We } from "../plugins/chunk-0a4c51cf.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { N0, Ny } from "../permissions/classifier-transcript-too-long.js";
import { cQ } from "./fleet-past-sessions.js";
import { o4 } from "./chunk-12c9c79d.js";
import { ZT } from "../fs/read-failed.js";
import { nzt, Dhn, rzt } from "../shell/bridge-folder-already-served.js";
import { Sx } from "../shared/remote-control.js";
import { d9t, Nro, $ro, Yfs } from "../permissions/daemon-config.js";
import { bms } from "./chunk-df86191c.js";
import { Kj, $Ne } from "../shared/chunk-141502d8.js";
import { o, v, M, u, B, Ia } from "../vendor/zod/string-format.js";
import { z } from "../shared/chunk-be29de51.js";
import { randomUUID as ge } from "crypto";
import { join as fe } from "path";
function ve(r) {
  return typeof r === "object" && r !== null && "type" in r && (r.type === "token_update" || r.type === "auth_401_result");
}
function Te(r) {
  return typeof r === "object" && r !== null && "type" in r && r.type === "auth_401";
}
var Ae = 3e5, ue = 24e4, Se = 3e5, be = 3e4, _e = 864e5;
function pe() {
  return We.state("daemon-auth-cooldown");
}
function Ce() {
  return We.state("daemon-auth-status");
}
function Vfs(r, n, a, s, h, w = () => false) {
  let m = () => ({ usesLoginOffFirstParty: a() }), k, A = false, y = null, T = /* @__PURE__ */ new Set(), C = null, x = null;
  function W() {
    return x ??= import("../auth/acquire-o-auth-refresh-lock.js");
  }
  function F(e) {
    let i = { type: "token_update", accessToken: e };
    for (let b of T) try {
      b.send(i);
    } catch {
    }
  }
  let U;
  async function re(e, i = false) {
    if (U === e || O() !== "macos" || !(i || w()) || _t()) return;
    U = e;
    try {
      let b = await W();
      if (b.isUsing3PServices() && !m().usesLoginOffFirstParty) {
        V(e);
        return;
      }
      if (await b.getClaudeAIOAuthTokenOriginAsync(h) !== "store") return;
      let { validateOauthTokenWithOutcome: S, isTransientValidateFailure: c } = await import("../auth/get-oauth-profile-from-api-key.js"), E = await S(e);
      if (!E.ok) {
        let de = c(E);
        if (de) V(e);
        f("daemon_snapshot_org_lookup", E.reason, { transient: de }), n(`auth: token organization lookup: no answer (${E.reason})`);
        return;
      }
      let P = E.data?.organization_uuid, I = typeof P === "string" && P ? P : null;
      if (g("daemon_snapshot_org_lookup", { named: I !== null }), k?.accessToken === e) k = { ...k, organizationUuid: I };
    } catch {
      V(e), n("auth: token organization lookup failed");
    }
  }
  function V(e) {
    if (U === e) U = void 0;
  }
  function D(e) {
    k = { accessToken: e.accessToken, scopes: e.scopes, subscriptionType: e.subscriptionType ?? null, rateLimitTier: e.rateLimitTier ?? null, organizationUuid: null }, re(e.accessToken);
  }
  async function H() {
    let i = await (await W()).getClaudeAIOAuthTokensAsync(h);
    if (i?.accessToken && i.accessToken !== k?.accessToken) D(i), F(i.accessToken);
    K(i?.expiresAt ?? null);
  }
  let J, Z = false;
  function j(e) {
    if (J = e, C || r.aborted) return;
    if (y) clearTimeout(y), y = null;
    n("auth: no token found, will re-check keychain every 30s"), C = setInterval(function() {
      W().then(async (b) => {
        let S = b.isUsing3PServices() && !a() && !w();
        if (S !== Z) Z = S, n(S ? "auth: re-check skips the keychain (3P provider, no worker uses the token)" : "auth: re-check reads the keychain again");
        if (S) return;
        b.clearOAuthTokenCache();
        let c = await b.getClaudeAIOAuthTokensAsync(h), E;
        if (c?.accessToken && c.accessToken !== J && c.expiresAt && c.expiresAt > Date.now()) E = "auth: token found via keychain re-check";
        else if (c?.refreshToken && await b.checkAndRefreshOAuthTokenIfNeeded({ credentials: h, storageV5: s, ...m() })) E = "auth: token refreshed via keychain re-check retry";
        if (E) {
          if (await H(), k && C) clearInterval(C), C = null, n(E);
        }
      }).catch((b) => n(`auth: keychain re-check error: ${b}`));
    }, be), C.unref();
  }
  function K(e) {
    if (y) clearTimeout(y), y = null;
    if (!e || r.aborted) return;
    let i = Math.min(Math.max(e - Date.now() - ue, 5e3), _e);
    n(`auth: scheduling proactive refresh in ${Math.round(i / 1e3)}s`), y = setTimeout(ce, i), y.unref();
  }
  async function ce() {
    if (r.aborted) return;
    try {
      n("auth: proactive refresh starting");
      let e = await W(), i = k?.accessToken, b = await e.checkAndRefreshOAuthTokenIfNeeded({ credentials: h, storageV5: s, ...m() });
      e.clearOAuthTokenCache();
      let S = await e.getClaudeAIOAuthTokensAsync(h), c = S?.expiresAt ?? null, E = c === null || c > Date.now() + Ae;
      if (S?.accessToken && (b || S.accessToken !== i || E) && (c === null || c > Date.now() + ue)) {
        await H(), n(b ? "auth: proactive refresh succeeded" : "auth: token still valid (cross-process refresh or not yet due)");
        return;
      }
      if (S?.accessToken && c !== null && c > Date.now()) {
        n("auth: proactive refresh failed, retrying in ~60s (token still valid)"), K(Date.now() + 6e4 + ue);
        return;
      }
      n("auth: proactive refresh failed, signalling re-auth required");
      let P = S?.accessToken ?? i;
      k = void 0, await ie(), j(P);
    } catch (e) {
      n(`auth: proactive refresh error: ${e}`), K(Date.now() + 6e4 + ue);
    }
  }
  async function ne(e) {
    if (A) return n("auth: 401 ignored (3P provider active, no OAuth)"), false;
    n("auth: handling 401");
    let i = await W();
    if (await i.handleOAuth401Error(e, h, s, m())) return i.clearOAuthTokenCache(), await H(), n("auth: 401 recovery succeeded"), true;
    n("auth: 401 recovery failed, signalling re-auth required"), k = void 0, await ie(), i.clearOAuthTokenCache();
    let S = await i.getClaudeAIOAuthTokensAsync(h);
    if (S?.accessToken !== void 0 && S.accessToken !== e) return await H(), true;
    return j(e), false;
  }
  let L = null;
  function ie() {
    if (L) return L;
    return L = se().finally(() => {
      L = null;
    }), L;
  }
  async function se() {
    let e = await W();
    if (e.getAnthropicApiKey()) {
      n("auth: browser login skipped (API key auth available)");
      return;
    }
    if (e.isUsing3PServices() && !a()) {
      n("auth: browser login skipped (3P provider, no OAuth-consuming worker)");
      return;
    }
    let i = Le(), b = fe(i, "daemon-auth-cooldown"), S = fe(i, "daemon-auth-status.json");
    try {
      let c;
      if (z() && s !== void 0) {
        let P = await s.read([pe()]);
        if (!P.ok) throw new R(`v5 cooldown read failed: ${P.error.code}${"telemetryCode" in P.error && P.error.telemetryCode ? ` (${P.error.telemetryCode})` : ""}`, "daemon-auth v5 cooldown read failed");
        let I = P.value.items[0];
        c = I.found ? Buffer.from(I.value).toString("utf8") : null;
      } else c = await hn().read(b);
      let E = c === null ? NaN : parseInt(c, 10);
      if (!Number.isNaN(E) && Date.now() - E < Se) {
        n("auth: browser login skipped (cooldown)");
        return;
      }
    } catch (c) {
      if (!G(c)) n(`auth: cooldown read error: ${c}`);
    }
    try {
      if (await hn().mkdir(i), z() && s !== void 0) {
        let c = await s.write(pe(), String(Date.now()), { publishDiscipline: "inPlace" });
        if (!c.ok) throw new R(`v5 cooldown write failed: ${c.error.code}${"telemetryCode" in c.error && c.error.telemetryCode ? ` (${c.error.telemetryCode})` : ""}`, "daemon-auth v5 cooldown write failed");
      } else await hn().write(b, String(Date.now()));
    } catch (c) {
      n(`auth: cooldown write error: ${c}`);
    }
    try {
      let { execFileNoThrow: c } = await import("../shared/exec-file-no-throw.js");
      c("notify-send", ["Claude", "Your Claude assistant needs re-authentication"]);
    } catch {
    }
    try {
      if (z() && s !== void 0) {
        let c = await s.write(Ce(), _({ status: "auth_required", since: Date.now() }), { publishDiscipline: "inPlace" });
        if (!c.ok) throw new R(`v5 status write failed: ${c.error.code}${"telemetryCode" in c.error && c.error.telemetryCode ? ` (${c.error.telemetryCode})` : ""}`, "daemon-auth v5 status write failed");
      } else await hn().write(S, _({ status: "auth_required", since: Date.now() }));
    } catch (c) {
      n(`auth: status write error: ${c}`);
    }
    n("auth: headless daemon cannot complete OAuth — run `claude auth login` to refresh");
  }
  function Q(e) {
    if (!Te(e)) return;
    ne(e.failedToken).then((i) => {
      for (let b of T) try {
        let S = { type: "auth_401_result", refreshed: i, requestId: e.requestId };
        b.send(S);
      } catch {
      }
    }).catch((i) => {
      n(`auth: 401 handler error: ${i}`);
      for (let b of T) try {
        let S = { type: "auth_401_result", refreshed: false, requestId: e.requestId };
        b.send(S);
      } catch {
      }
    });
  }
  function q(e) {
    if (T.add(e), e.on("message", Q), k) try {
      let i = { type: "token_update", accessToken: k.accessToken };
      e.send(i);
    } catch {
    }
  }
  function ae(e) {
    e.removeListener("message", Q), T.delete(e);
  }
  let Y = (async () => {
    if (r.aborted) return;
    try {
      let e = await W(), i = await e.getClaudeAIOAuthTokensAsync(h);
      if (!i?.accessToken && e.isUsing3PServices()) {
        A = true, n("auth: 3P provider active, skipping OAuth refresh loop");
        return;
      }
      if (i?.accessToken) D(i), K(i.expiresAt ?? null);
      await e.checkAndRefreshOAuthTokenIfNeeded({ credentials: h, storageV5: s, ...m() }), await H();
    } catch (e) {
      n(`auth: init error: ${e}`);
    }
  })();
  return Y.then(() => {
    if (r.aborted || k || A) return;
    j();
  }), r.addEventListener("abort", () => {
    if (y) clearTimeout(y), y = null;
    if (C) clearInterval(C), C = null;
  }, { once: true }), { ready: Y, getAccessToken() {
    return k?.accessToken;
  }, getAuthSnapshot() {
    if (k && !k.organizationUuid) re(k.accessToken, true);
    return k;
  }, attachWorker: q, detachWorker: ae, dispose: ee, [Symbol.dispose]: ee };
  function ee() {
    if (y) clearTimeout(y), y = null;
    if (C) clearInterval(C), C = null;
    for (let e of T) e.removeListener("message", Q);
    T.clear();
  }
}
function he(r, n, a) {
  if (typeof process.send === "function") {
    let k = function(A) {
      let y = m.get(A);
      if (y) m.delete(A), y.resolve(false);
    }, w = r;
    process.on("message", (A) => {
      if (!ve(A)) return;
      if (A.type === "token_update") w = A.accessToken;
    });
    let m = /* @__PURE__ */ new Map();
    return process.on("message", (A) => {
      if (typeof A === "object" && A !== null && "type" in A && A.type === "auth_401_result") {
        let y = A, T = m.get(y.requestId);
        if (T) clearTimeout(T.timer), m.delete(y.requestId), T.resolve(y.refreshed);
      }
    }), process.channel?.unref(), { getAccessToken() {
      return w;
    }, reportAuth401(A) {
      let y = ge(), T = { type: "auth_401", failedToken: A, requestId: y };
      return new Promise((C) => {
        let x = setTimeout(k, 3e4, y);
        x.unref(), m.set(y, { resolve: C, timer: x });
        try {
          process.send(T);
        } catch {
          clearTimeout(x), m.delete(y), C(false);
        }
      });
    } };
  }
  let s = null;
  async function h() {
    return s ??= await import("../auth/acquire-o-auth-refresh-lock.js");
  }
  return h(), { getAccessToken() {
    return s?.getClaudeAIOAuthTokens()?.accessToken;
  }, async reportAuth401(w) {
    return (await h()).handleOAuth401Error(w, n, a, { usesLoginOffFirstParty: true });
  } };
}
function oe(r) {
  return typeof r === "object" && r !== null && "type" in r && r.type === "shutdown";
}
function me(r) {
  if (!oe(r) || typeof r !== "object" || r === null || !("cause" in r)) return;
  return r.cause === "upgrade" || r.cause === "reload" || r.cause === "yield" ? r.cause : void 0;
}
var le = p(() => u({ dir: o(), name: o().optional(), spawnMode: B(["same-dir", "worktree"]).default("same-dir"), capacity: v().int().positive().default(32), permissionMode: Ia(Ny, B(N0)).optional(), sandbox: M().optional(), sessionTimeoutSeconds: v().int().positive().optional(), createSessionOnStart: M().default(false) }).strict()), Ee = 6e4, Pe = 500, ye = async (r, n, a, s, h, w) => {
  let m = le().parse(r);
  if (m.sandbox) a(`The sandbox key is not supported for Remote Control. Remove it. ${Dhn}`), process.exit(Kj);
  let { initializeErrorLogSink: k } = await import("../ui/initialize-error-log-sink.js"), { initializeAnalyticsSink: A } = await import("./initialize-analytics-sink.js");
  k(), A();
  let y = () => Sx() ?? s.getAccessToken();
  if (!y()) a(nzt), process.exit(1);
  let [{ initialize1PEventLogging: T }, { initializeGrowthBook: C, getFeatureValue_CACHED_MAY_BE_STALE: x, getUserAttributes: W }, { flushAnalyticsSinks: F }, { populateOAuthAccountInfoIfNeeded: U }] = await Promise.all([import("./log-event-to1-p.js"), import("../cli/answer-next-growth-book-remote-eval-with.js"), import("./flush-analytics-sinks.js"), import("../auth/build-auth-url.js")]);
  if (T(h), await U(w, h).catch((e) => {
    t(`[daemon:remoteControl] oauthAccount backfill failed (${e instanceof Error ? e.name : typeof e})`);
  }), !W().organizationUUID) t("[daemon:remoteControl] no org identity; GrowthBook not initialized, gates serve cached/default values");
  else C().catch((e) => {
    t(`[daemon:remoteControl] GrowthBook init failed (${e instanceof Error ? e.name : typeof e}); feature gates keep serving the disk cache`, { level: "error" });
  });
  if (!cQ()) {
    let e = await Lro();
    if (e !== void 0) a(e.reason), await F(), process.exit(e.retry ? 1 : Kj);
  }
  let { runBridgeHeadless: re, BridgeHeadlessPermanentError: V } = await import("../remote/bridge-main.js"), D = null, H = false, J = (e) => {
    if (typeof process.send !== "function") return;
    try {
      process.send(e);
    } catch {
    }
  }, Z = (e) => J({ type: "rc_busy", busy: e }), j = () => {
    if (D !== null) clearInterval(D), D = null;
  }, K = (e) => {
    let i = e > 0;
    if (i !== H) H = i, Z(i);
    if (i) {
      if (D === null) D = setInterval((b) => b(true), Ee, Z), D.unref?.();
    } else j();
  }, ce = x("tengu_daemon_upgrade_defer_busy", true), ne = null, L = () => {
  }, ie = new Promise((e) => {
    L = e;
  }), se = (e) => {
    if (oe(e)) ne = me(e) ?? null, L();
  };
  process.on("message", se);
  let Q = async () => (await Promise.race([ie, X(Pe)]), ne), q, ae, Y;
  try {
    let e = await import("../shared/build-tool-host-work-handler.js"), i = e.liveToolHostChecks(m.dir, w), b = e.liveToolHostSwitches({ dir: m.dir, checks: i, isOfferingFolder: () => q?.getToolHostAdvert().kind === "advertise", hasAccessToken: () => Boolean(y()) }), S, c = false;
    q = await e.watchToolHostAdvert({ dir: m.dir, log: a, checks: i, refuse: e.helperRefusal, onVerdict: (P) => {
      if (S !== void 0 && e.isSwitchedOffRemotely(P)) S.sweep("gate_off").catch((I) => l(N(I)));
    } }), ae = (P) => {
      try {
        S = e.buildToolHostWorkHandler({ folder: m.dir, switches: b, ...P, onLiveCountChange: (I) => J({ type: "rc_serving_tools", count: I }) }, { unattendedGrant: void 0, withoutShellSecrets: false });
      } catch (I) {
        l(N(I));
      }
      return S;
    };
    let E;
    Y = async () => {
      if (S !== void 0) E ??= e.sweepToolHostForShutdown(S);
      await E;
    }, n.addEventListener("abort", () => void Y?.(), { once: true });
  } catch (e) {
    l(N(e));
  }
  let ee = false;
  try {
    await re({ dir: m.dir, name: m.name, spawnMode: m.spawnMode, capacity: m.capacity, permissionMode: m.permissionMode, createSessionOnStart: m.createSessionOnStart, getAccessToken: y, onAuth401: s.reportAuth401, log: a, storageV5: h, credentials: w, onBusyChange: K, persistActiveSessionsOnShutdown: ce, awaitShutdownCause: Q, getToolHostAdvert: q?.getToolHostAdvert, createToolHostHandler: ae }, n);
  } catch (e) {
    if (!(e instanceof V)) throw e;
    a(e.message), ee = true;
  } finally {
    await Y?.(), j(), q?.stop(), process.off("message", se), await F();
  }
  if (ee) process.exit(Kj);
};
async function Lro() {
  let [{ getBridgeBlockedCode: r }, { checkBridgeMinVersion: n }, { getUserAttributes: a }] = await Promise.all([import("../remote/apply-remote-control-to-app-state.js"), import("../remote/check-bridge-min-version.js"), import("../cli/answer-next-growth-book-remote-eval-with.js")]);
  if (!a().organizationUUID) return { reason: ke("token_scope_limited"), retry: false };
  let s = await r();
  if (s !== null) return { reason: ke(s), retry: s === "flags_unreachable" || s === "not_signed_in" };
  let h = n();
  return h === null ? void 0 : { reason: h, retry: false };
}
function ke(r) {
  return `Remote Control cannot start (${r}). Run \`claude remote-control\` in a terminal to see why.`;
}
async function a9t(r, n, a) {
  return fo("daemon_rc_add", async () => {
    let s = "added";
    return await d9t((h) => {
      let w = Nro(h.remoteControl), m = w.findIndex((k) => k.dir === r.dir);
      if (m >= 0) {
        let k = Ko(r, (A) => A !== void 0);
        w[m] = { ...w[m], ...k }, s = "updated";
      } else w.push(r), s = "added";
      h.remoteControl = w;
    }, n, a), s;
  });
}
async function l9t(r, n, a) {
  return fo("daemon_rc_remove", async () => {
    await d9t((s) => {
      let h = Nro(s.remoteControl), w = h.filter((m) => m.dir !== r);
      if (w.length === h.length) return false;
      if (w.length === 0) delete s.remoteControl;
      else s.remoteControl = w;
    }, n, a);
  });
}
var we = p(() => u({ intervalSeconds: v().positive().default(30) }).strict()), Mpe = { heartbeat: { schema: we, run: Oe, needsOAuth: false }, scheduled: { schema: $ro, run: Yfs, needsOAuth: true }, remoteControl: { schema: le, run: ye, needsOAuth: true } };
function Zlt(r) {
  return r === "heartbeat" || cQ() || r === "remoteControl" && bms();
}
async function Oe(r, n, a, s) {
  let { intervalSeconds: h } = we().parse(r);
  a(`heartbeat worker started (interval=${h}s)`);
  while (!n.aborted) if (await X(h * 1e3, n), !n.aborted) a("heartbeat");
}
function Ie(r, n) {
  let a = () => n.abort();
  r.on("SIGTERM", a), r.on("SIGINT", a), r.on("message", (s) => {
    if (oe(s)) n.abort();
  });
}
async function eki(r, n) {
  if (!r || !(r in Mpe)) process.stderr.write(`unknown worker kind: ${r}
`), process.exit(2);
  if (!Zlt(r)) process.stderr.write(`worker kind '${r}' is not available.
`), process.exit(Kj);
  let a = Mpe[r], s = [];
  for await (let T of process.stdin) s.push(T);
  let h;
  try {
    h = te(Buffer.concat(s).toString("utf8"));
  } catch (T) {
    process.stderr.write(`invalid config JSON on stdin: ${d(T)}
`), process.exit(2);
  }
  let w = a.schema().safeParse(h.config);
  if (!w.success) process.stderr.write(`config validation failed: ${w.error.message}
`), process.exit(2);
  let m = new AbortController();
  Ie(process, m), Be(m);
  let k = o4(n), A = ZT(k), y = he(h.initialAccessToken, A, k);
  if (z() && k !== void 0) {
    y6({ storageV5: k }), I5(k);
    let [{ composePolicyLimitsClient: T, primePolicyLimitsCache: C }, { primeFastPathCredentials: x }, { setGrowthBookCredentials: W, setGrowthBookStorageBackend: F }] = await Promise.all([import("../cli/admit-prefetched-policy-limits.js"), import("../cli/prime-fast-path-credentials.js"), import("../cli/answer-next-growth-book-remote-eval-with.js")]);
    T({ storageV5: k, credentials: A }), W(A), F(k), await x(A), await C(k), await Uoe(k);
  }
  try {
    await a.run(w.data, m.signal, (T) => process.stdout.write(T + `
`), y, k, A);
  } catch (T) {
    if (De(T) === 429) process.stdout.write(`rate limited (429): ${d(T)}
`), process.exit($Ne);
    if (xe(T)) process.stdout.write(`folder already served: ${d(T)}
`), process.exit($Ne);
    throw T;
  }
}
function xe(r) {
  let n = r;
  for (let a = 0; n != null && a < 8; a++) {
    if (n.errorType === rzt) return true;
    n = n.cause;
  }
  return false;
}
function De(r) {
  let n = r;
  for (let a = 0; n != null && a < 8; a++) {
    let s = n.status;
    if (typeof s === "number") return s;
    let h = n.response?.status;
    if (typeof h === "number") return h;
    n = n.cause;
  }
  return;
}
var He = 3e4;
function Me(r) {
  try {
    return process.kill(r, 0), true;
  } catch {
    return false;
  }
}
function Be(r, n) {
  let a = { ppid: () => process.ppid, isAlive: Me, log: (m) => process.stdout.write(m + `
`), onGone: () => process.exit(0), intervalMs: He, exitGraceMs: 2e3, ...n }, s = a.ppid();
  if (s <= 1) return;
  let h = false, w = setInterval(() => {
    if (h) return;
    if (!(!a.isAlive(s) || O() !== "windows" && a.ppid() !== s)) return;
    h = true, clearInterval(w), a.log("parent supervisor gone — exiting"), r.abort(), setTimeout(a.onGone, a.exitGraceMs).unref();
  }, a.intervalMs);
  return w.unref(), w;
}
export {
  Lro,
  Mpe,
  Vfs,
  Zlt,
  a9t,
  eki,
  l9t
};
