// darwin/context/chunk-4d91d9f0.js — Claude Code 2.1.310（darwin）模块 chunk-ajwybcv5.js
import { Kp } from "../fs/gitlab-runner-authentication-token.js";
import { $t } from "../shared/chunk-d2c47492.js";
import { yst } from "../git/utf-8.js";
import { Y4 } from "../agents/session-stable-address.js";
var $p = "MEMORY.md", YU = 200, fue = 25e3, bVr = 4 * fue, uLe = 200, mue = 4096;
function HEt(t) {
  let r = t.trim();
  return { trimmed: r, lineCount: $t(r, `
`) + 1, byteCount: r.length };
}
function uH(t) {
  return t.normalize("NFC").toLowerCase();
}
function LV(t) {
  let r = t?.lastIndexOf("/") ?? -1;
  if (r <= 0) return "";
  let n = t.slice(0, r + 1);
  return n.split("/").some((e) => e.startsWith(".")) ? "" : n;
}
var lVe = "This directory already exists — write to it directly with the Write tool (do not run mkdir or check for its existence).", wVr = "Both directories already exist — write to them directly with the Write tool (do not run mkdir or check for their existence).";
function XU(t) {
  let r = "";
  for (let n of yst(Kp(t.replace(/\r\n?|[\u2028\u2029]/g, `
`)))) {
    let e = n.codePointAt(0), o = e !== 9 && e !== 10 && (e < 32 || e >= 127 && e <= 159);
    r += o ? "�" : n;
  }
  return r;
}
function Toe(t) {
  return Y4(s(t));
}
function mtr(t) {
  return DEt(t) || /[\p{Cc}\u2028\u2029]/u.test(t);
}
function e_n(t) {
  return Toe(t.replace(/[\t\n\r\u2028\u2029]/g, ""));
}
var LKo = /* @__PURE__ */ new Set([8204, 8205, 65038, 65039]), i = /^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;
function DEt(t) {
  let r = t.codePointAt(0);
  if (LKo.has(r) || r === 9 || r === 10 || r === 13) return false;
  return i.test(t) || r < 32 || r >= 127 && r <= 159;
}
function s(t) {
  let r = "";
  for (let n of t.replace(/\r\n?|[\u2028\u2029]/g, `
`)) {
    if (DEt(n)) continue;
    r += n;
  }
  return r;
}
export {
  $p,
  DEt,
  HEt,
  LKo,
  LV,
  Toe,
  XU,
  YU,
  bVr,
  e_n,
  fue,
  lVe,
  mtr,
  mue,
  uH,
  uLe,
  wVr
};
