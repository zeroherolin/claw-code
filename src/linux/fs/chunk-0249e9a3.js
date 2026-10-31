// linux/fs/chunk-0249e9a3.js — Claude Code 2.1.310（linux）模块 chunk-mb4r4r9v.js
import { O } from "./chunk-ce5d00cd.js";
import * as r from "fs/promises";
import * as o from "path";
function bZt(e = {}) {
  return { fs: r, path: o, platform: () => O(), ...e };
}
async function SZt(e, t) {
  return t.isRootNameExchangeable === true ? e.path.join(await e.fs.realpath(e.path.dirname(t.realRoot)), e.path.basename(t.realRoot)) : e.fs.realpath(t.realRoot);
}
export {
  SZt,
  bZt
};
