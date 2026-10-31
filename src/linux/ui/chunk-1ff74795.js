// linux/ui/chunk-1ff74795.js — Claude Code 2.1.310（linux）模块 chunk-q7wvyqpk.js
import { t6 } from "../shell/invalid-type.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { w } from "./chunk-0ed4c357.js";
import { le } from "../shared/chunk-4563156b.js";
import { n, ts, GB } from "../telemetry/render-glyph-cardinality.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
function Ql(E) {
  let d = w(27), { width: F, color: t, char: C, padding: M, title: i, titleAlign: x } = E, o = C === void 0 ? t6 : C, G = M === void 0 ? 0 : M, H = x === void 0 ? "center" : x, { columns: I } = Te(), f = Math.max(0, (F ?? I) - G), D;
  if (d[0] !== t || d[1] !== i) D = i ? e(n, { color: t, dimColor: !t, children: e(ts, { children: i }) }) : null, d[0] = t, d[1] = i, d[2] = D;
  else D = d[2];
  let v = D;
  if (i) {
    let J = le(i) + 2;
    let b = Math.max(0, f - J);
    let s = H === "start" ? Math.min(4, b) : Math.floor(b / 2);
    let k = b - s;
    const c2 = !t;
    let l2;
    if (d[3] !== o || d[4] !== s) l2 = o.repeat(s), d[3] = o, d[4] = s, d[5] = l2;
    else l2 = d[5];
    let h2;
    if (d[6] !== i) h2 = e(n, { dimColor: true, children: e(ts, { children: i }) }), d[6] = i, d[7] = h2;
    else h2 = d[7];
    let p;
    if (d[8] !== o || d[9] !== k) p = o.repeat(k), d[8] = o, d[9] = k, d[10] = p;
    else p = d[10];
    let W;
    if (d[11] !== t || d[12] !== c2 || d[13] !== l2 || d[14] !== h2 || d[15] !== p) W = r(n, { color: t, dimColor: c2, children: [l2, " ", h2, " ", p] }), d[11] = t, d[12] = c2, d[13] = l2, d[14] = h2, d[15] = p, d[16] = W;
    else W = d[16];
    let R;
    if (d[17] !== v || d[18] !== W) R = e(GB, { fallback: v, children: W }), d[17] = v, d[18] = W, d[19] = R;
    else R = d[19];
    return R;
  }
  const c = !t;
  let l;
  if (d[20] !== o || d[21] !== f) l = o.repeat(f), d[20] = o, d[21] = f, d[22] = l;
  else l = d[22];
  let h;
  if (d[23] !== t || d[24] !== c || d[25] !== l) h = e(GB, { children: e(n, { color: t, dimColor: c, children: l }) }), d[23] = t, d[24] = c, d[25] = l, d[26] = h;
  else h = d[26];
  return h;
}
export {
  Ql
};
