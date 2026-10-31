// linux/fs/empty-id.js — Claude Code 2.1.310（linux）模块 chunk-dmhfm1tj.js
import { In } from "./node-modules.js";
import { FH, fT, JS, Ob } from "../context/utf-8.js";
import { We } from "../plugins/chunk-0a4c51cf.js";
import { Rm, o8r } from "../git/utf-8.js";
import { BC } from "../agents/chunk-1782da8d.js";
import { dirname as v, join as a } from "path";
import { realpath as f } from "fs";
import { promisify as m } from "util";
var h = m(f.native);
function c(e) {
  return /^[A-Za-z0-9_-]{1,128}$/.test(e) ? e : FH(e) || "empty-id";
}
async function d(e, t, { isRootResolved: n = false } = {}) {
  return n ? In(e) : Ob(e, BC(t));
}
async function Xbs(e, t, n, i) {
  return a(JS(await d(e, n, i)), Wbr(t));
}
async function Jbs(e, t, n, i) {
  let o = await d(e, n, i), p = a(JS(o), Wbr(t)), r = fT(o), s = n === void 0 ? void 0 : Wdo(r, t);
  return { path: p, projectKey: r, v5: n === void 0 || s === void 0 ? void 0 : { backend: n, key: s } };
}
function Wdo(e, t) {
  let n = We.dirSyncRecord(e, c(t));
  return Rm(n) === void 0 ? n : void 0;
}
function Wbr(e) {
  return `${c(e)}${o8r}`;
}
export {
  Jbs,
  Wbr,
  Wdo,
  Xbs
};
