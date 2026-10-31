// darwin/settings/ax-sr-suggestion-nav.js — Claude Code 2.1.310（darwin）模块 chunk-8qsa0b6q.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { U } from "../context/not-admin-owned.js";
import { ce } from "../agents/third-party.js";
import { vr, GI, L7r } from "../telemetry/anthropic-workspace-id.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { yb } from "../cli/chunk-af2447be.js";
import { i } from "../shared/environment.js";
import { Qt } from "./workflow-launch-exec.js";
import { rd } from "../shell/invalid-type.js";
import { vkn, X8r, flr, QZo, kkn, Xqt } from "../git/utf8-keep-bom.js";
import { ln, fe, VY } from "./settings-auto-mode-rules-untrusted-source-ignored.js";
import { cn } from "../shared/chunk-6ae01e90.js";
function mrt(e) {
  return e.slice(0, 500).replace(/https?:\/\/\S+/gi, "<url>").replace(/\b[\w.+-]+@[\w.-]+\.\w{2,}\b/g, "<email>").replace(/\b(?:sk-ant|sk|pk|ghp|gho|ghs|ghu|github_pat|xox[bpoars])[-_][\w-]{8,}\b/gi, "<key>").replace(/[A-Za-z]:\\[^\s"']*/g, "<path>").replace(/\\\\[^\s"']+/g, "<path>").replace(/(?:[^\s"'\\]+\\){2,}[^\s"']+/g, "<path>").replace(/(?:\/[^\s"':]+){2,}/g, "<path>").replace(/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi, "<id>").replace(/\breq_[A-Za-z0-9_-]{12,}/g, "<id>").replace(/\b[0-9a-fA-F]{16,}\b/g, "<id>").replace(/\b[A-Za-z0-9+/]{32,}={0,2}/g, "<b64>").replace(/\b\d{1,3}(?:\.\d{1,3}){3}\b/g, "<ip>").replace(/\b\d{4,}\b/g, "<num>");
}
var g = 4e3;
function v(e, n = 5) {
  let t = [], r;
  for (let l of e.slice(0, g).split(`
`)) {
    let s = l.trim();
    if (!s.startsWith("at ")) continue;
    let a = s.slice(3), u = a.indexOf(" (");
    if (r === void 0) {
      let R = u !== -1 ? a.slice(u + 2, -1) : a;
      if (/^(?:node|bun|internal):/.test(R)) r = R;
      else {
        let E = R.match(/([^/\\]+:\d+:\d+)\)?$/);
        if (E) r = E[1];
      }
    }
    let c = u !== -1 ? a.slice(0, u) : a;
    if (c = c.replace(/^async\s+/, "").replace(/^new\s+/, ""), c.includes("/") || c.includes("\\") || /:\d/.test(c)) continue;
    if (c) t.push(c);
    if (t.length >= n) break;
  }
  return { names: t, topFrame: r };
}
function N(e) {
  try {
    return String(e);
  } catch {
    return "[unstringifiable]";
  }
}
function lf(e) {
  try {
    let n = N(e instanceof Error ? e.message : e), t = { error_message_hash: cn(mrt(n)) }, r = vr(e);
    if (r !== void 0) t.error_code = r;
    if (!(e instanceof Error)) return t;
    let l = GI(e.constructor?.name);
    if (l !== void 0) t.error_constructor = l;
    let s = e.stack;
    if (typeof s !== "string") return t;
    let a = { name: e.name, message: e.message, stack: s }, u = Xqt(a), c = u.length < s.length && s.endsWith(u), { names: R, topFrame: E } = v(u);
    if (R.length > 0) t.error_stack_hash = cn(R.join("|"));
    let A = s.length - u.length, h = s.slice(0, A + g), [f] = c ? kkn({ ...a, stack: h }, 1) : [];
    if (f !== void 0) {
      let m = QZo(f) ? f.file : flr(f) ? X8r(f.file) : void 0, S = L7r(m === void 0 ? vkn : `${m}:${f.line}:${f.column}`), b = m !== void 0 && L7r(E ?? "") !== S;
      if (S !== void 0 && !b) t.error_top_frame = S;
    }
    return t;
  } catch {
    return {};
  }
}
import { homedir as x } from "os";
import { join as C, sep as D } from "path";
var M = "tengu_ax_screen_reader";
function Xsi(e) {
  return o().swapRemoteGateReader(e);
}
class _ {
  #n;
  #a;
  #o;
  #u;
  #t = null;
  #i = null;
  #c = false;
  #e = [];
  #r = false;
  #s = 0;
  swapRemoteGateReader(e) {
    let n = this.#t;
    return this.#t = e, n;
  }
  isEnabled() {
    if (this.#n !== void 0) return this.#n;
    let e, n;
    if (yb("--ax-screen-reader")) e = true, n = "flag";
    else {
      let r = i.CLAUDE_AX_SCREEN_READER;
      if (r !== void 0) e = r, n = "env";
      else e = VY("axScreenReader").find((l) => Qt(l.source))?.value === true, n = "settings";
    }
    if (!e) return this.#n = false;
    let t = this.#t?.(M, true) ?? true;
    return this.#a = t ? n : void 0, this.#n = t;
  }
  activationSource() {
    return this.isEnabled() ? this.#a : void 0;
  }
  isArrowNavEnabled() {
    if (this.#o === void 0) this.#o = this.#t?.(w, false) ?? false;
    return this.#o;
  }
  isSuggestionNavEnabled() {
    {
      if (!this.isEnabled()) return false;
      let e = false;
      return this.#u ??= this.#t?.("tengu_ax_sr_suggestion_nav", e) ?? e, this.#u;
    }
    return false;
  }
  markAnnouncementWritten(e) {
    if (this.#i === null) this.#i = e;
  }
  endStartupQuiet() {
    this.#c = true;
  }
  startupQuietOpenedAtMs() {
    return this.#c ? null : this.#i;
  }
  queueAnnouncement(e, n = false) {
    if (this.#e.push(e), n) this.#r = true;
    if (this.#e.length > p) this.#e.splice(0, this.#e.length - p);
  }
  drainAnnouncements() {
    return this.#e.splice(0);
  }
  takeHoldRequest() {
    let e = this.#r;
    return this.#r = false, e;
  }
  startHold(e) {
    this.#s = e;
  }
  endHold() {
    this.#s = 0, this.#r = false;
  }
  holdActive(e) {
    return e < this.#s;
  }
  reset() {
    this.#n = void 0, this.#a = void 0, this.#o = void 0, this.#u = void 0, this.#i = null, this.#c = false, this.#e.length = 0, this.#r = false, this.#s = 0;
  }
}
var T = new W(() => new _());
function o() {
  return T.of(U().host);
}
var w = "tengu_ax_sr_arrow_nav";
function lkt() {
  return o().isArrowNavEnabled();
}
function Sor() {
  return o().isSuggestionNavEnabled();
}
function Wf() {
  return o().isEnabled();
}
function X() {
  {
    let e = o();
    if (e.isEnabled()) {
      let n = e.activationSource();
      return n ? `[Screen Reader Mode: on via ${n}]` : "[Screen Reader Mode: on]";
    }
  }
  return null;
}
function F() {
  {
    if (o().isEnabled() || yb("--ax-screen-reader") || i.CLAUDE_AX_SCREEN_READER !== void 0 || VY("axScreenReader").some((s) => Qt(s.source))) return null;
    if (!["projectSettings", "localSettings"].some((s) => {
      let a = Qt(s) ? fe(s) : null;
      return a?.axScreenReader === true || Object.entries(a?.env ?? {}).some(([u, c]) => u.toUpperCase() === "CLAUDE_AX_SCREEN_READER" && Ne(c));
    })) return null;
    let n = "start Claude Code with --ax-screen-reader";
    if (!Qt("userSettings")) return `Screen reader mode is off: project settings can't turn it on. To turn it on, ${n}.`;
    let t = x(), r = rd(ln("userSettings") ?? C(t, ".claude", "settings.json")).replace(/[\t\n]/g, " "), l = r.startsWith(t + D) ? `~${r.slice(t.length)}` : r;
    return `Screen reader mode is off: project settings can't turn it on. To turn it on, ${n}, or add "axScreenReader": true to your own settings file at ${l} and restart.`;
  }
  return null;
}
function Jsi(e, n) {
  {
    if (!e) return null;
    let t = X();
    if (t !== null) return n(t), H(), t;
    let r = F();
    if (r !== null) n(r);
    return r;
  }
  return null;
}
var y = 3e3, k = 6e5;
function H() {
  o().markAnnouncementWritten(Date.now());
}
function H3r() {
  o().endStartupQuiet();
}
function Qsi() {
  {
    let e = o().startupQuietOpenedAtMs();
    if (e === null) return 0;
    let n = Math.min(i.CLAUDE_AX_STARTUP_QUIET_MS ?? y, k), t = e + n - Date.now();
    return t > 0 ? t : 0;
  }
  return 0;
}
var O = 0, P = 5e3;
function Zsi() {
  return Math.min(i.CLAUDE_AX_PREPARK_MS ?? O, P);
}
function eii() {
  return i.CLAUDE_AX_REWRITE_HELD_ANNOUNCEMENT ?? false;
}
function SZ() {
  if (o().isEnabled()) return { CLAUDE_AX_SCREEN_READER: "1" };
  return {};
}
function tii() {
  {
    let e = o();
    if (e.isEnabled()) return { screenReaderMode: true, screenReaderActivationSource: ce(e.activationSource()) };
  }
  return {};
}
var p = 16;
function K4(e, n) {
  o().queueAnnouncement(e, n?.hold === true);
}
function nii() {
  if (o().takeHoldRequest()) return Math.min(i.CLAUDE_AX_ANNOUNCEMENT_HOLD_MS ?? 1e3, 1e4);
  return 0;
}
function rii(e) {
  o().startHold(Date.now() + e);
}
function grt() {
  o().endHold();
}
function oii() {
  return o().holdActive(Date.now());
}
function sii() {
  return o().drainAnnouncements();
}
export {
  H3r,
  Jsi,
  K4,
  Qsi,
  SZ,
  Sor,
  Wf,
  Xsi,
  Zsi,
  eii,
  grt,
  lf,
  lkt,
  mrt,
  nii,
  oii,
  rii,
  sii,
  tii
};
