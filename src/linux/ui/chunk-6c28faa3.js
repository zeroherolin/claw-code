// linux/ui/chunk-6c28faa3.js — Claude Code 2.1.310（linux）模块 chunk-vgsmcxaz.js
import { s, BR } from "../telemetry/render-glyph-cardinality.js";
import { w } from "./chunk-0ed4c357.js";
import { an, B6 } from "../shared/chunk-76877d92.js";
import { qs } from "../shared/action-not-found.c239.js";
import { ds } from "../shared/chunk-9bbd1b38.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { TA } from "../shared/chunk-9faca596.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { Gt, de, be, ee, C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function ls(a, o, n = true) {
  let { handleInterrupt: r, handleExit: t, exitState: i } = b(o, a), l = ee(() => ({ "app:interrupt": r, "app:exit": t }), [r, t]);
  return an(l, { context: "Global", isActive: n }), i;
}
function Uxt(a, o, n = true) {
  let { handleInterrupt: r, handleExit: t, exitState: i } = b(o, a);
  return { entries: ee(() => n ? [{ action: "app:interrupt", run: r }, { action: "app:exit", run: t }] : [], [n, r, t]), exitState: i };
}
function b(a, o) {
  let { exit: n } = BR(), [r, t] = y({ pending: false, keyName: null }), i = ee(() => o ?? n, [o, n]), l = TA(), p = qs("app:interrupt", "Global", "Ctrl-C"), u = qs("app:exit", "Global", "Ctrl-D"), E = l && p ? p : "Ctrl-C", h = l && u ? u : "Ctrl-D", m = B6((x) => t({ pending: x, keyName: E }), i), d = B6((x) => t({ pending: x, keyName: h }), i), D = de(() => {
    if (a?.()) return;
    m();
  }, [m, a]), S = de(() => {
    d();
  }, [d]);
  return { handleInterrupt: D, handleExit: S, exitState: r };
}
j();
var c = Gt(null), B2 = 1;
function klt(a) {
  let i = w(8), { reserve: o, children: n } = a, r = C(null), { rows: t } = ds(Te()), l;
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
function j2() {
  return be(c);
}
export {
  B2,
  Uxt,
  j2,
  klt,
  ls
};
