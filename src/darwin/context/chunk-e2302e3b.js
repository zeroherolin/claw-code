// darwin/context/chunk-e2302e3b.js — Claude Code 2.1.310（darwin）模块 chunk-d05584w8.js
import { w } from "../ui/chunk-0ed4c357.js";
import { xu } from "../terminal/ink-renderer.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { LJ, VB } from "../telemetry/keybinding-customization-release.js";
import { te, j } from "../vendor/react/chunk-9a0b1ced.js";
import { b } from "../vendor/react/chunk-0b0bf45d.js";
j();
var D = { default: { keyCase: "title", modCase: "lower", caretCtrl: false, modSep: "+", arrowSep: "/", chordSep: " ", shiftAsCase: false, charCase: "preserve", platform: "other" }, compact: { keyCase: "lower", modCase: "lower", caretCtrl: true, modSep: "+", arrowSep: "", chordSep: " ", shiftAsCase: true, charCase: "preserve", platform: "other" }, symbol: { keyCase: "glyph", modCase: "glyph", caretCtrl: false, modSep: "", arrowSep: "", chordSep: " ", shiftAsCase: true, charCase: "upper", platform: "other" } };
function N(t) {
  let { style: o, ...s } = t;
  return { ...D[o ?? "default"], ..._(s) };
}
function _(t) {
  let o = {};
  for (let s in t) if (t[s] !== void 0) o[s] = t[s];
  return o;
}
function Ugr(t, o = {}) {
  let s = N(o), n = (i) => W(i, s), a = (i) => i.map(n).join(s.chordSep);
  if (t.length === 0) return "";
  if (t.length === 1) return a(t[0]);
  let l = t.every((i) => i.length === 1) ? t.map((i) => i[0]) : void 0;
  if (!l) return t.map(a).join("/");
  let p = X(l, s), c = l.every((i) => Y.has(i.key)) && (!!p || l.every((i) => g(i, s).length === 0)) ? s.arrowSep : "/";
  if (p) {
    let i = l.map((f) => n({ ...f, ...z }));
    return J(p, s) + i.join(c);
  }
  return l.map(n).join(c);
}
var B = { enter: ["Enter", "enter", "⏎"], escape: ["Esc", "esc", "⎋"], tab: ["Tab", "tab", "⇥"], " ": ["Space", "space", "␣"], backspace: ["Backspace", "backspace", "⌫"], delete: ["Delete", "delete", "⌦"], up: ["↑", "↑", "↑"], down: ["↓", "↓", "↓"], left: ["←", "←", "←"], right: ["→", "→", "→"], pageup: ["PageUp", "pgup", "⇞"], pagedown: ["PageDown", "pgdn", "⇟"], home: ["Home", "home", "↖"], end: ["End", "end", "↘"] }, U = { title: 0, lower: 1, glyph: 2 }, H = { ctrl: { lower: "ctrl", title: "Ctrl", glyph: "⌃" }, shift: { lower: "shift", title: "Shift", glyph: "⇧" }, alt: { lower: (t) => t === "macos" ? "opt" : "alt", title: (t) => t === "macos" ? "Opt" : "Alt", glyph: "⌥" }, super: { lower: (t) => t === "macos" ? "cmd" : "super", title: (t) => t === "macos" ? "Cmd" : "Super", glyph: "⌘" } }, Y = /* @__PURE__ */ new Set(["up", "down", "left", "right"]), z = { ctrl: false, alt: false, shift: false, meta: false, super: false };
function C(t) {
  let o = [];
  if (t.ctrl) o.push("ctrl");
  if (t.shift) o.push("shift");
  if (t.alt || t.meta) o.push("alt");
  if (t.super) o.push("super");
  return o;
}
function y(t, o) {
  let s = H[t][o.modCase];
  return typeof s === "function" ? s(o.platform) : s;
}
function I(t, o) {
  let s = B[t];
  if (s) return s[U[o.keyCase]];
  return o.charCase === "upper" ? t.toUpperCase() : t;
}
function R(t) {
  return t.shift && !t.ctrl && !t.alt && !t.meta && !t.super && t.key.length === 1 && t.key >= "a" && t.key <= "z";
}
function W(t, o) {
  if (o.shiftAsCase && R(t)) return t.key.toUpperCase();
  let s = C(t), n = I(t.key, o);
  if (o.caretCtrl && s.length === 1 && s[0] === "ctrl") return `^${n}`;
  if (o.modCase === "glyph") return s.map((a) => y(a, o)).join("") + n;
  return [...s.map((a) => y(a, o)), n].join(o.modSep);
}
function X(t, o) {
  let [s, ...n] = t;
  if (!g(s, o).length) return;
  return n.every((l) => G(s, l, o)) ? s : void 0;
}
function g(t, o) {
  if (o.shiftAsCase && R(t)) return [];
  return C(t);
}
function G(t, o, s) {
  let n = g(t, s), a = g(o, s);
  return n.length === a.length && n.every((l, p) => l === a[p]);
}
function J(t, o) {
  let s = C(t);
  if (o.caretCtrl && s.length === 1 && s[0] === "ctrl") return "^";
  if (o.modCase === "glyph") return s.map((n) => y(n, o)).join("");
  return s.map((n) => y(n, o)).join(o.modSep) + o.modSep;
}
function q(t) {
  let f = w(15), { chord: o, action: s, format: n, parens: a, bold: l, terse: p } = t, x = a === void 0 ? false : a, c = l === void 0 ? false : l, i = p === void 0 ? false : p, T;
  if (f[0] === b) T = v(), f[0] = T;
  else T = f[0];
  let ee = T, F;
  if (f[1] !== o || f[2] !== n) F = P(o, n, ee), f[1] = o, f[2] = n, f[3] = F;
  else F = f[3];
  let u = F;
  if (!u) {
    return null;
  }
  let L;
  if (f[4] !== c || f[5] !== u) L = c ? e(xu, { bold: true, children: u }) : u, f[4] = c, f[5] = u, f[6] = L;
  else L = f[6];
  let d = L, m = i ? " " : " to ";
  if (x) {
    let h2;
    if (f[7] !== s || f[8] !== m || f[9] !== d) h2 = r(xu, { children: ["(", d, m, s, ")"] }), f[7] = s, f[8] = m, f[9] = d, f[10] = h2;
    else h2 = f[10];
    return h2;
  }
  let h;
  if (f[11] !== s || f[12] !== m || f[13] !== d) h = r(xu, { children: [d, m, s] }), f[11] = s, f[12] = m, f[13] = d, f[14] = h;
  else h = f[14];
  return h;
}
function YI({ chord: t, action: o, format: s, parens: n = false, terse: a = false }) {
  let l = P(t, s, v());
  if (!l) return "";
  let p = `${l}${a ? " " : " to "}${o}`;
  return n ? `(${p})` : p;
}
function v() {
  return VB() === "macos" ? "macos" : "other";
}
function P(t, o, s) {
  let n = (typeof t === "string" ? [t] : t).filter((a) => a !== "");
  return Ugr(n.map(LJ), { ...o, platform: o?.platform ?? s });
}
export {
  Ugr,
  YI,
  q
};
