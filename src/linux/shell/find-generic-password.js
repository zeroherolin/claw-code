// linux/shell/find-generic-password.js — Claude Code 2.1.310（linux）模块 chunk-52ssztep.js
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { wr } from "../models/claude-3-5-sonnet.js";
import { dsr, wbe, JV, BRe, Aai, Cai } from "../auth/claude-code-user.js";
import { execFile as c } from "child_process";
var l = 1e4, u8o = 250, o = null, u;
function FPi() {
  return u === true;
}
function UPi() {
  return BRe().lastKnown;
}
function BPi(n) {
  BRe().lastKnown = n;
}
function s(n) {
  return new Promise((e) => {
    try {
      c("security", ["find-generic-password", "-a", JV(), "-w", "-s", n], { encoding: "utf-8", timeout: l, windowsHide: true }, (t, i) => {
        let a = Boolean(t && "killed" in t && t.killed);
        e(a ? null : { stdout: t ? null : i?.trim() || null });
      });
    } catch {
      e(null);
    }
  });
}
function f8o() {
  let n = wr();
  if (o || n) return;
  let e = BRe(), t = e.generation;
  return;
}
async function pwn(n) {
  if (!o) return;
  await (n === void 0 ? o : Pe(o, n));
}
function v5r() {
  BRe().legacyApiKeyPrefetch = null;
}
export {
  BPi,
  FPi,
  UPi,
  f8o,
  pwn,
  u8o,
  v5r
};
