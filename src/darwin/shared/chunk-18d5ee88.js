// darwin/shared/chunk-18d5ee88.js — Claude Code 2.1.310（darwin）模块 chunk-3t4qtm0n.js
import { Td } from "./chunk-d2c47492.js";
var ifo = 255, e = 255, t = /[\x00-\x20\x7f~^:?*[\\]/, o = /[\p{Cc}\p{Cf}\uFFFD]/u, i = 250;
function gLn(n) {
  return Buffer.byteLength(n, "utf8") <= e && l(n);
}
function l(n) {
  return n.length <= ifo && n !== "@" && n !== "HEAD" && Td(n) && s(n) && !o.test(n) && !n.startsWith("-") && n.split("/").every((r) => Buffer.byteLength(r, "utf8") <= i);
}
function s(n) {
  return !t.test(n) && !n.endsWith(".") && !n.includes("..") && !n.includes("@{") && n.split("/").every((r) => r !== "" && !r.startsWith(".") && !r.endsWith(".lock"));
}
export {
  gLn,
  ifo
};
