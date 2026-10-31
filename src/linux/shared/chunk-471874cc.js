// linux/shared/chunk-471874cc.js — Claude Code 2.1.310（linux）模块 chunk-0hjcje8e.js
import { U } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
import { _, te, t } from "../fs/gitlab-runner-authentication-token.js";
import { SR } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { s9 } from "./chunk-c564b685.js";
import { constants as p, statSync as m } from "fs";
import { access as h, stat as g } from "fs/promises";
import { isAbsolute as d, join as w } from "path";
var eC = "CLAUDE_CODE_PROCESS_WRAPPER", ftt = 12e3, c = { argv: [], error: null, platformIgnored: false, record: "" };
class f {
  memoRaw = void 0;
  memoState = c;
  getState() {
    let r = SR(() => process.env[eC]);
    if (!r) return c;
    let e = r === this.memoRaw ? this.memoState.error : null;
    if (r === this.memoRaw && e === null) return this.memoState;
    if (this.memoRaw = r, this.memoState = v(r), this.memoState.error && this.memoState.error !== e) t(`${eC} is set but can't be used — self-spawns that require it will refuse to start rather than run unwrapped: ${this.memoState.error}`, { level: "error" });
    else if (this.memoState.platformIgnored) t(`${eC} is set but ignored on Windows — the launcher must exec into Claude Code, which Windows can't do; sessions run unwrapped`, { level: "warn" });
    return this.memoState;
  }
}
var S = new W(() => new f());
function K7n() {
  return S.of(U().host).getState();
}
function nm() {
  return K7n().argv;
}
function _m() {
  return K7n().error;
}
async function A$() {
  if (_m() !== null) return false;
  let r = nm();
  if (r.length === 0) return true;
  let e = zzo(r)[0];
  return e === void 0 ? true : Gzo(e);
}
async function Gzo(r) {
  try {
    if (!(await g(r)).isFile()) return false;
    return await h(r, p.X_OK), true;
  } catch {
    return false;
  }
}
function zzo(r) {
  let e = r[0];
  return e !== void 0 && e.startsWith("/") ? [e] : [];
}
async function ptt() {
  let r = _m();
  if (r) return r;
  if (await A$()) return null;
  return `${eC}: launcher \`${nm()[0]}\` was deleted or is not executable — restore it (or fix the setting), then retry`;
}
function fz() {
  return K7n().record;
}
function v(r) {
  if (O() === "windows") return { argv: [], error: null, platformIgnored: true, record: "" };
  let e;
  try {
    e = y(r);
  } catch (n) {
    return i(n instanceof Error ? n.message : String(n));
  }
  if (e.length === 0) return i("the value is set but contains no launcher — unset the variable to run without one, or set it to the absolute path of your launcher");
  let s = e[0];
  if (s === process.execPath || s === w(s9(), "claude")) return i(`launcher \`${s}\` is Claude Code's own launch path — point ${eC} at your launcher, not at claude`);
  if (!d(s)) return i("the launcher must be an absolute path, not a bare name resolved via PATH");
  try {
    let n = m(s);
    if (!n.isFile() || (n.mode & 73) === 0) return i(`launcher \`${s}\` is not an executable regular file`);
  } catch {
    return i(`launcher \`${s}\` does not exist or is not readable`);
  }
  return { argv: e, error: null, platformIgnored: false, record: e.map((n) => /[\s"]/.test(n) ? _(n) : n).join(" ") };
}
function i(r) {
  return { argv: [], error: `${eC}: ${r}`, platformIgnored: false, record: "" };
}
var P = ";|&$()`<>";
function y(r) {
  let e = r.trim();
  if (e === "") return [];
  if (e.startsWith("[")) {
    let o;
    try {
      o = te(e);
    } catch {
      throw Error("value starts with `[` but is not valid JSON");
    }
    if (!Array.isArray(o) || !o.every((a) => typeof a === "string")) throw Error("JSON form must be an array of strings");
    if (o.length > 0 && o.some((a) => a === "")) {
      if (o.every((a) => a === "")) return [];
      throw Error("the JSON array contains an empty element — remove it, or fill in the value it was a placeholder for");
    }
    return o;
  }
  let s = [], n = "", u = false, l = false;
  for (let o = 0; o < e.length; o++) {
    let a = e[o];
    if (l) {
      if (a === "\\" && (e[o + 1] === '"' || e[o + 1] === "\\")) n += e[++o];
      else if (a === '"') l = false;
      else n += a;
      continue;
    }
    if (a === '"') {
      l = true, u = true;
      continue;
    }
    if (/\s/.test(a)) {
      if (u) s.push(n), n = "", u = false;
      continue;
    }
    if (P.includes(a)) throw Error("the value contains an unquoted shell metacharacter (one of ; | & $ ( ) ` < >) — it is an argv list, not a shell command");
    n += a, u = true;
  }
  if (l) throw Error("unterminated double quote");
  if (u) s.push(n);
  if (s.length > 0 && s.some((o) => o === "")) {
    if (s.every((o) => o === "")) return [];
    throw Error('the value contains an empty `""` token — remove it, or fill in the value it was a placeholder for');
  }
  return s;
}
export {
  A$,
  Gzo,
  K7n,
  _m,
  eC,
  ftt,
  fz,
  nm,
  ptt,
  zzo
};
