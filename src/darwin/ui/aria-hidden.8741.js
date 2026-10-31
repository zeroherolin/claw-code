// darwin/ui/aria-hidden.8741.js — Claude Code 2.1.310（darwin）模块 chunk-by9cd5fw.js
import { w } from "./chunk-0ed4c357.js";
import { s, n, hp } from "../telemetry/render-glyph-cardinality.js";
import { Y5 } from "./chunk-9e5020d7.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { Gt, Se, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
j();
function Ge(m) {
  let a = w(11), { children: t, height: c, screenReaderLabel: i } = m;
  if (Se(o)) {
    return t;
  }
  const R = i === void 0;
  let d;
  if (a[0] !== i || a[1] !== R) d = e(hp, { fromLeftEdge: true, flexShrink: 0, children: r(n, { "aria-hidden": R, "aria-label": i, dimColor: true, children: ["  ", "⎿  "] }) }), a[0] = i, a[1] = R, a[2] = d;
  else d = a[2];
  let l;
  if (a[3] !== t) l = e(s, { flexShrink: 1, flexGrow: 1, children: t }), a[3] = t, a[4] = l;
  else l = a[4];
  let x;
  if (a[5] !== c || a[6] !== d || a[7] !== l) x = e(f, { children: r(s, { flexDirection: "row", height: c, overflowY: "hidden", children: [d, l] }) }), a[5] = c, a[6] = d, a[7] = l, a[8] = x;
  else x = a[8];
  let h = x;
  if (c !== void 0) {
    return h;
  }
  let L;
  if (a[9] !== h) L = e(Y5, { lock: "offscreen", children: h }), a[9] = h, a[10] = L;
  else L = a[10];
  return L;
}
var o = Gt(false);
function Dlt() {
  return Se(o);
}
function f(m) {
  let c = w(2), { children: t } = m, i;
  if (c[0] !== t) i = e(o.Provider, { value: true, children: t }), c[0] = t, c[1] = i;
  else i = c[1];
  return i;
}
export {
  Dlt,
  Ge
};
