// linux/terminal/chunk-4c553df7.js — Claude Code 2.1.310（linux）模块 chunk-pfg5vy47.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Ze } from "../shared/chunk-d2c47492.js";
import { i } from "../shared/environment.js";
import { it } from "../git/utf8-keep-bom.js";
import { Wue } from "../fs/reply-across-default-dirs.js";
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
var lAe = I();
var d = i.TMUX, T = i.TMUX_PANE;
function g8n() {
  return !!d;
}
async function Kde() {
  return g8n();
}
function mBr() {
  return T || null;
}
function gBr() {
  if (!d) return null;
  return Ze(d, ",") || null;
}
async function Vze() {
  return (await it(Wue, ["-V"])).code === 0;
}
function KQ(e = lAe) {
  let { terminalProbes: o } = e;
  if (o.inITerm2 !== null) return o.inITerm2;
  let a = i.TERM_PROGRAM, s = !!i.ITERM_SESSION_ID, l = i.terminal === "iTerm.app", n = a === "iTerm.app" || s || l;
  return o.recordInITerm2(n), n;
}
function EFo(e = lAe) {
  return e.terminalProbes.it2Command;
}
async function D1t(e = lAe) {
  let o = i.SHELL || "/bin/zsh", a = await it(o, ["-lc", `command -v ${c}`], { useCwd: false, timeout: 2e3 }), s = a.code === 0 ? a.stdout.split(`
`).map((m) => m.trim()).filter(Boolean).at(-1) ?? "" : "", l = async (m) => it(m, ["session", "list"]), n = s || c, r = await l(n);
  if (s && r.code !== 0 && (r.code === 127 || /ENOENT/i.test(r.error ?? ""))) n = c, r = await l(n);
  if (r.code !== 0) return t(`[isIt2CliAvailable] '${n} session list' failed (code=${r.code}): ${r.stderr || r.error || "no stderr"}. ` + (s ? "it2 was found on PATH — check that the iTerm2 Python API is enabled (Preferences > General > Magic > Enable Python API)." : "it2 was not found on PATH (including login-shell PATH).")), false;
  return e.terminalProbes.recordIt2Command(n), true;
}
export {
  D1t,
  EFo,
  KQ,
  Kde,
  Vze,
  g8n,
  gBr,
  lAe,
  mBr
};
