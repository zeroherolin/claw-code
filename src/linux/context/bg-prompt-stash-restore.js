// linux/context/bg-prompt-stash-restore.js — Claude Code 2.1.310（linux）模块 chunk-83z0zmh5.js
import { G } from "../telemetry/anthropic-workspace-id.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { _, te, SC, t } from "../fs/gitlab-runner-authentication-token.js";
import { re } from "../shared/chunk-d2c47492.js";
import { i } from "../shared/environment.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { bl } from "../fs/reply-across-default-dirs.js";
import { fu } from "./team-memory-sync.js";
import { Os, PM } from "../fs/utf-8.8f8e.js";
import { Rl } from "../telemetry/bg-roster-parse-failed.js";
import { o, v, T, u, B } from "../vendor/zod/string-format.js";
import { rm as P } from "fs/promises";
import { join as y } from "path";
var w = ".prompt-stash", x = 262144, O = 256, z = p(() => u({ text: o(), cursorOffset: v().int().nonnegative(), pasteIds: T(v().int().nonnegative()).max(O), launchWarning: u({ type: B(["deep-link", "prefill"]), prefillLength: v().int().nonnegative() }).optional() }));
function D(e) {
  return _({ text: e.text, cursorOffset: e.cursorOffset, pasteIds: Object.values(e.pastedContents).filter((r) => !r.inline).slice(0, O).map((r) => r.id), launchWarning: e.launchWarning });
}
function Bio(e) {
  let r = [], s = "";
  for (let a of e.replace(/\r\n|\r/g, `
`).replaceAll("	", "    ").split(/\u200C+/)) {
    let n = SC(a, "", { keepNewlines: true });
    if (n === "") continue;
    if (s !== "" && /\S$/.test(s) && /^\S/.test(n)) r.push("‌");
    r.push(n), s = n;
  }
  return r.join("");
}
async function OUe(e, r) {
  await P(e, { force: true });
  let s = await PM(e, r, 384);
  try {
    await Os(s, e);
  } catch (a) {
    throw await P(s, { force: true }).catch(() => {
    }), a;
  }
}
function E(e) {
  let r;
  try {
    r = te(e);
  } catch {
    return null;
  }
  let s = z().safeParse(r);
  if (!s.success) return null;
  let { cursorOffset: a, pasteIds: n, launchWarning: h } = s.data, d = Bio(s.data.text), j = new Set(n), l = "", S = 0;
  for (let c of fu(d)) if (j.has(c.id)) l += d.slice(S, c.index), S = c.index + c.match.length;
  if (l += d.slice(S), l.trim() === "") return null;
  return { text: l, mode: "prompt", cursorOffset: re(l, Math.min(a, l.length)).length, pastedContents: {}, launchWarning: h };
}
async function I(e, r) {
  let s = y(e, w), a = r === null ? "" : D(r);
  if (Buffer.byteLength(a) > x) t("[bg] prompt stash too large to persist; kept in memory only", { level: "warn" }), a = "";
  try {
    let n = await P(s, { force: true }).then(() => true, (h) => (Rl(h), false));
    if (a === "" && n) return;
    await OUe(s, a);
  } catch (n) {
    if (!G(n)) Rl(n);
  }
}
async function k(e) {
  let r = await bl(y(e, w), x);
  if (!r) return null;
  let s = E(r);
  if (s === null) t("[bg] persisted prompt stash unreadable or empty", { level: "warn" }), m("bg_prompt_stash_restore", "unreadable_or_empty");
  return s;
}
class jio {
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
    if (this.#t.getState().stash !== null) return f("bg_prompt_stash_restore", "slot_taken"), false;
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
  Bio,
  OUe,
  jio
};
