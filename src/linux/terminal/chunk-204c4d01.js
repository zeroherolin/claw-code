// linux/terminal/chunk-204c4d01.js — Claude Code 2.1.310（linux）模块 chunk-d9vd9tj2.js
import { O } from "../fs/chunk-ce5d00cd.js";
function rLn() {
  if (O() !== "windows" || !process.stdin.isTTY) return;
  try {
    process.stdin.setRawMode(true), process.stdin.setRawMode(false);
  } catch {
  }
}
function oLn(t) {
}
export {
  oLn,
  rLn
};
