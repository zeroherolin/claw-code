// darwin/telemetry/bg-daemon-spawn-reinstall-wait.js — Claude Code 2.1.310（darwin）模块 chunk-vspyg8jb.js
import { __asset_src } from "../../runtime/assets.js";
import { fa, k, ue } from "../settings/global-config-and-gates.js";
import { Ne, He } from "../fs/async-hooks.93b1.js";
import { U, H3e } from "../context/not-admin-owned.js";
import { S, c, ce } from "../agents/third-party.js";
import { R, d, v, vr, rw, Wit, Git, G } from "./anthropic-workspace-id.js";
import { X, Pe } from "../shared/chunk-57ff8cc1.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { Tf, i } from "../shared/environment.js";
import { _, ee, qo, yn, t } from "../fs/gitlab-runner-authentication-token.js";
import { re, Qa, RX, zr } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { a } from "./chunk-9097a12b.js";
import { g, m, p } from "./chunk-9d6962d2.js";
import { pe } from "../shared/async-hooks.5238.js";
import { HI } from "../context/tool-cgroup-exclude-classes.js";
import { st } from "../git/utf8-keep-bom.js";
import { le } from "../shared/chunk-4563156b.js";
import { zw, Wpe, wT } from "../shared/chunk-d4196a83.js";
import { s3e, Jpe } from "../context/utf-8.js";
import { Yqe, ku, UZo, BZo, ft } from "../fs/async-hooks.7959.js";
import { je } from "../plugins/chunk-0a4c51cf.js";
import { g1, oW, xH, ype, AKt, PZ, ko, xKt } from "../shell/invalid-type.js";
import { vR } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { he } from "../terminal/xterm-ghostty.js";
import { oy, Tn } from "../mcp/allowed-warning.js";
import { Vn } from "../auth/permission-error.js";
import { RL } from "../fs/chunk-b6c2193e.js";
import { xL } from "../fs/chunk-21654dda.js";
import { bl } from "../fs/reply-across-default-dirs.js";
import { jt } from "../shared/chunk-dda594a8.js";
import { rJe, oJe, GDr, Qf } from "./fleet-past-sessions.js";
import { rA, cZn, nm, _m, PF, Szo, bzo, btt, wG } from "../shared/chunk-471874cc.js";
import { Iu, DGe, aZe, M8, gBt } from "../fs/chunk-dacd9872.js";
import { Zat, N9t, tlt } from "../fs/pty-pids.js";
import { _9e, c0, s9, lct, w7t, SHn, QIt, bv, YUe } from "./not-stopped.js";
import { RUr, VC, Cqs, Yun, YFo, F3 } from "../fs/attach-journal.js";
import { hdn, ydn } from "../permissions/agent-memory.js";
import { Oc, rdn, ryt, bde, syt, UUt, GJe, odn, zJe, VJe, THo, e4n, AHo, B2e, qJe, t4n, tre, _o, ad, Rl, lo, DHo } from "./bg-roster-parse-failed.js";
import { Sh } from "./bg-cloud-lease.js";
import { jOn, QX, Wms, nte, jPt } from "../context/claude-desktop-3p.js";
import { Dyt } from "../fs/chunk-b6b2e102.js";
import { _tt, h4 } from "../settings/non-string-value.js";
import { zW, hN } from "../shared/chunk-10142731.js";
import { UP, eh } from "../context/team-memory-sync.js";
import { $W } from "../vendor/highlight/meta-keyword.js";
import { rPt, fN } from "../terminal/list-item.js";
import { o4s, tSt } from "./harbor-kite-pacing-off.js";
import { ne } from "../workflows/workflow-size-guideline-change.js";
import { lq } from "../shared/chunk-32946c5f.js";
import { vb } from "../shell/chunk-526e5cd9.js";
import { Qn } from "../vendor/chalk/chunk-24ee1a9d.js";
import { Pnn, Inn } from "../shared/chunk-e3f9966a.js";
import { A2, Hk } from "../agents/chunk-1782da8d.js";
import { r_e } from "../shared/chunk-9f5e078b.js";
import { fY } from "../shared/chunk-c564b685.js";
import { $a } from "../shared/chunk-5acf247e.js";
import { ges } from "../context/tool-result.js";
import { rie } from "../shared/pasted-content.js";
import { Zm } from "./chunk-a27d4004.js";
import { Ae } from "../vendor/react/chunk-0b0bf45d.js";
var Ve = Ae(oy(), 1);
import { lstat as Un, readFile as Wn, realpath as Hn, rm as et } from "fs/promises";
import { dirname as tt } from "path";
import { setTimeout as Fe } from "timers/promises";
import { access as pr, mkdir as mr, readFile as gr, stat as lt, unlink as hr, writeFile as _r } from "fs/promises";
import { homedir as dt } from "os";
import { join as Ie } from "path";
import { setTimeout as wr } from "timers/promises";
var we = "com.anthropic.claude-daemon";
async function K4e() {
  return true;
}
function ato() {
  if (!Tf()) return process.argv[1];
  return Ie(fY(), "claude");
}
function Oe(r) {
  return jt(r.replace(/[\r\n]/g, " "));
}
function ct() {
  return Ie(dt(), "Library", "LaunchAgents", `${we}.plist`);
}
function Er() {
  let r = i.XDG_CONFIG_HOME || Ie(dt(), ".config");
  return Ie(r, "systemd", "user", `${we}.service`);
}
async function Pt() {
  return false;
}
function Tt() {
  return `gui/${process.getuid()}`;
}
function Ye() {
  return `${Tt()}/${we}`;
}
async function M9t(r) {
  let { jsonPath: e, logPath: n } = r, s = await btt();
  if (s) return { ok: false, error: `${s} — refusing to install a service that would run unwrapped`, serviceId: we, servicePath: "" };
  let h = [...nm(), ato()], w = i.PATH || "/usr/local/bin:/usr/bin:/bin";
  {
    let u = ct();
    try {
      await mr(Ie(dt(), "Library", "LaunchAgents"), { recursive: true }), await _r(u, `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>${we}</string>
  <key>ProgramArguments</key><array>
${h.map((A) => `    <string>${Oe(A)}</string>`).join(`
`)}
    <string>daemon</string>
    <string>--json-path</string>
    <string>${Oe(e)}</string>
    <string>--log-file</string>
    <string>${Oe(n)}</string>
    <string>--origin</string>
    <string>service</string>
  </array>
  <key>EnvironmentVariables</key><dict>
    <key>PATH</key><string>${Oe(w)}</string>
  </dict>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><dict><key>SuccessfulExit</key><false/></dict>
  <key>ThrottleInterval</key><integer>10</integer>
  <key>StandardOutPath</key><string>${Oe(n)}</string>
  <key>StandardErrorPath</key><string>${Oe(n)}</string>
</dict></plist>
`, "utf8");
    } catch (A) {
      return { ok: false, error: d(A), serviceId: we, servicePath: u };
    }
    await st("launchctl", ["bootout", Ye()], { useCwd: false });
    let { code: E, stderr: b, error: T } = await st("launchctl", ["bootstrap", Tt(), u], { useCwd: false });
    if (E !== 0) return { ok: false, error: b || T || "launchctl bootstrap failed", serviceId: we, servicePath: u };
    return { ok: true, serviceId: we, servicePath: u };
  }
  return { ok: false, error: `service install not available on ${"darwin"} — the daemon runs on demand instead`, serviceId: we, servicePath: "" };
}
async function gxt() {
  {
    let r = ct();
    await st("launchctl", ["bootout", Ye()], { useCwd: false });
    try {
      await hr(r);
    } catch (e) {
      if (!G(e)) return { ok: false, error: d(e) };
    }
    return { ok: true };
  }
  return { ok: false, error: "service uninstall not available on darwin" };
}
async function Ufr() {
  return ut("start");
}
async function H9t() {
  return ut("stop");
}
async function Jcs() {
  return ut("restart");
}
async function ut(r) {
  {
    let e = Ye(), n;
    switch (r) {
      case "start":
        n = ["kickstart", e];
        break;
      case "stop":
        n = ["kill", "SIGTERM", e];
        break;
      case "restart": {
        await st("launchctl", ["kill", "SIGTERM", e], { useCwd: false });
        let u = false;
        for (let E = 0; E < 200; E++) {
          let b = await st("launchctl", ["print", e], { useCwd: false });
          if (b.code !== 0 || !/^\s*pid = /m.test(b.stdout)) {
            u = true;
            break;
          }
          await wr(50);
        }
        if (!u) return { ok: false, error: "daemon did not exit within 10s of SIGTERM; restart aborted before kickstart" };
        n = ["kickstart", e];
        break;
      }
    }
    let { code: s, stderr: h, error: w } = await st("launchctl", n, { useCwd: false });
    if (s !== 0) {
      if (r === "stop") return { ok: true };
      return { ok: false, error: h || w || `launchctl ${n[0]} failed` };
    }
    return { ok: true };
  }
  return { ok: false, error: `service ${r} not available on ${"darwin"} — the daemon runs on demand instead` };
}
async function Sr() {
  let r = ct();
  if (!r) return null;
  let e;
  try {
    let n = await lt(r);
    if (!n.isFile() || n.size > 1048576) return null;
    e = await gr(r, "utf8");
  } catch {
    return null;
  }
  return [...e.match(/<key>ProgramArguments<\/key><array>([\s\S]*?)<\/array>/)?.[1]?.matchAll(/<string>([^<]*)<\/string>/g) ?? []].map((n) => n[1]);
}
function xt(r) {
  return r.replaceAll("&gt;", ">").replaceAll("&lt;", "<").replaceAll("&amp;", "&");
}
async function Bfr() {
  let r = { execPathStale: false, launcherPrefixDead: false }, e = await Sr();
  if (!e) return r;
  let n = e.lastIndexOf("daemon"), s = n > 0 ? e[n - 1] : void 0;
  if (!s) return r;
  try {
    await pr(xt(s));
  } catch {
    r.execPathStale = true;
  }
  let h = e.slice(0, n - 1).map(xt);
  for (let w of bzo(h)) if (!await Szo(w)) {
    r.launcherPrefixDead = true;
    break;
  }
  return r;
}
async function Gee() {
  {
    let { code: r } = await st("launchctl", ["print", Ye()], { useCwd: false, timeout: 5e3 });
    return r === 0;
  }
  return false;
}
class kt {
  daemonConfirmedUp = false;
  ensureInFlight = null;
  lastTransientSpawnAt = null;
  prefixAxis = "idle";
  prefixContractViolationLogged = false;
  tmuxRgbApplied = false;
  ownedBeacons = /* @__PURE__ */ new Map();
  reset() {
    this.daemonConfirmedUp = false, this.ensureInFlight = null, this.lastTransientSpawnAt = null, this.prefixAxis = "idle", this.prefixContractViolationLogged = false, this.tmuxRgbApplied = false, this.ownedBeacons.clear();
  }
}
var br = new W(() => new kt());
function w$() {
  return br.of(U().host);
}
import { setTimeout as Xr } from "timers/promises";
import { spawn as mt } from "child_process";
import { constants as yr } from "fs";
import { access as Ar, mkdtemp as Cr, open as xr, readdir as Pr, realpath as Tr, stat as Je } from "fs/promises";
import { homedir as kr, tmpdir as Rr } from "os";
import { dirname as Dr, join as Xe } from "path";
var Or = 1e4, pt = 250, qe = 12e4, Ir = 1e3, Nr = 6e5, Lr = 1e4, It = /^(.+)\/Caskroom\/[^/]+\/[^/]+\/claude$/, ze = "/node_modules/@anthropic-ai/", Mr = 6e4;
async function Nt(r) {
  try {
    let e = await Je(r);
    if (!e.isFile() || e.size >= Pnn) return "present";
    return Date.now() - Math.max(e.mtimeMs, e.ctimeMs) < Mr ? "fresh_stub" : "stale_stub";
  } catch (e) {
    return v(e) === "ENOENT" ? "missing" : "present";
  }
}
var $r = /* @__PURE__ */ new Set(["ENOENT", "EACCES", "ENOEXEC", "EFTYPE", "ETXTBSY", "EBUSY", "EUNKNOWN", "EPERM"]);
async function jfr(r, e, { withoutOAuthTokenEnv: n = false } = {}) {
  let s = _m();
  if (s) return m("agent_launcher", "invalid_config"), { err: new R(s, "CLAUDE_CODE_PROCESS_WRAPPER is misconfigured") };
  if (!await PF()) return m("agent_launcher", "launcher_not_runnable"), { err: new R(`${rA}: launcher \`${nm()[0]}\` was deleted or is not executable — restore it (or fix the setting); background sessions are not started unwrapped`, "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable") };
  let { wrapper: h, invocation: w } = vR(() => ({ wrapper: nm(), invocation: Iu() })), { cmd: u, prefixArgs: E, target: b } = w, T = [u, ...E, ...r], A = Kr({ dropShellOAuthToken: n || await Gr(e) });
  if (O() === "windows") {
    if (cZn().platformIgnored) p("agent_launcher", "platform_unsupported");
    let I = await Ot(T, A);
    if (I.ok) return { err: null };
    t(`daemon: WMI spawn failed (${I.reason}); falling back to direct spawn — daemon will not survive SSH/terminal close`, { level: "warn" }), a("tengu_bg_daemon_wmi_fallback", { timeout: I.reason === "timeout", enoent: I.reason === "enoent", no_powershell: I.reason === "no-powershell", rc: I.rc });
  }
  let P = O() === "macos" ? await Wr() : [], L = await Cr(Xe(Rr(), "cc-daemon-")).catch(() => null), M = L ? Xe(L, "stderr.log") : void 0, H = M ? await xr(M, "w").catch(() => null) : null;
  try {
    if (h.length > 0) return { ...await Br(r, A, P, H), stderrPath: M };
    let I = await ve(await Te(P, T), A, H?.fd), { err: z } = I, K = v(z), te = false, V;
    if (K !== void 0 && $r.has(K) && $e(b)) {
      let y = await Qe(b);
      if (te = !y.recovered && y.installInProgressAtEnd, V = y.waitedMs, y.recovered) {
        if (O() === "windows") I = (await Ot(T, A)).ok ? { err: null } : await ve(T, A, H?.fd);
        else I = await ve(await Te(P, T), A, H?.fd);
        K = v(I.err);
      }
      if (a("tengu_bg_daemon_spawn_reinstall_wait", { waited_ms: y.waitedMs, recovered: y.recovered, respawn_ok: y.recovered && I.err === null, extended: y.extended, install_in_progress: y.installInProgressAtEnd, errno: vr(z) ?? S("unknown"), ...y.recovered && I.err !== null && { respawn_errno: vr(I.err) ?? S("unknown") } }), y.recovered && I.err === null) return t(`daemon: ${b} was being reinstalled (exec ${v(z)}); started it after ${y.waitedMs}ms`), { ...I, stderrPath: M, recoveredAfterReinstallWait: true, reinstallWaitedMs: V };
      t(y.recovered ? `daemon: ${b} came back after ${y.waitedMs}ms of an npm reinstall but starting it failed again (exec ${v(I.err)})` : `daemon: ${b} not runnable after waiting ${y.waitedMs}ms for an npm reinstall (exec ${v(z)}; install ${y.installInProgressAtEnd ? "still in progress" : y.extended ? "ended" : "not seen"})`);
    }
    let Q = { gaveUpOnNpmInstallInProgress: te, reinstallWaitedMs: V };
    if (K !== "ENOENT" && K !== "EACCES") return { ...I, stderrPath: M, ...Q };
    let ie = /* @__PURE__ */ new Set([b]), f = vR(() => Iu({ pinToCurrentBinary: true }));
    if (!ie.has(f.target)) {
      ie.add(f.target), a("tengu_bg_daemon_spawn_execpath_fallback", { errno_enoent: K === "ENOENT", errno_eacces: K === "EACCES" });
      let y = await ve(await Te(P, [f.cmd, ...f.prefixArgs, ...r]), A, H?.fd);
      if (v(y.err) !== "ENOENT") return { ...y, stderrPath: M, ...Q };
    }
    let { link: o, waitedMs: C } = await Lt(f.target);
    if (C > 0) Q.reinstallWaitedMs = (V ?? 0) + C;
    if (o !== null && !ie.has(o)) {
      ie.add(o), a("tengu_bg_daemon_spawn_homebrew_fallback", { errno_enoent: K === "ENOENT", errno_eacces: K === "EACCES", waited_ms: C });
      let y = await ve(await Te(P, [o, ...r]), A, H?.fd);
      if (y.err === null) return { ...y, stderrPath: M, ...Q, recoveredAfterReinstallWait: C > 0 };
    }
    let x = aZe();
    if (!ie.has(x)) {
      ie.add(x), a("tengu_bg_daemon_spawn_launcher_fallback", { errno_enoent: K === "ENOENT", errno_eacces: K === "EACCES" });
      let y = await ve(await Te(P, [x, ...r]), A, H?.fd);
      if (v(y.err) !== "ENOENT") return { ...y, stderrPath: M, ...Q };
    }
    let j = await gBt();
    if (a("tengu_bg_daemon_spawn_versions_fallback", { found: j !== null }), j !== null && !ie.has(j)) return { ...await ve(await Te(P, [j, ...r]), A, H?.fd), stderrPath: M, ...Q };
    return { err: z, stderrPath: M, ...Q };
  } finally {
    await H?.close().catch(() => {
    });
  }
}
async function Br(r, e, n, s) {
  let h = async (L) => {
    let M = vR(() => M8(L));
    return ve(await Te(n, [M.cmd, ...M.prefixArgs, ...r]), e, s?.fd);
  }, w = DGe();
  if (await _e(w.cmd, { rejectNpmStub: true })) return h(w);
  let u = false, E;
  if ($e(w.cmd)) {
    let L = await Qe(w.cmd);
    if (E = L.waitedMs, a("tengu_bg_daemon_spawn_reinstall_wait", { waited_ms: L.waitedMs, recovered: L.recovered, respawn_ok: L.recovered, extended: L.extended, install_in_progress: L.installInProgressAtEnd, probe: true }), L.recovered) return { ...await h(w), recoveredAfterReinstallWait: true, reinstallWaitedMs: E };
    u = L.installInProgressAtEnd;
  }
  let b = DGe({ pinToCurrentBinary: true });
  if (b.cmd !== w.cmd && await _e(b.cmd)) return a("tengu_bg_daemon_spawn_execpath_fallback", { errno_enoent: false, errno_eacces: false, probe: true }), { ...await h(b), reinstallWaitedMs: E };
  let { link: T, waitedMs: A } = await Lt(b.cmd);
  if (A > 0) E = (E ?? 0) + A;
  if (T !== null && await _e(T)) return a("tengu_bg_daemon_spawn_homebrew_fallback", { errno_enoent: false, errno_eacces: false, probe: true, waited_ms: A }), { ...await h({ cmd: T, prefixArgs: [], target: T }), recoveredAfterReinstallWait: A > 0, reinstallWaitedMs: E };
  let P = await gBt();
  if (a("tengu_bg_daemon_spawn_versions_fallback", { found: P !== null, probe: true }), P !== null && P !== b.cmd && await _e(P)) return { ...await h({ cmd: P, prefixArgs: [], target: P }), reinstallWaitedMs: E };
  return m("agent_launcher", "no_runnable_target"), { err: new R(`no runnable Claude Code binary was found to run through the configured launcher — last tried: ${P ?? b.cmd}`, "no runnable claude binary for the configured launcher"), gaveUpOnNpmInstallInProgress: u, reinstallWaitedMs: E };
}
async function _e(r, e = {}) {
  try {
    let n = await Je(r);
    if (!n.isFile()) return false;
    if (e.rejectNpmStub && n.size < Pnn) return false;
    return await Ar(r, yr.X_OK), true;
  } catch {
    return false;
  }
}
function $e(r) {
  return r.replace(/\\/g, "/").includes(ze);
}
async function Ur(r) {
  let e = It.exec(r)?.[1];
  if (e === void 0) return null;
  let n = Xe(e, "bin", "claude"), s = await Tr(n).catch(() => null);
  return s !== null && s !== r && s.startsWith(`${e}/Caskroom/`) ? n : null;
}
async function Lt(r) {
  for (let e = 0; ; e += pt) {
    let n = It.test(r) && await Je(`${Dr(r)}.upgrading`).then(() => true, () => false), s = await Ur(r);
    if ((n || e > 0) && s !== null && !await _e(s)) s = null;
    if (s !== null || !n || e >= Lr) {
      if (s === null && e > 0) a("tengu_bg_daemon_spawn_homebrew_wait_gave_up", { waited_ms: e });
      return { link: s, waitedMs: e };
    }
    await X(pt);
  }
}
async function Rt(r) {
  let e = r.replace(/\\/g, "/").indexOf(ze);
  if (e === -1) return false;
  let n = r.slice(0, e + ze.length - 1), s = r.slice(e + ze.length).split(/[\\/]/)[0];
  if (!s) return false;
  let h = `.${s}-`, w;
  try {
    w = await Pr(n, { withFileTypes: true });
  } catch {
    return false;
  }
  for (let u of w) {
    if (!u.isDirectory() || !u.name.startsWith(h)) continue;
    try {
      let E = await Je(Xe(n, u.name));
      if (Date.now() - Math.max(E.ctimeMs, E.mtimeMs) < Nr) return true;
    } catch {
    }
  }
  return false;
}
async function Qe(r) {
  let e = Date.now(), n = e + Or;
  while (Date.now() < n) if (await X(pt), await _e(r, { rejectNpmStub: true })) return { recovered: true, waitedMs: Date.now() - e, extended: false, installInProgressAtEnd: false };
  let s = await Rt(r);
  if (!s) return { recovered: false, waitedMs: Date.now() - e, extended: false, installInProgressAtEnd: false };
  let h = e + qe;
  while (Date.now() < h) {
    if (await X(Ir), await _e(r, { rejectNpmStub: true })) return { recovered: true, waitedMs: Date.now() - e, extended: true, installInProgressAtEnd: s };
    if (!s) break;
    s = await Rt(r);
  }
  return { recovered: false, waitedMs: Date.now() - e, extended: true, installInProgressAtEnd: s };
}
async function ve(r, e, n) {
  let s;
  try {
    s = kr();
  } catch {
    s = void 0;
  }
  let h = await Dt(r, e, n, s);
  if (s !== void 0 && h.err) return Dt(r, e, n, void 0);
  return h;
}
async function Dt(r, e, n, s) {
  let h = null, w;
  try {
    let u = mt(r[0], r.slice(1), { detached: true, stdio: ["ignore", "ignore", n ?? "ignore"], windowsHide: true, env: e, ...s !== void 0 && { cwd: s } });
    HI(u.pid), u.once("error", (E) => {
      h = E;
    }), w = { pid: u.pid, exited: new Promise((E) => {
      u.once("exit", (b, T) => E({ code: b, signal: T }));
    }) }, u.unref();
  } catch (u) {
    h = u;
  }
  return await new Promise((u) => setImmediate(u)), h ? { err: h } : { err: null, child: w };
}
async function Wr() {
  let r = process.getuid?.();
  if (r === void 0) return [];
  let e = await new Promise((n) => {
    let s = false, h, w = (E) => {
      if (s) return;
      s = true, clearTimeout(u), n(E);
    }, u = setTimeout(() => {
      h.kill(), w(false);
    }, 5e3);
    u.unref();
    try {
      h = mt("/bin/launchctl", ["asuser", String(r), "/usr/bin/true"], { stdio: "ignore", windowsHide: true });
    } catch {
      w(false);
      return;
    }
    h.once("error", () => w(false)), h.once("exit", (E) => w(E === 0));
  });
  return a("tengu_bg_daemon_macos_aqua_wrap", { has_gui: e }), e ? ["/bin/launchctl", "asuser", String(r)] : [];
}
async function Te(r, e) {
  if (r.length === 0) return e;
  let n = e[0];
  if (!await _e(n, { rejectNpmStub: $e(n) })) return e;
  return [...r, ...e];
}
async function Ot(r, e) {
  let n;
  try {
    n = Hr(Fr(r));
  } catch (w) {
    return { ok: false, reason: d(w) };
  }
  let s = await UP();
  if (!s) return { ok: false, reason: "no-powershell" };
  let h = Buffer.from(n, "utf16le").toString("base64");
  return new Promise((w) => {
    let u = false, E, b = (P) => {
      if (u) return;
      u = true, clearTimeout(A), w(P);
    }, T = (P) => b({ ok: false, reason: v(P) === "ENOENT" ? "enoent" : d(P) }), A = setTimeout(() => {
      E.kill(), b({ ok: false, reason: "timeout" });
    }, 5e3);
    A.unref();
    try {
      E = mt(s, ["-NoProfile", "-NonInteractive", "-EncodedCommand", h], { stdio: "ignore", windowsHide: true, env: e });
    } catch (P) {
      T(P);
      return;
    }
    E.once("error", T), E.once("exit", (P) => {
      if (P === 0) b({ ok: true });
      else b({ ok: false, reason: `Win32_Process.Create rc=${P}`, rc: P ?? void 0 });
    });
  });
}
function Hr(r) {
  return ['$ErrorActionPreference = "Stop"', '$e = [string[]](Get-ChildItem Env: | ForEach-Object { "$($_.Name)=$($_.Value)" })', "$s = New-CimInstance -ClassName Win32_ProcessStartup -ClientOnly -Property @{ EnvironmentVariables = $e; ShowWindow = [uint16]0; CreateFlags = [uint32]8 }", `$r = Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{ CommandLine = ${jr(r)}; CurrentDirectory = $env:USERPROFILE; ProcessStartupInformation = $s }`, "exit $r.ReturnValue"].join(`
`);
}
function Fr(r) {
  return r.map(Vr).join(" ");
}
function Vr(r) {
  if (r.length > 0 && !/[\s"]/.test(r)) return r;
  let e = '"', n = 0;
  while (n < r.length) {
    let s = 0;
    while (r[n] === "\\") s++, n++;
    if (n === r.length) e += "\\".repeat(s * 2);
    else if (r[n] === '"') e += "\\".repeat(s * 2 + 1) + '"', n++;
    else e += "\\".repeat(s) + r[n], n++;
  }
  return e + '"';
}
function jr(r) {
  if (/[\u2018\u2019\u201A\u201B]/.test(r)) throw Error("unsupported Unicode single-quote in command line");
  return `'${r.replaceAll("'", "''")}'`;
}
async function Gr(r) {
  let e = vR(() => process.env.CLAUDE_CODE_OAUTH_TOKEN);
  if (O() === "macos" || !e) return false;
  return !!(await Vn().readAsync(r))?.claudeAiOauth?.refreshToken;
}
function Kr(r) {
  return vR(() => Yr(r));
}
function Yr(r) {
  let e = _tt();
  e.INVOCATION_ID = "";
  let n = process.env[rA];
  if (n) e[rA] = n;
  else delete e[rA];
  let s = new Set(["CLAUDE_CODE_OAUTH_TOKEN", PZ(e), H3e() ? PZ({ CLAUDE_CODE_HOST_AUTH_ENV_VAR: Dyt() }) : void 0].flatMap((u) => u === void 0 ? [] : [u.toUpperCase()]));
  for (let u of Object.keys(e)) {
    if (!s.has(u.toUpperCase())) continue;
    let E = process.env[u];
    if (E === void 0) delete e[u];
    else if (!h4(u, E)) e[u] = E;
  }
  delete e.CLAUDECODE, delete e.CLAUDE_CODE_SESSION_ID, delete e.CLAUDE_CODE_CHILD_SESSION, delete e.CLAUDE_CODE_SESSION_ATTENDED, delete e.CLAUDE_CODE_CHROME_MCP_ORG_DENIED, delete e.CLAUDE_CODE_EVAL_INTERVIEW_SESSION, delete e.CLAUDE_CODE_BRIDGE_SESSION_ID, delete e.CLAUDE_CODE_HOST_WORKTREE, delete e.CLAUDE_CODE_HOST_WORKTREE_FENCE, Wms(e);
  for (let u of Object.keys(e)) {
    let E = u.toUpperCase();
    if (E === "CLAUDE_CODE_PLUGIN_DIRS" || E === "CLAUDE_CODE_ATTRIBUTION_PROJECT" || E === "CLAUDE_CODE_SKIP_PLUGIN_LOCAL_MCP_SERVERS" || E === "CLAUDE_CODE_SKIP_PLUGIN_MCP_BUNDLES") delete e[u];
  }
  nte(e), jPt(e), delete e.CLAUDE_BG_SESSION_PERMISSION_RULES, delete e.CLAUDE_BG_MEMORY_TOGGLED_OFF, delete e.CLAUDE_BG_AUTO_MEMORY_OFF, delete e.CLAUDE_BG_GATEWAY_WITHHELD, QX(e);
  let h = new Set(["CLAUDE_BG_AUTH_SNAPSHOT_PATH", ...ype].map((u) => u.toUpperCase()));
  for (let u of Object.keys(e)) if (h.has(u.toUpperCase())) delete e[u];
  let w = PZ(e);
  if (Ne(e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
    for (let u of [...xH, ...oW, ...g1]) delete e[u];
    if (AKt(e), delete e.ANTHROPIC_CUSTOM_HEADERS, w) delete e[w];
    delete e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST, delete e.CLAUDE_CODE_HOST_AUTH_ENV_VAR, delete e.CLAUDE_CODE_HOST_GATEWAY_LINEAGE;
  }
  if (r.dropShellOAuthToken) {
    for (let u of Object.keys(e)) if (u.toUpperCase() === "CLAUDE_CODE_OAUTH_TOKEN") delete e[u];
  }
  return e;
}
var gt = 12e4, Mt = 5e3, $t = 5e3;
function ht(r) {
  let e = { ...r, childExit: null, childExitAt: null, stderr: null, budgetExtended: false, nextLivenessProbeAt: r.spawnIssuedAt + Mt, siblingHolderSeen: false };
  return r.child?.exited.then((n) => {
    e.childExit = n, e.childExitAt = Date.now();
  }), e;
}
async function Bt(r, e) {
  let n = r.childExit;
  if (!n || r.siblingHolderSeen) return false;
  if (n.code === 0 && n.signal === null) return false;
  if (!$e(e)) return false;
  switch (await Nt(e)) {
    case "missing":
    case "fresh_stub":
      return true;
    case "stale_stub":
      return false;
    case "present":
      return (await Ze(r)).includes(Inn);
  }
}
function Ut(r) {
  if (r.trim().length === 0) return;
  if (r.includes(Inn)) return S("npm_stub");
  if (/current working directory was deleted|uv_cwd|getcwd/i.test(r)) return S("cwd_deleted");
  if (/launchctl|Could not switch to audit session|posix_spawn/.test(r)) return S("launchctl");
  if (/Cannot find module|MODULE_NOT_FOUND|Module not found/.test(r)) return S("module_not_found");
  if (/dyld|Segmentation fault|Illegal instruction|Abort trap|Killed: 9|panic|bun has crashed|^error: /im.test(r)) return S("runtime");
  if (/^\s*(claude|Claude Code|daemon|bg manager)\b/im.test(r)) return S("claude_error");
  return S("other");
}
async function Ze(r, e = false) {
  if (r.stderr === null || e) r.stderr = r.stderrPath ? (await bl(r.stderrPath, 1048576) ?? "").slice(0, 2e3) : "";
  return r.stderr;
}
async function _t(r) {
  let e = r.childExit;
  if (!e || r.siblingHolderSeen) return false;
  if (!r.budgetExtended) {
    if ((await Ze(r)).trim().length === 0) return false;
    if (r.wrapperConfigured && e.code === 0 && e.signal === null) return false;
  }
  let n = await Wt(r, lct);
  if (n !== false) return r.siblingHolderSeen = n === true, false;
  return true;
}
async function Be(r, e, n) {
  let s = e;
  while (true) {
    if (await _t(r)) return false;
    if (Date.now() >= s) return false;
    if ((await Sh({ proto: Oc, op: "ping" })).ok) return true;
    if (n && Date.now() >= r.nextLivenessProbeAt) {
      r.nextLivenessProbeAt = Date.now() + Mt;
      let u = await Wt(r, 1);
      if (!r.budgetExtended && u === true) r.budgetExtended = true, s = Math.max(s, r.spawnIssuedAt + gt);
      else if (r.budgetExtended && u === false && Date.now() >= e) return false;
    }
    await Xr(100);
  }
}
async function Wt(r, e) {
  let n;
  try {
    n = await bv(e, r.storageV5);
  } catch {
    return null;
  }
  return n !== null && !n.bgDisabled && n.startedAt >= r.spawnIssuedAt - $t;
}
async function Ht(r) {
  let e;
  try {
    e = await s9(r.storageV5);
  } catch {
    return { lock_at_deadline: S("unreadable") };
  }
  if (!e) return { lock_at_deadline: S("absent") };
  let n = { holder_age_ms: Math.max(0, Date.now() - e.startedAt), holder_version_skew: e.version !== { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION };
  if (r.child?.pid !== void 0 && e.pid === r.child.pid || e.startedAt >= r.spawnIssuedAt - $t) return { lock_at_deadline: S("self_child"), ...n };
  try {
    process.kill(e.pid, 0);
  } catch (w) {
    if (v(w) !== "EPERM") return { lock_at_deadline: S("other_dead"), ...n };
    return { lock_at_deadline: await SHn(e) ? S("other_eperm_stale") : S("other_eperm"), ...n };
  }
  return { lock_at_deadline: await w7t(e.pid, RL(e), 1).catch(() => false) ? S("other_alive") : S("other_dead"), ...n };
}
import { randomBytes as xn } from "crypto";
import { unlink as qt } from "fs/promises";
import { createServer as Pn } from "net";
import { StringDecoder as kn } from "string_decoder";
function J$e(r, e) {
  let n = r.trimStart();
  return vb(n) !== "prompt" || n.startsWith("/") || e?.tempo === "blocked" && (e.block?.questions.length ?? 0) > 0;
}
function Qat(r) {
  return r.queuedPrompt !== void 0 && J$e(r.queuedPrompt, null) ? void 0 : r.queuedPrompt;
}
function lto(r, e) {
  return r === e || r.endsWith(`

${e}`);
}
async function Bie(r, e, n, s, h) {
  if (J$e(n, null)) return false;
  let w = h ? Qat(e) : void 0;
  return ad(r, { ...e, queuedPrompt: !w ? n : lto(w, n) ? w : `${w}

${n}`, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, s).then(() => true, (u) => (Rl(u), false));
}
var Ft = /\x1b\[(?:<\d+;\d+;\d+[Mm]|M[\s\S]{3}|I|O|\??\d+;\d+(?:;\d+)*R|[?>]\d+(?:;\d+)*c|\?\d+(?:;\d+)*\$y|\?997;[12]n|\?\d+u)|\x1bP[^\x1b]*\x1b\\|\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g;
function Vt(r) {
  if (!r.includes("\x1B")) return false;
  return r.replace(Ft, "").length === 0;
}
var Jr = "\x1B[<", qr = /^(\d+);\d+;\d+[Mm]/, Qr = 96;
function Gt(r) {
  return r.split(Jr).slice(1).some((e) => {
    let n = qr.exec(e)?.[1];
    return n !== void 0 && (Number(n) & Qr) === 0;
  });
}
var Zr = 64, en = /^\x1b(?:$|\[(?:[<?>]?\d*(?:;\d*)*\$?|M[\s\S]{0,2})$|P(?:$|[>01][^\x1b]*\x1b?$)|\](?:$|\d[^\x07\x1b]*\x1b?$))/;
function Xcs() {
  let r = "";
  return (e) => {
    let n = r + e;
    if (r = "", !n.includes("\x1B")) return false;
    let s = n.replace(Ft, "");
    if (s.length === 0) return true;
    if (s.length <= Zr && en.test(s)) return r = s, true;
    return false;
  };
}
import { closeSync as tn, lstatSync as rn, openSync as nn, readSync as on } from "fs";
var Kt = 262144, an = 32768, sn = 200, ln = 4096, dn = 50;
function cn(r) {
  let e = 0, n = 0, s = 0;
  for (let h of r.split(`
`)) {
    let w = 0;
    while (w < h.length && (h[w] === ">" || h[w] === " ")) {
      if (h[w] === ">") s++;
      w++;
    }
    if (/^ {0,3}(?:=+|-+)\s*$/.test(h)) n++;
    for (let u = w; u < h.length; u++) {
      let E = h[u];
      if (E === "[") e++;
      else if (E === "]" && e > 0) e--;
    }
  }
  return e > 256 || n > 64 || s > 512;
}
var un = "\x1B[2m", Xt = "\x1B[0m", fn = 2, pn = "dark", Yt = ne.pointer, mn = "  Session is starting — showing its transcript until it appears. Ctrl+Z to detach";
function gn(r) {
  if (!/[\x00-\x09\x0b-\x1f\x7f-\x9f]/.test(r)) return r;
  return yn(r).replace(/\t/g, "  ").replace(RX, "").replace(/[\v\f\r]/g, "");
}
var Jt = new RegExp(`(${Yqe(";")})`), hn = new RegExp(`^${Yqe(";")}$`), _n = new RegExp(Jt.source, "g");
function wn(r) {
  if (!r.includes("\x1B")) return r;
  let e = "", n = 0;
  while (n < r.length) {
    let s = r.indexOf("\x1B", n);
    if (s < 0) {
      e += r.slice(n);
      break;
    }
    e += r.slice(n, s);
    let h = r[s + 1];
    if (h === "[") {
      let w = s + 2;
      while (w < r.length) {
        let u = r.charCodeAt(w);
        if (u >= 64 && u <= 126) {
          let E = r.slice(s, w + 1);
          if (hn.test(E)) e += E;
          w++;
          break;
        }
        if (u < 32 || u > 63) break;
        w++;
      }
      n = w;
    } else if (h === "]" || h === "P" || h === "X" || h === "^" || h === "_") {
      let w = s + 2, u = r.length;
      while (w < r.length) {
        if (h === "]" && r.charCodeAt(w) === 7) {
          u = w + 1;
          break;
        }
        if (r.charCodeAt(w) === 27 && r[w + 1] === "\\") {
          u = w + 2;
          break;
        }
        w++;
      }
      n = u;
    } else if (h === void 0) n = r.length;
    else n = s + 2;
  }
  return e;
}
var En = 128;
function Sn(r) {
  let e = r.filter((n) => n !== "").join(";");
  return e === "" || e.length > En ? "" : `\x1B[${e}m`;
}
function bn(r, e) {
  if (le(r) <= e) return [r];
  let n = [], s = "", h = 0, w = UZo();
  for (let u of r.split(Jt)) {
    if (u === "") continue;
    if (u.charCodeAt(0) === 27) {
      BZo(u, w), s += u;
      continue;
    }
    for (let { segment: E } of $a().segment(u)) {
      let b = E.length === 1 && E.charCodeAt(0) < 127 ? 1 : le(E);
      if (h > 0 && h + b > e) n.push(w.some((T) => T !== "") ? s + Xt : s), s = Sn(w), h = 0;
      s += E, h += b;
    }
  }
  return n.push(s), n;
}
function wt(r, e) {
  return ku(r, e, { hard: false, trim: false }).split(`
`).flatMap((n) => bn(n, e));
}
function vn(r) {
  let e;
  try {
    e = qo(r);
  } catch {
    return [];
  }
  if (typeof e !== "object" || e === null) return [];
  let n = e;
  if (n.type !== "user" && n.type !== "assistant" || n.isSidechain === true || n.isMeta === true) return [];
  let s = n.message?.content;
  if (typeof s === "string") {
    if (n.type === "user") return zt(s);
    let E = s.trim();
    return E === "" ? [] : [{ role: "assistant", text: E }];
  }
  if (!Array.isArray(s)) return [];
  if (n.type === "user") {
    let E = [];
    for (let b of s) {
      let T = b;
      if (T?.type === "text" && typeof T.text === "string") E.push(T.text);
    }
    return zt(E.join(`
`));
  }
  let h = [], w = [], u = () => {
    let E = w.join(`
`).trim();
    if (w = [], E !== "") h.push({ role: "assistant", text: E });
  };
  for (let E of s) {
    let b = E;
    if (b?.type === "text" && typeof b.text === "string") w.push(b.text);
    else if (b?.type === "tool_use" && typeof b.name === "string") {
      u();
      let T = "";
      if (typeof b.input === "object" && b.input !== null) {
        for (let A of Object.values(b.input)) if (typeof A === "string" && A !== "") {
          T = A;
          break;
        }
      }
      h.push({ role: "tool", text: `${r_e(b.name)}(${T})` });
    } else if (b?.type === "thinking" && typeof b.thinking === "string" && b.thinking.trim() !== "") u(), h.push({ role: "thinking", text: b.thinking });
  }
  return u(), h;
}
function zt(r) {
  let e = rie(r).trim();
  if (e === "") return [];
  let n = /^<bash-input>([\s\S]*?)<\/bash-input>/.exec(e);
  if (n) e = `! ${n[1].trim()}`;
  else if (ges.test(e)) return [];
  return [{ role: "user", text: e }];
}
function An(r, e) {
  return rPt(), wn(eh.lexer(r).map((n) => fN(n, e, { listDepth: 0, orderedListNumber: null, parent: null, highlight: $W(), linkCap: false, windowed: false })).join("")).trim();
}
function Cn(r, e, n, s) {
  let h = Math.max(1, e), w = s?.colorLevel ?? fn, u = s?.theme ?? pn, E = (y) => w > 0 && y !== "" ? un + y + Xt : y, b = (y) => Math.max(1, Math.ceil(le(y) / h)), T = "─".repeat(h), A = ["", T, Yt, T, mn], P = A.reduce((y, Y) => y + b(Y), 0), L = n - P;
  if (L < 1) return null;
  let M = Math.min(Math.ceil((L + 1) / 2), sn), H = r.split(`
`), I = [], z = an;
  e: for (let y = H.length - 1; y >= 0; y--) {
    let Y = vn(H[y]);
    for (let J = Y.length - 1; J >= 0; J--) {
      if (I.length >= M) break e;
      let Z = Y[J];
      if (Z.text.length > z) {
        if (I.length === 0) {
          let oe = Qa(Z.text, z), se = oe.indexOf(`
`);
          if (se >= 0) oe = oe.slice(se + 1);
          if (oe.trim() !== "") I.unshift({ role: Z.role, text: oe });
        }
        break e;
      }
      z -= Z.text.length, I.unshift(Z);
    }
  }
  if (I.length === 0) return null;
  let K = [], te = h >= 4 ? 2 : 0, V = Math.max(1, h - te), Q = he.level;
  he.level = w;
  let ie = performance.now();
  try {
    for (let y of I) {
      if (K.length > 0) K.push({ text: "", dim: false });
      let Y = gn(y.text);
      switch (y.role) {
        case "tool": {
          let J = ft(`${ko} ${Y.replace(/\n/g, " ")}`, h);
          K.push({ text: J, dim: true });
          break;
        }
        case "thinking": {
          let J = Y.replace(/\s+/g, " ").trim();
          for (let [Z, oe] of wt(J, V).entries()) {
            let se = te === 0 || oe === "" ? "" : Z === 0 ? `${xKt} ` : "  ";
            K.push({ text: se + he.italic(oe), dim: true });
          }
          break;
        }
        case "assistant": {
          let J = Y;
          if (Y.length <= ln && performance.now() - ie < dn && !cn(Y)) try {
            J = An(Y, u);
          } catch {
            J = Y;
          }
          let Z = Qn("text", u)(ko);
          for (let [oe, se] of wt(J, V).entries()) {
            let de = te === 0 || se === "" ? "" : oe === 0 ? `${Z} ` : "  ";
            K.push({ text: de + se, dim: false });
          }
          break;
        }
        case "user": {
          let J = Qn("inactive", u)(`${Yt} `), Z = Qn("text", u), oe = Qn("userMessageBackground", u, "background");
          for (let [se, de] of wt(Y, V).entries()) {
            let ae = te === 0 ? "" : se === 0 ? J : "  ";
            K.push({ text: oe(ae + Z(de)), dim: false });
          }
          break;
        }
        default:
          y.role;
      }
    }
  } finally {
    he.level = Q;
  }
  let f = 0, o = [];
  for (let y = K.length - 1; y >= 0; y--) {
    let Y = K[y], J = b(Y.text);
    if (f + J > L) break;
    f += J, o.unshift(Y.dim ? E(Y.text) : Y.text);
  }
  if (o.length === 0) return null;
  let C = n - f - P, x = [];
  for (let y = 0; y < C; y++) x.push("");
  x.push(...o);
  for (let y of A) x.push(E(y));
  let j = x.join(`\r
`);
  if (j.length > 65536 + n * h * 32) j = j.replace(_n, "");
  return hN + j;
}
function Et(r, e, n, s) {
  let h;
  try {
    let w = rn(r);
    if (!w.isFile() || w.size === 0) return null;
    let u = w.size;
    h = nn(r, "r");
    let E = Math.max(0, u - Kt), b = Buffer.alloc(Math.min(u, Kt)), T = on(h, b, 0, b.length, E), A = b.subarray(0, T).toString("utf8");
    if (E > 0) {
      let P = A.indexOf(`
`);
      if (P < 0) return null;
      A = A.slice(P + 1);
    }
    return Cn(A, e, n, s);
  } catch {
    return null;
  } finally {
    if (h !== void 0) try {
      tn(h);
    } catch {
    }
  }
}
var We = 1048576, Rn = 5e3, Dn = 12e3, St = 1e3, Qt = 500, On = 6e3, In = 3e4;
function Nn() {
  let r = k("tengu_bg_attach_stall_ms", Rn);
  if (r === 0) return 0;
  let e = nm().length > 0 ? Dn : 2e3;
  return Math.max(e, r);
}
function Ln(r, e, n, s, h, w) {
  let u = r.dispatch;
  if (r.getPhase().kind !== "running" || e.destroyed || s()) return;
  h.add(u.short);
  let E = lo(_o(u.short), w).catch(() => null);
  r.kill("SIGTERM"), (async () => {
    let b = Date.now() + On;
    while (Date.now() < b && !r.record.outcome) await X(100);
    if (!h.has(u.short)) return;
    let T = await lo(_o(u.short), w).catch(() => null), A = T?.resumeSessionId ?? u.sessionId, P = T?.cwd ?? u.cwd, L = Hk(A2(w)), M = await Jpe(A, P, T?.linkScanPath, void 0, L), H = M.hasMessages;
    if (!H) await s3e(M.path, L);
    if (!h.has(u.short)) return;
    let I = T?.respawnFlags ?? u.respawnFlags, z = (await E)?.tempo === "active";
    await n({ ...u, cwd: P, source: "respawn", reattachEnv: void 0, attachStallRespawns: (u.attachStallRespawns ?? 0) + 1, launch: H ? { mode: "resume", sessionId: A, transcriptPath: M.path, fork: false, flagArgs: z ? hdn(I) : ydn(I) } : A !== u.sessionId ? { mode: "prompt", args: ["--session-id", A, ...I] } : u.launch });
  })().catch((b) => l(b)).finally(() => h.delete(u.short));
}
var bt = 1e4, Mn = 2500;
async function Qcs(r, e, n, s = () => 0, h = () => true, w = () => false, u = new Promise(() => {
}), E) {
  let b = F3();
  await Yun();
  let T = await Cqs();
  await qt(b).catch(() => {
  });
  let A = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), H = He(), K = { handles: r, onDispatch: e, onNudge: n, onShutdown: s, ready: h, whenReady: u, onYield: w, addLease: (f, o) => {
    if (M.has(f)) return;
    M.set(f, o);
    let C = Bn(o?.label);
    a("tengu_daemon_lease", { op: S("open"), label: C }), f.once("close", () => {
      M.delete(f), a("tengu_daemon_lease", { op: S("close"), label: C }), H.emit({ op: "close", client: o });
    }), H.emit({ op: "open", client: o });
  }, listLeases: () => {
    let f = [];
    for (let o of M.values()) if (o) f.push(o);
    return f;
  }, stallRespawnPending: P, settledDispatches: L, controlKey: T, storageV5: E, legacyOpProbe: new rr() }, te = false, V = Pn((f) => {
    if (te) {
      f.destroy();
      return;
    }
    f.on("error", () => f.destroy()), f.setTimeout(3e4, () => f.destroy()), A.add(f), f.once("close", () => A.delete(f));
    let o = o4s(f);
    if (o) {
      a("tengu_daemon_peer_uid_reject", {}), f.once("data", () => D(f, { ok: false, code: "EPEERUID", error: o }));
      return;
    }
    let C = Buffer.alloc(0), x = (j) => {
      C = Buffer.concat([C, j]);
      let y = C.indexOf(10);
      if (y < 0) {
        if (C.length > We) f.off("data", x), D(f, { ok: false, code: "ETOOLARGE", error: `request exceeds ${We >> 20}MB — shorten the prompt or send in parts` });
        return;
      }
      f.off("data", x), f.setTimeout(0);
      let Y = C.subarray(0, y).toString("utf8"), J = C.subarray(y + 1);
      $n(K, f, Y, J).catch((Z) => {
        D(f, { ok: false, error: d(Z), code: "EUNKNOWN" });
      });
    };
    f.on("data", x);
  }), Q = false;
  V.on("error", (f) => {
    if (Q) {
      t(`bg control server bind: ${VC(d(f))}`, { level: "warn" });
      return;
    }
    l(f);
  });
  let ie = Date.now() + bt;
  for (; ; ) try {
    await new Promise((f, o) => {
      let C = (x) => {
        Q = false, o(x);
      };
      Q = true, V.once("error", C), V.listen(b, () => {
        Q = false, V.removeListener("error", C), f();
      });
    });
    break;
  } catch (f) {
    if (v(f) !== "EADDRINUSE" || Date.now() >= ie) throw f;
    V.removeAllListeners("listening"), await X(100);
  }
  return { close: (f) => new Promise((o) => {
    for (let C of A) C.destroy();
    if (f?.skipUnlink) return te = true, V.unref(), void o();
    V.close(() => {
      if (!f?.skipUnlink) qt(b).catch(() => {
      });
      o();
    });
  }), leaseCount: () => M.size, onLeaseChange: H, announceExit: (f) => {
    for (let [o, C] of M) if (C?.label === qJe) o.write(_({ op: "lease", closing: f }) + `
`);
  }, noteSettledDispatch: (f, o, C) => {
    L.set(f, { nonce: o, refusal: C }), setTimeout((x, j, y) => {
      if (x.get(j)?.nonce === y) x.delete(j);
    }, In, L, f, o).unref();
  } };
}
function D(r, e) {
  if (r.destroyed) return;
  r.end(_(e) + `
`);
}
function Ue(r, e) {
  if (r.destroyed) return;
  if (r.writableLength > We) {
    r.destroy();
    return;
  }
  r.write(_(e) + `
`);
}
function Le(r) {
  return !r.record.outcome && !r.isRetiring && !r.isKilling;
}
function Zt(r, e) {
  return r !== void 0 && e === void 0 ? Pe(r, 25) : X(25);
}
async function er(r, e, n, s, h, w, u, E) {
  let b = Date.now() + Math.min(u, 3e4), T = false, A = false, P, L, M = E?.then((H) => {
    L = H;
  }, (H) => {
    l(H), L = "dropped";
  });
  while (Date.now() < b) {
    if (n.destroyed) return;
    let H = L === "dup-live" || L === "dropped" || L === "refused" || L === "closed", I = r.get(h), z = w !== void 0 && I?.record.nonce !== w ? e.get(h) : void 0;
    if (z !== void 0 && z.nonce === w) {
      if (z.refusal !== void 0) return D(n, { ok: false, error: z.refusal, code: "ECWDGONE" });
      return D(n, { ok: true, op: s, short: h, pid: 0, messagingSock: "", via: "cold" });
    }
    if (I) {
      if (w && I.record.nonce !== w) {
        if (A = true, P = Le(I) ? I : void 0, H) break;
        if (!P && !T) T = true, b += Math.min(u, 3e4);
        await Zt(M, L);
        continue;
      }
      return D(n, { ok: true, op: s, short: h, pid: I.record.pid, messagingSock: I.record.messagingSock ?? "", via: I.via });
    }
    if (P = void 0, H) break;
    await Zt(M, L);
  }
  if (A) {
    if (P && r.get(h) === P && Le(P)) return D(n, { ok: true, op: s, short: h, pid: P.record.pid, messagingSock: P.record.messagingSock ?? "", via: P.via });
    return D(n, { ok: false, error: "a previous dispatch with this id is still being cleaned up — retry in a moment", code: "ESTALE" });
  }
  return D(n, { ok: false, error: `${Qf()} didn't acknowledge in time — retry`, code: "ETIMEOUT" });
}
class rr {
  fired = /* @__PURE__ */ new Set();
  markFired(r) {
    if (this.fired.has(r)) return false;
    return this.fired.add(r), true;
  }
}
function tr(r, e) {
  if (!r.markFired(e)) return;
  a("tengu_dead_probe_bg_legacy_op", { op: c(e) });
}
async function $n(r, e, n, s) {
  let { handles: h, onDispatch: w, onNudge: u, onShutdown: E, ready: b, whenReady: T, onYield: A, addLease: P, listLeases: L, stallRespawnPending: M, settledDispatches: H, controlKey: I, storageV5: z, legacyOpProbe: K } = r, te;
  try {
    te = ee(n);
  } catch {
    return D(e, { ok: false, error: "bad json", code: "EUNKNOWN" });
  }
  if (te === null || typeof te !== "object") return D(e, { ok: false, error: "bad json", code: "EUNKNOWN" });
  let V = te.op;
  if (V === "ping") return D(e, { ok: true, op: "ping", version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, proto: Oc, carriedPromptsFormat: jOn });
  if (V === "nudge") {
    let o = await u();
    return D(e, { ok: true, op: "nudge", restarting: o.restarting, upgradePending: o.upgradePending, version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, processWrapper: wG() });
  }
  if (V === "yield") return D(e, { ok: true, op: "yield", yielding: A() });
  if (V === "lease") {
    let o = B2e().safeParse(te.client).data;
    P(e, o ? { ...o, pid: tSt(e) ?? o.pid } : null), e.write(_({ ok: true, op: "lease" }) + `
`);
    return;
  }
  if (V === "leases") return D(e, { ok: true, op: "leases", clients: L() });
  if (V === "shutdown") {
    let o = te.reapWorkers !== false, C = E(o);
    return D(e, { ok: true, op: "shutdown", reaped: C });
  }
  if (!b() && V === "attach") {
    if (await Promise.race([T, X(Mn, void 0, { unref: true })]), e.destroyed) return;
  }
  if (!b()) return D(e, { ok: false, error: `${Qf()} starting (adoption in progress)`, code: "ESTARTING" });
  let Q = te.proto;
  if (typeof Q !== "number" || !Number.isInteger(Q) || Q < rdn || Q > Oc) return a("tengu_bg_proto_mismatch", { client_proto: typeof Q === "number" ? Q : -1, server_proto: Oc }), D(e, { ok: false, error: `proto mismatch (server=${Oc}, client=${Q}) — ${Qf()} and CLI versions differ; restart claude`, code: "EPROTO", serverProto: Oc, serverVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION });
  let ie = AHo().safeParse(te);
  if (!ie.success) return D(e, { ok: false, error: `malformed request: ${ie.error.issues[0]?.message ?? "invalid"}`, code: "EUNKNOWN" });
  let f = ie.data;
  switch (f.op) {
    case "ping":
    case "nudge":
    case "yield":
    case "lease":
    case "leases":
    case "shutdown":
      return;
    case "list":
      return D(e, { ok: true, op: "list", jobs: Array.from(h.values()).map((o) => o.isKilling || o.isRetiring ? { ...o.record, dying: true } : o.record) });
    case "has": {
      let o = h.get(f.short), C = M.has(f.short);
      return D(e, { ok: true, op: "has", alive: o !== void 0 && Le(o) || C, present: o !== void 0 || C, ready: o !== void 0 && !o.isBooting });
    }
    case "await-ack":
      return er(h, H, e, "await-ack", f.short, f.nonce, f.timeoutMs);
    case "dispatch":
      if (!xL(f.auth, I)) return D(e, { ok: false, error: "dispatch rejected: this client didn't present the daemon control key", code: "EAUTH" });
      if (await X(0), e.readableEnded || e.destroyed) {
        a("tengu_bg_dispatch_stale_drop", {});
        return;
      }
      return er(h, H, e, "dispatch", f.d.short, f.d.nonce, f.timeoutMs, w(f.d));
    case "reply": {
      if (!xL(f.auth, I)) return D(e, { ok: false, error: f.auth === void 0 ? "reply rejected: this window didn't present the daemon control key — it is likely running a Claude Code older than the daemon (left open across an update?); restart this window and retry, or stop driving the control socket directly" : "reply rejected: the presented daemon control key doesn't match — retry, and restart the Claude Code daemon if this persists", code: "EAUTH" });
      let o = h.get(f.short);
      if (M.has(f.short) && (!o || !Le(o))) return D(e, { ok: false, error: `worker ${GJe} — restarting it; retry reply`, code: "ERESPAWNING" });
      if (!o || o.isRetiring || o.isKilling || o.record.outcome) return D(e, { ok: false, error: "job not found — it may have already exited", code: "ENOJOB" });
      if (o.isUpgrading) return D(e, { ok: false, error: `job is restarting on the ${UUt}; retry reply`, code: "ERESPAWNING" });
      if (f.nextTurn === true && o.record.cliVersion !== { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION) return D(e, { ok: false, error: "it runs a different Claude Code build", code: "ESKEW" });
      if (!await o.reply(f.text, { nextTurn: f.nextTurn === true })) {
        if ((o.isBooting || o.isSpawnPending && o.isReplyQueueOnly) && !o.isUnverified && !o.record.legacy) {
          let C = "ERESPAWNING";
          if (!o.isBooting && f.nextTurn !== true) {
            let x = _o(f.short);
            if ((J$e(f.text, null) || await DHo(x, z).then((y) => y === "absent" ? o.dispatch.source === "spare" : y !== null && J$e(f.text, y)).catch(() => false)) && !o.isBooting) C = "ENOREPLY";
          }
          return D(e, { ok: false, error: "the session is still starting", code: C });
        }
        return D(e, { ok: false, error: "job isn't accepting replies — it may be in a non-interactive state", code: "ENOREPLY" });
      }
      return D(e, { ok: true, op: "reply" });
    }
    case "kill": {
      if (M.delete(f.short), f.evict) tre((C) => {
        delete C.workers[f.short];
      }, z).catch((C) => l(C));
      let o = h.get(f.short);
      if (!o) return D(e, { ok: false, error: "job not found — it may have already exited", code: "ENOJOB" });
      if (o.dispatch.launch.mode === "exec" && o.record.outcome) return h.delete(f.short), D(e, { ok: true, op: "kill" });
      return o.kill(f.signal ?? "SIGTERM", f.handoff ? "handoff" : "killed"), D(e, { ok: true, op: "kill" });
    }
    case "respawn-stale": {
      tr(K, "respawn_stale");
      let o = h.get(f.short);
      if (!o) return D(e, { ok: false, error: "job not found — it may have already exited", code: "ENOJOB" });
      let C = await o.respawnIfIdleStale();
      return D(e, { ok: true, op: "respawn-stale", ...C });
    }
    case "resize": {
      let o = h.get(f.short);
      if (!o) return D(e, { ok: false, error: "job not found — it may have already exited", code: "ENOJOB" });
      if (f.attachId) {
        let C = o.attachers.get(f.attachId);
        if (!C) return D(e, { ok: true, op: "resize" });
        if (C.cols = f.cols, C.rows = f.rows, C.repaint) return C.repaint(), D(e, { ok: true, op: "resize" });
      }
      return o.resize(f.cols, f.rows), D(e, { ok: true, op: "resize" });
    }
    case "attach": {
      if (f.auth === void 0) t("[bg-attach] legacy client (no control key) — allowed via peerUid", { level: "warn" });
      else if (!xL(f.auth, I)) return D(e, { ok: false, error: "attach rejected: the presented daemon control key doesn't match — retry, and restart the Claude Code daemon if this persists", code: "EAUTH" });
      let o = h.get(f.short);
      if (M.has(f.short) && (!o || !Le(o))) return D(e, { ok: false, error: `worker ${GJe} — restarting it; retry attach`, code: "ERESPAWNING" });
      if (!o || o.isKilling || o.record.outcome && o.dispatch.launch.mode !== "exec") return D(e, { ok: false, error: "job not found — it may have already exited", code: "ENOJOB" });
      if (o.isUnverified) return D(e, { ok: false, error: "worker is live but supervisor could not verify its identity — try restarting the supervisor to re-adopt", code: "EUNVERIFIED" });
      if (o.isRetiring) return D(e, { ok: false, error: "job is retiring; retry attach", code: "ERESPAWNING" });
      if (o.record.legacy) {
        let N = o.dispatch, F = await lo(_o(N.short), z).catch(() => null), me = F?.resumeSessionId ?? N.sessionId, ge = F?.cwd ?? N.cwd, ye = Hk(A2(z)), De = await Jpe(me, ge, F?.linkScanPath, void 0, ye), Me = De.hasMessages;
        if (!Me) await s3e(De.path, ye);
        if (h.get(f.short) !== o || e.destroyed) return D(e, { ok: false, error: "supervisor restarting", code: "ERESPAWNING" });
        if (!o.isKilling) a("tengu_bg_attach_legacy_autorespawn", {}), o.kill("SIGTERM"), w({ ...N, cwd: ge, source: "respawn", reattachEnv: void 0, launch: Me ? { mode: "resume", sessionId: me, transcriptPath: De.path, fork: false, flagArgs: F?.tempo === "active" ? hdn(F?.respawnFlags ?? N.respawnFlags) : ydn(F?.respawnFlags ?? N.respawnFlags) } : me !== N.sessionId ? { mode: "prompt", args: ["--session-id", me, ...F?.respawnFlags ?? N.respawnFlags] } : N.launch }).catch((Ke) => l(Ke));
        return D(e, { ok: false, error: `${odn} job respawning with worker-owned PTY; retry attach`, code: "ERESPAWNING" });
      }
      if (o.isUpgrading) return D(e, { ok: false, error: `job is restarting on the ${UUt}; retry attach`, code: "ERESPAWNING" });
      if (await o.failIfHostExited("attach")) return D(e, { ok: false, error: o.dispatch.launch.mode === "exec" ? VJe : zJe, code: "EHOSTDEAD" });
      if (e.destroyed) return;
      if (M.has(f.short) && (h.get(f.short) !== o || !Le(o))) return D(e, { ok: false, error: `worker ${GJe} — restarting it; retry attach`, code: "ERESPAWNING" });
      if (h.get(f.short) !== o || o.isKilling || o.record.outcome && o.dispatch.launch.mode !== "exec") return D(e, { ok: false, error: "job not found — it may have already exited", code: "ENOJOB" });
      let C = o.liveTranscriptPath !== void 0 ? o.liveTranscriptPath : o.dispatch.launch.mode === "resume" ? o.dispatch.launch.transcriptPath : void 0, x = f.holdingFrame !== true && o.isBooting && C != null ? Et(C, f.cols, f.rows, { colorLevel: f.caps?.colorLevel, theme: f.caps?.systemTheme }) : null;
      P(e, null);
      let y = o.marksCapable ? xn(16).toString("hex") : void 0;
      if (e.write(_({ ok: true, op: "attach", imarkNonce: y, decModes: o.decModeSnapshot(), via: o.via, booting: o.bootingForAttachMetrics, tempo: o.record.tempo, state: o.record.state, cached: x !== null, stale: Boolean(o.record.cliVersion && o.record.cliVersion !== { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION), workerCliVersion: o.record.cliVersion }) + `
`), a("tengu_bg_attach", { tempo: c(o.record.tempo), state: lq(o.record.state), via: c(o.via), attachers: o.attachers.size, stale: Boolean(o.record.cliVersion && o.record.cliVersion !== { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION) }), x !== null) e.write(wT + zw + x);
      let Y = zw + Wpe, J = 6, Z = [], oe = 0, se = "", de = () => {
      }, ae, Ce = 0, Ee = false, ke = Nn(), xe = ke === 0 ? 0 : Math.max(1, Math.ceil((ke - Qt) / St)), Re = (N) => ryt(wT + zw + `
  \x1B[2m${N}\x1B[0m
`), Se, B = false, q = () => {
        if (!B) return;
        if (B = false, typeof o.replayInteractiveMarksTo === "function") o.replayInteractiveMarksTo(f.attachId ?? e);
      }, fe = (N) => {
        if (Z === null) return;
        Se?.();
        let F = Z;
        if (Z = null, clearTimeout(ot), N && !e.destroyed) for (let me of F) e.write(me);
        if (B = true, N && F.length > 0) q();
      }, ot = setTimeout(() => {
        let N = Z !== null && oe === 0, F = N && (f.holdingFrame === true || x !== null);
        if (!F) fe(true);
        if (N && !e.destroyed) {
          if (!F) {
            let ge = o.record.state, ye = ge === "starting" || ge === "resuming" || ge === "adopted" || ge === "crashed" ? "Session is starting — it will appear once ready. Ctrl+Z to detach" : "Waiting for session to redraw… Ctrl+Z to detach";
            e.write(Re(ye));
          }
          let me = Date.now();
          ae = setInterval(() => {
            let ge = Date.now(), ye = ge - me;
            if (me = ge, ye > St * 3) Ce = 0;
            if (Ce++, xe > 0 && Ce >= xe && !o.isKilling && !o.isRetiring && !o.isBooting && o.dispatch.launch.mode !== "exec") {
              clearInterval(ae), ae = void 0, de();
              let Me = o.dispatch.attachStallRespawns ?? 0, Ke = { state: lq(o.record.state), via: c(o.via), attempt: Me };
              if (Me >= 2) {
                if (a("tengu_bg_attach_stall_gave_up", Ke), e.write(Re("Session keeps stalling at startup.") + bde(e4n("ESTALLED", f.caps?.sessionTabs, `Session ${f.short} keeps stalling at startup — check ${_o(f.short)} for logs.`))), !o.isKilling) o.kill("SIGKILL", "failed", "session keeps stalling at startup");
                return;
              }
              if (a("tengu_bg_attach_stall_respawn", Ke), e.write(Re("Session not responding — restarting it…")), Ln(o, e, w, () => Ee, M, z), !e.destroyed) e.write(bde(e4n(syt, f.caps?.sessionTabs, `worker ${GJe}, restarting`)));
              return;
            }
            let De = o.attachers.get(be);
            de(), de = o.resizeForRepaint(De?.cols ?? f.cols, De?.rows ?? f.rows);
          }, St), ae.unref();
        }
      }, Qt), vt = () => {
        if (ae) clearInterval(ae), ae = void 0;
      }, it = o.onStream.subscribe((N) => {
        if (e.destroyed) return;
        if (Ee = true, Z !== null) {
          let F = se + N;
          if (F.includes(wT) || F.includes(Y)) {
            vt();
            let me = N.includes(wT) || N.includes(Y) ? N : F;
            if (de(), fe(false), e.writableLength <= We) e.write(o.decModeSnapshot().map(zW).join("") + me), q();
            else e.destroy();
            return;
          }
          if (Z.push(N), oe += N.length, se = F.slice(-J), oe > 65536) fe(true);
          return;
        }
        if (vt(), e.writableLength > We) {
          e.destroy();
          return;
        }
        e.write(N), q();
      }), at = o.onRepaintDone.subscribe(() => {
        de(), fe(true);
      });
      if (O() === "windows") for (let N of o.attachers.values()) N.kick();
      let be = f.attachId ?? e;
      if (o.attachers.set(be, { cols: f.cols, rows: f.rows, caps: f.caps, imarkNonce: y, deliver: (N) => {
        if (!e.destroyed) e.write(N);
      }, kick: () => {
        if (a("tengu_bg_attach_kick", {}), ae) clearInterval(ae), ae = void 0;
        if (clearTimeout(ot), de(), it(), at(), e.removeAllListeners("data"), !e.destroyed) e.write(bde(e4n("EKICKED", f.caps?.sessionTabs, THo))), e.end();
        o.attachers.delete(be);
      } }), x !== null && C != null) {
        let N = o.attachers.get(be);
        if (N) N.repaint = () => {
          if (e.destroyed) return;
          o.resize(N.cols, N.rows);
          let F = Et(C, N.cols, N.rows, { colorLevel: f.caps?.colorLevel, theme: f.caps?.systemTheme });
          e.write(wT + zw + (F ?? ""));
        }, Se = () => {
          N.repaint = void 0, Se = void 0;
        };
      }
      o.noteActivity(), o.seedFocus(true), o.sendAttacherCaps(f.caps ?? null);
      let Ge;
      if (o.dispatch.launch.mode === "exec") {
        let N = ryt(wT + zw);
        e.write(N);
        for (let F of o.ringSnapshot()) e.write(F);
        if (fe(false), Ge = () => {
          let F = o.attachers.get(be);
          if (e.destroyed || !F) return;
          let me = o.record.outcome === "done" ? "done" : o.record.outcome === "killed" ? "stopped" : "failed", ge = ryt(`\r
\x1B[2m— ${me} · Ctrl+Z to return —\x1B[0m\r
`);
          e.write(ge), F.repaint = () => {
            if (e.destroyed) return;
            e.write(N);
            for (let ye of o.ringSnapshot()) e.write(ye);
            e.write(ge);
          };
        }, o.record.outcome) {
          Ge(), e.once("close", () => {
            clearTimeout(ot), it(), at(), o.attachers.delete(be);
          });
          return;
        }
      }
      de = o.resizeForRepaint(f.cols, f.rows);
      let ur = o.onSettle.subscribe(() => {
        if (Ge && o.record.outcome !== "killed") return Ge();
        e.end();
      }), At = new kn("utf8"), fr = f.caps?.sessionTabs !== void 0, Ct = (N) => {
        let F = At.write(N);
        if (F.length > 0 && (!Vt(F) || fr && Gt(F))) o.lastInputAttacher = be;
        o.write(F);
      };
      if (s.length) Ct(s);
      e.on("data", Ct), e.once("close", () => {
        if (ae) clearInterval(ae);
        if (de(), fe(false), it(), ur(), at(), !o.attachers.delete(be)) return;
        let N = At.end();
        if (N) o.write(N);
        if (o.attachers.size > 0) {
          let F = [...o.attachers.values()].at(-1);
          o.resizeForRepaint(F.cols, F.rows), o.sendAttacherCaps(F.caps ? { ...F.caps, systemTheme: void 0 } : null);
        } else o.seedFocus(false), o.sendAttacherCaps(null);
      });
      return;
    }
    case "ensure-spare":
      return tr(K, "ensure_spare"), D(e, { ok: true, op: "ensure-spare" });
    case "permission-response":
      if (!xL(f.auth, I)) return D(e, { ok: false, error: "permission-response rejected: this client didn't present the daemon control key", code: "EAUTH" });
      return D(e, { ok: true, op: "permission-response" });
    case "subscribe": {
      let o = h.get(f.short);
      if (!o) return D(e, { ok: false, error: "job not found — it may have already exited", code: "ENOJOB" });
      if (P(e, null), Ue(e, { type: "snapshot", record: o.record, streamTail: o.tail(f.tail ?? 200) }), o.record.outcome) {
        Ue(e, { type: "settled", outcome: o.record.outcome }), e.end();
        return;
      }
      let C = [o.onStream.subscribe((x) => Ue(e, { type: "stream", line: x })), o.onState.subscribe((x) => Ue(e, { type: "state", patch: x })), o.onSettle.subscribe((x) => {
        Ue(e, { type: "settled", outcome: x }), e.end();
      })];
      e.on("close", () => {
        for (let x of C) x();
      });
      return;
    }
    default:
      return D(e, { ok: false, error: `unknown op: ${f.op}`, code: "EUNKNOWN" });
  }
}
function Bn(r) {
  if (r === void 0) return;
  return ce(t4n.find((e) => e === r)) ?? S("other");
}
var tq = 45e3;
async function hxt(r) {
  let e = Date.now() + r;
  while (Date.now() < e) {
    if ((await Sh({ proto: Oc, op: "ping" })).ok) return true;
    await Fe(100);
  }
  return false;
}
async function Wfr(r, e) {
  let n = Date.now() + r, s = 0;
  while (true) {
    let h = n - Date.now();
    if (h <= 0) return null;
    if (await hxt(Math.min(h, 1e3))) {
      let w = Date.now();
      if (w >= s) {
        s = w + 1e3;
        let u = await bv(1, e).catch(() => null);
        if (u?.origin === "service") return u;
        if (u?.origin === "foreground") return null;
      }
      await Fe(100);
    }
  }
}
async function Fn(r, e) {
  let n = Date.now(), s = false, h, w = "restarting", u;
  while (Date.now() < n + (s ? 3e4 : 1e4)) {
    let E = await Sh({ proto: Oc, op: "nudge" });
    if (E.ok && E.op === "nudge") {
      if (s = true, h = E.version, !E.restarting) {
        if (await Gn(E.version, r, E.processWrapper, E.upgradePending === true, e)) return "retired";
        let b = _m();
        if (b && !E.processWrapper) return { refuse: b };
        if (!E.processWrapper && wG() !== "" && !await PF()) return { refuse: yt() };
        lr(E.processWrapper);
        let T = E.version !== { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION;
        if (Date.now() - n > 200 || T) a("tengu_bg_skew_nudge", { converged: true, duration_ms: Date.now() - n, daemon_version: fa(E.version), skewed: T });
        return "up";
      }
      w = "restarting", await Fe(100);
      continue;
    }
    if (!E.ok && E.code === "ETIMEOUT") {
      s = true, w = "etimeout", await Fe(100);
      continue;
    }
    if (!E.ok && E.code === "ENOCONN") {
      if (!s) {
        let b = await bv(1, e).catch(() => null);
        if (b?.bgDisabled) return "down";
        if (b) s = true;
      }
      if (u = rw(E.errno), !s) return "down";
      w = "enoconn", await Fe(100);
      continue;
    }
    {
      let b = _m();
      if (b) return { refuse: b };
      if (wG() !== "" && !await PF()) return { refuse: yt() };
    }
    return "up";
  }
  return a("tengu_bg_skew_nudge", { converged: false, restarting: w === "restarting", etimeout: w === "etimeout", enoconn: w === "enoconn", daemon_version: fa(h), ...u && { connect_errno: u } }), "down";
}
async function $5(r = {}, e) {
  if (O() !== "windows" && RUr()) return m("daemon_ensure_running", "uid_collapse"), { ok: false, reason: YFo, causeCode: "uid_collapse" };
  return ir(r, e, false);
}
async function ir(r, e, n) {
  let s = Date.now(), h = await Fn(r.forceTransient ?? false, e);
  if (h === "up") return rt(n), { ok: true };
  if (typeof h === "object") {
    if (r.spawnIntent) return m("daemon_ensure_running", "daemon_ensure_client_wrapper_refused"), m("agent_launcher", "raw_daemon_client_misconfigured"), { ok: false, reason: h.refuse, causeCode: "wrapper" };
    return rt(n), { ok: true };
  }
  let w = Date.now(), u = w - s > 4e4, E = r.standsDownAtExit && h !== "retired", b = await ar(), T = b ? await Bfr() : { execPathStale: false, launcherPrefixDead: false }, A = b && (T.execPathStale || T.launcherPrefixDead);
  if (A) a("tengu_bg_daemon_service_stale_exec", { launcher_dead: T.launcherPrefixDead }), t(T.execPathStale ? "daemon service exec path is stale (binary deleted) — falling back to transient spawn. Run 'claude daemon install' to repair." : "daemon service unit starts through a launcher that was deleted or is no longer executable — falling back to transient spawn. Run 'claude daemon install' to repair.", { level: "warn" });
  let P = false;
  if (b && !A) {
    if (P = true, E && Tn()) return nr(true, s);
    r.onStarting?.();
    let B = await or(e);
    if (B) return m("daemon_ensure_running", B.code), { ok: false, reason: B.reason, causeCode: B.causeCode };
    let q = await Ufr(), fe = await hxt(5e3);
    if (a("tengu_bg_daemon_install", { outcome_ok: fe, via_service: true, fresh_install: false, clock_jump: u, duration_ms: Date.now() - s, platform_darwin: O() === "macos", platform_linux: O() === "linux", platform_windows: O() === "windows" }), fe) return rt(n), { ok: true };
    a("tengu_bg_daemon_service_poll_fallthrough", { sr_ok: q.ok }), t(`daemon service ${Wit} 5s${q.ok ? "" : ` (${q.error})`} — falling back to transient spawn. Run 'claude daemon install' to repair.`, { level: "warn" });
  }
  if (!b && !r.forceTransient && GDr() === "ask" && await dr() && !ue().daemonInstallPromptDismissed) return a("tengu_bg_daemon_cold_start_ask", {}), { ok: false, askInstall: true, causeCode: "ask", reason: "No background daemon is running. Run 'claude daemon install' to set it up as a persistent service." };
  if (!P) {
    let B = _m();
    if (!await PF() && await bv(1, e).catch(() => null)) return m("daemon_ensure_running", "daemon_ensure_client_wrapper_refused"), m("agent_launcher", "zombie_kill_client_misconfigured"), { ok: false, reason: B ?? yt(), causeCode: "wrapper" };
    if (E && Tn()) return nr(false, s);
    r.onStarting?.();
    let q = await or(e);
    if (q) return m("daemon_ensure_running", q.code), { ok: false, reason: q.reason, causeCode: q.causeCode };
  }
  let L = w$(), M = L.lastTransientSpawnAt === null ? null : Date.now() - L.lastTransientSpawnAt;
  L.lastTransientSpawnAt = Date.now();
  let H = _({ label: Yn(), cwd: pe(), ...r.spawnedBy, pid: process.pid }), I = Date.now(), z = ["daemon", "run", "--origin", "transient", "--spawned-by", H], K = () => jfr(z, void 0, { withoutOAuthTokenEnv: r.withoutOAuthTokenEnv }), te = await K(), { err: V, child: Q, recoveredAfterReinstallWait: ie, gaveUpOnNpmInstallInProgress: f, reinstallWaitedMs: o = 0 } = te, C = te.stderrPath;
  if (V) {
    if (C) et(tt(C), { recursive: true, force: true }).catch(() => {
    });
    return a("tengu_bg_daemon_spawn_failed", { errno_enoent: v(V) === "ENOENT", errno_eacces: v(V) === "EACCES", errno: vr(V) ?? S("unknown"), launcher_configured: nm().length > 0 || _m() !== null }), m("daemon_ensure_running", "daemon_ensure_spawn_failed"), { ok: false, reason: f ? `Claude Code is being updated by npm on this machine (still not runnable after ${Math.round(qe / 6e4)} min, ${vr(V) ?? "spawn failed"}) — try again when the update finishes` : `spawn ${Qf()}: ${d(V)}`, causeCode: vr(V) ?? "spawn" };
  }
  let x = ht({ spawnIssuedAt: I + o, child: Q, stderrPath: C, wrapperConfigured: nm().length > 0, storageV5: e }), j = await Be(x, Date.now() + 3e4, false), y = Date.now() - w - o > 6e4;
  if (!j && y) j = await Be(x, Date.now() + 5e3, false);
  if (!j && !y) j = await Be(x, Math.max(Date.now() + (tq - 3e4), x.spawnIssuedAt + tq), true);
  let Y = false, J = 0, Z = false;
  if (!j && !y && await Bt(x, nt())) {
    let B = await Qe(nt());
    if (J += B.waitedMs, a("tengu_bg_daemon_spawn_reinstall_wait", { waited_ms: B.waitedMs, recovered: B.recovered, extended: B.extended, install_in_progress: B.installInProgressAtEnd, after_child_exit: true }), Z = !B.recovered && B.installInProgressAtEnd, B.recovered) {
      let q = await K();
      if (q.err === null) {
        if (Y = true, J = 0, C) et(tt(C), { recursive: true, force: true }).catch(() => {
        });
        C = q.stderrPath, x = ht({ spawnIssuedAt: Date.now(), child: q.child, stderrPath: C, wrapperConfigured: nm().length > 0, storageV5: e }), t(`daemon: ${nt()} was being reinstalled when the first daemon was spawned (it exited at once); restarted it after ${B.waitedMs}ms`), j = await Be(x, x.spawnIssuedAt + tq, true);
      } else if (t(`daemon: respawn after the npm reinstall window failed: ${d(q.err)}`, { level: "warn" }), a("tengu_bg_daemon_spawn_failed", { errno: vr(q.err) ?? S("unknown"), launcher_configured: nm().length > 0 || _m() !== null, after_reinstall_wait: true }), q.stderrPath) et(tt(q.stderrPath), { recursive: true, force: true }).catch(() => {
      });
    }
  }
  let oe = x.budgetExtended ? gt : tq, se = !j && !y && Date.now() - x.spawnIssuedAt - J > oe + 6e4, de = !j && (y || se) && !n && !await _t(x), ae = false, Ce, Ee, ke;
  if (!j) {
    let B = await Ze(x, true);
    if (ke = Ut(B), B.length > 0) {
      ae = true, t(`daemon: transient spawn stderr:
${B}`, { level: "error" }), Ce = [...B.matchAll(/\bE[A-Z]{2,14}\b/g)].find((fe) => !"/\\".includes(B[fe.index - 1] ?? "."))?.[0];
      let q = B.split(/\r?\n/).map((fe) => zr(yn(fe))).find((fe) => fe.length > 0);
      Ee = q && q.length > 200 ? `${re(q, 200)}…` : q;
    }
  }
  if (C) et(tt(C), { recursive: true, force: true }).catch(() => {
  });
  if (a("tengu_bg_daemon_install", { outcome_ok: j, via_service: false, fresh_install: false, clock_jump: y || u || se, duration_ms: Date.now() - s, platform_darwin: O() === "macos", platform_linux: O() === "linux", platform_windows: O() === "windows", had_stderr: ae, child_exited: x.childExit !== null, ...x.childExit?.code !== void 0 && x.childExit.code !== null && { exit_code: x.childExit.code }, ...x.childExit?.signal && { exit_signal: ce(x.childExit.signal) }, ...x.childExitAt !== null && { child_exit_ms: Math.max(0, x.childExitAt - x.spawnIssuedAt) }, ...ke && { stderr_class: ke }, reinstall_respawn: Y, budget_extended: x.budgetExtended, ...de && { clock_jump_retry: S("scheduled") }, ...n && { clock_jump_retry: S("retry") }, ...M !== null && { spawn_gap_ms: M }, ...r.spawnedBy !== void 0 && { spawned_by: ce(t4n.find((B) => B === r.spawnedBy?.label)) ?? S("other") }, ...Ce && { stderr_errno: rw(Ce) }, ...!j && await Ht(x) }), j) {
    if (zn(), ie || Y) p("daemon_ensure_running", "daemon_ensure_spawn_waited_reinstall");
    else rt(n);
    if (nm().length > 0) {
      let B = await Sh({ proto: Oc, op: "nudge" }).catch(() => null);
      lr(B?.ok && B.op === "nudge" ? B.processWrapper : void 0);
    }
    return { ok: true };
  }
  if (de) return t("daemon: the clock jumped during the cold start (machine slept?) and the daemon is still unreachable — retrying the whole start once", { level: "warn" }), ir({ ...r, onStarting: void 0, standsDownAtExit: false }, e, true);
  m("daemon_ensure_running", "daemon_ensure_transient_unreachable");
  let xe = Z ? ` — Claude Code is being updated by npm on this machine (still not runnable after ${Math.round(qe / 6e4)} min); try again when the update finishes` : "", Re = nm()[0];
  if (Re) return a("tengu_bg_daemon_spawn_failed", { launcher_configured: true, failed_stage: S("unknown") }), m("agent_launcher", "daemon_never_reachable"), { ok: false, causeCode: "timeout", reason: `launcher \`${Re}\` ran but Claude Code never started${Ee ? ` — ${Ee}` : ` (nothing on stderr within ${oe / 1e3}s)`}${xe}` };
  let Se = x.siblingHolderSeen ? null : x.childExit;
  if (Se) {
    let B = Se.signal ? `signal ${Se.signal}` : `exit code ${Se.code ?? "?"}`;
    return { ok: false, causeCode: "exited", reason: Ee ? `${Qf()} ${Git} (${B}): ${Ee}${xe}` : `${Qf()} ${Git} (${B}, nothing on stderr) and no other ${Qf()} answered within ${Math.round(Math.min(Date.now() - x.spawnIssuedAt - J, oe) / 1e3)}s${xe}` };
  }
  return { ok: false, causeCode: "timeout", reason: `${Qf()} ${Wit} ${oe / 1e3}s${xe}` };
}
function nr(r, e) {
  return t("daemon: not started, because this process is exiting"), a("tengu_bg_daemon_stood_down_at_exit", { via_service: r, duration_ms: Date.now() - e }), p("daemon_ensure_running", "daemon_ensure_stood_down_at_exit"), { ok: false, stoodDown: true, viaService: r, causeCode: "exiting", reason: "this process is exiting" };
}
function rt(r) {
  if (r) {
    p("daemon_ensure_running", "daemon_ensure_clock_jump_retried");
    return;
  }
  g("daemon_ensure_running");
}
function nt() {
  return Iu().target;
}
function jn(r) {
  if (r.daemonOrigin !== "transient") return false;
  if (r.daemonVersion === r.clientVersion) return false;
  if (r.daemonTarget === r.clientTarget) return false;
  let e = tlt(r.daemonVersion), n = tlt(r.clientVersion);
  if (e !== null && n !== null) {
    if (Zat(r.daemonVersion) !== Zat(r.clientVersion)) return false;
    return n > e;
  }
  if (N9t(r.daemonVersion) || N9t(r.clientVersion)) return false;
  return Ve.valid(r.clientVersion) !== null && Ve.valid(r.daemonVersion) !== null && Ve.gt(r.clientVersion, r.daemonVersion);
}
async function Gn(r, e, n, s, h) {
  if (_m() !== null) return false;
  if (!k("tengu_bg_binary_takeover", true)) return false;
  let w = r !== { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, u = w && !s, E = Kn(n, w);
  if (!u && !E) return false;
  if (!await PF()) return false;
  if (await ar()) return false;
  if (!e && GDr() === "ask" && await dr() && !ue().daemonInstallPromptDismissed) return false;
  let b = await Hn(nt()).catch(() => null);
  if (!b) return false;
  let T = DGe().cmd;
  if (!await _e(T)) {
    let I = DGe({ pinToCurrentBinary: true }).cmd;
    if (I === T || !await _e(I)) return false;
  }
  let A = await bv(1, h).catch(() => null);
  if (!A) return false;
  if (!QIt(A)) return t(`bg: skipping stale-daemon retire — lock pid ${A.pid} has no procStart identity`), false;
  let P = jn({ daemonVersion: A.version, daemonOrigin: A.origin, daemonTarget: A.launchTarget, clientVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, clientTarget: b }), L = u && P, M = E && A.origin === "transient" && !A.processWrapper && (A.version === { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION || s && P);
  if (!L && !M) return false;
  let H = await _9e(A.pid);
  if (H === "timed-out") {
    try {
      process.kill(A.pid, "SIGKILL");
    } catch {
    }
    H = await _9e(A.pid);
  }
  if (H !== "exited") return false;
  if (M) w$().prefixAxis = "took-over";
  return t(L ? `bg: ${Qf()} pid ${A.pid} runs ${A.version}; this binary (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION}) is a newer build — retired the stale ${Qf()} so new sessions use the current binary` : `bg: ${Qf()} pid ${A.pid} predates CLAUDE_CODE_PROCESS_WRAPPER and spawns sessions unwrapped — retired it so the replacement runs through the configured launcher`, { level: "warn" }), a("tengu_bg_daemon_binary_takeover", { daemon_age_ms: Date.now() - A.startedAt, via_prefix: M, via_version: L, daemon_version: fa(A.version) }), true;
}
function Kn(r, e) {
  if (wG() === "" || r) return false;
  let s = w$();
  if (s.prefixAxis === "took-over") {
    if (e) return false;
    if (!s.prefixContractViolationLogged) s.prefixContractViolationLogged = true, t(`bg: a raw ${Qf()} is running again after this session's launcher-driven restart. Two causes look identical from here: a claude session started BEFORE CLAUDE_CODE_PROCESS_WRAPPER was deployed cold-started it (restart those sessions), or the launcher does not pass that variable through in the environment it hands to \`exec\` (launcher contract #3). Sessions dispatched to it run unwrapped either way; \`claude daemon status\` shows the launcher it records.`, { level: "warn" }), a("tengu_bg_launcher_replacement_raw", {});
    return false;
  }
  if (e) return true;
  if (s.prefixAxis === "attempted") return false;
  return s.prefixAxis = "attempted", true;
}
async function or(r) {
  let e = await bv(1, r).catch(() => null);
  if (!e) return null;
  if (e.bgDisabled) return a("tengu_bg_daemon_bg_disabled_skip", { origin_service: e.origin === "service" }), { reason: "the background service on this machine is running without background sessions — its control socket failed to start. Check the cause with 'claude daemon status' (daemon.log), then restart the service (launchctl/systemctl, or reboot).", code: "daemon_ensure_bg_disabled", causeCode: "bg_disabled" };
  if (Date.now() - e.startedAt <= bt + 5e3) return null;
  let n = await Sh({ proto: Oc, op: "ping" }, { timeoutMs: 1e3 }), s = { started_ago_ms: Date.now() - e.startedAt, origin_transient: e.origin === "transient", origin_service: e.origin === "service", version_skew: e.version !== { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION };
  if (n.ok || n.code === "ETIMEOUT") return a("tengu_bg_daemon_zombie_false_positive", { ...s, recheck_etimeout: !n.ok }), null;
  if (!QIt(e)) return t(`bg: supervisor lock pid ${e.pid} alive but identity unverifiable (no procStart) — not signalled`, { level: "warn" }), { reason: `${YUe({ pid: e.pid, outcome: "unverified" })}. If no daemon is running, delete ${c0()}; if pid ${e.pid} is a live process you own, stop it yourself first.`, code: "daemon_ensure_zombie_unverified", causeCode: "zombie" };
  let h = false;
  try {
    h = await Un(F3()).then(() => true, () => false);
  } catch {
  }
  if (t(`bg: supervisor pid ${e.pid} alive but control socket unreachable — signalling restart`, { level: "warn" }), await _9e(e.pid) === "eperm") return { reason: `${Qf()} socket missing; could not restart supervisor (EPERM)`, code: "daemon_ensure_zombie_kill_failed", causeCode: "zombie" };
  return a("tengu_bg_daemon_zombie_restart", { pid: e.pid, ...s, sock_exists: h }), null;
}
async function ar() {
  if (sr() || !await K4e()) return false;
  return Gee().catch(() => false);
}
function sr() {
  return Boolean(process.env.CLAUDE_CONFIG_DIR);
}
async function Zcs() {
  return !sr() && Pt();
}
function Yn() {
  let r = process.argv.slice(2);
  if (r[0] === "agents") return "claude agents";
  if (r.includes("--bg")) return "claude --bg";
  return "claude";
}
async function zn() {
  let r = O();
  if (r !== "linux" && r !== "wsl") return;
  let e = await Wn("/etc/systemd/logind.conf", "utf8").catch(() => "");
  if (!/^\s*KillUserProcesses\s*=\s*yes\b/im.test(e)) return;
  t("logind KillUserProcesses=yes — SSH disconnect will kill the transient daemon and its background jobs. Run `loginctl enable-linger $USER` or `claude daemon install` to keep it alive across logout.", { level: "warn" });
}
function yt() {
  return `${rA}: launcher \`${nm()[0]}\` was deleted or is not executable — restore it (or fix the setting); background sessions are not started unwrapped`;
}
function lr(r) {
  let e = wG();
  if (e === "" || !r) return;
  if (r === e) g("agent_launcher");
  else p("agent_launcher", "served_by_skewed_wrapper");
}
async function dr() {
  return oJe() && await K4e() && !process.env.CLAUDE_CONFIG_DIR && rJe();
}
function Gfr(r) {
  return je.daemon(["host-managed", r]);
}
function D9t(r) {
  return (Ne(r?.CLAUDE_CODE_USE_GATEWAY) ? `gateway
` : "") + (Ne(r?.CLAUDE_CODE_HOST_GATEWAY_LINEAGE) ? `lineage
` : "");
}
function eus(r) {
  let e = new Set(r.split(/\r?\n/));
  return { gateway: e.has("gateway"), lineage: e.has("lineage") };
}
var Xn = { namespace: "daemon", relPath: ["host-managed"] };
async function fPn(r) {
  let e = await r.ensureScope(Xn);
  if (!e.ok) throw cr(Error("host tombstone folder not made", { cause: e.error }), e.error);
}
async function mPn(r, e, n) {
  let s = await r.write(Gfr(e), n, { publishDiscipline: "inPlace" });
  if (!s.ok) throw cr(Error("host tombstone write failed", { cause: s.error }), s.error);
}
async function L9t(r, e) {
  await r.delete(Gfr(e)).catch(() => {
  });
}
function cr(r, e) {
  let n = Zm(e);
  return Object.assign(r, n !== void 0 ? { code: n } : {});
}
export {
  $5,
  Bfr,
  Bie,
  D9t,
  Gee,
  Gfr,
  H9t,
  J$e,
  Jcs,
  K4e,
  L9t,
  M9t,
  Qat,
  Qcs,
  Ufr,
  Wfr,
  Xcs,
  Zcs,
  ato,
  eus,
  fPn,
  gxt,
  hxt,
  jfr,
  lto,
  mPn,
  tq,
  w$
};
