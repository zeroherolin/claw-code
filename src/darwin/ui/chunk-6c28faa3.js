// darwin/ui/chunk-6c28faa3.js — Claude Code 2.1.310（darwin）模块 chunk-2bwm2gye.js
import { s, GR } from "../telemetry/render-glyph-cardinality.js";
import { w } from "./chunk-0ed4c357.js";
import { an, J5 } from "../shared/chunk-76877d92.js";
import { qs } from "../shared/action-not-found.c239.js";
import { cs } from "../shared/chunk-9bbd1b38.js";
import { Ce } from "../shared/chunk-bdaaea45.js";
import { RT } from "../shared/chunk-9faca596.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { Gt, de, Se, te, A, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function ds(a, o, n = true) {
  let { handleInterrupt: r, handleExit: t, exitState: i } = b(o, a), l = te(() => ({ "app:interrupt": r, "app:exit": t }), [r, t]);
  return an(l, { context: "Global", isActive: n }), i;
}
function sPt(a, o, n = true) {
  let { handleInterrupt: r, handleExit: t, exitState: i } = b(o, a);
  return { entries: te(() => n ? [{ action: "app:interrupt", run: r }, { action: "app:exit", run: t }] : [], [n, r, t]), exitState: i };
}
function b(a, o) {
  let { exit: n } = GR(), [r, t] = y({ pending: false, keyName: null }), i = te(() => o ?? n, [o, n]), l = RT(), p = qs("app:interrupt", "Global", "Ctrl-C"), u = qs("app:exit", "Global", "Ctrl-D"), E = l && p ? p : "Ctrl-C", C = l && u ? u : "Ctrl-D", m = J5((x) => t({ pending: x, keyName: E }), i), d = J5((x) => t({ pending: x, keyName: C }), i), h = de(() => {
    if (a?.()) return;
    m();
  }, [m, a]), D = de(() => {
    d();
  }, [d]);
  return { handleInterrupt: h, handleExit: D, exitState: r };
}
j();
var c = Gt(null), Xz = 1;
function Llt(a) {
  let i = w(8), { reserve: o, children: n } = a, r = A(null), { rows: t } = cs(Ce()), l;
  if (i[0] !== o || i[1] !== t) l = { box: r, rows: t, reserve: o }, i[0] = o, i[1] = t, i[2] = l;
  else l = i[2];
  let p;
  if (i[3] !== n) p = e(s, { ref: r, flexDirection: "column", children: n }), i[3] = n, i[4] = p;
  else p = i[4];
  let u;
  if (i[5] !== l || i[6] !== p) u = e(c, { value: l, children: p }), i[5] = l, i[6] = p, i[7] = u;
  else u = i[7];
  return u;
}
function Jz() {
  return Se(c);
}
export {
  Jz,
  Llt,
  Xz,
  ds,
  sPt
};
