// linux/git/get-url.js — Claude Code 2.1.310（linux）模块 chunk-5y69fhjv.js
import { U } from "../context/not-admin-owned.js";
import { fe } from "../shared/async-hooks.5238.js";
import { hW, t } from "../fs/gitlab-runner-authentication-token.js";
import { Ze, qg } from "../shared/chunk-d2c47492.js";
import { _n } from "../shared/chunk-8eee6836.js";
import { ct } from "./utf8-keep-bom.js";
import { zp, d8r, It, U4e } from "./utf-8.js";
import { yo } from "./chunk-c16cb6b4.js";
import { eX } from "../fs/tempdir-owner-mismatch.js";
import { TM, gAt } from "../shared/chunk-cc3baac1.js";
var a6 = String.raw`(?!\.{1,2}(?:/|$))[A-Za-z0-9_.][\w.-]*`, Dar = String.raw`[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*`, _7o = `(?:${a6}/)+${a6}/-/merge_requests`, b7o = String.raw`[a-z0-9-]+-review\.googlesource\.com`, Har = new RegExp(String.raw`^https://${b7o}/c/(?:${a6}/)*${a6}/\+/\d{1,9}$`), zci = new RegExp(`^https?://${Dar}(?::\\d{1,5})?/${_7o}/\\d+$`), D4e = 2048;
function Ife(e) {
  return /\/-\/merge_requests\/\d/.test(e);
}
var S7o = void 0;
function H4e({ file: e, args: n, cwd: r, env: o }, l) {
  return ct(e, n, { ...l, encoding: l.encoding ?? S7o, cwd: r, env: o, extendEnv: false });
}
var E = 21;
function yB(e) {
  return e.owner.includes("/");
}
function AEn() {
  zp().repositoryByCwd.clear(), zp().remoteHostByCwd.clear();
}
async function ist() {
  let e = await gC();
  if (!e) return null;
  if (!yo(e.host)) return null;
  return `${e.owner}/${e.name}`;
}
function k$e() {
  return d8r.of(U().host);
}
function CEn(e) {
  k$e().setGuards(e);
}
async function t8r(e, n) {
  if (k$e().blocked()) return null;
  let r = n ?? It(), o = (...m) => {
    let f = [..._n, ...m], p = { preserveOutputOnError: false };
    return typeof r === "string" ? ct(r, f, { ...p, cwd: e }) : H4e(r(f), p);
  }, l = await o("remote", "get-url", "origin");
  if (l.code === 0 && l.stdout.trim()) return { name: "origin", url: l.stdout.trim() };
  let i = await o("remote"), u = i.code === 0 ? Ze(i.stdout.trim(), `
`).trim() : void 0;
  if (!u) return null;
  let a = await o("remote", "get-url", u), s = a.code === 0 ? a.stdout.trim() : "";
  if (!s) return null;
  return { name: qg(u), url: s };
}
async function ast(e) {
  return (await t8r(e))?.url ?? null;
}
async function w7o(e) {
  return (await y(e)).url;
}
async function y(e) {
  if (k$e().blocked()) return { url: null, answered: false };
  let { stdout: n, code: r, exitCode: o } = await ct(It(), [..._n, "remote", "get-url", "--push", "origin"], { cwd: e, preserveOutputOnError: false }), l = r === 0 ? n.trim() || null : null;
  return { url: l, answered: l !== null || o === 2 };
}
async function gC(e, n) {
  let r = e ?? fe(), o = zp().repositoryByCwd;
  if (!n?.skipCache && o.has(r)) {
    let i = o.get(r) ?? null;
    if (!i || !yB(i)) return i;
  }
  let l = () => {
    let i = o.get(r);
    if (i && yB(i)) o.delete(r);
  };
  try {
    let i = await ast(r);
    if (t(`Git remote URL: ${U4e(i)}`), !i) return t("No git remote URL found"), zp().remoteHostByCwd.delete(r), l(), null;
    let u = null, s = ((p) => {
      let d = nP(p);
      if (d && yB(d)) return u ??= d, null;
      return d;
    })(i), m = false;
    if (!s) {
      let { stdout: p, code: d, exitCode: G } = await ct(It(), [..._n, "config", "--get", "remote.origin.url"], { cwd: r, preserveOutputOnError: false }), g = d === 0 ? p.trim() : null, x = g !== null || G === 1;
      if (g && g !== i) {
        if (s = nP(g), s && yB(s)) u ??= s, s = null;
      }
      if (!s) {
        let R = await y(r), h = R.url;
        if (h && h !== i && h !== g) {
          if (s = nP(h), s && yB(s)) u ??= s, s = null;
        }
        m = x && R.answered;
      }
    }
    s ??= u, t(`Parsed repository: ${s ? `${s.host}/${s.owner}/${s.name}` : null} from URL: ${U4e(i)}`);
    let f = s?.host ?? gAt(i);
    if (f) zp().remoteHostByCwd.set(r, f);
    else zp().remoteHostByCwd.delete(r);
    if (s) o.set(r, s);
    else if (m) o.delete(r);
    return s;
  } catch (i) {
    return t(`Error detecting repository: ${i}`), l(), null;
  }
}
function v7o() {
  let e = zp().repositoryByCwd.get(fe());
  if (!e || !yo(e.host)) return null;
  return `${e.owner}/${e.name}`;
}
function n8r() {
  return zp().repositoryByCwd.get(fe())?.host ?? null;
}
function E7o(e) {
  if (Ife(e) || /^!\d+$/.test(e)) return true;
  if (/^https?:\/\//i.test(e)) return false;
  let n = n8r();
  return n !== null && TM(n) === "gitlab";
}
function k7o(e) {
  let r = /\/-\/merge_requests\/(\d+)/.exec(e)?.[1] ?? e.replace(/^!(\d+)$/, "$1");
  return /^[A-Za-z0-9][A-Za-z0-9._\/-]*$/.test(r) ? r : "";
}
var C = new RegExp(`^(https?://${Dar}(?::\\d{1,5})?/(?:${a6}/)+${a6})/-/merge_requests/\\d`);
function T7o(e) {
  return C.exec(e)?.[1] ?? null;
}
function b4t() {
  return zp().remoteHostByCwd.get(fe()) ?? null;
}
function REn() {
  let e = fe(), n = zp().repositoryByCwd;
  if (!n.has(e)) return;
  let r = n.get(e);
  return !!r && yo(r.host);
}
function nP(e) {
  let n = e.trim();
  if (hW(n) || eX(n)) return null;
  let r = n.match(/^git@([^:/@]+):([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (r?.[1] && r[2] && r[3]) {
    if (!w(r[1])) return null;
    if (!c(r[2]) || !c(r[3])) return null;
    return { host: r[1], owner: r[2], name: r[3] };
  }
  let o = n.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (o?.[1] && o[2] && o[3] && o[4]) {
    let l = o[1], i = o[2], u = Ze(i, ":");
    if (!w(u)) return null;
    let a = l === "https" || l === "http" ? i : u;
    if (!c(o[3]) || !c(o[4])) return null;
    return { host: a, owner: o[3], name: o[4] };
  }
  return _(n);
}
function _(e) {
  let n, r, o, l = e.match(/^git@([^:/@]+):(.+?)(?:\.git)?\/?$/);
  if (l?.[1] && l[2]) r = l[1], o = l[2];
  else {
    let a = e.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/(.+?)(?:\.git)?\/?$/);
    if (!a?.[1] || !a[2] || !a[3]) return null;
    n = a[1], r = a[2], o = a[3];
  }
  let i = Ze(r, ":");
  if (!w(i) || TM(i) !== "gitlab") return null;
  let u = o.split("/");
  if (u.length < 3 || u.length > E + 1 || !u.every(c)) return null;
  return { host: n === "https" || n === "http" ? r : i, owner: u.slice(0, -1).join("/"), name: u.at(-1) };
}
function S4t(e) {
  let n = e.trim().replace(/\/+$/, "").replace(/^[a-z][a-z0-9+.-]*:\/\/[^/]*/i, "").match(/(?:[:/]|^)([^/:]+)\/([^/:]+?)(?:\.git)?$/);
  if (!n?.[1] || !n[2]) return null;
  if (!c(n[1]) || !c(n[2])) return null;
  return { owner: n[1], name: n[2] };
}
function lxe(e) {
  let n = e.trim(), r = nP(n);
  if (r) {
    if (!yo(r.host)) return null;
    return `${r.owner}/${r.name}`;
  }
  if (!n.includes("://") && !n.includes("@") && n.includes("/")) {
    let o = n.split("/");
    if (o.length === 2 && o[0] && o[1]) {
      let l = o[1].replace(/\.git$/, "");
      if (!c(o[0]) || !c(l)) return null;
      return `${o[0]}/${l}`;
    }
  }
  return t(`Could not parse repository from: ${n}`), null;
}
var b = /^[A-Za-z0-9._-]+$/;
function c(e) {
  return b.test(e) && !e.startsWith("-") && e !== "." && e !== "..";
}
function w(e) {
  if (!/^[A-Za-z0-9.-]+$/.test(e) || e.startsWith("-") || !e.includes(".")) return false;
  let n = e.split(".").pop();
  if (!n) return false;
  return /^[a-zA-Z]+$/.test(n);
}
export {
  AEn,
  CEn,
  D4e,
  Dar,
  E7o,
  H4e,
  Har,
  Ife,
  REn,
  S4t,
  S7o,
  T7o,
  _7o,
  a6,
  ast,
  b4t,
  b7o,
  gC,
  ist,
  k$e,
  k7o,
  lxe,
  n8r,
  nP,
  t8r,
  v7o,
  w7o,
  yB,
  zci
};
