// darwin/fs/chunk-0249e9a3.js — Claude Code 2.1.310（darwin）模块 chunk-9ya9r882.js
import { O } from "./chunk-ce5d00cd.js";
import * as r from "fs/promises";
import * as o from "path";
function GZt(e = {}) {
  return { fs: r, path: o, platform: () => O(), ...e };
}
async function zZt(e, t) {
  return t.isRootNameExchangeable === true ? e.path.join(await e.fs.realpath(e.path.dirname(t.realRoot)), e.path.basename(t.realRoot)) : e.fs.realpath(t.realRoot);
}
export {
  GZt,
  zZt
};
