// git/get-url.pbym.js — Claude Code 2.1.310 模块 chunk-pbym8nz9.js
import { U } from "../context/not-admin-owned.ersa.js";
import { pe } from "../shared/async-hooks.m2fg.js";
import { kW, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Ze, qg } from "../shared/chunk-j79dwkaq.js";
import { _n } from "../shared/chunk-z6efcye4.js";
import { ct } from "./utf8-keep-bom.c49x.js";
import { zf, M8r, It, qqe } from "./utf-8.vh7e.js";
import { yo } from "./chunk-q8vnfcnf.js";
import { lX } from "../fs/tempdir-owner-mismatch.5xe1.js";
import { IM, vTt } from "../shared/chunk-s06z5etx.js";
var y5 = String.raw`(?!\.{1,2}(?:/|$))[A-Za-z0-9_.][\w.-]*`, Qar = String.raw`[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*`, qQo = `(?:${y5}/)+${y5}/-/merge_requests`, YQo = String.raw`[a-z0-9-]+-review\.googlesource\.com`, Zar = new RegExp(String.raw`^https://${YQo}/c/(?:${y5}/)*${y5}/\+/\d{1,9}$`), Rui = new RegExp(`^https?://${Qar}(?::\\d{1,5})?/${qQo}/\\d+$`), jqe = 2048;
function Fpe(e) {
  return /\/-\/merge_requests\/\d/.test(e);
}
var XQo = void 0;
function Wqe({ file: e, args: n, cwd: r, env: o }, l) {
  return ct(e, n, { ...l, encoding: l.encoding ?? XQo, cwd: r, env: o, extendEnv: false });
}
var E = 21;
function E1(e) {
  return e.owner.includes("/");
}
function jvn() {
  zf().repositoryByCwd.clear(), zf().remoteHostByCwd.clear();
}
async function fst() {
  let e = await yA();
  if (!e) return null;
  if (!yo(e.host)) return null;
  return `${e.owner}/${e.name}`;
}
function PFe() {
  return M8r.of(U().host);
}
function Wvn(e) {
  PFe().setGuards(e);
}
async function C8r(e, n) {
  if (PFe().blocked()) return null;
  let r = n ?? It(), o = (...m) => {
    let f = [..._n, ...m], p = { preserveOutputOnError: false };
    return typeof r === "string" ? ct(r, f, { ...p, cwd: e }) : Wqe(r(f), p);
  }, l = await o("remote", "get-url", "origin");
  if (l.code === 0 && l.stdout.trim()) return { name: "origin", url: l.stdout.trim() };
  let i = await o("remote"), u = i.code === 0 ? Ze(i.stdout.trim(), `
`).trim() : void 0;
  if (!u) return null;
  let a = await o("remote", "get-url", u), s = a.code === 0 ? a.stdout.trim() : "";
  if (!s) return null;
  return { name: qg(u), url: s };
}
async function mst(e) {
  return (await C8r(e))?.url ?? null;
}
async function JQo(e) {
  return (await y(e)).url;
}
async function y(e) {
  if (PFe().blocked()) return { url: null, answered: false };
  let { stdout: n, code: r, exitCode: o } = await ct(It(), [..._n, "remote", "get-url", "--push", "origin"], { cwd: e, preserveOutputOnError: false }), l = r === 0 ? n.trim() || null : null;
  return { url: l, answered: l !== null || o === 2 };
}
async function yA(e, n) {
  let r = e ?? pe(), o = zf().repositoryByCwd;
  if (!n?.skipCache && o.has(r)) {
    let i = o.get(r) ?? null;
    if (!i || !E1(i)) return i;
  }
  let l = () => {
    let i = o.get(r);
    if (i && E1(i)) o.delete(r);
  };
  try {
    let i = await mst(r);
    if (t(`Git remote URL: ${qqe(i)}`), !i) return t("No git remote URL found"), zf().remoteHostByCwd.delete(r), l(), null;
    let u = null, s = ((p) => {
      let d = oP(p);
      if (d && E1(d)) return u ??= d, null;
      return d;
    })(i), m = false;
    if (!s) {
      let { stdout: p, code: d, exitCode: G } = await ct(It(), [..._n, "config", "--get", "remote.origin.url"], { cwd: r, preserveOutputOnError: false }), g = d === 0 ? p.trim() : null, x = g !== null || G === 1;
      if (g && g !== i) {
        if (s = oP(g), s && E1(s)) u ??= s, s = null;
      }
      if (!s) {
        let R = await y(r), h = R.url;
        if (h && h !== i && h !== g) {
          if (s = oP(h), s && E1(s)) u ??= s, s = null;
        }
        m = x && R.answered;
      }
    }
    s ??= u, t(`Parsed repository: ${s ? `${s.host}/${s.owner}/${s.name}` : null} from URL: ${qqe(i)}`);
    let f = s?.host ?? vTt(i);
    if (f) zf().remoteHostByCwd.set(r, f);
    else zf().remoteHostByCwd.delete(r);
    if (s) o.set(r, s);
    else if (m) o.delete(r);
    return s;
  } catch (i) {
    return t(`Error detecting repository: ${i}`), l(), null;
  }
}
function QQo() {
  let e = zf().repositoryByCwd.get(pe());
  if (!e || !yo(e.host)) return null;
  return `${e.owner}/${e.name}`;
}
function T8r() {
  return zf().repositoryByCwd.get(pe())?.host ?? null;
}
function ZQo(e) {
  if (Fpe(e) || /^!\d+$/.test(e)) return true;
  if (/^https?:\/\//i.test(e)) return false;
  let n = T8r();
  return n !== null && IM(n) === "gitlab";
}
function eZo(e) {
  let r = /\/-\/merge_requests\/(\d+)/.exec(e)?.[1] ?? e.replace(/^!(\d+)$/, "$1");
  return /^[A-Za-z0-9][A-Za-z0-9._\/-]*$/.test(r) ? r : "";
}
var C = new RegExp(`^(https?://${Qar}(?::\\d{1,5})?/(?:${y5}/)+${y5})/-/merge_requests/\\d`);
function tZo(e) {
  return C.exec(e)?.[1] ?? null;
}
function Iqt() {
  return zf().remoteHostByCwd.get(pe()) ?? null;
}
function Gvn() {
  let e = pe(), n = zf().repositoryByCwd;
  if (!n.has(e)) return;
  let r = n.get(e);
  return !!r && yo(r.host);
}
function oP(e) {
  let n = e.trim();
  if (kW(n) || lX(n)) return null;
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
  if (!w(i) || IM(i) !== "gitlab") return null;
  let u = o.split("/");
  if (u.length < 3 || u.length > E + 1 || !u.every(c)) return null;
  return { host: n === "https" || n === "http" ? r : i, owner: u.slice(0, -1).join("/"), name: u.at(-1) };
}
function Oqt(e) {
  let n = e.trim().replace(/\/+$/, "").replace(/^[a-z][a-z0-9+.-]*:\/\/[^/]*/i, "").match(/(?:[:/]|^)([^/:]+)\/([^/:]+?)(?:\.git)?$/);
  if (!n?.[1] || !n[2]) return null;
  if (!c(n[1]) || !c(n[2])) return null;
  return { owner: n[1], name: n[2] };
}
function pxe(e) {
  let n = e.trim(), r = oP(n);
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
  C8r,
  E1,
  Fpe,
  Gvn,
  Iqt,
  JQo,
  Oqt,
  PFe,
  QQo,
  Qar,
  Rui,
  T8r,
  Wqe,
  Wvn,
  XQo,
  YQo,
  ZQo,
  Zar,
  eZo,
  fst,
  jqe,
  jvn,
  mst,
  oP,
  pxe,
  qQo,
  tZo,
  y5,
  yA
};
