// darwin/context/bg-prompt-stash-restore.js — Claude Code 2.1.310（darwin）模块 chunk-vcshmp6x.js
import { G } from "../telemetry/anthropic-workspace-id.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { _, ee, vA, t } from "../fs/gitlab-runner-authentication-token.js";
import { re } from "../shared/chunk-d2c47492.js";
import { i } from "../shared/environment.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { bl } from "../fs/reply-across-default-dirs.js";
import { fu } from "./team-memory-sync.js";
import { Os, DM } from "../fs/utf-8.8f8e.js";
import { Rl } from "../telemetry/bg-roster-parse-failed.js";
import { o, E, C, u, B } from "../vendor/zod/string-format.js";
import { rm as P } from "fs/promises";
import { join as y } from "path";
var w = ".prompt-stash", x = 262144, v = 256, j = f(() => u({ text: o(), cursorOffset: E().int().nonnegative(), pasteIds: C(E().int().nonnegative()).max(v), launchWarning: u({ type: B(["deep-link", "prefill"]), prefillLength: E().int().nonnegative() }).optional() }));
function z(e) {
  return _({ text: e.text, cursorOffset: e.cursorOffset, pasteIds: Object.values(e.pastedContents).filter((r) => !r.inline).slice(0, v).map((r) => r.id), launchWarning: e.launchWarning });
}
function oao(e) {
  let r = [], s = "";
  for (let a of e.replace(/\r\n|\r/g, `
`).replaceAll("	", "    ").split(/\u200C+/)) {
    let n = vA(a, "", { keepNewlines: true });
    if (n === "") continue;
    if (s !== "" && /\S$/.test(s) && /^\S/.test(n)) r.push("‌");
    r.push(n), s = n;
  }
  return r.join("");
}
async function UUe(e, r) {
  await P(e, { force: true });
  let s = await DM(e, r, 384);
  try {
    await Os(s, e);
  } catch (a) {
    throw await P(s, { force: true }).catch(() => {
    }), a;
  }
}
function D(e) {
  let r;
  try {
    r = ee(e);
  } catch {
    return null;
  }
  let s = j().safeParse(r);
  if (!s.success) return null;
  let { cursorOffset: a, pasteIds: n, launchWarning: h } = s.data, d = oao(s.data.text), O = new Set(n), l = "", S = 0;
  for (let c of fu(d)) if (O.has(c.id)) l += d.slice(S, c.index), S = c.index + c.match.length;
  if (l += d.slice(S), l.trim() === "") return null;
  return { text: l, mode: "prompt", cursorOffset: re(l, Math.min(a, l.length)).length, pastedContents: {}, launchWarning: h };
}
async function I(e, r) {
  let s = y(e, w), a = r === null ? "" : z(r);
  if (Buffer.byteLength(a) > x) t("[bg] prompt stash too large to persist; kept in memory only", { level: "warn" }), a = "";
  try {
    let n = await P(s, { force: true }).then(() => true, (h) => (Rl(h), false));
    if (a === "" && n) return;
    await UUe(s, a);
  } catch (n) {
    if (!G(n)) Rl(n);
  }
}
async function k(e) {
  let r = await bl(y(e, w), x);
  if (!r) return null;
  let s = D(r);
  if (s === null) t("[bg] persisted prompt stash unreadable or empty", { level: "warn" }), m("bg_prompt_stash_restore", "unreadable_or_empty");
  return s;
}
class sao {
  #t;
  #e;
  #r = Promise.resolve();
  #s = false;
  #o;
  constructor(e) {
    this.#t = e, this.#e = b(e.getState().stash), this.#o = e.subscribe(this.#n);
  }
  #n = () => {
    let e = b(this.#t.getState().stash);
    if (e === this.#e) return;
    this.#e = e;
    let r = i.CLAUDE_JOB_DIR;
    if (!r) return;
    this.#r = this.#r.then(() => I(r, e));
  };
  async restore() {
    let e = i.CLAUDE_JOB_DIR;
    if (this.#s || !e) return false;
    this.#s = true;
    let r = await k(e);
    if (r === null) return false;
    if (this.#t.getState().stash !== null) return p("bg_prompt_stash_restore", "slot_taken"), false;
    return this.#e = r, this.#t.setState((s) => ({ ...s, stash: r })), g("bg_prompt_stash_restore"), true;
  }
  flush() {
    return this.#r;
  }
  dispose() {
    this.#o();
  }
}
function b(e) {
  return e?.cameBack === true ? null : e;
}
export {
  UUe,
  oao,
  sao
};
