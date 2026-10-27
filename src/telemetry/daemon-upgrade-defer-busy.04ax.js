// telemetry/daemon-upgrade-defer-busy.04ax.js — Claude Code 2.1.310 模块 chunk-04axfnd7.js
import { $j, W4 } from "../settings/global-config-and-gates.27xj.js";
import { R, N, d, G } from "./anthropic-workspace-id.36ys.js";
import { X } from "../shared/chunk-3kevgx4j.js";
import { Le } from "../models/claude-3-5-sonnet.21mz.js";
import { _, ee, CW, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { St, l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { g, p, po } from "./chunk-wn8xtaqg.js";
import { Ko } from "../shared/chunk-z6efcye4.js";
import { hn } from "../fs/async-hooks.2k4e.js";
import { je } from "../plugins/chunk-x0a7sawk.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { BL, $y } from "../permissions/classifier-transcript-too-long.8zvz.js";
import { yJ } from "./fleet-past-sessions.vsk9.js";
import { tB } from "./chunk-k35wkek7.js";
import { tT } from "../fs/read-failed.v1w2.js";
import { mGt, Jhn, gGt } from "../shell/bridge-folder-already-served.sc9q.js";
import { vx } from "../shared/remote-control.063d.js";
import { yYt, Yro, Xro, ffs } from "../permissions/daemon-config.2m1b.js";
import { Lms } from "./chunk-9rmb8gm6.js";
import { tW, GNe } from "../shared/chunk-10nfjyrq.js";
import { o, E, M, u, B, Oa } from "../vendor/zod/string-format.k395.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
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
  return je.state("daemon-auth-cooldown");
}
function Ce() {
  return je.state("daemon-auth-status");
}
function ufs(r, n, a, s, h, w = () => false) {
  let m = () => ({ usesLoginOffFirstParty: a() }), k, T = false, y = null, v = /* @__PURE__ */ new Set(), b = null, x = null;
  function W() {
    return x ??= import("../auth/acquire-o-auth-refresh-lock.0dnm.js");
  }
  function F(e) {
    let i = { type: "token_update", accessToken: e };
    for (let S of v) try {
      S.send(i);
    } catch {
    }
  }
  let U;
  async function re(e, i = false) {
    if (U === e || O() !== "macos" || !(i || w()) || St()) return;
    U = e;
    try {
      let S = await W();
      if (S.isUsing3PServices() && !m().usesLoginOffFirstParty) {
        V(e);
        return;
      }
      if (await S.getClaudeAIOAuthTokenOriginAsync(h) !== "store") return;
      let { validateOauthTokenWithOutcome: A, isTransientValidateFailure: c } = await import("../auth/get-oauth-profile-from-api-key.f6nx.js"), C = await A(e);
      if (!C.ok) {
        let de = c(C);
        if (de) V(e);
        p("daemon_snapshot_org_lookup", C.reason, { transient: de }), n(`auth: token organization lookup: no answer (${C.reason})`);
        return;
      }
      let P = C.data?.organization_uuid, I = typeof P === "string" && P ? P : null;
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
    if (J = e, b || r.aborted) return;
    if (y) clearTimeout(y), y = null;
    n("auth: no token found, will re-check keychain every 30s"), b = setInterval(function() {
      W().then(async (S) => {
        let A = S.isUsing3PServices() && !a() && !w();
        if (A !== Z) Z = A, n(A ? "auth: re-check skips the keychain (3P provider, no worker uses the token)" : "auth: re-check reads the keychain again");
        if (A) return;
        S.clearOAuthTokenCache();
        let c = await S.getClaudeAIOAuthTokensAsync(h), C;
        if (c?.accessToken && c.accessToken !== J && c.expiresAt && c.expiresAt > Date.now()) C = "auth: token found via keychain re-check";
        else if (c?.refreshToken && await S.checkAndRefreshOAuthTokenIfNeeded({ credentials: h, storageV5: s, ...m() })) C = "auth: token refreshed via keychain re-check retry";
        if (C) {
          if (await H(), k && b) clearInterval(b), b = null, n(C);
        }
      }).catch((S) => n(`auth: keychain re-check error: ${S}`));
    }, be), b.unref();
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
      let e = await W(), i = k?.accessToken, S = await e.checkAndRefreshOAuthTokenIfNeeded({ credentials: h, storageV5: s, ...m() });
      e.clearOAuthTokenCache();
      let A = await e.getClaudeAIOAuthTokensAsync(h), c = A?.expiresAt ?? null, C = c === null || c > Date.now() + Ae;
      if (A?.accessToken && (S || A.accessToken !== i || C) && (c === null || c > Date.now() + ue)) {
        await H(), n(S ? "auth: proactive refresh succeeded" : "auth: token still valid (cross-process refresh or not yet due)");
        return;
      }
      if (A?.accessToken && c !== null && c > Date.now()) {
        n("auth: proactive refresh failed, retrying in ~60s (token still valid)"), K(Date.now() + 6e4 + ue);
        return;
      }
      n("auth: proactive refresh failed, signalling re-auth required");
      let P = A?.accessToken ?? i;
      k = void 0, await ie(), j(P);
    } catch (e) {
      n(`auth: proactive refresh error: ${e}`), K(Date.now() + 6e4 + ue);
    }
  }
  async function ne(e) {
    if (T) return n("auth: 401 ignored (3P provider active, no OAuth)"), false;
    n("auth: handling 401");
    let i = await W();
    if (await i.handleOAuth401Error(e, h, s, m())) return i.clearOAuthTokenCache(), await H(), n("auth: 401 recovery succeeded"), true;
    n("auth: 401 recovery failed, signalling re-auth required"), k = void 0, await ie(), i.clearOAuthTokenCache();
    let A = await i.getClaudeAIOAuthTokensAsync(h);
    if (A?.accessToken !== void 0 && A.accessToken !== e) return await H(), true;
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
    let i = Le(), S = fe(i, "daemon-auth-cooldown"), A = fe(i, "daemon-auth-status.json");
    try {
      let c;
      if (z() && s !== void 0) {
        let P = await s.read([pe()]);
        if (!P.ok) throw new R(`v5 cooldown read failed: ${P.error.code}${"telemetryCode" in P.error && P.error.telemetryCode ? ` (${P.error.telemetryCode})` : ""}`, "daemon-auth v5 cooldown read failed");
        let I = P.value.items[0];
        c = I.found ? Buffer.from(I.value).toString("utf8") : null;
      } else c = await hn().read(S);
      let C = c === null ? NaN : parseInt(c, 10);
      if (!Number.isNaN(C) && Date.now() - C < Se) {
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
      } else await hn().write(S, String(Date.now()));
    } catch (c) {
      n(`auth: cooldown write error: ${c}`);
    }
    try {
      let { execFileNoThrow: c } = await import("../shared/exec-file-no-throw.aqef.js");
      c("osascript", ["-e", 'display notification "Your Claude assistant needs re-authentication" with title "Claude"']);
    } catch {
    }
    try {
      if (z() && s !== void 0) {
        let c = await s.write(Ce(), _({ status: "auth_required", since: Date.now() }), { publishDiscipline: "inPlace" });
        if (!c.ok) throw new R(`v5 status write failed: ${c.error.code}${"telemetryCode" in c.error && c.error.telemetryCode ? ` (${c.error.telemetryCode})` : ""}`, "daemon-auth v5 status write failed");
      } else await hn().write(A, _({ status: "auth_required", since: Date.now() }));
    } catch (c) {
      n(`auth: status write error: ${c}`);
    }
    n("auth: headless daemon cannot complete OAuth — run `claude auth login` to refresh");
  }
  function Q(e) {
    if (!Te(e)) return;
    ne(e.failedToken).then((i) => {
      for (let S of v) try {
        let A = { type: "auth_401_result", refreshed: i, requestId: e.requestId };
        S.send(A);
      } catch {
      }
    }).catch((i) => {
      n(`auth: 401 handler error: ${i}`);
      for (let S of v) try {
        let A = { type: "auth_401_result", refreshed: false, requestId: e.requestId };
        S.send(A);
      } catch {
      }
    });
  }
  function q(e) {
    if (v.add(e), e.on("message", Q), k) try {
      let i = { type: "token_update", accessToken: k.accessToken };
      e.send(i);
    } catch {
    }
  }
  function ae(e) {
    e.removeListener("message", Q), v.delete(e);
  }
  let Y = (async () => {
    if (r.aborted) return;
    try {
      let e = await W(), i = await e.getClaudeAIOAuthTokensAsync(h);
      if (!i?.accessToken && e.isUsing3PServices()) {
        T = true, n("auth: 3P provider active, skipping OAuth refresh loop");
        return;
      }
      if (i?.accessToken) D(i), K(i.expiresAt ?? null);
      await e.checkAndRefreshOAuthTokenIfNeeded({ credentials: h, storageV5: s, ...m() }), await H();
    } catch (e) {
      n(`auth: init error: ${e}`);
    }
  })();
  return Y.then(() => {
    if (r.aborted || k || T) return;
    j();
  }), r.addEventListener("abort", () => {
    if (y) clearTimeout(y), y = null;
    if (b) clearInterval(b), b = null;
  }, { once: true }), { ready: Y, getAccessToken() {
    return k?.accessToken;
  }, getAuthSnapshot() {
    if (k && !k.organizationUuid) re(k.accessToken, true);
    return k;
  }, attachWorker: q, detachWorker: ae, dispose: te, [Symbol.dispose]: te };
  function te() {
    if (y) clearTimeout(y), y = null;
    if (b) clearInterval(b), b = null;
    for (let e of v) e.removeListener("message", Q);
    v.clear();
  }
}
function he(r, n, a) {
  if (typeof process.send === "function") {
    let k = function(T) {
      let y = m.get(T);
      if (y) m.delete(T), y.resolve(false);
    }, w = r;
    process.on("message", (T) => {
      if (!ve(T)) return;
      if (T.type === "token_update") w = T.accessToken;
    });
    let m = /* @__PURE__ */ new Map();
    return process.on("message", (T) => {
      if (typeof T === "object" && T !== null && "type" in T && T.type === "auth_401_result") {
        let y = T, v = m.get(y.requestId);
        if (v) clearTimeout(v.timer), m.delete(y.requestId), v.resolve(y.refreshed);
      }
    }), process.channel?.unref(), { getAccessToken() {
      return w;
    }, reportAuth401(T) {
      let y = ge(), v = { type: "auth_401", failedToken: T, requestId: y };
      return new Promise((b) => {
        let x = setTimeout(k, 3e4, y);
        x.unref(), m.set(y, { resolve: b, timer: x });
        try {
          process.send(v);
        } catch {
          clearTimeout(x), m.delete(y), b(false);
        }
      });
    } };
  }
  let s = null;
  async function h() {
    return s ??= await import("../auth/acquire-o-auth-refresh-lock.0dnm.js");
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
var le = f(() => u({ dir: o(), name: o().optional(), spawnMode: B(["same-dir", "worktree"]).default("same-dir"), capacity: E().int().positive().default(32), permissionMode: Oa($y, B(BL)).optional(), sandbox: M().optional(), sessionTimeoutSeconds: E().int().positive().optional(), createSessionOnStart: M().default(false) }).strict()), Ee = 6e4, Pe = 500, ye = async (r, n, a, s, h, w) => {
  let m = le().parse(r);
  if (m.sandbox) a(`The sandbox key is not supported for Remote Control. Remove it. ${Jhn}`), process.exit(tW);
  let { initializeErrorLogSink: k } = await import("../ui/initialize-error-log-sink.k5fh.js"), { initializeAnalyticsSink: T } = await import("./initialize-analytics-sink.deh9.js");
  k(), T();
  let y = () => vx() ?? s.getAccessToken();
  if (!y()) a(mGt), process.exit(1);
  let [{ initialize1PEventLogging: v }, { initializeGrowthBook: b, getFeatureValue_CACHED_MAY_BE_STALE: x, getUserAttributes: W }, { flushAnalyticsSinks: F }, { populateOAuthAccountInfoIfNeeded: U }] = await Promise.all([import("./log-event-to1-p.68b1.js"), import("../cli/answer-next-growth-book-remote-eval-with.a8jg.js"), import("./flush-analytics-sinks.ehyf.js"), import("../auth/build-auth-url.3qky.js")]);
  if (v(h), await U(w, h).catch((e) => {
    t(`[daemon:remoteControl] oauthAccount backfill failed (${e instanceof Error ? e.name : typeof e})`);
  }), !W().organizationUUID) t("[daemon:remoteControl] no org identity; GrowthBook not initialized, gates serve cached/default values");
  else b().catch((e) => {
    t(`[daemon:remoteControl] GrowthBook init failed (${e instanceof Error ? e.name : typeof e}); feature gates keep serving the disk cache`, { level: "error" });
  });
  if (!yJ()) {
    let e = await qro();
    if (e !== void 0) a(e.reason), await F(), process.exit(e.retry ? 1 : tW);
  }
  let { runBridgeHeadless: re, BridgeHeadlessPermanentError: V } = await import("../remote/bridge-main.smv5.js"), D = null, H = false, J = (e) => {
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
      if (D === null) D = setInterval((S) => S(true), Ee, Z), D.unref?.();
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
    let e = await import("../shared/build-tool-host-work-handler.dafm.js"), i = e.liveToolHostChecks(m.dir, w), S = e.liveToolHostSwitches({ dir: m.dir, checks: i, isOfferingFolder: () => q?.getToolHostAdvert().kind === "advertise", hasAccessToken: () => Boolean(y()) }), A, c = false;
    q = await e.watchToolHostAdvert({ dir: m.dir, log: a, checks: i, refuse: e.helperRefusal, onVerdict: (P) => {
      if (A !== void 0 && e.isSwitchedOffRemotely(P)) A.sweep("gate_off").catch((I) => l(N(I)));
    } }), ae = (P) => {
      try {
        A = e.buildToolHostWorkHandler({ folder: m.dir, switches: S, ...P, onLiveCountChange: (I) => J({ type: "rc_serving_tools", count: I }) }, { unattendedGrant: void 0, withoutShellSecrets: false });
      } catch (I) {
        l(N(I));
      }
      return A;
    };
    let C;
    Y = async () => {
      if (A !== void 0) C ??= e.sweepToolHostForShutdown(A);
      await C;
    }, n.addEventListener("abort", () => void Y?.(), { once: true });
  } catch (e) {
    l(N(e));
  }
  let te = false;
  try {
    await re({ dir: m.dir, name: m.name, spawnMode: m.spawnMode, capacity: m.capacity, permissionMode: m.permissionMode, createSessionOnStart: m.createSessionOnStart, getAccessToken: y, onAuth401: s.reportAuth401, log: a, storageV5: h, credentials: w, onBusyChange: K, persistActiveSessionsOnShutdown: ce, awaitShutdownCause: Q, getToolHostAdvert: q?.getToolHostAdvert, createToolHostHandler: ae }, n);
  } catch (e) {
    if (!(e instanceof V)) throw e;
    a(e.message), te = true;
  } finally {
    await Y?.(), j(), q?.stop(), process.off("message", se), await F();
  }
  if (te) process.exit(tW);
};
async function qro() {
  let [{ getBridgeBlockedCode: r }, { checkBridgeMinVersion: n }, { getUserAttributes: a }] = await Promise.all([import("../remote/apply-remote-control-to-app-state.z0nv.js"), import("../remote/check-bridge-min-version.g9j1.js"), import("../cli/answer-next-growth-book-remote-eval-with.a8jg.js")]);
  if (!a().organizationUUID) return { reason: ke("token_scope_limited"), retry: false };
  let s = await r();
  if (s !== null) return { reason: ke(s), retry: s === "flags_unreachable" || s === "not_signed_in" };
  let h = n();
  return h === null ? void 0 : { reason: h, retry: false };
}
function ke(r) {
  return `Remote Control cannot start (${r}). Run \`claude remote-control\` in a terminal to see why.`;
}
async function gYt(r, n, a) {
  return po("daemon_rc_add", async () => {
    let s = "added";
    return await yYt((h) => {
      let w = Yro(h.remoteControl), m = w.findIndex((k) => k.dir === r.dir);
      if (m >= 0) {
        let k = Ko(r, (T) => T !== void 0);
        w[m] = { ...w[m], ...k }, s = "updated";
      } else w.push(r), s = "added";
      h.remoteControl = w;
    }, n, a), s;
  });
}
async function hYt(r, n, a) {
  return po("daemon_rc_remove", async () => {
    await yYt((s) => {
      let h = Yro(s.remoteControl), w = h.filter((m) => m.dir !== r);
      if (w.length === h.length) return false;
      if (w.length === 0) delete s.remoteControl;
      else s.remoteControl = w;
    }, n, a);
  });
}
var we = f(() => u({ intervalSeconds: E().positive().default(30) }).strict()), Ufe = { heartbeat: { schema: we, run: Oe, needsOAuth: false }, scheduled: { schema: Xro, run: ffs, needsOAuth: true }, remoteControl: { schema: le, run: ye, needsOAuth: true } };
function ndt(r) {
  return r === "heartbeat" || yJ() || r === "remoteControl" && Lms();
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
async function Lki(r, n) {
  if (!r || !(r in Ufe)) process.stderr.write(`unknown worker kind: ${r}
`), process.exit(2);
  if (!ndt(r)) process.stderr.write(`worker kind '${r}' is not available.
`), process.exit(tW);
  let a = Ufe[r], s = [];
  for await (let v of process.stdin) s.push(v);
  let h;
  try {
    h = ee(Buffer.concat(s).toString("utf8"));
  } catch (v) {
    process.stderr.write(`invalid config JSON on stdin: ${d(v)}
`), process.exit(2);
  }
  let w = a.schema().safeParse(h.config);
  if (!w.success) process.stderr.write(`config validation failed: ${w.error.message}
`), process.exit(2);
  let m = new AbortController();
  Ie(process, m), Me(m);
  let k = tB(n), T = tT(k), y = he(h.initialAccessToken, T, k);
  if (z() && k !== void 0) {
    CW({ storageV5: k }), $j(k);
    let [{ composePolicyLimitsClient: v, primePolicyLimitsCache: b }, { primeFastPathCredentials: x }, { setGrowthBookCredentials: W, setGrowthBookStorageBackend: F }] = await Promise.all([import("../cli/admit-prefetched-policy-limits.z1w7.js"), import("../cli/prime-fast-path-credentials.kax5.js"), import("../cli/answer-next-growth-book-remote-eval-with.a8jg.js")]);
    v({ storageV5: k, credentials: T }), W(T), F(k), await x(T), await b(k), await W4(k);
  }
  try {
    await a.run(w.data, m.signal, (v) => process.stdout.write(v + `
`), y, k, T);
  } catch (v) {
    if (xe(v) === 429) process.stdout.write(`rate limited (429): ${d(v)}
`), process.exit(GNe);
    if (We(v)) process.stdout.write(`folder already served: ${d(v)}
`), process.exit(GNe);
    throw v;
  }
}
function We(r) {
  let n = r;
  for (let a = 0; n != null && a < 8; a++) {
    if (n.errorType === gGt) return true;
    n = n.cause;
  }
  return false;
}
function xe(r) {
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
var De = 3e4;
function He(r) {
  try {
    return process.kill(r, 0), true;
  } catch {
    return false;
  }
}
function Me(r, n) {
  let a = { ppid: () => process.ppid, isAlive: He, log: (m) => process.stdout.write(m + `
`), onGone: () => process.exit(0), intervalMs: De, exitGraceMs: 2e3, ...n }, s = a.ppid();
  if (s <= 1) return;
  let h = false, w = setInterval(() => {
    if (h) return;
    if (!(!a.isAlive(s) || O() !== "windows" && a.ppid() !== s)) return;
    h = true, clearInterval(w), a.log("parent supervisor gone — exiting"), r.abort(), setTimeout(a.onGone, a.exitGraceMs).unref();
  }, a.intervalMs);
  return w.unref(), w;
}
export {
  Lki,
  Ufe,
  gYt,
  hYt,
  ndt,
  qro,
  ufs
};
