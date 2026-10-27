// fs/empty-id.ykyp.js — Claude Code 2.1.310 模块 chunk-ykypxcve.js
import { In } from "./node-modules.gp4v.js";
import { jH, mC, Qb, MS } from "../context/utf-8.yzy3.js";
import { je } from "../plugins/chunk-x0a7sawk.js";
import { Rm, R8r } from "../git/utf-8.vh7e.js";
import { GA } from "../agents/chunk-hv1nfndb.js";
import { dirname as v, join as a } from "path";
import { realpath as f } from "fs";
import { promisify as m } from "util";
var h = m(f.native);
function c(e) {
  return /^[A-Za-z0-9_-]{1,128}$/.test(e) ? e : jH(e) || "empty-id";
}
async function d(e, t, { isRootResolved: n = false } = {}) {
  return n ? In(e) : MS(e, GA(t));
}
async function Pbs(e, t, n, i) {
  return a(Qb(await d(e, n, i)), abr(t));
}
async function Ibs(e, t, n, i) {
  let o = await d(e, n, i), p = a(Qb(o), abr(t)), r = mC(o), s = n === void 0 ? void 0 : mco(r, t);
  return { path: p, projectKey: r, v5: n === void 0 || s === void 0 ? void 0 : { backend: n, key: s } };
}
function mco(e, t) {
  let n = je.dirSyncRecord(e, c(t));
  return Rm(n) === void 0 ? n : void 0;
}
function abr(e) {
  return `${c(e)}${R8r}`;
}
export {
  Ibs,
  Pbs,
  abr,
  mco
};
