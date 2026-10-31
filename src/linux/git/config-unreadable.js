// linux/git/config-unreadable.js — Claude Code 2.1.310（linux）模块 chunk-5bpsfngr.js
import { G } from "../telemetry/anthropic-workspace-id.js";
import { udr } from "../fs/gitlab-runner-authentication-token.js";
import { gd } from "../terminal/chunk-3ca478a4.js";
import { L } from "../context/not-admin-owned.js";
import { Qi, T6, FYe } from "../fs/node-modules.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { _n, Cst, Rs, rlr } from "../shared/chunk-8eee6836.js";
import { ct } from "./utf8-keep-bom.js";
import { Mfe, O7o, eui, x$e, nW, K0, xb, rSe, SAt, A4t, oSe, It } from "./utf-8.js";
import { sp } from "./not-link.js";
import { hGt } from "./chunk-86d270cc.js";
import { lstatSync as E, realpathSync as S, statSync as N } from "fs";
import { devNull as Y } from "os";
import { basename as A, dirname as y, join as d, resolve as R } from "path";
var W = 4096;
function k(e) {
  let n, r = e.includes("\0") || e.split(/\r?\n/).map((t) => t.replace(/^[ \t]+/, "")).some((t) => !/^[#;]/.test(t) && /[\r\t]|(?:^|[^\\])(?:\\\\)*\\$/.test(t));
  return hGt(e, { entry: (t, o, i) => {
    if (t?.name === "core" && !t.quoted && o === "worktree") n = i, r ||= i === void 0 || i === "" || i.length > W || /^(?:~|%\(|:\()/.test(i);
  }, malformed: () => {
    r = true;
  } }, { maxLines: 1 / 0 }), r ? null : n;
}
var R8 = d(Y, "not-a-git-repository"), H = /* @__PURE__ */ new Set(["true", "yes", "on"]);
function T(e) {
  let n = e.trim().toLowerCase(), r = /^[+-]?(\d+)[kmg]?$/.exec(n);
  return H.has(n) || r !== null && Number(r[1]) !== 0;
}
var x = /(^|\])[^\S\n\r\u2028\u2029]*worktree\s*=/im;
function bye(e) {
  let n = d(e, ".git"), r;
  try {
    r = E(n);
  } catch (s) {
    let l = G(s) && v(e) ? w(e) : null;
    return l === null ? null : { gitDir: l, workTree: null, commonDir: l };
  }
  let t = w(e);
  if (t === null) return null;
  if (r.isDirectory()) {
    let s = d(t, ".git");
    return F(s) ? { gitDir: s, workTree: t, commonDir: s } : null;
  }
  let o;
  if (r.isSymbolicLink()) o = x$e(n);
  else if (r.isFile()) {
    let s = oSe(n, rSe)?.trim();
    o = s !== void 0 && s.startsWith("gitdir:") ? s.slice(7).trim() : null;
  } else return null;
  if (o === null || o === "" || Qi(o, e) || xb(o, e)) return null;
  let i = T6(R(e, o));
  return i === null ? null : J(i, t);
}
function D4s(e) {
  let n = d(e, ".git"), r;
  try {
    r = E(n);
  } catch {
    return false;
  }
  let t = null;
  if (r.isSymbolicLink()) t = x$e(n);
  else if (r.isFile()) {
    let i = oSe(n, rSe)?.trim();
    t = i !== void 0 && i.startsWith("gitdir:") ? i.slice(7).trim() : null;
  }
  if (t === null || t === "" || Qi(t, e) || xb(t, e)) return false;
  let o = T6(R(e, t));
  return o !== null && v(o);
}
var V = /* @__PURE__ */ new Set(["ENOENT", "ENOTDIR", "ELOOP"]);
function w(e) {
  let { real: n, code: r } = FYe(e);
  if (n !== void 0) return n;
  return r !== void 0 && V.has(r) ? null : R(e);
}
function J(e, n) {
  let r = z(e, n);
  if (r !== null) {
    let o = y(y(e));
    return A(y(e)) === "worktrees" && _(r, n) && X(e, o, n) ? { gitDir: e, workTree: n, commonDir: o } : null;
  }
  let t = j(e);
  return t !== null && _(t, n) && F(e) ? { gitDir: e, workTree: n, commonDir: e } : null;
}
function gU(e) {
  return bye(e) ?? { gitDir: R8, workTree: e, commonDir: R8 };
}
function cd(e, n, { userLocale: r } = {}) {
  return Rs(n, { repository: gU(e), userLocale: r });
}
function H4s(e, n) {
  return rlr(n, { repository: gU(e) });
}
function L4s(e, n) {
  let { gitDir: r, workTree: t, commonDir: o } = gU(n), i = new Set(Cst), s = {};
  for (let l of Object.keys(e)) if (i.has(l.toUpperCase())) s[l] = void 0;
  return { ...e, ...s, GIT_DIR: r, ...t !== null ? { GIT_WORK_TREE: t } : { GIT_IMPLICIT_WORK_TREE: "0" }, GIT_COMMON_DIR: o };
}
function v(e) {
  try {
    if (!E(d(e, "HEAD")).isFile() || !E(d(e, "refs")).isDirectory() || !C(e, "commondir")) return false;
  } catch {
    return false;
  }
  let n = D(e);
  if (n === null || n.read.some((t) => x.test(t)) || n.unread !== void 0 && (x.test(n.unread) || O7o(n.unread, "core", null, "bare").some((t) => !T(t)))) return false;
  let r = n.read.flatMap((t) => O7o(t, "core", null, "bare")).at(-1);
  return r !== void 0 && T(r);
}
function D(e) {
  let n = P(e, "config");
  if (n === void 0) return null;
  if (C(e, "config.worktree")) return { read: [n], unread: void 0 };
  let r = P(e, "config.worktree");
  if (r === void 0) return null;
  let t = eui(n, "extensions", null, "worktreeConfig").at(-1);
  return t !== void 0 && T(t) ? { read: [n, r], unread: void 0 } : { read: [n], unread: r };
}
function P(e, n) {
  let r = d(e, n), t = K0(r, e) ? void 0 : oSe(r, A4t);
  return t !== void 0 && Mfe(t) ? void 0 : t;
}
var q = /\[\s*include/i;
function N4s(e) {
  let n = [];
  for (let r of ["config", "config.worktree"]) {
    let t = P(e, r);
    if (t === void 0) {
      if (r === "config.worktree" && C(e, r)) continue;
      return null;
    }
    n.push(t);
  }
  return n.some((r) => q.test(r));
}
function F(e) {
  return C(e, "commondir");
}
function C(e, n) {
  try {
    return E(d(e, n)), false;
  } catch (r) {
    return G(r);
  }
}
function X(e, n, r) {
  let t = d(e, "commondir");
  if (nW(t, e)) return false;
  let o = oSe(t, rSe)?.trim();
  if (o === void 0 || o === "" || Qi(o, r) || xb(o, e, r)) return false;
  return _(R(e, o), n);
}
function _(e, n) {
  try {
    let r = N(e, { bigint: true }), t = N(n, { bigint: true });
    if (!r.isDirectory() || r.dev !== t.dev) return false;
    if (r.ino !== 0n && t.ino !== 0n) return r.ino === t.ino;
    return b(S.native(e)) === b(S.native(n));
  } catch {
    return false;
  }
}
function b(e) {
  switch (O()) {
    case "macos":
      return sp(e.normalize("NFC"));
    case "windows":
      return sp(e);
    default:
      return e;
  }
}
function z(e, n) {
  let r = d(e, "gitdir");
  if (nW(r, e)) return null;
  let t = oSe(r, rSe)?.trim();
  if (t === void 0 || Qi(t, n) || xb(t, e, n)) return null;
  let o = R(e, t);
  return A(o) === ".git" ? y(o) : null;
}
function j(e) {
  let n = D(e), r = n === null || n.unread !== void 0 && x.test(n.unread) ? [null] : n.read.map((i) => k(i)), [t, ...o] = L(r.filter((i) => i !== void 0)).map((i) => i === null || Qi(i, e) || xb(i, e) ? null : R(e, i));
  return typeof t === "string" && o.every((i) => i !== null && _(t, i)) ? t : null;
}
var Q = /^filter\.(.*)\.(?:clean|smudge|process|required)$/is;
function pfn(e) {
  return e.normalize("NFKD").replace(/\p{M}+/gu, "").toLowerCase();
}
function TFo(e) {
  return L(Array.from(e).flatMap((n) => {
    let r = Q.exec(n)?.[1];
    return r === void 0 ? [] : [r];
  }));
}
function AFo(e) {
  return e.flatMap((n) => [[`filter.${n}.clean`, ""], [`filter.${n}.smudge`, ""], [`filter.${n}.process`, ""], [`filter.${n}.required`, "false"]]);
}
var K = 1048576, U = 5e3, CFo = Object.fromEntries(["GIT_TRACE", "GIT_TRACE_SETUP", "GIT_TRACE_PACKET", "GIT_TRACE_PACKFILE", "GIT_TRACE_PACK_ACCESS", "GIT_TRACE_PERFORMANCE", "GIT_TRACE_SHALLOW", "GIT_TRACE_CURL", "GIT_TRACE_REFS", "GIT_TRACE_FSMONITOR", "GIT_TRACE_WORKING_TREE_ENCODING", "GIT_TRACE2", "GIT_TRACE2_EVENT", "GIT_TRACE2_PERF"].map((e) => [e, "0"])), RFo = "if that setting is yours, move it to your global git config; if you don't recognize it, remove it from the repository's config, since a tool or checkout you don't trust may have written it";
function mfn(e) {
  switch (e.reason) {
    case "config_unreadable":
      return "git's configuration for the repository could not be read in full";
    case "conditional_include":
      return "the repository's own git config has a conditional include (includeIf), so what a spawn there would load cannot be determined";
    case "unsafe_key":
      return `the repository's own git config sets ${e.lfsKey === void 0 ? e.key : `${e.key}, an entry git-lfs reads as ${e.lfsKey}`}, which names a program git-lfs would run for any LFS path, on checkout and on status alike (${RFo})`;
  }
}
var Z = /^includeif\..*\.path$/s, B = /lfs.customtransfer..+?.path|^lfs\.(?:.*\.)?standalonetransferagent$|^lfs\.extension\./su, ee = { head: 60, tail: 40 };
function yBr(e) {
  return gd(udr(e), ee);
}
async function G1(e, n = {}) {
  let r = await h8n(e, n);
  if (!r.ok) return r;
  let t = TFo(r.entries.map(([o]) => o));
  if (t.some((o) => o.includes("=") || o.includes(`
`))) return { ok: false, reason: "filter_name_unrepresentable" };
  return { ok: true, args: AFo(t).flatMap(([o, i]) => ["-c", `${o}=${i}`]) };
}
function xFo(e, n) {
  return ct(It(), e, { ...n, stdin: "ignore" });
}
async function h8n(e, { repository: n = [], pin: r, envPins: t = {}, base: o, run: i = xFo } = {}) {
  let s = { args: n, envPins: t, base: o, pin: n.length > 0 ? void 0 : r ?? gU(e), run: i }, l = await M(e, "--local", s);
  if (l === null) return { ok: false, reason: "config_unreadable" };
  let a = await M(e, "--worktree", s);
  if (a === null) return { ok: false, reason: "config_unreadable" };
  let g = [...l, ...a];
  for (let c of g) {
    let [u] = c;
    if (Z.test(pfn(u))) return { ok: false, reason: "conditional_include" };
    for (let f of L([u, ...ne(c)])) if (B.test(f) || B.test(pfn(f))) return { ok: false, reason: "unsafe_key", key: yBr(u), ...f === u ? {} : { lfsKey: yBr(f) } };
  }
  return { ok: true, entries: g };
}
async function G_t(e, n, { envPins: r, base: t, repository: o, buildInvocation: i = (s, { dir: l, env: a }) => ({ file: It(), args: [...s], cwd: l, env: a }) }) {
  let s = i([..._n, "config", "--includes", "--null", "--show-scope", "--get-regexp", n], { dir: e, env: Rs(r, { base: t, repository: o }) }), l = await ct(s.file, s.args, { cwd: s.cwd, env: s.env, extendEnv: false, timeout: U, preserveOutputOnError: false, stdin: "ignore" });
  if (l.code !== 0) return (l.exitCode === 1 || l.exitCode === 129) && !l.timedOut && !l.maxBufferExceeded ? [] : null;
  let a = l.stdout.split("\0"), g = [];
  for (let c = 0; c + 1 < a.length; c += 2) {
    let u = a[c], f = a[c + 1] ?? "", m = f.indexOf(`
`);
    if ((u === "system" || u === "global" || u === "command") && m !== -1) g.push([f.slice(0, m), f.slice(m + 1)]);
  }
  return g;
}
async function M(e, n, { args: r, envPins: t, base: o, pin: i, run: s }) {
  let { code: l, stdout: a, stderr: g, maxBufferExceeded: c } = await s([...r, ..._n, "config", n, "--includes", "-z", "--list"], { cwd: e, env: Rs({ ...t, ...CFo }, { repository: i, base: o }), ...o !== void 0 && { extendEnv: false }, timeout: U, maxBuffer: K });
  if (c === true || Buffer.byteLength(a) >= K) return null;
  let u = g.replace(/\n+$/, ""), f = u.search(/^fatal: /m), m = f === -1 ? u : u.slice(f);
  if (l === 128 && /^fatal: unable to read config file '[^\n]*config(?:\.worktree)?': No such file or directory$/.test(m)) return [];
  if (n === "--worktree" && l === 128 && /^fatal: --worktree cannot be used with multiple working trees unless the config\nextension worktreeConfig is enabled\. Please read "CONFIGURATION FILE"\nsection in "git help worktree" for details$/.test(m)) return [];
  if (n === "--worktree" && l === 129 && /unknown option `worktree'/.test(g)) return [];
  if (l !== 0) return null;
  let h = a.split("\0").filter((p) => p !== "").map((p) => {
    let I = p.indexOf(`
`);
    return I === -1 ? [p, null] : [p.slice(0, I), p.slice(I + 1)];
  });
  return h.some(([p]) => p.includes("�")) ? null : h;
}
function ne([e, n]) {
  return (n === null ? e : `${e}=${n}`).split(`
`).flatMap((r) => {
    let t = r.indexOf("=");
    return t === -1 ? [] : [r.slice(0, t).trim()];
  });
}
var _Ze = ["CHERRY_PICK_HEAD", "REVERT_HEAD"], te = 2;
async function z_t(e, n, r) {
  let t = /* @__PURE__ */ new Set();
  if (n.length === 0 || !await SAt(e)) return t;
  let o = await Promise.all(n.map((s) => r(["show-ref", "--exists", s]))), i = false;
  for (let [s, l] of o.entries()) if (l === 0) t.add(n[s]);
  else if (l !== te) i = true;
  return t.size === 0 && i ? null : t;
}
export {
  AFo,
  CFo,
  D4s,
  G1,
  G_t,
  H4s,
  L4s,
  N4s,
  R8,
  RFo,
  TFo,
  _Ze,
  bye,
  cd,
  gU,
  h8n,
  mfn,
  pfn,
  xFo,
  yBr,
  z_t
};
