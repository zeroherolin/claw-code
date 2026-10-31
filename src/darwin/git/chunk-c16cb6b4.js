// darwin/git/chunk-c16cb6b4.js — Claude Code 2.1.310（darwin）模块 chunk-q8vnfcnf.js
import { kW } from "../fs/gitlab-runner-authentication-token.js";
import { T1 } from "../shared/chunk-8bf008d9.js";
var tes = /* @__PURE__ */ new Set(["http", "https", "ws", "wss", "ftp"]);
function w5(t) {
  t = t.replace(/^[\x00-\x20]+/, "").replace(/[\t\n\r]/g, "");
  let n = t.indexOf("://");
  if (n === -1) return false;
  let r = t.slice(n + 3), s = t.slice(0, n).toLowerCase();
  if (tes.has(s)) {
    let o = r.match(/^[/\\]+/)?.[0] ?? "";
    if (o.includes("\\")) return true;
    r = r.slice(o.length);
  }
  let e = r.search(/[/?#]/);
  return (e === -1 ? r : r.slice(0, e)).includes("\\");
}
var Er = "github.com", nes = [`git@${Er}:`, `ssh://git@${Er}/`], m = [`https://${Er}`, `https://${Er}/`, Er], x = `users.noreply.${Er}`, a = "https://api.github.com", u = /[:/\\?#@\s]/, Dst = /^(?!\.{1,2}$)[a-z0-9.-]+$/, BTt = /^(?!\.{1,2}$)[a-zA-Z0-9._-]+$/;
function UH(t) {
  let n = c(t.replace(/[\t\n\r]/g, "").toLowerCase());
  if (n === "" || u.test(n)) return n;
  try {
    let r = new URL(`https://${n}`);
    if (r.username !== "" || r.password !== "" || r.port !== "" || r.pathname !== "/" || r.search !== "" || r.hash !== "") return n;
    return c(r.hostname);
  } catch {
    return n;
  }
}
var Lst = T1(function(n) {
  let r = UH(n);
  while (r.startsWith("www.")) r = r.slice(4);
  return r;
}, (t) => t, 50);
function Jqt(t, n) {
  return Lst(t) === n;
}
function yo(t) {
  return Jqt(t, Er);
}
function t3e(t, n) {
  if (!t || !n) return false;
  let r = UH(t);
  return r !== "" && r === UH(n);
}
function zse(t) {
  return yo(t) ? a : `https://${t}/api/v3`;
}
function Opi(t) {
  return yo(t) ? `${a}/graphql` : `https://${t}/api/graphql`;
}
function i(t) {
  return /[%\x00-\x1f\x7f-\u{10FFFF}]/u.test(t);
}
function E5(t) {
  if (kW(t)) return true;
  if (t.includes("://")) {
    if (w5(t)) return true;
    try {
      let e = new URL(t);
      if (e.protocol === "http:" || e.protocol === "https:") return false;
      return i(e.hostname);
    } catch {
      return true;
    }
  }
  let n = t.indexOf(":"), r = t.indexOf("@");
  if (n >= 0 && r > n) return true;
  let s = t.match(/^(?:[^@]+@)?([^:]+):/)?.[1];
  return s ? i(s) : false;
}
function c(t) {
  let n = t.length;
  while (n > 0 && t[n - 1] === ".") n--;
  return t.slice(0, n);
}
export {
  BTt,
  Dst,
  E5,
  Er,
  Jqt,
  Lst,
  Opi,
  UH,
  nes,
  t3e,
  tes,
  w5,
  yo,
  zse
};
