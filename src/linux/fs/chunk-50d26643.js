// linux/fs/chunk-50d26643.js — Claude Code 2.1.310（linux）模块 chunk-h906jfjz.js
import { lstat as s } from "fs/promises";
async function PA(i, e, t) {
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
  PA
};
