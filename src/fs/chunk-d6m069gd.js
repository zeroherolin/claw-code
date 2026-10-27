// fs/chunk-d6m069gd.js — Claude Code 2.1.310 模块 chunk-d6m069gd.js
import { lstat as s } from "fs/promises";
async function MT(i, e, t) {
  if (i.isDirectory()) return "dir";
  if (i.isSymbolicLink()) return "symlink";
  if (i.isFile()) return "file";
  if (i.isFIFO() || i.isSocket() || i.isBlockDevice() || i.isCharacterDevice()) return "other";
  try {
    let r = await s(e);
    return r.isDirectory() ? "dir" : r.isSymbolicLink() ? "symlink" : r.isFile() ? "file" : "other";
  } catch {
    return t;
  }
}
export {
  MT
};
