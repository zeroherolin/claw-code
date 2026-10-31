// darwin/git/chunk-2a7fae62.js — Claude Code 2.1.310（darwin）模块 chunk-398t2xay.js
import { existsSync as o, lstatSync as r, readdirSync as i, statSync as s } from "fs";
import { isAbsolute as a, join as l } from "path";
var $kn = "git is not installed on this Mac. To install it, run xcode-select --install, then try again.";
function YFe(n, e) {
  if (Boolean(e.DEVELOPER_DIR)) return false;
  try {
    return (n.includes("/") ? n : (e.PATH ?? "").split(":").filter((t) => a(t)).map((t) => l(t, n)).find((t) => o(t))) === "/usr/bin/git" && s("/Library/Developer/CommandLineTools", { throwIfNoEntry: false }) === void 0 && r("/var/db/xcode_select_link", { throwIfNoEntry: false }) === void 0 && !i("/Applications").some((t) => /^Xcode.*\.app$/i.test(t));
  } catch {
    return false;
  }
}
export {
  $kn,
  YFe
};
