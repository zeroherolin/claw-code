// linux/shared/chunk-4ef913a6.js — Claude Code 2.1.310（linux）模块 chunk-90gdrs86.js
import { w } from "../ui/chunk-0ed4c357.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { Gt, be, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
var c = 10, a = { ring: [], mode: { type: "idle" } };
function h(n, i) {
  switch (i.type) {
    case "kill": {
      if (i.text.length === 0) return n.mode.type === "idle" ? n : { ...n, mode: { type: "idle" } };
      return { ring: n.mode.type === "killing" && n.ring.length > 0 ? [i.direction === "prepend" ? i.text + n.ring[0] : n.ring[0] + i.text, ...n.ring.slice(1)] : [i.text, ...n.ring].slice(0, c), mode: { type: "killing" } };
    }
    case "yank":
      return { ...n, mode: { type: "yanked", start: i.start, length: i.length, index: 0 } };
    case "yankPop": {
      if (n.mode.type !== "yanked" || n.ring.length <= 1) return n;
      let r = (n.mode.index + 1) % n.ring.length;
      return { ...n, mode: { ...n.mode, index: r } };
    }
    case "updateYankLength":
      if (n.mode.type !== "yanked") return n;
      return { ...n, mode: { ...n.mode, length: i.length } };
    case "interrupt":
      if (n.mode.type === "idle") return n;
      return { ...n, mode: { type: "idle" } };
  }
}
function Blt(n) {
  return n.ring[0] ?? "";
}
function AIn(n) {
  if (n.mode.type !== "yanked" || n.ring.length <= 1) return null;
  let i = (n.mode.index + 1) % n.ring.length, { start: r, length: t } = n.mode;
  return { text: n.ring[i] ?? "", start: r, length: t };
}
function Ngr() {
  let n = a;
  return { get state() {
    return n;
  }, dispatch(i) {
    n = h(n, i);
  } };
}
var l = Gt(null);
function lPt(n) {
  let t = w(5), { handle: i, children: r } = n, p;
  if (t[0] !== i) p = () => i ?? Ngr(), t[0] = i, t[1] = p;
  else p = t[1];
  let [x] = y(p);
  const d = i ?? x;
  let u;
  if (t[2] !== r || t[3] !== d) u = e(l.Provider, { value: d, children: r }), t[2] = r, t[3] = d, t[4] = u;
  else u = t[4];
  return u;
}
function y6e() {
  let n = be(l);
  if (!n) {
    throw ReferenceError("useKillRing cannot be called outside of a <KillRingProvider /> (mounted around every Ink root by src/ink.ts)");
  }
  return n;
}
export {
  AIn,
  Blt,
  Ngr,
  lPt,
  y6e
};
