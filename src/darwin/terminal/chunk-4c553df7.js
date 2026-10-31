// darwin/terminal/chunk-4c553df7.js — Claude Code 2.1.310（darwin）模块 chunk-cz21n45m.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Ze } from "../shared/chunk-d2c47492.js";
import { i } from "../shared/environment.js";
import { st } from "../git/utf8-keep-bom.js";
import { Xue } from "../fs/reply-across-default-dirs.js";
var c = "it2";
class u {
  inITerm2 = null;
  it2Command = "it2";
  recordInITerm2(e) {
    this.inITerm2 = e;
  }
  recordIt2Command(e) {
    this.it2Command = e;
  }
}
function I() {
  return { cachedDetectionResult: null, backendsRegistered: false, inProcessFallbackActive: false, TmuxBackendClass: null, ITermBackendClass: null, tmuxBackend: null, itermBackend: null, terminalProbes: new u() };
}
var ETe = I();
var d = i.TMUX, T = i.TMUX_PANE;
function uYn() {
  return !!d;
}
async function nce() {
  return uYn();
}
function j1r() {
  return T || null;
}
function W1r() {
  if (!d) return null;
  return Ze(d, ",") || null;
}
async function sze() {
  return (await st(Xue, ["-V"])).code === 0;
}
function nQ(e = ETe) {
  let { terminalProbes: o } = e;
  if (o.inITerm2 !== null) return o.inITerm2;
  let a = i.TERM_PROGRAM, s = !!i.ITERM_SESSION_ID, l = i.terminal === "iTerm.app", n = a === "iTerm.app" || s || l;
  return o.recordInITerm2(n), n;
}
function AUo(e = ETe) {
  return e.terminalProbes.it2Command;
}
async function njt(e = ETe) {
  let o = i.SHELL || "/bin/zsh", a = await st(o, ["-lc", `command -v ${c}`], { useCwd: false, timeout: 2e3 }), s = a.code === 0 ? a.stdout.split(`
`).map((m) => m.trim()).filter(Boolean).at(-1) ?? "" : "", l = async (m) => st(m, ["session", "list"]), n = s || c, r = await l(n);
  if (s && r.code !== 0 && (r.code === 127 || /ENOENT/i.test(r.error ?? ""))) n = c, r = await l(n);
  if (r.code !== 0) return t(`[isIt2CliAvailable] '${n} session list' failed (code=${r.code}): ${r.stderr || r.error || "no stderr"}. ` + (s ? "it2 was found on PATH — check that the iTerm2 Python API is enabled (Preferences > General > Magic > Enable Python API)." : "it2 was not found on PATH (including login-shell PATH).")), false;
  return e.terminalProbes.recordIt2Command(n), true;
}
export {
  AUo,
  ETe,
  W1r,
  j1r,
  nQ,
  nce,
  njt,
  sze,
  uYn
};
