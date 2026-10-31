// linux/fs/chunk-b6c2193e.js — Claude Code 2.1.310（linux）模块 chunk-bh50mq9d.js
import { U } from "../context/not-admin-owned.js";
import { E } from "../telemetry/anthropic-workspace-id.js";
import { X, Pe } from "../shared/chunk-57ff8cc1.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { ie } from "./gitlab-runner-authentication-token.js";
import { O } from "./chunk-ce5d00cd.js";
import { kq, Cxe } from "../shared/environment.js";
import { Zar, it, ct } from "../git/utf8-keep-bom.js";
import { oW, gSe, eee } from "../shared/chunk-a49818fd.js";
import { delimiter as l, join as w } from "path";
function Pi(e, t) {
  if (t in e) return e[t];
  if (O() !== "windows") return;
  let n = Object.keys(e).find((r) => r.toUpperCase() === t.toUpperCase());
  return n === void 0 ? void 0 : e[n];
}
class d {
  #e = false;
  get forcedUnavailable() {
    return this.#e;
  }
  forceUnavailable(e) {
    this.#e = e;
  }
}
var L = new d();
function u() {
  return false;
}
function L6o(e) {
  if (!Number.isInteger(e) || e <= 0) return;
  try {
    return Bun.ant.windowsProcessCreationTime(e) ?? void 0;
  } catch {
    return;
  }
}
async function AYr(e) {
  if (O() !== "linux" && O() !== "wsl") return;
  if (!KV(e)) return;
  try {
    let t = await ie().readFile(`/proc/${e}/stat`, { encoding: "utf8" });
    return gSe(t);
  } catch {
    return;
  }
}
async function sbe(e) {
  return eee(await AYr(e));
}
async function hSn(e) {
  if (O() !== "macos") return sbe(e);
  let { code: t, stdout: n } = await it("ps", ["-o", "stat=", "-p", String(e)], { timeout: 1e3 });
  return t === 0 && n.trim().startsWith("Z");
}
var T = 2147483647;
function KV(e) {
  return Number.isInteger(e) && e > 1 && e <= T;
}
function qm(e) {
  if (!KV(e)) return false;
  try {
    return process.kill(e, 0), false;
  } catch (t) {
    return E(t) === "ESRCH";
  }
}
var g = 16;
async function mqe() {
  let e = O();
  if (e !== "linux" && e !== "wsl") return true;
  let t = ie(), n = await t.readlink("/proc/self").catch(() => null);
  if (n === null || n !== String(process.pid)) return false;
  let r = await t.readdir("/proc").catch(() => null);
  if (!r) return false;
  return r.filter((i) => /^\d+$/.test(i.name)).length >= g;
}
function ARe(e, t) {
  let n = e.filter((r) => Math.abs(r) > 1);
  for (let r of n) {
    try {
      process.kill(r, "SIGTERM");
    } catch {
      continue;
    }
    return setTimeout((o, i, s) => {
      if (!_or(i, s)) return;
      try {
        process.kill(o, "SIGKILL");
      } catch {
      }
    }, 5e3, r, Math.abs(n[0]), t).unref(), true;
  }
  return false;
}
async function ibe(e, t, n = "SIGTERM") {
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
  let n = await abe(e);
  if (n !== void 0) return RRe(t, n) ? "same" : "other";
  try {
    return process.kill(e, 0), "other";
  } catch (r) {
    return E(r) === "ESRCH" ? "gone" : "other";
  }
}
function CRe(e) {
  try {
    let t = ie().readFileSync(`/proc/${e}/stat`, { encoding: "utf8" }), n = oW(t);
    return n && n.length > 0 ? n : void 0;
  } catch {
    return;
  }
}
function N6o(e, t = 12) {
  let n = [], r = e;
  for (let o = 0; o < t; o++) {
    let i = 0;
    try {
      let s = ie().readFileSync(`/proc/${r}/stat`, { encoding: "utf8" }), a = s.lastIndexOf(")"), c = s.slice(a + 2).split(" ");
      i = Number(c[1]);
    } catch {
      break;
    }
    if (!Number.isInteger(i) || i < 1) break;
    if (n.push(i), i === 1) break;
    r = i;
  }
  return n;
}
async function $6o(e, t = 10) {
  return (await yor(e, t)).ancestors;
}
async function yor(e, t = 10) {
  let n = `pid=${String(e)}; for i in $(seq 1 ${t}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ]; then echo FAIL; exit 0; fi; if [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then echo END; exit 0; fi; echo $ppid; pid=$ppid; done`, r = await ct("sh", ["-c", n], { timeout: 3e3 }), o = (r.stdout ?? "").trim().split(`
`).filter(Boolean);
  return { ancestors: o.filter((i) => i !== "END" && i !== "FAIL").map((i) => parseInt(i, 10)).filter((i) => !isNaN(i)), readFailed: r.code !== 0 || o.at(-1) === "FAIL", truncated: r.code === 0 && o.at(-1) !== "END" && o.at(-1) !== "FAIL" };
}
function F6o(e) {
  try {
    let n = `ps -o command= -p ${String(e)}`, r = Zar(n, { timeout: 1e3 });
    return r ? r.trim() : null;
  } catch {
    return null;
  }
}
function gqe(e) {
  try {
    {
      let n = ie().readFileSync(`/proc/${e}/stat`, { encoding: "utf8" });
      return oW(n);
    }
    let t = Zar(`LC_ALL=C TZ=UTC ps -o lstart= -p ${e}`, { timeout: 1e3 });
    return t ? t.trim() : void 0;
  } catch {
    return;
  }
}
function _or(e, t) {
  if (t === void 0) return true;
  return P(t, gqe(e));
}
function RRe(e, t) {
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
async function JE(e, t) {
  if (t === void 0) return true;
  return P(t, await kd(e));
}
async function Ly(e, t) {
  let n = await kd(e, { skipCache: true });
  return n === void 0 ? void 0 : RRe(t, n);
}
class h {
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
var Vue = new h();
class S {
  #e = /* @__PURE__ */ new Map();
  get(e) {
    return this.#e.get(e);
  }
  set(e, t) {
    this.#e.set(e, t);
  }
}
var _ = new W(() => new S());
function que() {
  return Vue.token ?? Vue.set(gqe(process.pid));
}
var y = 1e3;
async function vb() {
  return Vue.token ?? await Pe(kd(process.pid).then((e) => Vue.token ?? Vue.set(e)), y);
}
function T0(e) {
  if (u()) return e.procStart !== void 0 ? void 0 : e.procStartFt;
  return e.procStart;
}
function ese(e) {
  return u() ? { procStart: void 0, procStartFt: e } : { procStart: e, procStartFt: void 0 };
}
var x = 6e4, N = 5e3;
async function kd(e, t) {
  let n = Date.now(), r = _.of(U().host);
  if (t?.env !== void 0) return b(e, t.env);
  if (!t?.skipCache) {
    let a = r.get(e), c = a?.miss ? N : x;
    if (a && n - a.at < c) return a.p;
  }
  let o = b(e), i = { at: n, p: o };
  r.set(e, i);
  let s = await o;
  if (s === void 0 && r.get(e) === i) i.miss = true, i.at = Date.now();
  return s;
}
var m = 250, p = 2500;
async function abe(e) {
  let t = Date.now() + p, n = false, r = await Pe(kd(e, { skipCache: true }).finally(() => {
    n = true;
  }), p);
  if (r !== void 0 || !n) return r;
  let o = m + Math.floor(Math.random() * m), i = t - Date.now() - o;
  if (i <= 0) return;
  return await X(o), Pe(kd(e, { skipCache: true }), i);
}
function I(e) {
  let t = Cxe(Pi(e, "PATH") ?? "").split(l);
  return t.filter((r) => /^\/bin\/*$/.test(r)).join(l);
}
async function b(e, t) {
  let n = t === void 0 ? {} : { env: t, extendEnv: false };
  try {
    {
      let i = await ie().readFile(`/proc/${e}/stat`, { encoding: "utf8" });
      return oW(i);
    }
    let r = t === void 0 ? "ps" : kq("ps", I(t));
    if (r === null) return;
    let o = await ct(r, ["-o", "lstart=", "-p", String(e)], { timeout: 1e3, ...n, env: { ...t ?? process.env, LC_ALL: "C", TZ: "UTC" } });
    return o.code === 0 && o.stdout ? o.stdout.trim() : void 0;
  } catch {
    return;
  }
}
async function hrt(e) {
  try {
    {
      let r = await ie().readFile(`/proc/${e}/stat`, { encoding: "utf8" }), o = Number(oW(r)), i = await ie().readFile("/proc/stat", { encoding: "utf8" }), s = Number(/^btime (\d+)/m.exec(i)?.[1]);
      if (!Number.isFinite(o) || !Number.isFinite(s)) return null;
      return s * 1e3 + o / 100 * 1e3;
    }
    let t = await ct("ps", ["-o", "lstart=", "-p", String(e)], { timeout: 1e3, env: { ...process.env, LC_ALL: "C", TZ: "UTC" } });
    if (t.code !== 0 || !t.stdout?.trim()) return null;
    let n = Date.parse(`${t.stdout.trim()} UTC`);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}
export {
  $6o,
  ARe,
  AYr,
  CRe,
  F6o,
  JE,
  KV,
  L6o,
  Ly,
  N6o,
  Pi,
  RRe,
  T0,
  Vue,
  _or,
  abe,
  ese,
  gqe,
  hSn,
  hrt,
  ibe,
  kd,
  mqe,
  qm,
  que,
  sbe,
  vb,
  yor
};
