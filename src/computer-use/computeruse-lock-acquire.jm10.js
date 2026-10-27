// computer-use/computeruse-lock-acquire.jm10.js — Claude Code 2.1.310 模块 chunk-jm10kygp.js
import { V, J } from "../context/not-admin-owned.ersa.js";
import { R, v } from "../telemetry/anthropic-workspace-id.36ys.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { _t, _, ee, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Le } from "../models/claude-3-5-sonnet.21mz.js";
import { hn } from "../fs/async-hooks.2k4e.js";
import { YB } from "../telemetry/chunk-zbtej1v8.js";
import { je } from "../plugins/chunk-x0a7sawk.js";
import { o_ } from "../shared/chunk-4yx6r993.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
import { lstat as C, readFile as L, unlink as a, writeFile as I } from "fs/promises";
import { join as T } from "path";
var q = "computer-use.lock", l = { kind: "acquired", fresh: true }, f = { kind: "acquired", fresh: false };
function h() {
  if (J()) throw Error("Computer use is not available in a session without a disk.");
}
function w(e) {
  if (typeof e !== "object" || e === null) return false;
  return "sessionId" in e && typeof e.sessionId === "string" && "pid" in e && typeof e.pid === "number";
}
function i() {
  return T(Le(), q);
}
function s() {
  return je.state("computer-use-lock");
}
async function u(e) {
  if (e) {
    let r = await e.read([s()]);
    if (!r.ok) return;
    let o = r.value.items[0];
    if (!o.found) return;
    try {
      let n = ee(Buffer.from(o.value).toString("utf8"));
      return w(n) ? n : void 0;
    } catch {
      return;
    }
  }
  try {
    let r = await L(i(), "utf8"), o = ee(r);
    return w(o) ? o : void 0;
  } catch {
    return;
  }
}
function b(e) {
  try {
    return process.kill(e, 0), true;
  } catch {
    return false;
  }
}
async function S() {
  try {
    return !(await C(i())).isFile();
  } catch (e) {
    return v(e) === "ENOENT";
  }
}
async function k(e, r) {
  if (z() && r !== void 0) {
    let o = await r.write(s(), _(e), { precondition: { type: "ifAbsent" }, mode: 438 & ~process.umask() });
    if (o.ok) return true;
    if (o.error.code === "AlreadyExists" || o.error.code === "Failed" && YB("telemetryCode" in o.error ? o.error.telemetryCode : void 0) && await S()) return false;
    throw new R(`failed to create computer-use lock: ${o.error.code}`, "computer-use lock v5 create failed");
  }
  try {
    return await I(i(), _(e), { flag: "wx" }), true;
  } catch (o) {
    if (v(o) === "EEXIST") return false;
    throw o;
  }
}
function y(e) {
  let r = o_();
  r.unregisterLockCleanup?.(), r.unregisterLockCleanup = _t(async () => {
    await E(e);
  });
}
async function aRs(e) {
  h();
  let r = await u(e);
  if (!r) return { kind: "free" };
  if (c()) return { kind: "held_by_self" };
  if (r.sessionId === V()) return { kind: "held_by_self" };
  if (b(r.pid)) return { kind: "blocked", by: r.sessionId };
  if (t(`Recovering stale computer-use lock from session ${r.sessionId} (PID ${r.pid})`), e) await e.delete(s());
  else await a(i()).catch(() => {
  });
  return { kind: "free" };
}
function c() {
  return o_().unregisterLockCleanup !== void 0;
}
async function lRs(e) {
  h();
  let r = V(), o = { sessionId: r, pid: process.pid, acquiredAt: Date.now() };
  if (!e) await hn().mkdir(Le());
  if (e && c()) {
    if (await u(e) && c()) return g("computeruse_lock_acquire"), f;
  }
  if (await k(o, e)) return y(e), g("computeruse_lock_acquire"), l;
  let n = await u(e);
  if (!n) {
    if (e) await e.delete(s());
    else await a(i()).catch(() => {
    });
    if (await k(o, e)) return y(e), p("computeruse_lock_acquire", "stale_recovered"), l;
    return m("computeruse_lock_acquire", "lock_held"), { kind: "blocked", by: (await u(e))?.sessionId ?? "unknown" };
  }
  if (c()) return g("computeruse_lock_acquire"), f;
  if (n.sessionId === r) return g("computeruse_lock_acquire"), f;
  if (b(n.pid)) return m("computeruse_lock_acquire", "lock_held"), { kind: "blocked", by: n.sessionId };
  if (t(`Recovering stale computer-use lock from session ${n.sessionId} (PID ${n.pid})`), e) await e.delete(s());
  else await a(i()).catch(() => {
  });
  if (await k(o, e)) return y(e), p("computeruse_lock_acquire", "stale_recovered"), l;
  return m("computeruse_lock_acquire", "lock_held"), { kind: "blocked", by: (await u(e))?.sessionId ?? "unknown" };
}
async function E(e) {
  let r = c(), o = o_();
  if (o.unregisterLockCleanup?.(), o.unregisterLockCleanup = void 0, J()) return false;
  let n = await u(e);
  if (!n || !r && n.sessionId !== V()) return false;
  if (e) {
    let d = await e.delete(s());
    if (d.ok && d.value.existed) return t("Released computer-use lock"), true;
    return false;
  }
  try {
    return await a(i()), t("Released computer-use lock"), true;
  } catch {
    return false;
  }
}
function rUn() {
  return o_().activeThisTurn;
}
function dRs() {
  if (o_().activeThisTurn) return false;
  return o_().activeThisTurn = true, true;
}
function cRs() {
  o_().activeThisTurn = false;
}
export {
  aRs,
  cRs,
  dRs,
  lRs,
  rUn
};
