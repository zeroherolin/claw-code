// darwin/shell/find-generic-password.js — Claude Code 2.1.310（darwin）模块 chunk-dx7zad4g.js
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { Sr } from "../models/claude-3-5-sonnet.js";
import { zRe, Jj, bI, Qj, lli, Pwn } from "../auth/claude-code-user.js";
import { execFile as c } from "child_process";
var l = 1e4, B8o = 250, o = null, u;
function vIi() {
  return u === true;
}
function kIi() {
  return Qj().lastKnown;
}
function CIi(e) {
  Qj().lastKnown = e;
}
function s(e) {
  return new Promise((n) => {
    try {
      c("security", ["find-generic-password", "-a", bI(), "-w", "-s", e], { encoding: "utf-8", timeout: l, windowsHide: true }, (t, i) => {
        let a = Boolean(t && "killed" in t && t.killed);
        n(a ? null : { stdout: t ? null : i?.trim() || null });
      });
    } catch {
      n(null);
    }
  });
}
function j8o() {
  let e = Sr();
  if (o || e) return;
  let n = Qj(), t = n.generation;
  n.legacyApiKeyPrefetch = "pending";
  let i = s(Jj(zRe)).then((r) => {
    if (r?.stdout) Pwn(n, true, t);
    if (r) lli(r.stdout, t, n);
  }), a = s(Jj()).then((r) => {
    if (r && n.legacyApiKeyPrefetch === "pending") n.legacyApiKeyPrefetch = r;
  });
  o = Promise.all([i, a]).then(() => {
  });
}
async function xwn(e) {
  if (!o) return;
  await (e === void 0 ? o : Pe(o, e));
}
function G4r() {
  let e = Qj().legacyApiKeyPrefetch;
  return e === "pending" ? null : e;
}
function z4r() {
  Qj().legacyApiKeyPrefetch = null;
}
export {
  B8o,
  CIi,
  G4r,
  j8o,
  kIi,
  vIi,
  xwn,
  z4r
};
