// linux/telemetry/bg-roster-parse-failed.js — Claude Code 2.1.310（linux）模块 chunk-fnsjs1v2.js
import { Kt } from "../shared/chunk-3b9c376b.js";
import { U, q, $c, T2, PB, srs, xp, ipe, Om, UYt, eAn, J } from "../context/not-admin-owned.js";
import { b, c, ce, Ka, Hn } from "../agents/third-party.js";
import { R, Qe, N, d, E, Er, yh, XSe, G } from "./anthropic-workspace-id.js";
import { X } from "../shared/chunk-57ff8cc1.js";
import { zs, uP } from "../fs/node-modules.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { _, te, am, sCt, Ms, t } from "../fs/gitlab-runner-authentication-token.js";
import { re, Vg, Pq } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { Ir } from "../shell/invalid-type.js";
import { i } from "../shared/environment.js";
import { QBs, ZBs, $Lr, _De, Fne } from "../permissions/agent-memory.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { $$ } from "../fs/reply-across-default-dirs.js";
import { t8 } from "../git/needs-reply.js";
import { _r, We } from "../plugins/chunk-0a4c51cf.js";
import { a } from "./chunk-9097a12b.js";
import { Os, PM, aW, Dn } from "../fs/utf-8.8f8e.js";
import { CY } from "../fs/attach-journal.js";
import { sbe, JE } from "../fs/chunk-b6c2193e.js";
import { pze } from "../shared/general-purpose.js";
import { U$e } from "../context/utf-8.js";
import { Cbe } from "../settings/workflow-launch-exec.js";
import { nw } from "../cli/chunk-af2447be.js";
import { Van } from "../permissions/chunk-f7872d86.js";
import { Aoe, $t, DYo, b4r, Sb } from "../settings/global-config-and-gates.js";
import { vl } from "../fs/chunk-475c6783.js";
import { Su } from "../mcp/chunk-0e2a1db6.js";
import { Ae } from "../models/total-tokens-reminder.js";
import { Vi } from "../mcp/allowed-warning.js";
import { owt } from "../models/ccr-unsupported-default-mode-ignored.js";
import { bDe } from "../shared/chunk-ab773be5.js";
import { Jwt, Zce } from "../settings/chunk-854b416f.js";
import { Xa } from "../fs/daemon-worker.js";
import { Pbe } from "../models/claude-mythos-preview.js";
import { ost, o, v, M, oe, T, u, yt, $e, Gr, me, B, A } from "../vendor/zod/string-format.js";
import { Wh } from "../shared/chunk-65fb1c9c.js";
import { Zm, vt } from "./chunk-a27d4004.js";
import { z } from "../shared/chunk-be29de51.js";
var ft = /* @__PURE__ */ new Set(["EBUSY", "EMFILE", "ENFILE", "EAGAIN", "EINTR"]);
function n8(e) {
  if (e === void 0) return false;
  return ft.has(e) || e === "EPERM" && O() === "windows";
}
function RFt(e) {
  return e.code === "Unavailable" || "telemetryCode" in e && n8(e.telemetryCode);
}
import { delimiter as De, isAbsolute as mt } from "path";
var ze = ["shell", "slash", "fleet", "spare", "respawn"];
function jBs(e) {
  return ze.includes(e);
}
var Oc = 1, Lan = 1, NP = /^[a-f0-9]{8}$/, WBs = /^[a-f0-9]{32}$/, gt = ["failed", "taken", "ended"], Sht = /^(?:cse|session)_[A-Za-z0-9_-]{1,128}$/;
function Le(e) {
  return !Pq.test(e);
}
var Dne = "\x1B_cc-daemon-detach\x1B\\", se = "\x1B\\", Oe = "\x1B_cc-detach-msg;", zqn = "\x1B_cc-daemon-hint\x1B\\";
function wht(e) {
  return zqn + e + zqn;
}
var fe = "\x1B_cc-d-imark;", ht = Buffer.from(fe, "latin1");
function ILr(e) {
  return fe + _(e) + se;
}
function EOo(e, n, r) {
  let s = r?.maxPayload ?? 512, f = e.length > 0 ? Buffer.concat([e, n]) : n, m = [], g = [], S = 0, y = 0, h = -1, w = false;
  for (; ; ) {
    let P = f.indexOf(fe, y);
    if (P < 0) break;
    let L = P + fe.length, k = w ? -1 : h >= L ? h : h = f.indexOf(se, L);
    if (k < 0) {
      w = true;
      let H = f.subarray(P);
      if (H.length > fe.length + s) {
        y = L;
        continue;
      }
      let V = false;
      for (let ae = L; ae < f.length; ae++) {
        let ve = f[ae];
        if (ve === 24 || ve === 26 || ve === 27 && ae < f.length - 1) {
          V = true;
          break;
        }
      }
      if (V) {
        y = L;
        continue;
      }
      return g.push(f.subarray(S, P)), { marks: m, carry: Buffer.from(H), cleaned: g.length === 1 ? g[0] : Buffer.concat(g) };
    }
    let j = false;
    if (k - L <= s) try {
      let H = te(f.subarray(L, k).toString("utf8"));
      if (H !== null && typeof H === "object" && (H.kind === "content_paint" || H.kind === "prompt_idle")) {
        if (j = true, r?.requireNonce === void 0 || H.nonce === r.requireNonce) m.push({ kind: H.kind, msgsLoaded: vht(H.msgsLoaded), msgsInJsonl: vht(H.msgsInJsonl), msgsRenderedAtFirstPaint: vht(H.msgsRenderedAtFirstPaint) });
      }
    } catch {
    }
    if (j) g.push(f.subarray(S, P)), S = k + se.length;
    y = j ? k + se.length : L;
  }
  let C = f.subarray(y), D = ht, x = 0, I = Math.min(C.length, D.length - 1);
  e: for (let P = I; P > 0; P--) {
    let L = C.length - P;
    for (let k = 0; k < P; k++) if (C[L + k] !== D[k]) continue e;
    x = P;
    break;
  }
  return g.push(f.subarray(S, f.length - x)), { marks: m, carry: x > 0 ? Buffer.from(C.subarray(C.length - x)) : Buffer.alloc(0), cleaned: g.length === 1 ? g[0] : Buffer.concat(g) };
}
function vht(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 0 && e <= Me ? e : void 0;
}
var Me = 1e9, le = () => v().int().nonnegative().max(Me).optional(), bt = p(() => u({ kind: B(["content_paint", "prompt_idle"]), msgsLoaded: le(), msgsInJsonl: le(), msgsRenderedAtFirstPaint: le() })), St = p(() => yt({ kind: B(["content_paint", "prompt_idle"]), msgsLoaded: le(), msgsInJsonl: le(), msgsRenderedAtFirstPaint: le() }));
function kOo(e) {
  let n = St().safeParse(e);
  if (!n.success) return null;
  return { kind: n.data.kind, msgsLoaded: n.data.msgsLoaded, msgsInJsonl: n.data.msgsInJsonl, msgsRenderedAtFirstPaint: n.data.msgsRenderedAtFirstPaint };
}
function nde(e) {
  if (!e) return Dne;
  return Oe + e + se + Dne;
}
function TOo(e) {
  let n = e.indexOf(Oe);
  if (n < 0) return;
  let r = n + Oe.length, s = e.indexOf(se, r);
  if (s < 0) return;
  return e.subarray(r, s).toString("utf8");
}
function Ne(e, n) {
  let r = {};
  for (let [s, f] of Object.entries($Lr(e, n))) r[s] = s.toUpperCase() === "CLAUDE_CODE_PLUGIN_DIRS" ? f.split(De).map((m) => uP(m.trim())).join(De) : f;
  return r;
}
var Kqn = p(() => u({ proto: v().int().min(Lan).max(Oc), short: o().regex(NP), nonce: o().regex(NP).optional(), sessionId: o().transform(uP), createdAt: v(), source: B(ze).catch("fleet"), cwd: o().transform(uP), launch: Gr("mode", [u({ mode: A("prompt"), args: T(o()).transform(Fne), restoresTranscript: M().optional() }), u({ mode: A("resume"), sessionId: o().transform(uP), transcriptPath: o().transform(uP).optional(), fork: M(), flagArgs: T(o()).transform(Fne), restoresTranscript: M().optional() }), u({ mode: A("exec"), cmd: o().transform(uP), args: T(o()).transform((e) => e.map(uP)) })]), env: me(o(), o()).default({}).transform((e) => Ne(e, "the background job's launch request")), reattachEnv: me(o(), o()).transform((e) => Ne(e, "the launch request's reattach values")).optional(), worktree: u({ path: o().transform(uP), ownershipToken: o() }).optional(), isolation: B(["none", "worktree"]).default("none"), respawnFlags: T(o()).default([]).transform(Fne), attachStallRespawns: v().int().optional(), agent: o().optional(), routine: o().optional(), seed: u({ intent: o(), name: o().optional() }).optional(), cols: v().int().positive().max(bDe).optional(), rows: v().int().positive().max(bDe).optional() })), PFt = /ERESPAWNING|ESTARTING/, IFt = /\bE(?:NOENT|CONNREFUSED|CONNRESET)\b|control socket closed/, Eht = "ERESPAWNING", OFt = "updated Claude Code", eQe = "stalled", Nan = "legacy", MFt = "EHOSTDEAD", iGe = "terminal host process died — press Enter to restart", tQe = "This session's terminal host process died (the conversation is saved)", DFt = "terminal host process died — its output is gone; the command was not run again", nQe = "This command's terminal host process died — its output is gone and the command was not run again", HFt = /ESTALLED|EUNVERIFIED|EHOSTDEAD/, rQe = /^EKICKED:\s*/, AOo = "Session opened in another window";
function Vqn(e, n, r) {
  return n !== void 0 && WBs.test(n) ? `${e}:${n}: ${r}` : `${e}: ${r}`;
}
var LFt = /^E[A-Z]+:/;
function Se() {
  return o().refine($$, "remote IPC path");
}
var Ue = p(() => yt({ pid: v(), procStart: o().optional(), sessionId: o().transform(uP), rendezvousSock: Se(), ptySock: Se().optional(), messagingSock: Se().optional(), cliVersion: o().optional(), startedAt: v(), attempt: v(), cwd: o().transform(uP), worktreePath: o().transform(uP).optional(), dispatch: Kqn(), pendingRespawn: A("upgrade").optional(), decModes: T(v()).optional(), firedInteractiveMarks: T(oe()).transform((e) => {
  let n = [];
  for (let r of e) {
    let s = bt().safeParse(r);
    if (s.success) n.push(s.data);
  }
  return n.slice(0, 2);
}).optional().catch(void 0), rvAuth: o().optional(), ptyAuth: o().optional(), replPid: v().optional(), replProcStart: o().optional() }));
function OLr(e) {
  let n = Ue().shape, r = {};
  for (let [s, f] of Object.entries(e)) if (!(s in n)) r[s] = f;
  return r;
}
var GBs = p(() => yt({ proto: v().int().min(Lan).max(Oc), supervisorPid: v().catch(0), updatedAt: v().catch(0), workers: me(o().regex(NP), Ue()) })), COo = p(() => {
  let e = o().regex(NP), n = v().int().min(Lan).max(Oc);
  return Gr("op", [u({ proto: n, op: A("ping") }), u({ proto: n, op: A("nudge") }), u({ proto: n, op: A("yield") }), u({ proto: n, op: A("lease"), client: aGe().optional() }), u({ proto: n, op: A("leases") }), u({ proto: n, op: A("await-ack"), short: e, nonce: e.optional(), timeoutMs: v() }), u({ proto: n, op: A("dispatch"), d: Kqn(), timeoutMs: v(), auth: o().optional() }), u({ proto: n, op: A("list") }), u({ proto: n, op: A("has"), short: e }), u({ proto: n, op: A("kill"), short: e, signal: B(["SIGTERM", "SIGKILL"]).optional(), handoff: M().optional(), evict: M().optional() }), u({ proto: n, op: A("reply"), short: e, text: o(), auth: o().optional(), nextTurn: M().optional() }), u({ proto: n, op: A("subscribe"), short: e, tail: v().optional() }), u({ proto: n, op: A("attach"), short: e, auth: o().optional(), cols: v().int().min(1).max(bDe), rows: v().int().min(1).max(bDe), attachId: o().optional(), caps: u({ imark: M().optional(), terminal: o().nullable(), mux: B(["tmux", "screen", "zellij"]).nullable(), ssh: M(), wheelFlood: M().optional(), hyperlinks: M().optional(), progressReporting: M().optional(), printsUnknownSequences: M().optional(), wtSession: M().optional(), isVscodeTerm: M().optional(), keyDialect: B(["st", "rxvt"]).nullable().optional().catch(void 0), browser: o().nullable().optional(), colorLevel: $e([A(0), A(1), A(2), A(3)]).optional(), syncOutput: M().optional(), editor: o().nullable().optional(), systemTheme: B(["dark", "light"]).optional(), tmuxSocket: Se().refine(mt).optional().catch(void 0), sessionTabs: o().regex(WBs).optional().catch(void 0), cloudTabs: A(true).optional().catch(void 0), tabsLanding: u({ why: B(gt), from: o().regex(NP) }).optional().catch(void 0) }).optional(), holdingFrame: M().optional() }), u({ proto: n, op: A("resize"), short: e, cols: v().int().min(1).max(bDe), rows: v().int().min(1).max(bDe), attachId: o().optional() }), u({ proto: n, op: A("ensure-spare"), cwd: o() }), u({ proto: n, op: A("permission-response"), short: e, requestId: o(), allow: M(), auth: o().optional() }), u({ proto: n, op: A("respawn-stale"), short: e }), u({ proto: n, op: A("shutdown"), reapWorkers: M().optional() })]);
}), aGe = p(() => u({ label: o().max(64).refine(Le), cwd: o().max(4096).refine(Le).catch("(not shown)"), pid: v().int().positive().catch(0), cloudSessionId: o().regex(Sht).optional().catch(void 0) })), ROo = p(() => u({ ok: A(true), op: A("lease") })), wt = ["upgrade", "service_recall", "displaced", "yield", "shutdown_op", "idle_exit", "bg_manager_failed", "signal", "unknown"], xOo = p(() => u({ op: A("lease"), closing: B(wt) })), oQe = "cloud session", qqn = ["cli-bg-dispatch", "claude agents", oQe];
import { lstat as ie, mkdir as Te, readdir as jt, readFile as he, rm as pe, stat as Wr } from "fs/promises";
import { basename as Y, dirname as Jt, isAbsolute as at, join as K, relative as Wt } from "path";
function je(e) {
  if (e === void 0 || !e.kinds.includes("session_cron")) return false;
  let n = e.wake;
  if (n === void 0) return true;
  return n.fires >= 1 && n.keepalive !== true;
}
function ZJe(e) {
  if (!e || e.length === 0) return "";
  return e.map((n) => {
    let r = `${n.id ?? n.label}:${n.doneAt ?? "-"}:${n.failed ? "x" : ""}`;
    return n.kind === "todo" ? `${r}:${n.startedAt ?? "-"}` : r;
  }).join("|");
}
function xFt() {
  let { tasks: e, queued: n, kinds: r, drainableMonitors: s, wake: f } = bht();
  return { tasks: e, queued: n, kinds: r, ...s !== void 0 && { drainableMonitors: s }, ...f !== void 0 && { wake: f } };
}
function vOo(e) {
  t8().publishInFlightSnapshot(e);
}
function bht() {
  let e = t8().inFlightSnapshot, n = Om().length;
  if (n === 0) return { ...e };
  let r = Et();
  return { ...e, tasks: e.tasks + n, kinds: [...e.kinds, "session_cron"], ...r !== void 0 && { wake: r } };
}
function Et() {
  let e = Om().find((n) => n.kind === "loop");
  if (e === void 0) return;
  return { at: e.scheduledFor, reason: e.reason, fires: UYt(), ...e.keepalive && { keepalive: true } };
}
function UBs(e) {
  let n = t8().inFlightSnapshotChanged.subscribe(e), r = eAn(() => {
    try {
      e();
    } catch {
    }
  });
  return () => {
    n(), r();
  };
}
import { lstat as _t, mkdir as At, readFile as Rt, rename as zt, rm as qe } from "fs/promises";
import { dirname as Ot } from "path";
function Je(e) {
  return e;
}
function Ge(e) {
  return Je(new Set(e));
}
function BBs(e) {
  let n = /* @__PURE__ */ new Set(), r = (s) => {
    if (Array.isArray(s)) s.forEach(r);
    else if (typeof s === "object" && s !== null) {
      let { properties: f } = s;
      if (typeof f === "object" && f !== null) for (let m of Object.keys(f)) n.add(m);
      Object.values(s).forEach(r);
    }
  };
  try {
    r(ost(e, { unrepresentable: "any" }));
  } catch {
  }
  return Je(n);
}
function PLr(e, n) {
  let r;
  return Hn((e ?? []).map((s) => typeof s === "number" || typeof s === "string" && (r ??= n()).has(s) ? String(s) : "*").join("."));
}
import { lstat as kt } from "fs/promises";
async function MLr(e) {
  if (J()) return { kind: "proceed" };
  try {
    let n = await kt(e);
    return n.isFile() ? { kind: "proceed" } : { kind: "refused", symlink: n.isSymbolicLink() };
  } catch (n) {
    return G(n) ? { kind: "proceed" } : { kind: "error", error: n };
  }
}
function DLr(e) {
  return e?.code === "Failed" && (e.telemetryCode === "ENXIO" || e.telemetryCode === "EFBIG" || e.telemetryCode === "ELOOP" || e.telemetryCode === "ENAMETOOLONG");
}
var Pt = Ge(["proto", "supervisorPid", "updatedAt", "workers", "pid", "procStart", "sessionId", "rendezvousSock", "ptySock", "messagingSock", "rvAuth", "ptyAuth", "replPid", "replProcStart", "cliVersion", "startedAt", "attempt", "cwd", "worktreePath", "dispatch", "pendingRespawn", "decModes", "firedInteractiveMarks", "kind", "msgsLoaded", "msgsInJsonl", "msgsRenderedAtFirstPaint", "short", "restoresTranscript", "nonce", "createdAt", "cols", "rows", "source", "launch", "mode", "args", "fork", "flagArgs", "cmd", "env", "reattachEnv", "worktree", "path", "ownershipToken", "isolation", "respawnFlags", "seed", "intent", "name", "agent", "routine", "attachStallRespawns"]), Pe = 8388608;
function NFt() {
  return We.daemon(["roster.json"]);
}
function Q() {
  return { proto: Oc, supervisorPid: process.pid, updatedAt: Date.now(), workers: {} };
}
async function JN(e, n) {
  if (n) {
    let { roster: s, inspectFailed: f } = await Xe(n, e);
    return f ? { ...s, inspectFailed: true } : s;
  }
  let r;
  try {
    let s = await _t(CY());
    if (!s.isFile() || s.size > Pe) {
      if (!e?.silent) if (l(Error(`roster.json ${s.isFile() ? `too large (${s.size} bytes) — quarantining` : "is not a regular file — removing"}`)), a("tengu_bg_roster_parse_failed", { orphaned: -1, quarantined: 1, errCode: s.isFile() ? b("E2BIG") : b("EFTYPE") }), s.isFile()) await ge(void 0);
      else await qe(CY(), { recursive: true, force: true }).catch((f) => l(f));
      return { ...Q(), parseFailed: true };
    }
    r = te(await Rt(CY(), "utf8"));
  } catch (s) {
    if (G(s)) return Q();
    if (!e?.silent) l(Qe(N(s), "bg roster.json read/parse failed")), a("tengu_bg_roster_parse_failed", { orphaned: -1, quarantined: 1, errCode: yh(s) }), await ge(void 0);
    return { ...Q(), parseFailed: true };
  }
  return Ye(r, e, void 0);
}
async function Ye(e, n, r) {
  let s;
  try {
    s = GBs().safeParse(e);
  } catch (f) {
    if (!n?.silent) l(f), a("tengu_bg_roster_parse_failed", { orphaned: Ve(e), quarantined: 1, errCode: yh(f) }), await ge(r);
    return { ...Q(), parseFailed: true };
  }
  if (s.success) {
    delete s.data.parseFailed, delete s.data.inspectFailed;
    let f = e, m = ["supervisorPid", "updatedAt"].filter((g) => !Number.isFinite(f[g]));
    if (m.length > 0 && !n?.silent) t(`[daemon] roster.json stamp field(s) healed on read: ${m.join(", ")}`, { level: "warn" }), a("tengu_bg_roster_parse_failed", { orphaned: 0, quarantined: 0, issuePath: Ka(m), issueCode: b("healed_stamp") });
    return s.data;
  }
  if (!n?.silent) {
    let f = Ve(e), m = s.error.issues[0];
    l(Error(`roster.json parse failed at ${Ke(m?.path) || "<root>"} (orphaning ${f} worker(s)): ${m?.message}`)), a("tengu_bg_roster_parse_failed", { orphaned: f, quarantined: 1, issuePath: Ke(m?.path), issueCode: ce(m?.code) }), await ge(r);
  }
  return { ...Q(), parseFailed: true };
}
async function ge(e) {
  if (!e) {
    await zt(CY(), `${CY()}.corrupt.${Date.now()}`).catch((r) => l(r));
    return;
  }
  let n = await e.move(NFt(), We.daemon([`roster.json.corrupt.${Date.now()}`])).catch(() => {
    return;
  });
  if (n === void 0 || !n.ok) l(new R(`roster quarantine v5 move failed: ${n === void 0 ? "threw" : vt(n.error)}`, "roster quarantine v5 move failed"));
}
async function Tt(e) {
  await qe(e, { recursive: true, force: true }).catch((n) => l(n));
}
async function He(e, n, r, s) {
  if (!n?.silent) l(r), a("tengu_bg_roster_parse_failed", { orphaned: -1, quarantined: 1, errCode: b(s) }), await It(e);
  return { ...Q(), parseFailed: true };
}
async function Xe(e, n) {
  let r = await MLr(CY());
  if (r.kind === "refused") {
    if (!n?.silent) l(Error("roster.json is not a regular file — removing")), a("tengu_bg_roster_parse_failed", { orphaned: -1, quarantined: 1, errCode: b("EFTYPE") }), await Tt(CY());
    return { roster: { ...Q(), parseFailed: true }, inspectFailed: false };
  }
  if (r.kind === "error") return Ze(n, Qe(N(r.error), "bg roster.json read/parse failed"), yh(r.error));
  return xt(e, n);
}
function Ze(e, n, r) {
  if (!e?.silent) l(n), a("tengu_bg_roster_parse_failed", { orphaned: -1, quarantined: 0, errCode: r });
  return { roster: { ...Q(), parseFailed: true }, inspectFailed: true };
}
async function xt(e, n) {
  let r = await e.read([{ key: NFt(), offset: 0, length: Pe + 1 }]).catch(() => {
    return;
  });
  if (r === void 0 || !r.ok) {
    if (r !== void 0 && DLr(r.error)) return { roster: await He(e, n, new R(`bg roster.json v5 read refused: ${r.error.telemetryCode} — removing`, "bg roster.json v5 read refused — removing"), "EV5READ"), inspectFailed: false };
    return Ze(n, new R(`bg roster.json v5 read failed: ${r?.error.code ?? "threw"}`, "bg roster.json v5 read failed"), b("EV5READ"));
  }
  let s = r.value.items[0];
  if (!s.found) return { roster: Q(), inspectFailed: false };
  if (s.totalBytes > Pe) return { roster: await He(e, n, new R(`roster.json too large (${s.totalBytes} bytes) — removing`, "roster.json too large — removing"), "E2BIG"), inspectFailed: false };
  let f;
  try {
    f = te(Buffer.from(s.value).toString("utf8"));
  } catch (m) {
    if (!n?.silent) l(Qe(N(m), "bg roster.json read/parse failed")), a("tengu_bg_roster_parse_failed", { orphaned: -1, quarantined: 1, errCode: yh(m) }), await ge(e);
    return { roster: { ...Q(), parseFailed: true }, inspectFailed: false };
  }
  return { roster: await Ye(f, n, e), inspectFailed: false };
}
async function It(e) {
  let n = await e.delete(NFt()).catch(() => {
    return;
  });
  if (n === void 0 || !n.ok) l(new R(`roster quarantine v5 delete failed: ${n?.error.code ?? "threw"}`, "roster quarantine v5 delete failed"));
}
function Ke(e) {
  return PLr(e, () => Pt);
}
function ax(e) {
  return NP.test(e) ? Hn(e) : b("invalid");
}
function Ve(e) {
  let n = e !== null && typeof e === "object" ? e.workers : void 0;
  return n !== null && typeof n === "object" && !Array.isArray(n) ? Object.keys(n).length : 0;
}
async function Ct(e, n) {
  let { parseFailed: r, inspectFailed: s, ...f } = e;
  if (n) {
    let g = await n.write(NFt(), _(f, null, 2), { mode: 384 });
    if (!g.ok) {
      let S = g.error, y = "telemetryCode" in S ? S.telemetryCode : void 0;
      if (y !== void 0 && XSe.has(y)) {
        t(`[daemon] roster write failed: ${y}`, { level: "error" });
        return;
      }
      throw new R(`roster v5 write failed: ${S.code}`, "roster v5 write failed");
    }
    return;
  }
  let m = CY();
  await At(Ot(m), { recursive: true, mode: 448 }).catch(() => {
  }), await Dn(m, _(f, null, 2), 384).catch((g) => {
    let S = E(g);
    if (S && XSe.has(S)) {
      t(`[daemon] roster write failed: ${S}`, { level: "error" });
      return;
    }
    throw g;
  });
}
var Ft = Wh();
function Hne(e, n) {
  return Ft.run("roster", async () => {
    let r = await Dt(n), s = e(r) ?? r;
    s.supervisorPid = process.pid, s.updatedAt = Date.now(), await Ct(s, n);
  });
}
async function Dt(e) {
  if (!e) return JN();
  let n = await Xe(e);
  if (n.inspectFailed) throw new R("bg roster.json update skipped: the file could not be inspected", "bg roster.json update skipped: the file could not be inspected");
  return n.roster;
}
async function Yqn(e, n) {
  if (!Xa(e)) return "dead_pid";
  if (!await JE(e, n)) return "procstart_mismatch";
  if (await sbe(e)) return "zombie";
  return "live";
}
async function $an(e, n) {
  return await Yqn(e, n) === "live";
}
function gDe() {
  return null;
}
function zBs() {
  return null;
}
var Lt = /^-|^[A-Za-z][A-Za-z0-9+.-]+:\/\//;
function Lne(e) {
  return !Lt.test(e) && !e.includes("\0");
}
function POo() {
  let e = $c();
  if (e === void 0 || Ae() === "mantle") return;
  if (e === null) return "default";
  if (!e) return;
  if (Aoe($t(e))) return;
  if (T2()?.fallbackModel === e) return;
  if (!Lne(e)) return;
  return e;
}
function et(e) {
  let n = e.trim().toLowerCase();
  return n === "default" || Pbe(n);
}
function KBs() {
  return PB().includes("--restricted");
}
function ghe(e, n, { carryModel: r = true } = {}) {
  let s = ye(e.additionalWorkingDirectories, ["cliArg"]), f = [], m = PB();
  for (let x = 0; x < m.length; x++) {
    let I = m[x];
    if (I === "--add-dir") x++;
    else if (!r && I === "--fallback-model") {
      let P = (m[x + 1] ?? "").split(",").map((L) => L.trim()).filter((L) => et(L));
      if (x++, P.length > 0) f.push("--fallback-model", P.join(","));
    } else if (I !== void 0) f.push(I);
  }
  let g = owt(n), S = Nt(), y = POo(), h = y !== void 0 && (r || et(y)) ? y : void 0, w = e.isBypassPermissionsModeAvailable && !f.includes("--allow-dangerously-skip-permissions"), C = srs(), D = ipe();
  return [...[], ...[], ...[], ...f, ...D === void 0 ? [] : [D ? "--chrome" : "--no-chrome"], ...w ? ["--allow-dangerously-skip-permissions"] : [], ...s.flatMap((x) => ["--add-dir", x]), ...h !== void 0 ? ["--model", h] : [], ...g !== void 0 ? ["--effort", g] : [], ...S !== void 0 ? ["--fast-mode", S] : [], "--permission-mode", e.mode];
}
function Nt() {
  let e = nw("--fast-mode");
  if (e !== "on" && e !== "off") return;
  let n = xp()?.fastMode;
  return typeof n === "boolean" ? n ? "on" : "off" : e;
}
function IOo(e) {
  let n = Su([e]);
  return n.length === 1 && n[0] === e && Lne(e);
}
function Nne(e, n) {
  return [...n ? [`launch flags: ${Van}`] : [], ...(e.alwaysDenyRules.session ?? []).length > 0 || (e.alwaysAskRules.session ?? []).length > 0 ? ["permission rules set for this session only"] : [], ...(e.alwaysAskRules.cliArg ?? []).length > 0 ? ["ask-before-running rules with no command-line form"] : [], ...[...e.alwaysAllowRules.cliArg ?? [], ...e.alwaysDenyRules.cliArg ?? []].some((r) => !IOo(r)) ? ["permission rules a command line cannot carry intact"] : [], ...ye(e.additionalWorkingDirectories, ["cliArg"]).some((r) => !Lne(r)) ? ["added directories a command line cannot carry intact"] : []];
}
function hhe(e, n) {
  return [...(e.alwaysAllowRules.cliArg ?? []).flatMap((r) => ["--allowed-tools", r]), ...(e.alwaysDenyRules.cliArg ?? []).flatMap((r) => ["--disallowed-tools", r]), ...Dk("--agent", n.agent), ...Dk("--agents", n.agents), ...Dk("--append-system-prompt", n.appendSystemPrompt), ...Dk("--system-prompt-snapshot", Fan(n.systemPromptSnapshot))];
}
function Dk(e, n) {
  if (!n) return [];
  return Lne(n) ? [e, n] : [`${e}=${n}`];
}
function Fan(e) {
  return e === void 0 ? void 0 : e ? "on" : "off";
}
function ye(e, n) {
  return Array.from(e.values()).filter((r) => n.includes(r.source)).filter((r) => !zs(r.path)).map((r) => r.path);
}
function Uan(e) {
  return Zce({ ...Jwt(PB()).config, addDir: tt(e), settingSources: Cbe() });
}
function VBs(e, n) {
  return [...Bt(e), ...tt(n).flatMap((r) => ["--add-dir", r])];
}
function Bt(e) {
  let n = [], r = false;
  for (let s of e) if (r) r = false;
  else if (s === "--add-dir") r = true;
  else n.push(s);
  return n;
}
function tt(e) {
  return ye(e, ["cliArg"]).filter(Lne);
}
function Xqn(e) {
  return ye(e, ["session"]).filter(Lne);
}
var OOo = "CLAUDE_RELAUNCH_SESSION_ADD_DIRS";
function kht(e) {
  let n = Xqn(e);
  return n.length > 0 ? { [OOo]: _(n) } : {};
}
function qBs(e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (s === "--channels") {
      r++;
      continue;
    }
    if (s.startsWith("--channels=")) continue;
    n.push(s);
  }
  return n;
}
var LL = "(ungrouped)", lx = "(earlier)", Mt = 64, Ut = /* @__PURE__ */ new Set(["pinned", "ungrouped", LL, "past", lx]);
function Ban(e) {
  return Ut.has(e.toLowerCase());
}
function HLr(e) {
  return am(e).slice(0, Mt);
}
function we(e) {
  if (e === void 0) return;
  let n = HLr(e);
  return n && !Ban(n) ? n : void 0;
}
class nt {
  #e = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ new Set();
  #n = /* @__PURE__ */ new Set();
  #r = /* @__PURE__ */ new Set();
  #o = /* @__PURE__ */ new Set();
  peek(e) {
    return this.#e.get(e);
  }
  invalidate(e) {
    this.#e.delete(e);
  }
  noteAbsent(e) {
    this.#e.delete(e), this.#t.delete(e);
  }
  noteRejected(e, n) {
    this.#e.set(e, { mtimeKey: n, state: null });
  }
  noteParsed(e, n, r) {
    if (this.#e.size > 1e3) this.#e.clear();
    this.#e.set(e, { mtimeKey: n, state: r }), this.#t.delete(e);
  }
  noteHit(e) {
    this.#t.delete(e);
  }
  shouldReportTransient(e) {
    if (this.#t.has(e)) return false;
    return this.#t.add(e), true;
  }
  shouldReportRecovered(e) {
    if (this.#n.has(e)) return false;
    return this.#n.add(e), true;
  }
  noteCleanRead(e) {
    this.#n.delete(e);
  }
  shouldReportPruned(e) {
    if (this.#r.has(e)) return false;
    return this.#r.add(e), true;
  }
  notePruneCandidateLive(e) {
    this.#r.delete(e);
  }
  shouldLogSidecarFallback(e) {
    if (this.#o.has(e)) return false;
    return this.#o.add(e), true;
  }
}
var rt = new W(() => new nt());
class ot {
  drafts = /* @__PURE__ */ new Map();
  pins = /* @__PURE__ */ new Map();
}
var RLr = new W(() => new ot());
async function xLr(e, n, { cap: r, screens: s, screenKey: f, heal: m }) {
  if (s.get(f) !== "ok") {
    let y = await e.statMeta(n);
    if (!y.ok) {
      if (y.error.code !== "NotFound") s.set(f, "refused"), await m?.();
      return null;
    }
    if (y.value.size > r) return s.set(f, "refused"), null;
    s.set(f, "ok");
  }
  let g = await e.readText([{ key: n, offset: 0, length: r + 1 }]);
  if (!g.ok) return s.delete(f), await m?.(), null;
  let S = g.value.items[0];
  if (!S.found) return null;
  if (S.totalBytes > r) return s.set(f, "refused"), null;
  return S.value;
}
var de = () => o().transform(uP), st = /^[a-f0-9]{8}$/, Gt = /^(cse_|session_)[A-Za-z0-9_-]{1,128}$/;
function ue(e, n) {
  return (r) => {
    if (n(r)) return r;
    t(`[jobs] dropped malformed ${e} from persisted job state`, { level: "warn" });
    return;
  };
}
var Ee = p(() => u({ state: o(), detail: o(), tempo: B(["active", "idle", "blocked"]).optional().catch(void 0), inFlight: u({ tasks: v(), queued: v(), kinds: T(o()), drainableMonitors: v().int().nonnegative().optional(), wake: u({ at: v().optional(), reason: o().optional(), fires: v().int().nonnegative(), keepalive: A(true).optional() }).optional().catch(void 0) }).optional(), selfWake: M().optional().catch(void 0), fan: T(u({ id: o().optional(), kind: B(["agent", "workflow", "shell", "monitor", "mcp", "todo"]).optional().catch(void 0), label: o(), startedAt: v().optional(), doneAt: v().optional(), failed: M().optional(), group: o().optional() })).optional(), tokens: v().optional(), needs_you: M().optional(), needs: o().optional(), block: u({ questions: T(u({ question: o(), options: T(u({ label: o(), description: o() })) })) }).optional(), suggestedReply: o().optional(), needsOverlay: o().optional(), output: me(o(), o()).nullable().default(null), structuredResult: me(o(), oe()).optional(), children: T(u({ id: o(), href: o(), kind: B(["pr", "frame"]).optional().catch(void 0), title: o().optional().catch(void 0) })).nullable().default(null), linkScanOffset: v().default(0), linkScanPath: de().transform(ue("linkScanPath", (e) => at(e) && e.endsWith(".jsonl") && Kt(Y(e, ".jsonl")) !== null)).optional(), template: o(), routine: o().optional(), respawnFlags: T(o()).default([]).transform((e) => Fne(_De(e))), bgIsolation: B(["none", "worktree"]).optional().catch(void 0), providerEnv: me(o(), o()).transform((e) => {
  let n = ZBs(Ir(e, uP));
  return n && $Lr(n, "the saved job state (state.json providerEnv)");
}).optional(), sessionPermissionRules: u({ allow: T(o()), deny: T(o()), addDirs: T(de()).optional() }).optional(), memoryToggledOff: M().optional(), autoMemoryOffThisSession: M().optional(), forkSourceAlive: M().optional(), forkBoundaryAt: o().optional(), forkSessionId: o().optional(), forkParentSessionId: o().optional(), interactiveLineage: M().optional(), intent: o(), displayIntent: o().optional(), initialPrompt: o().optional(), queuedPrompt: o().optional(), name: o().optional(), nameSource: B(["user", "auto", "collision"]).optional().catch(void 0), color: o().optional(), sessionId: de(), resumeSessionId: o().transform(ue("resumeSessionId", (e) => Kt(e) !== null)).optional(), daemonShort: o().transform(ue("daemonShort", (e) => st.test(e))).optional(), cliVersion: o().optional(), cwd: de(), createdAt: o(), updatedAt: o(), firstTerminalAt: o().nullable().default(null), lastTerminalAt: o().optional(), worktreePath: de().optional(), worktreeBranch: o().optional(), worktreeHookBased: M().optional(), originCwd: de().optional(), bridgeSessionId: o().transform(ue("bridgeSessionId", (e) => Gt.test(e))).optional(), bridgeOwnerAccountUuid: o().optional(), bridgeOwnerOrganizationUuid: o().optional(), bridgeNoHistoryBackfill: M().optional(), bridgeOutboundOnly: M().optional(), bridgeSessionGroupingId: o().transform(ue("bridgeSessionGroupingId", (e) => /^sgrp_[A-Za-z0-9_]{1,128}$/.test(e))).optional(), bridgeSessionSeq: v().transform(ue("bridgeSessionSeq", (e) => Number.isInteger(e) && e >= 0)).optional(), backend: B(["daemon", "peer", "remote"]).catch("daemon").default("daemon").transform((e) => {
  if (e === "daemon") return e;
  return t(`[jobs] coerced persisted backend '${e}' to 'daemon' — peer/remote rows are never written to disk`, { level: "warn" }), "daemon";
}), sock: o().optional(), pid: v().optional(), keptBy: u({ pid: v().int().positive(), procStart: o().max(64).optional() }).optional(), sortOrder: v().optional(), stateSortOrder: v().optional(), group: o().optional(), pinned: M().optional(), reapedMidWorkAt: o().optional(), reapedUnsettledAt: o().optional(), deadEpochReapedAt: o().optional(), sessionIdTaken: M().optional().catch(void 0), replayOwed: M().optional().catch(void 0) }).transform(({ needs_you: e, ...n }) => {
  let r = n.bridgeOwnerAccountUuid !== void 0 && !U$e(n.bridgeOwnerAccountUuid) || n.bridgeOwnerOrganizationUuid !== void 0 && !U$e(n.bridgeOwnerOrganizationUuid), s = n.tempo ?? (e ? "blocked" : "idle");
  return { ...n, ...r && { bridgeOwnerAccountUuid: void 0, bridgeOwnerOrganizationUuid: void 0 }, tempo: s, ...n.lastTerminalAt === void 0 && ab(n.state) !== null && s !== "active" && { lastTerminalAt: n.firstTerminalAt || n.updatedAt } };
})), ne = "state.json", Z = 8388608;
function NL() {
  return DYo();
}
function _o(e) {
  return K(NL(), e);
}
function Pg() {
  let e = i.CLAUDE_JOB_DIR;
  if (e) return Y(e);
  let n = Sb();
  if (n) return Y(n.jobDir);
  return q().slice(0, 8);
}
function lt(e, n) {
  return _r(e) ? We.job(e, n) : void 0;
}
function Tht(e, n) {
  return b4r(e, n);
}
function Aht(e) {
  return We.job(e, [ne]);
}
function MOo(e, n) {
  let r = K(_o(e), ne), s = false, f = Number.NaN;
  function m(w) {
    if (s) return;
    if (Number.isNaN(f)) {
      f = w;
      return;
    }
    if (w === f) return;
    h(), n();
  }
  function g() {
    ie(r).then((w) => m(w.mtimeMs), () => m(-1));
  }
  g();
  let S = setInterval(g, 200), y = setTimeout(h, 1e4);
  function h() {
    if (s) return;
    s = true, clearInterval(S), clearTimeout(y);
  }
  return h;
}
function LLr() {
  return t8().ownStateWriteDepth > 0;
}
async function ad(e, n, r) {
  let s = n.inFlight?.kinds.includes("session_cron") === true, f = s && !n.selfWake && je(n.inFlight) ? { ...n, selfWake: true } : !s && n.selfWake && Wa(n) ? { ...n, selfWake: void 0 } : n, g = Wa(f) ? f.lastTerminalAt ? f : { ...f, lastTerminalAt: f.updatedAt } : f.lastTerminalAt !== void 0 ? { ...f, lastTerminalAt: void 0 } : f, { pinned: S, sortOrder: y, stateSortOrder: h, group: w, ...C } = g, D = r ? Tht(e, [ne]) : void 0, x = t8();
  x.ownStateWriteDepth++;
  try {
    if (r && D) {
      let I = await r.write(D, _(C, null, 2), { mode: 384, parent: "mustExist" });
      if (!I.ok) {
        let P = Zm(I.error);
        throw Object.assign(new R(`[jobs] v5 state write failed: ${vt(I.error)}`, "[jobs] v5 state write failed"), P !== void 0 ? { code: P } : {});
      }
    } else await Dn(K(e, ne), _(C, null, 2), 384);
  } finally {
    x.ownStateWriteDepth--, Dp(e);
  }
}
function Rl(e) {
  let n = E(e);
  if (n && (XSe.has(n) || n === "ENOENT")) {
    t(`[jobs] state write failed (${n}): ${d(e)}`, { level: "error" });
    return;
  }
  l(e);
}
function jan(e, n) {
  let r = n !== void 0 && n.id === e?.bridgeSessionId;
  return { ownerAccountUuid: r ? n.ownerAccountUuid : void 0, ownerOrganizationUuid: r ? n.ownerOrganizationUuid : void 0, noHistoryBackfill: e?.noHistoryBackfill || (n !== void 0 && !r ? true : n?.noHistoryBackfill) };
}
function rde(e, n, r, s, f) {
  if (!e) return;
  let m = { CLAUDE_BRIDGE_REATTACH_SESSION: e };
  if (n !== void 0 && n > 0) m.CLAUDE_BRIDGE_REATTACH_SEQ = String(n);
  if (s) m.CLAUDE_BRIDGE_REATTACH_GROUPING = s;
  if (f?.ownerAccountUuid) m.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT = f.ownerAccountUuid;
  if (f?.ownerOrganizationUuid) m.CLAUDE_BRIDGE_REATTACH_OWNER_ORG = f.ownerOrganizationUuid;
  if (f?.noHistoryBackfill) m.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL = "1";
  if (r !== false) m.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY = "1";
  return m;
}
function F() {
  return rt.of(U().host);
}
function ke(e, n) {
  return n?.onReadFailure === "null" ? null : e?.state ?? null;
}
var Ht = [15, 45], Vt = /* @__PURE__ */ new Set(["ELOOP", "ENXIO", "EISDIR"]);
function _e(e) {
  if (e.code !== "Failed" || e.telemetryCode === void 0) return;
  if (e.telemetryCode === "EFBIG") return "oversize";
  return Vt.has(e.telemetryCode) ? "non-regular" : void 0;
}
function dt(e) {
  return e.code === "Failed" && e.key !== void 0 && e.key.namespace === "job" && e.key.relPath[0] !== ne;
}
var qt = /* @__PURE__ */ new Set(["invariant", "permission", "environment"]);
function Yt(e) {
  if (e.code === "Unavailable") return true;
  return e.code === "Failed" && !qt.has(e.failureClass) && _e(e) === void 0 && !dt(e);
}
async function Xt(e, n) {
  let r = await n(), s = 1;
  for (let f of Ht) {
    if (r.ok || !Yt(r.error)) break;
    await X(f), r = await n(), s++;
  }
  if (r.ok) {
    if (s === 1) F().noteCleanRead(e);
    else if (F().shouldReportRecovered(e)) a("tengu_bg_state_read_recovered", { attempts: s });
  }
  return r;
}
function it(e, n, r) {
  let s = F().peek(e);
  if (!(s?.mtimeKey.startsWith("rejected:") && s.state === null)) t(`[jobs] skipping ${Y(e)}: state.json is ${r}`, { level: "warn" });
  return F().noteRejected(e, `rejected:${n}`), null;
}
function Dp(e) {
  F().invalidate(e);
}
async function Zt(e, n, r) {
  let s = Y(n), f = F().peek(n);
  if (f === void 0 || f.mtimeKey.startsWith("rejected:")) {
    let k = await e.statMeta(Aht(s));
    if (!k.ok) {
      if (k.error.code === "NotFound") return Re(n, r);
      let j = _e(k.error);
      if (j !== void 0) return it(n, j, j === "oversize" ? "too large" : "not a regular file");
    } else if (k.value.size > Z) {
      let j = `rejected:${k.value.mtimeMs}:${k.value.size}`;
      if (F().peek(n)?.mtimeKey !== j) t(`[jobs] skipping ${Y(n)}: state.json is too large (${k.value.size} bytes)`, { level: "warn" }), F().noteRejected(n, j);
      return null;
    }
  }
  let m = Aht(s), S = await Xt(n, () => e.read([m, We.job(s, ["order"]), We.job(s, ["stateOrder"]), We.job(s, ["group"])]));
  if (!S.ok && dt(S.error)) {
    if (F().shouldLogSidecarFallback(n)) t(`[jobs] ${Y(n)}: a sidecar could not be read as a regular file; using state.json alone`);
    let k = await e.read([m]);
    S = k.ok ? { ok: true, value: { items: [k.value.items[0], { found: false }, { found: false }, { found: false }] } } : k;
  }
  let y = F().peek(n);
  if (!S.ok) {
    let k = _e(S.error);
    if (k !== void 0) return it(n, k, k === "oversize" ? "too large" : "not a regular file");
    if (t(`[jobs] ${Y(n)}: v5 state read failed — ${S.error.code}`, { level: "warn" }), F().shouldReportTransient(n)) a("tengu_bg_state_read_transient", { errno: c(S.error.code), had_cache: y !== void 0 });
    return ke(y, r);
  }
  let [h, w, C, D] = S.value.items;
  if (!h.found) return Re(n, r);
  if (h.totalBytes > Z) {
    let k = `rejected:${h.mtimeMs}:${h.totalBytes}`;
    if (y?.mtimeKey === k) return null;
    return t(`[jobs] skipping ${Y(n)}: state.json is too large (${h.totalBytes} bytes)`, { level: "warn" }), F().noteRejected(n, k), null;
  }
  let x = (k) => Buffer.from(k.value.buffer, k.value.byteOffset, k.value.byteLength).toString("utf-8"), I = (k) => k.found && k.totalBytes <= Z ? x(k) : null, P = (k) => k.found && k.totalBytes <= Z ? k.version : 0, L = `v5:${h.version}:${P(w)}:${P(C)}:${P(D)}`;
  if (y?.mtimeKey === L) return F().noteHit(n), y.state;
  return Qt(n, L, x(h), I(w), I(C), I(D), y, r);
}
function Qt(e, n, r, s, f, m, g, S) {
  try {
    let y = te(r), h = Ee().safeParse(y);
    if (!h.success) return t(`[jobs] skipping ${Y(e)}: state.json schema validation failed — ${h.error.message}`, { level: "warn" }), F().noteRejected(e, n), null;
    let w = s !== null ? Number(s) : void 0, C = f !== null ? Number(f) : void 0, D = Ee().in.shape, x = y !== null && typeof y === "object" ? Object.entries(y).filter(([P]) => !Object.hasOwn(D, P)) : [], I = { ...Object.fromEntries(x), ...h.data };
    if (Number.isFinite(w)) I = { ...I, sortOrder: w };
    if (Number.isFinite(C)) I = { ...I, stateSortOrder: C };
    if (m !== null && m.trim()) I = { ...I, group: m.trim() };
    if (I.group !== void 0) I = { ...I, group: we(I.group) };
    return F().noteParsed(e, n, I), I;
  } catch (y) {
    if (t(`[jobs] ${Y(e)}: state.json read/parse failed — ${y instanceof Error ? y.message : String(y)}`, { level: "warn" }), F().shouldReportTransient(e)) a("tengu_bg_state_read_transient", { errno: Er(y) ?? b("unknown"), had_cache: g !== void 0 });
    return ke(g, S);
  }
}
function Re(e, n) {
  return F().noteAbsent(e), n?.onAbsent?.(), null;
}
async function DOo(e, n) {
  return xe(e, n, { onReadFailure: "null" });
}
async function lo(e, n) {
  return xe(e, n, void 0);
}
async function HOo(e, n) {
  let r = { absent: false }, s = await xe(e, n, { onAbsent: () => {
    r.absent = true;
  } });
  return r.absent ? "absent" : s;
}
async function xe(e, n, r) {
  if (n !== void 0 && Tht(e, [ne]) !== void 0) return Zt(n, e, r);
  let s = K(e, ne), f = K(e, "order"), m = K(e, "stateOrder"), g = K(e, "group"), S, y;
  try {
    let [w, C, D, x] = await Promise.all([ie(s), ie(f).catch(() => null), ie(m).catch(() => null), ie(g).catch(() => null)]);
    if (!w.isFile() || w.size > Z) {
      let P = `rejected:${w.mtimeMs}:${w.size}`;
      if (F().peek(e)?.mtimeKey === P) return null;
      return t(`[jobs] skipping ${Y(e)}: state.json is ${w.isFile() ? `too large (${w.size} bytes)` : "not a regular file"}`, { level: "warn" }), F().noteRejected(e, P), null;
    }
    let I = (P) => P !== null && P.isFile() && P.size <= Z;
    y = { order: I(C), stateOrder: I(D), group: I(x) }, S = `${w.mtimeMs}:${y.order ? C.mtimeMs : 0}:${y.stateOrder ? D.mtimeMs : 0}:${y.group ? x.mtimeMs : 0}`;
  } catch (w) {
    if (G(w)) return Re(e, r);
    t(`[jobs] ${Y(e)}: state.json stat failed — ${w instanceof Error ? w.message : String(w)}`, { level: "warn" });
    let C = F().peek(e);
    if (F().shouldReportTransient(e)) a("tengu_bg_state_read_transient", { errno: Er(w) ?? b("unknown"), had_cache: C !== void 0 });
    return ke(C, r);
  }
  let h = F().peek(e);
  if (h?.mtimeKey === S) return F().noteHit(e), h.state;
  try {
    let [w, C, D, x] = await Promise.all([he(s, "utf-8"), y.order ? he(f, "utf-8").catch(() => null) : Promise.resolve(null), y.stateOrder ? he(m, "utf-8").catch(() => null) : Promise.resolve(null), y.group ? he(g, "utf-8").catch(() => null) : Promise.resolve(null)]), I = te(w), P = Ee().safeParse(I);
    if (!P.success) return t(`[jobs] skipping ${Y(e)}: state.json schema validation failed — ${P.error.message}`, { level: "warn" }), F().noteRejected(e, S), null;
    let L = C !== null ? Number(C) : void 0, k = D !== null ? Number(D) : void 0, j = Ee().in.shape, H = I !== null && typeof I === "object" ? Object.entries(I).filter(([ae]) => !Object.hasOwn(j, ae)) : [], V = { ...Object.fromEntries(H), ...P.data };
    if (Number.isFinite(L)) V = { ...V, sortOrder: L };
    if (Number.isFinite(k)) V = { ...V, stateSortOrder: k };
    if (x !== null && x.trim()) V = { ...V, group: x.trim() };
    if (V.group !== void 0) V = { ...V, group: we(V.group) };
    return F().noteParsed(e, S, V), V;
  } catch (w) {
    if (G(w)) return Re(e, r);
    if (t(`[jobs] ${Y(e)}: state.json read/parse failed — ${w instanceof Error ? w.message : String(w)}`, { level: "warn" }), F().shouldReportTransient(e)) a("tengu_bg_state_read_transient", { errno: Er(w) ?? b("unknown"), had_cache: h !== void 0 });
    return ke(h, r);
  }
}
async function Wan(e, n) {
  Dp(e);
  let r = await lo(e, n).catch(() => null);
  if (r !== null && r.state !== "done" && r.state !== "stopped" && r.state !== "blocked" && r.state !== "failed") await X(50), Dp(e), r = await lo(e, n).catch(() => null) ?? r;
  return r;
}
function ee() {
  return K(NL(), "pins.json");
}
var en = 5e3;
async function sQe(e) {
  if (e) return tn(e);
  try {
    let n = await ie(ee());
    if (!n.isFile() || n.size > Z) {
      if (!n.isFile()) await be();
      return /* @__PURE__ */ new Set();
    }
    return Ie(await he(ee(), "utf-8"));
  } catch (n) {
    if (G(n)) return await Dn(ee(), _([])).catch((r) => {
      if (!G(r)) Rl(r);
    }), /* @__PURE__ */ new Set();
    return /* @__PURE__ */ new Set();
  }
}
async function tn(e) {
  let n = await xLr(e, We.jobPins(), { cap: Z, screens: ut(), screenKey: ee(), heal: be });
  return Ie(n ?? void 0);
}
function ut() {
  return RLr.of(U().host).pins;
}
function Ie(e) {
  if (e === void 0 || e.length > Z) return /* @__PURE__ */ new Set();
  let n;
  try {
    n = te(e);
  } catch {
    return /* @__PURE__ */ new Set();
  }
  if (!Array.isArray(n)) return /* @__PURE__ */ new Set();
  return new Set(n.filter((r) => typeof r === "string"));
}
async function be(e) {
  let n = await ie(ee()).catch(() => {
    return;
  });
  if (n === void 0 || n.isFile() && !(e?.evenRegular && n.size > Z)) return false;
  return await pe(ee(), { recursive: true, force: true }).catch(() => {
  }), true;
}
async function $ne(e, n, r, s, f) {
  let m = _o(e), g = await lo(m, s);
  if (!g) return false;
  if (g.name === n) return true;
  Dp(m);
  let S = await lo(m, s) ?? g;
  if (S.name === n || r === "auto" && S.name) return true;
  if (!ct(S, f)) return false;
  return ad(m, { ...S, name: n, nameSource: r, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, s).then(() => true, (y) => {
    if (!G(y)) Rl(y);
    return false;
  });
}
async function Gan(e, n, r) {
  let s = _o(e), f = await lo(s, r);
  if (!f) return false;
  if (f.color === n) return true;
  Dp(s);
  let m = await lo(s, r) ?? f;
  if (m.color === n) return true;
  return ad(s, { ...m, color: n, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, r).then(() => true, (g) => {
    if (!G(g)) Rl(g);
    return false;
  });
}
function NLr() {
  return t8().relocatedCwd;
}
async function zan(e, n) {
  let r = i.CLAUDE_JOB_DIR;
  if (!r || i.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  t8().relocatedCwd = e, Dp(r);
  let s = await lo(r, n), f = s?.worktreePath ? s.originCwd : e;
  if (!s || s.cwd === e && s.originCwd === f) return;
  Dp(r);
  let m = await lo(r, n) ?? s;
  await ad(r, { ...m, cwd: e, originCwd: m.worktreePath ? m.originCwd : e, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, n).catch((g) => {
    if (!G(g)) Rl(g);
  });
}
async function LOo(e, n, r) {
  let s = i.CLAUDE_JOB_DIR;
  if (!s || i.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  Dp(s);
  let f = await lo(s, r);
  if (!f || f.resumeSessionId === e && f.linkScanPath === n) return;
  Dp(s);
  let m = await lo(s, r) ?? f;
  await ad(s, { ...m, resumeSessionId: e, linkScanPath: n, linkScanOffset: 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, r).catch((g) => {
    if (!G(g)) Rl(g);
  });
}
async function iQe(e, n, { includeSettled: r = false } = {}) {
  let s = i.CLAUDE_JOB_DIR;
  if (!s || i.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await aQe(async () => {
    Dp(s);
    let f = await lo(s, n);
    if (!f?.inFlight || Wa(f) && !r || f.tempo === "active") return;
    let m = f.inFlight;
    if (e.count === m.tasks && (e.drainableMonitors ?? 0) === (m.drainableMonitors ?? 0) && e.kinds.length === m.kinds.length && e.kinds.every((g) => m.kinds.includes(g))) return;
    await ad(s, { ...f, inFlight: { tasks: e.count, queued: m.queued, kinds: [...e.kinds], ...e.drainableMonitors !== void 0 && e.drainableMonitors > 0 && { drainableMonitors: e.drainableMonitors }, ...m.wake !== void 0 && { wake: m.wake } }, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, n).catch((g) => {
      if (!G(g)) Rl(g);
    });
  });
}
function ct(e, n) {
  if (n === void 0 || !e.name) return true;
  if (e.nameSource === "auto" || e.nameSource === "collision") return true;
  return n.includes(Vi(e.name));
}
async function bO(e, n, r, s, f, m, g) {
  let S = i.CLAUDE_JOB_DIR;
  if (!S || i.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await aQe(async () => {
    Dp(S);
    let y = await lo(S, f);
    if (!y?.respawnFlags) return;
    if (g && !g(y.respawnFlags)) return;
    let h = [e, ...n], w = (P) => {
      let L = [];
      for (let k = 0; k < P.length; k++) {
        let j = P[k];
        if (h.some((H) => j === H || j.startsWith(`${H}=`))) {
          if (j.indexOf("=") === -1 && P[k + 1] !== void 0) k++;
          continue;
        }
        L.push(j);
      }
      if (r === null) return L;
      return [...L, ...Dk(e, r)];
    }, C = w(y.respawnFlags);
    if (C.length === y.respawnFlags.length && C.every((P, L) => P === y.respawnFlags[L])) return;
    Dp(S);
    let D = await lo(S, f) ?? y, x = D.respawnFlags ?? y.respawnFlags;
    if (g && !g(x)) return;
    let I = ct(D, m);
    await ad(S, { ...D, ...I ? s : {}, respawnFlags: w(x), updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, f).catch((P) => {
      if (!G(P)) Rl(P);
    });
  });
}
async function NOo(e, n, r) {
  let s = i.CLAUDE_JOB_DIR;
  if (!s || i.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await aQe(async () => {
    Dp(s);
    let f = await lo(s, r);
    if (!f?.respawnFlags) return;
    let m = Dk(e, n);
    for (let S = 0; S <= f.respawnFlags.length - m.length; S++) if (m.every((y, h) => f.respawnFlags[S + h] === y)) return;
    Dp(s);
    let g = await lo(s, r) ?? f;
    await ad(s, { ...g, respawnFlags: [...g.respawnFlags ?? [], ...m], updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, r).catch((S) => {
      if (!G(S)) Rl(S);
    });
  });
}
async function Ce(e, n) {
  await pe(e, { force: true });
  let r = await PM(e, n);
  try {
    await Os(r, e);
  } catch (s) {
    throw await pe(r, { force: true }).catch(() => {
    }), s;
  }
}
async function Fe(e, n, r) {
  let s = await e.write(n, r, { parent: "mustExist", mode: 438 & ~process.umask() });
  if (!s.ok) {
    let f = Zm(s.error);
    throw Object.assign(new R(`[jobs] v5 sidecar write failed: ${vt(s.error)}`, "[jobs] v5 sidecar write failed"), f !== void 0 ? { code: f } : {});
  }
}
async function $Oo(e, n, r) {
  let s = z() && r ? Tht(e, ["order"]) : void 0;
  if (r && s) await Fe(r, s, String(n));
  else await Ce(K(e, "order"), String(n));
  Dp(e);
}
async function FOo(e, n, r) {
  let s = z() && r ? Tht(e, ["stateOrder"]) : void 0;
  if (r && s) await Fe(r, s, String(n));
  else await Ce(K(e, "stateOrder"), String(n));
  Dp(e);
}
async function Jqn(e, n, r) {
  let s = K(e, "group"), f = we(n), m = z() && r ? Tht(e, ["group"]) : void 0;
  if (r && m) if (f) await Fe(r, m, f);
  else {
    let g = await r.delete(m);
    if (!g.ok) throw new R(`[jobs] v5 sidecar delete failed: ${g.error.code}`, "[jobs] v5 sidecar delete failed");
  }
  else if (f) await Ce(s, f);
  else await pe(s, { force: true });
  Dp(e);
}
async function UOo(e) {
  let n = K(NL(), ".order");
  await Te(NL(), { recursive: true });
  await using r = await vl(n, { realpath: false, stale: 5e3, retries: { retries: 5, minTimeout: 20 }, onCompromised: (s) => t(`jobs/.order lock compromised (likely process suspend or slow fs): ${s}`, { level: "error" }) });
  return await e();
}
var pt = Wh();
function aQe(e) {
  return pt.run("own-state.json", e);
}
function Qqn(e, n, r) {
  return pt.run("pins.json", async () => {
    if (z() && r) return nn(e, n, r);
    let s = ee();
    await Te(Jt(s), { recursive: true });
    await using f = await vl(s, { realpath: false, stale: en, retries: { retries: 5, minTimeout: 20 }, onCompromised: (g) => t(`pins.json lock compromised (likely process suspend or slow fs): ${g}`, { level: "error" }) });
    let m = await sQe();
    if (n ? m.has(e) : !m.has(e)) return;
    if (n) m.add(e);
    else m.delete(e), await pe(K(_o(e), "order")).catch((g) => {
      if (!G(g)) throw g;
    }), Dp(_o(e));
    await Dn(s, _([...m], null, 2));
  });
}
async function nn(e, n, r) {
  let s = (y) => {
    let h = Ie(y?.value);
    if (n ? h.has(e) : !h.has(e)) return { skip: true, result: false };
    if (n) h.add(e);
    else h.delete(e);
    return { write: _([...h], null, 2), result: true };
  }, f = ut(), m = await r.statMeta(We.jobPins());
  if (m.ok && m.value.size > Z) await be({ evenRegular: true }), f.delete(ee());
  else if (!m.ok && _e(m.error) !== void 0) await be(), f.delete(ee());
  let g = { publishDiscipline: "atomic", mode: 438 & ~process.umask() }, S = await r.updateText(We.jobPins(), s, g);
  if (!S.ok && await be()) S = await r.updateText(We.jobPins(), s, g);
  if (!S.ok) throw new R(`[jobs] v5 pins update failed: ${S.error.code}`, "[jobs] v5 pins update failed");
  if (!n && S.value.result === true) {
    let y = lt(e, ["order"]);
    if (y) {
      let h = await r.delete(y);
      if (!h.ok) t(`[jobs] v5 order sidecar release failed after unpin: ${h.error.code}`, { level: "warn" });
    } else await pe(K(_o(e), "order")).catch((h) => {
      if (!G(h)) t(`[jobs] order sidecar release failed after unpin: ${d(h)}`, { level: "warn" });
    });
    Dp(_o(e));
  }
}
async function dx(e, n, r) {
  if (n) return on(n, e, r);
  let s;
  try {
    s = await jt(NL(), { withFileTypes: true });
  } catch (S) {
    if (n8(E(S))) r?.();
    return [];
  }
  let [f, m] = await Promise.all([sQe(), Promise.all(s.filter((S) => S.isDirectory()).map(async (S) => {
    let y = await lo(K(NL(), S.name));
    return y ? { id: S.name, state: y } : null;
  }))]), g = m.filter((S) => S !== null).map((S) => f.has(S.id) ? { ...S, state: { ...S.state, pinned: true } } : S);
  return e ? Cht(g, e) : g;
}
async function rn(e) {
  let n = [], r;
  do {
    let s = await e.listEntries({ namespace: "job" }, r === void 0 ? { skipScopeStats: true } : { cursor: r, skipScopeStats: true });
    if (!s.ok) return { ok: false, error: s.error };
    for (let f of s.value.items) if (f.kind === "scope" && f.scope.namespace === "job" && f.scope.jobId !== void 0 && f.scope.relPath === void 0 && _r(f.scope.jobId)) n.push(f.scope.jobId);
    r = s.value.cursor;
  } while (r !== void 0);
  return { ok: true, ids: n };
}
async function on(e, n, r) {
  let s = await rn(e);
  if (!s.ok) {
    if (RFt(s.error)) r?.();
    return [];
  }
  let f = s.ids, [m, g] = await Promise.all([sQe(e), Promise.all(f.map(async (y) => {
    let h = await lo(_o(y), e);
    return h ? { id: y, state: h } : null;
  }))]), S = g.filter((y) => y !== null).map((y) => m.has(y.id) ? { ...y, state: { ...y.state, pinned: true } } : y);
  return n ? Cht(S, n) : S;
}
function Cht(e, n) {
  let r = Date.now();
  return e.map((s) => {
    if (Wa(s.state)) return s;
    if (n.has(s.id)) return s;
    if (s.state.keptBy !== void 0 && dn(s.state)) return s;
    if (r - Date.parse(s.state.createdAt) < an) return s;
    return { ...s, state: sn(s.state) };
  });
}
var an = 5e3;
function sn(e) {
  if (xht(e)) return { ...e, tempo: "blocked", inFlight: void 0 };
  return { ...e, state: "failed", tempo: "idle", needs: void 0, block: void 0, inFlight: void 0, detail: Vg(e.detail, "; respawning") };
}
var yhe = "starting…", PS = "send a prompt to start";
function Rht(e) {
  return e.needs !== void 0 && e.needsOverlay === e.needs;
}
var lQe = `(idle — ${PS})`, lGe = ["starting", "resuming", "adopted", "crashed"], $Ft = 1728e5, ln = "ended while the background service was off";
function uTe(e) {
  let n = (/* @__PURE__ */ new Date()).toISOString();
  return { state: "working", detail: e.detail !== void 0 ? Ms(e.detail) : yhe, tempo: e.tempo ?? "active", needs: e.needs, inFlight: e.inFlight, output: null, children: null, linkScanOffset: 0, linkScanPath: e.linkScanPath, template: e.template.name, routine: e.routine, respawnFlags: e.respawnFlags ?? [], bgIsolation: e.bgIsolation, providerEnv: e.providerEnv && QBs(e.providerEnv, e.cwd), sessionPermissionRules: e.sessionPermissionRules, memoryToggledOff: e.memoryToggledOff, autoMemoryOffThisSession: e.autoMemoryOffThisSession, forkSourceAlive: e.forkSourceAlive, forkBoundaryAt: e.forkBoundaryAt, forkSessionId: e.forkSessionId, forkParentSessionId: e.forkParentSessionId, interactiveLineage: e.interactiveLineage, intent: e.intent, displayIntent: e.displayIntent, name: e.name, nameSource: e.nameSource, color: pze({ userOverride: e.color, agentDefinitionColor: e.template.color }), initialPrompt: e.template.initialPrompt, sessionId: e.sessionId, resumeSessionId: e.sessionId, daemonShort: e.sessionId.slice(0, 8), cwd: e.cwd, createdAt: n, updatedAt: n, firstTerminalAt: null, worktreePath: e.worktreePath, worktreeBranch: e.worktreeBranch, worktreeHookBased: e.worktreeHookBased, originCwd: e.originCwd, backend: "daemon" };
}
async function BOo(e, n, r) {
  if (n.length === 0) return e;
  let s = new Set(e.map((h) => h.id)), f = n.filter((h) => st.test(h.short) && !s.has(h.short) && h.source !== "spare" && !h.dying);
  if (f.length === 0) return e;
  let m = await JN({ silent: true }, r), g = await Promise.all(f.map((h) => {
    let w = m.workers[h.short];
    return Yqn(h.pid, w?.pid === h.pid ? w.procStart : void 0);
  }));
  for (let [h, w] of f.entries()) if (g[h] !== "live") {
    if (t(`[adoptRosterOrphans] pruned dead record ${w.short} (${g[h]})`), F().shouldReportPruned(w.short)) a("tengu_bg_roster_orphan_pruned", { reason: c(g[h] ?? "dead_pid") });
  } else F().notePruneCandidateLive(w.short);
  let S = f.filter((h, w) => g[w] === "live");
  if (S.length === 0) return e;
  let y = S.map((h) => {
    let w = { ...uTe({ template: { name: h.agent ?? "bg", description: "" }, routine: h.routine, intent: h.intent, name: h.name, detail: h.detail, ...h.tempo === "active" && (h.state === "running" || lGe.includes(h.state)) ? h.routine ? { tempo: "idle" } : { tempo: "blocked", needs: PS } : { tempo: h.tempo, needs: h.needs }, sessionId: uP(h.sessionId), cwd: uP(h.cwd), worktreePath: h.worktreePath === void 0 ? void 0 : uP(h.worktreePath) }), createdAt: new Date(h.createdAt ?? h.startedAt).toISOString(), daemonShort: h.short, state: lGe.includes(h.state) ? "working" : h.state, ...jC(h.state) && { inFlight: { tasks: 0, queued: 0, kinds: [] } } }, C = _o(h.short), D = r ? lt(h.short, [ne]) : void 0;
    if (r && D) r.write(D, _(w), { precondition: { type: "ifAbsent" }, mode: 384 }).then((x) => {
      if (x.ok) a("tengu_bg_roster_orphan_adopted", {});
      else if (x.error.code !== "AlreadyExists") Rl(new R(`[jobs] v5 orphan seed write failed: ${x.error.code}`, "[jobs] v5 orphan seed write failed"));
    });
    else Te(C, { recursive: true }).then(() => aW(K(C, "state.json"), _(w), 384)).then(() => a("tengu_bg_roster_orphan_adopted", {})).catch((x) => {
      if (E(x) !== "EEXIST") Rl(x);
    });
    return { id: h.short, state: w };
  });
  return [...e, ...y];
}
function ab(e) {
  if (e === "done") return "success";
  if (e === "failed") return "failure";
  if (e === "stopped") return "stopped";
  return null;
}
function jC(e) {
  return ab(e) !== null;
}
function Wa(e) {
  return jC(e.state) && e.tempo !== "active";
}
function dn(e) {
  return e.intent === "" && e.needs === PS && e.tempo === "blocked" && !Wa(e);
}
function RE(e) {
  return e.template === "exec" && e.respawnFlags.length === 0;
}
function xht(e) {
  return e.state === "blocked" && !RE(e);
}
function FFt(e) {
  return e.backend === "daemon" && !RE(e);
}
function ode(e) {
  let n = e.originCwd || (e.cwd.match(/^(.+?)[/\\]\.claude[/\\]worktrees[/\\]/)?.[1] ?? e.cwd);
  return uP(n);
}
function Kan(e, n) {
  if (e.backend === "remote") return true;
  let r = Wt(n, ode(e));
  return r.split(/[/\\]/, 1)[0] !== ".." && !at(r);
}
function Pht(e) {
  let n = (r) => r?.trim().toLowerCase().startsWith("/loop") ?? false;
  return n(e.intent) || n(e.initialPrompt);
}
function r8(e) {
  return e.routine !== void 0 || e.selfWake === true || (e.inFlight?.kinds.includes("session_cron") ?? false) || Pht(e);
}
function dQe(e, n, r, s, f) {
  let m = _o(e);
  return lo(m, f).then(async (g) => {
    if (!g || Wa(g) || n === "failed" && xht(g)) return "none";
    let S = Date.now(), y = new Date(S).toISOString(), h = s?.resumable === "auto-resume" && n === "failed" && !RE(g) && S - Date.parse(g.updatedAt) > $Ft;
    return await ad(m, { ...g, state: h ? "stopped" : n === "crashed" ? "failed" : n, detail: h ? ln : n === "stopped" ? "stopped" : n === "failed" ? Vg(g.detail || r, "; respawning") : r, tempo: "idle", inFlight: void 0, needs: void 0, updatedAt: y, firstTerminalAt: g.firstTerminalAt ?? (h ? g.updatedAt : y), lastTerminalAt: h ? g.updatedAt : y, ...s?.resumable === "auto-resume" && n === "failed" && (h ? { deadEpochReapedAt: y } : { reapedMidWorkAt: g.updatedAt }), ...s?.resumable === "wake-only" && n === "failed" && { reapedUnsettledAt: g.updatedAt } }, f), h ? "dead-epoch" : "settled";
  }).catch((g) => (Rl(g), "none"));
}
var cn = "To reattach to a cloud session, pass its id: `claude --cloud <session-id>` (find IDs at claude.ai/code).";
function YBs() {
  return false;
}
function jOo(e) {
  let n = "Error: ", r = "--cloud", s = `
${cn}`;
  if (e.hasPool || e.hasEnvironmentQuery) {
    let f = cQe(e.isChosenByNoMonorepo === true);
    n = f.prefix, r = f.flag, s = "";
  }
  if (e.print && !e.hasPool && !e.isCloudAttach && !e.headlessCloudPrint) {
    if (e.loneWordValue !== void 0) return `Error: --cloud ${UFt(e.loneWordValue)} is not a cloud session ID or URL.
With --print, --cloud sends the prompt to an existing cloud session: pass its ID (session_... or cse_...) or its claude.ai/code URL. To start a new cloud session from a description instead, drop --print.`;
    return `Error: ${r} cannot be combined with --print.
Starting a new cloud session with ${r} is interactive only: drop --print, or drop ${r} to run locally. To message an existing cloud session instead, pass its ID: \`claude -p "message" --cloud <session-id>\` (find IDs at claude.ai/code).`;
  }
  if (e.nonInteractive && !e.hasPool && !e.isCloudAttach && !e.headlessCloud && !e.headlessCloudPrint) {
    if (e.loneWordValue !== void 0) return `Error: --cloud ${UFt(e.loneWordValue)} is not a cloud session ID or URL.
Without an interactive terminal, --cloud can only send the prompt to an existing cloud session: pass its ID (session_... or cse_...) or its claude.ai/code URL. To start a new cloud session, run from a TTY.`;
    return `Error: ${r} requires an interactive terminal.
Non-interactive invocations (piped stdout, --init-only, --sdk-url) run locally and would silently ignore ${r}. Drop ${r}, or run from a TTY.`;
  }
  if (e.continue) return `${n}${r} cannot be combined with --continue.${s}`;
  if (e.hasConnect || e.hasSSH || e.hasAssistant || e.hasTeleport) {
    let f = e.hasConnect ? "a cc:// connect URL" : e.hasSSH ? "`claude ssh`" : e.hasAssistant ? "`claude assistant`" : "--teleport";
    return `${n}${r} cannot be combined with ${f} — both select a remote backend; pick one.`;
  }
  if (e.resume || e.fromPr) {
    let f = e.resume ? "--resume" : "--from-pr";
    return `${n}${r} cannot be combined with ${f}.${s}`;
  }
  return null;
}
function XBs(e) {
  return !e.print && !e.initOnly && e.nonInteractive && !e.hasSdkUrl && e.inputFormat === "stream-json" && e.outputFormat === "stream-json";
}
function JBs(e) {
  return e.print && !e.initOnly && !e.hasSdkUrl && e.outputFormat !== "stream-json";
}
function WOo(e) {
  if (e.some((n) => n === "--environment" || n.startsWith("--environment=") || n === "--pool" || n.startsWith("--pool="))) return "--bg and --environment are different backends. Use `claude -p '<task>' --environment <id>` directly to start a session on the environment.";
  return "--bg and --cloud are different backends. Use `claude --cloud '<task>'` directly to start a cloud session.";
}
function cQe(e) {
  return { prefix: "Error: ", flag: "--environment" };
}
function GOo(e) {
  if (e.some((n) => n === "--environment" || n.startsWith("--environment=") || n === "--pool" || n.startsWith("--pool="))) return true;
  return e.some((n) => n === "--cloud" || n.startsWith("--cloud=") || n === "--remote" || n.startsWith("--remote="));
}
function Iht(e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (s === "--") {
      for (let f = r; f < e.length; f++) n.push(e[f]);
      break;
    }
    if (s.startsWith("--environment=") || s.startsWith("--pool=")) continue;
    if (s === "--environment" || s === "--pool") {
      if (e[r + 1] !== void 0 && !e[r + 1].startsWith("-")) r++;
      continue;
    }
    n.push(s);
  }
  return n;
}
var pn = 100;
function UFt(e) {
  let n = re(e, pn);
  return sCt(_(n.length < e.length ? `${n}…` : n));
}
export {
  $Ft,
  $Oo,
  $an,
  $ne,
  AOo,
  Aht,
  BBs,
  BOo,
  Ban,
  COo,
  Cht,
  DFt,
  DLr,
  DOo,
  Dk,
  Dne,
  Dp,
  EOo,
  Eht,
  FFt,
  FOo,
  Fan,
  GBs,
  GOo,
  Gan,
  HFt,
  HLr,
  HOo,
  Hne,
  IFt,
  ILr,
  IOo,
  Iht,
  JBs,
  JN,
  Jqn,
  KBs,
  Kan,
  Kqn,
  LFt,
  LL,
  LLr,
  LOo,
  Lan,
  Lne,
  MFt,
  MLr,
  MOo,
  NFt,
  NL,
  NLr,
  NOo,
  NP,
  Nan,
  Nne,
  OFt,
  OLr,
  OOo,
  Oc,
  PFt,
  PLr,
  POo,
  PS,
  Pg,
  Pht,
  Qqn,
  RE,
  RFt,
  RLr,
  ROo,
  Rht,
  Rl,
  Sht,
  TOo,
  Tht,
  UBs,
  UFt,
  UOo,
  Uan,
  VBs,
  Vqn,
  WBs,
  WOo,
  Wa,
  Wan,
  XBs,
  Xqn,
  YBs,
  Yqn,
  ZJe,
  _o,
  aGe,
  aQe,
  ab,
  ad,
  ax,
  bO,
  bht,
  cQe,
  dQe,
  dx,
  eQe,
  gDe,
  ghe,
  hhe,
  iGe,
  iQe,
  jBs,
  jC,
  jOo,
  jan,
  kOo,
  kht,
  lGe,
  lQe,
  lo,
  lx,
  n8,
  nQe,
  nde,
  oQe,
  ode,
  qBs,
  qqn,
  r8,
  rQe,
  rde,
  sQe,
  tQe,
  uTe,
  vOo,
  vht,
  wht,
  xFt,
  xLr,
  xOo,
  xht,
  yhe,
  zBs,
  zan,
  zqn
};
