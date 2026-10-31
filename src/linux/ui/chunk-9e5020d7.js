// linux/ui/chunk-9e5020d7.js — Claude Code 2.1.310（linux）模块 chunk-j4ng5v52.js
import { OW } from "../shared/chunk-6dcf946b.js";
import { Te } from "../shared/chunk-bdaaea45.js";
import { s, UX, Ys } from "../telemetry/render-glyph-cardinality.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { be, Xt, C, y, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function $6({ children: R, lock: o = "always", restartKey: i }) {
  let [w, { isVisible: H }, x] = UX(), { rows: r, columns: c } = Te(), m = C(null), [t, u] = y({ minHeight: 0, rows: r, columns: c, restartKey: i }), l = o === "always" && (t.rows !== r || t.columns !== c || t.restartKey !== i), p = (o === "always" || !H) && !l, a = C(0), g = Math.max(t.minHeight, a.current), d = be(OW) !== null;
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
  $6
};
