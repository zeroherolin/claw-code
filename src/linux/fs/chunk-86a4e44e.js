// linux/fs/chunk-86a4e44e.js — Claude Code 2.1.310（linux）模块 chunk-qq3ygwcj.js
import { realpathSync as t } from "fs";
import { cwd as e } from "process";
function mJr(n) {
  return n;
}
function $ss(n) {
  return n;
}
function Fss() {
  let n = "";
  if (typeof process < "u" && typeof process.cwd === "function" && typeof t === "function") try {
    let r = e();
    try {
      n = mJr($ss(r));
    } catch {
      n = mJr(r);
    }
  } catch {
  }
  return n;
}
var xAn = Fss(), c5t = (() => {
  if (typeof process > "u" || typeof process.cwd !== "function") return null;
  try {
    return process.cwd();
  } catch {
    return null;
  }
})();
function zCt() {
  if (c5t === null) return null;
  let n = process.env.CLAUDE_CODE_SESSION_KIND;
  return n !== void 0 && String(n).trim() === "bg" ? null : c5t;
}
export {
  $ss,
  Fss,
  c5t,
  mJr,
  xAn,
  zCt
};
