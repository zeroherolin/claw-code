// darwin/terminal/chunk-204c4d01.js — Claude Code 2.1.310（darwin）模块 chunk-p5jqjvaz.js
import { O } from "../fs/chunk-ce5d00cd.js";
function hDn() {
  if (O() !== "windows" || !process.stdin.isTTY) return;
  try {
    process.stdin.setRawMode(true), process.stdin.setRawMode(false);
  } catch {
  }
}
function yDn(t) {
}
export {
  hDn,
  yDn
};
