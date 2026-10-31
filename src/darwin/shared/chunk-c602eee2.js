// darwin/shared/chunk-c602eee2.js — Claude Code 2.1.310（darwin）模块 chunk-2ktb785b.js
import { w } from "../ui/chunk-0ed4c357.js";
import { Ca } from "./action-not-found.e210.js";
import { q } from "../context/chunk-e2302e3b.js";
import { e } from "../vendor/react/chunk-40234545.js";
function pt(x) {
  let N = w(7), { action: h, context: k, fallback: K, description: o, parens: t, bold: n, terse: r, format: i } = x, a = Ca(h, k, K), s;
  if (N[0] !== n || N[1] !== a || N[2] !== o || N[3] !== i || N[4] !== t || N[5] !== r) s = e(q, { chord: a, action: o, parens: t, bold: n, terse: r, format: i }), N[0] = n, N[1] = a, N[2] = o, N[3] = i, N[4] = t, N[5] = r, N[6] = s;
  else s = N[6];
  return s;
}
export {
  pt
};
