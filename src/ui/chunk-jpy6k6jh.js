// ui/chunk-jpy6k6jh.js — Claude Code 2.1.310 模块 chunk-jpy6k6jh.js
import { w } from "./chunk-zqxc4qtb.js";
import { s, n } from "../vendor/yoga/render-glyph-cardinality.7car.js";
import { Ge } from "./aria-hidden.by9c.js";
import { e, r } from "../vendor/react/chunk-f790ajz4.js";
import { en } from "../shared/chunk-qf4h7pyg.js";
function mmr() {
  return e(Ge, { height: 1, children: e(n, { dimColor: true, children: "Fetching…" }) });
}
function xxt(g) {
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
function Nus({ bytes: g, code: a, codeText: p, result: u }, m, { verbose: t }) {
  let o = e(xxt, { bytes: g, status: `${a} ${p}` });
  if (t) return r(s, { flexDirection: "column", children: [o, e(s, { flexDirection: "column", children: e(n, { children: u }) })] });
  return o;
}
export {
  Nus,
  mmr,
  xxt
};
