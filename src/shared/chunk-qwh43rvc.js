// shared/chunk-qwh43rvc.js — Claude Code 2.1.310 模块 chunk-qwh43rvc.js
import { w } from "../ui/chunk-zqxc4qtb.js";
import { gqt, Nse } from "../auth/profile-explicit.b7t3.js";
import { n, Yt } from "../telemetry/render-glyph-cardinality.7car.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
function qz(H) {
  let y = w(10), { children: r, color: u, bold: m, linkHref: a } = H, o;
  if (y[0] !== r || y[1] !== a) {
    o = [];
    let l = 0;
    for (const i of r.matchAll(gqt)) {
      let x = Nse(i[0]);
      let k = a === void 0 ? x : a(x);
      if (k === void 0) {
        continue;
      }
      if (i.index > l) o.push(r.slice(l, i.index));
      o.push(e(Yt, { url: k, children: k }, i.index)), l = i.index + x.length;
    }
    let s2;
    if (y[3] !== r || y[4] !== l) s2 = r.slice(l), y[3] = r, y[4] = l, y[5] = s2;
    else s2 = y[5];
    o.push(s2);
    y[0] = r, y[1] = a, y[2] = o;
  } else o = y[2];
  let s;
  if (y[6] !== m || y[7] !== u || y[8] !== o) s = e(n, { color: u, bold: m, children: o }), y[6] = m, y[7] = u, y[8] = o, y[9] = s;
  else s = y[9];
  return s;
}
export {
  qz
};
