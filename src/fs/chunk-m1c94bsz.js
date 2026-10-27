// fs/chunk-m1c94bsz.js — Claude Code 2.1.310 模块 chunk-m1c94bsz.js
import { readFileSync as i } from "fs";
import { readFile as d } from "fs/promises";
import { isAbsolute as c, join as u } from "path";
var g = [40, 181, 47, 253];
function s(r) {
  return r.length >= 4 && g.every((t, e) => r[e] === t);
}
function o(r, t) {
  return c(r) ? r : u(t, r);
}
async function rft(r, t) {
  let e = await d(o(r, t));
  return (s(e) ? await Bun.zstdDecompress(e) : e).toString("utf8");
}
function dt(r, t) {
  return fEo(r, t).toString("utf8");
}
function fEo(r, t) {
  let e = o(r, t);
  try {
    let n = i(e);
    return s(n) ? Bun.zstdDecompressSync(n) : n;
  } catch (n) {
    throw Object.assign(Error("embedded asset is missing or corrupt", { cause: n }), { path: e });
  }
}
export {
  dt,
  fEo,
  rft
};
