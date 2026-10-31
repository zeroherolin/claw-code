// linux/shared/chunk-767f1b52.js — Claude Code 2.1.310（linux）模块 chunk-dbyrbarz.js
import { Tu } from "../models/claude-3-5-sonnet.js";
var a = 12e4, i = 6e5;
function Rde(n = process.env) {
  let e = n.BASH_DEFAULT_TIMEOUT_MS;
  if (e) {
    let t = Tu(e);
    if (!isNaN(t) && t > 0) return t;
  }
  return a;
}
function JDe(n = process.env) {
  let e = n.BASH_MAX_TIMEOUT_MS;
  if (e) {
    let t = Tu(e);
    if (!isNaN(t) && t > 0) return Math.max(t, Rde(n));
  }
  return Math.max(i, Rde(n));
}
var s = 18e5;
function Jhe() {
  return Math.min(Math.max(72e5, JDe()), 2147483647);
}
function $Ks(n) {
  return Math.max(s, Rde(n));
}
function o6n(n, e) {
  return n !== void 0 && n > 0 ? e : void 0;
}
var _ = 2e3;
function s6n({ requestedTimeoutMs: n, isMainAgent: e, canAutoBackground: t, env: u = process.env }) {
  if (!e || !t) return n;
  let o = u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS;
  if (!o) return n;
  let r = Tu(o);
  if (isNaN(r) || r <= 0) return n;
  return Math.min(n, Math.max(r, _));
}
export {
  $Ks,
  JDe,
  Jhe,
  Rde,
  o6n,
  s6n
};
