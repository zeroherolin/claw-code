// telemetry/not-stopped.spmj.js — Claude Code 2.1.310 模块 chunk-spmjcqdx.js
import { R, v, G } from "./anthropic-workspace-id.36ys.js";
import { U } from "../context/not-admin-owned.ersa.js";
import { X, Pe } from "../shared/chunk-3kevgx4j.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Le } from "../models/claude-3-5-sonnet.21mz.js";
import { st } from "../git/utf8-keep-bom.c49x.js";
import { pSe, rK, Fy, RL, vd } from "../fs/chunk-tzqhxyjb.js";
import { YB } from "./chunk-zbtej1v8.js";
import { je } from "../plugins/chunk-x0a7sawk.js";
import { DM, gW } from "../fs/utf-8.7pve.js";
import { ot } from "../fs/chunk-gzs70jxe.js";
import { Iu } from "../fs/chunk-tcpay5ps.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
async function _9e(e, r = {}) {
  if (!rK(e)) return "eperm";
  try {
    process.kill(e, r.signal ?? "SIGTERM");
  } catch (n) {
    if (v(n) === "EPERM") return "eperm";
    return "exited";
  }
  let o = Date.now() + (r.gracefulMs ?? 2e3);
  while (true) {
    let n = Date.now() >= o;
    try {
      process.kill(e, 0);
    } catch {
      return "exited";
    }
    if (await pSe(e)) return "exited";
    if (n) return "timed-out";
    await X(50);
  }
}
import { lstat as l, readFile as u, rename as f, rm as k, unlink as d } from "fs/promises";
import { uptime as y } from "os";
import { join as b } from "path";
var h = "daemon.lock";
function c0() {
  return b(Le(), h);
}
function S9e() {
  return je.state("daemon-lock");
}
function L(e) {
  return e === "EISDIR" || e === "ENXIO";
}
class g {
  logged = false;
  markLogged() {
    if (this.logged) return false;
    return this.logged = true, true;
  }
}
var D = new W(() => new g());
function S() {
  return D.of(U().host);
}
async function I() {
  let e = await l(c0()).catch(() => {
    return;
  });
  return e !== void 0 && e.isSymbolicLink();
}
async function w(e) {
  let r = c0(), o = await l(r).catch(() => {
    return;
  });
  if (o === void 0 || o.isFile()) return;
  let n = o.isDirectory() ? "directory" : o.isFIFO() ? "fifo" : o.isSocket() ? "socket" : o.isSymbolicLink() ? "symlink" : "other non-regular node";
  if (S().markLogged()) t(`[DaemonLock] ${n} at the lock path (${e}) — removing it as the legacy path does`, { level: "warn" });
  await k(r, { recursive: true, force: true }).catch(() => {
  });
}
var E = 65536;
async function SSs(e, r) {
  if (z() && r !== void 0) {
    let o = () => r.write(S9e(), _(e, null, 2), { precondition: { type: "ifAbsent" }, mode: 438 & ~process.umask() }), n = await o();
    for (let i of [0, 1]) {
      if (n.ok) return true;
      if (n.error.code === "AlreadyExists") return false;
      let a = "telemetryCode" in n.error ? n.error.telemetryCode : void 0;
      if (n.error.code !== "Failed" || !YB(a)) break;
      if (a === "ELOOP") {
        if (await I()) return false;
        break;
      }
      if (i === 1) break;
      await w(a), n = await o();
    }
    if (n.ok) return true;
    throw new R(`[DaemonLock] Failed to acquire daemon lock: ${n.error.code}${"telemetryCode" in n.error && n.error.telemetryCode ? ` (${n.error.telemetryCode})` : ""}`, "[DaemonLock] v5 acquire write failed");
  }
  try {
    return await gW(c0(), _(e, null, 2)), true;
  } catch (o) {
    if (v(o) === "EEXIST") return false;
    throw o;
  }
}
async function bSs(e, r) {
  let o = await s9(r);
  if (!o || o.pid !== e.pid || o.startedAt !== e.startedAt) return;
  await DSr({ ...o, bgDisabled: true }, r);
}
async function s9(e) {
  let r;
  if (e) {
    let n = await e.read([S9e()]);
    if (!n.ok) {
      if (!(n.error.code === "Failed" && (n.error.telemetryCode === "ENXIO" || n.error.telemetryCode === "EFBIG" || n.error.telemetryCode === "ELOOP" || n.error.telemetryCode === "ENAMETOOLONG"))) throw new R(`[DaemonLock] Failed to read daemon lock: ${n.error.code}${"telemetryCode" in n.error && n.error.telemetryCode ? ` (${n.error.telemetryCode})` : ""}`, "[DaemonLock] v5 lock read failed");
      let s = await e.delete(S9e());
      if (!s.ok && s.error.code === "Failed") {
        let m = "telemetryCode" in s.error ? s.error.telemetryCode : void 0;
        if (L(m)) await w(m);
      }
      return null;
    }
    let i = n.value.items[0];
    if (!i.found) return null;
    if (i.totalBytes > E) return await e.delete(S9e()), null;
    r = Buffer.from(i.value).toString("utf8");
    let a = ot(r, false);
    if (a && typeof a === "object") {
      let c = a;
      if (typeof c.pid === "number" && typeof c.version === "string") return a;
    }
    return null;
  }
  try {
    let n = await l(c0());
    if (!n.isFile() || n.size > 65536) return await k(c0(), { recursive: true, force: true }).catch(() => {
    }), null;
    r = await u(c0(), "utf8");
  } catch (n) {
    if (G(n)) return null;
    throw n;
  }
  let o = ot(r, false);
  if (o && typeof o === "object") {
    let n = o;
    if (typeof n.pid === "number" && typeof n.version === "string") return o;
  }
  return null;
}
async function DSr(e, r) {
  if (r) {
    let i = await r.write(S9e(), _(e, null, 2), { mode: 438 & ~process.umask() });
    if (!i.ok) {
      let c = "telemetryCode" in i.error ? i.error.telemetryCode : void 0;
      if (c === "LockContended" || c === "LockSuspect") {
        let s = await s9(r);
        if (s?.pid !== e.pid || s?.startedAt !== e.startedAt) return false;
        i = await r.write(S9e(), _(e, null, 2), { mode: 438 & ~process.umask() });
      }
      if (!i.ok) throw new R(`[DaemonLock] Failed to replace daemon lock: ${i.error.code}${"telemetryCode" in i.error && i.error.telemetryCode ? ` (${i.error.telemetryCode})` : ""}`, "[DaemonLock] v5 replace write failed");
    }
    let a = await s9(r);
    return a?.pid === e.pid && a?.startedAt === e.startedAt;
  }
  let o = await DM(c0(), _(e, null, 2));
  try {
    await f(o, c0());
  } catch (i) {
    let a = v(i);
    if (a === "EEXIST" || a === "EPERM") {
      await d(c0()).catch(() => {
      });
      try {
        await f(o, c0());
      } catch (c) {
        await d(o).catch(() => {
        });
        let s = v(c);
        if (s === "EEXIST" || s === "EPERM") return false;
        throw c;
      }
    } else throw await d(o).catch(() => {
    }), i;
  }
  let n = await s9(r);
  return n?.pid === e.pid && n?.startedAt === e.startedAt;
}
async function wSs(e) {
  if (e) {
    let r = await e.delete(S9e());
    if (!r.ok) throw new R(`[DaemonLock] Failed to remove daemon lock: ${r.error.code}${"telemetryCode" in r.error && r.error.telemetryCode ? ` (${r.error.telemetryCode})` : ""}`, "[DaemonLock] v5 lock delete failed");
    return;
  }
  try {
    await d(c0());
  } catch (r) {
    if (!G(r)) throw r;
  }
}
async function _Hn(e) {
  let r;
  try {
    r = await u(`/proc/${e}/cmdline`, "utf8");
  } catch {
    return true;
  }
  let o = r.split("\0");
  return o[0] === "claude daemon" || o.slice(1, 4).includes("daemon");
}
function p(e) {
  return e !== void 0 && (/(^|\/)claude(\.exe)?$|\/claude-code\/cli\.js$|\/claude\/versions\/[^/\s]+$/.test(e) || e === Iu().target);
}
async function ESs(e) {
  let r = await Pe(u(`/proc/${e}/cmdline`, "utf8").catch(() => {
    return;
  }), 1e3);
  if (r !== void 0) {
    let n = r.split("\0"), i = /(^|\/)(node|bun)$/.test(n[0]) ? 1 : 0;
    return n[0] === "claude daemon" || p(n[i]) && /^daemon\0(run\0|--json-path\0[^\0]+\0--log-file\0[^\0]+\0--origin\0service\0$)/.test(n.slice(i + 1).join("\0"));
  }
  let o = await st("ps", ["-ww", "-o", "args=", "-p", String(e)], { timeout: 1e3, useCwd: false });
  return p(/^(?:(?:\S*\/)?(?:node|bun)\s+)?(\/\S+)\sdaemon\s(?:run(?:\s|$)|--json-path\s\S+\s--log-file\s\S+\s--origin\sservice\s*$)/.exec(o.code === 0 ? o.stdout : "")?.[1]);
}
var lct = 2, LSr = 250;
async function w7t(e, r, o) {
  if (r === void 0) return true;
  for (let n = 0; n < o; n++) {
    if (n > 0) await X(LSr);
    let i = await vd(e, { skipCache: n > 0 });
    if (i !== void 0) return i === r;
  }
  return false;
}
var C = 12e4;
function x(e, r = Date.now(), o = y()) {
  return e.startedAt < r - o * 1e3 - C;
}
async function SHn(e) {
  let r = RL(e);
  if (r !== void 0) {
    let o = await Fy(e.pid, r);
    if (o === true) return null;
    if (o === false) return "pid_recycled";
  }
  return x(e) ? "predates_boot" : null;
}
function QIt(e) {
  return RL(e) !== void 0;
}
function vSs() {
  return `Stop it with \`claude daemon stop --any\` (a graceful, socket-based stop); if nothing is running at that pid, delete ${c0()}`;
}
async function bv(e = 1, r) {
  let o = await s9(r);
  if (!o) return null;
  try {
    process.kill(o.pid, 0);
  } catch {
    return null;
  }
  if (!await _Hn(o.pid)) return null;
  if (!await w7t(o.pid, RL(o), e)) return null;
  return o;
}
async function E7t(e) {
  let r = await bv(1, e).catch(() => null);
  if (!r) return { kind: "none" };
  switch (r.origin) {
    case "service":
      return { kind: "service", lock: r };
    case "foreground":
      return { kind: "foreground", lock: r };
    case "transient":
    case void 0: {
      if (!QIt(r)) return { kind: "not-stopped", pid: r.pid, outcome: "unverified" };
      let o = await _9e(r.pid);
      return o === "exited" ? { kind: "stopped", pid: r.pid } : { kind: "not-stopped", pid: r.pid, outcome: o };
    }
    default:
      return r.origin, { kind: "unknown-origin", lock: r };
  }
}
function YUe(e) {
  switch (e.outcome) {
    case "eperm":
      return `the daemon holding the lock (pid ${e.pid}) is owned by another user and cannot be signalled from this session`;
    case "unverified":
      return `pid ${e.pid} is holding the daemon lock but could not be verified as the daemon, so it was not signalled`;
    case "timed-out":
      return `the daemon holding the lock (pid ${e.pid}) was asked to stop but has not exited yet`;
  }
}
function bHn(e) {
  return `a background daemon with an unrecognized origin (pid ${e}) holds the daemon lock — it may have been started by a newer Claude Code, so it was left untouched`;
}
async function kSs(e, r) {
  let o = await bv(1, r).catch(() => null);
  return !!o && o.version !== e;
}
export {
  DSr,
  E7t,
  ESs,
  LSr,
  QIt,
  S9e,
  SHn,
  SSs,
  YUe,
  _9e,
  _Hn,
  bHn,
  bSs,
  bv,
  c0,
  kSs,
  lct,
  s9,
  vSs,
  w7t,
  wSs
};
