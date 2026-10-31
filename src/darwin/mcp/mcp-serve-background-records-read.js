// darwin/mcp/mcp-serve-background-records-read.js — Claude Code 2.1.310（darwin）模块 chunk-x6j34bht.js
import { S, c, ce } from "../agents/third-party.js";
import { R, N, d, v } from "../telemetry/anthropic-workspace-id.js";
import { F1 } from "../shared/chunk-3b9c376b.js";
import { He } from "../fs/async-hooks.93b1.js";
import { F, nt } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { i } from "../shared/environment.js";
import { _t, _, t } from "../fs/gitlab-runner-authentication-token.js";
import { re } from "../shared/chunk-d2c47492.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { uee } from "../fs/utf-8.8f8e.js";
import { ot } from "../fs/chunk-86be9585.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { aa, so } from "../shell/invalid-type.js";
import { nr } from "../remote/moved-directory.js";
import { YT, pE } from "../context/org-memory-writes-setting-changed.js";
import { oR } from "../context/tool-result-clearing-after-idle-server-report.js";
import { dgn, d2t, FJn, $Jn } from "../permissions/peer-too-old.js";
import { Ou, ZZe, hf } from "../fs/unadoptable-session-id.js";
import { FJr, Wz, Gz } from "../shell/not-serialized.js";
import { Jit, mAn } from "../shared/no-shared-version.js";
import { lft } from "../shared/chunk-79347f42.js";
import { can, oUs } from "../permissions/auto-mode.js";
import { y3, AKn } from "../agents/in-process-teammate.b77f.js";
import { Cs } from "../shared/chunk-82eb5142.js";
import { C_e } from "../shared/chunk-e9fc3352.js";
import { mn } from "../shared/chunk-62f8d501.js";
import { D } from "../shared/chunk-7027e6d5.js";
import { o, E, oe, C, u, Ue, Gr, B, T } from "../vendor/zod/string-format.js";
import { HS } from "../shared/chunk-061dbb8e.js";
import { randomUUID as qe } from "crypto";
import { join as Ve } from "path";
var Re = 24e4, U = 32, Z = 32, ke = f(() => Ue({ seen: E().int().min(0).optional(), life: o().max(64).optional(), hold_ms: E().int().min(0).max(Re).optional(), told: C(o().max(64)).max(U).optional(), tool_use_ids: C(o().min(1).max(256)).max(Z).optional(), tool_host_interface: oe().optional() }));
function Q(e) {
  let n = { told: U, tool_use_ids: Z }, r = D(e) ? Object.entries(n).find(([s, h]) => {
    let y = so(e, s);
    return Array.isArray(y) && y.length > h;
  }) : void 0;
  if (r !== void 0) {
    let [s, h] = r;
    throw new R(`ReadCalls: ${s} has more than ${h} entries`, "ReadCalls: a list has more entries than are taken");
  }
  return ke().parse(e);
}
import { randomUUID as Se } from "crypto";
import { constants as M } from "fs";
import { lstat as we, mkdir as Ee, open as Y, opendir as ve, unlink as Ce, writeFile as xe } from "fs/promises";
import { join as K } from "path";
var ne = 6e4, se = 256, Ae = 6048e5, Oe = 4 * se, Ie = 16, ee = 32768, V = ".json", Te = f(() => {
  let e = E().int().min(0).max(Number.MAX_SAFE_INTEGER);
  return u({ v: T(1), container_start: o().min(1).max(64), listed: u({ taskId: o().refine((n) => y3("local_bash", n)), output_path: o().max(4096), limit_ms: E().min(0).max(Number.MAX_SAFE_INTEGER) }).transform((n) => AKn(n.taskId, n.output_path) ? n : { ...n, output_path: "" }), started_at: e, written_at: e, ended: u({ how: Gr("state", [u({ state: T("exited"), exit_code: E().int() }), u({ state: T("time_limit") }), u({ state: T("stopped"), stopped_by: T("session") }), u({ state: T("killed"), reason: B(["daemon_exit", "output_limit", "container_stopped"]).optional().catch(void 0) })]).catch({ state: "killed" }), at: e }).optional() });
});
class G {
  #o;
  #t;
  #r;
  #n;
  #e = /* @__PURE__ */ new Map();
  constructor({ folder: e, failed: n, containerStartFile: r = K("/dev/shm", `claude-${process.getuid?.() ?? 0}-container-start`), containerStart: s }) {
    this.#o = e, this.#n = n, this.#t = r, this.#r = s;
  }
  #a() {
    return this.#r ??= (async () => {
      let e = this.#t;
      await xe(e, Se(), { flag: "wx", mode: 384 }).catch((r) => {
        if (v(r) !== "EEXIST") throw r;
      });
      let n = await Y(e, M.O_RDONLY | M.O_NOFOLLOW | M.O_NONBLOCK);
      try {
        let r = await n.stat();
        if (!r.isFile() || r.uid !== process.getuid?.()) throw Error("The file that identifies this container start is not a regular file owned by this user.");
        let { buffer: s, bytesRead: h } = await n.read({ buffer: Buffer.alloc(64) }), y = s.subarray(0, h).toString("utf8").trim();
        if (y.length === 0) throw Error("The file that identifies this container start is empty.");
        return y;
      } finally {
        await n.close();
      }
    })().catch((e) => {
      throw this.#r = void 0, e;
    }), this.#r;
  }
  write(e) {
    this.#i(e.listed.taskId, async (n, r) => {
      if (await uee(K(n, e.listed.taskId + V), _({ v: 1, ...e, container_start: r }), { flush: true, mode: 384 }), e.ended !== void 0) await te(n);
    });
  }
  remove(e) {
    this.#i(e, async (n) => {
      await Ce(K(n, e + V)).catch((r) => {
        if (v(r) !== "ENOENT") throw r;
      });
    });
  }
  async settled(e) {
    await this.#e.get(e);
  }
  async settledAll() {
    while (this.#e.size > 0) await Promise.all(this.#e.values());
    await this.#s().then((e) => e === void 0 ? void 0 : te(e)).catch(this.#n);
  }
  async readEarlier() {
    let e = await this.#a().catch((y) => {
      t(`mcp serve: could not read or make the file that identifies this container start, so commands that earlier daemons started are not listed: ${d(y)}`, { level: "error" });
      return;
    }), n = e === void 0 ? void 0 : await this.#s().catch((y) => {
      t(`mcp serve: could not read the folder of saved background command records, so commands that earlier daemons started are not listed: ${d(y)}`, { level: "error" });
      return;
    }), r = [];
    if (n !== void 0) {
      let y = 0;
      try {
        for await (let k of await ve(n)) {
          if (y++, k.name.endsWith(V) && y3("local_bash", k.name.slice(0, -V.length))) r.push({ name: k.name, path: K(n, k.name) });
          if (y >= Oe || r.length >= se) break;
        }
      } catch (k) {
        t(`mcp serve: could not read the folder of saved background command records, so commands that earlier daemons started are not listed: ${d(k)}`, { level: "error" });
      }
    }
    let s = Date.now(), h = [];
    for (let y of lft(r, Ie)) h.push(...await Promise.all(y.map(async ({ name: k, path: w }) => {
      let O = await Y(w, M.O_RDONLY | M.O_NOFOLLOW | M.O_NONBLOCK).then(async (j) => {
        try {
          let x = await j.stat();
          if (!x.isFile() || x.size > ee) return;
          let { buffer: H, bytesRead: q } = await j.read({ buffer: Buffer.alloc(ee) });
          return H.subarray(0, q).toString("utf8");
        } finally {
          await j.close();
        }
      }).catch(() => {
        return;
      }), A = Te().safeParse(O === void 0 ? void 0 : ot(O, false));
      if (!A.success || A.data.listed.taskId + V !== k) return { fate: "unreadable" };
      let { container_start: z, listed: I, started_at: b, written_at: P, ended: L } = A.data;
      if (s - P > Ae) return this.remove(I.taskId), { fate: "too_old" };
      if (z === e && L === void 0) return { fate: "maybe_still_running" };
      return L === void 0 ? { fate: "container_stopped", command: { listed: I, started_at: b, ended: { how: { state: "killed", reason: "container_stopped" }, at: P } } } : { fate: "with_end", command: { listed: I, started_at: b, ended: L } };
    })));
    return { commands: h.flatMap((y) => "command" in y ? [y.command] : []).toSorted((y, k) => y.ended.at - k.ended.at), counted: { with_end: F(h, ({ fate: y }) => y === "with_end"), container_stopped: F(h, ({ fate: y }) => y === "container_stopped"), maybe_still_running: F(h, ({ fate: y }) => y === "maybe_still_running"), too_old: F(h, ({ fate: y }) => y === "too_old"), unreadable: F(h, ({ fate: y }) => y === "unreadable") } };
  }
  async #s(e = false) {
    let n = this.#o();
    if (e) await Ee(n, { recursive: true, mode: 448 });
    let r = await we(n).catch((s) => {
      if (v(s) !== "ENOENT") throw s;
      return;
    });
    if (r === void 0) return;
    if (!r.isDirectory() || r.uid !== process.getuid?.()) throw Error("The folder for background command records is a symbolic link or not a directory owned by this user.");
    return n;
  }
  #i(e, n) {
    let r = (this.#e.get(e) ?? Promise.resolve()).then(async () => {
      let s = await this.#a(), h = s === void 0 ? void 0 : await this.#s(true);
      if (s !== void 0 && h !== void 0) await n(h, s);
    }).catch(this.#n);
    this.#e.set(e, r), r.then(() => {
      if (this.#e.get(e) === r) this.#e.delete(e);
    });
  }
}
async function te(e) {
  let n = await Y(e, M.O_RDONLY | M.O_DIRECTORY | M.O_NOFOLLOW);
  try {
    await n.sync();
  } finally {
    await n.close();
  }
}
import { randomUUID as Pe } from "crypto";
var ze = 1024, Fe = 1024, ie = 32;
function ae() {
  return pE(YT, void 0, true);
}
var wfe = new nt(() => ({ id: Pe(), now: () => performance.now(), runningRuns: /* @__PURE__ */ new Map(), finishedRuns: /* @__PURE__ */ new Map(), barredRuns: /* @__PURE__ */ new Map(), newestDropped: void 0, runEnded: He(), readFileState: ae(), subagentReadFileStates: /* @__PURE__ */ new Map(), changedFilesPasses: /* @__PURE__ */ new WeakMap() }));
function mas(e) {
  return wfe.of(e).id;
}
function EJr(e, n) {
  let r = wfe.of(e), { runningRuns: s, finishedRuns: h, barredRuns: y } = r;
  if (y.has(n)) return "barred";
  if (s.has(n) || h.has(n)) return "started_before";
  return s.set(n, r.now()), "claimed";
}
var de = (e, n) => e === void 0 || n === void 0 ? e ?? n : Math.max(e, n);
function ue(e, n, r, s) {
  e.set(n, s);
  let [h] = e;
  if (e.size <= r || h === void 0) return;
  return e.delete(h[0]), h[1];
}
function vJr(e, n) {
  let r = wfe.of(e);
  if (!r.runningRuns.delete(n)) return;
  r.newestDropped = de(r.newestDropped, ue(r.finishedRuns, n, ze, r.now())), r.runEnded.emit();
}
function le(e, n) {
  let r = wfe.of(e), s = r.runningRuns.get(n);
  if (s !== void 0) return { state: "running", since_ms: Math.round(r.now() - s) };
  if (r.finishedRuns.has(n)) return { state: "finished" };
  if (!r.barredRuns.has(n)) r.newestDropped = de(r.newestDropped, ue(r.barredRuns, n, Fe, r.now()));
  return { state: "unknown", barred: true };
}
function gas(e, n) {
  return wfe.of(e).barredRuns.has(n);
}
function me(e, n) {
  return wfe.of(e).runningRuns.has(n);
}
function pe(e, n) {
  return wfe.of(e).runEnded.subscribe(n);
}
function fe(e) {
  return [...wfe.of(e).runningRuns.keys()];
}
function _e(e) {
  let { newestDropped: n, now: r } = wfe.of(e);
  return n === void 0 ? void 0 : Math.round(r() - n);
}
function has(e, n) {
  let { readFileState: r, subagentReadFileStates: s } = wfe.of(e);
  return n === void 0 ? r : s.get(n);
}
function yas(e, n) {
  let { readFileState: r, subagentReadFileStates: s } = wfe.of(e);
  if (n === void 0) return r;
  let h = s.get(n) ?? ae();
  s.delete(n), s.set(n, h);
  let [y] = s.keys();
  if (s.size > ie && y !== void 0) s.delete(y), t(`[mcp serve] more than ${ie} subagents: dropped the read record of ${y}`);
  return h;
}
var ge = 128, Me = 16, De = 256, Le = ["background_operator", "unresolved_shell_write"];
function _as(e) {
  switch (e.step) {
    case "check":
      return false;
    case "run":
      return e.approval !== void 0;
  }
}
function Sas(e) {
  switch (e.step) {
    case "check":
      return false;
    case "run":
      return e.agent_id === void 0;
  }
}
var J = f(() => o().max(ge).regex(/^[\w.:@-]+$/).regex(/[^.]/)), kJr = f(() => o().refine(F1)), Ne = f(() => C(o().max(ge)).max(Me).transform((e) => Le.filter((n) => e.includes(n)))), je = f(() => o().max(De).regex(/^\P{Cc}+$/u)), CJr = f(() => o().regex(HS)), Be = f(() => {
  let e = { tool_host_interface: d2t(), tool_use_id: J(), agent_id: kJr().optional(), main_loop_model: je(), classifier_may_approve: Ne().optional(), agent_has_read_tool: T(true).optional(), agent_effort_level: B(aa).optional(), permission_context: Wz() };
  return Gr("step", [Ue({ ...e, step: T("check") }), Ue({ ...e, step: T("run"), approval: Ue({ ask_digest: CJr(), approver: B(oUs), permission_context: Wz() }).optional() })]);
});
function TJr(e, n = dgn) {
  let r = mn(e) ? e[Jit] : void 0;
  if (r === void 0) return { kind: "absent" };
  if (!mAn(r)) return { kind: "other_request" };
  let s = FJn(r.tool_host_interface);
  if (s === void 0) return { kind: "malformed" };
  switch ($Jn(n, s).kind) {
    case "peer_too_old":
      return { kind: "session_too_old", session: s };
    case "self_too_old":
      return { kind: "daemon_too_old", session: s };
    case "agreed":
      break;
  }
  let h = mn(r.approval) ? r.approval : void 0;
  if (Gz(r.permission_context) || Gz(h?.permission_context)) return { kind: "too_large" };
  let y = Be().safeParse(r);
  if (y.success) return { kind: "requested", request: y.data };
  return { kind: FJr(r.permission_context) || FJr(h?.permission_context) ? "unlisted_restriction_on" : "malformed" };
}
var sur = "ReadCalls", AJr = "StopBackgroundCommand", $e = 3 * U, he = 1e3, ye = "anthropic/backgroundCommands";
function bvi(e) {
  return { experimental: { [ye]: { v: 1, life: e } } };
}
var rn = f(() => u({ experimental: u({ [ye]: u({ v: T(1) }) }) }));
var Ke = f(() => Ue({ taskId: o().min(1).max(64) }));
function Xe({ interrupted: e, code: n, outputFileSize: r }) {
  return !e ? { state: "exited", exit_code: n } : { state: "killed", ...r !== void 0 && { reason: "output_limit" } };
}
class be {
  life = qe();
  #o = 0;
  #t = /* @__PURE__ */ new Map();
  #r = He();
  #n;
  #e;
  #a = Promise.resolve();
  #s;
  #i;
  constructor(e = () => performance.now()) {
    this.#n = e;
  }
  keepRecordsIn(e, n = Date.now) {
    if (this.#e !== void 0) return;
    this.#e = { store: e, wallNow: n }, this.#a = this.#m(e, n), _t(() => e.settledAll());
  }
  get restored() {
    return this.#a;
  }
  get version() {
    return this.#o;
  }
  starterFor(e) {
    return { reserve: () => {
      return;
    }, adopt: (n, r, s) => {
      try {
        let h = this.#l(n, r, s, e);
        return g("mcp_serve_background_command"), h;
      } catch (h) {
        throw m("mcp_serve_background_command", "not_kept"), n.kill(), n.cleanup(), h;
      }
    } };
  }
  taskIdOf(e) {
    return [...this.#t.values()].find(({ listed: n }) => n.tool_use_id === e)?.listed.taskId;
  }
  msSinceNewestDropped() {
    return this.#s === void 0 ? void 0 : Math.round(this.#n() - this.#s);
  }
  list() {
    let e = this.#n();
    return { life: this.life, commands_version: this.#o, commands: Array.from(this.#t.values(), ({ listed: n, startedAt: r, ended: s, unwanted: h }) => ({ ...n, ...s ? { ...s.how, ended_ms_ago: Math.round(e - s.at) } : { state: "running", ...h && { told: true } }, ran_ms: Math.round((s?.at ?? e) - r) })) };
  }
  forget(e) {
    let n = e.flatMap((r) => this.#t.get(r) ?? []);
    n.filter(({ ended: r }) => r).forEach(({ listed: r }) => {
      this.#t.delete(r.taskId), this.#e?.store.remove(r.taskId);
    }), n.filter(({ ended: r }) => !r).forEach((r) => {
      r.unwanted = true, this.#e?.store.remove(r.listed.taskId);
    });
  }
  stop(e) {
    return this.#t.get(e)?.cut({ state: "stopped", stopped_by: "session" }) ?? false;
  }
  async changedSince(e, n) {
    let { promise: r, resolve: s } = Promise.withResolvers(), h = () => s(), y = this.#r.subscribe(h);
    if (n.addEventListener("abort", h, { once: true }), e !== this.#o || n.aborted) h();
    await r, y(), n.removeEventListener("abort", h);
  }
  #l(e, n, r, s) {
    let h = e.taskOutput.taskId, y = Ou(h);
    if (!e.background(h)) throw Error("The command had already ended when it was to be moved to the background, and its output was not kept. Run it again without run_in_background.");
    let k = can(n), w = { listed: { taskId: h, ...s.toolUseId !== void 0 && { tool_use_id: s.toolUseId }, ...s.agentId !== void 0 && { agent_id: s.agentId }, command: re(r, he), ...s.description && { description: re(s.description, he) }, output_path: y, limit_ms: k }, startedAt: this.#n(), cut: (b) => {
      if (w.ended || e.status !== "backgrounded") return false;
      return O(b), true;
    } }, O = (b) => {
      if (w.ended) return;
      if (clearTimeout(A), I(), w.ended = { how: b, at: this.#n() }, this.#t.delete(h), w.unwanted) this.#e?.store.remove(h);
      else this.#t.set(h, w), this.#d(w);
      this.#u().forEach(() => p("mcp_serve_background_command", "ending_dropped")), z.resolve(), this.#o++, this.#r.emit();
      try {
        if (e.status === "backgrounded") e.kill();
        e.cleanup(), ZZe(h, b.state === "exited" ? `
[exited with code ${b.exit_code}]
` : `
[killed]
`), hf(h), t(`mcp serve: background command ${h} ended: ${b.state}${b.state === "killed" && b.reason ? ` (${b.reason})` : ""}`), a("tengu_background_shell_settled", { elapsed_ms: Math.round(w.ended.at - w.startedAt), requested_timeout_ms: n ?? 0, deadline_ms: k, outcome: c(b.state !== "exited" ? "killed" : b.exit_code === 0 ? "completed" : "failed"), stop_cause: b.state === "time_limit" ? S("deadline") : b.state === "killed" ? ce(b.reason) : void 0, stopped_by: ce(b.state === "stopped" ? b.stopped_by : void 0), subagent_owned: s.agentId !== void 0, unwanted: w.unwanted === true });
      } catch (P) {
        l(N(P));
      }
    }, A = setTimeout(w.cut, k, { state: "time_limit" }).unref(), z = Promise.withResolvers(), I = _t(async () => {
      w.cut({ state: "killed", reason: "daemon_exit" });
      let b = this.#e;
      if (b !== void 0) await z.promise, await b.store.settled(h);
    });
    if (this.#t.set(h, w), this.#d(w), this.#e !== void 0) this.#i ??= setInterval(() => {
      let b = [...this.#t.values()].filter(({ ended: P, unwanted: L }) => !P && !L);
      if (b.length === 0) clearInterval(this.#i), this.#i = void 0;
      b.forEach((P) => this.#d(P));
    }, ne).unref();
    return e.result.then(async (b) => {
      await e.taskOutput.flush().catch((P) => l(N(P))), O(Xe(b));
    }).catch((b) => {
      l(N(b)), O({ state: "killed" });
    }), this.#o++, this.#r.emit(), h;
  }
  #d({ listed: e, startedAt: n, ended: r }) {
    if (this.#e === void 0) return;
    let { store: s, wallNow: h } = this.#e, y = this.#n(), k = h(), { taskId: w, output_path: O, limit_ms: A } = e;
    s.write({ listed: { taskId: w, output_path: O, limit_ms: A }, started_at: Math.round(k - (y - n)), written_at: Math.round(k), ...r && { ended: { how: r.how, at: Math.round(k - (y - r.at)) } } });
  }
  #u() {
    let e = [...this.#t.values()].filter((n) => n.ended).slice(0, -$e);
    return e.forEach((n) => {
      this.#t.delete(n.listed.taskId), this.#e?.store.remove(n.listed.taskId), this.#s = n.ended?.at;
    }), e;
  }
  async #m(e, n) {
    try {
      let { commands: r, counted: s } = await e.readEarlier(), h = this.#n(), y = n(), k = r.map(({ listed: A, started_at: z, ended: I }) => {
        let b = h - Math.max(0, y - I.at);
        return { listed: A, startedAt: Math.min(b, h - Math.max(0, y - z)), cut: () => false, ended: { how: I.how, at: b } };
      }), w = [...this.#t.values()];
      this.#t.clear(), [...k, ...w].forEach((A) => this.#t.set(A.listed.taskId, A));
      let O = this.#u();
      if (Object.values(s).some((A) => A > 0)) a("tengu_mcp_serve_background_records_read", { ...s, dropped_for_room: O.length });
      if (k.length > 0) this.#o++, this.#r.emit();
    } catch (r) {
      l(N(r));
    }
  }
}
var F4t = new W(() => new be());
function RJr(e, n) {
  if (n !== "tool-container" || !nr() || i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted" || C_e()) return;
  let r = { said: false };
  F4t.of(e).keepRecordsIn(new G({ folder: () => Ve(oR(), "background-commands"), failed: (s) => {
    if (t(`mcp serve: could not save or delete a background command's record on disk, so after a restart that command may be missing, out of date, or listed again after it was acknowledged: ${d(s)}`, { level: "error" }), !r.said) r.said = true, p("mcp_serve_background_command", "record_failed");
  } }));
}
async function xJr(e, n, { session: r, callerGone: s }) {
  let { seen: h, life: y, hold_ms: k, told: w, tool_use_ids: O } = Q(e ?? {}), [A, ...z] = (O ?? []).filter((x) => !J().safeParse(x).success);
  if (A !== void 0) throw new R(`ReadCalls: ${_(A)} is not a valid tool_use_id${z.length > 0 ? ` (and ${z.length} more)` : ""}. An id is 1 to 128 letters, digits or _ . : @ -, and not only dots.`, "ReadCalls: a tool_use_id is not valid");
  let I = F4t.of(r.host);
  await I.restored, I.forget(w ?? []);
  let b = () => O?.some((x) => !me(r, x)) ?? false;
  if (h !== void 0 && y === I.life && k !== void 0 && !b()) {
    let x = new AbortController(), H = pe(r, () => {
      if (b()) x.abort();
    }), q = Cs(n, { signalB: s, timeoutMs: k, refTimer: true });
    try {
      await I.changedSince(h, AbortSignal.any([q.signal, x.signal]));
    } finally {
      q.cleanup(), H();
    }
  }
  let P = (O ?? fe(r)).map((x) => {
    let H = I.taskIdOf(x);
    return { tool_use_id: x, ...H === void 0 ? le(r, x) : { state: "background", taskId: H } };
  });
  if (O !== void 0 && O.length > 0) {
    let x = (H) => F(P, (q) => q.state === H);
    a("tengu_mcp_serve_calls_read_by_id", { background: x("background"), running: x("running"), finished: x("finished"), unknown: x("unknown") });
  }
  let L = [I.msSinceNewestDropped(), _e(r)].filter((x) => x !== void 0), j = { ...I.list(), calls: P, ...L.length > 0 && { dropped_ended_ms_ago: Math.min(...L) } };
  return { summary: `${j.commands.length} commands, ${j.calls.length} calls`, output: j };
}
async function PJr(e, n, { session: r }) {
  let { taskId: s } = Ke().parse(e), h = F4t.of(r.host).stop(s);
  return { summary: `stopped: ${h}`, output: { stopped: h } };
}
export {
  AJr,
  CJr,
  EJr,
  F4t,
  PJr,
  RJr,
  Sas,
  TJr,
  _as,
  bvi,
  gas,
  has,
  kJr,
  mas,
  sur,
  vJr,
  wfe,
  xJr,
  yas
};
