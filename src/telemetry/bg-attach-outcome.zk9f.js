// telemetry/bg-attach-outcome.zk9f.js — Claude Code 2.1.310 模块 chunk-zk9ft36n.js
import { __asset_src } from "../runtime/assets.js";
import { S, c, ce } from "../agents/third-party.ydpb.js";
import { d, v, rw, G } from "./anthropic-workspace-id.36ys.js";
import { ke } from "../context/not-admin-owned.ersa.js";
import { X } from "../shared/chunk-3kevgx4j.js";
import { In, Yn, gl, Qi, hl } from "../fs/node-modules.gp4v.js";
import { _, ee, zy, O1, ie, Ms, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { I, Ze, zr } from "../shared/chunk-j79dwkaq.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { pe } from "../shared/async-hooks.m2fg.js";
import { i } from "../shared/environment.9a41.js";
import { _n, Rs } from "../shared/chunk-z6efcye4.js";
import { st, ct } from "../git/utf8-keep-bom.c49x.js";
import { a } from "./chunk-wq923bwc.js";
import { g, m, p } from "./chunk-wn8xtaqg.js";
import { Fy, vS, vd } from "../fs/chunk-tzqhxyjb.js";
import { OK, Os, Hn } from "../fs/utf-8.7pve.js";
import { je } from "../plugins/chunk-x0a7sawk.js";
import { w$, Xcs, J$e, Qat, Bie, $5, Zcs, Gfr, L9t } from "./bg-daemon-spawn-reinstall-wait.vspy.js";
import { VC, MHe, W9n, pye, sTe, KC, F3 } from "../fs/attach-journal.ths7.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { bl } from "../fs/reply-across-default-dirs.esvz.js";
import { QF, zw, wT, jse } from "../shared/chunk-daaayw23.js";
import { Oc, BP, nyt, ere, Q3n, vHo, oyt, CHo, FUt, $Ut, BUt, U2e, zJe, jUt, VJe, WUt, KJe, GUt, sF, tre, n4n, sdn, jD, _o, ad, Rl, Hf, lo, cdn, px, KA, Ga, xv, uyt } from "./bg-roster-parse-failed.yhsj.js";
import { he } from "../terminal/xterm-ghostty.qrwz.js";
import { Rm, RK, hr, pkn, It } from "../git/utf-8.vh7e.js";
import { ZF } from "../fs/utf-8.fmbx.js";
import { gd } from "../terminal/chunk-9vttrktj.js";
import { Tn, up } from "../mcp/allowed-warning.j2d4.js";
import { Qf, mhe, gCe } from "./fleet-past-sessions.vsk9.js";
import { c8, zKn, I$t } from "../terminal/wl-copy.gdbt.js";
import { Fro, Wps, Zlt, bPt, wPt, lae, qIn } from "../terminal/aria-preserve-whitespace.s6ps.js";
import { pw } from "../terminal/no-hyperlinks.md9p.js";
import { zW, t9, tdt, gN, hN, tOn } from "../shared/chunk-5wbz5tdm.js";
import { Sh } from "./bg-cloud-lease.d225.js";
import { Alt } from "./dead-probe-adopt-ticks-token.xkx6.js";
import { F9t, q4e } from "../fs/pty-pids.x6xe.js";
import { sg, Xu } from "../git/needs-reply.erbp.js";
import { mzn, Fon, e7e, Rke, tWe, n7e, Bon, aOr, yzn, _zn, Fle, jon, lOr, JDs } from "../core/conversation-engine.31gx.js";
import { Npn, Rre } from "./harbor-kite-pacing-off.qsxe.js";
import { Rro, Xlt, Nro } from "../terminal/ink-renderer.pma0.js";
import { NE } from "../terminal/chunk-pasjdr9n.js";
import { lq, eIt } from "../shared/chunk-fj59deqq.js";
import { KCs } from "../shared/chunk-tnnwxyz2.js";
import { rf } from "../git/not-link.8b09.js";
import { Ja } from "../fs/daemon-worker.e01m.js";
import { ge, Sn, dr, Ct } from "../vendor/zod/invalid-return-type.ezsz.js";
import { Wh } from "../shared/chunk-mzb69x1h.js";
import { et } from "../shared/chunk-tftf1nn4.js";
import { _e } from "../shared/chunk-19a02m7w.js";
import { z } from "../shared/chunk-mxa4mwnj.js";
import { lstat as rt, mkdir as Wn, readdir as Jn, rename as Xt, unlink as nt } from "fs/promises";
import { join as me } from "path";
var Zt = 9e5, wt = 864e5;
function We(e, n) {
  return n - e >= wt || e > n + 6e4;
}
var Qt = /^[A-Za-z0-9-]{1,64}$/;
function it(e) {
  return me(pye(), `${e}.json`);
}
var ot = 8192;
function $e(e) {
  return je.daemon([W9n, e]);
}
function yt(e) {
  return $e(`${e}.json`);
}
var en = Wh();
function at(e, n) {
  return en.run("g:" + e, n).catch(() => {
  });
}
async function V4e(e, n, o) {
  if (!Qt.test(e)) return;
  let r = { gestureId: e, surface: n, startedAtEpochMs: Date.now(), attempt: 0 };
  w$().ownedBeacons.set(e, r), await at(e, async () => {
    if (r.pid = process.pid, r.procStart = await vS(), o) {
      if (!await kt(o, e, r, true)) w$().ownedBeacons.delete(e);
      return;
    }
    if (await Wn(pye(), { recursive: true, mode: 448 }), !await Ee()) {
      w$().ownedBeacons.delete(e);
      return;
    }
    if (w$().ownedBeacons.get(e) !== r) return;
    await Hn(it(e), _(r), 384);
  }), await Vn(o);
}
async function kt(e, n, o, r = false) {
  if (!await Ee(r)) return false;
  if (w$().ownedBeacons.get(n) === o) await e.write(yt(n), _(o));
  return true;
}
function tn(e, n, o) {
  let r = w$().ownedBeacons.get(e);
  if (!r || !Number.isInteger(n) || n <= (r.attempt ?? 0)) return;
  r.attempt = n, at(e, async () => {
    if (r.procStart ??= await vS(), o) {
      await kt(o, e, r);
      return;
    }
    if (!await Ee()) return;
    if (w$().ownedBeacons.get(e) !== r) return;
    await Hn(it(e), _(r), 384);
  });
}
function fxt(e, n, o) {
  let r = w$().ownedBeacons.get(e);
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
  at(e, async () => {
    if (r.procStart ??= await vS(), o) {
      await kt(o, e, r);
      return;
    }
    if (!await Ee()) return;
    if (w$().ownedBeacons.get(e) !== r) return;
    await Hn(it(e), _(r), 384);
  });
}
async function G1(e, n) {
  if (!Qt.test(e)) return;
  w$().ownedBeacons.delete(e), await at(e, async () => {
    if (n) {
      if (!await Ee()) return;
      let r = false;
      for (let u = 0; ; u++) {
        let s = await n.delete(yt(e));
        if (s.ok) return;
        let h = "telemetryCode" in s.error ? s.error.telemetryCode : void 0;
        if (r = h !== void 0 && OK.has(h), r && O() === "windows" && u < zt - 1) {
          await X(Yt);
          continue;
        }
        break;
      }
      if (!r) return;
      await n.write(yt(e), "{}");
      return;
    }
    let o = it(e);
    if (!await Ee()) return;
    for (let r = 0; ; r++) try {
      await nt(o);
      return;
    } catch (u) {
      let s = v(u);
      if (s === "ENOENT") return;
      if (O() === "windows" && s !== void 0 && OK.has(s) && r < zt - 1) {
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
    return (await rt(pye())).isDirectory();
  } catch (n) {
    return e && v(n) === "ENOENT";
  }
}
async function Gn(e) {
  try {
    let n = await bl(me(pye(), e), ot);
    if (n === null) return null;
    return nn(n);
  } catch {
    return null;
  }
}
async function Kn(e, n) {
  let o = $e(n), r = await e.statMeta(o);
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
    let n = ee(e);
    return !!n && typeof n === "object" && typeof n.gestureId === "string" && typeof n.startedAtEpochMs === "number" && Number.isFinite(n.startedAtEpochMs) && n.startedAtEpochMs <= Date.now() + 6e4 ? n : null;
  } catch {
    return null;
  }
}
async function rn(e) {
  if (typeof e.pid !== "number" || !Number.isInteger(e.pid) || e.pid <= 0) return false;
  if (!Ja(e.pid)) return true;
  if (e.procStart === void 0) return false;
  let n = await vd(e.pid);
  return n !== void 0 && n !== e.procStart;
}
async function qn(e, n) {
  try {
    let o = await rt(me(pye(), e));
    return We(o.mtimeMs, n);
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
    n = await Jn(pye());
  } catch {
    return [];
  }
  let o = Date.now(), r = [];
  for (let u of n) {
    if (!u.endsWith(".json")) {
      try {
        let w = await rt(me(pye(), u));
        if (We(w.mtimeMs, o)) await nt(me(pye(), u));
      } catch {
      }
      continue;
    }
    let s = await Gn(u);
    if (s === null) {
      try {
        let w = await rt(me(pye(), u));
        if (We(w.mtimeMs, o)) await nt(me(pye(), u));
      } catch {
      }
      continue;
    }
    let h = o - s.startedAtEpochMs;
    if (!(typeof s.pid === "number" && Number.isInteger(s.pid) && s.pid > 0 ? h >= Zt && (await rn(s) || s.procStart === void 0 && await qn(u, o)) : h >= wt)) {
      r.push(s);
      continue;
    }
    let T = me(pye(), `${u}.${process.pid}.claimed`);
    try {
      await Xt(me(pye(), u), T);
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
  a("tengu_bg_attach_outcome", { outcome: c(n || o ? "detached" : "error"), got_ack: n || typeof e.marksExpected === "boolean", got_first_frame: n ? true : o ? void 0 : false, synthetic: true, apc_detach: false, timed_out: n || o ? void 0 : true, journal_recovered: true, attach_ms: r, first_frame_kind: ce(n ? "real" : void 0), marks_expected: n ? true : typeof e.marksExpected === "boolean" ? e.marksExpected : void 0, attempt: typeof e.attempt === "number" && Number.isInteger(e.attempt) && e.attempt >= 0 && e.attempt < 1e6 ? e.attempt + 1 : 0, gesture_id: _e(e.gestureId), surface: ce(e.surface === "fleet" || e.surface === "bg_cli" ? e.surface : void 0), daemon_booted: typeof e.daemonBooted === "boolean" ? e.daemonBooted : void 0, attach_cold: typeof e.attachCold === "boolean" ? e.attachCold : void 0, via: ce(eIt(e.via)), msgs_loaded: n ? oyt(e.msgsLoaded) : void 0, msgs_in_jsonl: n ? oyt(e.msgsInJsonl) : void 0, msgs_rendered_at_first_paint: n ? oyt(e.msgsRenderedAtFirstPaint) : void 0 });
}
async function Xn(e) {
  if (!await Ee()) return [];
  let n = [], o;
  do {
    let s = await e.listEntries({ namespace: "daemon", relPath: [W9n] }, o === void 0 ? void 0 : { cursor: o });
    if (!s.ok) return [];
    for (let h of s.value.items) {
      if (h.kind !== "key" || h.key.namespace !== "daemon" || h.key.relPath.length !== 2 || h.key.relPath[0] !== W9n) continue;
      let A = h.key.relPath[1];
      if (A !== void 0) n.push({ file: A, size: h.size, mtimeMs: h.mtimeMs });
    }
    o = s.value.cursor;
  } while (o !== void 0);
  let r = Date.now(), u = [];
  for (let { file: s, size: h, mtimeMs: A } of n) {
    let y = A !== void 0 && We(A, r);
    if (!s.endsWith(".json")) {
      if (y) await e.delete($e(s));
      continue;
    }
    let T = h !== void 0 && h > ot ? null : await Kn(e, s);
    if (T === null) {
      if (y) await e.delete($e(s));
      continue;
    }
    let w = T.entry, E = r - w.startedAtEpochMs;
    if (!(typeof w.pid === "number" && Number.isInteger(w.pid) && w.pid > 0 ? E >= Zt && (await rn(w) || w.procStart === void 0 && We(T.mtimeMs, r)) : E >= wt)) {
      u.push(w);
      continue;
    }
    let j = await e.delete($e(s), { precondition: { type: "ifMatch", version: T.version } });
    if (!j.ok || !j.value.existed) continue;
    on(w);
  }
  return u;
}
import { randomUUID as Zn } from "crypto";
import { connect as Qn } from "net";
var er = 1e4, dPn = "ENORESPONSE", mxt = "Session isn't responding", an = { ENOJOB: "enojob", ETIMEOUT: "etimeout", ECWDGONE: "ecwdgone", EUNKNOWN: "eunknown", ENOREPLY: "enoreply", ERESPAWNING: "erespawning", ESTALE: "estale", EALIVE: "ealive", ESTARTING: "estarting", EPEERUID: "epeeruid", ETOOLARGE: "etoolarge", EUNVERIFIED: "eunverified", EAUTH: "eauth", EPROTO: "eproto", EHOSTDEAD: "ehostdead", ESKEW: "eskew" };
function tr(e) {
  return Object.hasOwn(an, e) ? an[e] : "unknown_code";
}
function nr(e) {
  if (e === void 0 || e === "") return;
  if (KJe.test(e)) return "ekicked";
  if (e.includes("ERESPAWNING")) return "erespawning";
  if (e.includes("ESTARTING")) return "estarting";
  if (e.includes("ESTALLED")) return "estalled";
  if (e.includes("EUNVERIFIED")) return "eunverified";
  if (e.includes("EHOSTDEAD")) return "ehostdead";
  if (GUt.test(e)) return "unknown_code";
  return "worker_detach";
}
function F5(e, n, o) {
  if (!e) return;
  let r = e.interactive?.reached, u = n === "detached" ? e.interactive?.marksExpected : void 0, s = n === "detached" && r === void 0 && u === true, h = s && e.t0 !== void 0 ? Math.round(performance.now() - e.t0) : void 0;
  a("tengu_bg_attach_outcome", { outcome: c(n), got_ack: false, got_first_frame: false, synthetic: true, apc_detach: false, failure_class: ce(n === "error" ? o ?? "daemon_unavailable" : void 0), gesture_id: _e(e.gestureId), attempt: ++e.attempt, surface: ce(e.surface), daemon_booted: e.daemonBooted, via: ce(e.interactive?.via), attach_cold: e.interactive?.attachCold, attach_ms: r !== void 0 ? r.attachMs : h, content_paint_ms: r !== void 0 ? Math.round(r.contentPaintMs) : void 0, prompt_idle_ms: r !== void 0 ? Math.round(r.promptIdleMs) : void 0, msgs_loaded: r?.msgsLoaded, msgs_in_jsonl: r?.msgsInJsonl, msgs_rendered_at_first_paint: r?.msgsRenderedAtFirstPaint, first_frame_kind: ce(r !== void 0 ? "real" : void 0), marks_expected: r !== void 0 ? true : u, attach_censored: s ? true : void 0 });
}
async function cPn(e) {
  let n = await Sh({ proto: Oc, op: "has", short: e });
  return n.ok && n.op === "has" && n.present === false;
}
var Et = 2, cn = 26, ln = 100, rr = 8, or = Buffer.from([127]), un = 98, fn = 122, dt = Buffer.from("\x1B[27;5;98~", "latin1"), mn = Buffer.from("\x1B[27;5;122~", "latin1"), ir = Buffer.from("\x1B[27u", "latin1"), ar = Buffer.from("\x1B[27;1u", "latin1"), sr = 3, cr = 99, lr = Buffer.from("\x1B[27;5;99~", "latin1"), sn = Buffer.from(ere, "ascii"), St = Buffer.from(Q3n, "ascii"), dn = Buffer.from("\x1B_cc-d", "ascii"), Je = Buffer.from("\x1B[?9001", "ascii"), ur = 100;
function Te(e, n, o) {
  return e.length - n >= o.length && e.compare(o, 0, o.length, n, n + o.length) === 0;
}
function He(e, n, o) {
  if (e[n] !== 27 || e[n + 1] !== 91) return 0;
  let r = n + 2, u = () => {
    let y = -1;
    for (let T = 0; T < 8 && r < e.length; T++) {
      let w = e[r];
      if (w < 48 || w > 57) break;
      y = (y < 0 ? 0 : y) * 10 + (w - 48), r++;
    }
    return y;
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
    if (r === cn || r === sr || He(e, o, fn) || Te(e, o, mn) || He(e, o, cr) || Te(e, o, lr)) return { matched: true, prefixArmed: false };
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
      let A = typeof h === "string" ? Buffer.from(h, "utf8") : h, y = pn(A, o);
      if (o = y.prefixArmed, y.matched) {
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
function uPn(e) {
  return pn(e, false).matched;
}
async function Lfr(e, n = {}) {
  let o = n.stdin ?? process.stdin, r = n.stdout ?? process.stdout, u = "columns" in r ? r.columns || 120 : 120, s = "rows" in r ? r.rows || 30 : 30, h = u, A = s, y = Zn(), T = await MHe(), w = Date.now(), E = performance.now(), D = n.telemetry?.t0, U = D !== void 0 && Number.isFinite(D) && D >= 0 && D <= E && E - D < 864e5 ? D : E;
  if (n.telemetry?.gestureId !== void 0) tn(n.telemetry.gestureId, n.telemetry.attempt, n.telemetry.storageV5);
  let j, C, q, Q, K, N = Z, P = n.telemetry?.interactive?.reached, be = false, Ne, ye = setTimeout(() => {
    if (P === void 0 && (j === void 0 || C === void 0)) be = true, Ne = performance.now() - U;
  }, Math.max(0, 3e4 - (E - U))), Ce = false, te, W, le, De, we, Fe, ve, Le, ae, ue = false, fe;
  function qe(B) {
    let R = Date.now() - w;
    if (B && fe === void 0) fe = R;
    if (ue) return;
    ue = true, Ce = !B, a("tengu_bg_attach_first_frame", { ms: R, meaningful_ms: fe, ack_ms: te, gesture_id: _e(n.telemetry?.gestureId), attempt: n.telemetry?.attempt, via: ce(W), tempo: ce(De), stale: Fe, state: lq(we), cached: Le });
  }
  let Ve, Oe = new Promise((B) => {
    Ve = B;
  }), V = false, re = false, se, Y = false, oe, Mt = u, xt = s, ze = F9t(), Nt = () => bPt({ legacyKitty: ve !== { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION }), Pn = O() === "windows" && !Rro(), Mn = n.holdScreenOnDisconnect && O() === "windows" ? true : "isRaw" in o ? Boolean(o.isRaw) : false, pt = O() === "windows", Be = Buffer.from(gN, "ascii"), xn = Buffer.from(hN, "ascii"), Dt = pt && Nro(), Ft = false, ht, de;
  try {
    de = Qn(F3());
  } catch (B) {
    let R = n.telemetry?.interactive?.reached, k = typeof n.telemetry?.interactive?.marksExpected === "boolean" ? n.telemetry.interactive.marksExpected : void 0;
    return a("tengu_bg_attach_outcome", { outcome: c("error"), got_ack: false, got_first_frame: false, ms: Date.now() - w, apc_detach: false, failure_class: c("connect_throw"), gesture_id: _e(n.telemetry?.gestureId), attempt: n.telemetry?.attempt, surface: ce(n.telemetry?.surface), daemon_booted: n.telemetry?.daemonBooted, attach_ms: R !== void 0 ? R.attachMs : k === true ? Math.round(performance.now() - U) : void 0, content_paint_ms: R !== void 0 ? Math.round(R.contentPaintMs) : void 0, prompt_idle_ms: R !== void 0 ? Math.round(R.promptIdleMs) : void 0, msgs_loaded: R?.msgsLoaded, msgs_in_jsonl: R?.msgsInJsonl, msgs_rendered_at_first_paint: R?.msgsRenderedAtFirstPaint, first_frame_kind: ce(R !== void 0 ? "real" : void 0), marks_expected: R !== void 0 ? true : k, attach_censored: R === void 0 && k === true ? true : void 0, via: ce(n.telemetry?.interactive?.via), attach_cold: n.telemetry?.interactive?.attachCold }), clearTimeout(ye), { outcome: "error", msg: VC(d(B)) };
  }
  de.setTimeout(1e4, () => {
    if (!re) ne("error", `${Qf()} did not respond — it may be stalled${gCe("restart")}`, { failureClass: "ack_timeout" });
  });
  function ne(B, R, k) {
    if (V) return;
    let { viaApc: M, beforeFirstFrame: b, failureClass: L } = k ?? {};
    V = true, clearTimeout(ht), clearTimeout(ye), clearTimeout(se);
    let F = Math.round(performance.now() - U), x = j !== void 0 && C !== void 0 ? Math.round(Math.max(j, C)) : void 0, J = ae !== void 0 || n.telemetry?.interactive?.marksExpected === true, H = P === void 0 && J && be && x === void 0, Se = P === void 0 && J && !H && x === void 0, Ln = P !== void 0 ? P.attachMs : H ? Math.round(Ne ?? F) : Se ? F : x, Un = P !== void 0 ? "real" : x !== void 0 ? "real" : ue ? Ce && fe === void 0 ? "dimhint" : "unknown" : void 0;
    if (a("tengu_bg_attach_outcome", { outcome: c(B), got_ack: re, got_first_frame: ue, ms: Date.now() - w, gesture_id: _e(n.telemetry?.gestureId), attempt: n.telemetry?.attempt, via: ce(n.telemetry?.interactive?.via ?? W), tempo: ce(De), apc_detach: M === true, failure_class: ce(L), state: lq(we), cached: Le, meaningful_ms: fe, input_accepted_ms: Ye, input_delivered_ms: Ye, keys_dropped: $t, attach_ms: Ln, content_paint_ms: P !== void 0 ? Math.round(P.contentPaintMs) : j !== void 0 ? Math.round(j) : void 0, prompt_idle_ms: P !== void 0 ? Math.round(P.promptIdleMs) : C !== void 0 ? Math.round(C) : void 0, timed_out: H, attach_censored: Se, marks_expected: P !== void 0 ? true : re || typeof n.telemetry?.interactive?.marksExpected === "boolean" ? J : void 0, attach_cold: n.telemetry?.interactive?.attachCold ?? (W !== void 0 ? W === "cold" && (le ?? true) : void 0), daemon_booted: n.telemetry?.daemonBooted, surface: ce(n.telemetry?.surface), first_frame_kind: ce(Un), msgs_loaded: P?.msgsLoaded ?? q, msgs_in_jsonl: P?.msgsInJsonl ?? Q, msgs_rendered_at_first_paint: P?.msgsRenderedAtFirstPaint ?? K }), re) {
      let $n = n.alreadyInAlt || B === "disconnected" && n.holdScreenOnDisconnect;
      r.write(tdt + ze.snapshot().map(t9).reverse().join("") + gN + (O() === "windows" ? tOn : "") + "\x1B[0m\x1B7" + jse + "\x1B8" + (Zlt() ? zKn : "") + ($n ? "" : lae()));
    }
    if (!Mn) NE(o, false);
    if (o.removeListener("readable", _t), o.removeListener("end", Wt), "removeListener" in r) r.removeListener("resize", gt);
    clearTimeout(oe), de.destroy(), Ve({ outcome: B, msg: R, viaApc: M, beforeFirstFrame: b });
  }
  function Nn() {
    ne("error", `${dPn}: ${mxt}`, { failureClass: "no_response" });
  }
  function gt() {
    if (V) return;
    if (oe === void 0) Mt = h, xt = A;
    h = "columns" in r ? r.columns || u : u, A = "rows" in r ? r.rows || s : s, clearTimeout(oe), oe = setTimeout(() => {
      if (oe = void 0, V) return;
      if (h < Mt || A < xt) r.write(wT + zw);
      Lt(), Sh({ proto: Oc, op: "resize", short: e, cols: h, rows: A, attachId: y });
    }, 50);
  }
  let jt = performance.now();
  function Lt() {
    let B = ze.snapshot();
    if (!B.includes(1004)) return;
    r.write(Nt() + B.map(zW).join(""));
  }
  let Ut = n.gateStdinUntilFirstFrame === true && "isTTY" in o && o.isTTY === true, Ye, $t = 0, Dn = Xcs();
  function Re(B) {
    let R = () => Dn(B.toString("latin1"));
    if (!Ut || ue) {
      if (Ye === void 0 && !R()) Ye = Date.now() - w;
      de.write(B);
    } else if (!R()) $t++;
  }
  function Fn(B) {
    if (V) return;
    let R = typeof B === "string" ? Buffer.from(B, "utf8") : B, k = 0;
    for (let M = 0; M < R.length; M++) {
      let b = R[M];
      if (Y) {
        if (Y = false, M > k) Re(R.subarray(k, M));
        if (b === ln) return ne("detached");
        Re(Buffer.from([Et, b])), k = M + 1;
        continue;
      }
      if (Ut && !ue && (b === 27 && R.length === 1 || Te(R, M, ir) || Te(R, M, ar))) return ne("detached", void 0, { beforeFirstFrame: true });
      if (b === cn || He(R, M, fn) || Te(R, M, mn)) {
        if (M > k) Re(R.subarray(k, M));
        return ne("detached");
      }
      if (Pn && b === rr) {
        if (M > k) Re(R.subarray(k, M));
        Re(or), k = M + 1;
        continue;
      }
      let L = b === Et ? 1 : He(R, M, un) || (Te(R, M, dt) ? dt.length : 0);
      if (L) {
        if (M > k) Re(R.subarray(k, M));
        M += L - 1, k = M + 1, Y = true;
      }
    }
    if (k < R.length) Re(R.subarray(k));
  }
  function _t() {
    let B = performance.now();
    if (B - jt > qIn) Lt();
    jt = B;
    let R;
    while ((R = o.read()) !== null) Fn(R);
  }
  function Wt() {
    ne("detached");
  }
  let Ue = Z, Xe = Z, Pe = Z, Ae = Z;
  function Jt(B) {
    if (!pt) return B;
    let R = Pe.length > 0, k = R ? Buffer.concat([Pe, B]) : B;
    if (R) Pe = Z;
    if (Dt) {
      let H = k.lastIndexOf(Be), Se = k.lastIndexOf(xn);
      if (H !== Se) Ft = H > Se;
    }
    let M = k.indexOf(Be);
    if (M < 0) {
      let H = Ie(k, Be);
      if (H === 0) return k;
      return Pe = Buffer.from(k.subarray(k.length - H)), k.subarray(0, k.length - H);
    }
    let b = [], L = 0, F = M;
    for (; ; ) {
      if (F > L) b.push(k.subarray(L, F));
      if (L = F + Be.length, F = k.indexOf(Be, L), F < 0) break;
    }
    let x = k.subarray(L), J = Ie(x, Be);
    if (J > 0) Pe = Buffer.from(x.subarray(x.length - J));
    if (x.length > J) b.push(x.subarray(0, x.length - J));
    if (b.length === 0) return Z;
    if (b.length === 1) return b[0];
    return Buffer.concat(b);
  }
  function Ht(B) {
    let R = Ae.length > 0, k = R ? Buffer.concat([Ae, B]) : B;
    if (R) Ae = Z;
    let M = k.indexOf(Je);
    if (M < 0) {
      let x = Ie(k, Je);
      if (x === 0) return k;
      return Ae = Buffer.from(k.subarray(k.length - x)), k.subarray(0, k.length - x);
    }
    let b = [], L = 0, F = M;
    while (F >= 0) {
      let x = F + Je.length;
      if (x >= k.length) {
        if (F > L) b.push(k.subarray(L, F));
        Ae = Buffer.from(k.subarray(F)), L = k.length;
        break;
      }
      let J = k[x];
      if (J === 104 || J === 108) {
        if (F > L) b.push(k.subarray(L, F));
        L = x + 1;
      }
      F = k.indexOf(Je, Math.max(L, F + 1));
    }
    if (L < k.length) {
      let x = k.subarray(L), J = Ie(x, Je);
      if (J > 0) Ae = Buffer.from(x.subarray(x.length - J));
      if (x.length > J) b.push(x.subarray(0, x.length - J));
    }
    if (b.length === 0) return Z;
    if (b.length === 1) return b[0];
    return Buffer.concat(b);
  }
  let Gt = n.alreadyInAlt && !n.holdingFrame;
  function Kt(B) {
    let { out: R, meaningful: k, renders: M } = jn(B);
    if (R.length === 0) return;
    if (!M) {
      r.write(R);
      return;
    }
    if (Gt) Gt = false, r.write(wT + zw);
    r.write(R), ze.feed(R.toString("latin1"), (b) => {
      if (b === 1004) {
        let L = Nt();
        if (L) r.write(L);
      }
    }), qe(k);
  }
  let Qe = Z, tt = false, Me = false, bt = false;
  function qt(B) {
    let R = false, k = 0;
    if (bt) {
      if (bt = false, Me = false, B[0] === 92) k = 1;
    }
    while (k < B.length) {
      if (Me) {
        let b = k;
        while (b < B.length && B[b] !== 27 && B[b] !== 24 && B[b] !== 26) b++;
        if (b >= B.length) return R;
        if (B[b] !== 27) {
          Me = false, k = b + 1;
          continue;
        }
        if (b === B.length - 1) return bt = true, R;
        if (B[b + 1] === 92) {
          Me = false, k = b + 2;
          continue;
        }
        Me = false, k = b;
        continue;
      }
      let M = B.indexOf(dn, k);
      if (M < 0) return true;
      R ||= M > k, Me = true, k = M + dn.length;
    }
    return R;
  }
  function jn(B) {
    let R = Qe.length > 0 ? Buffer.concat([Qe, B]) : B;
    Qe = Z;
    let k = false, M = false, b = [], L = 0;
    for (; ; ) {
      let H = R.indexOf(St, L);
      if (H < 0) break;
      if (H > L) {
        let Se = R.subarray(L, H);
        if (b.push(Se), !tt) k = qt(Se) || k;
        else M = true;
      }
      tt = !tt, L = H + St.length;
    }
    let F = R.subarray(L), x = Ie(F, St);
    if (x > 0) Qe = Buffer.from(F.subarray(F.length - x)), F = F.subarray(0, F.length - x);
    if (F.length > 0) if (b.push(F), !tt) k = qt(F) || k;
    else M = true;
    return { out: b.length === 0 ? Z : b.length === 1 ? b[0] : Buffer.concat(b), meaningful: k, renders: k || M };
  }
  function Vt(B) {
    if (V) return;
    let R = ae !== void 0 && P === void 0 && (j === void 0 || C === void 0), k = vHo(N, B, { requireNonce: ae });
    N = k.carry;
    let M = k.cleaned;
    if (R) for (let x of k.marks) {
      let J = performance.now() - U;
      if (x.kind === "content_paint" && j === void 0) j = J, q = x.msgsLoaded, Q = x.msgsInJsonl, K = x.msgsRenderedAtFirstPaint;
      else if (x.kind === "prompt_idle" && C === void 0) C = J;
      if (j !== void 0 && C !== void 0) {
        clearTimeout(ye);
        let H = Math.round(Math.max(j, C));
        if (n.telemetry?.interactive !== void 0) n.telemetry.interactive.reached = { attachMs: H, contentPaintMs: j, promptIdleMs: C, msgsLoaded: q, msgsInJsonl: Q, msgsRenderedAtFirstPaint: K };
        if (n.telemetry?.gestureId !== void 0) fxt(n.telemetry.gestureId, { interactiveReached: true, attachMs: H, msgsLoaded: q, msgsInJsonl: Q, msgsRenderedAtFirstPaint: K }, n.telemetry.storageV5);
      }
    }
    let b = Xe.length > 0 ? Buffer.concat([Xe, M]) : M, L = b.indexOf(sn);
    if (L >= 0) {
      let x = b.subarray(0, L);
      if (L > 0) {
        let H = Ht(Jt(x));
        if (H.length > 0) Kt(H);
      }
      Xe = Z, Pe = Z, Ae = Z;
      let J = CHo(x);
      return ne("detached", J, { viaApc: true, failureClass: nr(J) });
    }
    let F = Ie(b, sn);
    if (b.length > F) {
      let x = b.subarray(0, b.length - F), J = Ht(Jt(x));
      if (J.length > 0) Kt(J);
    }
    if (Xe = F > 0 ? Buffer.from(b.subarray(b.length - F)) : Z, Dt) clearTimeout(ht), ht = setTimeout(() => {
      if (!V && Ft) r.write(gN);
    }, ur);
  }
  return de.on("data", (B) => {
    if (V) return;
    if (re) {
      clearTimeout(se), Vt(B);
      return;
    }
    Ue = Buffer.concat([Ue, B]);
    let R = Ue.indexOf(10);
    if (R < 0) return;
    let k = Ue.subarray(0, R).toString("utf8"), M = Ue.subarray(R + 1), b;
    try {
      b = ee(k);
    } catch (J) {
      return ne("error", `bad ack: ${d(J)}`, { failureClass: "bad_ack" });
    }
    if (typeof b !== "object" || b === null) return ne("error", "bad ack: non-object ack line", { failureClass: "bad_ack" });
    if (!b.ok) return ne("error", `${b.code}: ${b.error}`, { failureClass: tr(b.code) });
    if (re = true, de.setTimeout(0), !n.holdingFrame && M.length === 0) se = setTimeout(Nn, er);
    if (te = Date.now() - w, W = b.op === "attach" ? eIt(b.via) : void 0, le = b.op === "attach" && typeof b.booting === "boolean" ? b.booting : void 0, ae = b.op === "attach" && typeof b.imarkNonce === "string" ? b.imarkNonce : void 0, n.telemetry?.gestureId !== void 0) fxt(n.telemetry.gestureId, { marksExpected: ae !== void 0, daemonBooted: typeof n.telemetry.daemonBooted === "boolean" ? n.telemetry.daemonBooted : void 0, attachCold: W !== void 0 ? W === "cold" && (le ?? true) : void 0, via: W }, n.telemetry.storageV5);
    if (n.telemetry?.interactive !== void 0) {
      if (n.telemetry.interactive.marksExpected = n.telemetry.interactive.marksExpected === true || ae !== void 0, W !== void 0 && n.telemetry.interactive.reached === void 0) n.telemetry.interactive.attachCold = W === "cold" && (le ?? true), n.telemetry.interactive.via = W;
    }
    if (De = b.op === "attach" ? b.tempo : void 0, we = b.op === "attach" ? b.state : void 0, Fe = b.op === "attach" ? b.stale : void 0, ve = b.op === "attach" ? b.workerCliVersion : void 0, Le = b.op === "attach" ? b.cached : void 0, i.TMUX && !w$().tmuxRgbApplied) w$().tmuxRgbApplied = true, st("tmux", ["set", "-as", "terminal-features", ",*:RGB"]);
    let F = ((b.op === "attach" ? b.decModes : void 0) ?? []).map(zW).join("");
    if (ze.feed(F), "ref" in o) o.ref();
    NE(o, true);
    let x = ve !== { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION;
    if (r.write(n.alreadyInAlt ? hN + bPt({ legacyKitty: x }) + F : wPt({ legacyKitty: x }) + F + (pt ? hN : "") + `
  \x1B[2mAttaching…\x1B[0m
`), "on" in r) r.on("resize", gt);
    if ("columns" in r && (r.columns || u) !== u || "rows" in r && (r.rows || s) !== s) gt();
    if (o.on("readable", _t), "resume" in o && "pause" in o) o.resume(), o.pause();
    if (o.once("end", Wt), _t(), M.length) Vt(M);
  }), de.on("error", (B) => ne("error", VC(d(B)), { failureClass: "socket_error" })), de.once("close", () => {
    if (!V) ne(re ? "disconnected" : "error", "control socket closed", { failureClass: "socket_closed" });
  }), de.once("connect", () => {
    de.write(_({ proto: Oc, op: "attach", short: e, auth: T, cols: u, rows: s, attachId: y, caps: { ...fr(), ...n.sessionTabs !== void 0 && { sessionTabs: n.sessionTabs, ...n.cloudTabs === true && { cloudTabs: true }, ...n.tabsLanding && { tabsLanding: n.tabsLanding } } }, ...n.holdingFrame && { holdingFrame: true } }) + `
`);
  }), Oe;
}
function fr() {
  return { imark: true, terminal: i.terminal, mux: i.TMUX ? "tmux" : process.env.ZELLIJ != null ? "zellij" : i.STY ? "screen" : null, ssh: i.isSSH(), wheelFlood: Fro(), hyperlinks: pw(), progressReporting: Zlt(), printsUnknownSequences: c8(), wtSession: !!i.WT_SESSION, isVscodeTerm: i.TERM_PROGRAM === "vscode", keyDialect: I$t(i.TERM), browser: i.BROWSER ?? null, colorLevel: he.level, syncOutput: Wps(), editor: i.VISUAL || i.EDITOR || null, systemTheme: KCs(), ...i.TMUX && { tmuxSocket: Ze(i.TMUX, ",") } };
}
function P9t(e) {
  return nyt.test(e) ? { kind: "cloud", sessionId: e } : { kind: "switch", short: e };
}
import { randomUUID as Rr } from "crypto";
import { lstat as Ar, readdir as Tr, realpath as Ke, rm as Cr, unlink as Or, writeFile as Br } from "fs/promises";
import { isAbsolute as mt, join as Pt, normalize as Pr, relative as Mr } from "path";
import { readFile as mr, unlink as pr } from "fs/promises";
import { join as gr } from "path";
var _r = 250, br = 6048e5, yr = 256, wr = f(() => Ct({ writtenAtMs: Sn().optional(), shells: dr(Ct({ pid: Sn().int().positive(), procStart: ge().optional(), startTimeTicks: Sn().int().optional() })).catch([]) }));
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
    let s = wr().safeParse(ee(await mr(r, "utf-8")));
    if (!s.success) return { found: true, reaped: 0 };
    let { writtenAtMs: h, shells: A } = s.data, y = h !== void 0 ? Date.now() - h : void 0;
    if (y !== void 0 && y > br || A.length > yr) return t(`[adopt] reap skipped: implausible payload (age ${y ?? "?"}ms, ${A.length} entries)`, { level: "warn" }), { found: true, reaped: 0 };
    if (await Promise.all(A.map((T) => Alt(T.pid, T.startTimeTicks, T.procStart))), A.length > 0) a("tengu_adopt_exit_reap", { reaped_shells: A.length });
    return { found: true, reaped: A.length };
  } catch (s) {
    return t(`[adopt] reap read/parse failed: ${s}`, { level: "warn" }), { found: true, reaped: 0 };
  } finally {
    await pr(r).catch(() => {
    });
  }
}
var kr = 7, Sr = { head: 40, tail: 20 }, Er = { head: 50, tail: 30 }, bn = 1e3, vr = 1e6;
async function lt(e) {
  let [n, o] = await Promise.all([vt(e, ["log", "--no-show-signature", `--max-count=${bn}`, "--format=%H%x00%s", "HEAD", "--not", "--remotes"]), vt(e, ["symbolic-ref", "-q", "--short", "HEAD"])]);
  if (n.code !== 0) return;
  let r = n.stdout.split(`
`).map((s) => s.split("\0")).filter((s) => s.length === 2 && s[0] !== ""), u = r[0];
  if (u === void 0 || !RK(u[0])) return;
  return { branch: o.code === 0 ? gd(o.stdout, Er) || null : null, count: r.length, headSha: u[0], shortSha: u[0].slice(0, kr), subject: gd(u[1], Sr) };
}
function rto(e) {
  return `${e.count}${yn(e)} unpushed ${I(e.count, "commit")} on ${e.branch ?? "detached HEAD"}`;
}
function Ycs(e) {
  let n = e.count > 1 ? ` and ${e.count - 1}${yn(e)} more` : "";
  return `${rto(e)}: ${[e.shortSha, e.subject].filter(Boolean).join(" ")}${n}`;
}
async function Rt(e, n) {
  if (!RK(n)) return false;
  let o = await vt(e, ["rev-parse", "HEAD"]);
  return o.code === 0 && o.stdout.trim() === n;
}
async function vt(e, n) {
  return ct(It(), [..._n, ...n], { cwd: e, env: Rs(), maxBuffer: vr });
}
function yn(e) {
  return e.count >= bn ? "+" : "";
}
var I9t = "recap.trigger";
function Ir(e, n) {
  if (z() && n !== void 0) {
    let o = je.job(e, [I9t]);
    if (Rm(o) === void 0) {
      n.write(o, "", { publishDiscipline: "inPlace" }).catch(() => {
      });
      return;
    }
  }
  Br(Pt(_o(e), I9t), "").catch(() => {
  });
}
async function vPe(e, n, o, r) {
  if (n?.backend === "peer") return { confirmed: true };
  let u = o?.handoff ? true : void 0, s = o?.evict ? true : void 0, h = o?.knownGone ? { ok: false, code: "ENOJOB", error: "job already gone (caller-verified)" } : await Sh({ proto: Oc, op: "kill", short: e, handoff: u, evict: s });
  for (let A = 0; !h.ok && h.code === "ESTARTING" && A < 10; A++) await X(200), h = await Sh({ proto: Oc, op: "kill", short: e, handoff: u, evict: s });
  if (h.ok) return { confirmed: true };
  if (h.code === "ENOJOB" || h.code === "ENOCONN" || h.code === "ETIMEOUT") {
    let A = await Nfr(e, r);
    if (A.anyMatch && h.code === "ENOJOB") return { confirmed: A.confirmed };
    let y = false, T = false;
    if (h.code === "ENOCONN" || h.code === "ETIMEOUT") {
      let w;
      if (A.anyMatch) w = A.confirmed;
      else {
        let E = await sF({ silent: true }, r), D = E.workers[e];
        if (D !== void 0) {
          let U = await n4n(D.pid, D.procStart);
          if (U === "zombie") if (D.procStart !== void 0 && await Fy(D.pid, D.procStart) === true) {
            try {
              process.kill(-D.pid, "SIGKILL");
            } catch {
              try {
                process.kill(D.pid, "SIGKILL");
              } catch {
              }
            }
            w = true;
          } else w = false;
          else w = U !== "live";
        } else {
          let U = !A.scanFailed && !E.parseFailed;
          y = h.code === "ENOCONN" && U && n?.state !== void 0 && Ga({ state: n.state, tempo: n.tempo }), w = y, T = U && !w;
        }
      }
      if (s && w && h.code === "ENOCONN" && !y) await tre((E) => {
        delete E.workers[e];
      }, r).catch((E) => l(E));
      return T ? { confirmed: w, noWorkerFound: T } : { confirmed: w };
    }
    return { confirmed: true };
  }
  return { confirmed: false, error: h.error };
}
async function Nfr(e, n) {
  let o = await q4e(KC(e)), r = false, u = true, s = false, h = await Rre(n).catch(() => (s = true, []));
  for (let A of h) if (Bn(A, e)) {
    if (r = true, !o) try {
      process.kill(A.pid, "SIGTERM");
    } catch {
    }
    let y = Date.now() + 3e3, T = true;
    while ((T = await sdn(A.pid, A.procStart)) && Date.now() < y) await X(100);
    if (T) {
      a("tengu_bg_killjob_ctrl_fallback", { ctrlSent: o });
      try {
        process.kill(A.pid, "SIGTERM");
      } catch {
      }
      let w = Date.now() + 500;
      while ((T = await sdn(A.pid, A.procStart)) && Date.now() < w) await X(100);
    }
    if (T) u = false;
  }
  return { confirmed: u, anyMatch: r, scanFailed: s };
}
async function O9t(e) {
  let n = await Sh({ proto: Oc, op: "list" });
  if (n.ok && n.op === "list") return { shorts: new Set(n.jobs.map((s) => s.short)), records: n.jobs.filter((s) => !s.outcome) };
  let o = await sF({ silent: true }, e), r = Object.entries(o.workers), u = await Promise.all(r.map(([, s]) => sdn(s.pid, s.procStart)));
  return { shorts: new Set(r.filter((s, h) => u[h]).map(([s]) => s)), records: [] };
}
async function pPn(e, n) {
  let o = await Sh({ proto: Oc, op: "has", short: e });
  if (o.ok && o.op === "has") return { alive: o.alive, present: o.present ?? o.alive, daemonUp: true };
  let r = (await sF({ silent: true }, n)).workers[e], u = r !== void 0 && await sdn(r.pid, r.procStart);
  return { alive: u, present: u, daemonUp: false };
}
async function oto(e) {
  let n = await Sh({ proto: Oc, op: "has", short: e });
  return n.ok && n.op === "has" ? n.present ?? n.alive : false;
}
function Xat(e, n) {
  let o = e.tempo === "blocked" && e.state !== "blocked" && e.block === void 0 && JDs(e.needs);
  return { ...e, ...uyt(e) && { state: "working" }, detail: Xu(Ms(n).replace(/\s+/g, " ").trim(), sg), ...!o && { tempo: "active", needs: void 0, block: void 0 }, suggestedReply: void 0, output: null, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
}
var X$e = "That session isn't running — respawn it first", Ffr = "Can't send — that session is running in another terminal";
function vn() {
  return `Couldn't reach the ${Qf()} — it may be restarting. Press Enter to retry`;
}
function sto(e) {
  return e.startsWith(vn());
}
var At = " — your message was saved and will be sent when you next restart this session";
async function wn(e, n, o) {
  Hf(e);
  let r = await lo(e, o);
  if (!r || J$e(n, r)) return false;
  let u = Qat(r);
  if (u !== void 0) return u === n;
  return Bie(e, r, n, o);
}
async function Jat(e, n, o, r, u, s, { nextTurn: h = false } = {}) {
  let A = Date.now(), y = (N, P, be) => {
    a("tengu_bg_reply_outcome", { ms: Date.now() - A, outcome: c(N), error_code: ce(P), errno: rw(be) });
  };
  if (o?.backend === "peer") {
    if (!o.sock) return g("job_reply"), y("ok"), { err: Ffr };
    try {
      return await Npn(o.sock, n, s), g("job_reply"), y("ok"), null;
    } catch (N) {
      return m("job_reply", "job_reply_peer_send_failed"), y("bad", "job_reply_peer_send_failed"), { err: `Couldn't send to that session — ${d(N)}` };
    }
  }
  let T = _o(e), w = r ?? await lo(T, s), E = await MHe(), D = false, U = false, j = async () => {
    if (h) {
      let P = await Sh({ proto: Oc, op: "ping" });
      if (!P.ok) return P;
      if (P.op !== "ping" || P.version !== { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION) return U = true, { ok: false, error: "its supervisor runs a different Claude Code build", code: "ESKEW" };
    }
    let N = await Sh({ proto: Oc, op: "reply", short: e, text: n, auth: E, ...h && { nextTurn: h } });
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
    let N = await MHe();
    if (N && N !== E) E = N, C = await j();
  }
  let Q = false;
  if (!C.ok && (C.code === "ENOCONN" || C.code === "ETIMEOUT") && !(h && D)) {
    let N = await $5({ forceTransient: true }, s);
    if (Q = !N.ok, N.ok) E = await MHe() ?? E, C = await j(), await q();
  }
  if (C.ok) {
    if (w && !r) {
      Hf(T);
      let N = await lo(T, s) ?? w, P = Xat(N, n);
      if (P.queuedPrompt === n) P.queuedPrompt = void 0;
      ad(T, P, s).catch(Rl);
    }
    if (!r) a("tengu_bg_agent_action", { action: S("reply"), wasTerminal: w ? KA(w.state) : false, daemon: true, jobSessionId: _e(o?.sessionId ?? w?.sessionId), ...u?.() }), g("job_reply"), y("ok");
    return null;
  }
  if (C.code === "ESKEW") {
    let N = U ? "job_reply_daemon_skewed" : "job_reply_worker_skewed";
    return m("job_reply", N), y("bad", N), { err: C.error, code: C.code };
  }
  if (C.code === "ENOJOB") {
    if (!r) p("job_reply", "job_reply_not_running"), y("sad", "job_reply_not_running");
    return { err: X$e, code: C.code };
  }
  if (C.code === "ENOCONN" || C.code === "ETIMEOUT") {
    if (!r && C.code === "ENOCONN") {
      let P = (await sF({ silent: true }, s)).workers[w?.daemonShort ?? e];
      if (P && !await sdn(P.pid, P.procStart)) return p("job_reply", "job_reply_not_running"), y("sad", "job_reply_not_running"), { err: X$e, code: "ENOJOB" };
    }
    if (!r) m("job_reply", "job_reply_daemon_unreachable", { errno: c(C.code), ensure_failed: Q }), y("bad", "job_reply_daemon_unreachable");
    let N = !r && C.code === "ENOCONN" && !C.connected && !D && await wn(T, n, s);
    if (h && !D) return { err: "its supervisor did not answer" + (N ? At : ""), code: "EUNREACHABLE", queued: N };
    return { err: vn() + (N ? At : ""), code: C.code, queued: N };
  }
  if (!r) m("job_reply", "job_reply_send_failed"), y("bad", "job_reply_send_failed", C.code);
  let K = !r && !D && await wn(T, n, s);
  return { err: `Couldn't send your message — ${C.error}` + (K ? At : ""), code: C.code, queued: K };
}
async function kn(e, n, o) {
  let r = await cdn(_o(e), o);
  if (r === null) return g("job_attach"), F5(n, "detached"), { kind: "error", ended: true, msg: "That session was removed — back to the list" };
  if (r.state === "done" || r.state === "stopped" || r.state === "blocked") return g("job_attach"), F5(n, "detached"), { kind: "error", ended: true, msg: r.state === "stopped" ? "That session was stopped — back to the list" : r.state === "blocked" ? "That session is blocked — back to the list" : "That session ended — back to the list" };
  if (r.state === "failed") {
    if (r.detail === U2e || r.detail === jUt) return m("job_attach", "job_attach_host_dead"), F5(n, "error"), { kind: "error", msg: r.detail === jUt ? VJe : `${zJe} — press Enter to restart it` };
    let u = r.detail.includes("before init");
    return p("job_attach", u ? "job_attach_pre_init_crash" : "job_attach_crash_loop"), { kind: "error", ended: true, crashed: true, msg: `Session can't start — ${r.detail.replace(/^.*?before init(?: \u2014 )?/, "").replace(/^Error:\s*/, "") || r.detail || "it crashed repeatedly"}` };
  }
  return;
}
var Tt = { forceTransient: true, standsDownAtExit: true };
async function ito(e, n = {}) {
  return await xr(e, n, { overStream: false, onlyToRetry: false });
}
async function xr(e, n, o) {
  Ir(e, n.storageV5), t("[PERF:bg-attach-start]"), Xlt();
  let r = $Ut, u = void 0, s = FUt, h = { holdScreenOnDisconnect: true, alreadyInAlt: n.alreadyInAlt, gateStdinUntilFirstFrame: n.gateStdinUntilFirstFrame, sessionTabs: u, cloudTabs: n.cloudTabs, tabsLanding: n.tabsLanding }, A = { ...h, holdingFrame: true, gateStdinUntilFirstFrame: false, tabsLanding: void 0 }, y = n.gesture ?? { gestureId: Rr(), attempt: 0, interactive: {} }, T = !n.alreadyInAlt, w = await Ge(e, o, { ...h, telemetry: { gestureId: y.gestureId, attempt: ++y.attempt, t0: y.t0, surface: y.surface, daemonBooted: y.daemonBooted, interactive: y.interactive, storageV5: n.storageV5 } }), E;
  if (w.outcome === "error" && w.msg && r.test(w.msg)) {
    if (E = await $5(Tt, n.storageV5), E.ok) w = await Ge(e, o, { ...h, telemetry: { gestureId: y.gestureId, attempt: ++y.attempt, t0: y.t0, surface: y.surface, daemonBooted: y.daemonBooted, interactive: y.interactive, storageV5: n.storageV5 } });
  }
  for (let U = 0; w.msg && s.test(w.msg) && U < 20; U++) await X(500), w = await Ge(e, o, { ...h, telemetry: { gestureId: y.gestureId, attempt: ++y.attempt, t0: y.t0, surface: y.surface, daemonBooted: y.daemonBooted, interactive: y.interactive, storageV5: n.storageV5 } });
  let D = async () => {
    if (T) process.stdout.write(lae());
    let U = await kn(e, y, n.storageV5);
    if (U) return U;
    return p("job_attach", "job_attach_crashed"), { kind: "error", orphaned: true, msg: "Session crashed — press Enter to respawn" };
  };
  while (w.outcome === "disconnected") {
    if (Tn()) {
      if (T) process.stdout.write(lae());
      return Ot("loop_head", n);
    }
    let U = " Reconnecting… ", j = Math.max(1, (process.stdout.columns ?? 80) - U.length);
    process.stdout.write(`\x1B7${QF(1, j)}\x1B[2;7m${U}\x1B[0m\x1B8`);
    let C;
    if (process.stdin.isTTY) {
      let K = "isRaw" in process.stdin ? Boolean(process.stdin.isRaw) : false;
      if (!K) NE(process.stdin, true);
      let N = hn(process.stdin);
      try {
        C = await Promise.race([$5(Tt, n.storageV5), N.promise.then(() => "detach")]);
      } finally {
        if (N.cancel(), !K) NE(process.stdin, false);
      }
    } else C = await $5(Tt, n.storageV5);
    if (C === "detach") {
      if (T) process.stdout.write(lae());
      return t("[PERF:bg-attach-end]"), g("job_attach"), F5(y, "detached"), { kind: "detached" };
    }
    let q = C;
    if (!q.ok) {
      if (T) process.stdout.write(lae());
      if (q.stoodDown) return Ot("reconnect", n, q);
      return m("job_attach", `job_attach_daemon_start_failed_${q.causeCode}`), F5(y, "error"), { kind: "error", msg: `Couldn't restart the ${Qf()} — ${q.reason}` };
    }
    let Q = Xlt();
    if (Q && uPn(Q)) {
      if (T) process.stdout.write(lae());
      return t("[PERF:bg-attach-end]"), g("job_attach"), F5(y, "detached"), { kind: "detached" };
    }
    if (await cPn(e)) return t(`[bg-attach] worker gone on reconnect probe short=${e} — settled while attached`), D();
    w = await Ge(e, o, { ...A, telemetry: { gestureId: y.gestureId, attempt: ++y.attempt, t0: y.t0, surface: y.surface, daemonBooted: y.daemonBooted, interactive: y.interactive, storageV5: n.storageV5 } });
    for (let K = 0; w.msg && s.test(w.msg) && K < 10; K++) await X(200), w = await Ge(e, o, { ...A, telemetry: { gestureId: y.gestureId, attempt: ++y.attempt, t0: y.t0, surface: y.surface, daemonBooted: y.daemonBooted, interactive: y.interactive, storageV5: n.storageV5 } });
    if (w.msg?.includes("ENOJOB")) return t(`[bg-attach] ENOJOB on reconnect short=${e} — daemon has no handle (or it's killing/settled)`), D();
    if (w.outcome === "error" && T) process.stdout.write(lae());
  }
  if (w.outcome === "detached" && w.msg && !o.onlyToRetry && (WUt.test(w.msg) || s.test(w.msg))) {
    if (T) process.stdout.write(lae());
    return m("job_attach", "job_attach_stalled"), { kind: "error", msg: w.msg.replace(/^E(STALLED|RESPAWNING|STARTING):\s*/, "") };
  }
  if (w.outcome === "error") {
    if (w.msg?.startsWith(`${BUt}:`)) {
      m("job_attach", "job_attach_host_dead");
      let j = await lo(_o(e), n.storageV5).catch(() => null), C = w.msg.slice(BUt.length + 1).trim();
      return { kind: "error", msg: j !== null && xv(j) ? C : `${C} — press Enter to restart it` };
    }
    if (w.msg?.startsWith(`${dPn}:`)) {
      m("job_attach", "job_attach_no_response");
      let j = await lo(_o(e), n.storageV5).catch(() => null);
      if (j !== null && xv(j)) return { kind: "error", msg: `${mxt} — it runs a shell command, which is never run again for you; ctrl+x stops it` };
      return { kind: "error", notResponding: true, msg: `${mxt} — press Enter again to restart it (the conversation is saved)` };
    }
    if (w.msg?.includes("ENOJOB")) {
      t(`[bg-attach] ENOJOB on first attach short=${e} — daemon has no handle (or it's killing/settled)`);
      let j = await kn(e, void 0, n.storageV5);
      if (j) return j;
      return p("job_attach", "job_attach_orphaned"), { kind: "error", orphaned: true, msg: `${mhe()} lost track of this job — press Enter to respawn it` };
    }
    if (E && !E.ok) {
      if (E.stoodDown) return Ot("first_attach", n, E);
      return m("job_attach", `job_attach_daemon_start_failed_${E.causeCode}`), F5(y, "error"), { kind: "error", msg: `Couldn't start the ${Qf()} — ${E.reason}` };
    }
    let U = w.msg && s.test(w.msg) ? `${mhe()} is still starting — try again in a moment` : w.msg && r.test(w.msg) ? `${mhe()} didn't respond after starting — try again in a moment` : w.msg ? `Couldn't attach — ${w.msg}` : "Couldn't attach to that session";
    return m("job_attach", "job_attach_failed"), { kind: "error", msg: U };
  }
  if (t("[PERF:bg-attach-end]"), g("job_attach"), w.msg && KJe.test(w.msg)) return { kind: "detached", msg: w.msg.replace(KJe, "") };
  return w.beforeFirstFrame ? { kind: "detached", beforeFirstFrame: true } : { kind: "detached" };
}
var Nr = "Background sessions still running will stop in about a minute. Run 'claude agents' to keep them.";
async function Ot(e, n, o) {
  let r = O(), [u, s] = o ? [void 0, o.viaService === true && r !== "macos"] : await Promise.all([Sh({ proto: Oc, op: "ping" }, { timeoutMs: 300 }), Zcs()]), h = u !== void 0 && (u.ok || u.code === "ETIMEOUT"), A = !h && !s && r !== "windows" && process.stdout.isTTY ? `${Nr}
` : "";
  if (t(`[bg-attach] held: this process is exiting (${e})`), a("tengu_bg_attach_held_at_exit", { loop_head: e === "loop_head", first_attach: e === "first_attach", daemon_up: h, service_restart: s, notice: A !== "" }), n.alreadyInAlt) n.onExitNotice?.(A);
  else if (A) process.stdout.write(A);
  return up();
}
var Rn = 32, Dr = { head: 50, tail: 30 }, Fr = { head: 60, tail: 100 }, $fr = new RegExp(`^[0-9a-f]{${Rn}}$`);
function jr(e) {
  return et(e).slice(0, Rn);
}
async function Wee(e, n = {}, o) {
  let r = await lo(_o(e), o), u = r?.worktreePath ? await Rre(o).catch(() => []) : [], s = /* @__PURE__ */ new Set();
  for (let E of u) if (Bn(E, e)) s.add(E.pid);
  let h = await vPe(e, r ?? void 0, { knownGone: n.knownGone, evict: true }, o).catch((E) => ({ confirmed: false, error: d(E) }));
  if (!h.confirmed) {
    if (t(`deleteJob: kill unconfirmed for ${e} — skipping jobdir/worktree removal to avoid stranding a live worker`, { level: "warn" }), !n.internal) m("job_delete", "kill_unconfirmed", { had_worktree: Boolean(r?.worktreePath) });
    return { removed: false, error: h.error, errorCode: "kill_unconfirmed" };
  }
  let A, y, T = false;
  if (r?.worktreePath) {
    let E = r.worktreePath, D, U, j, C = null, q = "present", Q = false, K, N, P, { dirty: be, trackedChanges: Ne, gitError: ye, submoduleWork: Ce } = await tWe(E, void 0), te = mzn(E, r.originCwd) ?? void 0, W = await Ke(E).catch(() => E), le = jr(W);
    T = n.discardUnpushed !== void 0 && !ye && n.discardUnpushed.worktreeDigest === le && await Rt(W, n.discardUnpushed.headSha);
    let De = !ye && te ? await Rke(te).catch(() => null) : null, we, Fe = false;
    for (let [re, se] of (De ?? []).entries()) if (await Ke(se.worktreePath).catch(() => se.worktreePath) === W) {
      we = se, Fe = re > 0 && !se.prunable;
      break;
    }
    let ve = aOr(W), Le = te !== void 0 && ve !== null && await Ke(ve).catch(() => ve) === await Ke(te).catch(() => te), ae = Fe && Le ? Ce?.kind === "unverifiable" ? "submodule" : Ne ? "tracked_changes" : void 0 : te !== void 0 && await yzn(W, te) ? void 0 : "not_registered", ue = n.forceRemoveWorktree !== void 0 && n.forceRemoveWorktree === le, fe = ue && ae === void 0 && _zn(W), qe = fe ? "job_delete_force_remove" : n.force === true || T ? "job_delete_force" : "job_delete", Ve = Bon(qe), Oe = Fon(we?.lockReason), V;
    if ((V = await Lr(e, W, E, o)) !== null) D = "in_use", K = V.verified && BP.test(V.jobId) ? V.jobId : void 0, t(`deleteJob: ${E} is claimed by running job ${V.jobId}'s state.json (${V.verified ? "verified" : "unverifiable claim"}) — not ours to remove`, { level: "warn" });
    else if (((Q = await pkn(E) === null) || T || fe) && (q = await ZF(E)) !== "gone" && (C = q === "unreadable" ? "unreadable" : await Bt(e, W, E, { includeUnsettled: T || fe }, o)) !== null) {
      if (C === "claimed" && !Q && T) D = "unpushed_shared", N = await lt(E).catch(() => {
        return;
      });
      else D = C === "claimed" ? "shared_record" : "records_unreadable";
      t(C === "claimed" ? `deleteJob: ${E} is also recorded by another settled job's state.json — not removing another session's output` : `deleteJob: could not verify ${E} against sibling records — refusing until records are readable`, { level: "warn" });
    } else if (!await e7e(we?.lockReason) && !(Oe !== null && s.has(Oe))) D = "live_lock", K = Oe !== null ? `pid ${Oe}` : void 0, t(`deleteJob: ${E} is locked by a live Claude Code process, or with a reason we did not write (${we?.lockReason}) — not ours to remove`, { level: "warn" });
    else if ((P = await Ur(u, e, s, W, E)) !== void 0 && await ZF(E) !== "gone") D = "occupied", K = P.pid === process.pid ? `${typeof P.parkedJobId === "string" && BP.test(P.parkedJobId) ? `session ${P.parkedJobId},` : "a session"} moved to the background from this window, pid ${P.pid}` : P.kind === "bg" && typeof P.jobId === "string" && BP.test(P.jobId) ? `background session ${P.jobId}, pid ${P.pid}` : `pid ${P.pid}, ${P.kind}`, t(`deleteJob: ${E} is the working directory of a live session (pid ${P.pid}, ${P.kind}) — not ours to remove`, { level: "warn" });
    else if (be && !ye && !Ve) D = "dirty", t(`deleteJob: worktree has uncommitted changes, kept ${E}`, { level: "warn" });
    else if (!ye && te && !T && !await lOr(E, await jon(te), { primaryCheckoutVouches: true })) {
      if (await Bt(e, W, E, { includeUnsettled: false }, o) === "claimed") D = "unpushed_shared", t(`deleteJob: ${E} has unpushed commits and is also recorded by another settled job's state.json — not offering a discard`, { level: "warn" });
      else D = "unpushed", t(`deleteJob: ${E} has commits that are on no remote, kept`, { level: "warn" });
      N = await lt(E).catch(() => {
        return;
      });
    } else if (T && n.discardUnpushed !== void 0 && !await Rt(W, n.discardUnpushed.headSha)) D = "unpushed", t(`deleteJob: ${E} HEAD moved past the confirmed discard pin, kept`, { level: "warn" }), N = await lt(E).catch(() => {
      return;
    });
    else {
      let re = mzn(E, r.originCwd) ?? void 0, se = (r.originCwd ? hr(r.originCwd) : null) ?? void 0, Y = await Fle(E, r.worktreeBranch, re, r.worktreeHookBased, qe, W, se, { storageV5: o, forceRemoveRequested: ue }).catch((oe) => (t(`deleteJob: removeAgentWorktree threw for ${E}: ${d(oe)}`, { level: "error" }), { outcome: "failed", errorSummary: `the removal failed unexpectedly (${gd(d(oe), Fr)})` }));
      if (Y.outcome === "failed") {
        if (D = Y.needsForce ? "unverified" : Y.errorSummary === n7e ? "identity_changed" : Y.holdsWorktreesInside ? "worktrees_inside" : "remove_failed", K = Y.needsForce ? void 0 : Y.errorSummary, Y.forceRemovable !== void 0 && _zn(W)) if (ae !== void 0) j = ae;
        else if (await Bt(e, W, E, { includeUnsettled: false }, o) === "claimed") j = "shared_record";
        else U = Y.forceRemovable;
      } else if (Y.outcome === "left_in_place") A = gd(E);
      else if (Y.forcedDirectoryRemoval) {
        let { keptBranch: oe } = Y.forcedDirectoryRemoval;
        y = { worktree: gd(W), ...oe !== void 0 && { keptBranch: gd(oe, Dr) } };
      }
    }
    if (D) {
      if (!n.internal) p("job_delete", `worktree_kept_${D}`, { had_worktree: true });
      return { removed: false, keptWorktree: gd(W), keptReason: D, ...K !== void 0 && { keptErrorSummary: K }, ...N !== void 0 && { keptUnpushed: N }, ...D === "unpushed" && N !== void 0 ? { discardUnpushed: { headSha: N.headSha, worktreeDigest: le } } : U !== void 0 && T && n.discardUnpushed !== void 0 && { discardUnpushed: n.discardUnpushed }, ...U !== void 0 && { forceRemoveWorktree: { worktreeDigest: le, cause: U } }, ...j !== void 0 && { forceRemoveWithheld: j }, ...Ce !== void 0 && (D === "dirty" || D === "remove_failed") && { submoduleWork: Ce } };
    }
  }
  let w = r?.fan?.some((E) => E.kind === "shell" && E.doneAt === void 0) ?? false;
  await gn(_o(e), { waitMs: w ? 4e3 : 0 });
  try {
    await Cr(_o(e), { recursive: true, force: true });
  } catch (E) {
    if (Hf(_o(e)), t(`deleteJob: failed to remove job dir for ${e}: ${d(E)}`, { level: "warn" }), !n.internal) m("job_delete", "jobdir_rm_failed", { had_worktree: Boolean(r?.worktreePath) });
    return { removed: false, error: `couldn't remove the session's state directory (${zr(d(E))})`, errorCode: "jobdir_rm_failed" };
  }
  if (z() && o !== void 0 && Rm(Gfr(e)) === void 0) await L9t(o, e);
  else await Or(sTe(e)).catch(() => {
  });
  if (Hf(_o(e)), !n.internal) if (A) p("job_delete", "worktree_left_in_place", { had_worktree: true, discard_confirmed: T });
  else if (y) p("job_delete", "worktree_force_removed", { had_worktree: true, discard_confirmed: T });
  else g("job_delete", { had_worktree: Boolean(r?.worktreePath), discard_confirmed: T });
  return { removed: true, discardConfirmed: T, ...A && { leftWorktreeDir: A }, ...y && { forcedWorktreeRemoval: y } };
}
async function Lr(e, n, o, r) {
  for (let u of await px(void 0, r).catch(() => [])) {
    if (u.id === e || !u.state.worktreePath || Ga(u.state)) continue;
    let s = An(u.state.worktreePath, n, o);
    if (s === "match") return { jobId: u.id, verified: true };
    if (s === "unverifiable") return { jobId: u.id, verified: false };
    let h = await Cn(u.state.worktreePath, o);
    if (xe(h, n)) return { jobId: u.id, verified: true };
  }
  return null;
}
function An(e, n, o) {
  if (xe(e, o) || xe(e, n)) return "match";
  if (!gl(e)) return "no_match";
  let r = Pr(e);
  if (xe(r, o) || xe(r, n)) return "match";
  return mt(e) && !Yn(e) && !hl(e) ? "unverifiable" : "no_match";
}
function xe(e, n) {
  return ft(e) === ft(n);
}
function ft(e) {
  return rf(In(e));
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
    if (s.kind === "bg" && typeof s.jobId === "string" && BP.test(s.jobId)) {
      if (await On(_o(s.jobId)) === "missing") continue;
    }
    return s;
  }
  return;
}
function Cn(e, n) {
  let o = pe();
  if (!mt(e) || gl(e) || Qi(e, o) && Qi(e, n)) return e;
  let r = O1(ie(), e, { surfaceNetworkRaw: true, anchors: [o, n] });
  if (r === zy) return e;
  if (r !== void 0 && (gl(r) || Qi(r, o) && Qi(r, n))) return e;
  return Ke(e).catch(() => e);
}
async function On(e) {
  return Ar(Pt(e, "state.json")).then(() => "present", (n) => G(n) ? "missing" : "unreadable");
}
async function Bt(e, n, o, { includeUnsettled: r }, u) {
  let s;
  try {
    s = await Tr(jD(), { withFileTypes: true });
  } catch (h) {
    return G(h) ? null : "unreadable";
  }
  for (let h of s) {
    if (!h.isDirectory() || h.name === e) continue;
    let A = Pt(jD(), h.name), y = await lo(A, u);
    if (y === null) {
      if (await On(A) === "missing") continue;
      return "unreadable";
    }
    if (!y.worktreePath || !r && !Ga(y)) continue;
    let T = An(y.worktreePath, n, o);
    if (T === "match") return "claimed";
    if (T === "unverifiable") return "unreadable";
    let w = await Cn(y.worktreePath, o);
    if (xe(w, n)) return "claimed";
  }
  return null;
}
async function Ge(e, n, o) {
  return await Lfr(e, o);
}
function Bn(e, n) {
  return e.kind === "bg" && (e.jobId === n || e.sessionId?.startsWith(n) === true);
}
export {
  $fr,
  F5,
  Ffr,
  G1,
  I9t,
  Jat,
  Lfr,
  Nfr,
  O9t,
  P9t,
  V4e,
  Wee,
  X$e,
  Xat,
  Ycs,
  cPn,
  dPn,
  fxt,
  ito,
  mxt,
  oto,
  pPn,
  rto,
  sto,
  uPn,
  vPe
};
