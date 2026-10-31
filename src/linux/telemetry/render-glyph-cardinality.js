// linux/telemetry/render-glyph-cardinality.js — Claude Code 2.1.310（linux）模块 chunk-h56pfqh7.js
import { PSe } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { i } from "../shared/environment.js";
import { yn, t } from "../fs/gitlab-runner-authentication-token.js";
import { VUt } from "../permissions/light-daltonized.js";
import { gy } from "../terminal/chunk-2969c20f.js";
import { k } from "../settings/global-config-and-gates.js";
import { t_, xD, gm, zUs, KUs, Tqn, Tan, VUs, ZIo, Ws } from "../terminal/wl-copy.js";
import { Lwe, qc, Mm, Ylt, HW } from "../terminal/aria-preserve-whitespace.js";
import { aPt, EIn, Zw } from "../shared/chunk-be0ce119.js";
import { w } from "../ui/chunk-0ed4c357.js";
import { rX, yA, Tui, Aui, _Zo } from "../shared/chunk-d4196a83.js";
import { a } from "./chunk-9097a12b.js";
import { g, f } from "./chunk-9d6962d2.js";
import { le } from "../shared/chunk-4563156b.js";
import { O$e } from "../fs/async-hooks.7959.js";
import { lPt } from "../shared/chunk-4ef913a6.js";
import { Zl } from "./focus-events.js";
import { Awt } from "../fs/read-failed.js";
import { $gr, MW, _6e, Ppe, Eg, Ugr, Cu, Bgr, Wgr, b6e, kF } from "../terminal/ink-renderer.js";
import { e9t, Efs } from "../terminal/chunk-e4c40fed.js";
import { Xy, Nwe } from "../shared/chunk-10142731.js";
import { dLn } from "./terminal-nonblocking-stdout.js";
import { Ope, nD, S6e, qgr, vk } from "../shared/chunk-db96ab2d.js";
import { GUe, uw } from "../terminal/no-hyperlinks.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { Sh } from "../shared/chunk-68a6f4fc.js";
import { Gt, wc, th, de, be, P, Xt, ee, Qh, C, y, kt, j } from "../vendor/react/chunk-9a0b1ced.js";
import { $a } from "../shared/chunk-5acf247e.js";
import { S, vn } from "../vendor/react/chunk-0b0bf45d.js";
j();
j();
function ft() {
  return { latched: null };
}
var F8t = Gt(null);
function Se() {
  return Zl() ? "fullscreen" : "inline";
}
function re(o) {
  let p = w(3), { value: r, children: l } = o, [u] = y(ft);
  const d = r ?? u;
  let m;
  if (p[0] !== l || p[1] !== d) m = e(F8t.Provider, { value: d, children: l }), p[0] = l, p[1] = d, p[2] = m;
  else m = p[2];
  return m;
}
function gP() {
  let r = w(2);
  const o = be(F8t);
  let l;
  if (r[0] !== o) l = Ogr(o), r[0] = o, r[1] = l;
  else l = r[1];
  return l;
}
function Ogr(o) {
  if (o === null) return Se();
  if (typeof o === "string") return o;
  if (o.latched === null) o.latched = Se();
  return o.latched;
}
function _i() {
  return gP() === "fullscreen";
}
j();
function ke() {
  return { markdownTokens: /* @__PURE__ */ new Map(), highlightedCode: /* @__PURE__ */ new Map(), structuredDiff: /* @__PURE__ */ new WeakMap(), parsedToolResults: /* @__PURE__ */ new WeakMap() };
}
var Te = Gt(null);
function Ee({ children: o }) {
  let r = C(null);
  return r.current ??= ke(), e(Te.Provider, { value: r.current, children: o });
}
function z2() {
  let o = be(Te), r = C(null);
  if (o) return o;
  return r.current ??= ke(), r.current;
}
function U8t(o, r, l) {
  if (!r) return;
  if (typeof l !== "object" || l === null) return r.safeParse(l);
  let u = o.parsedToolResults.get(l);
  if (u && yt(u, r)) return u.parsed;
  let d = r.safeParse(l);
  return o.parsedToolResults.set(l, { schema: r, parsed: d }), d;
}
function yt(o, r) {
  return o.schema === r;
}
import { Stream as bt } from "stream";
import { writeSync as ne } from "fs";
function ht() {
  if (!process.stdout.isTTY) return;
  try {
    dLn();
    let o = Ws().get(process.stdout);
    if (ne(1, (o?.modes.reset("mousePixels") ?? "") + Nwe), o?.modes.reset("mouse"), o?.isAltScreenActive) try {
      o.unmount();
    } catch {
    }
    if (o?.drainStdin(), o?.detachForShutdown(), Wgr(o?.modes ?? new Ylt(), (r) => ne(1, r)), !i.CLAUDE_CODE_DISABLE_TERMINAL_TITLE) ne(1, KUs);
  } catch {
  }
}
function gt() {
  Ws().get(process.stdout)?.drainStdin();
}
var ie = { cleanupTerminalModes: ht, drainStdin: gt };
var Ct = (o, r) => {
  let l = Rt(r), u = { stdout: process.stdout, stdin: process.stdin, stderr: process.stderr, exitOnCtrlC: true, patchConsole: true, ...l }, d = St(u.stdout, () => new b6e(u));
  return d.render(o), { rerender: d.render, unmount() {
    d.unmount();
  }, waitUntilExit: d.waitUntilExit, cleanup: () => Ws().delete(u.stdout) };
}, vt = async (o, r) => {
  let l = Ws();
  while (l.pendingStandaloneRender) await l.pendingStandaloneRender;
  await Promise.resolve();
  let u = Ct(o, r);
  return t(`[render] first ink render: ${Math.round(process.uptime() * 1e3)}ms since process start`), u;
}, se = vt;
async function we(o = {}) {
  await Promise.resolve();
  let r = Ws();
  while (r.pendingStandaloneRender) await r.pendingStandaloneRender;
  let l = xt(o, "react");
  return { render: (u) => l.render(u), unmount: () => l.unmount(), waitUntilExit: () => l.waitUntilExit() };
}
function xt({ stdout: o = process.stdout, stdin: r = process.stdin, stderr: l = process.stderr, exitOnCtrlC: u = true, patchConsole: d = true, onFrame: p, nativeCursor: m, isScreenReaderEnabled: b, atlasRecorder: v }, h) {
  let R = Ws();
  ZIo(ie);
  let x = new b6e({ stdout: o, stdin: r, stderr: l, exitOnCtrlC: u, patchConsole: d, onFrame: p, nativeCursor: m, isScreenReaderEnabled: b, atlasRecorder: v });
  if (h === "react") R.set(o, x);
  else R.treeRoots.set(o, x);
  return x;
}
var Rt = (o = {}) => {
  if (o instanceof bt) return { stdout: o, stdin: process.stdin };
  return o;
}, St = (o, r) => {
  let l = Ws(), u = l.get(o);
  if (!u) ZIo(ie), u = r(), l.set(o, u);
  return u;
};
function ofs() {
  let o = Ws().get(process.stdout);
  if (!o) return;
  Tt(o.getStylePool());
}
function Pe() {
  let o = k("tengu_xterm_atlas_reset", true), r = k("tengu_basalt_meadow", false);
  return { autoResetEnabled: o, recording: o || r };
}
function Tt(o) {
  let r = o.atlasRecorder;
  if (r.debugTainted) return;
  if (!k("tengu_basalt_meadow", false)) {
    if (!r.autoResetEnabled) r.recording = false;
    return;
  }
  r.recording = true;
  let u = r.proactiveResetStats;
  if (a("tengu_render_glyph_cardinality", { stylepool_styles: o.size, stylepool_overflowed: o.overflowed, atlas_glyph_keys: r.size, atlas_keys_saturated: r.saturated, term_program: c(Et()), is_xtermjs: gy(), session_age_bucket: c(wt(PSe())), proactive_reset_count: u.count, proactive_reset_last_reason: c(u.lastReason) }), !r.stylePoolHealthyReported) r.stylePoolHealthyReported = true, g("render_stylepool");
  if (o.overflowed && !r.stylePoolCapHitReported) r.stylePoolCapHitReported = true, f("render_stylepool", "cap_hit");
}
function Et() {
  if (i.CURSOR_TRACE_ID !== void 0) return "cursor";
  switch (i.TERM_PROGRAM) {
    case "vscode":
      return "vscode";
    case "iTerm.app":
      return "iterm";
    case "Apple_Terminal":
      return "apple_terminal";
    case "ghostty":
      return "ghostty";
    case "WezTerm":
      return "wezterm";
    case "tmux":
      return "tmux";
  }
  if (process.env.WT_SESSION !== void 0) return "windows_terminal";
  return "other";
}
function wt(o) {
  let r = o / 6e4;
  if (r < 5) return "lt_5m";
  if (r < 30) return "5m_30m";
  if (r < 120) return "30m_2h";
  if (r < 480) return "2h_8h";
  return "gt_8h";
}
function H(o, r) {
  if (!o) return;
  if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) return o;
  return VUt(o) ? r[o] : void 0;
}
function Pt(o) {
  let r = Zw();
  return e(qc, { ...o, borderColor: H(o.borderColor, r), borderTopColor: H(o.borderTopColor, r), borderBottomColor: H(o.borderBottomColor, r), borderLeftColor: H(o.borderLeftColor, r), borderRightColor: H(o.borderRightColor, r), backgroundColor: H(o.backgroundColor, r) });
}
var s = Pt;
j();
j();
var Ult = Gt(false);
function Y(o, r) {
  if (!o) return;
  if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) return o;
  return VUt(o) ? r[o] : void 0;
}
function n(o) {
  let r = w(32), l, u, d, p, m, b, v, h, R, x, E;
  if (r[0] !== o) ({ color: d, backgroundColor: l, dimColor: m, bold: b, italic: v, underline: h, strikethrough: R, inverse: x, wrap: E, children: u, ...p } = o), r[0] = o, r[1] = l, r[2] = u, r[3] = d, r[4] = p, r[5] = m, r[6] = b, r[7] = v, r[8] = h, r[9] = R, r[10] = x, r[11] = E;
  else l = r[1], u = r[2], d = r[3], p = r[4], m = r[5], b = r[6], v = r[7], h = r[8], R = r[9], x = r[10], E = r[11];
  let A = m === void 0 ? false : m, T = b === void 0 ? false : b, M = v === void 0 ? false : v, I = h === void 0 ? false : h, O = R === void 0 ? false : R, F = x === void 0 ? false : x, B = E === void 0 ? "wrap" : E, _ = Zw(), U = be(Ult), L;
  if (r[12] !== d || r[13] !== A || r[14] !== U || r[15] !== _) L = A && !U ? _.inactive : Y(d, _), r[12] = d, r[13] = A, r[14] = U, r[15] = _, r[16] = L;
  else L = r[16];
  let D = L, W;
  if (r[17] !== l || r[18] !== _) W = Y(l, _), r[17] = l, r[18] = _, r[19] = W;
  else W = r[19];
  let z = W;
  const G = A && !U ? D : void 0;
  let oe;
  if (r[20] !== T || r[21] !== u || r[22] !== p || r[23] !== F || r[24] !== M || r[25] !== z || r[26] !== D || r[27] !== O || r[28] !== G || r[29] !== I || r[30] !== B) oe = e(Cu, { color: D, backgroundColor: z, bold: T, faintInk: G, italic: M, underline: I, strikethrough: O, inverse: F, wrap: B, ...p, children: u }), r[20] = T, r[21] = u, r[22] = p, r[23] = F, r[24] = M, r[25] = z, r[26] = D, r[27] = O, r[28] = G, r[29] = I, r[30] = B, r[31] = oe;
  else oe = r[31];
  return oe;
}
j();
function Yt(o) {
  let b = w(5), { children: r, url: l, fallback: u, assumeSupport: d } = o, p = r ?? l;
  if (d ? GUe() ?? true : uw()) {
    let v2;
    if (b[0] !== p || b[1] !== l) v2 = e(Cu, { children: e("ink-link", { href: l, children: p }) }), b[0] = p, b[1] = l, b[2] = v2;
    else v2 = b[2];
    return v2;
  }
  const v = u ?? p;
  let h;
  if (b[3] !== v) h = e(Cu, { children: v }), b[3] = v, b[4] = h;
  else h = b[4];
  return h;
}
function De(o) {
  if (o.length === 0) return null;
  let r = o[0];
  if (r === "c") return { type: "reset" };
  if (r === "7") return { type: "cursor", action: { type: "save" } };
  if (r === "8") return { type: "cursor", action: { type: "restore" } };
  if (r === "D") return { type: "scroll", action: { type: "index" } };
  if (r === "M") return { type: "scroll", action: { type: "reverseIndex" } };
  if (r === "E") return { type: "cursor", action: { type: "nextLine", count: 1 } };
  if (r === "H") return null;
  if ("()".includes(r) && o.length >= 2) return null;
  return { type: "unknown", sequence: `\x1B${o}` };
}
function* Fe(o) {
  let r = true;
  for (let l = 0; l < o.length; l++) if (o.charCodeAt(l) >= 128) {
    r = false;
    break;
  }
  if (r) {
    for (let l = 0; l < o.length; l++) yield { value: o[l], width: 1 };
    return;
  }
  for (let { segment: l } of $a().segment(o)) {
    if (l.length === 1) {
      let u = l.charCodeAt(0);
      if (u >= 32 && u < 127) {
        yield { value: l, width: 1 };
        continue;
      }
    }
    yield { value: l, width: Math.max(1, le(l)) };
  }
}
function zt(o, r) {
  switch (o) {
    case Xy.CURSOR_VISIBLE:
      return { type: "cursor", action: r ? { type: "show" } : { type: "hide" } };
    case Xy.ALT_SCREEN_CLEAR:
    case Xy.ALT_SCREEN:
      return { type: "mode", action: { type: "alternateScreen", enabled: r } };
    case Xy.BRACKETED_PASTE:
      return { type: "mode", action: { type: "bracketedPaste", enabled: r } };
    case Xy.MOUSE_NORMAL:
      return { type: "mode", action: { type: "mouseTracking", mode: r ? "normal" : "off" } };
    case Xy.MOUSE_BUTTON:
      return { type: "mode", action: { type: "mouseTracking", mode: r ? "button" : "off" } };
    case Xy.MOUSE_ANY:
      return { type: "mode", action: { type: "mouseTracking", mode: r ? "any" : "off" } };
    case Xy.FOCUS_EVENTS:
      return { type: "mode", action: { type: "focusEvents", enabled: r } };
    default:
      return null;
  }
}
function Jt(o) {
  let r = o.slice(2);
  if (r.length === 0) return null;
  let l = r.charCodeAt(r.length - 1), u = r.slice(0, -1), d = "", p = u, m = "";
  if (u.length > 0 && "?>=<".includes(u[0])) d = u[0], p = u.slice(1);
  let b = p.charCodeAt(p.length - 1);
  if (p.length > 0 && !(b >= 48 && b <= 59)) {
    let x = p.match(/([^0-9;:]+)$/);
    if (x) m = x[1], p = p.slice(0, -m.length);
  }
  if (l === yA.SGR && d === "") return { type: "sgr", params: p };
  let v = p === "" ? [] : p.split(/[;:]/).map((x) => x === "" ? 0 : parseInt(x, 10)), h = v[0] ?? 1, R = v[1] ?? 1;
  if (l === yA.CUU) return { type: "cursor", action: { type: "move", direction: "up", count: h } };
  if (l === yA.CUD || l === yA.VPR) return { type: "cursor", action: { type: "move", direction: "down", count: h } };
  if (l === yA.CUF || l === yA.HPR) return { type: "cursor", action: { type: "move", direction: "forward", count: h } };
  if (l === yA.CUB) return { type: "cursor", action: { type: "move", direction: "back", count: h } };
  if (l === yA.CNL) return { type: "cursor", action: { type: "nextLine", count: h } };
  if (l === yA.CPL) return { type: "cursor", action: { type: "prevLine", count: h } };
  if (l === yA.CHA || l === yA.HPA) return { type: "cursor", action: { type: "column", col: h } };
  if (l === yA.CUP || l === yA.HVP) return { type: "cursor", action: { type: "position", row: h, col: R } };
  if (l === yA.VPA) return { type: "cursor", action: { type: "row", row: h } };
  if (l === yA.ED) return { type: "erase", action: { type: "display", region: Tui[v[0] ?? 0] ?? "toEnd" } };
  if (l === yA.EL) return { type: "erase", action: { type: "line", region: Aui[v[0] ?? 0] ?? "toEnd" } };
  if (l === yA.ECH) return { type: "erase", action: { type: "chars", count: h } };
  if (l === yA.IL) return { type: "edit", action: { type: "insertLines", count: h } };
  if (l === yA.DL) return { type: "edit", action: { type: "deleteLines", count: h } };
  if (l === yA.ICH) return { type: "edit", action: { type: "insertChars", count: h } };
  if (l === yA.DCH) return { type: "edit", action: { type: "deleteChars", count: h } };
  if (l === yA.SU) return { type: "scroll", action: { type: "up", count: h } };
  if (l === yA.SD) return { type: "scroll", action: { type: "down", count: h } };
  if (l === yA.DECSTBM) return { type: "scroll", action: { type: "setRegion", top: h, bottom: v[1] ?? 0 } };
  if (l === yA.SCOSC) return { type: "cursor", action: { type: "save" } };
  if (l === yA.SCORC) return { type: "cursor", action: { type: "restore" } };
  if (l === yA.DECSCUSR && m === " ") return { type: "cursor", action: { type: "style", ..._Zo[h] ?? _Zo[0] } };
  if (d === "?" && (l === yA.SM || l === yA.RM)) {
    let x = l === yA.SM, E = [];
    for (let A of v) {
      let T = zt(A, x);
      if (T) E.push(T);
    }
    return E.length ? E : { type: "unknown", sequence: o };
  }
  return { type: "unknown", sequence: o };
}
function $t(o) {
  if (o.length < 2) return "unknown";
  if (o.charCodeAt(0) !== rX.ESC) return "unknown";
  let r = o.charCodeAt(1);
  if (r === 91) return "csi";
  if (r === 93) return "osc";
  if (r === 79) return "ss3";
  return "esc";
}
class J {
  tokenizer;
  forOutput;
  tail = "";
  constructor(o) {
    this.forOutput = o?.forOutput ?? false, this.tokenizer = O$e({ stringsEndAtLineFeed: o?.stringsEndAtLineFeed });
  }
  style = e9t();
  inLink = false;
  linkUrl;
  flush() {
    if (!this.tail) return [];
    let o = this.processText(this.tail, false);
    return this.tail = "", o;
  }
  reset() {
    this.tail = "", this.tokenizer.reset(), this.style = e9t(), this.inLink = false, this.linkUrl = void 0;
  }
  feed(o) {
    let r = this.tokenizer.feed(o), l = [];
    for (let u = 0; u < r.length; u++) {
      let d = r[u];
      if (d.type === "text") {
        let p = this.tail + d.value;
        this.tail = "";
        let m = this.forOutput && u === r.length - 1;
        l.push(...this.processText(p, m));
      } else {
        if (this.tail) l.push(...this.processText(this.tail, false)), this.tail = "";
        l.push(...this.processSequence(d.value));
      }
    }
    return l;
  }
  processText(o, r) {
    let l = this.style;
    if (o.indexOf("\x07") === -1) {
      let p = [...Fe(o)];
      return this.holdTail(p, r), p.length > 0 ? [{ type: "text", graphemes: p, style: l }] : [];
    }
    let u = [];
    for (let p of o.split("\x07")) {
      if (p) {
        let m = [...Fe(p)];
        if (m.length > 0) u.push({ type: "text", graphemes: m, style: l });
      }
      u.push({ type: "bell" });
    }
    u.pop();
    let d = u.at(-1);
    if (d?.type === "text") {
      if (this.holdTail(d.graphemes, r), d.graphemes.length === 0) u.pop();
    }
    return u;
  }
  holdTail(o, r) {
    if (!r || o.length === 0) return;
    let l = o.at(-1), u = l.value.charCodeAt(l.value.length - 1);
    if (u < 32) return;
    if (this.tail = l.value, o.pop(), u >= 55296 && u <= 56319 && o.length > 0) this.tail = o.pop().value + this.tail;
    while (o.length > 0 && this.tail.length <= 64) {
      let d = o.at(-1).value, p = d.charCodeAt(d.length - 1), m = p >= 56320 && p <= 57343 ? d.codePointAt(d.length - 2) : p;
      if (m === 8205 || m !== void 0 && m >= 127462 && m <= 127487) this.tail = d + this.tail, o.pop();
      else break;
    }
  }
  processSequence(o) {
    switch ($t(o)) {
      case "csi": {
        let l = Jt(o);
        if (!l) return [];
        if (Array.isArray(l)) return l;
        if (l.type === "sgr") return this.style = Efs(l.params, this.style), [];
        return [l];
      }
      case "osc": {
        let l = o.slice(2);
        if (l.endsWith("\x07")) l = l.slice(0, -1);
        else if (l.endsWith("\x1B\\")) l = l.slice(0, -2);
        let u = zUs(l);
        if (u) {
          if (u.type === "link") if (u.action.type === "start") this.inLink = true, this.linkUrl = u.action.url;
          else this.inLink = false, this.linkUrl = void 0;
          return [u];
        }
        return [];
      }
      case "esc": {
        let l = o.slice(1), u = De(l);
        if (u?.type === "reset") this.style = e9t(), this.inLink = false, this.linkUrl = void 0;
        return u ? [u] : [];
      }
      case "ss3":
        return [{ type: "unknown", sequence: o }];
      default:
        return [{ type: "unknown", sequence: o }];
    }
  }
}
var ts = th(function(r) {
  let R = w(21), { children: l, dimColor: u, italic: d, monochrome: p, wrap: m } = r;
  if (typeof l !== "string") {
    const b2 = !!u;
    const v2 = !!d;
    const h2 = String(l);
    let x2;
    if (R[0] !== b2 || R[1] !== v2 || R[2] !== h2 || R[3] !== m) x2 = e(Cu, { dim: b2, italic: v2, wrap: m, children: h2 }), R[0] = b2, R[1] = v2, R[2] = h2, R[3] = m, R[4] = x2;
    else x2 = R[4];
    return x2;
  }
  if (l === "") {
    return null;
  }
  let b, v;
  if (R[5] !== l || R[6] !== u || R[7] !== d || R[8] !== p || R[9] !== m) {
    v = vn;
    A: {
      let E = Ue(l);
      if (E.length === 0) {
        v = null;
        break A;
      }
      if (E.length === 1 && !Q(E[0].props) && E[0].props.hyperlink === void 0) {
        v = e(Cu, { dim: !!u, italic: !!d, wrap: m, children: E[0].text });
        break A;
      }
      let h2;
      if (R[12] !== u || R[13] !== d || R[14] !== p) h2 = (T, M) => {
        let I = T.props.hyperlink;
        if (u) T.props.dim = true;
        if (d) T.props.italic = true;
        if (p) T.props.color = void 0;
        let O = Q(T.props) ? e(me, { color: T.props.color, backgroundColor: T.props.backgroundColor, dim: T.props.dim, bold: T.props.bold, italic: T.props.italic, underline: T.props.underline, strikethrough: T.props.strikethrough, inverse: T.props.inverse, children: T.text }, M) : T.text;
        return I ? e(Yt, { url: I, children: O }, M) : O;
      }, R[12] = u, R[13] = d, R[14] = p, R[15] = h2;
      else h2 = R[15];
      b = E.map(h2);
    }
    R[5] = l, R[6] = u, R[7] = d, R[8] = p, R[9] = m, R[10] = b, R[11] = v;
  } else b = R[10], v = R[11];
  if (v !== vn) return v;
  let F = b;
  const h = !!u, x = !!d;
  let B;
  if (R[16] !== F || R[17] !== h || R[18] !== x || R[19] !== m) B = e(Cu, { dim: h, italic: x, wrap: m, children: F }), R[16] = F, R[17] = h, R[18] = x, R[19] = m, R[20] = B;
  else B = R[20];
  return B;
});
function Ue(o) {
  let l = new J({ stringsEndAtLineFeed: true }).feed(o), u = [], d;
  for (let p of l) {
    if (p.type === "link") {
      if (p.action.type === "start") d = p.action.url;
      else d = void 0;
      continue;
    }
    if (p.type === "text") {
      let m = p.graphemes.map((h) => h.value).join("");
      if (!m) continue;
      let b = Qt(p.style);
      if (d) b.hyperlink = d;
      let v = u.at(-1);
      if (v && to(v.props, b)) v.text += m;
      else u.push({ text: m, props: b });
    }
  }
  return u;
}
function Qt(o) {
  return { color: We(o.fg), backgroundColor: We(o.bg), dim: o.dim ? true : void 0, bold: o.bold ? true : void 0, italic: o.italic ? true : void 0, underline: o.underline !== "none" ? true : void 0, strikethrough: o.strikethrough ? true : void 0, inverse: o.inverse ? true : void 0, hyperlink: void 0 };
}
var eo = { black: "ansi:black", red: "ansi:red", green: "ansi:green", yellow: "ansi:yellow", blue: "ansi:blue", magenta: "ansi:magenta", cyan: "ansi:cyan", white: "ansi:white", brightBlack: "ansi:blackBright", brightRed: "ansi:redBright", brightGreen: "ansi:greenBright", brightYellow: "ansi:yellowBright", brightBlue: "ansi:blueBright", brightMagenta: "ansi:magentaBright", brightCyan: "ansi:cyanBright", brightWhite: "ansi:whiteBright" };
function We(o) {
  switch (o.type) {
    case "named":
      return eo[o.name];
    case "indexed":
      return `ansi256(${o.index})`;
    case "rgb":
      return `rgb(${o.r},${o.g},${o.b})`;
    case "default":
      return;
  }
}
function to(o, r) {
  return o.color === r.color && o.backgroundColor === r.backgroundColor && o.bold === r.bold && o.dim === r.dim && o.italic === r.italic && o.underline === r.underline && o.strikethrough === r.strikethrough && o.inverse === r.inverse && o.hyperlink === r.hyperlink;
}
function Q(o) {
  return o.color !== void 0 || o.backgroundColor !== void 0 || o.dim === true || o.bold === true || o.italic === true || o.underline === true || o.strikethrough === true || o.inverse === true;
}
function me(o) {
  let r = w(14), l, u, d, p;
  if (r[0] !== o) ({ bold: l, dim: d, children: u, ...p } = o), r[0] = o, r[1] = l, r[2] = u, r[3] = d, r[4] = p;
  else l = r[1], u = r[2], d = r[3], p = r[4];
  if (d) {
    let m2;
    if (r[5] !== u || r[6] !== p) m2 = e(Cu, { ...p, dim: true, children: u }), r[5] = u, r[6] = p, r[7] = m2;
    else m2 = r[7];
    return m2;
  }
  if (l) {
    let m2;
    if (r[8] !== u || r[9] !== p) m2 = e(Cu, { ...p, bold: true, children: u }), r[8] = u, r[9] = p, r[10] = m2;
    else m2 = r[10];
    return m2;
  }
  let m;
  if (r[11] !== u || r[12] !== p) m = e(Cu, { ...p, children: u }), r[11] = u, r[12] = p, r[13] = m;
  else m = r[13];
  return m;
}
j();
j();
function fn() {
  let o = be(vk);
  if (!o) throw Error("useClock must be used within a ClockProvider");
  return o;
}
function Ge(o) {
  let r = w(37), l, u, d, p, m, b, v;
  if (r[0] !== o) ({ onAction: d, tabIndex: b, autoFocus: l, mountSettleMs: v, children: u, ref: p, ...m } = o), r[0] = o, r[1] = l, r[2] = u, r[3] = d, r[4] = p, r[5] = m, r[6] = b, r[7] = v;
  else l = r[1], u = r[2], d = r[3], p = r[4], m = r[5], b = r[6], v = r[7];
  let h = b === void 0 ? 0 : b, R = v === void 0 ? _6e : v, [x, E] = y(false), [A, T] = y(false), [M, I] = y(false), O = fn(), F = C(null), B;
  if (r[8] !== O) B = () => O.now(), r[8] = O, r[9] = B;
  else B = r[9];
  let [_] = y(B), U, L;
  if (r[10] === S) U = () => () => {
    F.current?.();
  }, L = [], r[10] = U, r[11] = L;
  else U = r[10], L = r[11];
  P(U, L);
  let D;
  if (r[12] !== O || r[13] !== d) D = (W) => {
    if (W.key === "return" || W.key === " ") W.preventDefault(), I(true), d(), F.current?.(), F.current = O.setTimeout(() => I(false), 100);
  }, r[12] = O, r[13] = d, r[14] = D;
  else D = r[14];
  let z = D, G;
  if (r[15] !== O || r[16] !== R || r[17] !== _ || r[18] !== d) G = (oe) => {
    if (oe.isWindowActivation || O.now() - _ < R) {
      oe.dropAsStray();
      return;
    }
    d();
  }, r[15] = O, r[16] = R, r[17] = _, r[18] = d, r[19] = G;
  else G = r[19];
  let xe = G, it;
  if (r[20] === S) it = (Ol) => E(true), r[20] = it;
  else it = r[20];
  let Go = it, st;
  if (r[21] === S) st = (Nl) => E(false), r[21] = st;
  else st = r[21];
  let Yo = st, lt;
  if (r[22] === S) lt = () => T(true), r[22] = lt;
  else lt = r[22];
  let Jo = lt, at;
  if (r[23] === S) at = () => T(false), r[23] = at;
  else at = r[23];
  let $o = at, ut;
  if (r[24] !== u || r[25] !== M || r[26] !== x || r[27] !== A) {
    let Zo = { focused: x, hovered: A, active: M };
    ut = typeof u === "function" ? u(Zo) : u;
    r[24] = u, r[25] = M, r[26] = x, r[27] = A, r[28] = ut;
  } else ut = r[28];
  let Re = ut, ct;
  if (r[29] !== l || r[30] !== Re || r[31] !== xe || r[32] !== z || r[33] !== p || r[34] !== m || r[35] !== h) ct = e(qc, { ref: p, tabIndex: h, autoFocus: l, onKeyDown: z, onClick: xe, onFocus: Go, onBlur: Yo, onMouseEnter: Jo, onMouseLeave: $o, hoverFollowsPaint: true, ...m, children: Re }), r[29] = l, r[30] = Re, r[31] = xe, r[32] = z, r[33] = p, r[34] = m, r[35] = h, r[36] = ct;
  else ct = r[36];
  return ct;
}
var KI = Ge;
j();
function rt() {
  return be($gr);
}
function GB(o) {
  let { children: r, fallback: l } = o;
  return rt() ? l ?? null : r;
}
function SIn(o, r) {
  if (typeof o === "function") {
    o(r);
    return;
  }
  if (o) o.current = r;
}
j();
function wk({ line: o, column: r, active: l, visible: u = false }) {
  let d = be(Ugr), p = C(null), m = de((b) => {
    p.current = b;
  }, []);
  return Xt(() => {
    let b = p.current;
    if (l && b) d({ relativeX: r, relativeY: o, node: b, visible: u });
    else d(null, b);
  }), Xt(() => () => {
    d(null, p.current);
  }, [d]), m;
}
function qe(o) {
  let r = w(30), l, u, d, p, m, b, v, h, R;
  if (r[0] !== o) ({ ref: m, autoFocus: v, disabled: h, onKeyDown: d, onPaste: p, caret: l, allowPrintableKeybindings: R, children: u, ...b } = o), r[0] = o, r[1] = l, r[2] = u, r[3] = d, r[4] = p, r[5] = m, r[6] = b, r[7] = v, r[8] = h, r[9] = R;
  else l = r[1], u = r[2], d = r[3], p = r[4], m = r[5], b = r[6], v = r[7], h = r[8], R = r[9];
  let x = v === void 0 ? false : v, E = h === void 0 ? false : h, A = R === void 0 ? false : R;
  const T = l?.line ?? 0, M = l?.column ?? 0, I = l !== void 0, O = l?.visible;
  let F;
  if (r[10] !== T || r[11] !== M || r[12] !== I || r[13] !== O) F = { line: T, column: M, active: I, visible: O }, r[10] = T, r[11] = M, r[12] = I, r[13] = O, r[14] = F;
  else F = r[14];
  let B = wk(F), _;
  if (r[15] !== B || r[16] !== m) _ = (U) => {
    B(U), SIn(m, U);
  }, r[15] = B, r[16] = m, r[17] = _;
  else _ = r[17];
  let L = _;
  if (E) {
    let D2;
    if (r[18] !== u || r[19] !== L || r[20] !== b) D2 = e(qc, { ref: L, ...b, children: u }), r[18] = u, r[19] = L, r[20] = b, r[21] = D2;
    else D2 = r[21];
    return D2;
  }
  const D = !A;
  let W;
  if (r[22] !== x || r[23] !== u || r[24] !== d || r[25] !== p || r[26] !== L || r[27] !== b || r[28] !== D) W = e(qc, { ref: L, tabIndex: 0, autoFocus: x, textEntry: D, onKeyDown: d, onPaste: p, ...b, children: u }), r[22] = x, r[23] = u, r[24] = d, r[25] = p, r[26] = L, r[27] = b, r[28] = D, r[29] = W;
  else W = r[29];
  return W;
}
var Jie = qe;
function eD(o) {
  let u = w(4), { count: r } = o, l = r === void 0 ? 1 : r, d;
  if (u[0] !== l) d = `
`.repeat(l), u[0] = l, u[1] = d;
  else d = u[1];
  let p;
  if (u[2] !== d) p = e("ink-text", { children: d }), u[2] = d, u[3] = p;
  else p = u[3];
  return p;
}
function yf(o) {
  let r = w(9), l, u, d;
  if (r[0] !== o) ({ children: u, fromLeftEdge: d, ...l } = o), r[0] = o, r[1] = l, r[2] = u, r[3] = d;
  else l = r[1], u = r[2], d = r[3];
  const p = d ? "stretch" : void 0, m = d ? "from-left-edge" : true;
  let b;
  if (r[4] !== l || r[5] !== u || r[6] !== p || r[7] !== m) b = e(qc, { alignSelf: p, ...l, noSelect: m, children: u }), r[4] = l, r[5] = u, r[6] = p, r[7] = m, r[8] = b;
  else b = r[8];
  return b;
}
function gUe(o) {
  let u = w(6), { lines: r, width: l } = o;
  if (r.length === 0) {
    return null;
  }
  let d;
  if (u[0] !== r) d = r.join(`
`), u[0] = r, u[1] = d;
  else d = u[1];
  let p;
  if (u[2] !== r.length || u[3] !== d || u[4] !== l) p = e("ink-raw-ansi", { rawText: d, rawWidth: l, rawHeight: r.length }), u[2] = r.length, u[3] = d, u[4] = l, u[5] = p;
  else p = u[5];
  return p;
}
j();
j();
function Qe(o, r) {
  if (!o?.yogaNode || !r) return null;
  let l = o.yogaNode.getComputedHeight(), u = r.rows, d = o.yogaNode.getComputedTop(), { parentNode: p, yogaNode: m } = o;
  while (p) {
    if (p.yogaNode) d += p.yogaNode.getComputedTop(), m = p.yogaNode;
    if ((p.style.overflowY ?? p.style.overflow) === "scroll" && p.scrollTopRendered === void 0) return null;
    if (p.scrollTop) d -= Ppe(p);
    p = p.parentNode;
  }
  let b = m.getComputedHeight(), v = d + l, h = b > u ? 1 : 0, R = Math.max(0, b - u) + h, x = R + u;
  if (l === 0) return d >= R && d < x;
  return v > R && d < x;
}
function UX() {
  let o = be(Mm), r = C(null), l = C({ isVisible: true }), u = de((h) => {
    if (r.current = h, h === null && !l.current.isVisible) l.current = { isVisible: true };
  }, []);
  function d() {
    let h = Qe(r.current, o);
    if (h === null) return l.current.isVisible;
    if (h !== l.current.isVisible) l.current = { isVisible: h };
    return h;
  }
  let p = C(d);
  p.current = d;
  let m = de(() => p.current(), []), b = C(o);
  b.current = o;
  let v = de(() => Qe(r.current, b.current), []);
  return Xt(() => {
    d();
  }), [u, l.current, m, v];
}
var Io = 480;
function hUe(o) {
  return i.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ? Math.max(o, Io) : o;
}
function ja(o = 16) {
  let r = be(vk), [l, { isVisible: u }, d] = UX(), p = Ope(), m = C(p), b = u;
  if (m.current !== p) m.current = p, b = d();
  let v = !!r && b && o !== null, h = o === null ? null : Math.ceil(hUe(o) / Sh) * Sh, R = C(0), x = kt(v ? r.subscribeKeepAlive : S6e, () => v ? R.current = Math.max(R.current, Math.floor(r.now() / h) * h) : R.current);
  return [l, x];
}
j();
var Bo = () => be(Eg), BR = Bo;
j();
function zB(o, r) {
  let l = be(vk), u = C(o);
  u.current = o;
  let d = C(null), p = de((b) => () => d.current?.(), []);
  kt(p, qgr);
  let m = l?.setTimeout ?? nD;
  return ee(() => {
    let b = (...v) => {
      d.current?.(), d.current = m(() => {
        d.current = null, u.current(...v);
      }, r);
    };
    return b.cancel = () => {
      d.current?.(), d.current = null;
    }, b;
  }, [m, r]);
}
j();
var et = () => () => {
};
function HPe() {
  let { focusManager: o, rootNode: r } = be(Eg), l = kt(o?.subscribe ?? et, () => o?.activeElement ?? null);
  return ee(() => ({ activeElement: l, focusNext: () => {
    if (o && r) o.focusNext(r);
  }, focusPrevious: () => {
    if (o && r) o.focusPrevious(r);
  }, focusDirection: (u) => {
    if (o && r) return o.focusDirection(u, r);
    return false;
  }, focus: (u) => o?.focus(u), blur: () => o?.blur(), subscribe: o?.subscribe ?? et }), [l, o, r]);
}
j();
var Lo = () => () => {
};
function Wee(o) {
  let { focusManager: r } = be(Eg);
  return kt(r?.subscribe ?? Lo, () => {
    let l = o.current, u = r?.activeElement;
    if (!l || !u) return false;
    return MW(u, l);
  }, () => false);
}
j();
function Zi() {
  return be(Bgr) ?? Uo;
}
function Uo() {
  return Date.now();
}
j();
function Mgr(o) {
  let r = be(vk), l = o === null ? null : Math.ceil(hUe(o) / Sh) * Sh, u = C(null), d = ee(() => {
    if (!r || l === null) return S6e;
    return (p) => r.subscribeFollower(() => {
      u.current = r.now(), p();
    });
  }, [r, l]);
  return kt(d, () => {
    if (!r || l === null) return u.current = null, 0;
    if (u.current === null) u.current = r.now();
    return Math.floor(u.current / l) * l;
  });
}
function Ta(o, r, l) {
  let u = C(o);
  u.current = o;
  let d = be(vk), p = l?.immediate ?? false, m = C(null), b = ee(() => !d || r === null ? (v) => (m.current = null, () => {
  }) : (v) => {
    if (p && m.current === null) u.current();
    return m.current = r, LPe(d, () => u.current(), r);
  }, [d, r, p]);
  kt(b, qgr);
}
function LPe(o, r, l) {
  let u = false, d, p = () => {
    if (u) return;
    try {
      r();
    } finally {
      if (!u) d = o.setTimeout(p, l);
    }
  };
  return d = o.setTimeout(p, l), () => {
    u = true, d();
  };
}
j();
function Ml(o) {
  let { subscribeLayout: r } = be(Eg), l = kt(r, o), [, u] = Qh((d) => d + 1, 0);
  return Xt(() => {
    if (!Object.is(o(), l)) u();
  }), l;
}
j();
function Dgr(o) {
  let { retainFinePointer: r } = be(Eg);
  P(() => o ? r() : void 0, [o, r]);
}
j();
function tt(o) {
  if (!o?.yogaNode) return;
  if (o.yogaNode.getDisplay() === 1) return null;
  let r = 0, l = o;
  for (; ; ) {
    let u = l.parentNode;
    if (!u?.yogaNode || !l.yogaNode) return;
    r += l.yogaNode.getComputedTop();
    let d = u.parentNode;
    if (d?.yogaNode !== void 0 && (d.style.overflowY ?? d.style.overflow) === "scroll") return Wo(o, d, { top: u.yogaNode.getComputedTop() + r, itemTop: u.yogaNode.getComputedTop() + l.yogaNode.getComputedTop(), itemHeight: l.yogaNode.getComputedHeight() });
    l = u;
  }
}
function Wo(o, r, l) {
  let { scrollTopRendered: u, yogaNode: d } = r, p = o.yogaNode?.getComputedHeight();
  if (u === void 0 || !d || !p) return;
  let m = d.getComputedBorder(1), b = d.getComputedHeight() - d.getComputedBorder(3), v = m + d.getComputedPadding(1), h = b - d.getComputedPadding(3), R = l.top - u, x = l.itemTop - u, E = x + l.itemHeight <= v || x >= h, A = Math.max(R, m), T = Math.min(R + p, b);
  return E || A >= T ? null : { first: A - R, last: T - R - 1, of: p };
}
function Hgr(o, r) {
  let { subscribeFrames: l } = be(Eg), u = C(null), d = C({ rows: r, lastRows: void 0, contentRows: void 0 }), p = kt(de((m) => o ? l(m) : () => {
  }, [o, l]), de(() => {
    if (!o) return;
    let m = u.current?.yogaNode?.getComputedHeight(), b = u.current?.childNodes.reduce((A, T) => A + (T.yogaNode?.getComputedHeight() ?? 0), 0), v = tt(u.current), h = d.current, R = v === void 0 || v === h.rows || !!v && !!h.rows && v.first === h.rows.first && v.last === h.rows.last && v.of === h.rows.of, x = m === void 0 ? void 0 : b;
    if (!(R && x === h.contentRows)) d.current = { rows: R ? h.rows : v, lastRows: m || h.lastRows, contentRows: x };
    else if (m) h.lastRows = m;
    return d.current;
  }, [o]));
  return [u, p?.rows, p?.lastRows, p?.contentRows];
}
j();
function jR() {
  be(Lwe);
  let o = Ws().get(process.stdout);
  return ee(() => {
    if (!o) return { copySelection: () => "", copySelectionNoClear: () => "", getSelectedText: () => "", clearSelection: () => {
    }, hasSelection: () => false, getState: () => null, subscribe: () => () => {
    }, moveFocus: () => {
    }, setSelectionBgColor: () => {
    } };
    return { copySelection: () => o.copySelection(), copySelectionNoClear: () => o.copySelectionNoClear(), getSelectedText: () => o.getSelectedText(), clearSelection: () => o.clearTextSelection(), hasSelection: () => o.hasTextSelection(), getState: () => o.selection, subscribe: (r) => o.subscribeToSelectionChange(r), moveFocus: (r) => o.moveSelectionFocus(r), setSelectionBgColor: (r) => o.setSelectionBgColor(r) };
  }, [o]);
}
var Ho = () => () => {
}, jo = () => false;
function Lgr(o = true) {
  be(Lwe);
  let r = o ? Ws().get(process.stdout) : void 0;
  return kt(r ? r.subscribeToSelectionChange : Ho, r ? r.hasTextSelection : jo);
}
j();
var K = (o, r, l) => ({ type: "rgb", r: o, g: r, b: l }), Vo = { idle: { indicator: K(0, 215, 95), status: "Idle", statusColor: K(136, 136, 136) }, busy: { indicator: K(255, 149, 0), status: "Working…", statusColor: K(255, 149, 0) }, waiting: { indicator: K(95, 135, 255), status: "Waiting", statusColor: K(95, 135, 255) } };
function wIn(o, r) {
  let l = be(HW), u = C(null);
  P(() => {
    if (o === null) {
      if (u.current !== null && l && Tan()) l(xD(Tqn));
      u.current = null;
      return;
    }
    if (u.current = o, !l || !Tan()) return;
    let d = Vo[o], p = o === "idle" && r !== void 0 ? { ...d, status: r } : d;
    l(xD(VUs(p)));
  }, [o, r, l]);
}
j();
function NPe(o) {
  let r = be(HW);
  P(() => {
    if (o === null || !r) return;
    let l = yn(o);
    r(t_(gm.SET_TITLE_AND_ICON, l));
  }, [o, r]);
}
j();
var Ko = () => false;
function Kr(o, r, l) {
  let u = be(vk), d = typeof o === "function", p = d ? o : null, m = d ? r : o, b = d ? void 0 : r, v = C(p);
  v.current = p;
  let h = C(null), R = u?.setTimeout ?? nD, x = ee(() => {
    if (m === null) return S6e;
    let A = (T) => (h.current = null, T(), R(() => {
      if (h.current = A, d) v.current?.();
      else T();
    }, m));
    return A;
  }, [R, m, d, b, ...l ?? []]), E = kt(x, d ? Ko : () => h.current === x);
  if (!d) return E;
}
var zo = (o) => ({ width: o.yogaNode?.getComputedWidth() ?? 0, height: o.yogaNode?.getComputedHeight() ?? 0 }), Ys = zo;
function BX(o, r) {
  let l = 0, u = o;
  while (u !== void 0 && u !== r) l += u.yogaNode?.getComputedTop() ?? 0, u = u.parentNode;
  return u === r ? l : -1;
}
function ve(o, r) {
  let l = wc(re, null, wc(EIn, null, wc(lPt, null, wc(Ee, null, o))));
  return r !== void 0 ? wc(aPt, { ...r, children: l }) : l;
}
function ot() {
  return { nativeCursor: kF(), atlasRecorder: Pe() };
}
async function KB(o, r, l) {
  let u = l?.storageV5 !== void 0 ? Awt(l.storageV5) : void 0;
  if (r !== void 0 && "write" in r) return se(ve(o, u), r);
  return se(ve(o, u), { ...ot(), ...r });
}
var nt = /* @__PURE__ */ new WeakMap();
async function yUe(o, r) {
  let l = await we({ ...ot(), ...o }), u = r?.storageV5 !== void 0 ? Awt(r.storageV5) : void 0, d = { ...l, render: (m) => l.render(ve(m, u)) }, p = Ws().get(o?.stdout ?? process.stdout);
  if (p) nt.set(p, d);
  return d;
}
function Jno(o = process.stdout) {
  let r = Ws().get(o);
  return r && nt.get(r);
}
export {
  BR,
  BX,
  Dgr,
  F8t,
  GB,
  HPe,
  Hgr,
  Jie,
  Jno,
  KB,
  KI,
  Kr,
  LPe,
  Lgr,
  Mgr,
  Ml,
  NPe,
  Ogr,
  SIn,
  Ta,
  U8t,
  UX,
  Ult,
  Wee,
  Ys,
  Yt,
  Zi,
  _i,
  eD,
  fn,
  gP,
  gUe,
  hUe,
  jR,
  ja,
  n,
  ofs,
  rt,
  s,
  ts,
  wIn,
  wk,
  yUe,
  yf,
  z2,
  zB
};
