// linux/shared/aarch64-unknown-linux-musl.js — Claude Code 2.1.310（linux）模块 chunk-5ns6j8e0.js
import { O } from "../fs/chunk-ce5d00cd.js";
import { zTt } from "../plugins/skills-dir.js";
import { constants as t } from "fs";
function vc() {
  return t.O_RDONLY | zTe();
}
function zTe() {
  if (O() === "windows") return 0;
  return t.O_NOFOLLOW | t.O_NONBLOCK;
}
var kVs = ["aarch64-apple-darwin", "x86_64-apple-darwin", "aarch64-unknown-linux-musl", "x86_64-unknown-linux-musl"];
function o(r, e) {
  let n = e === "arm64" ? "aarch64" : e === "x64" ? "x86_64" : void 0;
  if (n === void 0) return;
  switch (r) {
    case "macos":
      return `${n}-apple-darwin`;
    case "linux":
    case "wsl":
      return `${n}-unknown-linux-musl`;
    case "windows":
    case "unknown":
      return;
  }
}
var hFr = 268435456;
function yFr() {
  return o(O(), process.arch);
}
function Xyt(r, e) {
  if (r.endsWith(`-${e}`)) {
    let n = r.slice(0, -(e.length + 1));
    return zTt.test(n) ? n : void 0;
  }
  if (r.endsWith(`-${e}.exe`)) {
    let n = r.slice(0, -(e.length + 5));
    return zTt.test(n) ? `${n}.exe` : void 0;
  }
  return;
}
export {
  Xyt,
  hFr,
  kVs,
  vc,
  yFr,
  zTe
};
