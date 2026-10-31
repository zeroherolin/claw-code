// linux/ui/chunk-b94863e8.js — Claude Code 2.1.310（linux）模块 chunk-3czkgprk.js
import { w } from "./chunk-0ed4c357.js";
import { s, n } from "../telemetry/render-glyph-cardinality.js";
import { Ge } from "./aria-hidden.8741.js";
import { e, r } from "../vendor/react/chunk-40234545.js";
import { en } from "../shared/chunk-4ac8e96b.js";
function Qpr() {
  return e(Ge, { height: 1, children: e(n, { dimColor: true, children: "Fetching…" }) });
}
function Sxt(g) {
  let u = w(7), { bytes: a, status: p } = g, m;
  if (u[0] !== a) m = en(a), u[0] = a, u[1] = m;
  else m = u[1];
  let t;
  if (u[2] !== m) t = e(n, { bold: true, children: m }), u[2] = m, u[3] = t;
  else t = u[3];
  const o = p !== void 0 && ` (${p})`;
  let c;
  if (u[4] !== t || u[5] !== o) c = e(Ge, { height: 1, children: r(n, { children: ["Received ", t, o] }) }), u[4] = t, u[5] = o, u[6] = c;
  else c = u[6];
  return c;
}
function ius({ bytes: g, code: a, codeText: p, result: u }, m, { verbose: t }) {
  let o = e(Sxt, { bytes: g, status: `${a} ${p}` });
  if (t) return r(s, { flexDirection: "column", children: [o, e(s, { flexDirection: "column", children: e(n, { children: u }) })] });
  return o;
}
export {
  Qpr,
  Sxt,
  ius
};
