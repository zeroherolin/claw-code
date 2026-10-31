// darwin/fs/ccr-left-running-programs-note.js — Claude Code 2.1.310（darwin）模块 chunk-9sg451z1.js
import { v } from "../telemetry/anthropic-workspace-id.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { kn, k } from "../settings/global-config-and-gates.js";
import { _, t } from "./gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { Be } from "../mcp/allowed-warning.js";
import { rK } from "./chunk-b6c2193e.js";
import { ape } from "../shared/chunk-dda594a8.js";
import { o, E, oe, C, u, RE, T } from "../vendor/zod/string-format.js";
import { wo } from "../shared/chunk-5c1d3f9e.js";
import { v5, Tlr, wbe, lee } from "../shared/chunk-a49818fd.js";
import { Ee } from "../shared/chunk-fee3c428.js";
import { readFileSync as D } from "fs";
import { readdir as H, readFile as y } from "fs/promises";
var w = 10, L = 16, V = 200, R = 5e3, B = 3e4, S = 64, A = /^[A-Za-z0-9_-]{1,128}$/, x = "tengu_keen_dolphin";
async function F([e, n]) {
  try {
    return O(await y(`/proc/${e}/stat`, "utf8"), n);
  } catch (r) {
    return M(r);
  }
}
function M(e) {
  let n = v(e);
  return n === "ENOENT" || n === "ESRCH" ? "gone" : "unknown";
}
function O(e, n) {
  let r = v5(e);
  if (r === void 0 || r === "") return "unknown";
  if (r !== n || lee(wbe(e))) return "gone";
  return "running";
}
async function JHr(e) {
  let n = /* @__PURE__ */ new Map();
  if (e.size === 0) return n;
  let r = (await H("/proc")).filter((s) => /^[0-9]+$/.test(s));
  for (let s = 0; s < r.length; s += S) {
    let d = await Promise.all(r.slice(s, s + S).map((i) => y(`/proc/${i}/stat`, "utf8").catch(() => "")));
    for (let [i, c] of d.entries()) {
      let h = Tlr(c), p = v5(c);
      if (h === void 0 || !e.has(h) || p === void 0 || p === "" || lee(wbe(c))) continue;
      let P = n.get(h) ?? [];
      if (P.length < L) P.push([Number(r[s + i]), p]), n.set(h, P);
    }
  }
  return n;
}
function xIo(e) {
  try {
    return process.kill(-e, 0), true;
  } catch (n) {
    return v(n) === "EPERM";
  }
}
async function G(e, n) {
  let r = await Promise.all(e.processes.map(F));
  if (r.includes("running")) return "running";
  if (r.includes("unknown") || xIo(e.pgid) || n.has(e.pgid)) return "unknown";
  return "gone";
}
var z = f(() => E().refine(rK)), I = f(() => u({ tool_use_id: o().regex(A), returned_at: E().min(0).max(864e13), pgid: z(), processes: C(oe()).max(4096) })), U = f(() => RE([z(), o().regex(/^[0-9]{1,24}$/)])), X = f(() => u({ v: T(1), programs: C(oe()) }));
function K(e) {
  let n = X().safeParse(e);
  if (!n.success) return [];
  let r = [];
  for (let s of n.data.programs.slice(0, w)) {
    let d = I().safeParse(s);
    if (!d.success) continue;
    let i = [];
    for (let c of d.data.processes.slice(0, L)) {
      let h = U().safeParse(c);
      if (h.success) i.push(h.data);
    }
    if (i.length > 0) r.push({ ...d.data, processes: i });
  }
  return r;
}
function W(e, n) {
  let r = new Set(e.map((i) => i.tool_use_id)), s = /* @__PURE__ */ new Map();
  for (let i of n) {
    if (i.type !== "assistant") continue;
    for (let c of i.message.content) {
      if (c.type !== "tool_use" || c.name !== Be || !r.has(c.id)) continue;
      let h = c.input, p = typeof h === "object" && h !== null && "description" in h ? h.description : void 0, P = typeof p === "string" ? p.replace(/[\s\p{Cc}"]+/gu, " ").trim() : "";
      if (P !== "") s.set(c.id, ape(P, V));
    }
  }
  return `<system-reminder>
Programs left running by these earlier commands are not running on this machine now:
${e.map((i) => {
    let c = new Date(i.returned_at).toISOString().slice(0, 16).replace("T", " "), h = s.get(i.tool_use_id);
    return h === void 0 ? `- a command that returned at ${c} UTC` : `- "${h}" (its command returned at ${c} UTC)`;
  }).join(`
`)}
Each may have finished or been stopped. Check what it wrote before relying on its results, and start it again only if it is still needed.
</system-reminder>`;
}
class j {
  #n;
  #a = () => false;
  #e = [];
  #s = "[]";
  #t;
  #r = false;
  #o = false;
  #i = /* @__PURE__ */ new Set();
  enable(e, n) {
    this.#n = e, this.#a = n;
  }
  enableCounting() {
    this.#o = true, this.#n = () => {
    };
  }
  isFollowing() {
    return this.#n !== void 0 && (this.#o || k(x, false));
  }
  follows(e) {
    return (e === "turn" || e === "agent" && this.#o) && this.isFollowing();
  }
  countRunning() {
    let e = new Set(this.#i);
    for (let n of this.#e) if (b(n)) e.add(n.pgid);
    return Math.min(e.size, w);
  }
  noteCommandLeftProcesses(e, n) {
    if (!this.isFollowing() || !A.test(n)) return;
    let r = Date.now(), s = this.#n;
    this.#i.add(e), JHr(/* @__PURE__ */ new Set([e])).then((d) => {
      let i = d.get(e);
      if (i?.some(([c]) => c === e)) return;
      if (i !== void 0 && this.#n === s) this.#l({ tool_use_id: n, returned_at: r, pgid: e, processes: i });
    }).catch(() => {
    }).finally(() => this.#i.delete(e));
  }
  takeOver(e, n) {
    if (this.#e = [...e], this.#s = e.length === n ? _(e) : "", this.#u(), e.length > 0) this.#c(R, true);
  }
  #l(e) {
    if (this.#e = [...this.#e.filter((n) => n.tool_use_id !== e.tool_use_id && (!this.#o || b(n))), e].slice(-w), !this.#r) this.#c(R, true);
  }
  #c(e, n) {
    clearTimeout(this.#t), this.#r = n, this.#t = setTimeout(() => {
      this.#r = false, this.check().catch(l);
    }, e), this.#t.unref();
  }
  async check() {
    if (!this.isFollowing()) return;
    let e = this.#n, n = this.#e, r = await Promise.all(n.map(Y));
    if (this.#n !== e) return;
    let s = this.#e;
    if (this.#e = [...r.filter((d, i) => d !== void 0 && s.includes(n[i])), ...s.filter((d) => !n.includes(d))], this.#u(), this.#e.length > 0 && !this.#r) this.#c(B, false);
  }
  forget() {
    clearTimeout(this.#t), this.#t = void 0, this.#r = false, this.#e = [], this.#s = "", this.#u();
  }
  #u() {
    let e = _(this.#e);
    if (this.#o || e === this.#s || this.#a()) return;
    this.#s = e;
    let n = this.#e.length;
    t(n > 0 ? `left-running programs: saved a list of ${n} to the worker's state` : "left-running programs: cleared the list in the worker's state"), this.#n?.(n > 0 ? { v: 1, programs: this.#e } : null);
  }
  reset() {
    clearTimeout(this.#t), this.#t = void 0, this.#r = false, this.#e = [], this.#s = "[]", this.#n = void 0, this.#a = () => false, this.#o = false, this.#i.clear();
  }
}
function b({ processes: e }) {
  return e.some(([n, r]) => {
    try {
      let s = D(`/proc/${n}/stat`, "utf8");
      return O(s, r) !== "gone";
    } catch (s) {
      return M(s) !== "gone";
    }
  });
}
async function Y(e) {
  let n = await Promise.all(e.processes.map(F)), r = e.processes.filter((s, d) => n[d] !== "gone");
  return r.length > 0 ? { ...e, processes: r } : void 0;
}
var Une = Ee(new j(), (e) => e.reset());
async function tUs(e) {
  try {
    if (e.unread) {
      Une.reset();
      return;
    }
    let n = K(e.raw);
    if (n.length === 0) return;
    let r = await JHr(new Set(n.map((c) => c.pgid))), s = await Promise.all(n.map((c) => G(c, r))), d = n.filter((c, h) => s[h] === "gone"), i = n.filter((c, h) => s[h] === "running");
    if (d.length > 0) await e.settleFlag();
    if (!Une.isFollowing()) {
      let c = kn(x, false);
      if (!c.value && c.source !== "fallback") Une.forget();
      return;
    }
    if (d.length > 0) e.addRow(W(d, e.messages));
    Une.takeOver(i, n.length), a("tengu_ccr_left_running_programs_note", { told_count: d.length, followed_count: i.length, dropped_count: n.length - d.length - i.length }), g("print_left_running_note");
  } catch (n) {
    l(n), m("print_left_running_note", "restore_failed");
  }
}
import { posix as q } from "path";
var nUs = "cc-shell", N = Ee({ joinCommand: void 0 }, (e) => {
  e.joinCommand = void 0;
});
function aan(e) {
  N.joinCommand = e === void 0 ? void 0 : `{ { \\builtin echo 0 >| ${wo([q.join(e, "tasks")])}; } 2>/dev/null || :; }`;
}
function rUs() {
  return N.joinCommand;
}
export {
  JHr,
  Une,
  aan,
  nUs,
  rUs,
  tUs,
  xIo
};
