// linux/git/chunk-c16cb6b4.js — Claude Code 2.1.310（linux）模块 chunk-azq9hjy0.js
import { hW } from "../fs/gitlab-runner-authentication-token.js";
import { wB } from "../shared/chunk-8bf008d9.js";
var TZo = /* @__PURE__ */ new Set(["http", "https", "ws", "wss", "ftp"]);
function u6(t) {
  t = t.replace(/^[\x00-\x20]+/, "").replace(/[\t\n\r]/g, "");
  let n = t.indexOf("://");
  if (n === -1) return false;
  let r = t.slice(n + 3), s = t.slice(0, n).toLowerCase();
  if (TZo.has(s)) {
    let o = r.match(/^[/\\]+/)?.[0] ?? "";
    if (o.includes("\\")) return true;
    r = r.slice(o.length);
  }
  let e = r.search(/[/?#]/);
  return (e === -1 ? r : r.slice(0, e)).includes("\\");
}
var vr = "github.com", AZo = [`git@${vr}:`, `ssh://git@${vr}/`], m = [`https://${vr}`, `https://${vr}/`, vr], x = `users.noreply.${vr}`, a = "https://api.github.com", u = /[:/\\?#@\s]/, xst = /^(?!\.{1,2}$)[a-z0-9.-]+$/, OAt = /^(?!\.{1,2}$)[a-zA-Z0-9._-]+$/;
function NH(t) {
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
var Pst = wB(function(n) {
  let r = NH(n);
  while (r.startsWith("www.")) r = r.slice(4);
  return r;
}, (t) => t, 50);
function F4t(t, n) {
  return Pst(t) === n;
}
function yo(t) {
  return F4t(t, vr);
}
function V4e(t, n) {
  if (!t || !n) return false;
  let r = NH(t);
  return r !== "" && r === NH(n);
}
function Nse(t) {
  return yo(t) ? a : `https://${t}/api/v3`;
}
function Yui(t) {
  return yo(t) ? `${a}/graphql` : `https://${t}/api/graphql`;
}
function i(t) {
  return /[%\x00-\x1f\x7f-\u{10FFFF}]/u.test(t);
}
function f6(t) {
  if (hW(t)) return true;
  if (t.includes("://")) {
    if (u6(t)) return true;
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
  AZo,
  F4t,
  NH,
  Nse,
  OAt,
  Pst,
  TZo,
  V4e,
  Yui,
  f6,
  u6,
  vr,
  xst,
  yo
};
