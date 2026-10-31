// linux/telemetry/bg-attach-outcome.js — Claude Code 2.1.310（linux）模块 chunk-t2adf9g4.js
import { __asset_src } from "../../runtime/assets.js";
import { b, c, ce } from "../agents/third-party.js";
import { d, E, tw, G } from "./anthropic-workspace-id.js";
import { ke } from "../context/not-admin-owned.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { In, Yn, ml, Qi, gl } from "../fs/node-modules.js";
import { _, te, Gy, CB, ie, Ms, t } from "../fs/gitlab-runner-authentication-token.js";
import { I, Ze, zr } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { fe } from "../shared/async-hooks.5238.js";
import { i } from "../shared/environment.js";
import { _n, Rs } from "../shared/chunk-8eee6836.js";
import { it, ct } from "../git/utf8-keep-bom.js";
import { a } from "./chunk-9097a12b.js";
import { g, m, f } from "./chunk-9d6962d2.js";
import { Ly, vb, kd } from "../fs/chunk-b6c2193e.js";
import { vq, Os, Dn } from "../fs/utf-8.8f8e.js";
import { We } from "../plugins/chunk-0a4c51cf.js";
import { yF, bcs, WFe, Vat, Mie, x6, vcs, Rpr, E3t } from "./bg-daemon-spawn-reinstall-wait.js";
import { WT, CHe, E3n, iye, ZTe, GT, RY } from "../fs/attach-journal.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { bl } from "../fs/reply-across-default-dirs.js";
import { q$, Gw, _A, Dse } from "../shared/chunk-d4196a83.js";
import { Oc, NP, Sht, Dne, zqn, EOo, vht, TOo, PFt, IFt, MFt, iGe, tQe, DFt, nQe, HFt, rQe, LFt, JN, Hne, Yqn, $an, NL, _o, ad, Rl, Dp, lo, Wan, dx, jC, Wa, RE, xht } from "./bg-roster-parse-failed.js";
import { he } from "../terminal/xterm-ghostty.js";
import { Rm, _q, hr, XEn, It } from "../git/utf-8.js";
import { Y$ } from "../fs/utf-8.aa9a.js";
import { gd } from "../terminal/chunk-3ca478a4.js";
import { An, ff } from "../mcp/allowed-warning.js";
import { Qp, dhe, dTe } from "./fleet-past-sessions.js";
import { e8, kqn, bFt } from "../terminal/wl-copy.js";
import { uro, ffs, qlt, uPt, fPt, eae, OIn } from "../terminal/aria-preserve-whitespace.js";
import { uw } from "../terminal/no-hyperlinks.js";
import { LW, z6, Xlt, uN, fN, FIn } from "../shared/chunk-10142731.js";
import { bh } from "./bg-cloud-lease.js";
import { Plt } from "./dead-probe-adopt-ticks-token.js";
import { T3t, U5e } from "../fs/pty-pids.js";
import { sg, Xu } from "../git/needs-reply.js";
import { Vzn, Eon, KXe, vke, zje, qXe, Aon, BIr, Xzn, Jzn, xle, Con, jIr, fLs } from "../core/conversation-engine.js";
import { lfn, _re } from "./harbor-kite-pacing-off.js";
import { tro, zlt, cro } from "../terminal/ink-renderer.js";
import { Lv } from "../terminal/chunk-8f019bac.js";
import { Qq, WPt } from "../shared/chunk-32946c5f.js";
import { _Ts } from "../shared/chunk-c76f3544.js";
import { sp } from "../git/not-link.js";
import { Xa } from "../fs/daemon-worker.js";
import { ge, bn, lr, Tt } from "../vendor/zod/invalid-return-type.js";
import { Wh } from "../shared/chunk-65fb1c9c.js";
import { et } from "../shared/chunk-061dbb8e.js";
import { _e } from "../shared/chunk-86ecf3aa.js";
import { z } from "../shared/chunk-be29de51.js";
import { lstat as rt, mkdir as Jn, readdir as Hn, rename as Xt, unlink as nt } from "fs/promises";
import { join as pe } from "path";
var Zt = 9e5, wt = 864e5;
function $e(e, n) {
  return n - e >= wt || e > n + 6e4;
}
var Qt = /^[A-Za-z0-9-]{1,64}$/;
function at(e) {
  return pe(iye(), `${e}.json`);
}
var ot = 8192;
function Ue(e) {
  return We.daemon([E3n, e]);
}
function yt(e) {
  return Ue(`${e}.json`);
}
var en = Wh();
function st(e, n) {
  return en.run("g:" + e, n).catch(() => {
  });
}
async function $5e(e, n, o) {
  if (!Qt.test(e)) return;
  let r = { gestureId: e, surface: n, startedAtEpochMs: Date.now(), attempt: 0 };
  yF().ownedBeacons.set(e, r), await st(e, async () => {
    if (r.pid = process.pid, r.procStart = await vb(), o) {
      if (!await kt(o, e, r, true)) yF().ownedBeacons.delete(e);
      return;
    }
    if (await Jn(iye(), { recursive: true, mode: 448 }), !await Ee()) {
      yF().ownedBeacons.delete(e);
      return;
    }
    if (yF().ownedBeacons.get(e) !== r) return;
    await Dn(at(e), _(r), 384);
  }), await Vn(o);
}
async function kt(e, n, o, r = false) {
  if (!await Ee(r)) return false;
  if (yF().ownedBeacons.get(n) === o) await e.write(yt(n), _(o));
  return true;
}
function tn(e, n, o) {
  let r = yF().ownedBeacons.get(e);
  if (!r || !Number.isInteger(n) || n <= (r.attempt ?? 0)) return;
  r.attempt = n, st(e, async () => {
    if (r.procStart ??= await vb(), o) {
      await kt(o, e, r);
      return;
    }
    if (!await Ee()) return;
    if (yF().ownedBeacons.get(e) !== r) return;
    await Dn(at(e), _(r), 384);
  });
}
function oxt(e, n, o) {
  let r = yF().ownedBeacons.get(e);
  if (!r) return;
  if (n.marksExpected !== void 0) r.marksExpected = r.marksExpected === true || n.marksExpected;
  if (n.daemonBooted !== void 0) r.daemonBooted = r.daemonBooted === true || n.daemonBooted;
  if (n.interactiveReached) r.interactiveReached = true;
  if (n.attachMs !== void 0) r.attachMs ??= n.attachMs;
  if (n.msgsLoaded !== void 0) r.msgsLoaded ??= n.msgsLoaded;
  if (n.msgsInJsonl !== void 0) r.msgsInJsonl ??= n.msgsInJsonl;
  if (n.msgsRenderedAtFirstPaint !== void 0) r.msgsRenderedAtFirstPaint ??= n.msgsRenderedAtFirstPaint;
  if (n.attachCold !== void 0 && r.interactiveReached !== true) r.attachCold = n.attachCold;
  if (n.via !== void 0 && r.interactiveReached !== true) r.via = n.via;
  st(e, async () => {
    if (r.procStart ??= await vb(), o) {
      await kt(o, e, r);
      return;
    }
    if (!await Ee()) return;
    if (yF().ownedBeacons.get(e) !== r) return;
    await Dn(at(e), _(r), 384);
  });
}
async function FB(e, n) {
  if (!Qt.test(e)) return;
  yF().ownedBeacons.delete(e), await st(e, async () => {
    if (n) {
      if (!await Ee()) return;
      let r = false;
      for (let u = 0; ; u++) {
        let s = await n.delete(yt(e));
        if (s.ok) return;
        let h = "telemetryCode" in s.error ? s.error.telemetryCode : void 0;
        if (r = h !== void 0 && vq.has(h), r && O() === "windows" && u < zt - 1) {
          await X(Yt);
          continue;
        }
        break;
      }
      if (!r) return;
      await n.write(yt(e), "{}");
      return;
    }
    let o = at(e);
    if (!await Ee()) return;
    for (let r = 0; ; r++) try {
      await nt(o);
      return;
    } catch (u) {
      let s = E(u);
      if (s === "ENOENT") return;
      if (O() === "windows" && s !== void 0 && vq.has(s) && r < zt - 1) {
        await X(Yt);
        continue;
      }
      break;
    }
    await Xt(o, `${o}.${process.pid}.cleared`).catch(() => {
    });
  });
}
var zt = 4, Yt = 50;
async function Ee(e = false) {
  try {
    return (await rt(iye())).isDirectory();
  } catch (n) {
    return e && E(n) === "ENOENT";
  }
}
async function Gn(e) {
  try {
    let n = await bl(pe(iye(), e), ot);
    if (n === null) return null;
    return nn(n);
  } catch {
    return null;
  }
}
async function Kn(e, n) {
  let o = Ue(n), r = await e.statMeta(o);
  if (!r.ok || r.value.size > ot) return null;
  let u = await e.read([o]);
  if (!u.ok) return null;
  let s = u.value.items[0];
  if (!s.found || s.totalBytes > ot) return null;
  let h = nn(Buffer.from(s.value).toString("utf8"));
  return h === null ? null : { entry: h, version: s.version, mtimeMs: s.mtimeMs };
}
function nn(e) {
  try {
    let n = te(e);
    return !!n && typeof n === "object" && typeof n.gestureId === "string" && typeof n.startedAtEpochMs === "number" && Number.isFinite(n.startedAtEpochMs) && n.startedAtEpochMs <= Date.now() + 6e4 ? n : null;
  } catch {
    return null;
  }
}
async function rn(e) {
  if (typeof e.pid !== "number" || !Number.isInteger(e.pid) || e.pid <= 0) return false;
  if (!Xa(e.pid)) return true;
  if (e.procStart === void 0) return false;
  let n = await kd(e.pid);
  return n !== void 0 && n !== e.procStart;
}
async function qn(e, n) {
  try {
    let o = await rt(pe(iye(), e));
    return $e(o.mtimeMs, n);
  } catch {
    return false;
  }
}
function Vn(e) {
  return en.run("reconcile", () => zn(e));
}
async function zn(e) {
  if (e) return Xn(e);
  if (!await Ee()) return [];
  let n;
  try {
    n = await Hn(iye());
  } catch {
    return [];
  }
  let o = Date.now(), r = [];
  for (let u of n) {
    if (!u.endsWith(".json")) {
      try {
        let k = await rt(pe(iye(), u));
        if ($e(k.mtimeMs, o)) await nt(pe(iye(), u));
      } catch {
      }
      continue;
    }
    let s = await Gn(u);
    if (s === null) {
      try {
        let k = await rt(pe(iye(), u));
        if ($e(k.mtimeMs, o)) await nt(pe(iye(), u));
      } catch {
      }
      continue;
    }
    let h = o - s.startedAtEpochMs;
    if (!(typeof s.pid === "number" && Number.isInteger(s.pid) && s.pid > 0 ? h >= Zt && (await rn(s) || s.procStart === void 0 && await qn(u, o)) : h >= wt)) {
      r.push(s);
      continue;
    }
    let T = pe(iye(), `${u}.${process.pid}.claimed`);
    try {
      await Xt(pe(iye(), u), T);
    } catch {
      continue;
    }
    await nt(T).catch(() => {
    }), on(s);
  }
  return r;
}
function on(e) {
  let n = e.interactiveReached === true, o = !n && e.marksExpected === false, r = n && typeof e.attachMs === "number" && Number.isFinite(e.attachMs) && e.attachMs >= 0 && e.attachMs < 864e5 ? Math.round(e.attachMs) : void 0;
  a("tengu_bg_attach_outcome", { outcome: c(n || o ? "detached" : "error"), got_ack: n || typeof e.marksExpected === "boolean", got_first_frame: n ? true : o ? void 0 : false, synthetic: true, apc_detach: false, timed_out: n || o ? void 0 : true, journal_recovered: true, attach_ms: r, first_frame_kind: ce(n ? "real" : void 0), marks_expected: n ? true : typeof e.marksExpected === "boolean" ? e.marksExpected : void 0, attempt: typeof e.attempt === "number" && Number.isInteger(e.attempt) && e.attempt >= 0 && e.attempt < 1e6 ? e.attempt + 1 : 0, gesture_id: _e(e.gestureId), surface: ce(e.surface === "fleet" || e.surface === "bg_cli" ? e.surface : void 0), daemon_booted: typeof e.daemonBooted === "boolean" ? e.daemonBooted : void 0, attach_cold: typeof e.attachCold === "boolean" ? e.attachCold : void 0, via: ce(WPt(e.via)), msgs_loaded: n ? vht(e.msgsLoaded) : void 0, msgs_in_jsonl: n ? vht(e.msgsInJsonl) : void 0, msgs_rendered_at_first_paint: n ? vht(e.msgsRenderedAtFirstPaint) : void 0 });
}
async function Xn(e) {
  if (!await Ee()) return [];
  let n = [], o;
  do {
    let s = await e.listEntries({ namespace: "daemon", relPath: [E3n] }, o === void 0 ? void 0 : { cursor: o });
    if (!s.ok) return [];
    for (let h of s.value.items) {
      if (h.kind !== "key" || h.key.namespace !== "daemon" || h.key.relPath.length !== 2 || h.key.relPath[0] !== E3n) continue;
      let A = h.key.relPath[1];
      if (A !== void 0) n.push({ file: A, size: h.size, mtimeMs: h.mtimeMs });
    }
    o = s.value.cursor;
  } while (o !== void 0);
  let r = Date.now(), u = [];
  for (let { file: s, size: h, mtimeMs: A } of n) {
    let w = A !== void 0 && $e(A, r);
    if (!s.endsWith(".json")) {
      if (w) await e.delete(Ue(s));
      continue;
    }
    let T = h !== void 0 && h > ot ? null : await Kn(e, s);
    if (T === null) {
      if (w) await e.delete(Ue(s));
      continue;
    }
    let k = T.entry, v = r - k.startedAtEpochMs;
    if (!(typeof k.pid === "number" && Number.isInteger(k.pid) && k.pid > 0 ? v >= Zt && (await rn(k) || k.procStart === void 0 && $e(T.mtimeMs, r)) : v >= wt)) {
      u.push(k);
      continue;
    }
    let j = await e.delete(Ue(s), { precondition: { type: "ifMatch", version: T.version } });
    if (!j.ok || !j.value.existed) continue;
    on(k);
  }
  return u;
}
import { randomUUID as Zn } from "crypto";
import { connect as Qn } from "net";
var er = 1e4, Kxn = "ENORESPONSE", sxt = "Session isn't responding", an = { ENOJOB: "enojob", ETIMEOUT: "etimeout", ECWDGONE: "ecwdgone", EUNKNOWN: "eunknown", ENOREPLY: "enoreply", ERESPAWNING: "erespawning", ESTALE: "estale", EALIVE: "ealive", ESTARTING: "estarting", EPEERUID: "epeeruid", ETOOLARGE: "etoolarge", EUNVERIFIED: "eunverified", EAUTH: "eauth", EPROTO: "eproto", EHOSTDEAD: "ehostdead", ESKEW: "eskew" };
function tr(e) {
  return Object.hasOwn(an, e) ? an[e] : "unknown_code";
}
function nr(e) {
  if (e === void 0 || e === "") return;
  if (rQe.test(e)) return "ekicked";
  if (e.includes("ERESPAWNING")) return "erespawning";
  if (e.includes("ESTARTING")) return "estarting";
  if (e.includes("ESTALLED")) return "estalled";
  if (e.includes("EUNVERIFIED")) return "eunverified";
  if (e.includes("EHOSTDEAD")) return "ehostdead";
  if (LFt.test(e)) return "unknown_code";
  return "worker_detach";
}
function R6(e, n, o) {
  if (!e) return;
  let r = e.interactive?.reached, u = n === "detached" ? e.interactive?.marksExpected : void 0, s = n === "detached" && r === void 0 && u === true, h = s && e.t0 !== void 0 ? Math.round(performance.now() - e.t0) : void 0;
  a("tengu_bg_attach_outcome", { outcome: c(n), got_ack: false, got_first_frame: false, synthetic: true, apc_detach: false, failure_class: ce(n === "error" ? o ?? "daemon_unavailable" : void 0), gesture_id: _e(e.gestureId), attempt: ++e.attempt, surface: ce(e.surface), daemon_booted: e.daemonBooted, via: ce(e.interactive?.via), attach_cold: e.interactive?.attachCold, attach_ms: r !== void 0 ? r.attachMs : h, content_paint_ms: r !== void 0 ? Math.round(r.contentPaintMs) : void 0, prompt_idle_ms: r !== void 0 ? Math.round(r.promptIdleMs) : void 0, msgs_loaded: r?.msgsLoaded, msgs_in_jsonl: r?.msgsInJsonl, msgs_rendered_at_first_paint: r?.msgsRenderedAtFirstPaint, first_frame_kind: ce(r !== void 0 ? "real" : void 0), marks_expected: r !== void 0 ? true : u, attach_censored: s ? true : void 0 });
}
async function Vxn(e) {
  let n = await bh({ proto: Oc, op: "has", short: e });
  return n.ok && n.op === "has" && n.present === false;
}
var Et = 2, cn = 26, ln = 100, rr = 8, or = Buffer.from([127]), un = 98, fn = 122, dt = Buffer.from("\x1B[27;5;98~", "latin1"), mn = Buffer.from("\x1B[27;5;122~", "latin1"), ir = Buffer.from("\x1B[27u", "latin1"), ar = Buffer.from("\x1B[27;1u", "latin1"), sr = 3, dr = 99, cr = Buffer.from("\x1B[27;5;99~", "latin1"), sn = Buffer.from(Dne, "ascii"), St = Buffer.from(zqn, "ascii"), dn = Buffer.from("\x1B_cc-d", "ascii"), Je = Buffer.from("\x1B[?9001", "ascii"), ur = 100;
function Te(e, n, o) {
  return e.length - n >= o.length && e.compare(o, 0, o.length, n, n + o.length) === 0;
}
function He(e, n, o) {
  if (e[n] !== 27 || e[n + 1] !== 91) return 0;
  let r = n + 2, u = () => {
    let w = -1;
    for (let T = 0; T < 8 && r < e.length; T++) {
      let k = e[r];
      if (k < 48 || k > 57) break;
      w = (w < 0 ? 0 : w) * 10 + (k - 48), r++;
    }
    return w;
  }, s = u();
  if (s < 0) return 0;
  let h = -1;
  if (e[r] === 58) {
    if (r++, u(), e[r] === 58) r++, h = u();
  }
  if (e[r] !== 59 || e[r + 1] !== 53 || e[r + 2] !== 117) return 0;
  return (s > 127 && h >= 0 ? h : s) === o ? r + 3 - n : 0;
}
function Ie(e, n) {
  let o = Math.min(e.length, n.length - 1);
  e: for (let r = o; r > 0; r--) {
    let u = e.length - r;
    for (let s = 0; s < r; s++) if (e[u + s] !== n[s]) continue e;
    return r;
  }
  return 0;
}
var Z = Buffer.alloc(0);
function pn(e, n) {
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    if (n) {
      if (n = false, r === ln) return { matched: true, prefixArmed: false };
      continue;
    }
    if (r === cn || r === sr || He(e, o, fn) || Te(e, o, mn) || He(e, o, dr) || Te(e, o, cr)) return { matched: true, prefixArmed: false };
    let u = r === Et ? 1 : He(e, o, un) || (Te(e, o, dt) ? dt.length : 0);
    if (u) o += u - 1, n = true;
  }
  return { matched: false, prefixArmed: n };
}
function hn(e) {
  let n = false, o = false, r, u = new Promise((h) => {
    r = h;
  }), s = () => {
    if (n) return;
    let h;
    while ((h = e.read()) !== null) {
      let A = typeof h === "string" ? Buffer.from(h, "utf8") : h, w = pn(A, o);
      if (o = w.prefixArmed, w.matched) {
        n = true, r();
        return;
      }
    }
  };
  if (e.on("readable", s), "resume" in e && "pause" in e) e.resume(), e.pause();
  return s(), { promise: u, cancel: () => {
    n = true, e.removeListener("readable", s);
  } };
}
function qxn(e) {
  return pn(e, false).matched;
}
async function Spr(e, n = {}) {
  let o = n.stdin ?? process.stdin, r = n.stdout ?? process.stdout, u = "columns" in r ? r.columns || 120 : 120, s = "rows" in r ? r.rows || 30 : 30, h = u, A = s, w = Zn(), T = await CHe(), k = Date.now(), v = performance.now(), D = n.telemetry?.t0, U = D !== void 0 && Number.isFinite(D) && D >= 0 && D <= v && v - D < 864e5 ? D : v;
  if (n.telemetry?.gestureId !== void 0) tn(n.telemetry.gestureId, n.telemetry.attempt, n.telemetry.storageV5);
  let j, C, q, Q, K, N = Z, P = n.telemetry?.interactive?.reached, be = false, Ne, ye = setTimeout(() => {
    if (P === void 0 && (j === void 0 || C === void 0)) be = true, Ne = performance.now() - U;
  }, Math.max(0, 3e4 - (v - U))), Ce = false, ee, W, le, De, we, Fe, ve, je, ae, ue = false, me;
  function qe(B) {
    let R = Date.now() - k;
    if (B && me === void 0) me = R;
    if (ue) return;
    ue = true, Ce = !B, a("tengu_bg_attach_first_frame", { ms: R, meaningful_ms: me, ack_ms: ee, gesture_id: _e(n.telemetry?.gestureId), attempt: n.telemetry?.attempt, via: ce(W), tempo: ce(De), stale: Fe, state: Qq(we), cached: je });
  }
  let Ve, Oe = new Promise((B) => {
    Ve = B;
  }), V = false, re = false, se, Y = false, oe, Mt = u, xt = s, ze = T3t(), Nt = () => uPt({ legacyKitty: ve !== { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION }), Pn = O() === "windows" && !tro(), Mn = n.holdScreenOnDisconnect && O() === "windows" ? true : "isRaw" in o ? Boolean(o.isRaw) : false, pt = O() === "windows", Be = Buffer.from(uN, "ascii"), xn = Buffer.from(fN, "ascii"), Dt = pt && cro(), Ft = false, ht, de;
  try {
    de = Qn(RY());
  } catch (B) {
    let R = n.telemetry?.interactive?.reached, S = typeof n.telemetry?.interactive?.marksExpected === "boolean" ? n.telemetry.interactive.marksExpected : void 0;
    return a("tengu_bg_attach_outcome", { outcome: c("error"), got_ack: false, got_first_frame: false, ms: Date.now() - k, apc_detach: false, failure_class: c("connect_throw"), gesture_id: _e(n.telemetry?.gestureId), attempt: n.telemetry?.attempt, surface: ce(n.telemetry?.surface), daemon_booted: n.telemetry?.daemonBooted, attach_ms: R !== void 0 ? R.attachMs : S === true ? Math.round(performance.now() - U) : void 0, content_paint_ms: R !== void 0 ? Math.round(R.contentPaintMs) : void 0, prompt_idle_ms: R !== void 0 ? Math.round(R.promptIdleMs) : void 0, msgs_loaded: R?.msgsLoaded, msgs_in_jsonl: R?.msgsInJsonl, msgs_rendered_at_first_paint: R?.msgsRenderedAtFirstPaint, first_frame_kind: ce(R !== void 0 ? "real" : void 0), marks_expected: R !== void 0 ? true : S, attach_censored: R === void 0 && S === true ? true : void 0, via: ce(n.telemetry?.interactive?.via), attach_cold: n.telemetry?.interactive?.attachCold }), clearTimeout(ye), { outcome: "error", msg: WT(d(B)) };
  }
  de.setTimeout(1e4, () => {
    if (!re) ne("error", `${Qp()} did not respond — it may be stalled${dTe("restart")}`, { failureClass: "ack_timeout" });
  });
  function ne(B, R, S) {
    if (V) return;
    let { viaApc: M, beforeFirstFrame: y, failureClass: L } = S ?? {};
    V = true, clearTimeout(ht), clearTimeout(ye), clearTimeout(se);
    let F = Math.round(performance.now() - U), x = j !== void 0 && C !== void 0 ? Math.round(Math.max(j, C)) : void 0, J = ae !== void 0 || n.telemetry?.interactive?.marksExpected === true, H = P === void 0 && J && be && x === void 0, Se = P === void 0 && J && !H && x === void 0, Un = P !== void 0 ? P.attachMs : H ? Math.round(Ne ?? F) : Se ? F : x, $n = P !== void 0 ? "real" : x !== void 0 ? "real" : ue ? Ce && me === void 0 ? "dimhint" : "unknown" : void 0;
    if (a("tengu_bg_attach_outcome", { outcome: c(B), got_ack: re, got_first_frame: ue, ms: Date.now() - k, gesture_id: _e(n.telemetry?.gestureId), attempt: n.telemetry?.attempt, via: ce(n.telemetry?.interactive?.via ?? W), tempo: ce(De), apc_detach: M === true, failure_class: ce(L), state: Qq(we), cached: je, meaningful_ms: me, input_accepted_ms: Ye, input_delivered_ms: Ye, keys_dropped: $t, attach_ms: Un, content_paint_ms: P !== void 0 ? Math.round(P.contentPaintMs) : j !== void 0 ? Math.round(j) : void 0, prompt_idle_ms: P !== void 0 ? Math.round(P.promptIdleMs) : C !== void 0 ? Math.round(C) : void 0, timed_out: H, attach_censored: Se, marks_expected: P !== void 0 ? true : re || typeof n.telemetry?.interactive?.marksExpected === "boolean" ? J : void 0, attach_cold: n.telemetry?.interactive?.attachCold ?? (W !== void 0 ? W === "cold" && (le ?? true) : void 0), daemon_booted: n.telemetry?.daemonBooted, surface: ce(n.telemetry?.surface), first_frame_kind: ce($n), msgs_loaded: P?.msgsLoaded ?? q, msgs_in_jsonl: P?.msgsInJsonl ?? Q, msgs_rendered_at_first_paint: P?.msgsRenderedAtFirstPaint ?? K }), re) {
      let Wn = n.alreadyInAlt || B === "disconnected" && n.holdScreenOnDisconnect;
      r.write(Xlt + ze.snapshot().map(z6).reverse().join("") + uN + (O() === "windows" ? FIn : "") + "\x1B[0m\x1B7" + Dse + "\x1B8" + (qlt() ? kqn : "") + (Wn ? "" : eae()));
    }
    if (!Mn) Lv(o, false);
    if (o.removeListener("readable", _t), o.removeListener("end", Wt), "removeListener" in r) r.removeListener("resize", gt);
    clearTimeout(oe), de.destroy(), Ve({ outcome: B, msg: R, viaApc: M, beforeFirstFrame: y });
  }
  function Nn() {
    ne("error", `${Kxn}: ${sxt}`, { failureClass: "no_response" });
  }
  function gt() {
    if (V) return;
    if (oe === void 0) Mt = h, xt = A;
    h = "columns" in r ? r.columns || u : u, A = "rows" in r ? r.rows || s : s, clearTimeout(oe), oe = setTimeout(() => {
      if (oe = void 0, V) return;
      if (h < Mt || A < xt) r.write(_A + Gw);
      Lt(), bh({ proto: Oc, op: "resize", short: e, cols: h, rows: A, attachId: w });
    }, 50);
  }
  let jt = performance.now();
  function Lt() {
    let B = ze.snapshot();
    if (!B.includes(1004)) return;
    r.write(Nt() + B.map(LW).join(""));
  }
  let Ut = n.gateStdinUntilFirstFrame === true && "isTTY" in o && o.isTTY === true, Ye, $t = 0, Fn = bcs();
  function Re(B) {
    let R = () => Fn(B.toString("latin1"));
    if (!Ut || ue) {
      if (Ye === void 0 && !R()) Ye = Date.now() - k;
      de.write(B);
    } else if (!R()) $t++;
  }
  function jn(B) {
    if (V) return;
    let R = typeof B === "string" ? Buffer.from(B, "utf8") : B, S = 0;
    for (let M = 0; M < R.length; M++) {
      let y = R[M];
      if (Y) {
        if (Y = false, M > S) Re(R.subarray(S, M));
        if (y === ln) return ne("detached");
        Re(Buffer.from([Et, y])), S = M + 1;
        continue;
      }
      if (Ut && !ue && (y === 27 && R.length === 1 || Te(R, M, ir) || Te(R, M, ar))) return ne("detached", void 0, { beforeFirstFrame: true });
      if (y === cn || He(R, M, fn) || Te(R, M, mn)) {
        if (M > S) Re(R.subarray(S, M));
        return ne("detached");
      }
      if (Pn && y === rr) {
        if (M > S) Re(R.subarray(S, M));
        Re(or), S = M + 1;
        continue;
      }
      let L = y === Et ? 1 : He(R, M, un) || (Te(R, M, dt) ? dt.length : 0);
      if (L) {
        if (M > S) Re(R.subarray(S, M));
        M += L - 1, S = M + 1, Y = true;
      }
    }
    if (S < R.length) Re(R.subarray(S));
  }
  function _t() {
    let B = performance.now();
    if (B - jt > OIn) Lt();
    jt = B;
    let R;
    while ((R = o.read()) !== null) jn(R);
  }
  function Wt() {
    ne("detached");
  }
  let Le = Z, Xe = Z, Pe = Z, Ae = Z;
  function Jt(B) {
    if (!pt) return B;
    let R = Pe.length > 0, S = R ? Buffer.concat([Pe, B]) : B;
    if (R) Pe = Z;
    if (Dt) {
      let H = S.lastIndexOf(Be), Se = S.lastIndexOf(xn);
      if (H !== Se) Ft = H > Se;
    }
    let M = S.indexOf(Be);
    if (M < 0) {
      let H = Ie(S, Be);
      if (H === 0) return S;
      return Pe = Buffer.from(S.subarray(S.length - H)), S.subarray(0, S.length - H);
    }
    let y = [], L = 0, F = M;
    for (; ; ) {
      if (F > L) y.push(S.subarray(L, F));
      if (L = F + Be.length, F = S.indexOf(Be, L), F < 0) break;
    }
    let x = S.subarray(L), J = Ie(x, Be);
    if (J > 0) Pe = Buffer.from(x.subarray(x.length - J));
    if (x.length > J) y.push(x.subarray(0, x.length - J));
    if (y.length === 0) return Z;
    if (y.length === 1) return y[0];
    return Buffer.concat(y);
  }
  function Ht(B) {
    let R = Ae.length > 0, S = R ? Buffer.concat([Ae, B]) : B;
    if (R) Ae = Z;
    let M = S.indexOf(Je);
    if (M < 0) {
      let x = Ie(S, Je);
      if (x === 0) return S;
      return Ae = Buffer.from(S.subarray(S.length - x)), S.subarray(0, S.length - x);
    }
    let y = [], L = 0, F = M;
    while (F >= 0) {
      let x = F + Je.length;
      if (x >= S.length) {
        if (F > L) y.push(S.subarray(L, F));
        Ae = Buffer.from(S.subarray(F)), L = S.length;
        break;
      }
      let J = S[x];
      if (J === 104 || J === 108) {
        if (F > L) y.push(S.subarray(L, F));
        L = x + 1;
      }
      F = S.indexOf(Je, Math.max(L, F + 1));
    }
    if (L < S.length) {
      let x = S.subarray(L), J = Ie(x, Je);
      if (J > 0) Ae = Buffer.from(x.subarray(x.length - J));
      if (x.length > J) y.push(x.subarray(0, x.length - J));
    }
    if (y.length === 0) return Z;
    if (y.length === 1) return y[0];
    return Buffer.concat(y);
  }
  let Gt = n.alreadyInAlt && !n.holdingFrame;
  function Kt(B) {
    let { out: R, meaningful: S, renders: M } = Ln(B);
    if (R.length === 0) return;
    if (!M) {
      r.write(R);
      return;
    }
    if (Gt) Gt = false, r.write(_A + Gw);
    r.write(R), ze.feed(R.toString("latin1"), (y) => {
      if (y === 1004) {
        let L = Nt();
        if (L) r.write(L);
      }
    }), qe(S);
  }
  let Qe = Z, tt = false, Me = false, bt = false;
  function qt(B) {
    let R = false, S = 0;
    if (bt) {
      if (bt = false, Me = false, B[0] === 92) S = 1;
    }
    while (S < B.length) {
      if (Me) {
        let y = S;
        while (y < B.length && B[y] !== 27 && B[y] !== 24 && B[y] !== 26) y++;
        if (y >= B.length) return R;
        if (B[y] !== 27) {
          Me = false, S = y + 1;
          continue;
        }
        if (y === B.length - 1) return bt = true, R;
        if (B[y + 1] === 92) {
          Me = false, S = y + 2;
          continue;
        }
        Me = false, S = y;
        continue;
      }
      let M = B.indexOf(dn, S);
      if (M < 0) return true;
      R ||= M > S, Me = true, S = M + dn.length;
    }
    return R;
  }
  function Ln(B) {
    let R = Qe.length > 0 ? Buffer.concat([Qe, B]) : B;
    Qe = Z;
    let S = false, M = false, y = [], L = 0;
    for (; ; ) {
      let H = R.indexOf(St, L);
      if (H < 0) break;
      if (H > L) {
        let Se = R.subarray(L, H);
        if (y.push(Se), !tt) S = qt(Se) || S;
        else M = true;
      }
      tt = !tt, L = H + St.length;
    }
    let F = R.subarray(L), x = Ie(F, St);
    if (x > 0) Qe = Buffer.from(F.subarray(F.length - x)), F = F.subarray(0, F.length - x);
    if (F.length > 0) if (y.push(F), !tt) S = qt(F) || S;
    else M = true;
    return { out: y.length === 0 ? Z : y.length === 1 ? y[0] : Buffer.concat(y), meaningful: S, renders: S || M };
  }
  function Vt(B) {
    if (V) return;
    let R = ae !== void 0 && P === void 0 && (j === void 0 || C === void 0), S = EOo(N, B, { requireNonce: ae });
    N = S.carry;
    let M = S.cleaned;
    if (R) for (let x of S.marks) {
      let J = performance.now() - U;
      if (x.kind === "content_paint" && j === void 0) j = J, q = x.msgsLoaded, Q = x.msgsInJsonl, K = x.msgsRenderedAtFirstPaint;
      else if (x.kind === "prompt_idle" && C === void 0) C = J;
      if (j !== void 0 && C !== void 0) {
        clearTimeout(ye);
        let H = Math.round(Math.max(j, C));
        if (n.telemetry?.interactive !== void 0) n.telemetry.interactive.reached = { attachMs: H, contentPaintMs: j, promptIdleMs: C, msgsLoaded: q, msgsInJsonl: Q, msgsRenderedAtFirstPaint: K };
        if (n.telemetry?.gestureId !== void 0) oxt(n.telemetry.gestureId, { interactiveReached: true, attachMs: H, msgsLoaded: q, msgsInJsonl: Q, msgsRenderedAtFirstPaint: K }, n.telemetry.storageV5);
      }
    }
    let y = Xe.length > 0 ? Buffer.concat([Xe, M]) : M, L = y.indexOf(sn);
    if (L >= 0) {
      let x = y.subarray(0, L);
      if (L > 0) {
        let H = Ht(Jt(x));
        if (H.length > 0) Kt(H);
      }
      Xe = Z, Pe = Z, Ae = Z;
      let J = TOo(x);
      return ne("detached", J, { viaApc: true, failureClass: nr(J) });
    }
    let F = Ie(y, sn);
    if (y.length > F) {
      let x = y.subarray(0, y.length - F), J = Ht(Jt(x));
      if (J.length > 0) Kt(J);
    }
    if (Xe = F > 0 ? Buffer.from(y.subarray(y.length - F)) : Z, Dt) clearTimeout(ht), ht = setTimeout(() => {
      if (!V && Ft) r.write(uN);
    }, ur);
  }
  return de.on("data", (B) => {
    if (V) return;
    if (re) {
      clearTimeout(se), Vt(B);
      return;
    }
    Le = Buffer.concat([Le, B]);
    let R = Le.indexOf(10);
    if (R < 0) return;
    let S = Le.subarray(0, R).toString("utf8"), M = Le.subarray(R + 1), y;
    try {
      y = te(S);
    } catch (J) {
      return ne("error", `bad ack: ${d(J)}`, { failureClass: "bad_ack" });
    }
    if (typeof y !== "object" || y === null) return ne("error", "bad ack: non-object ack line", { failureClass: "bad_ack" });
    if (!y.ok) return ne("error", `${y.code}: ${y.error}`, { failureClass: tr(y.code) });
    if (re = true, de.setTimeout(0), !n.holdingFrame && M.length === 0) se = setTimeout(Nn, er);
    if (ee = Date.now() - k, W = y.op === "attach" ? WPt(y.via) : void 0, le = y.op === "attach" && typeof y.booting === "boolean" ? y.booting : void 0, ae = y.op === "attach" && typeof y.imarkNonce === "string" ? y.imarkNonce : void 0, n.telemetry?.gestureId !== void 0) oxt(n.telemetry.gestureId, { marksExpected: ae !== void 0, daemonBooted: typeof n.telemetry.daemonBooted === "boolean" ? n.telemetry.daemonBooted : void 0, attachCold: W !== void 0 ? W === "cold" && (le ?? true) : void 0, via: W }, n.telemetry.storageV5);
    if (n.telemetry?.interactive !== void 0) {
      if (n.telemetry.interactive.marksExpected = n.telemetry.interactive.marksExpected === true || ae !== void 0, W !== void 0 && n.telemetry.interactive.reached === void 0) n.telemetry.interactive.attachCold = W === "cold" && (le ?? true), n.telemetry.interactive.via = W;
    }
    if (De = y.op === "attach" ? y.tempo : void 0, we = y.op === "attach" ? y.state : void 0, Fe = y.op === "attach" ? y.stale : void 0, ve = y.op === "attach" ? y.workerCliVersion : void 0, je = y.op === "attach" ? y.cached : void 0, i.TMUX && !yF().tmuxRgbApplied) yF().tmuxRgbApplied = true, it("tmux", ["set", "-as", "terminal-features", ",*:RGB"]);
    let F = ((y.op === "attach" ? y.decModes : void 0) ?? []).map(LW).join("");
    if (ze.feed(F), "ref" in o) o.ref();
    Lv(o, true);
    let x = ve !== { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION;
    if (r.write(n.alreadyInAlt ? fN + uPt({ legacyKitty: x }) + F : fPt({ legacyKitty: x }) + F + (pt ? fN : "") + `
  \x1B[2mAttaching…\x1B[0m
`), "on" in r) r.on("resize", gt);
    if ("columns" in r && (r.columns || u) !== u || "rows" in r && (r.rows || s) !== s) gt();
    if (o.on("readable", _t), "resume" in o && "pause" in o) o.resume(), o.pause();
    if (o.once("end", Wt), _t(), M.length) Vt(M);
  }), de.on("error", (B) => ne("error", WT(d(B)), { failureClass: "socket_error" })), de.once("close", () => {
    if (!V) ne(re ? "disconnected" : "error", "control socket closed", { failureClass: "socket_closed" });
  }), de.once("connect", () => {
    de.write(_({ proto: Oc, op: "attach", short: e, auth: T, cols: u, rows: s, attachId: w, caps: { ...fr(), ...n.sessionTabs !== void 0 && { sessionTabs: n.sessionTabs, ...n.cloudTabs === true && { cloudTabs: true }, ...n.tabsLanding && { tabsLanding: n.tabsLanding } } }, ...n.holdingFrame && { holdingFrame: true } }) + `
`);
  }), Oe;
}
function fr() {
  return { imark: true, terminal: i.terminal, mux: i.TMUX ? "tmux" : process.env.ZELLIJ != null ? "zellij" : i.STY ? "screen" : null, ssh: i.isSSH(), wheelFlood: uro(), hyperlinks: uw(), progressReporting: qlt(), printsUnknownSequences: e8(), wtSession: !!i.WT_SESSION, isVscodeTerm: i.TERM_PROGRAM === "vscode", keyDialect: bFt(i.TERM), browser: i.BROWSER ?? null, colorLevel: he.level, syncOutput: ffs(), editor: i.VISUAL || i.EDITOR || null, systemTheme: _Ts(), ...i.TMUX && { tmuxSocket: Ze(i.TMUX, ",") } };
}
function y3t(e) {
  return Sht.test(e) ? { kind: "cloud", sessionId: e } : { kind: "switch", short: e };
}
import { randomUUID as Rr } from "crypto";
import { lstat as Ar, readdir as Tr, realpath as Ke, rm as Cr, unlink as Or, writeFile as Br } from "fs/promises";
import { isAbsolute as mt, join as Pt, normalize as Pr, relative as Mr } from "path";
import { readFile as mr, unlink as pr } from "fs/promises";
import { join as gr } from "path";
var _r = 250, br = 6048e5, yr = 256, wr = p(() => Tt({ writtenAtMs: bn().optional(), shells: lr(Tt({ pid: bn().int().positive(), procStart: ge().optional(), startTimeTicks: bn().int().optional() })).catch([]) }));
async function gn(e, n = {}) {
  let o = gr(e, "adopt.json"), r = `${o}.reap.${process.pid}`, u = Date.now() + (n.waitMs ?? 0);
  for (; ; ) try {
    await Os(o, r);
    break;
  } catch (s) {
    if (Date.now() >= u) {
      if (!G(s)) t(`[adopt] reap claim failed: ${s}`, { level: "warn" });
      return { found: false, reaped: 0 };
    }
    await X(_r);
  }
  try {
    let s = wr().safeParse(te(await mr(r, "utf-8")));
    if (!s.success) return { found: true, reaped: 0 };
    let { writtenAtMs: h, shells: A } = s.data, w = h !== void 0 ? Date.now() - h : void 0;
    if (w !== void 0 && w > br || A.length > yr) return t(`[adopt] reap skipped: implausible payload (age ${w ?? "?"}ms, ${A.length} entries)`, { level: "warn" }), { found: true, reaped: 0 };
    if (await Promise.all(A.map((T) => Plt(T.pid, T.startTimeTicks, T.procStart))), A.length > 0) a("tengu_adopt_exit_reap", { reaped_shells: A.length });
    return { found: true, reaped: A.length };
  } catch (s) {
    return t(`[adopt] reap read/parse failed: ${s}`, { level: "warn" }), { found: true, reaped: 0 };
  } finally {
    await pr(r).catch(() => {
    });
  }
}
var kr = 7, Sr = { head: 40, tail: 20 }, Er = { head: 50, tail: 30 }, yn = 1e3, vr = 1e6;
async function lt(e) {
  let [n, o] = await Promise.all([vt(e, ["log", "--no-show-signature", `--max-count=${yn}`, "--format=%H%x00%s", "HEAD", "--not", "--remotes"]), vt(e, ["symbolic-ref", "-q", "--short", "HEAD"])]);
  if (n.code !== 0) return;
  let r = n.stdout.split(`
`).map((s) => s.split("\0")).filter((s) => s.length === 2 && s[0] !== ""), u = r[0];
  if (u === void 0 || !_q(u[0])) return;
  return { branch: o.code === 0 ? gd(o.stdout, Er) || null : null, count: r.length, headSha: u[0], shortSha: u[0].slice(0, kr), subject: gd(u[1], Sr) };
}
function Oeo(e) {
  return `${e.count}${wn(e)} unpushed ${I(e.count, "commit")} on ${e.branch ?? "detached HEAD"}`;
}
function _cs(e) {
  let n = e.count > 1 ? ` and ${e.count - 1}${wn(e)} more` : "";
  return `${Oeo(e)}: ${[e.shortSha, e.subject].filter(Boolean).join(" ")}${n}`;
}
async function Rt(e, n) {
  if (!_q(n)) return false;
  let o = await vt(e, ["rev-parse", "HEAD"]);
  return o.code === 0 && o.stdout.trim() === n;
}
async function vt(e, n) {
  return ct(It(), [..._n, ...n], { cwd: e, env: Rs(), maxBuffer: vr });
}
function wn(e) {
  return e.count >= yn ? "+" : "";
}
var _3t = "recap.trigger";
function Ir(e, n) {
  if (z() && n !== void 0) {
    let o = We.job(e, [_3t]);
    if (Rm(o) === void 0) {
      n.write(o, "", { publishDiscipline: "inPlace" }).catch(() => {
      });
      return;
    }
  }
  Br(Pt(_o(e), _3t), "").catch(() => {
  });
}
async function yPe(e, n, o, r) {
  if (n?.backend === "peer") return { confirmed: true };
  let u = o?.handoff ? true : void 0, s = o?.evict ? true : void 0, h = o?.knownGone ? { ok: false, code: "ENOJOB", error: "job already gone (caller-verified)" } : await bh({ proto: Oc, op: "kill", short: e, handoff: u, evict: s });
  for (let A = 0; !h.ok && h.code === "ESTARTING" && A < 10; A++) await X(200), h = await bh({ proto: Oc, op: "kill", short: e, handoff: u, evict: s });
  if (h.ok) return { confirmed: true };
  if (h.code === "ENOJOB" || h.code === "ENOCONN" || h.code === "ETIMEOUT") {
    let A = await wpr(e, r);
    if (A.anyMatch && h.code === "ENOJOB") return { confirmed: A.confirmed };
    let w = false, T = false;
    if (h.code === "ENOCONN" || h.code === "ETIMEOUT") {
      let k;
      if (A.anyMatch) k = A.confirmed;
      else {
        let v = await JN({ silent: true }, r), D = v.workers[e];
        if (D !== void 0) {
          let U = await Yqn(D.pid, D.procStart);
          if (U === "zombie") if (D.procStart !== void 0 && await Ly(D.pid, D.procStart) === true) {
            try {
              process.kill(-D.pid, "SIGKILL");
            } catch {
              try {
                process.kill(D.pid, "SIGKILL");
              } catch {
              }
            }
            k = true;
          } else k = false;
          else k = U !== "live";
        } else {
          let U = !A.scanFailed && !v.parseFailed;
          w = h.code === "ENOCONN" && U && n?.state !== void 0 && Wa({ state: n.state, tempo: n.tempo }), k = w, T = U && !k;
        }
      }
      if (s && k && h.code === "ENOCONN" && !w) await Hne((v) => {
        delete v.workers[e];
      }, r).catch((v) => l(v));
      return T ? { confirmed: k, noWorkerFound: T } : { confirmed: k };
    }
    return { confirmed: true };
  }
  return { confirmed: false, error: h.error };
}
async function wpr(e, n) {
  let o = await U5e(GT(e)), r = false, u = true, s = false, h = await _re(n).catch(() => (s = true, []));
  for (let A of h) if (Bn(A, e)) {
    if (r = true, !o) try {
      process.kill(A.pid, "SIGTERM");
    } catch {
    }
    let w = Date.now() + 3e3, T = true;
    while ((T = await $an(A.pid, A.procStart)) && Date.now() < w) await X(100);
    if (T) {
      a("tengu_bg_killjob_ctrl_fallback", { ctrlSent: o });
      try {
        process.kill(A.pid, "SIGTERM");
      } catch {
      }
      let k = Date.now() + 500;
      while ((T = await $an(A.pid, A.procStart)) && Date.now() < k) await X(100);
    }
    if (T) u = false;
  }
  return { confirmed: u, anyMatch: r, scanFailed: s };
}
async function b3t(e) {
  let n = await bh({ proto: Oc, op: "list" });
  if (n.ok && n.op === "list") return { shorts: new Set(n.jobs.map((s) => s.short)), records: n.jobs.filter((s) => !s.outcome) };
  let o = await JN({ silent: true }, e), r = Object.entries(o.workers), u = await Promise.all(r.map(([, s]) => $an(s.pid, s.procStart)));
  return { shorts: new Set(r.filter((s, h) => u[h]).map(([s]) => s)), records: [] };
}
async function Yxn(e, n) {
  let o = await bh({ proto: Oc, op: "has", short: e });
  if (o.ok && o.op === "has") return { alive: o.alive, present: o.present ?? o.alive, daemonUp: true };
  let r = (await JN({ silent: true }, n)).workers[e], u = r !== void 0 && await $an(r.pid, r.procStart);
  return { alive: u, present: u, daemonUp: false };
}
async function Meo(e) {
  let n = await bh({ proto: Oc, op: "has", short: e });
  return n.ok && n.op === "has" ? n.present ?? n.alive : false;
}
function zat(e, n) {
  let o = e.tempo === "blocked" && e.state !== "blocked" && e.block === void 0 && fLs(e.needs);
  return { ...e, ...xht(e) && { state: "working" }, detail: Xu(Ms(n).replace(/\s+/g, " ").trim(), sg), ...!o && { tempo: "active", needs: void 0, block: void 0 }, suggestedReply: void 0, output: null, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
}
var jFe = "That session isn't running — respawn it first", vpr = "Can't send — that session is running in another terminal";
function vn() {
  return `Couldn't reach the ${Qp()} — it may be restarting. Press Enter to retry`;
}
function Deo(e) {
  return e.startsWith(vn());
}
var At = " — your message was saved and will be sent when you next restart this session";
async function kn(e, n, o) {
  Dp(e);
  let r = await lo(e, o);
  if (!r || WFe(n, r)) return false;
  let u = Vat(r);
  if (u !== void 0) return u === n;
  return Mie(e, r, n, o);
}
async function Kat(e, n, o, r, u, s, { nextTurn: h = false } = {}) {
  let A = Date.now(), w = (N, P, be) => {
    a("tengu_bg_reply_outcome", { ms: Date.now() - A, outcome: c(N), error_code: ce(P), errno: tw(be) });
  };
  if (o?.backend === "peer") {
    if (!o.sock) return g("job_reply"), w("ok"), { err: vpr };
    try {
      return await lfn(o.sock, n, s), g("job_reply"), w("ok"), null;
    } catch (N) {
      return m("job_reply", "job_reply_peer_send_failed"), w("bad", "job_reply_peer_send_failed"), { err: `Couldn't send to that session — ${d(N)}` };
    }
  }
  let T = _o(e), k = r ?? await lo(T, s), v = await CHe(), D = false, U = false, j = async () => {
    if (h) {
      let P = await bh({ proto: Oc, op: "ping" });
      if (!P.ok) return P;
      if (P.op !== "ping" || P.version !== { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION) return U = true, { ok: false, error: "its supervisor runs a different Claude Code build", code: "ESKEW" };
    }
    let N = await bh({ proto: Oc, op: "reply", short: e, text: n, auth: v, ...h && { nextTurn: h } });
    if (!N.ok && "connected" in N && N.connected === true) D = true;
    return N;
  }, C = await j(), q = async () => {
    let N = 10;
    for (let P = 0; !C.ok && (C.code === "ESTARTING" || C.code === "ENOREPLY" || C.code === "ERESPAWNING") && P < N; P++) {
      if (C.code === "ERESPAWNING") N = 60;
      await X(200), C = await j();
    }
  };
  if (await q(), !C.ok && C.code === "EAUTH") {
    let N = await CHe();
    if (N && N !== v) v = N, C = await j();
  }
  let Q = false;
  if (!C.ok && (C.code === "ENOCONN" || C.code === "ETIMEOUT") && !(h && D)) {
    let N = await x6({ forceTransient: true }, s);
    if (Q = !N.ok, N.ok) v = await CHe() ?? v, C = await j(), await q();
  }
  if (C.ok) {
    if (k && !r) {
      Dp(T);
      let N = await lo(T, s) ?? k, P = zat(N, n);
      if (P.queuedPrompt === n) P.queuedPrompt = void 0;
      ad(T, P, s).catch(Rl);
    }
    if (!r) a("tengu_bg_agent_action", { action: b("reply"), wasTerminal: k ? jC(k.state) : false, daemon: true, jobSessionId: _e(o?.sessionId ?? k?.sessionId), ...u?.() }), g("job_reply"), w("ok");
    return null;
  }
  if (C.code === "ESKEW") {
    let N = U ? "job_reply_daemon_skewed" : "job_reply_worker_skewed";
    return m("job_reply", N), w("bad", N), { err: C.error, code: C.code };
  }
  if (C.code === "ENOJOB") {
    if (!r) f("job_reply", "job_reply_not_running"), w("sad", "job_reply_not_running");
    return { err: jFe, code: C.code };
  }
  if (C.code === "ENOCONN" || C.code === "ETIMEOUT") {
    if (!r && C.code === "ENOCONN") {
      let P = (await JN({ silent: true }, s)).workers[k?.daemonShort ?? e];
      if (P && !await $an(P.pid, P.procStart)) return f("job_reply", "job_reply_not_running"), w("sad", "job_reply_not_running"), { err: jFe, code: "ENOJOB" };
    }
    if (!r) m("job_reply", "job_reply_daemon_unreachable", { errno: c(C.code), ensure_failed: Q }), w("bad", "job_reply_daemon_unreachable");
    let N = !r && C.code === "ENOCONN" && !C.connected && !D && await kn(T, n, s);
    if (h && !D) return { err: "its supervisor did not answer" + (N ? At : ""), code: "EUNREACHABLE", queued: N };
    return { err: vn() + (N ? At : ""), code: C.code, queued: N };
  }
  if (!r) m("job_reply", "job_reply_send_failed"), w("bad", "job_reply_send_failed", C.code);
  let K = !r && !D && await kn(T, n, s);
  return { err: `Couldn't send your message — ${C.error}` + (K ? At : ""), code: C.code, queued: K };
}
async function Sn(e, n, o) {
  let r = await Wan(_o(e), o);
  if (r === null) return g("job_attach"), R6(n, "detached"), { kind: "error", ended: true, msg: "That session was removed — back to the list" };
  if (r.state === "done" || r.state === "stopped" || r.state === "blocked") return g("job_attach"), R6(n, "detached"), { kind: "error", ended: true, msg: r.state === "stopped" ? "That session was stopped — back to the list" : r.state === "blocked" ? "That session is blocked — back to the list" : "That session ended — back to the list" };
  if (r.state === "failed") {
    if (r.detail === iGe || r.detail === DFt) return m("job_attach", "job_attach_host_dead"), R6(n, "error"), { kind: "error", msg: r.detail === DFt ? nQe : `${tQe} — press Enter to restart it` };
    let u = r.detail.includes("before init");
    return f("job_attach", u ? "job_attach_pre_init_crash" : "job_attach_crash_loop"), { kind: "error", ended: true, crashed: true, msg: `Session can't start — ${r.detail.replace(/^.*?before init(?: \u2014 )?/, "").replace(/^Error:\s*/, "") || r.detail || "it crashed repeatedly"}` };
  }
  return;
}
var Ct = { forceTransient: true, standsDownAtExit: true };
async function Heo(e, n = {}) {
  return await xr(e, n, { overStream: false, onlyToRetry: false });
}
async function xr(e, n, o) {
  Ir(e, n.storageV5), t("[PERF:bg-attach-start]"), zlt();
  let r = IFt, u = void 0, s = PFt, h = { holdScreenOnDisconnect: true, alreadyInAlt: n.alreadyInAlt, gateStdinUntilFirstFrame: n.gateStdinUntilFirstFrame, sessionTabs: u, cloudTabs: n.cloudTabs, tabsLanding: n.tabsLanding }, A = { ...h, holdingFrame: true, gateStdinUntilFirstFrame: false, tabsLanding: void 0 }, w = n.gesture ?? { gestureId: Rr(), attempt: 0, interactive: {} }, T = !n.alreadyInAlt, k = await Ge(e, o, { ...h, telemetry: { gestureId: w.gestureId, attempt: ++w.attempt, t0: w.t0, surface: w.surface, daemonBooted: w.daemonBooted, interactive: w.interactive, storageV5: n.storageV5 } }), v;
  if (k.outcome === "error" && k.msg && r.test(k.msg)) {
    if (v = await x6(Ct, n.storageV5), v.ok) k = await Ge(e, o, { ...h, telemetry: { gestureId: w.gestureId, attempt: ++w.attempt, t0: w.t0, surface: w.surface, daemonBooted: w.daemonBooted, interactive: w.interactive, storageV5: n.storageV5 } });
  }
  for (let U = 0; k.msg && s.test(k.msg) && U < 20; U++) await X(500), k = await Ge(e, o, { ...h, telemetry: { gestureId: w.gestureId, attempt: ++w.attempt, t0: w.t0, surface: w.surface, daemonBooted: w.daemonBooted, interactive: w.interactive, storageV5: n.storageV5 } });
  let D = async () => {
    if (T) process.stdout.write(eae());
    let U = await Sn(e, w, n.storageV5);
    if (U) return U;
    return f("job_attach", "job_attach_crashed"), { kind: "error", orphaned: true, msg: "Session crashed — press Enter to respawn" };
  };
  while (k.outcome === "disconnected") {
    if (An()) {
      if (T) process.stdout.write(eae());
      return Ot("loop_head", n);
    }
    let U = " Reconnecting… ", j = Math.max(1, (process.stdout.columns ?? 80) - U.length);
    process.stdout.write(`\x1B7${q$(1, j)}\x1B[2;7m${U}\x1B[0m\x1B8`);
    let C;
    if (process.stdin.isTTY) {
      let K = "isRaw" in process.stdin ? Boolean(process.stdin.isRaw) : false;
      if (!K) Lv(process.stdin, true);
      let N = hn(process.stdin);
      try {
        C = await Promise.race([x6(Ct, n.storageV5), N.promise.then(() => "detach")]);
      } finally {
        if (N.cancel(), !K) Lv(process.stdin, false);
      }
    } else C = await x6(Ct, n.storageV5);
    if (C === "detach") {
      if (T) process.stdout.write(eae());
      return t("[PERF:bg-attach-end]"), g("job_attach"), R6(w, "detached"), { kind: "detached" };
    }
    let q = C;
    if (!q.ok) {
      if (T) process.stdout.write(eae());
      if (q.stoodDown) return Ot("reconnect", n, q);
      return m("job_attach", `job_attach_daemon_start_failed_${q.causeCode}`), R6(w, "error"), { kind: "error", msg: `Couldn't restart the ${Qp()} — ${q.reason}` };
    }
    let Q = zlt();
    if (Q && qxn(Q)) {
      if (T) process.stdout.write(eae());
      return t("[PERF:bg-attach-end]"), g("job_attach"), R6(w, "detached"), { kind: "detached" };
    }
    if (await Vxn(e)) return t(`[bg-attach] worker gone on reconnect probe short=${e} — settled while attached`), D();
    k = await Ge(e, o, { ...A, telemetry: { gestureId: w.gestureId, attempt: ++w.attempt, t0: w.t0, surface: w.surface, daemonBooted: w.daemonBooted, interactive: w.interactive, storageV5: n.storageV5 } });
    for (let K = 0; k.msg && s.test(k.msg) && K < 10; K++) await X(200), k = await Ge(e, o, { ...A, telemetry: { gestureId: w.gestureId, attempt: ++w.attempt, t0: w.t0, surface: w.surface, daemonBooted: w.daemonBooted, interactive: w.interactive, storageV5: n.storageV5 } });
    if (k.msg?.includes("ENOJOB")) return t(`[bg-attach] ENOJOB on reconnect short=${e} — daemon has no handle (or it's killing/settled)`), D();
    if (k.outcome === "error" && T) process.stdout.write(eae());
  }
  if (k.outcome === "detached" && k.msg && !o.onlyToRetry && (HFt.test(k.msg) || s.test(k.msg))) {
    if (T) process.stdout.write(eae());
    return m("job_attach", "job_attach_stalled"), { kind: "error", msg: k.msg.replace(/^E(STALLED|RESPAWNING|STARTING):\s*/, "") };
  }
  if (k.outcome === "error") {
    if (k.msg?.startsWith(`${MFt}:`)) {
      m("job_attach", "job_attach_host_dead");
      let j = await lo(_o(e), n.storageV5).catch(() => null), C = k.msg.slice(MFt.length + 1).trim();
      return { kind: "error", msg: j !== null && RE(j) ? C : `${C} — press Enter to restart it` };
    }
    if (k.msg?.startsWith(`${Kxn}:`)) {
      m("job_attach", "job_attach_no_response");
      let j = await lo(_o(e), n.storageV5).catch(() => null);
      if (j !== null && RE(j)) return { kind: "error", msg: `${sxt} — it runs a shell command, which is never run again for you; ctrl+x stops it` };
      return { kind: "error", notResponding: true, msg: `${sxt} — press Enter again to restart it (the conversation is saved)` };
    }
    if (k.msg?.includes("ENOJOB")) {
      t(`[bg-attach] ENOJOB on first attach short=${e} — daemon has no handle (or it's killing/settled)`);
      let j = await Sn(e, void 0, n.storageV5);
      if (j) return j;
      return f("job_attach", "job_attach_orphaned"), { kind: "error", orphaned: true, msg: `${dhe()} lost track of this job — press Enter to respawn it` };
    }
    if (v && !v.ok) {
      if (v.stoodDown) return Ot("first_attach", n, v);
      return m("job_attach", `job_attach_daemon_start_failed_${v.causeCode}`), R6(w, "error"), { kind: "error", msg: `Couldn't start the ${Qp()} — ${v.reason}` };
    }
    let U = k.msg && s.test(k.msg) ? `${dhe()} is still starting — try again in a moment` : k.msg && r.test(k.msg) ? `${dhe()} didn't respond after starting — try again in a moment` : k.msg ? `Couldn't attach — ${k.msg}` : "Couldn't attach to that session";
    return m("job_attach", "job_attach_failed"), { kind: "error", msg: U };
  }
  if (t("[PERF:bg-attach-end]"), g("job_attach"), k.msg && rQe.test(k.msg)) return { kind: "detached", msg: k.msg.replace(rQe, "") };
  return k.beforeFirstFrame ? { kind: "detached", beforeFirstFrame: true } : { kind: "detached" };
}
var Nr = "Background sessions still running will stop in about a minute. Run 'claude agents' to keep them.";
async function Ot(e, n, o) {
  let r = O(), [u, s] = o ? [void 0, o.viaService === true && r !== "macos"] : await Promise.all([bh({ proto: Oc, op: "ping" }, { timeoutMs: 300 }), vcs()]), h = u !== void 0 && (u.ok || u.code === "ETIMEOUT"), A = !h && !s && r !== "windows" && process.stdout.isTTY ? `${Nr}
` : "";
  if (t(`[bg-attach] held: this process is exiting (${e})`), a("tengu_bg_attach_held_at_exit", { loop_head: e === "loop_head", first_attach: e === "first_attach", daemon_up: h, service_restart: s, notice: A !== "" }), n.alreadyInAlt) n.onExitNotice?.(A);
  else if (A) process.stdout.write(A);
  return ff();
}
var Rn = 32, Dr = { head: 50, tail: 30 }, Fr = { head: 60, tail: 100 }, Epr = new RegExp(`^[0-9a-f]{${Rn}}$`);
function jr(e) {
  return et(e).slice(0, Rn);
}
async function Hee(e, n = {}, o) {
  let r = await lo(_o(e), o), u = r?.worktreePath ? await _re(o).catch(() => []) : [], s = /* @__PURE__ */ new Set();
  for (let v of u) if (Bn(v, e)) s.add(v.pid);
  let h = await yPe(e, r ?? void 0, { knownGone: n.knownGone, evict: true }, o).catch((v) => ({ confirmed: false, error: d(v) }));
  if (!h.confirmed) {
    if (t(`deleteJob: kill unconfirmed for ${e} — skipping jobdir/worktree removal to avoid stranding a live worker`, { level: "warn" }), !n.internal) m("job_delete", "kill_unconfirmed", { had_worktree: Boolean(r?.worktreePath) });
    return { removed: false, error: h.error, errorCode: "kill_unconfirmed" };
  }
  let A, w, T = false;
  if (r?.worktreePath) {
    let v = r.worktreePath, D, U, j, C = null, q = "present", Q = false, K, N, P, { dirty: be, trackedChanges: Ne, gitError: ye, submoduleWork: Ce } = await zje(v, void 0), ee = Vzn(v, r.originCwd) ?? void 0, W = await Ke(v).catch(() => v), le = jr(W);
    T = n.discardUnpushed !== void 0 && !ye && n.discardUnpushed.worktreeDigest === le && await Rt(W, n.discardUnpushed.headSha);
    let De = !ye && ee ? await vke(ee).catch(() => null) : null, we, Fe = false;
    for (let [re, se] of (De ?? []).entries()) if (await Ke(se.worktreePath).catch(() => se.worktreePath) === W) {
      we = se, Fe = re > 0 && !se.prunable;
      break;
    }
    let ve = BIr(W), je = ee !== void 0 && ve !== null && await Ke(ve).catch(() => ve) === await Ke(ee).catch(() => ee), ae = Fe && je ? Ce?.kind === "unverifiable" ? "submodule" : Ne ? "tracked_changes" : void 0 : ee !== void 0 && await Xzn(W, ee) ? void 0 : "not_registered", ue = n.forceRemoveWorktree !== void 0 && n.forceRemoveWorktree === le, me = ue && ae === void 0 && Jzn(W), qe = me ? "job_delete_force_remove" : n.force === true || T ? "job_delete_force" : "job_delete", Ve = Aon(qe), Oe = Eon(we?.lockReason), V;
    if ((V = await Lr(e, W, v, o)) !== null) D = "in_use", K = V.verified && NP.test(V.jobId) ? V.jobId : void 0, t(`deleteJob: ${v} is claimed by running job ${V.jobId}'s state.json (${V.verified ? "verified" : "unverifiable claim"}) — not ours to remove`, { level: "warn" });
    else if (((Q = await XEn(v) === null) || T || me) && (q = await Y$(v)) !== "gone" && (C = q === "unreadable" ? "unreadable" : await Bt(e, W, v, { includeUnsettled: T || me }, o)) !== null) {
      if (C === "claimed" && !Q && T) D = "unpushed_shared", N = await lt(v).catch(() => {
        return;
      });
      else D = C === "claimed" ? "shared_record" : "records_unreadable";
      t(C === "claimed" ? `deleteJob: ${v} is also recorded by another settled job's state.json — not removing another session's output` : `deleteJob: could not verify ${v} against sibling records — refusing until records are readable`, { level: "warn" });
    } else if (!await KXe(we?.lockReason) && !(Oe !== null && s.has(Oe))) D = "live_lock", K = Oe !== null ? `pid ${Oe}` : void 0, t(`deleteJob: ${v} is locked by a live Claude Code process, or with a reason we did not write (${we?.lockReason}) — not ours to remove`, { level: "warn" });
    else if ((P = await Ur(u, e, s, W, v)) !== void 0 && await Y$(v) !== "gone") D = "occupied", K = P.pid === process.pid ? `${typeof P.parkedJobId === "string" && NP.test(P.parkedJobId) ? `session ${P.parkedJobId},` : "a session"} moved to the background from this window, pid ${P.pid}` : P.kind === "bg" && typeof P.jobId === "string" && NP.test(P.jobId) ? `background session ${P.jobId}, pid ${P.pid}` : `pid ${P.pid}, ${P.kind}`, t(`deleteJob: ${v} is the working directory of a live session (pid ${P.pid}, ${P.kind}) — not ours to remove`, { level: "warn" });
    else if (be && !ye && !Ve) D = "dirty", t(`deleteJob: worktree has uncommitted changes, kept ${v}`, { level: "warn" });
    else if (!ye && ee && !T && !await jIr(v, await Con(ee), { primaryCheckoutVouches: true })) {
      if (await Bt(e, W, v, { includeUnsettled: false }, o) === "claimed") D = "unpushed_shared", t(`deleteJob: ${v} has unpushed commits and is also recorded by another settled job's state.json — not offering a discard`, { level: "warn" });
      else D = "unpushed", t(`deleteJob: ${v} has commits that are on no remote, kept`, { level: "warn" });
      N = await lt(v).catch(() => {
        return;
      });
    } else if (T && n.discardUnpushed !== void 0 && !await Rt(W, n.discardUnpushed.headSha)) D = "unpushed", t(`deleteJob: ${v} HEAD moved past the confirmed discard pin, kept`, { level: "warn" }), N = await lt(v).catch(() => {
      return;
    });
    else {
      let re = Vzn(v, r.originCwd) ?? void 0, se = (r.originCwd ? hr(r.originCwd) : null) ?? void 0, Y = await xle(v, r.worktreeBranch, re, r.worktreeHookBased, qe, W, se, { storageV5: o, forceRemoveRequested: ue }).catch((oe) => (t(`deleteJob: removeAgentWorktree threw for ${v}: ${d(oe)}`, { level: "error" }), { outcome: "failed", errorSummary: `the removal failed unexpectedly (${gd(d(oe), Fr)})` }));
      if (Y.outcome === "failed") {
        if (D = Y.needsForce ? "unverified" : Y.errorSummary === qXe ? "identity_changed" : Y.holdsWorktreesInside ? "worktrees_inside" : "remove_failed", K = Y.needsForce ? void 0 : Y.errorSummary, Y.forceRemovable !== void 0 && Jzn(W)) if (ae !== void 0) j = ae;
        else if (await Bt(e, W, v, { includeUnsettled: false }, o) === "claimed") j = "shared_record";
        else U = Y.forceRemovable;
      } else if (Y.outcome === "left_in_place") A = gd(v);
      else if (Y.forcedDirectoryRemoval) {
        let { keptBranch: oe } = Y.forcedDirectoryRemoval;
        w = { worktree: gd(W), ...oe !== void 0 && { keptBranch: gd(oe, Dr) } };
      }
    }
    if (D) {
      if (!n.internal) f("job_delete", `worktree_kept_${D}`, { had_worktree: true });
      return { removed: false, keptWorktree: gd(W), keptReason: D, ...K !== void 0 && { keptErrorSummary: K }, ...N !== void 0 && { keptUnpushed: N }, ...D === "unpushed" && N !== void 0 ? { discardUnpushed: { headSha: N.headSha, worktreeDigest: le } } : U !== void 0 && T && n.discardUnpushed !== void 0 && { discardUnpushed: n.discardUnpushed }, ...U !== void 0 && { forceRemoveWorktree: { worktreeDigest: le, cause: U } }, ...j !== void 0 && { forceRemoveWithheld: j }, ...Ce !== void 0 && (D === "dirty" || D === "remove_failed") && { submoduleWork: Ce } };
    }
  }
  let k = r?.fan?.some((v) => v.kind === "shell" && v.doneAt === void 0) ?? false;
  await gn(_o(e), { waitMs: k ? 4e3 : 0 });
  try {
    await Cr(_o(e), { recursive: true, force: true });
  } catch (v) {
    if (Dp(_o(e)), t(`deleteJob: failed to remove job dir for ${e}: ${d(v)}`, { level: "warn" }), !n.internal) m("job_delete", "jobdir_rm_failed", { had_worktree: Boolean(r?.worktreePath) });
    return { removed: false, error: `couldn't remove the session's state directory (${zr(d(v))})`, errorCode: "jobdir_rm_failed" };
  }
  if (z() && o !== void 0 && Rm(Rpr(e)) === void 0) await E3t(o, e);
  else await Or(ZTe(e)).catch(() => {
  });
  if (Dp(_o(e)), !n.internal) if (A) f("job_delete", "worktree_left_in_place", { had_worktree: true, discard_confirmed: T });
  else if (w) f("job_delete", "worktree_force_removed", { had_worktree: true, discard_confirmed: T });
  else g("job_delete", { had_worktree: Boolean(r?.worktreePath), discard_confirmed: T });
  return { removed: true, discardConfirmed: T, ...A && { leftWorktreeDir: A }, ...w && { forcedWorktreeRemoval: w } };
}
async function Lr(e, n, o, r) {
  for (let u of await dx(void 0, r).catch(() => [])) {
    if (u.id === e || !u.state.worktreePath || Wa(u.state)) continue;
    let s = Tn(u.state.worktreePath, n, o);
    if (s === "match") return { jobId: u.id, verified: true };
    if (s === "unverifiable") return { jobId: u.id, verified: false };
    let h = await Cn(u.state.worktreePath, o);
    if (xe(h, n)) return { jobId: u.id, verified: true };
  }
  return null;
}
function Tn(e, n, o) {
  if (xe(e, o) || xe(e, n)) return "match";
  if (!ml(e)) return "no_match";
  let r = Pr(e);
  if (xe(r, o) || xe(r, n)) return "match";
  return mt(e) && !Yn(e) && !gl(e) ? "unverifiable" : "no_match";
}
function xe(e, n) {
  return ft(e) === ft(n);
}
function ft(e) {
  return sp(In(e));
}
function En(e, n) {
  let o = Mr(ft(n), ft(e));
  return o.split(/[/\\]/, 1)[0] !== ".." && !mt(o);
}
async function Ur(e, n, o, r, u) {
  for (let s of e) {
    if (s.kind !== "interactive" && s.kind !== "bg") continue;
    if (o.has(s.pid) || s.parkedJobId === n) continue;
    if (s.pid === process.pid && s.parkedJobId === void 0) continue;
    let h = s.pid === process.pid ? ke() : s.cwd;
    if (typeof h !== "string" || !mt(h)) continue;
    if (!En(h, r) && !En(h, u)) continue;
    if (s.kind === "bg" && typeof s.jobId === "string" && NP.test(s.jobId)) {
      if (await On(_o(s.jobId)) === "missing") continue;
    }
    return s;
  }
  return;
}
function Cn(e, n) {
  let o = fe();
  if (!mt(e) || ml(e) || Qi(e, o) && Qi(e, n)) return e;
  let r = CB(ie(), e, { surfaceNetworkRaw: true, anchors: [o, n] });
  if (r === Gy) return e;
  if (r !== void 0 && (ml(r) || Qi(r, o) && Qi(r, n))) return e;
  return Ke(e).catch(() => e);
}
async function On(e) {
  return Ar(Pt(e, "state.json")).then(() => "present", (n) => G(n) ? "missing" : "unreadable");
}
async function Bt(e, n, o, { includeUnsettled: r }, u) {
  let s;
  try {
    s = await Tr(NL(), { withFileTypes: true });
  } catch (h) {
    return G(h) ? null : "unreadable";
  }
  for (let h of s) {
    if (!h.isDirectory() || h.name === e) continue;
    let A = Pt(NL(), h.name), w = await lo(A, u);
    if (w === null) {
      if (await On(A) === "missing") continue;
      return "unreadable";
    }
    if (!w.worktreePath || !r && !Wa(w)) continue;
    let T = Tn(w.worktreePath, n, o);
    if (T === "match") return "claimed";
    if (T === "unverifiable") return "unreadable";
    let k = await Cn(w.worktreePath, o);
    if (xe(k, n)) return "claimed";
  }
  return null;
}
async function Ge(e, n, o) {
  return await Spr(e, o);
}
function Bn(e, n) {
  return e.kind === "bg" && (e.jobId === n || e.sessionId?.startsWith(n) === true);
}
export {
  $5e,
  Deo,
  Epr,
  FB,
  Hee,
  Heo,
  Kat,
  Kxn,
  Meo,
  Oeo,
  R6,
  Spr,
  Vxn,
  Yxn,
  _3t,
  _cs,
  b3t,
  jFe,
  oxt,
  qxn,
  sxt,
  vpr,
  wpr,
  y3t,
  yPe,
  zat
};
