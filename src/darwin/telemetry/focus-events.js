// darwin/telemetry/focus-events.js — Claude Code 2.1.310（darwin）模块 chunk-e5dw09p7.js
import { __asset_src } from "../../runtime/assets.js";
import { He } from "../fs/async-hooks.93b1.js";
import { U, zc } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { jf, kn, k, ue } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { st } from "../git/utf8-keep-bom.js";
import { t$ } from "../shell/chunk-fea9c492.js";
import { Uu } from "../remote/local-agent.js";
import { mt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Wf } from "../settings/ax-sr-suggestion-nav.js";
import { spawnSync as h } from "child_process";
function C() {
  return { loggedTmuxCcDisable: false, loggedWinSshDisable: false, checkedTmuxMouseHint: false, checkedTmuxFocusHint: false, tmuxControlModeProbed: void 0, tmuxMouseOptionProbe: void 0, tmuxFocusOptionProbe: void 0, gbGateCached: void 0, gbGateSource: void 0, downsellGateCached: void 0, freshInstallCached: void 0, crashAutoOff: false };
}
var _3 = C();
function a() {
  if (!i.TMUX) return false;
  if (i.TERM_PROGRAM !== "iTerm.app") return false;
  let e = i.TERM ?? "";
  return !e.startsWith("screen") && !e.startsWith("tmux");
}
function g(e) {
  if (e.tmuxControlModeProbed = a(), e.tmuxControlModeProbed) return;
  if (!i.TMUX) return;
  if (i.TERM_PROGRAM) return;
  let n = t$("tmux");
  if (n === null) return;
  let r;
  try {
    r = h(n, ["display-message", "-p", "#{client_control_mode}"], { encoding: "utf8", timeout: 2e3, cwd: void 0, env: process.env, windowsHide: true });
  } catch {
    return;
  }
  if (r.status !== 0) return;
  e.tmuxControlModeProbed = r.stdout.trim() === "1";
}
function She(e = _3) {
  if (e.tmuxControlModeProbed === void 0) g(e);
  return e.tmuxControlModeProbed ?? false;
}
function u() {
  if (O() !== "windows") return false;
  return Boolean(i.SSH_CONNECTION || i.SSH_CLIENT || i.SSH_TTY);
}
class c {
  latched = false;
  mode = void 0;
  persisted = false;
  upsellImpression = void 0;
  latchFromEnv() {
    if (this.latched) return;
    this.latched = true, this.mode = i.CLAUDE_CODE_TUI_TRIAL === "fullscreen" ? "fullscreen" : void 0, i.unset("CLAUDE_CODE_TUI_TRIAL");
  }
}
var x = new W(() => new c());
function lqn() {
  return x.of(U().host);
}
function SBs() {
  lqn().latchFromEnv();
}
function F$t() {
  let e = lqn();
  return e.latchFromEnv(), e.mode;
}
function Kan() {
  return ue().fullscreenAutoDisabled?.version === { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("darwin/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION;
}
function s() {
  return i.CLAUDE_CODE_NO_FLICKER === false || i.CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN;
}
var $$t = 3;
function d() {
  try {
    if (jf()) return false;
    let e = ue();
    return e.firstStartVersion !== void 0 && (e.fullscreenUpsellSeenCount ?? 0) < $$t;
  } catch {
    return;
  }
}
function S(e) {
  if (e.freshInstallCached !== void 0) return e.freshInstallCached;
  let n = d();
  if (n !== void 0) e.freshInstallCached = n;
  return n ?? false;
}
function Zl(e = _3) {
  if (Uu() === "local-agent") return false;
  if (i.CLAUDE_CODE_SESSION_KIND === "bg") return true;
  if (Wf()) return false;
  if (s()) return false;
  if (i.CLAUDE_CODE_NO_FLICKER === true) return true;
  if (e.crashAutoOff) return false;
  if (She(e)) {
    if (!e.loggedTmuxCcDisable) e.loggedTmuxCcDisable = true, t("fullscreen disabled: tmux -CC (iTerm2 integration mode) detected · set CLAUDE_CODE_NO_FLICKER=1 to override");
    return false;
  }
  if (u()) {
    if (!e.loggedWinSshDisable) e.loggedWinSshDisable = true, t("fullscreen disabled: Windows over SSH (ConPTY re-rendering) detected · set CLAUDE_CODE_NO_FLICKER=1 to override");
    return false;
  }
  switch (mt().tui ?? F$t()) {
    case "fullscreen":
      return true;
    case "default":
      return false;
  }
  if (S(e)) return true;
  if (p(e)) return true;
  if (e.gbGateCached === void 0) {
    let n = kn("tengu_pewter_brook", false);
    e.gbGateCached = n.value, e.gbGateSource = n.source;
  }
  return e.gbGateCached;
}
function p(e = _3) {
  return e.downsellGateCached ??= k("tengu_amber_creek", false), e.downsellGateCached;
}
function m2e(e = _3) {
  if (Wf()) return false;
  if (s()) return false;
  if (i.CLAUDE_CODE_NO_FLICKER === true) return true;
  if (e.crashAutoOff || Kan()) return false;
  if (u()) return false;
  if (She(e)) return false;
  switch (mt().tui) {
    case "fullscreen":
      return true;
    case "default":
      return false;
  }
  return true;
}
function nU(e = _3) {
  if (i.CLAUDE_CODE_SESSION_KIND === "bg") return "bg_forced_on";
  if (Wf()) return "sr_auto_off";
  if (s()) return "env_off";
  if (i.CLAUDE_CODE_NO_FLICKER === true) return "env_on";
  if (e.crashAutoOff) return "crash_auto_off";
  if (She(e)) return "tmux_cc_auto_off";
  if (u()) return "win_ssh_auto_off";
  let n = mt().tui;
  switch (n ?? F$t()) {
    case "fullscreen":
      return n === "fullscreen" ? "settings_on" : "upsell_trial_on";
    case "default":
      return "settings_off";
  }
  if (e.freshInstallCached ?? d()) return "fresh_install_on";
  if (e.downsellGateCached ?? k("tengu_amber_creek", false)) return "downsell_on";
  return e.gbGateCached ?? k("tengu_pewter_brook", false) ? "gb_on" : "gb_off";
}
function dqn(e) {
  switch (e) {
    case "env_on":
    case "bg_forced_on":
    case "settings_on":
    case "upsell_trial_on":
    case "ant_default":
    case "fresh_install_on":
    case "downsell_on":
    case "gb_on":
      return "fullscreen";
    case "env_off":
    case "sr_auto_off":
    case "crash_auto_off":
    case "tmux_cc_auto_off":
    case "win_ssh_auto_off":
    case "settings_off":
    case "gb_off":
      return "default";
  }
}
function cqn(e) {
  return e === "env_off" || e === "sr_auto_off" || e === "tmux_cc_auto_off" || e === "win_ssh_auto_off";
}
function bBs(e = _3) {
  return jf() && e.gbGateSource === "fallback";
}
function wBs() {
  if (i.CLAUDE_CODE_NO_FLICKER === true) return "on";
  if (i.CLAUDE_CODE_NO_FLICKER === false) return "off";
  return;
}
function R2() {
  if (i.CLAUDE_CODE_DISABLE_MOUSE !== void 0) return i.CLAUDE_CODE_DISABLE_MOUSE ? "off" : "full";
  if (i.CLAUDE_CODE_DISABLE_MOUSE_CLICKS !== void 0) return i.CLAUDE_CODE_DISABLE_MOUSE_CLICKS ? "scroll" : "full";
  return "full";
}
class _ {
  observed = false;
  changed = He();
  subscribe = this.changed.subscribe;
  get hasObserved() {
    return this.observed;
  }
  note() {
    if (this.observed) return;
    this.observed = true, this.changed.emit();
  }
}
var l = new W(() => new _());
function YOo() {
  l.of(U().host).note();
}
function qan() {
  return l.of(U().host).hasObserved;
}
function Yan(e) {
  return l.of(U().host).subscribe(e);
}
function H0(e = _3) {
  return zc() && Zl(e);
}
async function EBs(e = _3) {
  if (!i.TMUX) return null;
  if (!H0(e) || She(e)) return null;
  if (e.checkedTmuxMouseHint) return null;
  e.checkedTmuxMouseHint = true;
  let n = await o(e, "mouse");
  if (n === null || n === "on") return null;
  return "tmux detected · scroll with PgUp/PgDn · or add 'set -g mouse on' to ~/.tmux.conf for wheel scroll";
}
var T = { mouse: { cacheKey: "tmuxMouseOptionProbe", args: ["show", "-Av", "mouse"] }, "focus-events": { cacheKey: "tmuxFocusOptionProbe", args: ["show", "-gv", "focus-events"] } };
function o(e, n) {
  let { cacheKey: r, args: m } = T[n];
  return e[r] ??= st("tmux", [...m], { useCwd: false, timeout: 2e3 }).then(({ stdout: b, code: E }) => E === 0 ? b.trim() : null), e[r];
}
function vBs(e = _3) {
  if (!i.TMUX || a()) return;
  o(e, "mouse"), o(e, "focus-events");
}
async function kBs(e = _3) {
  if (!i.TMUX) return null;
  if (She(e)) return null;
  if (e.checkedTmuxFocusHint) return null;
  e.checkedTmuxFocusHint = true;
  let n = await o(e, "focus-events");
  if (n === null || n === "on") return null;
  return "tmux focus-events off · add 'set -g focus-events on' to ~/.tmux.conf and reattach for focus tracking";
}
export {
  $$t,
  EBs,
  F$t,
  H0,
  Kan,
  R2,
  SBs,
  She,
  YOo,
  Yan,
  Zl,
  _3,
  bBs,
  cqn,
  dqn,
  kBs,
  lqn,
  m2e,
  nU,
  qan,
  vBs,
  wBs
};
