// linux/tasks/continued-in.js — Claude Code 2.1.310（linux）模块 chunk-zg0g4fdz.js
import { R, E } from "../telemetry/anthropic-workspace-id.js";
import { J } from "../context/not-admin-owned.js";
import { XS, Y0, ySe } from "../context/utf-8.js";
import { dT } from "../git/utf-8.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Mp, Mk } from "../agents/chunk-1782da8d.js";
import { zL } from "../shared/chunk-9d4f4f95.js";
import { Vi } from "../mcp/allowed-warning.js";
import { H } from "../shared/chunk-7027e6d5.js";
import { o, M, u, yt, A } from "../vendor/zod/string-format.js";
import { Bst } from "../context/tool-result.js";
import { z } from "../shared/chunk-be29de51.js";
async function* rGe(e) {
  let n = [];
  for await (let r of e) {
    if (typeof r !== "string") throw TypeError("transcriptLines takes text: open the stream with an encoding");
    let t = 0;
    for (let i = r.indexOf(`
`); i !== -1; i = r.indexOf(`
`, t)) n.push(r.slice(t, i)), yield g(n.join("")), n = [], t = i + 1;
    if (t < r.length) n.push(r.slice(t));
  }
  if (n.length > 0) yield g(n.join(""));
}
function g(e) {
  return e.endsWith("\r") ? e.slice(0, -1) : e;
}
var wFt = 6e5;
function dQ(e) {
  if (e?.kind !== "task-notification") return e;
  let n = zL(e.runId);
  return { kind: "task-notification", ...e.subkind !== void 0 && { subkind: e.subkind }, ...e.fireReason !== void 0 && { fireReason: e.fireReason }, ...e.producer !== void 0 && { producer: e.producer }, ...n !== void 0 && { runId: n }, ...e.taskKind === "mcp-task" && { taskKind: e.taskKind } };
}
function XF(e, n, r) {
  let t = dQ(e) ?? (n === "task-notification" ? { kind: "task-notification" } : void 0), i = zL(r);
  return i !== void 0 && t?.kind === "task-notification" && t.runId === void 0 ? { ...t, runId: i } : t;
}
function tde(e) {
  return e?.kind === "task-notification" && e.producer === "session-task";
}
function UK(e) {
  return e?.kind === "task-notification" && Object.keys(e).every((n) => n === "kind" || n === "producer" || n === "runId" || n === "taskKind");
}
function SFt(e, n) {
  return UK(e) && (tde(e) || n === true);
}
function JF(e, n) {
  return k(e, { udsInboxEnabled: typeof n === "boolean" ? n : true });
}
function k(e, { udsInboxEnabled: n }) {
  if (e?.kind === "channel") return true;
  if (e?.kind === "observer") return true;
  if (e?.kind === "observer-activity") return true;
  if (e?.kind === "slack-ping") return true;
  if (e?.kind === "peer") {
    if (e.senderTaskId !== void 0) return true;
    if (n) return true;
  }
  return false;
}
import { constants as w } from "fs";
import { open as b, readdir as fe, rm as le, stat as pe } from "fs/promises";
async function ZUs(e, n, r) {
  if (z() && r !== void 0) return _(r, n);
  let t;
  try {
    t = await b(e, w.O_WRONLY | w.O_APPEND);
  } catch (i) {
    let s = E(i);
    if (s === "ENOENT" || s === "ENOTDIR") return false;
    throw i;
  }
  try {
    let { size: i } = await t.stat();
    if (i === 0) return false;
    let s = void 0, d = Buffer.from(n, "utf8"), a = 0;
    while (a < d.length) {
      let { bytesWritten: c } = await t.write(d, a, d.length - a, s);
      if (c <= 0) throw new R(`tryAppend: short write to ${e} stalled with ${d.length - a} bytes remaining`, "tryAppend: zero-progress short write");
      if (a += c, s !== void 0) s += c;
    }
    return true;
  } finally {
    await t.close();
  }
}
async function _({ backend: e, key: n }, r) {
  let t = await e.append(n, [{ data: r }], { precondition: { type: "ifExists", nonEmpty: true } });
  if (!t.ok) {
    if (t.error.code === "NotFound") return false;
    throw Error("Session append: transcript not writable via storage", { cause: t.error });
  }
  return true;
}
import { constants as y } from "fs";
import { open as v } from "fs/promises";
import { dirname as x, join as P } from "path";
var h = '"type":"continued-in"', j = p(() => yt({ type: A("continued-in"), continuedInSessionId: o() })), U = p(() => yt({ type: A("assistant"), isApiErrorMessage: M().optional(), message: yt({ stop_reason: o().nullish() }).optional() }));
function hht(e, { canFork: n } = { canFork: true }) {
  if (e.provable) return `Your most recent conversation is running in the background (session ${e.sessionId}). Use \`claude agents\` to find and attach to it, or \`claude --resume\` to pick another session.`;
  let r = n ? ", or add --fork-session to branch off a copy" : "";
  return `Your most recent conversation moved to a background session (${e.sessionId}) registered from another machine or container, so this one can't tell whether it is still running. Use \`claude --resume\` to pick a session${r}.`;
}
function eBs(e, n) {
  return { type: "continued-in", timestamp: (/* @__PURE__ */ new Date()).toISOString(), sessionId: e, continuedInSessionId: n };
}
function Pqn(e) {
  if (!e.includes(h)) return;
  let n = e.length;
  while (n > 0) {
    let r = e.lastIndexOf(`
`, n - 1), t = e.slice(r + 1, n);
    n = r;
    let i = t.includes(h), s = t.includes('"type":"user"') || t.includes('"type":"assistant"');
    if (i || s) try {
      let d = JSON.parse(t);
      if (i) {
        let a = j().safeParse(d);
        if (a.success) return Y0(a.data.continuedInSessionId) ?? void 0;
      }
      if (s && D(d)) return;
    } catch {
    }
    if (r < 0) break;
  }
  return;
}
function D(e) {
  let n = U().safeParse(e);
  if (n.success) return n.data.isApiErrorMessage !== true && typeof n.data.message?.stop_reason === "string";
  return H(e) && Bst(e, { commandFallback: "" }) !== void 0;
}
async function tBs(e, n, r) {
  let t = P(x(e), `${n}.jsonl`), i = await ySe(t, Mk(Mp(t, r)));
  return i !== null && await Can(t, i.head, i.tail, i.size, r);
}
var f = '"parentUuid":', N = 16777216, O = 1048576;
async function Can(e, n, r, t, i) {
  if (n.includes(f) || r.includes(f)) return true;
  if (t <= XS) return false;
  if (Mp(e, i) !== void 0) return true;
  try {
    let d = await v(e, y.O_RDONLY | y.O_NOFOLLOW | y.O_NONBLOCK);
    try {
      if (!(await d.stat()).isFile()) return false;
      let a = Buffer.allocUnsafe(O + f.length), c = 0, m = 0;
      while (m < N) {
        let { bytesRead: S } = await d.read(a, c, O, m);
        if (S === 0) return false;
        let l = c + S;
        if (a.subarray(0, l).includes(f)) return true;
        c = Math.min(f.length, l), a.copyWithin(0, l - c, l), m += S;
      }
      return true;
    } finally {
      await d.close();
    }
  } catch {
    return false;
  }
}
import { readFile as L } from "fs/promises";
import { dirname as F, join as C } from "path";
var W = p(() => u({ customTitle: o() }));
function Iqn(e, n) {
  return C(F(e), n, "custom-title.json");
}
async function nBs(e, n, r) {
  let t = await B(Iqn(e, n), r);
  if (t === void 0) return;
  let i;
  try {
    i = JSON.parse(t);
  } catch {
    return;
  }
  let s = W().safeParse(i);
  if (!s.success) return;
  return Vi(s.data.customTitle) || void 0;
}
async function B(e, n) {
  if (z() && n !== void 0) try {
    let r = dT(e);
    if (r !== void 0) {
      let t = await n.readText([r]);
      if (!t.ok) return;
      let i = t.value.items[0];
      return i.found ? i.value : void 0;
    }
  } catch {
    return;
  }
  if (J()) return;
  try {
    return await L(e, "utf8");
  } catch {
    return;
  }
}
var YJe = "Tool permission request failed", nOo = "Tool permission stream closed before response received", kLr = "Stream closed", ze = [`${YJe}: AbortError: ${nOo}`, `${YJe}: AbortError: ${kLr}`, YJe];
var _f = 6e5, rBs = ["SessionStart", "Setup"], rOo = 3e4, Ran = 6e3, oOo = 3e4, oBs = 5e3;
class FT {
  returned;
  queue = [];
  readResolve;
  readReject;
  isDone = false;
  hasError;
  started = false;
  constructor(e) {
    this.returned = e;
  }
  get ended() {
    return this.isDone;
  }
  [Symbol.asyncIterator]() {
    if (this.started) throw Error("Stream can only be iterated once");
    return this.started = true, this;
  }
  next() {
    if (this.queue.length > 0) return Promise.resolve({ done: false, value: this.queue.shift() });
    if (this.isDone) return Promise.resolve({ done: true, value: void 0 });
    if (this.hasError) return Promise.reject(this.hasError);
    return new Promise((e, n) => {
      this.readResolve = e, this.readReject = n;
    });
  }
  enqueue(e) {
    if (this.readResolve) {
      let n = this.readResolve;
      this.readResolve = void 0, this.readReject = void 0, n({ done: false, value: e });
    } else this.queue.push(e);
  }
  dropNewestQueued(e) {
    let n = this.queue.findLastIndex(e);
    if (n !== -1) this.queue.splice(n, 1);
  }
  done() {
    if (this.isDone = true, this.readResolve) {
      let e = this.readResolve;
      this.readResolve = void 0, this.readReject = void 0, e({ done: true, value: void 0 });
    }
  }
  error(e) {
    if (this.hasError = e, this.readReject) {
      let n = this.readReject;
      this.readResolve = void 0, this.readReject = void 0, n(e);
    }
  }
  return() {
    if (this.isDone = true, this.returned) this.returned();
    return Promise.resolve({ done: true, value: void 0 });
  }
}
function T(e, n) {
  let r = e.type === "attachment" ? e.attachment : void 0;
  if (typeof r !== "object" || r === null || !("type" in r) || r.type !== "queued_command") return;
  let t = Reflect.get(r, n);
  return typeof t === "string" && t ? t : void 0;
}
function yht(e) {
  return T(e, "source_uuid");
}
function sOo(e) {
  return T(e, "delivery_id");
}
function pDe(e) {
  let { submitUuid: n } = e, r = yht(e) ?? (e.type === "system" && typeof n === "string" ? n : void 0);
  return r ? [e.uuid, r] : [e.uuid];
}
function Oqn(e) {
  return e.type === "user" ? xan(e.droppedPromptUuids) : [];
}
function xan(e) {
  return Array.isArray(e) ? e.filter((n) => typeof n === "string" && n !== "") : [];
}
function iOo(e, n) {
  let r = e.findIndex((t) => t.uuid === n);
  return r !== -1 ? r : e.findIndex((t) => yht(t) === n);
}
export {
  Can,
  FT,
  Iqn,
  JF,
  Oqn,
  Pqn,
  Ran,
  SFt,
  UK,
  XF,
  YJe,
  ZUs,
  _f,
  dQ,
  eBs,
  hht,
  iOo,
  kLr,
  nBs,
  nOo,
  oBs,
  oOo,
  pDe,
  rBs,
  rGe,
  rOo,
  sOo,
  tBs,
  tde,
  wFt,
  xan,
  yht
};
