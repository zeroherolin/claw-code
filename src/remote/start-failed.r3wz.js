// remote/start-failed.r3wz.js — Claude Code 2.1.310 模块 chunk-r3wzd6tx.js
import { __asset_src } from "../runtime/assets.js";
import { Ne } from "../fs/async-hooks.9s1z.js";
import { N, d, v, Kt } from "../telemetry/anthropic-workspace-id.36ys.js";
import { X, Pe } from "../shared/chunk-3kevgx4j.js";
import { F } from "../context/not-admin-owned.ersa.js";
import { ofe, i } from "../shared/environment.9a41.js";
import { _, am, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { re, Or } from "../shared/chunk-j79dwkaq.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { g, m } from "../telemetry/chunk-wn8xtaqg.js";
import { Nu } from "../models/total-tokens-reminder.psq3.js";
import { g1, oW, xH, uot } from "../shell/invalid-type.qnva.js";
import { fA } from "../mcp/always-allow.9m89.js";
import { n$ } from "../artifacts/chunk-m8t7qekn.js";
import { JL } from "../context/tool-cgroup-exclude-classes.t1za.js";
import { er } from "../settings/workflow-launch-exec.t4r2.js";
import { nYo, mli, RSe, dYo, upe, PSe, ek, Gf, Xm, CS, EM } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { Dw, vvt } from "../settings/global-config-and-gates.27xj.js";
import { o5 } from "../shared/chunk-cg45s1mf.js";
import { Vn } from "../auth/secure-storage-credentials-write.vafw.js";
import { vx } from "../shared/remote-control.063d.js";
import { QX, QPe, nte } from "../context/claude-desktop-3p.cesc.js";
import { Jwe } from "../context/chunk-cqwzeb5r.js";
import { _m } from "../shared/chunk-pg9vp681.js";
import { Iu } from "../fs/chunk-tcpay5ps.js";
import { y_e } from "../telemetry/service-error-detail-not-plain.9kgx.js";
import { bhe, Qan, Ehe, zne, b3 } from "../context/team-memory-sync.0s3j.js";
import { Ptt, LQ } from "../auth/env-quad.nmae.js";
import { Gm, Utt } from "../telemetry/flag-off.7h9d.js";
import { $oo } from "../shared/chunk-hp3bckdg.js";
import { Dms } from "../telemetry/chunk-9rmb8gm6.js";
import { joo, Woo } from "./bridge-env-reregister.795r.js";
import { tW } from "../shared/chunk-10nfjyrq.js";
import { lstat as Je, stat as je } from "fs/promises";
import { join as ze } from "path";
import { randomUUID as Re } from "crypto";
var de = "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED", ke = 2500, oe = 3e3, ye = 1024, Ie = 320, Y = /^cse_[A-Za-z0-9_]{1,124}$/, Ae = /^env_[A-Za-z0-9_-]{1,124}$/, Oe = new Set([...Jwe, ...QPe, ...Ue([...dYo, ...xH, "CLAUDE_BRIDGE_OAUTH_TOKEN"]), ...oW.filter((e) => e !== "ANTHROPIC_BASE_URL"), "CLAUDE_BRIDGE_BASE_URL", "CLAUDE_BRIDGE_SESSION_INGRESS_URL", "CLAUDE_REMOTE_TOOLS_BRIDGE_URL", "CLAUDE_BG_AUTH_SNAPSHOT_PATH", "CLAUDE_CODE_ACCOUNT_UUID", "CLAUDE_CODE_ORGANIZATION_UUID", "CLAUDE_CODE_USER_EMAIL", "CLAUDE_CODE_ENVIRONMENT_KIND", "CLAUDE_CODE_SESSION_KIND", "CLAUDE_BG_SESSION_PERMISSION_RULES", "CLAUDE_JOB_DIR"].map((e) => upe(e))), le = /* @__PURE__ */ new Set([...uot, "CLAUDE_CODE_HOST_CREDS_FILE"]), Ce = /* @__PURE__ */ new Set([...le, "ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID", "ANTHROPIC_PROFILE", "ANTHROPIC_CONFIG_DIR"]), be = /* @__PURE__ */ new Set([...g1.filter((e) => e.startsWith("CLAUDE_CODE_USE_")), "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST"]);
function De(e, { unattendedGrant: o, withoutShellSecrets: a, testVm: E }) {
  let p = nYo() ? mli() : void 0;
  if (p === void 0) throw ue();
  let R = upe(p), I = upe(de), c = { ...e };
  for (let [y, k] of Object.entries(c)) {
    let H = upe(y);
    if (le.has(H) && fe(H, k, e)) throw ce();
    if (Oe.has(H) || H === R || H === I || H.endsWith("_FILE_DESCRIPTOR")) delete c[y];
  }
  if (nte(c), QX(c), c[p] = "1", a) {
    let y = new Set(ofe(i));
    for (let k of PSe(c)) if (!(/^(?:CLAUDE|ANTHROPIC)_/.test(k) && y.has(k))) delete c[k];
    delete c.SSH_AGENT_PID, Object.assign(c, RSe(c).respelled);
  }
  if (o !== void 0) c[de] = o;
  return c;
}
function Le({ workId: e, environmentId: o }, a) {
  let E = Y.test(e) && Ae.test(o);
  if (!E) t("[tool-host] the request ids are not in a usable form; starting the helper without them");
  return _({ type: "control_request", request_id: a, request: { subtype: "initialize", ...E && { attachServeRequest: { workId: e, environmentId: o } } } }) + `
`;
}
function te(e) {
  if (!nYo()) return ue();
  for (let [a, E] of Object.entries(e)) {
    let p = upe(a);
    if (fe(p, E, e)) return t(`[tool-host] no helper: ${p} says this process signs in or sends its traffic elsewhere`, { level: "error" }), ce();
  }
  let o = _m();
  if (o) return t(`[tool-host] ${o}`, { level: "error" }), Error("tool host helper: the process wrapper is not usable");
  return;
}
function ae(e, { env: o, unattendedGrant: a, withoutShellSecrets: E, testVm: p, selfInvocation: R = () => Iu({ pinToCurrentBinary: true }), spawn: I = JL, after: c = xe, killTree: y = Dw }) {
  let k = te(o);
  if (k !== void 0) throw k;
  if (!Y.test(e.sessionId)) throw Error("tool host helper: the session id is not usable");
  let H = R(), S = I(H.cmd, [...H.prefixArgs, "--attach-serve", e.sessionId, "--input-format", "stream-json", "--output-format", "stream-json"], { cwd: e.folder, env: De(o, { unattendedGrant: a, withoutShellSecrets: E, ...p !== void 0 && { testVm: p } }), extendEnv: false, stdio: ["pipe", "pipe", "pipe"], windowsHide: true, toolCgroupClass: "agent" }), { promise: b, resolve: U } = Promise.withResolvers(), h = false, P = Buffer.alloc(0);
  function D(w, f) {
    if (h) return;
    h = true;
    let T = K(am(Or(P.toString("utf8"))));
    U({ code: w, signal: f, stderrFirstLine: T === "" ? void 0 : re(T, Ie) });
  }
  try {
    S.on("exit", D), S.on("error", (w) => {
      if (t(`[tool-host] helper process error: ${K(d(w))}`), !h) D(null, null), q(S, "SIGKILL");
    });
    for (let w of [S.stdin, S.stdout, S.stderr]) w?.on("error", () => {
    });
    if (S.stdout?.on("data", () => {
    }), S.stderr?.on("data", (w) => {
      let f = ye - P.length;
      if (f > 0) {
        let T = typeof w === "string" ? Buffer.from(w) : w;
        P = Buffer.concat([P, T.subarray(0, f)]);
      }
    }), S.pid === void 0 || S.stdin === null) D(null, null);
    else S.stdin.write(Le(e, Re()));
  } catch (w) {
    throw q(S, "SIGKILL"), w;
  }
  let M;
  return { pid: S.pid, exited: b, stop(w) {
    if (h) return Promise.resolve();
    return M ??= new Promise((f) => {
      t(`[tool-host] stopping helper (${w})`);
      let T = O() === "windows";
      try {
        S.stdin?.end();
      } catch {
      }
      if (!T) q(S, "SIGTERM");
      let V = c(ke, () => {
        if (T && S.pid !== void 0) y(S.pid).catch(() => {
        });
        else q(S, "SIGKILL");
      }), L = c(oe, f);
      b.then(() => {
        V(), L(), f();
      });
    }), M;
  } };
}
function K(e) {
  return e.replace(/(?:cse|session|env)_[A-Za-z0-9_-]{16,}|[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}/g, "<id>");
}
function fe(e, o, a) {
  if (!o) return false;
  if (be.has(e)) return Ne(o);
  return Ce.has(e) || e === "ANTHROPIC_BASE_URL" && !Ve(o, a) || e.startsWith("CLAUDE_LOCAL_OAUTH_") && !pe(o);
}
function ue() {
  return Error("tool host helper: this build cannot hold a helper to the stored login");
}
function ce() {
  return Error("tool host helper: this process signs in or sends its traffic elsewhere");
}
function Ue(e) {
  return e.flatMap((o) => [o, `INPUT_${o}`]);
}
function Ve(e, o) {
  if (Nu(e)) return true;
  return Ne(o.USE_LOCAL_OAUTH) && pe(e);
}
function pe(e) {
  try {
    return ["localhost", "127.0.0.1", "[::1]"].includes(new URL(e).hostname);
  } catch {
    return false;
  }
}
function xe(e, o) {
  let a = setTimeout(o, e);
  return a.unref(), () => clearTimeout(a);
}
function q(e, o) {
  try {
    e.kill(o);
  } catch (a) {
    t(`[tool-host] ${o} not delivered: ${K(d(a))}`);
  }
}
var Me = 4, _e = 3e4, ne = 6e5, ge = 3, me = 10, We = 3, Fe = 2500, Be = 5e3, Ge = 3e4, $e = 64, Ke = 128;
function Te(e) {
  let o = e.now ?? Date.now, a = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), R = 0, I = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), k = [], { NEGATIVE_INFINITY: H, NEGATIVE_INFINITY: S } = Number;
  async function b(n, r) {
    if (r.signal.aborted) return "unsettled";
    let s = Ee(n, r);
    if (s === void 0) return t("[tool-host] item or environment id unusable; item left"), "unsettled";
    if (a.has(s) || [...I].some((G) => G.workId === s)) return h(r, s), "handled";
    if (E.has(s)) return "unsettled";
    let u = typeof n.data === "object" && n.data !== null && "id" in n.data ? n.data.id : void 0, C = typeof u === "string" && Y.test(u) ? fA(u) : void 0;
    if (typeof u !== "string" || C === void 0 || C === fA(s)) return t("[tool-host] session id unusable; item stopped"), J(a, s, true), h(r, s), "handled";
    let z = U(u);
    if (z !== void 0) return P(r, s, u, z);
    if (o() < R) return "unsettled";
    E.add(s);
    try {
      await e.api.acknowledgeWork(r.environmentId, s, r.environmentSecret, y_e(s));
    } catch (G) {
      if (D(G, s) !== "give_up") return "unsettled";
      let ee = se(G);
      return P(r, s, u, "start_failed", ee === 404 || ee === 409 || ee === 410);
    } finally {
      E.delete(s);
    }
    p.delete(s);
    let A = r.signal.aborted ? "start_failed" : U(u);
    if (A !== void 0) return P(r, s, u, A);
    J(a, s, true);
    let Q = o(), j;
    try {
      j = e.spawnHelper({ sessionId: u, workId: s, environmentId: r.environmentId, folder: e.folder });
    } catch (G) {
      return t(`[tool-host] helper not started: ${K(d(G))}`, { level: "error" }), L(u), P(r, s, u, "start_failed");
    }
    let W = c.get(u);
    if (W !== void 0) W.stoppedHere = true, x("supersede", async () => {
      await W.handle.stop("superseded"), w(W);
    });
    let B = { sessionId: u, workId: s, startedAt: Q, handle: j, stoppedHere: false, startedTimer: void 0 };
    return B.startedTimer = setTimeout(V, _e, B), B.startedTimer.unref?.(), I.add(B), c.set(u, B), T(), x("exit", async () => M(B, await j.exited)), h(r, s), x("status line", () => e.logger.logStatus(`Serving tools to a cloud session in ${e.folder}`)), f({ kind: "started" }), "handled";
  }
  function U(n) {
    if (!ie(e.switches.gateOn)) return "gate_off";
    if (!ie(e.switches.servingOn) || o() - S < ne) return "serving_off";
    if (!ie(e.switches.folderServed)) return "not_served";
    let r = o() - ne, s = y.get(n) ?? [];
    if (F(s, (C) => C > r) >= ge || F(k, (C) => C > r) >= me) return "at_capacity";
    let u = c.has(n) ? 1 : 0;
    return I.size - u >= Me ? "at_capacity" : void 0;
  }
  function h(n, r) {
    x("stop", () => e.api.stopWork(n.environmentId, r, n.environmentSecret, true, y_e(r)));
  }
  function P(n, r, s, u, C = false) {
    if (J(a, r, true), !C) Z(s, r, u), f({ kind: "refused", code: u });
    return h(n, r), m("bridge_tool_host_work", C ? "withdrawn" : u), "handled";
  }
  function D(n, r) {
    let s = se(n);
    if (t(`[tool-host] acknowledge failed (${s ?? "no response"})`), s === 429) R = o() + Math.min(joo(n) ?? Be, Ge);
    let u = (p.get(r) ?? 0) + 1;
    if (Woo(n) || u >= We) return p.delete(r), "give_up";
    return J(p, r, u), "retry";
  }
  function M(n, r) {
    let s = o() - n.startedAt, u = !n.stoppedHere && r.code !== 0, C = u && r.code === tW, z = C && o() - H < ne;
    if (C) H = o();
    let A = !u ? void 0 : z ? "serving_off" : s < _e ? "start_failed" : "helper_exited";
    if (A === "start_failed") L(n.sessionId);
    if (A === "serving_off") S = o();
    if (A === "start_failed" || A === "serving_off") V(n, A);
    if (w(n), A !== void 0) Z(n.sessionId, n.workId, A);
    f({ kind: "ended", code: A, stoppedHere: n.stoppedHere });
    let Q = r.signal ?? `exit code ${r.code ?? "none"}`, j = A === void 0 ? "" : `, reported as ${A}`, W = u && r.stderrFirstLine !== void 0 ? `: ${r.stderrFirstLine}` : "";
    e.logger.logVerbose(`Tool helper for a cloud session ended (pid ${n.handle.pid ?? "none"}, ${Q}, after ${Math.round(s / 1e3)}s${j}${W})`);
  }
  function w(n) {
    V(n);
    let r = I.delete(n);
    if (c.get(n.sessionId) === n) c.delete(n.sessionId);
    if (r) T();
  }
  function f(n) {
    x("event", () => e.onEvent?.(n));
  }
  function T() {
    x("live count report", () => e.onLiveCountChange(I.size));
  }
  function V(n, r) {
    if (n.startedTimer === void 0) return;
    if (clearTimeout(n.startedTimer), n.startedTimer = void 0, r === void 0) g("bridge_tool_host_work");
    else m("bridge_tool_host_work", r);
  }
  function L(n) {
    let r = o();
    k = k.concat(r).slice(-me);
    let s = y.get(n) ?? [];
    y.delete(n), J(y, n, s.concat(r).slice(-ge));
  }
  function Z(n, r, s) {
    x("report", () => e.api.refuseToolHost?.(n, r, s, AbortSignal.timeout(Fe)));
  }
  return { async handle(n, r) {
    try {
      return await b(n, r);
    } catch (s) {
      m("bridge_tool_host_work", "handler_threw"), t(`[tool-host] handling a request failed unexpectedly (${Se(s)})`, { level: "error" });
      try {
        let u = Ee(n, r);
        if (u !== void 0) return J(a, u, true), h(r, u), "handled";
      } catch {
      }
      return "unsettled";
    }
  }, async sweep(n) {
    let r = n === "shutdown" ? "helper_exited" : "gate_off";
    await Promise.allSettled([...I].map(async (s) => {
      if (!s.stoppedHere) Z(s.sessionId, s.workId, r);
      s.stoppedHere = true, await s.handle.stop(n), w(s);
    }));
  }, liveCount: () => I.size };
}
function Ee(e, o) {
  let a = e.id;
  return typeof a === "string" && a.length <= Ke && n$(a) && n$(o.environmentId) ? a : void 0;
}
function x(e, o) {
  (async () => {
    try {
      await o();
    } catch (a) {
      t(`[tool-host] ${e} failed (${Se(a)})`);
    }
  })();
}
function Se(e) {
  let o = se(e);
  if (o !== void 0) return `status ${o}`;
  return e instanceof Error ? e.name : "unknown";
}
function ie(e) {
  try {
    return e();
  } catch (o) {
    return t(`[tool-host] a switch could not be read, taken as off: ${K(d(o))}`, { level: "error" }), false;
  }
}
function J(e, o, a) {
  e.set(o, a);
  for (let E of e.keys()) {
    if (e.size <= $e) break;
    e.delete(E);
  }
}
function se(e) {
  return typeof e === "object" && e !== null && "status" in e && typeof e.status === "number" ? e.status : void 0;
}
function he() {
  if (er(), Xm().settings.disableRemoteControl === true || EM("disableRemoteControl").some((e) => e === true) || Gf().some((e) => e.disableRemoteControl === true)) return true;
  return [...CS(), ...ek("flagSettings"), ...ek("userSettings")].some((e) => {
    if (e.path === "") return true;
    if (e.statusOnly) return false;
    return e.severity !== "warning" || e.path === "disableRemoteControl";
  });
}
var qe = { macos: "darwin", linux: "linux", windows: "win32" };
async function Xe(e) {
  let o = e.gate();
  if (o === false) return { kind: "withdraw", blocker: "gate_off" };
  let a = e.localDeviceFlag();
  if (a === false) return { kind: "withdraw", blocker: "flag_off" };
  let E = qe[e.platform()];
  if (E === void 0) return { kind: "withdraw", blocker: "platform" };
  let p = await e.offReason();
  if (p !== void 0 && p !== "unknown") return { kind: "withdraw", blocker: p };
  if (!await e.signsInFromStoredLogin()) return { kind: "withdraw", blocker: "not_stored_login" };
  let R = await e.gitEntry();
  if (R === "other") return { kind: "withdraw", blocker: "not_git_checkout" };
  if (await e.inExcludedRepository()) return { kind: "withdraw", blocker: "excluded_repository" };
  if (o === "unknown" || a === "unknown") return { kind: "unknown", waitingOn: "feature_flags" };
  if (p === "unknown") return { kind: "unknown", waitingOn: "policy" };
  return { kind: "advertise", advert: { cliVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, platform: E }, ...R === "absent" && { withoutGit: true } };
}
function Lhr(e, o, a = Dms) {
  return { gate: a, localDeviceFlag: () => Utt() ? false : Gm() || "unknown", platform: O, offReason: async () => {
    let E = b3(e);
    if (E === "profile_dirs_unread" || E === "profile_dirs_unreadable") await bhe(), E = b3(e);
    if (E !== void 0) return E;
    let { servedToolsUnavailableReason: p } = await import("./served-tools-attach-options.2mx3.js"), R = p();
    return R === "policy_org" && !LQ() ? "unknown" : R;
  }, signsInFromStoredLogin: () => Ye(o), gitEntry: () => Ze(e), inExcludedRepository: () => $oo(e) };
}
async function Ye(e) {
  if (vx() !== void 0 || !vvt()) return false;
  let o = await Vn().readAsync(e);
  return Boolean(o?.claudeAiOauth?.refreshToken);
}
async function Ze(e) {
  try {
    let o = await Je(ze(e, ".git"));
    return o.isDirectory() || o.isFile() ? "root" : "other";
  } catch (o) {
    if (v(o) === "ENOENT") return (await je(e).catch((p) => {
      if (!Kt(p)) l(N(p));
      return;
    }))?.isDirectory() ? "absent" : "other";
    if (!Kt(o)) l(N(o));
    return "other";
  }
}
var Qe = 3e3, eo = 12e4, oo = { feature_flags: "flags_unloaded", policy: "policy_unloaded", failed_read: "error" }, we = 1e4, He = 6e4;
async function Doo({ dir: e, credentials: o, log: a, checks: E = Lhr(e, o), signals: p = [zne, o5, Ptt, Qan], refuse: R, onVerdict: I }) {
  let c = { kind: "unknown", waitingOn: "feature_flags" }, y = "gate_off", k = false, H, S = Number.NEGATIVE_INFINITY, b, U = performance.now(), h;
  function P(f) {
    if (f.kind !== "unknown") return U = void 0, clearTimeout(h), h = void 0, f;
    U ??= performance.now();
    let T = eo - (performance.now() - U);
    if (T <= 0) return { kind: "withdraw", blocker: oo[f.waitingOn] };
    if (h === void 0) h = setTimeout(() => {
      h = void 0, D();
    }, T), h.unref?.();
    return f;
  }
  async function D() {
    try {
      let f;
      try {
        f = await Xe(E);
        let L = f.kind === "advertise" ? R?.() : void 0;
        if (L !== void 0) f = { kind: "withdraw", blocker: L };
      } catch (L) {
        l(N(L)), f = { kind: "unknown", waitingOn: "failed_read" };
      }
      if (k) return;
      let T = P(f);
      if (c = T, I?.(T), T.kind === "unknown") return;
      let V = T.kind === "advertise" ? T.withoutGit ? "advertised_without_git" : "advertised" : T.blocker;
      if (V !== y) y = V, a(`cloud sessions may use this folder: ${T.kind === "advertise" ? T.withoutGit ? "yes (not the top folder of a git repository)" : "yes" : `no (${T.blocker})`}`);
    } catch (f) {
      l(N(f));
    }
  }
  function M() {
    if (H !== void 0) {
      H();
      return;
    }
    if (k || b !== void 0) return;
    if (c.kind === "unknown") {
      D();
      return;
    }
    let f = Date.now() - S, T = f >= 0 && f < He ? Math.max(we, He - f) : we;
    b = setTimeout(() => {
      b = void 0, S = Date.now(), D();
    }, T), b.unref?.();
  }
  await D();
  let w = p.map((f) => f(M));
  if (c.kind === "unknown" && c.waitingOn === "feature_flags") {
    let f = new AbortController();
    H = () => {
      D().then(() => {
        if (c.kind !== "unknown") f.abort();
      });
    }, await X(Qe, f.signal), H = void 0;
  }
  return { getToolHostAdvert: () => c.kind === "advertise" ? { kind: "advertise", advert: c.advert } : { kind: c.kind }, stop: () => {
    k = true;
    for (let f of w) f();
    clearTimeout(b), b = void 0, clearTimeout(h), h = void 0;
  } };
}
function FOn(e) {
  return e.kind === "withdraw" && (e.blocker === "gate_off" || e.blocker === "flag_off" || e.blocker === "muted");
}
function Loo({ dir: e, checks: o, isOfferingFolder: a, hasAccessToken: E }) {
  function p() {
    return b3(e, { ignoringMute: true });
  }
  return { gateOn: () => o.gate() === true && o.localDeviceFlag() === true && !Ehe(), servingOn: () => {
    if (!E() || !a() || Nhr() !== void 0) return false;
    let R = p();
    if (R !== void 0 && R !== "launched_from_home") return false;
    return !he();
  }, folderServed: () => p() !== "launched_from_home" };
}
function Nhr(e = ve()) {
  let o = te(e);
  if (o === void 0) return;
  return o.message.includes("signs in or sends its traffic elsewhere") ? "other_sign_in" : "no_helper";
}
function Noo(e, o) {
  return Te({ ...e, spawnHelper: (a) => ae(a, { env: ve(), ...o }) });
}
async function Foo(e) {
  try {
    await Pe(e.sweep("shutdown"), oe);
  } catch (o) {
    l(N(o));
  }
}
function ve() {
  return process.env;
}
export {
  Doo,
  FOn,
  Foo,
  Lhr,
  Loo,
  Nhr,
  Noo
};
