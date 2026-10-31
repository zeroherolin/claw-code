// darwin/fs/chunk-86a4e44e.js — Claude Code 2.1.310（darwin）模块 chunk-kqpf5fh3.js
import { realpathSync as t } from "fs";
import { cwd as e } from "process";
function $7r(n) {
  return n.normalize("NFC");
}
function Sis(n) {
  if (n === "/") return n;
  return t(n);
}
function bis() {
  let n = "";
  if (typeof process < "u" && typeof process.cwd === "function" && typeof t === "function") try {
    let r = e();
    try {
      n = $7r(Sis(r));
    } catch {
      n = $7r(r);
    }
  } catch {
  }
  return n;
}
var VTn = bis(), k4t = (() => {
  if (typeof process > "u" || typeof process.cwd !== "function") return null;
  try {
    return process.cwd();
  } catch {
    return null;
  }
})();
function tRt() {
  if (k4t === null) return null;
  let n = process.env.CLAUDE_CODE_SESSION_KIND;
  return n !== void 0 && String(n).trim() === "bg" ? null : k4t;
}
export {
  $7r,
  Sis,
  VTn,
  bis,
  k4t,
  tRt
};
