// darwin/fs/tempdir-owner-mismatch.js — Claude Code 2.1.310（darwin）模块 chunk-5xe1amq0.js
import { U, J } from "../context/not-admin-owned.js";
import { R, v, Vit } from "../telemetry/anthropic-workspace-id.js";
import { Yn, Ua, $l, Vs, tD } from "./node-modules.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { Im, Po, Dxe, ie, l$e, lfe, T3t, t } from "./gitlab-runner-authentication-token.js";
import { w5, Er, UH, yo } from "../git/chunk-c16cb6b4.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { i } from "../shared/environment.js";
import { XFe, _Yr, Xse } from "./not-utf8.js";
import { Ee } from "../shared/chunk-fee3c428.js";
function pbe(e) {
  let n = UH(e);
  return yo(n) ? Er : n;
}
function ykn(e) {
  let n = T3t(e);
  return n.includes("\\") || /%[0-9A-Fa-f]{2}/.test(n) || n.split(/[/?#]/).some((r) => r === "." || r === "..");
}
function LZo(e) {
  let n = e.trimStart(), r = /^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(n);
  if (r === null || /^https?$/i.test(r[1] ?? "")) return l$e(n);
  return l$e(r[0] + T3t(n.slice(r[0].length)));
}
function lX(e) {
  if (e.includes("%00") || e.includes("\0")) return true;
  if (w5(e)) return true;
  let n = [lfe(e)?.host, lfe(e, { asRewritten: true })?.host];
  if (e.includes("://")) n.push(l$e(e.trimStart())?.hostname || void 0, LZo(e)?.hostname || void 0);
  let r = n.map((o) => o === void 0 ? null : pbe(o));
  return r.some((o) => o !== r[0]);
}
var hs = 16777216, NFe = 536870912, dX = 0;
import { closeSync as y, constants as m, fstatSync as O, lstatSync as h, openSync as A, readlinkSync as k, readSync as X, statSync as z } from "fs";
import { open as Q } from "fs/promises";
import { dirname as E, resolve as Z } from "path";
var ITt = 536870912, f = Ee({ noFollowAny: "untried", localVolumes: void 0 }, (e) => {
  e.noFollowAny = "untried", e.localVolumes = void 0;
}), q = ["/", "/System/Volumes/Data"];
function F() {
  if (f.localVolumes !== void 0) return f.localVolumes;
  let e = true, n = q.flatMap((o) => {
    try {
      return [z(o).dev];
    } catch (s) {
      if (v(s) !== "ENOENT") e = false;
      return [];
    }
  }), r = new Set(n);
  if (e) f.localVolumes = r;
  return r;
}
function I(e) {
  if (ee() === "rejected") return "unsupported";
  let n;
  try {
    n = L(E(e));
  } catch (r) {
    let o = v(r);
    if (o === "ELOOP") return "link";
    if (o === "EINVAL") return "elsewhere";
    if (o === "EACCES" || o === "EPERM") return P(E(e));
    throw r;
  }
  try {
    return F().has(O(n).dev) ? "local" : "elsewhere";
  } finally {
    y(n);
  }
}
function P(e) {
  let n = F(), r = E(e);
  if (r === e) return "elsewhere";
  let o;
  try {
    o = L(r);
  } catch (s) {
    let c = v(s);
    if (c === "ELOOP") return "link";
    if (c === "EACCES" || c === "EPERM") {
      let u = P(r);
      return u === "local" && !n.has(C(e)) ? "elsewhere" : u;
    }
    if (c === "EINVAL") return "elsewhere";
    throw s;
  }
  try {
    let s = O(o).dev;
    return n.has(s) && n.has(C(e)) ? "local" : "elsewhere";
  } finally {
    y(o);
  }
}
function C(e) {
  try {
    return h(e).dev;
  } catch {
    return Number.NaN;
  }
}
function L(e) {
  return A(e, m.O_RDONLY | m.O_DIRECTORY | m.O_NONBLOCK | ITt | hs);
}
async function OTt() {
  if (f.noFollowAny === "untried") try {
    await (await Q("/", m.O_RDONLY | m.O_DIRECTORY | m.O_NONBLOCK | ITt | hs)).close(), f.noFollowAny = "works";
  } catch (e) {
    f.noFollowAny = v(e) === "EINVAL" ? "rejected" : "works";
  }
  return f.noFollowAny === "rejected";
}
function ee() {
  if (f.noFollowAny === "untried") try {
    y(L("/")), f.noFollowAny = "works";
  } catch (e) {
    f.noFollowAny = v(e) === "EINVAL" ? "rejected" : "works";
  }
  return f.noFollowAny === "rejected" ? "rejected" : "works";
}
function MTt(e, n) {
  return n === "windows" && Yn(e) && !$l(e) || Ua(e);
}
function Est(e) {
  return tD(e) || Ua(e);
}
function b(e) {
  let n = ie();
  return !Vs(e) && !Ua(e) && Im(n, e, { unreadableAncestry: "unverified", surfaceNetworkRaw: true, launchAncestry: Dxe(n) }) === void 0;
}
function ne() {
  return "macos";
}
var re = 65536;
function _kn(e, n, r, o, s) {
  let c = ne(), u = hs | (c === "windows" ? m.O_RDONLY : m.O_RDONLY | m.O_NONBLOCK | m.O_NOCTTY), a = !n && MTt(e, c) ? se(e, u, c, r) : ce(e, n, o, u, c, r);
  if (a === null) return null;
  try {
    if (s === void 0) XFe(O(a), e, r);
    else {
      let d = O(a, { bigint: true });
      if (d.ino !== s.ino || d.ctimeNs !== s.ctimeNs || c !== "windows" && d.dev !== s.dev) return p(e, "the file was replaced or changed after its path was checked");
      XFe({ isDirectory: () => d.isDirectory(), isFile: () => d.isFile(), size: Number(d.size) }, e, r);
    }
    return Xse(te(a, e, r));
  } finally {
    y(a);
  }
}
function te(e, n, r) {
  let o = [], s = 0;
  while (s <= r) {
    let c = Buffer.allocUnsafe(Math.min(re, r + 1 - s)), u = X(e, c, 0, c.length, s);
    if (u === 0) break;
    o.push(c.subarray(0, u)), s += u;
  }
  return _Yr(s, n, r), Buffer.concat(o, s);
}
function x(e, n, r) {
  if (r === "macos" && f.noFollowAny !== "rejected") return { fd: A(e, n | ITt), everyComponent: true };
  return { fd: A(e, r === "windows" ? n : n | m.O_NOFOLLOW), everyComponent: false };
}
var D = Symbol("no procfs"), oe = Symbol("descriptor path unreadable");
function H(e, n) {
  if (n !== "linux") return D;
  try {
    return k(`/proc/self/fd/${e}`);
  } catch {
    try {
      h("/proc/self/fd");
    } catch {
      return D;
    }
    return oe;
  }
}
function se(e, n, r, o) {
  if (r === "macos" && I(e) === "link") return p(e, "a link stands above the spelled name");
  let s = h(e);
  if (s.isSymbolicLink()) return B(e), p(e, "a link stands at the spelled name");
  XFe(s, e, o);
  let c;
  try {
    c = x(e, n, r).fd;
  } catch (a) {
    if (v(a) !== "ELOOP") throw a;
    return p(e, "a link stands on the spelled route");
  }
  let u = H(c, r);
  return u === D || u === e ? c : w(c, e, `the descriptor is on ${String(u)}`);
}
function ce(e, n, r, o, s, c) {
  if (!n && !b(e)) return p(e, "its route could not be examined");
  let u = false;
  if (s === "macos") {
    let l = I(e);
    if (l === "link") return T(e, n);
    u = l === "local" && !r;
  }
  if (!u) {
    let l = h(e);
    if (!l.isSymbolicLink()) XFe(l, e, c);
    else if (s === "windows") return T(e, n);
  }
  let a;
  try {
    a = x(e, o, s);
  } catch (l) {
    if (v(l) !== "ELOOP") throw l;
    return T(e, n);
  }
  let { fd: d, everyComponent: K } = a;
  try {
    if (K) return d;
    let l = H(d, s);
    if (l !== D) return l === e ? d : w(d, e, `the descriptor is on ${String(l)}`);
    let N = Po(ie(), e);
    return !N.isSymlink && N.resolvedPath === e && (N.isCanonical || !n && b(e)) ? d : w(d, e, "the route no longer resolves to it");
  } catch (l) {
    throw w(d, e, "the binding check threw"), l;
  }
}
function T(e, n) {
  if (!n && b(e)) B(e);
  return p(e, "a link appeared on the route");
}
function B(e) {
  if (!h(e).isSymbolicLink()) return;
  let n = Z(E(e), k(e));
  if (!b(n)) return;
  try {
    h(n);
  } catch (r) {
    let o = v(r);
    if ((o === "ENOENT" || o === "ENOTDIR") && typeof r === "object" && r !== null) Object.defineProperty(r, M, { value: true });
    throw r;
  }
}
var M = Symbol("boundRead.linkToNothing");
function epi(e) {
  return typeof e === "object" && e !== null && M in e;
}
function w(e, n, r) {
  return y(e), p(n, r);
}
function p(e, n) {
  return t(`boundRead: not reading ${e}: ${n}`, { level: "warn" }), null;
}
import { createHash as ue, randomUUID as de } from "crypto";
import { closeSync as ae, constants as S, fchmodSync as le, fstatSync as fe, lstatSync as me, mkdirSync as g, openSync as pe } from "fs";
import { tmpdir as he } from "os";
import { join as _ } from "path";
function Cf() {
  let e = i.CLAUDE_CODE_TMPDIR;
  if (e) return e;
  return "/tmp";
}
var llr = 44, Skn = "claude-pdf-", bkn = "claude-preview-";
function hxe(e) {
  let n = process.getuid?.();
  if (n === void 0) return;
  let r = e.replace(/[\/]+$/, "") || e, o = "Set CLAUDE_CODE_TMPDIR to a directory you control, or ask an administrator to remove it.", s;
  try {
    s = pe(r, S.O_RDONLY | S.O_DIRECTORY | S.O_NOFOLLOW);
  } catch (c) {
    let u = v(c);
    if (u === "ELOOP" || u === "ENOTDIR") throw Error(`Temp directory ${e} is not a directory (may be an attacker-planted symlink). Refusing to use it. ${o}`);
    if (u === "EACCES") {
      let a;
      try {
        let d = me(r);
        if (d.uid !== n) a = d.uid;
      } catch {
      }
      if (a !== void 0) throw new R(`Temp directory ${e} is owned by uid ${a}, expected ${n}. Refusing to use it — another user may have pre-created it. ${o}`, "temp dir owned by another uid (EACCES at open); refusing to use it");
      throw new R(`Temp directory ${e} is not readable (its mode may have been altered, or a path component denies search). Refusing to use it — restore its permissions (chmod 0700) or remove it. ${o}`, "temp dir unreadable (owner-read or path search bit missing); refusing to use it");
    }
    throw c;
  }
  try {
    let c = fe(s);
    if (c.uid !== n) {
      if (n === 0 && i.CLAUDE_CODE_CONTAINER_ID) {
        Y("warn", "tempdir_owner_mismatch", { observed_uid: c.uid });
        return;
      }
      throw Error(`Temp directory ${e} is owned by uid ${c.uid}, expected ${n}. Refusing to use it — another user may have pre-created it. ${o}`);
    }
    if ((c.mode & 511) !== 448) le(s, 448);
  } finally {
    ae(s);
  }
}
class V {
  ensured = void 0;
  childProcessTmpDirMemo = void 0;
  markEnsured(e) {
    this.ensured = e;
  }
  setChildProcessTmpDirMemo(e) {
    this.childProcessTmpDirMemo = e;
  }
}
var j = new W(() => new V());
function FFe() {
  return `claude-${process.getuid?.() ?? 0}`;
}
function jd() {
  return G(j.of(U().host));
}
function G(e) {
  if (J()) throw Error("The temp directory is unavailable in a diskless session: nothing is created, verified or written under the shared per-uid temp root");
  let n = Cf(), r = _(n, FFe());
  if (r !== e.ensured) {
    if (typeof process.getuid === "function") {
      try {
        g(r, { recursive: true, mode: 448 });
      } catch (o) {
        if (Vit(o)) {
          let s = v(o), c = s === "EDQUOT" ? `your disk quota on the volume holding ${n} is used up (${s})` : `the volume holding ${n} is full (${s})`;
          throw new R(`Claude Code's temporary directory ${r} could not be created: ${c}. Free space on that volume, or set CLAUDE_CODE_TMPDIR to a directory on another one, then try again.`, "claude temp dir not created: volume full (ENOSPC/EDQUOT)");
        }
        throw o;
      }
      hxe(r);
    } else try {
      g(r, { recursive: true, mode: 448 });
    } catch {
    }
    e.markEnsured(r);
  }
  return r;
}
function yxe() {
  let e = jd();
  g(e, { recursive: true, mode: 448 }), hxe(e);
  let n = _(e, "plugin-tool-staging");
  return g(n, { recursive: true, mode: 448 }), hxe(n), n;
}
function _xe() {
  let e = j.of(U().host), n = G(e);
  if (Buffer.byteLength(n) <= llr) return n;
  let r = "/tmp", o = e.childProcessTmpDirMemo;
  if (o?.forDir === n) return o.result;
  let s = _(r, FFe()), c = s;
  try {
    g(s, { recursive: true, mode: 448 }), hxe(s);
  } catch {
    c = n;
  }
  return e.setChildProcessTmpDirMemo({ forDir: n, result: c }), c;
}
function NZo() {
  let e = Cf();
  if (Buffer.byteLength(e) <= llr) return e;
  return "/tmp";
}
function Sxe(e = "claude-prompt", n = ".md", r) {
  let o = r?.contentHash ? ue("sha256").update(r.contentHash).digest("hex").slice(0, 16) : de();
  return _(jd(), `${e}-${o}${n}`);
}
export {
  Cf,
  Est,
  FFe,
  ITt,
  LZo,
  MTt,
  NFe,
  NZo,
  OTt,
  Skn,
  Sxe,
  _kn,
  _xe,
  bkn,
  dX,
  epi,
  hs,
  hxe,
  jd,
  lX,
  llr,
  pbe,
  ykn,
  yxe
};
