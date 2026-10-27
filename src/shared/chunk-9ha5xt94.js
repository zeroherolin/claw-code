// shared/chunk-9ha5xt94.js — Claude Code 2.1.310 模块 chunk-9ha5xt94.js
import { w } from "../ui/chunk-zqxc4qtb.js";
import { n } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { r } from "../vendor/react/chunk-f790ajz4.js";
function wb(b) {
  let R = w(7), { children: t, color: o, textColor: x, padded: T, bold: d, wrap: l } = b, e = T ? " " : "";
  const p = x ?? (o ? "inverseText" : void 0);
  let s;
  if (R[0] !== d || R[1] !== t || R[2] !== o || R[3] !== e || R[4] !== p || R[5] !== l) s = r(n, { backgroundColor: o, color: p, bold: d, wrap: l, children: [e, t, e] }), R[0] = d, R[1] = t, R[2] = o, R[3] = e, R[4] = p, R[5] = l, R[6] = s;
  else s = R[6];
  return s;
}
export {
  wb
};
