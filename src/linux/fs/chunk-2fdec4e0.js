// linux/fs/chunk-2fdec4e0.js — Claude Code 2.1.310（linux）模块 chunk-6gaf2snv.js
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
async function Xft(r, t) {
  let e = await d(o(r, t));
  return (s(e) ? await Bun.zstdDecompress(e) : e).toString("utf8");
}
function dt(r, t) {
  return Nwo(r, t).toString("utf8");
}
function Nwo(r, t) {
  let e = o(r, t);
  try {
    let n = i(e);
    return s(n) ? Bun.zstdDecompressSync(n) : n;
  } catch (n) {
    throw Object.assign(Error("embedded asset is missing or corrupt", { cause: n }), { path: e });
  }
}
export {
  Nwo,
  Xft,
  dt
};
