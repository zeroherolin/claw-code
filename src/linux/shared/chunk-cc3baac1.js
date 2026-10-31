// linux/shared/chunk-cc3baac1.js — Claude Code 2.1.310（linux）模块 chunk-527647eb.js
import { hW } from "../fs/gitlab-runner-authentication-token.js";
import { u6, vr, Pst, yo } from "../git/chunk-c16cb6b4.js";
import { eX } from "../fs/tempdir-owner-mismatch.js";
function T$e(r) {
  return r.replace(/:\d+$/, "");
}
var e = "gitlab.com", o = "bitbucket.org", Kci = { github: vr, gitlab: e, bitbucket: o }, n = { "ssh.github.com": "github", "altssh.gitlab.com": "gitlab", "altssh.bitbucket.org": "bitbucket" };
function TM(r) {
  if (r = T$e(r), yo(r)) return "github";
  let t = Pst(r), i = n[t];
  if (i) return i;
  if (t === e) return "gitlab";
  if (t === o) return "bitbucket";
  return "other";
}
function gAt(r) {
  let t = r.trim();
  if (u6(t) || hW(t) || eX(t)) return null;
  if (t.includes("://")) try {
    return new URL(t).hostname || null;
  } catch {
    return null;
  }
  return /^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1] ?? null;
}
function xEn(r) {
  let t = /^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);
  return t && !hW(r) ? { user: t[1], host: t[2], path: t[3] } : null;
}
export {
  Kci,
  T$e,
  TM,
  gAt,
  xEn
};
