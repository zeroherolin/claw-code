// darwin/cli/chunk-631c0fd0.js — Claude Code 2.1.310（darwin）模块 chunk-6kjzjhs7.js
import { yn } from "../fs/gitlab-runner-authentication-token.js";
import { he } from "../terminal/xterm-ghostty.js";
import { QUe, pw } from "../terminal/no-hyperlinks.js";
import { cQe } from "../permissions/light-daltonized.js";
var DHn = "\x1B]8;;", LHn = "\x07";
function nE(e, r, t) {
  let s = r === void 0 ? void 0 : yn(r), n = s === void 0 || Jdo(e, s);
  if (!(n && (t?.assumeSupport ?? false) && process.stdout.isTTY === true && (QUe() ?? true) || (t?.supportsHyperlinks ?? pw()))) {
    let i = t?.shownUrlStart ?? "";
    if (r !== void 0 && !n) return `${r}${i} (${e})`;
    return `${i}${e}`;
  }
  let o = ((t?.themeName ? cQe(t.themeName) : false) ? he.blue : he.blueBright)(r ?? e);
  return `${DHn}${e}${LHn}${o}${DHn}${LHn}`;
}
function Jdo(e, r) {
  return r === e || e === `http://${r}` || e === `https://${r}`;
}
export {
  DHn,
  Jdo,
  LHn,
  nE
};
