// linux/shell/tool-use-error.js — Claude Code 2.1.310（linux）模块 chunk-r9bthft1.js
import { Ft } from "../shared/chunk-d2c47492.js";
import { lP } from "../fs/gitlab-runner-authentication-token.js";
import { w } from "../ui/chunk-0ed4c357.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { tb } from "../ui/chunk-4425ad7b.js";
import { Ge } from "../ui/aria-hidden.8741.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { pi } from "../shared/chunk-1b66b4d6.js";
import { Y_t, uAe } from "../shared/chunk-b6642a2b.js";
function llt(c) {
  return c.replace(/<sandbox_violations>[\s\S]*?<\/sandbox_violations>/g, "");
}
var U = /^\s*<tool_use_error>([\s\S]*)<\/tool_use_error>\s*$/i, V = /<\/?tool_use_error\b/i;
function S(c) {
  let o = c.flatMap((t) => {
    if (!uAe(t)) return [];
    let d = lP(t.text), a = U.exec(d)?.[1];
    return [a !== void 0 && !V.test(a) ? a : d];
  }).join(`
`);
  return o.trim() === "" ? void 0 : o;
}
function vg(c) {
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
      let p = (j ? lP(k) : llt(lP(pi(k, "tool_use_error") ?? k)).replace(/<\/?error>/g, "")).trim();
      if (!t && !j && p.startsWith("InputValidationError: ")) l = "Invalid tool parameters";
      else if (p.startsWith("Error: ") || p.startsWith("Cancelled: ")) l = p;
      else l = `Error: ${p}`;
    }
    T = Ft(l, `
`) + 1 - Y_t;
    g = Ge;
    _ = s;
    O = "column";
    v = n;
    R = "error";
    y = t ? l : l.split(`
`).slice(0, Y_t).join(`
`);
    u[0] = o, u[1] = a, u[2] = t, u[3] = v, u[4] = _, u[5] = g, u[6] = T, u[7] = R, u[8] = y, u[9] = O;
  } else v = u[3], _ = u[4], g = u[5], T = u[6], R = u[7], y = u[8], O = u[9];
  let m;
  if (u[13] !== v || u[14] !== R || u[15] !== y) m = e(v, { color: R, children: y }), u[13] = v, u[14] = R, u[15] = y, u[16] = m;
  else m = u[16];
  let I;
  if (u[17] !== T || u[18] !== t) I = !t && e(tb, { count: T, expandable: true }), u[17] = T, u[18] = t, u[19] = I;
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
  llt,
  vg
};
