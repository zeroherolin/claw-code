// darwin/shared/chunk-c984f251.js — Claude Code 2.1.310（darwin）模块 chunk-y8kgx796.js
import { i } from "./environment.js";
import { re, Ze, WM, qg } from "./chunk-d2c47492.js";
import { Dot } from "../permissions/quota-auto-resume-disabled.js";
import { js } from "../settings/chunk-9121eb73.js";
import { UFe, Sz } from "./chunk-5acf247e.js";
var y = /* @__PURE__ */ new Map();
function g8e() {
  let t = i.LC_ALL || i.LC_TIME || i.LANG || "";
  if (y.has(t)) return y.get(t);
  let e = b(t);
  return y.set(t, e), e;
}
function b(t) {
  if (!t || t === "C" || t === "POSIX") return;
  let e = Ze(Ze(t, "."), "@");
  if (!e) return;
  let r = e.replaceAll("_", "-");
  try {
    return new Intl.DateTimeFormat(r), r;
  } catch {
    return;
  }
}
var I = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23", timeZoneName: "short" }, M = { weekday: "short", calendar: "gregory" }, N = { weekday: "long", calendar: "gregory" }, x = { month: "short", calendar: "gregory" }, _ = { month: "long", calendar: "gregory" };
function P(t, e, { locale: r, timeZone: s }) {
  let g = Sz("en-US", UFe(I, s)).formatToParts(e), o = {};
  for (let T of g) o[T.type] = T.value;
  let u = Number(o.year), n = Number(o.month), c = Number(o.day), m = Number(o.hour), p = (m + 11) % 12 + 1, h = new Date(Date.UTC(u, n - 1, c)).getUTCDay();
  return t.replace(/%(-?)([\s\S])/g, (T, f, O) => {
    switch (O) {
      case "Y":
        return String(u);
      case "y":
        return a(u % 100, f);
      case "C":
        return a(Math.floor(u / 100), f);
      case "m":
        return a(n, f);
      case "d":
        return a(c, f);
      case "e":
        return D(c, f);
      case "j":
        return A(Z(u, n, c), f);
      case "u":
        return String(h === 0 ? 7 : h);
      case "w":
        return String(h);
      case "H":
        return a(m, f);
      case "k":
        return D(m, f);
      case "I":
        return a(p, f);
      case "l":
        return D(p, f);
      case "M":
        return a(Number(o.minute), f);
      case "S":
        return a(Number(o.second), f);
      case "p":
        return m < 12 ? "AM" : "PM";
      case "P":
        return m < 12 ? "am" : "pm";
      case "s":
        return String(Math.floor(e.getTime() / 1e3));
      case "a":
        return d(e, r, s, M);
      case "A":
        return d(e, r, s, N);
      case "b":
      case "h":
        return d(e, r, s, x);
      case "B":
        return d(e, r, s, _);
      case "Z":
        return o.timeZoneName ?? "";
      case "z":
        return k(e, u, n, c, m, o);
      case "F":
        return `${u}-${a(n, "")}-${a(c, "")}`;
      case "D":
        return `${a(n, "")}/${a(c, "")}/${a(u % 100, "")}`;
      case "T":
        return `${a(m, "")}:${o.minute}:${o.second}`;
      case "R":
        return `${a(m, "")}:${o.minute}`;
      case "r":
        return `${a(p, "")}:${o.minute}:${o.second} ${m < 12 ? "AM" : "PM"}`;
      case "%":
        return "%";
      default:
        return T;
    }
  });
}
function a(t, e) {
  return e ? String(t) : String(t).padStart(2, "0");
}
function A(t, e) {
  return e ? String(t) : String(t).padStart(3, "0");
}
function D(t, e) {
  return e ? String(t) : String(t).padStart(2, " ");
}
function Z(t, e, r) {
  return (Date.UTC(t, e - 1, r) - Date.UTC(t, 0, 1)) / 864e5 + 1;
}
function d(t, e, r, s) {
  return Sz(e, UFe(s, r)).format(t);
}
function k(t, e, r, s, g, o) {
  let u = Date.UTC(e, r - 1, s, g, Number(o.minute), Number(o.second)), n = Math.floor(t.getTime() / 1e3) * 1e3, c = Math.round((u - n) / 6e4), m = c < 0 ? "-" : "+", p = Math.abs(c);
  return `${m}${String(Math.floor(p / 60)).padStart(2, "0")}${String(p % 60).padStart(2, "0")}`;
}
var F = 100;
function bvr(t) {
  return re(WM(qg(t)), F);
}
function C(t, e) {
  let r = Dot.find((o) => o === t);
  if (r === "24-hour-utc") return { kind: "preset", preset: r, timeZone: "UTC" };
  let s = L(e);
  if (r) return { kind: "preset", preset: r, timeZone: s };
  let g = bvr(t);
  return g.includes("%") ? { kind: "pattern", pattern: g, timeZone: s } : { kind: "preset", preset: "auto", timeZone: s };
}
function L(t) {
  if (!t) return;
  try {
    return Sz("en-US", { timeZone: t }), t;
  } catch {
    return;
  }
}
function S(t, e, r) {
  switch (e) {
    case "auto":
      return UFe(t, r);
    case "12-hour":
      return UFe({ ...t, hourCycle: "h12" }, r);
    case "24-hour":
    case "24-hour-utc":
      return UFe({ ...t, hourCycle: "h23" }, r);
  }
}
function wvr(t, e, r, s) {
  let g = Sz(r, S(e, t.preset, t.timeZone));
  if (t.preset !== "24-hour-utc") return g.format(s);
  let o = g.formatToParts(s), u = o.findLastIndex((n) => n.type === "minute" || n.type === "second");
  return o.map((n, c) => c === u ? `${n.value}Z` : n.value).join("");
}
function l(t, e, r, s) {
  return re(P(t, r, { locale: s, timeZone: e }), F);
}
var E = { "2-digit": { hour: "2-digit", minute: "2-digit", hourCycle: "h12" }, numeric: { hour: "numeric", minute: "2-digit", hourCycle: "h12" } };
function CCs(t, e, r, s = "2-digit") {
  return t.kind === "pattern" ? l(t.pattern, t.timeZone, e, r) : wvr(t, E[s], "en-US", e);
}
var R = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23", timeZoneName: "short" };
function TCs(t, e, r, s) {
  let g = t.timeZone ?? s;
  if (t.kind === "pattern") return l(t.pattern, g, e, r);
  let o = S(R, t.preset, g), u = Sz("en-US", o).formatToParts(e), n = {};
  for (let p of u) n[p.type] = p.value;
  let c = n.dayPeriod ? ` ${n.dayPeriod}` : "", m = "";
  if (t.preset === "24-hour-utc") m = "Z";
  else if (n.timeZoneName) m = ` ${n.timeZoneName}`;
  return `${n.year}-${n.month}-${n.day} ${n.hour}:${n.minute}:${n.second}${c}${m}`;
}
function vMt() {
  return C(js("timeFormat", "auto").value, js("timeZone", "").value);
}
function ACs(t, e, r) {
  return l(t, e, r, g8e());
}
export {
  ACs,
  CCs,
  TCs,
  bvr,
  g8e,
  vMt,
  wvr
};
