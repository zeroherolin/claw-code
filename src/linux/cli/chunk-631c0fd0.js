// linux/cli/chunk-631c0fd0.js — Claude Code 2.1.310（linux）模块 chunk-tnj7z4dw.js
import { yn } from "../fs/gitlab-runner-authentication-token.js";
import { he } from "../terminal/xterm-ghostty.js";
import { GUe, uw } from "../terminal/no-hyperlinks.js";
import { n7e } from "../permissions/light-daltonized.js";
var vHn = "\x1B]8;;", EHn = "\x07";
function tv(e, r, t) {
  let s = r === void 0 ? void 0 : yn(r), n = s === void 0 || Udo(e, s);
  if (!(n && (t?.assumeSupport ?? false) && process.stdout.isTTY === true && (GUe() ?? true) || (t?.supportsHyperlinks ?? uw()))) {
    let i = t?.shownUrlStart ?? "";
    if (r !== void 0 && !n) return `${r}${i} (${e})`;
    return `${i}${e}`;
  }
  let o = ((t?.themeName ? n7e(t.themeName) : false) ? he.blue : he.blueBright)(r ?? e);
  return `${vHn}${e}${EHn}${o}${vHn}${EHn}`;
}
function Udo(e, r) {
  return r === e || e === `http://${r}` || e === `https://${r}`;
}
export {
  EHn,
  Udo,
  tv,
  vHn
};
