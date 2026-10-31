// ui/chunk-2bwm2gye.js — Claude Code 2.1.310 模块 chunk-2bwm2gye.js
import { s, GR } from "../telemetry/render-glyph-cardinality.7car.js";
import { w } from "./chunk-zqxc4qtb.js";
import { an, J5 } from "../shared/chunk-vj9gqe2s.js";
import { qs } from "../shared/action-not-found.hpy9.js";
import { cs } from "../shared/chunk-bezz9j8a.js";
import { Ce } from "../shared/chunk-9vjqn6fm.js";
import { RT } from "../shared/chunk-5gjnrzjz.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
import { Gt, de, Se, te, A, y, j } from "../vendor/react/chunk-s8vmszp2.js";
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
