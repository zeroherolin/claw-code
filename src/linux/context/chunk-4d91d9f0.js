// linux/context/chunk-4d91d9f0.js — Claude Code 2.1.310（linux）模块 chunk-zqbn04bq.js
import { Yf } from "../fs/gitlab-runner-authentication-token.js";
import { Ft } from "../shared/chunk-d2c47492.js";
import { cst } from "../git/utf-8.js";
import { $5 } from "../agents/session-stable-address.js";
var Uf = "MEMORY.md", GU = 200, iue = 25e3, ZKr = 4 * iue, s0e = 200, aue = 4096;
function Cvt(t) {
  let r = t.trim();
  return { trimmed: r, lineCount: Ft(r, `
`) + 1, byteCount: r.length };
}
function aH(t) {
  return t.normalize("NFC").toLowerCase();
}
function TV(t) {
  let r = t?.lastIndexOf("/") ?? -1;
  if (r <= 0) return "";
  let n = t.slice(0, r + 1);
  return n.split("/").some((e) => e.startsWith(".")) ? "" : n;
}
var ZKe = "This directory already exists — write to it directly with the Write tool (do not run mkdir or check for its existence).", eVr = "Both directories already exist — write to them directly with the Write tool (do not run mkdir or check for their existence).";
function zU(t) {
  let r = "";
  for (let n of cst(Yf(t.replace(/\r\n?|[\u2028\u2029]/g, `
`)))) {
    let e = n.codePointAt(0), o = e !== 9 && e !== 10 && (e < 32 || e >= 127 && e <= 159);
    r += o ? "�" : n;
  }
  return r;
}
function boe(t) {
  return $5(s(t));
}
function Xer(t) {
  return Rvt(t) || /[\p{Cc}\u2028\u2029]/u.test(t);
}
function Nyn(t) {
  return boe(t.replace(/[\t\n\r\u2028\u2029]/g, ""));
}
var aqo = /* @__PURE__ */ new Set([8204, 8205, 65038, 65039]), i = /^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;
function Rvt(t) {
  let r = t.codePointAt(0);
  if (aqo.has(r) || r === 9 || r === 10 || r === 13) return false;
  return i.test(t) || r < 32 || r >= 127 && r <= 159;
}
function s(t) {
  let r = "";
  for (let n of t.replace(/\r\n?|[\u2028\u2029]/g, `
`)) {
    if (Rvt(n)) continue;
    r += n;
  }
  return r;
}
export {
  Cvt,
  GU,
  Nyn,
  Rvt,
  TV,
  Uf,
  Xer,
  ZKe,
  ZKr,
  aH,
  aqo,
  aue,
  boe,
  eVr,
  iue,
  s0e,
  zU
};
