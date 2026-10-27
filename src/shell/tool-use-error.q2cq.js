// shell/tool-use-error.q2cq.js — Claude Code 2.1.310 模块 chunk-q2cqn4sm.js
import { $t } from "../shared/chunk-j79dwkaq.js";
import { uP } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { w } from "../ui/chunk-zqxc4qtb.js";
import { s, n } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { nS } from "../ui/chunk-d5gw4nh1.js";
import { Ge } from "../ui/aria-hidden.by9c.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { fi } from "../shared/chunk-2m7ekyg2.js";
import { X_t, fTe } from "../shared/chunk-es97697v.js";
function flt(c) {
  return c.replace(/<sandbox_violations>[\s\S]*?<\/sandbox_violations>/g, "");
}
var U = /^\s*<tool_use_error>([\s\S]*)<\/tool_use_error>\s*$/i, V = /<\/?tool_use_error\b/i;
function S(c) {
  let o = c.flatMap((t) => {
    if (!fTe(t)) return [];
    let d = uP(t.text), a = U.exec(d)?.[1];
    return [a !== void 0 && !V.test(a) ? a : d];
  }).join(`
`);
  return o.trim() === "" ? void 0 : o;
}
function Eg(c) {
  let u = w(28), { result: o, verbose: t, verbatim: d } = c, a = d === void 0 ? false : d, v, _, g, T, R, y, O;
  if (u[0] !== o || u[1] !== a || u[2] !== t) {
    let l;
    let h = Array.isArray(o);
    let m2;
    if (u[10] !== h || u[11] !== o) m2 = typeof o === "string" ? o : h ? S(o) : void 0, u[10] = h, u[11] = o, u[12] = m2;
    else m2 = u[12];
    let k = m2;
    let j = a || h;
    if (k === void 0) l = "Tool execution failed";
    else {
      let p = (j ? uP(k) : flt(uP(fi(k, "tool_use_error") ?? k)).replace(/<\/?error>/g, "")).trim();
      if (!t && !j && p.startsWith("InputValidationError: ")) l = "Invalid tool parameters";
      else if (p.startsWith("Error: ") || p.startsWith("Cancelled: ")) l = p;
      else l = `Error: ${p}`;
    }
    T = $t(l, `
`) + 1 - X_t;
    g = Ge;
    _ = s;
    O = "column";
    v = n;
    R = "error";
    y = t ? l : l.split(`
`).slice(0, X_t).join(`
`);
    u[0] = o, u[1] = a, u[2] = t, u[3] = v, u[4] = _, u[5] = g, u[6] = T, u[7] = R, u[8] = y, u[9] = O;
  } else v = u[3], _ = u[4], g = u[5], T = u[6], R = u[7], y = u[8], O = u[9];
  let m;
  if (u[13] !== v || u[14] !== R || u[15] !== y) m = e(v, { color: R, children: y }), u[13] = v, u[14] = R, u[15] = y, u[16] = m;
  else m = u[16];
  let I;
  if (u[17] !== T || u[18] !== t) I = !t && e(nS, { count: T, expandable: true }), u[17] = T, u[18] = t, u[19] = I;
  else I = u[19];
  let L;
  if (u[20] !== _ || u[21] !== O || u[22] !== m || u[23] !== I) L = r(_, { flexDirection: O, children: [m, I] }), u[20] = _, u[21] = O, u[22] = m, u[23] = I, u[24] = L;
  else L = u[24];
  let B;
  if (u[25] !== g || u[26] !== L) B = e(g, { children: L }), u[25] = g, u[26] = L, u[27] = B;
  else B = u[27];
  return B;
}
export {
  Eg,
  flt
};
