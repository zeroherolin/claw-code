// linux/ui/chunk-8231a0ec.js — Claude Code 2.1.310（linux）模块 chunk-3jdct3h7.js
import { Mm } from "../terminal/aria-preserve-whitespace.js";
import { un } from "../fs/async-hooks.7959.js";
import { s, n, UX } from "../telemetry/render-glyph-cardinality.js";
import { w } from "./chunk-0ed4c357.js";
import { qq } from "../shared/chunk-36233614.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { be, Xt, Qh, C, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function b() {
  let i = be(qq), [r, t, o, l] = UX(), f = l() ?? t.isVisible;
  return [r, f || i, o];
}
function NR({ children: i }) {
  let r = be(Mm), [t, o, l] = b(), f = C(i), [, m] = Qh((d) => d + 1, 0), u = !o;
  if (!u) f.current = i;
  let a = r?.columns, c = r?.rows;
  return Xt(() => {
    if (u && l()) m();
  }, [a, c, u, l]), e(s, { ref: t, children: f.current });
}
function wwe(i) {
  let [r, t] = b(), o = C(i);
  if (t) o.current = i;
  return [r, o.current];
}
function vpe(i) {
  let o = w(10), { elapsedTimeSeconds: r, timeoutMs: t } = i;
  if (r === void 0 && !t) {
    return null;
  }
  let l;
  if (o[0] !== t) l = t ? un(t, { hideTrailingZeros: true }) : void 0, o[0] = t, o[1] = l;
  else l = o[1];
  let f = l;
  if (r === void 0) {
    const m2 = `(timeout ${f})`;
    let u2;
    if (o[2] !== m2) u2 = e(n, { dimColor: true, children: m2 }), o[2] = m2, o[3] = u2;
    else u2 = o[3];
    return u2;
  }
  const m = r * 1e3;
  let u;
  if (o[4] !== m) u = un(m), o[4] = m, o[5] = u;
  else u = o[5];
  let a = u;
  if (f) {
    const c2 = `(${a} · timeout ${f})`;
    let d2;
    if (o[6] !== c2) d2 = e(n, { dimColor: true, children: c2 }), o[6] = c2, o[7] = d2;
    else d2 = o[7];
    return d2;
  }
  const c = `(${a})`;
  let d;
  if (o[8] !== c) d = e(n, { dimColor: true, children: c }), o[8] = c, o[9] = d;
  else d = o[9];
  return d;
}
export {
  NR,
  vpe,
  wwe
};
