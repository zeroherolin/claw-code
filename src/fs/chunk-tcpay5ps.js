// fs/chunk-tcpay5ps.js — Claude Code 2.1.310 模块 chunk-tcpay5ps.js
import { Tf } from "../shared/environment.9a41.js";
import { nm } from "../shared/chunk-pg9vp681.js";
import { Chn, fY } from "../shared/chunk-fc5zxj6s.js";
import { oy } from "../mcp/allowed-warning.j2d4.js";
import { Ae } from "../vendor/react/chunk-meds60nn.js";
var o = Ae(oy(), 1);
import { readdir as c, stat as p } from "fs/promises";
import { join as a, sep as f } from "path";
function KJ() {
  if (!Tf()) return false;
  let r = Chn() + f;
  return process.execPath.startsWith(r);
}
function Iu(r = {}) {
  return M8(DGe(r));
}
function DGe(r = {}) {
  if (!r.pinToCurrentBinary && KJ()) {
    let t = aZe();
    return { cmd: t, prefixArgs: [], target: t };
  }
  if (Tf()) return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  let e = process.argv[1];
  if (!e) return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  return { cmd: process.execPath, prefixArgs: [e], target: e };
}
function aZe() {
  return a(fY(), "claude");
}
function M8(r) {
  let e = nm();
  if (e.length === 0 || r.cmd === e[0]) return r;
  return { cmd: e[0], prefixArgs: [...e.slice(1), r.cmd, ...r.prefixArgs], target: r.target };
}
async function gBt() {
  let r = Chn(), e;
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
  DGe,
  Iu,
  KJ,
  M8,
  aZe,
  gBt
};
