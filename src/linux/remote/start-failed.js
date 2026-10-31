// linux/remote/start-failed.js — Claude Code 2.1.310（linux）模块 chunk-8s2ew1st.js
import { __asset_src } from "../../runtime/assets.js";
import { Ne } from "../fs/async-hooks.93b1.js";
import { N, d, E, Vt } from "../telemetry/anthropic-workspace-id.js";
import { X, Pe } from "../shared/chunk-57ff8cc1.js";
import { F } from "../context/not-admin-owned.js";
import { Jfe, i } from "../shared/environment.js";
import { _, am, t } from "../fs/gitlab-runner-authentication-token.js";
import { re, Or } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { Hu } from "../models/total-tokens-reminder.js";
import { cB, Yj, TH, oot } from "../shell/invalid-type.js";
import { cC } from "../mcp/always-allow.js";
import { Q$ } from "../artifacts/chunk-a6c9d164.js";
import { V0 } from "../context/tool-cgroup-exclude-classes.js";
import { er } from "../settings/workflow-launch-exec.js";
import { T8o, Mai, vbe, O8o, ofe, kbe, ZE, Gp, Xm, kb, hM } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Dw, hEt } from "../settings/global-config-and-gates.js";
import { V5 } from "../shared/chunk-f98598c3.js";
import { Kn } from "../auth/permission-error.js";
import { Sx } from "../shared/remote-control.js";
import { GX, KPe, qee } from "../context/claude-desktop-3p.js";
import { Vwe } from "../context/chunk-2446c767.js";
import { _m } from "../shared/chunk-471874cc.js";
import { xu } from "../fs/chunk-dacd9872.js";
import { c_e } from "../telemetry/service-error-detail-not-plain.js";
import { _he, nln, She, jne, cY } from "../context/team-memory-sync.js";
import { Ett, R7 } from "../auth/env-quad.js";
import { Gm, Mtt } from "../telemetry/flag-off.js";
import { hoo } from "../shared/chunk-a5579f3e.js";
import { boo, Soo } from "./bridge-env-reregister.js";
import { _ms } from "../telemetry/chunk-df86191c.js";
import { Kj } from "../shared/chunk-141502d8.js";
import { lstat as Je, stat as je } from "fs/promises";
import { join as ze } from "path";
import { randomUUID as Re } from "crypto";
var de = "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED", ke = 2500, oe = 3e3, ye = 1024, Ie = 320, Y = /^cse_[A-Za-z0-9_]{1,124}$/, Ae = /^env_[A-Za-z0-9_-]{1,124}$/, Oe = new Set([...Vwe, ...KPe, ...Ue([...O8o, ...TH, "CLAUDE_BRIDGE_OAUTH_TOKEN"]), ...Yj.filter((e) => e !== "ANTHROPIC_BASE_URL"), "CLAUDE_BRIDGE_BASE_URL", "CLAUDE_BRIDGE_SESSION_INGRESS_URL", "CLAUDE_REMOTE_TOOLS_BRIDGE_URL", "CLAUDE_BG_AUTH_SNAPSHOT_PATH", "CLAUDE_CODE_ACCOUNT_UUID", "CLAUDE_CODE_ORGANIZATION_UUID", "CLAUDE_CODE_USER_EMAIL", "CLAUDE_CODE_ENVIRONMENT_KIND", "CLAUDE_CODE_SESSION_KIND", "CLAUDE_BG_SESSION_PERMISSION_RULES", "CLAUDE_JOB_DIR"].map((e) => ofe(e))), le = /* @__PURE__ */ new Set([...oot, "CLAUDE_CODE_HOST_CREDS_FILE"]), Ce = /* @__PURE__ */ new Set([...le, "ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID", "ANTHROPIC_PROFILE", "ANTHROPIC_CONFIG_DIR"]), be = /* @__PURE__ */ new Set([...cB.filter((e) => e.startsWith("CLAUDE_CODE_USE_")), "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST"]);
function De(e, { unattendedGrant: o, withoutShellSecrets: a, testVm: T }) {
  let p = T8o() ? Mai() : void 0;
  if (p === void 0) throw ue();
  let R = ofe(p), I = ofe(de), c = { ...e };
  for (let [y, k] of Object.entries(c)) {
    let v = ofe(y);
    if (le.has(v) && fe(v, k, e)) throw ce();
    if (Oe.has(v) || v === R || v === I || v.endsWith("_FILE_DESCRIPTOR")) delete c[y];
  }
  if (qee(c), GX(c), c[p] = "1", a) {
    let y = new Set(Jfe(i));
    for (let k of kbe(c)) if (!(/^(?:CLAUDE|ANTHROPIC)_/.test(k) && y.has(k))) delete c[k];
    delete c.SSH_AGENT_PID, Object.assign(c, vbe(c).respelled);
  }
  if (o !== void 0) c[de] = o;
  return c;
}
function Le({ workId: e, environmentId: o }, a) {
  let T = Y.test(e) && Ae.test(o);
  if (!T) t("[tool-host] the request ids are not in a usable form; starting the helper without them");
  return _({ type: "control_request", request_id: a, request: { subtype: "initialize", ...T && { attachServeRequest: { workId: e, environmentId: o } } } }) + `
`;
}
function te(e) {
  if (!T8o()) return ue();
  for (let [a, T] of Object.entries(e)) {
    let p = ofe(a);
    if (fe(p, T, e)) return t(`[tool-host] no helper: ${p} says this process signs in or sends its traffic elsewhere`, { level: "error" }), ce();
  }
  let o = _m();
  if (o) return t(`[tool-host] ${o}`, { level: "error" }), Error("tool host helper: the process wrapper is not usable");
  return;
}
function ae(e, { env: o, unattendedGrant: a, withoutShellSecrets: T, testVm: p, selfInvocation: R = () => xu({ pinToCurrentBinary: true }), spawn: I = V0, after: c = xe, killTree: y = Dw }) {
  let k = te(o);
  if (k !== void 0) throw k;
  if (!Y.test(e.sessionId)) throw Error("tool host helper: the session id is not usable");
  let v = R(), h = I(v.cmd, [...v.prefixArgs, "--attach-serve", e.sessionId, "--input-format", "stream-json", "--output-format", "stream-json"], { cwd: e.folder, env: De(o, { unattendedGrant: a, withoutShellSecrets: T, ...p !== void 0 && { testVm: p } }), extendEnv: false, stdio: ["pipe", "pipe", "pipe"], windowsHide: true, toolCgroupClass: "agent" }), { promise: b, resolve: U } = Promise.withResolvers(), w = false, P = Buffer.alloc(0);
  function D(H, f) {
    if (w) return;
    w = true;
    let S = K(am(Or(P.toString("utf8"))));
    U({ code: H, signal: f, stderrFirstLine: S === "" ? void 0 : re(S, Ie) });
  }
  try {
    h.on("exit", D), h.on("error", (H) => {
      if (t(`[tool-host] helper process error: ${K(d(H))}`), !w) D(null, null), q(h, "SIGKILL");
    });
    for (let H of [h.stdin, h.stdout, h.stderr]) H?.on("error", () => {
    });
    if (h.stdout?.on("data", () => {
    }), h.stderr?.on("data", (H) => {
      let f = ye - P.length;
      if (f > 0) {
        let S = typeof H === "string" ? Buffer.from(H) : H;
        P = Buffer.concat([P, S.subarray(0, f)]);
      }
    }), h.pid === void 0 || h.stdin === null) D(null, null);
    else h.stdin.write(Le(e, Re()));
  } catch (H) {
    throw q(h, "SIGKILL"), H;
  }
  let M;
  return { pid: h.pid, exited: b, stop(H) {
    if (w) return Promise.resolve();
    return M ??= new Promise((f) => {
      t(`[tool-host] stopping helper (${H})`);
      let S = O() === "windows";
      try {
        h.stdin?.end();
      } catch {
      }
      if (!S) q(h, "SIGTERM");
      let V = c(ke, () => {
        if (S && h.pid !== void 0) y(h.pid).catch(() => {
        });
        else q(h, "SIGKILL");
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
  if (Hu(e)) return true;
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
  let o = e.now ?? Date.now, a = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), R = 0, I = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), k = [], { NEGATIVE_INFINITY: v, NEGATIVE_INFINITY: h } = Number;
  async function b(n, r) {
    if (r.signal.aborted) return "unsettled";
    let s = Ee(n, r);
    if (s === void 0) return t("[tool-host] item or environment id unusable; item left"), "unsettled";
    if (a.has(s) || [...I].some((G) => G.workId === s)) return w(r, s), "handled";
    if (T.has(s)) return "unsettled";
    let u = typeof n.data === "object" && n.data !== null && "id" in n.data ? n.data.id : void 0, C = typeof u === "string" && Y.test(u) ? cC(u) : void 0;
    if (typeof u !== "string" || C === void 0 || C === cC(s)) return t("[tool-host] session id unusable; item stopped"), J(a, s, true), w(r, s), "handled";
    let z = U(u);
    if (z !== void 0) return P(r, s, u, z);
    if (o() < R) return "unsettled";
    T.add(s);
    try {
      await e.api.acknowledgeWork(r.environmentId, s, r.environmentSecret, c_e(s));
    } catch (G) {
      if (D(G, s) !== "give_up") return "unsettled";
      let ee = se(G);
      return P(r, s, u, "start_failed", ee === 404 || ee === 409 || ee === 410);
    } finally {
      T.delete(s);
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
      await W.handle.stop("superseded"), H(W);
    });
    let B = { sessionId: u, workId: s, startedAt: Q, handle: j, stoppedHere: false, startedTimer: void 0 };
    return B.startedTimer = setTimeout(V, _e, B), B.startedTimer.unref?.(), I.add(B), c.set(u, B), S(), x("exit", async () => M(B, await j.exited)), w(r, s), x("status line", () => e.logger.logStatus(`Serving tools to a cloud session in ${e.folder}`)), f({ kind: "started" }), "handled";
  }
  function U(n) {
    if (!ie(e.switches.gateOn)) return "gate_off";
    if (!ie(e.switches.servingOn) || o() - h < ne) return "serving_off";
    if (!ie(e.switches.folderServed)) return "not_served";
    let r = o() - ne, s = y.get(n) ?? [];
    if (F(s, (C) => C > r) >= ge || F(k, (C) => C > r) >= me) return "at_capacity";
    let u = c.has(n) ? 1 : 0;
    return I.size - u >= Me ? "at_capacity" : void 0;
  }
  function w(n, r) {
    x("stop", () => e.api.stopWork(n.environmentId, r, n.environmentSecret, true, c_e(r)));
  }
  function P(n, r, s, u, C = false) {
    if (J(a, r, true), !C) Z(s, r, u), f({ kind: "refused", code: u });
    return w(n, r), m("bridge_tool_host_work", C ? "withdrawn" : u), "handled";
  }
  function D(n, r) {
    let s = se(n);
    if (t(`[tool-host] acknowledge failed (${s ?? "no response"})`), s === 429) R = o() + Math.min(boo(n) ?? Be, Ge);
    let u = (p.get(r) ?? 0) + 1;
    if (Soo(n) || u >= We) return p.delete(r), "give_up";
    return J(p, r, u), "retry";
  }
  function M(n, r) {
    let s = o() - n.startedAt, u = !n.stoppedHere && r.code !== 0, C = u && r.code === Kj, z = C && o() - v < ne;
    if (C) v = o();
    let A = !u ? void 0 : z ? "serving_off" : s < _e ? "start_failed" : "helper_exited";
    if (A === "start_failed") L(n.sessionId);
    if (A === "serving_off") h = o();
    if (A === "start_failed" || A === "serving_off") V(n, A);
    if (H(n), A !== void 0) Z(n.sessionId, n.workId, A);
    f({ kind: "ended", code: A, stoppedHere: n.stoppedHere });
    let Q = r.signal ?? `exit code ${r.code ?? "none"}`, j = A === void 0 ? "" : `, reported as ${A}`, W = u && r.stderrFirstLine !== void 0 ? `: ${r.stderrFirstLine}` : "";
    e.logger.logVerbose(`Tool helper for a cloud session ended (pid ${n.handle.pid ?? "none"}, ${Q}, after ${Math.round(s / 1e3)}s${j}${W})`);
  }
  function H(n) {
    V(n);
    let r = I.delete(n);
    if (c.get(n.sessionId) === n) c.delete(n.sessionId);
    if (r) S();
  }
  function f(n) {
    x("event", () => e.onEvent?.(n));
  }
  function S() {
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
        if (u !== void 0) return J(a, u, true), w(r, u), "handled";
      } catch {
      }
      return "unsettled";
    }
  }, async sweep(n) {
    let r = n === "shutdown" ? "helper_exited" : "gate_off";
    await Promise.allSettled([...I].map(async (s) => {
      if (!s.stoppedHere) Z(s.sessionId, s.workId, r);
      s.stoppedHere = true, await s.handle.stop(n), H(s);
    }));
  }, liveCount: () => I.size };
}
function Ee(e, o) {
  let a = e.id;
  return typeof a === "string" && a.length <= Ke && Q$(a) && Q$(o.environmentId) ? a : void 0;
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
  for (let T of e.keys()) {
    if (e.size <= $e) break;
    e.delete(T);
  }
}
function se(e) {
  return typeof e === "object" && e !== null && "status" in e && typeof e.status === "number" ? e.status : void 0;
}
function he() {
  if (er(), Xm().settings.disableRemoteControl === true || hM("disableRemoteControl").some((e) => e === true) || Gp().some((e) => e.disableRemoteControl === true)) return true;
  return [...kb(), ...ZE("flagSettings"), ...ZE("userSettings")].some((e) => {
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
  let T = qe[e.platform()];
  if (T === void 0) return { kind: "withdraw", blocker: "platform" };
  let p = await e.offReason();
  if (p !== void 0 && p !== "unknown") return { kind: "withdraw", blocker: p };
  if (!await e.signsInFromStoredLogin()) return { kind: "withdraw", blocker: "not_stored_login" };
  let R = await e.gitEntry();
  if (R === "other") return { kind: "withdraw", blocker: "not_git_checkout" };
  if (await e.inExcludedRepository()) return { kind: "withdraw", blocker: "excluded_repository" };
  if (o === "unknown" || a === "unknown") return { kind: "unknown", waitingOn: "feature_flags" };
  if (p === "unknown") return { kind: "unknown", waitingOn: "policy" };
  return { kind: "advertise", advert: { cliVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, platform: T }, ...R === "absent" && { withoutGit: true } };
}
function whr(e, o, a = _ms) {
  return { gate: a, localDeviceFlag: () => Mtt() ? false : Gm() || "unknown", platform: O, offReason: async () => {
    let T = cY(e);
    if (T === "profile_dirs_unread" || T === "profile_dirs_unreadable") await _he(), T = cY(e);
    if (T !== void 0) return T;
    let { servedToolsUnavailableReason: p } = await import("./served-tools-attach-options.js"), R = p();
    return R === "policy_org" && !R7() ? "unknown" : R;
  }, signsInFromStoredLogin: () => Ye(o), gitEntry: () => Ze(e), inExcludedRepository: () => hoo(e) };
}
async function Ye(e) {
  if (Sx() !== void 0 || !hEt()) return false;
  let o = await Kn().readAsync(e);
  return Boolean(o?.claudeAiOauth?.refreshToken);
}
async function Ze(e) {
  try {
    let o = await Je(ze(e, ".git"));
    return o.isDirectory() || o.isFile() ? "root" : "other";
  } catch (o) {
    if (E(o) === "ENOENT") return (await je(e).catch((p) => {
      if (!Vt(p)) l(N(p));
      return;
    }))?.isDirectory() ? "absent" : "other";
    if (!Vt(o)) l(N(o));
    return "other";
  }
}
var Qe = 3e3, eo = 12e4, oo = { feature_flags: "flags_unloaded", policy: "policy_unloaded", failed_read: "error" }, we = 1e4, He = 6e4;
async function foo({ dir: e, credentials: o, log: a, checks: T = whr(e, o), signals: p = [jne, V5, Ett, nln], refuse: R, onVerdict: I }) {
  let c = { kind: "unknown", waitingOn: "feature_flags" }, y = "gate_off", k = false, v, h = Number.NEGATIVE_INFINITY, b, U = performance.now(), w;
  function P(f) {
    if (f.kind !== "unknown") return U = void 0, clearTimeout(w), w = void 0, f;
    U ??= performance.now();
    let S = eo - (performance.now() - U);
    if (S <= 0) return { kind: "withdraw", blocker: oo[f.waitingOn] };
    if (w === void 0) w = setTimeout(() => {
      w = void 0, D();
    }, S), w.unref?.();
    return f;
  }
  async function D() {
    try {
      let f;
      try {
        f = await Xe(T);
        let L = f.kind === "advertise" ? R?.() : void 0;
        if (L !== void 0) f = { kind: "withdraw", blocker: L };
      } catch (L) {
        l(N(L)), f = { kind: "unknown", waitingOn: "failed_read" };
      }
      if (k) return;
      let S = P(f);
      if (c = S, I?.(S), S.kind === "unknown") return;
      let V = S.kind === "advertise" ? S.withoutGit ? "advertised_without_git" : "advertised" : S.blocker;
      if (V !== y) y = V, a(`cloud sessions may use this folder: ${S.kind === "advertise" ? S.withoutGit ? "yes (not the top folder of a git repository)" : "yes" : `no (${S.blocker})`}`);
    } catch (f) {
      l(N(f));
    }
  }
  function M() {
    if (v !== void 0) {
      v();
      return;
    }
    if (k || b !== void 0) return;
    if (c.kind === "unknown") {
      D();
      return;
    }
    let f = Date.now() - h, S = f >= 0 && f < He ? Math.max(we, He - f) : we;
    b = setTimeout(() => {
      b = void 0, h = Date.now(), D();
    }, S), b.unref?.();
  }
  await D();
  let H = p.map((f) => f(M));
  if (c.kind === "unknown" && c.waitingOn === "feature_flags") {
    let f = new AbortController();
    v = () => {
      D().then(() => {
        if (c.kind !== "unknown") f.abort();
      });
    }, await X(Qe, f.signal), v = void 0;
  }
  return { getToolHostAdvert: () => c.kind === "advertise" ? { kind: "advertise", advert: c.advert } : { kind: c.kind }, stop: () => {
    k = true;
    for (let f of H) f();
    clearTimeout(b), b = void 0, clearTimeout(w), w = void 0;
  } };
}
function AOn(e) {
  return e.kind === "withdraw" && (e.blocker === "gate_off" || e.blocker === "flag_off" || e.blocker === "muted");
}
function poo({ dir: e, checks: o, isOfferingFolder: a, hasAccessToken: T }) {
  function p() {
    return cY(e, { ignoringMute: true });
  }
  return { gateOn: () => o.gate() === true && o.localDeviceFlag() === true && !She(), servingOn: () => {
    if (!T() || !a() || vhr() !== void 0) return false;
    let R = p();
    if (R !== void 0 && R !== "launched_from_home") return false;
    return !he();
  }, folderServed: () => p() !== "launched_from_home" };
}
function vhr(e = ve()) {
  let o = te(e);
  if (o === void 0) return;
  return o.message.includes("signs in or sends its traffic elsewhere") ? "other_sign_in" : "no_helper";
}
function moo(e, o) {
  return Te({ ...e, spawnHelper: (a) => ae(a, { env: ve(), ...o }) });
}
async function goo(e) {
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
  AOn,
  foo,
  goo,
  moo,
  poo,
  vhr,
  whr
};
