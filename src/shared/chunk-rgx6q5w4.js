// shared/chunk-rgx6q5w4.js — Claude Code 2.1.310 模块 chunk-rgx6q5w4.js
import { Au } from "../models/claude-3-5-sonnet.21mz.js";
var a = 12e4, i = 6e5;
function Nde(n = process.env) {
  let e = n.BASH_DEFAULT_TIMEOUT_MS;
  if (e) {
    let t = Au(e);
    if (!isNaN(t) && t > 0) return t;
  }
  return a;
}
function rHe(n = process.env) {
  let e = n.BASH_MAX_TIMEOUT_MS;
  if (e) {
    let t = Au(e);
    if (!isNaN(t) && t > 0) return Math.max(t, Nde(n));
  }
  return Math.max(i, Nde(n));
}
var s = 18e5;
function nye() {
  return Math.min(Math.max(72e5, rHe()), 2147483647);
}
function vVs(n) {
  return Math.max(s, Nde(n));
}
function k5n(n, e) {
  return n !== void 0 && n > 0 ? e : void 0;
}
var _ = 2e3;
function C5n({ requestedTimeoutMs: n, isMainAgent: e, canAutoBackground: t, env: u = process.env }) {
  if (!e || !t) return n;
  let o = u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS;
  if (!o) return n;
  let r = Au(o);
  if (isNaN(r) || r <= 0) return n;
  return Math.min(n, Math.max(r, _));
}
export {
  C5n,
  Nde,
  k5n,
  nye,
  rHe,
  vVs
};
