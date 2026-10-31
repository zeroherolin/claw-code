// darwin/ui/chunk-9e5020d7.js — Claude Code 2.1.310（darwin）模块 chunk-deqjb1y1.js
import { BW } from "../shared/chunk-6dcf946b.js";
import { Ce } from "../shared/chunk-bdaaea45.js";
import { s, qX, Ys } from "../telemetry/render-glyph-cardinality.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { Se, Xt, A, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function Y5({ children: R, lock: o = "always", restartKey: i }) {
  let [w, { isVisible: H }, x] = qX(), { rows: r, columns: c } = Ce(), m = A(null), [t, u] = y({ minHeight: 0, rows: r, columns: c, restartKey: i }), l = o === "always" && (t.rows !== r || t.columns !== c || t.restartKey !== i), p = (o === "always" || !H) && !l, a = A(0), g = Math.max(t.minHeight, a.current), d = Se(BW) !== null;
  return Xt(() => {
    if (!m.current) return;
    let { height: h } = Ys(m.current), n = Math.min(h, r);
    if (l) {
      u({ minHeight: n, rows: r, columns: c, restartKey: i });
      return;
    }
    if (h > g) {
      if (d && o === "offscreen" && !p && n >= t.minHeight && x()) {
        a.current = n;
        return;
      }
      a.current = 0, u((f) => f.minHeight === n ? f : { ...f, minHeight: n });
    }
  }), e(s, { minHeight: p ? g : void 0, ref: w, children: e(s, { ref: m, flexDirection: "column", children: R }) });
}
export {
  Y5
};
