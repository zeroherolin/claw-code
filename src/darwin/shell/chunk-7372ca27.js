// darwin/shell/chunk-7372ca27.js — Claude Code 2.1.310（darwin）模块 chunk-jz0g7ffq.js
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { st } from "../git/utf8-keep-bom.js";
import { Iu } from "../fs/chunk-dacd9872.js";
import { homedir as s } from "os";
import { dirname as v, join as r, resolve as C } from "path";
function a() {
  let e = i.SHELL || "", n = s(), l = r(n, ".claude");
  if (e.endsWith("/zsh") || e.endsWith("/zsh.exe")) {
    let o = r(l, "completion.zsh");
    return { name: "zsh", rcFile: r(n, ".zshrc"), cacheFile: o, completionLine: `[[ -f "${o}" ]] && source "${o}"`, shellFlag: "zsh" };
  }
  if (e.endsWith("/bash") || e.endsWith("/bash.exe")) {
    let o = r(l, "completion.bash");
    return { name: "bash", rcFile: r(n, ".bashrc"), cacheFile: o, completionLine: `[ -f "${o}" ] && source "${o}"`, shellFlag: "bash" };
  }
  if (e.endsWith("/fish") || e.endsWith("/fish.exe")) {
    let o = i.XDG_CONFIG_HOME || r(n, ".config"), c = r(l, "completion.fish");
    return { name: "fish", rcFile: r(o, "fish", "config.fish"), cacheFile: c, completionLine: `[ -f "${c}" ] && source "${c}"`, shellFlag: "fish" };
  }
  return null;
}
async function bro() {
  return;
}
function m(e) {
  let { cmd: n, prefixArgs: l } = Iu();
  return st(n, [...l, "completion", e.shellFlag, "--output", e.cacheFile]);
}
export {
  bro
};
