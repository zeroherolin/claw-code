// linux/shared/chunk-18d5ee88.js — Claude Code 2.1.310（linux）模块 chunk-62p04wse.js
import { Ad } from "./chunk-d2c47492.js";
var hfo = 255, e = 255, t = /[\x00-\x20\x7f~^:?*[\\]/, o = /[\p{Cc}\p{Cf}\uFFFD]/u, i = 250;
function e0n(n) {
  return Buffer.byteLength(n, "utf8") <= e && l(n);
}
function l(n) {
  return n.length <= hfo && n !== "@" && n !== "HEAD" && Ad(n) && s(n) && !o.test(n) && !n.startsWith("-") && n.split("/").every((r) => Buffer.byteLength(r, "utf8") <= i);
}
function s(n) {
  return !t.test(n) && !n.endsWith(".") && !n.includes("..") && !n.includes("@{") && n.split("/").every((r) => r !== "" && !r.startsWith(".") && !r.endsWith(".lock"));
}
export {
  e0n,
  hfo
};
