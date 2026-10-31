// linux/fs/chunk-dacd9872.js — Claude Code 2.1.310（linux）模块 chunk-zvsmc5fn.js
import { qf } from "../shared/environment.js";
import { nm } from "../shared/chunk-471874cc.js";
import { lhn, s9 } from "../shared/chunk-c564b685.js";
import { oy } from "../mcp/allowed-warning.js";
import { Ce } from "../vendor/react/chunk-0b0bf45d.js";
var o = Ce(oy(), 1);
import { readdir as c, stat as p } from "fs/promises";
import { join as a, sep as f } from "path";
function FQ() {
  if (!qf()) return false;
  let r = lhn() + f;
  return process.execPath.startsWith(r);
}
function xu(r = {}) {
  return E8(Tze(r));
}
function Tze(r = {}) {
  if (!r.pinToCurrentBinary && FQ()) {
    let t = Z7e();
    return { cmd: t, prefixArgs: [], target: t };
  }
  if (qf()) return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  let e = process.argv[1];
  if (!e) return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  return { cmd: process.execPath, prefixArgs: [e], target: e };
}
function Z7e() {
  return a(s9(), "claude");
}
function E8(r) {
  let e = nm();
  if (e.length === 0 || r.cmd === e[0]) return r;
  return { cmd: e[0], prefixArgs: [...e.slice(1), r.cmd, ...r.prefixArgs], target: r.target };
}
async function r1t() {
  let r = lhn(), e;
  try {
    e = await c(r);
  } catch {
    return null;
  }
  let t = e.filter((n) => !/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n) && o.valid(n)).sort(o.rcompare);
  for (let n of t) {
    let i = a(r, n);
    try {
      let s = await p(i);
      if (s.isFile() && s.size > 0) return i;
    } catch {
    }
  }
  return null;
}
export {
  E8,
  FQ,
  Tze,
  Z7e,
  r1t,
  xu
};
