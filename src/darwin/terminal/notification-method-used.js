// darwin/terminal/notification-method-used.js — Claude Code 2.1.310（darwin）模块 chunk-0jw5v2sf.js
import { Tu } from "../context/not-admin-owned.js";
import { S, c, Dn } from "../agents/third-party.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "../shared/environment.js";
import { st } from "../git/utf8-keep-bom.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { DZ } from "../permissions/quota-auto-resume-disabled.js";
import { js } from "../settings/chunk-9121eb73.js";
import { R6, DD } from "../core/conversation-engine.js";
import { WPt, VOn } from "../shared/chunk-367ec787.js";
var h = /^[A-Za-z0-9][A-Za-z0-9._+-]{0,63}$/;
function x8t(e) {
  if (e == null) return;
  if (h.test(e)) return Dn(e);
  return S("nonconforming");
}
var u = /* @__PURE__ */ new Set(["Apple_Terminal", "contour", "foot", "ghostty", "iTerm.app", "iTerm2", "kitty", "Konsole", "libghostty", "libvterm", "mintty", "Rio", "ShellFish", "SwiftTerm", "Tabby", "terminology", "Termius", "tmux", "VTE", "Warp", "WezTerm", "xterm", "xterm-ghostty", "XTerm", "xterm.js", "Zap", "Zellij"]), T = [/^(?:next-)?v?\d{1,8}(?:\.\d{1,8}){0,5}[a-z]?$/, /^\d{1,8}\.\d{1,8}\.\d{1,8}-?(?:alpha|beta|rc|pre|dev)\.?\d{0,8}$/, /^\d{8}[-_]\d{6}[-_][0-9a-f]{8}$/, /^v\d\.\d{4}(?:\.\d{2}){4}\.(?:stable|preview|beta|dev)_\d{2}$/], N = /^\d{1,8}(?:\.\d{1,8}){1,3}/, O = /^([A-Za-z][A-Za-z0-9_.]*)(.*)$/, v = /^([A-Za-z][A-Za-z0-9_.-]*[A-Za-z0-9_.])(.*)$/, b = /[):]{1,4}$/;
function _ps(e) {
  if (e === void 0) return S("no_reply");
  let n = e.length <= 128 ? O.exec(e) : null;
  if (!n) return S("other");
  let o = v.exec(e), [, r = "", s = ""] = o && u.has(o[1] ?? "") ? o : n;
  if (!u.has(r)) return S("other");
  if (s === "") return Dn(r);
  let l = s[0], f = s.slice(1).replace(b, "");
  if (f === "") return Dn(l === "(" ? `${r}()` : r);
  let d = T.some((_) => _.test(f)) ? f : N.exec(f)?.[0] ?? "other";
  switch (l) {
    case "(":
      return Dn(`${r}(${d})`);
    case " ":
    case "-":
      return Dn(`${r}${l}${d}`);
    default:
      return Dn(`${r} ${d}`);
  }
}
async function T$(e, n, o = {}) {
  await Jno(e, n, o);
}
async function Jno(e, n, { storageV5: o, credentials: r, hookOrigin: s } = {}) {
  let l = js("preferredNotifChannel", "auto").value;
  await DD(R6(), e, { storageV5: o, credentials: r, hookOrigin: s });
  let f = await A(l, e, n);
  if (f === "error") m("notification_show", "send_failed");
  else g("notification_show");
  return a("tengu_notification_method_used", { configured_channel: c(DZ.includes(l) ? l : "invalid"), notification_type: c(e.notificationType), method_used: c(f), term: x8t(i.terminal), attacher_term: x8t(Tu()?.terminal) }), f;
}
var p = "Claude Code";
async function A(e, n, o) {
  if (e === "auto") {
    let s = await I();
    return y(s, n, o), s;
  }
  let r;
  switch (e) {
    case "iterm2":
    case "iterm2_with_bell":
    case "kitty":
    case "ghostty":
    case "terminal_bell":
      r = e;
      break;
    case "notifications_disabled":
      r = "disabled";
      break;
    default:
      r = "none";
  }
  try {
    return y(r, n, o), r;
  } catch {
    return "error";
  }
}
async function I() {
  switch (Tu()?.terminal ?? i.terminal) {
    case "Apple_Terminal":
      return await w() ? "terminal_bell" : "no_method_available";
    case "iTerm.app":
      return "iterm2";
    case "kitty":
      return "kitty";
    case "ghostty":
      return "ghostty";
    default:
      return "no_method_available";
  }
}
function y(e, n, o) {
  switch (e) {
    case "iterm2":
      o.notifyITerm2(n);
      return;
    case "iterm2_with_bell":
      o.notifyITerm2(n), o.notifyBell();
      return;
    case "kitty":
      o.notifyKitty({ ...n, title: n.title || p, id: E() });
      return;
    case "ghostty":
      o.notifyGhostty({ ...n, title: n.title || p });
      return;
    case "terminal_bell":
      o.notifyBell();
      return;
    case "disabled":
    case "none":
    case "no_method_available":
      return;
  }
}
function E() {
  return Math.floor(Math.random() * 1e4);
}
async function w() {
  try {
    let n = (await st("osascript", ["-e", 'tell application "Terminal" to name of current settings of front window'])).stdout.trim();
    if (!n) return false;
    let o = await st("defaults", ["export", "com.apple.Terminal", "-"]);
    if (o.code !== 0) return false;
    let r = VOn(o.stdout);
    if (!WPt(r)) return t("Failed to read Apple Terminal bell setting: defaults export is not a plist dict"), false;
    let s = r["Window Settings"], l = WPt(s) ? s[n] : void 0;
    if (!WPt(l)) return t("Failed to read Apple Terminal bell setting: no settings dict for the current profile"), false;
    return l.Bell === false;
  } catch (e) {
    return t(`Failed to read Apple Terminal bell setting: ${e instanceof Error ? e.message : String(e)}`, { level: "error" }), false;
  }
}
export {
  Jno,
  T$,
  _ps,
  x8t
};
