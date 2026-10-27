// fs/chunk-tzqhxyjb.js — Claude Code 2.1.310 模块 chunk-tzqhxyjb.js
import { U } from "../context/not-admin-owned.ersa.js";
import { v } from "../telemetry/anthropic-workspace-id.36ys.js";
import { X, Pe } from "../shared/chunk-3kevgx4j.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { ie } from "./gitlab-runner-authentication-token.d7b0.js";
import { O } from "./chunk-dz0rx1wn.js";
import { HK, Oxe } from "../shared/environment.9a41.js";
import { jFe, st, ct } from "../git/utf8-keep-bom.c49x.js";
import { v5, wbe, lee } from "../shared/chunk-mptvqkyd.js";
import { delimiter as d, join as w } from "path";
function Pi(e, t) {
  if (t in e) return e[t];
  if (O() !== "windows") return;
  let n = Object.keys(e).find((r) => r.toUpperCase() === t.toUpperCase());
  return n === void 0 ? void 0 : e[n];
}
class l {
  #e = false;
  get forcedUnavailable() {
    return this.#e;
  }
  forceUnavailable(e) {
    this.#e = e;
  }
}
var A = new l();
function u() {
  return false;
}
function u9o(e) {
  if (!Number.isInteger(e) || e <= 0) return;
  try {
    return Bun.ant.windowsProcessCreationTime(e) ?? void 0;
  } catch {
    return;
  }
}
async function K3r(e) {
  if (O() !== "linux" && O() !== "wsl") return;
  if (!rK(e)) return;
  try {
    let t = await ie().readFile(`/proc/${e}/stat`, { encoding: "utf8" });
    return wbe(t);
  } catch {
    return;
  }
}
async function pSe(e) {
  return lee(await K3r(e));
}
async function Mbn(e) {
  if (O() !== "macos") return pSe(e);
  let { code: t, stdout: n } = await st("ps", ["-o", "stat=", "-p", String(e)], { timeout: 1e3 });
  return t === 0 && n.trim().startsWith("Z");
}
var g = 2147483647;
function rK(e) {
  return Number.isInteger(e) && e > 1 && e <= g;
}
function qm(e) {
  if (!rK(e)) return false;
  try {
    return process.kill(e, 0), false;
  } catch (t) {
    return v(t) === "ESRCH";
  }
}
var T = 16;
async function EKe() {
  let e = O();
  if (e !== "linux" && e !== "wsl") return true;
  let t = ie(), n = await t.readlink("/proc/self").catch(() => null);
  if (n === null || n !== String(process.pid)) return false;
  let r = await t.readdir("/proc").catch(() => null);
  if (!r) return false;
  return r.filter((i) => /^\d+$/.test(i.name)).length >= T;
}
function ORe(e, t) {
  let n = e.filter((r) => Math.abs(r) > 1);
  for (let r of n) {
    try {
      process.kill(r, "SIGTERM");
    } catch {
      continue;
    }
    return setTimeout((o, i, s) => {
      if (!Lor(i, s)) return;
      try {
        process.kill(o, "SIGKILL");
      } catch {
      }
    }, 5e3, r, Math.abs(n[0]), t).unref(), true;
  }
  return false;
}
async function fSe(e, t, n = "SIGTERM") {
  if (!e || e <= 1 || t === void 0) return false;
  if (await f(e, t) === "other") return false;
  try {
    process.kill(-e, n);
  } catch {
    return false;
  }
  if (n !== "SIGKILL") setTimeout((r, o) => {
    f(r, o).then((i) => {
      if (i === "other") return;
      try {
        process.kill(-r, "SIGKILL");
      } catch {
      }
    });
  }, 5e3, e, t).unref();
  return true;
}
async function f(e, t) {
  let n = await mSe(e);
  if (n !== void 0) return MRe(t, n) ? "same" : "other";
  try {
    return process.kill(e, 0), "other";
  } catch (r) {
    return v(r) === "ESRCH" ? "gone" : "other";
  }
}
function bkt(e) {
  return;
}
function p9o(e, t = 12) {
  return [];
}
async function f9o(e, t = 10) {
  return (await Dor(e, t)).ancestors;
}
async function Dor(e, t = 10) {
  let n = `pid=${String(e)}; for i in $(seq 1 ${t}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ]; then echo FAIL; exit 0; fi; if [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then echo END; exit 0; fi; echo $ppid; pid=$ppid; done`, r = await ct("sh", ["-c", n], { timeout: 3e3 }), o = (r.stdout ?? "").trim().split(`
`).filter(Boolean);
  return { ancestors: o.filter((i) => i !== "END" && i !== "FAIL").map((i) => parseInt(i, 10)).filter((i) => !isNaN(i)), readFailed: r.code !== 0 || o.at(-1) === "FAIL", truncated: r.code === 0 && o.at(-1) !== "END" && o.at(-1) !== "FAIL" };
}
function m9o(e) {
  try {
    let n = `ps -o command= -p ${String(e)}`, r = jFe(n, { timeout: 1e3 });
    return r ? r.trim() : null;
  } catch {
    return null;
  }
}
function vKe(e) {
  try {
    let t = jFe(`LC_ALL=C TZ=UTC ps -o lstart= -p ${e}`, { timeout: 1e3 });
    return t ? t.trim() : void 0;
  } catch {
    return;
  }
}
function Lor(e, t) {
  if (t === void 0) return true;
  return P(t, vKe(e));
}
function MRe(e, t) {
  if (t === e) return true;
  return false;
}
function P(e, t) {
  return t === void 0 || t === e || C(e, t);
}
function C(e, t) {
  if (!u()) return false;
  let n = Number(e), r = Number(t);
  return Number.isFinite(n) && Number.isFinite(r) && n > 3e17 !== r > 3e17;
}
async function Qv(e, t) {
  if (t === void 0) return true;
  return P(t, await vd(e));
}
async function Fy(e, t) {
  let n = await vd(e, { skipCache: true });
  return n === void 0 ? void 0 : MRe(t, n);
}
class S {
  #e = void 0;
  get token() {
    return this.#e;
  }
  set(e) {
    return this.#e = e, e;
  }
  reset() {
    this.#e = void 0;
  }
}
var epe = new S();
class h {
  #e = /* @__PURE__ */ new Map();
  get(e) {
    return this.#e.get(e);
  }
  set(e, t) {
    this.#e.set(e, t);
  }
}
var _ = new W(() => new h());
function tpe() {
  return epe.token ?? epe.set(vKe(process.pid));
}
var y = 1e3;
async function vS() {
  return epe.token ?? await Pe(vd(process.pid).then((e) => epe.token ?? epe.set(e)), y);
}
function RL(e) {
  if (u()) return e.procStart !== void 0 ? void 0 : e.procStartFt;
  return e.procStart;
}
function ise(e) {
  return u() ? { procStart: void 0, procStartFt: e } : { procStart: e, procStartFt: void 0 };
}
var x = 6e4, I = 5e3;
async function vd(e, t) {
  let n = Date.now(), r = _.of(U().host);
  if (t?.env !== void 0) return b(e, t.env);
  if (!t?.skipCache) {
    let a = r.get(e), c = a?.miss ? I : x;
    if (a && n - a.at < c) return a.p;
  }
  let o = b(e), i = { at: n, p: o };
  r.set(e, i);
  let s = await o;
  if (s === void 0 && r.get(e) === i) i.miss = true, i.at = Date.now();
  return s;
}
var m = 250, p = 2500;
async function mSe(e) {
  let t = Date.now() + p, n = false, r = await Pe(vd(e, { skipCache: true }).finally(() => {
    n = true;
  }), p);
  if (r !== void 0 || !n) return r;
  let o = m + Math.floor(Math.random() * m), i = t - Date.now() - o;
  if (i <= 0) return;
  return await X(o), Pe(vd(e, { skipCache: true }), i);
}
function N(e) {
  let t = Oxe(Pi(e, "PATH") ?? "").split(d);
  return t.filter((r) => /^\/bin\/*$/.test(r)).join(d);
}
async function b(e, t) {
  let n = t === void 0 ? {} : { env: t, extendEnv: false };
  try {
    let r = t === void 0 ? "ps" : HK("ps", N(t));
    if (r === null) return;
    let o = await ct(r, ["-o", "lstart=", "-p", String(e)], { timeout: 1e3, ...n, env: { ...t ?? process.env, LC_ALL: "C", TZ: "UTC" } });
    return o.code === 0 && o.stdout ? o.stdout.trim() : void 0;
  } catch {
    return;
  }
}
async function vrt(e) {
  try {
    let t = await ct("ps", ["-o", "lstart=", "-p", String(e)], { timeout: 1e3, env: { ...process.env, LC_ALL: "C", TZ: "UTC" } });
    if (t.code !== 0 || !t.stdout?.trim()) return null;
    let n = Date.parse(`${t.stdout.trim()} UTC`);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}
export {
  Dor,
  EKe,
  Fy,
  K3r,
  Lor,
  MRe,
  Mbn,
  ORe,
  Pi,
  Qv,
  RL,
  bkt,
  epe,
  f9o,
  fSe,
  ise,
  m9o,
  mSe,
  p9o,
  pSe,
  qm,
  rK,
  tpe,
  u9o,
  vKe,
  vS,
  vd,
  vrt
};
