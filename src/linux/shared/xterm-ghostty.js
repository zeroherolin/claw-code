// linux/shared/xterm-ghostty.js — Claude Code 2.1.310（linux）模块 chunk-0grh2x0w.js
import { i } from "./environment.js";
var l = ["·", "✢", "✳", "✶", "✻", "✻"], g = ["·", "✢", "✳", "✶", "✻", "✽"], p = ["·", "✢", "*", "✶", "✻", "✽"], d = [...l, ...l.toReversed()], y = [...g, ...g.toReversed()], f = [...p, ...p.toReversed()];
function bIn() {
  if (i.TERM === "xterm-ghostty") return l;
  return p;
}
function pUe() {
  if (i.TERM === "xterm-ghostty") return d;
  return f;
}
var T = 8;
function UR(r) {
  return Math.round(r * T) / T;
}
function L8t(r) {
  return UR(r / 360) * 360;
}
function mUe(r, t) {
  return (1 - Math.cos(2 * Math.PI * r / t)) / 2;
}
function x_(r, t, a) {
  return { r: Math.round(r.r + (t.r - r.r) * a), g: Math.round(r.g + (t.g - r.g) * a), b: Math.round(r.b + (t.b - r.b) * a) };
}
function Yg(r) {
  return `rgb(${r.r},${r.g},${r.b})`;
}
function N8t(r) {
  let t = (r % 360 + 360) % 360, a = 0.7, m = 0.6, e = (1 - Math.abs(0.19999999999999996)) * 0.7, n = e * (1 - Math.abs(t / 60 % 2 - 1)), R = 0.6 - e / 2, o = 0, s = 0, u = 0;
  if (t < 60) o = e, s = n;
  else if (t < 120) o = n, s = e;
  else if (t < 180) s = e, u = n;
  else if (t < 240) s = n, u = e;
  else if (t < 300) o = n, u = e;
  else o = e, u = n;
  return { r: Math.round((o + R) * 255), g: Math.round((s + R) * 255), b: Math.round((u + R) * 255) };
}
function dw(r) {
  let t = r.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
  return t ? { r: parseInt(t[1], 10), g: parseInt(t[2], 10), b: parseInt(t[3], 10) } : null;
}
export {
  L8t,
  N8t,
  UR,
  Yg,
  bIn,
  dw,
  mUe,
  pUe,
  x_
};
