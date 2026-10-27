// shared/chunk-s06z5etx.js — Claude Code 2.1.310 模块 chunk-s06z5etx.js
import { kW } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { w5, Er, Lst, yo } from "../git/chunk-q8vnfcnf.js";
import { lX } from "../fs/tempdir-owner-mismatch.5xe1.js";
function IFe(r) {
  return r.replace(/:\d+$/, "");
}
var e = "gitlab.com", o = "bitbucket.org", xui = { github: Er, gitlab: e, bitbucket: o }, n = { "ssh.github.com": "github", "altssh.gitlab.com": "gitlab", "altssh.bitbucket.org": "bitbucket" };
function IM(r) {
  if (r = IFe(r), yo(r)) return "github";
  let t = Lst(r), i = n[t];
  if (i) return i;
  if (t === e) return "gitlab";
  if (t === o) return "bitbucket";
  return "other";
}
function vTt(r) {
  let t = r.trim();
  if (w5(t) || kW(t) || lX(t)) return null;
  if (t.includes("://")) try {
    return new URL(t).hostname || null;
  } catch {
    return null;
  }
  return /^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1] ?? null;
}
function zvn(r) {
  let t = /^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);
  return t && !kW(r) ? { user: t[1], host: t[2], path: t[3] } : null;
}
export {
  IFe,
  IM,
  vTt,
  xui,
  zvn
};
