// shared/chunk-2ktb785b.js — Claude Code 2.1.310 模块 chunk-2ktb785b.js
import { w } from "../ui/chunk-zqxc4qtb.js";
import { Ca } from "./action-not-found.ek51.js";
import { q } from "../context/chunk-d05584w8.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
function pt(x) {
  let N = w(7), { action: h, context: k, fallback: K, description: o, parens: t, bold: n, terse: r, format: i } = x, a = Ca(h, k, K), s;
  if (N[0] !== n || N[1] !== a || N[2] !== o || N[3] !== i || N[4] !== t || N[5] !== r) s = e(q, { chord: a, action: o, parens: t, bold: n, terse: r, format: i }), N[0] = n, N[1] = a, N[2] = o, N[3] = i, N[4] = t, N[5] = r, N[6] = s;
  else s = N[6];
  return s;
}
export {
  pt
};
